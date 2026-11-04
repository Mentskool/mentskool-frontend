import React from "react";
import { StudentEfficiencyResponse } from "@/lib/types";
import {
  CheckCircle2,
  Clock,
  Hourglass,
  AlertCircle,
  TrendingUp,
  Sparkles,
  Info,
} from "lucide-react";

export interface EfficiencyScoreProps {
  efficiency: StudentEfficiencyResponse | null;
  isLoading?: boolean;
}

export const EfficiencyScore: React.FC<EfficiencyScoreProps> = ({
  efficiency,
  isLoading = false,
}) => {
  if (isLoading) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-xs animate-pulse space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <div className="h-4 w-28 bg-slate-200 rounded-full" />
            <div className="h-7 w-48 bg-slate-200 rounded-lg" />
          </div>
          <div className="h-12 w-24 bg-slate-200 rounded-xl" />
        </div>
        <div className="h-4 w-full bg-slate-100 rounded-full" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-slate-100">
          <div className="h-16 bg-slate-100 rounded-xl" />
          <div className="h-16 bg-slate-100 rounded-xl" />
          <div className="h-16 bg-slate-100 rounded-xl" />
          <div className="h-16 bg-slate-100 rounded-xl" />
        </div>
      </div>
    );
  }

  if (!efficiency) {
    return null;
  }

  const {
    efficiency_score,
    tasks_assigned,
    tasks_approved,
    tasks_rejected,
    tasks_pending,
    effective_denominator,
  } = efficiency;

  // Derive status details
  const hasScore = efficiency_score !== null && efficiency_score !== undefined;
  const scoreVal = hasScore ? Math.round(efficiency_score) : null;

  let tier = {
    badge: "Pending Review",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    scoreColor: "text-amber-600",
    summary: "Your tasks are currently submitted and waiting for mentor review.",
  };

  if (scoreVal !== null) {
    if (scoreVal >= 80) {
      tier = {
        badge: "Top Tier Consistency",
        badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
        scoreColor: "text-emerald-600",
        summary: "Excellent completion rate! You are maintaining high accountability.",
      };
    } else if (scoreVal >= 50) {
      tier = {
        badge: "Good Progress",
        badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
        scoreColor: "text-blue-600",
        summary: "Solid momentum this cycle. Finish pending tasks to push your score higher.",
      };
    } else if (tasks_assigned === 0) {
      tier = {
        badge: "No Tasks Assigned",
        badgeColor: "bg-slate-100 text-slate-600 border-slate-200",
        scoreColor: "text-slate-400",
        summary: "Check back once your mentor assigns tasks for your current study cycle.",
      };
    } else if (tasks_pending > 0 && tasks_approved === 0) {
      tier = {
        badge: "Awaiting Mentor Signoff",
        badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
        scoreColor: "text-amber-600",
        summary: `${tasks_pending} task${tasks_pending > 1 ? "s" : ""} pending review. Your score updates once approved.`,
      };
    } else {
      tier = {
        badge: "Needs Focus",
        badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
        scoreColor: "text-rose-600",
        summary: "Reach out to your mentor to clear backlogs or align on realistic targets.",
      };
    }
  }

  // Percentages for visual bar
  const totalRelevant = Math.max(tasks_assigned, 1);
  const approvedPct = Math.round((tasks_approved / totalRelevant) * 100);
  const pendingPct = Math.round((tasks_pending / totalRelevant) * 100);
  const remainingCount = Math.max(0, tasks_assigned - tasks_approved - tasks_pending - tasks_rejected);
  const inProgressPct = Math.max(0, 100 - approvedPct - pendingPct);

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-6 sm:p-7 space-y-6">
      {/* Top Header & Big Score */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 pb-5 border-b border-slate-100">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${tier.badgeColor}`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              {tier.badge}
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 tracking-tight">
            Weekly Accountability Score
          </h2>
          <p className="text-xs text-slate-500 max-w-md leading-relaxed">
            {tier.summary}
          </p>
        </div>

        {/* Big Score Display */}
        <div className="flex items-baseline gap-2 self-start sm:self-center bg-slate-50/80 border border-slate-200/80 px-5 py-3.5 rounded-2xl shadow-2xs">
          {scoreVal !== null ? (
            <div className="text-right">
              <span className={`text-4xl sm:text-5xl font-black font-display tracking-tight ${tier.scoreColor}`}>
                {scoreVal}%
              </span>
              <p className="text-[11px] font-medium text-slate-400 mt-0.5">
                Target: 80%+
              </p>
            </div>
          ) : (
            <div className="text-right">
              <span className="text-2xl sm:text-3xl font-bold font-display text-slate-400">
                Pending
              </span>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Awaiting first review
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Visual Multi-Segment Completion Bar */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
          <span>Weekly Task Breakdown</span>
          <span className="text-slate-400 font-normal">
            {tasks_approved} of {effective_denominator > 0 ? effective_denominator : tasks_assigned} effective tasks completed
          </span>
        </div>

        <div className="h-3.5 w-full bg-slate-100 rounded-full overflow-hidden flex p-0.5 gap-0.5 border border-slate-200/50">
          {approvedPct > 0 && (
            <div
              style={{ width: `${approvedPct}%` }}
              className="bg-emerald-500 rounded-full transition-all duration-500 relative group"
              title={`Approved: ${tasks_approved}`}
            />
          )}
          {pendingPct > 0 && (
            <div
              style={{ width: `${pendingPct}%` }}
              className="bg-amber-400 rounded-full transition-all duration-500 relative group"
              title={`Pending Review: ${tasks_pending}`}
            />
          )}
          {tasks_assigned > 0 && remainingCount > 0 && (
            <div
              style={{ width: `${Math.max(5, inProgressPct)}%` }}
              className="bg-blue-400/70 rounded-full transition-all duration-500 relative group"
              title={`In Progress: ${remainingCount}`}
            />
          )}
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 flex-wrap text-[11px] text-slate-500 pt-1">
          <span className="flex items-center gap-1.5 font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            Approved ({tasks_approved})
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            Pending Review ({tasks_pending})
          </span>
          {remainingCount > 0 && (
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
              In Progress ({remainingCount})
            </span>
          )}
          {tasks_rejected > 0 && (
            <span className="flex items-center gap-1.5 font-medium text-slate-400">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              Excluded ({tasks_rejected})
            </span>
          )}
        </div>
      </div>

      {/* 4 Task Metrics Breakdown */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 pt-2">
        <div className="bg-slate-50/70 rounded-xl p-3.5 border border-slate-200/70">
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
            Assigned
          </span>
          <p className="text-xl font-bold font-display text-slate-900 mt-1">
            {tasks_assigned}
          </p>
          <span className="text-[10px] text-slate-400 block mt-0.5">
            Total active targets
          </span>
        </div>

        <div className="bg-emerald-50/50 rounded-xl p-3.5 border border-emerald-100">
          <span className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wider block">
            Approved
          </span>
          <p className="text-xl font-bold font-display text-emerald-700 mt-1">
            {tasks_approved}
          </p>
          <span className="text-[10px] text-emerald-600 block mt-0.5">
            Verified by mentor
          </span>
        </div>

        <div className="bg-amber-50/50 rounded-xl p-3.5 border border-amber-100">
          <span className="text-[11px] font-semibold text-amber-700 uppercase tracking-wider block">
            Pending Review
          </span>
          <p className="text-xl font-bold font-display text-amber-700 mt-1">
            {tasks_pending}
          </p>
          <span className="text-[10px] text-amber-600 block mt-0.5">
            Submitted & awaiting check
          </span>
        </div>

        <div className="bg-slate-50/70 rounded-xl p-3.5 border border-slate-200/70">
          <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
            Excluded
          </span>
          <p className="text-xl font-bold font-display text-slate-600 mt-1">
            {tasks_rejected}
          </p>
          <span className="text-[10px] text-slate-400 block mt-0.5">
            Rejected (no penalty)
          </span>
        </div>
      </div>
    </div>
  );
};
