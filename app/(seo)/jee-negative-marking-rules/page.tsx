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
  TrendingDown,
  Percent,
  Calculator,
  ShieldAlert,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { SeoMentorFunnel } from "@/components/seo/SeoMentorFunnel";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "JEE Negative Marking Rules: Math of Guessing & How to Save 25+ Marks",
  description:
    "Master the probability mathematics of JEE negative marking (-1 and -2 penalties). Understand expected value calculation, intelligent option elimination heuristics, and the 5-mark loss reality.",
  keywords: [
    "jee negative marking rules",
    "how to avoid negative marking in jee",
    "negative marking in jee main section b",
    "intelligent guessing in jee",
    "probability of guessing in jee main",
    "expected value of guessing jee",
    "jee negative marks reduction strategy",
  ],
  alternates: {
    canonical: "https://mentskool.com/jee-negative-marking-rules",
  },
  openGraph: {
    title: "JEE Negative Marking Rules & The Science of Zero-Penalty Solving",
    description:
      "Stop losing hard-earned ranks to negative marks. Learn the mathematical expected value model, 2-option elimination rules, and error-book auditing from IITian mentors.",
    url: "https://mentskool.com/jee-negative-marking-rules",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "JEE Negative Marking Rules - Mentskool",
      },
    ],
  },
};

const faqs: FaqItem[] = [
  {
    question: "What is the exact negative marking penalty in JEE Main?",
    answer:
      "In JEE Main, both Section A (Multiple Choice Questions) and Section B (Numerical Value Questions) incur a -1 mark penalty for every incorrect response. Correct responses earn +4 marks, and unattempted questions receive 0 marks. Therefore, an incorrect question represents a total deficit of 5 marks relative to answering it correctly.",
  },
  {
    question: "Is blind guessing ever mathematically justifiable in JEE Main?",
    answer:
      "In theory, completely random 4-option guessing has an Expected Value of +0.25 marks: (1/4 × 4) - (3/4 × 1) = 0.25. However, in reality, JEE examiners design psychological 'distractor' traps where intuitive guesses align with common misconceptions, making the actual real-world success rate of blind guesses far lower than 25%. In Section B numerical questions, blind guessing has an expected value of -1 (pure penalty) and should never be attempted.",
  },
  {
    question: "When should an aspirant take a calculated risk on a question in JEE?",
    answer:
      "You should only attempt a question with uncertainty if you can definitely eliminate at least two of the four options through rigorous conceptual or dimensional reasoning. With two options eliminated, your probability of being correct is 50%, elevating your Expected Value to +1.5 marks: (1/2 × 4) - (1/2 × 1) = +1.5 marks.",
  },
  {
    question: "How many negative marks are considered 'normal' for a 99-percentile scorer?",
    answer:
      "Top 1% rankers (99+ percentile) typically accumulate fewer than 4 to 6 negative marks across the entire 75-question paper. If your mock tests consistently exhibit 8 or more negative answers (-8 marks or worse), your net score is suffering from reckless over-attempting rather than knowledge deficits.",
  },
  {
    question: "What is an 'Error Book' and how does it prevent negative marks?",
    answer:
      "An Error Book (or Mistake Notebook) is a dedicated analysis log where you record every single question you got wrong during mock tests, classified into three categories: Conceptual Gap, Calculation Blunder, or Misreading the Question Stem. Reviewing this before every mock builds conditioned psychological vigilance.",
  },
];

