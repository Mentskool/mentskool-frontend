"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { HeartPulse, ArrowRight, Building2, Sparkles, Award } from "lucide-react";

export function NeetMarksVsRankCalculatorWidget() {
  const [score, setScore] = useState<number>(650);
  const [category, setCategory] = useState<"general" | "obc" | "ews" | "sc" | "st">("general");

  const results = useMemo(() => {
    // 5-year stabilized post-2024 curve calibration
    let air = 1;

    if (score >= 715) {
      air = Math.max(1, Math.round(1 + ((720 - score) / 5) * 40));
    } else if (score >= 700) {
      air = Math.round(45 + ((715 - score) / 15) * 450);
    } else if (score >= 680) {
      air = Math.round(500 + ((700 - score) / 20) * 2200);
    } else if (score >= 650) {
      air = Math.round(2700 + ((680 - score) / 30) * 16000);
    } else if (score >= 620) {
      air = Math.round(19000 + ((650 - score) / 30) * 25000);
    } else if (score >= 580) {
      air = Math.round(44000 + ((620 - score) / 40) * 45000);
    } else if (score >= 500) {
      air = Math.round(90000 + ((580 - score) / 80) * 90000);
    } else if (score >= 400) {
      air = Math.round(180000 + ((500 - score) / 100) * 150000);
    } else if (score >= 250) {
      air = Math.round(330000 + ((400 - score) / 150) * 350000);
    } else {
      air = Math.round(680000 + ((250 - score) / 250) * 600000);
    }

    // College Admission Verdict
    let verdict = "Private Medical Colleges / Deemed Universities";
    let verdictColor = "bg-slate-800 text-slate-300 border-slate-700";

    if (score >= 705) {
      verdict = "AIIMS New Delhi / MAMC Delhi Guaranteed (Top Tier)";
      verdictColor = "bg-emerald-500/20 text-emerald-300 border-emerald-500/40";
    } else if (score >= 680) {
      verdict = "Top Peripheral AIIMS (Bhopal, Jodhpur) / Top State GMCs";
      verdictColor = "bg-teal-500/20 text-teal-300 border-teal-500/40";
    } else if (category === "general" && score >= 655) {
      verdict = "All India Quota (15%) Government Medical College Secured";
      verdictColor = "bg-cyan-500/20 text-cyan-300 border-cyan-500/40";
    } else if ((category === "obc" || category === "ews") && score >= 650) {
      verdict = "All India Quota GMC MBBS Seat Highly Probable";
      verdictColor = "bg-cyan-500/20 text-cyan-300 border-cyan-500/40";
    } else if (category === "sc" && score >= 545) {
      verdict = "Government Medical College (SC Quota) Confirmed";
      verdictColor = "bg-cyan-500/20 text-cyan-300 border-cyan-500/40";
    } else if (category === "st" && score >= 510) {
      verdict = "Government Medical College (ST Quota) Confirmed";
      verdictColor = "bg-cyan-500/20 text-cyan-300 border-cyan-500/40";
    } else if (score >= 620) {
      verdict = "State Quota (85%) GMC Seat Likely (in states like MH, KA, TN)";
      verdictColor = "bg-amber-500/20 text-amber-300 border-amber-500/40";
    } else if (score >= 580) {
      verdict = "Government BDS (Dental) / Veterinary / Semi-Govt MBBS";
      verdictColor = "bg-indigo-500/20 text-indigo-300 border-indigo-500/40";
    }

    return {
      air: air.toLocaleString("en-IN"),
      verdict,
      verdictColor,
    };
  }, [score, category]);

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/80 backdrop-blur-xl p-6 sm:p-10 shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Input Controls (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="neet-score-slider" className="text-sm font-semibold text-slate-200">
                Expected NEET Score (Out of 720 Marks)
              </label>
              <span className="text-2xl font-extrabold text-emerald-400 font-mono">
                {score} <span className="text-xs text-slate-400 font-normal">/ 720</span>
              </span>
            </div>
            <input
              id="neet-score-slider"
              type="range"
              min="100"
              max="720"
              step="5"
              value={score}
              onChange={(e) => setScore(Number(e.target.value))}
              aria-label="Expected NEET Score out of 720"
              className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
            <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
              <span>100 (Min)</span>
              <span>160 (Qualify)</span>
              <span>600 (Borderline)</span>
              <span>655 (Safe GMC)</span>
              <span>720 (AIR 1)</span>
            </div>
          </div>

          <div>
            <label htmlFor="neet-category-select" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Reservation Category
            </label>
            <select
              id="neet-category-select"
              value={category}
              onChange={(e) => setCategory(e.target.value as any)}
              aria-label="Reservation Category"
              className="w-full rounded-xl bg-slate-800 border border-slate-700 p-3 text-sm text-white focus:outline-none focus:border-emerald-500"
            >
              <option value="general">General / Unreserved (UR)</option>
              <option value="obc">OBC-NCL (Central List)</option>
              <option value="ews">General-EWS</option>
              <option value="sc">Scheduled Caste (SC)</option>
              <option value="st">Scheduled Tribe (ST)</option>
            </select>
          </div>
        </div>

        {/* Prediction Output Card (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/40 via-slate-900 to-teal-950/30 p-6 sm:p-8 space-y-6 text-center">
          <div>
            <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
              Estimated All India Rank (AIR)
            </div>
            <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-white font-mono">
              ~AIR {results.air}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 grid grid-cols-2 gap-4">
            <div>
              <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                NEET Score
              </div>
              <div className="text-xl font-bold text-white font-mono mt-1">
                {score} / 720
              </div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                Category
              </div>
              <div className="text-xl font-bold text-emerald-300 uppercase font-mono mt-1">
                {category}
              </div>
            </div>
          </div>

          <div className="pt-2">
            <div className={`p-3 rounded-xl border text-xs font-semibold ${results.verdictColor}`}>
              <Building2 className="w-4 h-4 inline-block mr-1.5 -mt-0.5" />
              {results.verdict}
            </div>
          </div>

          <Link
            href="/free-mentorship-session"
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-sm transition-all shadow-lg shadow-emerald-500/25"
          >
            <span>Plan 680+ Strategy with AIIMS Mentor</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
