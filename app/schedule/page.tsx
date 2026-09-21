"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useAuthStore } from "@/store/authStore";
import { useCreateMeeting, useMyMeetings, useUpdateMeeting } from "@/hooks/useMeetings";
import { useSubscriptions } from "@/hooks/useSubscriptions";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { EmptyState } from "@/components/ui/EmptyState";
import { CardSkeleton } from "@/components/ui/Skeleton";
import { Meeting } from "@/lib/types";

export default function SchedulePage() {
  const { user, isAuthenticated } = useAuthStore();
  const isMentor = user?.role === "MENTOR";

  const { data: meetings, isLoading, refetch } = useMyMeetings();
  const createMeetingMutation = useCreateMeeting();
  const updateMeetingMutation = useUpdateMeeting();

  // Student request modal/form state
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [requestTitle, setRequestTitle] = useState("");
  const { data: mySubs } = useSubscriptions(undefined, 10);
  const studentMentorId = mySubs?.items?.[0]?.mentor_id;
  const [requestError, setRequestError] = useState<string | null>(null);

  // Mentor schedule/confirm modal state
  const [selectedMeeting, setSelectedMeeting] = useState<Meeting | null>(null);
  const [scheduleTime, setScheduleTime] = useState("");
  const [meetingLink, setMeetingLink] = useState("");
  const [confirmError, setConfirmError] = useState<string | null>(null);

  const handleStudentRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    setRequestError(null);
    if (!studentMentorId) {
      setRequestError("You must have an active subscription with a mentor to request a session.");
      return;
    }

    try {
      await createMeetingMutation.mutateAsync({
        mentor_id: studentMentorId,
        title: requestTitle,
      });
      setRequestTitle("");
      setShowRequestModal(false);
      refetch();
    } catch (err: any) {
      setRequestError(err.detail || "Failed to request meeting.");
    }
  };

  const handleMentorConfirm = async (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmError(null);
    if (!selectedMeeting) return;

    try {
      await updateMeetingMutation.mutateAsync({
        meetingId: selectedMeeting.id,
        payload: {
          scheduled_at: scheduleTime,
          meeting_link: meetingLink,
          status: "SCHEDULED",
        },
      });
      setSelectedMeeting(null);
      setScheduleTime("");
      setMeetingLink("");
      refetch();
    } catch (err: any) {
      setConfirmError(err.detail || "Failed to confirm meeting.");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="py-16 text-center max-w-md mx-auto">
        <h2 className="text-xl font-bold font-display text-white mb-2">
          Authentication Required
        </h2>
        <p className="text-sm text-ink-muted mb-6">
          Sign in to view your scheduled mentorship calls and request 1:1 sessions.
        </p>
        <Link href="/login?redirect=/schedule">
          <Button variant="primary" size="md">
            Sign In
          </Button>
        </Link>
      </div>
    );
  }

  const requestedMeetings = meetings?.filter((m) => m.status === "REQUESTED") || [];
  const scheduledMeetings = meetings?.filter((m) => m.status === "SCHEDULED") || [];

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-display text-white tracking-tight">
            Live Mentorship Sessions
          </h1>
          <p className="text-sm text-ink-muted mt-1">
            Weekly 1:1 accountability checkpoints, mock performance reviews, and doubt-clearing calls.
          </p>
        </div>

        {!isMentor && (
          <Button
            size="sm"
            variant="primary"
            onClick={() => setShowRequestModal(true)}
          >
            + Request 1:1 Meeting
          </Button>
        )}
      </div>

      {/* Student Request Modal */}
      {showRequestModal && (
        <Card className="bg-surface border-hairline p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-base text-white">
              Request a 1:1 Mentorship Session
            </h3>
            <button
              onClick={() => setShowRequestModal(false)}
              className="text-ink-muted hover:text-white text-xs"
            >
              ✕
            </button>
          </div>
          {requestError && (
            <p className="text-xs text-amber font-medium">{requestError}</p>
          )}
          <form onSubmit={handleStudentRequest} className="space-y-4">
            <Input
              label="Meeting Topic / Questions"
              value={requestTitle}
              onChange={(e) => setRequestTitle(e.target.value)}
              placeholder="e.g. Discuss mock test 3 analysis and speed strategy"
              required
            />
            <div className="flex items-center justify-end gap-2">
              <Button
                type="button"
                size="sm"
                variant="ghost"
                onClick={() => setShowRequestModal(false)}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                size="sm"
                variant="mint"
                isLoading={createMeetingMutation.isPending}
              >
                Submit Request
              </Button>
            </div>
          </form>
        </Card>
      )}

      {/* Mentor Confirm / Schedule Modal */}
      {selectedMeeting && (
        <Card className="bg-surface border-hairline p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-base text-white">
              Confirm & Schedule Session: {selectedMeeting.title}
            </h3>
            <button
              onClick={() => setSelectedMeeting(null)}
              className="text-ink-muted hover:text-white text-xs"
            >
              ✕
            </button>
          </div>
          <p className="text-xs text-ink-muted">
            Student: {selectedMeeting.student_name || "Cohort Member"}
          </p>
          {confirmError && (
            <p className="text-xs text-amber font-medium">{confirmError}</p>
          )}
          <form onSubmit={handleMentorConfirm} className="space-y-4">
            <Input
              label="Scheduled Date & Time"
              type="datetime-local"
              value={scheduleTime}
              onChange={(e) => setScheduleTime(e.target.value)}
              required
            />
            <Input
              label="Meeting URL (Google Meet or Zoom)"
              type="url"
              value={meetingLink}
              onChange={(e) => setMeetingLink(e.target.value)}
              placeholder="https://meet.google.com/..."
              required
            />
            <div className="flex items-center justify-end gap-2">
              <Button
                type="button"
                size="sm"
                variant="ghost"
                onClick={() => setSelectedMeeting(null)}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                size="sm"
                variant="mint"
                isLoading={updateMeetingMutation.isPending}
              >
                Confirm Session
              </Button>
            </div>
          </form>
        </Card>
      )}

      {isLoading ? (
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      ) : (
        <div className="space-y-8">
          {/* Pending / Requested Queue */}
          {requestedMeetings.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber" />
                <h3 className="text-xs font-semibold uppercase tracking-wider text-amber">
                  Pending Session Requests ({requestedMeetings.length})
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {requestedMeetings.map((m) => (
                  <Card
                    key={m.id}
                    className="bg-surface border-hairline p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <span className="font-display font-bold text-base text-white">
                          {m.title}
                        </span>
                        <Badge variant="MARKED_COMPLETE">Requested</Badge>
                      </div>
                      <p className="text-xs text-ink-muted">
                        {isMentor
                          ? `Requested by student: ${m.student_name || "Unknown"}`
                          : `Requested with mentor: ${m.mentor_name || "Your Mentor"}`}
                      </p>
                      <p className="text-[11px] text-ink-faint">
                        Submitted: {new Date(m.created_at).toLocaleDateString()}
                      </p>
                    </div>

                    {isMentor && (
                      <Button
                        size="sm"
                        variant="primary"
                        onClick={() => setSelectedMeeting(m)}
                      >
                        Accept & Set Link
                      </Button>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Confirmed / Scheduled Meetings */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-faint">
              Scheduled Sessions ({scheduledMeetings.length})
            </h3>

            {scheduledMeetings.length === 0 ? (
              <EmptyState
                title="No upcoming sessions"
                description={
                  isMentor
                    ? "You have no confirmed sessions on your schedule. Accept pending student requests above."
                    : "No sessions scheduled. Click '+ Request 1:1 Meeting' to book time with your mentor."
                }
              />
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {scheduledMeetings.map((m) => (
                  <Card
                    key={m.id}
                    className="bg-surface border-hairline p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-3">
                        <span className="font-display font-bold text-base text-white">
                          {m.title}
                        </span>
                        <Badge variant="APPROVED">Scheduled</Badge>
                      </div>
                      <p className="text-xs text-mint font-medium">
                        🗓️{" "}
                        {m.scheduled_at
                          ? new Date(m.scheduled_at).toLocaleString("en-IN", {
                              weekday: "short",
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            })
                          : "Time TBD"}
                      </p>
                      <p className="text-xs text-ink-faint">
                        {isMentor
                          ? `Attendee: ${m.student_name || "Cohort Wide"}`
                          : `Host: ${m.mentor_name || "Mentor"}`}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      {m.meeting_link ? (
                        <a
                          href={m.meeting_link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button size="sm" variant="mint">
                            Join Meeting Link ↗
                          </Button>
                        </a>
                      ) : (
                        <span className="text-xs text-ink-faint italic">
                          Link pending
                        </span>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
