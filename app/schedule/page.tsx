"use client";

import React, { Suspense, useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import {
  useMyMeetings,
  useCreateMeeting,
  useUpdateMeeting,
  useDeleteMeeting,
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
import {
  Calendar,
  Pencil,
  Trash2,
  AlertCircle,
  Video,
  Clock,
  User,
  Users,
  X,
} from "lucide-react";

function toLocalDatetimeInputString(dateStr?: string | null): string {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return "";
  const pad = (n: number) => n.toString().padStart(2, "0");
  const year = d.getFullYear();
  const month = pad(d.getMonth() + 1);
  const day = pad(d.getDate());
  const hours = pad(d.getHours());
  const minutes = pad(d.getMinutes());
  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

function ScheduleContent() {
  const searchParams = useSearchParams();
  const paramStudentId = searchParams.get("student_id");
  const paramAction = searchParams.get("action");

  const { user, isAuthenticated } = useAuthStore();
  const isMentor = user?.role === "MENTOR";

  const { data: meetings, isLoading, refetch } = useMyMeetings();
  const createMeetingMutation = useCreateMeeting();
  const updateMeetingMutation = useUpdateMeeting();
  const deleteMeetingMutation = useDeleteMeeting();

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

  // Mentor Edit / Reschedule Modal State
  const [editingMeeting, setEditingMeeting] = useState<Meeting | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editStudentId, setEditStudentId] = useState("");
  const [editTime, setEditTime] = useState("");
  const [editLink, setEditLink] = useState("");
  const [editError, setEditError] = useState("");

  // Delete Confirmation State
  const [deletingMeeting, setDeletingMeeting] = useState<Meeting | null>(null);
  const [deleteError, setDeleteError] = useState("");

  // Reactively open scheduling modal if arriving from student profile with ?student_id=...&action=schedule
  useEffect(() => {
    if (isMentor && paramStudentId) {
      setMentorScheduleStudentId(paramStudentId);
      if (paramAction === "schedule") {
        setShowMentorScheduleModal(true);
      }
    }
  }, [isMentor, paramStudentId, paramAction]);

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

  const handleOpenEditModal = (m: Meeting) => {
    setEditingMeeting(m);
    setEditTitle(m.title);
    setEditStudentId(m.student_id || "");
    setEditTime(toLocalDatetimeInputString(m.scheduled_at));
    setEditLink(m.meeting_link || "");
    setEditError("");
  };

  const handleMentorEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingMeeting) return;
    setEditError("");

    try {
      await updateMeetingMutation.mutateAsync({
        meetingId: editingMeeting.id,
        payload: {
          title: editTitle.trim(),
          scheduled_at: editTime ? new Date(editTime).toISOString() : undefined,
          meeting_link: editLink.trim() || undefined,
          student_id: editStudentId ? editStudentId : null,
        },
      });
      setEditingMeeting(null);
      refetch();
    } catch (err: any) {
      setEditError(err.detail || "Failed to update meeting details.");
    }
  };

  const handleDeleteMeeting = async () => {
    if (!deletingMeeting) return;
    setDeleteError("");

    try {
      await deleteMeetingMutation.mutateAsync(deletingMeeting.id);
      setDeletingMeeting(null);
      refetch();
    } catch (err: any) {
      setDeleteError(err.detail || "Failed to delete meeting.");
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
      {/* Header Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-sky-50 via-blue-50/40 to-white border border-sky-100/80 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-soft">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-sky-100/80 border border-sky-200 text-[11px] font-bold text-sky-900 uppercase tracking-wider mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
            Session Management
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-ink tracking-tight">
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
            className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-soft rounded-lg"
          >
            <Calendar className="w-4 h-4" />
            + Schedule Session
          </Button>
        ) : (
          <Button
            size="sm"
            variant="primary"
            onClick={() => setShowRequestModal(true)}
            className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-soft rounded-lg"
          >
            <Calendar className="w-4 h-4" />
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
                Host a cohort-wide masterclass or a targeted 1:1 session with a student.
              </p>
            </div>
            <button
              onClick={() => setShowMentorScheduleModal(false)}
              className="text-ink-muted hover:text-ink text-xs p-1 rounded hover:bg-mist/30"
            >
              <X className="w-4 h-4" />
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
              placeholder="e.g. 1:1 Weekly Doubt Clearing & JEE Physics Mechanics Review"
              required
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5 text-left">
                <label className="text-xs font-semibold text-ink-muted select-none">
                  Audience / Student Attendee
                </label>
                <select
                  value={mentorScheduleStudentId}
                  onChange={(e) => setMentorScheduleStudentId(e.target.value)}
                  className="w-full px-3 py-2 bg-white text-ink text-sm rounded-control border border-mist focus:outline-none focus:border-brand"
                >
                  <option value="">Cohort-Wide (All Enrolled Students)</option>
                  {rosterData?.items?.map((s) => (
                    <option key={s.student_id} value={s.student_id}>
                      {s.student_name} ({s.student_email})
                    </option>
                  ))}
                </select>
                <p className="text-[11px] text-ink-faint">
                  Select an enrolled student for a private 1:1, or leave Cohort-Wide.
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

      {/* Mentor Edit / Reschedule Modal */}
      {editingMeeting && (
        <Card className="bg-white border-2 border-brand/40 p-6 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-mist pb-3">
            <div>
              <h3 className="font-display font-bold text-base text-ink flex items-center gap-2">
                <Pencil className="w-4 h-4 text-brand" />
                Edit & Reschedule Meeting
              </h3>
              <p className="text-xs text-ink-muted mt-0.5">
                Update date/time, agenda, meeting link, or attendee for this session.
              </p>
            </div>
            <button
              onClick={() => setEditingMeeting(null)}
              className="text-ink-muted hover:text-ink text-xs p-1 rounded hover:bg-mist/30"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {editError && (
            <p className="text-xs text-amber font-medium p-2.5 bg-amber/10 rounded-control border border-amber/30">
              {editError}
            </p>
          )}

          <form onSubmit={handleMentorEdit} className="space-y-4">
            <Input
              label="Session Title / Agenda"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              placeholder="e.g. Rescheduled 1:1 Checkpoint"
              required
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5 text-left">
                <label className="text-xs font-semibold text-ink-muted select-none">
                  Audience / Student Attendee
                </label>
                <select
                  value={editStudentId}
                  onChange={(e) => setEditStudentId(e.target.value)}
                  className="w-full px-3 py-2 bg-white text-ink text-sm rounded-control border border-mist focus:outline-none focus:border-brand"
                >
                  <option value="">Cohort-Wide (All Enrolled Students)</option>
                  {rosterData?.items?.map((s) => (
                    <option key={s.student_id} value={s.student_id}>
                      {s.student_name} ({s.student_email})
                    </option>
                  ))}
                </select>
              </div>

              <Input
                label="Scheduled Date & Time"
                type="datetime-local"
                value={editTime}
                onChange={(e) => setEditTime(e.target.value)}
                required
              />
            </div>

            <Input
              label="Meeting URL (Google Meet or Zoom)"
              type="url"
              value={editLink}
              onChange={(e) => setEditLink(e.target.value)}
              placeholder="https://meet.google.com/abc-defg-hij"
              required
            />

            <div className="flex items-center justify-end gap-2 pt-2">
              <Button
                type="button"
                size="sm"
                variant="ghost"
                onClick={() => setEditingMeeting(null)}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                size="sm"
                variant="primary"
                isLoading={updateMeetingMutation.isPending}
              >
                Save Changes & Reschedule
              </Button>
            </div>
          </form>
        </Card>
      )}

      {/* Delete Confirmation Modal */}
      {deletingMeeting && (
        <Card className="bg-white border-2 border-red-200 p-6 space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="font-display font-bold text-base text-ink">
                Delete Mentorship Meeting?
              </h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                Are you sure you want to delete{" "}
                <span className="font-bold text-ink">&ldquo;{deletingMeeting.title}&rdquo;</span>?
                {deletingMeeting.student_name && (
                  <span> Attendee: <strong className="text-ink">{deletingMeeting.student_name}</strong>.</span>
                )}
                {" "}This meeting will be permanently cancelled from the schedule.
              </p>
            </div>
          </div>

          {deleteError && (
            <p className="text-xs text-red-600 font-medium p-2.5 bg-red-50 rounded-control border border-red-200">
              {deleteError}
            </p>
          )}

          <div className="flex items-center justify-end gap-2 pt-2 border-t border-mist">
            <Button
              type="button"
              size="sm"
              variant="ghost"
              onClick={() => setDeletingMeeting(null)}
            >
              Cancel
            </Button>
            <Button
              type="button"
              size="sm"
              variant="secondary"
              isLoading={deleteMeetingMutation.isPending}
              onClick={handleDeleteMeeting}
              className="bg-red-600 hover:bg-red-700 text-white font-bold border-transparent"
            >
              Confirm Delete
            </Button>
          </div>
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
              className="text-ink-muted hover:text-ink text-xs p-1"
            >
              <X className="w-4 h-4" />
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

      {/* Mentor Confirm / Schedule Modal (for responding to student requests) */}
      {selectedMeeting && (
        <Card className="bg-white border-mist p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-base text-ink">
              Confirm & Schedule Session: {selectedMeeting.title}
            </h3>
            <button
              onClick={() => setSelectedMeeting(null)}
              className="text-ink-muted hover:text-ink text-xs p-1"
            >
              <X className="w-4 h-4" />
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
              placeholder="https://meet.google.com/abc-defg-hij"
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

                    <div className="flex items-center gap-2">
                      {isMentor ? (
                        <>
                          <Button
                            size="sm"
                            variant="primary"
                            onClick={() => setSelectedMeeting(m)}
                            className="text-xs"
                          >
                            Accept & Set Link
                          </Button>
                          <Button
                            size="sm"
                            variant="secondary"
                            onClick={() => setDeletingMeeting(m)}
                            className="text-xs text-red-600 border-red-200 hover:bg-red-50 flex items-center gap-1"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            Decline
                          </Button>
                        </>
                      ) : (
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() => setDeletingMeeting(m)}
                          className="text-xs text-red-600 border-red-200 hover:bg-red-50 flex items-center gap-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          Cancel Request
                        </Button>
                      )}
                    </div>
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
                    ? "You have no confirmed sessions on your schedule. Click '+ Schedule Session' above to schedule a 1:1 or cohort call."
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
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="font-display font-bold text-base text-ink">
                          {m.title}
                        </span>
                        <Badge variant="APPROVED">Scheduled</Badge>
                        {m.student_id ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-brand bg-brand/10 px-2 py-0.5 rounded-full">
                            <User className="w-3 h-3" />
                            1:1 Session
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-moss bg-moss/10 px-2 py-0.5 rounded-full">
                            <Users className="w-3 h-3" />
                            Cohort-Wide
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-moss font-semibold flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
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

                    <div className="flex flex-wrap items-center gap-2">
                      {m.meeting_link ? (
                        <a
                          href={m.meeting_link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button size="sm" variant="moss" className="text-xs flex items-center gap-1.5">
                            <Video className="w-3.5 h-3.5" />
                            Join Link ↗
                          </Button>
                        </a>
                      ) : (
                        <span className="text-xs text-ink-faint italic mr-2">
                          Link pending
                        </span>
                      )}

                      {isMentor && (
                        <>
                          <Button
                            size="sm"
                            variant="secondary"
                            onClick={() => handleOpenEditModal(m)}
                            className="text-xs flex items-center gap-1.5 font-medium"
                          >
                            <Pencil className="w-3.5 h-3.5 text-brand" />
                            Edit / Reschedule
                          </Button>
                          <Button
                            size="sm"
                            variant="secondary"
                            onClick={() => setDeletingMeeting(m)}
                            className="text-xs flex items-center gap-1.5 text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            Delete
                          </Button>
                        </>
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

export default function SchedulePage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-5xl mx-auto space-y-4">
          <CardSkeleton />
          <CardSkeleton />
        </div>
      }
    >
      <ScheduleContent />
    </Suspense>
  );
}
