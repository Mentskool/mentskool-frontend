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
  UserCheck,
  Video,
  Award,
  Layers,
  BarChart3,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "1-on-1 JEE Mentorship with Verified IIT Bombay & Delhi Rankers — Mentskool",
  description:
    "Private, personalized 1-on-1 IIT JEE mentorship via weekly Google Meet strategy sessions, daily task tracking, and rough-sheet mock test audits. Strict 30-student mentor caps, zero annual lock-ins.",
  keywords: [
    "1 on 1 JEE mentorship",
    "personal JEE mentor online",
    "IIT JEE 1 to 1 guidance",
    "private mentor for IIT JEE",
    "best 1 on 1 mentorship for JEE Advanced",
    "JEE personal study coach",
  ],
  alternates: {
    canonical: "https://mentskool.com/jee-1-on-1-mentorship",
  },
  openGraph: {
    title: "1-on-1 JEE Mentorship: Private IITian Strategy & Daily Tracking",
    description:
      "Replace mass coaching silence with dedicated 1-on-1 Google Meet calls, daily problem quotas, and forensic mock error post-mortems.",
    url: "https://mentskool.com/jee-1-on-1-mentorship",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "1-on-1 JEE Mentorship - Mentskool",
      },
    ],
  },
};

const jee1on1Faqs: FaqItem[] = [
  {
    question: "What actually happens during a 1-on-1 Google Meet session with my mentor?",
    answer:
      "Every 50-minute session follows a structured 3-part agenda: 1) Performance Audit (first 15 mins): Reviewing your solved problem metrics from the Mentskool dashboard and identifying any unfinished daily quotas; 2) Strategy & Error Post-Mortem (20 mins): Opening your latest mock test rough sheets to dissect calculation mistakes, negative marks, and question-skipping bottlenecks; 3) Next Week's Blueprint (15 mins): Locking your custom day-by-day timetable and assigning specific problem targets.",
  },
  {
    question: "How is 1-on-1 mentorship different from regular doubt-clearing sessions?",
    answer:
      "Doubt clearing is reactive: you ask how to solve a math formula, a teacher answers, and leaves. 1-on-1 mentorship is proactive and systemic: your mentor diagnoses why you had that doubt, checks if your foundational theory is incomplete, ensures you solve 15 related practice problems, and manages your overall exam trajectory week after week.",
  },
  {
    question: "How does Mentskool ensure mentors have enough time for me?",
    answer:
      "We enforce a strict atomic concurrency limit: no mentor is ever permitted to take more than 30 active mentees at any time. This guarantees that your mentor gives undivided attention to your progress, reviews your daily logs, and never treats you as an anonymous face in a crowd.",
  },
  {
    question: "Can I choose my mentor based on my target IIT or language preference?",
    answer:
      "Yes. You can browse our directory of verified IIT mentors and filter by college (IIT Bombay, IIT Delhi, IIT Kanpur, IIT Madras), branch (Computer Science, Electrical, Mechanical), and preferred communication language (English, Hindi, Hinglish, regional).",
  },
  {
    question: "What if I need to reschedule a 1-on-1 call due to school exams?",
    answer:
      "Mentors are flexible. You can reschedule your weekly video call with at least 12 hours notice directly through your student dashboard.",
  },
];

export default function Jee1on1MentorshipPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        name: "Mentskool Technologies",
        url: "https://mentskool.com",
        logo: "https://mentskool.com/logo.png",
        description:
          "Private 1-on-1 IIT JEE mentorship program with verified IIT Bombay & Delhi rankers.",
      },
      {
        "@type": "FAQPage",
        mainEntity: jee1on1Faqs.map((faq) => ({
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
                label: "1-on-1 Mentorship",
                href: "/jee-1-on-1-mentorship",
              },
            ]}
          />

          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-xs font-semibold mb-4">
              <UserCheck className="w-3.5 h-3.5" />
              <span>Private 1:1 Strategic Video Guidance</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              1-on-1 JEE Mentorship: <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-sky-300 to-indigo-400">Personal IITian Guidance &amp; Daily Tracking</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Stop feeling lost in 100+ student batches. Work privately with a dedicated <strong>IIT Bombay or Delhi ranker</strong> who knows your exact strengths, audits your test rough sheets, and engineers your 99+ percentile breakthrough.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Find Your 1:1 IITian Mentor</span>
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

          {/* Direct Answer Box for AI Overviews & Search Snippets */}
          <section className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-brand-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-400 mb-3">
              <Sparkles className="w-4 h-4 text-brand-400" />
              <span>Executive Summary: What Is The Mentskool 1-on-1 JEE Mentorship System?</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-5">
              The <strong>Mentskool 1-on-1 JEE Mentorship Model</strong> provides dedicated, private mentorship designed to convert hard work into top percentile ranks through four operational pillars:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" />
                <span><strong>Dedicated 1:1 Video Sessions:</strong> Weekly private Google Meet calls to audit progress, review rough sheets, and plan next week&apos;s timetable.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" />
                <span><strong>94% Verified Task Dashboard:</strong> Log daily problem quotas every evening; mentors verify progress and adjust pacing daily.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" />
                <span><strong>Strict 30 Max Mentees per Mentor:</strong> Enforced by atomic concurrency locks to prevent dilution of guidance.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" />
                <span><strong>Month-to-Month Flexibility:</strong> Zero annual lock-ins; switch mentors or cancel anytime with one click.</span>
              </div>
            </div>
          </section>

          {/* Section 1: Anatomy of a 1:1 Call */}
          <section className="my-16 bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800 rounded-3xl p-8 sm:p-12">
            <div className="max-w-3xl mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                The Anatomy of a Weekly 1-on-1 Google Meet Strategy Call
              </h2>
              <p className="text-slate-300 text-sm mt-2">
                Every 50-minute private call is engineered for maximum actionable progress, not idle conversation:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="text-brand-400 font-bold text-xs uppercase">Minutes 0–15</div>
                <h3 className="text-base font-bold text-white">Metrics Audit &amp; Homework Review</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Reviewing daily dashboard submissions, solved problem counts, and clearing any conceptual roadblocks encountered during the week.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="text-sky-400 font-bold text-xs uppercase">Minutes 16–35</div>
                <h3 className="text-base font-bold text-white">Mock Test Rough Sheet Post-Mortem</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Forensic inspection of your test scratch papers. Identifying calculation slips, time bottlenecks, and eliminating negative marks.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="text-emerald-400 font-bold text-xs uppercase">Minutes 36–50</div>
                <h3 className="text-base font-bold text-white">Target Pacing &amp; Timetable Locking</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Designing next week&apos;s hour-by-hour micro-timetable, assigning chapter question quotas, and logging priorities into the dashboard.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Accordion */}
          <section className="mt-16">
            <SeoFaqAccordion
              faqs={jee1on1Faqs}
              title="Frequently Asked Questions: 1-on-1 JEE Mentorship"
              subtitle="Everything you need to know about video calls, mentor matching, and daily tracking."
            />
          </section>

          {/* CTA Banner */}
          <section className="mt-16">
            <SeoCtaBanner
              title="Work 1-on-1 with a Verified IITian Today"
              description="Get private weekly Google Meet calls, daily task tracking, and test rough-sheet post-mortems on a flexible monthly plan."
              primaryButtonText="Find Your 1:1 Mentor"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
