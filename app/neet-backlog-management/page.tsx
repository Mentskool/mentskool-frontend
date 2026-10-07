import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Stethoscope,
  BookOpen,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "NEET Backlog Management & Recovery — Systematic Plan with AIIMS Doctors",
  description:
    "Struggling with NEET backlogs? Recover pending Biology NCERT chapters, Physics numerical units, and Chemistry concepts with an AIIMS doctor mentor.",
  keywords: [
    "NEET backlog management",
    "how to clear NEET backlogs",
    "NEET backlog recovery plan",
    "clear Class 11 backlogs in Class 12 NEET",
    "NEET dropper backlog strategy",
    "AIIMS mentor for NEET backlogs",
  ],
  alternates: {
    canonical: "https://mentskool.com/neet-backlog-management",
  },
  openGraph: {
    title: "NEET Backlog Management: Systematic Recovery with AIIMS Mentors",
    description:
      "Stop feeling overwhelmed by pending NEET syllabus. Learn how AIIMS doctors prioritize high-yield NCERT chapters and recover backlogs in 60 days.",
    url: "https://mentskool.com/neet-backlog-management",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "NEET Backlog Management - Mentskool",
      },
    ],
  },
};

const neetBacklogFaqs: FaqItem[] = [
  {
    question: "How should medical aspirants prioritize Biology backlogs versus Physics backlogs?",
    answer:
      "Biology backlogs are memory-based; your mentor schedules 45-minute high-focus active recall slots every morning to cover pending NCERT chapters chapter-by-chapter. Physics backlogs are numerical-based; they are grouped by independent mechanics and tackled during 90-minute evening problem sprints.",
  },
  {
    question: "Can I clear backlogs without skipping my regular coaching lectures?",
    answer:
      "Yes, that is the core rule of Mentskool's system. Pausing coaching only breeds new backlogs. Your mentor builds a customized schedule where 70% of study time supports current classes, and a protected 30% slot is dedicated to backlog recovery.",
  },
  {
    question: "How do AIIMS mentors verify that a backlog chapter is actually cleared?",
    answer:
      "A chapter is only marked 'Cleared' when you complete two milestones: 1) Active recall check on NCERT summary & diagram exceptions, and 2) Solving 40 PYQs with at least 85% accuracy. Your mentor signs off on this directly through the dashboard.",
  },
];

export default function NeetBacklogManagementPage() {
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
                label: "NEET Backlog Management",
                href: "/neet-backlog-management",
              },
            ]}
          />

          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 text-xs font-semibold mb-4">
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Medical Ranker Backlog Recovery System</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              NEET Backlog Management: <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Recover and Retain in 60 Days</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Pending chapters across Biology, Chemistry, and Physics drain your confidence. Partner 1-on-1 with an <strong>AIIMS New Delhi doctor or GMC topper</strong> who will categorize your syllabus and guide your daily recovery.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Clear My NEET Backlogs</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/free-mentorship-session"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all"
              >
                Get Free Backlog Diagnosis
              </Link>
            </div>
          </div>

          {/* Quick Answer */}
          <div className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-teal-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-teal-400 mb-3">
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span>Quick Answer: How Do Medical Aspirants Clear NEET Backlogs?</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-5">
              The <strong>Mentskool NEET Backlog Protocol</strong> tackles pending chapters through high-yield segregation and daily verification:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>High-Yield NCERT First:</strong> Prioritize top-weightage Biology (Genetics, Human Physiology, Ecology) for instant 80+ mark recovery.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Physics Formula Deconstruction:</strong> Break pending Physics units into core formula archetypes and 35 essential question patterns.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Parallel Study Architecture:</strong> Never halt current coaching chapters; run a protected 2-hour daily backlog slot.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Weekly Mentor Retention Checks:</strong> In weekly calls, your AIIMS mentor conducts rapid-fire recall quizzes to ensure long-term retention.</span>
              </div>
            </div>
          </div>

          <section className="mt-16">
            <SeoFaqAccordion
              faqs={neetBacklogFaqs}
              title="Frequently Asked Questions: NEET Backlog Management"
              subtitle="Everything you need to know about prioritizing medical chapters and recovering lost ground."
            />
          </section>

          <section className="mt-16">
            <SeoCtaBanner
              title="Stop Stressing Over Pending Chapters"
              description="Connect with an AIIMS doctor who will build your weekly backlog roadmap and hold you accountable every day."
              primaryButtonText="Find AIIMS Mentors"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
