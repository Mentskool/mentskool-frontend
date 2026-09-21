"use client";

import React from "react";
import Link from "next/link";
import { useAuthStore } from "@/store/authStore";
import { useStudentEfficiency } from "@/hooks/useEfficiency";
import { EfficiencyScore } from "@/components/EfficiencyScore";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function StudentEfficiencyPage() {
  const { user, isAuthenticated, isLoading: authLoading } = useAuthStore();
  const {
    data: efficiency,
    isLoading: effLoading,
    isError,
    refetch,
  } = useStudentEfficiency(user?.id);

  if (authLoading) {
    return (
      <div className="animate-pulse py-12 text-center text-ink-faint">
        Loading efficiency data...
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return (
      <div className="py-16 text-center">
        <h2 className="text-xl font-bold font-display text-ink mb-2">
          Sign In Required
        </h2>
        <p className="text-sm text-ink-muted mb-6">
          Please sign in to inspect your accountability rating.
        </p>
        <Link href="/login">
          <Button variant="primary" size="md">
            Sign In
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-display text-ink tracking-tight">
            Accountability & Efficiency
          </h1>
          <p className="text-sm text-ink-muted mt-1.5">
            Real-time performance score computed directly from your mentor review history.
          </p>
        </div>

        <Link href="/dashboard/tasks">
          <Button size="sm" variant="secondary">
            ← Back to Tasks
          </Button>
        </Link>
      </div>

      {isError ? (
        <div className="py-12 text-center rounded-card border border-mist bg-white p-8">
          <p className="text-sm text-ink-muted mb-4">
            Unable to compute efficiency rating at this time.
          </p>
          <Button variant="secondary" size="sm" onClick={() => refetch()}>
            Retry
          </Button>
        </div>
      ) : (
        <EfficiencyScore efficiency={efficiency ?? null} isLoading={effLoading} />
      )}

      {/* Explanatory Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        <Card variant="default" className="bg-white space-y-2">
          <h3 className="text-sm font-bold font-display text-ink">
            The Scoring Formula
          </h3>
          <p className="text-xs text-ink-muted leading-relaxed">
            Your efficiency score is computed as:
          </p>
          <div className="p-2.5 bg-paper rounded-control border border-mist text-xs font-mono text-ink">
            Approved / (Assigned - Rejected) × 100
          </div>
          <p className="text-xs text-ink-faint leading-relaxed pt-1">
            If no approved or pending tasks exist, the score displays &quot;No data yet&quot;
            rather than a misleading 0%.
          </p>
        </Card>

        <Card variant="default" className="bg-white space-y-2">
          <h3 className="text-sm font-bold font-display text-ink">
            Deliberate Product Rules
          </h3>
          <ul className="text-xs text-ink-muted space-y-1.5 list-disc list-inside leading-relaxed">
            <li>
              <strong className="text-ink">Rejected tasks are excluded:</strong> They
              are completely removed from the denominator and do not penalize your score.
            </li>
            <li>
              <strong className="text-ink">Late submissions flagged:</strong> Tasks
              completed after the scheduled week end date are marked as late for mentor visibility.
            </li>
            <li>
              <strong className="text-ink">Terminal reviews:</strong> Once reviewed,
              task states are locked to preserve score integrity.
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
