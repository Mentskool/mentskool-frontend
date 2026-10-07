import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Video,
  Stethoscope,
  Award,
  Users,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { ProgramFeatures } from "@/components/seo/ProgramFeatures";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "1-on-1 NEET Mentorship by AIIMS Doctors — Private Strategy & NCERT Audits",
  description:
    "Experience true 1-on-1 NEET mentorship with verified AIIMS New Delhi & top GMC doctors. Private Google Meet strategy calls, line-by-line NCERT audits, and Physics numerical coaching.",
  keywords: [
    "NEET 1-on-1 mentorship",
    "1 on 1 NEET mentor",
    "personal NEET coaching online",
    "private AIIMS mentor calls",
    "NEET doctor mentor online",
    "1 on 1 NCERT revision coaching",
  ],
  alternates: {
    canonical: "https://mentskool.com/neet-1-on-1-mentorship",
  },
  openGraph: {
    title: "1-on-1 NEET Mentorship: Private Guidance from AIIMS Doctors",
    description:
      "Direct 1-on-1 Google Meet sessions, line-by-line NCERT retention drills, Physics numerical problem solving, and negative marks reduction.",
    url: "https://mentskool.com/neet-1-on-1-mentorship",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "1-on-1 NEET Mentorship - Mentskool",
      },
    ],
  },
};

const faqs: FaqItem[] = [
  {
    question: "How does a 1-on-1 NEET mentorship session work?",
    answer:
      "Every week, you meet privately with your assigned AIIMS doctor mentor via Google Meet. They review your NCERT Biology revision, quiz you on high-yield diagrams, audit negative marks from your latest mock test, and build a personalized problem-solving schedule for the coming week.",
  },
  {
    question: "Can an AIIMS mentor help me if I am struggling in Physics?",
    answer:
      "Yes! Physics is where most medical aspirants lose their Government Medical College seat. Your mentor shares the exact shortcut derivations, dimensional checks, and daily 40-question drills that enabled them to score 160+ in Physics.",
  },
  {
    question: "Is there any long-term contract lock-in?",
    answer:
      "None. Mentskool operates on transparent month-to-month plans. You can pause, cancel, or switch mentors with one click at any time.",
  },
];

export default function Neet1on1MentorshipPage() {
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
                label: "1-on-1 NEET Mentorship",
                href: "/neet-1-on-1-mentorship",
              },
            ]}
          />

          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-semibold mb-4">
              <Stethoscope className="w-3.5 h-3.5" />
              <span>Private 1-on-1 AIIMS Doctor Guidance</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              1-on-1 NEET Mentorship: <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Personal AIIMS Doctor Coaching</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Get dedicated 1-on-1 guidance from a verified <strong>AIIMS New Delhi doctor or top GMC ranker</strong> who knows exactly how to master the 720-mark NEET exam.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Find Your AIIMS Mentor</span>
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
          <div className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-emerald-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-400 mb-3">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Quick Answer: What Does 1-on-1 NEET Mentorship Include?</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-5">
              <strong>1-on-1 NEET Mentorship on Mentskool</strong> pairs medical aspirants directly with top-rankers from AIIMS New Delhi and premier Government Medical Colleges for personalized rank acceleration:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Private 1:1 Google Meet Calls:</strong> Weekly reviews of your NCERT retention, mock errors, and chapter-wise pacing.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Line-by-Line NCERT Audits:</strong> Targeted active recall on hidden exceptions, diagram notes, and inorganic trends.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Negative Marking Dissection:</strong> Audit every test mistake to systematically push mock test scores above 650.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Daily 94% Efficiency Dashboard:</strong> Daily problem verification with atomic 30-student cohort caps and zero annual lock-in.</span>
              </div>
            </div>
          </div>

          <section className="my-16">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                The 6 Pillars of Personal Medical Mentorship
              </h2>
              <p className="text-slate-400 text-sm mt-2">
                Conquer negative marking and master the high-yield NCERT syllabus.
              </p>
            </div>
            <ProgramFeatures />
          </section>

          <section className="mt-16">
            <SeoFaqAccordion
              faqs={faqs}
              title="Frequently Asked Questions: 1-on-1 NEET Mentorship"
              subtitle="Everything you need to know about medical mentor credentials, mock audits, and routine balance."
            />
          </section>

          <section className="mt-16">
            <SeoCtaBanner
              title="Connect 1-on-1 with an AIIMS Doctor Today"
              description="Zero long-term contracts. Transparent month-to-month freedom. Switch mentors anytime with 1 click."
              primaryButtonText="Find Your 1:1 Mentor"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
