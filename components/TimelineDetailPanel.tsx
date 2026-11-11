"use client";

import React, { useState, useRef, useCallback } from "react";
import {
  AlertCircle,
  Calendar,
  Check,
  ChevronRight,
  Clock,
  Flag,
  MessageSquarePlus,
  Pin,
  Star,
  User,
  X,
} from "lucide-react";
import { Button } from "./ui/Button";
import { getUserFriendlyError } from "@/lib/error-utils";
import type {
  TimelineTask,
  TimelineWindow,
  TimelineStatus,
} from "@/lib/timeline-helpers";
import {
  addDays,
  dayNumber,
  diffDays,
  formatShortDate,
  getStatusDisplay,
  isWeekend,
} from "@/lib/timeline-helpers";

// ── Props ────────────────────────────────────────────────────────────────

interface TimelineDetailPanelProps {
  task: TimelineTask | null;
  viewer: "student" | "mentor";
  onComplete?: (taskId: string) => Promise<void>;
  isCompleting?: boolean;
  onReview?: (
    taskId: string,
    decision: "APPROVED" | "REJECTED",
    mentorNote?: string
  ) => Promise<boolean | void> | void;
  isReviewing?: boolean;
  today: string;
}

// ── Component ────────────────────────────────────────────────────────────

export function TimelineDetailPanel({
  task,
  viewer,
  onComplete,
  isCompleting = false,
  onReview,
  isReviewing = false,
  today,
}: TimelineDetailPanelProps) {
  if (!task) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden flex flex-col min-h-[360px]">
        <div className="bg-gradient-to-r from-slate-50 to-blue-50/30 px-5 py-3.5 border-b border-slate-100 flex items-center gap-2">
          <Calendar className="w-4 h-4 text-blue-600" />
          <h3 className="text-sm font-bold text-slate-900">Task Details</h3>
        </div>
        <div className="p-8 flex flex-col items-center justify-center text-center flex-1">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-3 text-blue-600 shadow-xs">
            <Calendar className="w-6 h-6 text-blue-600" />
          </div>
          <p className="text-sm font-bold font-display text-slate-800">
            Select a task from the timeline
          </p>
          <p className="text-xs text-slate-400 mt-1 max-w-xs leading-relaxed">
            Click any task row or schedule bar on the timeline to inspect full details, notes, and actions.
          </p>
        </div>
      </div>
    );
  }

  return (
    <TimelineDetailPanelContent
      key={task.id}
      task={task}
      viewer={viewer}
      onComplete={onComplete}
      isCompleting={isCompleting}
      onReview={onReview}
      isReviewing={isReviewing}
      today={today}
    />
  );
}

interface TimelineDetailPanelContentProps {
  task: TimelineTask;
  viewer: "student" | "mentor";
  onComplete?: (taskId: string) => Promise<void>;
  isCompleting?: boolean;
  onReview?: (
    taskId: string,
    decision: "APPROVED" | "REJECTED",
    mentorNote?: string
  ) => Promise<boolean | void> | void;
  isReviewing?: boolean;
  today: string;
}

