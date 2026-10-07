import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Scale } from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { ComparisonTable, ComparisonRow } from "@/components/seo/ComparisonTable";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "Hello Mentor Alternative & Review (2026) — Complete NEET Academic Prep vs Counselling",
  description:
    "Comparing Hello Mentor with Mentskool? Discover why NEET aspirants choose Mentskool for comprehensive 1:1 academic mentorship by AIIMS doctors, daily study tracking, and mock audits, not just admission counselling.",
  keywords: [
    "Hello Mentor alternative",
    "Hello Mentor review",
    "Hello Mentor NEET",
    "Hello Mentor vs Mentskool",
    "best NEET mentorship platform",
    "NEET personal mentor AIIMS",
    "1 on 1 NEET preparation mentorship",
  ],
  alternates: {
    canonical: "https://mentskool.com/compare/hello-mentor-alternative",
  },
  openGraph: {
    title: "Hello Mentor Alternative: 360° Academic Mentorship by AIIMS Rankers",
    description:
      "Score 680+ in NEET UG with year-round 1:1 strategy, daily NCERT revision accountability, and AIIMS doctor guidance — far beyond basic admission counselling.",
    url: "https://mentskool.com/compare/hello-mentor-alternative",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Hello Mentor Alternative - Mentskool",
      },
    ],
  },
};

const comparisonRows: ComparisonRow[] = [
  {
    feature: "Mentorship Scope",
    description: "Whether the program covers full academic preparation or only counselling.",
    mentskool: "Full 360° Academic Mentorship + Score Improvement + Test Audits",
    competitor: "Primarily post-exam college counselling and admission guidance",
  },
  {
    feature: "Mentor Credentials",
    description: "Who actually mentors you throughout the year.",
    mentskool: "Top AIIMS Doctors & GMC Rankers (AIR < 500 in NEET UG)",
    competitor: "Counselling advisors and admission consultants",
  },
  {
    feature: "Daily Question & NCERT Tracking",
    description: "Daily task verification to prevent procrastination.",
    mentskool: "94% Verified Efficiency Score with daily task submissions",
    competitor: "No daily subject tracking or question auditing",
  },
  {
    feature: "Mock Test Analysis (Negative Marks)",
    description: "Detailed dissection of test blunders and silly mistakes.",
    mentskool: "Question-by-question mistake book audit after every mock",
    competitor: "Not provided (focus is on cutoff marks and college allocation)",
  },
  {
    feature: "1:1 Live Video Strategy Calls",
    description: "Direct face-to-face tactical guidance with your mentor.",
    mentskool: "Weekly 1:1 Google Meet calls tailored to your syllabus completion",
    competitor: "Advisory calls primarily scheduled near exam/counselling phases",
  },
  {
    feature: "Pricing Transparency",
    description: "Flexibility and commitment duration.",
    mentskool: "Affordable month-to-month plans, cancel or switch mentors anytime",
    competitor: "Fixed admission counselling packages",
  },
];

const faqs: FaqItem[] = [
  {
    question: "What is the primary difference between Hello Mentor and Mentskool?",
    answer:
      "Hello Mentor is widely known for NEET UG/PG college admission and counselling guidance (helping you choose seats once your rank is decided). Mentskool is a comprehensive year-round academic mentorship system designed to help you *achieve* that top rank in the first place, pairing you with an AIIMS doctor who tracks your daily Biology NCERT retention, Physics problem solving, and Chemistry mock test accuracy.",
  },
  {
    question: "Who are the mentors on Mentskool for NEET preparation?",
    answer:
      "All NEET mentors on Mentskool are verified top rankers studying at prestigious institutes like AIIMS New Delhi, AIIMS Rishikesh, JIPMER, and top Government Medical Colleges (GMC). They conquered the exact 720-mark NEET UG exam and share the exact high-yield revision routines they used.",
  },
  {
    question: "How does Mentskool help reduce negative marks in NEET mock tests?",
    answer:
      "Negative marks are the #1 reason students miss GMC cutoffs. In every weekly 1:1 session, your mentor reviews your mistake book, categorizing errors into conceptual gaps, misread options, and time pressure faults, giving you targeted micro-drills to stop marks bleeding.",
  },
  {
    question: "Can I try Mentskool for just one month before committing?",
    answer:
      "Absolutely. Mentskool does not force you into expensive multi-year lock-in contracts. You can choose a monthly plan, connect 1-on-1 with an AIIMS mentor, and experience the boost in your daily study hours and consistency immediately.",
  },
];

export default function HelloMentorAlternativePage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white selection:bg-brand-500/30 selection:text-brand-300">
      <HeroGridBackground />

      <main className="relative z-10 pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SeoBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Comparisons", href: "/#comparisons" },
              {
                label: "Hello Mentor Alternative",
                href: "/compare/hello-mentor-alternative",
              },
            ]}
          />

          <div className="text-center max-w-3xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-xs font-semibold mb-4">
              <Scale className="w-3.5 h-3.5" />
              <span>Independent Feature & Experience Comparison (2026)</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-5 leading-tight">
              Looking for a <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Hello Mentor Alternative?</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Counselling helps after the exam — but <strong>daily 1:1 academic mentorship with an AIIMS doctor</strong> is what gets you the 680+ score to secure your government MBBS seat.
            </p>
          </div>

          <ComparisonTable
            competitorName="Hello Mentor (Counselling Service)"
            rows={comparisonRows}
          />

          <section className="mt-16 bg-gradient-to-br from-slate-900/90 to-slate-900/50 border border-slate-800 rounded-3xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
              The 3 Pillars of Mentskool's NEET Rank Acceleration
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800">
                <div className="text-emerald-400 text-2xl font-black mb-2">01</div>
                <h3 className="text-lg font-semibold text-white mb-2">Line-by-Line NCERT Audits</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Your mentor tests your active recall on high-frequency NCERT lines and diagram questions so you enter the exam hall with zero confusion.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800">
                <div className="text-emerald-400 text-2xl font-black mb-2">02</div>
                <h3 className="text-lg font-semibold text-white mb-2">Physics Numerical Confidence</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Stuck in Physics? AIIMS rankers teach you formula derivation, dimensional shortcuts, and rapid elimination methods to score 150+ in Physics.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800">
                <div className="text-emerald-400 text-2xl font-black mb-2">03</div>
                <h3 className="text-lg font-semibold text-white mb-2">OMR & Negative Mark Strategy</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Analyze every negative mark. Stop guessing under pressure and master time distribution across 180 questions with personalized mock debriefs.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <SeoFaqAccordion
              faqs={faqs}
              title="Frequently Asked Questions: Hello Mentor vs Mentskool"
              subtitle="Everything you need to know about academic mentorship vs medical admission counselling."
            />
          </section>

          <section className="mt-16">
            <SeoCtaBanner
              title="Secure Your Dream Government MBBS Seat"
              description="Get paired with a verified AIIMS doctor who will build your weekly revision strategy and monitor your daily problem count."
              primaryButtonText="Find AIIMS Mentors"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
