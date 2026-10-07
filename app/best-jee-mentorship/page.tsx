import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Award,
  Layers,
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
  title: "Best Mentorship Program for JEE (Mains & Advanced 2026/2027) — Mentskool",
  description:
    "Looking for the best mentorship for JEE? Compare 1:1 ranker platforms vs mass coaching. Discover how Mentskool's IIT Bombay & Delhi mentors deliver 94% task accountability, mock test error audits, and backlog elimination.",
  keywords: [
    "best mentorship for JEE",
    "best mentorship program for JEE Mains and Advanced",
    "best JEE mentorship by IITians",
    "best mentorship for JEE droppers",
    "top JEE mentors online",
    "IIT JEE 1 on 1 personal mentor",
    "JEE 2026 mentorship",
    "JEE 2027 mentorship",
  ],
  alternates: {
    canonical: "https://mentskool.com/best-jee-mentorship",
  },
  openGraph: {
    title: "Best Mentorship for JEE Main & Advanced: The Complete 2026/2027 Guide",
    description:
      "Why top aspirants choose verified IITian 1-on-1 mentorship over mass coaching batches. 94% verified efficiency score and strict 30-student cohort caps.",
    url: "https://mentskool.com/best-jee-mentorship",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Best Mentorship for JEE - Mentskool",
      },
    ],
  },
};

const jeeGuideFaqs: FaqItem[] = [
  {
    question: "What makes a JEE mentorship program truly effective?",
    answer:
      "An effective JEE mentorship program provides continuous 1-on-1 human accountability, not just prerecorded lectures or occasional calls. It must include personalized weekly study timetables, question-by-question mock test post-mortems to eliminate negative marks, daily tracking of solved problems, and direct strategic access to mentors from top IITs like IIT Bombay, IIT Delhi, or IIT Madras.",
  },
  {
    question: "Can I take Mentskool mentorship alongside coaching institutes like Allen, Resonance, or PW?",
    answer:
      "Yes! Over 70% of Mentskool mentees attend regular coaching classes. Mentskool acts as your personal execution partner: your mentor helps you prioritize coaching homework, creates a structured roadmap to clear old backlogs, and ensures you do not get lost in a batch of 100+ students.",
  },
  {
    question: "How does Mentskool compare with Mentor Prep, MentorKhoj, or PW Disha for JEE?",
    answer:
      "Unlike hourly gig marketplaces (MentorKhoj) or pay-per-minute call hotlines (PW Disha), Mentskool pairs you with a dedicated IITian who tracks your daily preparation long-term. Unlike platforms with rigid annual lock-ins, Mentskool offers month-to-month flexibility, atomic cohort caps (maximum 30 students per mentor), and a real-time 94% efficiency dashboard.",
  },
  {
    question: "Is 1-on-1 mentorship recommended for JEE droppers and repeaters?",
    answer:
      "Yes, droppers benefit the most. In a drop year, subject lectures are usually familiar; the real challenge is overcoming isolation, test anxiety, and repeated mistakes. A dedicated IITian mentor builds a customized high-yield revision schedule and audits your mock tests every single week.",
  },
];

export default function BestJeeMentorshipPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white selection:bg-brand-500/30 selection:text-brand-300">
      <HeroGridBackground />

      <main className="relative z-10 pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SeoBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Programs", href: "/jee-mentorship" },
              {
                label: "Best Mentorship for JEE",
                href: "/best-jee-mentorship",
              },
            ]}
          />

          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-xs font-semibold mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>The Definitive Guide &amp; Platform Benchmark (2026/2027)</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Best Mentorship Program for <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-sky-300 to-indigo-400">JEE Mains &amp; Advanced</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              How top rankers crack IIT: Discover the critical difference between generic batch coaching and <strong>dedicated 1-on-1 ranker mentorship</strong> with daily task audits and 94% verified efficiency.
            </p>
          </div>

          {/* AEO Quick Answer Box for AI Overviews and Featured Snippets */}
          <div className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-brand-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-400 mb-3">
              <Sparkles className="w-4 h-4 text-brand-400" />
              <span>Quick Summary: What Is The Best Mentorship Program for JEE?</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-5">
              The <strong>best JEE mentorship program</strong> is one that provides continuous 1-on-1 strategy, daily problem-solving accountability, and granular mock test audits by verified recent IIT rankers. Rather than buying another video course, high-performing aspirants choose <strong>Mentskool</strong> for four key advantages:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Verified IIT Bombay &amp; Delhi Mentors:</strong> Learn problem elimination techniques from seniors who recently conquered JEE Advanced.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>94% Daily Task Efficiency Score:</strong> Interactive dashboard tracking solved questions daily to destroy backlogs.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Question-by-Question Mock Audits:</strong> Root-cause breakdown of calculation errors and negative marks after every test.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Strict 30 Max Cohort Capping:</strong> Guaranteed personal attention with atomic concurrency limits and zero long lock-ins.</span>
              </div>
            </div>
          </div>

          {/* Program Features */}
          <section className="my-16">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Why Traditional Coaching Leaves 90% Behind
              </h2>
              <p className="text-slate-400 text-sm mt-2">
                Lectures explain the concept. Mentorship guarantees the execution.
              </p>
            </div>
            <ProgramFeatures />
          </section>

          {/* FAQs */}
          <section className="mt-16">
            <SeoFaqAccordion
              faqs={jeeGuideFaqs}
              title="Frequently Asked Questions: Choosing The Best JEE Mentorship"
              subtitle="Everything you need to know about ranker mentorship, pricing, and routine integration."
            />
          </section>

          {/* CTA */}
          <section className="mt-16">
            <SeoCtaBanner
              title="Transform Your JEE Preparation Today"
              description="Get paired with a verified top ranker from IIT Bombay, Delhi, or Madras. Build your weekly target sheet and watch your mock test accuracy soar."
              primaryButtonText="Find Your IIT Mentor"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