function TimelineDetailPanelContent({
  task,
  viewer,
  onComplete,
  isCompleting = false,
  onReview,
  isReviewing = false,
  today,
}: TimelineDetailPanelContentProps) {
  const [justCompleted, setJustCompleted] = useState<string | null>(null);
  const [showNoteInput, setShowNoteInput] = useState(false);
  const [mentorNote, setMentorNote] = useState("");
  const [reviewError, setReviewError] = useState<string | null>(null);
  const [reviewOutcome, setReviewOutcome] = useState<"APPROVED" | "REJECTED" | null>(
    null
  );

  const handleReviewSubmit = useCallback(
    async (decision: "APPROVED" | "REJECTED") => {
      if (!onReview || isReviewing) return;
      setReviewError(null);
      try {
        const res = await onReview(task.id, decision, mentorNote.trim() || undefined);
        if (res === false) return;
        setReviewOutcome(decision);
        setMentorNote("");
        setShowNoteInput(false);
      } catch (err) {
        setReviewError(
          getUserFriendlyError(err, "Unable to submit review. Please try again.")
        );
      }
    },
    [onReview, isReviewing, task.id, mentorNote]
  );

  // ── Hold-to-complete handler ─────────────────────────────────────────
  const handleComplete = useCallback(async () => {
    if (!onComplete || isCompleting) return;
    try {
      await onComplete(task.id);
      setJustCompleted(task.id);
      setTimeout(() => setJustCompleted(null), 3500);
    } catch {
      // Error handling is done in the parent
    }
  }, [onComplete, task.id, isCompleting]);

  const status = getStatusDisplay(task.timelineStatus, task.daysEarly);
  const isCompleted = task.timelineStatus === "completed";
  const isSubmitted = task.timelineStatus === "submitted";
  const isOverdue = task.timelineStatus === "overdue";
  const isUpcoming = task.timelineStatus === "upcoming";
  const showJustCompleted = justCompleted === task.id;

  // ── Deadline summary text ────────────────────────────────────────────
  let deadlineSummary: string;
  if (isCompleted) {
    deadlineSummary =
      task.daysEarly > 0
        ? `Completed ${task.daysEarly} day${task.daysEarly > 1 ? "s" : ""} early`
        : task.daysEarly === 0
          ? "Completed on time"
          : `Completed ${Math.abs(task.daysEarly)} day${Math.abs(task.daysEarly) > 1 ? "s" : ""} late`;
  } else if (isSubmitted) {
    deadlineSummary = "Submitted, awaiting mentor review";
  } else if (isUpcoming) {
    const opensIn = diffDays(today, task.startDate);
    deadlineSummary = `Opens in ${opensIn} day${opensIn > 1 ? "s" : ""}`;
  } else if (isOverdue) {
    const overdueBy = Math.abs(task.daysLeft);
    deadlineSummary = `${overdueBy} day${overdueBy > 1 ? "s" : ""} past deadline`;
  } else if (task.daysLeft === 0) {
    deadlineSummary = "Due today";
  } else {
    deadlineSummary = `${task.daysLeft} day${task.daysLeft > 1 ? "s" : ""} left`;
  }

  // ── Mini calendar strip ──────────────────────────────────────────────
  const calStart = addDays(task.startDate, -1);
  const calEnd = addDays(task.deadline, 2);
  const calDays = diffDays(calStart, calEnd) + 1;
  const calDates: string[] = [];
  for (let i = 0; i < calDays; i++) calDates.push(addDays(calStart, i));

  // ── Progress tracker steps ───────────────────────────────────────────
  const steps = buildProgressSteps(task.timelineStatus);

  const canComplete =
    viewer === "student" &&
    !isCompleted &&
    !isSubmitted &&
    task.dbStatus === "ASSIGNED";

  const canReview =
    viewer === "mentor" &&
    task.dbStatus === "MARKED_COMPLETE" &&
    Boolean(onReview);

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden">
      {/* ── Status header with colored background strip ─────────────────── */}
      <div className="bg-gradient-to-r from-slate-50 via-blue-50/30 to-white p-5 border-b border-slate-100 flex items-start gap-4">
        {/* Status ring */}
        <div
          className={`w-14 h-14 rounded-2xl border flex items-center justify-center shrink-0 text-xl shadow-xs ${
            isCompleted
              ? "border-emerald-200 bg-emerald-50 text-emerald-600"
              : isSubmitted
                ? "border-sky-200 bg-sky-50 text-sky-600"
                : isOverdue
                  ? "border-amber-200 bg-amber-50 text-amber-600"
                  : task.timelineStatus === "rejected"
                    ? "border-rose-200 bg-rose-50 text-rose-600"
                    : isUpcoming
                      ? "border-slate-200 bg-slate-50 text-slate-400"
                      : "border-blue-200 bg-blue-50 text-blue-600"
          }`}
        >
          {status.icon}
        </div>

        <div className="flex-1 min-w-0">
          <span
            className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full ${status.badgeClass}`}
          >
            {status.icon} {status.label}
          </span>
          <h3 className="text-base font-bold font-display text-slate-900 mt-1 leading-tight">
            {task.title}
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            {formatShortDate(task.startDate)} → {formatShortDate(task.deadline)}
            {" · "}
            {viewer === "mentor" ? task.studentName || "Student" : task.mentorName}
          </p>
          <p
            className={`text-xs font-bold mt-1 ${
              isCompleted && task.daysEarly >= 0
                ? "text-emerald-600"
                : isOverdue
                  ? "text-amber-600"
                  : "text-blue-600"
            }`}
          >
            {deadlineSummary}
          </p>
        </div>
      </div>

      <div className="p-5 space-y-4">

      {/* ── Mini calendar strip ───────────────────────────────────────── */}
      <div>
        <div
          className="grid gap-1 mt-2"
          style={{ gridTemplateColumns: `repeat(${calDates.length}, 1fr)` }}
        >
          {calDates.map((d) => {
            const isInRange = d >= task.startDate && d <= task.deadline;
            const isToday = d === today;
            const isCompletedDay = task.completedDate === d;
            const isStart = d === task.startDate;
            const isDeadline = d === task.deadline;
            const isSavedDay =
              isCompleted &&
              task.completedDate &&
              d > task.completedDate &&
              d <= task.deadline;
            const isWe = isWeekend(d);

            return (
              <div key={d} className="text-center">
                <div
                  className={`h-8 rounded-lg flex items-center justify-center text-xs font-semibold transition-colors ${
                    isToday
                      ? "ring-2 ring-blue-500 ring-offset-1 font-bold text-blue-700"
                      : ""
                  } ${
                    isCompletedDay
                      ? "bg-emerald-100 text-emerald-700"
                      : isSavedDay
                        ? "border-[1.5px] border-dashed border-emerald-400 bg-emerald-50/50 text-emerald-600"
                        : isInRange
                          ? "bg-blue-50 text-blue-700"
                          : "bg-slate-50 text-slate-400"
                  } ${isWe && !isInRange ? "text-slate-300" : ""}`}
                >
                  {isStart ? (
                    <Pin className="w-3.5 h-3.5" />
                  ) : isDeadline ? (
                    <Flag className="w-3.5 h-3.5" />
                  ) : isCompletedDay ? (
                    <Star className="w-3.5 h-3.5" />
                  ) : (
                    ""
                  )}
                </div>
                <span
                  className={`text-[10px] mt-0.5 block ${isToday ? "font-bold text-blue-600" : "text-ink-faint"}`}
                >
                  {dayNumber(d)}
                </span>
              </div>
            );
          })}
        </div>
        <p className="text-[10px] text-ink-faint mt-1.5 flex items-center gap-3">
          <span className="flex items-center gap-0.5">
            <Pin className="w-2.5 h-2.5" /> Start
          </span>
          <span className="flex items-center gap-0.5">
            <Flag className="w-2.5 h-2.5" /> Deadline
          </span>
          <span className="flex items-center gap-0.5">
            <Star className="w-2.5 h-2.5" /> Completed
          </span>
        </p>
      </div>

      {/* ── Mentor note ───────────────────────────────────────────────── */}
      {task.mentorNote && (
        <div className="flex gap-3 bg-blue-50/50 border border-blue-100 rounded-xl p-3.5 items-start">
          <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold shrink-0 shadow-xs">
            <User className="w-3.5 h-3.5" />
          </div>
          <div className="text-xs text-slate-600 leading-relaxed min-w-0">
            <span className="font-bold text-slate-800 block mb-0.5">
              Mentor Note
            </span>
            {task.mentorNote}
          </div>
        </div>
      )}

      {/* ── Description ───────────────────────────────────────────────── */}
      {task.description && (
        <div className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
          <span className="font-bold text-slate-800 block mb-1">
            Task Instructions
          </span>
          <p className="whitespace-pre-wrap text-slate-600 bg-slate-50/70 p-3 rounded-xl border border-slate-200/60 font-sans max-h-48 overflow-y-auto break-words leading-relaxed">{task.description}</p>
        </div>
      )}

      {/* ── Progress tracker ──────────────────────────────────── */}
      <div className="flex items-center justify-between pt-2 px-1">
        {steps.map((step, i) => (
          <React.Fragment key={step.label}>
            <div className="flex flex-col items-center gap-1.5 flex-1">
              <div
                className={`w-3.5 h-3.5 rounded-full transition-all flex items-center justify-center ${
                  step.state === "done"
                    ? "bg-emerald-500 shadow-xs"
                    : step.state === "current"
                      ? "bg-blue-600 ring-4 ring-blue-100"
                      : "bg-slate-200"
                }`}
              />
              <span
                className={`text-[10px] text-center leading-tight ${
                  step.state === "done" || step.state === "current"
                    ? "font-bold text-slate-800"
                    : "text-slate-400"
                }`}
              >
                {step.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div
                className={`h-0.5 flex-1 -mt-4 transition-colors ${
                  step.state === "done" ? "bg-emerald-400" : "bg-slate-200"
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* ── Overdue recovery message ──────────────────────────────────── */}
      {isOverdue && (
        <div className="rounded-xl bg-amber-50 border border-amber-200 p-3.5">
          <p className="text-xs font-bold text-amber-900">
            {viewer === "mentor"
              ? "Past deadline — awaiting student submission"
              : "This slipped a little. That's normal."}
          </p>
          <p className="text-xs text-amber-700 mt-0.5 leading-relaxed">
            {viewer === "mentor"
              ? `${task.studentName || "The student"} hasn't submitted this task yet. Follow up via Messages or Schedule if they need help getting back on track.`
              : "Pick a new finish line with your mentor, then submit your progress."}
          </p>
        </div>
      )}

      {/* ── Completion celebration ────────────────────────────────────── */}
      {showJustCompleted && (
        <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3 text-center animate-fade-in shadow-xs">
          <p className="text-xs font-bold text-emerald-800">
            {task.daysEarly > 0
              ? `🚀 Submitted ${task.daysEarly} day${task.daysEarly > 1 ? "s" : ""} early!`
              : "✓ Submitted for mentor review!"}
          </p>
        </div>
      )}

      {/* ── Hold-to-complete button (student only, active tasks) ──────── */}
      {canComplete && (
        <div className="pt-1">
          <HoldToCompleteButton
            onComplete={handleComplete}
            isCompleting={isCompleting}
          />
          {task.daysLeft > 0 && (
            <p className="text-[11px] text-slate-400 text-center mt-1.5 font-medium">
              Submit now = {task.daysLeft} day{task.daysLeft > 1 ? "s" : ""} early
            </p>
          )}
        </div>
      )}

      {/* ── Mentor review outcome banner ──────────────────────────────── */}
      {reviewOutcome && (
        <div
          className={`rounded-xl p-3 text-center text-xs font-bold border animate-fade-in ${
            reviewOutcome === "APPROVED"
              ? "bg-emerald-50 border-emerald-200 text-emerald-800"
              : "bg-rose-50 border-rose-200 text-rose-800"
          }`}
        >
          {reviewOutcome === "APPROVED"
            ? "✓ Task approved and student efficiency updated!"
            : "↩ Task sent back with feedback."}
        </div>
      )}

      {/* ── Mentor review actions (mentor only, submitted tasks) ──────── */}
      {canReview && (
        <div className="pt-3 border-t border-slate-100 space-y-3">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-bold text-slate-800">
              Mentor Review Action
            </span>
            {!showNoteInput && (
              <button
                type="button"
                onClick={() => setShowNoteInput(true)}
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                <MessageSquarePlus className="w-3.5 h-3.5" />
                <span>Add feedback note</span>
              </button>
            )}
          </div>

          {showNoteInput && (
            <div className="space-y-1.5">
              <textarea
                rows={2}
                placeholder="Optional feedback note for the student (e.g. Great accuracy, revise chapter 4 next)..."
                value={mentorNote}
                onChange={(e) => setMentorNote(e.target.value)}
                className="w-full text-xs px-3 py-2 rounded-xl border border-slate-200 bg-slate-50/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-none"
              />
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setShowNoteInput(false);
                    setMentorNote("");
                  }}
                  className="text-[11px] text-slate-400 hover:text-slate-600"
                >
                  Remove note
                </button>
              </div>
            </div>
          )}

          {reviewError && (
            <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-center gap-2">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{reviewError}</span>
            </div>
          )}

          <div className="grid grid-cols-2 gap-2.5">
            <Button
              type="button"
              size="sm"
              variant="subtle"
              isLoading={isReviewing}
              onClick={() => handleReviewSubmit("REJECTED")}
              className="w-full justify-center gap-1.5 border border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100 font-bold"
            >
              <X className="w-3.5 h-3.5" />
              <span>Reject</span>
            </Button>
            <Button
              type="button"
              size="sm"
              variant="moss"
              isLoading={isReviewing}
              onClick={() => handleReviewSubmit("APPROVED")}
              className="w-full justify-center gap-1.5 font-bold"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Approve</span>
            </Button>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}

