import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Scale, Zap, ShieldCheck } from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { ComparisonTable, ComparisonRow } from "@/components/seo/ComparisonTable";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "MentorKhoj Alternative & Review (2026) — Dedicated Rankers vs Hourly Marketplace",
  description:
    "Comparing MentorKhoj with Mentskool? See why JEE & NEET aspirants choose Mentskool for continuous 1-on-1 mentorship by IIT & AIIMS rankers with daily accountability, instead of booking one-off hourly calls.",
  keywords: [
    "MentorKhoj alternative",
    "MentorKhoj review",
    "MentorKhoj JEE",
    "MentorKhoj NEET",
    "MentorKhoj vs Mentskool",
    "best 1 on 1 mentorship platform India",
    "continuous JEE mentorship vs hourly sessions",
  ],
  alternates: {
    canonical: "https://mentskool.com/compare/mentorkhoj-alternative",
  },
  openGraph: {
    title: "MentorKhoj Alternative: Continuous 1:1 Accountability vs Transactional Hourly Calls",
    description:
      "Why serious JEE & NEET aspirants prefer continuous daily task tracking, test post-mortems, and dedicated IIT/AIIMS rankers over one-off bookings.",
    url: "https://mentskool.com/compare/mentorkhoj-alternative",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "MentorKhoj Alternative - Mentskool",
      },
    ],
  },
};

const comparisonRows: ComparisonRow[] = [
  {
    feature: "Mentorship Continuity",
    description: "Whether you keep the same mentor who tracks your day-to-day progress.",
    mentskool: "Dedicated IIT/AIIMS Mentor assigned for your complete exam journey",
    competitor: "Hourly marketplace booking; different mentors each session",
  },
  {
    feature: "Focus & Specialization",
    description: "Specialized exam depth vs broad general directory.",
    mentskool: "100% Focused on JEE Main/Advanced & NEET-UG Rank Acceleration",
    competitor: "Broad marketplace across UPSC, CA, CLAT, Tech, AI, and school",
  },
  {
    feature: "Daily Accountability & Tracking",
    description: "How regularly your daily questions and hours are audited.",
    mentskool: "94% Dynamic Efficiency Score with daily dashboard verification",
    competitor: "No daily tracking; interaction ends when the hourly call finishes",
  },
  {
    feature: "Mock Test Post-Mortems",
    description: "Deep dissection of negative marks and silly errors.",
    mentskool: "Granular question-by-question mistake book audit after every test",
    competitor: "Limited to general discussion during booked time slots",
  },
  {
    feature: "Dual-Mode Mentorship",
    description: "Access to focused peer sprints alongside private sessions.",
    mentskool: "1:1 Strategy Calls + Capped Micro-Cohort Drills (Max 30)",
    competitor: "Only isolated 1:1 video calls",
  },
  {
    feature: "Mentor Switching Flexibility",
    description: "Freedom to change mentors without friction.",
    mentskool: "One-click mentor switch with seamless progress history transfer",
    competitor: "Must search and book another individual profile manually",
  },
];

const faqs: FaqItem[] = [
  {
    question: "What is the key difference between Mentskool and MentorKhoj?",
    answer:
      "MentorKhoj operates as an open gig marketplace where you book standalone hourly video calls across many different careers (UPSC, CLAT, CA, tech, etc.). Mentskool is a hyper-focused JEE and NEET mentorship engine where a dedicated IITian or AIIMS ranker partners with you long-term, monitoring your daily problem submissions, building custom weekly targets, and analyzing your mock test mistakes every single week until exam day.",
  },
  {
    question: "Why is continuous mentorship better than booking occasional one-off calls?",
    answer:
      "Cracking JEE and NEET requires months of discipline and iterative feedback. In a single one-off call, a mentor cannot know your past test history, study habits, or weak topics. With Mentskool, your dedicated mentor knows your exact backlog status, watches your efficiency score trend, and holds you accountable every single day.",
  },
  {
    question: "Are Mentskool mentors verified IIT and AIIMS rankers?",
    answer:
      "Yes. 100% of Mentskool mentors are rigorously verified top rankers currently studying at premier institutes like IIT Bombay, IIT Delhi, IIT Madras, AIIMS New Delhi, and top Government Medical Colleges.",
  },
  {
    question: "Can I try Mentskool without a long-term commitment?",
    answer:
      "Yes. Mentskool offers month-to-month subscriptions with complete freedom. You can pause, cancel, or switch mentors anytime without long lock-ins.",
  },
];

