import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  AlertCircle,
  CheckCircle2,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  TrendingUp,
  Scale,
  Calculator,
  Compass,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { SeoMentorFunnel } from "@/components/seo/SeoMentorFunnel";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "JEE Main Shift Difficulty Analysis: Score Normalization & Shift Variance Decoded",
  description:
    "Authoritative guide to JEE Main shift difficulty variance, NTA's percentile normalization formula, and how to manage tough vs easy shifts on exam day without losing composure.",
  keywords: [
    "jee main shift difficulty analysis",
    "toughest shift in jee main",
    "jee main normalization formula",
    "why jee main percentile varies between shifts",
    "how nta normalizes jee scores",
    "jee main easy shift vs tough shift marks",
    "shift wise marks vs percentile",
  ],
  alternates: {
    canonical: "https://mentskool.com/jee-main-shift-difficulty-analysis",
  },
  openGraph: {
    title: "JEE Main Shift Difficulty Analysis & Normalization Explained",
    description:
      "Understand why 99 percentile varies from 165 to 235 marks across shifts. Learn how NTA normalizes multi-session papers and how to adapt your strategy on exam day.",
    url: "https://mentskool.com/jee-main-shift-difficulty-analysis",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "JEE Main Shift Difficulty Analysis - Mentskool",
      },
    ],
  },
};

const faqs: FaqItem[] = [
  {
    question: "Why does the score required for 99 percentile differ across JEE Main shifts?",
    answer:
      "Because JEE Main is administered over 10 to 12 different sessions with unique question papers, the precise difficulty distribution of questions inevitably varies. When a shift features simpler, formula-based questions, more candidates score high marks, shifting the 99-percentile threshold upward. Conversely, mathematically rigorous shifts depress raw scores across the board.",
  },
  {
    question: "What is the exact mathematical normalization formula used by NTA?",
    answer:
      "NTA uses the standard Percentile Score formula: Percentile = (100 × Number of candidates who appeared in that shift with a raw score EQUAL TO OR LESS than the candidate) ÷ (Total number of candidates who appeared in that shift). Percentiles are computed to 7 decimal places to prevent bunched ties.",
  },
  {
    question: "Does NTA intentionally make the first day easy and later shifts harder?",
    answer:
      "No. Empirical data from the past five years proves that shift difficulty is randomly distributed across testing calendars. In some years (such as 2024), Day 1 Session 1 was the easiest; in other years (such as 2023), mid-session or final-day shifts proved to be the most accessible. There is zero deliberate chronological difficulty scaling by NTA.",
  },
  {
    question: "How should an aspirant adapt when they realize their shift is exceptionally difficult?",
    answer:
      "Immediately pivot from a 'target score' mindset (e.g., 'I must reach 200 marks') to an 'accuracy-first' mindset. Recognize that if a Mathematics or Physics section is taking 4+ minutes per problem, every other candidate in your shift is facing the exact same challenge. Prioritize zero negative marks; in tough shifts, 165–170 marks often yields a 99 percentile.",
  },
  {
    question: "Is raw score ever compared directly between different shifts?",
    answer:
      "No. Raw scores from different shifts are never directly compared. Only the normalized NTA percentile score is used to determine All India Rank (AIR), qualifying cutoff status, and seat allocation through JoSAA counseling.",
  },
];

