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
  FileSpreadsheet,
  HeartPulse,
  Award,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { SeoMentorFunnel } from "@/components/seo/SeoMentorFunnel";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "NEET Negative Marking Rules: Saving 30+ Marks & Eliminating OMR Errors",
  description:
    "Master the psychology and mathematics of NEET negative marking. Understand the brutal 5-mark loss, how 1 wrong answer drops 1,500 ranks, OMR row-shift prevention, and second-guessing traps.",
  keywords: [
    "neet negative marking rules",
    "how to reduce negative marks in neet",
    "neet omr bubbling mistakes",
    "neet negative marking calculation",
    "avoid guessing in neet exam",
    "neet rank drop per negative mark",
    "how to avoid silly mistakes in neet",
  ],
  alternates: {
    canonical: "https://mentskool.com/neet-negative-marking-rules",
  },
  openGraph: {
    title: "NEET Negative Marking Rules: The Zero-Penalty Protocol for Medical Aspirants",
    description:
      "Avoid losing your government MBBS seat to careless negative marks and OMR blunders. Proven strategies from AIIMS rankers to preserve 30+ marks on exam day.",
    url: "https://mentskool.com/neet-negative-marking-rules",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "NEET Negative Marking Rules - Mentskool",
      },
    ],
  },
};

const faqs: FaqItem[] = [
  {
    question: "What is the penalty for an incorrect answer in NEET UG?",
    answer:
      "For every incorrect answer, exactly -1 mark is deducted from your total score. A correct response awards +4 marks, while unattempted questions receive 0 marks. Because you lose both the potential +4 marks and incur a -1 penalty, every wrong answer sets your score back by 5 marks compared to a correct response.",
  },
  {
    question: "How significantly does a single negative mark affect All India Rank (AIR) in NEET?",
    answer:
      "In the hyper-competitive 630 to 670 score range, a single 1-mark difference can alter your All India Rank by 1,200 to 2,000 positions. Losing 10 marks to careless guessing can cause an AIR swing of over 15,000 ranks, directly eliminating your eligibility for top state government medical colleges.",
  },
  {
    question: "How do candidates accidentally trigger OMR cascading errors?",
    answer:
      "OMR cascading happens when a candidate skips a question on their question paper (e.g., Question 42) but fails to skip the corresponding row on the OMR sheet, bubbling the answer to Question 43 into Row 42. This misalignment can cascade across 5 to 15 questions, resulting in devastating mark deductions before the candidate notices the shift.",
  },
  {
    question: "Should you change your answer in NEET if you begin second-guessing yourself?",
    answer:
      "Statistical audits of thousands of mock tests reveal that in over 70% of instances where an aspirant changes their initial instinctual answer without a concrete mathematical or factual recalculation, the revised choice is incorrect. Stick to your first instinct unless you uncover a definitive factual oversight.",
  },
  {
    question: "What is the recommended OMR bubbling method during NEET?",
    answer:
      "Never wait until the final 15 minutes to bubble the entire OMR sheet, as trembling hands and time panic cause severe bubbling mistakes. Instead, follow the 'Page-by-Page' or 'Section-by-Section' bubbling protocol: solve a two-page spread in your question booklet, verify question numbers, and immediately bubble those 6–8 questions on the OMR.",
  },
];

