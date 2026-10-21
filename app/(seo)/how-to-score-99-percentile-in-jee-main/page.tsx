import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  AlertCircle,
  CheckCircle2,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  TrendingUp,
  Layers,
  Calculator,
  Compass,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { SeoMentorFunnel } from "@/components/seo/SeoMentorFunnel";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "How to Score 99+ Percentile in JEE Main: The 185+ Marks Subject-Wise Framework",
  description:
    "Master the definitive 185+ marks framework to score 99+ percentile in JEE Main. Subject-wise target distribution (75P + 78C + 45M), 3-round test-taking strategy, and unforced error cap protocols from IIT rankers.",
  keywords: [
    "how to score 99 percentile in jee main",
    "180 marks in jee main",
    "strategy for 99 percentile",
    "subject wise marks for 99 percentile in jee",
    "jee main 3 round paper solving strategy",
    "how many marks for 99 percentile in jee main",
    "jee main ranker study plan",
  ],
  alternates: {
    canonical: "https://mentskool.com/how-to-score-99-percentile-in-jee-main",
  },
  openGraph: {
    title: "How to Score 99+ Percentile in JEE Main: The 185+ Marks Framework",
    description:
      "Unlock the top 1% rank in JEE Main. Discover the exact subject-wise score formula (75P + 78C + 45M) and 3-round execution protocol used by IITian mentors.",
    url: "https://mentskool.com/how-to-score-99-percentile-in-jee-main",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Score 99 Percentile JEE Main - Mentskool",
      },
    ],
  },
};

const faqs: FaqItem[] = [
  {
    question: "What exact raw score is required to achieve a 99 percentile in JEE Main?",
    answer:
      "On a balanced, moderate shift, a raw score of 182 to 195 marks reliably secures a 99 percentile (top ~14,000 All India Rank). On exceptionally demanding shifts with tough Mathematics, the threshold can drop to 165–172 marks; on very straightforward shifts, it can rise to 215–225 marks. A target of 190 marks offers a safe buffer across most testing conditions.",
  },
  {
    question: "What is the optimal subject-wise score breakdown for a 190-mark target?",
    answer:
      "The highest-probability, lowest-stress breakdown is: Chemistry: 75 to 80 marks (completed in 40 minutes); Physics: 70 to 75 marks (completed in 50 minutes); and Mathematics: 42 to 48 marks (completed in 75 minutes). This leverages the relatively accessible scoring curves of Chemistry and Physics while taking a strategic, high-accuracy approach to challenging Mathematics questions.",
  },
  {
    question: "How many questions should an aspirant attempt in total for a 99 percentile?",
    answer:
      "Attempting 52 to 56 questions (out of 75 total) with high accuracy (fewer than 4 unforced errors) is sufficient: 52 attempts × 4 = 208 marks − 4 errors = 188 net marks, placing you comfortably in the 99th percentile.",
  },
  {
    question: "What is the '3-Round Paper Solving Protocol' for the 180-minute CBT exam?",
    answer:
      "Round 1 (First 50 minutes): Complete all direct formula questions and NCERT-recall problems across Chemistry and Physics. Round 2 (Minutes 50 to 140): Solve moderate single-step calculation problems and accessible Mathematics questions (Vectors, 3D, Matrices). Round 3 (Final 40 minutes): Tackle selected challenging problems, verify decimal entries in Section B, and ensure zero unforced errors.",
  },
  {
    question: "Why do many students who score 220+ in mock tests drop to 96 percentile in the real exam?",
    answer:
      "This drop typically happens because of test-day anxiety, clock-watching panic, and attempting too many uncertain questions in the final 15 minutes. Uncontrolled guessing can quickly turn an otherwise solid 190-mark attempt into 145 marks through accumulated negative penalties.",
  },
];

