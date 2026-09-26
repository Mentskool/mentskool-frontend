"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Award,
  Zap,
  CheckCircle2,
  Users,
  Target,
  ChevronLeft,
  ChevronRight,
  Trophy,
  Video,
} from "lucide-react";

interface HeroPlatformEngineProps {
  /**
   * Set mode="single" if you want to immediately revert to the classic single card.
   * Default is "carousel" (multi-slide interactive showcase).
   */
  mode?: "carousel" | "single";
}

export const HeroPlatformEngine: React.FC<HeroPlatformEngineProps> = ({
  mode = "carousel",
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const SLIDES_COUNT = 3;
  // Dynamic, fast slide pace (3.6 seconds)
  const SLIDE_DURATION = 3600;

  // Auto-slide interval, pauses smoothly on user hover
  useEffect(() => {
    if (mode === "single" || isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES_COUNT);
    }, SLIDE_DURATION);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, mode]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES_COUNT) % SLIDES_COUNT);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES_COUNT);
  };

  return (
    <div
      className="relative w-full max-w-[500px] mx-auto lg:max-w-none flex flex-col items-center justify-center py-4 select-none group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Ambient Platform Radiant Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-sky-400/25 via-blue-500/15 to-indigo-500/20 rounded-full blur-3xl opacity-60 group-hover:opacity-90 transition-opacity duration-700 pointer-events-none" />

      {/* Floating Pill Tag above the Engine (changes per slide) */}
      <div className="absolute -top-3 sm:top-0 right-4 z-20 hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-sky-200 shadow-soft text-[11px] font-bold text-sky-900 transition-all duration-300">
        {currentSlide === 0 && (
          <>
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse inline-block" />
            <span>Weekly Google Meet (1:1 &amp; 1:15)</span>
          </>
        )}
        {currentSlide === 1 && (
          <>
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse inline-block" />
            <span>Real-Time Cohort Leaderboard</span>
          </>
        )}
        {currentSlide === 2 && (
          <>
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-ping inline-block" />
            <span>Live 1:1 Matching Active</span>
          </>
        )}
      </div>

      {/* Main Isometric / 3D-Tiered Platform Assembly */}
      <div className="relative w-full max-w-[440px] transition-transform duration-500 hover:scale-[1.01]">
        {/* Tier 1: Outer Base Layer with Soft Blue Glass Perspective Border */}
        <div className="rounded-[32px] p-2 bg-gradient-to-b from-white/95 via-[#F3F8FD] to-[#E5EFF9] border-2 border-sky-300/60 shadow-[0_20px_50px_-12px_rgba(14,165,233,0.18)]">
          {/* Tier 2: Stepped Middle Elevated Plinth - LOCKED FIXED HEIGHT TO ELIMINATE JITTER */}
          <div className="rounded-[26px] p-3.5 sm:p-5 bg-gradient-to-b from-white via-white/95 to-[#F5F9FE] border border-sky-100 shadow-soft h-[480px] flex flex-col justify-between relative overflow-hidden">

            {/* Slide Navigation Chevrons (visible on hover or focus) */}
            {mode === "carousel" && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-30 w-7 h-7 rounded-full bg-white/95 border border-sky-200 shadow-card text-sky-800 flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-sky-50 transition-all duration-200"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-30 w-7 h-7 rounded-full bg-white/95 border border-sky-200 shadow-card text-sky-800 flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-sky-50 transition-all duration-200"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </>
            )}

            {/* Slide Viewport - Fixed Height to guarantee exact match with Cohort Rank slide */}
            <div className="h-[400px] flex flex-col justify-between overflow-hidden">
              {/* ========================================================================= */}
              {/* SLIDE 0 (FIRST): GOOGLE MEET DUAL SESSIONS (1:1 PERSONAL + 1:15 COHORT)   */}
              {/* ========================================================================= */}
              {currentSlide === 0 && (
                <div className="h-full flex flex-col justify-between animate-in fade-in duration-300">
                  {/* Top Plaque */}
                  <div className="bg-white/95 rounded-2xl p-3 border border-sky-200/80 shadow-[0_4px_20px_rgb(0,0,0,0.04)] flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <Video className="w-4 h-4 text-blue-600" />
                        <h4 className="font-display font-bold text-sm text-ink leading-tight">
                          Live Mentorship &amp; Doubt Sessions
                        </h4>
                      </div>
                      <p className="text-[11px] text-ink-muted mt-0.5">
                        Dual Mode: 1:1 Personal + 1:15 Cohort Calls
                      </p>
                    </div>
                    <span className="text-[10px] font-bold text-blue-800 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-md flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Google Meet HD
                    </span>
                  </div>

                  {/* Clean Google Meet Window using the user's pixel-perfect meet.png */}
                  <div className="relative rounded-xl overflow-hidden border border-slate-700/80 shadow-[0_8px_24px_rgba(0,0,0,0.18)] bg-[#121316]">
                    <img
                      src="/meet.png"
                      alt="Mentskool Live Google Meet Cohort Mentorship Discussion"
                      className="w-full h-auto object-cover rounded-xl block"
                    />
                  </div>

                  {/* Dual Mode Breakdown: 1:1 Personal vs 1:15 Cohort Meetings */}
                  <div className="grid grid-cols-2 gap-2">
                    {/* 1:1 Personal Meeting */}
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-50/90 to-white border border-blue-200/80 shadow-soft space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-black uppercase tracking-wider text-blue-700 bg-blue-100 px-1.5 py-0.5 rounded">
                          1 : 1 Meeting
                        </span>
                        <span className="text-[10px] font-bold text-ink">Personal</span>
                      </div>
                      <p className="text-[10px] text-ink-muted leading-tight">
                        Private strategy, test error audit &amp; roadmap calibration with ranker.
                      </p>
                    </div>

                    {/* 1:15 Cohort Meeting */}
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-sky-50/90 to-white border border-sky-200/80 shadow-soft space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-black uppercase tracking-wider text-sky-800 bg-sky-100 px-1.5 py-0.5 rounded">
                          1 : 15 Cohort
                        </span>
                        <span className="text-[10px] font-bold text-ink">Group Drill</span>
                      </div>
                      <p className="text-[10px] text-ink-muted leading-tight">
                        Small cohort live problem-solving, doubt-busting &amp; speed analysis.
                      </p>
                    </div>
                  </div>

                  {/* Footer Assurance Tag */}
                  <div className="flex items-center justify-between text-[11px] text-ink-faint px-1">
                    <span className="flex items-center gap-1 text-blue-700 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                      Direct Ranker Face-to-Face • Zero Recorded Factory Lectures
                    </span>
                    <span className="font-semibold text-ink-muted">10-15 Max</span>
                  </div>
                </div>
              )}

              {/* ========================================================================= */}
              {/* SLIDE 1 (SECOND): SUBSCRIBED STUDENT RANKING IN QUIZ & TASK EFFICIENCY     */}
              {/* ========================================================================= */}
              {currentSlide === 1 && (
                <div className="h-full flex flex-col justify-between animate-in fade-in duration-300">
                  {/* Cohort Header Plaque */}
                  <div className="rounded-2xl bg-white/95 border border-sky-200/80 p-3.5 shadow-[0_4px_20px_rgb(0,0,0,0.04)] space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <Trophy className="w-4 h-4 text-amber-500 fill-amber-400" />
                          <h4 className="font-display font-bold text-sm text-ink leading-tight">
                            Cohort Performance Matrix
                          </h4>
                        </div>
                        <p className="text-[11px] text-ink-muted mt-0.5">
                          Physics JEE Advanced • Mentor Rahul Sharma
                        </p>
                      </div>

                      <span className="text-[10px] font-bold text-blue-800 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-md">
                        Week 4 Live Ranks
                      </span>
                    </div>

                    {/* Subscribed Student Highlight Card (Comparing to Cohort) */}
                    <div className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-2.5 shadow-card space-y-1.5 relative overflow-hidden">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-extrabold uppercase tracking-wider bg-white/20 backdrop-blur-xs px-2 py-0.5 rounded text-white">
                            Your Active Standing
                          </span>
                          <span className="text-xs font-bold text-amber-300 flex items-center gap-0.5">
                            ★ Rank #2 of 10
                          </span>
                        </div>
                        <span className="text-[10px] font-bold bg-white/25 px-2 py-0.5 rounded-full">
                          +13% Above Avg
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 pt-1 border-t border-white/20">
                        <div>
                          <div className="text-[10px] text-blue-100 uppercase font-semibold">
                            Task Efficiency
                          </div>
                          <div className="text-base sm:text-lg font-black font-display text-white">
                            94% <span className="text-xs font-normal text-blue-200">(8/8 Done)</span>
                          </div>
                        </div>
                        <div>
                          <div className="text-[10px] text-blue-100 uppercase font-semibold">
                            Weekly Quiz Score
                          </div>
                          <div className="text-base sm:text-lg font-black font-display text-white">
                            182 <span className="text-xs font-normal text-blue-200">/ 200 (91%)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Comparative Mini-Leaderboard List */}
                  <div className="bg-white rounded-xl p-2.5 border border-mist shadow-soft space-y-1">
                    <div className="flex items-center justify-between text-[11px] font-bold text-ink-muted pb-1 border-b border-mist/60">
                      <span>Rank &amp; Student</span>
                      <span>Efficiency / Quiz Marks</span>
                    </div>

                    {/* Rank 1 */}
                    <div className="flex items-center justify-between py-1 px-2 rounded-lg text-xs bg-slate-50/70 border border-slate-100">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-amber-600 text-xs">🥇 #1</span>
                        <span className="font-semibold text-ink text-xs">Aryan K.</span>
                        <span className="text-[9px] bg-slate-200/80 px-1 rounded text-slate-700 font-medium">Dropper</span>
                      </div>
                      <div className="flex items-center gap-2 font-mono text-xs">
                        <span className="font-bold text-blue-700">98%</span>
                        <span className="text-ink-muted">192/200</span>
                      </div>
                    </div>

                    {/* Rank 2: YOU (Subscribed Student) Highlighted */}
                    <div className="flex items-center justify-between py-1 px-2 rounded-lg text-xs bg-blue-50/90 border border-blue-300 shadow-soft ring-1 ring-blue-300">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-700 text-xs">🥈 #2</span>
                        <span className="font-bold text-blue-900 text-xs">You (Enrolled)</span>
                        <span className="text-[9px] bg-blue-600 text-white font-bold px-1.5 py-0.2 rounded">YOU</span>
                      </div>
                      <div className="flex items-center gap-2 font-mono text-xs">
                        <span className="font-black text-blue-700">94%</span>
                        <span className="font-bold text-blue-900">182/200</span>
                      </div>
                    </div>

                    {/* Rank 3 */}
                    <div className="flex items-center justify-between py-1 px-2 rounded-lg text-xs bg-slate-50/70 border border-slate-100">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-amber-800 text-xs">🥉 #3</span>
                        <span className="font-semibold text-ink text-xs">Sneha R.</span>
                        <span className="text-[9px] bg-slate-200/80 px-1 rounded text-slate-700 font-medium">Class 12</span>
                      </div>
                      <div className="flex items-center gap-2 font-mono text-xs">
                        <span className="font-bold text-blue-700">89%</span>
                        <span className="text-ink-muted">174/200</span>
                      </div>
                    </div>
                  </div>

                  {/* Footer Assurance Tag */}
                  <div className="flex items-center justify-between text-[11px] text-ink-faint px-1">
                    <span className="flex items-center gap-1 text-blue-700 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                      Verified by Mentor Rahul Sharma (AIR 42)
                    </span>
                    <span className="font-semibold text-ink-muted">10 Max Cohort</span>
                  </div>
                </div>
              )}

              {/* ========================================================================= */}
              {/* SLIDE 2 (THIRD): PLATFORM OVERVIEW & SYLLABUS ROADMAP                      */}
              {/* ========================================================================= */}
              {currentSlide === 2 && (
                <div className="h-full flex flex-col justify-between animate-in fade-in duration-300">
                  {/* Top Upright Floating Frosted Glass Engine Card */}
                  <div className="relative rounded-2xl bg-white/90 backdrop-blur-xl border border-sky-200/80 p-4 shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-28 h-28 bg-sky-400/15 rounded-full blur-xl pointer-events-none" />

                    <div className="flex items-center justify-between gap-3 mb-2.5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand to-indigo-700 text-white flex items-center justify-center font-display font-extrabold text-base shadow-soft">
                          M
                        </div>
                        <div>
                          <div className="font-display font-bold text-base text-ink tracking-tight flex items-center gap-1.5">
                            <span>Mentskool</span>
                            <span className="text-[10px] font-extrabold px-1.5 py-0.2 rounded-md bg-sky-100 text-sky-800 border border-sky-200">
                              PRO
                            </span>
                          </div>
                          <p className="text-[11px] text-ink-muted">1:1 Mentorship Platform</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-[11px] font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200/80">
                        <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                        <span>Top Rankers</span>
                      </div>
                    </div>

                    {/* Sub-header text on plaque */}
                    <div className="bg-[#F5F9FE] rounded-xl p-2.5 border border-sky-100/80 flex items-center justify-between">
                      <div className="space-y-0.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-ink-faint">
                          Guided by Verified Rankers
                        </span>
                        <div className="text-xs font-bold text-ink">
                          IIT Bombay • IIT Delhi • AIIMS New Delhi
                        </div>
                      </div>
                      <div className="w-7 h-7 rounded-lg bg-sky-500 text-white flex items-center justify-center shadow-soft">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Middle Live Milestone Metric Bar */}
                  <div className="bg-white rounded-xl p-3 border border-mist shadow-soft space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="text-ink flex items-center gap-1.5">
                        <Target className="w-3.5 h-3.5 text-indigo-600" />
                        Weekly Syllabus Velocity
                      </span>
                      <span className="text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md text-[11px] border border-blue-200">
                        94% On-Track
                      </span>
                    </div>
                    <div className="w-full bg-[#EAF2FB] h-2 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-600 rounded-full w-[94%]" />
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-ink-faint pt-0.5">
                      <span>Personalized Diagnostic Roadmap</span>
                      <span className="text-blue-600 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-blue-600" /> 1:1 Verified
                      </span>
                    </div>
                  </div>

                  {/* Bottom 4 Pillar Tags */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#F4F9FE] border border-sky-200/60 text-[11px] font-semibold text-sky-950">
                      <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                      <span>Weekly Tasks</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#F4F9FE] border border-sky-200/60 text-[11px] font-semibold text-sky-950">
                      <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
                      <span>Efficiency Score</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#F4F9FE] border border-sky-200/60 text-[11px] font-semibold text-sky-950">
                      <Users className="w-3.5 h-3.5 text-indigo-600" />
                      <span>Max 10 Students</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#F4F9FE] border border-sky-200/60 text-[11px] font-semibold text-sky-950">
                      <Award className="w-3.5 h-3.5 text-purple-600" />
                      <span>1-Click Switch</span>
                    </div>
                  </div>

                  {/* Footer Assurance Tag */}
                  <div className="flex items-center justify-between text-[11px] text-ink-faint px-1">
                    <span className="flex items-center gap-1 text-blue-700 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                      Strict 1:1 Accountability
                    </span>
                    <span className="font-semibold text-ink-muted">10 Max Cohort</span>
                  </div>
                </div>
              )}
            </div>

            {/* ========================================================================= */}
            {/* CAROUSEL CONTROLLER & INDICATOR BAR AT BOTTOM                             */}
            {/* ========================================================================= */}
            {mode === "carousel" && (
              <div className="pt-2 border-t border-sky-100 flex items-center justify-between gap-2">
                {/* 3 Clickable Slide Tabs in requested order */}
                <div className="flex items-center gap-1.5 w-full">
                  {[
                    { id: 0, label: "1. GMeet 1:1" },
                    { id: 1, label: "2. Cohort Ranks" },
                    { id: 2, label: "3. Overview" },
                  ].map((s) => {
                    const isActive = currentSlide === s.id;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setCurrentSlide(s.id)}
                        className={`flex-1 py-1.5 px-2 rounded-lg text-[11px] font-bold text-center transition-all duration-200 ${
                          isActive
                            ? "bg-blue-600 text-white shadow-soft"
                            : "bg-[#F3F8FD] text-ink-muted hover:text-ink hover:bg-sky-100/70"
                        }`}
                      >
                        {s.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
