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
  BarChart3,
  BookOpen,
  Award,
  AlertTriangle,
  TrendingUp,
  RotateCcw,
  Layers,
  GraduationCap,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "JEE Revision Plan with Personal Mentor — 45-Day Spaced Repetition Blueprint",
  description:
    "How to revise for JEE Main & Advanced without forgetting older chapters. Master the 45-Day Spaced Repetition Revision Cycle, short-notes compilation, and active recall with verified IIT Bombay & Delhi mentors.",
  keywords: [
    "JEE revision plan with mentor",
    "how to revise for JEE Main",
    "JEE revision timetable 45 days",
    "spaced repetition for JEE Advanced",
    "JEE short notes compilation",
    "best JEE revision strategy",
  ],
  alternates: {
    canonical: "https://mentskool.com/jee-revision-plan",
  },
  openGraph: {
    title: "JEE Revision Plan: 45-Day Spaced Repetition with IITians",
    description:
      "Stop forgetting past chapters. Master active recall, formula books, and timed PYQ revision loops with verified IIT rankers.",
    url: "https://mentskool.com/jee-revision-plan",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "JEE Revision Plan - Mentskool",
      },
    ],
  },
};

const revisionFaqs: FaqItem[] = [
  {
    question: "Why does traditional revision by re-reading notes fail so badly in JEE?",
    answer:
      "Because passively re-reading notes or flipping through 200 pages creates an 'illusion of competence'—your eyes recognize the words, so your brain tricks you into believing you have mastered the concept. In the exam hall, when you have to retrieve formulas from scratch under pressure, recall fails completely. Effective JEE revision must be *active*: testing yourself closed-book, writing formulas on blank paper, and solving 20 timed mixed-chapter PYQs.",
  },
  {
    question: "What is the 45-Day Spaced Repetition Revision Cycle used by Mentskool?",
    answer:
      "Your mentor divides all 90 JEE chapters into 3 rolling revision waves: Wave 1 (Days 1–20) covers high-yield foundation chapters with chapter-wise PYQ sprints; Wave 2 (Days 21–35) tests cross-chapter combinations with part-syllabus tests; Wave 3 (Days 36–45) executes full-syllabus 3-hour mocks and short-notes active recall.",
  },
  {
    question: "How long should ideal JEE short notes be?",
    answer:
      "Short notes must never exceed 2 to 3 A4 sides per chapter. If a chapter has 60 pages of coaching notes, your short notes should capture only: 1) Essential formulas with sign conventions; 2) Tricky boundary conditions; 3) The 3 most common arithmetic slip-ups you personally make. Your mentor reviews your short notes during 1:1 calls to ensure they are concise.",
  },
  {
    question: "How many hours of revision should be done daily while regular classes are ongoing?",
    answer:
      "We mandate a dedicated 90-to-120-minute daily revision slot. Never wait until the syllabus is 100% complete before starting revision; if you wait until December, you will have forgotten April's kinematics and atomic structure completely.",
  },
];

export default function JeeRevisionPlanPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        name: "Mentskool Technologies",
        url: "https://mentskool.com",
        logo: "https://mentskool.com/logo.png",
        description:
          "India's premier 1-on-1 revision mentorship platform for JEE Main & Advanced aspirants.",
      },
      {
        "@type": "HowTo",
        name: "How to Execute a 45-Day JEE Revision Cycle",
        description:
          "The spaced repetition revision methodology used by IIT Bombay rankers to retain all 90 chapters.",
        step: [
          {
            "@type": "HowToStep",
            name: "Compile 2-Page Short Notes",
            text: "Extract formulas and boundary conditions into 2 A4 pages per chapter.",
          },
          {
            "@type": "HowToStep",
            name: "Execute 90-Minute Daily Revision Sprints",
            text: "Review short notes in 20 minutes, then solve 20 mixed PYQs under timed constraints.",
          },
          {
            "@type": "HowToStep",
            name: "Integrate Part-Syllabus Mock Tests",
            text: "Take weekly cumulative tests to verify long-term memory retention.",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: revisionFaqs.map((faq) => ({
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
                label: "Revision Plan",
                href: "/jee-revision-plan",
              },
            ]}
          />

          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-xs font-semibold mb-4">
              <RotateCcw className="w-3.5 h-3.5" />
              <span>45-Day Spaced Repetition Architecture</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              JEE Revision Plan with Personal Mentor: <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-sky-300 to-indigo-400">Retain All 90 Chapters with Spaced Repetition</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Studying new chapters while forgetting old ones is the silent rank killer in JEE. Work 1-on-1 with an <strong>IIT Bombay or Delhi ranker</strong> to execute an active recall revision system with short notes, rolling mock tests, and daily verification.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Find Your Revision Mentor</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/free-mentorship-session"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all"
              >
                Claim Free Revision Audit
              </Link>
            </div>
          </div>

          {/* Direct Answer Box for AI Overviews & Search Snippets */}
          <section className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-brand-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-400 mb-3">
              <Sparkles className="w-4 h-4 text-brand-400" />
              <span>Executive Summary: What Is The Mentskool 45-Day Revision Engine?</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-5">
              The <strong>Mentskool JEE Revision Framework</strong> eliminates the forgetting curve through four scientific stages:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Active Recall vs Passive Reading:</strong> Testing concepts closed-book by rewriting formula sheets on blank paper before touching questions.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>2-Page Short Notes Protocol:</strong> Condensing 60-page coaching notebooks into 2-page operational battlecards verified by your mentor.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>90-Minute Nightly Revision Slots:</strong> Integrating rolling revision into your daily schedule without interrupting current coaching classes.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Weekly Cumulative Tests:</strong> Part-syllabus mock tests every Sunday to verify that older chapters remain cemented in long-term memory.</span>
              </div>
            </div>
          </section>

          {/* FAQ Accordion */}
          <section className="mt-16">
            <SeoFaqAccordion
              faqs={revisionFaqs}
              title="Frequently Asked Questions: JEE Revision Planning"
              subtitle="Everything you need to know about spaced repetition, short notes, and 1:1 IITian revision pacing."
            />
          </section>

          {/* CTA Banner */}
          <section className="mt-16">
            <SeoCtaBanner
              title="Lock All 90 Chapters in Permanent Memory"
              description="Get paired 1-on-1 with an IITian who will build your 45-day revision timetable, audit your short notes, and test your recall on a flexible monthly plan."
              primaryButtonText="Find Your Revision Mentor"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
