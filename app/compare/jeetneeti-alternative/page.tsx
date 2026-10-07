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
  title: "JeetNeeti Alternative & Review (2026) — Pricing & Features Compared",
  description:
    "Comparing JeetNeeti vs Mentskool for JEE & NEET mentorship? See why students prefer Mentskool's verified task checkpoints, 94% efficiency scoring, and transparent monthly pricing.",
  keywords: [
    "JeetNeeti alternative",
    "JeetNeeti review",
    "JeetNeeti pricing",
    "JeetNeeti vs Mentskool",
    "IIT JEE mentorship by IITians",
    "best JEE mentorship platform",
  ],
  alternates: {
    canonical: "https://mentskool.com/compare/jeetneeti-alternative",
  },
  openGraph: {
    title: "JeetNeeti Alternative: Transparent Pricing & Verified 1:1 Accountability",
    description:
      "See how Mentskool stacks up against JeetNeeti with capped 30-student cohorts, verified efficiency scores, and monthly freedom.",
    url: "https://mentskool.com/compare/jeetneeti-alternative",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "JeetNeeti Alternative - Mentskool",
      },
    ],
  },
};

const comparisonRows: ComparisonRow[] = [
  {
    feature: "Pricing Transparency & Model",
    description: "Upfront pricing clarity and commitment duration.",
    mentskool: "Transparent Monthly Plans (Cancel Anytime)",
    competitor: "Expensive upfront multi-month/annual packages",
  },
  {
    feature: "Student Accountability Engine",
    description: "Daily and weekly tracking of homework, milestones, and tests.",
    mentskool: "Verified Task Checkpoints & 94% Efficiency Score",
    competitor: "Periodic video calls without automated task scoring",
  },
  {
    feature: "Cohort Exclusivity",
    description: "Maximum students per mentor.",
    mentskool: "Strict Max 30 (Hard Redis Atomic Lock)",
    competitor: "Varies depending on mentor allocation",
  },
  {
    feature: "Freedom to Switch Mentors",
    description: "Ability to change mentor if your frequency does not match.",
    mentskool: "1-Click instant transfer with zero penalty",
    competitor: "Rigid allocation with admin friction",
  },
  {
    feature: "Mock Test Mistake Deep Dives",
    description: "Line-by-line post-exam negative marking analysis.",
    mentskool: true,
    competitor: "Limited to scheduled call time",
  },
];

const faqs: FaqItem[] = [
  {
    question: "How does Mentskool pricing compare with JeetNeeti?",
    answer:
      "JeetNeeti often bundles long-term commitments requiring thousands of rupees upfront. Mentskool believes students should only pay as long as they see real weekly improvement. We operate on transparent, affordable monthly plans with zero cancellation penalty.",
  },
  {
    question: "Are Mentskool mentors also from IIT Bombay and top colleges?",
    answer:
      "Yes. Our mentors include top rankers from IIT Bombay, IIT Delhi, IIT Madras, and AIIMS New Delhi who have personally conquered JEE Advanced and NEET-UG with top All India Ranks.",
  },
  {
    question: "What happens if a mentor's teaching style doesn't fit me?",
    answer:
      "At Mentskool, student choice is 100% guaranteed. You can switch to any other mentor's cohort with one click in your student dashboard, retaining all your task history and progress credits.",
  },
];

export default function JeetneetiAlternativePage() {
  return (
    <div className="w-full bg-[#EBF3FB] min-h-screen">
      <div className="relative overflow-hidden pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <HeroGridBackground />
        <div className="max-w-6xl mx-auto relative z-10">
          <SeoBreadcrumbs
            items={[
              { label: "Comparisons", href: "/#how-it-works" },
              { label: "JeetNeeti Alternative" },
            ]}
          />

          <div className="text-center max-w-3xl mx-auto space-y-6 pt-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-indigo-200 text-indigo-900 text-xs font-bold uppercase tracking-wider shadow-soft">
              <Scale className="w-3.5 h-3.5 text-indigo-600" />
              <span>COMPREHENSIVE MENTORSHIP AUDIT</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display text-ink tracking-tight leading-[1.1]">
              The Smarter{" "}
              <span className="bg-gradient-to-r from-indigo-700 via-blue-600 to-sky-500 bg-clip-text text-transparent">
                JeetNeeti Alternative
              </span>{" "}
              With Complete Pricing Freedom
            </h1>

            <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-2xl mx-auto">
              Get genuine 1:1 strategy calls with top IIT rankers, verified task checkpoints, and an objective 94% efficiency score — without high upfront packages or long annual lock-ins.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 hover:from-indigo-700 hover:to-blue-700 text-white shadow-elevated hover:shadow-card hover:-translate-y-0.5 transition-all group"
              >
                <span>Browse Mentskool Mentors</span>
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
              <span className="text-xs font-bold text-indigo-700 uppercase tracking-widest bg-indigo-50 border border-indigo-200/60 px-3 py-1 rounded-full">
                HEAD-TO-HEAD COMPARISON
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-ink tracking-tight">
                Mentskool vs JeetNeeti
              </h2>
            </div>

            <ComparisonTable competitorName="JeetNeeti" rows={comparisonRows} />
          </div>

          <SeoFaqAccordion
            title="JeetNeeti vs Mentskool FAQs"
            subtitle="Comparing mentors, accountability tools, and pricing models."
            faqs={faqs}
          />

          <SeoCtaBanner
            title="Choose Personal Mentorship Built on Freedom &amp; Verified Results"
            description="Start your 1:1 journey with top IIT & AIIMS rankers. Switch mentors anytime with 1-click."
            primaryButtonText="Find Your Mentor"
            primaryButtonHref="/mentors"
          />
        </div>
      </div>
    </div>
  );
}
