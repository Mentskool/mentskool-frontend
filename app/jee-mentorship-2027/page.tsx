import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Target,
  Zap,
  BookOpen,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "JEE 2027 Mentorship Program — 100-Day Sprint to Session 1 & Full Year Roadmap",
  description:
    "Preparing for JEE 2027? Get dedicated 1-on-1 mentorship from top IIT Bombay & Delhi rankers. Master the last 100 days before Session 1, clear backlogs, and maximize mock test accuracy.",
  keywords: [
    "JEE 2027 mentorship",
    "JEE 2027 study plan with mentor",
    "JEE Main 2027 100 day roadmap",
    "JEE 2027 dropper mentorship",
    "1 on 1 JEE 2027 preparation",
    "best mentor for JEE 2027",
  ],
  alternates: {
    canonical: "https://mentskool.com/jee-mentorship-2027",
  },
  openGraph: {
    title: "JEE 2027 Mentorship Program: 100-Day Sprint & 1:1 IITian Guidance",
    description:
      "Master the countdown to JEE 2027 Session 1 with personalized study sheets, mock test post-mortems, and daily 94% task accountability.",
    url: "https://mentskool.com/jee-mentorship-2027",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "JEE 2027 Mentorship - Mentskool",
      },
    ],
  },
};

const jee2027Faqs: FaqItem[] = [
  {
    question: "When is JEE Main 2027 Session 1 expected?",
    answer:
      "NTA tentatively schedules JEE Main Session 1 in late January (typically Jan 22–30, with buffer days). Our mentorship program is structured around a rigorous 100-day sprint leading directly into Session 1, followed by a dedicated JEE Advanced strategy phase.",
  },
  {
    question: "How does the 100-day JEE 2027 sprint plan work?",
    answer:
      "Your IITian mentor breaks the final 100 days into three phases: Phase 1 (Days 1–45) prioritizes high-weightage chapter completion and acute backlog elimination; Phase 2 (Days 46–75) focuses on timed chapter-wise PYQs and full syllabus mock drills; Phase 3 (Days 76–100) is dedicated to mock test post-mortems, negative marking reduction, and rapid formula active recall.",
  },
  {
    question: "Can Class 11 and Class 12 students join the 2027 program?",
    answer:
      "Yes. For Class 12 and droppers, the focus is rapid syllabus closure and high percentile in Session 1. For Class 11 students preparing for 2027/2028, mentors build a 2-year foundation ensuring zero Class 11 backlogs.",
  },
  {
    question: "How often will I meet my IITian mentor?",
    answer:
      "You receive weekly private 1-on-1 Google Meet strategy sessions, supplemented by daily task tracking on the Mentskool dashboard where your mentor verifies your solved problem count and efficiency score every single day.",
  },
];

export default function JeeMentorship2027Page() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white selection:bg-brand-500/30 selection:text-brand-300">
      <HeroGridBackground />

      <main className="relative z-10 pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SeoBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "JEE Mentorship", href: "/jee-mentorship" },
              {
                label: "JEE 2027 Mentorship",
                href: "/jee-mentorship-2027",
              },
            ]}
          />

          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-xs font-semibold mb-4">
              <Calendar className="w-3.5 h-3.5" />
              <span>Target JEE Main &amp; Advanced 2027 Cohort</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              JEE 2027 Mentorship: <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-sky-300 to-indigo-400">100-Day Sprint &amp; 1:1 Roadmap</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              With JEE Main Session 1 approximately 100 days away, every study hour counts. Get paired 1-on-1 with a verified <strong>IIT Bombay or Delhi ranker</strong> to execute a disciplined, backlog-free countdown.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Find Your 2027 Mentor</span>
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
          <div className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-brand-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-400 mb-3">
              <Sparkles className="w-4 h-4 text-brand-400" />
              <span>Quick Answer: What Is The JEE 2027 Mentorship Blueprint?</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-5">
              The <strong>Mentskool JEE 2027 Mentorship Program</strong> delivers a structured 1-on-1 coaching system designed to turn tentative exam timelines into top percentiles. Built around verified IIT rankers, the program provides four execution pillars:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>The 100-Day Countdown Sprint:</strong> Daily syllabus pacing prioritizing high-weightage Physics, Chemistry, and Math chapters.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Backlog Isolation &amp; Recovery:</strong> Clear Class 11 and early Class 12 backlogs without falling behind on ongoing lectures.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Weekly Mock Paper Audits:</strong> Question-by-question mistake breakdown to systematically reduce negative marks by 40+ marks.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>94% Daily Task Efficiency:</strong> Real-time task dashboard with atomic 30-student cohort caps and zero annual lock-ins.</span>
              </div>
            </div>
          </div>

          {/* 3-Phase Sprint Timeline */}
          <section className="my-16 bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800 rounded-3xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white text-center mb-8">
              The 100-Day JEE Main 2027 Strategic Countdown
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  Days 1–45
                </div>
                <h3 className="text-lg font-bold text-white">Syllabus Lockdown &amp; Backlog Purge</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Your mentor maps every pending topic. Finish top-yield chapters (Modern Physics, Organic mechanisms, Coordinate Geometry) with strict daily problem targets.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                  Days 46–75
                </div>
                <h3 className="text-lg font-bold text-white">PYQ Drills &amp; Part-Syllabus Tests</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Solve 2020–2026 PYQs under strict 3-hour examination pressure. Mentors review your time distribution per question to stop time-panic errors.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Days 76–100
                </div>
                <h3 className="text-lg font-bold text-white">Full Mocks &amp; Negative Mark Elimination</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  2 full mock tests weekly with granular post-mortems. Cement your short-notes and formula memory for peak confidence on exam day.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <SeoFaqAccordion
              faqs={jee2027Faqs}
              title="Frequently Asked Questions: JEE 2027 Mentorship"
              subtitle="Everything you need to know about exam dates, sprint planning, and 1:1 IITian guidance."
            />
          </section>

          <section className="mt-16">
            <SeoCtaBanner
              title="Conquer JEE 2027 with an IITian by Your Side"
              description="Get a personalized 100-day roadmap, daily problem accountability, and mock test audits. Start with a flexible monthly plan."
              primaryButtonText="Browse Verified IIT Mentors"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