export default function JeeMainShiftDifficultyAnalysisPage() {
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
        headline: "JEE Main Shift Difficulty Analysis: Score Normalization & Shift Variance Decoded",
        description:
          "Forensic analysis of JEE Main shift difficulty variance, NTA normalization mathematics, and test-taking adaptations for varying paper difficulties.",
        url: "https://mentskool.com/jee-main-shift-difficulty-analysis",
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
                label: "Shift Difficulty Analysis",
                href: "/jee-main-shift-difficulty-analysis",
              },
            ]}
          />

          {/* Hero Section */}
          <header className="mt-8 mb-12 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <Scale className="w-4 h-4" />
              NTA Psychometric & Statistical Normalization Audit
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight">
              JEE Main Shift Difficulty Analysis:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-indigo-300 to-cyan-400">
                Score Normalization & Shift Variance Decoded
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
              How can two candidates who both scored 180 marks receive completely different percentiles (96.5% vs 99.2%)? Demystify the mathematics behind NTA normalization, understand shift difficulty variations, and build a resilient test strategy.
            </p>
          </header>

          {/* Direct Answer Box */}
          <section className="mb-14 rounded-2xl border border-brand-500/30 bg-brand-950/20 backdrop-blur-md p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-brand-500/20 text-brand-400 shrink-0">
                <Calculator className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-brand-300 mb-2">
                  The Core Principle: Relative Standing Within Your Shift
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  You are not competing against the 14 lakh candidates who registered for JEE Main nationwide; <strong className="text-white">you are competing exclusively against the ~1.2 lakh students who took your exact shift</strong>. The raw marks required for a 99 percentile fluctuate between <strong className="text-emerald-300">165 marks</strong> on demanding shifts and <strong className="text-amber-400">225+ marks</strong> on straightforward shifts. Your only goal on exam day is to maximize your rank relative to peers facing the exact same questions.
                </p>
              </div>
            </div>
          </section>

          {/* Section 1: Anatomy of Shift Types */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Compass className="w-7 h-7 text-brand-400" />
              The 3 Archetypes of JEE Main Shifts & How To Solve Them
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-4">
                <div className="text-emerald-400 font-bold text-lg">Archetype A: The Hard Shift</div>
                <div className="text-xs font-mono text-slate-400">99%ile Threshold: 165 - 175 Marks</div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Characterized by lengthier, multi-step Mathematics and non-standard Physics problems. <strong>Action:</strong> Don&apos;t panic if you only attempt 45 questions. Maintain 92%+ accuracy; leaving 30 difficult questions with zero negative marks often yields top ranks.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-4">
                <div className="text-cyan-400 font-bold text-lg">Archetype B: The Balanced Shift</div>
                <div className="text-xs font-mono text-slate-400">99%ile Threshold: 182 - 195 Marks</div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  The standard NTA blueprint: Chemistry is NCERT-direct, Physics is largely formula-based, and Mathematics contains 6 accessible questions and 14 challenging ones. <strong>Action:</strong> Target 50 to 55 high-confidence attempts.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-4">
                <div className="text-amber-400 font-bold text-lg">Archetype C: The Easy Shift</div>
                <div className="text-xs font-mono text-slate-400">99%ile Threshold: 215 - 235 Marks</div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Questions are simple and direct across all three subjects. <strong>Action:</strong> Accuracy is everything. A single careless mistake (-5 marks) can drop your percentile significantly because hundreds of students score near-perfect marks.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Mathematical Normalization Walkthrough */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Scale className="w-7 h-7 text-brand-400" />
              NTA Percentile Calculation Walkthrough
            </h2>
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-4">
              <p className="text-slate-300 text-sm leading-relaxed">
                Consider an exam shift where exactly <strong className="text-white">100,000 candidates</strong> appeared. A student secures a raw score of <strong className="text-brand-300">178 marks</strong>:
              </p>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 font-mono text-sm text-cyan-300 space-y-2">
                <p>Total Candidates ($N$) = 100,000</p>
                <p>Candidates scoring $\le 178$ ($M$) = 99,142</p>
                <p className="text-emerald-400 font-bold">
                  Percentile = $(100 \times 99,142) / 100,000 = 99.1420000$
                </p>
              </div>
              <p className="text-xs text-slate-400">
                Notice that the formula cares exclusively about how many people scored below you, not what your score was out of 300. In a shift where 99,142 candidates scored $\le 150$, a score of 150 achieves the exact same 99.142 percentile!
              </p>
            </div>
          </section>

          {/* Section 3: Shift Allocation Myths Busted */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <ShieldCheck className="w-7 h-7 text-emerald-400" />
              Busting Common Shift Myths
            </h2>
            <div className="space-y-4">
              <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/60">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  Myth 1: Morning Shift 1 is Always Harder than Afternoon Shift 2
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  False. Empirical 5-year data shows shift difficulty alternates unpredictably. Morning and afternoon sessions are drawn from identical psychometric item banks with randomized question parameters.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/60">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  Myth 2: You Need to Know Previous Shifts&apos; Question Papers
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  While browsing memory-based questions from earlier days can offer a sense of topic emphasis, fixating on them creates unwarranted anxiety or confirmation bias. Rely on your conceptual preparation rather than attempting to guess exact repeat questions.
                </p>
              </div>
            </div>
          </section>

          {/* Dedicated High-Converting Mentorship Funnel */}
          <SeoMentorFunnel
            examFocus="JEE"
            title="Master Shift Adaptation Tactics With Top IITian Mentors"
            subtitle="Learn how to read shift difficulty within the first 10 minutes and adjust your solving tempo. Get weekly 1-on-1 strategy sessions with top IIT Bombay and Delhi rankers."
          />

          {/* Section 4: FAQ Accordion */}
          <section className="my-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center justify-center gap-3">
                <HelpCircle className="w-7 h-7 text-brand-400" />
                Frequently Asked Questions: JEE Shift Analysis
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Clear explanations regarding normalization, shift variance, and test-day adaptations.
              </p>
            </div>
            <SeoFaqAccordion items={faqs} />
          </section>

          {/* Final Call to Action */}
          <SeoCtaBanner
            title="Build a Shift-Proof Exam Strategy"
            subtitle="Connect with experienced IIT mentors who will help you analyze mock test variance and build high-confidence solving habits."
            primaryBtnText="Claim Free Mentorship Call"
            primaryBtnHref="/free-mentorship-session"
            secondaryBtnText="Explore Top IIT Mentors"
            secondaryBtnHref="/mentors"
          />
        </div>
      </main>
    </div>
  );
}
