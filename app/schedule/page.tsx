"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useAuthStore } from "@/store/authStore";
import {
  useMyMeetings,
  useCreateMeeting,
  useUpdateMeeting,
} from "@/hooks/useMeetings";
import { useSubscriptions } from "@/hooks/useSubscriptions";
import { useMentorRoster } from "@/hooks/useTasks";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { EmptyState } from "@/components/ui/EmptyState";
import { CardSkeleton } from "@/components/ui/Skeleton";
import { Meeting } from "@/lib/types";

export default function SchedulePage() {
  const { user, isAuthenticated } = useAuthStore();
  const isMentor = user?.role === "MENTOR";

  const { data: meetings, isLoading, refetch } = useMyMeetings();
  const createMeetingMutation = useCreateMeeting();
  const updateMeetingMutation = useUpdateMeeting();

  // For students to know which mentor they are requesting with
  const { data: subsData } = useSubscriptions();
  const activeSub = subsData?.items?.find((s) => s.status === "ACTIVE");

  // For mentors to know their student roster for 1:1 vs Cohort selection
  const { data: rosterData } = useMentorRoster(isMentor ? user?.id : undefined);

  // Student Request Modal State
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [requestTitle, setRequestTitle] = useState("");
  const [requestError, setRequestError] = useState("");

  // Mentor New Session Modal State
  const [showMentorScheduleModal, setShowMentorScheduleModal] = useState(false);
  const [mentorScheduleTitle, setMentorScheduleTitle] = useState("");
  const [mentorScheduleStudentId, setMentorScheduleStudentId] = useState("");
  const [mentorScheduleTime, setMentorScheduleTime] = useState("");
  const [mentorScheduleLink, setMentorScheduleLink] = useState("");
  const [mentorScheduleError, setMentorScheduleError] = useState("");

  // Mentor Confirm / Schedule Modal State (for responding to student requests)
  const [selectedMeeting, setSelectedMeeting] = useState<Meeting | null>(null);
  const [scheduleTime, setScheduleTime] = useState("");
  const [meetingLink, setMeetingLink] = useState("");
  const [confirmError, setConfirmError] = useState("");

  const handleStudentRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    setRequestError("");
    if (!activeSub) {
      setRequestError("You must have an active subscription with a mentor to request a meeting.");
      return;
    }

    try {
      await createMeetingMutation.mutateAsync({
        mentor_id: activeSub.mentor_id,
        title: requestTitle,
      });
      setShowRequestModal(false);
      setRequestTitle("");
      refetch();
    } catch (err: any) {
      setRequestError(err.detail || "Failed to submit meeting request.");
    }
  };

  const handleMentorSchedule = async (e: React.FormEvent) => {
    e.preventDefault();
    setMentorScheduleError("");
    if (!user?.id) return;

    try {
      await createMeetingMutation.mutateAsync({
        mentor_id: user.id,
        student_id: mentorScheduleStudentId.trim() || null,
        title: mentorScheduleTitle.trim(),
        scheduled_at: new Date(mentorScheduleTime).toISOString(),
        meeting_link: mentorScheduleLink.trim(),
      });
      setShowMentorScheduleModal(false);
      setMentorScheduleTitle("");
      setMentorScheduleStudentId("");
      setMentorScheduleTime("");
      setMentorScheduleLink("");
      refetch();
    } catch (err: any) {
      setMentorScheduleError(err.detail || "Failed to schedule session.");
    }
  };

  const handleMentorConfirm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedMeeting) return;
    setConfirmError("");

    try {
      await updateMeetingMutation.mutateAsync({
        meetingId: selectedMeeting.id,
        payload: {
          scheduled_at: new Date(scheduleTime).toISOString(),
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
        <h2 className="text-xl font-bold font-display text-ink mb-2">
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
          <h1 className="text-3xl font-extrabold font-display text-ink tracking-tight">
            Live Mentorship Sessions
          </h1>
          <p className="text-sm text-ink-muted mt-1">
            Weekly 1:1 accountability checkpoints, mock performance reviews, and doubt-clearing calls.
          </p>
        </div>

        {isMentor ? (
          <Button
            size="sm"
            variant="primary"
            onClick={() => {
              setMentorScheduleError("");
              setShowMentorScheduleModal(true);
            }}
          >
            + Schedule Session
          </Button>
        ) : (
          <Button
            size="sm"
            variant="primary"
            onClick={() => setShowRequestModal(true)}
          >
            + Request 1:1 Meeting
          </Button>
        )}
      </div>

      {/* Mentor Direct Schedule Modal */}
      {showMentorScheduleModal && (
        <Card className="bg-white border-2 border-brand/20 p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-mist pb-3">
            <div>
              <h3 className="font-display font-bold text-base text-ink">
                Schedule a Mentorship Session
              </h3>
              <p className="text-xs text-ink-muted mt-0.5">
                Host a cohort-wide masterclass or a targeted 1:1 doubt clearing session.
              </p>
            </div>
            <button
              onClick={() => setShowMentorScheduleModal(false)}
              className="text-ink-muted hover:text-ink text-xs"
            >
              ✕ Close
            </button>
          </div>

          {mentorScheduleError && (
            <p className="text-xs text-amber font-medium p-2.5 bg-amber/10 rounded-control border border-amber/30">
              {mentorScheduleError}
            </p>
          )}

          <form onSubmit={handleMentorSchedule} className="space-y-4">
            <Input
              label="Session Title / Agenda"
              value={mentorScheduleTitle}
              onChange={(e) => setMentorScheduleTitle(e.target.value)}
              placeholder="e.g. Weekly Doubt Clearing & JEE Physics Mechanics Strategy"
              required
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5 text-left">
                <label className="text-xs font-semibold text-ink-muted select-none">
                  Audience / Attendee
                </label>
                <select
                  value={mentorScheduleStudentId}
                  onChange={(e) => setMentorScheduleStudentId(e.target.value)}
                  className="w-full px-3 py-2 bg-white text-ink text-sm rounded-control border border-mist focus:outline-none focus:border-brand"
                >
                  <option value="">Cohort-Wide (All Subscribed Students)</option>
                  {rosterData?.items?.map((s) => (
                    <option key={s.student_id} value={s.student_id}>
                      {s.student_name} ({s.student_email})
                    </option>
                  ))}
                </select>
                <p className="text-[11px] text-ink-faint">
                  Leave as Cohort-Wide for group webinars, or select a student for 1:1.
                </p>
              </div>

              <Input
                label="Scheduled Date & Time"
                type="datetime-local"
                value={mentorScheduleTime}
                onChange={(e) => setMentorScheduleTime(e.target.value)}
                required
              />
            </div>

            <Input
              label="Meeting URL (Google Meet or Zoom)"
              type="url"
              value={mentorScheduleLink}
              onChange={(e) => setMentorScheduleLink(e.target.value)}
              placeholder="https://meet.google.com/abc-defg-hij"
              required
            />

            <div className="flex items-center justify-end gap-2 pt-2">
              <Button
                type="button"
                size="sm"
                variant="ghost"
                onClick={() => setShowMentorScheduleModal(false)}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                size="sm"
                variant="primary"
                isLoading={createMeetingMutation.isPending}
              >
                Schedule Session
              </Button>
            </div>
          </form>
        </Card>
      )}

      {/* Student Request Modal */}
      {showRequestModal && (
        <Card className="bg-white border-mist p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-mist pb-3">
            <h3 className="font-display font-bold text-base text-ink">
              Request a 1:1 Mentorship Session
            </h3>
            <button
              onClick={() => setShowRequestModal(false)}
              className="text-ink-muted hover:text-ink text-xs"
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
                variant="primary"
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
        <Card className="bg-white border-mist p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-base text-ink">
              Confirm & Schedule Session: {selectedMeeting.title}
            </h3>
            <button
              onClick={() => setSelectedMeeting(null)}
              className="text-ink-muted hover:text-ink text-xs"
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
                variant="primary"
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
                    className="bg-white border-mist p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <span className="font-display font-bold text-base text-ink">
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
                    ? "You have no confirmed sessions on your schedule. Click '+ Schedule Session' above to schedule a live call."
                    : "No sessions scheduled. Click '+ Request 1:1 Meeting' to book time with your mentor."
                }
                actionLabel={isMentor ? "+ Schedule Session" : undefined}
                onAction={isMentor ? () => setShowMentorScheduleModal(true) : undefined}
              />
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {scheduledMeetings.map((m) => (
                  <Card
                    key={m.id}
                    className="bg-white border-mist p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-3">
                        <span className="font-display font-bold text-base text-ink">
                          {m.title}
                        </span>
                        <Badge variant="APPROVED">Scheduled</Badge>
                      </div>
                      <p className="text-xs text-moss font-medium">
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
                          ? `Attendee: ${m.student_name || "Cohort Wide (All Students)"}`
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
                          <Button size="sm" variant="moss">
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
