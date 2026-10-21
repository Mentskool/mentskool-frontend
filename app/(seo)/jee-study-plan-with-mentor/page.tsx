import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Target,
  Zap,
  BookOpen,
  Calendar,
  Layers,
  Award,
  TrendingUp,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { SeoMentorFunnel } from "@/components/seo/SeoMentorFunnel";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "JEE Study Plan with Personal Mentor (2027/2028) — Dynamic Living Timetable",
  description:
    "Static PDF timetables fail after 4 days. Build a living, weekly JEE 2027 & 2028 study plan with an IIT Bombay & Delhi mentor that adapts to your school, coaching homework, and mock test scores.",
  keywords: [
    "JEE study plan with mentor",
    "personalized JEE timetable 2027",
    "JEE 2028 daily timetable",
    "living study plan for IIT JEE",
    "JEE daily timetable for Class 11 and 12",
    "JEE dropper daily study plan 2027",
    "IITian study schedule",
  ],
  alternates: {
    canonical: "https://mentskool.com/jee-study-plan-with-mentor",
  },
  openGraph: {
    title: "JEE Study Plan with Personal Mentor: The Living Timetable (2027/2028)",
    description:
      "A customized study roadmap that flexes around your coaching homework and school exams with daily 94% task accountability.",
    url: "https://mentskool.com/jee-study-plan-with-mentor",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "JEE Study Plan - Mentskool",
      },
    ],
  },
};

const studyPlanFaqs: FaqItem[] = [
  {
    question: "Why do downloaded YouTube or PDF timetables fail within 3 to 5 days?",
    answer:
      "Because life is dynamic, while static PDF timetables are rigid. When you catch a cold, have an unexpected school practical, or get stuck on a difficult integration chapter for 3 hours, a static timetable collapses. You feel guilty, abandon the schedule, and fall back into chaos. A living study plan with a personal mentor is recalibrated every week: if Thursday gets disrupted, your mentor redistributes those problem sets intelligently across Friday and Saturday.",
  },
  {
    question: "How do I balance offline coaching homework with backlog clearance for JEE 2027 & 2028?",
    answer:
      "Our mentors enforce the 75/25 Daily Protocol: 75% of your evening self-study goes to current ongoing coaching chapters (lecture notes, DPPs, modules) to prevent new backlogs, while a fixed 25% window (75–90 minutes) is strictly ring-fenced for structured Class 11 backlog clearance.",
  },
  {
    question: "How many questions should a serious JEE 2027 or 2028 aspirant solve daily?",
    answer:
      "Quality always trumps mindless quantity. In our cohort framework, a standard productive day targets 60–75 focused problems: 20 Physics numericals, 20 Chemistry MCQs, and 15–20 high-concept Mathematics problems, tracked directly on your Mentskool dashboard.",
  },
  {
    question: "How does the mentor monitor daily task completion?",
    answer:
      "You log completed chapter topics and solved problem counts on the Mentskool student dashboard each evening. Your mentor monitors your 94% efficiency rating, audits error logs, and conducts weekly 1-on-1 strategy recalibrations on Google Meet.",
  },
  {
    question: "Can this study plan help droppers aiming for top percentiles?",
    answer:
      "Yes. Droppers have all day for self-study. Your IITian mentor structures an intensive 10–12 hour daily sprint with morning high-difficulty problem blocks, afternoon concept consolidation, and evening timed PYQ testing.",
  },
];

export default function JeeStudyPlanWithMentorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        name: "Mentskool Technologies",
        url: "https://mentskool.com",
        logo: "https://mentskool.com/logo.png",
        description:
          "Dynamic, mentored study planning for JEE 2027 & 2028 aspirants with verified IITian rankers.",
      },
      {
        "@type": "FAQPage",
        mainEntity: studyPlanFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-white selection:bg-brand-500/30 selection:text-brand-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroGridBackground variant="dark" />

      <main className="relative z-10 pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SeoBreadcrumbs
            items={[
              { label: "JEE Mentorship", href: "/jee-mentorship" },
              {
                label: "Study Plan with Mentor",
                href: "/jee-study-plan-with-mentor",
              },
            ]}
          />

          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-500/40 bg-sky-500/10 text-sky-300 text-xs font-semibold mb-4 backdrop-blur-md">
              <Calendar className="w-3.5 h-3.5" />
              <span>Targeting JEE 2027 &amp; 2028 Aspirants • Living Dynamic Timetables</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-tight font-display">
              JEE Study Plan with Personal Mentor:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-blue-400">
                The Living Timetable That Never Fails
              </span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Tired of creating rigid timetables on Sunday only to abandon them by Wednesday? Build a dynamic, living study plan with a verified{" "}
              <strong className="text-white">IIT Bombay or Delhi ranker</strong> that flexes around your life, tests, and homework.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Build Your Study Plan with an IITian</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/free-mentorship-session"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900/90 border border-slate-700 text-slate-200 hover:text-white hover:border-slate-600 transition-all flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Claim Free Timetable Audit Call</span>
              </Link>
            </div>
          </div>

          {/* Direct Answer Box for AI Overviews & Search Snippets */}
          <section className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-sky-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-sky-400 mb-3">
              <Sparkles className="w-4 h-4 text-sky-400" />
              <span>Executive Summary: What Is A Living Mentored JEE Study Plan?</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-5">
              The <strong>Mentskool Dynamic Study Planning System</strong> replaces rigid, unrealistic schedules with an adaptive feedback loop:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong className="text-white">Target-Driven (Not Hour-Driven):</strong> Focus on solving 65–75 specific problems daily across 3 subjects rather than counting passive desk hours.</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong className="text-white">75/25 School &amp; Backlog Balance:</strong> Protects current coaching lectures with 75% of evening time while recovering past backlogs in dedicated 90-minute slots.</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong className="text-white">Weekly Recalibration on Google Meet:</strong> Your mentor reviews your progress every Sunday and recalibrates pacing based on test scores.</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong className="text-white">94% Dashboard Accountability:</strong> Submit daily chapter metrics directly on your web dashboard for daily mentor check-ins.</span>
              </div>
            </div>
          </section>

          {/* Deep Editorial Section 1: 3-Subject Pacing Breakdown */}
          <section className="my-14 space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <h2 className="text-2xl sm:text-3xl font-black font-display text-white tracking-tight">
                The Daily 3-Subject JEE Pacing Matrix
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                How IITians maintain velocity across Mathematics, Physics, and Chemistry without neglecting difficult chapters.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Maths Block */}
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-indigo-500/30 space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-indigo-400">
                  <span className="uppercase tracking-wider">Block 1 • Deep Work</span>
                  <Target className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-white">Mathematics High-Concept Drills</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Tackle Calculus, Algebra, or Coordinate Geometry first when focus is highest. Solve 18–22 multi-step problems with the 90-second skip rule.
                </p>
                <div className="pt-2 text-[11px] font-semibold text-indigo-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Target: 60+ Marks in JEE Maths</span>
                </div>
              </div>

              {/* Physics Block */}
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-sky-500/30 space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-sky-400">
                  <span className="uppercase tracking-wider">Block 2 • Application</span>
                  <Zap className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-white">Physics Conceptual Visualization</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Focus on Free Body Diagrams, boundary value approximations, and multi-concept Mechanics and Electrodynamics PYQs.
                </p>
                <div className="pt-2 text-[11px] font-semibold text-sky-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Target: 80+ Marks in JEE Physics</span>
                </div>
              </div>

              {/* Chemistry Block */}
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-emerald-500/30 space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-emerald-400">
                  <span className="uppercase tracking-wider">Block 3 • Scoring Speed</span>
                  <Layers className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-white">Chemistry Speed Sprint</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Finish with high-speed Chemistry. Condition yourself to complete 25 questions in 35 minutes across Organic mechanisms and Inorganic NCERT tables.
                </p>
                <div className="pt-2 text-[11px] font-semibold text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Target: 85+ Marks in JEE Chemistry</span>
                </div>
              </div>
            </div>
          </section>

          {/* Live Mentor Funnel Bridge */}
          <SeoMentorFunnel
            examFocus="JEE"
            title="Get Your Study Plan Built By An IITian Ranker"
            subtitle="Connect 1-on-1 with verified mentors from IIT Bombay and IIT Delhi who will build your customized schedule and keep you accountable until JEE 2027 & 2028."
          />

          {/* FAQ Accordion */}
          <section className="mt-16">
            <SeoFaqAccordion
              faqs={studyPlanFaqs}
              title="Frequently Asked Questions: Mentored JEE Study Plans"
              subtitle="Everything you need to know about dynamic scheduling, daily quotas, and 1:1 mentor tracking for 2027 & 2028."
            />
          </section>

          {/* CTA Banner */}
          <section className="mt-16">
            <SeoCtaBanner
              title="Build a JEE Timetable You Will Actually Follow"
              description="Work 1-on-1 with a verified IITian who builds your living schedule, tracks your daily problem quotas, and keeps you accountable until JEE 2027 & 2028."
              primaryButtonText="Find Your Study Plan Mentor"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
