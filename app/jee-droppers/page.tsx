import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Clock,
  TrendingUp,
  Flame,
  CheckCircle2,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { ProgramFeatures } from "@/components/seo/ProgramFeatures";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "Best Mentorship for JEE Droppers & Repeaters — 1:1 Accountability by IITians",
  description:
    "Turn your drop year into an IIT rank. 1:1 personalized mentorship for JEE droppers with daily accountability, syllabus pacing, and mock test mistake auditing by IIT rankers.",
  keywords: [
    "best mentorship program for JEE droppers",
    "JEE repeater mentorship",
    "JEE dropper accountability",
    "drop year strategy JEE Advanced",
    "IIT JEE repeater study plan",
  ],
  alternates: {
    canonical: "https://mentskool.com/jee-droppers",
  },
  openGraph: {
    title: "Best Mentorship for JEE Droppers & Repeaters | Mentskool",
    description:
      "Daily discipline, syllabus calibration, and test error audits from mentors who turned their own drop year into top IIT ranks.",
    url: "https://mentskool.com/jee-droppers",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Mentskool JEE Dropper Mentorship",
      },
    ],
  },
};

const dropperFaqs: FaqItem[] = [
  {
    question: "Why do droppers need 1:1 mentorship rather than more lectures?",
    answer:
      "Droppers already know the core concepts — their main challenge is consistency, isolation, and unanalyzed mock test errors. Watching more lectures won't fix calculation blunders or low test accuracy. 1:1 accountability ensures you solve the right questions and fix mistakes immediately.",
  },
  {
    question: "Have Mentskool mentors also taken a drop year?",
    answer:
      "Yes! Many of our top IIT mentors took a drop year themselves and increased their percentile from 92% to 99.8%+, eventually securing top branches in IIT Bombay, Delhi, and Roorkee. They know the exact mental hurdles and revision schedules required.",
  },
  {
    question: "How does Mentskool prevent drop-year burnout?",
    answer:
      "With weekly 1:1 strategy calls, mentors adjust your syllabus load to prevent burnout. Our proprietary 94% efficiency score tracks your pace dynamically, keeping motivation high without overwhelming you.",
  },
  {
    question: "Can I get help analyzing my coaching mock tests (Allen/FIITJEE/Resonance)?",
    answer:
      "Absolutely. In your 1:1 strategy calls, you and your mentor review your question paper line-by-line to categorize mistakes into silly, conceptual, or time-management errors.",
  },
];

export default function JeeDroppersPage() {
  return (
    <div className="w-full bg-[#EBF3FB] min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <HeroGridBackground />
        <div className="max-w-6xl mx-auto relative z-10">
          <SeoBreadcrumbs items={[{ label: "Programs", href: "/#how-it-works" }, { label: "JEE Dropper Mentorship" }]} />

          <div className="text-center max-w-3xl mx-auto space-y-6 pt-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider shadow-soft">
              <Flame className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
              <span>Tailored Drop-Year Consistency &amp; Rank Surge</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display text-ink tracking-tight leading-[1.1]">
              Make Your Drop Year Count with{" "}
              <span className="bg-gradient-to-r from-amber-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
                Uncompromising 1:1 Accountability
              </span>
            </h1>

            <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-2xl mx-auto">
              Your drop year does not need more factory video lectures — it needs laser-focused question solving, mock test audits, and a mentor who keeps you on track every single week.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 max-w-2xl mx-auto pt-2">
              <div className="p-3.5 rounded-2xl bg-white/90 border border-amber-100 shadow-soft text-center">
                <div className="text-2xl font-black font-display text-amber-700">+45 Marks</div>
                <div className="text-[11px] font-semibold text-ink-muted mt-0.5">Average Test Gain</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/90 border border-blue-100 shadow-soft text-center">
                <div className="text-2xl font-black font-display text-blue-600">&lt; 24h</div>
                <div className="text-[11px] font-semibold text-ink-muted mt-0.5">Task Feedback</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/90 border border-indigo-100 shadow-soft text-center">
                <div className="text-2xl font-black font-display text-indigo-600">30 Max</div>
                <div className="text-[11px] font-semibold text-ink-muted mt-0.5">Students / Cohort</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/90 border border-emerald-100 shadow-soft text-center">
                <div className="text-2xl font-black font-display text-emerald-600">Zero Lock-In</div>
                <div className="text-[11px] font-semibold text-ink-muted mt-0.5">Monthly Flexibility</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-amber-600 via-indigo-600 to-blue-700 hover:from-amber-700 hover:to-indigo-700 text-white shadow-elevated hover:shadow-card hover:-translate-y-0.5 transition-all group"
              >
                <span>Find Your Dropper Mentor</span>
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
          {/* Why Droppers Stumble Section */}
          <section className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest bg-amber-50 border border-amber-200/60 px-3 py-1 rounded-full">
                THE 3 DEADLY DROP-YEAR PITFALLS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-ink tracking-tight">
                How We Solve What Traditional Coaching Ignores
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-7 rounded-3xl bg-slate-50 border border-mist space-y-3">
                <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
                  ⚠️
                </div>
                <h3 className="font-bold font-display text-lg text-ink">The "Theory Loop" Trap</h3>
                <p className="text-xs text-ink-muted leading-relaxed">
                  Droppers re-watch lectures they already understand instead of solving timed problem sets. Your mentor forces rigorous problem sheets and reviews your submissions.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-slate-50 border border-mist space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                  📉
                </div>
                <h3 className="font-bold font-display text-lg text-ink">Unanalyzed Mock Tests</h3>
                <p className="text-xs text-ink-muted leading-relaxed">
                  Giving tests without auditing mistakes guarantees recurring negative marks. In 1:1 strategy calls, we dissect every wrong question and rewrite your test-taking template.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-slate-50 border border-mist space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                  🤝
                </div>
                <h3 className="font-bold font-display text-lg text-ink">Isolation &amp; Self-Doubt</h3>
                <p className="text-xs text-ink-muted leading-relaxed">
                  Studying alone from home induces panic around November-December. Your mentor provides weekly moral support and benchmarks your progress among 10 peers in your cohort.
                </p>
              </div>
            </div>
          </section>

          <ProgramFeatures
            heading="Built For Droppers Demanding Daily Discipline"
            subheading="Track every problem sheet and calibration with real-time score analytics."
          />

          <SeoFaqAccordion
            title="JEE Dropper Mentorship FAQs"
            subtitle="Everything you need to know about preparing with an IITian ranker during your drop year."
            faqs={dropperFaqs}
          />

          <SeoCtaBanner
            title="Turn Your Drop Year Into an IIT Success Story"
            description="Mentors are strictly capped at 30 students to provide real, individual guidance. Start your tailored roadmap today."
            primaryButtonText="Find Dropper Mentors"
            primaryButtonHref="/mentors"
          />
        </div>
      </div>
    </div>
  );
}
