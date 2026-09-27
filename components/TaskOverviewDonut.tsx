"use client";

import React from "react";
import { CheckSquare } from "lucide-react";

interface TaskOverviewDonutProps {
  completed: number;
  inProgress: number;
  pendingReview: number;
  rejected: number;
  onViewAll?: () => void;
}

export const TaskOverviewDonut: React.FC<TaskOverviewDonutProps> = ({
  completed,
  inProgress,
  pendingReview,
  rejected,
  onViewAll,
}) => {
  const total = completed + inProgress + pendingReview + rejected;
  const completedPct = total > 0 ? Math.round((completed / total) * 100) : 0;

  // SVG Donut calculation
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (completedPct / 100) * circumference;

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CheckSquare className="w-4 h-4 text-slate-700" />
          <h3 className="text-sm font-bold text-slate-900">Task Overview</h3>
        </div>
        {onViewAll && (
          <button
            onClick={onViewAll}
            className="text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline"
          >
            View All
          </button>
        )}
      </div>

      {/* Chart + Legend */}
      <div className="flex items-center justify-between gap-4 pt-1">
        {/* Circular Donut Gauge */}
        <div className="relative w-28 h-28 flex items-center justify-center flex-shrink-0">
          <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
            {/* Background ring */}
            <circle
              cx="50"
              cy="50"
              r={radius}
              className="text-slate-100"
              strokeWidth="9"
              stroke="currentColor"
              fill="transparent"
            />
            {/* Active completed progress ring */}
            <circle
              cx="50"
              cy="50"
              r={radius}
              className="text-emerald-500 transition-all duration-700 ease-out"
              strokeWidth="9"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
            />
          </svg>

          {/* Center text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-xl font-black font-display text-slate-900 leading-none">
              {completedPct}%
            </span>
            <span className="text-[10px] text-slate-400 font-semibold mt-0.5">
              Completed
            </span>
          </div>
        </div>

        {/* Legend Breakdown */}
        <div className="flex-1 space-y-2 text-xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-slate-600 font-medium">Completed</span>
            </div>
            <span className="font-bold text-slate-900">{completed}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-slate-600 font-medium">In Progress</span>
            </div>
            <span className="font-bold text-slate-900">{inProgress}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span className="text-slate-600 font-medium">Pending Review</span>
            </div>
            <span className="font-bold text-slate-900">{pendingReview}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              <span className="text-slate-600 font-medium">Rejected</span>
            </div>
            <span className="font-bold text-slate-900">{rejected}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
