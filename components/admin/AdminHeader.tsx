"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Video,
  UserCheck,
  Zap,
  ShieldCheck,
  X,
  ExternalLink,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import api from "@/lib/api";
import { useQueryClient } from "@tanstack/react-query";

interface AdminHeaderProps {
  pendingMentorsCount?: number;
  pendingSessionsCount?: number;
  onRefresh?: () => void;
}

export const AdminHeader: React.FC<AdminHeaderProps> = ({
  pendingMentorsCount = 0,
  pendingSessionsCount = 0,
  onRefresh,
}) => {
  const pathname = usePathname();
  const queryClient = useQueryClient();
  const [isRunningAudit, setIsRunningAudit] = useState(false);
  const [auditToast, setAuditToast] = useState<string | null>(null);

  const navItems = [
    {
      href: "/admin",
      label: "Platform Insights",
      icon: LayoutDashboard,
      exact: true,
    },
    {
      href: "/admin/mentors",
      label: "Mentors & Payouts",
      icon: Users,
      badge: pendingMentorsCount > 0 ? `${pendingMentorsCount} Pending` : undefined,
      badgeColor: "amber",
    },
    {
      href: "/admin/sessions",
      label: "1:1 Call Bookings",
      icon: Video,
      badge: pendingSessionsCount > 0 ? `${pendingSessionsCount} Pending` : undefined,
      badgeColor: "indigo",
    },
    {
      href: "/admin/users",
      label: "User Directory",
      icon: UserCheck,
    },
  ];

  const handleRunInactivityAudit = async () => {
    setIsRunningAudit(true);
    try {
      const res: any = await api.post("/admin/mentors/run-inactivity-audit");
      const info = res?.data ?? res ?? {};
      setAuditToast(
        `Inactivity Audit finished: ${info.checked_mentors ?? 0} mentors scanned. ${
          info.warnings_sent ?? 0
        } warnings dispatched, ${info.auto_paused_mentors ?? 0} auto-paused.`
      );
      queryClient.invalidateQueries({ queryKey: ["adminMentors"] });
      queryClient.invalidateQueries({ queryKey: ["adminOverview"] });
      setTimeout(() => setAuditToast(null), 8000);
    } catch {
      alert("Failed to execute inactivity check.");
    } finally {
      setIsRunningAudit(false);
    }
  };

  const handleRefresh = () => {
    queryClient.invalidateQueries({ queryKey: ["adminMentors"] });
    queryClient.invalidateQueries({ queryKey: ["adminOverview"] });
    queryClient.invalidateQueries({ queryKey: ["adminSessions"] });
    queryClient.invalidateQueries({ queryKey: ["adminUsers"] });
    if (onRefresh) onRefresh();
  };

  return (
    <div className="space-y-4">
      {/* Toast Notification */}
      {auditToast && (
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center justify-between shadow-sm animate-fadeIn">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>{auditToast}</span>
          </div>
          <button
            onClick={() => setAuditToast(null)}
            className="text-emerald-600 hover:text-emerald-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Main Header Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-sm">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
                  Mentskool Central Command
                </h1>
                <Badge variant="INDIGO" className="text-[10px] font-bold tracking-wider">
                  ADMIN
                </Badge>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Real-time platform insights, mentor verification, separated 1:1 & cohort payouts, and session management.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          <Button
            variant="secondary"
            size="sm"
            onClick={handleRefresh}
            className="text-xs border-slate-200 text-slate-700 hover:bg-slate-50 flex items-center gap-1.5"
            title="Refresh dashboard data"
          >
            <RefreshCw className="w-3.5 h-3.5 text-slate-500" />
            <span>Refresh</span>
          </Button>

          <Button
            variant="secondary"
            size="sm"
            className="flex items-center gap-2 border-indigo-200 text-indigo-700 bg-indigo-50/70 hover:bg-indigo-100 font-semibold text-xs"
            disabled={isRunningAudit}
            onClick={handleRunInactivityAudit}
          >
            <Zap className={`w-3.5 h-3.5 text-indigo-600 ${isRunningAudit ? "animate-spin" : ""}`} />
            {isRunningAudit ? "Auditing Mentors..." : "Run Inactivity Audit"}
          </Button>

          <Link href="/mentors" target="_blank" rel="noreferrer">
            <Button
              variant="secondary"
              size="sm"
              className="text-xs border-slate-200 text-slate-600 hover:bg-slate-50 flex items-center gap-1.5"
            >
              <span>Explore Public View</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex items-center gap-2 p-1.5 bg-slate-100/80 rounded-xl border border-slate-200/80 overflow-x-auto scrollbar-none">
        {navItems.map((item) => {
          const isActive = item.exact
            ? pathname === item.href
            : pathname.startsWith(item.href);
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                isActive
                  ? "bg-white text-indigo-700 shadow-sm font-bold border border-slate-200/60"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? "text-indigo-600" : "text-slate-400"}`} />
              <span>{item.label}</span>
              {item.badge && (
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                    item.badgeColor === "amber"
                      ? "bg-amber-100 text-amber-800 border border-amber-200"
                      : "bg-indigo-100 text-indigo-800 border border-indigo-200"
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
