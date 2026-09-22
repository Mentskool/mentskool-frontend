"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

export const AppShell: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const pathname = usePathname();
  const { isAuthenticated } = useAuthStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isAuthPage = pathname === "/login" || pathname === "/signup";

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
      <div className="min-h-screen flex flex-col bg-paper">
        <Navbar />
        <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-8">
          {children}
        </main>
      </div>
    );
  }

  // Authenticated workspace: Left vertical sidebar + main content area
  if (isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col md:flex-row bg-paper">
        <Sidebar />
        <main className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8 py-8 w-full max-w-7xl mx-auto">
          {children}
        </main>
      </div>
    );
  }

  // Public / Guest layout: Clean top navbar + centered content
  return (
    <div className="min-h-screen flex flex-col bg-paper">
      <Navbar />
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-8">
        {children}
      </main>
    </div>
  );
};
