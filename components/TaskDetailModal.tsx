"use client";

import React from "react";
import { Task } from "@/lib/types";
import { Button } from "./ui/Button";
import { Badge } from "./ui/Badge";
import { MathText } from "./MathText";
import {
  X,
  Calendar,
  UserCheck,
  CheckCircle2,
  Clock,
  Hourglass,
  AlertCircle,
  MessageSquare,
} from "lucide-react";

interface TaskDetailModalProps {
  task: Task | null;
  isOpen: boolean;
  onClose: () => void;
  onMarkComplete?: (taskId: string) => Promise<void> | void;
  isActionLoading?: boolean;
}

export const TaskDetailModal: React.FC<TaskDetailModalProps> = ({
  task,
  isOpen,
  onClose,
  onMarkComplete,
  isActionLoading = false,
}) => {
  if (!isOpen || !task) return null;

  const getStatusBadge = () => {
    switch (task.status) {
      case "APPROVED":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Completed
          </span>
        );
      case "ASSIGNED":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
            <Clock className="w-3.5 h-3.5 text-blue-600" />
            In Progress
          </span>
        );
      case "MARKED_COMPLETE":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
            <Hourglass className="w-3.5 h-3.5 text-amber-600" />
            Pending Review
          </span>
        );
      case "REJECTED":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200">
            <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
            Rework Required
          </span>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity animate-fade-in"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-elevated border border-slate-200 overflow-hidden z-10 animate-slide-up">
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-100 flex items-start justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 flex-wrap">
              {getStatusBadge()}
              {task.is_late && <Badge variant="LATE">Late Submission</Badge>}
            </div>
            <h2 className="text-xl font-bold font-display text-slate-900 leading-snug">
              {task.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-5 max-h-[70vh] overflow-y-auto">
          {/* Metadata pill row */}
          <div className="grid grid-cols-2 gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
            <div className="flex items-center gap-2 text-slate-600">
              <Calendar className="w-4 h-4 text-blue-600 flex-shrink-0" />
              <div>
                <p className="text-[10px] text-slate-400 font-semibold uppercase">Assigned Cycle</p>
                <p className="font-semibold text-slate-800">{task.week_start} → {task.week_end}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-slate-600">
              <UserCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <div>
                <p className="text-[10px] text-slate-400 font-semibold uppercase">Mentor</p>
                <p className="font-semibold text-slate-800">{task.mentor_name}</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Objective & Instructions
            </h4>
            <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-100 text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
              <MathText text={task.description} />
            </div>
          </div>

          {/* Mentor Feedback Note (if present) */}
          {task.mentor_note && (
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800 uppercase tracking-wider">
                <MessageSquare className="w-3.5 h-3.5 text-amber-600" />
                <span>Mentor Review Note</span>
              </div>
              <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/80 text-xs text-amber-900 leading-relaxed whitespace-pre-wrap font-medium">
                {task.mentor_note}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3">
          <Button
            size="sm"
            variant="ghost"
            onClick={onClose}
            className="text-xs text-slate-500 hover:text-slate-800"
          >
            Close
          </Button>

          {task.status === "ASSIGNED" && onMarkComplete && (
            <Button
              size="sm"
              variant="primary"
              isLoading={isActionLoading}
              onClick={async () => {
                await onMarkComplete(task.id);
                onClose();
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2 rounded-xl shadow-soft"
            >
              <CheckCircle2 className="w-4 h-4 mr-1.5" />
              Mark Task Complete
            </Button>
          )}

          {task.status === "MARKED_COMPLETE" && (
            <span className="text-xs font-semibold text-amber-700 flex items-center gap-1.5">
              <Hourglass className="w-4 h-4" />
              Awaiting mentor approval
            </span>
          )}

          {task.status === "APPROVED" && (
            <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              Verified & Approved
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
