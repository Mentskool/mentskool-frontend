"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useAuthStore } from "@/store/authStore";
import { useStudentTasks, useCompleteTask } from "@/hooks/useTasks";
import { Task, TaskStatus } from "@/lib/types";
import { StudentTaskRow } from "@/components/StudentTaskRow";
import { TaskDetailModal } from "@/components/TaskDetailModal";
import { FocusBanner } from "@/components/FocusBanner";
import { TaskOverviewDonut } from "@/components/TaskOverviewDonut";
import { MissionTimeline } from "@/components/MissionTimeline";
import { CardSkeleton } from "@/components/ui/Skeleton";
import { EmptyState } from "@/components/ui/EmptyState";
import { Button } from "@/components/ui/Button";
import {
  Target,
  Calendar,
  CheckCircle2,
  Clock,
  Hourglass,
  AlertCircle,
  Zap,
  BookOpen,
  ChevronRight,
  BarChart3,
  Check,
  LayoutList,
  GanttChart,
} from "lucide-react";

const STATUS_FILTERS: Array<{ label: string; value?: TaskStatus }> = [
  { label: "All Tasks" },
  { label: "Assigned to Me", value: "ASSIGNED" },
  { label: "Pending Review", value: "MARKED_COMPLETE" },
  { label: "Approved", value: "APPROVED" },
  { label: "Rejected", value: "REJECTED" },
];

