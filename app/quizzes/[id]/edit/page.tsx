"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useAuthStore } from "@/store/authStore";
import {
  useAddQuestion,
  useBulkImportQuestions,
  useDeleteQuestion,
  useOcrCaptureQuestion,
  usePublishQuiz,
  useQuiz,
  useUpdateQuiz,
} from "@/hooks/useQuizzes";
import { QuestionType, QuizStatus } from "@/lib/types";
import { MathText } from "@/components/MathText";
import { UnifiedLatexInput } from "@/components/UnifiedLatexInput";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import {
  ArrowLeft,
  Award,
  Calendar,
  CheckCircle2,
  Clock,
  Download,
  FileSpreadsheet,
  FileText,
  Image as ImageIcon,
  Lock,
  Plus,
  Send,
  Trash2,
  Upload,
  Trophy,
} from "lucide-react";

export default function MentorQuizBuilderPage() {
  const params = useParams();
  const router = useRouter();
  const quizId = params.id as string;
  const { user } = useAuthStore();

  const { data: quiz, isLoading, isError, refetch } = useQuiz(quizId);
  const publishMutation = usePublishQuiz();
  const updateQuizMutation = useUpdateQuiz();
  const addQuestionMutation = useAddQuestion();
  const deleteQuestionMutation = useDeleteQuestion();
  const ocrMutation = useOcrCaptureQuestion();
  const bulkImportMutation = useBulkImportQuestions();

  // Active input tab: 'manual' | 'ocr' | 'bulk'
  const [activeTab, setActiveTab] = useState<"manual" | "ocr" | "bulk">("manual");

  // Question builder form state
  const [qType, setQType] = useState<QuestionType>("MCQ_SINGLE");
  const [qText, setQText] = useState("");
  const [posMarks, setPosMarks] = useState("");
  const [negMarks, setNegMarks] = useState("");
  const [natAnswer, setNatAnswer] = useState("");
  const [natTolerance, setNatTolerance] = useState("0.01");
  const [options, setOptions] = useState<Array<{ text: string; isCorrect: boolean }>>([
    { text: "", isCorrect: true },
    { text: "", isCorrect: false },
    { text: "", isCorrect: false },
    { text: "", isCorrect: false },
  ]);
  const [builderError, setBuilderError] = useState("");
  const [builderSuccess, setBuilderSuccess] = useState("");

  // OCR state
  const [ocrFile, setOcrFile] = useState<File | null>(null);
  const [ocrType, setOcrType] = useState<QuestionType>("MCQ_SINGLE");
  const [ocrOverrideText, setOcrOverrideText] = useState("");
  const [ocrFeedback, setOcrFeedback] = useState("");

  // Bulk Import state
  const [csvFile, setCsvFile] = useState<File | null>(null);
  const [csvText, setCsvText] = useState("");
  const [bulkFeedback, setBulkFeedback] = useState<{
    imported: number;
    skipped: number;
    errors: Array<{ row: number; reason: string }>;
  } | null>(null);

  // Metadata edit modal / section toggle
  const [isEditingMeta, setIsEditingMeta] = useState(false);
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDesc, setMetaDesc] = useState("");
  const [metaHasDeadline, setMetaHasDeadline] = useState(false);
  const [metaDeadline, setMetaDeadline] = useState("");
  const [metaLiveAt, setMetaLiveAt] = useState("");

  if (isLoading) {
    return (
      <div className="max-w-5xl mx-auto py-16 text-center text-ink-faint animate-pulse">
        Loading quiz builder...
      </div>
    );
  }

  if (isError || !quiz) {
    return (
      <div className="max-w-2xl mx-auto py-16 text-center space-y-4">
        <p className="text-sm text-ink-muted">Unable to load quiz details.</p>
        <Button variant="secondary" size="sm" onClick={() => router.push("/quizzes")}>
          Back to Quizzes
        </Button>
      </div>
    );
  }

  const isLocked = quiz.attempt_count > 0;
  const isScheduled = quiz.status === "SCHEDULED";
  const isPublished = quiz.status === "PUBLISHED";

  const handleOptionChange = (idx: number, text: string) => {
    setOptions((prev) => {
      const next = [...prev];
      next[idx].text = text;
      return next;
    });
  };

  const handleOptionCorrectChange = (idx: number) => {
    if (qType === "MCQ_SINGLE") {
      setOptions((prev) =>
        prev.map((opt, i) => ({
          ...opt,
          isCorrect: i === idx,
        }))
      );
    } else {
      setOptions((prev) => {
        const next = [...prev];
        next[idx].isCorrect = !next[idx].isCorrect;
        return next;
      });
    }
  };

  const handleAddOption = () => {
    setOptions((prev) => [...prev, { text: "", isCorrect: false }]);
  };

  const handleRemoveOption = (idx: number) => {
    if (options.length <= 2) return;
    setOptions((prev) => {
      const wasCorrect = prev[idx].isCorrect;
      const next = prev.filter((_, i) => i !== idx);
      // If the removed option was the only correct one (MCQ_SINGLE), auto-assign to first remaining
      if (wasCorrect && qType === "MCQ_SINGLE" && !next.some((o) => o.isCorrect) && next.length > 0) {
        next[0].isCorrect = true;
      }
      return next;
    });
  };

  const handleSaveQuestion = async (e: React.FormEvent) => {
    e.preventDefault();
    setBuilderError("");
    setBuilderSuccess("");

    if (!qText.trim()) {
      setBuilderError("Question text is required.");
      return;
    }

    if (qType === "NAT") {
      if (!natAnswer.trim() || isNaN(Number(natAnswer))) {
        setBuilderError("A valid numerical answer (nat_answer) is required for NAT questions.");
        return;
      }
    } else {
      const nonEmptyOpts = options.filter((o) => o.text.trim() !== "");
      if (nonEmptyOpts.length < 2) {
        setBuilderError("At least 2 options are required for MCQ questions.");
        return;
      }
      const correctCount = nonEmptyOpts.filter((o) => o.isCorrect).length;
      if (qType === "MCQ_SINGLE" && correctCount !== 1) {
        setBuilderError("MCQ_SINGLE must have exactly one correct option selected.");
        return;
      }
      if (qType === "MCQ_MULTIPLE" && correctCount < 1) {
        setBuilderError("MCQ_MULTIPLE must have at least one correct option selected.");
        return;
      }
    }

    try {
      await addQuestionMutation.mutateAsync({
        quizId: quiz.id,
        payload: {
          question_type: qType,
          question_text: qText.trim(),
          positive_marks: posMarks ? parseFloat(posMarks) : undefined,
          negative_marks: negMarks ? parseFloat(negMarks) : undefined,
          nat_answer: qType === "NAT" ? parseFloat(natAnswer) : undefined,
          nat_tolerance: qType === "NAT" && natTolerance ? parseFloat(natTolerance) : undefined,
          order_index: quiz.questions.length,
          options:
            qType !== "NAT"
              ? options
                  .filter((o) => o.text.trim() !== "")
                  .map((o, idx) => ({
                    option_text: o.text.trim(),
                    is_correct: o.isCorrect,
                    order_index: idx,
                  }))
              : [],
        },
      });

      setBuilderSuccess("Question added successfully!");
      setQText("");
      setNatAnswer("");
      setOptions([
        { text: "", isCorrect: true },
        { text: "", isCorrect: false },
        { text: "", isCorrect: false },
        { text: "", isCorrect: false },
      ]);
      setTimeout(() => setBuilderSuccess(""), 3000);
    } catch (err: any) {
      setBuilderError(err.detail || "Failed to add question");
    }
  };

  const handleOcrSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ocrFile) return;
    setOcrFeedback("");

    try {
      const res = await ocrMutation.mutateAsync({
        quizId: quiz.id,
        file: ocrFile,
        questionType: ocrType,
        overrideText: ocrOverrideText.trim() || undefined,
      });
      setOcrFeedback(res.message || "Question captured via OCR successfully!");
      setOcrFile(null);
      setOcrOverrideText("");
    } catch (err: any) {
      setOcrFeedback(err.detail || "Failed to extract question from photo");
    }
  };

  const handleBulkSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBulkFeedback(null);

    try {
      const res = await bulkImportMutation.mutateAsync({
        quizId: quiz.id,
        file: csvFile || undefined,
        csvText: csvText.trim() || undefined,
      });
      setBulkFeedback({
        imported: res.imported_count,
        skipped: res.skipped_count,
        errors: res.errors || [],
      });
      setCsvFile(null);
      setCsvText("");
    } catch (err: any) {
      setBulkFeedback({
        imported: 0,
        skipped: 0,
        errors: [{ row: 0, reason: err.detail || "Bulk import failed" }],
      });
    }
  };

  const handlePublish = async () => {
    if (quiz.questions.length === 0) {
      alert("Please add at least one question before publishing.");
      return;
    }
    try {
      await publishMutation.mutateAsync(quiz.id);
    } catch (err: any) {
      alert(err.detail || "Failed to publish quiz");
    }
  };

  const handleDeleteQuestion = async (qId: string) => {
    if (!confirm("Are you sure you want to remove this question?")) return;
    try {
      await deleteQuestionMutation.mutateAsync({ quizId: quiz.id, questionId: qId });
    } catch (err: any) {
      alert(err.detail || "Failed to delete question");
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-8 space-y-8 animate-fade-in">
      {/* Top Navigation & Status */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-mist">
        <div className="flex items-center gap-3">
          <Link href="/quizzes">
            <Button variant="secondary" size="sm" className="rounded-xl">
              <ArrowLeft className="w-4 h-4 mr-1.5" />
              Back to Quizzes
            </Button>
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-bold font-display text-ink">
                {quiz.title}
              </h1>
              <Badge variant={quiz.status}>{quiz.status}</Badge>
            </div>
            <p className="text-xs text-ink-muted mt-0.5">
              {quiz.questions.length} Questions • {quiz.total_marks} Total Marks • {quiz.attempt_count} Attempts
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {quiz.status === "PUBLISHED" && (
            <Link href={`/quizzes/${quiz.id}/leaderboard`}>
              <Button variant="secondary" size="sm" className="border-sky-200 text-sky-800 rounded-xl">
                <Trophy className="w-4 h-4 mr-1.5 text-amber-500" />
                Leaderboard
              </Button>
            </Link>
          )}

          {quiz.status !== "PUBLISHED" && (
            <Button
              variant="primary"
              size="sm"
              onClick={handlePublish}
              isLoading={publishMutation.isPending}
              className="rounded-xl shadow-soft"
            >
              <Send className="w-4 h-4 mr-1.5" />
              {quiz.live_at && new Date(quiz.live_at) > new Date() ? "Schedule Quiz" : "Publish Now"}
            </Button>
          )}
        </div>
      </div>

      {/* Lock Notice if Attempts Started */}
      {isLocked && (
        <div className="p-4 bg-amber-50/80 border border-amber-200/80 rounded-2xl flex items-start gap-3">
          <Lock className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider">
              Structural Changes Locked
            </h4>
            <p className="text-xs text-amber-800 leading-relaxed">
              At least one student has started this quiz. To maintain fairness and grading integrity,
              structural alterations (adding or deleting questions, modifying question types or changing correct answers)
              are locked. Text typo fixes remain allowed.
            </p>
          </div>
        </div>
      )}

      {/* Quiz Overview Details */}
      <Card variant="default" className="p-5 space-y-3 bg-white border-mist shadow-soft">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold text-ink uppercase tracking-wider">
            Quiz Parameters
          </h3>
          <span className="text-[11px] text-ink-faint">
            Default marks: +{quiz.default_positive_marks} / -{quiz.default_negative_marks}
          </span>
        </div>

        {quiz.description && (
          <p className="text-sm text-ink-muted leading-relaxed">
            {quiz.description}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-ink-muted">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-sky-600" />
            <span>
              {quiz.live_at
                ? `Live: ${new Date(quiz.live_at).toLocaleString()}`
                : "Live immediately once published"}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-sky-600" />
            <span>
              {quiz.has_deadline && quiz.deadline_at
                ? `Deadline: ${new Date(quiz.deadline_at).toLocaleString()}`
                : "No submission deadline"}
            </span>
          </div>
        </div>
      </Card>

      {/* Question Input Section — 3 Tabs */}
      {!isLocked && (
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-mist pb-2">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveTab("manual")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "manual"
                    ? "bg-sky-600 text-white shadow-soft"
                    : "text-ink-muted hover:text-ink hover:bg-slate-100"
                }`}
              >
                <FileText className="w-4 h-4" />
                Unified LaTeX Builder
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("ocr")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "ocr"
                    ? "bg-sky-600 text-white shadow-soft"
                    : "text-ink-muted hover:text-ink hover:bg-slate-100"
                }`}
              >
                <ImageIcon className="w-4 h-4" />
                Photo / OCR Extraction
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("bulk")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "bulk"
                    ? "bg-sky-600 text-white shadow-soft"
                    : "text-ink-muted hover:text-ink hover:bg-slate-100"
                }`}
              >
                <FileSpreadsheet className="w-4 h-4" />
                Bulk CSV Import
              </button>
            </div>

            <span className="text-[11px] font-medium text-ink-faint hidden sm:inline">
              JEE / NEET / GATE Pattern
            </span>
          </div>

          {/* TAB 1: MANUAL BUILDER (Always default, unified input) */}
          {activeTab === "manual" && (
            <Card variant="default" className="p-6 bg-white border-mist shadow-lift space-y-6">
              {builderError && (
                <div className="p-3 text-xs font-semibold text-rose-700 bg-rose-50 border border-rose-200 rounded-xl">
                  {builderError}
                </div>
              )}
              {builderSuccess && (
                <div className="p-3 text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 rounded-xl">
                  {builderSuccess}
                </div>
              )}

              <form onSubmit={handleSaveQuestion} className="space-y-6">
                {/* Question Type Selector */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-ink uppercase tracking-wider">
                    Question Type
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <button
                      type="button"
                      onClick={() => setQType("MCQ_SINGLE")}
                      className={`p-3 text-left rounded-xl border transition-all ${
                        qType === "MCQ_SINGLE"
                          ? "border-sky-500 bg-sky-50/50 ring-2 ring-sky-500/20"
                          : "border-mist hover:border-slate-300 bg-white"
                      }`}
                    >
                      <div className="text-xs font-bold text-ink">MCQ Single Choice</div>
                      <div className="text-[11px] text-ink-muted mt-0.5">
                        1 correct option (+full marks, -penalty)
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setQType("MCQ_MULTIPLE")}
                      className={`p-3 text-left rounded-xl border transition-all ${
                        qType === "MCQ_MULTIPLE"
                          ? "border-sky-500 bg-sky-50/50 ring-2 ring-sky-500/20"
                          : "border-mist hover:border-slate-300 bg-white"
                      }`}
                    >
                      <div className="text-xs font-bold text-ink">MCQ Multiple Choice</div>
                      <div className="text-[11px] text-ink-muted mt-0.5">
                        One or more correct options (JEE Advanced)
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setQType("NAT")}
                      className={`p-3 text-left rounded-xl border transition-all ${
                        qType === "NAT"
                          ? "border-sky-500 bg-sky-50/50 ring-2 ring-sky-500/20"
                          : "border-mist hover:border-slate-300 bg-white"
                      }`}
                    >
                      <div className="text-xs font-bold text-ink">Numerical Answer (NAT)</div>
                      <div className="text-[11px] text-ink-muted mt-0.5">
                        Exact numeric entry with tolerance (GATE / JEE)
                      </div>
                    </button>
                  </div>
                </div>

                {/* Unified Question Text with KaTeX Preview */}
                <UnifiedLatexInput
                  label="Question Statement"
                  required
                  value={qText}
                  onChange={setQText}
                  placeholder="Type question statement. E.g. Find the acceleration $a = \frac{F}{m}$ given force $F = 20\text{ N}$ and mass $m = 4\text{ kg}$."
                  rows={4}
                />

                {/* Marks Override */}
                <div className="grid grid-cols-2 gap-3 p-3 bg-slate-50/60 rounded-xl border border-mist">
                  <Input
                    label="Positive Marks (+)"
                    type="number"
                    step="0.5"
                    placeholder={`Default: ${quiz.default_positive_marks}`}
                    value={posMarks}
                    onChange={(e) => setPosMarks(e.target.value)}
                  />
                  <Input
                    label="Negative Deduction (-)"
                    type="number"
                    step="0.5"
                    placeholder={`Default: ${quiz.default_negative_marks}`}
                    value={negMarks}
                    onChange={(e) => setNegMarks(e.target.value)}
                  />
                </div>

                {/* Options Section for MCQ */}
                {qType !== "NAT" ? (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold text-ink uppercase tracking-wider">
                        Answer Options & Correct Key
                      </label>
                      <span className="text-[11px] text-ink-faint">
                        {qType === "MCQ_SINGLE" ? "Select 1 correct option" : "Select all correct options"}
                      </span>
                    </div>

                    <div className="space-y-3">
                      {options.map((opt, idx) => (
                        <div
                          key={idx}
                          className={`p-3 rounded-xl border transition-all ${
                            opt.isCorrect
                              ? "bg-blue-50/40 border-blue-200"
                              : "bg-white border-mist"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-3 mb-2">
                            <div className="flex items-center gap-2">
                              <input
                                type={qType === "MCQ_SINGLE" ? "radio" : "checkbox"}
                                name="correct_option"
                                checked={opt.isCorrect}
                                onChange={() => handleOptionCorrectChange(idx)}
                                className="w-4 h-4 text-blue-600 focus:ring-blue-500 rounded cursor-pointer"
                              />
                              <span className="text-xs font-bold text-ink">
                                Option {String.fromCharCode(65 + idx)} {opt.isCorrect && "• Correct"}
                              </span>
                            </div>

                            {options.length > 2 && (
                              <button
                                type="button"
                                onClick={() => handleRemoveOption(idx)}
                                className="text-xs text-rose-500 hover:text-rose-700"
                              >
                                Remove
                              </button>
                            )}
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            <input
                              type="text"
                              value={opt.text}
                              onChange={(e) => handleOptionChange(idx, e.target.value)}
                              placeholder={`Option ${String.fromCharCode(65 + idx)} text (wrap math in $...$)`}
                              className="w-full p-2 text-xs text-ink bg-white border border-mist rounded-lg focus:outline-none focus:border-sky-500"
                            />
                            <div className="p-2 text-xs text-ink bg-slate-50/60 border border-slate-200/80 rounded-lg min-h-[34px] flex items-center">
                              {opt.text ? (
                                <MathText text={opt.text} />
                              ) : (
                                <span className="text-ink-faint italic text-[11px]">Preview</span>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Button
                      type="button"
                      variant="secondary"
                      size="sm"
                      onClick={handleAddOption}
                      className="rounded-xl"
                    >
                      <Plus className="w-4 h-4 mr-1.5" />
                      Add Option
                    </Button>
                  </div>
                ) : (
                  /* NAT Section */
                  <div className="p-4 bg-sky-50/30 border border-sky-100 rounded-xl space-y-4">
                    <div className="text-xs font-bold text-sky-900 uppercase tracking-wider">
                      Numerical Answer Specifications (JEE / GATE)
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <Input
                        label="Exact Correct Answer"
                        type="number"
                        step="any"
                        required
                        value={natAnswer}
                        onChange={(e) => setNatAnswer(e.target.value)}
                        placeholder="e.g. 24.50"
                      />
                      <Input
                        label="Acceptable Tolerance (±)"
                        type="number"
                        step="any"
                        value={natTolerance}
                        onChange={(e) => setNatTolerance(e.target.value)}
                        placeholder="e.g. 0.05"
                        helperText="Accepts student entries within [answer - tol, answer + tol]"
                      />
                    </div>
                  </div>
                )}

                <div className="flex justify-end pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    isLoading={addQuestionMutation.isPending}
                    className="rounded-xl"
                  >
                    <Plus className="w-4 h-4 mr-1.5" />
                    Save & Add Question
                  </Button>
                </div>
              </form>
            </Card>
          )}

          {/* TAB 2: PHOTO / OCR EXTRACTION */}
          {activeTab === "ocr" && (
            <Card variant="default" className="p-6 bg-white border-mist shadow-lift space-y-6">
              <div>
                <h3 className="text-sm font-bold font-display text-ink">
                  Capture Question via Photo / OCR
                </h3>
                <p className="text-xs text-ink-muted mt-1 leading-relaxed">
                  Upload a photo of a textbook problem, handwritten problem, or diagram. The system
                  extracts the problem statement with formulas while preserving the original source image
                  for review.
                </p>
              </div>

              {ocrFeedback && (
                <div className="p-3 text-xs font-semibold text-sky-800 bg-sky-50 border border-sky-200 rounded-xl">
                  {ocrFeedback}
                </div>
              )}

              <form onSubmit={handleOcrSubmit} className="space-y-4">
                <div className="p-6 border-2 border-dashed border-sky-200 rounded-2xl bg-sky-50/20 text-center space-y-3">
                  <Upload className="w-8 h-8 text-sky-500 mx-auto" />
                  <div>
                    <label className="cursor-pointer text-xs font-bold text-sky-600 hover:text-sky-800">
                      <span>Choose image file</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="sr-only"
                        onChange={(e) => setOcrFile(e.target.files?.[0] || null)}
                      />
                    </label>
                    <p className="text-[11px] text-ink-faint mt-1">PNG, JPG, or WEBP up to 10MB</p>
                  </div>
                  {ocrFile && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-sky-200 rounded-full text-xs text-sky-800 font-medium">
                      <ImageIcon className="w-3.5 h-3.5" />
                      {ocrFile.name} ({(ocrFile.size / 1024).toFixed(0)} KB)
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-ink uppercase tracking-wider block mb-1">
                      Expected Question Type
                    </label>
                    <select
                      value={ocrType}
                      onChange={(e) => setOcrType(e.target.value as QuestionType)}
                      className="w-full p-2.5 text-xs text-ink bg-white border border-mist rounded-xl focus:outline-none focus:border-sky-500"
                    >
                      <option value="MCQ_SINGLE">MCQ Single Choice</option>
                      <option value="MCQ_MULTIPLE">MCQ Multiple Choice</option>
                      <option value="NAT">Numerical Answer (NAT)</option>
                    </select>
                  </div>

                  <Input
                    label="Optional Text Override / Hint"
                    placeholder="Leave empty to use automatic OCR extraction"
                    value={ocrOverrideText}
                    onChange={(e) => setOcrOverrideText(e.target.value)}
                  />
                </div>

                <div className="flex justify-end pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    disabled={!ocrFile}
                    isLoading={ocrMutation.isPending}
                    className="rounded-xl"
                  >
                    <Upload className="w-4 h-4 mr-1.5" />
                    Extract & Add to Quiz
                  </Button>
                </div>
              </form>
            </Card>
          )}

          {/* TAB 3: BULK CSV IMPORT */}
          {activeTab === "bulk" && (
            <Card variant="default" className="p-6 bg-white border-mist shadow-lift space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-sm font-bold font-display text-ink">
                    Bulk Import Questions from CSV
                  </h3>
                  <p className="text-xs text-ink-muted mt-0.5">
                    Import multiple questions mixing MCQ_SINGLE, MCQ_MULTIPLE, and NAT in a single batch.
                  </p>
                </div>

                <a
                  href={`/quizzes/${quiz.id}/questions/template`}
                  download="quiz_questions_template.csv"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-sky-200 bg-sky-50 hover:bg-sky-100 text-sky-800 text-xs font-bold transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download CSV Template
                </a>
              </div>

              {bulkFeedback && (
                <div
                  className={`p-4 rounded-xl border text-xs space-y-2 ${
                    bulkFeedback.imported > 0
                      ? "bg-blue-50/80 border-blue-200 text-blue-900"
                      : "bg-rose-50 border-rose-200 text-rose-900"
                  }`}
                >
                  <div className="font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Import summary: {bulkFeedback.imported} imported, {bulkFeedback.skipped} skipped
                  </div>
                  {bulkFeedback.errors.length > 0 && (
                    <div className="space-y-1 pt-1 border-t border-rose-200">
                      <div className="font-semibold text-rose-800">Errors encountered:</div>
                      <ul className="list-disc list-inside text-rose-700 space-y-0.5 max-h-48 overflow-y-auto">
                        {bulkFeedback.errors.map((err, i) => (
                          <li key={i}>
                            Row {err.row}: {err.reason}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              <form onSubmit={handleBulkSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-ink uppercase tracking-wider">
                    Upload CSV File
                  </label>
                  <input
                    type="file"
                    accept=".csv,text/csv"
                    onChange={(e) => setCsvFile(e.target.files?.[0] || null)}
                    className="block w-full text-xs text-ink-muted file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100 cursor-pointer"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-ink uppercase tracking-wider">
                    Or Paste CSV Data Directly
                  </label>
                  <textarea
                    rows={6}
                    value={csvText}
                    onChange={(e) => setCsvText(e.target.value)}
                    placeholder="question_type,question_text,positive_marks,negative_marks,nat_answer,nat_tolerance,option_1,option_2,option_3,option_4,correct_options&#10;MCQ_SINGLE,Derivative of $\sin(x)$?,4.0,1.0,,,$\cos(x)$,$-\cos(x)$,$\tan(x)$,$1$,1"
                    className="w-full p-3 font-mono text-xs text-ink bg-white border border-mist rounded-xl focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div className="flex justify-end pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    disabled={!csvFile && !csvText.trim()}
                    isLoading={bulkImportMutation.isPending}
                    className="rounded-xl"
                  >
                    <Upload className="w-4 h-4 mr-1.5" />
                    Process & Import Questions
                  </Button>
                </div>
              </form>
            </Card>
          )}
        </div>
      )}

      {/* Existing Questions List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-mist">
          <h2 className="text-base font-bold font-display text-ink">
            Quiz Problem Set ({quiz.questions.length})
          </h2>
          <span className="text-xs text-ink-muted">
            Total Potential: <strong className="text-ink">{quiz.total_marks} Marks</strong>
          </span>
        </div>

        {quiz.questions.length === 0 ? (
          <div className="p-12 text-center border-2 border-dashed border-mist rounded-2xl bg-white space-y-2">
            <p className="text-sm font-semibold text-ink">No questions added yet</p>
            <p className="text-xs text-ink-muted">
              Use the unified LaTeX builder above or upload textbook photos via OCR to build your quiz.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {quiz.questions.map((q, idx) => (
              <Card
                key={q.id}
                variant="default"
                className="p-5 bg-white border-mist shadow-soft space-y-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-xs font-bold text-slate-800">
                      {idx + 1}
                    </span>
                    <Badge variant="DEFAULT">
                      {q.question_type === "MCQ_SINGLE"
                        ? "MCQ Single"
                        : q.question_type === "MCQ_MULTIPLE"
                        ? "MCQ Multiple"
                        : "Numerical (NAT)"}
                    </Badge>
                    <span className="text-xs font-medium text-ink-muted">
                      (+{q.positive_marks} / -{q.negative_marks})
                    </span>
                  </div>

                  {!isLocked && (
                    <button
                      type="button"
                      onClick={() => handleDeleteQuestion(q.id)}
                      className="p-1.5 text-ink-faint hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors"
                      title="Delete Question"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Inline Question Text with KaTeX */}
                <div className="text-sm text-ink font-medium leading-relaxed">
                  <MathText text={q.question_text} />
                </div>

                {/* OCR Source Image comparison if present */}
                {q.source_image_url && (
                  <div className="p-3 bg-slate-50 border border-mist rounded-xl flex items-center gap-3">
                    <img
                      src={q.source_image_url}
                      alt="Source question"
                      className="w-16 h-16 object-cover rounded-lg border border-slate-200"
                    />
                    <div className="text-[11px] text-ink-muted space-y-0.5">
                      <div className="font-semibold text-ink">Original Photo Capture</div>
                      <div>Kept alongside OCR-extracted text for mentor review.</div>
                      <a
                        href={q.source_image_url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sky-600 hover:underline"
                      >
                        View Full Image ↗
                      </a>
                    </div>
                  </div>
                )}

                {/* Question Options or NAT value */}
                {q.question_type !== "NAT" ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                    {q.options.map((opt, oIdx) => (
                      <div
                        key={opt.id}
                        className={`p-2.5 rounded-xl border text-xs flex items-center justify-between ${
                          opt.is_correct
                            ? "bg-blue-50/60 border-blue-300 text-blue-950 font-semibold"
                            : "bg-slate-50/50 border-slate-200 text-ink"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-ink-muted">
                            {String.fromCharCode(65 + oIdx)}.
                          </span>
                          <MathText text={opt.option_text} />
                        </div>
                        {opt.is_correct && (
                          <span className="text-[10px] uppercase font-bold text-blue-700 bg-blue-100 px-1.5 py-0.5 rounded">
                            Key
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-1">
                    <div className="font-bold text-ink">
                      Numerical Key: <span className="font-mono text-blue-700">{q.nat_answer}</span>
                    </div>
                    <div className="text-ink-muted text-[11px]">
                      Acceptable Range: [{Number(q.nat_answer) - Number(q.nat_tolerance || 0)},{" "}
                      {Number(q.nat_answer) + Number(q.nat_tolerance || 0)}] (±
                      {q.nat_tolerance || 0})
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