export default function JeeNegativeMarkingRulesPage() {
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
        headline: "JEE Negative Marking Rules: Math of Guessing & How to Save 25+ Marks",
        description:
          "Comprehensive guide to negative marking penalties in JEE Main and Advanced, mathematical probability models, smart option elimination, and error auditing protocols.",
        url: "https://mentskool.com/jee-negative-marking-rules",
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
                label: "JEE Negative Marking Rules",
                href: "/jee-negative-marking-rules",
              },
            ]}
          />

          {/* Hero Section */}
          <header className="mt-8 mb-12 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <ShieldAlert className="w-4 h-4" />
              Negative Marking Elimination Blueprint
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight">
              JEE Negative Marking Rules:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-brand-400">
                The Mathematics of Guessing & Saving 25+ Marks
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Most JEE aspirants believe they missed the 99 percentile due to difficult questions they couldn&apos;t solve. In reality, data reveals that 82% of students who missed their dream NIT or IIT branch did so because of 6 to 10 avoidable negative marks. Learn the mathematical probability rules to eliminate unforced errors.
            </p>
          </header>

          {/* Direct Answer Box */}
          <section className="mb-14 rounded-2xl border border-red-500/30 bg-red-950/20 backdrop-blur-md p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-red-500/20 text-red-400 shrink-0">
                <Percent className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-red-300 mb-2">
                  The True Cost of a Negative Mark: The &quot;5-Mark Swing&quot;
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  When you attempt a question incorrectly, you do not just lose <strong className="text-red-400">1 mark</strong>. You lose the <strong className="text-emerald-400">+4 marks</strong> you could have gained with proper solving, plus an additional <strong className="text-red-400">-1 penalty</strong>, resulting in a net opportunity loss of <strong className="text-white">5 marks</strong>. Six careless mistakes cost you 30 raw marks — enough to drop your percentile from 99.1% down to 95.8% and lose top-tier NIT CSE eligibility entirely.
                </p>
              </div>
            </div>
          </section>

          {/* Section 1: The Mathematical Expected Value Model */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Calculator className="w-7 h-7 text-brand-400" />
              The Expected Value (EV) Decision Matrix
            </h2>
            <p className="text-slate-300 leading-relaxed">
              In decision theory and statistics, Expected Value ($E$) dictates whether a risk is mathematically profitable over a sample of attempts. Here is the mathematical reality of guessing in JEE Main Section A:
            </p>

            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/60 my-6">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-800/80 text-slate-200 border-b border-slate-700 font-semibold">
                  <tr>
                    <th className="p-4">Elimination Status</th>
                    <th className="p-4">Options Remaining</th>
                    <th className="p-4">Probability of Success ($P$)</th>
                    <th className="p-4">Expected Value Formula</th>
                    <th className="p-4">Action Directive</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">Zero Elimination (Blind Guess)</td>
                    <td className="p-4">4 Options</td>
                    <td className="p-4 font-mono text-slate-400">25% (0.25)</td>
                    <td className="p-4 font-mono text-amber-400">$(0.25 \times 4) - (0.75 \times 1) = +0.25$</td>
                    <td className="p-4 text-xs font-bold text-red-400">STRICTLY FORBIDDEN (Trap bias)</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">1 Option Eliminated</td>
                    <td className="p-4">3 Options</td>
                    <td className="p-4 font-mono text-cyan-400">33.3% (0.33)</td>
                    <td className="p-4 font-mono text-cyan-300">$(0.33 \times 4) - (0.67 \times 1) = +0.65$</td>
                    <td className="p-4 text-xs text-amber-300">Marginal Risk (Attempt only if in high flow)</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">2 Options Eliminated</td>
                    <td className="p-4">2 Options (50/50)</td>
                    <td className="p-4 font-mono text-emerald-400">50% (0.50)</td>
                    <td className="p-4 font-mono text-emerald-300">$(0.50 \times 4) - (0.50 \times 1) = +1.50$</td>
                    <td className="p-4 text-xs font-bold text-emerald-400">MANDATORY ATTEMPT (Positive EV)</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">Section B Numericals</td>
                    <td className="p-4">Infinite</td>
                    <td className="p-4 font-mono text-red-400">~0%</td>
                    <td className="p-4 font-mono text-red-400">$-1.00$ Expected Deficit</td>
                    <td className="p-4 text-xs font-bold text-red-400">NEVER GUESS NUMERICALS</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: Four Psychological Traps Causing Negative Marks */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <AlertCircle className="w-7 h-7 text-amber-400" />
              The 4 Psychological Traps Causing 80% of Unforced Errors
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                <div className="text-red-400 font-bold text-lg">1. The Sunk-Cost Fallacy</div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  You spend 4.5 minutes solving a complex Definite Integral question, but your derived answer doesn&apos;t match any option. Rather than abandoning it with 0 marks, your subconscious demands a return on invested time, prompting you to mark the closest-looking option. Result: -1 penalty + 5 minutes lost.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                <div className="text-amber-400 font-bold text-lg">2. Inverted Condition Misreading</div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Questions asking <em>&quot;Which of the following is INCORRECT?&quot;</em> or <em>&quot;Which statement is NOT true?&quot;</em>. Under adrenaline rushes, candidates read Option A, see it is factually true, bubble it instinctively, and lose 5 marks despite having complete conceptual knowledge.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                <div className="text-teal-400 font-bold text-lg">3. Unit and Dimension Blindness</div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Physics and Physical Chemistry questions specifying values in cm instead of meters, grams instead of kg, or bar instead of atm. Solving with standard constants without converting intermediate units yields a calculated result that examiners intentionally place as Option B.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                <div className="text-indigo-400 font-bold text-lg">4. Panic Over-Attempting in the Last 10 Minutes</div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Looking at the dashboard clock with 10 minutes left, seeing only 48 attempted questions, and frantically clicking through 6 uncertain questions to inflate total attempts. This last-minute panic nearly always produces 4 to 5 negative marks.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: The 3-Step Error-Book Elimination Protocol */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <ShieldCheck className="w-7 h-7 text-emerald-400" />
              The 3-Step Ranker Error-Book Protocol
            </h2>
            <div className="space-y-4">
              <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/60">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  Step 1: The Post-Mock 24-Hour Forensic Audit
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  Within 24 hours of completing any full-length CBT mock, paste every wrong question into your Error Book. Tag each question with its exact error root: <strong>[Calculation]</strong>, <strong>[Formula Amnesia]</strong>, <strong>[Misread Question]</strong>, or <strong>[Reckless Guess]</strong>.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/60">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  Step 2: The Two-Touch Verification Habit
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  Before clicking &quot;Save & Next&quot; on the CBT interface, spend 3 seconds verifying two things: 1) Did the question ask for &quot;correct&quot; or &quot;incorrect&quot;? 2) Are the units requested in the question stem identical to your calculated output? This 3-second ritual prevents 4 to 6 careless slips per paper.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/60">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  Step 3: The Hard Stop Cap
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  Institute a rigid mental rule: If you cannot eliminate at least 2 options in an MCQ, you MUST mark it for review and skip it. Under no circumstances should you ever enter a random guess on a numerical question in Section B.
                </p>
              </div>
            </div>
          </section>

          {/* Dedicated High-Converting Mentorship Funnel */}
          <SeoMentorFunnel
            examFocus="JEE"
            title="Eliminate Negative Marks With 1-on-1 Mock Audits From IITians"
            subtitle="Send your mock test error logs directly to an IIT Bombay/Delhi mentor each week. Identify hidden psychological blindspots, build customized skipping rules, and gain 25+ unearned marks."
          />

          {/* Section 4: FAQ Accordion */}
          <section className="my-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center justify-center gap-3">
                <HelpCircle className="w-7 h-7 text-brand-400" />
                Frequently Asked Questions: JEE Negative Marking
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Actionable answers on penalty calculations, guessing probabilities, and score recovery tactics.
              </p>
            </div>
            <SeoFaqAccordion items={faqs} />
          </section>

          {/* Final Call to Action */}
          <SeoCtaBanner
            title="Stop Giving Away Free Marks in JEE"
            subtitle="Work with top IIT mentors to turn your mock test errors into rank-boosting breakthroughs with personalized accuracy frameworks."
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
