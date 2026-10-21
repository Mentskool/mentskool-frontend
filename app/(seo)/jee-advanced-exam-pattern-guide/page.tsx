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
  Compass,
  Cpu,
  Layers,
  Award,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { SeoMentorFunnel } from "@/components/seo/SeoMentorFunnel";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "JEE Advanced Exam Pattern Guide: Partial Marking, Multi-Correct & Paper Secrets",
  description:
    "Master the unpredictable JEE Advanced exam pattern. Detailed guide to Paper 1 and Paper 2 structure, multi-correct partial marking rules, subject cutoffs, matrix match, and 6-hour stamina strategy.",
  keywords: [
    "jee advanced exam pattern",
    "jee advanced marking scheme",
    "jee advanced partial marking rules",
    "jee advanced multi correct strategy",
    "jee advanced paper 1 and paper 2 timings",
    "jee advanced subject cutoff",
    "iit jee question types explained",
  ],
  alternates: {
    canonical: "https://mentskool.com/jee-advanced-exam-pattern-guide",
  },
  openGraph: {
    title: "JEE Advanced Exam Pattern Deconstructed: Marking Schemes & Strategies",
    description:
      "Crack the unpredictable nature of JEE Advanced. Complete analysis of partial marking, negative penalty matrices, subject-wise qualifying criteria, and test-taking stamina.",
    url: "https://mentskool.com/jee-advanced-exam-pattern-guide",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "JEE Advanced Exam Pattern - Mentskool",
      },
    ],
  },
};

const faqs: FaqItem[] = [
  {
    question: "Why is the JEE Advanced exam pattern not fixed or announced beforehand?",
    answer:
      "Unlike JEE Main, the organizing IIT intentionally does not reveal the total number of questions, total marks, or exact question types in advance. This deliberate design evaluates an aspirant's mental adaptability, temperament under uncertainty, and conceptual mastery rather than rote formula pattern-matching.",
  },
  {
    question: "How does partial marking work in multi-correct questions in JEE Advanced?",
    answer:
      "For a question where options A, B, and D are correct: If you mark all three (A, B, D), you get +4 marks. If you mark only two correct options (e.g., A and B) and no incorrect option, you get +2 marks. If you mark only one correct option (e.g., A) and no incorrect option, you get +1 mark. However, if you mark even a single incorrect option (e.g., C), you receive a -2 penalty regardless of how many correct options you chose.",
  },
  {
    question: "Is it mandatory to appear for both Paper 1 and Paper 2?",
    answer:
      "Yes, absolutely. JEE Advanced consists of Paper 1 (9:00 AM – 12:00 PM) and Paper 2 (2:30 PM – 5:30 PM) on the same day. Both papers are compulsory. If a candidate appears for Paper 1 but misses Paper 2, their candidature is cancelled and no rank will be calculated.",
  },
  {
    question: "What is the subject-wise cutoff requirement in JEE Advanced?",
    answer:
      "To be included in the Common Rank List (CRL), a candidate must score above a minimum qualifying percentage in each subject individually (typically around 6% to 10% per subject: Physics, Chemistry, and Mathematics) as well as meet an overall aggregate qualifying percentage (typically 20% to 30% of total marks).",
  },
  {
    question: "What types of questions appear in JEE Advanced?",
    answer:
      "JEE Advanced features diverse question formats: 1) Single correct MCQs, 2) One or more than one correct MCQs (with partial marking), 3) Non-negative numerical values with decimal inputs, 4) Matrix Match / Match the Column, 5) STEM-based Paragraph / Comprehension questions, and 6) List Matching.",
  },
  {
    question: "How should an aspirant manage the 2.5-hour break between Paper 1 and Paper 2?",
    answer:
      "The 2.5-hour break between 12:00 PM and 2:30 PM is crucial. Top rankers strictly avoid discussing Paper 1 questions or checking answer keys. Consume a light, easily digestible meal with electrolytes, rest in a cool, quiet spot, and hydrate to ensure peak cognitive focus for the strenuous 3-hour Paper 2.",
  },
];

