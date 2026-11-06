"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  DollarSign,
  TrendingUp,
  Users,
  Video,
  ShieldCheck,
  Clock,
  ArrowRight,
  AlertCircle,
  Calendar,
  Sparkles,
  PieChart,
  CheckCircle2,
  Layers,
} from "lucide-react";
import { useAuthStore } from "@/store/authStore";
import { useAdminOverview } from "@/hooks/useAdmin";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export default function AdminOverviewPage() {
  const router = useRouter();
  const { user, isAuthenticated, isLoading: authLoading } = useAuthStore();
  const { data, isLoading, refetch } = useAdminOverview();

  if (authLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center text-slate-500 text-sm">
        Authenticating administrator session...
      </div>
    );
  }

  if (!isAuthenticated || user?.role !== "ADMIN") {
    return (
      <div className="max-w-md mx-auto py-20 text-center space-y-4">
        <div className="w-16 h-16 mx-auto rounded-full bg-rose-50 text-rose-600 flex items-center justify-center">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold font-display text-slate-900">
          Administrator Access Required
        </h2>
        <p className="text-sm text-slate-500">
          Your account ({user?.email || "Guest"}) does not have administrative privileges.
        </p>
        <Button variant="primary" onClick={() => router.push("/")}>
          Return to Home
        </Button>
      </div>
    );
  }

  const grossRevenue = Number(data?.gross_platform_revenue ?? 0);
  const cohortRevenue = Number(data?.cohort_monthly_revenue ?? 0);
  const oneOnOneRevenue = Number(data?.one_on_one_revenue ?? 0);

  const totalPayoutDue = Number(data?.total_payout_due_mentors ?? 0);
  const cohortPayoutDue = Number(data?.cohort_payout_due ?? 0);
  const oneOnOnePayoutDue = Number(data?.one_on_one_payout_due ?? 0);

  const netCommission = Number(data?.platform_net_commission ?? 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
      {/* Admin Central Header & Nav */}
      <AdminHeader
        pendingMentorsCount={data?.pending_mentors ?? 0}
        pendingSessionsCount={data?.pending_one_on_one_bookings ?? 0}
        onRefresh={() => refetch()}
      />

      {/* Main KPI Performance Strip */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {/* Gross Revenue */}
        <Card className="p-4 bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              Gross Volume
            </span>
            <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2">
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              ₹{grossRevenue.toLocaleString()}
            </h3>
            <span className="text-[10px] text-slate-400 font-medium">Cohorts + 1:1 Calls</span>
          </div>
        </Card>

        {/* Total Mentor Payouts Due */}
        <Card className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200/80 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-emerald-800 uppercase tracking-wider">
              Payouts Due (85%)
            </span>
            <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2">
            <h3 className="text-xl sm:text-2xl font-extrabold text-emerald-950">
              ₹{totalPayoutDue.toLocaleString()}
            </h3>
            <span className="text-[10px] text-emerald-700 font-medium">
              Payable to all mentors
            </span>
          </div>
        </Card>

        {/* Platform Net Profit (15%) */}
        <Card className="p-4 bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              Platform Fee (15%)
            </span>
            <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2">
            <h3 className="text-xl sm:text-2xl font-extrabold text-indigo-700">
              ₹{netCommission.toLocaleString()}
            </h3>
            <span className="text-[10px] text-slate-400 font-medium">Net platform revenue</span>
          </div>
        </Card>

        {/* Approved Mentors */}
        <Card className="p-4 bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              Mentors
            </span>
            <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2">
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              {data?.approved_mentors ?? 0}
            </h3>
            <span className="text-[10px] text-slate-500">
              {data?.pending_mentors ? (
                <span className="text-amber-600 font-semibold">
                  {data.pending_mentors} pending review
                </span>
              ) : (
                "All reviewed"
              )}
            </span>
          </div>
        </Card>

        {/* Active Students */}
        <Card className="p-4 bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              Enrolled Students
            </span>
            <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2">
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              {data?.total_students ?? 0}
            </h3>
            <span className="text-[10px] text-slate-400 font-medium">
              {data?.active_cohort_subscriptions ?? 0} active cohort seats
            </span>
          </div>
        </Card>

        {/* 1:1 Sessions */}
        <Card className="p-4 bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              1:1 Call Bookings
            </span>
            <div className="w-7 h-7 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center">
              <Video className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2">
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              {data?.total_one_on_one_bookings ?? 0}
            </h3>
            <span className="text-[10px] text-slate-500 font-medium">
              {data?.completed_one_on_one_bookings ?? 0} completed calls
            </span>
          </div>
        </Card>
      </div>

      {/* Dual Revenue Stream & Payouts Breakdown (Cohorts vs 1:1 Calls) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Cohort Financial Ledger */}
        <Card className="p-6 bg-white border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 font-display text-base">
                  Cohort Mentorship Stream
                </h3>
                <p className="text-xs text-slate-500">
                  Monthly recurring student cohort subscriptions
                </p>
              </div>
            </div>
            <Link href="/admin/mentors">
              <Button variant="secondary" size="sm" className="text-xs">
                Manage Mentors
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
            <div>
              <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider block">
                Active Seats
              </span>
              <span className="text-lg font-bold text-slate-900">
                {data?.active_cohort_subscriptions ?? 0}
              </span>
            </div>
            <div>
              <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider block">
                Monthly Gross
              </span>
              <span className="text-lg font-bold text-slate-900">
                ₹{cohortRevenue.toLocaleString()}
              </span>
            </div>
            <div>
              <span className="text-[10px] font-semibold text-indigo-700 uppercase tracking-wider block">
                Cohort Payout (85%)
              </span>
              <span className="text-lg font-bold text-indigo-700">
                ₹{cohortPayoutDue.toLocaleString()}
              </span>
            </div>
          </div>

          <div className="text-xs text-slate-500 flex items-center justify-between pt-1">
            <span>Platform 15% Share: ₹{(cohortRevenue - cohortPayoutDue).toLocaleString()}</span>
            <span className="font-medium text-slate-700">Calculated automatically per active seat</span>
          </div>
        </Card>

        {/* 1:1 Sessions Financial Ledger */}
        <Card className="p-6 bg-white border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                <Video className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-slate-900 font-display text-base">
                    1-on-1 Call Bookings Stream
                  </h3>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-blue-100 text-blue-800">
                    Live
                  </span>
                </div>
                <p className="text-xs text-slate-500">
                  Individual direct consultation calls & instant payments
                </p>
              </div>
            </div>
            <Link href="/admin/sessions">
              <Button variant="secondary" size="sm" className="text-xs">
                View All Calls
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
            <div>
              <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider block">
                Total Booked
              </span>
              <span className="text-lg font-bold text-slate-900">
                {data?.total_one_on_one_bookings ?? 0}
              </span>
            </div>
            <div>
              <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider block">
                Gross 1:1 Paid
              </span>
              <span className="text-lg font-bold text-slate-900">
                ₹{oneOnOneRevenue.toLocaleString()}
              </span>
            </div>
            <div>
              <span className="text-[10px] font-semibold text-blue-700 uppercase tracking-wider block">
                1:1 Payout (85%)
              </span>
              <span className="text-lg font-bold text-blue-700">
                ₹{oneOnOnePayoutDue.toLocaleString()}
              </span>
            </div>
          </div>

          <div className="text-xs text-slate-500 flex items-center justify-between pt-1">
            <span>Platform 15% Share: ₹{(oneOnOneRevenue - oneOnOnePayoutDue).toLocaleString()}</span>
            <span className="font-medium text-slate-700">
              {data?.confirmed_one_on_one_bookings ?? 0} confirmed • {data?.completed_one_on_one_bookings ?? 0} completed
            </span>
          </div>
        </Card>
      </div>

      {/* Two Column Layout: Action Center & Live Platform Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (2 Cols): Quick Action Center & Category Stats */}
        <div className="lg:col-span-2 space-y-6">
          {/* Action Center */}
          <Card className="p-6 bg-white border border-slate-200 shadow-sm space-y-4">
            <h3 className="font-bold text-slate-900 font-display text-base flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              Administrative Operations & Actions
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href="/admin/mentors?status=PENDING"
                className="p-4 rounded-xl border border-amber-200 bg-amber-50/50 hover:bg-amber-50 transition-colors flex items-center justify-between group"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-600" />
                    <span className="font-bold text-sm text-amber-950">
                      Pending Mentor Verifications
                    </span>
                  </div>
                  <p className="text-xs text-amber-800 mt-1">
                    {data?.pending_mentors ?? 0} mentor application(s) awaiting credential checks
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-amber-600 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/admin/sessions?status=PENDING_APPROVAL"
                className="p-4 rounded-xl border border-indigo-200 bg-indigo-50/50 hover:bg-indigo-50 transition-colors flex items-center justify-between group"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <Video className="w-4 h-4 text-indigo-600" />
                    <span className="font-bold text-sm text-indigo-950">
                      1:1 Sessions Awaiting Approval
                    </span>
                  </div>
                  <p className="text-xs text-indigo-800 mt-1">
                    {data?.pending_one_on_one_bookings ?? 0} session booking(s) pending mentor confirmation
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-indigo-600 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/admin/mentors"
                className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/50 hover:bg-emerald-50 transition-colors flex items-center justify-between group"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-emerald-600" />
                    <span className="font-bold text-sm text-emerald-950">
                      Mentor Payouts Ledger
                    </span>
                  </div>
                  <p className="text-xs text-emerald-800 mt-1">
                    Calculate & verify separated Cohort + 1:1 payments due
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/admin/users"
                className="p-4 rounded-xl border border-slate-200 bg-slate-50/80 hover:bg-slate-100 transition-colors flex items-center justify-between group"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-slate-700" />
                    <span className="font-bold text-sm text-slate-900">
                      Platform User Directory
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    {data?.total_students ?? 0} students & {data?.total_mentors ?? 0} mentors registered
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-600 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Card>

          {/* Academic Categories Breakdown */}
          <Card className="p-6 bg-white border border-slate-200 shadow-sm space-y-4">
            <h3 className="font-bold text-slate-900 font-display text-base flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-600" />
              Mentorship Academic Domains
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  key: "JEE_PREP",
                  label: "JEE Main & Advanced",
                  desc: "Engineering Entrance",
                  color: "border-blue-200 bg-blue-50/50 text-blue-900",
                },
                {
                  key: "NEET_PREP",
                  label: "NEET UG",
                  desc: "Medical Entrance",
                  color: "border-emerald-200 bg-emerald-50/50 text-emerald-900",
                },
                {
                  key: "GATE_PSU",
                  label: "GATE & PSU Exams",
                  desc: "Postgrad & Engineering Careers",
                  color: "border-purple-200 bg-purple-50/50 text-purple-900",
                },
              ].map((cat) => {
                const count = data?.category_counts?.[cat.key] ?? 0;
                return (
                  <div
                    key={cat.key}
                    className={`p-4 rounded-xl border ${cat.color} space-y-1`}
                  >
                    <span className="text-xs font-semibold block">{cat.label}</span>
                    <div className="text-2xl font-bold">{count} Mentors</div>
                    <span className="text-[11px] opacity-75">{cat.desc}</span>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        {/* Right Column: Live Platform Activity Stream */}
        <div className="space-y-6">
          <Card className="p-6 bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-bold text-slate-900 font-display text-base flex items-center gap-2">
                <Calendar className="w-4 h-4 text-indigo-600" />
                Live Platform Stream
              </h3>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="Live stream" />
            </div>

            {isLoading ? (
              <div className="py-12 text-center text-xs text-slate-400">
                Streaming recent platform activity...
              </div>
            ) : !data?.recent_activity || data.recent_activity.length === 0 ? (
              <div className="py-12 text-center text-xs text-slate-400">
                No recent activity recorded yet.
              </div>
            ) : (
              <div className="space-y-3.5">
                {data.recent_activity.map((item) => (
                  <div
                    key={item.id}
                    className="p-3 rounded-xl border border-slate-100 hover:border-slate-200 bg-slate-50/40 hover:bg-slate-50 transition-colors space-y-1"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-semibold text-xs text-slate-900 truncate">
                        {item.title}
                      </span>
                      {item.badge && (
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200 shrink-0">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-500 line-clamp-1">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
                      <span>{new Date(item.timestamp).toLocaleString("en-IN", {
                        day: "numeric",
                        month: "short",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}</span>
                      {item.amount && (
                        <span className="font-bold text-emerald-700">
                          ₹{Number(item.amount).toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
