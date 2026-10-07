import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, X, ShieldCheck, Scale, Award } from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { ComparisonTable, ComparisonRow } from "@/components/seo/ComparisonTable";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "Mentor Prep Alternative & Review (2026) — Why Students Switch to Mentskool",
  description:
    "Looking for a Mentor Prep alternative for JEE & NEET? Compare verified task accountability, dynamic 94% efficiency scoring, strict 30-student cohort caps, and flexible monthly pricing.",
  keywords: [
    "Mentor Prep alternative",
    "Mentor Prep review",
    "Mentor Prep pricing",
    "Mentor Prep vs Mentskool",
    "best JEE mentorship platform",
    "1 on 1 NEET mentorship",
  ],
  alternates: {
    canonical: "https://mentskool.com/compare/mentorprep-alternative",
  },
  openGraph: {
    title: "Mentor Prep Alternative: Why Mentskool Outranks Call-Only Mentorship",
    description:
      "See how Mentskool's verified task checkpoints, 94% efficiency scoring, and atomic 30-student limits compare with Mentor Prep.",
    url: "https://mentskool.com/compare/mentorprep-alternative",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Mentor Prep Alternative - Mentskool",
      },
    ],
  },
};

const comparisonRows: ComparisonRow[] = [
  {
    feature: "Accountability Mechanism",
    description: "How student progress is verified and enforced each week.",
    mentskool: "Dynamic 94% Score + Verified Task Reviews",
    competitor: "Call-based check-ins only (No task scoring)",
  },
  {
    feature: "Cohort Size Limit",
    description: "Maximum students handled by a single mentor.",
    mentskool: "Strict Max 30 (Atomic Redis Locking)",
    competitor: "Uncapped / Variable mentor bandwidth",
  },
  {
    feature: "Mentor Pedigree",
    description: "Who actually mentors the student.",
    mentskool: "Verified IIT Bombay/Delhi/AIIMS Rankers",
    competitor: "IIT/NIT/GMC mixture",
  },
  {
    feature: "Switch Mentor Policy",
    description: "Freedom to change mentors if teaching style doesn't match.",
    mentskool: "1-Click switch anytime with full credit rollover",
    competitor: "Limited / Support approval required",
  },
  {
    feature: "Contractual Lock-In",
    description: "Payment flexibility and refund freedom.",
    mentskool: "100% Monthly Freedom (Zero annual lock-in)",
    competitor: "Often upfront multi-month / annual bundles",
  },
  {
    feature: "Mock Test Mistake Audits",
    description: "Detailed error categorization and negative marking elimination.",
    mentskool: true,
    competitor: "Depends on mentor availability",
  },
];

const faqs: FaqItem[] = [
  {
    question: "Why are students searching for Mentor Prep alternatives?",
    answer:
      "While Mentor Prep offers phone call check-ins, students often find that verbal calls alone lack structured discipline. Without concrete task tracking, submission audits, and real-time efficiency metrics, students can easily slip back into procrastination. Mentskool solves this with automated task verification and dynamic efficiency scoring.",
  },
  {
    question: "How does Mentskool's 94% Efficiency Score work?",
    answer:
      "Mentskool's platform tracks on-time submission of chapter problem sets, diagnostic quiz accuracy, and mock test review completion. Students receive a transparent, verified percentage score that benchmarks their discipline against cohort peers.",
  },
  {
    question: "Can I transfer from Mentor Prep to Mentskool easily?",
    answer:
      "Yes. You can explore our mentor roster and enroll in any active cohort immediately. There are no long commitments — you pay on a flexible monthly basis with complete freedom to switch mentors anytime.",
  },
];

export default function MentorPrepAlternativePage() {
  return (
    <div className="w-full bg-[#EBF3FB] min-h-screen">
      {/* Hero */}
      <div className="relative overflow-hidden pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <HeroGridBackground />
        <div className="max-w-6xl mx-auto relative z-10">
          <SeoBreadcrumbs
            items={[
              { label: "Comparisons", href: "/#how-it-works" },
              { label: "Mentor Prep Alternative" },
            ]}
          />

          <div className="text-center max-w-3xl mx-auto space-y-6 pt-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-wider shadow-soft">
              <Scale className="w-3.5 h-3.5 text-blue-600" />
              <span>HONEST ARCHITECTURE &amp; FEATURE COMPARISON</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display text-ink tracking-tight leading-[1.1]">
              The Top-Rated{" "}
              <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-sky-500 bg-clip-text text-transparent">
                Mentor Prep Alternative
              </span>{" "}
              for Serious JEE &amp; NEET Aspirants
            </h1>

            <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-2xl mx-auto">
              Looking for true accountability instead of casual phone calls? Discover why rankers choose Mentskool for verified weekly task audits, capped 30-student cohorts, and zero annual lock-in.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-elevated hover:shadow-card hover:-translate-y-0.5 transition-all group"
              >
                <span>Explore Mentskool Mentors</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#comparison-matrix"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-white/90 hover:bg-white border border-mist text-ink shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all"
              >
                View Comparison Matrix
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Details */}
      <div className="w-full bg-white rounded-t-[44px] border-t border-mist py-16 px-4 sm:px-6 lg:px-8 shadow-soft">
        <div className="max-w-6xl mx-auto space-y-16">
          <div id="comparison-matrix">
            <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-widest bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full">
                SIDE-BY-SIDE FEATURE AUDIT
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-ink tracking-tight">
                Mentskool vs Mentor Prep: Key Differences
              </h2>
              <p className="text-xs sm:text-sm text-ink-muted">
                How our task-based accountability infrastructure delivers measurable score improvements:
              </p>
            </div>

            <ComparisonTable competitorName="Mentor Prep" rows={comparisonRows} />
          </div>

          <SeoFaqAccordion
            title="Mentor Prep vs Mentskool FAQs"
            subtitle="Frequently asked comparison questions by JEE & NEET aspirants."
            faqs={faqs}
          />

          <SeoCtaBanner
            title="Experience True 1:1 Accountability with Top IIT & AIIMS Rankers"
            description="Strictly 30 seats per cohort. Try Mentskool with flexible monthly enrollment and zero lock-in."
            primaryButtonText="Find Your Mentor"
            primaryButtonHref="/mentors"
          />
        </div>
      </div>
    </div>
  );
}
