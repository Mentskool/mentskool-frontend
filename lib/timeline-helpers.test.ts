/**
 * Unit tests for timeline-helpers.
 *
 * No test framework required — runs standalone:
 *   npx tsx lib/timeline-helpers.test.ts
 *
 * To integrate with jest/vitest later, rename assertions to expect().
 */

import {
  parseDate,
  diffDays,
  addDays,
  dayOfWeek,
  isWeekend,
  dayName,
  dayNumber,
  formatShortDate,
  deriveStatus,
  daysEarly,
  daysLeft,
  mapTaskToTimeline,
  computeTimelineWindow,
} from "./timeline-helpers";
import type { Task } from "./types";

// ── Mini test runner ─────────────────────────────────────────────────────

let passed = 0;
let failed = 0;

function assertEqual<T>(actual: T, expected: T, msg: string): void {
  if (actual === expected) {
    passed++;
    console.log(`  ✓ ${msg}`);
  } else {
    failed++;
    console.error(`  ✗ ${msg} — expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
  }
}

function assert(cond: boolean, msg: string): void {
  assertEqual(cond, true, msg);
}

function group(name: string, fn: () => void): void {
  console.log(`\n${name}`);
  fn();
}

// ── Date utilities ───────────────────────────────────────────────────────

group("parseDate", () => {
  const d = parseDate("2026-10-01");
  assertEqual(d.getUTCFullYear(), 2026, "year");
  assertEqual(d.getUTCMonth(), 9, "month (0-indexed)");
  assertEqual(d.getUTCDate(), 1, "day");
});

group("diffDays", () => {
  assertEqual(diffDays("2026-10-01", "2026-10-01"), 0, "same day → 0");
  assertEqual(diffDays("2026-10-01", "2026-10-08"), 7, "one week forward → 7");
  assertEqual(diffDays("2026-10-08", "2026-10-01"), -7, "one week back → −7");
  assertEqual(diffDays("2026-09-30", "2026-10-01"), 1, "cross month boundary → 1");
  assertEqual(diffDays("2026-12-31", "2027-01-01"), 1, "cross year boundary → 1");
});

group("addDays", () => {
  assertEqual(addDays("2026-10-01", 0), "2026-10-01", "+0 = same");
  assertEqual(addDays("2026-10-01", 7), "2026-10-08", "+7");
  assertEqual(addDays("2026-10-01", -1), "2026-09-30", "−1 crosses month");
  assertEqual(addDays("2026-10-31", 1), "2026-11-01", "+1 crosses month");
  assertEqual(addDays("2026-12-31", 1), "2027-01-01", "+1 crosses year");
});

group("dayOfWeek", () => {
  // 2026-10-01 is Thursday (verified via calendar)
  assertEqual(dayOfWeek("2026-10-01"), 3, "Thu = 3");
  assertEqual(dayOfWeek("2026-10-03"), 5, "Sat = 5");
  assertEqual(dayOfWeek("2026-10-04"), 6, "Sun = 6");
  assertEqual(dayOfWeek("2026-10-05"), 0, "Mon = 0");
  assertEqual(dayOfWeek("2026-10-02"), 4, "Fri = 4");
});

group("isWeekend", () => {
  assert(!isWeekend("2026-10-01"), "Thu is NOT weekend");
  assert(!isWeekend("2026-10-02"), "Fri is NOT weekend");
  assert(isWeekend("2026-10-03"), "Sat IS weekend");
  assert(isWeekend("2026-10-04"), "Sun IS weekend");
  assert(!isWeekend("2026-10-05"), "Mon is NOT weekend");
});

group("dayName", () => {
  assertEqual(dayName("2026-10-05"), "Mon", "Monday");
  assertEqual(dayName("2026-10-03"), "Sat", "Saturday");
});

group("dayNumber", () => {
  assertEqual(dayNumber("2026-10-01"), 1, "1st");
  assertEqual(dayNumber("2026-10-15"), 15, "15th");
  assertEqual(dayNumber("2026-10-31"), 31, "31st");
});

group("formatShortDate", () => {
  // Just check it contains the day number — exact month abbreviation is locale-dependent
  assert(formatShortDate("2026-10-01").includes("1"), "contains day number 1");
  assert(formatShortDate("2026-10-15").includes("15"), "contains day number 15");
});

// ── Status derivation ────────────────────────────────────────────────────

group("deriveStatus — ASSIGNED paths", () => {
  assertEqual(
    deriveStatus("ASSIGNED", "2026-10-05", "2026-10-12", "2026-10-02"),
    "upcoming",
    "today < start → upcoming",
  );
  assertEqual(
    deriveStatus("ASSIGNED", "2026-10-01", "2026-10-08", "2026-10-02"),
    "active",
    "today in window, 6d left → active",
  );
  assertEqual(
    deriveStatus("ASSIGNED", "2026-10-01", "2026-10-08", "2026-10-06"),
    "due-soon",
    "today in window, 2d left → due-soon",
  );
  assertEqual(
    deriveStatus("ASSIGNED", "2026-10-01", "2026-10-08", "2026-10-07"),
    "due-soon",
    "today in window, 1d left → due-soon",
  );
  assertEqual(
    deriveStatus("ASSIGNED", "2026-10-01", "2026-10-08", "2026-10-08"),
    "due-soon",
    "today = deadline, 0d left → due-soon",
  );
  assertEqual(
    deriveStatus("ASSIGNED", "2026-10-01", "2026-10-08", "2026-10-09"),
    "overdue",
    "today > deadline → overdue",
  );
  assertEqual(
    deriveStatus("ASSIGNED", "2026-10-01", "2026-10-08", "2026-10-01"),
    "active",
    "today = start, 7d left → active",
  );
});

group("deriveStatus — terminal states ignore dates", () => {
  assertEqual(
    deriveStatus("MARKED_COMPLETE", "2026-10-01", "2026-10-08", "2026-10-05"),
    "submitted",
    "MARKED_COMPLETE → submitted regardless of dates",
  );
  assertEqual(
    deriveStatus("MARKED_COMPLETE", "2026-10-01", "2026-10-08", "2026-10-20"),
    "submitted",
    "MARKED_COMPLETE → submitted even past deadline",
  );
  assertEqual(
    deriveStatus("APPROVED", "2026-10-01", "2026-10-08", "2026-10-10"),
    "completed",
    "APPROVED → completed",
  );
  assertEqual(
    deriveStatus("REJECTED", "2026-10-01", "2026-10-08", "2026-10-05"),
    "rejected",
    "REJECTED → rejected",
  );
});

// ── daysEarly / daysLeft ─────────────────────────────────────────────────

group("daysEarly", () => {
  assertEqual(daysEarly("2026-10-08", "2026-10-06"), 2, "completed 2d before deadline → 2");
  assertEqual(daysEarly("2026-10-08", "2026-10-08"), 0, "completed on deadline → 0");
  assertEqual(daysEarly("2026-10-08", "2026-10-10"), -2, "completed 2d after deadline → −2");
  assertEqual(daysEarly("2026-10-08", null), 0, "no completion → 0");
});

group("daysLeft", () => {
  assertEqual(daysLeft("2026-10-08", "2026-10-02"), 6, "6 days to go");
  assertEqual(daysLeft("2026-10-08", "2026-10-08"), 0, "due today → 0");
  assertEqual(daysLeft("2026-10-08", "2026-10-10"), -2, "2 days overdue → −2");
});

// ── mapTaskToTimeline ────────────────────────────────────────────────────

group("mapTaskToTimeline", () => {
  const task: Task = {
    id: "t1",
    mentor_id: "m1",
    mentor_name: "Diksha",
    student_id: "s1",
    student_name: "Ravi",
    title: "Solve 50 Physics Questions",
    description: "Mixed kinematics + laws of motion",
    week_start: "2026-10-01",
    week_end: "2026-10-08",
    status: "ASSIGNED",
    marked_complete_at: null,
    reviewed_at: null,
    reviewed_by: null,
    mentor_note: null,
    is_late: false,
    created_at: "2026-09-30T10:00:00+05:30",
  };

  const mapped = mapTaskToTimeline(task, "2026-10-03");
  assertEqual(mapped.timelineStatus, "active", "active status");
  assertEqual(mapped.daysLeft, 5, "5 days left");
  assertEqual(mapped.completedDate, null, "no completion date");
  assertEqual(mapped.startDate, "2026-10-01", "preserves start");
  assertEqual(mapped.deadline, "2026-10-08", "preserves deadline");

  // Completed-early scenario
  const earlyTask: Task = {
    ...task,
    status: "APPROVED",
    marked_complete_at: "2026-10-05T18:30:00+05:30", // Oct 5 in IST
  };
  const earlyMapped = mapTaskToTimeline(earlyTask, "2026-10-10");
  assertEqual(earlyMapped.timelineStatus, "completed", "completed status");
  assertEqual(earlyMapped.completedDate, "2026-10-05", "IST date extraction");
  assertEqual(earlyMapped.daysEarly, 3, "completed 3 days early");

  // Overdue scenario
  const overdueTask: Task = { ...task, status: "ASSIGNED" };
  const overdueMapped = mapTaskToTimeline(overdueTask, "2026-10-12");
  assertEqual(overdueMapped.timelineStatus, "overdue", "overdue when past deadline");
  assertEqual(overdueMapped.daysLeft, -4, "4 days past due");
});

// ── computeTimelineWindow ────────────────────────────────────────────────

group("computeTimelineWindow — no tasks", () => {
  const win = computeTimelineWindow([], "2026-10-02");
  assert(win.days.includes("2026-10-02"), "today is in the window");
  assert(win.totalDays >= 7, "at least 7 days");
  assert(win.totalDays <= 28, "at most 28 days");
  assertEqual(win.days.length, win.totalDays, "days array matches totalDays");
});

group("computeTimelineWindow — with tasks", () => {
  const task: Task = {
    id: "t1",
    mentor_id: "m1",
    mentor_name: "M",
    student_id: "s1",
    student_name: "S",
    title: "T1",
    description: "",
    week_start: "2026-10-01",
    week_end: "2026-10-07",
    status: "ASSIGNED",
    marked_complete_at: null,
    reviewed_at: null,
    reviewed_by: null,
    mentor_note: null,
    is_late: false,
    created_at: "2026-09-30T10:00:00+05:30",
  };
  const tasks = [mapTaskToTimeline(task, "2026-10-03")];
  const win = computeTimelineWindow(tasks, "2026-10-03");

  assert(win.days.includes("2026-10-03"), "today visible");
  assert(win.startDate <= "2026-10-01", "window covers task start");
  assert(win.endDate >= "2026-10-07", "window covers task deadline");
  assert(win.totalDays >= 7, "at least 7 days");
});

group("computeTimelineWindow — offset navigation", () => {
  const win0 = computeTimelineWindow([], "2026-10-02", 0);
  const win7 = computeTimelineWindow([], "2026-10-02", 7);

  assertEqual(
    diffDays(win0.startDate, win7.startDate),
    7,
    "offset +7 shifts window 7 days forward",
  );
});

// ── Summary ──────────────────────────────────────────────────────────────

console.log(`\n${"─".repeat(50)}`);
console.log(`Results: ${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
else console.log("All tests passed ✓");
