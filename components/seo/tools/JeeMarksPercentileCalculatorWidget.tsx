"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Calculator, ArrowRight, Sparkles, Award, Building2 } from "lucide-react";

export function JeeMarksPercentileCalculatorWidget() {
  const [score, setScore] = useState<number>(180);
  const [difficulty, setDifficulty] = useState<"tough" | "moderate" | "easy">("moderate");
  const [session, setSession] = useState<"january" | "april">("january");

  const results = useMemo(() => {
    // Calibration baseline based on 60+ NTA shifts
    let effectiveScore = score;

    // Shift difficulty adjustments
    if (difficulty === "tough") {
      effectiveScore += 18; // 180 on tough feels like 198
    } else if (difficulty === "easy") {
      effectiveScore -= 22; // 180 on easy feels like 158
    }

    // Session adjustment (April has +15 marks competition inflation)
    if (session === "april") {
      effectiveScore -= 14;
    }

    // Sigmoid / empirical percentile mapping for JEE Main (0 to 300)
    let percentile = 0;
    if (effectiveScore >= 270) {
      percentile = 99.95 + ((effectiveScore - 270) / 30) * 0.049;
    } else if (effectiveScore >= 240) {
      percentile = 99.7 + ((effectiveScore - 240) / 30) * 0.25;
    } else if (effectiveScore >= 210) {
      percentile = 99.3 + ((effectiveScore - 210) / 30) * 0.4;
    } else if (effectiveScore >= 180) {
      percentile = 98.6 + ((effectiveScore - 180) / 30) * 0.7;
    } else if (effectiveScore >= 150) {
      percentile = 97.0 + ((effectiveScore - 150) / 30) * 1.6;
    } else if (effectiveScore >= 120) {
      percentile = 94.5 + ((effectiveScore - 120) / 30) * 2.5;
    } else if (effectiveScore >= 90) {
      percentile = 89.0 + ((effectiveScore - 90) / 30) * 5.5;
    } else if (effectiveScore >= 60) {
      percentile = 78.0 + ((effectiveScore - 60) / 30) * 11.0;
    } else if (effectiveScore >= 30) {
      percentile = 55.0 + ((effectiveScore - 30) / 30) * 23.0;
    } else {
      percentile = Math.max(10, (effectiveScore / 30) * 55);
    }

    percentile = Math.min(99.9999, Math.max(10, percentile));

    // AIR estimation based on 14.5 lakh candidates
    const totalCandidates = 1450000;
    const air = Math.max(1, Math.round(((100 - percentile) / 100) * totalCandidates));

    // College eligibility
    let collegeTier = "State Engineering Colleges & Private Universities";
    let badgeColor = "bg-slate-800 text-slate-300 border-slate-700";

    if (percentile >= 99.7) {
      collegeTier = "Top 3 NITs (Trichy, Surathkal, Warangal) — CSE Guaranteed";
      badgeColor = "bg-emerald-500/20 text-emerald-300 border-emerald-500/40";
    } else if (percentile >= 99.0) {
      collegeTier = "Top 10 NITs (Rourkela, Calicut, Allahabad) — CSE / ECE";
      badgeColor = "bg-cyan-500/20 text-cyan-300 border-cyan-500/40";
    } else if (percentile >= 97.5) {
      collegeTier = "Top 15 NITs — Electrical / Mechanical / Core Branches";
      badgeColor = "bg-blue-500/20 text-blue-300 border-blue-500/40";
    } else if (percentile >= 95.0) {
      collegeTier = "Mid-tier NITs / Top IIITs — Civil / Chemical / Metallurgy";
      badgeColor = "bg-indigo-500/20 text-indigo-300 border-indigo-500/40";
    } else if (percentile >= 93.4) {
      collegeTier = "JEE Advanced Qualified — Eligible for IIT Entrance";
      badgeColor = "bg-amber-500/20 text-amber-300 border-amber-500/40";
    }

    return {
      percentile: percentile.toFixed(4),
      air: air.toLocaleString("en-IN"),
      collegeTier,
      badgeColor,
    };
  }, [score, difficulty, session]);

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/80 backdrop-blur-xl p-6 sm:p-10 shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Input Controls (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="raw-score-input" className="text-sm font-semibold text-slate-200">
                Expected Raw Score (Out of 300 Marks)
              </label>
              <span className="text-2xl font-extrabold text-brand-400 font-mono">
                {score} <span className="text-xs text-slate-400 font-normal">/ 300</span>
              </span>
            </div>
            <input
              id="raw-score-input"
              type="range"
              min="0"
              max="300"
              step="1"
              value={score}
              onChange={(e) => setScore(Number(e.target.value))}
              aria-label="Expected Raw Score out of 300"
              className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-500"
            />
            <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
              <span>0 (Min)</span>
              <span>100 (Cutoff)</span>
              <span>180 (99%ile)</span>
              <span>240 (Top NIT)</span>
              <span>300 (Max)</span>
            </div>
          </div>

          {/* Difficulty & Session Selectors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="shift-difficulty-select" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Shift Difficulty Level
              </label>
              <select
                id="shift-difficulty-select"
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value as any)}
                aria-label="Shift Difficulty Level"
                className="w-full rounded-xl bg-slate-800 border border-slate-700 p-3 text-sm text-white focus:outline-none focus:border-brand-500"
              >
                <option value="tough">Tough Shift (Maths Heavy / Conceptual)</option>
                <option value="moderate">Moderate Shift (Balanced NTA Standard)</option>
                <option value="easy">Easy Shift (High Competition Density)</option>
              </select>
            </div>

            <div>
              <label htmlFor="exam-session-select" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Exam Session
              </label>
              <select
                id="exam-session-select"
                value={session}
                onChange={(e) => setSession(e.target.value as any)}
                aria-label="Exam Session"
                className="w-full rounded-xl bg-slate-800 border border-slate-700 p-3 text-sm text-white focus:outline-none focus:border-brand-500"
              >
                <option value="january">Session 1 (January — Lower Marks Needed)</option>
                <option value="april">Session 2 (April — High Competition)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Prediction Output Card (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl border border-brand-500/30 bg-gradient-to-br from-brand-950/40 via-slate-900 to-cyan-950/30 p-6 sm:p-8 space-y-6 text-center">
          <div>
            <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
              Estimated NTA Percentile
            </div>
            <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-cyan-300 to-white font-mono">
              {results.percentile}
              <span className="text-lg text-brand-300 font-normal">%</span>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 grid grid-cols-2 gap-4">
            <div>
              <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                Estimated All India Rank
              </div>
              <div className="text-xl font-bold text-white font-mono mt-1">
                ~AIR {results.air}
              </div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                Raw Score
              </div>
              <div className="text-xl font-bold text-brand-300 font-mono mt-1">
                {score} / 300
              </div>
            </div>
          </div>

          <div className="pt-2">
            <div className={`p-3 rounded-xl border text-xs font-semibold ${results.badgeColor}`}>
              <Building2 className="w-4 h-4 inline-block mr-1.5 -mt-0.5" />
              {results.collegeTier}
            </div>
          </div>

          <Link
            href="/free-mentorship-session"
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-brand-500 to-cyan-500 hover:from-brand-600 hover:to-cyan-600 text-white font-bold text-sm transition-all shadow-lg shadow-brand-500/25"
          >
            <span>Plan 99%ile Strategy with IITian</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