// ── Hold-to-Complete Button ──────────────────────────────────────────────

interface HoldButtonProps {
  onComplete: () => void;
  isCompleting: boolean;
}

function HoldToCompleteButton({ onComplete, isCompleting }: HoldButtonProps) {
  const [fillPct, setFillPct] = useState(0);
  const startRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);
  const HOLD_MS = 900;

  const stop = useCallback(() => {
    startRef.current = null;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setFillPct(0);
  }, []);

  const tick = useCallback(() => {
    if (startRef.current == null) return;
    const elapsed = performance.now() - startRef.current;
    const pct = Math.min(1, elapsed / HOLD_MS);
    setFillPct(pct);
    if (pct >= 1) {
      stop();
      onComplete();
    } else {
      rafRef.current = requestAnimationFrame(tick);
    }
  }, [onComplete, stop]);

  const start = useCallback(() => {
    if (isCompleting) return;
    startRef.current = performance.now();
    rafRef.current = requestAnimationFrame(tick);
  }, [isCompleting, tick]);

  return (
    <button
      onPointerDown={start}
      onPointerUp={stop}
      onPointerLeave={stop}
      onPointerCancel={stop}
      disabled={isCompleting}
      className="relative w-full overflow-hidden rounded-xl py-3 bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-bold text-xs shadow-xs select-none touch-none disabled:opacity-50 disabled:cursor-not-allowed transition-all"
    >
      {/* Fill bar */}
      <div
        className="absolute inset-y-0 left-0 bg-white/30 transition-none"
        style={{ width: `${fillPct * 100}%` }}
      />
      <span className="relative">
        {isCompleting ? "Submitting for review…" : "Hold to mark complete"}
      </span>
    </button>
  );
}

// ── Progress Step Builder ────────────────────────────────────────────────

interface ProgressStep {
  label: string;
  state: "done" | "current" | "pending";
}

function buildProgressSteps(status: TimelineStatus): ProgressStep[] {
  // Map timeline statuses to the step tracker
  const isTerminal =
    status === "completed" || status === "rejected" || status === "submitted";
  const isWorking =
    status === "active" ||
    status === "due-soon" ||
    status === "overdue";

  return [
    {
      label: "Assigned",
      state: "done", // always done once task exists
    },
    {
      label: "Working",
      state:
        status === "upcoming"
          ? "pending"
          : isWorking
            ? "current"
            : "done",
    },
    {
      label: "Submitted",
      state:
        status === "submitted"
          ? "current"
          : status === "completed" || status === "rejected"
            ? "done"
            : "pending",
    },
    {
      label: "Mentor review",
      state:
        status === "completed" || status === "rejected"
          ? "done"
          : status === "submitted"
            ? "current"
            : "pending",
    },
  ];
}
