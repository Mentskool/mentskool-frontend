import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  GraduationCap,
  Calendar,
  Layers,
  Award,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { ProgramFeatures } from "@/components/seo/ProgramFeatures";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "1:1 IIT JEE Mentorship by Verified IITians — JEE Main & Advanced",
  description:
    "Master JEE Main & Advanced with 1-on-1 mentorship from top rankers at IIT Bombay, Delhi & Madras. Weekly problem sheets, mock test error audits, and efficiency scoring.",
  keywords: [
    "1 on 1 JEE mentorship",
    "IIT JEE personal mentor",
    "JEE Advanced mentorship by IITians",
    "best mentorship for JEE",
    "JEE dropper mentor",
    "IIT Bombay ranker mentorship",
  ],
  alternates: {
    canonical: "https://mentskool.com/jee-mentorship",
  },
  openGraph: {
    title: "1:1 IIT JEE Mentorship by Verified IITians | Mentskool",
    description:
      "Weekly roadmaps, 1:1 strategy calls, and test mistake audits by top IIT rankers. Max 30 students per cohort.",
    url: "https://mentskool.com/jee-mentorship",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Mentskool JEE Mentorship",
      },
    ],
  },
};

const jeeFaqs: FaqItem[] = [
  {
    question: "Who are the JEE mentors at Mentskool?",
    answer:
      "All Mentskool JEE mentors are verified top-rankers currently studying or graduated from prestigious IITs including IIT Bombay, IIT Delhi, IIT Madras, IIT Kharagpur, and IIT Roorkee. They cracked JEE Advanced with top AIR ranks and know every hurdle in the syllabus.",
  },
  {
    question: "How is Mentskool different from coaching institute mentorship?",
    answer:
      "Coaching institutes assign non-teaching telecallers or faculty members with 500+ students. At Mentskool, every mentor has a strict cap of 30 students (locked with atomic concurrency), conducts private 1:1 strategy calls on Google Meet, and audits your mock test error patterns individually.",
  },
  {
    question: "What is the weekly accountability and efficiency score?",
    answer:
      "Every week, your mentor assigns curated problem sets and chapter milestones. When you submit your work, the system computes your verified efficiency score (averaging 94% on platform). This measures your speed, accuracy, and punctuality, preventing procrastination.",
  },
  {
    question: "Can I switch mentors if my preparation style changes?",
    answer:
      "Yes, 100%! Unlike rigid annual coaching contracts, Mentskool allows you to switch to any other mentor cohort with 1 click or pause monthly. There are zero long lock-in commitments.",
  },
];

