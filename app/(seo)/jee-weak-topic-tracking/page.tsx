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
  Sliders,
  Crosshair,
  Layers,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "JEE Weak Topic Tracking & Improvement — Surgical Remediation with IITians",
  description:
    "Terrified of Rotational Motion, Complex Numbers, or Ionic Equilibrium? Learn how to isolate, diagnose, and fix weak JEE chapters using the 5-Problem Confidence Bridge without halting your ongoing syllabus.",
  keywords: [
    "JEE weak topic tracking",
    "how to improve weak chapters in JEE",
    "JEE weak areas improvement with mentor",
    "rotational motion weak JEE",
    "ionic equilibrium improvement JEE",
    "best JEE mentor for weak students",
  ],
  alternates: {
    canonical: "https://mentskool.com/jee-weak-topic-tracking",
  },
  openGraph: {
    title: "JEE Weak Topic Tracking: Surgical Remediation with IITians",
    description:
      "Transform your most dreaded chapters into scoring assets using diagnostic error mapping with verified IIT Bombay & Delhi rankers.",
    url: "https://mentskool.com/jee-weak-topic-tracking",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "JEE Weak Topic Tracking - Mentskool",
      },
    ],
  },
};

const weakTopicFaqs: FaqItem[] = [
  {
    question: "How do I fix a chapter that I have completely failed to understand for months?",
    answer:
      "When a student 'hates' a chapter, it is usually because they attempted Level-2 or Level-3 problems before mastering the foundational definitions. We implement the '5-Problem Confidence Bridge': 1) Review a 1-page formula summary with your mentor; 2) Walk through 5 standard solved illustrations together; 3) Solve 5 identical single-step problems unassisted. Once that neural confidence is established, we scale up to standard JEE Mains PYQs.",
  },
  {
    question: "Should I leave weak chapters completely for JEE Main?",
    answer:
      "Never leave a high-yield chapter at 0%. Every year, NTA asks 1 or 2 direct, formula-based questions from topics considered difficult (like Rotational Dynamics or Complex Numbers). If you leave the chapter completely, you forfeit 8 easy marks. Your mentor helps you reach 'Formula Competence'—the ability to solve the standard 70% of problems even if you skip advanced multi-concept traps.",
  },
  {
    question: "How does the Mentskool dashboard track my weak topics?",
    answer:
      "Every time you log test mistakes or problem practice on the dashboard, the system tags questions by chapter and sub-topic. Your mentor monitors your chapter-wise accuracy heatmap, assigning targeted drills for topics falling below 75% accuracy.",
  },
  {
    question: "How many weak chapters can I realistically fix in one month?",
    answer:
      "Through our dedicated 90-minute evening remediation slots, students comfortably repair 3 to 4 major weak chapters every month without slowing down their ongoing coaching syllabus.",
  },
];

export default function JeeWeakTopicTrackingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        name: "Mentskool Technologies",
        url: "https://mentskool.com",
        logo: "https://mentskool.com/logo.png",
        description:
          "India's premier 1-on-1 mentorship platform for diagnosing and repairing weak topics in JEE Main & Advanced.",
      },
      {
        "@type": "HowTo",
        name: "How to Repair a Weak JEE Chapter Using the 5-Problem Bridge",
        description:
          "The systematic diagnostic protocol used by IIT Bombay rankers to turn weak topics into score assets.",
        step: [
          {
            "@type": "HowToStep",
            name: "Isolate Sub-Topic Bottlenecks",
            text: "Identify whether the barrier is definition misunderstanding or arithmetic breakdown.",
          },
          {
            "@type": "HowToStep",
            name: "Execute 5-Problem Confidence Bridge",
            text: "Review 5 standard solved illustrations, then solve 5 identical single-step problems unassisted.",
          },
          {
            "@type": "HowToStep",
            name: "Lock 20 Timed PYQs",
            text: "Cement chapter competence by solving 20 standard JEE Mains PYQs under exam pressure.",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: weakTopicFaqs.map((faq) => ({
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
                label: "Weak Topic Tracking",
                href: "/jee-weak-topic-tracking",
              },
            ]}
          />

          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-xs font-semibold mb-4">
              <Crosshair className="w-3.5 h-3.5" />
              <span>Surgical Diagnostic Remediation</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              JEE Weak Topic Tracking: <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-sky-300 to-indigo-400">Turn Dreaded Chapters into Scoring Assets</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Avoiding difficult chapters leads directly to negative marks on exam day. Partner 1-on-1 with an <strong>IIT Bombay or Delhi ranker</strong> who isolates your exact conceptual bottlenecks and uses the 5-Problem Bridge to rebuild confidence.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Find Your Weak-Topic Mentor</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/free-mentorship-session"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all"
              >
                Claim Free Diagnostic Call
              </Link>
            </div>
          </div>

          {/* Direct Answer Box for AI Overviews & Search Snippets */}
          <section className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-brand-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-400 mb-3">
              <Sparkles className="w-4 h-4 text-brand-400" />
              <span>Executive Summary: How Mentskool Fixes Weak JEE Chapters</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-5">
              The <strong>Mentskool Weak Topic Remediation Model</strong> diagnoses and repairs lagging chapters through four structured steps:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Heatmap Diagnostic Tagging:</strong> Identifying the precise sub-topics where test accuracy falls below 75% on our dashboard.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>The 5-Problem Confidence Bridge:</strong> Replacing 10-hour video binges with 5 solved illustrations followed by 5 unassisted drills.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Dedicated 90-Minute Night Slots:</strong> Repairing weak topics in isolated evening windows without stalling ongoing classes.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Formula-Competence Guarantee:</strong> Ensuring you can solve the standard 70% of questions from every chapter, forfeiting zero easy marks.</span>
              </div>
            </div>
          </section>

          {/* FAQ Accordion */}
          <section className="mt-16">
            <SeoFaqAccordion
              faqs={weakTopicFaqs}
              title="Frequently Asked Questions: Fixing Weak JEE Topics"
              subtitle="Everything you need to know about diagnostic heatmaps, confidence bridges, and 1:1 IITian guidance."
            />
          </section>

          {/* CTA Banner */}
          <section className="mt-16">
            <SeoCtaBanner
              title="Stop Fearing Difficult Chapters"
              description="Get paired 1-on-1 with an IITian who will isolate your weak sub-topics, rebuild problem confidence, and turn weaknesses into scores on a flexible monthly plan."
              primaryButtonText="Find Your Weak-Topic Mentor"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