export default function JeeAdvancedExamPatternGuidePage() {
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
        headline: "JEE Advanced Exam Pattern Guide: Partial Marking, Multi-Correct & Paper Secrets",
        description:
          "Definitive strategic guide to the JEE Advanced pattern, partial marking dynamics, multi-correct scoring math, and psychological resilience for IIT aspirants.",
        url: "https://mentskool.com/jee-advanced-exam-pattern-guide",
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
                label: "JEE Advanced Exam Pattern Guide",
                href: "/jee-advanced-exam-pattern-guide",
              },
            ]}
          />

          {/* Hero Section */}
          <header className="mt-8 mb-12 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <ShieldCheck className="w-4 h-4" />
              IIT JEE Advanced Strategic Masterclass
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight">
              JEE Advanced Exam Pattern:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-indigo-300 to-cyan-400">
                Partial Marking, Multi-Correct & Paper Secrets
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
              JEE Advanced is not a speed test; it is an intellectual marathon designed to test analytical depth under uncertainty. With shifting question types, brutal -2 penalties in multi-correct sections, and mandatory dual 3-hour papers, mastering the mechanics of the pattern is as critical as mastering the syllabus.
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
                  Key Realities of the JEE Advanced Structure
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  JEE Advanced comprises two mandatory computer-based papers: <strong className="text-white">Paper 1 (9:00 AM – 12:00 PM)</strong> and <strong className="text-white">Paper 2 (2:30 PM – 5:30 PM)</strong>. Total marks typically fluctuate between <strong className="text-brand-300">360 and 396 marks</strong> (180 to 198 marks per paper). Crucially, you must clear both a <strong className="text-white">subject-wise minimum cutoff (~6-10%)</strong> in Physics, Chemistry, and Mathematics and an <strong className="text-white">overall aggregate cutoff (~20-25%)</strong> to qualify for an IIT seat.
                </p>
              </div>
            </div>
          </section>

          {/* Section 1: Question Formats Breakdown */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Layers className="w-7 h-7 text-brand-400" />
              The 6 Recurring Question Archetypes in JEE Advanced
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                <div className="text-brand-400 font-bold text-lg">1. Multi-Correct (One or More than One Option)</div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  The most influential section in the paper. Usually +4 for all correct choices, partial marking (+3, +2, +1) for subsets of correct choices, and a severe <strong>-2 penalty</strong> for marking any incorrect option. If unsure about the third option, leaving it yields partial marks (+2) rather than a devastating -2.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                <div className="text-cyan-400 font-bold text-lg">2. Numerical Value Questions (Decimal / Integer)</div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Candidates input a numerical value truncated or rounded to two decimal places (e.g., 5.25) using an on-screen virtual keypad. In recent years, these questions often carry zero negative marking (+3 or +4 for correct, 0 for incorrect), making them high-priority opportunities.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                <div className="text-teal-400 font-bold text-lg">3. Non-Negative Single Digit Integers (0 to 9)</div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  A classic IIT favorite. Answers are strictly integers from 0 through 9. Often carries +3 for correct answers and -1 or 0 for incorrect answers. Requires exact algebraic cancellation and rigorous attention to domain constraints.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                <div className="text-indigo-400 font-bold text-lg">4. Match the Column / Matrix Match</div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Lists Column I entries (e.g., physical setups or reactions) with Column II characteristics. May be structured as single-match options (MCQ format) or multi-match matrices where one item in Column I matches multiple entries in Column II.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: The Partial Marking Master Table */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Cpu className="w-7 h-7 text-brand-400" />
              The Multi-Correct Partial Marking Matrix Decoded
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Suppose a multi-correct question has correct options <strong className="text-white">(A), (C), and (D)</strong>. Here is exactly how different candidate responses are scored:
            </p>

            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/60 my-6">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-800/80 text-slate-200 border-b border-slate-700 font-semibold">
                  <tr>
                    <th className="p-4">Candidate Marked Options</th>
                    <th className="p-4">Evaluation Verdict</th>
                    <th className="p-4">Marks Awarded</th>
                    <th className="p-4">Strategic Takeaway</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-emerald-400">A, C, D</td>
                    <td className="p-4 text-emerald-300">All Correct Options Chosen</td>
                    <td className="p-4 font-bold text-emerald-400">+4 Marks</td>
                    <td className="p-4 text-xs text-slate-400">Maximum score achieved.</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-cyan-400">A, C (or C, D or A, D)</td>
                    <td className="p-4 text-cyan-300">Two Correct, No Incorrect</td>
                    <td className="p-4 font-bold text-cyan-400">+2 Marks</td>
                    <td className="p-4 text-xs text-slate-400">Safe play; bank +2 instead of risking -2 on D.</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-blue-400">A only (or C only or D only)</td>
                    <td className="p-4 text-blue-300">One Correct, No Incorrect</td>
                    <td className="p-4 font-bold text-blue-400">+1 Mark</td>
                    <td className="p-4 text-xs text-slate-400">Preserves positive score when other options are uncertain.</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-red-400">A, C, B</td>
                    <td className="p-4 text-red-300">Includes Incorrect Option (B)</td>
                    <td className="p-4 font-bold text-red-400">-2 Marks</td>
                    <td className="p-4 text-xs text-slate-400">Catastrophic 6-mark swing compared to marking only A and C!</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-slate-400">None Marked (Left Blank)</td>
                    <td className="p-4 text-slate-300">Unattempted</td>
                    <td className="p-4 font-bold text-slate-300">0 Marks</td>
                    <td className="p-4 text-xs text-slate-400">Infinitely superior to receiving -2.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3: Subject-Wise Cutoff Shielding */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <ShieldCheck className="w-7 h-7 text-brand-400" />
              The Subject-Wise Cutoff Trap: How To Safeguard Your IIT Dream
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Every year, hundreds of students score aggregate marks high enough for an IIT seat (e.g., 140+ marks out of 360) but are disqualified because their score in one subject falls below the minimum qualifying threshold (often just 6 to 9 marks out of 120 in Mathematics or Chemistry).
            </p>
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-4">
              <h3 className="text-base font-bold text-white">The Three-Step Cutoff Defense Protocol:</h3>
              <ul className="text-sm text-slate-300 space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-400 mt-0.5 shrink-0" />
                  <span><strong>Identify &quot;Gimme&quot; Questions First:</strong> In your weakest subject, locate 3 to 4 accessible, straightforward questions in the first 20 minutes to cross the cutoff safely before pursuing challenging problems.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-400 mt-0.5 shrink-0" />
                  <span><strong>Audit Both Papers Separately:</strong> Subject cutoffs apply to the combined marks of Paper 1 and Paper 2. If Paper 1 in Mathematics felt devastating, double down on high-confidence questions in Paper 2 to bridge the required gap.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-400 mt-0.5 shrink-0" />
                  <span><strong>Avoid Aggressive Guessing in Weak Subjects:</strong> One erroneous guess (-2) can push you below the qualifying subject mark. Exercise rigorous conservative discipline in your vulnerable subject.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Dedicated High-Converting Mentorship Funnel */}
          <SeoMentorFunnel
            examFocus="JEE"
            title="Prepare for JEE Advanced With Top 500 IITian Mentors"
            subtitle="Master multi-correct partial marking tactics, build 6-hour endurance, and ensure zero subject cutoff failures with weekly 1-on-1 strategy sessions from IIT Bombay and Delhi rankers."
          />

          {/* Section 4: FAQ Accordion */}
          <section className="my-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center justify-center gap-3">
                <HelpCircle className="w-7 h-7 text-brand-400" />
                Frequently Asked Questions: JEE Advanced Pattern
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Expert answers regarding marking nuances, subject criteria, and test-day protocols for IIT JEE Advanced.
              </p>
            </div>
            <SeoFaqAccordion items={faqs} />
          </section>

          {/* Final Call to Action */}
          <SeoCtaBanner
            title="Secure Your Seat in a Premier IIT"
            subtitle="Connect with IITian mentors who have walked this exact path. Get advanced problem-solving roadmaps, partial marking masterclasses, and targeted mock test audits."
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
