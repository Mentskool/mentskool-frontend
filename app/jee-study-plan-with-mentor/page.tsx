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
  Layers,
  BookOpen,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "JEE Study Plan with Personal Mentor — Custom Daily Timetable & Weekly Targets",
  description:
    "Get a personalized JEE study plan built by an IITian mentor. Tailored daily timetables, homework-balancing schedules, backlog recovery milestones, and real-time task tracking.",
  keywords: [
    "JEE study plan with mentor",
    "personalized JEE timetable",
    "JEE daily study schedule with mentor",
    "IIT JEE weekly study plan",
    "how to make study timetable for JEE",
    "JEE study plan for droppers",
  ],
  alternates: {
    canonical: "https://mentskool.com/jee-study-plan-with-mentor",
  },
  openGraph: {
    title: "JEE Study Plan with Personal Mentor: Tailored Daily & Weekly Roadmaps",
    description:
      "Stop following generic online timetables. Get a dynamic JEE study plan built around your school, coaching, and weak chapters by a top IITian.",
    url: "https://mentskool.com/jee-study-plan-with-mentor",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "JEE Study Plan with Mentor - Mentskool",
      },
    ],
  },
};

const studyPlanFaqs: FaqItem[] = [
  {
    question: "Why do generic online study timetables fail for most JEE aspirants?",
    answer:
      "Generic timetables assume every student has identical study hours, zero backlogs, and equal grasp across Physics, Chemistry, and Math. When a student falls behind by just 2 days, the entire timetable collapses. A study plan with a Mentskool mentor is dynamic: your mentor recalibrates weekly targets based on your actual pace and solves bottlenecks in real-time.",
  },
  {
    question: "How does my mentor balance coaching homework with self-study and revision?",
    answer:
      "Your IITian mentor uses the 60:40 Rule: 60% of daily self-study hours are allocated to executing and mastering current coaching classwork, while 40% is strictly protected for targeted revision of past chapters and backlog elimination.",
  },
  {
    question: "How is daily progress tracked?",
    answer:
      "Through the Mentskool interactive dashboard. You log your completed problem sets, chapters, and study hours daily, which your mentor audits to calculate your verified 94% dynamic efficiency score.",
  },
];

export default function JeeStudyPlanWithMentorPage() {
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
                label: "JEE Study Plan with Mentor",
                href: "/jee-study-plan-with-mentor",
              },
            ]}
          />

          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-xs font-semibold mb-4">
              <Calendar className="w-3.5 h-3.5" />
              <span>Dynamic Personal Timetable Architecture</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              JEE Study Plan with a <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-sky-300 to-indigo-400">Personal Mentor</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Generic PDF timetables do not crack JEE. Get a personalized, living study roadmap engineered by a verified <strong>IIT Bombay or Delhi ranker</strong> around your actual school and coaching routine.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Build My Study Plan</span>
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
          <div className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-brand-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-400 mb-3">
              <Sparkles className="w-4 h-4 text-brand-400" />
              <span>Quick Answer: What Makes a Mentored JEE Study Plan Unique?</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-5">
              Unlike static timetables downloaded from social media, a <strong>Mentskool mentored study plan</strong> is tailored to your real-time academic speed and audited daily:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Calibrated to Your Coaching:</strong> Synchronized with Allen, PW, or school homework so you never fall into double-burden fatigue.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Protected Backlog Slots:</strong> Dedicated 2-hour daily slots to recover older chapters without slowing down current topics.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Daily Problem Count Milestones:</strong> Measurable 80–120 question daily goals tracked and verified on your dashboard.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Weekly Iterative Recalibration:</strong> In weekly 1:1 calls, mentors adjust pace based on your mock test errors and speed.</span>
              </div>
            </div>
          </div>

          <section className="mt-16">
            <SeoFaqAccordion
              faqs={studyPlanFaqs}
              title="Frequently Asked Questions: JEE Study Plan with Mentor"
              subtitle="Everything you need to know about timetable creation, backlog balance, and daily accountability."
            />
          </section>

          <section className="mt-16">
            <SeoCtaBanner
              title="Stop Guessing What to Study Next"
              description="Get a personalized weekly target sheet built by an IITian who already mastered the syllabus. Start with flexible monthly plans."
              primaryButtonText="Find Your IIT Mentor"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
