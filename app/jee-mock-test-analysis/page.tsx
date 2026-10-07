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
  FileCheck2,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "JEE Mock Test Analysis with Personal IITian Mentor — Stop Negative Marks",
  description:
    "Plateaued at 100-140 marks in JEE Main mocks? Learn the 3-Bucket Error Classification and the 3-Round Exam Strategy used by IIT Bombay & Delhi rankers to unlock 200+ marks and eliminate negative marking.",
  keywords: [
    "JEE mock test analysis",
    "how to analyze JEE mock tests",
    "stop negative marks in JEE",
    "JEE score plateau 120 marks",
    "JEE mistake book format",
    "3 round strategy JEE Main",
    "JEE mock test analysis with mentor",
  ],
  alternates: {
    canonical: "https://mentskool.com/jee-mock-test-analysis",
  },
  openGraph: {
    title: "JEE Mock Test Analysis: The 3-Bucket Framework for 200+ Marks",
    description:
      "Taking mocks without analysis is useless. Dissect rough sheets, eliminate 24+ negative marks, and master test-taking psychology with verified IIT mentors.",
    url: "https://mentskool.com/jee-mock-test-analysis",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "JEE Mock Test Analysis - Mentskool",
      },
    ],
  },
};

const mockTestFaqs: FaqItem[] = [
  {
    question: "Why do my JEE mock test scores remain stuck at 110–130 marks despite studying 10 hours daily?",
    answer:
      "Because test-taking is a distinct skill from studying theory. Students who plateau usually suffer from two hidden leaks: 1) Negative marking bleeding (losing 20–30 marks from careless guesses and arithmetic slips); and 2) Poor time allocation (wasting 45 minutes on 4 difficult math problems instead of sweeping through easy Physics and Chemistry questions). Without question-level post-mortems, you repeat the exact same blunders test after test.",
  },
  {
    question: "What is the 3-Bucket Error Classification used by Mentskool mentors?",
    answer:
      "After every mock test, your IITian mentor classifies every lost mark into 3 buckets: Bucket A (Conceptual Gap - didn't know the principle or formula); Bucket B (Execution Slip - knew the concept but made a calculation, sign, or misread error); Bucket C (Strategic Panic - misallocated time or guessed under pressure). Over 70% of lost marks belong to Buckets B & C, which can be eliminated within 3 weeks of structured mentorship.",
  },
  {
    question: "What is the 3-Round Paper Attempting Strategy?",
    answer:
      "Round 1 (Minutes 0–60): Scan the entire paper and solve only guaranteed, direct 1-step questions across all 3 subjects (securing 70–80 marks without stress). Round 2 (Minutes 60–140): Attempt moderate 2-step problems with proven formulas. Round 3 (Minutes 140–180): Attempt remaining lengthy calculations, verify units, and review flagged questions. Never attempt questions in chronological order from Question 1 to 75.",
  },
  {
    question: "How long should mock test analysis take?",
    answer:
      "For a 3-hour JEE test, proper analysis takes approximately 2.5 to 3 hours. Merely checking the scorecard and reading answer keys for 15 minutes is not analysis. You must physically re-solve every missed or unattempted question on clean paper without looking at the solution first.",
  },
  {
    question: "How does my Mentskool mentor help during test post-mortems?",
    answer:
      "In your weekly 1:1 Google Meet call, you open your test portal and your actual test rough sheets. Your mentor examines where your calculations broke down, why you got trapped in specific questions, and gives you a targeted 3-day recovery assignment to patch identified weak concepts before the next test.",
  },
  {
    question: "How many full mock tests should I take before JEE Main Session 1?",
    answer:
      "Quality beats quantity. Taking 12 to 15 full-length 3-hour mocks with thorough question-by-question post-mortems produces dramatically higher ranks than mindlessly taking 40 tests with zero analysis. We recommend 2 full tests per week in the final 45 days.",
  },
];

export default function JeeMockTestAnalysisPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        name: "Mentskool Technologies",
        url: "https://mentskool.com",
        logo: "https://mentskool.com/logo.png",
        description:
          "India's premier 1-on-1 mentorship platform for JEE Main & Advanced test analysis with verified IIT rankers.",
      },
      {
        "@type": "HowTo",
        name: "How to Conduct a JEE Mock Test Post-Mortem",
        description:
          "The 3-Bucket error auditing methodology used by IIT Bombay toppers to stop negative marks and unlock 200+ marks.",
        step: [
          {
            "@type": "HowToStep",
            name: "Separate Errors into 3 Buckets",
            text: "Classify lost marks into Conceptual Gaps, Execution Slips, and Time Panic.",
          },
          {
            "@type": "HowToStep",
            name: "Log Entries into Physical Mistake Book",
            text: "Write question, error cause, and the correct short-cut technique into a dedicated spiral notebook.",
          },
          {
            "@type": "HowToStep",
            name: "Conduct Weekly 1:1 Rough Sheet Audit",
            text: "Review test rough sheets with your IITian mentor to streamline scratch paper layout and reduce arithmetic slips.",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: mockTestFaqs.map((faq) => ({
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
                label: "Mock Test Analysis",
                href: "/jee-mock-test-analysis",
              },
            ]}
          />

          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-xs font-semibold mb-4">
              <FileCheck2 className="w-3.5 h-3.5" />
              <span>The Proprietary Post-Mortem Methodology</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              JEE Mock Test Analysis: <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-sky-300 to-indigo-400">Unlock 200+ Marks with IITian Audits</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Taking test after test without deep analysis is like running on a treadmill: exhausting, but you never move forward. Partner 1-on-1 with an <strong>IIT Bombay or Delhi ranker</strong> who audits your rough sheets, dissects negative marks, and turns every mock into a 15-mark leap.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Audit Your Last Mock with an IITian</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/free-mentorship-session"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all"
              >
                Claim Free Mock Analysis Session
              </Link>
            </div>
          </div>

          {/* Direct Answer Box for AI Overviews & Search Snippets */}
          <section className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-brand-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-400 mb-3">
              <Sparkles className="w-4 h-4 text-brand-400" />
              <span>Executive Summary: How Mentskool Conducts JEE Mock Post-Mortems</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-5">
              The <strong>Mentskool Mock Test Post-Mortem System</strong> replaces passive scorecard checking with a forensic 3-stage breakdown:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" />
                <span><strong>The 3-Bucket Error Audit:</strong> Segregate lost marks into Conceptual Gaps (theory missing), Execution Slips (math/sign errors), and Strategic Panic (time trap questions).</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" />
                <span><strong>Rough Sheet Forensic Inspection:</strong> Your mentor checks scratch paper layout to eliminate calculation errors and illegible handwriting that cause misread answers.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" />
                <span><strong>The 3-Round Attempting Engine:</strong> Transition from linear question solving (Q1 to Q75) to a systematic 3-round scanning method to secure all easy marks first.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" />
                <span><strong>Living Mistake Book Protocol:</strong> Every error is converted into an actionable flashcard and re-tested during weekly 1-on-1 mentor video calls.</span>
              </div>
            </div>
          </section>

          {/* Section 1: The 3-Round Exam Attempting Strategy */}
          <section className="my-16 bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800 rounded-3xl p-8 sm:p-12">
            <div className="max-w-3xl mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                The 3-Round Strategy: How IITians Solve JEE Papers
              </h2>
              <p className="text-slate-300 text-sm mt-2">
                Never start at Question 1 and attempt linearly until Question 75. A high JEE rank depends on question selection, not solving every tough question.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Round 1: Rapid Sweeper (0–60 Mins)
                </div>
                <h3 className="text-lg font-bold text-white">Direct 1-Step Questions</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Scan the entire paper. Solve ONLY questions that can be answered in under 90 seconds (Inorganic trends, standard Modern Physics, direct Matrices). Secure 60–80 marks in hour one with zero anxiety.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-sky-500/20 text-sky-400 border border-sky-500/30">
                  Round 2: Calculated Attack (60–140 Mins)
                </div>
                <h3 className="text-lg font-bold text-white">2-Step Formula Problems</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Solve problems where you know the exact method but require 2.5 to 3.5 minutes of arithmetic (Calculus integrals, Kinematics projectile, Physical chemistry thermodynamics). If stuck for 90 seconds, flag and move on.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                  Round 3: High-Value Review (140–180 Mins)
                </div>
                <h3 className="text-lg font-bold text-white">Complex Questions &amp; Verification</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Attack 4–6 complex multi-concept questions. Conduct a 10-minute pass on unit conversions, decimal placements, and integer question bounds. Never guess blindly.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Score Progression Table */}
          <section className="my-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Score Progression: Random Practice vs Mentored Post-Mortem
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Real data from Mentskool students showing the jump from score stagnation to 99+ percentile.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl">
              <table className="w-full text-left text-xs sm:text-sm text-slate-300">
                <thead className="bg-slate-950/80 text-white font-bold uppercase text-[11px] tracking-wider border-b border-slate-800">
                  <tr>
                    <th className="py-4 px-4 sm:px-6">Test Milestone</th>
                    <th className="py-4 px-4 sm:px-6 text-rose-400">Without Post-Mortem (Self-Study)</th>
                    <th className="py-4 px-4 sm:px-6 text-emerald-400">With Mentskool IITian Mentorship</th>
                    <th className="py-4 px-4 sm:px-6 text-sky-400">Primary Transformation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white">Test 1–3 (Baseline)</td>
                    <td className="py-4 px-4 sm:px-6">115 Marks (-24 Negative)</td>
                    <td className="py-4 px-4 sm:px-6">118 Marks (-22 Negative)</td>
                    <td className="py-4 px-4 sm:px-6">Initial rough-sheet audit and mistake taxonomy setup.</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white">Test 4–7 (Weeks 3–4)</td>
                    <td className="py-4 px-4 sm:px-6">122 Marks (-26 Negative)</td>
                    <td className="py-4 px-4 sm:px-6 text-emerald-300 font-bold">154 Marks (-10 Negative)</td>
                    <td className="py-4 px-4 sm:px-6">Enforcement of 3-Round strategy; 14 negative marks eliminated.</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white">Test 8–12 (Weeks 6–8)</td>
                    <td className="py-4 px-4 sm:px-6">128 Marks (-22 Negative)</td>
                    <td className="py-4 px-4 sm:px-6 text-emerald-300 font-bold">188 Marks (-6 Negative)</td>
                    <td className="py-4 px-4 sm:px-6">Mastery of high-yield chapters and mistake book re-testing.</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white">Final Exam (NTA Session 1)</td>
                    <td className="py-4 px-4 sm:px-6 text-rose-300 font-bold">132 Marks (93.4 Percentile)</td>
                    <td className="py-4 px-4 sm:px-6 text-emerald-400 font-bold">206 Marks (99.2 Percentile)</td>
                    <td className="py-4 px-4 sm:px-6">Flawless time management and peak cognitive confidence.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ Accordion */}
          <section className="mt-16">
            <SeoFaqAccordion
              faqs={mockTestFaqs}
              title="Frequently Asked Questions: JEE Mock Test Analysis"
              subtitle="Everything you need to know about post-mortems, mistake books, and 1:1 error auditing."
            />
          </section>

          {/* CTA Banner */}
          <section className="mt-16">
            <SeoCtaBanner
              title="Stop Bleeding Marks in Every Mock Test"
              description="Get paired 1-on-1 with an IITian who will inspect your test rough sheets, eliminate negative marks, and guide your strategy every week."
              primaryButtonText="Find Your Test Strategy Mentor"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
