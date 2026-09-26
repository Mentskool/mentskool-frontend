"use client";

import React from "react";
import Link from "next/link";
import { useAuthStore } from "@/store/authStore";
import { useStudentEfficiency } from "@/hooks/useEfficiency";
import { useStudentQuizRanking } from "@/hooks/useQuizzes";
import { EfficiencyScore } from "@/components/EfficiencyScore";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Trophy, Award, BookOpen } from "lucide-react";

export default function StudentEfficiencyPage() {
  const { user, isAuthenticated, isLoading: authLoading } = useAuthStore();
  const {
    data: efficiency,
    isLoading: effLoading,
    isError,
    refetch,
  } = useStudentEfficiency(user?.id);
  const { data: quizRanking, isLoading: quizRankLoading } = useStudentQuizRanking(user?.id);

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
      {/* Header Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-sky-50 via-blue-50/40 to-white border border-sky-100/80 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-soft">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-sky-100/80 border border-sky-200 text-[11px] font-bold text-sky-900 uppercase tracking-wider mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
            Performance Analytics
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold font-display text-ink tracking-tight">
            Accountability & Efficiency
          </h1>
          <p className="text-sm text-ink-muted mt-1.5">
            Real-time performance score computed directly from your mentor review history.
          </p>
        </div>

        <Link href="/dashboard/tasks">
          <Button size="sm" variant="secondary" className="border-sky-200 hover:bg-sky-50 text-blue-800 font-semibold whitespace-nowrap rounded-lg">
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

      {/* Integrated Overall Exam Quiz Ranking Card */}
      <Card
        variant="default"
        className="p-6 bg-gradient-to-r from-amber-50/40 via-white to-sky-50/30 border-amber-200/80 shadow-soft space-y-4"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-amber-100">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 uppercase tracking-wider mb-1">
              <Trophy className="w-4 h-4 text-amber-500" />
              Cohort Quiz & Mock Standings
            </div>
            <h3 className="text-lg font-bold font-display text-ink">
              JEE / NEET / GATE Exam Performance
            </h3>
          </div>

          <Link href="/quizzes">
            <Button variant="secondary" size="sm" className="rounded-xl border-amber-200 text-amber-900 bg-white hover:bg-amber-50">
              <BookOpen className="w-4 h-4 mr-1.5" />
              Practice Quizzes →
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded-xl border border-mist">
            <div className="text-[11px] font-bold text-ink-faint uppercase">Average Score</div>
            <div className="text-2xl font-black font-display text-ink mt-0.5">
              {quizRanking?.average_percentage !== null && quizRanking?.average_percentage !== undefined
                ? `${quizRanking.average_percentage}%`
                : "No data yet"}
            </div>
            <p className="text-[10px] text-ink-faint mt-1">
              Percentage averaged across all attempted quizzes
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-mist">
            <div className="text-[11px] font-bold text-ink-faint uppercase">Cohort Standing</div>
            <div className="text-2xl font-black font-display text-sky-800 mt-0.5">
              {quizRanking?.rank ? `Rank #${quizRanking.rank}` : "Unranked"}
            </div>
            <p className="text-[10px] text-ink-faint mt-1">
              {quizRanking?.cohort_size
                ? `Compared against ${quizRanking.cohort_size} cohort peers`
                : "Awaiting quiz attempts"}
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-mist">
            <div className="text-[11px] font-bold text-ink-faint uppercase">Tests Attempted</div>
            <div className="text-2xl font-black font-display text-ink mt-0.5">
              {quizRanking?.quizzes_attempted || 0} Drills
            </div>
            <p className="text-[10px] text-ink-faint mt-1">
              Standardized exam drills completed
            </p>
          </div>
        </div>
      </Card>

      {/* Explanatory Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        <Card variant="default" className="bg-white border-sky-100/80 border-l-4 border-l-blue-600 space-y-2 p-5 shadow-soft">
          <h3 className="text-sm font-bold font-display text-ink flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            The Scoring Formula
          </h3>
          <p className="text-xs text-ink-muted leading-relaxed">
            Your efficiency score is computed as:
          </p>
          <div className="p-2.5 bg-blue-50/50 rounded-control border border-blue-100 text-xs font-mono text-blue-900 font-semibold">
            Approved / (Assigned - Rejected) × 100
          </div>
          <p className="text-xs text-ink-faint leading-relaxed pt-1">
            If no approved or pending tasks exist, the score displays &quot;No data yet&quot;
            rather than a misleading 0%.
          </p>
        </Card>

        <Card variant="default" className="bg-white border-sky-100/80 border-l-4 border-l-sky-500 space-y-2 p-5 shadow-soft">
          <h3 className="text-sm font-bold font-display text-ink flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-500"></span>
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
