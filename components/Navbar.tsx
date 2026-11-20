"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "./ui/Button";
import {
  ArrowRight,
  LayoutDashboard,
  Menu,
  X,
  Video,
  Users,
  GraduationCap,
  Sparkles,
  LogIn,
  LogOut,
  Shield,
} from "lucide-react";
import { BrandLogo } from "./BrandLogo";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user, isAuthenticated } = useAuthStore();
  const { logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close menu automatically on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };

  const dashboardHref =
    user?.role === "ADMIN"
      ? "/admin"
      : user?.role === "MENTOR"
      ? "/mentor/students"
      : "/dashboard/tasks";

  return (
    <>
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
            <nav className="hidden sm:flex items-center gap-1.5">
              <Link
                href="/mentors"
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors ${
                  pathname === "/mentors"
                    ? "text-blue-600 bg-blue-50"
                    : "text-ink-muted hover:text-ink hover:bg-mist/40"
                }`}
              >
                Cohorts
              </Link>
              <Link
                href="/book-call"
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
                  pathname === "/book-call"
                    ? "text-blue-600 bg-blue-50"
                    : "text-ink-muted hover:text-ink hover:bg-mist/40"
                }`}
              >
                <span>Book 1:1 Call</span>
                <span className="text-[10px] bg-blue-100 text-blue-700 font-bold px-1.5 py-0.5 rounded-full">
                  New
                </span>
              </Link>
              <Link
                href="/mentors"
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors hidden md:inline-flex ${
                  pathname === "/mentors"
                    ? "text-blue-600 bg-blue-50"
                    : "text-ink-muted hover:text-ink hover:bg-mist/40"
                }`}
              >
                Explore Mentors
              </Link>
              {user?.role === "ADMIN" && (
                <Link
                  href="/admin"
                  className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
                    pathname.startsWith("/admin")
                      ? "text-indigo-600 bg-indigo-50 border border-indigo-200"
                      : "text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50/60"
                  }`}
                >
                  <span>Admin Console</span>
                </Link>
              )}
            </nav>
          </div>

          {/* Desktop User Actions */}
          <div className="hidden sm:flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
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
                    <span>Dashboard</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </Link>

                {/* User Identity info */}
                <div className="text-right">
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
                <Link href="/signup?role=STUDENT">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="text-xs font-semibold text-blue-700 bg-blue-50/80 hover:bg-blue-100/90 border-blue-200/80 px-3 transition-colors shadow-2xs"
                  >
                    Join as Student
                  </Button>
                </Link>
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
                    Become a Mentor
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Right Controls: Quick Action Pill + Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            {!isAuthenticated ? (
              <Link
                href="/book-call"
                className="text-[11px] font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200/80 px-2.5 py-1.5 rounded-lg flex items-center gap-1 active:scale-95 transition-all"
              >
                <Video className="w-3.5 h-3.5 text-blue-600" />
                <span>Book 1:1</span>
              </Link>
            ) : (
              <Link
                href={dashboardHref}
                className="text-[11px] font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200/80 px-2.5 py-1.5 rounded-lg flex items-center gap-1 active:scale-95 transition-all"
              >
                <LayoutDashboard className="w-3.5 h-3.5 text-blue-600" />
                <span>Dashboard</span>
              </Link>
            )}

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
              className="p-1.5 rounded-xl border border-slate-200/90 bg-white/80 hover:bg-slate-100 text-slate-700 active:scale-95 transition-all"
            >
              {mobileOpen ? (
                <X className="w-5 h-5 text-slate-800" />
              ) : (
                <Menu className="w-5 h-5 text-slate-800" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu Modal */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 sm:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="fixed inset-y-0 right-0 w-[82%] max-w-sm bg-white shadow-2xl flex flex-col justify-between overflow-y-auto z-10 animate-in slide-in-from-right duration-200">
            {/* Drawer Header */}
            <div>
              <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                <BrandLogo href="/" size="sm" />
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* User Profile Card if logged in */}
              {isAuthenticated && user && (
                <div className="p-4 bg-gradient-to-br from-blue-50/70 to-indigo-50/40 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-bold text-sm flex items-center justify-center shadow-soft">
                      {user.full_name?.charAt(0)?.toUpperCase() || "U"}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-slate-900 truncate">
                        {user.full_name}
                      </p>
                      <p className="text-xs text-slate-500 truncate">
                        {user.email}
                      </p>
                    </div>
                    <span className="text-[10px] font-bold tracking-wider uppercase text-blue-700 bg-white border border-blue-200 px-2 py-0.5 rounded-md">
                      {user.role}
                    </span>
                  </div>
                </div>
              )}

              {/* Nav Items */}
              <div className="p-4 space-y-1">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">
                  Navigation
                </div>

                <Link
                  href="/book-call"
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    pathname === "/book-call"
                      ? "bg-blue-50 text-blue-700 font-bold"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Video className="w-4 h-4 text-blue-600" />
                    <span>Book 1:1 Call</span>
                  </div>
                  <span className="text-[10px] font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                    New
                  </span>
                </Link>

                <Link
                  href="/mentors"
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    pathname === "/mentors"
                      ? "bg-blue-50 text-blue-700 font-bold"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <Users className="w-4 h-4 text-blue-600" />
                  <span>Explore Mentors &amp; Cohorts</span>
                </Link>

                {user?.role === "ADMIN" && (
                  <Link
                    href="/admin"
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                      pathname.startsWith("/admin")
                        ? "bg-indigo-50 text-indigo-700 font-bold"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <Shield className="w-4 h-4 text-indigo-600" />
                    <span>Admin Console</span>
                  </Link>
                )}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="p-4 border-t border-slate-100 bg-slate-50/50 space-y-2">
              {isAuthenticated ? (
                <>
                  <Link
                    href={dashboardHref}
                    onClick={() => setMobileOpen(false)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-soft transition-colors"
                  >
                    <LayoutDashboard className="w-4 h-4" />
                    <span>Go to Dashboard</span>
                  </Link>
                  <button
                    onClick={() => {
                      setMobileOpen(false);
                      handleLogout();
                    }}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-slate-200 text-slate-700 hover:bg-white font-semibold text-sm transition-colors"
                  >
                    <LogOut className="w-4 h-4 text-slate-500" />
                    <span>Sign Out</span>
                  </button>
                </>
              ) : (
                <>
                  {/* Join as Student */}
                  <Link
                    href="/signup?role=STUDENT"
                    onClick={() => setMobileOpen(false)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 hover:bg-blue-100 font-bold text-sm transition-colors"
                  >
                    <GraduationCap className="w-4 h-4 text-blue-600" />
                    <span>Join as Student</span>
                  </Link>

                  {/* Become a Mentor */}
                  <Link
                    href="/signup?role=MENTOR"
                    onClick={() => setMobileOpen(false)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-soft transition-colors"
                  >
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>Become a Mentor</span>
                  </Link>

                  {/* Sign In */}
                  <Link
                    href="/login"
                    onClick={() => setMobileOpen(false)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-slate-200 text-slate-700 hover:bg-white font-semibold text-sm transition-colors"
                  >
                    <LogIn className="w-4 h-4 text-slate-500" />
                    <span>Sign In</span>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
