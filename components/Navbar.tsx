"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import { Button } from "./ui/Button";
import { ArrowLeft } from "lucide-react";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user, isAuthenticated, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  const isExploreMentorsPage = pathname === "/mentors" || pathname.startsWith("/mentors/");

  const navItemClass = (path: string) => {
    const isActive = pathname === path || (path !== "/" && pathname.startsWith(`${path}/`));
    return `text-xs font-semibold px-3 py-1.5 rounded-control transition-all whitespace-nowrap ${
      isActive
        ? "bg-brand/10 text-brand font-bold"
        : "text-ink-muted hover:text-ink hover:bg-mist/40"
    }`;
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-mist shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo & Brand */}
        <div className="flex items-center gap-6 lg:gap-8">
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
            <span className="w-8 h-8 rounded-control bg-brand text-white flex items-center justify-center font-display font-bold text-sm shadow-soft group-hover:bg-brand/90 transition-colors">
              M
            </span>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base text-ink tracking-tight leading-tight">
                Mentskool
              </span>
              <span className="text-[10px] text-ink-faint font-medium hidden sm:inline leading-none">
                Find Your Perfect Mentor
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="flex items-center gap-2 overflow-x-auto py-1 no-scrollbar">
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
                </>
              )
            ) : (
              <>
                <Link href="/mentors" className={navItemClass("/mentors")}>
                  Explore Mentors
                </Link>
              </>
            )}
          </nav>
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-2.5 flex-shrink-0">
          {isAuthenticated && user ? (
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-semibold text-ink leading-tight">
                  {user.full_name}
                </p>
                <span className="text-[10px] uppercase font-bold tracking-wider text-moss">
                  {user.role}
                </span>
              </div>
              <Button size="sm" variant="secondary" onClick={handleLogout} className="text-xs font-medium">
                Sign Out
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              {isExploreMentorsPage ? (
                <Link href="/">
                  <Button
                    size="sm"
                    variant="primary"
                    className="bg-brand hover:bg-brand/90 text-white font-bold text-xs flex items-center gap-1.5 px-3.5 shadow-soft"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back to Home</span>
                  </Button>
                </Link>
              ) : (
                <Link href="/mentors">
                  <Button size="sm" variant="secondary" className="hidden sm:inline-flex text-xs font-semibold text-ink">
                    Explore Mentors
                  </Button>
                </Link>
              )}
              <Link href="/login">
                <Button size="sm" variant="ghost" className="text-xs font-semibold text-ink-muted hover:text-ink">
                  Sign In
                </Button>
              </Link>
              <Link href="/signup?role=MENTOR">
                <Button
                  size="sm"
                  variant={isExploreMentorsPage ? "secondary" : "primary"}
                  className="text-xs font-bold"
                >
                  Become a Mentor
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
