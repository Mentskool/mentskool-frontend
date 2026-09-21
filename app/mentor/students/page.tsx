"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useAuthStore } from "@/store/authStore";
import { useMentorRoster, useMentorAssignedTasks, useCreateTask } from "@/hooks/useTasks";
import { useStudentEfficiency } from "@/hooks/useEfficiency";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { EmptyState } from "@/components/ui/EmptyState";
import { CardSkeleton } from "@/components/ui/Skeleton";
import { Subscription } from "@/lib/types";

interface StudentRowProps {
  subscription: Subscription;
  mentorId: string;
}

const StudentRow: React.FC<StudentRowProps> = ({ subscription, mentorId }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAssigning, setIsAssigning] = useState(false);

  // Efficiency data for this student
  const { data: effData } = useStudentEfficiency(subscription.student_id);

  // Task history for this student
  const { data: taskData, isLoading: tasksLoading, refetch: refetchTasks } = useMentorAssignedTasks(
    mentorId,
    subscription.student_id
  );

  // Task assignment form state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [weekStart, setWeekStart] = useState("");
  const [weekEnd, setWeekEnd] = useState("");
  const [formFeedback, setFormFeedback] = useState<string | null>(null);

  const createTaskMutation = useCreateTask();

  const handleAssignTask = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormFeedback(null);

    if (new Date(weekStart) > new Date(weekEnd)) {
      setFormFeedback("Week start date cannot be after week end date.");
      return;
    }

    try {
      await createTaskMutation.mutateAsync({
        student_id: subscription.student_id,
        title,
        description,
        week_start: weekStart,
        week_end: weekEnd,
      });
      setTitle("");
      setDescription("");
      setWeekStart("");
      setWeekEnd("");
      setIsAssigning(false);
      refetchTasks();
    } catch (err: any) {
      setFormFeedback(err.detail || "Failed to assign task.");
    }
  };

  return (
    <Card className="bg-white border-mist transition-all">
      {/* Main Student Row */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <h3 className="text-base font-bold font-display text-ink">
              {subscription.student_name}
            </h3>
            <Badge variant={subscription.status}>{subscription.status}</Badge>
          </div>
          <p className="text-xs text-ink-muted">{subscription.student_email}</p>
          <p className="text-[11px] text-ink-faint pt-0.5">
            Subscribed: {new Date(subscription.started_at).toLocaleDateString()}
          </p>
        </div>

        {/* Efficiency & Metrics Stats */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 bg-[#FAFAF9] px-4 py-2 rounded-control border border-mist">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-ink-faint block">
              Efficiency
            </span>
            <span className="font-display font-bold text-sm text-moss">
              {effData?.efficiency_score !== null && effData?.efficiency_score !== undefined
                ? `${effData.efficiency_score}%`
                : "No data"}
            </span>
          </div>

          <div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-ink-faint block">
              Assigned
            </span>
            <span className="font-display font-bold text-sm text-ink">
              {effData?.tasks_assigned ?? 0}
            </span>
          </div>

          <div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-ink-faint block">
              Approved
            </span>
            <span className="font-display font-bold text-sm text-moss">
              {effData?.tasks_approved ?? 0}
            </span>
          </div>

          <div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-ink-faint block">
              Pending
            </span>
            <span className="font-display font-bold text-sm text-amber">
              {effData?.tasks_pending ?? 0}
            </span>
          </div>
        </div>

        {/* Action Toggle */}
        <div className="flex items-center gap-2 self-end md:self-center">
          <Button
            size="sm"
            variant="secondary"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Hide Details" : "Task History"}
          </Button>
          <Button
            size="sm"
            variant="primary"
            onClick={() => {
              setIsExpanded(true);
              setIsAssigning(!isAssigning);
            }}
          >
            + Assign
          </Button>
        </div>
      </div>

      {/* Expanded Accordion: Inline Task Assignment & History */}
      {isExpanded && (
        <div className="mt-6 pt-6 border-t border-mist space-y-6">
          {/* Inline Assignment Form */}
          {isAssigning && (
            <div className="bg-[#FAFAF9] rounded-control border border-mist p-5 space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-ink">
                Assign New Weekly Objective to {subscription.student_name}
              </h4>
              {formFeedback && (
                <p className="text-xs text-amber font-medium">{formFeedback}</p>
              )}
              <form onSubmit={handleAssignTask} className="space-y-4">
                <Input
                  label="Task Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Complete 50 Rotational Motion JEE Advanced problems"
                  required
                />
                <Textarea
                  label="Task Description & Instructions"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Detailed breakdown of formulas, references, and expected completion criteria..."
                  rows={3}
                  required
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Week Start"
                    type="date"
                    value={weekStart}
                    onChange={(e) => setWeekStart(e.target.value)}
                    required
                  />
                  <Input
                    label="Week End (Deadline)"
                    type="date"
                    value={weekEnd}
                    onChange={(e) => setWeekEnd(e.target.value)}
                    required
                  />
                </div>
                <div className="flex items-center justify-end gap-2">
                  <Button
                    type="button"
                    size="sm"
                    variant="ghost"
                    onClick={() => setIsAssigning(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    size="sm"
                    variant="primary"
                    isLoading={createTaskMutation.isPending}
                  >
                    Confirm & Assign
                  </Button>
                </div>
              </form>
            </div>
          )}

          {/* Inline Task History List */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
              Recent Task History ({taskData?.items?.length || 0})
            </h4>

            {tasksLoading ? (
              <p className="text-xs text-ink-faint">Loading task history...</p>
            ) : !taskData || taskData.items.length === 0 ? (
              <p className="text-xs text-ink-faint italic">
                No tasks assigned to this student yet. Click '+ Assign' to create the first one.
              </p>
            ) : (
              <div className="space-y-2">
                {taskData.items.map((task) => (
                  <div
                    key={task.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-control bg-[#FAFAF9] border border-mist gap-2 text-xs"
                  >
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-ink">{task.title}</span>
                        <Badge variant={task.status}>{task.status}</Badge>
                        {task.is_late && <Badge variant="LATE">Late</Badge>}
                      </div>
                      <p className="text-ink-muted text-[11px] line-clamp-1">{task.description}</p>
                    </div>

                    <div className="text-right sm:flex-shrink-0 text-ink-faint text-[11px]">
                      Week: {task.week_start} → {task.week_end}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </Card>
  );
};

export default function MentorStudentsPage() {
  const { user, isAuthenticated, isLoading: authLoading } = useAuthStore();
  const {
    data: rosterData,
    isLoading: rosterLoading,
    isError,
    refetch,
  } = useMentorRoster(user?.id);

  if (authLoading) {
    return (
      <div className="animate-pulse py-12 text-center text-ink-faint">
        Loading cohort roster...
      </div>
    );
  }

  if (!isAuthenticated || user?.role !== "MENTOR") {
    return (
      <div className="py-16 text-center max-w-md mx-auto">
        <h2 className="text-xl font-bold font-display text-ink mb-2">
          Mentor Access Required
        </h2>
        <p className="text-sm text-ink-muted mb-6">
          You must be logged in as a mentor to view cohort subscriber rosters.
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
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold font-display text-ink tracking-tight">
            Cohort Student Roster
          </h1>
          <p className="text-sm text-ink-muted mt-1.5">
            Monitor student efficiency scores, review completed submissions, and assign weekly accountability targets.
          </p>
        </div>

        <Link href="/mentor/tasks">
          <Button size="sm" variant="secondary">
            Task Review Dashboard
          </Button>
        </Link>
      </div>

      {/* Roster View */}
      {rosterLoading ? (
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      ) : isError ? (
        <div className="py-12 text-center rounded-card border border-mist bg-white p-8">
          <p className="text-sm text-ink-muted mb-4">
            Unable to load student roster.
          </p>
          <Button variant="secondary" size="sm" onClick={() => refetch()}>
            Retry
          </Button>
        </div>
      ) : !rosterData || rosterData.items.length === 0 ? (
        <EmptyState
          title="No students subscribed yet"
          description="Your cohort currently has zero active subscriptions. As students subscribe to your cohort, they will appear here."
          actionLabel="View Public Profile"
          onAction={() => window.location.assign(`/mentors/${user.id}`)}
        />
      ) : (
        <div className="space-y-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-ink-faint">
            {rosterData.total} Subscribed Student{rosterData.total === 1 ? "" : "s"}
          </div>

          <div className="grid grid-cols-1 gap-4">
            {rosterData.items.map((sub) => (
              <StudentRow
                key={sub.id}
                subscription={sub}
                mentorId={user.id}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
