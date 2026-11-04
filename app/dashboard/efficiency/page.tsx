"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useAuthStore } from "@/store/authStore";
import { useStudentEfficiency } from "@/hooks/useEfficiency";
import { useStudentQuizRanking } from "@/hooks/useQuizzes";
import { EfficiencyScore } from "@/components/EfficiencyScore";
import { Button } from "@/components/ui/Button";
import {
  BarChart3,
  Trophy,
  BookOpen,
  ArrowLeft,
  CheckCircle2,
  Calendar,
  AlertCircle,
  HelpCircle,
  Zap,
  TrendingUp,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Target,
  Clock,
  ShieldCheck,
  Video,
} from "lucide-react";

export default function StudentEfficiencyPage() {
  const { user, isAuthenticated, isLoading: authLoading } = useAuthStore();
  const [showFormulaDetails, setShowFormulaDetails] = useState(false);

  const {
    data: efficiency,
    isLoading: effLoading,
    isError,
    refetch,
  } = useStudentEfficiency(user?.id);
  const { data: quizRanking } = useStudentQuizRanking(user?.id);

  if (authLoading) {
    return (
      <div className="py-16 text-center text-slate-400 animate-pulse">
        Loading efficiency analytics...
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return (
      <div className="py-20 text-center max-w-md mx-auto space-y-4">
        <h2 className="text-xl font-bold font-display text-slate-900">
          Sign In Required
        </h2>
        <p className="text-xs text-slate-500">
          Please sign in to inspect your accountability rating and cohort performance metrics.
        </p>
        <Link href="/login">
          <Button variant="primary" size="md">
            Sign In
          </Button>
        </Link>
      </div>
    );
  }

  // Quiz score formatting: handle negative numbers due to exam penalty marking
  const rawAvg = quizRanking?.average_percentage;
  const numAvg = rawAvg !== null && rawAvg !== undefined ? Number(rawAvg) : null;
  const hasAvg = numAvg !== null && !isNaN(numAvg);
  const isNegativeScore = hasAvg && numAvg < 0;
  const displayScore = hasAvg ? `${numAvg.toFixed(1)}%` : "No data";

  return (
    <div className="space-y-6">
      {/* 1. Hero Header */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600 shadow-xs">
            <BarChart3 className="w-6 h-6 text-blue-600" />
          </div>

          <div className="space-y-0.5">
            <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block">
              Performance Analytics
            </span>
            <h1 className="text-2xl font-bold font-display text-slate-900">
              Accountability & Efficiency
            </h1>
            <p className="text-xs text-slate-500 max-w-xl">
              Track your execution rhythm, verified task completions, and weekly accountability score.
            </p>
          </div>
        </div>

        <Link href="/dashboard/tasks">
          <button className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-semibold shadow-xs transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Tasks</span>
          </button>
        </Link>
      </div>

      {/* 2. Stat Metric Cards (4 Cards) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
        {/* Efficiency Score */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-xs flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600 shadow-xs">
            <BarChart3 className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <p className="text-xs text-slate-500 font-medium">Efficiency Score</p>
            <p className="text-xl sm:text-2xl font-black font-display text-slate-900">
              {efficiency?.efficiency_score !== null && efficiency?.efficiency_score !== undefined
                ? `${Math.round(efficiency.efficiency_score)}%`
                : "No data"}
            </p>
          </div>
        </div>

        {/* Approved Tasks */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-xs flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0 text-emerald-600 shadow-xs">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
          </div>
          <div>
            <p className="text-xs text-slate-500 font-medium">Approved Tasks</p>
            <p className="text-xl sm:text-2xl font-black font-display text-slate-900">
              {efficiency?.tasks_approved ?? 0}
            </p>
          </div>
        </div>

        {/* Cohort Standing */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-xs flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center flex-shrink-0 text-amber-600 shadow-xs">
            <Trophy className="w-5 h-5 text-amber-600" />
          </div>
          <div>
            <p className="text-xs text-slate-500 font-medium">Cohort Standing</p>
            <p className="text-xl sm:text-2xl font-black font-display text-slate-900">
              {quizRanking?.rank ? `#${quizRanking.rank}` : "Unranked"}
            </p>
          </div>
        </div>

        {/* Tests Attempted */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-xs flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center flex-shrink-0 text-sky-600 shadow-xs">
            <BookOpen className="w-5 h-5 text-sky-600" />
          </div>
          <div>
            <p className="text-xs text-slate-500 font-medium">Tests Attempted</p>
            <p className="text-xl sm:text-2xl font-black font-display text-slate-900">
              {quizRanking?.quizzes_attempted ?? 0} Drills
            </p>
          </div>
        </div>
      </div>

      {/* 3. Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column (8 cols): Visual Score & Concise Insights */}
        <div className="lg:col-span-8 space-y-6">
          {isError ? (
            <div className="py-12 text-center rounded-2xl border border-slate-200 bg-white p-8">
              <p className="text-sm text-slate-500 mb-4">
                Unable to compute efficiency rating at this time.
              </p>
              <Button variant="secondary" size="sm" onClick={() => refetch()}>
                Retry
              </Button>
            </div>
          ) : (
            <EfficiencyScore efficiency={efficiency ?? null} isLoading={effLoading} />
          )}

          {/* Clean Performance Insights Card */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-600" />
                <h3 className="text-sm font-bold text-slate-900">
                  Accountability Insights & Best Practices
                </h3>
              </div>
              <button
                onClick={() => setShowFormulaDetails(!showFormulaDetails)}
                className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 bg-blue-50/70 hover:bg-blue-100/70 px-3 py-1 rounded-lg transition-colors"
              >
                <span>{showFormulaDetails ? "Hide Formula" : "How Score Works"}</span>
                {showFormulaDetails ? (
                  <ChevronUp className="w-3.5 h-3.5" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            {/* Concise Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/70 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Fair Scoring</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Rejected tasks are never penalized in your denominator.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/70 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  <span>Submit Early</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Submissions before cycle end qualify for early bonus milestones.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/70 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                  <Target className="w-3.5 h-3.5 text-amber-600" />
                  <span>80%+ Target</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Maintain 80%+ efficiency to remain in top-tier cohort standing.
                </p>
              </div>
            </div>

            {/* Collapsible Explainer Box */}
            {showFormulaDetails && (
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5 animate-fade-in text-xs text-slate-600">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="font-bold text-slate-800">Mathematical Formula:</span>
                  <code className="px-2.5 py-1 bg-white border border-slate-300/80 rounded-md font-mono font-semibold text-slate-900 text-xs">
                    Approved / (Assigned - Rejected) × 100
                  </code>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  If you have submitted tasks awaiting mentor verification, your score temporarily reflects pending status rather than an artificial zero. Once your mentor reviews your work, your score is locked in for that cycle.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right Column (4 cols): Cohort Quiz Standings & Quick Actions */}
        <div className="lg:col-span-4 space-y-5">
          {/* Cohort Quiz Standings Card */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-amber-500" />
                <h3 className="text-sm font-bold text-slate-900">Quiz Standings</h3>
              </div>
              <Link href="/quizzes">
                <span className="text-xs font-semibold text-blue-600 hover:underline">
                  Practice →
                </span>
              </Link>
            </div>

            <div className="space-y-3">
              <div className="p-3.5 bg-slate-50/80 rounded-xl border border-slate-200/70">
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                  Average Exam Score
                </p>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <p className="text-2xl font-black font-display text-slate-900">
                    {displayScore}
                  </p>
                </div>
                {isNegativeScore ? (
                  <p className="text-[10px] text-amber-600 font-medium mt-1">
                    * Negative score reflects exam marking penalty (-1 for incorrect answers).
                  </p>
                ) : (
                  <p className="text-[11px] text-slate-400 mt-1">
                    Across all attempted mock drills
                  </p>
                )}
              </div>

              <div className="p-3.5 bg-slate-50/80 rounded-xl border border-slate-200/70">
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                  Cohort Peer Rank
                </p>
                <p className="text-2xl font-black font-display text-blue-600 mt-0.5">
                  {quizRanking?.rank ? `Rank #${quizRanking.rank}` : "Unranked"}
                </p>
                <p className="text-[11px] text-slate-400 mt-1">
                  {quizRanking?.cohort_size
                    ? `Compared with ${quizRanking.cohort_size} cohort peers`
                    : "Awaiting peer attempts"}
                </p>
              </div>
            </div>

            <Link href="/quizzes" className="block pt-1">
              <Button variant="secondary" size="sm" className="w-full text-xs font-semibold">
                Start New Practice Drill
              </Button>
            </Link>
          </div>

          {/* Quick Actions Card */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs space-y-3">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-slate-700" />
              <h3 className="text-sm font-bold text-slate-900">Quick Navigation</h3>
            </div>

            <div className="space-y-2 pt-1">
              <Link
                href="/dashboard/tasks"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-blue-50/70 border border-slate-200/70 hover:border-blue-200 transition-all text-xs font-semibold text-slate-700 group"
              >
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>My Weekly Tasks</span>
                </div>
                <span className="text-slate-400 group-hover:text-blue-600 transition-colors">→</span>
              </Link>

              <Link
                href="/cohort"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-blue-50/70 border border-slate-200/70 hover:border-blue-200 transition-all text-xs font-semibold text-slate-700 group"
              >
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>Cohort Hub & Resources</span>
                </div>
                <span className="text-slate-400 group-hover:text-blue-600 transition-colors">→</span>
              </Link>

              <Link
                href="/schedule"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-blue-50/70 border border-slate-200/70 hover:border-blue-200 transition-all text-xs font-semibold text-slate-700 group"
              >
                <div className="flex items-center gap-2.5">
                  <Calendar className="w-4 h-4 text-blue-600" />
                  <span>Live Schedule & Sessions</span>
                </div>
                <span className="text-slate-400 group-hover:text-blue-600 transition-colors">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
