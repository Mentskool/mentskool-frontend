"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Clock, ArrowRight, Sparkles, CheckCircle2, AlertTriangle, Flame } from "lucide-react";

export function StudyVelocityCalculatorWidget() {
  const [exam, setExam] = useState<"JEE" | "NEET">("JEE");
  const [monthsLeft, setMonthsLeft] = useState<number>(10);
  const [backlogChapters, setBacklogChapters] = useState<number>(15);
  const [dailyHours, setDailyHours] = useState<number>(8);

  const results = useMemo(() => {
    const totalDays = Math.max(30, monthsLeft * 30);
    const totalSyllabusChapters = exam === "JEE" ? 75 : 82;
    const chaptersRemaining = Math.min(totalSyllabusChapters, backlogChapters + Math.round(totalSyllabusChapters * 0.4));

    // Daily problems required: ~60 problems per chapter mastery
    const totalProblemsNeeded = chaptersRemaining * 65;
    const dailyProblemsRequired = Math.round(totalProblemsNeeded / totalDays);

    // Hours allocation
    const conceptHours = (dailyHours * 0.3).toFixed(1);
    const problemSolvingHours = (dailyHours * 0.5).toFixed(1);
    const revisionHours = (dailyHours * 0.2).toFixed(1);

    // Feasibility status
    let feasibility = "Optimal & Highly Sustainable";
    let statusColor = "bg-emerald-500/20 text-emerald-300 border-emerald-500/40";
    let icon = CheckCircle2;

    if (dailyProblemsRequired > 80 || dailyHours < 6) {
      feasibility = "High Pressure — Mentorship & Pruning Required";
      statusColor = "bg-amber-500/20 text-amber-300 border-amber-500/40";
      icon = AlertTriangle;
    } else if (dailyProblemsRequired > 110) {
      feasibility = "Critical Burnout Risk — Urgent Backlog Triage Needed";
      statusColor = "bg-red-500/20 text-red-300 border-red-500/40";
      icon = Flame;
    }

    return {
      dailyProblemsRequired,
      conceptHours,
      problemSolvingHours,
      revisionHours,
      feasibility,
      statusColor,
      totalDays,
    };
  }, [exam, monthsLeft, backlogChapters, dailyHours]);

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/80 backdrop-blur-xl p-6 sm:p-10 shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Input Controls (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="target-exam-select" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Target Competitive Exam
              </label>
              <select
                id="target-exam-select"
                value={exam}
                onChange={(e) => setExam(e.target.value as any)}
                aria-label="Target Competitive Exam"
                className="w-full rounded-xl bg-slate-800 border border-slate-700 p-3 text-sm text-white focus:outline-none focus:border-brand-500"
              >
                <option value="JEE">JEE Main &amp; Advanced (PCM)</option>
                <option value="NEET">NEET UG (Physics, Chem, Biology)</option>
              </select>
            </div>

            <div>
              <label htmlFor="time-remaining-months" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Time Remaining: <span className="text-brand-400 font-mono">{monthsLeft} Months</span>
              </label>
              <input
                id="time-remaining-months"
                type="range"
                min="2"
                max="24"
                step="1"
                value={monthsLeft}
                onChange={(e) => setMonthsLeft(Number(e.target.value))}
                aria-label="Time Remaining in Months"
                className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-500 mt-2"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                <span>2 Mos (Sprint)</span>
                <span>12 Mos (1-Yr)</span>
                <span>24 Mos (Class 11)</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="backlog-chapters-slider" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Backlogged Chapters: <span className="text-amber-400 font-mono">{backlogChapters} Chapters</span>
              </label>
              <input
                id="backlog-chapters-slider"
                type="range"
                min="0"
                max="40"
                step="1"
                value={backlogChapters}
                onChange={(e) => setBacklogChapters(Number(e.target.value))}
                aria-label="Number of Backlogged Chapters"
                className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500 mt-2"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                <span>0 (Zero Backlog)</span>
                <span>20 (Moderate)</span>
                <span>40 (Heavy)</span>
              </div>
            </div>

            <div>
              <label htmlFor="daily-study-hours-slider" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Daily Study Hours: <span className="text-cyan-400 font-mono">{dailyHours} Hours/Day</span>
              </label>
              <input
                id="daily-study-hours-slider"
                type="range"
                min="4"
                max="14"
                step="1"
                value={dailyHours}
                onChange={(e) => setDailyHours(Number(e.target.value))}
                aria-label="Daily Study Hours Available"
                className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500 mt-2"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                <span>4h (School Days)</span>
                <span>8h (Standard)</span>
                <span>14h (Dropper Peak)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Velocity Output Card (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl border border-brand-500/30 bg-gradient-to-br from-brand-950/40 via-slate-900 to-indigo-950/30 p-6 sm:p-8 space-y-6 text-center">
          <div>
            <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
              Required Daily Solving Rate
            </div>
            <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-cyan-300 to-white font-mono">
              {results.dailyProblemsRequired}
              <span className="text-base text-slate-300 font-normal ml-1.5">Qs/Day</span>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 grid grid-cols-3 gap-2 text-center font-mono">
            <div className="p-2 rounded bg-slate-800/60">
              <div className="text-[10px] text-slate-400 uppercase">Concept</div>
              <div className="text-sm font-bold text-white mt-0.5">{results.conceptHours}h</div>
            </div>
            <div className="p-2 rounded bg-slate-800/60">
              <div className="text-[10px] text-emerald-400 uppercase">Practice</div>
              <div className="text-sm font-bold text-emerald-300 mt-0.5">{results.problemSolvingHours}h</div>
            </div>
            <div className="p-2 rounded bg-slate-800/60">
              <div className="text-[10px] text-cyan-400 uppercase">Audit</div>
              <div className="text-sm font-bold text-cyan-300 mt-0.5">{results.revisionHours}h</div>
            </div>
          </div>

          <div className="pt-2">
            <div className={`p-3 rounded-xl border text-xs font-semibold ${results.statusColor}`}>
              {results.feasibility}
            </div>
          </div>

          <Link
            href="/free-mentorship-session"
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-brand-500 to-cyan-500 hover:from-brand-600 hover:to-cyan-600 text-white font-bold text-sm transition-all shadow-lg shadow-brand-500/25"
          >
            <span>Audit Timetable with IITian Mentor</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
