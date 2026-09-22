"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import { useMentorRoster, useMentorAssignedTasks, useCreateTask, useReviewTask } from "@/hooks/useTasks";
import { useStudentEfficiency } from "@/hooks/useEfficiency";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { EmptyState } from "@/components/ui/EmptyState";
import { Skeleton } from "@/components/ui/Skeleton";
import { TaskStatus } from "@/lib/types";
import {
  ArrowLeft,
  MessageSquare,
  Calendar,
  Plus,
  CheckCircle2,
  Clock,
  AlertTriangle,
  XCircle,
  TrendingUp,
  Award,
  BookOpen,
} from "lucide-react";

export default function StudentDetailPage() {
  const params = useParams();
  const router = useRouter();
  const studentId = params.id as string;

  const { user, isAuthenticated } = useAuthStore();
  const mentorId = user?.id;

  // 1. Student subscription info from roster
  const { data: rosterData, isLoading: rosterLoading } = useMentorRoster(mentorId);
  const studentSub = rosterData?.items?.find((s) => s.student_id === studentId);

  // 2. Efficiency data
  const { data: effData, isLoading: effLoading, refetch: refetchEff } = useStudentEfficiency(studentId);

  // 3. Task history
  const [taskFilter, setTaskFilter] = useState<string>("ALL");
  const {
    data: taskData,
    isLoading: tasksLoading,
    refetch: refetchTasks,
  } = useMentorAssignedTasks(mentorId, studentId);

  // 4. Task assignment state
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [weekStart, setWeekStart] = useState("");
  const [weekEnd, setWeekEnd] = useState("");
  const [assignError, setAssignError] = useState<string | null>(null);

  const createTaskMutation = useCreateTask();

  // 5. Task review state
  const [reviewingTaskId, setReviewingTaskId] = useState<string | null>(null);
  const [reviewNote, setReviewNote] = useState("");
  const reviewTaskMutation = useReviewTask();

  const handleAssignTask = async (e: React.FormEvent) => {
    e.preventDefault();
    setAssignError(null);

    if (new Date(weekStart) > new Date(weekEnd)) {
      setAssignError("Start date cannot be after the deadline date.");
      return;
    }

    try {
      await createTaskMutation.mutateAsync({
        student_id: studentId,
        title: taskTitle,
        description: taskDescription,
        week_start: weekStart,
        week_end: weekEnd,
      });
      setTaskTitle("");
      setTaskDescription("");
      setWeekStart("");
      setWeekEnd("");
      setShowAssignModal(false);
      refetchTasks();
      refetchEff();
    } catch (err: any) {
      setAssignError(err.detail || "Failed to assign task.");
    }
  };

  const handleReviewTask = async (taskId: string, decision: "APPROVED" | "REJECTED") => {
    try {
      await reviewTaskMutation.mutateAsync({
        taskId,
        decision,
        mentor_note: reviewNote.trim() || undefined,
      });
      setReviewingTaskId(null);
      setReviewNote("");
      refetchTasks();
      refetchEff();
    } catch (err: any) {
      alert(err.detail || "Failed to review task.");
    }
  };

  if (!isAuthenticated || user?.role !== "MENTOR") {
    return (
      <div className="py-16 text-center max-w-md mx-auto">
        <h2 className="text-xl font-bold font-display text-ink mb-2">
          Mentor Access Required
        </h2>
        <p className="text-sm text-ink-muted mb-6">
          Please log in with your mentor account to view student profiles.
        </p>
        <Link href="/login">
          <Button variant="primary">Sign In</Button>
        </Link>
      </div>
    );
  }

  if (rosterLoading || effLoading) {
    return (
      <div className="space-y-6 max-w-5xl mx-auto">
        <Skeleton className="h-6 w-36" />
        <Skeleton className="h-32 w-full rounded-card" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Skeleton className="h-28 rounded-card" />
          <Skeleton className="h-28 rounded-card" />
          <Skeleton className="h-28 rounded-card" />
          <Skeleton className="h-28 rounded-card" />
        </div>
        <Skeleton className="h-64 rounded-card" />
      </div>
    );
  }

  // Filter tasks based on selected tab
  const tasks = taskData?.items || [];
  const filteredTasks = tasks.filter((t) => {
    if (taskFilter === "ALL") return true;
    if (taskFilter === "PENDING_REVIEW") return t.status === "MARKED_COMPLETE";
    return t.status === taskFilter;
  });

  const studentName = studentSub?.student_name || effData?.student_name || "Student";
  const studentEmail = studentSub?.student_email || "Active Cohort Student";

  // Score tier
  const score = effData?.efficiency_score;
  const getScoreBadge = () => {
    if (score === null || score === undefined) return { label: "No Score Yet", color: "bg-ink-faint/15 text-ink-muted" };
    if (score >= 85) return { label: "Exceptional (Top Tier)", color: "bg-moss/10 text-moss border border-moss/30" };
    if (score >= 65) return { label: "Consistent Progress", color: "bg-brand/10 text-brand border border-brand/30" };
    return { label: "Needs Accountability Intervention", color: "bg-amber/15 text-amber border border-amber/30" };
  };
  const scoreBadge = getScoreBadge();

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Top Breadcrumb & Navigation */}
      <div>
        <Link
          href="/mentor/students"
          className="inline-flex items-center gap-2 text-xs font-semibold text-ink-muted hover:text-ink transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Students Roster
        </Link>
      </div>

      {/* Student Profile Overview Card */}
      <Card className="bg-white border-mist p-6 sm:p-7">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-brand/10 text-brand border border-brand/20 flex items-center justify-center font-display font-extrabold text-xl flex-shrink-0">
              {studentName.charAt(0).toUpperCase()}
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-2xl font-bold font-display text-ink tracking-tight">
                  {studentName}
                </h1>
                <Badge variant={studentSub?.status || "ACTIVE"}>
                  {studentSub?.status || "ACTIVE"}
                </Badge>
              </div>
              <p className="text-xs text-ink-muted">{studentEmail}</p>
              {studentSub?.started_at && (
                <p className="text-[11px] text-ink-faint">
                  Enrolled in your cohort since:{" "}
                  <span className="font-semibold text-ink-muted">
                    {new Date(studentSub.started_at).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </p>
              )}
            </div>
          </div>

          {/* Quick Action Toolbar */}
          <div className="flex flex-wrap items-center gap-2.5">
            <Link href={`/messages?user=${studentId}`}>
              <Button size="sm" variant="secondary" className="flex items-center gap-1.5 text-xs font-semibold">
                <MessageSquare className="w-3.5 h-3.5 text-brand" />
                Message
              </Button>
            </Link>
            <Link href={`/schedule`}>
              <Button size="sm" variant="secondary" className="flex items-center gap-1.5 text-xs font-semibold">
                <Calendar className="w-3.5 h-3.5 text-moss" />
                1:1 Session
              </Button>
            </Link>
            <Button
              size="sm"
              variant="primary"
              onClick={() => setShowAssignModal(true)}
              className="flex items-center gap-1.5 text-xs font-bold"
            >
              <Plus className="w-3.5 h-3.5" />
              Assign Task
            </Button>
          </div>
        </div>
      </Card>

      {/* Efficiency & Metrics Dashboard */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-ink-faint">
            Accountability & Efficiency Metrics
          </h2>
          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${scoreBadge.color}`}>
            {scoreBadge.label}
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Main Efficiency Score */}
          <Card className="bg-white border-mist p-5 flex flex-col justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-ink-faint">
              Efficiency Score
            </span>
            <div className="my-2">
              <span className="text-3xl font-extrabold font-display text-moss">
                {score !== null && score !== undefined ? `${score}%` : "—"}
              </span>
            </div>
            <p className="text-[10px] text-ink-faint">
              Based on on-time verified tasks
            </p>
          </Card>

          {/* Tasks Approved */}
          <Card className="bg-white border-mist p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-ink-faint">
                Approved (On-Time)
              </span>
              <CheckCircle2 className="w-4 h-4 text-moss" />
            </div>
            <div className="my-2">
              <span className="text-3xl font-extrabold font-display text-ink">
                {effData?.tasks_approved ?? 0}
              </span>
            </div>
            <p className="text-[10px] text-ink-faint">
              Successfully completed
            </p>
          </Card>

          {/* Tasks Pending */}
          <Card className="bg-white border-mist p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-ink-faint">
                Pending / Active
              </span>
              <Clock className="w-4 h-4 text-amber" />
            </div>
            <div className="my-2">
              <span className="text-3xl font-extrabold font-display text-amber">
                {effData?.tasks_pending ?? 0}
              </span>
            </div>
            <p className="text-[10px] text-ink-faint">
              Awaiting student submission
            </p>
          </Card>

          {/* Total Assigned */}
          <Card className="bg-white border-mist p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-ink-faint">
                Total Assigned
              </span>
              <BookOpen className="w-4 h-4 text-brand" />
            </div>
            <div className="my-2">
              <span className="text-3xl font-extrabold font-display text-ink">
                {effData?.tasks_assigned ?? 0}
              </span>
            </div>
            <p className="text-[10px] text-ink-faint">
              Lifetime cohort objectives
            </p>
          </Card>
        </div>
      </div>

      {/* Task Roadmap & Progress Section */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-bold font-display text-ink tracking-tight">
              Assigned Weekly Deliverables ({tasks.length})
            </h2>
            <p className="text-xs text-ink-muted">
              Review submissions, track adherence to weekly deadlines, and assign new benchmarks.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1 bg-white p-1 rounded-control border border-mist self-start sm:self-auto overflow-x-auto no-scrollbar">
            {[
              { id: "ALL", label: "All" },
              { id: "PENDING_REVIEW", label: "Needs Review" },
              { id: "ASSIGNED", label: "In Progress" },
              { id: "APPROVED", label: "Approved" },
              { id: "REJECTED", label: "Rejected" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setTaskFilter(tab.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-control transition-all whitespace-nowrap ${
                  taskFilter === tab.id
                    ? "bg-brand text-white"
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Task Cards List */}
        {tasksLoading ? (
          <div className="space-y-3">
            <Skeleton className="h-24 rounded-card" />
            <Skeleton className="h-24 rounded-card" />
          </div>
        ) : filteredTasks.length === 0 ? (
          <EmptyState
            title="No tasks in this view"
            description={
              taskFilter === "ALL"
                ? `No tasks have been assigned to ${studentName} yet. Click 'Assign Task' above to create their first weekly milestone.`
                : `No tasks matching status '${taskFilter}'.`
            }
            actionLabel={taskFilter === "ALL" ? "+ Assign Milestone" : undefined}
            onAction={taskFilter === "ALL" ? () => setShowAssignModal(true) : undefined}
          />
        ) : (
          <div className="space-y-3">
            {filteredTasks.map((task) => {
              const isNeedsReview = task.status === "MARKED_COMPLETE";
              const isReviewingThis = reviewingTaskId === task.id;

              return (
                <Card
                  key={task.id}
                  className={`bg-white border-mist p-5 space-y-3 transition-all ${
                    isNeedsReview ? "border-amber/60 bg-amber/[0.02]" : ""
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold text-sm text-ink font-display">
                          {task.title}
                        </span>
                        <Badge variant={task.status}>{task.status}</Badge>
                        {task.is_late && (
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-100 text-red-700 border border-red-200">
                            Late Submission
                          </span>
                        )}
                        {isNeedsReview && (
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber/20 text-amber border border-amber/30 animate-pulse">
                            Awaiting Review
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-ink-muted leading-relaxed">
                        {task.description}
                      </p>
                    </div>

                    <div className="text-right sm:flex-shrink-0 text-xs text-ink-faint">
                      <div>
                        Deadline:{" "}
                        <span className="font-semibold text-ink">
                          {new Date(task.week_end).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="text-[10px] text-ink-faint mt-0.5">
                        Assigned: {new Date(task.week_start).toLocaleDateString()}
                      </div>
                    </div>
                  </div>

                  {/* Submission and Mentor Review Section */}
                  {isNeedsReview && (
                    <div className="pt-3 border-t border-mist/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#FAFAF9] p-3 rounded-control border border-amber/20">
                      <div>
                        <span className="text-xs font-bold text-ink">
                          Student marked this task complete
                        </span>
                        <p className="text-xs text-ink-muted mt-0.5">
                          Review submission and verify to update {studentName}&apos;s efficiency score.
                        </p>
                      </div>

                      {!isReviewingThis ? (
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="primary"
                            onClick={() => setReviewingTaskId(task.id)}
                            className="text-xs bg-moss hover:bg-moss/90 text-white"
                          >
                            Review Submission
                          </Button>
                        </div>
                      ) : (
                        <div className="w-full space-y-2 pt-2">
                          <Input
                            placeholder="Optional mentor review feedback or note..."
                            value={reviewNote}
                            onChange={(e) => setReviewNote(e.target.value)}
                            className="text-xs"
                          />
                          <div className="flex items-center justify-end gap-2">
                            <Button
                              size="sm"
                              variant="secondary"
                              onClick={() => setReviewingTaskId(null)}
                              className="text-xs"
                            >
                              Cancel
                            </Button>
                            <Button
                              size="sm"
                              variant="secondary"
                              isLoading={reviewTaskMutation.isPending}
                              onClick={() => handleReviewTask(task.id, "REJECTED")}
                              className="text-xs text-red-600 font-bold border-red-300 hover:bg-red-50"
                            >
                              Reject
                            </Button>
                            <Button
                              size="sm"
                              variant="primary"
                              isLoading={reviewTaskMutation.isPending}
                              onClick={() => handleReviewTask(task.id, "APPROVED")}
                              className="text-xs bg-moss hover:bg-moss/90 text-white font-bold"
                            >
                              Approve & Verify
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Feedback note if already reviewed */}
                  {task.mentor_note && (
                    <div className="pt-2 text-xs text-ink-muted border-t border-mist/50">
                      <span className="font-semibold text-ink">Mentor Feedback: </span>
                      <span className="italic">{task.mentor_note}</span>
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        )}
      </div>

      {/* Task Assignment Modal */}
      {showAssignModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={() => setShowAssignModal(false)}
          />
          <Card className="relative w-full max-w-lg bg-white p-6 rounded-card border-mist shadow-xl z-10 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-mist">
              <h3 className="font-display font-bold text-base text-ink">
                Assign Weekly Milestone to {studentName}
              </h3>
              <button
                onClick={() => setShowAssignModal(false)}
                className="text-xs text-ink-faint hover:text-ink font-semibold"
              >
                ✕ Close
              </button>
            </div>

            {assignError && (
              <p className="text-xs text-amber font-semibold">{assignError}</p>
            )}

            <form onSubmit={handleAssignTask} className="space-y-4">
              <Input
                label="Task Title"
                placeholder="e.g. Solve 50 Organic Chemistry reactions & upload notes"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                required
              />

              <Textarea
                label="Deliverables & Instructions"
                placeholder="Specify precise problem sets, book references, and submission criteria..."
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                rows={3}
                required
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Week Start Date"
                  type="date"
                  value={weekStart}
                  onChange={(e) => setWeekStart(e.target.value)}
                  required
                />
                <Input
                  label="Deadline (Week End)"
                  type="date"
                  value={weekEnd}
                  onChange={(e) => setWeekEnd(e.target.value)}
                  required
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-mist">
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
                  Assign Milestone
                </Button>
              </div>
            </form>
          </Card>
        </div>
      )}
    </div>
  );
}
