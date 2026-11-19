"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Calculator,
  ArrowRight,
  Sparkles,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Layers,
  ShieldCheck,
  Calendar,
  BookOpen,
} from "lucide-react";

export function BacklogClearanceCalculatorWidget() {
  const [exam, setExam] = useState<"JEE" | "NEET">("JEE");
  const [physicsChapters, setPhysicsChapters] = useState<number>(5);
  const [chemistryChapters, setChemistryChapters] = useState<number>(4);
  const [thirdSubjectChapters, setThirdSubjectChapters] = useState<number>(6); // Maths for JEE, Biology for NEET
  const [dailyBacklogHours, setDailyBacklogHours] = useState<number>(2.5);
  const [daysRemaining, setDaysRemaining] = useState<number>(60);

  const results = useMemo(() => {
    // Standard required hours per chapter based on empirical mentor benchmarks:
    // Physics: ~13 hrs (Theory review + 40 PYQs)
    // Chemistry: ~11 hrs (NCERT line mapping / reactions + PYQs)
    // Maths (JEE): ~15 hrs (problem variety) | Biology (NEET): ~8 hrs (NCERT active recall)
    const phyHoursPerChapter = 13;
    const chemHoursPerChapter = 11;
    const thirdHoursPerChapter = exam === "JEE" ? 15 : 8;

    const totalPhyHours = physicsChapters * phyHoursPerChapter;
    const totalChemHours = chemistryChapters * chemHoursPerChapter;
    const totalThirdHours = thirdSubjectChapters * thirdHoursPerChapter;

    const totalBacklogHoursNeeded = totalPhyHours + totalChemHours + totalThirdHours;
    const totalChapters = physicsChapters + chemistryChapters + thirdSubjectChapters;

    // Available hours based on user's commitment
    const totalAvailableHours = dailyBacklogHours * daysRemaining;
    const hoursDifference = totalAvailableHours - totalBacklogHoursNeeded;
    const requiredDailyHours = daysRemaining > 0 ? totalBacklogHoursNeeded / daysRemaining : 0;

    // Feasibility status
    let status: "FEASIBLE" | "CHALLENGING" | "CRITICAL";
    let badgeColor = "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";
    let statusTitle = "100% Clearable with Safe Buffer";
    let advice =
      "Your available hours comfortably cover your backlog. Dedicate your allocated daily slot without cutting into current class syllabus.";

    if (hoursDifference >= 0) {
      status = "FEASIBLE";
    } else if (Math.abs(hoursDifference) <= daysRemaining * 1.5) {
      status = "CHALLENGING";
      badgeColor = "bg-amber-500/10 text-amber-400 border-amber-500/30";
      statusTitle = "Tight Schedule — Triage Required";
      advice =
        "You have a slight hour deficit. Focus exclusively on Top 40% High-Yield PYQ chapters first, and defer low-weightage theory chapters until after syllabus completion.";
    } else {
      status = "CRITICAL";
      badgeColor = "bg-rose-500/10 text-rose-400 border-rose-500/30";
      statusTitle = "Severe Overload — Emergency Triage";
      advice =
        "Trying to finish all these chapters from scratch will ruin your current running syllabus. You must triage: complete only prerequisite foundation chapters and defer the rest to dedicated revision sprints.";
    }

    return {
      totalChapters,
      totalBacklogHoursNeeded,
      totalAvailableHours,
      hoursDifference,
      requiredDailyHours: requiredDailyHours.toFixed(1),
      status,
      badgeColor,
      statusTitle,
      advice,
      totalPhyHours,
      totalChemHours,
      totalThirdHours,
    };
  }, [exam, physicsChapters, chemistryChapters, thirdSubjectChapters, dailyBacklogHours, daysRemaining]);

  return (
    <div className="w-full rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 backdrop-blur-md shadow-2xl space-y-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Backlog Feasibility Engine</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white">
            JEE &amp; NEET Backlog Clearance Calculator
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Calculate exact hours needed, identify schedule deficits, and generate a realistic triage plan.
          </p>
        </div>

        {/* Exam Toggle */}
        <div className="inline-flex p-1 rounded-xl bg-slate-950 border border-slate-800 shrink-0 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setExam("JEE")}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
              exam === "JEE"
                ? "bg-blue-600 text-white shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            JEE (PCM)
          </button>
          <button
            type="button"
            onClick={() => setExam("NEET")}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
              exam === "NEET"
                ? "bg-emerald-600 text-white shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            NEET (PCB)
          </button>
        </div>
      </div>

      {/* Main Grid: Inputs vs Results */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Form: Inputs (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Chapter Inputs */}
          <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-sky-400" />
              <span>Pending Backlog Chapters</span>
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Physics */}
              <div className="space-y-1.5">
                <label className="text-xs text-slate-300 font-medium flex justify-between">
                  <span>Physics</span>
                  <span className="text-sky-400 font-bold">{physicsChapters} ch</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="25"
                  value={physicsChapters}
                  onChange={(e) => setPhysicsChapters(Number(e.target.value))}
                  className="w-full accent-sky-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
                />
              </div>

              {/* Chemistry */}
              <div className="space-y-1.5">
                <label className="text-xs text-slate-300 font-medium flex justify-between">
                  <span>Chemistry</span>
                  <span className="text-teal-400 font-bold">{chemistryChapters} ch</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="25"
                  value={chemistryChapters}
                  onChange={(e) => setChemistryChapters(Number(e.target.value))}
                  className="w-full accent-teal-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
                />
              </div>

              {/* Third Subject */}
              <div className="space-y-1.5">
                <label className="text-xs text-slate-300 font-medium flex justify-between">
                  <span>{exam === "JEE" ? "Mathematics" : "Biology"}</span>
                  <span className="text-indigo-400 font-bold">{thirdSubjectChapters} ch</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="35"
                  value={thirdSubjectChapters}
                  onChange={(e) => setThirdSubjectChapters(Number(e.target.value))}
                  className="w-full accent-indigo-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Time Commitment Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Daily Hours Dedicated to Backlog */}
            <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-2">
              <label className="text-xs font-semibold text-slate-300 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Daily Backlog Hours</span>
                </span>
                <span className="text-amber-400 font-bold text-sm">{dailyBacklogHours} hrs/day</span>
              </label>
              <input
                type="range"
                min="1"
                max="6"
                step="0.5"
                value={dailyBacklogHours}
                onChange={(e) => setDailyBacklogHours(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
              />
              <span className="text-[11px] text-slate-500 block">
                Do not exceed 3.5 hrs/day if you have live coaching classes.
              </span>
            </div>

            {/* Days Remaining */}
            <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-2">
              <label className="text-xs font-semibold text-slate-300 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Days Until Target</span>
                </span>
                <span className="text-emerald-400 font-bold text-sm">{daysRemaining} days</span>
              </label>
              <input
                type="range"
                min="15"
                max="180"
                step="5"
                value={daysRemaining}
                onChange={(e) => setDaysRemaining(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
              />
              <span className="text-[11px] text-slate-500 block">
                Timeline to clear backlog before full mock testing begins.
              </span>
            </div>
          </div>
        </div>

        {/* Right Output: Results & Feasibility Card (5 Cols) */}
        <div className="lg:col-span-5 p-6 rounded-3xl bg-slate-950/90 border border-slate-800 space-y-5">
          {/* Status Badge */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Feasibility Verdict
            </span>
            <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${results.badgeColor}`}>
              {results.status}
            </span>
          </div>

          <div className="space-y-1">
            <h3 className="text-xl font-extrabold text-white">{results.statusTitle}</h3>
            <p className="text-xs text-slate-400 leading-relaxed">{results.advice}</p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-[11px] text-slate-400 block mb-0.5">Total Backlog Hours</span>
              <span className="text-xl font-black text-white">{results.totalBacklogHoursNeeded} hrs</span>
              <span className="text-[10px] text-slate-500 block mt-0.5">Across {results.totalChapters} chapters</span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-[11px] text-slate-400 block mb-0.5">Hours Available</span>
              <span className="text-xl font-black text-sky-400">{results.totalAvailableHours} hrs</span>
              <span className="text-[10px] text-slate-500 block mt-0.5">
                {results.hoursDifference >= 0 ? `+${results.hoursDifference} hrs buffer` : `${results.hoursDifference} hrs deficit`}
              </span>
            </div>
          </div>

          {/* Required Daily Pace */}
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between text-xs">
            <span className="text-slate-300">Required Pace to Finish 100%:</span>
            <span className="text-amber-300 font-bold text-sm">{results.requiredDailyHours} hrs/day</span>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 space-y-2.5">
            <Link
              href={
                exam === "JEE"
                  ? "/book-jee-backlog-recovery-session"
                  : "/book-neet-backlog-recovery-session"
              }
              className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 hover:from-emerald-500 hover:to-sky-500 text-white flex items-center justify-center gap-2 shadow-elevated transition-all group"
            >
              <span>Get 1:1 Backlog Recovery Plan</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/resources"
              className="w-full py-2.5 px-3 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 flex items-center justify-center gap-1.5 transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5 text-slate-500" />
              <span>Browse Chapter Priority Guides</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
