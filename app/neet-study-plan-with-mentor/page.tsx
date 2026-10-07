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
  Clock,
  Layers,
  BookOpen,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "NEET Study Plan with Personal Mentor — Custom Timetable & NCERT Revision",
  description:
    "Get a personalized NEET study plan created by an AIIMS doctor mentor. Custom daily study timetables, Biology NCERT active recall schedules, Physics numerical targets, and mock audits.",
  keywords: [
    "NEET study plan with mentor",
    "personalized NEET timetable",
    "NEET daily study schedule with mentor",
    "AIIMS doctor study timetable NEET",
    "how to make study plan for NEET",
    "NEET study timetable for droppers",
  ],
  alternates: {
    canonical: "https://mentskool.com/neet-study-plan-with-mentor",
  },
  openGraph: {
    title: "NEET Study Plan with Personal Mentor: Daily Timetables & NCERT Mastery",
    description:
      "A structured, living NEET study plan built around your coaching lectures, NCERT memorization, and Physics problem solving by verified AIIMS doctors.",
    url: "https://mentskool.com/neet-study-plan-with-mentor",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "NEET Study Plan with Mentor - Mentskool",
      },
    ],
  },
};

const neetStudyPlanFaqs: FaqItem[] = [
  {
    question: "How is a mentored NEET study plan structured across Physics, Chemistry, and Biology?",
    answer:
      "A balanced NEET study plan follows the 3-Block Daily System: Block 1 is dedicated to Biology NCERT active recall and diagram retention; Block 2 is reserved for Physics numerical practice (minimum 40 questions); Block 3 covers Chemistry (physical formulas or organic mechanisms). Your mentor adjusts time allocations according to your weakest subject.",
  },
  {
    question: "How does the plan incorporate multiple revision cycles before exam day?",
    answer:
      "Rather than a linear timetable that forgets older chapters, Mentskool mentors design a spaced repetition cycle: every 14 days, dedicated revision slots re-test your active recall on previously completed units using chapter-wise PYQ mini-tests.",
  },
  {
    question: "What happens if I miss a daily target?",
    answer:
      "Your mentor identifies the roadblock on your dashboard during daily audits. In the weekly 1:1 strategy session, your schedule is recalibrated so backlogs never snowball into panic.",
  },
];

export default function NeetStudyPlanWithMentorPage() {
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
                label: "NEET Study Plan with Mentor",
                href: "/neet-study-plan-with-mentor",
              },
            ]}
          />

          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-semibold mb-4">
              <Stethoscope className="w-3.5 h-3.5" />
              <span>Medical Ranker Study Architecture</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              NEET Study Plan with a <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Personal AIIMS Mentor</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Master the 720-mark challenge with a living, adaptive timetable designed by an <strong>AIIMS New Delhi doctor or GMC topper</strong> who knows how to pace NCERT mastery and numerical practice.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Build My NEET Plan</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/free-mentorship-session"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all"
              >
                Get Free Timetable Audit
              </Link>
            </div>
          </div>

          {/* Quick Answer */}
          <div className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-emerald-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-400 mb-3">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Quick Answer: What Makes a Mentored NEET Study Plan Unique?</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-5">
              Unlike generic online timetables, a <strong>Mentskool mentored NEET study plan</strong> incorporates the exact study rhythms used by top medical rankers:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Balanced 3-Subject Pacing:</strong> Ensures Physics numericals receive dedicated high-energy morning hours before Biology revision.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Line-by-Line NCERT Deadlines:</strong> Strict chapter-wise targets for active recall, diagrams, and summary tables.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Daily 94% Efficiency Verification:</strong> Your mentor audits daily problem counts on your interactive dashboard.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Mock Post-Mortem Integration:</strong> Every test blunder is logged into your weekly plan to prevent recurring errors.</span>
              </div>
            </div>
          </div>

          <section className="mt-16">
            <SeoFaqAccordion
              faqs={neetStudyPlanFaqs}
              title="Frequently Asked Questions: NEET Study Plan with Mentor"
              subtitle="Everything you need to know about timetable creation, NCERT revision, and accountability."
            />
          </section>

          <section className="mt-16">
            <SeoCtaBanner
              title="Build Your 680+ Daily Routine with an AIIMS Doctor"
              description="Stop wasting weeks on broken timetables. Get a personalized roadmap tailored to your syllabus completion."
              primaryButtonText="Find AIIMS Mentors"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
