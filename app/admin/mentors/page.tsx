"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import { useAdminMentors, useAdminVerifyMentor } from "@/hooks/useAdmin";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { MentorPayoutBreakdownModal } from "@/components/admin/MentorPayoutBreakdownModal";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Input } from "@/components/ui/Input";
import {
  ShieldCheck,
  Clock,
  XCircle,
  Users,
  DollarSign,
  Search,
  ExternalLink,
  Copy,
  Check,
  Phone,
  Mail,
  GraduationCap,
  Award,
  AlertCircle,
  X,
  FileText,
  Activity,
  Video,
  Receipt,
  Sparkles,
} from "lucide-react";
import { AdminMentorItem, MentorCategory, CATEGORY_LABELS } from "@/lib/types";
import { MentorAuditModal } from "@/components/MentorAuditModal";

export default function AdminMentorsPage() {
  const router = useRouter();
  const { user, isAuthenticated, isLoading: authLoading } = useAuthStore();
  const [selectedStatus, setSelectedStatus] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Mentor Activity Audit Modal
  const [auditMentorId, setAuditMentorId] = useState<string | null>(null);

  // Verification modal state
  const [activeModalMentor, setActiveModalMentor] = useState<AdminMentorItem | null>(null);
  const [modalAction, setModalAction] = useState<"APPROVE" | "REJECT" | null>(null);
  const [rejectionReason, setRejectionReason] = useState("");

  // Document preview modal
  const [previewDoc, setPreviewDoc] = useState<{ url: string; title: string } | null>(null);

  // Payout breakdown modal
  const [payoutBreakdownMentor, setPayoutBreakdownMentor] = useState<AdminMentorItem | null>(null);

  const { data, isLoading, refetch } = useAdminMentors(selectedStatus, searchQuery);
  const verifyMutation = useAdminVerifyMentor();

  if (authLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center text-slate-500 text-sm">
        Loading mentor verification and payouts console...
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

  const handleCopyUpi = (upi: string, id: string) => {
    navigator.clipboard.writeText(upi);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleConfirmVerify = async () => {
    if (!activeModalMentor || !modalAction) return;

    await verifyMutation.mutateAsync({
      mentorId: activeModalMentor.user_id,
      action: modalAction,
      rejectionReason: modalAction === "REJECT" ? rejectionReason : undefined,
    });

    setActiveModalMentor(null);
    setModalAction(null);
    setRejectionReason("");
    refetch();
  };

  const cohortGrossTotal = Number(data?.total_monthly_revenue ?? 0);
  const cohortPayoutTotal = Number(data?.total_cohort_payout_due ?? cohortGrossTotal * 0.85);

  const oneOnOneGrossTotal = Number(data?.total_one_on_one_revenue ?? 0);
  const oneOnOnePayoutTotal = Number(data?.total_one_on_one_payout_due ?? oneOnOneGrossTotal * 0.85);

  const finalTotalPayout = Number(data?.total_payout_due ?? cohortPayoutTotal + oneOnOnePayoutTotal);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
      {/* Navigation Header */}
      <AdminHeader
        pendingMentorsCount={data?.pending_count ?? 0}
        onRefresh={() => refetch()}
      />

      {/* Top Metrics Strip with Separated Cohort & 1:1 Breakdown */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {/* Pending Audits */}
        <Card className="p-4 bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              Pending Audits
            </span>
            <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2">
            <h3 className="text-2xl font-bold text-amber-600">
              {data?.pending_count ?? 0}
            </h3>
            <span className="text-[10px] text-slate-400">Applications queue</span>
          </div>
        </Card>

        {/* Approved Mentors */}
        <Card className="p-4 bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              Approved
            </span>
            <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2">
            <h3 className="text-2xl font-bold text-emerald-600">
              {data?.approved_count ?? 0}
            </h3>
            <span className="text-[10px] text-slate-400">Live active mentors</span>
          </div>
        </Card>

        {/* Active Students */}
        <Card className="p-4 bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              Cohort Students
            </span>
            <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2">
            <h3 className="text-2xl font-bold text-indigo-600">
              {data?.total_active_students ?? 0}
            </h3>
            <span className="text-[10px] text-slate-400">Subscribed learners</span>
          </div>
        </Card>

        {/* Cohort Revenue & Payout */}
        <Card className="p-4 bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              Cohort Revenue
            </span>
            <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2">
            <h3 className="text-xl font-bold text-slate-900">
              ₹{cohortGrossTotal.toLocaleString()}
            </h3>
            <span className="text-[10px] text-indigo-600 font-medium">
              Payout (85%): ₹{cohortPayoutTotal.toLocaleString()}
            </span>
          </div>
        </Card>

        {/* 1:1 Calls Revenue & Payout */}
        <Card className="p-4 bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              1:1 Calls Revenue
            </span>
            <div className="w-7 h-7 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center">
              <Video className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2">
            <h3 className="text-xl font-bold text-slate-900">
              ₹{oneOnOneGrossTotal.toLocaleString()}
            </h3>
            <span className="text-[10px] text-cyan-700 font-medium">
              Payout (85%): ₹{oneOnOnePayoutTotal.toLocaleString()}
            </span>
          </div>
        </Card>

        {/* FINAL COMBINED PAYOUTS DUE */}
        <Card className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider">
              Total Payouts Due
            </span>
            <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center shadow-sm">
              <Check className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2">
            <h3 className="text-xl font-extrabold text-emerald-950">
              ₹{finalTotalPayout.toLocaleString()}
            </h3>
            <span className="text-[10px] text-emerald-700 font-semibold block">
              Cohort + 1:1 Combined
            </span>
          </div>
        </Card>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Status Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200/80 w-full sm:w-auto overflow-x-auto">
          {[
            { id: "ALL", label: "All Mentors" },
            { id: "PENDING", label: `Pending (${data?.pending_count ?? 0})` },
            { id: "APPROVED", label: `Approved (${data?.approved_count ?? 0})` },
            { id: "REJECTED", label: `Rejected (${data?.rejected_count ?? 0})` },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedStatus(tab.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                selectedStatus === tab.id
                  ? "bg-white text-slate-900 shadow-sm font-bold border border-slate-200/60"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <Input
            placeholder="Search by name, email, college, phone..."
            className="pl-9 text-xs"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Mentors Table */}
      <Card className="border border-slate-200 overflow-hidden shadow-sm">
        {isLoading ? (
          <div className="p-16 text-center text-slate-400 text-sm">
            Fetching mentors and financial ledgers...
          </div>
        ) : !data?.items || data.items.length === 0 ? (
          <div className="p-16 text-center space-y-2">
            <Users className="w-10 h-10 mx-auto text-slate-300" />
            <p className="text-sm font-medium text-slate-800">No mentors found</p>
            <p className="text-xs text-slate-400">
              {searchQuery
                ? "Try clearing your search query."
                : "No mentors currently match the selected status filter."}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="py-3.5 px-4">Mentor Details</th>
                  <th className="py-3.5 px-4">College & Rank</th>
                  <th className="py-3.5 px-4">Credentials</th>
                  <th className="py-3.5 px-4 bg-indigo-50/40 border-l border-indigo-100">
                    <span className="flex items-center gap-1 text-indigo-900">
                      <Users className="w-3.5 h-3.5" />
                      Cohort Financials
                    </span>
                  </th>
                  <th className="py-3.5 px-4 bg-blue-50/40 border-l border-blue-100">
                    <span className="flex items-center gap-1 text-blue-900">
                      <Video className="w-3.5 h-3.5" />
                      1:1 Call Financials
                    </span>
                  </th>
                  <th className="py-3.5 px-4 bg-emerald-50/70 border-l border-emerald-200">
                    <span className="flex items-center gap-1 text-emerald-950 font-bold">
                      <DollarSign className="w-3.5 h-3.5" />
                      Final Total Payout
                    </span>
                  </th>
                  <th className="py-3.5 px-4">Payout Account (UPI)</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {data.items.map((m) => {
                  const mCohortGross = Number(m.total_monthly_revenue || 0);
                  const mCohortPayout = Number(m.cohort_payout_due || mCohortGross * 0.85);

                  const m1on1Gross = Number(m.one_on_one_total_revenue || 0);
                  const m1on1Payout = Number(m.one_on_one_payout_due || m1on1Gross * 0.85);

                  const mFinalPayout = Number(m.payout_due || mCohortPayout + m1on1Payout);

                  return (
                    <tr
                      key={m.user_id}
                      className="hover:bg-slate-50/70 transition-colors"
                    >
                      {/* Mentor Details */}
                      <td className="py-4 px-4 align-top">
                        <div className="space-y-1">
                          <button
                            onClick={() => setAuditMentorId(m.user_id)}
                            className="font-bold text-sm text-slate-900 hover:text-indigo-600 text-left flex items-center gap-1.5 transition-colors group"
                            title="Click to view detailed activity & productivity audit"
                          >
                            <span>{m.full_name}</span>
                            <Activity className="w-3 h-3 text-indigo-600 opacity-60 group-hover:opacity-100" />
                          </button>
                          <div className="flex items-center gap-1.5 text-slate-500">
                            <Mail className="w-3.5 h-3.5" />
                            <span>{m.email}</span>
                          </div>
                          {m.phone_number ? (
                            <div className="flex items-center gap-1.5 text-indigo-600 font-medium">
                              <Phone className="w-3.5 h-3.5" />
                              <a
                                href={`https://wa.me/${m.phone_number.replace(/\D/g, "")}`}
                                target="_blank"
                                rel="noreferrer"
                                className="hover:underline"
                              >
                                {m.phone_number}
                              </a>
                            </div>
                          ) : (
                            <span className="text-slate-400 italic text-[11px]">No phone</span>
                          )}
                          <div className="flex flex-wrap items-center gap-1.5 pt-1">
                            <Badge variant="DEFAULT" className="text-[10px]">
                              {CATEGORY_LABELS[m.category as MentorCategory] || m.category}
                            </Badge>
                            {m.activity_status === "ACTIVE_TODAY" ? (
                              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                Active Today
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                                Inactive
                              </span>
                            )}
                          </div>
                        </div>
                      </td>

                      {/* College & Rank */}
                      <td className="py-4 px-4 align-top">
                        <div className="space-y-1">
                          <div className="flex items-center gap-1.5 font-medium text-slate-900">
                            <GraduationCap className="w-4 h-4 text-slate-400 shrink-0" />
                            <span>{m.college || "College not set"}</span>
                          </div>
                          {m.college_email && (
                            <div className="text-[11px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded inline-block">
                              {m.college_email}
                            </div>
                          )}
                          <div className="flex items-center gap-1.5 text-amber-700 font-semibold">
                            <Award className="w-4 h-4 text-amber-500 shrink-0" />
                            <span>{m.exam_rank || "Rank not set"}</span>
                          </div>
                        </div>
                      </td>

                      {/* Verification Proofs */}
                      <td className="py-4 px-4 align-top">
                        <div className="space-y-2">
                          {m.college_id_proof_url ? (
                            <button
                              onClick={() =>
                                setPreviewDoc({
                                  url: m.college_id_proof_url!,
                                  title: `${m.full_name}'s College ID Card`,
                                })
                              }
                              className="flex items-center gap-1 text-indigo-600 hover:text-indigo-800 font-semibold underline text-[11px]"
                            >
                              <FileText className="w-3.5 h-3.5" />
                              View College ID
                            </button>
                          ) : (
                            <span className="text-slate-400 italic text-[11px] block">No College ID</span>
                          )}

                          {m.scorecard_proof_url ? (
                            <button
                              onClick={() =>
                                setPreviewDoc({
                                  url: m.scorecard_proof_url!,
                                  title: `${m.full_name}'s Exam Scorecard`,
                                })
                              }
                              className="flex items-center gap-1 text-indigo-600 hover:text-indigo-800 font-semibold underline text-[11px]"
                            >
                              <FileText className="w-3.5 h-3.5" />
                              View Scorecard
                            </button>
                          ) : (
                            <span className="text-slate-400 italic text-[11px] block">No Scorecard</span>
                          )}
                        </div>
                      </td>

                      {/* Cohort Financials (Separated) */}
                      <td className="py-4 px-4 align-top bg-indigo-50/20 border-l border-indigo-100">
                        <div className="space-y-1">
                          <div className="text-slate-900">
                            Active: <span className="font-bold text-indigo-700">{m.active_students_count}</span>
                            <span className="text-slate-400"> / {m.seat_limit} seats</span>
                          </div>
                          <div className="text-slate-600 text-[11px]">
                            Rate: <span className="font-semibold text-slate-800">₹{Number(m.price_per_month)}/mo</span>
                          </div>
                          <div className="text-slate-500 text-[11px]">
                            Gross: ₹{mCohortGross.toLocaleString()}
                          </div>
                          <div className="pt-1 border-t border-indigo-100">
                            <span className="text-[10px] text-indigo-700 uppercase tracking-wider block font-semibold">
                              Cohort Due (85%):
                            </span>
                            <span className="text-sm font-bold text-indigo-900">
                              ₹{mCohortPayout.toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* 1:1 Call Financials (Separated) */}
                      <td className="py-4 px-4 align-top bg-blue-50/20 border-l border-blue-100">
                        <div className="space-y-1">
                          <div className="text-slate-900">
                            Calls: <span className="font-bold text-blue-700">{m.one_on_one_bookings_count || 0}</span>
                            <span className="text-slate-500 text-[11px]"> ({m.one_on_one_completed_count || 0} done)</span>
                          </div>
                          <div className="text-slate-600 text-[11px]">
                            Rate: <span className="font-semibold text-slate-800">₹{Number(m.one_on_one_price || 0)}/30m</span>
                          </div>
                          <div className="text-slate-500 text-[11px]">
                            Gross: ₹{m1on1Gross.toLocaleString()}
                          </div>
                          <div className="pt-1 border-t border-blue-100">
                            <span className="text-[10px] text-blue-700 uppercase tracking-wider block font-semibold">
                              1:1 Due (85%):
                            </span>
                            <span className="text-sm font-bold text-blue-900">
                              ₹{m1on1Payout.toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* FINAL COMBINED TOTAL PAYOUT DUE (Prominent Column) */}
                      <td className="py-4 px-4 align-top bg-emerald-50/40 border-l border-emerald-200">
                        <div className="space-y-1.5">
                          <div className="p-2 rounded-lg bg-emerald-600 text-white shadow-xs">
                            <span className="text-[10px] font-semibold uppercase tracking-wider block text-emerald-100">
                              Total Payout Due
                            </span>
                            <span className="text-base font-extrabold block">
                              ₹{mFinalPayout.toLocaleString()}
                            </span>
                          </div>
                          <button
                            onClick={() => setPayoutBreakdownMentor(m)}
                            className="w-full text-center text-[10px] font-bold text-emerald-700 hover:text-emerald-900 underline flex items-center justify-center gap-1 py-0.5"
                          >
                            <Receipt className="w-3 h-3" />
                            <span>View Breakdown</span>
                          </button>
                        </div>
                      </td>

                      {/* Payout Account */}
                      <td className="py-4 px-4 align-top">
                        <div className="space-y-1">
                          {m.payout_upi_id ? (
                            <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded border border-slate-200">
                              <span className="font-mono text-[11px] text-slate-800 truncate max-w-[130px]">
                                {m.payout_upi_id}
                              </span>
                              <button
                                onClick={() => handleCopyUpi(m.payout_upi_id!, m.user_id)}
                                className="text-slate-400 hover:text-slate-700 shrink-0"
                                title="Copy UPI ID"
                              >
                                {copiedId === m.user_id ? (
                                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                                ) : (
                                  <Copy className="w-3.5 h-3.5" />
                                )}
                              </button>
                            </div>
                          ) : m.payout_account_number ? (
                            <div className="text-[11px] text-slate-800 space-y-0.5">
                              <div>Acc: {m.payout_account_number}</div>
                              <div>IFSC: {m.payout_ifsc}</div>
                            </div>
                          ) : (
                            <span className="text-slate-400 italic text-[11px]">Not set</span>
                          )}
                        </div>
                      </td>

                      {/* Status */}
                      <td className="py-4 px-4 align-top">
                        {m.verification_status === "APPROVED" && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-full border border-emerald-200">
                            <ShieldCheck className="w-3 h-3" />
                            Approved
                          </span>
                        )}
                        {m.verification_status === "PENDING" && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-1 rounded-full border border-amber-200 animate-pulse">
                            <Clock className="w-3 h-3" />
                            Pending Audit
                          </span>
                        )}
                        {m.verification_status === "REJECTED" && (
                          <div className="space-y-1">
                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-rose-700 bg-rose-50 px-2 py-1 rounded-full border border-rose-200">
                              <XCircle className="w-3 h-3" />
                              Rejected
                            </span>
                            {m.rejection_reason && (
                              <p className="text-[10px] text-rose-600 max-w-[130px] line-clamp-2">
                                {m.rejection_reason}
                              </p>
                            )}
                          </div>
                        )}
                      </td>

                      {/* Actions */}
                      <td className="py-4 px-4 align-top text-right">
                        <div className="flex items-center justify-end gap-1.5 flex-wrap">
                          <Button
                            variant="secondary"
                            size="sm"
                            className="text-xs py-1 px-2 border-slate-200 hover:bg-slate-100 text-slate-700 flex items-center gap-1 font-medium"
                            onClick={() => setAuditMentorId(m.user_id)}
                            title="Audit mentor platform activity & productivity"
                          >
                            <Activity className="w-3.5 h-3.5 text-indigo-600" />
                            Audit
                          </Button>

                          {m.verification_status !== "APPROVED" && (
                            <Button
                              variant="primary"
                              size="sm"
                              className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs py-1 px-2.5"
                              onClick={() => {
                                setActiveModalMentor(m);
                                setModalAction("APPROVE");
                              }}
                            >
                              Approve
                            </Button>
                          )}

                          {m.verification_status !== "REJECTED" && (
                            <Button
                              variant="secondary"
                              size="sm"
                              className="text-rose-600 hover:bg-rose-50 border-rose-200 text-xs py-1 px-2.5"
                              onClick={() => {
                                setActiveModalMentor(m);
                                setModalAction("REJECT");
                              }}
                            >
                              Reject
                            </Button>
                          )}
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

      {/* Itemized Payout Settlement Modal */}
      <MentorPayoutBreakdownModal
        mentor={payoutBreakdownMentor}
        onClose={() => setPayoutBreakdownMentor(null)}
      />

      {/* Confirmation Modal */}
      {activeModalMentor && modalAction && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <Card className="w-full max-w-md bg-white p-6 space-y-4 shadow-xl border border-slate-200">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h3 className="text-lg font-bold font-display text-slate-900">
                {modalAction === "APPROVE" ? "Approve Mentor Cohort" : "Reject Application"}
              </h3>
              <button
                onClick={() => {
                  setActiveModalMentor(null);
                  setModalAction(null);
                }}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {modalAction === "APPROVE" ? (
              <div className="space-y-3">
                <p className="text-sm text-slate-600">
                  Are you sure you want to approve <strong>{activeModalMentor.full_name}</strong>?
                </p>
                <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-lg text-xs text-emerald-800 space-y-1">
                  <p className="font-semibold">What happens upon approval:</p>
                  <ul className="list-disc list-inside space-y-0.5">
                    <li>Profile is immediately marked <strong>VERIFIED</strong>.</li>
                    <li>Cohort goes live in public student directories.</li>
                    <li>An automated confirmation email is sent to <strong>{activeModalMentor.email}</strong>.</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-sm text-slate-600">
                  Please provide a reason for rejecting <strong>{activeModalMentor.full_name}</strong>:
                </p>
                <Input
                  placeholder="e.g. Blurry ID proof, invalid rank scorecard..."
                  value={rejectionReason}
                  onChange={(e) => setRejectionReason(e.target.value)}
                  className="text-xs"
                />
                <p className="text-xs text-slate-400">
                  This note will be emailed to the mentor so they can re-upload proper credentials.
                </p>
              </div>
            )}

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-200">
              <Button
                variant="secondary"
                onClick={() => {
                  setActiveModalMentor(null);
                  setModalAction(null);
                }}
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                className={modalAction === "APPROVE" ? "bg-emerald-600 hover:bg-emerald-700" : "bg-rose-600 hover:bg-rose-700"}
                onClick={handleConfirmVerify}
                disabled={verifyMutation.isPending}
              >
                {verifyMutation.isPending ? "Processing..." : modalAction === "APPROVE" ? "Confirm & Approve" : "Confirm Rejection"}
              </Button>
            </div>
          </Card>
        </div>
      )}

      {/* Document Preview Modal */}
      {previewDoc && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <Card className="w-full max-w-3xl bg-white p-4 space-y-3 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h3 className="text-base font-bold font-display text-slate-900 truncate pr-4">
                {previewDoc.title}
              </h3>
              <div className="flex items-center gap-3">
                <a
                  href={previewDoc.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-indigo-600 hover:underline flex items-center gap-1 font-semibold"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Open in New Tab
                </a>
                <button
                  onClick={() => setPreviewDoc(null)}
                  className="text-slate-400 hover:text-slate-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="max-h-[75vh] overflow-auto flex items-center justify-center bg-slate-50 rounded-lg p-2">
              {previewDoc.url.toLowerCase().endsWith(".pdf") ? (
                <iframe
                  src={previewDoc.url}
                  className="w-full h-[65vh] rounded border border-slate-200"
                  title={previewDoc.title}
                />
              ) : (
                <img
                  src={previewDoc.url}
                  alt={previewDoc.title}
                  className="max-h-[65vh] object-contain rounded"
                />
              )}
            </div>
          </Card>
        </div>
      )}

      {/* Mentor Activity & Productivity Audit Modal */}
      <MentorAuditModal
        mentorId={auditMentorId}
        onClose={() => setAuditMentorId(null)}
        currentStatus={data?.items?.find((m) => m.user_id === auditMentorId)?.verification_status}
        onVerify={(action) => {
          const target = data?.items?.find((m) => m.user_id === auditMentorId);
          if (target) {
            setActiveModalMentor(target);
            setModalAction(action);
            setAuditMentorId(null);
          }
        }}
      />
    </div>
  );
}
