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
  HeartPulse,
  Dna,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "NEET Revision Plan with AIIMS Doctor Mentor — 60-Day 3-Tier Blueprint",
  description:
    "How to revise for NEET-UG without forgetting past chapters. Master the 60-Day 3-Tier Revision Protocol across NCERT Biology, Organic reaction maps, and Physics formula speed with verified AIIMS doctors.",
  keywords: [
    "NEET revision plan with mentor",
    "how to revise for NEET UG",
    "NEET revision timetable 60 days",
    "spaced repetition for NEET",
    "NCERT biology revision strategy",
    "AIIMS doctor NEET revision",
  ],
  alternates: {
    canonical: "https://mentskool.com/neet-revision-plan",
  },
  openGraph: {
    title: "NEET Revision Plan: 60-Day 3-Tier Protocol with AIIMS Doctors",
    description:
      "Lock 350+ in Biology and eliminate Physics formula panic with spaced repetition cycles guided 1-on-1 by AIIMS rankers.",
    url: "https://mentskool.com/neet-revision-plan",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "NEET Revision Plan - Mentskool",
      },
    ],
  },
};

const neetRevisionFaqs: FaqItem[] = [
  {
    question: "Why does passive NCERT reading fail during NEET revision?",
    answer:
      "Because when you read the same NCERT Biology chapter for the 5th time, your eyes glide over the lines automatically without cognitive effort. You feel you know it, but when NTA asks an inverted Assertion-Reason question or tests a subtle footnote, you make careless errors. Active revision requires closed-book self-quizzing, diagram labeling on blank sheets, and solving 60 statement-based questions.",
  },
  {
    question: "What is the 3-Tier Medical Revision Protocol?",
    answer:
      "Tier 1 (Biology Active Recall): 45 minutes daily reviewing NCERT diagrams, scientist bios, and summary tables, followed by 50 MCQs. Tier 2 (Chemistry Flowcharts): Daily 30 minutes drilling Organic reaction conversions and Inorganic trend tables. Tier 3 (Physics Speed Sprints): Daily 45 minutes solving 25 formula-substitution problems under countdown timer.",
  },
  {
    question: "How does my AIIMS mentor check my revision retention?",
    answer:
      "During your weekly 1:1 Google Meet session, your mentor conducts a rapid 10-minute viva on revised chapters, testing footnotes and tricky exceptions before approving your next study block.",
  },
  {
    question: "How many full revisions of NCERT should I complete before NEET?",
    answer:
      "Top AIIMS rankers complete between 4 and 6 structured active recall cycles. It is not about how many times you skimmed the book; it is about how many times you successfully retrieved the facts closed-book.",
  },
];

export default function NeetRevisionPlanPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        name: "Mentskool Technologies",
        url: "https://mentskool.com",
        logo: "https://mentskool.com/logo.png",
        description:
          "India's premier 1-on-1 revision mentorship platform for medical entrance exams with verified AIIMS rankers.",
      },
      {
        "@type": "HowTo",
        name: "How to Execute a 60-Day NEET Revision Cycle",
        description:
          "The 3-tier revision methodology used by AIIMS New Delhi rankers to retain NCERT line-by-line and conquer Physics formulas.",
        step: [
          {
            "@type": "HowToStep",
            name: "Tier 1: Biology Closed-Book Recall",
            text: "Recreate cycle pathways and diagram labels on blank paper; solve 50 statement questions.",
          },
          {
            "@type": "HowToStep",
            name: "Tier 2: Organic & Inorganic Flowcharts",
            text: "Map named mechanisms and periodic exception trends into single-page review sheets.",
          },
          {
            "@type": "HowToStep",
            name: "Tier 3: Physics Speed Drills",
            text: "Solve 25 direct numerical substitutions under 30-minute timed pressure.",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: neetRevisionFaqs.map((faq) => ({
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
              { label: "NEET Mentorship", href: "/neet-mentorship" },
              {
                label: "Revision Plan",
                href: "/neet-revision-plan",
              },
            ]}
          />

          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-semibold mb-4">
              <RotateCcw className="w-3.5 h-3.5" />
              <span>60-Day 3-Tier Medical Revision Blueprint</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              NEET Revision Plan with Personal Mentor: <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400">Lock 680+ with Spaced Repetition</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Forgetting Biology exceptions or blanking on Physics formulas under test pressure? Partner 1-on-1 with an <strong>AIIMS New Delhi ranker</strong> to execute an active recall revision system that cements all 97 chapters into long-term memory.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:to-teal-800 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Find Your Medical Revision Mentor</span>
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
          <section className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-emerald-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-400 mb-3">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Executive Summary: What Is The Mentskool 3-Tier Medical Revision Engine?</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-5">
              The <strong>Mentskool NEET Revision System</strong> secures complete subject recall through three synchronized tiers:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Tier 1: Biology Active Recall:</strong> Closed-book diagram recreations and statement-based questions to guarantee 350+ marks.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Tier 2: Chemistry Reaction Maps:</strong> Single-page flowcharts connecting Organic named reactions and Inorganic NCERT tables.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Tier 3: Physics Speed Sprints:</strong> Daily 25-problem timed substitution drills across high-yield chapters.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Weekly Closed-Book Viva:</strong> Your mentor tests your recall during weekly 1:1 Google Meet strategy sessions.</span>
              </div>
            </div>
          </section>

          {/* FAQ Accordion */}
          <section className="mt-16">
            <SeoFaqAccordion
              faqs={neetRevisionFaqs}
              title="Frequently Asked Questions: NEET Revision Planning"
              subtitle="Everything you need to know about spaced repetition, NCERT active recall, and 1:1 doctor guidance."
            />
          </section>

          {/* CTA Banner */}
          <section className="mt-16">
            <SeoCtaBanner
              title="Lock 350+ Biology &amp; 150+ Physics with an AIIMS Doctor"
              description="Get paired 1-on-1 with an AIIMS doctor who will build your 60-day revision timetable, audit your NCERT lines, and test your recall on a flexible monthly plan."
              primaryButtonText="Find Your Medical Revision Mentor"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
