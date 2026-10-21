import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Clock,
  AlertCircle,
  CheckCircle2,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  TrendingUp,
  Award,
  Layers,
  Flame,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { SeoMentorFunnel } from "@/components/seo/SeoMentorFunnel";
import { HeroGridBackground } from "@/components/HeroGridBackground";
import { StudyVelocityCalculatorWidget } from "@/components/seo/tools/StudyVelocityCalculatorWidget";

export const metadata: Metadata = {
  title: "JEE & NEET Daily Study Velocity Calculator: Backlog Triage & Problem Solve Rate",
  description:
    "Interactive Study Pace & Velocity Calculator for JEE and NEET aspirants. Calculate your daily problem-solving rate, time-split ratio (30/50/20 rule), and backlog recovery timetable based on your exam date.",
  keywords: [
    "jee study hour calculator",
    "neet study timetable maker",
    "study pace calculator",
    "how many hours to study for jee",
    "jee backlog clearing calculator",
    "daily question solving target jee neet",
    "study velocity calculator",
  ],
  alternates: {
    canonical: "https://mentskool.com/tools/jee-neet-daily-study-hour-calculator",
  },
  openGraph: {
    title: "JEE & NEET Daily Study Velocity Calculator & Timetable Planner",
    description:
      "Calculate exactly how many questions you must solve per day and how to divide your study blocks between theory, practice, and mock audits.",
    url: "https://mentskool.com/tools/jee-neet-daily-study-hour-calculator",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Study Velocity Calculator - Mentskool",
      },
    ],
  },
};

const faqs: FaqItem[] = [
  {
    question: "What is 'Study Velocity' and why is it more important than total study hours?",
    answer:
      "Study Velocity measures the rate of actionable output—specifically, the number of quality, exam-level problems solved and conceptual gaps closed per day—rather than passive hours spent sitting with an open textbook or video lecture. A student studying 6 hours at a velocity of 70 problems per day consistently outperforms a student studying 10 hours passively watching lecture recordings.",
  },
  {
    question: "What is the recommended 30/50/20 daily study time split rule?",
    answer:
      "Top rankers divide their daily self-study hours into three blocks: 1) 30% on Theory & Concept Refinement (reading NCERT or reviewing lecture notes), 2) 50% on Active Problem Solving (timed drills without looking at solutions), and 3) 20% on Mock Auditing & Error Book Updates (analyzing mistakes and consolidating formulas).",
  },
  {
    question: "How should I clear backlogs without falling behind on current coaching classes?",
    answer:
      "Never compromise your current syllabus to clear old backlogs, as that creates a rolling backlog cycle. Dedicate 75% of your daily study time to current syllabus mastery, and reserve 25% (or 2 to 3 hours on weekends) exclusively for backlogs. Focus on high-yield Tier 1 chapters first.",
  },
  {
    question: "How many questions should a serious JEE or NEET aspirant solve daily?",
    answer:
      "For JEE Main, aiming for 60 to 75 balanced problems daily (20 to 25 per subject across Physics, Chemistry, and Mathematics) is optimal. For NEET, where questions are less calculation-heavy, a pace of 90 to 120 questions daily (45 Biology, 25 Chemistry, 25 Physics) builds speed and pattern recognition.",
  },
  {
    question: "Is studying 14 hours every day necessary to crack JEE or NEET?",
    answer:
      "No. Cognitive science research demonstrates that human focus degrades sharply after 8 to 10 hours of intense intellectual effort. Consistently maintaining 7 to 9 focused, high-velocity hours with scheduled breaks and 7 hours of quality sleep yields higher retention and lower burnout than exhausting 14-hour marathons.",
  },
];

export default function JeeNeetDailyStudyHourCalculatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        name: "Mentskool",
        url: "https://mentskool.com",
        logo: "https://mentskool.com/logo.png",
      },
      {
        "@type": "WebApplication",
        name: "JEE & NEET Daily Study Velocity Calculator",
        applicationCategory: "EducationalApplication",
        operatingSystem: "All",
        url: "https://mentskool.com/tools/jee-neet-daily-study-hour-calculator",
        description:
          "Calculate your required daily question-solving velocity, backlog clearance pace, and 30/50/20 study block split for JEE and NEET.",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
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
              { label: "Tools", href: "/tools" },
              {
                label: "Daily Study Velocity Calculator",
                href: "/tools/jee-neet-daily-study-hour-calculator",
              },
            ]}
          />

          {/* Hero Section */}
          <header className="mt-8 mb-12 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <Clock className="w-4 h-4" />
              Cognitive Velocity &amp; Timetable Engineering
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight">
              JEE &amp; NEET Study Velocity Calculator:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-indigo-300 to-cyan-400">
                Backlog Triage &amp; Daily Problem Solve Rate
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Stop guessing how much you need to study. Enter your months remaining, backlogged chapters, and available daily hours to calculate your exact question-solving rate, hourly split, and feasibility score.
            </p>
          </header>

          {/* Interactive Calculator Widget */}
          <section className="mb-16">
            <StudyVelocityCalculatorWidget />
          </section>

          {/* Section 1: The 30/50/20 Rule Decoded */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Layers className="w-7 h-7 text-brand-400" />
              The Ranker 30/50/20 Daily Time Split Blueprint
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                <div className="text-brand-400 font-bold text-lg">30% Theory &amp; Notes</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Review concise notes, formula cheat sheets, and NCERT text. Avoid re-watching entire 2-hour lecture videos for topics you already understand; use active retrieval instead.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                <div className="text-emerald-400 font-bold text-lg">50% Timed Problem Solving</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Solve chapter PYQs under a timer (e.g., 30 questions in 45 minutes) without peeking at solutions. The brain builds retrieval speed only when forced to struggle through unassisted problems.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                <div className="text-cyan-400 font-bold text-lg">20% Error Audit &amp; Revision</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Analyze every unsolved or wrong problem from your daily practice block. Enter recurring mistakes into your Error Book so you do not repeat the same calculation slips.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Backlog Triage Framework */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Flame className="w-7 h-7 text-amber-400" />
              The 3-Tier Backlog Triage Matrix
            </h2>
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-4">
              <p className="text-slate-300 text-sm leading-relaxed">
                When backlogs exceed 10 chapters, attempting to cover everything equally guarantees burnout. Triage your backlogged topics into three strategic categories:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300 pt-2">
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                  <strong className="text-emerald-400 block mb-1">Tier 1: High Yield &amp; Accessible</strong>
                  Modern Physics, Vectors &amp; 3D, Coordination Chemistry, Genetics. Clear these first with 50 PYQs each to bank fast marks.
                </div>
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                  <strong className="text-cyan-400 block mb-1">Tier 2: Foundational Prerequisites</strong>
                  Periodic Table, Basic Kinematics, Mole Concept. Master core formulas so you can understand advanced chapters.
                </div>
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                  <strong className="text-amber-400 block mb-1">Tier 3: Low ROI or Very Lengthy</strong>
                  Rotational Dynamics or Complex Numbers. Learn only baseline formulas and direct PYQ patterns; don&apos;t lose 3 weeks on these.
                </div>
              </div>
            </div>
          </section>

          {/* Dedicated High-Converting Mentorship Funnel */}
          <SeoMentorFunnel
            examFocus="BOTH"
            title="Audit Your Daily Velocity With Top IITian &amp; AIIMS Mentors"
            subtitle="Build a realistic daily study timetable that clears backlogs without burning out. Work 1-on-1 with mentors who cracked JEE and NEET to optimize your study pace."
          />

          {/* Section 3: FAQ Accordion */}
          <section className="my-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center justify-center gap-3">
                <HelpCircle className="w-7 h-7 text-brand-400" />
                Frequently Asked Questions: Study Hours &amp; Velocity
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Realistic advice on pacing, timetable scheduling, and backlog recovery.
              </p>
            </div>
            <SeoFaqAccordion items={faqs} />
          </section>

          {/* Final Call to Action */}
          <SeoCtaBanner
            title="Build an Achievable Study Plan for JEE &amp; NEET"
            subtitle="Connect with mentors who will assess your study pace, balance your subject hours, and help you stay accountable every week."
            primaryBtnText="Claim Free Mentorship Call"
            primaryBtnHref="/free-mentorship-session"
            secondaryBtnText="Explore Top Mentors"
            secondaryBtnHref="/mentors"
          />
        </div>
      </main>
    </div>
  );
}
