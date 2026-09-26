"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useAuthStore } from "@/store/authStore";
import { useStudentTasks, useCompleteTask } from "@/hooks/useTasks";
import { TaskStatus } from "@/lib/types";
import { TaskCard } from "@/components/TaskCard";
import { CardSkeleton } from "@/components/ui/Skeleton";
import { EmptyState } from "@/components/ui/EmptyState";
import { Button } from "@/components/ui/Button";

const STATUS_FILTERS: Array<{ label: string; value?: TaskStatus }> = [
  { label: "All Tasks" },
  { label: "Assigned", value: "ASSIGNED" },
  { label: "Pending Review", value: "MARKED_COMPLETE" },
  { label: "Approved", value: "APPROVED" },
  { label: "Rejected", value: "REJECTED" },
];

export default function StudentTasksPage() {
  const { user, isAuthenticated, isLoading: authLoading } = useAuthStore();
  const [selectedStatus, setSelectedStatus] = useState<TaskStatus | undefined>(
    undefined
  );
  const [completingTaskId, setCompletingTaskId] = useState<string | null>(null);
  const [successToast, setSuccessToast] = useState<string | null>(null);

  const {
    data: tasksData,
    isLoading: tasksLoading,
    isError,
    refetch,
  } = useStudentTasks(selectedStatus);

  const completeMutation = useCompleteTask();

  const handleMarkComplete = async (taskId: string) => {
    setCompletingTaskId(taskId);
    setSuccessToast(null);
    try {
      await completeMutation.mutateAsync(taskId);
      setSuccessToast("Task marked complete! It is now pending mentor review.");
      setTimeout(() => setSuccessToast(null), 5000);
    } catch {
      alert("Unable to mark task complete. Please try again.");
    } finally {
      setCompletingTaskId(null);
    }
  };

  if (authLoading) {
    return <div className="animate-pulse py-12 text-center text-ink-faint">Loading...</div>;
  }

  if (!isAuthenticated) {
    return (
      <div className="py-16 text-center">
        <h2 className="text-xl font-bold font-display text-ink mb-2">
          Sign In Required
        </h2>
        <p className="text-sm text-ink-muted mb-6">
          Please sign in with your student account to view assigned tasks.
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
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-sky-50 via-blue-50/40 to-white border border-sky-100/80 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-soft">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-sky-100/80 border border-sky-200 text-[11px] font-bold text-sky-900 uppercase tracking-wider mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse"></span>
            Weekly Accountability
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold font-display text-ink tracking-tight">
            My Accountability Tasks
          </h1>
          <p className="text-sm text-ink-muted mt-1.5">
            Complete your assigned objectives before the week ends to maintain an optimal efficiency rating.
          </p>
        </div>

        <Link href="/dashboard/efficiency">
          <Button size="sm" variant="secondary" className="border-sky-200 hover:bg-sky-50 text-blue-800 font-semibold whitespace-nowrap rounded-lg">
            View Efficiency Rating →
          </Button>
        </Link>
      </div>

      {/* Success Toast */}
      {successToast && (
        <div className="p-3.5 bg-blue-50 border border-blue-200 rounded-card text-xs text-blue-900 font-medium flex items-center justify-between">
          <span>{successToast}</span>
          <button
            onClick={() => setSuccessToast(null)}
            className="text-blue-700 hover:underline font-semibold"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Filter Bar */}
      <div className="flex flex-wrap items-center gap-2 pb-2">
        {STATUS_FILTERS.map((filter) => {
          const isSelected = selectedStatus === filter.value;
          return (
            <button
              key={filter.label}
              onClick={() => setSelectedStatus(filter.value)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                isSelected
                  ? "bg-blue-600 text-white border-blue-600 shadow-soft"
                  : "bg-white text-ink-muted border-mist hover:text-ink hover:border-blue-200 hover:bg-blue-50/40"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      {/* Task List */}
      {tasksLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      ) : isError ? (
        <div className="py-12 text-center rounded-card border border-mist bg-white p-8">
          <p className="text-sm text-ink-muted mb-4">
            Unable to load tasks at this time.
          </p>
          <Button variant="secondary" size="sm" onClick={() => refetch()}>
            Retry
          </Button>
        </div>
      ) : !tasksData || tasksData.items.length === 0 ? (
        <EmptyState
          title="No tasks found"
          description={
            selectedStatus
              ? `No tasks matching filter '${selectedStatus}'.`
              : "Your mentor has not assigned any tasks yet, or you have not subscribed to a mentor."
          }
          actionLabel="Explore Mentors"
          onAction={() => window.location.assign("/mentors")}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tasksData.items.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              isStudentView={true}
              isActionLoading={completingTaskId === task.id}
              onMarkComplete={handleMarkComplete}
            />
          ))}
        </div>
      )}
    </div>
  );
}
