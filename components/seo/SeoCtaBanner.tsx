import React from "react";
import Link from "next/link";
import { ArrowRight, Star, ShieldCheck, CheckCircle2 } from "lucide-react";

interface SeoCtaBannerProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
}

export function SeoCtaBanner({
  title = "Ready to Boost Your Exam Rank with Real Accountability?",
  description = "Connect with a verified ranker from IIT or AIIMS who mastered your exact exam. Zero annual lock-ins — pause or switch mentors anytime.",
  primaryButtonText = "Explore Mentors & Claim Your Spot",
  primaryButtonHref = "/mentors",
}: SeoCtaBannerProps) {
  return (
    <section className="w-full my-16 rounded-[36px] bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0A0E1A] text-white p-8 sm:p-14 relative overflow-hidden shadow-elevated border border-slate-800">
      {/* Ambient background glow */}
      <div
        className="absolute -top-24 right-0 w-[500px] h-[400px] rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(56, 189, 248, 0.4) 0%, rgba(99, 102, 241, 0.2) 60%, transparent 80%)",
        }}
      />
      <div
        className="absolute -bottom-24 left-0 w-[400px] h-[350px] rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.35) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-sky-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span>Rated 4.9/5.0 by JEE &amp; NEET Aspirants</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white leading-tight">
          {title}
        </h2>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>

        {/* Benefits checklist */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-2 text-xs sm:text-sm text-slate-200">
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>1:1 Strategy on Google Meet</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Weekly Dynamic Efficiency Score</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Switch Mentors Anytime</span>
          </span>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href={primaryButtonHref}
            className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-500 hover:from-blue-600 hover:to-indigo-600 text-white shadow-elevated hover:shadow-card hover:-translate-y-0.5 transition-all group"
          >
            <span>{primaryButtonText}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/signup?role=MENTOR"
            className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-white/10 hover:bg-white/15 border border-white/20 text-white backdrop-blur-sm hover:-translate-y-0.5 transition-all"
          >
            Apply as Ranker Mentor
          </Link>
        </div>

        <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-slate-400">
          <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
          <span>Strict Max 30 Seats Per Cohort • 100% Student Choice Guarantee</span>
        </div>
      </div>
    </section>
  );
}