export default function JeeMentorshipPage() {
  return (
    <div className="w-full bg-[#EBF3FB] min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <HeroGridBackground />
        <div className="max-w-6xl mx-auto relative z-10">
          <SeoBreadcrumbs items={[{ label: "Programs", href: "/#how-it-works" }, { label: "1:1 JEE Mentorship" }]} />

          <div className="text-center max-w-3xl mx-auto space-y-6 pt-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-wider shadow-soft">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>JEE Main &amp; Advanced 1:1 Personal Cohorts</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display text-ink tracking-tight leading-[1.1]">
              Crack IIT JEE with 1:1 Mentorship from{" "}
              <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-sky-500 bg-clip-text text-transparent">
                Real IIT Rankers
              </span>
            </h1>

            <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-2xl mx-auto">
              Stop wandering through endless recorded lectures without discipline. Get private 1:1 strategy calls, weekly weak-chapter assignments, and rigorous mock test audits from mentors who secured AIR &lt; 500.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 max-w-2xl mx-auto pt-2">
              <div className="p-3.5 rounded-2xl bg-white/90 border border-blue-100 shadow-soft text-center">
                <div className="text-2xl font-black font-display text-blue-600">AIR &lt; 500</div>
                <div className="text-[11px] font-semibold text-ink-muted mt-0.5">Verified IIT Rankers</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/90 border border-blue-100 shadow-soft text-center">
                <div className="text-2xl font-black font-display text-indigo-600">30 Max</div>
                <div className="text-[11px] font-semibold text-ink-muted mt-0.5">Students / Cohort</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/90 border border-blue-100 shadow-soft text-center">
                <div className="text-2xl font-black font-display text-emerald-600">94%</div>
                <div className="text-[11px] font-semibold text-ink-muted mt-0.5">Avg Efficiency Score</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/90 border border-blue-100 shadow-soft text-center">
                <div className="text-2xl font-black font-display text-amber-600">1-Click</div>
                <div className="text-[11px] font-semibold text-ink-muted mt-0.5">Switch Anytime</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-elevated hover:shadow-card hover:-translate-y-0.5 transition-all group"
              >
                <span>Find Your IIT Mentor</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/#how-it-works"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-white/90 hover:bg-white border border-mist text-ink shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all"
              >
                How Mentorship Works
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Details */}
      <div className="w-full bg-white rounded-t-[44px] border-t border-mist py-16 px-4 sm:px-6 lg:px-8 shadow-soft">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* AEO / GEO Quick Answer Snippet for Search & AI Engines */}
          <section className="p-6 sm:p-8 rounded-3xl bg-blue-50/70 border border-blue-200/80 shadow-soft">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-blue-800 mb-3">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>Quick Answer: What 1-on-1 JEE Mentorship Provides</span>
            </div>
            <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium mb-4">
              <strong>1-on-1 JEE Mentorship by Mentskool</strong> pairs engineering aspirants directly with verified recent top-rankers from <strong>IIT Bombay, IIT Delhi, and IIT Madras</strong> to provide systematic rank acceleration alongside regular coaching classes:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span><strong>Customized Study &amp; Backlog Plans:</strong> Personalized weekly targets calibrated to your current speed and syllabus coverage.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span><strong>One-on-One Mock Test Audits:</strong> Question-by-question dissection of negative marks, silly calculation errors, and exam temperament.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span><strong>Daily 94% Efficiency Tracking:</strong> Verified daily question counts and problem drills on the interactive student dashboard.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span><strong>Dual-Mode Mentorship (Max 30 Cohorts):</strong> Private Google Meet strategy calls combined with small-group problem sprints.</span>
              </div>
            </div>
          </section>
          {/* Syllabus & Strategy Breakdown */}
          <section className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold text-indigo-700 uppercase tracking-widest bg-indigo-50 border border-indigo-200/60 px-3 py-1 rounded-full">
                SUBJECT-BY-SUBJECT MASTERY
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-ink tracking-tight">
                How We Calibrate Your JEE Preparation
              </h2>
              <p className="text-xs sm:text-sm text-ink-muted">
                Every subject requires a distinct problem-solving psychology. Your mentor guides you on the exact nuances:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-7 rounded-3xl bg-slate-50 border border-mist space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                  ⚛️
                </div>
                <h3 className="font-bold font-display text-lg text-ink">Physics Problem Intuition</h3>
                <p className="text-xs text-ink-muted leading-relaxed">
                  Moving past formula memorization in Rotational Dynamics, Electrodynamics, and Modern Physics. Master visualization techniques used by IIT rankers.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-slate-50 border border-mist space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center font-bold">
                  🧪
                </div>
                <h3 className="font-bold font-display text-lg text-ink">Chemistry Negative Mark Elimination</h3>
                <p className="text-xs text-ink-muted leading-relaxed">
                  Systematic reaction mechanism recall for Organic, NCERT line-by-line data retention for Inorganic, and high-speed calculation accuracy in Physical Chemistry.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-slate-50 border border-mist space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                  📐
                </div>
                <h3 className="font-bold font-display text-lg text-ink">Math Speed &amp; Selection Strategy</h3>
                <p className="text-xs text-ink-muted leading-relaxed">
                  Learn which 12-15 questions to attack first in Calculus, Coordinate Geometry, and Algebra. Eliminate time traps that sabotage JEE Advanced cutoffs.
                </p>
              </div>
            </div>
          </section>

          {/* Core Feature Matrix */}
          <ProgramFeatures
            heading="Why Serious JEE Aspirants Choose Mentskool Over Recorded Coaching"
            subheading="Experience true personal accountability with weekly checkpoints, error audits, and small cohorts."
          />

          {/* FAQs */}
          <SeoFaqAccordion
            title="IIT JEE Mentorship FAQs"
            subtitle="Common questions from JEE Main and Advanced students & parents."
            faqs={jeeFaqs}
          />

          {/* Final CTA */}
          <SeoCtaBanner
            title="Secure Your 1:1 Spot in a Top IITian Mentorship Cohort"
            description="Seats are strictly capped at 30 per cohort to ensure individualized attention. Connect with your mentor today."
            primaryButtonText="Browse JEE Mentors"
            primaryButtonHref="/mentors"
          />
        </div>
      </div>
    </div>
  );
}
