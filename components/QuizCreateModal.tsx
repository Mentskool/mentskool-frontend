"use client";

import React, { useState } from "react";
import { useCreateQuiz } from "@/hooks/useQuizzes";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/Textarea";
import { X, Calendar, Clock, Award } from "lucide-react";

interface QuizCreateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreated: (quizId: string) => void;
}

export const QuizCreateModal: React.FC<QuizCreateModalProps> = ({
  isOpen,
  onClose,
  onCreated,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [hasDeadline, setHasDeadline] = useState(false);
  const [deadlineAt, setDeadlineAt] = useState("");
  const [scheduleLive, setScheduleLive] = useState(false);
  const [liveAt, setLiveAt] = useState("");
  const [positiveMarks, setPositiveMarks] = useState("4.00");
  const [negativeMarks, setNegativeMarks] = useState("1.00");
  const [errorMsg, setErrorMsg] = useState("");

  const createMutation = useCreateQuiz();

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!title.trim()) {
      setErrorMsg("Quiz title is required");
      return;
    }

    try {
      const created = await createMutation.mutateAsync({
        title: title.trim(),
        description: description.trim(),
        has_deadline: hasDeadline,
        deadline_at: hasDeadline && deadlineAt ? new Date(deadlineAt).toISOString() : null,
        live_at: scheduleLive && liveAt ? new Date(liveAt).toISOString() : null,
        default_positive_marks: parseFloat(positiveMarks) || 4.0,
        default_negative_marks: parseFloat(negativeMarks) || 1.0,
      });

      onCreated(created.id);
      onClose();
    } catch (err: any) {
      setErrorMsg(err.detail || "Failed to create quiz");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/40 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-lift border border-mist p-6 space-y-6 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-3 border-b border-mist">
          <div>
            <div className="text-[11px] font-bold text-sky-700 uppercase tracking-wider">
              Mentor Authoring
            </div>
            <h2 className="text-xl font-bold font-display text-ink">
              Create New Exam Quiz
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-ink-faint hover:text-ink hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {errorMsg && (
          <div className="p-3 text-xs font-semibold text-rose-700 bg-rose-50 border border-rose-200 rounded-xl">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Quiz Title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. JEE Adv Mock: Kinematics & Laws of Motion"
          />

          <Textarea
            label="Description & Instructions"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Brief overview of covered syllabus, exam pattern guidelines, and instructions."
            rows={3}
          />

          {/* Marking Scheme */}
          <div className="p-3.5 bg-slate-50/70 border border-mist rounded-xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-ink">
              <Award className="w-4 h-4 text-sky-600" />
              Default Marking Scheme (JEE / NEET Pattern)
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Input
                label="Positive Marks (+)"
                type="number"
                step="0.5"
                min="0"
                value={positiveMarks}
                onChange={(e) => setPositiveMarks(e.target.value)}
              />
              <Input
                label="Negative Deduction (-)"
                type="number"
                step="0.5"
                min="0"
                value={negativeMarks}
                onChange={(e) => setNegativeMarks(e.target.value)}
              />
            </div>
            <p className="text-[11px] text-ink-faint">
              Negative deduction is applied on incorrect responses. Defaults can be overridden per question.
            </p>
          </div>

          {/* Schedule / Live Date */}
          <div className="p-3.5 bg-slate-50/70 border border-mist rounded-xl space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-ink">
                <Clock className="w-4 h-4 text-sky-600" />
                Schedule for Future Release
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={scheduleLive}
                  onChange={(e) => setScheduleLive(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-sky-600"></div>
              </label>
            </div>
            {scheduleLive && (
              <Input
                label="Go Live At (UTC / Local Time)"
                type="datetime-local"
                value={liveAt}
                onChange={(e) => setLiveAt(e.target.value)}
                helperText="Quiz will be visible only to you until this time passes."
              />
            )}
          </div>

          {/* Deadline */}
          <div className="p-3.5 bg-slate-50/70 border border-mist rounded-xl space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-ink">
                <Calendar className="w-4 h-4 text-sky-600" />
                Enforce Submission Deadline
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasDeadline}
                  onChange={(e) => setHasDeadline(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-sky-600"></div>
              </label>
            </div>
            {hasDeadline && (
              <Input
                label="Deadline Date & Time"
                type="datetime-local"
                value={deadlineAt}
                onChange={(e) => setDeadlineAt(e.target.value)}
                helperText="After deadline, student access becomes read-only and no new attempts can be started."
              />
            )}
          </div>

          <div className="flex items-center justify-end gap-3 pt-3 border-t border-mist">
            <Button type="button" variant="secondary" size="md" onClick={onClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
              size="md"
              isLoading={createMutation.isPending}
            >
              Continue to Question Builder →
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
