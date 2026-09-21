import React from "react";
import { StudentEfficiencyResponse } from "@/lib/types";
import { Card } from "./ui/Card";

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
      <Card className="animate-pulse">
        <div className="h-6 w-32 bg-mist rounded mb-4" />
        <div className="h-16 w-48 bg-mist rounded mb-6" />
        <div className="grid grid-cols-4 gap-4 pt-4 border-t border-mist">
          <div className="h-10 bg-mist rounded" />
          <div className="h-10 bg-mist rounded" />
          <div className="h-10 bg-mist rounded" />
          <div className="h-10 bg-mist rounded" />
        </div>
      </Card>
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

  // Determine score color token
  let scoreColorClass = "text-ink";
  if (efficiency_score !== null) {
    if (efficiency_score >= 80) {
      scoreColorClass = "text-moss";
    } else if (efficiency_score >= 50) {
      scoreColorClass = "text-amber";
    } else {
      scoreColorClass = "text-ink";
    }
  }

  return (
    <Card className="bg-white">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-mist">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-ink-faint">
            Accountability Rating
          </span>
          <h2 className="text-xl font-bold font-display text-ink mt-0.5">
            Weekly Task Efficiency
          </h2>
          <p className="text-xs text-ink-muted mt-1 max-w-md">
            Calculated as approved tasks divided by effective assigned tasks.
            Rejected tasks are excluded from the denominator.
          </p>
        </div>

        <div className="flex items-baseline gap-2">
          {efficiency_score !== null ? (
            <>
              <span
                className={`text-5xl font-extrabold font-display ${scoreColorClass}`}
              >
                {efficiency_score.toFixed(1)}%
              </span>
            </>
          ) : (
            <div className="text-left">
              <span className="text-2xl font-bold font-display text-ink-muted">
                No data yet
              </span>
              <p className="text-xs text-ink-faint mt-0.5">
                Complete your first assigned task to generate a score
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
        <div className="flex flex-col">
          <span className="text-xs text-ink-faint">Assigned</span>
          <span className="text-lg font-bold font-display text-ink">
            {tasks_assigned}
          </span>
        </div>

        <div className="flex flex-col">
          <span className="text-xs text-ink-faint">Approved</span>
          <span className="text-lg font-bold font-display text-moss">
            {tasks_approved}
          </span>
        </div>

        <div className="flex flex-col">
          <span className="text-xs text-ink-faint">
            Rejected <span className="text-[10px] text-ink-faint">(excluded)</span>
          </span>
          <span className="text-lg font-bold font-display text-ink-muted">
            {tasks_rejected}
          </span>
        </div>

        <div className="flex flex-col">
          <span className="text-xs text-ink-faint">Pending Review</span>
          <span className="text-lg font-bold font-display text-amber">
            {tasks_pending}
          </span>
        </div>
      </div>
    </Card>
  );
};
