"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useAuthStore } from "@/store/authStore";
import { useMySessionBookings } from "@/hooks/useSessions";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CardSkeleton } from "@/components/ui/Skeleton";
import { SessionReviewModal } from "@/components/sessions/SessionReviewModal";
import { SessionBooking } from "@/lib/types";
import {
  Video,
  Clock,
  Calendar,
  CheckCircle2,
  AlertCircle,
  Star,
  ExternalLink,
  Plus,
  ArrowRight,
  ShieldCheck,
  User,
  GraduationCap,
} from "lucide-react";

export default function StudentSessionsPage() {
  const { user, isAuthenticated, isLoading: authLoading } = useAuthStore();
  const [activeTab, setActiveTab] = useState<"all" | "confirmed" | "pending" | "completed">("all");
  const [reviewingBooking, setReviewingBooking] = useState<SessionBooking | null>(null);

  const { data: bookings, isLoading, refetch } = useMySessionBookings();

  const confirmedSessions = bookings?.filter((b) => b.status === "CONFIRMED") || [];
  const pendingSessions = bookings?.filter((b) => b.status === "PENDING_APPROVAL") || [];
  const completedSessions = bookings?.filter((b) => b.status === "COMPLETED") || [];

  const displayedBookings = bookings?.filter((b) => {
    if (activeTab === "confirmed") return b.status === "CONFIRMED";
    if (activeTab === "pending") return b.status === "PENDING_APPROVAL";
    if (activeTab === "completed") return b.status === "COMPLETED";
    return true;
  }) || [];

  if (authLoading) {
    return (
      <div className="max-w-5xl mx-auto py-12 px-4 space-y-4">
        <CardSkeleton />
        <CardSkeleton />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto py-16 text-center space-y-4">
        <h2 className="text-xl font-bold text-slate-900">Sign in to view your bookings</h2>
        <p className="text-xs text-slate-500">
          You must be logged in to view your 1-on-1 mentorship calls.
        </p>
        <Link href="/login?redirect=/dashboard/sessions">
          <Button variant="primary" size="sm">
            Sign In
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-blue-700 text-xs font-bold">
            <Video className="w-3.5 h-3.5 text-blue-600" />
            <span>1-on-1 Mentorship</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 tracking-tight">
            My 1:1 Bookings
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl">
            Track your private calls with top rankers, join video meetings, and leave reviews for completed sessions.
          </p>
        </div>

        <Link href="/book-call">
          <Button
            size="md"
            variant="primary"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs flex items-center gap-2 shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>Book New 1:1 Call</span>
          </Button>
        </Link>
      </div>

      {/* Summary Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="p-5 bg-white border border-slate-200/80 rounded-2xl flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-slate-500 font-medium">Confirmed Calls</p>
            <p className="text-xl font-extrabold text-slate-900">{confirmedSessions.length}</p>
          </div>
        </Card>

        <Card className="p-5 bg-white border border-slate-200/80 rounded-2xl flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-slate-500 font-medium">Pending Approval</p>
            <p className="text-xl font-extrabold text-slate-900">{pendingSessions.length}</p>
          </div>
        </Card>

        <Card className="p-5 bg-white border border-slate-200/80 rounded-2xl flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <Star className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-slate-500 font-medium">Completed Sessions</p>
            <p className="text-xl font-extrabold text-slate-900">{completedSessions.length}</p>
          </div>
        </Card>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
        <button
          onClick={() => setActiveTab("all")}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
            activeTab === "all"
              ? "bg-slate-900 text-white shadow-xs"
              : "text-slate-600 hover:bg-slate-100"
          }`}
        >
          All ({bookings?.length || 0})
        </button>
        <button
          onClick={() => setActiveTab("confirmed")}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
            activeTab === "confirmed"
              ? "bg-emerald-600 text-white shadow-xs"
              : "text-slate-600 hover:bg-slate-100"
          }`}
        >
          Confirmed ({confirmedSessions.length})
        </button>
        <button
          onClick={() => setActiveTab("pending")}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
            activeTab === "pending"
              ? "bg-amber-600 text-white shadow-xs"
              : "text-slate-600 hover:bg-slate-100"
          }`}
        >
          Pending Approval ({pendingSessions.length})
        </button>
        <button
          onClick={() => setActiveTab("completed")}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
            activeTab === "completed"
              ? "bg-blue-600 text-white shadow-xs"
              : "text-slate-600 hover:bg-slate-100"
          }`}
        >
          Completed ({completedSessions.length})
        </button>
      </div>

      {/* Bookings List */}
      <div>
        {isLoading ? (
          <div className="space-y-4">
            <CardSkeleton />
            <CardSkeleton />
          </div>
        ) : displayedBookings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {displayedBookings.map((b) => (
              <Card
                key={b.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-5 space-y-4 hover:border-slate-300 transition-all shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-3.5">
                  {/* Mentor Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 overflow-hidden shrink-0 flex items-center justify-center font-bold text-slate-700 text-sm">
                        {b.mentor_avatar_url ? (
                          <img
                            src={b.mentor_avatar_url}
                            alt={b.mentor_name || "Mentor"}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          b.mentor_name?.charAt(0) || "M"
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h3 className="font-bold text-sm text-slate-900">
                            {b.mentor_name || "Verified Mentor"}
                          </h3>
                          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                        </div>
                        {b.mentor_college && (
                          <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                            <GraduationCap className="w-3.5 h-3.5 text-slate-400" />
                            <span>{b.mentor_college}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      {b.status === "PENDING_APPROVAL" && (
                        <span className="text-[11px] font-bold bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-1 rounded-full">
                          Pending Approval
                        </span>
                      )}
                      {b.status === "CONFIRMED" && (
                        <span className="text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-1 rounded-full">
                          Confirmed
                        </span>
                      )}
                      {b.status === "COMPLETED" && (
                        <span className="text-[11px] font-bold bg-slate-100 text-slate-600 border border-slate-200 px-2.5 py-1 rounded-full">
                          Completed
                        </span>
                      )}
                      {b.status === "REFUNDED" && (
                        <span className="text-[11px] font-bold bg-rose-50 text-rose-700 border border-rose-200 px-2.5 py-1 rounded-full">
                          Refunded
                        </span>
                      )}
                      {b.status === "REJECTED" && (
                        <span className="text-[11px] font-bold bg-rose-50 text-rose-700 border border-rose-200 px-2.5 py-1 rounded-full">
                          Declined
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Scheduled Time & Details */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5 text-xs">
                    <div className="flex items-center gap-1.5 text-slate-800 font-semibold">
                      <Clock className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>
                        {new Date(b.scheduled_at).toLocaleString("en-IN", {
                          dateStyle: "medium",
                          timeStyle: "short",
                        })}{" "}
                        ({b.duration_minutes} mins)
                      </span>
                    </div>

                    {b.agenda_notes && (
                      <div className="text-slate-600 text-[11px] leading-relaxed pt-1">
                        <span className="font-semibold text-slate-700">Agenda: </span>
                        &ldquo;{b.agenda_notes}&rdquo;
                      </div>
                    )}

                    {b.status === "PENDING_APPROVAL" && (
                      <p className="text-[11px] text-amber-700 font-medium pt-1">
                        Waiting for mentor to approve and provide the Google Meet link.
                      </p>
                    )}

                    {b.status === "REJECTED" && b.rejection_reason && (
                      <p className="text-[11px] text-rose-700 font-medium pt-1">
                        Reason: {b.rejection_reason}
                      </p>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 border-t border-slate-100 space-y-2">
                  {b.status === "CONFIRMED" && b.meeting_link && (
                    <a
                      href={b.meeting_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-3 text-xs font-bold text-center rounded-xl bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2 shadow-xs transition-colors"
                    >
                      <Video className="w-4 h-4" />
                      <span>Join Video Call</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                    </a>
                  )}

                  {b.status === "COMPLETED" && !b.review && (
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => setReviewingBooking(b)}
                      className="w-full text-xs font-semibold text-amber-700 bg-amber-50 hover:bg-amber-100 border border-amber-200 flex items-center justify-center gap-1.5 py-2.5 rounded-xl"
                    >
                      <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                      Rate & Review Session
                    </Button>
                  )}

                  {b.status === "COMPLETED" && b.review && (
                    <div className="p-2.5 rounded-xl bg-amber-50/60 border border-amber-200/60 text-xs space-y-1">
                      <div className="flex items-center gap-1 text-amber-700 font-bold">
                        <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                        <span>You rated {b.review.rating}/5</span>
                      </div>
                      {b.review.comment && (
                        <p className="text-[11px] text-slate-600 italic">
                          &ldquo;{b.review.comment}&rdquo;
                        </p>
                      )}
                    </div>
                  )}

                  {b.mentor_id && (
                    <div className="text-center pt-1">
                      <Link
                        href={`/mentors/${b.mentor_id}`}
                        className="text-[11px] text-slate-500 hover:text-blue-600 font-medium underline"
                      >
                        View Mentor Cohort Profile →
                      </Link>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 space-y-4 max-w-md mx-auto">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto">
              <Video className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-slate-900 text-sm">No bookings in this tab</h3>
              <p className="text-xs text-slate-500">
                You haven&apos;t booked any 1-on-1 mentorship calls in this status yet.
              </p>
            </div>
            <div className="pt-2">
              <Link href="/book-call">
                <Button variant="primary" size="sm" className="text-xs font-bold bg-blue-600 hover:bg-blue-700">
                  Browse Mentors & Book a Call
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Review Modal */}
      {reviewingBooking && (
        <SessionReviewModal
          booking={reviewingBooking}
          onClose={() => setReviewingBooking(null)}
          onSuccess={() => refetch()}
        />
      )}
    </div>
  );
}
