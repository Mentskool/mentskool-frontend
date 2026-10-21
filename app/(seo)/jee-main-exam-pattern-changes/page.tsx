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
  Calculator,
  Flame,
  Award,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { SeoMentorFunnel } from "@/components/seo/SeoMentorFunnel";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "JEE Main Exam Pattern Changes: Section B Compulsory Numericals & Marking Rules",
  description:
    "Authoritative analysis of NTA's permanent JEE Main exam pattern changes. The discontinuation of optional questions in Section B, 75 compulsory questions, negative marking penalty math, and time allocation strategy.",
  keywords: [
    "jee main exam pattern changes",
    "jee main section b optional questions removed",
    "jee main marking scheme",
    "jee main compulsory numerical questions",
    "jee main 75 questions total marks",
    "negative marking in jee main section b",
    "nta latest notification jee pattern",
  ],
  alternates: {
    canonical: "https://mentskool.com/jee-main-exam-pattern-changes",
  },
  openGraph: {
    title: "JEE Main Exam Pattern Changes: Section B Optional Choices Discontinued",
    description:
      "Deep dive into the NTA circular discontinuing Section B optional questions. Learn how the 75 compulsory question framework impacts cutoffs, accuracy, and test strategy.",
    url: "https://mentskool.com/jee-main-exam-pattern-changes",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "JEE Main Exam Pattern Changes - Mentskool",
      },
    ],
  },
};

const faqs: FaqItem[] = [
  {
    question: "Why did NTA discontinue the optional questions in Section B of JEE Main?",
    answer:
      "The optional question structure (attempt any 5 out of 10 numericals) was introduced in 2021 as a temporary relief measure during the COVID-19 pandemic to accommodate differential syllabus reductions across various state boards. With academic sessions completely stabilized nationwide, NTA permanently reverted to the original, rigorous structure where all 5 numericals are compulsory.",
  },
  {
    question: "Are all 75 questions compulsory in JEE Main now?",
    answer:
      "Yes. The question paper consists of exactly 75 questions (25 Physics, 25 Chemistry, 25 Mathematics). Each subject has 20 Multiple Choice Questions (Section A) and 5 Numerical Value Questions (Section B). There are zero internal or optional choices in either section.",
  },
  {
    question: "Is there negative marking in Section B numerical value questions?",
    answer:
      "Yes. For every incorrect response in Section B, exactly -1 mark is deducted. A correct numerical response yields +4 marks, while unattempted questions receive 0 marks. Guessing in Section B carries identical penalties to Section A MCQs.",
  },
  {
    question: "How does the removal of Section B options affect the cutoff and percentiles?",
    answer:
      "When aspirants had 10 choices, they cherry-picked high-comfort topics (e.g., opting for Matrices instead of Complex Numbers). With all 5 numericals compulsory, chapter-skipping is heavily penalized. Historical trends demonstrate that average raw scores drop by 8 to 15 marks across shifts under compulsory numericals, meaning a lower raw score is now required to attain a 99 percentile.",
  },
  {
    question: "How should numerical answers with decimals be entered on the CBT portal?",
    answer:
      "NTA specifies rounding instructions in the question stem itself. Generally, numerical answers must be rounded off to the nearest integer, or to two decimal places if explicitly stated. For example, if your answer is 4.678 and the prompt specifies rounding to two decimal places, you enter 4.68. If it asks for the nearest integer, you enter 5. Always read the individual question prompt carefully.",
  },
  {
    question: "What is the total duration and total marks for JEE Main?",
    answer:
      "The examination duration is exactly 3 hours (180 minutes) for 300 total marks (75 questions × 4 marks). Compensatory time of 20 minutes per hour (60 minutes extra) is provided to PwD candidates with scribe accommodations.",
  },
];

