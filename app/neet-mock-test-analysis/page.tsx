import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Stethoscope,
  BarChart3,
  BookOpen,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "NEET Mock Test Analysis & Score Improvement — From 500 to 650+ with AIIMS Doctors",
  description:
    "Stuck between 500 and 550 in NEET mock tests? Stop marks bleeding from negative marking and silly errors. Learn the AIIMS Mistake Book System to reach 650+ with a 1-on-1 doctor mentor.",
  keywords: [
    "NEET mock test analysis",
    "how to improve NEET mock test score",
    "reduce negative marking in NEET",
    "NEET score stuck at 500 how to reach 650",
    "mistake book for NEET UG",
    "AIIMS mentor mock test analysis",
  ],
  alternates: {
    canonical: "https://mentskool.com/neet-mock-test-analysis",
  },
  openGraph: {
    title: "NEET Mock Test Analysis: The AIIMS System to Breakthrough 650+",
    description:
      "Question-by-question post-mortems led by AIIMS doctors. Eliminate negative marks across Biology, Physics, and Chemistry to secure your government MBBS seat.",
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
    question: "Why do so many NEET aspirants get stuck at 500–550 marks in mock tests?",
    answer:
      "A score of 520 means you know the basic syllabus, but you are losing 60 to 80 marks strictly to negative marking, misread question keywords ('NOT correct', 'EXCEPT'), and time-management panic in Physics. Breaking through to 650+ requires systematic error auditing, not just re-reading chapters.",
  },
  {
    question: "How does an AIIMS doctor mentor analyze your NEET mock test?",
    answer:
      "In your weekly 1-on-1 session, your mentor conducts an autopsy of your test: 1) Why did you misread Biology options? 2) In Physics, was the error due to calculation, formula confusion, or unattempted questions due to lack of time? 3) Were you trapped in question sequencing? They then assign targeted micro-drills to fix those exact leaks.",
  },
  {
    question: "What is the ideal time distribution for NEET mock tests?",
    answer:
      "AIIMS mentors teach the 40-50-90 Rule: Complete Biology in 35–40 minutes, Chemistry in 45–50 minutes, leaving a massive 90 minutes for Physics numericals and OMR verification.",
  },
];

export default function NeetMockTestAnalysisPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white selection:bg-brand-500/30 selection:text-brand-300">
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

          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 text-xs font-semibold mb-4">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Medical Ranker Mock Audit &amp; Score Acceleration</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              NEET Mock Test Analysis: <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Push Your Score Past 650+</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Negative marks are the #1 barrier between you and a Government Medical College. Learn the <strong>question-by-question post-mortem protocol</strong> guided 1-on-1 by AIIMS doctors to eliminate avoidable errors.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Audit My NEET Test with a Doctor</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/free-mentorship-session"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all"
              >
                Get Free Mock Score Diagnosis
              </Link>
            </div>
          </div>

          {/* Quick Answer */}
          <div className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-teal-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-teal-400 mb-3">
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span>Quick Answer: How Do Medical Aspirants Break Past 650 in NEET Mocks?</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-5">
              The <strong>Mentskool NEET Mock Audit Framework</strong> isolates marks bleeding and stops negative marks through four clinical steps:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>The 40-50-90 Time Distribution:</strong> Finish Biology in 35-40 mins, Chemistry in 45-50 mins, securing 90 full minutes for Physics numericals.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Negative Mark Category Dissection:</strong> Segregate blunders into reading traps ('INCORRECT' statement), formula mix-ups, or pressure guesses.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Clinical Mistake Book:</strong> Every wrong NCERT line and Physics formula is recorded and re-tested before your next mock.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>1:1 Paper Post-Mortem:</strong> Review questions directly with an AIIMS doctor who personally achieved a 680+ score.</span>
              </div>
            </div>
          </div>

          <section className="mt-16">
            <SeoFaqAccordion
              faqs={neetMockFaqs}
              title="Frequently Asked Questions: NEET Mock Test Improvement"
              subtitle="Everything you need to know about breaking plateaus, avoiding negative marks, and AIIMS doctor guidance."
            />
          </section>

          <section className="mt-16">
            <SeoCtaBanner
              title="Break Past Your Mock Plateau Today"
              description="Get paired with an AIIMS doctor who will analyze your test paper and help you reclaim 50+ lost marks on every single test."
              primaryButtonText="Find AIIMS Mentors"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
