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
  CheckCircle,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { ProgramFeatures } from "@/components/seo/ProgramFeatures";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "1:1 NEET Mentorship by AIIMS & Top GMC Rankers — NEET-UG 680+ Strategy",
  description:
    "Target 680+ in NEET-UG with 1-on-1 personal mentorship from rankers at AIIMS New Delhi and top government medical colleges. NCERT drills, Physics numerical speed, and test audits.",
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
      "All Mentskool NEET mentors are top-ranking medical students currently at AIIMS New Delhi, AIIMS Rishikesh/Bhopal/Jodhpur, MAMC, and top Government Medical Colleges (GMCs) who scored 680+ marks in NEET-UG.",
  },
  {
    question: "How do mentors help with Physics numerical fear?",
    answer:
      "Most medical aspirants struggle with high-stress Physics numericals. Your AIIMS mentor pinpoints exactly which formulas and concepts yield 80% of questions (Mechanics, Modern Physics, Ray Optics) and trains you on mental approximations so you finish Physics within 45 minutes.",
  },
  {
    question: "How is NCERT Biology retention tracked?",
    answer:
      "Mentors assign chapter-wise diagram tests, match-the-column drills, and assertion-reason problem sheets every week, evaluating your recall speed to guarantee a 340+ Biology score.",
  },
  {
    question: "Is this program suitable for NEET droppers and repeaters?",
    answer:
      "Yes! Drop year isolation and self-doubt are the #1 reasons droppers stumble. With weekly 1:1 strategy calls and real-time efficiency scoring, your mentor acts as your personal accountability partner through the final exam day.",
  },
];

