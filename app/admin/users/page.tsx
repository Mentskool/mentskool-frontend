"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import { useAdminUsers } from "@/hooks/useAdmin";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import {
  Users,
  GraduationCap,
  Shield,
  Search,
  Mail,
  Calendar,
  AlertCircle,
  Video,
  Layers,
  Download,
  SlidersHorizontal,
  RotateCcw,
  DollarSign,
} from "lucide-react";

export default function AdminUsersPage() {
  const router = useRouter();
  const { user, isAuthenticated, isLoading: authLoading } = useAuthStore();
  const [selectedRole, setSelectedRole] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [targetExam, setTargetExam] = useState<string>("ALL");
  const [targetYear, setTargetYear] = useState<number | undefined>(undefined);
  const [prepStage, setPrepStage] = useState<string>("ALL");
  const [payingOnly, setPayingOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>("DEFAULT");

  const { data, isLoading, refetch } = useAdminUsers({
    role: selectedRole,
    search: searchQuery,
    target_exam: targetExam,
    target_year: targetYear,
    prep_stage: prepStage,
    has_spent: payingOnly ? true : undefined,
    sort_by: sortBy,
  });

  const handleExportCSV = () => {
    if (!data?.items || data.items.length === 0) return;
    const headers = [
      "User ID",
      "Full Name",
      "Email",
      "Role",
      "Target Exam",
      "Target Year",
      "Prep Stage",
      "Active Subscriptions Count",
      "1:1 Sessions Booked Count",
      "Total Spent (INR)",
      "Joined Date",
    ];

    const rows = data.items.map((u) => [
      `"${u.id}"`,
      `"${(u.full_name || "").replace(/"/g, '""')}"`,
      `"${(u.email || "").replace(/"/g, '""')}"`,
      `"${u.role}"`,
      `"${(u.target_exam || "").replace(/"/g, '""')}"`,
      u.target_year || "",
      `"${(u.prep_stage || "").replace(/"/g, '""')}"`,
      u.active_subscriptions_count || 0,
      u.sessions_booked_count || 0,
      Number(u.total_spent || 0),
      `"${new Date(u.created_at).toLocaleDateString("en-IN")}"`,
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute(
      "download",
      `mentskool_users_directory_${new Date().toISOString().split("T")[0]}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleResetFilters = () => {
    setSelectedRole("ALL");
    setSearchQuery("");
    setTargetExam("ALL");
    setTargetYear(undefined);
    setPrepStage("ALL");
    setPayingOnly(false);
    setSortBy("DEFAULT");
  };

  if (authLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center text-slate-500 text-sm">
        Loading user directory...
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
          Your account does not have administrative privileges.
        </p>
        <Button variant="primary" onClick={() => router.push("/")}>
          Return to Home
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
      {/* Navigation Header */}
      <AdminHeader onRefresh={() => refetch()} />

      {/* Top Metrics Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4 bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              Total Users
            </span>
            <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2">
            <h3 className="text-2xl font-bold text-slate-900">
              {data?.total ?? 0}
            </h3>
            <span className="text-[10px] text-slate-400">All registered accounts</span>
          </div>
        </Card>

        <Card className="p-4 bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              Learners / Students
            </span>
            <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
              <GraduationCap className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2">
            <h3 className="text-2xl font-bold text-purple-700">
              {data?.total_students ?? 0}
            </h3>
            <span className="text-[10px] text-slate-400">Students seeking guidance</span>
          </div>
        </Card>

        <Card className="p-4 bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              Mentors
            </span>
            <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2">
            <h3 className="text-2xl font-bold text-blue-700">
              {data?.total_mentors ?? 0}
            </h3>
            <span className="text-[10px] text-slate-400">Cohort & 1:1 mentors</span>
          </div>
        </Card>

        <Card className="p-4 bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              Platform Admins
            </span>
            <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Shield className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2">
            <h3 className="text-2xl font-bold text-emerald-700">
              {data?.total_admins ?? 0}
            </h3>
            <span className="text-[10px] text-slate-400">Operations & management</span>
          </div>
        </Card>
      </div>

      {/* Enhanced Multi-Filter and Controls Command Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-sm space-y-3.5">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          {/* Role Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200/80 w-full sm:w-auto overflow-x-auto scrollbar-none">
            {[
              { id: "ALL", label: `All Users (${data?.total ?? 0})` },
              { id: "STUDENT", label: `Students (${data?.total_students ?? 0})` },
              { id: "MENTOR", label: `Mentors (${data?.total_mentors ?? 0})` },
              { id: "ADMIN", label: `Admins (${data?.total_admins ?? 0})` },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedRole(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedRole === tab.id
                    ? "bg-white text-slate-900 shadow-sm font-bold border border-slate-200/60"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Action Tools: Search & CSV Export */}
          <div className="flex items-center gap-2.5 w-full lg:w-auto">
            <div className="relative flex-1 sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <Input
                placeholder="Search by name or email..."
                className="pl-9 h-9 text-xs"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <Button
              variant="secondary"
              size="sm"
              onClick={handleExportCSV}
              disabled={!data?.items || data.items.length === 0}
              className="h-9 px-3 text-xs border-slate-200 text-slate-700 hover:bg-slate-50 flex items-center gap-1.5 shrink-0"
              title="Download currently filtered users directory as CSV"
            >
              <Download className="w-3.5 h-3.5 text-slate-600" />
              <span className="hidden sm:inline">Export CSV</span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                {data?.items?.length ?? 0}
              </span>
            </Button>
          </div>
        </div>

        {/* Second Row: Exam, Year, Stage, Spending & Sorting */}
        <div className="flex flex-wrap items-center gap-2.5 pt-2 border-t border-slate-100 text-xs">
          <div className="flex items-center gap-1.5 text-slate-500 font-medium shrink-0">
            <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
            <span>Segmentation:</span>
          </div>

          {/* Target Exam */}
          <select
            value={targetExam}
            onChange={(e) => setTargetExam(e.target.value)}
            className="h-8 rounded-lg border border-slate-200 bg-white px-2.5 text-xs text-slate-700 font-medium focus:outline-none focus:ring-1 focus:ring-indigo-500"
          >
            <option value="ALL">All Target Exams</option>
            <option value="JEE Advanced">JEE Advanced</option>
            <option value="JEE Main">JEE Main</option>
            <option value="NEET-UG">NEET-UG</option>
            <option value="GATE">GATE / PSU</option>
            <option value="Foundation">Class 11 & 12 Foundation</option>
          </select>

          {/* Target Year */}
          <select
            value={targetYear !== undefined ? String(targetYear) : "ALL"}
            onChange={(e) =>
              setTargetYear(e.target.value === "ALL" ? undefined : Number(e.target.value))
            }
            className="h-8 rounded-lg border border-slate-200 bg-white px-2.5 text-xs text-slate-700 font-medium focus:outline-none focus:ring-1 focus:ring-indigo-500"
          >
            <option value="ALL">All Target Years</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
            <option value="2029">2029</option>
          </select>

          {/* Prep Stage */}
          <select
            value={prepStage}
            onChange={(e) => setPrepStage(e.target.value)}
            className="h-8 rounded-lg border border-slate-200 bg-white px-2.5 text-xs text-slate-700 font-medium focus:outline-none focus:ring-1 focus:ring-indigo-500"
          >
            <option value="ALL">All Prep Stages</option>
            <option value="Dropper">Dropper / Repeater</option>
            <option value="Class 12">Class 12th Board + Entrance</option>
            <option value="Class 11">Class 11th</option>
            <option value="Foundation">Early Foundation</option>
          </select>

          {/* Paying Users Filter Chip */}
          <button
            onClick={() => setPayingOnly(!payingOnly)}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold border flex items-center gap-1 transition-all ${
              payingOnly
                ? "bg-emerald-100 text-emerald-800 border-emerald-300 font-bold shadow-xs"
                : "bg-emerald-50/50 text-emerald-700 border-emerald-200 hover:bg-emerald-100"
            }`}
          >
            <DollarSign className="w-3 h-3 text-emerald-600" />
            <span>Paying Learners (Spent &gt; ₹0)</span>
          </button>

          {/* Sort By Filter */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="h-8 rounded-lg border border-slate-200 bg-indigo-50/50 px-2.5 text-xs text-indigo-900 font-semibold focus:outline-none focus:ring-1 focus:ring-indigo-500 ml-auto"
          >
            <option value="DEFAULT">Sort: Recent Signups First</option>
            <option value="spent_desc">Highest Total Spent</option>
            <option value="sessions_desc">Most 1:1 Sessions Booked</option>
            <option value="oldest">Oldest Accounts First</option>
          </select>

          {/* Clear Filters Reset */}
          {(targetExam !== "ALL" ||
            targetYear !== undefined ||
            prepStage !== "ALL" ||
            payingOnly ||
            selectedRole !== "ALL" ||
            sortBy !== "DEFAULT" ||
            searchQuery.trim() !== "") && (
            <button
              onClick={handleResetFilters}
              className="h-8 px-2.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 flex items-center gap-1 font-medium transition-colors"
              title="Reset all filters"
            >
              <RotateCcw className="w-3 h-3 text-slate-400" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* Users Table */}
      <Card className="border border-slate-200 overflow-hidden shadow-sm">
        {isLoading ? (
          <div className="p-16 text-center text-slate-400 text-sm">
            Fetching user directory and statistics...
          </div>
        ) : !data?.items || data.items.length === 0 ? (
          <div className="p-16 text-center space-y-2">
            <Users className="w-10 h-10 mx-auto text-slate-300" />
            <p className="text-sm font-medium text-slate-800">No users found</p>
            <p className="text-xs text-slate-400">
              {searchQuery
                ? "Try clearing your search query."
                : "No accounts match the selected role filter."}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="py-3.5 px-4">User Details</th>
                  <th className="py-3.5 px-4">Role</th>
                  <th className="py-3.5 px-4">Target Exam & Academic Stage</th>
                  <th className="py-3.5 px-4">Cohort Subscriptions</th>
                  <th className="py-3.5 px-4">1:1 Call Sessions</th>
                  <th className="py-3.5 px-4">Joined Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {data.items.map((u) => {
                  const joinDate = new Date(u.created_at).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  });

                  return (
                    <tr
                      key={u.id}
                      className="hover:bg-slate-50/70 transition-colors"
                    >
                      {/* User Details */}
                      <td className="py-4 px-4 align-top">
                        <div className="space-y-0.5">
                          <span className="font-bold text-slate-900 text-sm block">
                            {u.full_name}
                          </span>
                          <div className="flex items-center gap-1.5 text-slate-500">
                            <Mail className="w-3.5 h-3.5" />
                            <a
                              href={`mailto:${u.email}`}
                              className="hover:text-indigo-600 hover:underline"
                            >
                              {u.email}
                            </a>
                          </div>
                        </div>
                      </td>

                      {/* Role */}
                      <td className="py-4 px-4 align-top">
                        {u.role === "ADMIN" && (
                          <Badge variant="INDIGO" className="text-[10px] font-bold">
                            ADMIN
                          </Badge>
                        )}
                        {u.role === "MENTOR" && (
                          <Badge variant="DEFAULT" className="text-[10px] bg-blue-50 text-blue-700 border-blue-200 font-bold">
                            MENTOR
                          </Badge>
                        )}
                        {u.role === "STUDENT" && (
                          <Badge variant="DEFAULT" className="text-[10px] bg-purple-50 text-purple-700 border-purple-200 font-bold">
                            STUDENT
                          </Badge>
                        )}
                      </td>

                      {/* Target Exam & Stage */}
                      <td className="py-4 px-4 align-top">
                        <div className="space-y-0.5">
                          {u.target_exam ? (
                            <span className="font-semibold text-slate-900 block">
                              {u.target_exam} {u.target_year ? `(${u.target_year})` : ""}
                            </span>
                          ) : (
                            <span className="text-slate-400 italic">Not specified</span>
                          )}
                          {u.prep_stage && (
                            <span className="text-[11px] text-slate-500 block">
                              Stage: {u.prep_stage}
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Cohort Subscriptions */}
                      <td className="py-4 px-4 align-top">
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-1 font-semibold text-slate-800">
                            <Layers className="w-3.5 h-3.5 text-indigo-600" />
                            <span>{u.active_subscriptions_count} active</span>
                          </div>
                        </div>
                      </td>

                      {/* 1:1 Call Sessions */}
                      <td className="py-4 px-4 align-top">
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-1 font-semibold text-slate-800">
                            <Video className="w-3.5 h-3.5 text-blue-600" />
                            <span>{u.sessions_booked_count} calls</span>
                          </div>
                          {u.total_spent > 0 && (
                            <span className="text-[11px] text-emerald-700 font-medium block">
                              Paid: ₹{Number(u.total_spent).toLocaleString()}
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Joined Date */}
                      <td className="py-4 px-4 align-top text-slate-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          <span>{joinDate}</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </div>
  );
}
