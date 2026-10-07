import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Award,
  Stethoscope,
  Target,
  Clock,
  BookOpen,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { ProgramFeatures } from "@/components/seo/ProgramFeatures";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "Best Mentorship Program for NEET (UG 2026/2027) — Mentskool",
  description:
    "Looking for the best mentorship for NEET? Discover why medical aspirants choose Mentskool's AIIMS Delhi & top GMC doctor mentors for 680+ score roadmaps, NCERT line audits, and negative marks reduction.",
  keywords: [
    "best mentorship for NEET",
    "best mentorship program for NEET UG",
    "best NEET mentorship AIIMS",
    "top NEET mentors online",
    "NEET dropper mentorship program",
    "1 on 1 NEET personal mentor",
    "NEET 2026 mentorship",
    "NEET 2027 mentorship",
  ],
  alternates: {
    canonical: "https://mentskool.com/best-neet-mentorship",
  },
  openGraph: {
    title: "Best Mentorship for NEET UG: The Complete 2026/2027 Guide to 680+",
    description:
      "Why top medical aspirants choose verified AIIMS doctor 1-on-1 mentorship over mass coaching batches. 94% verified efficiency score and line-by-line NCERT drills.",
    url: "https://mentskool.com/best-neet-mentorship",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Best Mentorship for NEET - Mentskool",
      },
    ],
  },
};

const neetGuideFaqs: FaqItem[] = [
  {
    question: "What should I look for in the best NEET mentorship program?",
    answer:
      "The best NEET mentorship program pairs you 1-on-1 with a verified AIIMS or top Government Medical College (GMC) ranker. It should focus on high-yield NCERT Biology retention, Physics numerical shortcuts, daily problem targets, and question-by-question mock test post-mortems to stop negative marks bleeding.",
  },
  {
    question: "Can I use Mentskool alongside coaching institutes like Aakash, Allen, or Physics Wallah?",
    answer:
      "Yes! Most Mentskool students are enrolled in regular coaching. Your AIIMS mentor acts as your personal strategist: structuring your daily study hours around coaching lectures, scheduling active revision for forgotten chapters, and auditing your mistake book.",
  },
  {
    question: "How does Mentskool compare to Mentor Prep, ToppersClubs, or Hello Mentor for NEET?",
    answer:
      "Unlike Hello Mentor (which focuses mainly on post-exam college counselling), Mentskool is a year-round academic performance engine. Unlike platforms with rigid annual fees, Mentskool provides month-to-month flexibility, atomic 30-student cohort caps, and a real-time web efficiency dashboard.",
  },
  {
    question: "How does 1-on-1 mentorship help improve NEET mock test scores from 500 to 650+?",
    answer:
      "Moving from 500 to 650+ requires eliminating negative marks and mastering Physics numericals. In every weekly session, your mentor reviews your actual test paper, isolates recurring blunder categories, and prescribes targeted micro-drills to stop losing easy marks.",
  },
];

export default function BestNeetMentorshipPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white selection:bg-brand-500/30 selection:text-brand-300">
      <HeroGridBackground />

      <main className="relative z-10 pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SeoBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Programs", href: "/neet-mentorship" },
              {
                label: "Best Mentorship for NEET",
                href: "/best-neet-mentorship",
              },
            ]}
          />

          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-semibold mb-4">
              <Stethoscope className="w-3.5 h-3.5" />
              <span>The Definitive Guide &amp; Platform Benchmark (2026/2027)</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Best Mentorship Program for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">NEET UG (680+ Blueprint)</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              How future doctors secure Government MBBS seats: Discover how <strong>dedicated 1-on-1 mentorship with AIIMS rankers</strong> delivers daily NCERT discipline, Physics numerical confidence, and mock score breakthroughs.
            </p>
          </div>

          {/* AEO Quick Answer Box */}
          <div className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-emerald-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-400 mb-3">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Quick Summary: What Is The Best Mentorship Program for NEET?</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-5">
              The <strong>best NEET mentorship program</strong> is one that provides continuous 1-on-1 strategy, daily question-solving discipline, and negative marks reduction by verified recent AIIMS and top GMC doctors. Rather than relying on mass classes alone, medical aspirants choose <strong>Mentskool</strong> for four key advantages:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Verified AIIMS Doctors &amp; Top GMC Mentors:</strong> Personal coaching from mentors who achieved AIR &lt; 500 in recent NEET exams.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Line-by-Line NCERT Retention Audits:</strong> Master hidden NCERT exceptions, diagrams, and summary points to finish Biology in under 35 minutes.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Physics Numerical Elimination Tactics:</strong> Step-by-step formula derivation drills to comfortably score 150+ in Physics.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Strict 30 Max Cohort Capping:</strong> Guaranteed personal attention with zero long-term lock-in contracts and 1-click mentor switching.</span>
              </div>
            </div>
          </div>

          {/* Program Features */}
          <section className="my-16">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Built Specifically for 680+ Score Acceleration
              </h2>
              <p className="text-slate-400 text-sm mt-2">
                Conquer negative marking and master the high-yield NCERT syllabus.
              </p>
            </div>
            <ProgramFeatures />
          </section>

          {/* FAQs */}
          <section className="mt-16">
            <SeoFaqAccordion
              faqs={neetGuideFaqs}
              title="Frequently Asked Questions: Choosing The Best NEET Mentorship"
              subtitle="Everything you need to know about medical mentor credentials, mock audits, and routine balance."
            />
          </section>

          {/* CTA */}
          <section className="mt-16">
            <SeoCtaBanner
              title="Secure Your Government MBBS Seat with an AIIMS Doctor"
              description="Get continuous 1-on-1 strategy, weekly mock analysis, and daily NCERT revision accountability. Flexible monthly subscriptions."
              primaryButtonText="Find AIIMS Mentors"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