export default function NeetNegativeMarkingRulesPage() {
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
        headline: "NEET Negative Marking Rules: Saving 30+ Marks & Eliminating OMR Errors",
        description:
          "Authoritative guide to eliminating negative marks in NEET UG, stopping OMR bubbling cascades, and mastering question-skipping discipline.",
        url: "https://mentskool.com/neet-negative-marking-rules",
        author: {
          "@type": "Organization",
          name: "Mentskool Medical Advisory Council",
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
              { label: "NEET Mentorship", href: "/neet-mentorship" },
              {
                label: "NEET Negative Marking Rules",
                href: "/neet-negative-marking-rules",
              },
            ]}
          />

          {/* Hero Section */}
          <header className="mt-8 mb-12 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <HeartPulse className="w-4 h-4" />
              Score Preservation & Accuracy Directive
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight">
              NEET Negative Marking Rules:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-emerald-300 to-teal-400">
                Saving 30+ Marks & Eliminating OMR Slip-Ups
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
              In NEET UG, having vast knowledge is only half the battle; the other half is clinical discipline. With score compression at all-time highs, 6 careless mistakes do not just reduce your score — they eliminate your chance of securing an MBBS seat in a government medical college.
            </p>
          </header>

          {/* Direct Answer Box */}
          <section className="mb-14 rounded-2xl border border-red-500/30 bg-red-950/20 backdrop-blur-md p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-red-500/20 text-red-400 shrink-0">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-red-300 mb-2">
                  The Reality: Every Error is a 5-Mark Deficit
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  NEET deducts <strong className="text-red-400">-1 mark</strong> for each incorrect response, while correct answers award <strong className="text-emerald-400">+4 marks</strong>. When you mark a wrong choice, you sacrifice the 4 marks you anticipated plus 1 mark from your existing score. In the critical 640–660 mark bracket, every 5-mark loss drops your All India Rank by approximately <strong className="text-white">6,000 to 8,000 ranks</strong>.
                </p>
              </div>
            </div>
          </section>

          {/* Section 1: The Score vs Rank Impact Table */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <TrendingDown className="w-7 h-7 text-red-400" />
              How Careless Errors Erode Your Medical Seat: 5 Examples
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Consider two students with identical preparation levels attempting 175 questions. See how negative marks completely alter their medical college admission outcomes:
            </p>

            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/60 my-6">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-800/80 text-slate-200 border-b border-slate-700 font-semibold">
                  <tr>
                    <th className="p-4">Candidate Profile</th>
                    <th className="p-4">Correct / Incorrect</th>
                    <th className="p-4">Total Raw Score</th>
                    <th className="p-4">Approx. All India Rank</th>
                    <th className="p-4">College Admission Outcome</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-emerald-400">High Discipline</td>
                    <td className="p-4">168 Correct / 3 Incorrect</td>
                    <td className="p-4 font-mono font-bold text-emerald-300">669 Marks</td>
                    <td className="p-4 font-mono text-white">Top 3,500 AIR</td>
                    <td className="p-4 text-xs font-semibold text-emerald-400">Top State GMC / AIIMS Bhopal / AIIMS Rishikesh</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-cyan-400">Moderate Errors</td>
                    <td className="p-4">163 Correct / 8 Incorrect</td>
                    <td className="p-4 font-mono font-bold text-cyan-300">644 Marks</td>
                    <td className="p-4 font-mono text-white">~14,000 AIR</td>
                    <td className="p-4 text-xs text-slate-300">Peripheral State GMC / AIQ Round 2 Seat</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-amber-400">Impulsive Guesser</td>
                    <td className="p-4">158 Correct / 16 Incorrect</td>
                    <td className="p-4 font-mono font-bold text-amber-300">616 Marks</td>
                    <td className="p-4 font-mono text-white">~38,000 AIR</td>
                    <td className="p-4 text-xs text-amber-400">Borderline / High risk of losing All India GMC seat</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-red-400">Panic Over-Attempt</td>
                    <td className="p-4">152 Correct / 26 Incorrect</td>
                    <td className="p-4 font-mono font-bold text-red-300">582 Marks</td>
                    <td className="p-4 font-mono text-white">~72,000 AIR</td>
                    <td className="p-4 text-xs text-red-400">Government MBBS seat impossible; forced to repeat or choose private</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: The Dreaded OMR Cascading Shift */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <FileSpreadsheet className="w-7 h-7 text-amber-400" />
              The OMR Row-Shift Nightmare: How To Guarantee Zero Cascades
            </h2>
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-4">
              <p className="text-slate-300 text-sm leading-relaxed">
                The most heartbreaking incident in NEET is the OMR row-shift. You leave Question 74 blank because it is difficult, but when marking Question 75, your pen automatically fills the bubble on Row 74. You proceed to bubble the next 8 questions before noticing that the question numbers are misaligned.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300 pt-2">
                <div className="p-4 rounded-xl bg-slate-800/70 border border-slate-700">
                  <strong className="text-emerald-400 block mb-1">The &quot;Index-Finger Anchor&quot; Technique</strong>
                  Place your left index finger firmly on the question number in the paper booklet (e.g., #82). Then match your pen tip to Row 82 on the OMR sheet. Never lift your finger from the booklet until the bubble is filled.
                </div>
                <div className="p-4 rounded-xl bg-slate-800/70 border border-slate-700">
                  <strong className="text-teal-400 block mb-1">The Page-Spread Bubbling Protocol</strong>
                  Solve both facing pages of your question booklet (typically 6 to 8 questions). Check each question number once, bubble those 6 to 8 answers, and only then turn the page. This prevents end-of-exam time crunches and keeps errors localized.
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: The 3 Rules of Second-Guessing */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <ShieldCheck className="w-7 h-7 text-emerald-400" />
              The 3 Non-Negotiable Rules of Skipping and Second-Guessing
            </h2>
            <div className="space-y-4">
              <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/60">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  1. The 60-Second Stagnation Rule
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  If you have read a question twice and have not initiated a clear solving formula or NCERT recall pathway within 60 seconds, circle the question number on your booklet and immediately move forward. Staring at an unyielding problem drains mental energy and induces emotional panic.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/60">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  2. First-Instinct Fidelity in Biology
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  In Biology, your first cognitive response is grounded in sub-conscious pattern recognition built from dozens of NCERT readings. When you review marked questions in the final 20 minutes, resist the impulse to switch your answer unless you clearly identify a misread word like <em>&quot;incorrect&quot;</em> or <em>&quot;except&quot;</em>.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/60">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  3. The Section B Maximum Selection Cap
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  Always mark your 10 chosen questions on the question paper before touching the OMR sheet in Section B. Count them twice. Never bubble an 11th question hoping NTA will choose your best 10 — only the first 10 sequentially bubbled answers will be counted.
                </p>
              </div>
            </div>
          </section>

          {/* Dedicated High-Converting Mentorship Funnel */}
          <SeoMentorFunnel
            examFocus="NEET"
            title="Audit Your Negative Marks With Top Medical Mentors"
            subtitle="Send your mock test OMR sheets to an AIIMS mentor for forensic error analysis. Learn how to diagnose calculation mistakes, eliminate panic-guessing, and secure 660+ consistently."
          />

          {/* Section 4: FAQ Accordion */}
          <section className="my-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center justify-center gap-3">
                <HelpCircle className="w-7 h-7 text-emerald-400" />
                Frequently Asked Questions: NEET Negative Marking
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Practical answers to safeguard your marks on exam day.
              </p>
            </div>
            <SeoFaqAccordion items={faqs} />
          </section>

          {/* Final Call to Action */}
          <SeoCtaBanner
            title="Transform Your Accuracy and Protect Your MBBS Seat"
            subtitle="Join Mentskool to work 1-on-1 with AIIMS rankers who will build your personalized mock test protocol and error-reduction system."
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
