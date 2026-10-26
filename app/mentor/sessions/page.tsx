"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useAuthStore } from "@/store/authStore";
import { useMyMentorProfile } from "@/hooks/useMentors";
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
  Copy,
  Check,
  Share2,
} from "lucide-react";

export default function MentorSessionsPage() {
  const { user, isAuthenticated } = useAuthStore();
  const { data: myProfile } = useMyMentorProfile();
  const [activeTab, setActiveTab] = useState<"requests" | "confirmed" | "completed" | "settings">("requests");
  const [copiedLink, setCopiedLink] = useState(false);

  const mentorIdentifier = myProfile?.slug || myProfile?.user_id || user?.id || "";
  const publicBookingUrl = typeof window !== "undefined"
    ? `${window.location.origin}/book-call/${mentorIdentifier}`
    : `https://mentskool.com/book-call/${mentorIdentifier}`;

  const handleCopyBookingLink = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(publicBookingUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handleShareWhatsApp = () => {
    const text = `Book a 1-on-1 mentorship session with me on Mentskool: ${publicBookingUrl}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, "_blank");
  };

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
  const [weeklySchedule, setWeeklySchedule] = useState<Record<string, { enabled: boolean; startTime: string; endTime: string }>>({
    mon: { enabled: true, startTime: "18:00", endTime: "21:00" },
    tue: { enabled: true, startTime: "18:00", endTime: "21:00" },
    wed: { enabled: true, startTime: "18:00", endTime: "21:00" },
    thu: { enabled: true, startTime: "18:00", endTime: "21:00" },
    fri: { enabled: true, startTime: "18:00", endTime: "21:00" },
    sat: { enabled: true, startTime: "11:00", endTime: "19:00" },
    sun: { enabled: true, startTime: "11:00", endTime: "19:00" },
  });
  const [settingsSuccess, setSettingsSuccess] = useState<string>("");

  React.useEffect(() => {
    if (settingsData) {
      setIsEnabled(settingsData.one_on_one_enabled !== false);
      setPrice(Number(settingsData.one_on_one_price || 0));
      setDuration(settingsData.one_on_one_duration_minutes || 30);
      setDefaultLink(settingsData.default_meeting_link || "");

      if (settingsData.weekly_availability && typeof settingsData.weekly_availability === "object") {
        const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
        const loaded: Record<string, { enabled: boolean; startTime: string; endTime: string }> = {
          mon: { enabled: true, startTime: "18:00", endTime: "21:00" },
          tue: { enabled: true, startTime: "18:00", endTime: "21:00" },
          wed: { enabled: true, startTime: "18:00", endTime: "21:00" },
          thu: { enabled: true, startTime: "18:00", endTime: "21:00" },
          fri: { enabled: true, startTime: "18:00", endTime: "21:00" },
          sat: { enabled: true, startTime: "11:00", endTime: "19:00" },
          sun: { enabled: true, startTime: "11:00", endTime: "19:00" },
        };
        for (const day of days) {
          const windows = (settingsData.weekly_availability as any)[day];
          if (Array.isArray(windows) && windows.length > 0) {
            const first = windows[0];
            if (typeof first === "string" && first.includes("-")) {
              const [st, et] = first.split("-");
              loaded[day] = { enabled: true, startTime: st.trim(), endTime: et.trim() };
            } else if (typeof first === "object" && first?.start && first?.end) {
              loaded[day] = { enabled: true, startTime: first.start.trim(), endTime: first.end.trim() };
            }
          } else if (Array.isArray(windows) && windows.length === 0) {
            loaded[day] = { enabled: false, startTime: "18:00", endTime: "21:00" };
          }
        }
        setWeeklySchedule(loaded);
      }
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

    const DAYS_ORDER = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
    const formattedAvailability: Record<string, string[]> = {};
    for (const d of DAYS_ORDER) {
      const dayData = weeklySchedule[d];
      if (dayData && dayData.enabled && dayData.startTime && dayData.endTime) {
        formattedAvailability[d] = [`${dayData.startTime}-${dayData.endTime}`];
      } else {
        formattedAvailability[d] = [];
      }
    }

    try {
      await updateSettingsMutation.mutateAsync({
        one_on_one_enabled: isEnabled,
        one_on_one_price: price,
        one_on_one_duration_minutes: duration,
        default_meeting_link: defaultLink.trim() || undefined,
        weekly_availability: formattedAvailability,
      });
      setSettingsSuccess("1-on-1 availability schedule & pricing saved successfully!");
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

        {/* Shareable 1:1 Public Profile Banner */}
        {mentorIdentifier && (
          <div className="bg-gradient-to-r from-slate-900 to-blue-950 text-white rounded-2xl p-5 border border-slate-800 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-300 bg-blue-500/20 px-2.5 py-0.5 rounded-full border border-blue-400/30">
                  <Sparkles className="w-3 h-3 text-blue-400" />
                  Your Shareable 1:1 Booking Link
                </span>
              </div>
              <p className="text-xs text-slate-300 font-mono select-all break-all">
                {publicBookingUrl}
              </p>
              <p className="text-[11px] text-slate-400">
                Share this direct link on your Instagram bio, LinkedIn, or WhatsApp for student bookings.
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0 flex-wrap">
              <button
                type="button"
                onClick={handleCopyBookingLink}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white text-slate-900 hover:bg-slate-100 text-xs font-bold transition-all shadow-xs active:scale-95"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-600" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleShareWhatsApp}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] border border-[#25D366]/40 text-xs font-bold transition-all active:scale-95"
              >
                <span>WhatsApp</span>
              </button>

              <Link
                href={`/book-call/${mentorIdentifier}`}
                target="_blank"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold transition-all"
              >
                <span>Preview Page</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </Link>
            </div>
          </div>
        )}

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
          <div className="space-y-6 max-w-3xl">
            {settingsSuccess && (
              <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-2xl flex items-center gap-2.5 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="font-semibold">{settingsSuccess}</span>
              </div>
            )}

            <form onSubmit={handleSaveSettings} className="space-y-6">
              {/* Card 1: Pricing & Call Options */}
              <Card className="p-6 bg-white border border-slate-200 space-y-5">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="font-bold text-slate-900 text-base">Pricing & Call Preferences</h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Configure your 1-on-1 session fees, duration, and default Google Meet link.
                  </p>
                </div>

                {/* Enable toggle */}
                <div className="flex items-center justify-between p-4 rounded-xl border border-slate-200 bg-slate-50/70">
                  <div>
                    <label className="text-xs font-bold text-slate-900 block">Accept 1-on-1 Bookings</label>
                    <p className="text-[11px] text-slate-500">Allow students to discover you and book calls on /book-call</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={isEnabled}
                    onChange={(e) => setIsEnabled(e.target.checked)}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 cursor-pointer"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Price */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Session Fee (in INR ₹) *
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-xs text-slate-400 font-bold">₹</span>
                      <input
                        type="number"
                        min={0}
                        step={50}
                        value={price}
                        onChange={(e) => setPrice(Math.max(0, Number(e.target.value)))}
                        className="w-full pl-7 pr-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 font-medium"
                      />
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1">
                      Set ₹0 for a <strong>Free Discovery Call</strong>, or set your fee (e.g. ₹199, ₹499).
                    </p>
                  </div>

                  {/* Duration */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Session Duration *
                    </label>
                    <select
                      value={duration}
                      onChange={(e) => setDuration(Number(e.target.value))}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 font-medium"
                    >
                      <option value={30}>30 Minutes</option>
                      <option value={45}>45 Minutes</option>
                      <option value={60}>60 Minutes</option>
                    </select>
                    <p className="text-[11px] text-slate-500 mt-1">
                      Standard duration per student checkpoint call.
                    </p>
                  </div>
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
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 font-medium"
                  />
                  <p className="text-[11px] text-slate-400 mt-1">
                    Auto-populated whenever you approve a student&apos;s booking request.
                  </p>
                </div>
              </Card>

              {/* Card 2: Weekly Availability & Open Slots */}
              <Card className="p-6 bg-white border border-slate-200 space-y-5">
                <div className="border-b border-slate-100 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      Weekly Availability Schedule
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Select which days and time windows you are open for 1-on-1 calls.
                    </p>
                  </div>

                  {/* Preset Buttons */}
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <button
                      type="button"
                      onClick={() => {
                        setWeeklySchedule({
                          mon: { enabled: true, startTime: "18:00", endTime: "21:00" },
                          tue: { enabled: true, startTime: "18:00", endTime: "21:00" },
                          wed: { enabled: true, startTime: "18:00", endTime: "21:00" },
                          thu: { enabled: true, startTime: "18:00", endTime: "21:00" },
                          fri: { enabled: true, startTime: "18:00", endTime: "21:00" },
                          sat: { enabled: false, startTime: "11:00", endTime: "19:00" },
                          sun: { enabled: false, startTime: "11:00", endTime: "19:00" },
                        });
                      }}
                      className="px-2.5 py-1 text-[11px] font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                    >
                      Weekdays (6-9 PM)
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setWeeklySchedule({
                          mon: { enabled: false, startTime: "18:00", endTime: "21:00" },
                          tue: { enabled: false, startTime: "18:00", endTime: "21:00" },
                          wed: { enabled: false, startTime: "18:00", endTime: "21:00" },
                          thu: { enabled: false, startTime: "18:00", endTime: "21:00" },
                          fri: { enabled: false, startTime: "18:00", endTime: "21:00" },
                          sat: { enabled: true, startTime: "11:00", endTime: "19:00" },
                          sun: { enabled: true, startTime: "11:00", endTime: "19:00" },
                        });
                      }}
                      className="px-2.5 py-1 text-[11px] font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                    >
                      Weekends Only
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setWeeklySchedule({
                          mon: { enabled: true, startTime: "17:00", endTime: "21:00" },
                          tue: { enabled: true, startTime: "17:00", endTime: "21:00" },
                          wed: { enabled: true, startTime: "17:00", endTime: "21:00" },
                          thu: { enabled: true, startTime: "17:00", endTime: "21:00" },
                          fri: { enabled: true, startTime: "17:00", endTime: "21:00" },
                          sat: { enabled: true, startTime: "11:00", endTime: "19:00" },
                          sun: { enabled: true, startTime: "11:00", endTime: "19:00" },
                        });
                      }}
                      className="px-2.5 py-1 text-[11px] font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                    >
                      All 7 Days
                    </button>
                  </div>
                </div>

                {/* Day-by-Day List */}
                <div className="space-y-2.5 divide-y divide-slate-100">
                  {[
                    { key: "mon", label: "Monday" },
                    { key: "tue", label: "Tuesday" },
                    { key: "wed", label: "Wednesday" },
                    { key: "thu", label: "Thursday" },
                    { key: "fri", label: "Friday" },
                    { key: "sat", label: "Saturday" },
                    { key: "sun", label: "Sunday" },
                  ].map((day) => {
                    const dayState = weeklySchedule[day.key] || {
                      enabled: false,
                      startTime: "18:00",
                      endTime: "21:00",
                    };

                    return (
                      <div
                        key={day.key}
                        className={`pt-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-2.5 rounded-xl transition-all ${
                          dayState.enabled ? "bg-slate-50/70" : "opacity-60 bg-transparent"
                        }`}
                      >
                        <div className="flex items-center gap-3 w-36">
                          <input
                            type="checkbox"
                            id={`day-${day.key}`}
                            checked={dayState.enabled}
                            onChange={(e) => {
                              setWeeklySchedule((prev) => ({
                                ...prev,
                                [day.key]: {
                                  ...dayState,
                                  enabled: e.target.checked,
                                },
                              }));
                            }}
                            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 cursor-pointer"
                          />
                          <label
                            htmlFor={`day-${day.key}`}
                            className="text-xs font-bold text-slate-800 cursor-pointer select-none"
                          >
                            {day.label}
                          </label>
                        </div>

                        {dayState.enabled ? (
                          <div className="flex items-center gap-2 text-xs">
                            <span className="text-slate-500 text-[11px] font-medium">From:</span>
                            <input
                              type="time"
                              value={dayState.startTime}
                              onChange={(e) => {
                                setWeeklySchedule((prev) => ({
                                  ...prev,
                                  [day.key]: {
                                    ...dayState,
                                    startTime: e.target.value,
                                  },
                                }));
                              }}
                              className="px-2.5 py-1 text-xs rounded-lg border border-slate-200 bg-white font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                            />
                            <span className="text-slate-500 text-[11px] font-medium">To:</span>
                            <input
                              type="time"
                              value={dayState.endTime}
                              onChange={(e) => {
                                setWeeklySchedule((prev) => ({
                                  ...prev,
                                  [day.key]: {
                                    ...dayState,
                                    endTime: e.target.value,
                                  },
                                }));
                              }}
                              className="px-2.5 py-1 text-xs rounded-lg border border-slate-200 bg-white font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                            />
                          </div>
                        ) : (
                          <span className="text-xs font-semibold text-slate-400 italic">
                            Unavailable / Off
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="p-3 bg-blue-50/60 border border-blue-100 rounded-xl text-[11px] text-blue-800 flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <p>
                    Students booking on <span className="font-bold">mentskool.com/book-call</span> will automatically see available {duration}-minute booking slots generated within your configured windows.
                  </p>
                </div>
              </Card>

              <div>
                <Button
                  type="submit"
                  size="md"
                  variant="primary"
                  isLoading={updateSettingsMutation.isPending}
                  className="w-full py-3 text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-sm"
                >
                  Save Availability & Pricing Settings
                </Button>
              </div>
            </form>
          </div>
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