export default function JeeMainExamPatternChangesPage() {
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
        headline: "JEE Main Exam Pattern Changes: Section B Compulsory Numerical Rules Decoded",
        description:
          "Authoritative analysis on the discontinuation of Section B choices in JEE Main, 75 compulsory questions, negative marking mathematics, and tactical shift adaptation.",
        url: "https://mentskool.com/jee-main-exam-pattern-changes",
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
                label: "JEE Main Pattern Changes",
                href: "/jee-main-exam-pattern-changes",
              },
            ]}
          />

          {/* Hero Section */}
          <header className="mt-8 mb-12 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <ShieldCheck className="w-4 h-4" />
              NTA Official Examination Pattern Analysis
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight">
              JEE Main Exam Pattern Changes:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-indigo-300 to-cyan-400">
                Compulsory Section B Numericals & Marking Rules
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
              The National Testing Agency has permanently eliminated the optional question cushion in Section B. With zero internal choices and strict -1 negative marking on numericals, the era of skipping difficult chapters is officially over. Here is how top rankers are adapting their time distribution, syllabus coverage, and paper-solving order.
            </p>
          </header>

          {/* Direct Answer Box */}
          <section className="mb-14 rounded-2xl border border-brand-500/30 bg-brand-950/20 backdrop-blur-md p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-brand-500/20 text-brand-400 shrink-0">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-brand-300 mb-2">
                  Key Shift: 75 Compulsory Questions with No Choice
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Under the updated exam structure, candidates must solve exactly <strong className="text-white">75 questions</strong> (25 per subject: 20 Section A MCQs + 5 Section B Numericals). Total paper marks stand at <strong className="text-brand-300">300 marks</strong> for 180 minutes. Every incorrect question across both sections incurs a <strong className="text-red-400">-1 mark penalty</strong>. You can no longer browse 10 numericals to select 5 familiar ones; complete chapter coverage across 100% of the syllabus is now non-negotiable.
                </p>
              </div>
            </div>
          </section>

          {/* Section 1: Detailed Comparison Table (Old vs New Pattern) */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Calculator className="w-7 h-7 text-brand-400" />
              Pre-Pandemic vs Pandemic vs Current Updated Pattern
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Understanding the historical evolution of the JEE Main blueprint clarifies why average cutoff percentiles shift. Below is the side-by-side architectural comparison:
            </p>

            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/60 my-6">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-800/80 text-slate-200 border-b border-slate-700 font-semibold">
                  <tr>
                    <th className="p-4">Pattern Dimension</th>
                    <th className="p-4">Pandemic Era (2021–2024)</th>
                    <th className="p-4">Current Permanent Format (2025–2028+)</th>
                    <th className="p-4">Tactical Impact on Aspirants</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">Section A (MCQs)</td>
                    <td className="p-4">20 Questions (Compulsory)</td>
                    <td className="p-4 font-medium text-emerald-400">20 Questions (Compulsory)</td>
                    <td className="p-4 text-xs text-slate-400">Unchanged; tests rapid conceptual clarity.</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">Section B (Numericals)</td>
                    <td className="p-4">10 Questions (Attempt any 5)</td>
                    <td className="p-4 font-bold text-amber-400">5 Questions (All 5 Compulsory)</td>
                    <td className="p-4 text-xs text-slate-400">Eliminates cherry-picking; backlogs directly hurt rank.</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">Total Questions to Read</td>
                    <td className="p-4">90 Questions (30 per subject)</td>
                    <td className="p-4 font-medium text-white">75 Questions (25 per subject)</td>
                    <td className="p-4 text-xs text-slate-400">Saves 8-10 minutes previously wasted screening extra questions.</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">Negative Marking (Sec B)</td>
                    <td className="p-4">-1 (Re-introduced in 2022)</td>
                    <td className="p-4 font-bold text-red-400">-1 (Strictly Active)</td>
                    <td className="p-4 text-xs text-slate-400">Blind guessing in numericals carries severe penalty.</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">Total Marks & Time</td>
                    <td className="p-4">300 Marks / 180 Minutes</td>
                    <td className="p-4 font-medium text-white">300 Marks / 180 Minutes</td>
                    <td className="p-4 text-xs text-slate-400">Average time per attempted question increases slightly to 2.4 minutes.</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">99%ile Score Threshold</td>
                    <td className="p-4">Higher (180 - 215 marks)</td>
                    <td className="p-4 font-bold text-brand-400">Stabilized Lower (165 - 195 marks)</td>
                    <td className="p-4 text-xs text-slate-400">Questions carry greater selective weight; accuracy is rewarded over volume.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: Subject-Wise Marking Blueprint */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Flame className="w-7 h-7 text-amber-400" />
              Subject-Wise Breakdown & Marking Matrix
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                <div className="text-brand-400 font-bold text-lg">Physics (100 Marks)</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  20 MCQs + 5 Numericals. Section A heavily favors Modern Physics, Current Electricity, and Formula Applications. Section B features multi-step Mechanics, Electromagnetism, and Optics calculation problems.
                </p>
                <div className="text-sm text-slate-300 font-mono pt-2 border-t border-slate-800">
                  Target: 18Q Attempted | Safe Score: 68-75
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                <div className="text-cyan-400 font-bold text-lg">Chemistry (100 Marks)</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  20 MCQs + 5 Numericals. Section A is packed with NCERT-direct Inorganic and Organic reaction pathways. Section B is nearly 90% Physical Chemistry (Thermodynamics, Electrochemistry, Kinetics, Solutions).
                </p>
                <div className="text-sm text-slate-300 font-mono pt-2 border-t border-slate-800">
                  Target: 20Q Attempted | Safe Score: 72-80
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                <div className="text-indigo-400 font-bold text-lg">Mathematics (100 Marks)</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  20 MCQs + 5 Numericals. The paper&apos;s lengthiest section. Section B features extensive calculation problems in Definite Integrals, Coordinate Geometry, Vectors & 3D, and Differential Equations.
                </p>
                <div className="text-sm text-slate-300 font-mono pt-2 border-t border-slate-800">
                  Target: 12-14Q Attempted | Safe Score: 45-55
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Strategic Repercussions for 2027 and 2028 Aspirants */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <TrendingDown className="w-7 h-7 text-brand-400" />
              Three Strategic Repercussions You Must Incorporate Immediately
            </h2>
            <div className="space-y-4">
              <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/60">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-400" />
                  1. Zero Selective Preparation: The End of &quot;Skipping Chapters&quot;
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  In 2023, a student could completely ignore Rotational Motion or P-Block and still score full marks in Section B by selecting the other 5 problems. Under the current rule, if Section B presents a question from Rotational Dynamics and another from Complex Numbers, leaving those topics forfeits 8 to 10 unrecoverable marks immediately. Aspirants must achieve at least baseline formula-level mastery across every chapter.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/60">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-400" />
                  2. Decimal Calculation Discipline & Significant Figures
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  Numerical value questions require precise final integer or decimal inputs without multiple-choice options to hint at errors. A trivial arithmetic mistake in the last step converts a +4 into a -1, producing a net 5-mark deficit. Rankers maintain an &quot;Arithmetic Error Log&quot; during mock drills to eliminate rounding blunders before exam day.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/60">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-400" />
                  3. The 3-Phase Solving Strategy (45m Chem $\to$ 50m Phys $\to$ 75m Maths $\to$ 10m Buffer)
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  With 75 questions to read instead of 90, you save approximately 10 minutes of question triage. Channel those saved minutes directly into the Mathematics section. Complete Chemistry Section A and B in 40-45 minutes, Physics in 50-55 minutes, and dedicate 70-75 undisturbed minutes to crack 12-14 high-accuracy Mathematics questions.
                </p>
              </div>
            </div>
          </section>

          {/* Dedicated High-Converting Mentorship Funnel */}
          <SeoMentorFunnel
            examFocus="JEE"
            title="Master the Compulsory Section B Pattern with Top 1% IITian Mentors"
            subtitle="Stop losing marks to avoidable numerical errors and weak chapter coverage. Get weekly 1-on-1 strategy calls with an IIT Bombay/Delhi mentor to audit your mock performance and fine-tune your exam strategy."
          />

          {/* Section 4: FAQ Accordion */}
          <section className="my-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center justify-center gap-3">
                <HelpCircle className="w-7 h-7 text-brand-400" />
                Frequently Asked Questions: JEE Main Pattern Changes
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Detailed breakdowns on marking rules, decimal entries, and preparation strategies under the updated NTA guidelines.
              </p>
            </div>
            <SeoFaqAccordion items={faqs} />
          </section>

          {/* Final Call to Action */}
          <SeoCtaBanner
            title="Calibrate Your Mock Strategy for JEE Main"
            subtitle="Work with IITian rankers who cracked the exam with 99.8+ percentile. Get customized test-taking strategies, speed tricks, and comprehensive syllabus roadmaps."
            primaryBtnText="Book Free 1-on-1 Strategy Call"
            primaryBtnHref="/free-mentorship-session"
            secondaryBtnText="Explore Top IIT Mentors"
            secondaryBtnHref="/mentors"
          />
        </div>
      </main>
    </div>
  );
}
