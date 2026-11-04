"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useAuthStore } from "@/store/authStore";
import {
  useAnnouncements,
  useCreateAnnouncement,
  useDeleteAnnouncement,
  useResources,
  useCreateResource,
  useDeleteResource,
} from "@/hooks/useCohort";
import {
  useSubscriptions,
  useLeaveActiveCohort,
  useRenewSubscription,
} from "@/hooks/useSubscriptions";
import { initiateRazorpayCheckout } from "@/lib/razorpay";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { CardSkeleton } from "@/components/ui/Skeleton";
import {
  Megaphone,
  BookOpen,
  Star,
  ExternalLink,
  Calendar,
  UserCheck,
  RefreshCw,
  LogOut,
  Plus,
  Trash2,
  Sparkles,
  MessageSquare,
  Clock,
  ShieldCheck,
  FileCode,
  Users,
} from "lucide-react";

export default function CohortPage() {
  const { user, isAuthenticated } = useAuthStore();
  const isMentor = user?.role === "MENTOR";

  const { data: subsData, refetch: refetchSubs } = useSubscriptions();
  const leaveCohortMutation = useLeaveActiveCohort();
  const [showLeaveConfirm, setShowLeaveConfirm] = useState(false);
  const [leaveFeedback, setLeaveFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const activeSub = subsData?.items?.find((s) => s.status === "ACTIVE");

  const handleLeaveCohort = async () => {
    try {
      await leaveCohortMutation.mutateAsync();
      setShowLeaveConfirm(false);
      setLeaveFeedback({
        type: "success",
        message: "You have left this cohort. Your seat has been released and you may now join another cohort.",
      });
      refetchSubs();
    } catch (err: any) {
      setLeaveFeedback({
        type: "error",
        message: err?.detail || "Failed to leave cohort. Please try again.",
      });
    }
  };

  const renewCohortMutation = useRenewSubscription();
  const [isRenewing, setIsRenewing] = useState(false);
  const [renewFeedback, setRenewFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const expiresDate = activeSub?.expires_at ? new Date(activeSub.expires_at) : null;
  const daysRemaining = expiresDate
    ? Math.max(0, Math.ceil((expiresDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24)))
    : null;

  const handleRenewCohort = async () => {
    if (!activeSub) return;
    setIsRenewing(true);
    setRenewFeedback(null);

    await initiateRazorpayCheckout({
      amountInPaise: 199900,
      currency: "INR",
      name: "Mentskool",
      description: `Renew Mentorship with ${activeSub.mentor_name}`,
      prefill: {
        name: user?.full_name || "",
        email: user?.email || "",
      },
      notes: {
        mentor_id: activeSub.mentor_id,
        type: "cohort_renewal",
      },
      onSuccess: async (verification) => {
        try {
          await renewCohortMutation.mutateAsync({
            mentorId: activeSub.mentor_id,
            paymentId: verification.payment_id,
          });
          setRenewFeedback({
            type: "success",
            message: "Mentorship successfully renewed for another 30 days! Your access has been extended.",
          });
          refetchSubs();
        } catch (err: any) {
          setRenewFeedback({
            type: "error",
            message: err?.detail || "Failed to finalize renewal record. Please contact support.",
          });
        } finally {
          setIsRenewing(false);
        }
      },
      onError: (err) => {
        setRenewFeedback({ type: "error", message: err });
        setIsRenewing(false);
      },
      onDismiss: () => {
        setIsRenewing(false);
      },
    });
  };

  const [activeTab, setActiveTab] = useState<"announcements" | "resources">("announcements");

  // Announcements hooks
  const {
    data: announcements,
    isLoading: annLoading,
  } = useAnnouncements();
  const createAnnMutation = useCreateAnnouncement();
  const deleteAnnMutation = useDeleteAnnouncement();

  // Resources hooks
  const {
    data: resources,
    isLoading: resLoading,
  } = useResources();
  const createResMutation = useCreateResource();
  const deleteResMutation = useDeleteResource();

  // Form states
  const [annTitle, setAnnTitle] = useState("");
  const [annBody, setAnnBody] = useState("");
  const [showAnnForm, setShowAnnForm] = useState(false);

  const [resTitle, setResTitle] = useState("");
  const [resUrl, setResUrl] = useState("");
  const [showResForm, setShowResForm] = useState(false);

  const handleCreateAnnouncement = async (e: React.FormEvent) => {
    e.preventDefault();
    await createAnnMutation.mutateAsync({ title: annTitle, body: annBody });
    setAnnTitle("");
    setAnnBody("");
    setShowAnnForm(false);
  };

  const handleCreateResource = async (e: React.FormEvent) => {
    e.preventDefault();
    await createResMutation.mutateAsync({ title: resTitle, url: resUrl });
    setResTitle("");
    setResUrl("");
    setShowResForm(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="py-20 text-center max-w-md mx-auto space-y-4">
        <h2 className="text-xl font-bold font-display text-slate-900">
          Authentication Required
        </h2>
        <p className="text-xs text-slate-500">
          Sign in to view your cohort announcements, strategy briefs, and shared reference material.
        </p>
        <Link href="/login?redirect=/cohort">
          <Button variant="primary" size="md">
            Sign In
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* 1. Header Banner */}
      <div className="bg-gradient-to-r from-blue-50/90 via-indigo-50/40 to-white rounded-2xl p-6 border border-blue-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-white border border-blue-200 flex items-center justify-center flex-shrink-0 text-blue-600 shadow-xs">
            <Users className="w-6 h-6 text-blue-600" />
          </div>

          <div className="space-y-0.5">
            <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block">
              Collaborative Learning
            </span>
            <h1 className="text-2xl font-bold font-display text-slate-900">
              Cohort Hub
            </h1>
            <p className="text-xs text-slate-500 max-w-xl">
              Important mentor announcements, exam strategy briefs, and curated study materials.
            </p>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200/80 shadow-2xs self-start md:self-center flex-wrap gap-1">
          <button
            onClick={() => setActiveTab("announcements")}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all ${
              activeTab === "announcements"
                ? "bg-white text-blue-700 shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Megaphone className="w-3.5 h-3.5" />
            <span>Announcements</span>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                activeTab === "announcements"
                  ? "bg-blue-50 text-blue-700 font-black"
                  : "bg-slate-200 text-slate-600 font-semibold"
              }`}
            >
              {announcements?.length ?? 0}
            </span>
          </button>

          <button
            onClick={() => setActiveTab("resources")}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all ${
              activeTab === "resources"
                ? "bg-white text-blue-700 shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Study Resources</span>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                activeTab === "resources"
                  ? "bg-blue-50 text-blue-700 font-black"
                  : "bg-slate-200 text-slate-600 font-semibold"
              }`}
            >
              {resources?.length ?? 0}
            </span>
          </button>

          {!isMentor && activeSub && (
            <Link
              href={`/mentors/${activeSub.mentor_id}?tab=reviews`}
              className="flex items-center gap-1 px-3 py-1.5 text-xs font-bold rounded-lg text-amber-800 hover:bg-amber-100/60 transition-colors"
            >
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
              <span>Reviews</span>
            </Link>
          )}
        </div>
      </div>

      {/* 2. Student Active Cohort Status Card */}
      {!isMentor && (
        <div className="space-y-4">
          {leaveFeedback && (
            <div
              className={`p-3.5 rounded-2xl text-xs font-semibold flex items-center justify-between shadow-xs animate-fade-in ${
                leaveFeedback.type === "success"
                  ? "bg-blue-50 text-blue-700 border border-blue-200/80"
                  : "bg-rose-50 text-rose-700 border border-rose-200"
              }`}
            >
              <span>{leaveFeedback.message}</span>
              <button
                onClick={() => setLeaveFeedback(null)}
                className="text-slate-400 hover:text-slate-600 ml-2"
              >
                ✕
              </button>
            </div>
          )}

          {renewFeedback && (
            <div
              className={`p-3.5 rounded-2xl text-xs font-semibold flex items-center justify-between shadow-xs animate-fade-in ${
                renewFeedback.type === "success"
                  ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                  : "bg-rose-50 text-rose-700 border border-rose-200"
              }`}
            >
              <span>{renewFeedback.message}</span>
              <button
                onClick={() => setRenewFeedback(null)}
                className="text-slate-400 hover:text-slate-600 ml-2"
              >
                ✕
              </button>
            </div>
          )}

          {activeSub ? (
            <div className="bg-gradient-to-r from-emerald-50/40 via-white to-blue-50/20 rounded-2xl p-5 sm:p-6 border border-emerald-200/90 border-l-4 border-l-emerald-500 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-5">
              <div className="flex items-start sm:items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center flex-shrink-0 font-bold text-lg shadow-xs">
                  {activeSub.mentor_name ? activeSub.mentor_name[0].toUpperCase() : "M"}
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Active Mentorship
                    </span>
                    <h3 className="text-base font-bold font-display text-slate-900">
                      Mentor: {activeSub.mentor_name}
                    </h3>
                    {daysRemaining !== null && (
                      <span
                        className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${
                          daysRemaining <= 5
                            ? "bg-rose-50 text-rose-700 border-rose-200"
                            : daysRemaining <= 10
                              ? "bg-amber-50 text-amber-700 border-amber-200"
                              : "bg-blue-50 text-blue-700 border-blue-200"
                        }`}
                      >
                        {daysRemaining} {daysRemaining === 1 ? "day" : "days"} left
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500">
                    Enrolled until {expiresDate ? expiresDate.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }) : "30 days"}. Renew anytime to extend mentorship seamlessly.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2.5 self-start md:self-center flex-wrap">
                <Button
                  size="sm"
                  variant="primary"
                  isLoading={isRenewing}
                  onClick={handleRenewCohort}
                  className="text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs rounded-xl flex items-center gap-1.5"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Renew for 30 Days</span>
                </Button>

                <Link href={`/mentors/${activeSub.mentor_id}?tab=reviews`}>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="text-xs font-bold text-amber-800 bg-amber-50 hover:bg-amber-100 border-amber-200/80 shadow-xs rounded-xl flex items-center gap-1.5"
                  >
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                    <span>Rate Mentor</span>
                  </Button>
                </Link>

                {!showLeaveConfirm ? (
                  <button
                    onClick={() => setShowLeaveConfirm(true)}
                    className="text-xs font-semibold text-slate-400 hover:text-rose-600 px-3 py-2 rounded-xl transition-colors"
                  >
                    Leave Cohort
                  </button>
                ) : (
                  <div className="flex items-center gap-2 bg-rose-50 p-2 rounded-xl border border-rose-200 text-xs">
                    <span className="text-rose-800 font-medium">Release seat?</span>
                    <Button
                      size="sm"
                      variant="secondary"
                      isLoading={leaveCohortMutation.isPending}
                      onClick={handleLeaveCohort}
                      className="text-xs text-rose-700 font-bold border-rose-300 hover:bg-rose-100 rounded-lg px-2 py-1"
                    >
                      Confirm
                    </Button>
                    <button
                      onClick={() => setShowLeaveConfirm(false)}
                      className="text-xs text-slate-600 hover:text-slate-900 font-semibold px-2 py-1"
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="p-8 rounded-2xl bg-white border border-slate-200/80 text-center space-y-3 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mx-auto">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900">
                No Active Cohort Enrollment
              </h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
                You are not currently enrolled in a cohort. Find an expert IIT/AIIMS mentor to receive weekly accountability tasks, direct guidance, and cohort materials.
              </p>
              <Link href="/mentors" className="inline-block pt-1">
                <Button size="sm" variant="primary" className="rounded-xl">
                  Find a Mentor
                </Button>
              </Link>
            </div>
          )}
        </div>
      )}

      {/* 3. Announcements Tab View */}
      {activeTab === "announcements" && (
        <div className="space-y-5">
          {/* Mentor Post Button & Inline Form */}
          {isMentor && (
            <div>
              {!showAnnForm ? (
                <Button
                  size="sm"
                  variant="primary"
                  onClick={() => setShowAnnForm(true)}
                  className="rounded-xl flex items-center gap-1.5 shadow-xs"
                >
                  <Plus className="w-4 h-4" />
                  <span>Post Cohort Announcement</span>
                </Button>
              ) : (
                <div className="bg-white rounded-2xl border border-slate-200/80 p-6 space-y-4 shadow-xs">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-slate-900">
                      Create Cohort Announcement
                    </h3>
                    <button
                      type="button"
                      onClick={() => setShowAnnForm(false)}
                      className="text-xs text-slate-400 hover:text-slate-600"
                    >
                      ✕
                    </button>
                  </div>
                  <form onSubmit={handleCreateAnnouncement} className="space-y-4">
                    <Input
                      label="Announcement Title"
                      value={annTitle}
                      onChange={(e) => setAnnTitle(e.target.value)}
                      placeholder="e.g. Schedule for JEE Mechanics Doubt Clearing Session"
                      required
                    />
                    <Textarea
                      label="Message / Notice"
                      value={annBody}
                      onChange={(e) => setAnnBody(e.target.value)}
                      placeholder="Type details, timings, instructions, or agenda..."
                      rows={4}
                      required
                    />
                    <div className="flex items-center justify-end gap-2 pt-1">
                      <Button
                        type="button"
                        size="sm"
                        variant="ghost"
                        onClick={() => setShowAnnForm(false)}
                        className="rounded-xl"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        size="sm"
                        variant="primary"
                        isLoading={createAnnMutation.isPending}
                        className="rounded-xl shadow-xs"
                      >
                        Publish Announcement
                      </Button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          )}

          {/* Announcements Feed */}
          {annLoading ? (
            <div className="space-y-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <CardSkeleton key={i} />
              ))}
            </div>
          ) : !announcements || announcements.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200/80 p-12 text-center shadow-xs space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto text-blue-600 shadow-xs">
                <Megaphone className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold font-display text-slate-900">
                No Announcements Yet
              </h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                Your mentor hasn't published any cohort notices yet. Session links, syllabus updates, and batch schedules will appear right here.
              </p>
              {!isMentor && activeSub && (
                <div className="pt-2 flex justify-center gap-3">
                  <Link href="/messages">
                    <Button variant="secondary" size="sm" className="rounded-xl text-xs">
                      <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
                      Message Mentor
                    </Button>
                  </Link>
                  <Link href="/dashboard/tasks">
                    <Button variant="secondary" size="sm" className="rounded-xl text-xs">
                      View My Tasks
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              {announcements.map((ann) => (
                <div
                  key={ann.id}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-300 transition-all overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-slate-50 to-blue-50/40 px-5 py-3.5 border-b border-slate-100 flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-blue-100/80 flex items-center justify-center text-blue-700">
                        <Megaphone className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-bold text-slate-900">
                        {ann.mentor_name || "Mentor Broadcast"}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <p className="text-[11px] text-slate-400 flex items-center gap-1.5 font-medium">
                        <Clock className="w-3 h-3 text-slate-400" />
                        <span>
                          {new Date(ann.created_at).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      </p>

                      {isMentor && (
                        <button
                          onClick={() => deleteAnnMutation.mutate(ann.id)}
                          disabled={deleteAnnMutation.isPending}
                          className="text-slate-400 hover:text-rose-600 p-1 rounded-lg hover:bg-rose-50 transition-colors"
                          title="Delete announcement"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 space-y-2.5">
                    <h3 className="font-display font-bold text-lg text-slate-900">
                      {ann.title}
                    </h3>
                    <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
                      {ann.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* 4. Resources Tab View */}
      {activeTab === "resources" && (
        <div className="space-y-5">
          {/* Mentor Add Resource Button & Form */}
          {isMentor && (
            <div>
              {!showResForm ? (
                <Button
                  size="sm"
                  variant="primary"
                  onClick={() => setShowResForm(true)}
                  className="rounded-xl flex items-center gap-1.5 shadow-xs"
                >
                  <Plus className="w-4 h-4" />
                  <span>Share Study Resource</span>
                </Button>
              ) : (
                <div className="bg-white rounded-2xl border border-slate-200/80 p-6 space-y-4 shadow-xs">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-slate-900">
                      Share Study Resource Link
                    </h3>
                    <button
                      type="button"
                      onClick={() => setShowResForm(false)}
                      className="text-xs text-slate-400 hover:text-slate-600"
                    >
                      ✕
                    </button>
                  </div>
                  <form onSubmit={handleCreateResource} className="space-y-4">
                    <Input
                      label="Resource Title"
                      value={resTitle}
                      onChange={(e) => setResTitle(e.target.value)}
                      placeholder="e.g. Formula Sheet / High-Yield Organic Reactions Checklist"
                      required
                    />
                    <Input
                      label="Resource URL (Google Drive, Notion, PDF, GitHub)"
                      type="url"
                      value={resUrl}
                      onChange={(e) => setResUrl(e.target.value)}
                      placeholder="https://drive.google.com/..."
                      required
                    />
                    <div className="flex items-center justify-end gap-2 pt-1">
                      <Button
                        type="button"
                        size="sm"
                        variant="ghost"
                        onClick={() => setShowResForm(false)}
                        className="rounded-xl"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        size="sm"
                        variant="primary"
                        isLoading={createResMutation.isPending}
                        className="rounded-xl shadow-xs"
                      >
                        Share Resource
                      </Button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          )}

          {/* Resources Feed */}
          {resLoading ? (
            <div className="space-y-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <CardSkeleton key={i} />
              ))}
            </div>
          ) : !resources || resources.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200/80 p-12 text-center shadow-xs space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto text-blue-600 shadow-xs">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold font-display text-slate-900">
                No Shared Resources Yet
              </h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                Reference notes, cheat sheets, and question banks curated by your mentor will be listed here.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {resources.map((res) => (
                <div
                  key={res.id}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-300 transition-all overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    <div className="bg-gradient-to-r from-slate-50 to-indigo-50/40 px-5 py-3 border-b border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-md bg-blue-100/80 flex items-center justify-center text-blue-700">
                          <BookOpen className="w-3 h-3" />
                        </div>
                        <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">
                          {res.mentor_name || "Mentor Resource"}
                        </span>
                      </div>

                      {isMentor && (
                        <button
                          onClick={() => deleteResMutation.mutate(res.id)}
                          disabled={deleteResMutation.isPending}
                          className="text-slate-400 hover:text-rose-600 p-1 rounded-md hover:bg-rose-50 transition-colors text-xs"
                          title="Delete resource"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>

                    <div className="p-5 space-y-1.5">
                      <h3 className="font-display font-bold text-base text-slate-900 line-clamp-2">
                        {res.title}
                      </h3>
                      <p className="text-[11px] text-slate-400 break-all line-clamp-1">
                        {res.url}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 flex items-center justify-between">
                    <a
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      <span>Open Document</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
