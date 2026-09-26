"use client";

import React, { useState, useMemo } from "react";
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
  CheckCircle2,
  Clock,
  HelpCircle,
  Play,
  Send,
  Trophy,
  XCircle,
} from "lucide-react";

export default function QuizDetailPage() {
  const params = useParams();
  const router = useRouter();
  const quizId = params.id as string;
  const { user } = useAuthStore();

  const { data: quiz, isLoading, isError, refetch } = useQuiz(quizId);
  const startAttemptMutation = useStartQuizAttempt();
  const submitAttemptMutation = useSubmitQuizAttempt();

  // Local answer state: questionId -> { selectedOptionIds: string[], natAnswer: string }
  const [answers, setAnswers] = useState<
    Record<string, { selectedOptionIds: string[]; natAnswer: string }>
  >({});
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submittedResult, setSubmittedResult] = useState<any>(null);

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto py-16 text-center text-ink-faint animate-pulse">
        Loading exam test...
      </div>
    );
  }

  if (isError || !quiz) {
    return (
      <div className="max-w-2xl mx-auto py-16 text-center space-y-4">
        <p className="text-sm text-ink-muted">Unable to load quiz.</p>
        <Link href="/quizzes">
          <Button variant="secondary" size="sm">
            Back to Quizzes
          </Button>
        </Link>
      </div>
    );
  }

  const isMentor = user?.role === "MENTOR" || user?.role === "ADMIN";
  const isSubmitted = quiz.attempt_status === "SUBMITTED" || !!submittedResult;
  const isInProgress = quiz.attempt_status === "IN_PROGRESS" && !isSubmitted;

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

  // Start attempt
  const handleStartAttempt = async () => {
    try {
      await startAttemptMutation.mutateAsync(quiz.id);
      await refetch();
    } catch (err: any) {
      alert(err.detail || "Unable to start quiz attempt");
    }
  };

  // Submit attempt
  const handleSubmitQuiz = async () => {
    if (!quiz.attempt_id) return;
    setSubmitError("");

    const payloadAnswers = quiz.questions.map((q) => {
      const ans = answers[q.id];
      const natVal = ans?.natAnswer && !isNaN(Number(ans.natAnswer)) ? Number(ans.natAnswer) : null;
      return {
        question_id: q.id,
        selected_option_ids: ans?.selectedOptionIds && ans.selectedOptionIds.length > 0 ? ans.selectedOptionIds : null,
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
      await refetch();
    } catch (err: any) {
      setSubmitError(err.detail || "Failed to submit quiz");
    }
  };

  // Count answered questions
  const answeredCount = useMemo(() => quiz.questions.filter((q) => {
    const a = answers[q.id];
    if (q.question_type === "NAT") {
      return a && a.natAnswer.trim() !== "";
    }
    return a && a.selectedOptionIds.length > 0;
  }).length, [quiz.questions, answers]);

  return (
    <div className="max-w-4xl mx-auto py-8 space-y-8 animate-fade-in">
      {/* Mentor Notice Banner */}
      {isMentor && (
        <div className="p-4 bg-sky-50 border border-sky-200 rounded-2xl flex items-center justify-between gap-4">
          <div className="text-xs text-sky-900">
            <strong>Author Mode:</strong> You are previewing this quiz with the answer key revealed.
          </div>
          <Link href={`/quizzes/${quiz.id}/edit`}>
            <Button variant="primary" size="sm" className="rounded-xl">
              Open Quiz Builder
            </Button>
          </Link>
        </div>
      )}

      {/* VIEW 1: POST-SUBMISSION RESULTS & BREAKDOWN */}
      {isSubmitted ? (
        <div className="space-y-6">
          {/* Header Banner */}
          <div className="rounded-2xl bg-gradient-to-r from-sky-50 via-blue-50/40 to-white border border-blue-200 p-6 shadow-soft space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-blue-100 text-blue-800 text-[11px] font-bold uppercase tracking-wider mb-2">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Quiz Attempt Completed
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold font-display text-ink">
                  {quiz.title} — Results
                </h1>
                <p className="text-xs text-ink-muted mt-1">
                  Submitted • Automatic server-side grading calibrated to JEE/NEET marking scheme.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Link href={`/quizzes/${quiz.id}/leaderboard`}>
                  <Button variant="primary" size="md" className="rounded-lg shadow-soft">
                    <Trophy className="w-4 h-4 mr-1.5 text-amber-300" />
                    View Leaderboard
                  </Button>
                </Link>
                <Link href="/quizzes">
                  <Button variant="secondary" size="md" className="rounded-lg">
                    Back to Quizzes
                  </Button>
                </Link>
              </div>
            </div>

            {/* Scorecard */}
            {submittedResult && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-blue-200/60">
                <div className="p-3 bg-white/80 rounded-lg border border-blue-100">
                  <div className="text-[11px] text-ink-faint uppercase font-bold">Total Score</div>
                  <div className="text-xl font-black text-ink font-display">
                    {submittedResult.total_score}
                  </div>
                </div>

                <div className="p-3 bg-white/80 rounded-lg border border-blue-100">
                  <div className="text-[11px] text-ink-faint uppercase font-bold">Max Marks</div>
                  <div className="text-xl font-black text-ink font-display">
                    {submittedResult.max_score}
                  </div>
                </div>

                <div className="p-3 bg-white/80 rounded-lg border border-blue-100">
                  <div className="text-[11px] text-ink-faint uppercase font-bold">Percentage</div>
                  <div className="text-xl font-black text-blue-700 font-display">
                    {submittedResult.percentage}%
                  </div>
                </div>

                <div className="p-3 bg-white/80 rounded-lg border border-blue-100">
                  <div className="text-[11px] text-ink-faint uppercase font-bold">Status</div>
                  <div className="text-sm font-bold text-ink mt-1">Graded & Recorded</div>
                </div>
              </div>
            )}
          </div>

          {/* Breakdown of Every Question */}
          <div className="space-y-4">
            <h2 className="text-base font-bold font-display text-ink">
              Detailed Question Analysis & Answer Key
            </h2>

            {submittedResult?.breakdown ? (
              submittedResult.breakdown.map((item: any, idx: number) => (
                <Card
                  key={item.question_id}
                  variant="default"
                  className={`p-5 bg-white border-2 shadow-soft space-y-4 rounded-xl ${
                    item.is_correct
                      ? "border-blue-200"
                      : item.marks_awarded < 0
                      ? "border-rose-200"
                      : "border-slate-200"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-xs font-bold text-ink">
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
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-ink-faint bg-slate-50 border border-mist px-2.5 py-0.5 rounded-lg">
                          Unanswered (0.00)
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Question Text */}
                  <div className="text-sm font-medium text-ink leading-relaxed">
                    <MathText text={item.question_text} />
                  </div>

                  {/* Question Image if present */}
                  {item.question_image_url && (
                    <img
                      src={item.question_image_url}
                      alt="Question diagram"
                      className="max-h-60 rounded-xl border border-mist object-contain"
                    />
                  )}

                  {/* Options with revealed key */}
                  {item.question_type !== "NAT" ? (
                    <div className="space-y-2 pt-2">
                      {item.options.map((opt: any, oIdx: number) => {
                        const isChosen = item.selected_option_ids?.includes(opt.id);
                        const isCorrect = opt.is_correct;

                        let style = "bg-white border-mist";
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
                              <span className="font-bold text-ink-muted">
                                {String.fromCharCode(65 + oIdx)}.
                              </span>
                              <MathText text={opt.option_text} />
                            </div>

                            <div className="flex items-center gap-1.5">
                              {isChosen && (
                                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-ink">
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
                        <strong className="font-mono text-ink">
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
              /* Fallback view of past submitted attempt */
              quiz.questions.map((q, idx) => (
                <Card key={q.id} variant="default" className="p-5 bg-white border-mist space-y-3 rounded-xl">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-ink">Question {idx + 1}</span>
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
                              : "bg-white border-mist text-ink"
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
        /* VIEW 2: QUIZ START LANDING SCREEN */
        <div className="max-w-2xl mx-auto space-y-6">
          <Link href="/quizzes">
            <Button variant="secondary" size="sm" className="rounded-xl">
              <ArrowLeft className="w-4 h-4 mr-1.5" />
              Back to Quizzes
            </Button>
          </Link>

          <Card variant="default" className="p-8 bg-white border-mist shadow-lift space-y-6 text-center">
            <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center mx-auto text-sky-600">
              <Award className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-sky-100/70 text-sky-800 text-[11px] font-bold uppercase tracking-wider">
                JEE / NEET Diagnostic Exam
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-ink tracking-tight">
                {quiz.title}
              </h1>
              {quiz.description && (
                <p className="text-sm text-ink-muted leading-relaxed max-w-lg mx-auto">
                  {quiz.description}
                </p>
              )}
            </div>

            {/* Test Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-slate-50/80 rounded-2xl border border-mist text-left">
              <div>
                <div className="text-[11px] text-ink-faint uppercase font-bold">Questions</div>
                <div className="text-base font-black text-ink">{quiz.questions.length} Items</div>
              </div>

              <div>
                <div className="text-[11px] text-ink-faint uppercase font-bold">Marking Scheme</div>
                <div className="text-base font-black text-ink">
                  +{quiz.default_positive_marks} / -{quiz.default_negative_marks}
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <div className="text-[11px] text-ink-faint uppercase font-bold">Deadline</div>
                <div className="text-xs font-semibold text-ink mt-0.5">
                  {quiz.has_deadline && quiz.deadline_at
                    ? new Date(quiz.deadline_at).toLocaleDateString()
                    : "No cutoff"}
                </div>
              </div>
            </div>

            {/* Rules */}
            <div className="p-4 bg-amber-50/60 border border-amber-200/60 rounded-xl text-left text-xs text-amber-900 space-y-1.5">
              <div className="font-bold flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-amber-600" />
                Exam Attempt Guidelines
              </div>
              <ul className="list-disc list-inside space-y-1 text-amber-800 leading-relaxed">
                <li>
                  <strong>One-attempt rule:</strong> Once started, you cannot retake this quiz.
                </li>
                <li>
                  <strong>Server-side grading:</strong> Marks are awarded or deducted per JEE/NEET/GATE standard formulas.
                </li>
                <li>
                  <strong>Full-scroll mode:</strong> You can review, revise, and answer questions in any order before submitting.
                </li>
              </ul>
            </div>

            <div>
              <Button
                variant="primary"
                size="lg"
                onClick={handleStartAttempt}
                isLoading={startAttemptMutation.isPending}
                className="w-full sm:w-auto px-8 rounded-xl shadow-soft"
              >
                <Play className="w-4 h-4 mr-2" />
                Start Quiz Attempt Now
              </Button>
            </div>
          </Card>
        </div>
      ) : (
        /* VIEW 3: ACTIVE FULL-SCROLL QUIZ TAKING */
        <div className="space-y-6">
          {/* Sticky Header Bar */}
          <div className="sticky top-2 z-40 p-4 bg-white/95 backdrop-blur-md border border-mist rounded-2xl shadow-lift flex items-center justify-between gap-4">
            <div>
              <h2 className="text-base font-bold font-display text-ink truncate max-w-sm sm:max-w-md">
                {quiz.title}
              </h2>
              <div className="text-xs text-ink-muted">
                Answered <strong className="text-sky-700">{answeredCount}</strong> of{" "}
                {quiz.questions.length} questions
              </div>
            </div>

            <Button
              variant="primary"
              size="md"
              onClick={() => setIsSubmitModalOpen(true)}
              className="rounded-xl shadow-soft"
            >
              <Send className="w-4 h-4 mr-1.5" />
              Submit Quiz
            </Button>
          </div>

          {/* Full-Scroll Question List */}
          <div className="space-y-6">
            {quiz.questions.map((q, idx) => {
              const currentAns = answers[q.id];
              return (
                <Card
                  key={q.id}
                  variant="default"
                  className="p-6 bg-white border-mist shadow-soft space-y-4"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-mist">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-sky-50 text-sky-800 text-xs font-black">
                        {idx + 1}
                      </span>
                      <span className="text-xs font-bold text-ink uppercase tracking-wider">
                        {q.question_type === "MCQ_SINGLE"
                          ? "Single Choice (+4, -1)"
                          : q.question_type === "MCQ_MULTIPLE"
                          ? "Multiple Choice (+4, -1)"
                          : "Numerical Answer (NAT)"}
                      </span>
                    </div>

                    <span className="text-xs font-semibold text-ink-muted">
                      Marks: +{q.positive_marks} / -{q.negative_marks}
                    </span>
                  </div>

                  {/* Question Text with KaTeX */}
                  <div className="text-sm font-medium text-ink leading-relaxed">
                    <MathText text={q.question_text} />
                  </div>

                  {/* Question Image if present */}
                  {q.question_image_url && (
                    <div className="py-2">
                      <img
                        src={q.question_image_url}
                        alt="Question diagram"
                        className="max-h-72 rounded-xl border border-mist object-contain mx-auto"
                      />
                    </div>
                  )}

                  {/* Options for MCQ_SINGLE */}
                  {q.question_type === "MCQ_SINGLE" && (
                    <div className="space-y-2.5 pt-2">
                      {q.options.map((opt, oIdx) => {
                        const isSelected = currentAns?.selectedOptionIds?.includes(opt.id);
                        return (
                          <button
                            type="button"
                            key={opt.id}
                            onClick={() => handleSingleOptionSelect(q.id, opt.id)}
                            className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center gap-3 ${
                              isSelected
                                ? "bg-sky-50/60 border-sky-400 ring-2 ring-sky-500/20 text-ink font-semibold"
                                : "bg-white border-mist hover:bg-slate-50 text-ink"
                            }`}
                          >
                            <span
                              className={`w-5 h-5 rounded-full border flex items-center justify-center text-xs shrink-0 ${
                                isSelected
                                  ? "border-sky-600 bg-sky-600 text-white font-bold"
                                  : "border-slate-300 text-ink-faint"
                              }`}
                            >
                              {String.fromCharCode(65 + oIdx)}
                            </span>
                            <div className="flex-1 text-xs">
                              <MathText text={opt.option_text} />
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* Options for MCQ_MULTIPLE */}
                  {q.question_type === "MCQ_MULTIPLE" && (
                    <div className="space-y-2.5 pt-2">
                      <p className="text-[11px] text-ink-faint italic mb-1">
                        Select one or more correct options:
                      </p>
                      {q.options.map((opt, oIdx) => {
                        const isSelected = currentAns?.selectedOptionIds?.includes(opt.id);
                        return (
                          <button
                            type="button"
                            key={opt.id}
                            onClick={() => handleMultipleOptionToggle(q.id, opt.id)}
                            className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center gap-3 ${
                              isSelected
                                ? "bg-sky-50/60 border-sky-400 ring-2 ring-sky-500/20 text-ink font-semibold"
                                : "bg-white border-mist hover:bg-slate-50 text-ink"
                            }`}
                          >
                            <span
                              className={`w-5 h-5 rounded-md border flex items-center justify-center text-xs shrink-0 ${
                                isSelected
                                  ? "border-sky-600 bg-sky-600 text-white font-bold"
                                  : "border-slate-300 text-ink-faint"
                              }`}
                            >
                              {isSelected ? "✓" : String.fromCharCode(65 + oIdx)}
                            </span>
                            <div className="flex-1 text-xs">
                              <MathText text={opt.option_text} />
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* NAT Input */}
                  {q.question_type === "NAT" && (
                    <div className="p-4 bg-slate-50/70 border border-mist rounded-xl space-y-2">
                      <label className="text-xs font-bold text-ink uppercase tracking-wider block">
                        Numerical Entry
                      </label>
                      <input
                        type="number"
                        step="any"
                        value={currentAns?.natAnswer || ""}
                        onChange={(e) => handleNatAnswerChange(q.id, e.target.value)}
                        placeholder="Type numerical answer..."
                        className="w-full sm:w-64 p-2.5 text-sm font-mono text-ink bg-white border border-mist rounded-xl focus:outline-none focus:border-sky-500"
                      />
                      <p className="text-[11px] text-ink-faint">
                        Exact numbers or decimals accepted. Tested within mentor-calibrated tolerance.
                      </p>
                    </div>
                  )}
                </Card>
              );
            })}
          </div>

          {/* Bottom Submit Bar */}
          <div className="p-6 bg-white border border-mist rounded-2xl shadow-soft flex items-center justify-between">
            <div className="text-xs text-ink-muted">
              Ready to submit? Your answers will be graded immediately on the server.
            </div>
            <Button
              variant="primary"
              size="lg"
              onClick={() => setIsSubmitModalOpen(true)}
              className="rounded-xl shadow-soft"
            >
              <Send className="w-4 h-4 mr-2" />
              Submit Quiz ({answeredCount}/{quiz.questions.length})
            </Button>
          </div>
        </div>
      )}

      {/* Submit Confirmation Modal */}
      {isSubmitModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/40 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-lift border border-mist p-6 space-y-5 text-center">
            <div className="w-12 h-12 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center mx-auto text-amber-600">
              <HelpCircle className="w-6 h-6" />
            </div>

            <div className="space-y-1.5">
              <h3 className="text-lg font-bold font-display text-ink">
                Submit Your Quiz Attempt?
              </h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                You have answered <strong className="text-ink">{answeredCount}</strong> out of{" "}
                <strong className="text-ink">{quiz.questions.length}</strong> questions.
                Submission is final and irreversible.
              </p>
            </div>

            {submitError && (
              <div className="p-3 text-xs font-semibold text-rose-700 bg-rose-50 border border-rose-200 rounded-xl">
                {submitError}
              </div>
            )}

            <div className="flex items-center justify-center gap-3 pt-2">
              <Button
                variant="secondary"
                size="md"
                onClick={() => setIsSubmitModalOpen(false)}
                className="rounded-xl"
              >
                Continue Answering
              </Button>
              <Button
                variant="primary"
                size="md"
                onClick={handleSubmitQuiz}
                isLoading={submitAttemptMutation.isPending}
                className="rounded-xl shadow-soft"
              >
                Confirm & Submit
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
