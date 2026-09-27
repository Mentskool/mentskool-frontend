"use client";

import React from "react";
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
} from "lucide-react";

export default function StudentEfficiencyPage() {
  const { user, isAuthenticated, isLoading: authLoading } = useAuthStore();
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
              Real-time performance score computed directly from your weekly mentor reviews.
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
          <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600">
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
          <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0 text-emerald-600">
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
          <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center flex-shrink-0 text-amber-600">
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
          <div className="w-10 h-10 rounded-full bg-sky-50 border border-sky-100 flex items-center justify-center flex-shrink-0 text-sky-600">
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
        {/* Left Column (8 cols): Visual Score & Explanations */}
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

          {/* Explanation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* The Scoring Formula */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs space-y-3">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-600" />
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  The Scoring Formula
                </h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Your efficiency score is mathematically computed as:
              </p>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-mono text-slate-800 font-bold text-center">
                Approved / (Assigned - Rejected) × 100
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                If no approved or pending tasks exist yet, the dashboard displays &ldquo;No data&rdquo; rather than an artificial 0%.
              </p>
            </div>

            {/* Deliberate Product Rules */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs space-y-3">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-sky-600" />
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Scoring Principles
                </h3>
              </div>
              <ul className="text-xs text-slate-600 space-y-2 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                  <span>
                    <strong className="text-slate-800">Rejected tasks excluded:</strong> Removed from denominator to not unfairly penalize.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                  <span>
                    <strong className="text-slate-800">Late submissions flagged:</strong> Submissions after cycle end show late tags.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                  <span>
                    <strong className="text-slate-800">Review finality:</strong> Reviewed scores are locked for integrity.
                  </span>
                </li>
              </ul>
            </div>
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
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-[10px] text-slate-400 uppercase font-bold">Average Exam Score</p>
                <p className="text-2xl font-black font-display text-slate-900 mt-0.5">
                  {quizRanking?.average_percentage !== null && quizRanking?.average_percentage !== undefined
                    ? `${quizRanking.average_percentage}%`
                    : "No data"}
                </p>
                <p className="text-[11px] text-slate-400 mt-1">
                  Across all attempted mock drills
                </p>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-[10px] text-slate-400 uppercase font-bold">Cohort Peer Rank</p>
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
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-blue-50/70 border border-slate-200/70 hover:border-blue-200 transition-all text-xs font-semibold text-slate-700"
              >
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>My Tasks</span>
                </div>
                <span>→</span>
              </Link>

              <Link
                href="/schedule"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-blue-50/70 border border-slate-200/70 hover:border-blue-200 transition-all text-xs font-semibold text-slate-700"
              >
                <div className="flex items-center gap-2.5">
                  <Calendar className="w-4 h-4 text-blue-600" />
                  <span>Live Schedule</span>
                </div>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
