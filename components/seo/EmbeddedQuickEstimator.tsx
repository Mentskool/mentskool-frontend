"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calculator, ArrowRight, Sparkles, TrendingUp, ShieldCheck } from "lucide-react";

interface EmbeddedQuickEstimatorProps {
  examFocus: "JEE" | "NEET" | "BOTH";
}

export function EmbeddedQuickEstimator({ examFocus }: EmbeddedQuickEstimatorProps) {
  const isNeet = examFocus === "NEET";
  const [marks, setMarks] = useState<number>(isNeet ? 620 : 175);

  const calculateEstimate = () => {
    if (isNeet) {
      if (marks >= 700) return { title: "AIR < 500", range: "Top 0.02%", verdict: "AIIMS Delhi & Premier GMCs", color: "text-emerald-400" };
      if (marks >= 670) return { title: "AIR 800 – 2,500", range: "Top 0.1%", verdict: "Safe for AIIMS & Top State GMCs", color: "text-emerald-400" };
      if (marks >= 640) return { title: "AIR 4,500 – 10,000", range: "Top 0.5%", verdict: "Guaranteed AIQ Government MBBS", color: "text-sky-400" };
      if (marks >= 600) return { title: "AIR 18,000 – 28,000", range: "Top 1.2%", verdict: "State Quota Govt MBBS Cutoff", color: "text-blue-400" };
      if (marks >= 550) return { title: "AIR 45,000 – 65,000", range: "Top 3%", verdict: "Borderline State / Semi-Govt Seats", color: "text-amber-400" };
      return { title: "AIR > 80,000", range: "Improvement Needed", verdict: "Audit weak Biology & Physics chapters", color: "text-rose-400" };
    } else {
      if (marks >= 260) return { title: "99.85+ Percentile", range: "AIR < 1,500", verdict: "Top NIT CSE & JEE Advanced Confident", color: "text-emerald-400" };
      if (marks >= 210) return { title: "99.30+ Percentile", range: "AIR ~7,000", verdict: "NIT Trichy / Surathkal Top Branches", color: "text-emerald-400" };
      if (marks >= 170) return { title: "98.20+ Percentile", range: "AIR ~18,000", verdict: "Top 10 NITs Core & Tech Branches", color: "text-sky-400" };
      if (marks >= 135) return { title: "96.10+ Percentile", range: "AIR ~40,000", verdict: "State NITs & IIITs Eligible", color: "text-blue-400" };
      if (marks >= 100) return { title: "91.50+ Percentile", range: "AIR ~85,000", verdict: "Qualifying Cutoff Cleared", color: "text-amber-400" };
      return { title: "Below 85 Percentile", range: "High Risk Area", verdict: "Require intensive 30-day PYQ sprints", color: "text-rose-400" };
    }
  };

  const estimate = calculateEstimate();
  const maxMarks = isNeet ? 720 : 300;

  return (
    <section className="my-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-blue-950/40 border border-blue-500/30 shadow-elevated">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800">
        <div>
          <span className="text-[11px] font-black uppercase tracking-widest text-emerald-400 flex items-center gap-1.5">
            <Calculator className="w-3.5 h-3.5 text-emerald-400" />
            Interactive In-Article Estimator
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
            {isNeet ? "Quick NEET Marks to Rank Estimator" : "Quick JEE Main Marks to Percentile Estimator"}
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Test how your raw score translates under official NTA normalization curves.
          </p>
        </div>
        <div className="text-xs text-slate-400 flex items-center gap-1.5 shrink-0">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Calibrated to Recent Exam Shifts</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Input Controls */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Your Target / Mock Score:
            </label>
            <span className="text-xl font-black text-white px-3 py-1 rounded-xl bg-slate-950 border border-blue-500/30">
              {marks} <span className="text-xs text-slate-400 font-normal">/ {maxMarks}</span>
            </span>
          </div>

          <input
            type="range"
            min={isNeet ? 200 : 40}
            max={maxMarks}
            step={isNeet ? 5 : 5}
            value={marks}
            onChange={(e) => setMarks(Number(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />

          <div className="flex justify-between text-[11px] text-slate-500 font-medium">
            <span>{isNeet ? "200 (Beginner)" : "40 (Borderline)"}</span>
            <span>{isNeet ? "500 (State Cutoff)" : "150 (97%ile)"}</span>
            <span>{maxMarks} (Topper)</span>
          </div>

          <div className="pt-2 flex flex-wrap gap-2 text-xs">
            <span className="text-slate-400 text-[11px]">Quick presets:</span>
            {(isNeet ? [550, 620, 670] : [120, 170, 220]).map((preset) => (
              <button
                key={preset}
                onClick={() => setMarks(preset)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                  marks === preset
                    ? "bg-blue-600 text-white"
                    : "bg-slate-800/80 text-slate-300 hover:bg-slate-700"
                }`}
              >
                {preset} Marks
              </button>
            ))}
          </div>
        </div>

        {/* Live Output Card */}
        <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
              Estimated NTA Outcome
            </span>
            <div className={`text-2xl sm:text-3xl font-black ${estimate.color}`}>
              {estimate.title}
            </div>
            <div className="text-xs font-semibold text-slate-300 mt-1 flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-blue-400" />
              <span>Projected Standing: <strong>{estimate.range}</strong></span>
            </div>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed bg-slate-900/60 p-2.5 rounded-xl border border-slate-850">
              {estimate.verdict}
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
            <Link
              href={isNeet ? "/tools/neet-marks-vs-rank-calculator" : "/tools/jee-main-marks-vs-percentile-calculator"}
              className="text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors flex items-center gap-1 group"
            >
              <span>Full Precision Calculator</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/free-mentorship-session"
              className="text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span>Audit with an IIT/AIIMS Mentor (₹0)</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
