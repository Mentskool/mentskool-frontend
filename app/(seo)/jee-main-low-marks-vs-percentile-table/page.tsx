import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Calculator,
  GraduationCap,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  Compass,
  Layers,
  Award,
  TrendingUp,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { SeoMentorFunnel } from "@/components/seo/SeoMentorFunnel";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "JEE Main Low Marks vs Percentile Table: 40 to 120 Marks Shift-by-Shift Analysis",
  description:
    "Complete JEE Main low marks vs percentile analysis for scores between 40 and 120 marks. Shift difficulty variations, expected percentiles for 50, 70, 90, 100 marks, and the fastest 40-mark leap strategy.",
  keywords: [
    "jee main low marks vs percentile",
    "40 marks in jee main percentile",
    "50 marks in jee main percentile",
    "70 marks in jee main percentile",
    "80 marks in jee main percentile",
    "100 marks in jee main percentile",
    "shift wise marks vs percentile low marks",
  ],
  alternates: {
    canonical: "https://mentskool.com/jee-main-low-marks-vs-percentile-table",
  },
  openGraph: {
    title: "JEE Main Low Marks vs Percentile Table (40 to 120 Marks)",
    description:
      "Exact marks vs percentile breakdown for 40 to 120 marks in JEE Main. Shift variance, NTA normalization mechanics, and how to jump from 75 to 95 percentile.",
    url: "https://mentskool.com/jee-main-low-marks-vs-percentile-table",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "JEE Main Low Marks vs Percentile Table - Mentskool",
      },
    ],
  },
};

const faqs: FaqItem[] = [
  {
    question: "What percentile do I get with 50 marks in JEE Main?",
    answer:
      "A raw score of 50 marks out of 300 generally yields a percentile between 72.0 and 78.5 depending on shift difficulty. In a particularly challenging session (heavy Physics numericals and tricky Maths), 50 marks can touch 79+ percentile, whereas in an easier session with high scoring, it may stay around 71-73 percentile.",
  },
  {
    question: "What percentile corresponds to 80 marks in JEE Main?",
    answer:
      "Scoring 80 marks in JEE Main typically secures an 84.5 to 88.5 percentile. At 80 marks, you have successfully crossed the general qualification cutoff for JEE Advanced (which typically hovers around 90-93.5 percentile for general, but is comfortably cleared for OBC, EWS, SC, and ST categories).",
  },
  {
    question: "What is the minimum mark required to touch 90 percentile in JEE Main?",
    answer:
      "Historically, touching the 90.00 percentile threshold requires between 78 and 96 raw marks. In difficult shifts, 80 to 84 marks suffices for 90 percentile; in exceptionally straightforward shifts, you may require 94 to 98 marks.",
  },
  {
    question: "Why do two students with the exact same 70 marks receive different percentiles?",
    answer:
      "NTA normalizes raw marks using session-specific percentiles. Because each exam shift has a different set of question papers with varying difficulty levels, NTA measures how many students you outperformed in YOUR specific 3-hour shift rather than comparing raw absolute marks across different dates.",
  },
  {
    question: "How quickly can a student jump from 60 marks to 110 marks?",
    answer:
      "A 50-mark jump (from ~77 percentile to ~93 percentile) is the most achievable transformation in JEE Main. It requires converting just 12 to 13 additional questions from unattempted or incorrect into correct. By eliminating negative marking guesses and mastering high-yield, formula-direct chapters in Modern Physics, Semiconductor, and Inorganic Chemistry, students routinely achieve this leap in 45 to 60 days.",
  },
];

