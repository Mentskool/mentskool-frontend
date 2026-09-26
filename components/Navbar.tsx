"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import { Button } from "./ui/Button";
import { ArrowLeft, ArrowRight, LayoutDashboard } from "lucide-react";
import { BrandLogo } from "./BrandLogo";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user, isAuthenticated, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  const isExploreMentorsPage = pathname === "/mentors" || pathname.startsWith("/mentors/");

  const dashboardHref =
    user?.role === "ADMIN"
      ? "/admin/mentors"
      : user?.role === "MENTOR"
      ? "/mentor/students"
      : "/dashboard/tasks";

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-200 ${
        pathname === "/"
          ? "bg-[#EBF3FB]/85 backdrop-blur-md border-b border-blue-900/5 shadow-soft"
          : "bg-white/95 backdrop-blur-md border-b border-mist shadow-soft"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo & Brand */}
        <div className="flex items-center gap-4 lg:gap-8 flex-shrink-0">
          <BrandLogo href="/" size="md" />

          {/* Navigation Links for Public Pages */}
          <nav className="hidden sm:flex items-center gap-3">
            {isExploreMentorsPage ? (
              <Link
                href="/"
                className="text-xs font-semibold text-ink-muted hover:text-ink px-3 py-1.5 rounded-lg hover:bg-mist/40 transition-colors"
              >
                Home
              </Link>
            ) : (
              <Link
                href="/mentors"
                className="text-xs font-semibold text-ink-muted hover:text-ink px-3 py-1.5 rounded-lg hover:bg-mist/40 transition-colors"
              >
                Explore Mentors
              </Link>
            )}
          </nav>
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
          {isAuthenticated && user ? (
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Primary Dashboard Button */}
              <Link href={dashboardHref}>
                <Button
                  size="sm"
                  variant="primary"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-3 sm:px-4 py-2 shadow-soft rounded-xl flex items-center gap-1.5"
                >
                  <LayoutDashboard className="w-3.5 h-3.5" />
                  <span className="hidden xs:inline sm:inline">Dashboard</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </Link>

              {/* User Identity info */}
              <div className="text-right hidden sm:block">
                <p className="text-xs font-semibold text-ink leading-tight">
                  {user.full_name}
                </p>
                <span className="text-[10px] uppercase font-bold tracking-wider text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">
                  {user.role}
                </span>
              </div>

              {/* Sign Out Button */}
              <Button
                size="sm"
                variant="secondary"
                onClick={handleLogout}
                className="text-xs font-medium text-ink-muted hover:text-ink border-mist px-2.5 sm:px-3"
              >
                Sign Out
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 sm:gap-2">
              {isExploreMentorsPage ? (
                <Link href="/" className="hidden sm:inline-flex">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="text-ink font-semibold text-xs flex items-center gap-1.5 px-3 border-mist"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back to Home</span>
                  </Button>
                </Link>
              ) : (
                <Link href="/mentors" className="hidden sm:inline-flex">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="text-xs font-semibold text-ink border-mist px-3"
                  >
                    Explore Mentors
                  </Button>
                </Link>
              )}
              <Link href="/login">
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-xs font-semibold text-ink-muted hover:text-ink px-2.5 py-1.5"
                >
                  Sign In
                </Button>
              </Link>
              <Link href="/signup?role=MENTOR">
                <Button
                  size="sm"
                  variant="primary"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-soft px-3 py-1.5 whitespace-nowrap"
                >
                  <span className="hidden sm:inline">Become a Mentor</span>
                  <span className="sm:hidden">Join Mentor</span>
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