export default function MentorKhojAlternativePage() {
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
                label: "MentorKhoj Alternative",
                href: "/compare/mentorkhoj-alternative",
              },
            ]}
          />

          <div className="text-center max-w-3xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-xs font-semibold mb-4">
              <Scale className="w-3.5 h-3.5" />
              <span>Independent Feature Comparison (2026)</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-5 leading-tight">
              Looking for a <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-sky-300 to-emerald-400">MentorKhoj Alternative?</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Why settle for disconnected hourly calls when you can have a dedicated <strong>IITian or AIIMS ranker</strong> monitoring your daily study discipline, backlog clearance, and mock test scores?
            </p>
          </div>

          <div className="my-8 p-6 rounded-2xl border border-sky-500/20 bg-sky-950/20">
            <h2 className="text-xs uppercase font-black tracking-widest text-sky-400 mb-2">
              Quick Answer: Mentskool vs MentorKhoj
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              While <strong>MentorKhoj</strong> is an open marketplace for booking single hourly consultations across diverse disciplines (from UPSC and CA to software jobs), <strong>Mentskool</strong> is a dedicated performance engine for JEE and NEET aspirants. Mentskool provides an assigned IIT/AIIMS ranker, daily question tracking with a verified 94% efficiency score, weekly mistake audits, and atomic 30-student cohort caps.
            </p>
          </div>

          <ComparisonTable
            competitorName="MentorKhoj (Hourly Marketplace)"
            rows={comparisonRows}
          />

          <section className="mt-16 bg-gradient-to-br from-slate-900/90 to-slate-900/50 border border-slate-800 rounded-3xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
              Why JEE &amp; NEET Aspirants Need Long-Term Accountability Over Single Calls
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800">
                <div className="text-brand-400 text-2xl font-black mb-2">01</div>
                <h3 className="text-lg font-semibold text-white mb-2">Context That Builds Week After Week</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Booking new hourly sessions forces you to re-explain your syllabus and strengths each time. A dedicated Mentskool mentor understands your exact trajectory and diagnoses patterns across all your mock tests.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800">
                <div className="text-brand-400 text-2xl font-black mb-2">02</div>
                <h3 className="text-lg font-semibold text-white mb-2">Daily Execution Is Where Ranks Are Made</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  A 60-minute motivational conversation fades within 48 hours. Mentskool's daily dashboard accountability ensures you solve the required 80–120 questions every single day without procrastination.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800">
                <div className="text-brand-400 text-2xl font-black mb-2">03</div>
                <h3 className="text-lg font-semibold text-white mb-2">Zero Dilution (Strict 30 Max Cap)</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Every Mentskool mentor is protected with atomic cohort caps. No mentor is ever overloaded, guaranteeing you genuine attention and proactive follow-ups every week.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <SeoFaqAccordion
              faqs={faqs}
              title="Frequently Asked Questions: MentorKhoj vs Mentskool"
              subtitle="Everything you need to know about continuous mentorship vs hourly booking platforms."
            />
          </section>

          <section className="mt-16">
            <SeoCtaBanner
              title="Build Your Rank with a Dedicated IIT or AIIMS Mentor"
              description="Get continuous 1-on-1 guidance, daily study tracking, and mock test post-mortems with complete monthly flexibility."
              primaryButtonText="Find Your Mentor"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