export default function JeeMainLowMarksVsPercentileTablePage() {
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
        "@type": "Article",
        headline: "JEE Main Low Marks vs Percentile Table: 40 to 120 Marks Shift-by-Shift Analysis",
        description:
          "Authoritative analysis of low marks vs percentile conversions across varied shift difficulty levels in JEE Main.",
        url: "https://mentskool.com/jee-main-low-marks-vs-percentile-table",
        author: {
          "@type": "Organization",
          name: "Mentskool Academic Research Cell",
        },
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
              { label: "JEE Mentorship", href: "/jee-mentorship" },
              {
                label: "Low Marks vs Percentile Table",
                href: "/jee-main-low-marks-vs-percentile-table",
              },
            ]}
          />

          {/* Hero Header */}
          <header className="mt-8 mb-12 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <Calculator className="w-4 h-4" />
              NTA Normalization &amp; Shift Calibration Analysis
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight">
              JEE Main Low Marks vs Percentile Table:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-sky-300 to-indigo-400">
                40 to 120 Marks Decoded
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Wondering what percentile 50, 70, or 90 marks will fetch in JEE Main? Explore the comprehensive low marks vs percentile matrix across tough, moderate, and easy shifts, along with the step-by-step strategy to cross 95 percentile.
            </p>
          </header>

          {/* Direct Answer Box */}
          <section className="mb-14 rounded-2xl border border-brand-500/30 bg-brand-950/20 backdrop-blur-md p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-brand-500/20 text-brand-400 shrink-0">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-brand-300 mb-2">
                  The Key Rule: Every 10 Marks Yields Massive Percentile Swings Below 100
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Between 40 and 110 marks, the candidate distribution curve is at its steepest. While jumping from 99.0 to 99.5 percentile requires nearly 25 additional marks, <strong className="text-white">gaining just 10 raw marks between 60 and 90 can elevate your percentile by 4 to 6 full points</strong> (vaulting over 60,000 to 90,000 students on the All India Rank list).
                </p>
              </div>
            </div>
          </section>

          {/* Section 1: Detailed Low Marks vs Percentile Table */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Layers className="w-7 h-7 text-brand-400" />
              Complete Low Marks vs Percentile Matrix (40 to 120 Marks)
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Based on official normalization data from multiple recent JEE Main sessions, here is the calibrated expected percentile range across tough, moderate, and easy examination shifts:
            </p>

            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/60 my-6">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-800/80 text-slate-200 border-b border-slate-700 font-semibold">
                  <tr>
                    <th className="p-4">Raw Marks (out of 300)</th>
                    <th className="p-4">Tough Shift Percentile</th>
                    <th className="p-4">Moderate Shift Percentile</th>
                    <th className="p-4">Easy Shift Percentile</th>
                    <th className="p-4">Expected AIR / CRL Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-bold text-white">40 Marks</td>
                    <td className="p-4 text-emerald-400 font-mono">71.50 - 73.20</td>
                    <td className="p-4 text-cyan-400 font-mono">67.80 - 70.00</td>
                    <td className="p-4 text-slate-400 font-mono">63.50 - 66.00</td>
                    <td className="p-4 text-xs">4,10,000 - 5,20,000</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-bold text-white">50 Marks</td>
                    <td className="p-4 text-emerald-400 font-mono">77.50 - 79.20</td>
                    <td className="p-4 text-cyan-400 font-mono">74.00 - 76.50</td>
                    <td className="p-4 text-slate-400 font-mono">70.20 - 72.80</td>
                    <td className="p-4 text-xs">3,40,000 - 4,30,000</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-bold text-white">60 Marks</td>
                    <td className="p-4 text-emerald-400 font-mono">82.00 - 83.80</td>
                    <td className="p-4 text-cyan-400 font-mono">78.80 - 81.20</td>
                    <td className="p-4 text-slate-400 font-mono">75.50 - 77.80</td>
                    <td className="p-4 text-xs">2,60,000 - 3,50,000</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-bold text-white">70 Marks</td>
                    <td className="p-4 text-emerald-400 font-mono">85.80 - 87.40</td>
                    <td className="p-4 text-cyan-400 font-mono">83.00 - 85.00</td>
                    <td className="p-4 text-slate-400 font-mono">79.80 - 82.20</td>
                    <td className="p-4 text-xs">2,00,000 - 2,80,000</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-bold text-white">80 Marks</td>
                    <td className="p-4 text-emerald-400 font-mono">89.00 - 90.60</td>
                    <td className="p-4 text-cyan-400 font-mono">86.50 - 88.50</td>
                    <td className="p-4 text-slate-400 font-mono">83.80 - 85.80</td>
                    <td className="p-4 text-xs">1,45,000 - 2,15,000</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-bold text-white">90 Marks</td>
                    <td className="p-4 text-emerald-400 font-mono">91.80 - 93.10</td>
                    <td className="p-4 text-cyan-400 font-mono">89.60 - 91.20</td>
                    <td className="p-4 text-slate-400 font-mono">87.20 - 89.00</td>
                    <td className="p-4 text-xs">1,05,000 - 1,60,000</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-bold text-white">100 Marks</td>
                    <td className="p-4 text-emerald-400 font-mono">93.80 - 94.90</td>
                    <td className="p-4 text-cyan-400 font-mono">92.00 - 93.40</td>
                    <td className="p-4 text-slate-400 font-mono">90.00 - 91.60</td>
                    <td className="p-4 text-xs">75,000 - 1,20,000</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-bold text-white">110 Marks</td>
                    <td className="p-4 text-emerald-400 font-mono">95.20 - 96.20</td>
                    <td className="p-4 text-cyan-400 font-mono">93.80 - 95.00</td>
                    <td className="p-4 text-slate-400 font-mono">92.20 - 93.60</td>
                    <td className="p-4 text-xs">55,000 - 92,000</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-bold text-white">120 Marks</td>
                    <td className="p-4 text-emerald-400 font-mono">96.50 - 97.40</td>
                    <td className="p-4 text-cyan-400 font-mono">95.20 - 96.30</td>
                    <td className="p-4 text-slate-400 font-mono">93.90 - 95.10</td>
                    <td className="p-4 text-xs">40,000 - 72,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: Shift Difficulty Dynamics */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <TrendingUp className="w-7 h-7 text-sky-400" />
              Why Tough Shifts are a Goldmine for Low-Scoring Students
            </h2>
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-4 text-sm leading-relaxed text-slate-300">
              <p>
                When a shift is universally tough, the median student panics and begins making wild guesses, racking up massive negative marking penalties (-1 on multiple questions).
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="p-4 rounded-xl bg-slate-800/70 border border-slate-700 space-y-2">
                  <h4 className="font-bold text-brand-300">The Power of Controlled Restraint</h4>
                  <p className="text-xs text-slate-300">
                    If you attempt only 22 questions with 90% accuracy in a tough shift, you score around 78 marks. That 78 raw score in a difficult shift frequently awards an <strong className="text-emerald-400">90.20 percentile</strong>, qualifying you for JEE Advanced and premier GFTIs.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/70 border border-slate-700 space-y-2">
                  <h4 className="font-bold text-sky-300">The Easy Shift Trap</h4>
                  <p className="text-xs text-slate-300">
                    In an easy shift, the same 78 marks might only fetch an 83.50 percentile because dozens of candidates solved formula-direct questions effortlessly. Never judge your performance mid-test; stick to disciplined accuracy.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: The 40-Mark Leap Protocol */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Award className="w-7 h-7 text-indigo-400" />
              The 40-Mark Fast Leap Protocol (Move from 60 to 100+ Marks)
            </h2>
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-4 text-sm leading-relaxed text-slate-300">
              <p>
                If your current mock score is lingering between 50 and 70 marks, execute these three high-impact behavioral shifts immediately:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Negative Marking Quarantine:</strong> Review your last 3 mocks. If you lost 15 to 25 marks to negative marking, enforce a strict rule: if you cannot eliminate at least 2 options logically, leave the question unattempted. Instant +20 mark recovery.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Direct Inorganic &amp; Physical Chemistry Formulas:</strong> Chemistry is the fastest subject to gain 30 marks. Dedicate 2 hours daily to memorizing NCERT Coordination Compounds, Chemical Bonding, and Solutions formula shortcuts.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Physics Modern &amp; Mechanics High-Yield:</strong> Master Dual Nature, Atoms &amp; Nuclei, Current Electricity, and Semiconductor devices. These 4 chapters consistently supply 6 to 7 questions (24 to 28 marks) with minimal calculation complexity.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Mentorship Funnel Callout */}
          <SeoMentorFunnel
            examFocus="JEE"
            title="Accelerate From 60 Marks to 120+ Marks With Personal Mentorship"
            subtitle="Connect with IITian mentors who show you how to audit your mock exams, stop losing marks to negative guesses, and master high-yield scoring chapters."
          />

          {/* Section 4: FAQ Accordion */}
          <section className="my-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center justify-center gap-3">
                <HelpCircle className="w-7 h-7 text-brand-400" />
                Frequently Asked Questions: Low Marks vs Percentile
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Detailed insights on shift calibrations, cutoff boundaries, and score acceleration.
              </p>
            </div>
            <SeoFaqAccordion items={faqs} />
          </section>

          {/* Final Call to Action */}
          <SeoCtaBanner
            title="Unlock Your Highest Potential in JEE Main"
            subtitle="Book a free 1-on-1 strategy session with top IIT Bombay and Delhi rankers to build a targeted plan for your next 40-mark leap."
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
