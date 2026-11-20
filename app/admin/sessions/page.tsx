"use client";

import React, { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import { useAdminSessions, useAdminUpdateMeetingLink } from "@/hooks/useAdmin";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import {
  Video,
  Clock,
  CheckCircle,
  XCircle,
  Search,
  ExternalLink,
  Copy,
  Check,
  AlertCircle,
  Link as LinkIcon,
  X,
  CreditCard,
  DollarSign,
  User,
  Calendar,
  Download,
  SlidersHorizontal,
  RotateCcw,
  AlertTriangle,
} from "lucide-react";
import { AdminSessionItem } from "@/lib/types";

function AdminSessionsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user, isAuthenticated, isLoading: authLoading } = useAuthStore();

  const initialStatus = searchParams.get("status") || "ALL";
  const initialIssue = searchParams.get("issue") || "ALL";
  const initialTimeframe = searchParams.get("timeframe") || "ALL";

  const [selectedStatus, setSelectedStatus] = useState<string>(initialStatus);
  const [searchQuery, setSearchQuery] = useState("");
  const [timeframe, setTimeframe] = useState<string>(initialTimeframe);
  const [issueFilter, setIssueFilter] = useState<string>(initialIssue);
  const [sortBy, setSortBy] = useState<string>("DEFAULT");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Edit meeting link modal
  const [editingSession, setEditingSession] = useState<AdminSessionItem | null>(null);
  const [newMeetingLink, setNewMeetingLink] = useState("");

  const { data, isLoading, refetch } = useAdminSessions({
    status: selectedStatus,
    search: searchQuery,
    timeframe,
    issue: issueFilter,
    sort_by: sortBy,
  });
  const updateLinkMutation = useAdminUpdateMeetingLink();

  if (authLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center text-slate-500 text-sm">
        Loading 1-on-1 session bookings console...
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

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSaveMeetingLink = async () => {
    if (!editingSession || !newMeetingLink.trim()) return;

    await updateLinkMutation.mutateAsync({
      sessionId: editingSession.id,
      meetingLink: newMeetingLink.trim(),
    });

    setEditingSession(null);
    setNewMeetingLink("");
    refetch();
  };

  const handleExportCSV = () => {
    if (!data?.items || data.items.length === 0) return;
    const headers = [
      "Session ID",
      "Mentor Name",
      "Mentor Email",
      "Mentor UPI",
      "Student Name",
      "Student Email",
      "Scheduled Date & Time",
      "Duration (Min)",
      "Gross Paid (INR)",
      "Mentor Payout 85% (INR)",
      "Platform Fee 15% (INR)",
      "Meeting Link",
      "Status",
      "Payment ID",
      "Booked At",
    ];

    const rows = data.items.map((s) => [
      `"${s.id}"`,
      `"${(s.mentor_name || "").replace(/"/g, '""')}"`,
      `"${(s.mentor_email || "").replace(/"/g, '""')}"`,
      `"${(s.mentor_upi_id || "").replace(/"/g, '""')}"`,
      `"${(s.student_name || "").replace(/"/g, '""')}"`,
      `"${(s.student_email || "").replace(/"/g, '""')}"`,
      `"${new Date(s.scheduled_at).toLocaleString("en-IN")}"`,
      s.duration_minutes || 30,
      Number(s.amount_paid || 0),
      Number(s.mentor_payout || 0),
      Number(s.platform_fee || 0),
      `"${(s.meeting_link || "").replace(/"/g, '""')}"`,
      `"${s.status}"`,
      `"${s.payment_id || ""}"`,
      `"${new Date(s.created_at).toLocaleString("en-IN")}"`,
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute(
      "download",
      `mentskool_1on1_sessions_${new Date().toISOString().split("T")[0]}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleResetFilters = () => {
    setSelectedStatus("ALL");
    setSearchQuery("");
    setTimeframe("ALL");
    setIssueFilter("ALL");
    setSortBy("DEFAULT");
  };

  const totalGross = Number(data?.total_revenue ?? 0);
  const totalMentorPayout = Number(data?.total_mentor_payout ?? totalGross * 0.85);
  const totalPlatformFee = totalGross - totalMentorPayout;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
      {/* Navigation Header */}
      <AdminHeader
        pendingSessionsCount={data?.pending_count ?? 0}
        onRefresh={() => refetch()}
      />

      {/* Top Metrics Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <Card className="p-4 bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              Total Bookings
            </span>
            <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <Video className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2">
            <h3 className="text-2xl font-bold text-slate-900">
              {data?.total ?? 0}
            </h3>
            <span className="text-[10px] text-slate-400">All 1:1 call requests</span>
          </div>
        </Card>

        <Card className="p-4 bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              Pending Mentor
            </span>
            <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2">
            <h3 className="text-2xl font-bold text-amber-600">
              {data?.pending_count ?? 0}
            </h3>
            <span className="text-[10px] text-slate-400">Awaiting mentor accept</span>
          </div>
        </Card>

        <Card className="p-4 bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              Confirmed Calls
            </span>
            <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Calendar className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2">
            <h3 className="text-2xl font-bold text-indigo-600">
              {data?.confirmed_count ?? 0}
            </h3>
            <span className="text-[10px] text-slate-400">Upcoming sessions</span>
          </div>
        </Card>

        <Card className="p-4 bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              Completed Calls
            </span>
            <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <CheckCircle className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2">
            <h3 className="text-2xl font-bold text-emerald-600">
              {data?.completed_count ?? 0}
            </h3>
            <span className="text-[10px] text-slate-400">Successfully held</span>
          </div>
        </Card>

        <Card className="p-4 bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              Gross Revenue
            </span>
            <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2">
            <h3 className="text-xl font-bold text-slate-900">
              ₹{totalGross.toLocaleString()}
            </h3>
            <span className="text-[10px] text-slate-400 font-medium">
              Platform Fee: ₹{totalPlatformFee.toLocaleString()}
            </span>
          </div>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider">
              1:1 Payouts Due
            </span>
            <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center shadow-sm">
              <Check className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2">
            <h3 className="text-xl font-extrabold text-emerald-950">
              ₹{totalMentorPayout.toLocaleString()}
            </h3>
            <span className="text-[10px] text-emerald-700 font-semibold">
              85% to session mentors
            </span>
          </div>
        </Card>
      </div>

      {/* Enhanced Multi-Filter and Controls Command Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-sm space-y-3.5">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          {/* Status Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200/80 w-full sm:w-auto overflow-x-auto scrollbar-none">
            {[
              { id: "ALL", label: "All Statuses" },
              { id: "CONFIRMED", label: `Confirmed (${data?.confirmed_count ?? 0})` },
              { id: "PENDING_APPROVAL", label: `Pending (${data?.pending_count ?? 0})` },
              { id: "COMPLETED", label: `Completed (${data?.completed_count ?? 0})` },
              { id: "CANCELLED", label: `Cancelled (${data?.cancelled_count ?? 0})` },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedStatus(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedStatus === tab.id
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
                placeholder="Search mentor, student, payment ID..."
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
              title="Download currently filtered session records as CSV spreadsheet"
            >
              <Download className="w-3.5 h-3.5 text-slate-600" />
              <span className="hidden sm:inline">Export CSV</span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                {data?.items?.length ?? 0}
              </span>
            </Button>
          </div>
        </div>

        {/* Second Row: Timeframe, Issue Filter Chips & Sorting */}
        <div className="flex flex-wrap items-center gap-2.5 pt-2 border-t border-slate-100 text-xs">
          <div className="flex items-center gap-1.5 text-slate-500 font-medium shrink-0">
            <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
            <span>Timeframe:</span>
          </div>

          {/* Timeframe Chips */}
          <div className="flex items-center gap-1 bg-slate-100/80 p-0.5 rounded-lg border border-slate-200/70">
            {[
              { id: "ALL", label: "All Time" },
              { id: "TODAY", label: "Today's Calls 📅" },
              { id: "UPCOMING", label: "Upcoming 🚀" },
              { id: "PAST", label: "Past Calls 📜" },
            ].map((tf) => (
              <button
                key={tf.id}
                onClick={() => setTimeframe(tf.id)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all ${
                  timeframe === tf.id
                    ? "bg-white text-indigo-700 shadow-xs font-bold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {tf.label}
              </button>
            ))}
          </div>

          <div className="h-4 w-[1px] bg-slate-200 hidden sm:block" />

          {/* Issue Quick Filter Chips */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setIssueFilter(issueFilter === "missing_link" ? "ALL" : "missing_link")}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold border flex items-center gap-1 transition-all ${
                issueFilter === "missing_link"
                  ? "bg-rose-100 text-rose-800 border-rose-300 font-bold shadow-xs"
                  : "bg-rose-50/50 text-rose-700 border-rose-200 hover:bg-rose-100"
              }`}
            >
              <AlertTriangle className="w-3 h-3 text-rose-600" />
              <span>Missing Meeting Link</span>
            </button>

            <button
              onClick={() => setIssueFilter(issueFilter === "overdue" ? "ALL" : "overdue")}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold border flex items-center gap-1 transition-all ${
                issueFilter === "overdue"
                  ? "bg-amber-100 text-amber-800 border-amber-300 font-bold shadow-xs"
                  : "bg-amber-50/50 text-amber-700 border-amber-200 hover:bg-amber-100"
              }`}
            >
              <Clock className="w-3 h-3 text-amber-600" />
              <span>Pending &gt; 24h</span>
            </button>
          </div>

          {/* Sort By Filter */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="h-8 rounded-lg border border-slate-200 bg-indigo-50/50 px-2.5 text-xs text-indigo-900 font-semibold focus:outline-none focus:ring-1 focus:ring-indigo-500 ml-auto"
          >
            <option value="DEFAULT">Sort: Scheduled Time (Nearest First)</option>
            <option value="scheduled_desc">Scheduled Time (Furthest First)</option>
            <option value="amount_desc">Highest Amount Paid</option>
            <option value="created_desc">Recently Booked First</option>
            <option value="created_asc">Oldest Booked First</option>
          </select>

          {/* Clear Filters Reset */}
          {(timeframe !== "ALL" ||
            issueFilter !== "ALL" ||
            selectedStatus !== "ALL" ||
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

      {/* Sessions Table */}
      <Card className="border border-slate-200 overflow-hidden shadow-sm">
        {isLoading ? (
          <div className="p-16 text-center text-slate-400 text-sm">
            Fetching 1-on-1 session records and transactions...
          </div>
        ) : !data?.items || data.items.length === 0 ? (
          <div className="p-16 text-center space-y-2">
            <Video className="w-10 h-10 mx-auto text-slate-300" />
            <p className="text-sm font-medium text-slate-800">No session bookings found</p>
            <p className="text-xs text-slate-400">
              {searchQuery || timeframe !== "ALL" || issueFilter !== "ALL"
                ? "Try clearing your search query or reset filter options."
                : "No bookings currently match the selected status filter."}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="py-3.5 px-4">Scheduled Time & Agenda</th>
                  <th className="py-3.5 px-4">Student</th>
                  <th className="py-3.5 px-4">Mentor</th>
                  <th className="py-3.5 px-4">Financials & Payout</th>
                  <th className="py-3.5 px-4">Meeting Link</th>
                  <th className="py-3.5 px-4">Status & Health</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {data.items.map((session) => {
                  const dt = new Date(session.scheduled_at);
                  const scheduledStr = dt.toLocaleString("en-IN", {
                    weekday: "short",
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  });

                  const isConfirmed = session.status === "CONFIRMED";
                  const isMissingLink = isConfirmed && (!session.meeting_link || session.meeting_link.trim() === "");
                  
                  const isPending = session.status === "PENDING_APPROVAL";
                  const bookedAt = new Date(session.created_at);
                  const hoursSinceBooking = (Date.now() - bookedAt.getTime()) / (1000 * 60 * 60);
                  const isOverduePending = isPending && hoursSinceBooking > 24;

                  return (
                    <tr
                      key={session.id}
                      className={`hover:bg-slate-50/70 transition-colors ${
                        isMissingLink ? "bg-rose-50/20" : ""
                      }`}
                    >
                      {/* Scheduled Time & Agenda */}
                      <td className="py-4 px-4 align-top">
                        <div className="space-y-1 max-w-xs">
                          <div className="font-bold text-slate-900 flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                            <span>{scheduledStr}</span>
                          </div>
                          <span className="text-[11px] text-slate-500 block">
                            Duration: {session.duration_minutes} minutes
                          </span>
                          <div className="p-2 rounded bg-slate-50 border border-slate-200 text-[11px] text-slate-700 line-clamp-2">
                            {session.agenda_notes || "No agenda provided"}
                          </div>
                        </div>
                      </td>

                      {/* Student */}
                      <td className="py-4 px-4 align-top">
                        <div className="space-y-0.5">
                          <span className="font-bold text-slate-900 block">
                            {session.student_name}
                          </span>
                          <span className="text-slate-500 text-[11px] block">
                            {session.student_email}
                          </span>
                        </div>
                      </td>

                      {/* Mentor */}
                      <td className="py-4 px-4 align-top">
                        <div className="space-y-0.5">
                          <span className="font-bold text-slate-900 block">
                            {session.mentor_name}
                          </span>
                          <span className="text-slate-500 text-[11px] block">
                            {session.mentor_email}
                          </span>
                          {session.mentor_college && (
                            <span className="text-[10px] text-slate-400 block">
                              {session.mentor_college}
                            </span>
                          )}
                          {session.mentor_upi_id && (
                            <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 inline-flex mt-1">
                              <span>UPI: {session.mentor_upi_id}</span>
                              <button
                                onClick={() => handleCopy(session.mentor_upi_id!, session.id)}
                                title="Copy UPI"
                                className="text-emerald-700 hover:text-emerald-900"
                              >
                                {copiedId === session.id ? (
                                  <Check className="w-3 h-3 text-emerald-600" />
                                ) : (
                                  <Copy className="w-3 h-3" />
                                )}
                              </button>
                            </div>
                          )}
                        </div>
                      </td>

                      {/* Financials & Payout */}
                      <td className="py-4 px-4 align-top">
                        <div className="space-y-1">
                          <div className="text-slate-900">
                            Paid: <span className="font-bold">₹{Number(session.amount_paid).toLocaleString()}</span>
                          </div>
                          <div className="text-[11px] text-emerald-700 font-semibold">
                            Mentor Payout (85%): ₹{Number(session.mentor_payout).toLocaleString()}
                          </div>
                          <div className="text-[10px] text-slate-400">
                            Platform Fee (15%): ₹{Number(session.platform_fee).toLocaleString()}
                          </div>
                          {session.payment_id && (
                            <div className="flex items-center gap-1 font-mono text-[10px] text-slate-500 bg-slate-100 px-1 py-0.5 rounded border border-slate-200">
                              <span className="truncate max-w-[100px]">{session.payment_id}</span>
                              <button
                                onClick={() => handleCopy(session.payment_id!, `pay_${session.id}`)}
                                title="Copy Payment ID"
                                className="text-slate-400 hover:text-slate-700"
                              >
                                {copiedId === `pay_${session.id}` ? (
                                  <Check className="w-3 h-3 text-emerald-600" />
                                ) : (
                                  <Copy className="w-3 h-3" />
                                )}
                              </button>
                            </div>
                          )}
                        </div>
                      </td>

                      {/* Meeting Link */}
                      <td className="py-4 px-4 align-top">
                        <div className="space-y-1.5 max-w-[160px]">
                          {session.meeting_link ? (
                            <div className="space-y-1">
                              <a
                                href={session.meeting_link}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1 text-xs text-indigo-600 hover:text-indigo-800 font-semibold underline truncate max-w-[150px]"
                              >
                                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                                <span>Join Call</span>
                              </a>
                              <button
                                onClick={() => {
                                  setEditingSession(session);
                                  setNewMeetingLink(session.meeting_link || "");
                                }}
                                className="text-[10px] text-slate-500 hover:text-slate-800 underline block"
                              >
                                Edit Link
                              </button>
                            </div>
                          ) : (
                            <Button
                              variant="secondary"
                              size="sm"
                              className={`text-[11px] py-1 px-2 flex items-center gap-1 ${
                                isConfirmed
                                  ? "border-rose-300 text-rose-700 bg-rose-50 hover:bg-rose-100 animate-pulse font-bold"
                                  : "border-indigo-200 text-indigo-700 bg-indigo-50/70 hover:bg-indigo-100"
                              }`}
                              onClick={() => {
                                setEditingSession(session);
                                setNewMeetingLink("");
                              }}
                            >
                              <LinkIcon className="w-3 h-3" />
                              <span>{isConfirmed ? "Fix Link (Missing!)" : "Add Link"}</span>
                            </Button>
                          )}
                        </div>
                      </td>

                      {/* Status & Health Warnings */}
                      <td className="py-4 px-4 align-top">
                        <div className="space-y-1.5">
                          {session.status === "CONFIRMED" && (
                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                              <CheckCircle className="w-3 h-3" />
                              Confirmed
                            </span>
                          )}
                          {session.status === "COMPLETED" && (
                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                              <Check className="w-3 h-3" />
                              Completed
                            </span>
                          )}
                          {session.status === "PENDING_APPROVAL" && (
                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200 animate-pulse">
                              <Clock className="w-3 h-3" />
                              Pending Accept
                            </span>
                          )}
                          {session.status === "CANCELLED" && (
                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
                              <XCircle className="w-3 h-3" />
                              Cancelled
                            </span>
                          )}

                          {/* Actionable Health Flags */}
                          {isMissingLink && (
                            <div className="flex items-center gap-1 text-[10px] font-bold text-rose-700 bg-rose-100/80 px-2 py-0.5 rounded-md border border-rose-200">
                              <AlertTriangle className="w-3 h-3 text-rose-600 shrink-0" />
                              <span>Missing GMeet Link</span>
                            </div>
                          )}

                          {isOverduePending && (
                            <div className="flex items-center gap-1 text-[10px] font-bold text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded-md border border-amber-200">
                              <Clock className="w-3 h-3 text-amber-600 shrink-0" />
                              <span>Pending &gt; 24h</span>
                            </div>
                          )}
                        </div>
                      </td>

                      {/* Actions */}
                      <td className="py-4 px-4 align-top text-right">
                        <Button
                          variant="secondary"
                          size="sm"
                          className="text-xs py-1 px-2.5 border-slate-200"
                          onClick={() => {
                            setEditingSession(session);
                            setNewMeetingLink(session.meeting_link || "");
                          }}
                        >
                          Manage Link
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </Card>

      {/* Edit Meeting Link Modal */}
      {editingSession && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <Card className="w-full max-w-md bg-white p-6 space-y-4 shadow-xl border border-slate-200">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h3 className="text-base font-bold font-display text-slate-900">
                Set Session Meeting Link
              </h3>
              <button
                onClick={() => setEditingSession(null)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <p className="text-xs text-slate-600">
                Provide or update the video meeting URL (Google Meet, Zoom, etc.) for{" "}
                <strong>{editingSession.student_name}</strong> and mentor{" "}
                <strong>{editingSession.mentor_name}</strong>.
              </p>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Meeting URL
                </label>
                <Input
                  placeholder="https://meet.google.com/xyz-abcd-efg"
                  value={newMeetingLink}
                  onChange={(e) => setNewMeetingLink(e.target.value)}
                  className="text-xs"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-200">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setEditingSession(null)}
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                size="sm"
                className="bg-indigo-600 hover:bg-indigo-700 text-white"
                onClick={handleSaveMeetingLink}
                disabled={updateLinkMutation.isPending || !newMeetingLink.trim()}
              >
                {updateLinkMutation.isPending ? "Saving..." : "Save Meeting Link"}
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}

export default function AdminSessionsPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 py-16 text-center text-slate-500 text-sm">
          Loading 1-on-1 session bookings console...
        </div>
      }
    >
      <AdminSessionsContent />
    </Suspense>
  );
}
