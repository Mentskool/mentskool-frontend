"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import { useAdminMentors, useAdminVerifyMentor } from "@/hooks/useAdmin";
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
  Zap,
} from "lucide-react";
import api from "@/lib/api";
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
  const [isRunningAudit, setIsRunningAudit] = useState(false);
  const [auditToast, setAuditToast] = useState<string | null>(null);

  // Verification modal state
  const [activeModalMentor, setActiveModalMentor] = useState<AdminMentorItem | null>(null);
  const [modalAction, setModalAction] = useState<"APPROVE" | "REJECT" | null>(null);
  const [rejectionReason, setRejectionReason] = useState("");

  // Document preview modal
  const [previewDoc, setPreviewDoc] = useState<{ url: string; title: string } | null>(null);

  const { data, isLoading, refetch } = useAdminMentors(selectedStatus, searchQuery);
  const verifyMutation = useAdminVerifyMentor();

  if (authLoading) {
    return (
      <div className="max-w-6xl mx-auto py-16 text-center text-ink-muted">
        Loading admin console...
      </div>
    );
  }

  if (!isAuthenticated || user?.role !== "ADMIN") {
    return (
      <div className="max-w-md mx-auto py-20 text-center space-y-4">
        <div className="w-16 h-16 mx-auto rounded-full bg-rose-50 text-rose-600 flex items-center justify-center">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold font-display text-ink">
          Administrator Access Required
        </h2>
        <p className="text-sm text-ink-muted">
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

  const handleRunInactivityAudit = async () => {
    setIsRunningAudit(true);
    try {
      const res: any = await api.post("/admin/mentors/run-inactivity-audit");
      const info = res?.data ?? res ?? {};
      setAuditToast(
        `Audit complete: ${info.checked_mentors ?? 0} mentors scanned. ${info.warnings_sent ?? 0} 7-day warnings sent, ${info.auto_paused_mentors ?? 0} auto-paused.`
      );
      refetch();
      setTimeout(() => setAuditToast(null), 7000);
    } catch (err) {
      alert("Failed to execute inactivity check.");
    } finally {
      setIsRunningAudit(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Toast Notification */}
      {auditToast && (
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center justify-between shadow-sm animate-fadeIn">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>{auditToast}</span>
          </div>
          <button onClick={() => setAuditToast(null)} className="text-emerald-600 hover:text-emerald-800">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-6">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-bold font-display text-ink">
              Mentor Verification & Payouts Console
            </h1>
            <Badge variant="INDIGO">ADMIN</Badge>
          </div>

          <p className="text-sm text-ink-muted mt-1">
            Review submitted credentials, verify exam rank scorecards, audit mentor activity, and calculate monthly payouts.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="secondary"
            className="flex items-center gap-2 border-indigo-200 text-indigo-700 bg-indigo-50/50 hover:bg-indigo-100 font-semibold"
            disabled={isRunningAudit}
            onClick={handleRunInactivityAudit}
          >
            <Zap className={`w-4 h-4 text-indigo-600 ${isRunningAudit ? "animate-spin" : ""}`} />
            {isRunningAudit ? "Auditing Mentors..." : "Run Inactivity Audit"}
          </Button>
        </div>
      </div>

      {/* Top Metrics Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        <Card className="p-4 bg-white border border-border flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-medium text-ink-muted">Pending Audits</p>
            <h3 className="text-2xl font-bold text-amber-600">
              {data?.pending_count ?? 0}
            </h3>
          </div>
        </Card>

        <Card className="p-4 bg-white border border-border flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-medium text-ink-muted">Approved Mentors</p>
            <h3 className="text-2xl font-bold text-emerald-600">
              {data?.approved_count ?? 0}
            </h3>
          </div>
        </Card>

        <Card className="p-4 bg-white border border-border flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-medium text-ink-muted">Active Students</p>
            <h3 className="text-2xl font-bold text-indigo-600">
              {data?.total_active_students ?? 0}
            </h3>
          </div>
        </Card>

        <Card className="p-4 bg-white border border-border flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <DollarSign className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-medium text-ink-muted">Monthly Revenue</p>
            <h3 className="text-xl font-bold text-ink">
              ₹{Number(data?.total_monthly_revenue ?? 0).toLocaleString()}
            </h3>
          </div>
        </Card>

        <Card className="p-4 bg-emerald-50 border border-emerald-100 flex items-center gap-4 col-span-2 lg:col-span-1">
          <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
            <Check className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-medium text-emerald-800">Total Payouts Due</p>
            <h3 className="text-xl font-bold text-emerald-950">
              ₹{Number(data?.total_payout_due ?? 0).toLocaleString()}
            </h3>
          </div>
        </Card>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Status Tabs */}
        <div className="flex items-center gap-2 p-1 bg-surface-subtle rounded-xl border border-border w-full sm:w-auto overflow-x-auto">
          {[
            { id: "ALL", label: "All Mentors" },
            { id: "PENDING", label: `Pending (${data?.pending_count ?? 0})` },
            { id: "APPROVED", label: `Approved (${data?.approved_count ?? 0})` },
            { id: "REJECTED", label: `Rejected (${data?.rejected_count ?? 0})` },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedStatus(tab.id)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                selectedStatus === tab.id
                  ? "bg-white text-ink shadow-sm font-bold"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-ink-muted absolute left-3 top-3" />
          <Input
            placeholder="Search by name, email, college, phone..."
            className="pl-9 text-xs"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Mentors Table */}
      <Card className="border border-border overflow-hidden">
        {isLoading ? (
          <div className="p-12 text-center text-ink-muted text-sm">
            Fetching mentors and financial ledgers...
          </div>
        ) : !data?.items || data.items.length === 0 ? (
          <div className="p-12 text-center space-y-2">
            <Users className="w-8 h-8 mx-auto text-ink-muted" />
            <p className="text-sm font-medium text-ink">No mentors found</p>
            <p className="text-xs text-ink-muted">
              {searchQuery
                ? "Try clearing your search query."
                : "No mentors currently match the selected status filter."}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-surface-subtle border-b border-border text-ink-muted font-semibold uppercase tracking-wider">
                <tr>
                  <th className="py-3.5 px-4">Mentor Details</th>
                  <th className="py-3.5 px-4">College & Exam Rank</th>
                  <th className="py-3.5 px-4">Verification Proofs</th>
                  <th className="py-3.5 px-4">Cohort Financials</th>
                  <th className="py-3.5 px-4">Payout Account (UPI)</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {data.items.map((m) => (
                  <tr key={m.user_id} className="hover:bg-surface-subtle/50 transition-colors">
                    {/* Mentor Details */}
                    <td className="py-4 px-4 align-top">
                      <div className="space-y-1">
                        <button
                          onClick={() => setAuditMentorId(m.user_id)}
                          className="font-bold text-sm text-ink hover:text-brand-600 text-left flex items-center gap-1.5 transition-colors group"
                          title="Click to view detailed activity & productivity audit"
                        >
                          <span>{m.full_name}</span>
                          <Activity className="w-3 h-3 text-brand-600 opacity-60 group-hover:opacity-100" />
                        </button>
                        <div className="flex items-center gap-1.5 text-ink-muted">
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
                          <span className="text-ink-muted italic">No phone provided</span>
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
                          {m.is_available === false ? (
                            <span className="text-[10px] text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200 font-medium">
                              🟡 Paused
                            </span>
                          ) : (
                            <span className="text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 font-medium">
                              🟢 Available
                            </span>
                          )}
                        </div>
                      </div>
                    </td>

                    {/* College & Rank */}
                    <td className="py-4 px-4 align-top">
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5 font-medium text-ink">
                          <GraduationCap className="w-4 h-4 text-ink-muted shrink-0" />
                          <span>{m.college || "College not set"}</span>
                        </div>
                        {m.college_email && (
                          <div className="text-[11px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded inline-block">
                            Verified Email: {m.college_email}
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
                          <span className="text-ink-muted italic text-[11px] block">No College ID</span>
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
                          <span className="text-ink-muted italic text-[11px] block">No Scorecard</span>
                        )}
                      </div>
                    </td>

                    {/* Financials & Payout Due */}
                    <td className="py-4 px-4 align-top">
                      <div className="space-y-1">
                        <div className="text-ink">
                          Active Students: <span className="font-bold text-indigo-600">{m.active_students_count}</span>
                          <span className="text-ink-muted"> / {m.seat_limit} seats</span>
                        </div>
                        <div className="text-ink-muted">
                          Rate: <span className="font-semibold text-ink">₹{Number(m.price_per_month)}/mo</span>
                        </div>
                        <div className="pt-1 border-t border-border/60">
                          <span className="text-[11px] text-ink-muted block">Payout Due (85%):</span>
                          <span className="text-sm font-bold text-emerald-700">
                            ₹{Number(m.payout_due).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Payout Account */}
                    <td className="py-4 px-4 align-top">
                      <div className="space-y-1">
                        {m.payout_upi_id ? (
                          <div className="flex items-center gap-1.5 bg-surface-subtle p-1.5 rounded border border-border">
                            <span className="font-mono text-[11px] text-ink truncate max-w-[140px]">
                              {m.payout_upi_id}
                            </span>
                            <button
                              onClick={() => handleCopyUpi(m.payout_upi_id!, m.user_id)}
                              className="text-ink-muted hover:text-ink shrink-0"
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
                          <div className="text-[11px] text-ink space-y-0.5">
                            <div>Acc: {m.payout_account_number}</div>
                            <div>IFSC: {m.payout_ifsc}</div>
                            <div>Name: {m.payout_account_name}</div>
                          </div>
                        ) : (
                          <span className="text-ink-muted italic text-[11px]">Not provided</span>
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
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="secondary"
                          className="text-xs py-1 px-2.5 border-border hover:bg-slate-100 text-ink flex items-center gap-1 font-medium"
                          onClick={() => setAuditMentorId(m.user_id)}
                          title="Audit mentor platform activity & productivity"
                        >
                          <Activity className="w-3.5 h-3.5 text-brand-600" />
                          Audit
                        </Button>

                        {m.verification_status !== "APPROVED" && (
                          <Button
                            variant="primary"
                            className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs py-1 px-3"
                            onClick={() => {
                              setActiveModalMentor(m);
                              setModalAction("APPROVE");
                            }}
                          >
                            Approve 🛡️
                          </Button>
                        )}

                        {m.verification_status !== "REJECTED" && (
                          <Button
                            variant="secondary"
                            className="text-rose-600 hover:bg-rose-50 border-rose-200 text-xs py-1 px-3"
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
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>

      {/* Confirmation Modal */}
      {activeModalMentor && modalAction && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <Card className="w-full max-w-md bg-white p-6 space-y-4 shadow-xl border border-border">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <h3 className="text-lg font-bold font-display text-ink">
                {modalAction === "APPROVE" ? "Approve Mentor Cohort" : "Reject Application"}
              </h3>
              <button
                onClick={() => {
                  setActiveModalMentor(null);
                  setModalAction(null);
                }}
                className="text-ink-muted hover:text-ink"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {modalAction === "APPROVE" ? (
              <div className="space-y-3">
                <p className="text-sm text-ink-muted">
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
                <p className="text-sm text-ink-muted">
                  Please provide a reason for rejecting <strong>{activeModalMentor.full_name}</strong>:
                </p>
                <Input
                  placeholder="e.g. Blurry ID proof, invalid rank scorecard..."
                  value={rejectionReason}
                  onChange={(e) => setRejectionReason(e.target.value)}
                  className="text-xs"
                />
                <p className="text-xs text-ink-muted">
                  This note will be emailed to the mentor so they can re-upload proper credentials.
                </p>
              </div>
            )}

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-border">
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
          <Card className="w-full max-w-3xl bg-white p-4 space-y-3 shadow-2xl border border-border">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <h3 className="text-base font-bold font-display text-ink truncate pr-4">
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
                  className="text-ink-muted hover:text-ink"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="max-h-[75vh] overflow-auto flex items-center justify-center bg-surface-subtle rounded-lg p-2">
              {previewDoc.url.toLowerCase().endsWith(".pdf") ? (
                <iframe
                  src={previewDoc.url}
                  className="w-full h-[65vh] rounded border border-border"
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
