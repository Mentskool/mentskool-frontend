import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Scale } from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { ComparisonTable, ComparisonRow } from "@/components/seo/ComparisonTable";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "CampusPoint Alternative & Review (2026) — 1:1 JEE & NEET Mentorship",
  description:
    "Comparing CampusPoint with Mentskool? Discover why JEE & NEET aspirants choose Mentskool for verified IIT/AIIMS ranker mentorship, real-time efficiency dashboards, and guaranteed small-cohort caps.",
  keywords: [
    "CampusPoint alternative",
    "CampusPoint review",
    "CampusPoint mentorship",
    "CampusPoint vs Mentskool",
    "best JEE mentorship by IITians",
    "best NEET mentorship AIIMS",
  ],
  alternates: {
    canonical: "https://mentskool.com/compare/campuspoint-alternative",
  },
  openGraph: {
    title: "CampusPoint Alternative: Dedicated Ranker Mentorship with 94% Efficiency",
    description:
      "Why top JEE & NEET aspirants choose Mentskool's structured roadmaps, mock test audits, and monthly flexibility.",
    url: "https://mentskool.com/compare/campuspoint-alternative",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "CampusPoint Alternative - Mentskool",
      },
    ],
  },
};

const comparisonRows: ComparisonRow[] = [
  {
    feature: "Mentor Network",
    description: "Pedigree of dedicated mentors.",
    mentskool: "Verified Top IITians (Bombay, Delhi, Madras) & AIIMS Doctors",
    competitor: "General IIT/NIT alumni pool",
  },
  {
    feature: "Task Verification & Dashboard",
    description: "Daily accountability interface for solved questions.",
    mentskool: "Live 94% Dynamic Efficiency Score Dashboard",
    competitor: "Standard WhatsApp or spreadsheet check-ins",
  },
  {
    feature: "Mock Test Post-Mortem",
    description: "Depth of negative mark and mistake analysis.",
    mentskool: "Granular question-by-question mistake book audit",
    competitor: "Periodic score reviews",
  },
  {
    feature: "Cohort Size Limit",
    description: "Maximum mentees per mentor.",
    mentskool: "Strict 30 Max (Atomic Redis Concurrency)",
    competitor: "Flexible/variable batch limits",
  },
  {
    feature: "Flexibility & Commitment",
    description: "Billing and subscription model.",
    mentskool: "Transparent month-to-month plans; cancel or switch anytime",
    competitor: "Structured multi-month commitments",
  },
];

const faqs: FaqItem[] = [
  {
    question: "What differentiates Mentskool from CampusPoint?",
    answer:
      "Mentskool features a dedicated web platform with an algorithmic 94% efficiency score tracking your daily solved problems, dual-mode strategy calls and micro-cohort sprints, and atomic 30-student cohort caps ensuring your IIT or AIIMS mentor gives you deep, focused attention.",
  },
  {
    question: "Can I use Mentskool alongside my coaching classes?",
    answer:
      "Yes! Mentskool is designed to work seamlessly alongside coaching (Allen, PW, Aakash, etc.) to manage homework, clear persistent backlogs, and fine-tune your test strategy.",
  },
];

export default function CampusPointAlternativePage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white selection:bg-brand-500/30 selection:text-brand-300">
      <HeroGridBackground />

      <main className="relative z-10 pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SeoBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Comparisons", href: "/#comparisons" },
              {
                label: "CampusPoint Alternative",
                href: "/compare/campuspoint-alternative",
              },
            ]}
          />

          <div className="text-center max-w-3xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-xs font-semibold mb-4">
              <Scale className="w-3.5 h-3.5" />
              <span>Independent Feature Comparison (2026)</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-5 leading-tight">
              Looking for a <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-sky-300 to-emerald-400">CampusPoint Alternative?</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Step up to <strong>94% verified task efficiency, dual-mode strategy sessions</strong>, and top rankers from IIT Bombay and AIIMS New Delhi.
            </p>
          </div>

          <ComparisonTable
            competitorName="CampusPoint"
            rows={comparisonRows}
          />

          <section className="mt-16">
            <SeoFaqAccordion
              faqs={faqs}
              title="Frequently Asked Questions: CampusPoint vs Mentskool"
              subtitle="Clear comparison of mentor credentials, daily tracking, and exam coverage."
            />
          </section>

          <section className="mt-16">
            <SeoCtaBanner
              title="Start Your Rank Acceleration Journey"
              description="Connect with a verified IIT or AIIMS mentor who will build your weekly roadmap and keep you accountable every day."
              primaryButtonText="Find Your Mentor"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
