import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Scale,
  Award,
  HelpCircle,
  BookOpen,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { ComparisonTable, ComparisonRow } from "@/components/seo/ComparisonTable";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "Mentor vs Coaching for JEE & NEET — Do You Really Need a Personal Mentor?",
  description:
    "Do you need a personal mentor for JEE or NEET? Understand the core difference between classroom coaching (teaching theory) and 1:1 ranker mentorship (daily execution, backlogs, and mock analysis).",
  keywords: [
    "mentor vs coaching for JEE NEET",
    "do I need a mentor for JEE",
    "do I need a mentor for NEET",
    "personal mentor vs coaching institute",
    "is JEE mentorship worth it",
    "is NEET mentorship worth it",
  ],
  alternates: {
    canonical: "https://mentskool.com/mentor-vs-coaching-for-jee-neet",
  },
  openGraph: {
    title: "Mentor vs Coaching for JEE & NEET: The Definitive Decision Guide",
    description:
      "Why coaching covers the syllabus but 1-on-1 mentorship ensures execution. Compare batch classes with personalized ranker accountability.",
    url: "https://mentskool.com/mentor-vs-coaching-for-jee-neet",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Mentor vs Coaching - Mentskool",
      },
    ],
  },
};

const comparisonRows: ComparisonRow[] = [
  {
    feature: "Primary Function",
    description: "What the program actually delivers.",
    mentskool: "Daily Execution, Backlog Elimination & Mock Score Acceleration",
    competitor: "Syllabus Delivery via Lectures & General Study Material",
  },
  {
    feature: "Batch Size & Attention",
    description: "Number of students sharing the faculty/mentor focus.",
    mentskool: "Strict 1:1 Private Calls + Capped Cohorts (Max 30)",
    competitor: "Mass Batches (80 to 150+ students per classroom)",
  },
  {
    feature: "Backlog Management",
    description: "How past pending chapters are recovered.",
    mentskool: "Personalized 2-hour daily recovery roadmaps audited weekly",
    competitor: "None (the batch moves forward regardless of student backlogs)",
  },
  {
    feature: "Mock Test Post-Mortem",
    description: "Depth of test mistake analysis.",
    mentskool: "Question-by-question mistake book audit to stop negative marks",
    competitor: "Generic batch answer keys and collective doubt counters",
  },
  {
    feature: "Schedule Flexibility",
    description: "Adaptability to student pace and school routine.",
    mentskool: "100% Dynamic — Customized weekly around your homework",
    competitor: "Rigid, fixed lecture schedules with zero individual personalization",
  },
];

const faqs: FaqItem[] = [
  {
    question: "Do I need a personal mentor if I am already enrolled in a coaching institute like Allen or PW?",
    answer:
      "Coaching institutes provide high-quality video lectures and printed question modules, but they do not provide individual accountability. In a batch of 100+ students, no teacher tracks whether you completed your homework, how you manage backlogs, or why you lost 40 marks to negative marking. A personal mentor acts as your personal strategist and accountability partner alongside your classes.",
  },
  {
    question: "Can 1-on-1 mentorship replace coaching completely?",
    answer:
      "If you are a repeater or self-study student with access to good reference books or recorded lecture libraries, 1-on-1 mentorship provides all the structure, milestone planning, and doubt guidance you need. For students needing fundamental concept lectures from scratch, mentorship works best in tandem with coaching.",
  },
  {
    question: "How do I know if I personally need a mentor?",
    answer:
      "You need a mentor if you experience any of these 4 symptoms: 1) You have accumulating backlogs you cannot clear alone, 2) Your mock test scores have plateaued despite studying long hours, 3) You struggle with daily self-discipline and procrastination, or 4) You feel overwhelmed by which questions or books to prioritize.",
  },
];

export default function MentorVsCoachingPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white selection:bg-brand-500/30 selection:text-brand-300">
      <HeroGridBackground />

      <main className="relative z-10 pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SeoBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              {
                label: "Mentor vs Coaching",
                href: "/mentor-vs-coaching-for-jee-neet",
              },
            ]}
          />

          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-xs font-semibold mb-4">
              <Scale className="w-3.5 h-3.5" />
              <span>The Definitive Decision Framework (2026/2027)</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Mentor vs Coaching for JEE &amp; NEET: <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-sky-300 to-indigo-400">Do You Really Need a Mentor?</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Lectures teach the theory. Mentors guarantee the execution. Understand why over 90% of students who fail coaching do so because of the <strong>Execution Gap</strong> — and how 1:1 rankers fix it.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Find Your Personal Mentor</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/free-mentorship-session"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all"
              >
                Try Free 1:1 Consultation
              </Link>
            </div>
          </div>

          {/* Quick Answer */}
          <div className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-brand-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-400 mb-3">
              <Sparkles className="w-4 h-4 text-brand-400" />
              <span>Quick Answer: What Is The Difference Between a Mentor and Coaching?</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-5">
              <strong>Coaching and Mentorship solve two completely different problems</strong> in competitive exam preparation:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Coaching Teaches Theory (The 'What'):</strong> Delivers lectures, syllabus content, and generic problem sets to batches of 100+ students.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Mentorship Drives Execution (The 'How'):</strong> Builds custom weekly schedules, audits solved problems daily, and clears backlogs.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Mock Test Diagnostic:</strong> Mentors break down negative marks and silly blunders question-by-question after every test.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>The Perfect Synergy:</strong> Most successful rankers use coaching for classroom lectures, while using Mentskool as their 1:1 accountability system.</span>
              </div>
            </div>
          </div>

          <ComparisonTable
            competitorName="Mass Coaching Batches"
            rows={comparisonRows}
          />

          <section className="mt-16">
            <SeoFaqAccordion
              faqs={faqs}
              title="Frequently Asked Questions: Mentor vs Coaching"
              subtitle="Clear guidance on when to add a mentor to your existing coaching routine."
            />
          </section>

          <section className="mt-16">
            <SeoCtaBanner
              title="Bridge The Execution Gap with an IIT or AIIMS Mentor"
              description="Get personalized 1-on-1 strategy, daily problem accountability, and mock test audits. Start with a flexible monthly plan."
              primaryButtonText="Find Your Mentor"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
