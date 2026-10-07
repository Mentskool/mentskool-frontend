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
  Dna,
  HeartPulse,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "NEET Mock Test Analysis with AIIMS Doctor Mentor — 500 to 650+ Score Guide",
  description:
    "Stuck between 480 and 560 in NEET mock tests? Learn how AIIMS New Delhi toppers analyze test errors, prevent negative marks, avoid OMR bubble shifting, and engineer a 650+ score with 1-on-1 medical mentorship.",
  keywords: [
    "NEET mock test analysis",
    "how to analyze NEET mock tests",
    "stop negative marks in NEET",
    "NEET score stuck at 500",
    "NEET OMR bubble shifting errors",
    "NEET time management strategy",
    "AIIMS doctor mock test analysis",
  ],
  alternates: {
    canonical: "https://mentskool.com/neet-mock-test-analysis",
  },
  openGraph: {
    title: "NEET Mock Test Analysis: The 500 to 650+ Breakdown by AIIMS Doctors",
    description:
      "Eliminate 30+ negative marks, prevent OMR mistakes, and master exact subject time budgets with verified AIIMS mentors.",
    url: "https://mentskool.com/neet-mock-test-analysis",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "NEET Mock Test Analysis - Mentskool",
      },
    ],
  },
};

const neetMockFaqs: FaqItem[] = [
  {
    question: "Why do so many NEET students get stuck between 500 and 550 marks in mock tests?",
    answer:
      "Because 520 marks means you know approximately 75% of the theory, but you are losing 40 to 60 marks due to careless execution: misreading 'NOT correct' in Biology, calculation slips in Physical Chemistry, and time panic in Physics. Moving from 520 to 650+ does not require reading 5 new books; it requires a disciplined mistake audit that stops negative marking leaks.",
  },
  {
    question: "What is the optimal subject time budget during the 3-hour 20-minute NEET exam?",
    answer:
      "Our AIIMS mentors enforce the Gold Standard Time Budget: 1) Biology (Botany + Zoology, 90 Qs): 40 to 45 minutes; 2) Chemistry (45 Qs): 45 to 50 minutes; 3) Physics (45 Qs): 60 to 70 minutes; 4) Buffer for OMR Bubbling & Re-checking: 25 to 30 minutes. Finishing Biology under 45 minutes creates the psychological calm necessary to solve Physics without rushing.",
  },
  {
    question: "How should students bubble their OMR sheets to avoid catastrophic shifting errors?",
    answer:
      "Never fill the entire OMR sheet at the very end of the exam (if time runs out, you lose dozens of questions). Never bubble question-by-question (which disrupts problem-solving focus). Use the 'Page-by-Page' or 'Subject-by-Subject' bubbling method: complete all 90 Biology questions, bubble them carefully with finger-alignment, then proceed to Chemistry.",
  },
  {
    question: "How does an AIIMS mentor audit a NEET mock test rough paper?",
    answer:
      "During your weekly 1:1 Google Meet call, you review your test rough sheet and test paper. Your mentor identifies if your Physics rough work was disorganized (leading to calculation slips), highlights which Biology questions had deceptive distractors, and assigns a 2-day recovery drill focused specifically on those vulnerable sub-topics.",
  },
  {
    question: "How many mock tests should a NEET 2027 aspirant solve?",
    answer:
      "We recommend 25 to 35 high-quality full syllabus mock tests in the final 4 months before NEET, with mandatory 2.5-hour post-mortems for every single test. Taking tests without systematic error correction only cements bad testing habits.",
  },
  {
    question: "Can I increase my NEET mock score by 100 marks in 2 months?",
    answer:
      "Yes. The fastest marks to gain in NEET are the 40–50 marks lost to negative marking and the 30–40 marks in formula-based Physics questions that you skipped due to intimidation. With strict 1:1 error auditing, score jumps of 80 to 120 marks are routinely achieved.",
  },
];

export default function NeetMockTestAnalysisPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        name: "Mentskool Technologies",
        url: "https://mentskool.com",
        logo: "https://mentskool.com/logo.png",
        description:
          "India's premier 1-on-1 mentorship platform for medical entrance exams with verified AIIMS rankers.",
      },
      {
        "@type": "HowTo",
        name: "How to Conduct a NEET Mock Test Post-Mortem",
        description:
          "The systematic medical test review framework used by AIIMS doctors to eliminate negative marks and cross 650+.",
        step: [
          {
            "@type": "HowToStep",
            name: "Audit Negative Marks by Root Cause",
            text: "Tag every lost mark as Conceptual, Misread Trap, or Arithmetic Slip.",
          },
          {
            "@type": "HowToStep",
            name: "Enforce Subject Time Boundaries",
            text: "Lock Biology to 45 mins, Chemistry to 50 mins, and reserve 65 mins for Physics.",
          },
          {
            "@type": "HowToStep",
            name: "Update Biology Forensic Notebook",
            text: "Write down exact NCERT lines and confusing assertion-reason pairs.",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: neetMockFaqs.map((faq) => ({
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
              { label: "NEET Mentorship", href: "/neet-mentorship" },
              {
                label: "NEET Mock Test Analysis",
                href: "/neet-mock-test-analysis",
              },
            ]}
          />

          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-semibold mb-4">
              <HeartPulse className="w-3.5 h-3.5" />
              <span>The 500 to 650+ Score Breakthrough Blueprint</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              NEET Mock Test Analysis: <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400">Stop Negative Marks with AIIMS Mentors</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Are you losing 30+ marks in every mock to careless slips, misread questions, and OMR pressure? Partner 1-on-1 with an <strong>AIIMS New Delhi ranker</strong> to audit your mistakes, conquer exam timing, and turn your scores into a guaranteed Government Medical College seat.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:to-teal-800 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Audit Your Last Mock with an AIIMS Doctor</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/free-mentorship-session"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all"
              >
                Claim Free Medical Test Audit
              </Link>
            </div>
          </div>

          {/* Direct Answer Box for AI Overviews & Search Snippets */}
          <section className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-emerald-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-400 mb-3">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Executive Summary: How AIIMS Mentors Break NEET Score Plateaus</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-5">
              The <strong>Mentskool NEET Mock Test Analysis Engine</strong> transforms stagnant test scores through four forensic review protocols:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Negative Mark Root-Cause Audit:</strong> Identifying specific trigger patterns (e.g., misreading &quot;incorrect&quot; in Biology or wrong sign substitution in thermodynamics).</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>The 42-Minute Biology Speed Barrier:</strong> Training students to finish all 90 Biology questions in under 45 minutes, creating massive time cushion for Physics.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>OMR Shifting Eradication:</strong> Enforcing the Page-by-Page bubbling discipline that completely prevents misplaced bubble disasters.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Weekly Rough-Paper Review:</strong> Your mentor reviews photos of your scratch work on Google Meet to clean up numerical steps and unit checks.</span>
              </div>
            </div>
          </section>

          {/* Section 1: The Gold Standard NEET Time Budget */}
          <section className="my-16 bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800 rounded-3xl p-8 sm:p-12">
            <div className="max-w-3xl mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                The Gold Standard NEET Time Allocation (3 Hours 20 Mins)
              </h2>
              <p className="text-slate-300 text-sm mt-2">
                How AIIMS doctors allocate minutes inside the exam hall to score 680+ without panic.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="text-xs font-bold text-emerald-400 uppercase">Phase 1 (40–45 Mins)</div>
                <h3 className="text-lg font-bold text-white">Biology Sweep (90 Qs)</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Direct NCERT line recall. Mark answers immediately on question paper; fill OMR in subject batch. Aim for 350+ marks in 45 minutes.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="text-xs font-bold text-teal-400 uppercase">Phase 2 (45–50 Mins)</div>
                <h3 className="text-lg font-bold text-white">Chemistry Attack (45 Qs)</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Start with Inorganic NCERT tables, proceed through Organic named reactions, finish with formula-based Physical calculations.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="text-xs font-bold text-sky-400 uppercase">Phase 3 (65–70 Mins)</div>
                <h3 className="text-lg font-bold text-white">Physics Mastery (45 Qs)</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Calm, unhurried numerical solving. 35 direct formula questions first, followed by remaining 8 moderate multi-step questions.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="text-xs font-bold text-amber-400 uppercase">Phase 4 (25 Mins)</div>
                <h3 className="text-lg font-bold text-white">OMR &amp; Verification</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Verify bubble sequence against question numbers, calculate decimal units, and re-attempt 3 flagged questions.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Score Transformation Table */}
          <section className="my-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Score Transformation: Unaudited Mocks vs AIIMS Doctor Post-Mortems
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                The documented trajectory of Mentskool students jumping from score plateaus to top Government Medical Colleges.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl">
              <table className="w-full text-left text-xs sm:text-sm text-slate-300">
                <thead className="bg-slate-950/80 text-white font-bold uppercase text-[11px] tracking-wider border-b border-slate-800">
                  <tr>
                    <th className="py-4 px-4 sm:px-6">Milestone</th>
                    <th className="py-4 px-4 sm:px-6 text-rose-400">Score Without Analysis</th>
                    <th className="py-4 px-4 sm:px-6 text-emerald-400">Score With AIIMS Mentor Post-Mortem</th>
                    <th className="py-4 px-4 sm:px-6 text-sky-400">Root Cause Fixed</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white">Baseline Mock 1</td>
                    <td className="py-4 px-4 sm:px-6">495 Marks (-44 Negative)</td>
                    <td className="py-4 px-4 sm:px-6">502 Marks (-42 Negative)</td>
                    <td className="py-4 px-4 sm:px-6">First diagnosis: 11 misread questions in Biology, 4 sign errors in Physics.</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white">Week 4 (Mock 5)</td>
                    <td className="py-4 px-4 sm:px-6">512 Marks (-38 Negative)</td>
                    <td className="py-4 px-4 sm:px-6 text-emerald-300 font-bold">578 Marks (-16 Negative)</td>
                    <td className="py-4 px-4 sm:px-6">Biology finished in 45 mins; 22 negative marks completely eliminated.</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white">Week 8 (Mock 10)</td>
                    <td className="py-4 px-4 sm:px-6">525 Marks (-35 Negative)</td>
                    <td className="py-4 px-4 sm:px-6 text-emerald-300 font-bold">638 Marks (-8 Negative)</td>
                    <td className="py-4 px-4 sm:px-6">Physics numerical confidence restored; zero OMR shifting blunders.</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white">Final NEET Exam</td>
                    <td className="py-4 px-4 sm:px-6 text-rose-300 font-bold">534 Marks (Private College Cutoff)</td>
                    <td className="py-4 px-4 sm:px-6 text-emerald-400 font-bold">672 Marks (Premier State GMC / AIIMS)</td>
                    <td className="py-4 px-4 sm:px-6">Peak test conditioning, 355/360 in Biology, and 160 in Physics.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ Accordion */}
          <section className="mt-16">
            <SeoFaqAccordion
              faqs={neetMockFaqs}
              title="Frequently Asked Questions: NEET Mock Test Post-Mortems"
              subtitle="Everything you need to know about eliminating negative marks, time budgeting, and 1:1 doctor guidance."
            />
          </section>

          {/* CTA Banner */}
          <section className="mt-16">
            <SeoCtaBanner
              title="Turn Your 500 Mock Score into a 650+ GMC Seat"
              description="Get paired 1-on-1 with an AIIMS doctor who will audit your mock test rough sheets, eliminate negative marks, and design your weekly test plan."
              primaryButtonText="Find Your Medical Test Strategy Mentor"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
