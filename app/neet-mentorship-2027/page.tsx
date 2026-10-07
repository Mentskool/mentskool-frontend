import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Stethoscope,
  Target,
  Clock,
  BookOpen,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "NEET 2027 Mentorship Program — Month-by-Month Blueprint to 680+ Score",
  description:
    "Preparing for NEET 2027? Get dedicated 1-on-1 mentorship from verified AIIMS Delhi doctors and top GMC rankers. Month-by-month NCERT syllabus roadmap, mock test audits, and CBT preparation.",
  keywords: [
    "NEET 2027 mentorship",
    "NEET 2027 study plan with mentor",
    "NEET 2027 preparation timetable",
    "NEET 2027 dropper repeater mentor",
    "best AIIMS mentor for NEET 2027",
    "1 on 1 NEET 2027 coaching online",
  ],
  alternates: {
    canonical: "https://mentskool.com/neet-mentorship-2027",
  },
  openGraph: {
    title: "NEET 2027 Mentorship: Month-by-Month Blueprint with AIIMS Doctors",
    description:
      "Achieve 680+ in NEET 2027 with personalized study sheets, line-by-line NCERT audits, Physics numerical shortcuts, and daily 94% task accountability.",
    url: "https://mentskool.com/neet-mentorship-2027",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "NEET 2027 Mentorship - Mentskool",
      },
    ],
  },
};

const neet2027Faqs: FaqItem[] = [
  {
    question: "When is NEET 2027 expected to be held?",
    answer:
      "NEET-UG is typically scheduled on the first Sunday of May (tentatively May 2–3, 2027, subject to official NTA notifications). Our month-by-month mentorship roadmap prepares students to complete 100% of the syllabus by January, leaving four full months for multi-cycle revisions and mock tests.",
  },
  {
    question: "How does the NEET 2027 month-by-month roadmap work?",
    answer:
      "Your AIIMS mentor designs customized milestones: Phase 1 (Syllabus Completion & NCERT Line Memorization by Jan), Phase 2 (High-Yield Error Book & Subject-Wise Revision by March), and Phase 3 (Full-Syllabus Timed Mocks, OMR/CBT Drills, and Negative Marks Reduction leading up to May).",
  },
  {
    question: "How do mentors help with Physics numerical anxiety?",
    answer:
      "Physics is the primary differentiator for Government Medical College seats. Your mentor teaches you dimensional elimination, high-yield formula derivatives, and daily 40-question micro-drills to build speed and accuracy.",
  },
  {
    question: "Is Mentskool mentorship suitable for NEET repeaters and droppers?",
    answer:
      "Absolutely. More than half of our medical mentees are droppers. Having an AIIMS doctor who personally went through the drop-year grind ensures you stay motivated, avoid repeating past mistakes, and remain consistent every single day.",
  },
];

export default function NeetMentorship2027Page() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white selection:bg-brand-500/30 selection:text-brand-300">
      <HeroGridBackground />

      <main className="relative z-10 pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SeoBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "NEET Mentorship", href: "/neet-mentorship" },
              {
                label: "NEET 2027 Mentorship",
                href: "/neet-mentorship-2027",
              },
            ]}
          />

          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-semibold mb-4">
              <Stethoscope className="w-3.5 h-3.5" />
              <span>Target NEET-UG 2027 (MBBS Admission Blueprint)</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              NEET 2027 Mentorship: <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Month-by-Month 680+ Strategy</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Secure your Government Medical College seat. Get paired 1-on-1 with a verified <strong>AIIMS New Delhi doctor or GMC topper</strong> who guides your daily NCERT mastery and mock test accuracy.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Find Your AIIMS Mentor</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/free-mentorship-session"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all"
              >
                Claim Free 1:1 Strategy Call
              </Link>
            </div>
          </div>

          {/* AEO Quick Summary */}
          <div className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-emerald-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-400 mb-3">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Quick Answer: What Is The NEET 2027 Mentorship Blueprint?</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-5">
              The <strong>Mentskool NEET 2027 Mentorship Program</strong> is a specialized 1-on-1 performance coaching system led by recent top-rankers from AIIMS New Delhi and premier Government Medical Colleges. It focuses on four core rank accelerators:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Line-by-Line NCERT Retention:</strong> Active recall audits on Biology diagrams, summary exceptions, and Chemistry inorganic trends.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Physics Numerical Elimination:</strong> Overcoming formula confusion to comfortably cross 150+ in Physics.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Negative Mark Dissection:</strong> Segregate test mistakes into calculation, misread options, and time pressure panic to push mock scores past 650.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Daily 94% Efficiency Tracking:</strong> Daily problem submission verification with atomic 30-student cohort caps and zero annual lock-ins.</span>
              </div>
            </div>
          </div>

          {/* 3-Phase Timeline */}
          <section className="my-16 bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800 rounded-3xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white text-center mb-8">
              Month-by-Month Roadmap to NEET May 2027
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Through January
                </div>
                <h3 className="text-lg font-bold text-white">Full Syllabus Closure &amp; Backlog Clearance</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Complete all 38 Biology chapters and core Physics/Chemistry chapters with line-by-line NCERT retention drills.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-teal-500/20 text-teal-400 border border-teal-500/30">
                  February – March
                </div>
                <h3 className="text-lg font-bold text-white">High-Yield Revisions &amp; Part Mocks</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Multi-cycle revisions using personal mistake books and 15-year NEET PYQs. Daily timed numerical drills.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                  April – Exam Day
                </div>
                <h3 className="text-lg font-bold text-white">Full Length Mocks &amp; Negative Marks Purge</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Full 3-hour 20-minute simulations twice a week with immediate 1-on-1 mentor paper post-mortems to eliminate marks leakage.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <SeoFaqAccordion
              faqs={neet2027Faqs}
              title="Frequently Asked Questions: NEET 2027 Mentorship"
              subtitle="Everything you need to know about exam timelines, AIIMS doctor mentors, and 680+ strategy."
            />
          </section>

          <section className="mt-16">
            <SeoCtaBanner
              title="Secure Your Government MBBS Seat in 2027"
              description="Get continuous 1-on-1 strategy, weekly mock analysis, and daily NCERT revision accountability. Flexible monthly subscriptions."
              primaryButtonText="Find AIIMS Mentors"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
