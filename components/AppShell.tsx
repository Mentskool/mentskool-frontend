"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

export const AppShell: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const { user, isAuthenticated } = useAuthStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isAuthPage =
    pathname === "/login" ||
    pathname === "/signup" ||
    pathname === "/mentor/onboarding";

  const isHome = pathname === "/";

  // Workspace routes that should display the dashboard sidebar when logged in
  const isMentorsExplore = pathname === "/mentors" || pathname.startsWith("/mentors/");
  const isWorkspaceRoute =
    !isMentorsExplore &&
    !pathname.startsWith("/admin") &&
    (pathname.startsWith("/dashboard") ||
      pathname.startsWith("/mentor/") ||
      pathname === "/mentor" ||
      pathname === "/cohort" ||
      pathname === "/messages" ||
      pathname === "/schedule" ||
      pathname.startsWith("/quizzes"));

  // Admins do not participate in student/mentor workspaces: redirect to Admin Console
  useEffect(() => {
    if (mounted && isAuthenticated && user?.role === "ADMIN" && isWorkspaceRoute) {
      router.replace("/admin/mentors");
    }
  }, [mounted, isAuthenticated, user, isWorkspaceRoute, router]);

  // Dedicated full-screen layout for authentication pages (no sidebar, no navbar)
  if (isAuthPage) {
    return (
      <div className="min-h-screen flex flex-col bg-paper">
        {children}
      </div>
    );
  }

  // During SSR or initial hydration, render default shell to avoid mismatch
  if (!mounted) {
    return (
      <div className={`min-h-screen flex flex-col ${isHome ? "bg-[#EBF3FB]" : "bg-[#F8FAFC]"}`}>
        <Navbar />
        <main className={`flex-1 w-full ${isHome ? "" : "max-w-6xl mx-auto px-4 sm:px-6 py-8"}`}>
          {children}
        </main>
      </div>
    );
  }


  const isMessagesPage = pathname === "/messages";

  // Authenticated workspace: Left vertical sidebar + main content area
  if (isAuthenticated && isWorkspaceRoute) {
    return (
      <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-[#EBF3FB]/70 via-[#F1F6FB] to-[#F8FAFC]">
        <Sidebar />
        <main
          className={`flex-1 min-w-0 w-full max-w-7xl mx-auto ${
            isMessagesPage
              ? "p-2 sm:p-4 md:p-6 flex flex-col h-[calc(100dvh-58px)] md:h-screen"
              : "px-4 sm:px-6 lg:px-8 py-8"
          }`}
        >
          {children}
        </main>
      </div>
    );
  }

  // Marketing & Public layout (Home, Mentors explore, etc.): Clean top navbar + full-width content
  return (
    <div className={`min-h-screen flex flex-col ${isHome ? "bg-[#EBF3FB]" : "bg-[#F8FAFC]"}`}>
      <Navbar />
      <main className={`flex-1 w-full ${isHome ? "" : "max-w-7xl mx-auto px-4 sm:px-6 py-8"}`}>
        {children}
      </main>
    </div>
  );
};
