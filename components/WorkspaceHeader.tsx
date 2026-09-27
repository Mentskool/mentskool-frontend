"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import { Bell, ChevronDown, User, LogOut, CheckCircle2 } from "lucide-react";

export const WorkspaceHeader: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuthStore();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  // Human-friendly title or breadcrumb from pathname
  const getPageTitle = () => {
    if (pathname.includes("/dashboard/tasks")) return "Workspace / My Tasks";
    if (pathname.includes("/dashboard/efficiency")) return "Workspace / Efficiency";
    if (pathname.includes("/dashboard/profile")) return "Workspace / My Profile";
    if (pathname.includes("/mentor/profile")) return "Workspace / Edit Profile";
    if (pathname.includes("/mentor/students")) return "Workspace / Student Roster";
    if (pathname.includes("/mentor/tasks")) return "Workspace / Task Reviews";
    if (pathname.includes("/cohort")) return "Workspace / Cohort Hub";
    if (pathname.includes("/schedule")) return "Workspace / Live Schedule";
    if (pathname.includes("/quizzes")) return "Workspace / Practice Quizzes";
    if (pathname.includes("/messages")) return "Workspace / Messages";
    return "Workspace";
  };

  const profileHref =
    user?.role === "MENTOR" ? "/mentor/profile" : "/dashboard/profile";

  return (
    <header className="sticky top-0 z-20 w-full bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-6 py-2.5 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Breadcrumb / Section Context */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-500 hidden sm:inline-block">
            {getPageTitle()}
          </span>
        </div>

        {/* Right Action Icons & Profile Chip */}
        <div className="flex items-center gap-3 sm:gap-4 ml-auto">
          {/* Notifications Bell */}
          <div className="relative">
            <button
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowUserMenu(false);
              }}
              className="relative p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100/80 transition-colors"
              aria-label="Notifications"
            >
              <Bell className="w-4 h-4" />
              {/* Unread indicator dot */}
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white" />
            </button>

            {/* Notifications Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-elevated border border-slate-200 p-4 z-50 animate-slide-up">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Notifications
                  </h4>
                  <span className="text-[10px] text-blue-600 font-semibold cursor-pointer hover:underline">
                    Mark all as read
                  </span>
                </div>
                <div className="py-2 space-y-2.5 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-800">
                        Welcome to your workspace
                      </p>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Stay on track by submitting weekly tasks and tracking your efficiency rating.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* User Profile Chip */}
          {user && (
            <div className="relative">
              <button
                onClick={() => {
                  setShowUserMenu(!showUserMenu);
                  setShowNotifications(false);
                }}
                className="flex items-center gap-2.5 pl-1.5 pr-2.5 py-1 rounded-xl hover:bg-slate-100/80 transition-all border border-transparent hover:border-slate-200"
              >
                {user.avatar_url ? (
                  <img
                    src={user.avatar_url}
                    alt={user.full_name}
                    className="w-7 h-7 rounded-full object-cover border border-slate-200 shadow-xs"
                  />
                ) : (
                  <div className="w-7 h-7 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center font-bold text-xs text-blue-700">
                    {user.full_name?.charAt(0).toUpperCase() || "U"}
                  </div>
                )}
                <span className="text-xs font-bold text-slate-800 hidden md:inline-block max-w-[140px] truncate">
                  {user.full_name}
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 hidden md:inline-block" />
              </button>

              {/* Profile Dropdown Menu */}
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-elevated border border-slate-200 p-2 z-50 animate-slide-up">
                  <div className="px-3 py-2 border-b border-slate-100">
                    <p className="text-xs font-bold text-slate-900 truncate">
                      {user.full_name}
                    </p>
                    <p className="text-[10px] text-slate-500 truncate mt-0.5">
                      {user.email}
                    </p>
                    <span className="inline-block mt-1 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                      {user.role}
                    </span>
                  </div>

                  <div className="py-1">
                    <Link
                      href={profileHref}
                      onClick={() => setShowUserMenu(false)}
                      className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/60 rounded-xl transition-colors"
                    >
                      <User className="w-3.5 h-3.5" />
                      Account Profile
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-2 px-3 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50/60 rounded-xl transition-colors mt-1"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
