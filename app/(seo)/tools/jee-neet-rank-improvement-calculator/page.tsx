import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  Award,
  Layers,
  LineChart,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { SeoMentorFunnel } from "@/components/seo/SeoMentorFunnel";
import { HeroGridBackground } from "@/components/HeroGridBackground";
import { RankImprovementCalculatorWidget } from "@/components/seo/tools/RankImprovementCalculatorWidget";

export const metadata: Metadata = {
  title: "JEE & NEET Rank Improvement Calculator: Predict Mock Score Growth Trajectory",
  description:
    "Interactive Mock Score Growth & Rank Improvement Calculator for JEE and NEET. Forecast your score progression across 4-week cycles with systematic error auditing, test analysis, and 1-on-1 mentorship.",
  keywords: [
    "jee mock score improvement calculator",
    "neet score trajectory",
    "rank improvement tool",
    "how to increase mock test marks jee",
    "neet mock score stuck at 500",
    "how to break score plateau jee neet",
    "mock test score progress calculator",
  ],
  alternates: {
    canonical: "https://mentskool.com/tools/jee-neet-rank-improvement-calculator",
  },
  openGraph: {
    title: "JEE & NEET Rank Improvement Calculator: Forecast Score Progression",
    description:
      "Predict your potential rank jump from mock tests to final exam. Learn how systematic error audits break score plateaus to add 35+ marks.",
    url: "https://mentskool.com/tools/jee-neet-rank-improvement-calculator",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Rank Improvement Calculator - Mentskool",
      },
    ],
  },
};

const faqs: FaqItem[] = [
  {
    question: "Why do mock test scores tend to plateau after 3 or 4 months of preparation?",
    answer:
      "A score plateau occurs when an aspirant continues solving new questions without diagnosing recurring error habits. Students repeatedly lose marks to the same 3 to 4 micro-flaws (e.g., misreading negative questions, sign drops, rushing during the last 15 minutes). Without structured error auditing, extra study hours fail to translate into higher scores.",
  },
  {
    question: "How much score improvement is realistic over a 12-week mentorship cycle?",
    answer:
      "Historical data from hundreds of Mentskool mentored students shows an average gain of +35 to +55 marks in JEE Main, and +60 to +110 marks in NEET over 12 weeks. Most of this growth comes from eliminating unforced errors and refining test-taking strategy rather than learning new topics from scratch.",
  },
  {
    question: "What is the single most effective intervention to break a score plateau?",
    answer:
      "The '24-Hour Forensic Mock Audit'. Within 24 hours of every full-length mock, categorize every wrong question into: 1) Concept Blindspot, 2) Calculation / Arithmetic Slip, or 3) Misread Prompt. Reviewing these specific categories before the next mock breaks habitual error patterns.",
  },
  {
    question: "How many full-length mock tests should I take before the final exam?",
    answer:
      "For JEE Main, completing 20 to 25 full-length CBT mocks (simulating actual 9:00 AM–12:00 PM or 3:00 PM–6:00 PM shifts) is ideal. For NEET, completing 25 to 30 full-length OMR mocks under timed conditions builds optical stamina and bubbling accuracy.",
  },
  {
    question: "Can this calculator predict score growth for repeaters and droppers?",
    answer:
      "Yes. Repeaters often experience the steepest growth curves because their conceptual baseline is already established; their main barriers are test temperament and unforced error habits, which respond quickly to systematic error auditing.",
  },
];

