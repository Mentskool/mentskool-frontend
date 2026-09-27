"use client";

import React from "react";
import { Task } from "@/lib/types";
import {
  Code2,
  FileText,
  Users,
  AlertCircle,
  Calendar,
  CheckCircle2,
  Clock,
  Hourglass,
  ChevronRight,
  User,
} from "lucide-react";

interface StudentTaskRowProps {
  task: Task;
  onViewDetails: (task: Task) => void;
  onMarkComplete?: (taskId: string) => Promise<void> | void;
  isActionLoading?: boolean;
}

export const StudentTaskRow: React.FC<StudentTaskRowProps> = ({
  task,
  onViewDetails,
  onMarkComplete,
  isActionLoading = false,
}) => {
  // Infer category icon and pastel color based on title/description or status
  const getCategoryTheme = () => {
    const text = (task.title + " " + task.description).toLowerCase();
    if (task.status === "REJECTED") {
      return {
        icon: <Code2 className="w-5 h-5 text-rose-600" />,
        bg: "bg-rose-50 border-rose-200/60",
      };
    }
    if (text.includes("feedback") || text.includes("review") || text.includes("doubt")) {
      return {
        icon: <Users className="w-5 h-5 text-amber-600" />,
        bg: "bg-amber-50 border-amber-200/60",
      };
    }
    if (text.includes("dpp") || text.includes("code") || text.includes("solve") || text.includes("question") || text.includes("math") || text.includes("physics")) {
      return {
        icon: <Code2 className="w-5 h-5 text-emerald-600" />,
        bg: "bg-emerald-50 border-emerald-200/60",
      };
    }
    return {
      icon: <FileText className="w-5 h-5 text-blue-600" />,
      bg: "bg-blue-50 border-blue-200/60",
    };
  };

  const { icon, bg } = getCategoryTheme();

  // Status visual representation with subtext
  const renderStatus = () => {
    switch (task.status) {
      case "APPROVED": {
        const completedDate = task.reviewed_at
          ? new Date(task.reviewed_at).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })
          : task.week_end;
        return (
          <div className="text-right flex flex-col items-end">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/70">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Completed
            </span>
            <span className="text-[11px] text-slate-400 mt-1">
              Completed on {completedDate}
            </span>
          </div>
        );
      }
      case "ASSIGNED": {
        // Calculate remaining days from week_end
        let dueText = "Due this week";
        if (task.week_end) {
          const end = new Date(task.week_end).getTime();
          const now = new Date().getTime();
          const diffDays = Math.ceil((end - now) / (1000 * 60 * 60 * 24));
          if (diffDays > 0) dueText = `Due in ${diffDays} day${diffDays > 1 ? "s" : ""}`;
          else if (diffDays === 0) dueText = "Due today";
          else dueText = "Past scheduled date";
        }
        return (
          <div className="text-right flex flex-col items-end">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200/70">
              <Clock className="w-3.5 h-3.5 text-blue-600" />
              In Progress
            </span>
            <span className="text-[11px] text-slate-400 mt-1">{dueText}</span>
          </div>
        );
      }
      case "MARKED_COMPLETE":
        return (
          <div className="text-right flex flex-col items-end">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200/70">
              <Hourglass className="w-3.5 h-3.5 text-amber-600" />
              Pending Review
            </span>
            <span className="text-[11px] text-slate-400 mt-1">Waiting for mentor</span>
          </div>
        );
      case "REJECTED":
        return (
          <div className="text-right flex flex-col items-end">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200/70">
              <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
              Rejected
            </span>
            <span className="text-[11px] text-rose-500 font-medium mt-1">Rework required</span>
          </div>
        );
    }
  };

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-xs hover:shadow-soft hover:border-slate-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      {/* Left: Icon + Content */}
      <div className="flex items-start gap-4 flex-1 min-w-0">
        <div
          className={`w-12 h-12 rounded-2xl border flex items-center justify-center flex-shrink-0 mt-0.5 ${bg}`}
        >
          {icon}
        </div>

        <div className="min-w-0 flex-1 space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-sm sm:text-base font-bold text-slate-900 truncate">
              {task.title}
            </h3>
            {task.is_late && (
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-200">
                Late
              </span>
            )}
          </div>

          <p className="text-xs text-slate-500 line-clamp-1 max-w-xl">
            {task.description}
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-slate-400 pt-0.5">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>Assigned week: {task.week_start} to {task.week_end}</span>
            </span>
            <span className="flex items-center gap-1">
              <User className="w-3.5 h-3.5 text-slate-400" />
              <span>Mentor: <strong className="text-slate-600 font-semibold">{task.mentor_name}</strong></span>
            </span>
          </div>
        </div>
      </div>

      {/* Right: Status & View Details Button */}
      <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-5 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-100 flex-shrink-0">
        {renderStatus()}

        <button
          onClick={() => onViewDetails(task)}
          className="inline-flex items-center gap-1 px-3.5 py-2 text-xs font-semibold rounded-xl text-slate-700 hover:text-blue-600 bg-slate-50 hover:bg-blue-50/80 border border-slate-200 hover:border-blue-200 transition-all shadow-xs"
        >
          <span>View Details</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