export default function NeetMentorshipPage() {
  return (
    <div className="w-full bg-[#EBF3FB] min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <HeroGridBackground />
        <div className="max-w-6xl mx-auto relative z-10">
          <SeoBreadcrumbs items={[{ label: "Programs", href: "/#how-it-works" }, { label: "1:1 NEET Mentorship" }]} />

          <div className="text-center max-w-3xl mx-auto space-y-6 pt-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-cyan-200 text-cyan-900 text-xs font-bold uppercase tracking-wider shadow-soft">
              <Stethoscope className="w-3.5 h-3.5 text-cyan-600" />
              <span>NEET-UG 680+ Personal Mentorship Cohorts</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display text-ink tracking-tight leading-[1.1]">
              Achieve Your Dream White Coat with Mentorship from{" "}
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                AIIMS &amp; Top GMC Rankers
              </span>
            </h1>

            <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-2xl mx-auto">
              NEET is an exam of speed, zero negative marks, and flawless NCERT recall. Work 1-on-1 with medical students who conquered your exact exam syllabus and secured government MBBS seats.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 max-w-2xl mx-auto pt-2">
              <div className="p-3.5 rounded-2xl bg-white/90 border border-cyan-100 shadow-soft text-center">
                <div className="text-2xl font-black font-display text-cyan-700">680+</div>
                <div className="text-[11px] font-semibold text-ink-muted mt-0.5">Mentor NEET Scores</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/90 border border-cyan-100 shadow-soft text-center">
                <div className="text-2xl font-black font-display text-blue-600">340+ Bio</div>
                <div className="text-[11px] font-semibold text-ink-muted mt-0.5">NCERT Target Drill</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/90 border border-cyan-100 shadow-soft text-center">
                <div className="text-2xl font-black font-display text-indigo-600">30 Max</div>
                <div className="text-[11px] font-semibold text-ink-muted mt-0.5">Students / Cohort</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/90 border border-cyan-100 shadow-soft text-center">
                <div className="text-2xl font-black font-display text-emerald-600">94%</div>
                <div className="text-[11px] font-semibold text-ink-muted mt-0.5">Weekly Discipline</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 hover:from-cyan-700 hover:to-blue-700 text-white shadow-elevated hover:shadow-card hover:-translate-y-0.5 transition-all group"
              >
                <span>Find Your AIIMS Mentor</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/#how-it-works"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-white/90 hover:bg-white border border-mist text-ink shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Details */}
      <div className="w-full bg-white rounded-t-[44px] border-t border-mist py-16 px-4 sm:px-6 lg:px-8 shadow-soft">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* AEO / GEO Quick Answer Snippet for Search & AI Engines */}
          <section className="p-6 sm:p-8 rounded-3xl bg-cyan-50/70 border border-cyan-200/80 shadow-soft">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-cyan-900 mb-3">
              <Sparkles className="w-4 h-4 text-cyan-600" />
              <span>Quick Answer: What 1-on-1 NEET Mentorship Provides</span>
            </div>
            <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium mb-4">
              <strong>1-on-1 NEET Mentorship by Mentskool</strong> pairs medical aspirants directly with verified recent top-rankers from <strong>AIIMS New Delhi, AIIMS Rishikesh, and top Government Medical Colleges</strong> to secure a 680+ score:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-cyan-700 mt-0.5 shrink-0" />
                <span><strong>Line-by-Line NCERT Audits:</strong> Targeted active recall drills on hidden NCERT exceptions, diagrams, and high-frequency lines.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-cyan-700 mt-0.5 shrink-0" />
                <span><strong>Negative Marks Post-Mortem:</strong> Audit test mistakes into conceptual vs silly errors to stop marks bleeding in mock tests.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-cyan-700 mt-0.5 shrink-0" />
                <span><strong>Daily 94% Efficiency Dashboard:</strong> Daily question verification and chapter targets to eliminate procrastination.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-cyan-700 mt-0.5 shrink-0" />
                <span><strong>Direct 1:1 Live Google Meet Calls:</strong> Weekly personal tactical strategy sessions with zero annual lock-in contracts.</span>
              </div>
            </div>
          </section>
          {/* Subject Strategy */}
          <section className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest bg-cyan-50 border border-cyan-200/60 px-3 py-1 rounded-full">
                THE 680+ SCORE BLUEPRINT
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-ink tracking-tight">
                Subject Strategy for Medical Aspirants
              </h2>
              <p className="text-xs sm:text-sm text-ink-muted">
                How our AIIMS mentors structure your weekly milestones:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-7 rounded-3xl bg-slate-50 border border-mist space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  <Dna className="w-5 h-5" />
                </div>
                <h3 className="font-bold font-display text-lg text-ink">Biology: 340+ NCERT Fortress</h3>
                <p className="text-xs text-ink-muted leading-relaxed">
                  Line-by-line active recall drills covering hidden NCERT exceptions, diagrams, and historical scientist notes so you finish Biology in under 35 minutes.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-slate-50 border border-mist space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center font-bold">
                  <Microscope className="w-5 h-5" />
                </div>
                <h3 className="font-bold font-display text-lg text-ink">Chemistry: Zero-Negative Balance</h3>
                <p className="text-xs text-ink-muted leading-relaxed">
                  Targeted question sheets on physical calculations, inorganic table trends, and organic named reactions to lock down 160+ marks.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-slate-50 border border-mist space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <h3 className="font-bold font-display text-lg text-ink">Physics: Numerical Speed &amp; Confidence</h3>
                <p className="text-xs text-ink-muted leading-relaxed">
                  Convert Physics from your weakest subject to your rank decider. Learn high-yield formula tricks and question elimination strategies.
                </p>
              </div>
            </div>
          </section>

          {/* Features */}
          <ProgramFeatures
            heading="Why NEET Rankers Recommend Mentskool"
            subheading="Experience true personal guidance without getting lost in 500-student coaching batches."
          />

          {/* FAQs */}
          <SeoFaqAccordion
            title="NEET Mentorship FAQs"
            subtitle="Clear answers about mentors, study plans, and results."
            faqs={neetFaqs}
          />

          {/* CTA */}
          <SeoCtaBanner
            title="Book Your 1:1 AIIMS Medical Mentor Today"
            description="Small cohort sizes (max 30 seats) guarantee your mentor knows every weak question on your test sheet. Start your personalized journey."
            primaryButtonText="Find NEET Mentors"
            primaryButtonHref="/mentors"
          />
        </div>
      </div>
    </div>
  );
}
