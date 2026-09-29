"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import { useAuth } from "@/hooks/useAuth";
import {
  CheckSquare,
  BarChart3,
  Users,
  MessageSquare,
  Calendar,
  BookOpen,
  Search,
  UserCheck,
  Settings,
  LogOut,
  Menu,
  X,
  Compass,
} from "lucide-react";

import { BrandLogo } from "./BrandLogo";

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const STUDENT_NAV_ITEMS: NavItem[] = [
  { label: "My Tasks", href: "/dashboard/tasks", icon: CheckSquare },
  { label: "Efficiency", href: "/dashboard/efficiency", icon: BarChart3 },
  { label: "Cohort", href: "/cohort", icon: Users },
  { label: "Messages", href: "/messages", icon: MessageSquare },
  { label: "Schedule", href: "/schedule", icon: Calendar },
  { label: "Quizzes", href: "/quizzes", icon: BookOpen },
  { label: "My Profile", href: "/dashboard/profile", icon: Settings },
];

const MENTOR_NAV_ITEMS: NavItem[] = [
  { label: "Students", href: "/mentor/students", icon: UserCheck },
  { label: "Tasks", href: "/mentor/tasks", icon: CheckSquare },
  { label: "Cohort", href: "/cohort", icon: Users },
  { label: "Messages", href: "/messages", icon: MessageSquare },
  { label: "Schedule", href: "/schedule", icon: Calendar },
  { label: "Quizzes", href: "/quizzes", icon: BookOpen },
  { label: "Edit Profile", href: "/mentor/profile", icon: Settings },
];

const ADMIN_NAV_ITEMS: NavItem[] = [
  { label: "Mentor Verifications", href: "/admin/mentors", icon: UserCheck },
  { label: "Explore Mentors", href: "/mentors", icon: Search },
];

export const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useAuthStore();
  const { logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };

  const navItems =
    user?.role === "ADMIN"
      ? ADMIN_NAV_ITEMS
      : user?.role === "MENTOR"
      ? MENTOR_NAV_ITEMS
      : STUDENT_NAV_ITEMS;

  const renderNavLinks = (onItemClick?: () => void) => (
    <div className="space-y-1">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive =
          pathname === item.href ||
          (item.href !== "/" && pathname.startsWith(`${item.href}/`));

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onItemClick}
            className={`flex items-center gap-3 text-xs font-semibold px-3.5 py-2.5 rounded-xl transition-all ${
              isActive
                ? "text-blue-600 bg-blue-50/90 border border-blue-200/70 font-bold shadow-xs"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
            }`}
          >
            <Icon
              className={`w-4 h-4 flex-shrink-0 ${
                isActive ? "text-blue-600" : "text-slate-400 group-hover:text-slate-700"
              }`}
            />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </div>
  );

  return (
    <>
      {/* MOBILE TOPBAR (Shown only on small screens < md) */}
      <div className="md:hidden sticky top-0 z-40 bg-gradient-to-r from-[#EBF3FB] via-[#F3F8FD] to-white backdrop-blur-md border-b border-blue-100/70 px-4 py-3 flex items-center justify-between">
        <BrandLogo href="/" size="sm" showTagline={false} />

        <div className="flex items-center gap-2">
          {user && (
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
              {user.role}
            </span>
          )}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-1.5 rounded-control hover:bg-blue-50 text-ink border border-blue-200"
            aria-label="Toggle Navigation"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER OVERLAY */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative w-72 max-w-[80vw] bg-gradient-to-b from-[#EBF3FB] via-[#F3F8FD] to-white h-full flex flex-col justify-between p-5 border-r border-blue-100 shadow-xl z-10 animate-in slide-in-from-left duration-200">
            <div className="space-y-6">
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-4 border-b border-blue-100">
                <BrandLogo href="/" size="sm" showTagline={false} />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-1 rounded-control hover:bg-blue-50 text-ink-muted hover:text-ink"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation links */}
              {renderNavLinks(() => setMobileOpen(false))}
            </div>

            {/* User section at bottom */}
            {user && (
              <div className="pt-4 border-t border-blue-100 space-y-3">
                <Link
                  href={user.role === "MENTOR" ? "/mentor/profile" : "/dashboard/profile"}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 p-1.5 -mx-1.5 rounded-control hover:bg-blue-50/60 transition-colors"
                >
                  {user.avatar_url ? (
                    <img
                      src={user.avatar_url}
                      alt={user.full_name}
                      className="w-8 h-8 rounded-full object-cover border border-blue-200 flex-shrink-0"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center font-display font-bold text-xs text-blue-700 flex-shrink-0">
                      {user.full_name?.charAt(0).toUpperCase() || "U"}
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold text-ink truncate">
                      {user.full_name}
                    </p>
                    <p className="text-[10px] uppercase font-bold text-blue-600">
                      {user.role}
                    </p>
                  </div>
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center gap-2 text-xs font-semibold py-2 px-3 rounded-control border border-blue-200 hover:bg-blue-50 text-ink transition-colors"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* DESKTOP VERTICAL SIDEBAR (Fixed / Sticky on the left for md: screens and above) */}
      <aside className="hidden md:flex w-60 lg:w-64 h-screen sticky top-0 bg-white border-r border-slate-200/80 flex-col justify-between p-5 flex-shrink-0 z-30">
        <div className="space-y-6">
          {/* Logo & Platform Role Tag */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <BrandLogo href="/" size="sm" showTagline={false} />
            {user && (
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-blue-50 text-blue-600 border border-blue-200/60">
                {user.role}
              </span>
            )}
          </div>

          {/* Navigation Section */}
          <div className="space-y-1">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 mb-2.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              Workspace
            </div>
            {renderNavLinks()}
          </div>
        </div>

        {/* User Card & Sign Out at Bottom */}
        {user && (
          <div className="pt-4 border-t border-slate-100 space-y-3">
            <Link
              href={user.role === "MENTOR" ? "/mentor/profile" : "/dashboard/profile"}
              className="flex items-center gap-3 px-2 py-1.5 rounded-xl hover:bg-slate-50 transition-colors group cursor-pointer"
              title="View / Edit Profile"
            >
              {user.avatar_url ? (
                <img
                  src={user.avatar_url}
                  alt={user.full_name}
                  className="w-9 h-9 rounded-full object-cover border border-slate-200 flex-shrink-0"
                />
              ) : (
                <div className="w-9 h-9 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center font-display font-bold text-xs text-blue-600 flex-shrink-0">
                  {user.full_name?.charAt(0).toUpperCase() || "U"}
                </div>
              )}
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors truncate leading-tight">
                  {user.full_name}
                </p>
                <p className="text-[10px] text-slate-400 truncate mt-0.5">
                  {user.email}
                </p>
              </div>
            </Link>

            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-2 text-xs font-semibold py-2 px-3 rounded-xl border border-slate-200 hover:bg-slate-50 hover:border-slate-300 text-slate-700 transition-all shadow-xs"
            >
              <LogOut className="w-3.5 h-3.5 text-slate-400" />
              Sign Out
            </button>
          </div>
        )}
      </aside>
    </>
  );
};
