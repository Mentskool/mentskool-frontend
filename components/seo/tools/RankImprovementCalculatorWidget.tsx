"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { TrendingUp, ArrowRight, Sparkles, CheckCircle2, Award } from "lucide-react";

export function RankImprovementCalculatorWidget() {
  const [exam, setExam] = useState<"JEE" | "NEET">("JEE");
  const [currentScore, setCurrentScore] = useState<number>(120);
  const [weeksLeft, setWeeksLeft] = useState<number>(12);
  const [useErrorAudits, setUseErrorAudits] = useState<boolean>(true);

  const maxScore = exam === "JEE" ? 300 : 720;

  const results = useMemo(() => {
    // Score growth rate per 4-week cycle
    // Standard self-prep: +4 marks per 4-week cycle (often plateaus)
    // Mentorship + error auditing: +18 marks (JEE) or +35 marks (NEET) per 4-week cycle
    const fourWeekCycles = weeksLeft / 4;
    const monthlyGain = useErrorAudits
      ? exam === "JEE" ? 18 : 35
      : exam === "JEE" ? 5 : 10;

    const projectedGain = Math.round(fourWeekCycles * monthlyGain);
    const projectedScore = Math.min(maxScore, currentScore + projectedGain);

    // Rank projections
    let currentAir = 1;
    let projectedAir = 1;

    if (exam === "JEE") {
      // JEE rough rank mapping
      currentAir = Math.round(Math.max(1000, ((300 - currentScore) / 300) * 150000));
      projectedAir = Math.round(Math.max(250, ((300 - projectedScore) / 300) * 150000));
    } else {
      // NEET rough rank mapping
      currentAir = Math.round(Math.max(500, ((720 - currentScore) / 720) * 200000));
      projectedAir = Math.round(Math.max(50, ((720 - projectedScore) / 720) * 200000));
    }

    const rankJump = Math.max(0, currentAir - projectedAir);

    return {
      projectedScore,
      scoreDelta: projectedScore - currentScore,
      currentAir: currentAir.toLocaleString("en-IN"),
      projectedAir: projectedAir.toLocaleString("en-IN"),
      rankJump: rankJump.toLocaleString("en-IN"),
    };
  }, [exam, currentScore, weeksLeft, useErrorAudits, maxScore]);

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/80 backdrop-blur-xl p-6 sm:p-10 shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Input Controls (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="rank-exam-select" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Target Exam
              </label>
              <select
                id="rank-exam-select"
                value={exam}
                onChange={(e) => {
                  const newExam = e.target.value as "JEE" | "NEET";
                  setExam(newExam);
                  setCurrentScore(newExam === "JEE" ? 120 : 480);
                }}
                aria-label="Target Competitive Exam"
                className="w-full rounded-xl bg-slate-800 border border-slate-700 p-3 text-sm text-white focus:outline-none focus:border-brand-500"
              >
                <option value="JEE">JEE Main (Out of 300 Marks)</option>
                <option value="NEET">NEET UG (Out of 720 Marks)</option>
              </select>
            </div>

            <div>
              <label htmlFor="weeks-until-exam-slider" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Weeks Remaining: <span className="text-brand-400 font-mono">{weeksLeft} Weeks</span>
              </label>
              <input
                id="weeks-until-exam-slider"
                type="range"
                min="4"
                max="36"
                step="2"
                value={weeksLeft}
                onChange={(e) => setWeeksLeft(Number(e.target.value))}
                aria-label="Weeks Remaining Until Exam"
                className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-500 mt-2"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                <span>4 Wks (Sprint)</span>
                <span>16 Wks (1 Term)</span>
                <span>36 Wks (1 Year)</span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="current-mock-score-slider" className="text-sm font-semibold text-slate-200">
                Current Average Mock Score
              </label>
              <span className="text-2xl font-extrabold text-cyan-400 font-mono">
                {currentScore} <span className="text-xs text-slate-400 font-normal">/ {maxScore}</span>
              </span>
            </div>
            <input
              id="current-mock-score-slider"
              type="range"
              min={exam === "JEE" ? 30 : 200}
              max={exam === "JEE" ? 270 : 680}
              step={exam === "JEE" ? 5 : 10}
              value={currentScore}
              onChange={(e) => setCurrentScore(Number(e.target.value))}
              aria-label="Current Average Mock Score"
              className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
            />
          </div>

          {/* Toggle for Systematic Error Auditing */}
          <div className="p-4 rounded-xl border border-slate-700 bg-slate-800/60 flex items-center justify-between">
            <div>
              <div className="text-sm font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                Include 1-on-1 Mentor Error Auditing
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                Systematic post-mock mistake analysis to eliminate recurring calculation slips.
              </div>
            </div>
            <button
              type="button"
              onClick={() => setUseErrorAudits(!useErrorAudits)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                useErrorAudits ? "bg-emerald-500" : "bg-slate-700"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  useErrorAudits ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Output Card (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl border border-brand-500/30 bg-gradient-to-br from-brand-950/40 via-slate-900 to-cyan-950/30 p-6 sm:p-8 space-y-6 text-center">
          <div>
            <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
              Projected Final Score
            </div>
            <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-white font-mono">
              {results.projectedScore}
              <span className="text-xs text-emerald-400 font-normal ml-2 font-mono">
                (+{results.scoreDelta} Marks)
              </span>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 grid grid-cols-2 gap-4">
            <div>
              <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                Current AIR
              </div>
              <div className="text-lg font-bold text-slate-300 font-mono mt-1">
                ~AIR {results.currentAir}
              </div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                Projected AIR
              </div>
              <div className="text-lg font-bold text-emerald-300 font-mono mt-1">
                ~AIR {results.projectedAir}
              </div>
            </div>
          </div>

          <div className="pt-2">
            <div className="p-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-semibold">
              <Award className="w-4 h-4 inline-block mr-1.5 -mt-0.5" />
              Potential Jump of ~{results.rankJump} Ranks
            </div>
          </div>

          <Link
            href="/free-mentorship-session"
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-brand-500 to-emerald-500 hover:from-brand-600 hover:to-emerald-600 text-white font-bold text-sm transition-all shadow-lg shadow-brand-500/25"
          >
            <span>Build Improvement Roadmap with Mentor</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
