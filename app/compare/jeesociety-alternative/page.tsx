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
  title: "JEE Society Alternative & Review (2026) — 1:1 + Small Cohort Mentorship",
  description:
    "Comparing JEE Society vs Mentskool? Discover Mentskool's dual-mode 1:1 strategy calls plus small cohort drills, verified 94% efficiency scoring, and atomic 30-student cohort caps.",
  keywords: [
    "JEE Society alternative",
    "JEE Society review",
    "JEE Society mentorship",
    "JEE Society vs Mentskool",
    "IIT JEE mentorship platform",
    "best JEE mentorship by IITians",
  ],
  alternates: {
    canonical: "https://mentskool.com/compare/jeesociety-alternative",
  },
  openGraph: {
    title: "JEE Society Alternative: Dual-Mode 1:1 & Verified Student Accountability",
    description:
      "Why students choose Mentskool's dynamic efficiency score, verified task reviews, and complete monthly freedom over JEE Society.",
    url: "https://mentskool.com/compare/jeesociety-alternative",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "JEE Society Alternative - Mentskool",
      },
    ],
  },
};

const comparisonRows: ComparisonRow[] = [
  {
    feature: "Mentorship Interaction Format",
    description: "Combination of private and peer sessions.",
    mentskool: "Dual Mode: 1:1 Personal Strategy + 1:15 Cohort Drills",
    competitor: "Roadmap check-ins & quiz sheets",
  },
  {
    feature: "Dynamic Accountability Scoring",
    description: "Real-time verification of on-time problem submission.",
    mentskool: "Dynamic 94% Verified Efficiency Score",
    competitor: "Manual checking without platform scores",
  },
  {
    feature: "Cohort Seat Guarantee",
    description: "Protection against oversized mentor batches.",
    mentskool: "Strict 30 Max (Atomic Redis Concurrency)",
    competitor: "Variable batch allocations",
  },
  {
    feature: "Exam Coverage",
    description: "Entrance examinations supported by rankers.",
    mentskool: "Both JEE Main/Advanced & NEET-UG (AIIMS)",
    competitor: "Primarily JEE focused",
  },
  {
    feature: "Switching & Cancellation Policy",
    description: "Flexibility to change mentor anytime.",
    mentskool: "1-Click switch anytime with zero lock-in",
    competitor: "Fixed package commitments",
  },
];

const faqs: FaqItem[] = [
  {
    question: "How does Mentskool's Dual-Mode format work?",
    answer:
      "Mentskool combines private 1:1 Google Meet strategy sessions (for personal mock test error audits and roadmap calibration) with intimate 1:15 small cohort drills (for live problem-solving and doubt-busting). This gives students individual attention without feeling isolated.",
  },
  {
    question: "Can NEET students also use Mentskool?",
    answer:
      "Yes! While some platforms focus solely on engineering, Mentskool has dedicated medical cohorts guided directly by top rankers from AIIMS New Delhi and premier government medical colleges.",
  },
  {
    question: "What makes Mentskool's efficiency scoring unique?",
    answer:
      "Instead of just checking whether a task was submitted, Mentskool's algorithm evaluates submission timeliness, chapter accuracy, and test review depth, outputting a clear percentage score to benchmark your momentum against cohort peers.",
  },
];

export default function JeeSocietyAlternativePage() {
  return (
    <div className="w-full bg-[#EBF3FB] min-h-screen">
      <div className="relative overflow-hidden pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <HeroGridBackground />
        <div className="max-w-6xl mx-auto relative z-10">
          <SeoBreadcrumbs
            items={[
              { label: "Comparisons", href: "/#how-it-works" },
              { label: "JEE Society Alternative" },
            ]}
          />

          <div className="text-center max-w-3xl mx-auto space-y-6 pt-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-cyan-200 text-cyan-900 text-xs font-bold uppercase tracking-wider shadow-soft">
              <Scale className="w-3.5 h-3.5 text-cyan-600" />
              <span>COMPREHENSIVE PLATFORM COMPARISON</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display text-ink tracking-tight leading-[1.1]">
              The High-Accountability{" "}
              <span className="bg-gradient-to-r from-blue-700 via-cyan-600 to-indigo-600 bg-clip-text text-transparent">
                JEE Society Alternative
              </span>{" "}
              With Dual-Mode Coaching
            </h1>

            <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-2xl mx-auto">
              Combine private 1:1 strategy calls with small-cohort live problem solving, verified 94% efficiency scoring, and dedicated IIT &amp; AIIMS ranker mentorship.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-700 hover:from-blue-700 hover:to-cyan-700 text-white shadow-elevated hover:shadow-card hover:-translate-y-0.5 transition-all group"
              >
                <span>Find Your Mentor</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#comparison-matrix"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-white/90 hover:bg-white border border-mist text-ink shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all"
              >
                Compare Features
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white rounded-t-[44px] border-t border-mist py-16 px-4 sm:px-6 lg:px-8 shadow-soft">
        <div className="max-w-6xl mx-auto space-y-16">
          <div id="comparison-matrix">
            <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
              <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest bg-cyan-50 border border-cyan-200/60 px-3 py-1 rounded-full">
                HEAD-TO-HEAD COMPARISON
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-ink tracking-tight">
                Mentskool vs JEE Society
              </h2>
            </div>

            <ComparisonTable competitorName="JEE Society" rows={comparisonRows} />
          </div>

          <SeoFaqAccordion
            title="JEE Society vs Mentskool FAQs"
            subtitle="Comparing format, dual-mode calls, and exam coverage."
            faqs={faqs}
          />

          <SeoCtaBanner
            title="Experience Dual-Mode Mentorship with Top IIT &amp; AIIMS Rankers"
            description="Strict 30-student cohort caps. Join with complete monthly freedom and zero annual lock-in."
            primaryButtonText="Explore Mentors"
            primaryButtonHref="/mentors"
          />
        </div>
      </div>
    </div>
  );
}
