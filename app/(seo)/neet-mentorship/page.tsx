import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Stethoscope,
  Microscope,
  Dna,
  HeartPulse,
  Sparkles,
  CheckCircle2,
  Award,
  Calendar,
  Layers,
  Clock,
  Target,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { ProgramFeatures } from "@/components/seo/ProgramFeatures";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "1:1 NEET Mentorship by AIIMS & Top GMC Rankers — NEET-UG 680+ Strategy",
  description:
    "Target 680+ in NEET-UG with 1-on-1 personal mentorship from rankers at AIIMS New Delhi and top government medical colleges. NCERT active recall, Physics numerical speed, and test error audits.",
  keywords: [
    "1 on 1 NEET mentorship",
    "NEET personal mentor AIIMS rankers",
    "AIIMS MBBS mentor guidance",
    "NEET dropper mentorship",
    "best mentorship for NEET",
    "score 680 in NEET",
  ],
  alternates: {
    canonical: "https://mentskool.com/neet-mentorship",
  },
  openGraph: {
    title: "1:1 NEET Mentorship by AIIMS & GMC Rankers | Mentskool",
    description:
      "Target 680+ with personalized weekly schedules, NCERT line retention tests, and mock error audits from AIIMS medical students.",
    url: "https://mentskool.com/neet-mentorship",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Mentskool NEET Mentorship",
      },
    ],
  },
};

const neetFaqs: FaqItem[] = [
  {
    question: "Who are the NEET mentors at Mentskool?",
    answer:
      "All Mentskool NEET mentors are top-ranking medical students and doctors currently studying at or recently graduated from premier medical colleges: AIIMS New Delhi, AIIMS Rishikesh, JIPMER Puducherry, MAMC New Delhi, and top Government Medical Colleges (GMCs). Every mentor personally scored 680+ in NEET-UG.",
  },
  {
    question: "How do mentors help with Physics numerical anxiety?",
    answer:
      "Most medical aspirants struggle with high-stress Physics numericals. Your AIIMS mentor pinpoints exactly which formulas and concepts yield 80% of questions (Mechanics, Modern Physics, Ray Optics, Thermal Physics) and trains you on mental approximations and template problem solving so you finish Physics within 50 minutes without fear.",
  },
  {
    question: "How is NCERT Biology retention tested?",
    answer:
      "Mentors assign chapter-wise diagram tests, match-the-column drills, and assertion-reason problem sheets every week. During weekly 1:1 Google Meet calls, they quiz you closed-book on footnotes and tables, evaluating your recall speed to guarantee a 350+ Biology score.",
  },
  {
    question: "Is this program suitable for NEET droppers and repeaters?",
    answer:
      "Yes! Drop year isolation and self-doubt are the #1 reasons droppers stumble. With weekly 1:1 strategy calls and real-time efficiency scoring, your mentor acts as your personal accountability partner through the final exam day.",
  },
  {
    question: "Can I take Mentskool mentorship alongside coaching (Allen, Aakash, PW)?",
    answer:
      "Yes. Over 75% of our students attend offline or online coaching. Your mentor builds daily timetables around your coaching lectures, checks that you finish module homework, and helps you clear old backlogs in dedicated 90-minute evening slots.",
  },
  {
    question: "What is Mentskool's refund policy?",
    answer:
      "We operate on flexible month-to-month subscriptions. If within the first 7 days you feel the mentorship is not right for you, you can request a 100% full refund with zero questions asked.",
  },
];

export default function NeetMentorshipPage() {
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
        "@type": "FAQPage",
        mainEntity: neetFaqs.map((faq) => ({
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
              { label: "Programs", href: "/neet-mentorship" },
              {
                label: "NEET Mentorship",
                href: "/neet-mentorship",
              },
            ]}
          />

          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-semibold mb-4">
              <Stethoscope className="w-3.5 h-3.5" />
              <span>NEET-UG 680+ Personal Mentorship Cohorts</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              1:1 NEET Mentorship: <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400">Target 680+ with AIIMS Rankers</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Target a top Government Medical College seat with private 1-on-1 guidance from recent rankers at <strong>AIIMS New Delhi, JIPMER, and top GMCs</strong>. Weekly custom roadmaps, NCERT active recall tests, and forensic mock error audits.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:to-teal-800 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Find Your 1:1 AIIMS Mentor</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/free-mentorship-session"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all"
              >
                Claim Free Medical Strategy Call
              </Link>
            </div>
          </div>

          {/* Direct Answer Box for AI Overviews & Search Snippets */}
          <section className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-emerald-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-400 mb-3">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Executive Summary: The Mentskool Medical Mentorship Engine</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-5">
              The <strong>Mentskool NEET Mentorship Program</strong> delivers a comprehensive 1-on-1 coaching system designed to turn high-potential medical aspirants into Government Medical College toppers through four core pillars:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Dual-Mode Mentorship:</strong> Weekly 1-on-1 private Google Meet strategy calls paired with small-cohort problem-solving drills (capped at 30).</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>94% Daily Task Efficiency Dashboard:</strong> Submit completed problem and chapter counts daily for mentor verification.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>NCERT Active Recall Testing:</strong> Closed-book quizzes on diagrams and summary points to guarantee 350+ Biology marks.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Zero Long Contracts:</strong> Transparent month-to-month plans with unlimited mentor re-matching.</span>
              </div>
            </div>
          </section>

          {/* Program Features Component */}
          <section className="my-16">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                The 4 Pillars of the Mentskool Medical Mentorship Engine
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
              faqs={neetFaqs}
              title="Frequently Asked Questions: 1:1 NEET Mentorship"
              subtitle="Everything you need to know about medical ranker mentorship, pricing, and routine integration."
            />
          </section>

          {/* CTA Banner */}
          <section className="mt-16">
            <SeoCtaBanner
              title="Transform Your NEET Preparation Today"
              description="Get paired with a verified doctor from AIIMS New Delhi or a top Government Medical College. Build your weekly study sheet and eliminate negative marks."
              primaryButtonText="Find Your AIIMS Mentor"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
