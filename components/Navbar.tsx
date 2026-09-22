"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import { Button } from "./ui/Button";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user, isAuthenticated, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  const navItemClass = (path: string) => {
    const isActive = pathname === path || pathname.startsWith(`${path}/`);
    return `text-sm font-medium transition-colors whitespace-nowrap ${
      isActive
        ? "text-brand border-b-2 border-brand pb-4 -mb-[18px]"
        : "text-ink-muted hover:text-ink pb-4 -mb-[18px]"
    }`;
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-mist">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo & Brand */}
        <div className="flex items-center gap-6 lg:gap-8 overflow-x-auto no-scrollbar">
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <span className="w-7 h-7 rounded-[6px] bg-brand text-white flex items-center justify-center font-display font-bold text-sm shadow-none">
              M
            </span>
            <span className="font-display font-bold text-lg text-ink tracking-tight">
              Mentskool
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="flex items-center gap-4 lg:gap-6 overflow-x-auto py-2">
            {isAuthenticated ? (
              user?.role === "MENTOR" ? (
                <>
                  <Link href="/mentor/students" className={navItemClass("/mentor/students")}>
                    Students
                  </Link>
                  <Link href="/mentor/tasks" className={navItemClass("/mentor/tasks")}>
                    Tasks
                  </Link>
                  <Link href="/cohort" className={navItemClass("/cohort")}>
                    Cohort
                  </Link>
                  <Link href="/messages" className={navItemClass("/messages")}>
                    Messages
                  </Link>
                  <Link href="/schedule" className={navItemClass("/schedule")}>
                    Schedule
                  </Link>
                  <Link href="/quizzes" className={navItemClass("/quizzes")}>
                    Quizzes
                  </Link>
                  <Link href="/mentor/profile" className={navItemClass("/mentor/profile")}>
                    Edit Profile
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/dashboard/tasks" className={navItemClass("/dashboard/tasks")}>
                    My Tasks
                  </Link>
                  <Link href="/dashboard/efficiency" className={navItemClass("/dashboard/efficiency")}>
                    Efficiency
                  </Link>
                  <Link href="/cohort" className={navItemClass("/cohort")}>
                    Cohort
                  </Link>
                  <Link href="/messages" className={navItemClass("/messages")}>
                    Messages
                  </Link>
                  <Link href="/schedule" className={navItemClass("/schedule")}>
                    Schedule
                  </Link>
                  <Link href="/quizzes" className={navItemClass("/quizzes")}>
                    Quizzes
                  </Link>
                </>
              )
            ) : (
              <>
                <Link href="/mentors" className={navItemClass("/mentors")}>
                  Explore Mentors
                </Link>
                <Link href="/quizzes" className={navItemClass("/quizzes")}>
                  Quizzes
                </Link>
              </>
            )}
          </nav>
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {isAuthenticated && user ? (
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-semibold text-ink leading-tight">
                  {user.full_name}
                </p>
                <span className="text-[10px] uppercase font-bold tracking-wider text-moss">
                  {user.role}
                </span>
              </div>
              <Button size="sm" variant="secondary" onClick={handleLogout}>
                Sign Out
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/login">
                <Button size="sm" variant="ghost">
                  Sign In
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="sm" variant="primary">
                  Get Started
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
