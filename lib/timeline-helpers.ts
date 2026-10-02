/**
 * Mission Timeline — date helpers, status derivation, and window calculation.
 *
 * All date logic for the timeline lives in this ONE file.
 * Uses IST (Asia/Kolkata) for every date-only comparison so Indian students
 * never hit an off-by-one error across the UTC midnight boundary.
 *
 * week_end is treated as the deadline day, INCLUSIVE.
 * Nothing here writes to the database — every status is derived.
 */

import type { Task, TaskStatus } from "./types";

// ── Constants ────────────────────────────────────────────────────────────

const MS_PER_DAY = 86_400_000;
const DAY_NAMES: readonly string[] = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
];

// ── Date Utilities (IST-safe, date-only) ─────────────────────────────────

/** Today's calendar date as YYYY-MM-DD in IST. */
export function todayIST(): string {
  return new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" });
}

/**
 * Parse a YYYY-MM-DD string into a Date at midnight UTC.
 * Used for day arithmetic only — never for display or TZ-sensitive ops.
 */
export function parseDate(dateStr: string): Date {
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d));
}

/** Extract the IST calendar date (YYYY-MM-DD) from an ISO-8601 datetime. */
export function toDateIST(isoDatetime: string): string {
  return new Date(isoDatetime).toLocaleDateString("en-CA", {
    timeZone: "Asia/Kolkata",
  });
}

/** Signed difference in whole days: b − a. Positive when b is after a. */
export function diffDays(a: string, b: string): number {
  return Math.round(
    (parseDate(b).getTime() - parseDate(a).getTime()) / MS_PER_DAY,
  );
}

/** Return YYYY-MM-DD offset by `n` days (negative goes backwards). */
export function addDays(dateStr: string, n: number): string {
  const d = parseDate(dateStr);
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().split("T")[0];
}

/** 0 = Mon … 6 = Sun. */
export function dayOfWeek(dateStr: string): number {
  const jsDay = parseDate(dateStr).getUTCDay(); // 0=Sun … 6=Sat
  return jsDay === 0 ? 6 : jsDay - 1;
}

/** True for Sat (5) or Sun (6). */
export function isWeekend(dateStr: string): boolean {
  return dayOfWeek(dateStr) >= 5;
}

/** Short day-of-week name. */
export function dayName(dateStr: string): string {
  return DAY_NAMES[dayOfWeek(dateStr)];
}

/** Day of month (1–31). */
export function dayNumber(dateStr: string): number {
  return parseDate(dateStr).getUTCDate();
}

/** Short month name (e.g. "Oct"). */
export function monthShort(dateStr: string): string {
  return parseDate(dateStr).toLocaleDateString("en-IN", {
    month: "short",
    timeZone: "UTC",
  });
}

/** Human-friendly date: "1 Oct". */
export function formatShortDate(dateStr: string): string {
  return `${dayNumber(dateStr)} ${monthShort(dateStr)}`;
}

// ── Timeline Status ──────────────────────────────────────────────────────

/**
 * Display status derived purely from dates + DB status.
 * Never written back to the database.
 */
export type TimelineStatus =
  | "upcoming" // ASSIGNED, today < week_start
  | "active" // ASSIGNED, in window, > 2 days left
  | "due-soon" // ASSIGNED, in window, ≤ 2 days left
  | "overdue" // ASSIGNED, today > week_end (derived only!)
  | "submitted" // MARKED_COMPLETE — awaiting mentor review
  | "completed" // APPROVED
  | "rejected"; // REJECTED

/** Derive the timeline display status. Pure function — no side effects. */
export function deriveStatus(
  dbStatus: TaskStatus,
  startDate: string,
  deadline: string,
  today: string,
): TimelineStatus {
  switch (dbStatus) {
    case "APPROVED":
      return "completed";
    case "REJECTED":
      return "rejected";
    case "MARKED_COMPLETE":
      return "submitted";
    case "ASSIGNED": {
      if (today < startDate) return "upcoming";
      if (today > deadline) return "overdue";
      return diffDays(today, deadline) <= 2 ? "due-soon" : "active";
    }
    default:
      return "active";
  }
}

/**
 * Days completed early (positive), on time (0), or late (negative).
 * Only meaningful when completedDate is set.
 */
export function daysEarly(
  deadline: string,
  completedDate: string | null,
): number {
  if (!completedDate) return 0;
  return diffDays(completedDate, deadline);
}

/** Days remaining until deadline. Negative = past due. */
export function daysLeft(deadline: string, today: string): number {
  return diffDays(today, deadline);
}

// ── Timeline Task (mapped shape) ─────────────────────────────────────────

export interface TimelineTask {
  id: string;
  title: string;
  description: string;
  startDate: string; // YYYY-MM-DD (week_start)
  deadline: string; // YYYY-MM-DD (week_end, inclusive)
  completedDate: string | null; // YYYY-MM-DD in IST (marked_complete_at)
  dbStatus: TaskStatus;
  timelineStatus: TimelineStatus;
  mentorName: string;
  studentName: string;
  mentorNote: string | null;
  isLate: boolean;
  daysEarly: number;
  daysLeft: number;
  reviewedAt: string | null;
  createdAt: string;
}

