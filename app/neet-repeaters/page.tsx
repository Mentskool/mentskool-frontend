import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  RotateCcw,
  Stethoscope,
  HeartPulse,
  BookOpen,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { ProgramFeatures } from "@/components/seo/ProgramFeatures";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "NEET Repeaters & Droppers Mentorship — Turn Your Drop Year into a GMC Seat",
  description:
    "Drop year for NEET? Don't repeat the same mistakes. Get 1-on-1 mentorship from AIIMS doctors who conquered their own drop year. Daily NCERT audits, Physics numerical drills, and negative marks post-mortems.",
  keywords: [
    "NEET repeaters mentorship",
    "best mentorship for NEET droppers",
    "NEET repeater study plan with mentor",
    "how to clear NEET in drop year",
    "AIIMS doctor mentor for repeaters",
    "NEET partial drop mentorship",
  ],
  alternates: {
    canonical: "https://mentskool.com/neet-repeaters",
  },
  openGraph: {
    title: "NEET Repeaters & Droppers Mentorship: Turn Drop Year into a 680+ Score",
    description:
      "Daily task accountability, NCERT active recall, and mock test post-mortems guided by AIIMS doctors who mastered the repeater grind.",
    url: "https://mentskool.com/neet-repeaters",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "NEET Repeaters Mentorship - Mentskool",
      },
    ],
  },
};

const repeaterFaqs: FaqItem[] = [
  {
    question: "Why do so many NEET repeaters plateau at their previous year's score?",
    answer:
      "Repeaters don't lack intelligence; they lack systematic error correction. In a drop year, students tend to repeatedly re-read familiar theory (especially easy Biology chapters) while avoiding their actual weaknesses (difficult Physics numericals and negative-marking blunders). A mentor forces you to confront and fix your exact score leaks every week.",
  },
  {
    question: "How does an AIIMS doctor mentor manage a repeater's study timetable?",
    answer:
      "Your mentor designs a High-Yield Inversion Plan: 60% of daily time is dedicated to problem-solving and mistake auditing, with targeted theory revision strictly tied to questions you got wrong. This guarantees active retention instead of passive textbook scanning.",
  },
  {
    question: "How does the program address repeater isolation and exam anxiety?",
    answer:
      "A drop year is psychologically challenging. Having a dedicated AIIMS doctor who personally navigated the pressure gives you weekly mental debriefs, steady motivation, and objective progress validation via your 94% efficiency score.",
  },
];

export default function NeetRepeatersPage() {
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
                label: "NEET Repeaters",
                href: "/neet-repeaters",
              },
            ]}
          />

          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-semibold mb-4">
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Dedicated Drop Year &amp; Repeater Turnaround Program</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              NEET Repeaters Mentorship: <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Turn Your Drop Year into a GMC Seat</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Your drop year is too valuable to repeat past mistakes. Partner 1-on-1 with an <strong>AIIMS New Delhi doctor or top GMC topper</strong> who will eliminate negative marks and rebuild your daily consistency.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Find My Repeater Mentor</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/free-mentorship-session"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all"
              >
                Get Free Repeater Diagnostic
              </Link>
            </div>
          </div>

          {/* Quick Answer */}
          <div className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-emerald-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-400 mb-3">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Quick Answer: What Makes The Mentskool Repeater Program Different?</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-5">
              Traditional repeater batches subject droppers to the same passive lectures they already saw in Class 12. <strong>Mentskool delivers high-touch execution coaching</strong> focused on the 4 drivers of repeater rank turnarounds:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Negative Mark Eradication:</strong> Detailed post-mortems of previous attempts to eliminate silly errors and question-reading traps.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Physics Numerical Confidence:</strong> Targeted formula derivation drills and daily 40-question sprints to cross 150+ in Physics.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Line-by-Line NCERT Active Recall:</strong> Re-quiz all 38 Biology chapters to ensure a solid 340+ foundation in Biology.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Daily 94% Efficiency Accountability:</strong> Your mentor audits completed question sets every evening to banish drop-year procrastination.</span>
              </div>
            </div>
          </div>

          <section className="my-16">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Engineered for Medical Drop-Year Turnarounds
              </h2>
              <p className="text-slate-400 text-sm mt-2">
                Turn past setbacks into a Government Medical College admission.
              </p>
            </div>
            <ProgramFeatures />
          </section>

          <section className="mt-16">
            <SeoFaqAccordion
              faqs={repeaterFaqs}
              title="Frequently Asked Questions: NEET Repeater Mentorship"
              subtitle="Everything you need to know about drop year routines, score breakthroughs, and AIIMS mentors."
            />
          </section>

          <section className="mt-16">
            <SeoCtaBanner
              title="Make This Your Final and Victorious NEET Attempt"
              description="Connect 1-on-1 with an AIIMS doctor who will build your weekly roadmap and guide you to your dream GMC seat."
              primaryButtonText="Find AIIMS Mentors"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
