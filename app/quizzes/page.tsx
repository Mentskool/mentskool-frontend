"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuthStore } from "@/store/authStore";
import { getUserFriendlyError } from "@/lib/error-utils";
import {
  useMentorQuizzes,
  usePublishQuiz,
  useStudentQuizRanking,
  useStudentQuizzes,
} from "@/hooks/useQuizzes";
import { QuizCreateModal } from "@/components/QuizCreateModal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import {
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  Edit,
  ExternalLink,
  Plus,
  Send,
  Trophy,
  Users,
} from "lucide-react";

export default function QuizzesPage() {
  const router = useRouter();
  const { user, isAuthenticated } = useAuthStore();
  const isMentor = user?.role === "MENTOR" || user?.role === "ADMIN";

  // Modal state for mentor quiz creation
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  // Queries
  const {
    data: mentorQuizzes,
    isLoading: mentorLoading,
    refetch: refetchMentorQuizzes,
  } = useMentorQuizzes(isMentor ? user?.id : undefined);

  const {
    data: studentQuizzes,
    isLoading: studentLoading,
    refetch: refetchStudentQuizzes,
  } = useStudentQuizzes();

  const { data: studentRanking } = useStudentQuizRanking(!isMentor ? user?.id : undefined);
  const publishMutation = usePublishQuiz();

  const handlePublishQuick = async (quizId: string) => {
    try {
      await publishMutation.mutateAsync(quizId);
      refetchMentorQuizzes();
    } catch (err: any) {
      alert(getUserFriendlyError(err, "Failed to publish quiz. Please try again."));
    }
  };

  if (!isAuthenticated || !user) {
    return (
      <div className="max-w-4xl mx-auto py-16 text-center space-y-4">
        <h2 className="text-xl font-bold font-display text-ink">Sign In Required</h2>
        <p className="text-sm text-ink-muted">
          Please sign in to access your JEE, NEET, and GATE weekly exam drills.
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
    <div className="max-w-5xl mx-auto py-8 space-y-8 animate-fade-in">
      {/* Header Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-sky-50 via-blue-50/40 to-white border border-blue-100/80 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-soft">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-blue-100/70 border border-blue-200 text-[11px] font-bold text-blue-900 uppercase tracking-wider mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
            Exam Engine • JEE / NEET / GATE Pattern
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-ink tracking-tight">
            {isMentor ? "Cohort Exam Quizzes" : "Adaptive Practice Quizzes"}
          </h1>
          <p className="text-xs sm:text-sm text-ink-muted mt-1.5">
            {isMentor
              ? "Author speed drills with LaTeX math, photo/OCR extraction, and instant server-side grading."
              : "Calibrated problem sets assigned by your mentors. Every response is verified server-side."}
          </p>
        </div>

        {isMentor && (
          <Button
            variant="primary"
            size="md"
            onClick={() => setIsCreateModalOpen(true)}
            className="rounded-xl shadow-soft whitespace-nowrap"
          >
            <Plus className="w-4 h-4 mr-1.5" />
            Create Exam Quiz
          </Button>
        )}
      </div>

      {/* ==================================================================== */}
      {/* MENTOR DASHBOARD VIEW */}
      {/* ==================================================================== */}
      {isMentor ? (
        <div className="space-y-6">
          {/* Quick Metrics */}
          {mentorQuizzes && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-blue-200/90 border-t-4 border-t-blue-500 shadow-xs hover:shadow-md transition-all">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Authored</div>
                <div className="text-xl sm:text-2xl font-black text-slate-900 font-display mt-0.5">
                  {mentorQuizzes.total} Tests
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-emerald-200/90 border-t-4 border-t-emerald-500 shadow-xs hover:shadow-md transition-all">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Published</div>
                <div className="text-xl sm:text-2xl font-black text-emerald-700 font-display mt-0.5">
                  {mentorQuizzes.items.filter((q) => q.status === "PUBLISHED").length} Live
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-amber-200/90 border-t-4 border-t-amber-500 shadow-xs hover:shadow-md transition-all">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Drafts & Scheduled</div>
                <div className="text-xl sm:text-2xl font-black text-amber-700 font-display mt-0.5">
                  {mentorQuizzes.items.filter((q) => q.status !== "PUBLISHED").length} Tests
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-indigo-200/90 border-t-4 border-t-indigo-500 shadow-xs hover:shadow-md transition-all">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Cohort Attempts</div>
                <div className="text-xl sm:text-2xl font-black text-indigo-700 font-display mt-0.5">
                  {mentorQuizzes.items.reduce((sum, q) => sum + (q.attempt_count || 0), 0)} Submissions
                </div>
              </div>
            </div>
          )}

          {mentorLoading ? (
            <div className="py-16 text-center text-ink-faint animate-pulse">
              Loading authored quizzes...
            </div>
          ) : !mentorQuizzes || mentorQuizzes.items.length === 0 ? (
            <EmptyState
              icon={<BookOpen className="w-12 h-12 text-sky-500" />}
              title="No Quizzes Authored Yet"
              description="Create diagnostic tests calibrated to JEE, NEET, or GATE exam patterns with inline LaTeX, photo/OCR capture, or bulk CSV upload."
              actionLabel="Create First Quiz"
              onAction={() => setIsCreateModalOpen(true)}
            />
          ) : (
            <div className="space-y-4">
              <h2 className="text-sm font-bold text-ink uppercase tracking-wider">
                Authored Problem Sets
              </h2>

              <div className="grid grid-cols-1 gap-4">
                {mentorQuizzes.items.map((quiz) => (
                  <Card
                    key={quiz.id}
                    variant="default"
                    className="p-5 bg-white border-mist shadow-soft space-y-4 hover:border-sky-300 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-mist">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-base font-bold font-display text-ink">
                            {quiz.title}
                          </h3>
                          <Badge variant={quiz.status}>{quiz.status}</Badge>
                        </div>
                        {quiz.description && (
                          <p className="text-xs text-ink-muted mt-1 line-clamp-2">
                            {quiz.description}
                          </p>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        {quiz.status === "PUBLISHED" && (
                          <Link href={`/quizzes/${quiz.id}/leaderboard`}>
                            <Button variant="secondary" size="sm" className="rounded-xl">
                              <Trophy className="w-3.5 h-3.5 mr-1 text-amber-500" />
                              Leaderboard ({quiz.attempt_count})
                            </Button>
                          </Link>
                        )}

                        {quiz.status !== "PUBLISHED" && (
                          <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => handlePublishQuick(quiz.id)}
                            className="rounded-lg text-blue-700 hover:bg-blue-50 border-blue-200"
                          >
                            <Send className="w-3.5 h-3.5 mr-1" />
                            Publish Now
                          </Button>
                        )}

                        <Link href={`/quizzes/${quiz.id}/edit`}>
                          <Button variant="primary" size="sm" className="rounded-lg">
                            <Edit className="w-3.5 h-3.5 mr-1" />
                            Question Builder
                          </Button>
                        </Link>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-xs text-ink-muted">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-ink-faint block">
                          Questions
                        </span>
                        <span className="font-semibold text-ink">
                          {quiz.question_count} Questions
                        </span>
                      </div>

                      <div>
                        <span className="text-[10px] uppercase font-bold text-ink-faint block">
                          Total Marks
                        </span>
                        <span className="font-semibold text-ink">{quiz.total_marks} Marks</span>
                      </div>

                      <div>
                        <span className="text-[10px] uppercase font-bold text-ink-faint block">
                          Duration
                        </span>
                        <span className="font-semibold text-sky-800">
                          {quiz.duration_minutes ? `${quiz.duration_minutes} min` : "Untimed"}
                        </span>
                      </div>

                      <div>
                        <span className="text-[10px] uppercase font-bold text-ink-faint block">
                          Marking Scheme
                        </span>
                        <span className="font-semibold text-ink">
                          +{quiz.default_positive_marks} / -{quiz.default_negative_marks}
                        </span>
                      </div>

                      <div>
                        <span className="text-[10px] uppercase font-bold text-ink-faint block">
                          Deadline
                        </span>
                        <span className="font-semibold text-ink">
                          {quiz.has_deadline && quiz.deadline_at
                            ? new Date(quiz.deadline_at).toLocaleDateString()
                            : "No cutoff"}
                        </span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        /* ==================================================================== */
        /* STUDENT VIEW */
        /* ==================================================================== */
        <div className="space-y-6">
          {/* Overall Quiz Ranking Card */}
          {studentRanking && (
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all overflow-hidden">
              <div className="bg-gradient-to-r from-slate-50 to-blue-50/30 px-5 py-3 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-blue-100/80 flex items-center justify-center text-blue-700">
                    <Award className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Cohort Exam Performance
                  </span>
                </div>
                <Link href="/dashboard/efficiency">
                  <span className="text-xs font-bold text-blue-600 hover:underline">
                    Efficiency Dashboard →
                  </span>
                </Link>
              </div>

              <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-baseline gap-6 flex-wrap">
                  <div>
                    <span className="text-2xl font-black font-display text-slate-900">
                      {studentRanking.average_percentage !== null &&
                      studentRanking.average_percentage !== undefined
                        ? `${studentRanking.average_percentage}%`
                        : "No data yet"}
                    </span>
                    <span className="text-xs text-slate-500 ml-1.5 font-medium">Average Score</span>
                  </div>

                  {studentRanking.rank && (
                    <div className="border-l border-slate-200 pl-6">
                      <span className="text-2xl font-bold font-display text-blue-600">
                        Rank #{studentRanking.rank}
                      </span>
                      <span className="text-xs text-slate-500 ml-1.5 font-medium">
                        of {studentRanking.cohort_size} cohort peers
                      </span>
                    </div>
                  )}
                </div>

                <Link href="/dashboard/efficiency">
                  <Button variant="secondary" size="sm" className="rounded-xl border-slate-200 text-slate-700 text-xs font-semibold">
                    Inspect on Efficiency Page →
                  </Button>
                </Link>
              </div>
            </div>
          )}

          {studentLoading ? (
            <div className="py-16 text-center text-slate-400 animate-pulse">
              Loading available quizzes...
            </div>
          ) : !studentQuizzes || studentQuizzes.length === 0 ? (
            <EmptyState
              icon={<BookOpen className="w-12 h-12 text-sky-500" />}
              title="No Quizzes Assigned Yet"
              description="Your subscribed mentors have not published any weekly diagnostic quizzes yet. Check back soon or explore available mentors."
              actionLabel="Explore Mentors"
              onAction={() => router.push("/mentors")}
            />
          ) : (
            <div className="space-y-4">
              <h2 className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                Assigned Problem Sets ({studentQuizzes.length})
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {studentQuizzes.map((quiz) => (
                  <div
                    key={quiz.id}
                    className={`bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-300 transition-all overflow-hidden flex flex-col justify-between ${
                      quiz.has_attempted
                        ? "border-l-4 border-l-emerald-500"
                        : quiz.is_attemptable
                          ? "border-l-4 border-l-blue-500"
                          : "border-l-4 border-l-slate-300"
                    }`}
                  >
                    <div>
                      {/* Card Header Strip with Background */}
                      <div className="bg-gradient-to-r from-slate-50 to-blue-50/30 px-5 py-3 border-b border-slate-100 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-md bg-blue-100/80 flex items-center justify-center text-blue-700">
                            <BookOpen className="w-3 h-3" />
                          </div>
                          <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">
                            Mentor: {quiz.mentor_name}
                          </span>
                        </div>

                        {quiz.has_attempted ? (
                          <span className="text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                            Completed
                          </span>
                        ) : quiz.is_deadline_passed ? (
                          <span className="text-[10px] font-bold bg-slate-100 text-slate-600 border border-slate-200 px-2.5 py-0.5 rounded-full">
                            Deadline Passed
                          </span>
                        ) : (
                          <span className="text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200 px-2.5 py-0.5 rounded-full">
                            Available
                          </span>
                        )}
                      </div>

                      {/* Card Body */}
                      <div className="p-5 space-y-2">
                        <h3 className="text-base font-bold font-display text-slate-900 leading-snug">
                          {quiz.title}
                        </h3>

                        {quiz.description && (
                          <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                            {quiz.description}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="p-5 pt-0 space-y-3">
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                        <span className="font-medium">{quiz.question_count} Questions • {quiz.total_marks} Marks</span>
                        <span className="inline-flex items-center gap-1 font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded text-[11px]">
                          <Clock className="w-3 h-3" />
                          {quiz.duration_minutes ? `${quiz.duration_minutes} min` : "Untimed"}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                        <Calendar className="w-3.5 h-3.5 text-blue-600" />
                        <span>
                          {quiz.has_deadline && quiz.deadline_at
                            ? `Deadline: ${new Date(quiz.deadline_at).toLocaleDateString()}`
                            : "No cutoff deadline"}
                        </span>
                      </div>

                      {/* Action buttons */}
                      <div className="flex items-center gap-2 pt-1">
                        {quiz.has_attempted ? (
                          <Link href={`/quizzes/${quiz.id}`} className="flex-1">
                            <Button variant="secondary" size="sm" className="w-full rounded-xl text-xs font-semibold">
                              View Results & Key
                            </Button>
                          </Link>
                        ) : quiz.is_attemptable ? (
                          <Link href={`/quizzes/${quiz.id}`} className="flex-1">
                            <Button variant="primary" size="sm" className="w-full rounded-xl shadow-xs text-xs font-semibold">
                              Attempt Quiz →
                            </Button>
                          </Link>
                        ) : (
                          <Button variant="secondary" size="sm" disabled className="flex-1 rounded-xl opacity-60 text-xs">
                            Closed
                          </Button>
                        )}

                        <Link href={`/quizzes/${quiz.id}/leaderboard`}>
                          <Button variant="secondary" size="sm" className="rounded-xl px-2.5" title="Leaderboard">
                            <Trophy className="w-4 h-4 text-amber-500" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Modal for Creating New Quiz */}
      {isMentor && (
        <QuizCreateModal
          isOpen={isCreateModalOpen}
          onClose={() => setIsCreateModalOpen(false)}
          onCreated={(newQuizId) => {
            router.push(`/quizzes/${newQuizId}/edit`);
          }}
        />
      )}
    </div>
  );
}
