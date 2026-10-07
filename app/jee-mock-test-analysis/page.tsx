import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Target,
  BarChart3,
  BookOpen,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "JEE Mock Test Analysis & Negative Marks Reduction — 1:1 Mistake Audit",
  description:
    "Plateaued in JEE mock tests? Stop losing 30-50 marks to negative marking and silly blunders. Learn the Question-by-Question Mistake Book Protocol guided 1-on-1 by top IITians.",
  keywords: [
    "JEE mock test analysis",
    "how to reduce negative marks in JEE",
    "JEE mock test score improvement",
    "mistake book for IIT JEE",
    "how to analyze JEE Mains test series",
    "JEE mock test mentor audit",
  ],
  alternates: {
    canonical: "https://mentskool.com/jee-mock-test-analysis",
  },
  openGraph: {
    title: "JEE Mock Test Analysis: Stop Losing Marks to Silly Errors & Time Panic",
    description:
      "A question-by-question post-mortem system led by verified IITians. Segregate conceptual vs calculation blunders and systematically push percentiles.",
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

const mockAnalysisFaqs: FaqItem[] = [
  {
    question: "Why do most students fail to improve after giving multiple JEE mock tests?",
    answer:
      "Most students merely check their total score, look at the answer key, feel depressed, and move on to the next test without diagnosing the root cause. Unless you segregate your mistakes into 3 distinct categories (Conceptual Gap, Calculation/Reading Blunder, or Time Panic), you will repeat the exact same errors in the real exam.",
  },
  {
    question: "What is the Mentskool Mistake Book Protocol?",
    answer:
      "After every mock test, your IITian mentor audits your paper question-by-question. You record every unattempted or incorrect question into a structured Mistake Book, detailing: 1) What concept was tested, 2) Why you made the error, and 3) The exact mental check to prevent it next time. Your mentor reviews this before your next test.",
  },
  {
    question: "How much score improvement can I expect from systematic mock test post-mortems?",
    answer:
      "On average, active Mentskool mentees recover 35 to 55 marks within 3 to 4 mock test cycles simply by eliminating avoidable negative marks and optimizing question selection strategy.",
  },
];

export default function JeeMockTestAnalysisPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white selection:bg-brand-500/30 selection:text-brand-300">
      <HeroGridBackground />

      <main className="relative z-10 pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SeoBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "JEE Mentorship", href: "/jee-mentorship" },
              {
                label: "JEE Mock Test Analysis",
                href: "/jee-mock-test-analysis",
              },
            ]}
          />

          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-semibold mb-4">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Score Maximization &amp; Negative Marks Auditing</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              JEE Mock Test Analysis: <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-sky-300 to-indigo-400">Stop Losing 40+ Marks to Blunders</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Giving 30 mock tests without analysis will not improve your percentile. Learn the rigorous <strong>question-by-question post-mortem protocol</strong> used by IIT Bombay rankers to turn weak test scores into breakthroughs.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Audit My Test with an IITian</span>
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
          <div className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-brand-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-400 mb-3">
              <Sparkles className="w-4 h-4 text-brand-400" />
              <span>Quick Answer: How Do Top Rankers Analyze a JEE Mock Test?</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-5">
              The <strong>Mentskool Mock Test Post-Mortem System</strong> turns every test into an algorithmic learning loop through four structured steps:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>The 3-Bucket Error Classification:</strong> Segregate every lost mark into Conceptual Flaw, Calculation/Misread Blunder, or Time-Pressure Panic.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Question Selection Audit:</strong> Evaluate whether you picked the easiest 12 questions in each subject first, or got trapped in lengthy questions.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>The Living Mistake Book:</strong> Every wrong question is logged with its root cause and reviewed before the next examination.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>1:1 Mentor Debrief:</strong> In your weekly Google Meet call, your IITian mentor reviews your paper to calibrate exam strategy.</span>
              </div>
            </div>
          </div>

          <section className="mt-16">
            <SeoFaqAccordion
              faqs={mockAnalysisFaqs}
              title="Frequently Asked Questions: JEE Mock Test Analysis"
              subtitle="Everything you need to know about reducing negative marking, test strategy, and score breakthroughs."
            />
          </section>

          <section className="mt-16">
            <SeoCtaBanner
              title="Turn Your Mock Tests into Rank Accelerators"
              description="Get paired with an IITian who will break down your errors and help you reclaim 40+ lost marks on every single test."
              primaryButtonText="Find An IITian Mentor"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
