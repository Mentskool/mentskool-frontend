"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useAuthStore } from "@/store/authStore";
import { useMentorRoster, useMentorAssignedTasks, useCreateTask } from "@/hooks/useTasks";
import { useStudentEfficiency } from "@/hooks/useEfficiency";
import { useCohortQuizSummary, useStudentQuizRanking } from "@/hooks/useQuizzes";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { EmptyState } from "@/components/ui/EmptyState";
import { CardSkeleton } from "@/components/ui/Skeleton";
import { Subscription } from "@/lib/types";
import { Users, Trophy, FileText, CheckCircle2, Award, Target } from "lucide-react";

interface StudentRowProps {
  subscription: Subscription;
  mentorId: string;
}

const StudentRow: React.FC<StudentRowProps> = ({ subscription, mentorId }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAssigning, setIsAssigning] = useState(false);

  // Efficiency data for this student
  const { data: effData } = useStudentEfficiency(subscription.student_id);

  // Quiz rank & test performance for this student
  const { data: quizRank } = useStudentQuizRanking(subscription.student_id);

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
        <div className="flex items-center gap-3.5">
          {/* Student Avatar */}
          {subscription.student_avatar_url ? (
            <img
              src={subscription.student_avatar_url}
              alt={subscription.student_name}
              className="w-12 h-12 rounded-2xl object-cover border border-slate-200 flex-shrink-0 shadow-xs"
            />
          ) : (
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center font-display font-bold text-base flex-shrink-0 shadow-xs">
              {subscription.student_name.charAt(0).toUpperCase()}
            </div>
          )}

          <div className="space-y-1">
            <div className="flex items-center gap-2.5 flex-wrap">
              <Link
                href={`/mentor/students/${subscription.student_id}`}
                className="text-base font-bold font-display text-ink hover:text-brand hover:underline transition-colors"
              >
                {subscription.student_name}
              </Link>
              <Badge variant={subscription.status}>{subscription.status}</Badge>

              {/* Target Exam Badge */}
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200/80">
                <Target className="w-3 h-3 text-indigo-600" />
                <span>
                  {subscription.student_target_exam
                    ? `${subscription.student_target_exam}${
                        subscription.student_target_year
                          ? ` '${String(subscription.student_target_year).slice(-2)}`
                          : ""
                      }`
                    : "JEE / NEET Aspirant"}
                </span>
              </span>

              {subscription.student_prep_stage && (
                <span className="text-[10px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">
                  {subscription.student_prep_stage}
                </span>
              )}
            </div>

            <p className="text-[11px] text-ink-faint">
              Enrolled since:{" "}
              <span className="font-semibold text-slate-600">
                {new Date(subscription.started_at).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </p>
          </div>
        </div>

        {/* Efficiency & Quiz Exam Stats */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-5 bg-[#FAFAF9] px-3.5 py-2 rounded-control border border-mist">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-ink-faint block">
              Quiz Rank
            </span>
            <span className="font-display font-bold text-sm text-amber flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-amber" />
              {quizRank?.rank ? `#${quizRank.rank}` : "—"}
            </span>
          </div>

          <div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-ink-faint block">
              Avg Score
            </span>
            <span className="font-display font-bold text-sm text-moss">
              {quizRank?.average_percentage !== null && quizRank?.average_percentage !== undefined
                ? `${quizRank.average_percentage}%`
                : "—"}
            </span>
          </div>

          <div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-ink-faint block">
              Tests
            </span>
            <span className="font-display font-bold text-sm text-ink">
              {quizRank?.quizzes_attempted ?? 0}
            </span>
          </div>

          <div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-ink-faint block">
              Efficiency
            </span>
            <span className="font-display font-bold text-sm text-moss">
              {effData?.efficiency_score !== null && effData?.efficiency_score !== undefined
                ? `${effData.efficiency_score}%`
                : "—"}
            </span>
          </div>

          <div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-ink-faint block">
              Tasks
            </span>
            <span className="font-display font-bold text-sm text-ink">
              {effData?.tasks_approved ?? 0} / {effData?.tasks_assigned ?? 0}
            </span>
          </div>
        </div>

        {/* Action Toggle */}
        <div className="flex flex-wrap items-center gap-2 self-end md:self-center">
          <Link href={`/mentor/students/${subscription.student_id}`}>
            <Button size="sm" variant="secondary" className="font-semibold text-xs">
              View Profile & Progress →
            </Button>
          </Link>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-xs text-ink-muted"
          >
            {isExpanded ? "Hide" : "Quick History"}
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
  const { data: cohortSummary, isLoading: cohortSummaryLoading } = useCohortQuizSummary(user?.id);

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
      {/* Header Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-sky-50 via-blue-50/40 to-white border border-sky-100/80 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-soft">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-sky-100/80 border border-sky-200 text-[11px] font-bold text-sky-900 uppercase tracking-wider mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
            Cohort Management
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-ink tracking-tight">
            Cohort Student Roster
          </h1>
          <p className="text-sm text-ink-muted mt-1.5">
            Monitor student efficiency scores, track exam series rankings, and review completed submissions.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Link href="/quizzes">
            <Button size="sm" variant="secondary" className="border-sky-200 hover:bg-sky-50 text-blue-800 font-semibold whitespace-nowrap rounded-lg">
              Manage Quizzes →
            </Button>
          </Link>
          <Link href="/mentor/tasks">
            <Button size="sm" variant="primary" className="whitespace-nowrap rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold">
              Task Review Dashboard →
            </Button>
          </Link>
        </div>
      </div>

      {/* Cohort Capacity & General Performance Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Total Active Cohort Students */}
        <Card className="bg-white border-mist p-5 flex flex-col justify-between shadow-soft">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-ink-faint">
              Cohort Students
            </span>
            <Users className="w-4 h-4 text-brand" />
          </div>
          <div className="my-2">
            <span className="text-3xl font-extrabold font-display text-ink">
              {rosterData?.items?.length ?? 0}
            </span>
          </div>
          <p className="text-[10px] text-ink-faint">
            Students currently in cohort
          </p>
        </Card>

        {/* Cohort Tests Published */}
        <Card className="bg-white border-mist p-5 flex flex-col justify-between shadow-soft">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-ink-faint">
              Tests Published
            </span>
            <FileText className="w-4 h-4 text-sky-600" />
          </div>
          <div className="my-2">
            <span className="text-3xl font-extrabold font-display text-sky-600">
              {cohortSummary?.total_published ?? 0}
            </span>
          </div>
          <p className="text-[10px] text-ink-faint">
            {cohortSummary?.total_quizzes ? `Out of ${cohortSummary.total_quizzes} total tests` : "Live exam series drills"}
          </p>
        </Card>

        {/* Total Test Submissions */}
        <Card className="bg-white border-mist p-5 flex flex-col justify-between shadow-soft">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-ink-faint">
              Total Submissions
            </span>
            <CheckCircle2 className="w-4 h-4 text-moss" />
          </div>
          <div className="my-2">
            <span className="text-3xl font-extrabold font-display text-moss">
              {cohortSummary?.total_attempts ?? 0}
            </span>
          </div>
          <p className="text-[10px] text-ink-faint">
            Evaluated quiz attempts
          </p>
        </Card>

        {/* Cohort Average Exam Score */}
        <Card className="bg-white border-mist p-5 flex flex-col justify-between shadow-soft">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-ink-faint">
              Cohort Avg Score
            </span>
            <Trophy className="w-4 h-4 text-amber" />
          </div>
          <div className="my-2">
            <span className="text-3xl font-extrabold font-display text-amber">
              {cohortSummary?.cohort_average_percentage !== null && cohortSummary?.cohort_average_percentage !== undefined
                ? `${cohortSummary.cohort_average_percentage}%`
                : "—"}
            </span>
          </div>
          <p className="text-[10px] text-ink-faint">
            Overall cohort test accuracy
          </p>
        </Card>
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
