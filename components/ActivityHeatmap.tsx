"use client";

import React, { useState } from "react";
import { DayActivityItem } from "@/lib/types";
import { Activity, Flame, ShieldAlert, Sparkles } from "lucide-react";

interface ActivityHeatmapProps {
  heatmap?: DayActivityItem[];
  activityStatus?: string;
  compact?: boolean;
  showStatusBadge?: boolean;
  className?: string;
}

export const ActivityHeatmap: React.FC<ActivityHeatmapProps> = ({
  heatmap = [],
  activityStatus = "ACTIVE_TODAY",
  compact = false,
  showStatusBadge = true,
  className = "",
}) => {
  const [hoveredDay, setHoveredDay] = useState<DayActivityItem | null>(null);

  // Generate 30 days dummy fallback if backend hasn't populated yet
  const displayDays: DayActivityItem[] =
    heatmap && heatmap.length === 30
      ? heatmap
      : Array.from({ length: 30 }).map((_, i) => ({
          date: `Day ${i + 1}`,
          count: i === 29 ? 1 : 0,
          level: i === 29 ? 1 : 0,
        }));

  // Activity Status configuration
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "ACTIVE_TODAY":
        return {
          label: "Active Today",
          color: "bg-emerald-50 text-emerald-700 border-emerald-200",
          dot: "bg-emerald-500 animate-pulse",
          icon: <Flame className="w-3.5 h-3.5 text-emerald-600" />,
        };
      case "ACTIVE_YESTERDAY":
        return {
          label: "Active Yesterday",
          color: "bg-teal-50 text-teal-700 border-teal-200",
          dot: "bg-teal-500",
          icon: <Activity className="w-3.5 h-3.5 text-teal-600" />,
        };
      case "ACTIVE_2D_AGO":
      case "ACTIVE_3D_AGO":
        return {
          label: "Active Recently",
          color: "bg-blue-50 text-blue-700 border-blue-200",
          dot: "bg-blue-500",
          icon: <Activity className="w-3.5 h-3.5 text-blue-600" />,
        };
      case "ACTIVE_THIS_WEEK":
        return {
          label: "Active This Week",
          color: "bg-amber-50 text-amber-700 border-amber-200",
          dot: "bg-amber-500",
          icon: <Sparkles className="w-3.5 h-3.5 text-amber-600" />,
        };
      default:
        return {
          label: "Inactive",
          color: "bg-slate-100 text-slate-600 border-slate-200",
          dot: "bg-slate-400",
          icon: <ShieldAlert className="w-3.5 h-3.5 text-slate-500" />,
        };
    }
  };

  const badge = getStatusBadge(activityStatus);

  // Level colour mapping (GitHub/LeetCode style)
  const getLevelColor = (level: number) => {
    switch (level) {
      case 1:
        return "bg-emerald-200 hover:bg-emerald-300 border-emerald-300";
      case 2:
        return "bg-emerald-400 hover:bg-emerald-500 border-emerald-500";
      case 3:
        return "bg-emerald-600 hover:bg-emerald-700 border-emerald-600";
      case 4:
        return "bg-emerald-800 hover:bg-emerald-900 border-emerald-700";
      default:
        return "bg-slate-100 hover:bg-slate-200 border-slate-200/80";
    }
  };

  const totalActivities = displayDays.reduce((acc, curr) => acc + (curr.count || 0), 0);

  return (
    <div className={`space-y-2 ${className}`}>
      {/* Header with Activity Status */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          {showStatusBadge && (
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${badge.color}`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${badge.dot}`} />
              {badge.label}
            </span>
          )}
          <span className="text-[11px] font-medium text-ink-muted">
            30-Day Activity ({totalActivities} action{totalActivities === 1 ? "" : "s"})
          </span>
        </div>

        {/* Hover info tooltip */}
        {hoveredDay && (
          <span className="text-[11px] font-medium text-slate-800 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
            {hoveredDay.date}:{" "}
            <strong>
              {hoveredDay.count} {hoveredDay.count === 1 ? "activity" : "activities"}
            </strong>
          </span>
        )}
      </div>

      {/* The 30 Heatmap Dots */}
      <div className="flex items-center gap-1 overflow-x-auto py-1">
        {displayDays.map((day, idx) => (
          <div
            key={day.date || idx}
            onMouseEnter={() => setHoveredDay(day)}
            onMouseLeave={() => setHoveredDay(null)}
            className={`transition-all duration-150 rounded cursor-pointer border ${getLevelColor(
              day.level
            )} ${compact ? "w-2.5 h-4" : "w-3 h-5 flex-1 min-w-[7px]"}`}
            title={`${day.date}: ${day.count} activities`}
          />
        ))}
      </div>

      {/* Legend */}
      {!compact && (
        <div className="flex items-center justify-between text-[10px] text-ink-muted px-0.5 pt-0.5">
          <span>30 days ago</span>
          <div className="flex items-center gap-1">
            <span>Less</span>
            <span className="w-2 h-2 rounded bg-slate-100 border border-slate-200" />
            <span className="w-2 h-2 rounded bg-emerald-200 border border-emerald-300" />
            <span className="w-2 h-2 rounded bg-emerald-400 border border-emerald-500" />
            <span className="w-2 h-2 rounded bg-emerald-600 border border-emerald-600" />
            <span className="w-2 h-2 rounded bg-emerald-800 border border-emerald-700" />
            <span>More</span>
          </div>
          <span>Today</span>
        </div>
      )}
    </div>
  );
};
