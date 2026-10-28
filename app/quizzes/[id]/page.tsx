"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useAuthStore } from "@/store/authStore";
import { useQuiz, useStartQuizAttempt, useSubmitQuizAttempt } from "@/hooks/useQuizzes";
import { MathText } from "@/components/MathText";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import {
  AlertCircle,
  ArrowLeft,
  Award,
  Bookmark,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  FileText,
  HelpCircle,
  Info,
  LogIn,
  Maximize2,
  Minimize2,
  Play,
  RotateCcw,
  Send,
  Timer,
  Trophy,
  User as UserIcon,
  X,
  XCircle,
} from "lucide-react";

type QuestionStatus =
  | "NOT_VISITED"
  | "NOT_ANSWERED"
  | "ANSWERED"
  | "MARKED_FOR_REVIEW"
  | "ANSWERED_AND_MARKED";

export default function QuizDetailPage() {
  const params = useParams();
  const router = useRouter();
  const quizId = params.id as string;
  const { user, isAuthenticated, isLoading: authLoading } = useAuthStore();

  const { data: quiz, isLoading, isError, error, refetch } = useQuiz(quizId);
  const startAttemptMutation = useStartQuizAttempt();
  const submitAttemptMutation = useSubmitQuizAttempt();

  // Navigation & Question State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questionStatuses, setQuestionStatuses] = useState<Record<string, QuestionStatus>>({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Modals for CBT test interface
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [isQuestionPaperOpen, setIsQuestionPaperOpen] = useState(false);
  const [isInstructionsOpen, setIsInstructionsOpen] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [startError, setStartError] = useState("");
  const [submittedResult, setSubmittedResult] = useState<any>(null);

  // Local answer state: questionId -> { selectedOptionIds: string[]; natAnswer: string }
  const [answers, setAnswers] = useState<
    Record<string, { selectedOptionIds: string[]; natAnswer: string }>
  >({});

  // Timer states
  const [timeLeftSeconds, setTimeLeftSeconds] = useState<number | null>(null);
  const [isTimeUpModalOpen, setIsTimeUpModalOpen] = useState(false);
  const [isAutoSubmitting, setIsAutoSubmitting] = useState(false);

  // Derived state
  const isMentor = user?.role === "MENTOR" || user?.role === "ADMIN";
  const isSubmitted = Boolean(quiz?.attempt_status === "SUBMITTED" || submittedResult);
  const isInProgress = Boolean(quiz?.attempt_status === "IN_PROGRESS" && !isSubmitted);

  // Initialize question statuses when quiz questions are loaded
  useEffect(() => {
    if (quiz?.questions && quiz.questions.length > 0) {
      setQuestionStatuses((prev) => {
        const next = { ...prev };
        quiz.questions.forEach((q, idx) => {
          if (!next[q.id]) {
            next[q.id] = idx === 0 ? "NOT_ANSWERED" : "NOT_VISITED";
          }
        });
        return next;
      });
    }
  }, [quiz?.questions]);

  // Synchronized countdown timer
  useEffect(() => {
    if (!isInProgress || !quiz?.duration_minutes) {
      setTimeLeftSeconds(null);
      return;
    }

    const durationMs = quiz.duration_minutes * 60 * 1000;
    const startedTimestamp = quiz.attempt_started_at
      ? new Date(quiz.attempt_started_at).getTime()
      : Date.now();
    const expiresAt = startedTimestamp + durationMs;

    const tick = () => {
      const now = Date.now();
      const remainingSec = Math.max(0, Math.floor((expiresAt - now) / 1000));
      setTimeLeftSeconds(remainingSec);

      if (remainingSec <= 0) {
        setIsTimeUpModalOpen(true);
      }
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [isInProgress, quiz?.duration_minutes, quiz?.attempt_started_at]);

  // Auto-submit when time is up
  const hasAutoSubmittedRef = useRef(false);
  useEffect(() => {
    if (
      timeLeftSeconds === 0 &&
      isInProgress &&
      !isSubmitted &&
      !hasAutoSubmittedRef.current
    ) {
      hasAutoSubmittedRef.current = true;
      setIsAutoSubmitting(true);
      handleSubmitQuiz();
    }
  }, [timeLeftSeconds, isInProgress, isSubmitted]);

  // Format seconds into HH:MM:SS or MM:SS
  const formatTimer = (totalSeconds: number | null) => {
    if (totalSeconds === null) return "--:--";
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  // Helper to determine if a question has any answer entered
  const isQuestionAnswered = (qId: string) => {
    if (!quiz?.questions) return false;
    const q = quiz.questions.find((item) => item.id === qId);
    if (!q) return false;
    const a = answers[qId];
    if (q.question_type === "NAT") {
      return Boolean(a && a.natAnswer && a.natAnswer.trim() !== "");
    }
    return Boolean(a && a.selectedOptionIds && a.selectedOptionIds.length > 0);
  };

  // Status counts for Legend
  const legendCounts = useMemo(() => {
    if (!quiz?.questions) {
      return {
        answered: 0,
        notAnswered: 0,
        notVisited: 0,
        markedForReview: 0,
        answeredAndMarked: 0,
      };
    }

    let answered = 0;
    let notAnswered = 0;
    let notVisited = 0;
    let markedForReview = 0;
    let answeredAndMarked = 0;

    quiz.questions.forEach((q, idx) => {
      const s = questionStatuses[q.id] || (idx === 0 ? "NOT_ANSWERED" : "NOT_VISITED");
      if (s === "ANSWERED") answered++;
      else if (s === "NOT_ANSWERED") notAnswered++;
      else if (s === "MARKED_FOR_REVIEW") markedForReview++;
      else if (s === "ANSWERED_AND_MARKED") answeredAndMarked++;
      else notVisited++;
    });

    return { answered, notAnswered, notVisited, markedForReview, answeredAndMarked };
  }, [quiz?.questions, questionStatuses]);

  // Total answered count
  const totalAnsweredCount = useMemo(() => {
    return legendCounts.answered + legendCounts.answeredAndMarked;
  }, [legendCounts]);

  // Option selection handlers
  const handleSingleOptionSelect = (qId: string, optionId: string) => {
    setAnswers((prev) => ({
      ...prev,
      [qId]: {
        selectedOptionIds: [optionId],
        natAnswer: prev[qId]?.natAnswer || "",
      },
    }));
  };

  const handleMultipleOptionToggle = (qId: string, optionId: string) => {
    setAnswers((prev) => {
      const current = prev[qId]?.selectedOptionIds || [];
      const updated = current.includes(optionId)
        ? current.filter((id) => id !== optionId)
        : [...current, optionId];
      return {
        ...prev,
        [qId]: {
          selectedOptionIds: updated,
          natAnswer: prev[qId]?.natAnswer || "",
        },
      };
    });
  };

  const handleNatAnswerChange = (qId: string, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [qId]: {
        selectedOptionIds: prev[qId]?.selectedOptionIds || [],
        natAnswer: value,
      },
    }));
  };

  // CBT Exam Actions
  const handleSaveAndNext = () => {
    if (!quiz?.questions) return;
    const currentQ = quiz.questions[currentQuestionIndex];
    const answered = isQuestionAnswered(currentQ.id);

    setQuestionStatuses((prev) => ({
      ...prev,
      [currentQ.id]: answered ? "ANSWERED" : "NOT_ANSWERED",
    }));

    if (currentQuestionIndex < quiz.questions.length - 1) {
      const nextQ = quiz.questions[currentQuestionIndex + 1];
      setQuestionStatuses((prev) => ({
        ...prev,
        [nextQ.id]: prev[nextQ.id] === "NOT_VISITED" ? "NOT_ANSWERED" : prev[nextQ.id],
      }));
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handleMarkForReviewAndNext = () => {
    if (!quiz?.questions) return;
    const currentQ = quiz.questions[currentQuestionIndex];
    const answered = isQuestionAnswered(currentQ.id);

    setQuestionStatuses((prev) => ({
      ...prev,
      [currentQ.id]: answered ? "ANSWERED_AND_MARKED" : "MARKED_FOR_REVIEW",
    }));

    if (currentQuestionIndex < quiz.questions.length - 1) {
      const nextQ = quiz.questions[currentQuestionIndex + 1];
      setQuestionStatuses((prev) => ({
        ...prev,
        [nextQ.id]: prev[nextQ.id] === "NOT_VISITED" ? "NOT_ANSWERED" : prev[nextQ.id],
      }));
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handleClearResponse = () => {
    if (!quiz?.questions) return;
    const currentQ = quiz.questions[currentQuestionIndex];

    setAnswers((prev) => ({
      ...prev,
      [currentQ.id]: {
        selectedOptionIds: [],
        natAnswer: "",
      },
    }));

    setQuestionStatuses((prev) => {
      const cur = prev[currentQ.id];
      if (cur === "ANSWERED_AND_MARKED") return { ...prev, [currentQ.id]: "MARKED_FOR_REVIEW" };
      return { ...prev, [currentQ.id]: "NOT_ANSWERED" };
    });
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0 && quiz?.questions) {
      const currentQ = quiz.questions[currentQuestionIndex];
      const prevQ = quiz.questions[currentQuestionIndex - 1];
      const answered = isQuestionAnswered(currentQ.id);

      setQuestionStatuses((prev) => {
        const curStatus = prev[currentQ.id];
        let newStatus = curStatus;
        if (curStatus !== "MARKED_FOR_REVIEW" && curStatus !== "ANSWERED_AND_MARKED") {
          newStatus = answered ? "ANSWERED" : "NOT_ANSWERED";
        }
        return {
          ...prev,
          [currentQ.id]: newStatus,
          [prevQ.id]: prev[prevQ.id] === "NOT_VISITED" ? "NOT_ANSWERED" : prev[prevQ.id],
        };
      });

      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleJumpToQuestion = (targetIndex: number) => {
    if (!quiz?.questions || targetIndex === currentQuestionIndex) return;
    const currentQ = quiz.questions[currentQuestionIndex];
    const targetQ = quiz.questions[targetIndex];
    const answered = isQuestionAnswered(currentQ.id);

    setQuestionStatuses((prev) => {
      const curStatus = prev[currentQ.id];
      let newCurStatus = curStatus;
      if (curStatus !== "MARKED_FOR_REVIEW" && curStatus !== "ANSWERED_AND_MARKED") {
        newCurStatus = answered ? "ANSWERED" : "NOT_ANSWERED";
      }
      return {
        ...prev,
        [currentQ.id]: newCurStatus,
        [targetQ.id]: prev[targetQ.id] === "NOT_VISITED" ? "NOT_ANSWERED" : prev[targetQ.id],
      };
    });

    setCurrentQuestionIndex(targetIndex);
  };

  // Start attempt
  const handleStartAttempt = async () => {
    if (!quiz) return;
    setStartError("");
    try {
      await startAttemptMutation.mutateAsync(quiz.id);
      await refetch();
    } catch (err: any) {
      setStartError(
        err.detail || "Unable to start quiz attempt. Please ensure you are enrolled or try again."
      );
    }
  };

  // Submit attempt
  const handleSubmitQuiz = async () => {
    if (!quiz || !quiz.attempt_id) return;
    setSubmitError("");

    const payloadAnswers = quiz.questions.map((q) => {
      const ans = answers[q.id];
      const natVal =
        ans?.natAnswer && !isNaN(Number(ans.natAnswer)) ? Number(ans.natAnswer) : null;
      return {
        question_id: q.id,
        selected_option_ids:
          ans?.selectedOptionIds && ans.selectedOptionIds.length > 0
            ? ans.selectedOptionIds
            : null,
        nat_answer_given: natVal,
      };
    });

    try {
      const result = await submitAttemptMutation.mutateAsync({
        quizId: quiz.id,
        attemptId: quiz.attempt_id,
        answers: payloadAnswers,
      });

      setSubmittedResult(result);
      setIsSubmitModalOpen(false);
      setIsTimeUpModalOpen(false);
      await refetch();
    } catch (err: any) {
      setSubmitError(err.detail || "Failed to submit quiz");
      setIsAutoSubmitting(false);
    }
  };

  // ============================================================================
  // CONDITIONAL GATES (ALL HOOKS CALLED UNCONDITIONALLY ABOVE)
  // ============================================================================

  // 1. Auth Loading State
  if (authLoading) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-4 text-center space-y-4 animate-pulse">
        <div className="w-12 h-12 rounded-2xl bg-sky-100 flex items-center justify-center mx-auto text-sky-600">
          <Clock className="w-6 h-6 animate-spin" />
        </div>
        <p className="text-sm font-medium text-slate-500">Authenticating user session...</p>
      </div>
    );
  }

  // 2. Unauthenticated State
  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto py-16 px-4 space-y-6 animate-fade-in text-center">
        <Card variant="default" className="p-8 bg-white border-slate-200 shadow-sm space-y-5">
          <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center mx-auto text-sky-600">
            <LogIn className="w-7 h-7" />
          </div>

          <div className="space-y-2">
            <h1 className="text-xl font-bold font-display text-slate-900">Sign In to Access Quiz</h1>
            <p className="text-xs text-slate-500 leading-relaxed">
              Diagnostic tests and exams are protected. Please sign in to verify your cohort enrolment
              and record your score.
            </p>
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <Button
              variant="primary"
              size="lg"
              onClick={() => router.push(`/login?redirect=/quizzes/${quizId}`)}
              className="w-full rounded-xl shadow-sm"
            >
              Sign In to Continue →
            </Button>
            <Link href="/quizzes">
              <Button variant="secondary" size="sm" className="w-full rounded-xl">
                Back to All Quizzes
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    );
  }

  // 3. Quiz Data Loading State
  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-4 text-center space-y-4 animate-pulse">
        <div className="w-12 h-12 rounded-2xl bg-sky-100 flex items-center justify-center mx-auto text-sky-600">
          <Award className="w-6 h-6 animate-pulse" />
        </div>
        <p className="text-sm font-medium text-slate-500">Loading exam and questions...</p>
      </div>
    );
  }

  // 4. Error State
  if (isError || !quiz) {
    const errorDetail = (error as any)?.detail || "";
    const isSubscriptionErr =
      errorDetail.toLowerCase().includes("subscription") || (error as any)?.status === 403;

    return (
      <div className="max-w-lg mx-auto py-16 px-4 text-center space-y-6 animate-fade-in">
        <Card variant="default" className="p-8 bg-white border-slate-200 shadow-sm space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center mx-auto text-amber-600">
            <AlertCircle className="w-7 h-7" />
          </div>

          <div className="space-y-1.5">
            <h2 className="text-xl font-bold font-display text-slate-900">
              {isSubscriptionErr ? "Mentor Subscription Required" : "Unable to Load Quiz"}
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              {errorDetail ||
                "This quiz could not be loaded. It may have expired, or you may need an active subscription with the authoring mentor."}
            </p>
          </div>

          <div className="flex items-center justify-center gap-3 pt-3">
            {isSubscriptionErr && (
              <Button
                variant="primary"
                size="md"
                onClick={() => router.push("/mentors")}
                className="rounded-xl shadow-sm"
              >
                Browse Mentors
              </Button>
            )}
            <Link href="/quizzes">
              <Button variant="secondary" size="md" className="rounded-xl">
                Back to Quizzes
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    );
  }

  // Current Question in CBT view
  const currentQuestion = quiz.questions[currentQuestionIndex];
  const currentAns = currentQuestion ? answers[currentQuestion.id] : undefined;

  // Render question palette button shape & style
  const getPaletteButtonClass = (status: QuestionStatus, isCurrent: boolean) => {
    let base =
      "h-9 w-9 sm:h-10 sm:w-10 text-xs font-bold transition-all flex items-center justify-center relative select-none ";

    if (isCurrent) {
      base += "ring-4 ring-sky-400 ring-offset-2 z-20 font-black shadow-md ";
    }

    switch (status) {
      case "ANSWERED":
        return base + "bg-emerald-600 hover:bg-emerald-700 text-white rounded-md shadow-xs";
      case "NOT_ANSWERED":
        return base + "bg-rose-600 hover:bg-rose-700 text-white rounded-t-md rounded-b-xl shadow-xs";
      case "MARKED_FOR_REVIEW":
        return base + "bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-xs";
      case "ANSWERED_AND_MARKED":
        return (
          base +
          "bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-xs after:content-[''] after:w-2.5 after:h-2.5 after:bg-emerald-400 after:border after:border-white after:rounded-full after:absolute after:bottom-0 after:right-0"
        );
      case "NOT_VISITED":
      default:
        return base + "bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-md border border-slate-300";
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      {/* ==================================================================== */}
      {/* VIEW 1: POST-SUBMISSION RESULTS & BREAKDOWN                          */}
      {/* ==================================================================== */}
      {isSubmitted ? (
        <div className="max-w-4xl mx-auto w-full py-6 sm:py-8 px-3 sm:px-4 space-y-6 sm:space-y-8 animate-fade-in">
          {/* Header Banner */}
          <div className="rounded-2xl bg-gradient-to-r from-sky-50 via-blue-50/40 to-white border border-blue-200 p-6 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-blue-100 text-blue-800 text-[11px] font-bold uppercase tracking-wider mb-2">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Quiz Attempt Completed
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
                  {quiz.title} — Results
                </h1>
                <p className="text-xs text-slate-500 mt-1">
                  Submitted • Automatic server-side grading calibrated to standard marking scheme.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Link href={`/quizzes/${quiz.id}/leaderboard`}>
                  <Button variant="primary" size="md" className="rounded-xl shadow-sm">
                    <Trophy className="w-4 h-4 mr-1.5 text-amber-300" />
                    Leaderboard
                  </Button>
                </Link>
                <Link href="/quizzes">
                  <Button variant="secondary" size="md" className="rounded-xl">
                    Back to Quizzes
                  </Button>
                </Link>
              </div>
            </div>

            {/* Scorecard */}
            {submittedResult && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-blue-200/60">
                <div className="p-3 bg-white/80 rounded-xl border border-blue-100">
                  <div className="text-[11px] text-slate-500 uppercase font-bold">Total Score</div>
                  <div className="text-xl font-black text-slate-900 font-display">
                    {submittedResult.total_score}
                  </div>
                </div>

                <div className="p-3 bg-white/80 rounded-xl border border-blue-100">
                  <div className="text-[11px] text-slate-500 uppercase font-bold">Max Marks</div>
                  <div className="text-xl font-black text-slate-900 font-display">
                    {submittedResult.max_score}
                  </div>
                </div>

                <div className="p-3 bg-white/80 rounded-xl border border-blue-100">
                  <div className="text-[11px] text-slate-500 uppercase font-bold">Percentage</div>
                  <div className="text-xl font-black text-blue-700 font-display">
                    {submittedResult.percentage}%
                  </div>
                </div>

                <div className="p-3 bg-white/80 rounded-xl border border-blue-100">
                  <div className="text-[11px] text-slate-500 uppercase font-bold">Status</div>
                  <div className="text-sm font-bold text-slate-900 mt-1">Graded & Recorded</div>
                </div>
              </div>
            )}
          </div>

          {/* Breakdown of Every Question */}
          <div className="space-y-4">
            <h2 className="text-base font-bold font-display text-slate-900">
              Detailed Question Analysis & Answer Key
            </h2>

            {submittedResult?.breakdown ? (
              submittedResult.breakdown.map((item: any, idx: number) => (
                <Card
                  key={item.question_id}
                  variant="default"
                  className={`p-5 bg-white border-2 shadow-sm space-y-4 rounded-xl ${
                    item.is_correct
                      ? "border-blue-200"
                      : item.marks_awarded < 0
                      ? "border-rose-200"
                      : "border-slate-200"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-xs font-bold text-slate-800">
                        {idx + 1}
                      </span>
                      <Badge variant="DEFAULT">
                        {item.question_type === "MCQ_SINGLE"
                          ? "MCQ Single"
                          : item.question_type === "MCQ_MULTIPLE"
                          ? "MCQ Multiple"
                          : "Numerical NAT"}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-2">
                      {item.is_correct ? (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-lg">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Correct (+{item.marks_awarded})
                        </span>
                      ) : item.marks_awarded < 0 ? (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-700 bg-rose-50 border border-rose-200 px-2.5 py-0.5 rounded-lg">
                          <XCircle className="w-3.5 h-3.5" /> Incorrect ({item.marks_awarded})
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-400 bg-slate-50 border border-slate-200 px-2.5 py-0.5 rounded-lg">
                          Unanswered (0.00)
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="text-sm font-medium text-slate-900 leading-relaxed">
                    <MathText text={item.question_text} />
                  </div>

                  {item.question_image_url && (
                    <img
                      src={item.question_image_url}
                      alt="Question diagram"
                      className="max-h-60 rounded-xl border border-slate-200 object-contain"
                    />
                  )}

                  {item.question_type !== "NAT" ? (
                    <div className="space-y-2 pt-2">
                      {item.options.map((opt: any, oIdx: number) => {
                        const isChosen = item.selected_option_ids?.includes(opt.id);
                        const isCorrect = opt.is_correct;

                        let style = "bg-white border-slate-200";
                        if (isCorrect && isChosen) {
                          style = "bg-blue-50/80 border-blue-300 ring-1 ring-blue-400";
                        } else if (isCorrect && !isChosen) {
                          style = "bg-blue-50/40 border-blue-200";
                        } else if (!isCorrect && isChosen) {
                          style = "bg-rose-50/80 border-rose-300 ring-1 ring-rose-400";
                        }

                        return (
                          <div
                            key={opt.id}
                            className={`p-3 rounded-xl border text-xs flex items-center justify-between ${style}`}
                          >
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-slate-500">
                                {String.fromCharCode(65 + oIdx)}.
                              </span>
                              <MathText text={opt.option_text} />
                            </div>

                            <div className="flex items-center gap-1.5">
                              {isChosen && (
                                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-800">
                                  Your Choice
                                </span>
                              )}
                              {isCorrect && (
                                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                                  Correct Key
                                </span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-1.5">
                      <div>
                        Your Answer:{" "}
                        <strong className="font-mono text-slate-900">
                          {item.nat_answer_given !== null && item.nat_answer_given !== undefined
                            ? item.nat_answer_given
                            : "Unanswered"}
                        </strong>
                      </div>
                      <div className="text-blue-800 font-semibold">
                        Correct Numerical Target: {item.nat_answer} (±{item.nat_tolerance || 0})
                      </div>
                    </div>
                  )}
                </Card>
              ))
            ) : (
              quiz.questions.map((q, idx) => (
                <Card
                  key={q.id}
                  variant="default"
                  className="p-5 bg-white border-slate-200 space-y-3 rounded-xl"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">Question {idx + 1}</span>
                    <Badge variant="DEFAULT">{q.question_type}</Badge>
                  </div>
                  <MathText text={q.question_text} />
                  {q.question_type !== "NAT" ? (
                    <div className="space-y-1.5 pt-2">
                      {q.options.map((opt, oIdx) => (
                        <div
                          key={opt.id}
                          className={`p-2.5 rounded-lg border text-xs flex items-center justify-between ${
                            opt.is_correct
                              ? "bg-blue-50 border-blue-300 font-semibold text-blue-900"
                              : "bg-white border-slate-200 text-slate-800"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span>{String.fromCharCode(65 + oIdx)}.</span>
                            <MathText text={opt.option_text} />
                          </div>
                          {opt.is_correct && (
                            <span className="text-[10px] font-bold text-blue-700 bg-blue-100 px-1.5 py-0.5 rounded">
                              Correct Key
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-2.5 bg-slate-50 rounded-lg text-xs">
                      Target Answer: <strong>{q.nat_answer}</strong> (±{q.nat_tolerance})
                    </div>
                  )}
                </Card>
              ))
            )}
          </div>
        </div>
      ) : !isInProgress && !quiz.has_attempted ? (
        /* ==================================================================== */
        /* VIEW 2: QUIZ START LANDING SCREEN                                   */
        /* ==================================================================== */
        <div className="max-w-2xl mx-auto w-full py-8 px-4 space-y-6">
          <Link href="/quizzes">
            <Button variant="secondary" size="sm" className="rounded-xl">
              <ArrowLeft className="w-4 h-4 mr-1.5" />
              Back to Quizzes
            </Button>
          </Link>

          <Card variant="default" className="p-6 sm:p-8 bg-white border-slate-200 shadow-md space-y-6 text-center">
            <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center mx-auto text-sky-600">
              <Award className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-sky-100/70 text-sky-800 text-[11px] font-bold uppercase tracking-wider">
                Computer Based Test (CBT) Assessment
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 tracking-tight">
                {quiz.title}
              </h1>
              {quiz.description && (
                <p className="text-sm text-slate-600 leading-relaxed max-w-lg mx-auto">
                  {quiz.description}
                </p>
              )}
            </div>

            {/* Test Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200 text-left">
              <div>
                <div className="text-[11px] text-slate-400 uppercase font-bold">Questions</div>
                <div className="text-base font-black text-slate-900">{quiz.questions.length} Items</div>
              </div>

              <div>
                <div className="text-[11px] text-slate-400 uppercase font-bold">Duration</div>
                <div className="text-base font-black text-sky-700 flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {quiz.duration_minutes ? `${quiz.duration_minutes} Mins` : "Untimed"}
                </div>
              </div>

              <div>
                <div className="text-[11px] text-slate-400 uppercase font-bold">Marking Scheme</div>
                <div className="text-base font-black text-slate-900">
                  +{quiz.default_positive_marks} / -{quiz.default_negative_marks}
                </div>
              </div>

              <div>
                <div className="text-[11px] text-slate-400 uppercase font-bold">Deadline</div>
                <div className="text-xs font-semibold text-slate-900 mt-0.5">
                  {quiz.has_deadline && quiz.deadline_at
                    ? new Date(quiz.deadline_at).toLocaleDateString()
                    : "No cutoff"}
                </div>
              </div>
            </div>

            {/* Guidelines */}
            <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl text-left text-xs text-amber-900 space-y-1.5">
              <div className="font-bold flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-amber-600" />
                Exam Attempt Guidelines
              </div>
              <ul className="list-disc list-inside space-y-1 text-amber-800 leading-relaxed">
                <li>
                  <strong>One-attempt rule:</strong> Once started, you cannot restart or retake this test.
                </li>
                {quiz.duration_minutes ? (
                  <li>
                    <strong>Timed exam:</strong> You have exactly{" "}
                    <strong>{quiz.duration_minutes} minutes</strong>. The timer starts immediately and
                    the exam will automatically submit when the clock reaches zero.
                  </li>
                ) : (
                  <li>
                    <strong>Untimed practice:</strong> You may take as much time as needed before submitting.
                  </li>
                )}
                <li>
                  <strong>CBT Exam Interface:</strong> Questions are presented one by one with a live Question Palette on the right, status color codes, and Save & Next controls.
                </li>
              </ul>
            </div>

            {startError && (
              <div className="p-3.5 text-xs font-semibold text-rose-700 bg-rose-50 border border-rose-200 rounded-xl flex items-center justify-center gap-2 max-w-lg mx-auto animate-fade-in">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>{startError}</span>
              </div>
            )}

            <div>
              <Button
                variant="primary"
                size="lg"
                onClick={handleStartAttempt}
                isLoading={startAttemptMutation.isPending}
                className="w-full sm:w-auto px-8 rounded-xl shadow-md font-bold text-sm"
              >
                <Play className="w-4 h-4 mr-2" />
                Start Quiz Attempt Now
              </Button>
            </div>
          </Card>
        </div>
      ) : (
        /* ==================================================================== */
        /* VIEW 3: CBT ONLINE EXAMINATION PORTAL (TCS iON / GATE OVERFLOW STYLE) */
        /* ==================================================================== */
        <div className="flex-1 flex flex-col h-screen overflow-hidden bg-slate-100">
          {/* 1. TOP BRANDING & EXAM HEADER */}
          <header className="bg-white border-b border-slate-300 shadow-xs shrink-0 z-30">
            <div className="px-4 py-2 flex items-center justify-between">
              {/* Left branding */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center text-white font-black text-sm">
                    M
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Mentskool CBT Assessment
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium">
                      Organizer: Mentskool
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Title */}
              <div className="hidden md:block text-center max-w-md truncate">
                <h1 className="text-sm font-bold text-slate-900 truncate">{quiz.title}</h1>
              </div>

              {/* Right utility buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsInstructionsOpen(true)}
                  className="px-2.5 py-1 text-xs font-semibold rounded-md border border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-700 flex items-center gap-1.5 transition-colors"
                >
                  <Info className="w-3.5 h-3.5 text-sky-600" />
                  <span className="hidden sm:inline">Instructions</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsQuestionPaperOpen(true)}
                  className="px-2.5 py-1 text-xs font-semibold rounded-md border border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-700 flex items-center gap-1.5 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="hidden sm:inline">Question Paper</span>
                </button>
              </div>
            </div>

            {/* Sub-header: Section Bar & Countdown Timer */}
            <div className="bg-slate-50 border-t border-slate-200 px-4 py-1.5 flex items-center justify-between">
              {/* Left Section Tab */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wide mr-1">
                  Sections:
                </span>
                <div className="px-3 py-1 bg-sky-600 text-white rounded text-xs font-bold flex items-center gap-1.5 shadow-xs">
                  <span>General / Subject</span>
                  <span className="text-[10px] bg-sky-700 px-1.5 py-0.2 rounded-full">
                    {quiz.questions.length} Qs
                  </span>
                </div>
              </div>

              {/* Right Timer */}
              <div className="flex items-center gap-2">
                <div
                  className={`px-3 py-1 rounded-md border flex items-center gap-2 font-mono font-bold text-xs sm:text-sm shadow-xs ${
                    timeLeftSeconds !== null && timeLeftSeconds <= 60
                      ? "bg-rose-50 text-rose-700 border-rose-400 animate-pulse"
                      : timeLeftSeconds !== null && timeLeftSeconds <= 300
                      ? "bg-amber-50 text-amber-800 border-amber-300"
                      : "bg-white text-slate-900 border-slate-300"
                  }`}
                >
                  <Clock className="w-4 h-4 text-sky-600" />
                  <span>
                    Time Left : <strong className="font-mono">{formatTimer(timeLeftSeconds)}</strong>
                  </span>
                </div>
              </div>
            </div>
          </header>

          {/* 2. MAIN TEST WORKSPACE (Split Left Question Area + Right Question Palette) */}
          <div className="flex-1 flex overflow-hidden relative">
            {/* ------------------------------------------------------------------ */}
            {/* LEFT QUESTION PANE                                                 */}
            {/* ------------------------------------------------------------------ */}
            <main className="flex-1 flex flex-col bg-white overflow-hidden">
              {currentQuestion ? (
                <>
                  {/* Question Info Top Bar */}
                  <div className="bg-slate-100/80 border-b border-slate-300 px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-2 shrink-0">
                    <div className="flex items-center gap-3">
                      <div className="text-xs font-bold text-slate-800">
                        Question Type :{" "}
                        <span className="text-sky-700 font-extrabold">
                          {currentQuestion.question_type === "MCQ_SINGLE"
                            ? "Multiple Choice (Single)"
                            : currentQuestion.question_type === "MCQ_MULTIPLE"
                            ? "Multiple Select (MSQ)"
                            : "Numerical Answer Type (NAT)"}
                        </span>
                      </div>
                    </div>

                    <div className="text-xs font-semibold text-slate-600 flex items-center gap-3">
                      <span>
                        Marks for correct answer:{" "}
                        <strong className="text-emerald-700">+{currentQuestion.positive_marks}</strong>
                      </span>
                      <span className="text-slate-300">|</span>
                      <span>
                        Negative Marks:{" "}
                        <strong className="text-rose-700">-{currentQuestion.negative_marks}</strong>
                      </span>
                    </div>
                  </div>

                  {/* Question Header & Sub-Bar */}
                  <div className="bg-white border-b border-slate-200 px-4 sm:px-6 py-2 flex items-center justify-between shrink-0">
                    <h2 className="text-sm font-black text-slate-900 font-display">
                      Question Number. {currentQuestionIndex + 1}
                    </h2>

                    <div className="text-xs text-slate-500 font-medium">
                      Question {currentQuestionIndex + 1} of {quiz.questions.length}
                    </div>
                  </div>

                  {/* Scrollable Question Body & Options Area */}
                  <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6">
                    {/* Question Statement with KaTeX math rendering */}
                    <div className="text-sm sm:text-base text-slate-900 leading-relaxed font-normal bg-white">
                      <MathText text={currentQuestion.question_text} />
                    </div>

                    {/* Question Diagram / Image if uploaded */}
                    {currentQuestion.question_image_url && (
                      <div className="py-2">
                        <img
                          src={currentQuestion.question_image_url}
                          alt={`Diagram for Question ${currentQuestionIndex + 1}`}
                          className="max-h-80 max-w-full rounded-lg border border-slate-300 object-contain mx-auto shadow-xs"
                        />
                      </div>
                    )}

                    {/* Options Selection Area */}
                    <div className="pt-4 border-t border-slate-200 space-y-4">
                      {/* MCQ SINGLE */}
                      {currentQuestion.question_type === "MCQ_SINGLE" && (
                        <div className="space-y-3">
                          {/* Top Quick Radio Row (like GATE Overflow) */}
                          <div className="flex items-center gap-6 py-1 text-xs font-bold text-slate-700">
                            <span>Your Answer:</span>
                            <div className="flex items-center gap-4">
                              {currentQuestion.options.map((opt, oIdx) => {
                                const optLetter = String.fromCharCode(65 + oIdx);
                                const isSelected = currentAns?.selectedOptionIds?.includes(opt.id);
                                return (
                                  <label
                                    key={opt.id}
                                    className="inline-flex items-center gap-1.5 cursor-pointer hover:text-sky-700"
                                  >
                                    <input
                                      type="radio"
                                      name={`question-${currentQuestion.id}`}
                                      checked={isSelected || false}
                                      onChange={() =>
                                        handleSingleOptionSelect(currentQuestion.id, opt.id)
                                      }
                                      className="w-4 h-4 text-sky-600 focus:ring-sky-500 cursor-pointer"
                                    />
                                    <span>{optLetter}</span>
                                  </label>
                                );
                              })}
                            </div>
                          </div>

                          {/* Full Clickable Option Cards */}
                          <div className="space-y-2.5 pt-2">
                            {currentQuestion.options.map((opt, oIdx) => {
                              const optLetter = String.fromCharCode(65 + oIdx);
                              const isSelected = currentAns?.selectedOptionIds?.includes(opt.id);
                              return (
                                <button
                                  type="button"
                                  key={opt.id}
                                  onClick={() =>
                                    handleSingleOptionSelect(currentQuestion.id, opt.id)
                                  }
                                  className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start gap-3.5 ${
                                    isSelected
                                      ? "bg-sky-50/70 border-sky-400 ring-2 ring-sky-500/20 text-slate-900 font-medium"
                                      : "bg-white border-slate-200 hover:bg-slate-50 text-slate-800"
                                  }`}
                                >
                                  <span
                                    className={`w-6 h-6 rounded-full border text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 ${
                                      isSelected
                                        ? "border-sky-600 bg-sky-600 text-white"
                                        : "border-slate-300 text-slate-600 bg-slate-50"
                                    }`}
                                  >
                                    {optLetter}
                                  </span>
                                  <div className="flex-1 text-xs sm:text-sm pt-0.5 leading-normal">
                                    <MathText text={opt.option_text} />
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* MCQ MULTIPLE SELECT */}
                      {currentQuestion.question_type === "MCQ_MULTIPLE" && (
                        <div className="space-y-3">
                          <div className="text-xs font-semibold text-slate-500 italic">
                            Select one or more correct options:
                          </div>

                          <div className="space-y-2.5 pt-1">
                            {currentQuestion.options.map((opt, oIdx) => {
                              const optLetter = String.fromCharCode(65 + oIdx);
                              const isSelected = currentAns?.selectedOptionIds?.includes(opt.id);
                              return (
                                <button
                                  type="button"
                                  key={opt.id}
                                  onClick={() =>
                                    handleMultipleOptionToggle(currentQuestion.id, opt.id)
                                  }
                                  className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start gap-3.5 ${
                                    isSelected
                                      ? "bg-sky-50/70 border-sky-400 ring-2 ring-sky-500/20 text-slate-900 font-medium"
                                      : "bg-white border-slate-200 hover:bg-slate-50 text-slate-800"
                                  }`}
                                >
                                  <span
                                    className={`w-6 h-6 rounded-md border text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 ${
                                      isSelected
                                        ? "border-sky-600 bg-sky-600 text-white"
                                        : "border-slate-300 text-slate-600 bg-slate-50"
                                    }`}
                                  >
                                    {isSelected ? "✓" : optLetter}
                                  </span>
                                  <div className="flex-1 text-xs sm:text-sm pt-0.5 leading-normal">
                                    <MathText text={opt.option_text} />
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* NAT NUMERICAL ENTRY */}
                      {currentQuestion.question_type === "NAT" && (
                        <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-3 max-w-lg">
                          <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                            Your Numerical Answer:
                          </label>
                          <div className="flex items-center gap-3">
                            <input
                              type="number"
                              step="any"
                              value={currentAns?.natAnswer || ""}
                              onChange={(e) =>
                                handleNatAnswerChange(currentQuestion.id, e.target.value)
                              }
                              placeholder="Enter numerical value..."
                              className="w-full sm:w-64 p-3 text-base font-mono text-slate-900 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 shadow-xs"
                            />
                            {currentAns?.natAnswer && (
                              <button
                                type="button"
                                onClick={() => handleNatAnswerChange(currentQuestion.id, "")}
                                className="text-xs text-rose-600 hover:underline font-semibold"
                              >
                                Clear
                              </button>
                            )}
                          </div>
                          <p className="text-[11px] text-slate-500 leading-relaxed">
                            Integers or decimal values accepted. Evaluation is calibrated within mentor-configured tolerance.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* 3. BOTTOM FIXED ACTION & NAVIGATION BAR */}
                  <footer className="bg-slate-100 border-t border-slate-300 px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-2.5 shrink-0 z-20">
                    {/* Left Actions */}
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={handleMarkForReviewAndNext}
                        className="px-3.5 py-2 text-xs font-bold rounded-lg border border-purple-300 bg-purple-50 hover:bg-purple-100 text-purple-800 flex items-center gap-1.5 transition-colors shadow-xs"
                        title="Mark for review and move to next question"
                      >
                        <Bookmark className="w-3.5 h-3.5 text-purple-600" />
                        <span>MARK FOR REVIEW & NEXT</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleClearResponse}
                        className="px-3.5 py-2 text-xs font-semibold rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 flex items-center gap-1.5 transition-colors shadow-xs"
                        title="Clear answer for this question"
                      >
                        <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
                        <span>CLEAR RESPONSE</span>
                      </button>
                    </div>

                    {/* Right Navigation & Submit Actions */}
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={handlePrevious}
                        disabled={currentQuestionIndex === 0}
                        className="px-4 py-2 text-xs font-semibold rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 disabled:opacity-40 disabled:pointer-events-none transition-colors shadow-xs"
                      >
                        PREVIOUS
                      </button>

                      <button
                        type="button"
                        onClick={handleSaveAndNext}
                        className="px-5 py-2 text-xs font-bold rounded-lg bg-sky-600 hover:bg-sky-700 text-white transition-colors shadow-xs flex items-center gap-1"
                      >
                        <span>SAVE & NEXT</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      <button
                        type="button"
                        onClick={() => setIsSubmitModalOpen(true)}
                        className="px-5 py-2 text-xs font-bold rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white transition-colors shadow-xs flex items-center gap-1.5 ml-2"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>SUBMIT</span>
                      </button>
                    </div>
                  </footer>
                </>
              ) : null}
            </main>

            {/* TOGGLE SIDEBAR BUTTON (COLLAPSE/EXPAND ARROW) */}
            <button
              type="button"
              onClick={() => setIsSidebarOpen((prev) => !prev)}
              className="hidden md:flex absolute top-1/2 -translate-y-1/2 z-30 w-5 h-12 bg-slate-700 text-white rounded-l-md items-center justify-center hover:bg-slate-800 shadow-md transition-all"
              style={{
                right: isSidebarOpen ? "320px" : "0px",
              }}
              title={isSidebarOpen ? "Collapse Question Palette" : "Expand Question Palette"}
            >
              {isSidebarOpen ? (
                <ChevronRight className="w-4 h-4" />
              ) : (
                <ChevronLeft className="w-4 h-4" />
              )}
            </button>

            {/* ------------------------------------------------------------------ */}
            {/* RIGHT SIDEBAR: CANDIDATE INFO, LEGEND & QUESTION PALETTE           */}
            {/* ------------------------------------------------------------------ */}
            <aside
              className={`${
                isSidebarOpen ? "flex" : "hidden"
              } w-full md:w-80 lg:w-80 bg-white flex-col border-l border-slate-300 overflow-y-auto shrink-0 select-none`}
            >
              {/* Candidate Info Card */}
              <div className="p-3 bg-slate-50 border-b border-slate-200 flex items-center gap-3">
                <div className="w-11 h-11 rounded-lg bg-sky-100 border border-sky-200 flex items-center justify-center text-sky-700 shrink-0 overflow-hidden">
                  {user?.avatar_url ? (
                    <img
                      src={user.avatar_url}
                      alt="Candidate"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <UserIcon className="w-6 h-6" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-bold text-slate-900 truncate">
                    {user?.full_name || "Candidate"}
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono truncate">
                    {user?.email || "Roll ID: MENT-2026"}
                  </div>
                </div>
              </div>

              {/* Status Legend Box */}
              <div className="p-3 bg-white border-b border-slate-200 space-y-2 text-[11px]">
                <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                  Legend
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-emerald-600 text-white font-bold flex items-center justify-center text-xs shrink-0 shadow-xs">
                      {legendCounts.answered}
                    </span>
                    <span className="text-slate-600 font-medium">Answered</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-t-md rounded-b-lg bg-rose-600 text-white font-bold flex items-center justify-center text-xs shrink-0 shadow-xs">
                      {legendCounts.notAnswered}
                    </span>
                    <span className="text-slate-600 font-medium">Not Answered</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-slate-200 text-slate-700 font-bold flex items-center justify-center text-xs shrink-0 border border-slate-300">
                      {legendCounts.notVisited}
                    </span>
                    <span className="text-slate-600 font-medium">Not Visited</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-xs shrink-0 shadow-xs">
                      {legendCounts.markedForReview}
                    </span>
                    <span className="text-slate-600 font-medium">Marked for Review</span>
                  </div>
                </div>

                <div className="pt-1">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-xs shrink-0 relative shadow-xs after:content-[''] after:w-2 after:h-2 after:bg-emerald-400 after:border after:border-white after:rounded-full after:absolute after:bottom-0 after:right-0">
                      {legendCounts.answeredAndMarked}
                    </span>
                    <span className="text-slate-600 font-medium leading-tight">
                      Ans. & Marked for Review
                    </span>
                  </div>
                </div>
              </div>

              {/* Palette Header */}
              <div className="bg-sky-700 text-white px-3 py-2 text-xs font-bold uppercase tracking-wider flex items-center justify-between">
                <span>Choose a Question</span>
                <span className="text-[11px] font-normal text-sky-200">
                  Total: {quiz.questions.length}
                </span>
              </div>

              {/* Question Number Palette Grid */}
              <div className="p-3 flex-1 overflow-y-auto">
                <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 justify-items-center">
                  {quiz.questions.map((q, idx) => {
                    const status =
                      questionStatuses[q.id] || (idx === 0 ? "NOT_ANSWERED" : "NOT_VISITED");
                    const isCurrent = idx === currentQuestionIndex;

                    return (
                      <button
                        key={q.id}
                        type="button"
                        onClick={() => handleJumpToQuestion(idx)}
                        className={getPaletteButtonClass(status, isCurrent)}
                        title={`Question ${idx + 1} (${status.replace(/_/g, " ")})`}
                      >
                        {idx + 1}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Quick Summary Button */}
              <div className="p-3 bg-slate-50 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setIsSubmitModalOpen(true)}
                  className="w-full py-2.5 px-4 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Exam ({totalAnsweredCount}/{quiz.questions.length})</span>
                </button>
              </div>
            </aside>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* MODAL 1: SUBMIT EXAM CONFIRMATION & QUESTION STATUS SUMMARY TABLE    */}
      {/* ==================================================================== */}
      {isSubmitModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
          <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden space-y-4">
            <div className="bg-sky-700 text-white px-5 py-3.5 flex items-center justify-between">
              <h3 className="text-sm font-bold flex items-center gap-2 font-display">
                <Send className="w-4 h-4" />
                Submit Exam Assessment
              </h3>
              <button
                type="button"
                onClick={() => setIsSubmitModalOpen(false)}
                className="text-sky-200 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 space-y-4 text-xs">
              <p className="text-slate-600">
                Review your question status summary below before final submission:
              </p>

              {/* CBT Status Summary Table */}
              <div className="border border-slate-200 rounded-xl overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                      <th className="p-2.5">Category</th>
                      <th className="p-2.5 text-right">No. of Questions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                    <tr>
                      <td className="p-2.5 flex items-center gap-2">
                        <span className="w-3 h-3 rounded-xs bg-emerald-600"></span>
                        Answered
                      </td>
                      <td className="p-2.5 text-right font-bold text-emerald-700">
                        {legendCounts.answered}
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2.5 flex items-center gap-2">
                        <span className="w-3 h-3 rounded-xs bg-rose-600"></span>
                        Not Answered
                      </td>
                      <td className="p-2.5 text-right font-bold text-rose-700">
                        {legendCounts.notAnswered}
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2.5 flex items-center gap-2">
                        <span className="w-3 h-3 rounded-xs bg-purple-600"></span>
                        Marked for Review
                      </td>
                      <td className="p-2.5 text-right font-bold text-purple-700">
                        {legendCounts.markedForReview}
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2.5 flex items-center gap-2">
                        <span className="w-3 h-3 rounded-xs bg-purple-600 relative after:content-[''] after:w-1.5 after:h-1.5 after:bg-emerald-400 after:rounded-full after:absolute after:bottom-0 after:right-0"></span>
                        Answered & Marked for Review
                      </td>
                      <td className="p-2.5 text-right font-bold text-purple-700">
                        {legendCounts.answeredAndMarked}
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2.5 flex items-center gap-2">
                        <span className="w-3 h-3 rounded-xs bg-slate-300"></span>
                        Not Visited
                      </td>
                      <td className="p-2.5 text-right font-bold text-slate-500">
                        {legendCounts.notVisited}
                      </td>
                    </tr>
                    <tr className="bg-slate-50 font-bold text-slate-900 border-t border-slate-200">
                      <td className="p-2.5">Total Questions</td>
                      <td className="p-2.5 text-right">{quiz?.questions.length || 0}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {submitError && (
                <div className="p-3 text-xs font-semibold text-rose-700 bg-rose-50 border border-rose-200 rounded-xl">
                  {submitError}
                </div>
              )}

              <p className="text-[11px] text-amber-800 bg-amber-50 p-2.5 rounded-lg border border-amber-200 font-semibold">
                ⚠️ Once submitted, you cannot change your answers. Your attempt will be graded and ranked immediately.
              </p>
            </div>

            <div className="bg-slate-50 px-5 py-3 border-t border-slate-200 flex items-center justify-end gap-3">
              <Button
                variant="secondary"
                size="md"
                onClick={() => setIsSubmitModalOpen(false)}
                className="rounded-xl"
              >
                Back to Exam
              </Button>
              <Button
                variant="primary"
                size="md"
                onClick={handleSubmitQuiz}
                isLoading={submitAttemptMutation.isPending}
                className="rounded-xl bg-emerald-600 hover:bg-emerald-700 shadow-sm"
              >
                Confirm & Submit Attempt
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* MODAL 2: QUESTION PAPER (VIEW ALL QUESTIONS QUICKLY)                 */}
      {/* ==================================================================== */}
      {isQuestionPaperOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
          <div className="w-full max-w-3xl max-h-[85vh] bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col">
            <div className="bg-emerald-700 text-white px-5 py-3.5 flex items-center justify-between shrink-0">
              <h3 className="text-sm font-bold flex items-center gap-2 font-display">
                <FileText className="w-4 h-4" />
                Question Paper — {quiz?.title}
              </h3>
              <button
                type="button"
                onClick={() => setIsQuestionPaperOpen(false)}
                className="text-emerald-200 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 flex-1 overflow-y-auto space-y-6">
              {quiz?.questions.map((q, idx) => (
                <div key={q.id} className="p-4 rounded-xl border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-200">
                    <span className="font-bold text-slate-800">Question {idx + 1}</span>
                    <span className="text-slate-500">
                      +{q.positive_marks} / -{q.negative_marks}
                    </span>
                  </div>

                  <div className="text-sm text-slate-800 leading-relaxed">
                    <MathText text={q.question_text} />
                  </div>

                  {q.question_image_url && (
                    <img
                      src={q.question_image_url}
                      alt={`Question ${idx + 1}`}
                      className="max-h-60 rounded border border-slate-200 object-contain mx-auto"
                    />
                  )}

                  {q.question_type !== "NAT" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs">
                      {q.options.map((opt, oIdx) => (
                        <div
                          key={opt.id}
                          className="p-2 rounded bg-slate-50 border border-slate-200 flex items-start gap-2"
                        >
                          <span className="font-bold text-slate-600">
                            {String.fromCharCode(65 + oIdx)}.
                          </span>
                          <MathText text={opt.option_text} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-slate-50 px-5 py-3 border-t border-slate-200 flex justify-end shrink-0">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setIsQuestionPaperOpen(false)}
                className="rounded-xl"
              >
                Close Question Paper
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* MODAL 3: EXAM INSTRUCTIONS                                           */}
      {/* ==================================================================== */}
      {isInstructionsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
          <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden space-y-4">
            <div className="bg-slate-800 text-white px-5 py-3.5 flex items-center justify-between">
              <h3 className="text-sm font-bold flex items-center gap-2 font-display">
                <Info className="w-4 h-4 text-sky-400" />
                Examination Instructions
              </h3>
              <button
                type="button"
                onClick={() => setIsInstructionsOpen(false)}
                className="text-slate-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 space-y-3 text-xs text-slate-700 leading-relaxed">
              <div className="font-bold text-slate-900">General Instructions:</div>
              <ul className="list-disc list-inside space-y-1.5 text-slate-600">
                <li>The clock has been set on the server and will count down automatically.</li>
                <li>When the timer reaches zero, the examination ends automatically.</li>
                <li>
                  Click <strong>Save & Next</strong> to save your answer and proceed to the next question.
                </li>
                <li>
                  Click <strong>Mark for Review & Next</strong> if you wish to re-check your answer later.
                </li>
                <li>
                  Click <strong>Clear Response</strong> to deselect chosen option(s).
                </li>
              </ul>

              <div className="font-bold text-slate-900 pt-2">Navigating Questions:</div>
              <p className="text-slate-600">
                You can directly jump to any question by clicking its number on the Question Palette on the right.
              </p>
            </div>

            <div className="bg-slate-50 px-5 py-3 border-t border-slate-200 flex justify-end">
              <Button
                variant="primary"
                size="sm"
                onClick={() => setIsInstructionsOpen(false)}
                className="rounded-xl"
              >
                Got It
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* MODAL 4: TIME UP AUTO-SUBMISSION MODAL                               */}
      {/* ==================================================================== */}
      {isTimeUpModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-fade-in">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-rose-200 p-6 space-y-4 text-center">
            <div className="w-12 h-12 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center mx-auto text-rose-600 animate-pulse">
              <Timer className="w-6 h-6" />
            </div>

            <div className="space-y-1.5">
              <h3 className="text-lg font-bold font-display text-slate-900">Exam Time Has Expired!</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                The allotted time limit for this exam has ended. Your answers are being graded and
                recorded automatically.
              </p>
            </div>

            {isAutoSubmitting && (
              <div className="p-3 text-xs font-semibold text-sky-700 bg-sky-50 border border-sky-200 rounded-xl animate-pulse">
                Grading and submitting attempt...
              </div>
            )}

            {submitError && (
              <div className="p-3 text-xs font-semibold text-rose-700 bg-rose-50 border border-rose-200 rounded-xl">
                {submitError}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
