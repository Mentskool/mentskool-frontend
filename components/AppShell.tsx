"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { WorkspaceHeader } from "./WorkspaceHeader";
import { Footer } from "./Footer";
import { EmailVerificationBanner } from "./EmailVerificationBanner";

export const AppShell: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const { user, isAuthenticated, isLoading } = useAuthStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isAuthPage =
    pathname === "/login" ||
    pathname === "/signup" ||
    pathname === "/forgot-password" ||
    pathname === "/verify-email" ||
    pathname === "/mentor/onboarding";

  const isHome = pathname === "/";

  // Workspace routes that should display the dashboard sidebar when logged in
  const isMentorsExplore =
    pathname === "/mentors" || pathname.startsWith("/mentors/");
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

  // Route protection: client-side guards for private workspaces
  useEffect(() => {
    if (mounted && !isLoading) {
      const isPrivateMentorRoute =
        (pathname === "/mentor" || pathname.startsWith("/mentor/")) &&
        pathname !== "/mentor/onboarding";
      if (
        !isAuthenticated &&
        !isMentorsExplore &&
        (pathname.startsWith("/dashboard") || isPrivateMentorRoute)
      ) {
        router.replace("/login");
      }
    }
  }, [mounted, isLoading, isAuthenticated, isMentorsExplore, pathname, router]);

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

  const isFullWidthPublic =
    isHome ||
    pathname === "/terms" ||
    pathname === "/privacy" ||
    pathname === "/refund-policy" ||
    pathname === "/contact";

  // During SSR or initial hydration, render default shell to avoid mismatch
  if (!mounted) {
    return (
      <div className={`min-h-screen flex flex-col ${isHome ? "bg-[#EBF3FB]" : "bg-[#F8FAFC]"}`}>
        <Navbar />
        <main className={`flex-1 w-full ${isFullWidthPublic ? "" : "max-w-6xl mx-auto px-4 sm:px-6 py-8"}`}>
          {children}
        </main>
        <Footer />
      </div>
    );
  }

  const isMessagesPage = pathname === "/messages";

  // Authenticated workspace: EmailVerificationBanner + Left vertical sidebar + top WorkspaceHeader + main content area
  if (isAuthenticated && isWorkspaceRoute) {
    return (
      <div
        className={`bg-[#F8FAFC] flex flex-col ${
          isMessagesPage ? "h-[100dvh] max-h-[100dvh] overflow-hidden" : "min-h-screen"
        }`}
      >
        <EmailVerificationBanner />
        <div
          className={`flex-1 min-w-0 flex flex-col md:flex-row ${
            isMessagesPage ? "min-h-0 overflow-hidden" : ""
          }`}
        >
          <Sidebar />
          <div
            className={`flex-1 min-w-0 flex flex-col ${
              isMessagesPage ? "h-full min-h-0 overflow-hidden" : ""
            }`}
          >
            <WorkspaceHeader />
            <main
              className={`flex-1 min-w-0 w-full ${
                isMessagesPage
                  ? "p-2 sm:p-3 md:p-4 flex flex-col min-h-0 overflow-hidden max-w-7xl mx-auto"
                  : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8"
              }`}
            >
              {children}
            </main>
          </div>
        </div>
      </div>
    );
  }

  // Marketing & Public layout (Home, Mentors explore, etc.): Clean top navbar + full-width content
  return (
    <div className={`min-h-screen flex flex-col ${isHome ? "bg-[#EBF3FB]" : "bg-[#F8FAFC]"}`}>
      <EmailVerificationBanner />
      <Navbar />
      <main className={`flex-1 w-full ${isFullWidthPublic ? "" : "max-w-7xl mx-auto px-4 sm:px-6 py-8"}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};
