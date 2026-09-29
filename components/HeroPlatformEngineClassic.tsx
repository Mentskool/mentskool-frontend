"use client";

import React from "react";
import {
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Award,
  Zap,
  CheckCircle2,
  Users,
  Target,
} from "lucide-react";

export const HeroPlatformEngineClassic: React.FC = () => {
  return (
    <div className="relative w-full max-w-[500px] mx-auto lg:max-w-none flex items-center justify-center py-6 select-none group">
      {/* Ambient Platform Radiant Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-sky-400/20 via-blue-500/15 to-indigo-500/20 rounded-full blur-3xl opacity-60 group-hover:opacity-90 transition-opacity duration-700 pointer-events-none" />

      {/* Floating Pill Tag above the Engine */}
      <div className="absolute -top-3 sm:top-0 right-4 z-20 hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-sky-200 shadow-soft text-[11px] font-bold text-sky-900 animate-float-slow">
        <span className="w-2 h-2 rounded-full bg-sky-500 animate-ping inline-block" />
        <span>Live 1:1 Matching Active</span>
      </div>

      {/* Main Isometric / 3D-Tiered Platform Assembly */}
      <div className="relative w-full max-w-[440px] transition-transform duration-500 hover:scale-[1.02]">
        {/* Tier 1: Outer Base Layer with Subtle Perspective Border */}
        <div className="rounded-[32px] p-2 bg-gradient-to-b from-white/90 via-[#F3F8FD] to-[#E5EFF9] border-2 border-sky-300/60 shadow-[0_20px_50px_-12px_rgba(14,165,233,0.18)]">
          {/* Tier 2: Stepped Middle Elevated Plinth */}
          <div className="rounded-[26px] p-3 sm:p-5 bg-gradient-to-b from-white via-white/95 to-[#F5F9FE] border border-sky-100 shadow-soft space-y-4">
            {/* Top Upright Floating Frosted Glass Engine Card */}
            <div className="relative rounded-2xl bg-white/85 backdrop-blur-xl border border-sky-200/80 p-5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden">
              {/* Top ambient highlight gradient */}
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-sky-400/15 rounded-full blur-xl pointer-events-none" />

              <div className="flex items-center justify-between gap-3 mb-3">
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
              <div className="bg-[#F5F9FE] rounded-xl p-3 border border-sky-100/80 flex items-center justify-between">
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
            <div className="bg-white rounded-xl p-3.5 border border-mist shadow-soft space-y-2">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-ink flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5 text-indigo-600" />
                  Weekly Syllabus Velocity
                </span>
                <span className="text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full text-[11px] border border-blue-200">
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
            <div className="grid grid-cols-2 gap-2 pt-1">
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
                <span>Max 30 Students</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#F4F9FE] border border-sky-200/60 text-[11px] font-semibold text-sky-950">
                <Award className="w-3.5 h-3.5 text-purple-600" />
                <span>1-Click Switch</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