export default function HowToScore99PercentileInJeeMainPage() {
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
        headline: "How to Score 99+ Percentile in JEE Main: The 185+ Marks Subject-Wise Framework",
        description:
          "Authoritative strategic blueprint for securing a 99+ percentile in JEE Main, subject target allocation, and 3-round test execution protocols.",
        url: "https://mentskool.com/how-to-score-99-percentile-in-jee-main",
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
                label: "How to Score 99 Percentile",
                href: "/how-to-score-99-percentile-in-jee-main",
              },
            ]}
          />

          {/* Hero Section */}
          <header className="mt-8 mb-12 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <Award className="w-4 h-4" />
              The 99th Percentile Masterclass
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight">
              How to Score 99+ Percentile in JEE Main:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-indigo-300 to-cyan-400">
                The 185+ Marks Framework &amp; Execution Protocol
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Securing a 99 percentile in JEE Main does not require attempting all 75 questions or solving the most complex calculus problems. It requires a balanced subject-wise score distribution, disciplined question selection, and steady test-day execution.
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
                  The Winning Score Formula: 78C + 74P + 46M = 198 Marks
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Attempting to score equally across all three subjects is a common tactical error. The highest-ROI path to 99+ percentile is: <strong className="text-cyan-300">Chemistry (78 Marks in 40 mins)</strong> + <strong className="text-white">Physics (74 Marks in 50 mins)</strong> + <strong className="text-brand-300">Mathematics (46 Marks in 75 mins)</strong>. This target of ~195 marks provides a comfortable buffer above the typical 99-percentile cutoff across shifts.
                </p>
              </div>
            </div>
          </section>

          {/* Section 1: Subject-Wise Execution Architecture */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Layers className="w-7 h-7 text-brand-400" />
              Subject-Wise Breakdown: Questions, Time &amp; Accuracy Targets
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-cyan-400">1. Chemistry</h3>
                  <span className="text-xs font-mono text-cyan-300">40 Minutes</span>
                </div>
                <div className="text-2xl font-black text-white font-mono">75 - 80 Marks</div>
                <ul className="text-xs text-slate-300 space-y-1.5 pt-1">
                  <li><strong>Target Attempts:</strong> 21 to 22 questions.</li>
                  <li><strong>Strategy:</strong> Complete Inorganic recall in 12 mins, Organic mechanisms in 15 mins, and 5 Physical Chemistry numericals in Section B in 13 mins.</li>
                  <li><strong>Permissible Errors:</strong> Max 1 error.</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">2. Physics</h3>
                  <span className="text-xs font-mono text-slate-300">50 Minutes</span>
                </div>
                <div className="text-2xl font-black text-brand-300 font-mono">70 - 75 Marks</div>
                <ul className="text-xs text-slate-300 space-y-1.5 pt-1">
                  <li><strong>Target Attempts:</strong> 19 to 20 questions.</li>
                  <li><strong>Strategy:</strong> Prioritize Modern Physics, Current Electricity, and Thermodynamics first. Apply dimensional analysis and limiting-case checks.</li>
                  <li><strong>Permissible Errors:</strong> Max 1 to 2 errors.</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-indigo-400">3. Mathematics</h3>
                  <span className="text-xs font-mono text-indigo-300">75 Minutes</span>
                </div>
                <div className="text-2xl font-black text-indigo-300 font-mono">42 - 48 Marks</div>
                <ul className="text-xs text-slate-300 space-y-1.5 pt-1">
                  <li><strong>Target Attempts:</strong> 12 to 14 questions.</li>
                  <li><strong>Strategy:</strong> Focus on Vectors &amp; 3D (4 Qs), Matrices &amp; Determinants (2 Qs), and Definite Integrals. Avoid multi-page calculations.</li>
                  <li><strong>Permissible Errors:</strong> Zero or 1 error.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2: The 3-Round Execution Strategy */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Compass className="w-7 h-7 text-brand-400" />
              The 3-Round Paper Solving Protocol (180 Minutes Total)
            </h2>
            <div className="space-y-4">
              <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/60">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  Round 1 (Minutes 0 to 50): Direct Formula &amp; Memory Sweeping
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  Start with Chemistry Section A. Answer all direct NCERT questions. Move into Physics Section A and solve all single-step formula problems (Modern Physics, Heat). Mark 24 to 28 high-confidence answers and secure ~100 marks within the first 50 minutes.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/60">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  Round 2 (Minutes 50 to 145): Multi-Step Calculations &amp; Mathematics Core
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  Switch to Mathematics. Locate your strongest chapters (Vectors, 3D, Matrices) and complete 10 to 12 questions with clean scratchpad arithmetic. Return to Physics and Chemistry Section B to complete the numerical questions. Total attempts reach 48–52.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/60">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  Round 3 (Minutes 145 to 180): Review, Decimal Verification &amp; Error Avoidance
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  Review questions flagged for review. Verify that Section B numericals are rounded to the required precision. Resist the urge to enter random guesses on uncertain questions in the final 10 minutes.
                </p>
              </div>
            </div>
          </section>

          {/* Dedicated High-Converting Mentorship Funnel */}
          <SeoMentorFunnel
            examFocus="JEE"
            title="Calibrate Your 99-Percentile Strategy With Top IITians"
            subtitle="Work with IIT Bombay and Delhi mentors who scored 99.8+ percentile. Learn how to refine your paper-solving order, manage test time, and eliminate negative marks in weekly 1-on-1 strategy sessions."
          />

          {/* Section 3: FAQ Accordion */}
          <section className="my-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center justify-center gap-3">
                <HelpCircle className="w-7 h-7 text-brand-400" />
                Frequently Asked Questions: 99 Percentile Strategy
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Detailed advice on score targets, time management, and mock test execution.
              </p>
            </div>
            <SeoFaqAccordion items={faqs} />
          </section>

          {/* Final Call to Action */}
          <SeoCtaBanner
            title="Secure Your 99+ Percentile in JEE Main"
            subtitle="Connect with experienced IIT mentors who will assess your current mock performance and build an achievable roadmap to your target score."
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