export default function StudentTasksPage() {
  const { user, isAuthenticated, isLoading: authLoading } = useAuthStore();
  const [viewMode, setViewMode] = useState<"list" | "timeline">("list");
  const [selectedStatus, setSelectedStatus] = useState<TaskStatus | undefined>(
    undefined
  );
  const [completingTaskId, setCompletingTaskId] = useState<string | null>(null);
  const [activeDetailTask, setActiveDetailTask] = useState<Task | null>(null);
  const [successToast, setSuccessToast] = useState<string | null>(null);

  // Fetch all tasks without filter for accurate stat card and donut calculations
  const {
    data: allTasksData,
    isLoading: allLoading,
    isError,
    refetch,
  } = useStudentTasks();

  const completeMutation = useCompleteTask();

  // Compute stat counts from tasks list
  const stats = useMemo(() => {
    const items = allTasksData?.items || [];
    return {
      completed: items.filter((t) => t.status === "APPROVED").length,
      inProgress: items.filter((t) => t.status === "ASSIGNED").length,
      pendingReview: items.filter((t) => t.status === "MARKED_COMPLETE").length,
      rejected: items.filter((t) => t.status === "REJECTED").length,
    };
  }, [allTasksData]);

  // Compute date range from active tasks or current month in human-friendly format (e.g. Sep 26 – Oct 30, 2026)
  const cycleDateRange = useMemo(() => {
    const items = allTasksData?.items || [];
    const formatShort = (dateStr: string) => {
      const parts = dateStr.split("-");
      if (parts.length === 3) {
        const year = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const day = parseInt(parts[2], 10);
        const d = new Date(year, month, day);
        return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
      }
      return dateStr;
    };

    if (items.length > 0 && items[0].week_start && items[0].week_end) {
      const endYear = items[0].week_end.split("-")[0] || "";
      return `${formatShort(items[0].week_start)} – ${formatShort(items[0].week_end)}${endYear ? `, ${endYear}` : ""}`;
    }
    const now = new Date();
    const start = new Date(now.getFullYear(), now.getMonth(), 1);
    const end = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    const formatFull = (d: Date) =>
      d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    return `${formatFull(start)} – ${formatFull(end)}, ${now.getFullYear()}`;
  }, [allTasksData]);

  // Filter tasks locally based on selected tab
  const filteredTasks = useMemo(() => {
    const items = allTasksData?.items || [];
    if (!selectedStatus) return items;
    return items.filter((t) => t.status === selectedStatus);
  }, [allTasksData, selectedStatus]);

  // Handle Mark Complete action
  const handleMarkComplete = async (taskId: string) => {
    setCompletingTaskId(taskId);
    setSuccessToast(null);
    try {
      await completeMutation.mutateAsync(taskId);
      setSuccessToast("Task submitted successfully! Awaiting mentor review.");
      setTimeout(() => setSuccessToast(null), 4500);
      refetch();
    } catch {
      alert("Unable to mark task complete. Please try again.");
    } finally {
      setCompletingTaskId(null);
    }
  };

  if (authLoading) {
    return (
      <div className="py-16 text-center text-slate-400 animate-pulse">
        Loading tasks workspace...
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="py-20 text-center max-w-md mx-auto space-y-4">
        <h2 className="text-xl font-bold font-display text-slate-900">
          Sign In Required
        </h2>
        <p className="text-xs text-slate-500">
          Please sign in to inspect your assigned weekly tasks and accountability rating.
        </p>
        <Link href="/login">
          <Button variant="primary" size="md">
            Sign In
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* 1. Hero Card */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600 shadow-xs">
            <Target className="w-6 h-6 text-blue-600" />
          </div>

          <div className="space-y-0.5">
            <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block">
              Weekly Accountability
            </span>
            <h1 className="text-2xl font-bold font-display text-slate-900">
              My Tasks
            </h1>
            <p className="text-xs text-slate-500 max-w-xl">
              Stay on top of your weekly objectives and mentor feedback.
            </p>
          </div>
        </div>

        {/* Date Range Badge + View Toggle */}
        <div className="flex items-center gap-2 self-start md:self-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 shadow-xs">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>{cycleDateRange}</span>
          </div>
          <div className="inline-flex rounded-lg border border-slate-200 overflow-hidden">
            <button
              onClick={() => setViewMode("list")}
              className={`flex items-center gap-1 px-2.5 py-1.5 text-[11px] font-semibold transition-colors ${
                viewMode === "list"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-slate-500 hover:text-slate-700"
              }`}
              aria-label="List view"
            >
              <LayoutList className="w-3.5 h-3.5" />
              List
            </button>
            <button
              onClick={() => setViewMode("timeline")}
              className={`flex items-center gap-1 px-2.5 py-1.5 text-[11px] font-semibold transition-colors ${
                viewMode === "timeline"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-slate-500 hover:text-slate-700"
              }`}
              aria-label="Timeline view"
            >
              <GanttChart className="w-3.5 h-3.5" />
              Timeline
            </button>
          </div>
        </div>
      </div>

      {/* ── TIMELINE VIEW ─────────────────────────────────────────── */}
      {viewMode === "timeline" && (
        <MissionTimeline
          tasks={allTasksData?.items ?? []}
          viewer="student"
          onComplete={handleMarkComplete}
          isCompletingId={completingTaskId}
        />
      )}

      {/* ── LIST VIEW (existing) ──────────────────────────────────── */}
      {viewMode === "list" && (
        <>
          {/* 2. Stat Metric Cards (4 Cards) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {/* Completed */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-xs flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0 text-emerald-600">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Completed</p>
                <p className="text-xl sm:text-2xl font-black font-display text-slate-900">
                  {stats.completed}
                </p>
              </div>
            </div>

            {/* In Progress */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-xs flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600">
                <Clock className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">In Progress</p>
                <p className="text-xl sm:text-2xl font-black font-display text-slate-900">
                  {stats.inProgress}
                </p>
              </div>
            </div>

            {/* Pending Review */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-xs flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center flex-shrink-0 text-amber-600">
                <Hourglass className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Pending Review</p>
                <p className="text-xl sm:text-2xl font-black font-display text-slate-900">
                  {stats.pendingReview}
                </p>
              </div>
            </div>

            {/* Rejected */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-xs flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center flex-shrink-0 text-rose-600">
                <AlertCircle className="w-5 h-5 text-rose-600" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Rejected</p>
                <p className="text-xl sm:text-2xl font-black font-display text-slate-900">
                  {stats.rejected}
                </p>
              </div>
            </div>
          </div>

          {/* Success Notification Alert */}
          {successToast && (
            <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs text-emerald-800 font-semibold flex items-center justify-between shadow-xs animate-fade-in">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>{successToast}</span>
              </div>
              <button
                onClick={() => setSuccessToast(null)}
                className="text-xs text-emerald-700 hover:text-emerald-900"
              >
                ✕
              </button>
            </div>
          )}

          {/* 3. Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {STATUS_FILTERS.map((filter) => {
              const isSelected = selectedStatus === filter.value;
              return (
                <button
                  key={filter.label}
                  onClick={() => setSelectedStatus(filter.value)}
                  className={`px-4 py-1.5 text-xs font-semibold rounded-full border transition-all whitespace-nowrap ${
                    isSelected
                      ? "bg-blue-600 text-white border-blue-600 shadow-xs"
                      : "bg-white text-slate-600 border-slate-200/90 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>

          {/* 4. Two-Column Dashboard Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Column: Tasks Feed (8 cols) */}
            <div className="lg:col-span-8 space-y-3.5">
              {allLoading ? (
                <div className="space-y-3">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <CardSkeleton key={i} />
                  ))}
                </div>
              ) : isError ? (
                <div className="py-12 text-center rounded-2xl border border-slate-200 bg-white p-8">
                  <p className="text-sm text-slate-500 mb-4">
                    Unable to load tasks at this time.
                  </p>
                  <Button variant="secondary" size="sm" onClick={() => refetch()}>
                    Retry
                  </Button>
                </div>
              ) : filteredTasks.length === 0 ? (
                <EmptyState
                  title="No tasks found"
                  description={
                    selectedStatus
                      ? `No tasks currently matching '${selectedStatus}'.`
                      : "You do not have any tasks assigned in this cycle yet."
                  }
                  actionLabel="Find Mentors"
                  onAction={() => window.location.assign("/mentors")}
                />
              ) : (
                <div className="space-y-3.5">
                  {filteredTasks.map((task) => (
                    <StudentTaskRow
                      key={task.id}
                      task={task}
                      onViewDetails={(t) => setActiveDetailTask(t)}
                      onMarkComplete={handleMarkComplete}
                      isActionLoading={completingTaskId === task.id}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Right Column: Sticky Widgets (4 cols) */}
            <div className="lg:col-span-4 space-y-5 lg:sticky lg:top-6">
              {/* Motivational Quote Banner */}
              <FocusBanner />

              {/* Task Overview Donut Gauge */}
              <TaskOverviewDonut
                completed={stats.completed}
                inProgress={stats.inProgress}
                pendingReview={stats.pendingReview}
                rejected={stats.rejected}
                onViewAll={() => setSelectedStatus(undefined)}
              />

              {/* Quick Actions Card */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs space-y-3">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-slate-700" />
                  <h3 className="text-sm font-bold text-slate-900">Quick Actions</h3>
                </div>

                <div className="space-y-2 pt-1">
                  <Link
                    href="/schedule"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-blue-50/70 border border-slate-200/70 hover:border-blue-200 transition-all text-xs font-semibold text-slate-700 group"
                  >
                    <div className="flex items-center gap-2.5">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      <span>View Schedule</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </Link>

                  <Link
                    href="/quizzes"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-blue-50/70 border border-slate-200/70 hover:border-blue-200 transition-all text-xs font-semibold text-slate-700 group"
                  >
                    <div className="flex items-center gap-2.5">
                      <BookOpen className="w-4 h-4 text-blue-600" />
                      <span>Browse Quizzes</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </Link>

                  <Link
                    href="/dashboard/efficiency"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-blue-50/70 border border-slate-200/70 hover:border-blue-200 transition-all text-xs font-semibold text-slate-700 group"
                  >
                    <div className="flex items-center gap-2.5">
                      <BarChart3 className="w-4 h-4 text-blue-600" />
                      <span>Efficiency Rating</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </Link>
                </div>
              </div>

              {/* Recent Activity Card */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-slate-700" />
                    <h3 className="text-sm font-bold text-slate-900">Recent Activity</h3>
                  </div>
                </div>

                <div className="space-y-3 pt-1 text-xs">
                  {allTasksData?.items && allTasksData.items.length > 0 ? (
                    allTasksData.items.slice(0, 4).map((task) => (
                      <div key={task.id} className="flex items-start gap-2.5">
                        {task.status === "APPROVED" ? (
                          <div className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0 text-emerald-600 mt-0.5">
                            <Check className="w-3 h-3" />
                          </div>
                        ) : task.status === "REJECTED" ? (
                          <div className="w-6 h-6 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center flex-shrink-0 text-rose-600 mt-0.5">
                            <AlertCircle className="w-3 h-3" />
                          </div>
                        ) : task.status === "MARKED_COMPLETE" ? (
                          <div className="w-6 h-6 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center flex-shrink-0 text-amber-600 mt-0.5">
                            <Hourglass className="w-3 h-3" />
                          </div>
                        ) : (
                          <div className="w-6 h-6 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600 mt-0.5">
                            <Clock className="w-3 h-3" />
                          </div>
                        )}

                        <div className="min-w-0 flex-1">
                          <p className="font-semibold text-slate-800 truncate">
                            {task.status === "APPROVED"
                              ? `Task approved: ${task.title}`
                              : task.status === "MARKED_COMPLETE"
                              ? `Submitted: ${task.title}`
                              : task.status === "REJECTED"
                              ? `Revision requested: ${task.title}`
                              : `Assigned: ${task.title}`}
                          </p>
                          <p className="text-[11px] text-slate-400">
                            {task.reviewed_at
                              ? new Date(task.reviewed_at).toLocaleDateString()
                              : task.week_start}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-slate-400 text-xs italic">
                      No recent task activities yet.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Task Detail Modal (shared across views) */}
      <TaskDetailModal
        task={activeDetailTask}
        isOpen={!!activeDetailTask}
        onClose={() => setActiveDetailTask(null)}
        onMarkComplete={handleMarkComplete}
        isActionLoading={completingTaskId === activeDetailTask?.id}
      />
    </div>
  );
}
