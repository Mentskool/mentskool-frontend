import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Target,
  ShieldCheck,
  CalendarCheck,
  TrendingUp,
  ArrowRight,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Mentskool — 1:1 JEE & NEET Mentorship",
  description:
    "Learn how Mentskool helps JEE and NEET aspirants stay consistent with 1:1 mentorship from verified IIT & AIIMS rankers, weekly accountability, and structured study roadmaps.",
  alternates: {
    canonical: "https://mentskool.com/about",
  },
};

export default function AboutPage() {
  const pillars = [
    {
      icon: Users,
      title: "1:1 Guidance by Verified Rankers",
      description:
        "Instead of overcrowded batches where doubts go unnoticed, every student is paired with a verified IIT or AIIMS ranker who has personally cracked the same exam.",
    },
    {
      icon: CalendarCheck,
      title: "Weekly Task Accountability",
      description:
        "Mentors break the vast JEE and NEET syllabus into realistic weekly targets, track completion, and help students clear backlogs without burnout.",
    },
    {
      icon: TrendingUp,
      title: "Mock Test & Efficiency Tracking",
      description:
        "Regular test analysis helps students identify recurring mistakes, reduce negative marking, and build exam-day confidence step by step.",
    },
    {
      icon: ShieldCheck,
      title: "Flexible & Transparent Mentorship",
      description:
        "Small cohorts capped at 30 students per mentor ensure personal attention, with transparent progress tracking and the freedom to switch mentors anytime.",
    },
  ];

  return (
    <div className="w-full bg-[#0B0F19] text-slate-300 min-h-screen py-12 sm:py-16 px-4 sm:px-6 lg:px-8 font-sans selection:bg-sky-500/20 selection:text-sky-300">
      <div className="max-w-5xl mx-auto space-y-14">
        {/* Hero */}
        <div className="space-y-4 border-b border-slate-800 pb-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-800/80 text-sky-400 text-xs font-semibold tracking-wide uppercase">
            <Target className="w-3.5 h-3.5 text-sky-400" />
            <span>About Mentskool</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white">
            Structured 1:1 Mentorship for JEE &amp; NEET Aspirants
          </h1>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Mentskool is an online mentorship platform built to give serious JEE and NEET aspirants the personal strategy, daily discipline, and honest feedback that mass coaching classes cannot provide.
          </p>
        </div>

        {/* Why We Built It */}
        <section className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-white">
            How Mentskool Helps Students Prepare Smarter
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Most students preparing for competitive exams do not fall short because of a lack of lectures or study material—they struggle with planning what to study next, managing backlogs, staying consistent over months, and analyzing why mock test scores plateau.
          </p>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Mentskool bridges that gap by pairing aspirants 1-on-1 with mentors from top IITs and AIIMS. Whether a student is in Class 11, Class 12, or taking a drop year—studying via self-study or alongside coaching—our platform keeps their weekly execution structured and measurable.
          </p>
        </section>

        {/* Core Pillars */}
        <section className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-white text-center">
            What You Get on the Platform
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {pillars.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl bg-slate-900/50 border border-slate-800 p-6 space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky-950/80 border border-sky-800/60 flex items-center justify-center text-sky-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold font-display text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-gradient-to-br from-sky-950/60 to-slate-900 border border-sky-800/50 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <h2 className="text-lg sm:text-xl font-bold font-display text-white">
              Ready to find a mentor for your exam?
            </h2>
            <p className="text-sm text-slate-400">
              Browse verified IIT and AIIMS mentors or book a 1:1 strategy call.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/mentors"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition-colors"
            >
              <span>Explore Mentors</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/book-call"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-colors"
            >
              <span>Book 1:1 Call</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
