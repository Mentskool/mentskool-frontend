"use client";

import React, { useState, useMemo } from "react";
import {
  ChevronLeft,
  ChevronRight,
  CalendarDays,
  CheckCircle2,
  Clock,
  AlertTriangle,
} from "lucide-react";
import type { Task } from "@/lib/types";
import {
  mapTaskToTimeline,
  computeTimelineWindow,
  todayIST,
  getStatusDisplay,
  dayName,
  dayNumber,
  monthShort,
  isWeekend,
  formatShortDate,
  diffDays,
} from "@/lib/timeline-helpers";
import type { TimelineTask, TimelineWindow } from "@/lib/timeline-helpers";
import { TimelineDetailPanel } from "./TimelineDetailPanel";

// ── Props ────────────────────────────────────────────────────────────────

interface MissionTimelineProps {
  tasks: Task[];
  viewer: "student" | "mentor";
  onComplete?: (taskId: string) => Promise<void>;
  isCompletingId?: string | null;
}

// ── Main Component ───────────────────────────────────────────────────────

export function MissionTimeline({
  tasks,
  viewer,
  onComplete,
  isCompletingId,
}: MissionTimelineProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [navOffset, setNavOffset] = useState(0);
  const today = todayIST();

  // Map + sort tasks
  const timelineTasks = useMemo(() => {
    return tasks
      .map((t) => mapTaskToTimeline(t, today))
      .sort(
        (a, b) =>
          a.deadline.localeCompare(b.deadline) ||
          a.startDate.localeCompare(b.startDate),
      );
  }, [tasks, today]);

  // Compute visible window
  const win = useMemo(
    () => computeTimelineWindow(timelineTasks, today, navOffset),
    [timelineTasks, today, navOffset],
  );

  // Stat counts
  const stats = useMemo(() => {
    const s = { completed: 0, active: 0, attention: 0 };
    for (const t of timelineTasks) {
      if (t.timelineStatus === "completed") s.completed++;
      else if (
        t.timelineStatus === "active" ||
        t.timelineStatus === "submitted"
      )
        s.active++;
      else if (
        t.timelineStatus === "due-soon" ||
        t.timelineStatus === "overdue"
      )
        s.attention++;
    }
    return s;
  }, [timelineTasks]);

  const selectedTask =
    timelineTasks.find((t) => t.id === selectedId) ?? null;

  const COL_MIN_PX = 44;
  const LABEL_W = 180;

  return (
    <div className="space-y-3">
      {/* ── Stat cards ──────────────────────────────────────────────── */}
      <div className="grid grid-cols-3 gap-3">
        <StatCard
          icon={<CheckCircle2 className="w-4 h-4 text-emerald-600" />}
          bgClass="bg-emerald-50 border-emerald-100"
          label="Completed"
          value={stats.completed}
        />
        <StatCard
          icon={<Clock className="w-4 h-4 text-blue-600" />}
          bgClass="bg-blue-50 border-blue-100"
          label="In progress"
          value={stats.active}
        />
        <StatCard
          icon={<AlertTriangle className="w-4 h-4 text-amber-600" />}
          bgClass="bg-amber-50 border-amber-100"
          label="Needs attention"
          value={stats.attention}
        />
      </div>

      {/* ── Two-column layout: timeline + detail ────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-3 items-start">
        {/* ── Timeline chart ──────────────────────────────────────────── */}
        <div className="bg-white rounded-card border border-mist shadow-soft overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between gap-3 px-4 pt-4 pb-2 flex-wrap">
            <h2 className="text-lg font-bold font-display text-ink">
              Mission Timeline
            </h2>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setNavOffset((p) => p - 7)}
                className="p-1.5 rounded-control border border-mist hover:bg-surface-hover text-ink-muted transition-colors"
                aria-label="Previous week"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setNavOffset(0)}
                className="px-2.5 py-1 rounded-control border border-mist hover:bg-surface-hover text-xs font-semibold text-ink-muted transition-colors"
              >
                <CalendarDays className="w-3.5 h-3.5 inline mr-1 -mt-0.5" />
                Today
              </button>
              <button
                onClick={() => setNavOffset((p) => p + 7)}
                className="p-1.5 rounded-control border border-mist hover:bg-surface-hover text-ink-muted transition-colors"
                aria-label="Next week"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <span className="text-[11px] text-ink-faint ml-1 hidden sm:inline">
                {formatShortDate(win.startDate)} –{" "}
                {formatShortDate(win.endDate)}
              </span>
            </div>
          </div>

          {/* Scrollable area — only this scrolls horizontally */}
          <div
            className="overflow-x-auto pb-2"
            style={{ overscrollBehaviorX: "contain" }}
          >
            <div
              style={{ minWidth: `${LABEL_W + win.totalDays * COL_MIN_PX}px` }}
            >
              {/* Day headers */}
              <div className="flex border-b border-mist">
                <div
                  className="shrink-0"
                  style={{ width: `${LABEL_W}px` }}
                />
                <div
                  className="flex-1 grid"
                  style={{
                    gridTemplateColumns: `repeat(${win.totalDays}, 1fr)`,
                  }}
                >
                  {win.days.map((d, i) => {
                    const isToday = d === today;
                    const we = isWeekend(d);
                    const showMonth =
                      i === 0 || dayNumber(d) === 1;
                    return (
                      <div
                        key={d}
                        className={`text-center py-1.5 text-[11px] leading-tight ${
                          isToday
                            ? "font-bold text-blue-600"
                            : we
                              ? "text-slate-400"
                              : "text-ink-faint"
                        }`}
                      >
                        <div>{dayName(d)}</div>
                        <div
                          className={`text-xs font-semibold ${
                            isToday ? "text-blue-700" : "text-ink"
                          }`}
                        >
                          {showMonth ? (
                            <span className="text-blue-600 font-bold">
                              {dayNumber(d)}
                            </span>
                          ) : (
                            dayNumber(d)
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Task rows */}
              {timelineTasks.length === 0 ? (
                <div className="py-10 text-center text-sm text-ink-faint">
                  No tasks to show in this window
                </div>
              ) : (
                timelineTasks.map((task) => (
                  <TimelineRow
                    key={task.id}
                    task={task}
                    win={win}
                    today={today}
                    isSelected={task.id === selectedId}
                    onSelect={() =>
                      setSelectedId(
                        task.id === selectedId ? null : task.id,
                      )
                    }
                    labelWidth={LABEL_W}
                  />
                ))
              )}
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center gap-4 flex-wrap text-[11px] text-ink-faint px-4 py-2.5 border-t border-mist bg-slate-50/60">
            <span className="flex items-center gap-1">
              <span className="w-0.5 h-3.5 bg-blue-500 rounded-full" />
              Today
            </span>
            <span>🚩 Deadline</span>
            <span className="flex items-center gap-1">
              <span className="w-4 h-2 bg-blue-500 rounded-sm" /> Active
            </span>
            <span className="flex items-center gap-1">
              <span className="w-4 h-2 bg-emerald-500 rounded-sm" /> Done
            </span>
            <span className="flex items-center gap-1">
              <span className="w-4 h-2 border border-dashed border-emerald-400 rounded-sm" />{" "}
              Days saved
            </span>
          </div>
        </div>

        {/* ── Detail panel ────────────────────────────────────────────── */}
        <div className="lg:sticky lg:top-4">
          <TimelineDetailPanel
            task={selectedTask}
            viewer={viewer}
            onComplete={onComplete}
            isCompleting={isCompletingId === selectedTask?.id}
            today={today}
          />
        </div>
      </div>
    </div>
  );
}

// ── Stat Card ────────────────────────────────────────────────────────────

function StatCard({
  icon,
  bgClass,
  label,
  value,
}: {
  icon: React.ReactNode;
  bgClass: string;
  label: string;
  value: number;
}) {
  return (
    <div className="bg-white rounded-card border border-mist shadow-soft p-3.5 flex items-center gap-3">
      <div
        className={`w-9 h-9 rounded-full border flex items-center justify-center shrink-0 ${bgClass}`}
      >
        {icon}
      </div>
      <div>
        <p className="text-[11px] text-ink-faint font-medium">{label}</p>
        <p className="text-xl font-black font-display text-ink">{value}</p>
      </div>
    </div>
  );
}

// ── Timeline Row ─────────────────────────────────────────────────────────

function TimelineRow({
  task,
  win,
  today,
  isSelected,
  onSelect,
  labelWidth,
}: {
  task: TimelineTask;
  win: TimelineWindow;
  today: string;
  isSelected: boolean;
  onSelect: () => void;
  labelWidth: number;
}) {
  const status = getStatusDisplay(task.timelineStatus, task.daysEarly);

  // ── Bar geometry ─────────────────────────────────────────────────────

  const startIdx = Math.max(0, diffDays(win.startDate, task.startDate));
  const endIdx = Math.min(
    win.totalDays - 1,
    diffDays(win.startDate, task.deadline),
  );
  const leftPct = (startIdx / win.totalDays) * 100;
  const widthPct = ((endIdx - startIdx + 1) / win.totalDays) * 100;

  // Elapsed tint for active / due-soon tasks
  const totalTaskDays = diffDays(task.startDate, task.deadline) + 1;
  const elapsedDays = Math.max(
    0,
    Math.min(totalTaskDays, diffDays(task.startDate, today) + 1),
  );
  const showElapsed =
    (task.timelineStatus === "active" || task.timelineStatus === "due-soon") &&
    totalTaskDays > 0;
  const elapsedPct = showElapsed
    ? Math.min(100, (elapsedDays / totalTaskDays) * 100)
    : 0;

  // Deadline flag position
  const deadlineIdx = diffDays(win.startDate, task.deadline);
  const flagVisible = deadlineIdx >= 0 && deadlineIdx < win.totalDays;
  const flagPct = ((deadlineIdx + 1) / win.totalDays) * 100;

  // Completed-early: dashed "days saved" segment
  const showSaved =
    task.timelineStatus === "completed" &&
    task.completedDate &&
    task.daysEarly > 0;
  let savedLeftPct = 0;
  let savedWidthPct = 0;
  if (showSaved && task.completedDate) {
    const savedStart = diffDays(win.startDate, task.completedDate) + 1;
    const savedEnd = diffDays(win.startDate, task.deadline);
    savedLeftPct = (Math.max(0, savedStart) / win.totalDays) * 100;
    savedWidthPct =
      ((Math.min(win.totalDays - 1, savedEnd) -
        Math.max(0, savedStart) +
        1) /
        win.totalDays) *
      100;
  }

  // Completed bar: show from start to completed date (not deadline)
  let completedWidthPct = widthPct;
  if (
    (task.timelineStatus === "completed" || task.timelineStatus === "submitted") &&
    task.completedDate
  ) {
    const compIdx = Math.min(
      win.totalDays - 1,
      diffDays(win.startDate, task.completedDate),
    );
    completedWidthPct =
      ((compIdx - startIdx + 1) / win.totalDays) * 100;
  }

  // Overdue extension: hatched bar from deadline+1 to today
  const showOverdueExt = task.timelineStatus === "overdue";
  let overdueLeftPct = 0;
  let overdueWidthPct = 0;
  if (showOverdueExt) {
    const ovStart = deadlineIdx + 1;
    const ovEnd = Math.min(
      win.totalDays - 1,
      diffDays(win.startDate, today),
    );
    if (ovEnd >= ovStart) {
      overdueLeftPct = (ovStart / win.totalDays) * 100;
      overdueWidthPct = ((ovEnd - ovStart + 1) / win.totalDays) * 100;
    }
  }

  // Upcoming "opens" label position
  const isUpcoming = task.timelineStatus === "upcoming";

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect();
        }
      }}
      className={`flex items-center cursor-pointer border-b border-slate-100/80 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-inset ${
        isSelected
          ? "bg-blue-50/60 border-l-2 border-l-blue-500"
          : "hover:bg-slate-50/60 border-l-2 border-l-transparent"
      }`}
    >
      {/* Label */}
      <div
        className="shrink-0 py-2.5 pl-3 pr-2"
        style={{ width: `${labelWidth}px` }}
      >
        <p className="text-xs font-semibold text-ink truncate leading-tight">
          {task.title}
        </p>
        <span
          className={`inline-flex items-center gap-0.5 text-[10px] font-bold mt-1 px-1.5 py-0.5 rounded-full ${status.badgeClass}`}
        >
          {status.icon} {status.label}
        </span>
      </div>

      {/* Bar area */}
      <div className="flex-1 relative h-11">
        {/* Grid lines */}
        <div
          className="absolute inset-0 grid pointer-events-none"
          style={{
            gridTemplateColumns: `repeat(${win.totalDays}, 1fr)`,
          }}
        >
          {win.days.map((d) => {
            const isToday = d === today;
            const we = isWeekend(d);
            return (
              <div
                key={d}
                className={`border-l ${
                  isToday
                    ? "border-l-2 border-l-blue-500/60 bg-blue-50/30"
                    : we
                      ? "border-slate-100 bg-slate-50/40"
                      : "border-slate-100/60"
                }`}
              />
            );
          })}
        </div>

        {/* Main bar */}
        {!isUpcoming && (
          <div
            className={`absolute top-2.5 h-6 rounded-md shadow-sm transition-all ${
              task.timelineStatus === "overdue"
                ? "bg-amber/80"
                : task.timelineStatus === "completed" ||
                    task.timelineStatus === "submitted"
                  ? status.barColor
                  : status.barColor
            }`}
            style={{
              left: `${leftPct}%`,
              width: `${
                task.timelineStatus === "completed" ||
                task.timelineStatus === "submitted"
                  ? completedWidthPct
                  : widthPct
              }%`,
              opacity:
                task.timelineStatus === "overdue" ? 0.85 : 1,
            }}
          >
            {/* Elapsed tint */}
            {showElapsed && elapsedPct > 0 && (
              <div
                className="absolute left-0 top-0 bottom-0 bg-black/15 rounded-l-md"
                style={{ width: `${elapsedPct}%` }}
              />
            )}

            {/* Overdue hatching */}
            {task.timelineStatus === "overdue" && (
              <div
                className="absolute inset-0 rounded-md opacity-30"
                style={{
                  background:
                    "repeating-linear-gradient(45deg, transparent 0 4px, rgba(0,0,0,0.15) 4px 8px)",
                }}
              />
            )}

            {/* Bar label */}
            <span className="relative z-[1] flex items-center h-full px-2 text-[11px] font-bold text-white truncate">
              {task.timelineStatus === "completed" && task.completedDate
                ? `✓ ${formatShortDate(task.completedDate)}`
                : task.timelineStatus === "submitted"
                  ? "📤 Submitted"
                  : task.timelineStatus === "overdue"
                    ? `${Math.abs(task.daysLeft)}d over`
                    : ""}
            </span>
          </div>
        )}

        {/* Upcoming dimmed bar */}
        {isUpcoming && (
          <div
            className="absolute top-2.5 h-6 rounded-md bg-slate-200/60 border border-dashed border-slate-300"
            style={{ left: `${leftPct}%`, width: `${widthPct}%` }}
          >
            <span className="flex items-center h-full px-2 text-[10px] font-semibold text-slate-500 truncate">
              🔒 opens {formatShortDate(task.startDate)}
            </span>
          </div>
        )}

        {/* Days-saved dashed segment */}
        {showSaved && savedWidthPct > 0 && (
          <div
            className="absolute top-3 h-5 rounded-md border-[1.5px] border-dashed border-emerald-400 bg-emerald-50/40 flex items-center justify-center"
            style={{
              left: `${savedLeftPct}%`,
              width: `${savedWidthPct}%`,
            }}
          >
            <span className="text-[10px] font-bold text-emerald-600 truncate px-1">
              {task.daysEarly}d saved
            </span>
          </div>
        )}

        {/* Overdue extension dashed segment */}
        {showOverdueExt && overdueWidthPct > 0 && (
          <div
            className="absolute top-3 h-5 rounded-md border-[1.5px] border-dashed border-rose-400 bg-rose-50/40 flex items-center justify-center"
            style={{
              left: `${overdueLeftPct}%`,
              width: `${overdueWidthPct}%`,
            }}
          >
            <span className="text-[10px] font-bold text-rose-600 truncate px-1">
              +{Math.abs(task.daysLeft)}d
            </span>
          </div>
        )}

        {/* Deadline flag */}
        {flagVisible && (
          <div
            className="absolute top-2 text-sm pointer-events-none"
            style={{
              left: `${flagPct}%`,
              transform: "translateX(-100%)",
            }}
          >
            🚩
          </div>
        )}
      </div>
    </div>
  );
}
