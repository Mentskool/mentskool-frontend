"use client";

import React, { useState, useRef, useCallback } from "react";
import {
  Calendar,
  ChevronRight,
  Clock,
  Flag,
  Pin,
  Star,
  User,
} from "lucide-react";
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
  today: string;
}

// ── Component ────────────────────────────────────────────────────────────

export function TimelineDetailPanel({
  task,
  viewer,
  onComplete,
  isCompleting = false,
  today,
}: TimelineDetailPanelProps) {
  const [justCompleted, setJustCompleted] = useState<string | null>(null);

  if (!task) {
    return (
      <div className="bg-white rounded-card border border-mist shadow-soft p-6 flex flex-col items-center justify-center text-center min-h-[340px]">
        <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center mb-3">
          <Calendar className="w-6 h-6 text-slate-400" />
        </div>
        <p className="text-sm font-semibold text-ink-muted">
          Select a task from the timeline
        </p>
        <p className="text-xs text-ink-faint mt-1">
          Click any row to see details
        </p>
      </div>
    );
  }

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

  const canComplete =
    viewer === "student" &&
    !isCompleted &&
    !isSubmitted &&
    task.dbStatus === "ASSIGNED";

  return (
    <div className="bg-white rounded-card border border-mist shadow-soft p-5 space-y-4">
      {/* ── Status header ─────────────────────────────────────────────── */}
      <div className="flex items-start gap-4">
        {/* Status ring */}
        <div
          className={`w-16 h-16 rounded-full border-[3px] flex items-center justify-center shrink-0 text-xl ${
            isCompleted
              ? "border-emerald-400 bg-emerald-50"
              : isSubmitted
                ? "border-sky-400 bg-sky-50"
                : isOverdue
                  ? "border-amber-400 bg-amber-50"
                  : task.timelineStatus === "rejected"
                    ? "border-rose-400 bg-rose-50"
                    : isUpcoming
                      ? "border-slate-300 bg-slate-50"
                      : "border-blue-400 bg-blue-50"
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
          <h3 className="text-base font-bold font-display text-ink mt-1 leading-tight">
            {task.title}
          </h3>
          <p className="text-xs text-ink-faint mt-0.5">
            {formatShortDate(task.startDate)} → {formatShortDate(task.deadline)}
            {" · "}
            {task.mentorName}
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
        <div className="flex gap-3 bg-slate-50 rounded-lg p-3 items-start">
          <div className="w-7 h-7 rounded-full bg-brand text-white flex items-center justify-center text-[10px] font-bold shrink-0">
            <User className="w-3.5 h-3.5" />
          </div>
          <div className="text-xs text-ink-muted leading-relaxed min-w-0">
            <span className="font-semibold text-ink block mb-0.5">
              Mentor note
            </span>
            {task.mentorNote}
          </div>
        </div>
      )}

      {/* ── Description ───────────────────────────────────────────────── */}
      {task.description && (
        <div className="text-xs text-ink-muted leading-relaxed border-t border-mist pt-3">
          <span className="font-semibold text-ink block mb-1">
            Instructions
          </span>
          <p className="whitespace-pre-wrap">{task.description}</p>
        </div>
      )}

      {/* ── Progress tracker ──────────────────────────────────────────── */}
      <div className="flex items-center justify-between pt-2">
        {steps.map((step, i) => (
          <React.Fragment key={step.label}>
            <div className="flex flex-col items-center gap-1 flex-1">
              <div
                className={`w-3 h-3 rounded-full ${
                  step.state === "done"
                    ? "bg-emerald-500"
                    : step.state === "current"
                      ? "bg-blue-500 ring-4 ring-blue-100"
                      : "bg-slate-200"
                }`}
              />
              <span
                className={`text-[10px] text-center leading-tight ${
                  step.state === "done" || step.state === "current"
                    ? "font-semibold text-ink"
                    : "text-ink-faint"
                }`}
              >
                {step.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div
                className={`h-0.5 flex-1 -mt-4 ${
                  step.state === "done" ? "bg-emerald-300" : "bg-slate-200"
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* ── Overdue recovery message ──────────────────────────────────── */}
      {isOverdue && (
        <div className="rounded-lg bg-amber-50 border border-amber-200 p-3">
          <p className="text-sm font-semibold text-amber-800">
            This slipped a little. That's normal.
          </p>
          <p className="text-xs text-amber-700 mt-1">
            Pick a new finish line with your mentor, then complete the task.
          </p>
        </div>
      )}

      {/* ── Completion celebration ────────────────────────────────────── */}
      {showJustCompleted && (
        <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-3 text-center animate-fade-in">
          <p className="text-sm font-bold text-emerald-700">
            {task.daysEarly > 0
              ? `🚀 Completed ${task.daysEarly} day${task.daysEarly > 1 ? "s" : ""} early!`
              : "✓ Completed on time!"}
          </p>
        </div>
      )}

      {/* ── Hold-to-complete button (student only, active tasks) ──────── */}
      {canComplete && (
        <div>
          <HoldToCompleteButton
            onComplete={handleComplete}
            isCompleting={isCompleting}
          />
          {task.daysLeft > 0 && (
            <p className="text-[11px] text-ink-faint text-center mt-1.5">
              Finish now = {task.daysLeft} day{task.daysLeft > 1 ? "s" : ""}{" "}
              early
            </p>
          )}
        </div>
      )}
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
      className="relative w-full overflow-hidden rounded-control py-3 bg-brand text-white font-bold text-sm select-none touch-none disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {/* Fill bar */}
      <div
        className="absolute inset-y-0 left-0 bg-white/25 transition-none"
        style={{ width: `${fillPct * 100}%` }}
      />
      <span className="relative">
        {isCompleting ? "Completing…" : "Hold to complete"}
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
