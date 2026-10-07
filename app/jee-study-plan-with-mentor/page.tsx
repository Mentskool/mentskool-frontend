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
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "JEE Study Plan with Personal Mentor — Dynamic Living Timetable",
  description:
    "Static PDF timetables fail after 4 days. Build a living, weekly JEE study plan with an IIT Bombay & Delhi mentor that adapts to your school, coaching homework, and mock test scores.",
  keywords: [
    "JEE study plan with mentor",
    "personalized JEE timetable",
    "living study plan for IIT JEE",
    "JEE daily timetable for Class 12",
    "JEE dropper daily study plan",
    "IITian study schedule",
  ],
  alternates: {
    canonical: "https://mentskool.com/jee-study-plan-with-mentor",
  },
  openGraph: {
    title: "JEE Study Plan with Personal Mentor: The Living Timetable",
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
    question: "How does my IITian mentor build my personalized daily schedule?",
    answer:
      "On Day 1, your mentor audits your daily commitments: school hours, coaching lecture timings, commute time, and sleep rhythm. They construct high-focus deep work slots (typically 2 to 3-hour blocks) around these commitments, assigning specific question counts for Physics, Chemistry, and Math rather than vague hour targets.",
  },
  {
    question: "How do we balance coaching homework with backlog clearance in the plan?",
    answer:
      "We implement the 75/25 Rule: 75% of your daily self-study is dedicated to today's coaching assignments so you never create new backlogs, while a locked 90-minute evening slot is dedicated to backlog recovery topics assigned by your mentor.",
  },
  {
    question: "What happens if I miss a daily target on my Mentskool dashboard?",
    answer:
      "Your mentor sees your unfinished log in real-time. Instead of scolding, they identify whether the bottleneck was conceptual difficulty, fatigue, or poor time management, and immediately adjust the next day's task volume to keep you progressing steadily.",
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
          "Dynamic, mentored study planning for JEE Main & Advanced aspirants.",
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
      <HeroGridBackground />

      <main className="relative z-10 pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SeoBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "JEE Mentorship", href: "/jee-mentorship" },
              {
                label: "Study Plan with Mentor",
                href: "/jee-study-plan-with-mentor",
              },
            ]}
          />

          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-xs font-semibold mb-4">
              <Calendar className="w-3.5 h-3.5" />
              <span>Living Dynamic Schedules vs Static PDFs</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              JEE Study Plan with Personal Mentor: <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-sky-300 to-indigo-400">The Living Timetable That Never Fails</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Tired of creating rigid timetables on Sunday only to abandon them by Wednesday? Build a dynamic, living study plan with a verified <strong>IIT Bombay or Delhi ranker</strong> that flexes around your life, tests, and homework.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Build Your Study Plan with an IITian</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/free-mentorship-session"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all"
              >
                Claim Free Timetable Audit Call
              </Link>
            </div>
          </div>

          {/* Direct Answer Box for AI Overviews & Search Snippets */}
          <section className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-brand-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-400 mb-3">
              <Sparkles className="w-4 h-4 text-brand-400" />
              <span>Executive Summary: What Is A Living Mentored JEE Study Plan?</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-5">
              The <strong>Mentskool Dynamic Study Planning System</strong> replaces rigid, unrealistic schedules with an adaptive feedback loop:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Target-Driven (Not Hour-Driven):</strong> Focus on solving 70 specific problems daily across 3 subjects rather than counting passive hours sitting at a desk.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>75/25 School &amp; Backlog Balance:</strong> Protects current coaching lectures with 75% of time while recovering past backlogs in dedicated 90-minute evening slots.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Weekly Recalibration:</strong> Your mentor reviews your progress every Sunday on Google Meet and recalibrates pacing based on upcoming school tests or mock scores.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>94% Dashboard Accountability:</strong> Submit daily chapter metrics directly on your web dashboard for daily mentor check-ins.</span>
              </div>
            </div>
          </section>

          {/* FAQ Accordion */}
          <section className="mt-16">
            <SeoFaqAccordion
              faqs={studyPlanFaqs}
              title="Frequently Asked Questions: Mentored JEE Study Plans"
              subtitle="Everything you need to know about dynamic scheduling, daily quotas, and 1:1 mentor tracking."
            />
          </section>

          {/* CTA Banner */}
          <section className="mt-16">
            <SeoCtaBanner
              title="Build a JEE Timetable You Will Actually Follow"
              description="Work 1-on-1 with a verified IITian who builds your living schedule, tracks your daily problem quotas, and keeps you accountable until exam day."
              primaryButtonText="Find Your Study Plan Mentor"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