/** Map a backend Task to the timeline's internal shape. */
export function mapTaskToTimeline(task: Task, today?: string): TimelineTask {
  const t = today ?? todayIST();
  const completedDate = task.marked_complete_at
    ? toDateIST(task.marked_complete_at)
    : null;

  return {
    id: task.id,
    title: task.title,
    description: task.description,
    startDate: task.week_start,
    deadline: task.week_end,
    completedDate,
    dbStatus: task.status,
    timelineStatus: deriveStatus(task.status, task.week_start, task.week_end, t),
    mentorName: task.mentor_name,
    studentName: task.student_name,
    mentorNote: task.mentor_note,
    isLate: task.is_late,
    daysEarly: daysEarly(task.week_end, completedDate),
    daysLeft: daysLeft(task.week_end, t),
    reviewedAt: task.reviewed_at,
    createdAt: task.created_at,
  };
}

// ── Timeline Window ──────────────────────────────────────────────────────

export interface TimelineWindow {
  startDate: string; // first visible day
  endDate: string; // last visible day
  days: string[]; // ordered YYYY-MM-DD array
  totalDays: number;
}

/**
 * Compute the visible date window.
 *
 * 1. Data-driven: expand to cover all tasks ± padding.
 * 2. Today is always visible.
 * 3. Clamp span to 7–28 days. If too wide → 14-day window around today.
 * 4. Default (no tasks) → 14 days: 3 before today, 10 after.
 * 5. `offset` shifts in multiples of 7 (◀ ▶ navigation).
 */
export function computeTimelineWindow(
  tasks: TimelineTask[],
  today?: string,
  offset: number = 0,
): TimelineWindow {
  const t = today ?? todayIST();
  let start: string;
  let end: string;

  if (tasks.length === 0) {
    start = addDays(t, -3);
    end = addDays(t, 10);
  } else {
    const allDates = tasks.flatMap((tk) => [tk.startDate, tk.deadline]);
    allDates.push(t);
    allDates.sort();

    start = addDays(allDates[0], -1);
    end = addDays(allDates[allDates.length - 1], 2);

    if (t < start) start = addDays(t, -1);
    if (t > end) end = addDays(t, 2);

    const span = diffDays(start, end) + 1;
    if (span < 7) {
      const mid = addDays(start, Math.floor(span / 2));
      start = addDays(mid, -3);
      end = addDays(mid, 3);
    } else if (span > 28) {
      start = addDays(t, -3);
      end = addDays(t, 10);
    }
  }

  if (offset !== 0) {
    start = addDays(start, offset);
    end = addDays(end, offset);
  }

  const totalDays = diffDays(start, end) + 1;
  const days: string[] = [];
  for (let i = 0; i < totalDays; i++) {
    days.push(addDays(start, i));
  }

  return { startDate: start, endDate: end, days, totalDays };
}

// ── Status Display Metadata ──────────────────────────────────────────────

export interface StatusDisplay {
  label: string;
  icon: string;
  badgeClass: string;
  barColor: string; // Tailwind bg class
}

export function getStatusDisplay(
  status: TimelineStatus,
  earlyDays: number,
): StatusDisplay {
  switch (status) {
    case "upcoming":
      return {
        label: "Upcoming",
        icon: "🔒",
        badgeClass: "bg-slate-100 text-slate-500 border border-slate-200",
        barColor: "bg-slate-300",
      };
    case "active":
      return {
        label: "In progress",
        icon: "🎯",
        badgeClass: "bg-blue-50 text-blue-700 border border-blue-200",
        barColor: "bg-blue-500",
      };
    case "due-soon":
      return {
        label: "Due soon",
        icon: "⏳",
        badgeClass: "bg-amber-50 text-amber-700 border border-amber-200",
        barColor: "bg-amber",
      };
    case "overdue":
      return {
        label: "Needs attention",
        icon: "⚠️",
        badgeClass: "bg-amber-50 text-amber-700 border border-amber-200",
        barColor: "bg-amber",
      };
    case "submitted":
      return {
        label: "Awaiting review",
        icon: "📤",
        badgeClass: "bg-sky-50 text-sky-700 border border-sky-200",
        barColor: "bg-sky-500",
      };
    case "completed": {
      const late = earlyDays < 0;
      return {
        label:
          earlyDays > 0
            ? `${earlyDays}d early`
            : earlyDays === 0
              ? "On time"
              : "Completed late",
        icon: "✅",
        badgeClass: late
          ? "bg-amber-50 text-amber-700 border border-amber-200"
          : "bg-emerald-50 text-emerald-700 border border-emerald-200",
        barColor: "bg-emerald-500",
      };
    }
    case "rejected":
      return {
        label: "Rejected",
        icon: "↩️",
        badgeClass: "bg-rose-50 text-rose-700 border border-rose-200",
        barColor: "bg-rose-400",
      };
  }
}
