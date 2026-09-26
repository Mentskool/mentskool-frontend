"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import {
  useMentorRoster,
  useMentorAssignedTasks,
  useCreateTask,
  useReviewTask,
} from "@/hooks/useTasks";
import { TaskStatus } from "@/lib/types";
import { TaskCard } from "@/components/TaskCard";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { CardSkeleton } from "@/components/ui/Skeleton";
import { EmptyState } from "@/components/ui/EmptyState";
import { ApiError } from "@/lib/types";

function MentorTasksContent() {
  const searchParams = useSearchParams();
  const initialStudentId = searchParams.get("student_id") || undefined;

  const { user, isAuthenticated, isLoading: authLoading } = useAuthStore();
  const [selectedStudentId, setSelectedStudentId] = useState<string | undefined>(
    initialStudentId
  );
  const [selectedStatus, setSelectedStatus] = useState<TaskStatus | undefined>(
    undefined
  );
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [reviewingTaskId, setReviewingTaskId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Form State for Creating a Task
  const [formStudentId, setFormStudentId] = useState<string>(
    initialStudentId || ""
  );
  const [formTitle, setFormTitle] = useState("");
  const [formDescription, setFormDescription] = useState("");

  // Default dates to current week
  const today = new Date();
  const defaultWeekStart = today.toISOString().split("T")[0];
  const nextWeek = new Date(today);
  nextWeek.setDate(today.getDate() + 6);
  const defaultWeekEnd = nextWeek.toISOString().split("T")[0];

  const [formWeekStart, setFormWeekStart] = useState(defaultWeekStart);
  const [formWeekEnd, setFormWeekEnd] = useState(defaultWeekEnd);

  const { data: rosterData } = useMentorRoster(user?.id);
  const {
    data: tasksData,
    isLoading: tasksLoading,
    isError,
    refetch,
  } = useMentorAssignedTasks(
    user?.id,
    selectedStudentId,
    selectedStatus
  );

  const createTaskMutation = useCreateTask();
  const reviewTaskMutation = useReviewTask();

  const handleCreateTaskSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formStudentId) {
      setErrorMessage("Please select a student from your cohort.");
      return;
    }
    if (!formTitle.trim()) {
      setErrorMessage("Task title is required.");
      return;
    }
    if (!formDescription.trim()) {
      setErrorMessage("Task instructions are required.");
      return;
    }
    if (formWeekStart > formWeekEnd) {
      setErrorMessage("Week start date cannot be after week end date.");
      return;
    }

    try {
      await createTaskMutation.mutateAsync({
        student_id: formStudentId,
        title: formTitle.trim(),
        description: formDescription.trim(),
        week_start: formWeekStart,
        week_end: formWeekEnd,
      });

      // Reset form and close modal
      setFormTitle("");
      setFormDescription("");
      setShowAssignModal(false);
    } catch (err) {
      const apiErr = err as ApiError;
      setErrorMessage(
        apiErr.detail || "Unable to assign task. Ensure the student has an active subscription."
      );
    }
  };

  const handleReview = async (
    taskId: string,
    decision: "APPROVED" | "REJECTED",
    mentorNote?: string
  ) => {
    setReviewingTaskId(taskId);
    try {
      await reviewTaskMutation.mutateAsync({
        taskId,
        decision,
        mentor_note: mentorNote,
      });
    } catch {
      alert("Unable to submit review. Please try again.");
    } finally {
      setReviewingTaskId(null);
    }
  };

  if (authLoading) {
    return <div className="animate-pulse py-12 text-center text-ink-faint">Loading...</div>;
  }

  if (!isAuthenticated || user?.role !== "MENTOR") {
    return (
      <div className="py-16 text-center">
        <h2 className="text-xl font-bold font-display text-ink mb-2">
          Mentor Access Required
        </h2>
        <p className="text-sm text-ink-muted mb-6">
          Please sign in with a mentor account to manage and review tasks.
        </p>
        <Link href="/login">
          <Button variant="primary" size="md">
            Sign In as Mentor
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
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
            Task Administration
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold font-display text-ink tracking-tight">
            Manage Assigned Tasks
          </h1>
          <p className="text-sm text-ink-muted mt-1.5">
            Assign weekly objectives to cohort students and review their completed submissions.
          </p>
        </div>

        <Button
          size="sm"
          variant="primary"
          onClick={() => {
            setErrorMessage(null);
            setShowAssignModal(true);
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-soft whitespace-nowrap rounded-lg"
        >
          + Assign New Task
        </Button>
      </div>

      {/* Task Creation Modal / Panel */}
      {showAssignModal && (
        <Card className="bg-white border-2 border-brand/20 p-6 space-y-4">
          <div className="flex justify-between items-center border-b border-mist pb-3">
            <h2 className="text-base font-bold font-display text-ink">
              Assign Weekly Task
            </h2>
            <button
              onClick={() => setShowAssignModal(false)}
              className="text-xs text-ink-muted hover:text-ink"
            >
              ✕ Close
            </button>
          </div>

          <form onSubmit={handleCreateTaskSubmit} className="space-y-4">
            {errorMessage && (
              <div className="p-3 bg-[#FDF5E8] border border-amber/40 rounded-control text-xs text-[#9A6210] font-medium">
                {errorMessage}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-ink-muted">
                  Subscribed Student
                </label>
                <select
                  value={formStudentId}
                  onChange={(e) => setFormStudentId(e.target.value)}
                  className="w-full px-3 py-2 bg-white text-ink text-sm rounded-control border border-mist focus:outline-none focus:border-brand"
                >
                  <option value="">-- Select Student --</option>
                  {rosterData?.items.map((s) => (
                    <option key={s.student_id} value={s.student_id}>
                      {s.student_name} ({s.student_email})
                    </option>
                  ))}
                </select>
              </div>

              <Input
                label="Week Start Date"
                type="date"
                value={formWeekStart}
                onChange={(e) => setFormWeekStart(e.target.value)}
              />

              <Input
                label="Week End Date"
                type="date"
                value={formWeekEnd}
                onChange={(e) => setFormWeekEnd(e.target.value)}
              />
            </div>

            <Input
              label="Task Title"
              placeholder="e.g. Implement Rate Limiter in Redis"
              value={formTitle}
              onChange={(e) => setFormTitle(e.target.value)}
            />

            <Textarea
              label="Detailed Instructions"
              placeholder="Provide clear deliverables and expectations for this week..."
              rows={3}
              value={formDescription}
              onChange={(e) => setFormDescription(e.target.value)}
            />

            <div className="flex justify-end gap-2 pt-2">
              <Button
                type="button"
                variant="secondary"
                size="sm"
                onClick={() => setShowAssignModal(false)}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="primary"
                size="sm"
                isLoading={createTaskMutation.isPending}
              >
                Assign Task
              </Button>
            </div>
          </form>
        </Card>
      )}

      {/* Filter Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-2">
        <div className="flex flex-wrap items-center gap-2">
          {(
            [
              { label: "All Tasks" },
              { label: "Assigned", value: "ASSIGNED" },
              { label: "Pending Review", value: "MARKED_COMPLETE" },
              { label: "Approved", value: "APPROVED" },
              { label: "Rejected", value: "REJECTED" },
            ] as Array<{ label: string; value?: TaskStatus }>
          ).map((filter) => {
            const isSelected = selectedStatus === filter.value;
            return (
              <button
                key={filter.label}
                onClick={() => setSelectedStatus(filter.value)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                  isSelected
                    ? "bg-blue-600 text-white border-blue-600 shadow-soft"
                    : "bg-white text-ink-muted border-mist hover:text-ink hover:border-blue-200"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Student Filter Dropdown */}
        {rosterData && rosterData.items.length > 0 && (
          <div className="flex items-center gap-2">
            <span className="text-xs text-ink-faint">Student:</span>
            <select
              value={selectedStudentId || ""}
              onChange={(e) => setSelectedStudentId(e.target.value || undefined)}
              className="text-xs px-2.5 py-1 bg-white text-ink rounded-control border border-mist focus:outline-none focus:border-brand"
            >
              <option value="">All Students</option>
              {rosterData.items.map((s) => (
                <option key={s.student_id} value={s.student_id}>
                  {s.student_name}
                </option>
              ))}
            </select>
          </div>
        )}
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
            Unable to load assigned tasks.
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
              ? `No tasks with status '${selectedStatus}'.`
              : "You have not assigned any tasks yet. Click 'Assign New Task' to begin."
          }
          actionLabel="+ Assign First Task"
          onAction={() => setShowAssignModal(true)}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tasksData.items.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              isStudentView={false}
              isActionLoading={reviewingTaskId === task.id}
              onReview={handleReview}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function MentorTasksPage() {
  return (
    <React.Suspense
      fallback={
        <div className="animate-pulse py-12 text-center text-ink-faint">
          Loading assigned tasks...
        </div>
      }
    >
      <MentorTasksContent />
    </React.Suspense>
  );
}