export default function JeeNeetRankImprovementCalculatorPage() {
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
        name: "JEE & NEET Rank Improvement Calculator",
        applicationCategory: "EducationalApplication",
        operatingSystem: "All",
        url: "https://mentskool.com/tools/jee-neet-rank-improvement-calculator",
        description:
          "Forecast mock score growth curves, rank improvement trajectories, and plateau-breaking milestones for JEE and NEET.",
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
              { label: "Tools", href: "/tools" },
              {
                label: "Rank Improvement Calculator",
                href: "/tools/jee-neet-rank-improvement-calculator",
              },
            ]}
          />

          {/* Hero Section */}
          <header className="mt-8 mb-12 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <TrendingUp className="w-4 h-4" />
              Score Growth Modeling &amp; Plateau Analytics
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight">
              JEE &amp; NEET Rank Improvement Calculator:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-emerald-300 to-cyan-400">
                Forecast Your Mock Score Growth Trajectory
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Are your mock scores stuck at a stubborn plateau? Input your current average score and weeks remaining to see how systematic error auditing can accelerate your score progression and elevate your final All India Rank.
            </p>
          </header>

          {/* Interactive Calculator Widget */}
          <section className="mb-16">
            <RankImprovementCalculatorWidget />
          </section>

          {/* Section 1: The 4-Cycle Plateau-Breaking Protocol */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <LineChart className="w-7 h-7 text-emerald-400" />
              The 4-Cycle Plateau-Breaking Framework
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                <div className="text-emerald-400 font-bold text-lg">Cycle 1 (Weeks 1 to 3): Accuracy Stabilization</div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Focus entirely on reducing negative marks. Institute a strict question-skipping rule: unless you can eliminate at least 2 options, leave the question unattempted. Target: drop negative marks from 10+ down to under 4, adding an immediate 15 to 25 marks.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                <div className="text-teal-400 font-bold text-lg">Cycle 2 (Weeks 4 to 6): Pacing &amp; Section Order</div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Test alternating subject orders. Chemistry first (40 mins), followed by Physics (50 mins), reserving uninterrupted focus for Mathematics. Build internal rhythm so you never run out of time on easy questions.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                <div className="text-cyan-400 font-bold text-lg">Cycle 3 (Weeks 7 to 9): High-Yield Chapter Surgery</div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Identify your top 3 leaky chapters (topics where you consistently score zero or lose marks). Dedicate 15 hours of focused problem practice to each until you achieve 85%+ accuracy on past 5-year PYQs.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                <div className="text-brand-400 font-bold text-lg">Cycle 4 (Weeks 10 to 12): Exam Simulation &amp; Temperament</div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Take full mocks strictly at official exam hours (9:00 AM–12:00 PM or 2:00 PM–5:20 PM). Train your body clock to operate at peak cognitive focus during your scheduled testing window.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Mentored vs Solo Prep Growth Trajectory */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Award className="w-7 h-7 text-brand-400" />
              Solo Grinding vs Mentored Error Auditing: 12-Week Comparison
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/60 my-6">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-800/80 text-slate-200 border-b border-slate-700 font-semibold">
                  <tr>
                    <th className="p-4">Preparation Dimension</th>
                    <th className="p-4">Solo Preparation (Typical Plateau)</th>
                    <th className="p-4">Systematic Mentorship with Error Audits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">Post-Mock Reaction</td>
                    <td className="p-4 text-slate-400">Checks total score, feels disappointed, starts next mock without review.</td>
                    <td className="p-4 text-emerald-400 font-medium">Undergoes 45-minute error audit with mentor, updating Error Book.</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">Negative Marks Trend</td>
                    <td className="p-4 text-red-400">Remains high (8 to 14 errors per mock test).</td>
                    <td className="p-4 text-emerald-400 font-medium">Steadily drops to fewer than 3 to 4 errors per paper.</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">Average Score Growth</td>
                    <td className="p-4 text-slate-400">+5 to +10 marks over 3 months (Score Plateau).</td>
                    <td className="p-4 text-emerald-400 font-bold">+35 to +55 marks in JEE / +80+ in NEET.</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">Final College Admission</td>
                    <td className="p-4 text-amber-400">Peripheral state colleges or private universities.</td>
                    <td className="p-4 text-emerald-400 font-bold">Top NIT CSE / Premier Government Medical College.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Dedicated High-Converting Mentorship Funnel */}
          <SeoMentorFunnel
            examFocus="BOTH"
            title="Break Your Mock Score Plateau With Top Ranker Mentors"
            subtitle="Stop repeating the same mistakes in every mock test. Partner 1-on-1 with an IITian or AIIMS mentor who will audit your rough work, eliminate calculation errors, and help you gain 35+ marks."
          />

          {/* Section 3: FAQ Accordion */}
          <section className="my-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center justify-center gap-3">
                <HelpCircle className="w-7 h-7 text-brand-400" />
                Frequently Asked Questions: Rank Improvement
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Proven tactics on breaking plateaus, error book maintenance, and mock test analysis.
              </p>
            </div>
            <SeoFaqAccordion items={faqs} />
          </section>

          {/* Final Call to Action */}
          <SeoCtaBanner
            title="Accelerate Your Mock Score Trajectory"
            subtitle="Connect with experienced mentors who will diagnose your mock test blindspots and guide you to an achievable score jump."
            primaryBtnText="Claim Free Mentorship Call"
            primaryBtnHref="/free-mentorship-session"
            secondaryBtnText="Explore Top Mentors"
            secondaryBtnHref="/mentors"
          />
        </div>
      </main>
    </div>
  );
}
