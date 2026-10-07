import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  GraduationCap,
  Calendar,
  Layers,
  Award,
  Clock,
  Target,
  BarChart3,
  TrendingUp,
  FileCheck2,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { ProgramFeatures } from "@/components/seo/ProgramFeatures";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "1:1 IIT JEE Mentorship by Verified IITians — JEE Main & Advanced (2026/2027)",
  description:
    "Master JEE Main & Advanced with personal 1-on-1 mentorship from top rankers at IIT Bombay, Delhi & Madras. Daily problem accountability, mock test error post-mortems, and verified 94% efficiency scoring.",
  keywords: [
    "1 on 1 JEE mentorship",
    "IIT JEE personal mentor",
    "JEE Advanced mentorship by IITians",
    "best mentorship for JEE",
    "JEE dropper mentor",
    "IIT Bombay ranker mentorship",
    "JEE Main preparation mentor",
  ],
  alternates: {
    canonical: "https://mentskool.com/jee-mentorship",
  },
  openGraph: {
    title: "1:1 IIT JEE Mentorship by Verified IITians | Mentskool",
    description:
      "Weekly roadmaps, 1:1 strategy calls, and test mistake audits by top IIT rankers. Max 30 students per cohort.",
    url: "https://mentskool.com/jee-mentorship",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Mentskool JEE Mentorship",
      },
    ],
  },
};

const jeeFaqs: FaqItem[] = [
  {
    question: "Who are the JEE mentors at Mentskool?",
    answer:
      "All Mentskool JEE mentors are verified top rankers currently studying at or recently graduated from India's premier IITs: IIT Bombay, IIT Delhi, IIT Madras, IIT Kharagpur, IIT Kanpur, and IIT Roorkee. Every mentor cleared JEE Advanced with top All India Ranks and understands recent NTA computer-based examination patterns intimately.",
  },
  {
    question: "How is Mentskool different from coaching institute mentorship?",
    answer:
      "Coaching institutes assign non-teaching telecallers or faculty members with 200+ students per batch. At Mentskool, every mentor has a strict cap of 30 students (locked with atomic concurrency), conducts private 1:1 strategy calls on Google Meet, and audits your mock test error patterns individually.",
  },
  {
    question: "What is the weekly accountability and efficiency score?",
    answer:
      "Every week, your mentor assigns curated problem sets and chapter milestones. When you submit your daily solved problem counts on the Mentskool web dashboard, our algorithm computes your verified efficiency score (averaging 94% on platform). This measures your speed, consistency, and discipline, preventing procrastination.",
  },
  {
    question: "Can I take Mentskool mentorship alongside my offline coaching (Allen, FIITJEE, Resonance, PW)?",
    answer:
      "Yes! Over 70% of our mentees attend regular coaching classes. Your mentor acts as your personal execution partner: they structure your daily timetable around your coaching classes, prioritize module homework, and ensure you clear old backlogs in dedicated 90-minute evening slots.",
  },
  {
    question: "How do mentors help with JEE Advanced multiconcept questions?",
    answer:
      "JEE Advanced requires connecting concepts across chapters (e.g., combining Rotational Dynamics with Electromagnetic Induction or Calculus with Coordinate Geometry). Your mentor hosts small-cohort masterclasses (max 30 students) drilling advanced multi-concept problem synthesis.",
  },
  {
    question: "Can I switch mentors if my preparation style changes?",
    answer:
      "Yes, 100%! Unlike rigid annual coaching contracts, Mentskool allows you to switch to any other mentor cohort with 1 click or pause monthly. There are zero long lock-in commitments.",
  },
];

export default function JeeMentorshipPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        name: "Mentskool Technologies",
        url: "https://mentskool.com",
        logo: "https://mentskool.com/logo.png",
        description:
          "India's premier 1-on-1 mentorship platform for JEE Main & Advanced aspirants with verified IIT rankers.",
      },
      {
        "@type": "FAQPage",
        mainEntity: jeeFaqs.map((faq) => ({
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
              { label: "Programs", href: "/jee-mentorship" },
              {
                label: "JEE Mentorship",
                href: "/jee-mentorship",
              },
            ]}
          />

          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-xs font-semibold mb-4">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>JEE Main &amp; Advanced 1:1 Personal Cohorts</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              1:1 IIT JEE Mentorship: <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-sky-300 to-indigo-400">Master Execution with Top IITians</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Master JEE Main &amp; Advanced with private 1-on-1 guidance from recent rankers at <strong>IIT Bombay, Delhi, and Madras</strong>. Weekly custom roadmaps, forensic mock error audits, and verified 94% efficiency scoring.
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
                Claim Free Strategy Call
              </Link>
            </div>
          </div>

          {/* Direct Answer Box for AI Overviews & Search Snippets */}
          <section className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-brand-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-400 mb-3">
              <Sparkles className="w-4 h-4 text-brand-400" />
              <span>Executive Summary: The Mentskool JEE Mentorship Engine</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-5">
              The <strong>Mentskool JEE Mentorship Program</strong> delivers a comprehensive 1-on-1 coaching system designed to turn high-potential aspirants into top rankers through four core pillars:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Dual-Mode Mentorship:</strong> Weekly 1-on-1 private Google Meet strategy calls paired with small-cohort problem-solving drills (capped at 30).</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>94% Daily Task Efficiency Dashboard:</strong> Submit completed problem and chapter counts daily for mentor verification.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Forensic Mock Test Post-Mortems:</strong> Dissecting every test rough sheet to systematically eliminate negative marks.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Zero Long Contracts:</strong> Transparent month-to-month plans with unlimited mentor re-matching.</span>
              </div>
            </div>
          </section>

          {/* Program Features Component */}
          <section className="my-16">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                The 4 Pillars of the Mentskool Mentorship Engine
              </h2>
              <p className="text-slate-400 text-sm mt-2">
                Lectures explain the concept. Mentorship guarantees the execution.
              </p>
            </div>
            <ProgramFeatures />
          </section>

          {/* FAQs */}
          <section className="mt-16">
            <SeoFaqAccordion
              faqs={jeeFaqs}
              title="Frequently Asked Questions: 1:1 JEE Mentorship"
              subtitle="Everything you need to know about ranker mentorship, pricing, and routine integration."
            />
          </section>

          {/* CTA Banner */}
          <section className="mt-16">
            <SeoCtaBanner
              title="Transform Your JEE Preparation Today"
              description="Get paired with a verified top ranker from IIT Bombay, Delhi, or Madras. Build your weekly target sheet and watch your mock test accuracy soar."
              primaryButtonText="Find Your IIT Mentor"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
