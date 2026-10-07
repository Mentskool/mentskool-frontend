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
  title: "ToppersClubs Alternative & Review (2026) — Structured Tasks vs WhatsApp Calls",
  description:
    "Comparing ToppersClubs vs Mentskool? Discover why JEE & NEET students choose Mentskool for automated task tracking, verified 94% efficiency scores, and capped 30-seat cohorts.",
  keywords: [
    "ToppersClubs alternative",
    "ToppersClubs review",
    "ToppersClubs mentorship",
    "ToppersClubs vs Mentskool",
    "AIR 1-100 mentorship platform",
    "best NEET mentorship",
  ],
  alternates: {
    canonical: "https://mentskool.com/compare/toppersclubs-alternative",
  },
  openGraph: {
    title: "ToppersClubs Alternative: Structured Platform Tasks vs Unorganized WhatsApp",
    description:
      "See why Mentskool's platform-driven accountability, verified efficiency scores, and flexible monthly plans outrank informal WhatsApp mentorship.",
    url: "https://mentskool.com/compare/toppersclubs-alternative",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "ToppersClubs Alternative - Mentskool",
      },
    ],
  },
};

const comparisonRows: ComparisonRow[] = [
  {
    feature: "Platform Infrastructure",
    description: "Where tasks and reviews take place.",
    mentskool: "Custom Web Platform with Verified Deadlines",
    competitor: "Informal WhatsApp groups / chat threads",
  },
  {
    feature: "Daily / Weekly Accountability Metric",
    description: "Measurable proof of student discipline.",
    mentskool: "Dynamic 94% Efficiency Score & Leaderboards",
    competitor: "Subjective check-in messages",
  },
  {
    feature: "Cohort Cap & Attention Guarantee",
    description: "Protection against mentor overcommitment.",
    mentskool: "Strict 30 Max (Atomic Redis Seat Locking)",
    competitor: "Uncapped chat bandwidth",
  },
  {
    feature: "1:1 Strategy Meeting Interface",
    description: "How face-to-face deep dives are conducted.",
    mentskool: "Structured Google Meet 1:1 + Small Cohort Calls",
    competitor: "Phone calls / voice notes",
  },
  {
    feature: "Contractual Freedom",
    description: "Cancellation terms and mentor transfer.",
    mentskool: "1-Click Switch & Cancel Monthly Anytime",
    competitor: "Rigid non-refundable package policies",
  },
];

const faqs: FaqItem[] = [
  {
    question: "Why is a dedicated platform better than WhatsApp-based mentorship?",
    answer:
      "Mentorship via WhatsApp easily leads to missed tasks, lost files, and casual chatting without accountability. Mentskool provides a dedicated student dashboard with chapter assignments, verified submission timestamps, and automatic efficiency score calculation so students stay laser-focused.",
  },
  {
    question: "Are Mentskool mentors also AIR rankers?",
    answer:
      "Yes. Our mentors are verified top rankers from IIT Bombay, Delhi, Madras, and AIIMS New Delhi who mastered the exact JEE & NEET entrance exams.",
  },
  {
    question: "Does Mentskool charge long-term non-refundable fees?",
    answer:
      "Never. Mentskool gives students complete peace of mind with monthly subscription plans and 1-click mentor switches.",
  },
];

export default function ToppersclubsAlternativePage() {
  return (
    <div className="w-full bg-[#EBF3FB] min-h-screen">
      <div className="relative overflow-hidden pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <HeroGridBackground />
        <div className="max-w-6xl mx-auto relative z-10">
          <SeoBreadcrumbs
            items={[
              { label: "Comparisons", href: "/#how-it-works" },
              { label: "ToppersClubs Alternative" },
            ]}
          />

          <div className="text-center max-w-3xl mx-auto space-y-6 pt-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-emerald-200 text-emerald-900 text-xs font-bold uppercase tracking-wider shadow-soft">
              <Scale className="w-3.5 h-3.5 text-emerald-600" />
              <span>STRUCTURED PLATFORM VS INFORMAL MESSAGING</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display text-ink tracking-tight leading-[1.1]">
              The Structured{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
                ToppersClubs Alternative
              </span>{" "}
              With Verified Accountability
            </h1>

            <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-2xl mx-auto">
              Replace messy WhatsApp chats with a purpose-built preparation workspace. Track chapter task completion, dynamic 94% efficiency scores, and 1:1 strategy calls with verified IIT &amp; AIIMS rankers.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-elevated hover:shadow-card hover:-translate-y-0.5 transition-all group"
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
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 border border-emerald-200/60 px-3 py-1 rounded-full">
                PLATFORM AUDIT
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-ink tracking-tight">
                Mentskool vs ToppersClubs
              </h2>
            </div>

            <ComparisonTable competitorName="ToppersClubs" rows={comparisonRows} />
          </div>

          <SeoFaqAccordion
            title="ToppersClubs vs Mentskool FAQs"
            subtitle="Comparing workflow, daily accountability, and commitment flexibility."
            faqs={faqs}
          />

          <SeoCtaBanner
            title="Upgrade to a Structured Preparation Platform"
            description="Experience 1:1 mentorship backed by automated tracking, verified test reviews, and zero annual lock-in."
            primaryButtonText="Find Mentors"
            primaryButtonHref="/mentors"
          />
        </div>
      </div>
    </div>
  );
}
