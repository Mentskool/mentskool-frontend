"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useAuthStore } from "@/store/authStore";
import {
  useMySessionBookings,
  useApproveSession,
  useRejectSession,
  useCompleteSession,
  useMentorSessionSettings,
  useUpdateMentorSessionSettings,
} from "@/hooks/useSessions";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { EmptyState } from "@/components/ui/EmptyState";
import { SessionBooking } from "@/lib/types";
import {
  Video,
  Clock,
  Calendar,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Settings,
  DollarSign,
  User,
  Sparkles,
  ExternalLink,
  MessageSquare,
  Star,
} from "lucide-react";

export default function MentorSessionsPage() {
  const { user, isAuthenticated } = useAuthStore();
  const [activeTab, setActiveTab] = useState<"requests" | "confirmed" | "completed" | "settings">("requests");

  // Booking queries
  const { data: allBookings, isLoading, refetch } = useMySessionBookings();
  const approveMutation = useApproveSession();
  const rejectMutation = useRejectSession();
  const completeMutation = useCompleteSession();

  // Settings
  const { data: settingsData, refetch: refetchSettings } = useMentorSessionSettings();
  const updateSettingsMutation = useUpdateMentorSessionSettings();

  // Modal state for Approval
  const [selectedBooking, setSelectedBooking] = useState<SessionBooking | null>(null);
  const [meetLinkInput, setMeetLinkInput] = useState<string>("");
  const [approveError, setApproveError] = useState<string>("");

  // Modal state for Rejection
  const [rejectingBooking, setRejectingBooking] = useState<SessionBooking | null>(null);
  const [rejectionReason, setRejectionReason] = useState<string>("");
  const [rejectError, setRejectError] = useState<string>("");

  // Settings form state
  const [isEnabled, setIsEnabled] = useState<boolean>(true);
  const [price, setPrice] = useState<number>(0);
  const [duration, setDuration] = useState<number>(30);
  const [defaultLink, setDefaultLink] = useState<string>("");
  const [settingsSuccess, setSettingsSuccess] = useState<string>("");

  React.useEffect(() => {
    if (settingsData) {
      setIsEnabled(settingsData.one_on_one_enabled);
      setPrice(Number(settingsData.one_on_one_price || 0));
      setDuration(settingsData.one_on_one_duration_minutes || 30);
      setDefaultLink(settingsData.default_meeting_link || "");
    }
  }, [settingsData]);

  const pendingRequests = allBookings?.filter((b) => b.status === "PENDING_APPROVAL") || [];
  const confirmedSessions = allBookings?.filter((b) => b.status === "CONFIRMED") || [];
  const completedSessions = allBookings?.filter((b) => b.status === "COMPLETED") || [];

  const handleApprove = async (e: React.FormEvent) => {
    e.preventDefault();
    setApproveError("");
    if (!selectedBooking) return;
    if (!meetLinkInput.trim()) {
      setApproveError("Please provide a valid Google Meet or Zoom link.");
      return;
    }

    try {
      await approveMutation.mutateAsync({
        bookingId: selectedBooking.id,
        meeting_link: meetLinkInput.trim(),
      });
      setSelectedBooking(null);
      setMeetLinkInput("");
      refetch();
    } catch (err: any) {
      setApproveError(err.detail || "Failed to approve booking.");
    }
  };

  const handleReject = async (e: React.FormEvent) => {
    e.preventDefault();
    setRejectError("");
    if (!rejectingBooking) return;

    try {
      await rejectMutation.mutateAsync({
        bookingId: rejectingBooking.id,
        reason: rejectionReason.trim() || undefined,
      });
      setRejectingBooking(null);
      setRejectionReason("");
      refetch();
    } catch (err: any) {
      setRejectError(err.detail || "Failed to reject booking.");
    }
  };

  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    setSettingsSuccess("");
    try {
      await updateSettingsMutation.mutateAsync({
        one_on_one_enabled: isEnabled,
        one_on_one_price: price,
        one_on_one_duration_minutes: duration,
        default_meeting_link: defaultLink.trim() || undefined,
      });
      setSettingsSuccess("Settings updated successfully!");
      refetchSettings();
    } catch (err: any) {
      // Handled
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-blue-50 text-blue-600">
                <Video className="w-5 h-5" />
              </span>
              <h1 className="text-xl font-bold text-slate-900">1-on-1 Mentorship Sessions</h1>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Manage your private consultations, review student booking requests, and set your availability.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/mentor/tasks">
              <Button variant="secondary" size="sm" className="text-xs">
                Tasks & Quizzes
              </Button>
            </Link>
            <Button
              variant={activeTab === "settings" ? "primary" : "secondary"}
              size="sm"
              onClick={() => setActiveTab("settings")}
              className="text-xs flex items-center gap-1.5"
            >
              <Settings className="w-3.5 h-3.5" />
              1:1 Settings & Pricing
            </Button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 border-b border-slate-200">
          <button
            onClick={() => setActiveTab("requests")}
            className={`py-3 px-4 text-xs font-semibold border-b-2 flex items-center gap-2 transition-colors ${
              activeTab === "requests"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            Pending Requests
            {pendingRequests.length > 0 && (
              <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-amber-100 text-amber-800 font-bold">
                {pendingRequests.length}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab("confirmed")}
            className={`py-3 px-4 text-xs font-semibold border-b-2 flex items-center gap-2 transition-colors ${
              activeTab === "confirmed"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            Confirmed & Upcoming
            {confirmedSessions.length > 0 && (
              <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-blue-100 text-blue-800 font-bold">
                {confirmedSessions.length}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab("completed")}
            className={`py-3 px-4 text-xs font-semibold border-b-2 flex items-center gap-2 transition-colors ${
              activeTab === "completed"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            Completed Sessions & Reviews
            {completedSessions.length > 0 && (
              <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-slate-100 text-slate-700 font-bold">
                {completedSessions.length}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab("settings")}
            className={`py-3 px-4 text-xs font-semibold border-b-2 flex items-center gap-2 transition-colors ${
              activeTab === "settings"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            Pricing & Availability
          </button>
        </div>

        {/* Tab 1: Pending Requests */}
        {activeTab === "requests" && (
          <div className="space-y-4">
            {pendingRequests.length === 0 ? (
              <Card className="p-8 text-center bg-white border border-slate-200">
                <EmptyState
                  icon={<Calendar className="w-10 h-10 text-slate-300" />}
                  title="No Pending Session Requests"
                  description="When a student books a 1-on-1 call with you, their request will appear here for you to approve and confirm."
                />
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pendingRequests.map((b) => (
                  <Card key={b.id} className="p-5 bg-white border border-slate-200 space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden shrink-0">
                          {b.student_avatar_url ? (
                            <img src={b.student_avatar_url} alt="" className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center font-bold text-slate-600 text-xs">
                              {b.student_name?.charAt(0) || "S"}
                            </div>
                          )}
                        </div>
                        <div>
                          <h4 className="font-bold text-sm text-slate-900">{b.student_name}</h4>
                          <span className="text-[11px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200 font-semibold">
                            Pending Your Approval
                          </span>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-xs font-bold text-slate-900">
                          {Number(b.amount_paid) > 0 ? `₹${Number(b.amount_paid).toLocaleString("en-IN")}` : "Free"}
                        </span>
                        <p className="text-[10px] text-slate-400">{b.duration_minutes} Mins</p>
                      </div>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-xl space-y-1.5 border border-slate-100 text-xs">
                      <div className="flex items-center gap-2 text-slate-700 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-blue-500" />
                        <span>{new Date(b.scheduled_at).toLocaleString("en-IN", { dateStyle: "full", timeStyle: "short" })}</span>
                      </div>
                      <div className="pt-1 border-t border-slate-200/60">
                        <p className="text-slate-500 text-[11px]"><strong>Topic / Student Notes:</strong></p>
                        <p className="text-slate-800 italic mt-0.5 leading-relaxed">{b.agenda_notes}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <Button
                        size="sm"
                        variant="primary"
                        onClick={() => {
                          setSelectedBooking(b);
                          setMeetLinkInput(settingsData?.default_meeting_link || "");
                        }}
                        className="flex-1 text-xs bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Approve & Confirm
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => setRejectingBooking(b)}
                        className="text-xs text-rose-600 hover:bg-rose-50 border-rose-200"
                      >
                        Decline
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Confirmed & Upcoming */}
        {activeTab === "confirmed" && (
          <div className="space-y-4">
            {confirmedSessions.length === 0 ? (
              <Card className="p-8 text-center bg-white border border-slate-200">
                <EmptyState
                  icon={<Video className="w-10 h-10 text-slate-300" />}
                  title="No Upcoming Confirmed Sessions"
                  description="Confirmed sessions will appear here with your Google Meet link."
                />
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {confirmedSessions.map((b) => (
                  <Card key={b.id} className="p-5 bg-white border border-slate-200 space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h4 className="font-bold text-sm text-slate-900">{b.student_name}</h4>
                        <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 font-semibold">
                          Confirmed & Scheduled
                        </span>
                      </div>
                      <span className="text-xs font-bold text-slate-900">
                        {Number(b.amount_paid) > 0 ? `₹${Number(b.amount_paid).toLocaleString("en-IN")}` : "Free"}
                      </span>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-xl space-y-2 border border-slate-100 text-xs">
                      <div className="flex items-center gap-2 text-slate-700 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-blue-500" />
                        <span>{new Date(b.scheduled_at).toLocaleString("en-IN", { dateStyle: "full", timeStyle: "short" })}</span>
                      </div>
                      <p className="text-slate-700 text-xs">{b.agenda_notes}</p>

                      {b.meeting_link && (
                        <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
                          <span className="text-[11px] text-slate-500">Google Meet:</span>
                          <a
                            href={b.meeting_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-blue-600 font-bold underline flex items-center gap-1"
                          >
                            Open Link <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      {b.meeting_link && (
                        <a
                          href={b.meeting_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-2 px-3 text-xs font-semibold text-center rounded-lg bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-1.5 shadow-sm"
                        >
                          <Video className="w-3.5 h-3.5" />
                          Join Google Meet
                        </a>
                      )}
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={async () => {
                          await completeMutation.mutateAsync(b.id);
                          refetch();
                        }}
                        className="text-xs"
                      >
                        Mark Done
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Completed Sessions & Reviews */}
        {activeTab === "completed" && (
          <div className="space-y-4">
            {completedSessions.length === 0 ? (
              <Card className="p-8 text-center bg-white border border-slate-200">
                <EmptyState
                  icon={<CheckCircle2 className="w-10 h-10 text-slate-300" />}
                  title="No Completed Sessions Yet"
                  description="Sessions marked as completed and verified reviews from your 1-on-1 students will show here."
                />
              </Card>
            ) : (
              <div className="space-y-3">
                {completedSessions.map((b) => (
                  <Card key={b.id} className="p-4 bg-white border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-sm text-slate-900">{b.student_name}</h4>
                        <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
                          {new Date(b.scheduled_at).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">{b.agenda_notes}</p>

                      {b.review && (
                        <div className="mt-2 p-2.5 rounded-lg bg-amber-50/60 border border-amber-200/60 text-xs">
                          <div className="flex items-center gap-1 text-amber-500 font-bold mb-1">
                            {[...Array(b.review.rating)].map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 fill-current" />
                            ))}
                            <span className="text-amber-800 ml-1">{b.review.rating}/5</span>
                          </div>
                          <p className="text-slate-700 italic">"{b.review.comment}"</p>
                        </div>
                      )}
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                        COMPLETED
                      </span>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 4: 1:1 Pricing & Availability Settings */}
        {activeTab === "settings" && (
          <Card className="p-6 bg-white border border-slate-200 max-w-2xl">
            <h3 className="font-bold text-slate-900 text-base mb-1">1-on-1 Session Offering Settings</h3>
            <p className="text-xs text-slate-500 mb-6">
              Configure how students can book 1-on-1 private calls with you on Mentskool.
            </p>

            {settingsSuccess && (
              <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs rounded-xl flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{settingsSuccess}</span>
              </div>
            )}

            <form onSubmit={handleSaveSettings} className="space-y-4">
              {/* Enable toggle */}
              <div className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 bg-slate-50">
                <div>
                  <label className="text-xs font-bold text-slate-900 block">Accept 1-on-1 Bookings</label>
                  <p className="text-[11px] text-slate-500">Allow students to book 1-on-1 sessions from your profile</p>
                </div>
                <input
                  type="checkbox"
                  checked={isEnabled}
                  onChange={(e) => setIsEnabled(e.target.checked)}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
              </div>

              {/* Price */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Session Fee (in INR ₹)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-xs text-slate-400 font-bold">₹</span>
                  <input
                    type="number"
                    min={0}
                    step={50}
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className="w-full pl-7 pr-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  />
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Tip: Set ₹0 to offer a <strong>Free Discovery Call</strong> to attract new students to your cohort!
                </p>
              </div>

              {/* Duration */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Session Duration (Minutes)
                </label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                >
                  <option value={30}>30 Minutes</option>
                  <option value={45}>45 Minutes</option>
                  <option value={60}>60 Minutes</option>
                </select>
              </div>

              {/* Default Meet Link */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Default Google Meet / Zoom Link
                </label>
                <input
                  type="url"
                  placeholder="https://meet.google.com/xyz-abc-def"
                  value={defaultLink}
                  onChange={(e) => setDefaultLink(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />
                <p className="text-[11px] text-slate-400 mt-1">
                  Auto-populated whenever you approve a session.
                </p>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  size="md"
                  variant="primary"
                  isLoading={updateSettingsMutation.isPending}
                  className="w-full py-2.5 text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white"
                >
                  Save Settings
                </Button>
              </div>
            </form>
          </Card>
        )}
      </div>

      {/* Approval Modal */}
      {selectedBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-100 p-6 space-y-4">
            <h3 className="font-bold text-slate-900 text-base">Confirm 1-on-1 Session</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Confirming session with <strong>{selectedBooking.student_name}</strong> for{" "}
              <strong>
                {new Date(selectedBooking.scheduled_at).toLocaleString("en-IN", {
                  dateStyle: "medium",
                  timeStyle: "short",
                })}
              </strong>
              .
            </p>

            {approveError && (
              <div className="p-3 text-xs text-rose-700 bg-rose-50 border border-rose-200 rounded-lg">
                {approveError}
              </div>
            )}

            <form onSubmit={handleApprove} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Meeting Link (Google Meet / Zoom)
                </label>
                <input
                  type="url"
                  required
                  placeholder="https://meet.google.com/xxx-yyyy-zzz"
                  value={meetLinkInput}
                  onChange={(e) => setMeetLinkInput(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <Button
                  type="button"
                  variant="secondary"
                  size="sm"
                  onClick={() => setSelectedBooking(null)}
                  className="text-xs"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="primary"
                  size="sm"
                  isLoading={approveMutation.isPending}
                  className="text-xs bg-emerald-600 hover:bg-emerald-700 text-white"
                >
                  Confirm & Send Link
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Rejection Modal */}
      {rejectingBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-100 p-6 space-y-4">
            <h3 className="font-bold text-slate-900 text-base">Decline Session Request</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Decline booking from <strong>{rejectingBooking.student_name}</strong>. If the student made a payment, an immediate refund will be issued.
            </p>

            {rejectError && (
              <div className="p-3 text-xs text-rose-700 bg-rose-50 border border-rose-200 rounded-lg">
                {rejectError}
              </div>
            )}

            <form onSubmit={handleReject} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Reason for Declining (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Unforeseen academic clash at this hour"
                  value={rejectionReason}
                  onChange={(e) => setRejectionReason(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-none"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <Button
                  type="button"
                  variant="secondary"
                  size="sm"
                  onClick={() => setRejectingBooking(null)}
                  className="text-xs"
                >
                  Go Back
                </Button>
                <Button
                  type="submit"
                  variant="primary"
                  size="sm"
                  isLoading={rejectMutation.isPending}
                  className="text-xs bg-rose-600 hover:bg-rose-700 text-white"
                >
                  Decline & Refund
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
