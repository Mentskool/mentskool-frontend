"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuthStore } from "@/store/authStore";
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
      alert(err.detail || "Failed to publish quiz");
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
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <Card variant="default" className="p-4 bg-white border-mist shadow-soft">
                <div className="text-[11px] font-bold text-ink-faint uppercase">Authored</div>
                <div className="text-xl font-black text-ink font-display mt-0.5">
                  {mentorQuizzes.total} Tests
                </div>
              </Card>

              <Card variant="default" className="p-4 bg-white border-mist shadow-soft">
                <div className="text-[11px] font-bold text-ink-faint uppercase">Published</div>
                <div className="text-xl font-black text-blue-700 font-display mt-0.5">
                  {mentorQuizzes.items.filter((q) => q.status === "PUBLISHED").length} Live
                </div>
              </Card>

              <Card variant="default" className="p-4 bg-white border-mist shadow-soft">
                <div className="text-[11px] font-bold text-ink-faint uppercase">Drafts & Scheduled</div>
                <div className="text-xl font-black text-amber-700 font-display mt-0.5">
                  {mentorQuizzes.items.filter((q) => q.status !== "PUBLISHED").length} Tests
                </div>
              </Card>

              <Card variant="default" className="p-4 bg-white border-mist shadow-soft">
                <div className="text-[11px] font-bold text-ink-faint uppercase">Cohort Attempts</div>
                <div className="text-xl font-black text-sky-800 font-display mt-0.5">
                  {mentorQuizzes.items.reduce((sum, q) => sum + (q.attempt_count || 0), 0)} Submissions
                </div>
              </Card>
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

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-ink-muted">
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
            <Card
              variant="default"
              className="p-5 bg-gradient-to-r from-sky-50/50 via-white to-sky-50/20 border-sky-100 shadow-soft flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-900 uppercase tracking-wider">
                  <Award className="w-4 h-4 text-sky-600" />
                  Cohort Exam Performance
                </div>
                <div className="flex items-baseline gap-4 pt-1">
                  <div>
                    <span className="text-2xl font-black font-display text-ink">
                      {studentRanking.average_percentage !== null &&
                      studentRanking.average_percentage !== undefined
                        ? `${studentRanking.average_percentage}%`
                        : "No data yet"}
                    </span>
                    <span className="text-xs text-ink-muted ml-1.5">Average Score</span>
                  </div>

                  {studentRanking.rank && (
                    <div className="border-l border-sky-200 pl-4">
                      <span className="text-xl font-bold font-display text-sky-800">
                        Rank #{studentRanking.rank}
                      </span>
                      <span className="text-xs text-ink-muted ml-1">
                        of {studentRanking.cohort_size} cohort peers
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <Link href="/dashboard/efficiency">
                <Button variant="secondary" size="sm" className="rounded-xl border-sky-200 text-sky-800">
                  Inspect on Efficiency Page →
                </Button>
              </Link>
            </Card>
          )}

          {studentLoading ? (
            <div className="py-16 text-center text-ink-faint animate-pulse">
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
              <h2 className="text-sm font-bold text-ink uppercase tracking-wider">
                Assigned Problem Sets ({studentQuizzes.length})
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {studentQuizzes.map((quiz) => (
                  <Card
                    key={quiz.id}
                    variant="default"
                    className="p-5 bg-white border-mist shadow-soft space-y-4 flex flex-col justify-between hover:border-sky-300 transition-colors"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[11px] font-bold text-sky-700 uppercase tracking-wider">
                          Mentor: {quiz.mentor_name}
                        </span>
                        {quiz.has_attempted ? (
                          <Badge variant="SUBMITTED">Completed</Badge>
                        ) : quiz.is_deadline_passed ? (
                          <Badge variant="EXPIRED">Deadline Passed</Badge>
                        ) : (
                          <Badge variant="ACTIVE">Available</Badge>
                        )}
                      </div>

                      <h3 className="text-base font-bold font-display text-ink leading-snug">
                        {quiz.title}
                      </h3>

                      {quiz.description && (
                        <p className="text-xs text-ink-muted line-clamp-2 leading-relaxed">
                          {quiz.description}
                        </p>
                      )}
                    </div>

                    <div className="space-y-3 pt-3 border-t border-mist text-xs text-ink-muted">
                      <div className="flex items-center justify-between">
                        <span>{quiz.question_count} Questions • {quiz.total_marks} Marks</span>
                        <span>+{quiz.default_positive_marks} / -{quiz.default_negative_marks}</span>
                      </div>

                      <div className="flex items-center gap-1.5 text-[11px]">
                        <Clock className="w-3.5 h-3.5 text-sky-600" />
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
                            <Button variant="secondary" size="sm" className="w-full rounded-xl">
                              View Results & Key
                            </Button>
                          </Link>
                        ) : quiz.is_attemptable ? (
                          <Link href={`/quizzes/${quiz.id}`} className="flex-1">
                            <Button variant="primary" size="sm" className="w-full rounded-xl shadow-soft">
                              Attempt Quiz →
                            </Button>
                          </Link>
                        ) : (
                          <Button variant="secondary" size="sm" disabled className="flex-1 rounded-xl opacity-60">
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
                  </Card>
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
