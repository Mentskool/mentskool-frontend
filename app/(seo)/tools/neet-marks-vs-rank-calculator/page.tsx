import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  HeartPulse,
  AlertCircle,
  CheckCircle2,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  TrendingUp,
  Award,
  Building2,
  Scale,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { SeoMentorFunnel } from "@/components/seo/SeoMentorFunnel";
import { HeroGridBackground } from "@/components/HeroGridBackground";
import { NeetMarksVsRankCalculatorWidget } from "@/components/seo/tools/NeetMarksVsRankCalculatorWidget";

export const metadata: Metadata = {
  title: "NEET Marks vs Rank Calculator: Predict AIR & GMC Seat Probability",
  description:
    "Interactive NEET Marks vs Rank Predictor. Enter your expected score (0-720) and category (General, OBC, EWS, SC, ST) to predict your All India Rank (AIR) and Government Medical College admission chances.",
  keywords: [
    "neet marks vs rank calculator",
    "neet rank predictor",
    "predict neet rank 2027",
    "neet college predictor tool",
    "safe score for mbbs calculator",
    "neet rank vs marks 2026",
    "calculate neet air from marks",
  ],
  alternates: {
    canonical: "https://mentskool.com/tools/neet-marks-vs-rank-calculator",
  },
  openGraph: {
    title: "NEET Marks vs Rank Calculator & Government College Predictor",
    description:
      "Predict your All India Rank (AIR) and evaluate your Government MBBS admission chances across All India Quota and State Quota.",
    url: "https://mentskool.com/tools/neet-marks-vs-rank-calculator",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "NEET Marks vs Rank Calculator - Mentskool",
      },
    ],
  },
};

const faqs: FaqItem[] = [
  {
    question: "How does this calculator estimate my NEET All India Rank (AIR)?",
    answer:
      "The calculator uses calibrated empirical distribution curves from the 2024–2026 testing cycles, which account for rank inflation, candidate volume (over 24 lakh applicants), and score compression in the 630–670 mark range. It provides an estimated rank within typical year-to-year counseling variance.",
  },
  {
    question: "What is the minimum safe score for a Government Medical College (GMC) for General category?",
    answer:
      "For General/UR category candidates, a score of 655+ marks (AIR within ~22,000) provides a safe threshold for an MBBS seat through the 15% All India Quota (AIQ). For State Quota (85%), cutoffs range from 620 marks in high-seat states (like Karnataka or Maharashtra) to 655+ in high-competition states (like Delhi, UP, Rajasthan, and Bihar).",
  },
  {
    question: "Why does the score-to-rank curve get so steep between 630 and 660 marks?",
    answer:
      "Because thousands of students achieve similar scores in this bracket. In the 630 to 660 range, a single mark difference can shift your All India Rank by 1,200 to 1,800 positions. This high density is why a single unforced error can impact college allocation.",
  },
  {
    question: "What score is required for AIIMS New Delhi and top central medical institutions?",
    answer:
      "Securing an MBBS seat at AIIMS New Delhi requires a top 50 All India Rank, which translates to 710 to 715+ marks out of 720. For top peripheral AIIMS (Bhopal, Jodhpur, Bhubaneswar, Rishikesh), 685 to 695 marks are generally required for General category candidates.",
  },
  {
    question: "Can I get a government MBBS seat with 600 marks?",
    answer:
      "Under the 15% All India Quota, 600 marks is generally below the cutoff for General, OBC, and EWS candidates. However, for SC candidates (safe at 545+) and ST candidates (safe at 510+), 600 marks comfortably secures admission to top state and central medical colleges.",
  },
];

export default function NeetMarksVsRankCalculatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        name: "Mentskool",
        url: "https://mentskool.com",
        logo: "https://mentskool.com/logo.png",
      },
      {
        "@type": "WebApplication",
        name: "NEET Marks vs Rank & GMC Predictor",
        applicationCategory: "EducationalApplication",
        operatingSystem: "All",
        url: "https://mentskool.com/tools/neet-marks-vs-rank-calculator",
        description:
          "Predict your NEET All India Rank (AIR), Government Medical College eligibility, and AIIMS target milestones based on your expected raw score.",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-white selection:bg-emerald-500/30 selection:text-emerald-300">
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
              { label: "Tools", href: "/tools" },
              {
                label: "NEET Marks vs Rank Calculator",
                href: "/tools/neet-marks-vs-rank-calculator",
              },
            ]}
          />

          {/* Hero Section */}
          <header className="mt-8 mb-12 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <HeartPulse className="w-4 h-4" />
              Empirical NEET Rank Engine (2024–2026 Calibrated)
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight">
              NEET Marks vs Rank Calculator:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                Predict AIR &amp; Government MBBS Chances
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
              How does your mock test score translate into a real All India Rank? Use the interactive predictor below to calculate your estimated AIR and see where you stand for AIIMS and Government Medical College seats.
            </p>
          </header>

          {/* Interactive Calculator Widget */}
          <section className="mb-16">
            <NeetMarksVsRankCalculatorWidget />
          </section>

          {/* Section 1: Detailed Historical Score vs Rank Reference Table */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <TrendingUp className="w-7 h-7 text-emerald-400" />
              NEET Score vs All India Rank Benchmark Table
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/60 my-6">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-800/80 text-slate-200 border-b border-slate-700 font-semibold">
                  <tr>
                    <th className="p-4">Score Bracket (Out of 720)</th>
                    <th className="p-4">Estimated All India Rank (AIR)</th>
                    <th className="p-4">General / OBC Status</th>
                    <th className="p-4">SC / ST Status</th>
                    <th className="p-4">Typical College Allocation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-emerald-400">705 - 720</td>
                    <td className="p-4 font-mono font-bold text-white">AIR 1 to 50</td>
                    <td className="p-4 text-xs font-semibold text-emerald-400">Guaranteed AIIMS Delhi</td>
                    <td className="p-4 text-xs font-semibold text-emerald-400">AIIMS Delhi Top Merit</td>
                    <td className="p-4 text-xs text-emerald-300 font-semibold">AIIMS New Delhi, MAMC, JIPMER</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-teal-400">680 - 700</td>
                    <td className="p-4 font-mono text-white">AIR 500 to 2,500</td>
                    <td className="p-4 text-xs font-semibold text-teal-400">Top Peripheral AIIMS</td>
                    <td className="p-4 text-xs font-semibold text-emerald-400">Any Top Central College</td>
                    <td className="p-4 text-xs text-slate-300">AIIMS Bhopal, Jodhpur, Seth GS Mumbai</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-cyan-400">655 - 675</td>
                    <td className="p-4 font-mono text-white">AIR 3,000 to 22,000</td>
                    <td className="p-4 text-xs font-semibold text-cyan-400">AIQ 15% Safe GMC</td>
                    <td className="p-4 text-xs font-semibold text-emerald-400">Top State GMCs</td>
                    <td className="p-4 text-xs text-slate-300">State Government Medical Colleges (AIQ)</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-blue-400">620 - 650</td>
                    <td className="p-4 font-mono text-white">AIR 23,000 to 45,000</td>
                    <td className="p-4 text-xs text-amber-300">State Quota Only</td>
                    <td className="p-4 text-xs font-semibold text-emerald-400">All India Quota Safe</td>
                    <td className="p-4 text-xs text-slate-300">State GMCs (MH, KA, TN, WB, GJ)</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-indigo-400">550 - 610</td>
                    <td className="p-4 font-mono text-white">AIR 50,000 to 1,20,000</td>
                    <td className="p-4 text-xs text-red-400">Govt BDS / Semi-Govt</td>
                    <td className="p-4 text-xs font-semibold text-cyan-400">Govt MBBS Confirmed</td>
                    <td className="p-4 text-xs text-slate-300">Government Dental / SC-ST State GMC</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Dedicated High-Converting Mentorship Funnel */}
          <SeoMentorFunnel
            examFocus="NEET"
            title="Accelerate Your Score to 680+ With Top AIIMS Mentors"
            subtitle="Don't leave your medical seat to chance. Work 1-on-1 with mentors from AIIMS and top medical colleges to identify weak topics, refine mock strategies, and build a safe score buffer."
          />

          {/* Section 2: FAQ Accordion */}
          <section className="my-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center justify-center gap-3">
                <HelpCircle className="w-7 h-7 text-emerald-400" />
                Frequently Asked Questions: Marks vs Rank
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Clear guidance on rank inflation, reservation thresholds, and counseling strategies.
              </p>
            </div>
            <SeoFaqAccordion items={faqs} />
          </section>

          {/* Final Call to Action */}
          <SeoCtaBanner
            title="Turn Your Predicted Rank Into a Real MBBS Seat"
            subtitle="Connect with medical rankers who will audit your mock exams and help you build a personalized study plan to hit 680+."
            primaryBtnText="Claim Free Mentorship Call"
            primaryBtnHref="/free-mentorship-session"
            secondaryBtnText="Explore Top Medical Mentors"
            secondaryBtnHref="/mentors"
          />
        </div>
      </main>
    </div>
  );
}
