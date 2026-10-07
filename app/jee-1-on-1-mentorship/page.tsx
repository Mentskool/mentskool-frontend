import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Video,
  Layers,
  Award,
  Users,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { ProgramFeatures } from "@/components/seo/ProgramFeatures";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "1-on-1 JEE Mentorship by Verified IITians — Private Strategy & Daily Tracking",
  description:
    "Experience true 1-on-1 JEE mentorship. Dedicated IIT Bombay & Delhi rankers conduct weekly private Google Meet strategy sessions, build custom task sheets, and audit your daily problem count.",
  keywords: [
    "JEE 1-on-1 mentorship",
    "1 on 1 JEE mentor",
    "personal IIT JEE coaching online",
    "private JEE mentor calls",
    "IIT JEE ranker personal mentor",
    "JEE 1 on 1 doubt solving and strategy",
  ],
  alternates: {
    canonical: "https://mentskool.com/jee-1-on-1-mentorship",
  },
  openGraph: {
    title: "1-on-1 JEE Mentorship: Private Strategy Sessions with IIT Rankers",
    description:
      "Direct 1-on-1 Google Meet calls, custom weekly problem sheets, and daily task audits. Strict 30-student cohort caps with zero annual lock-in.",
    url: "https://mentskool.com/jee-1-on-1-mentorship",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "1-on-1 JEE Mentorship - Mentskool",
      },
    ],
  },
};

const faqs: FaqItem[] = [
  {
    question: "What actually happens during a 1-on-1 JEE mentorship session?",
    answer:
      "During private 1-on-1 video calls, your IITian mentor reviews your past week's efficiency score, analyzes test questions you got wrong, identifies conceptual versus calculation mistakes, resolves strategic doubts, and sets prioritized chapter milestones for the upcoming week.",
  },
  {
    question: "How is this different from group coaching or batch doubt counters?",
    answer:
      "In batch coaching with 100+ students, personal attention is impossible. In 1-on-1 mentorship, 100% of the session is focused on your specific weaknesses, your pace, your syllabus backlogs, and your target percentile.",
  },
  {
    question: "Are the mentors verified IITians?",
    answer:
      "Yes. Every single JEE mentor on Mentskool is a verified student or graduate from top IITs (IIT Bombay, IIT Delhi, IIT Madras, IIT Kharagpur, IIT Kanpur) who cracked JEE Advanced with top AIR ranks.",
  },
];

export default function Jee1on1MentorshipPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white selection:bg-brand-500/30 selection:text-brand-300">
      <HeroGridBackground />

      <main className="relative z-10 pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SeoBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "JEE Mentorship", href: "/jee-mentorship" },
              {
                label: "1-on-1 JEE Mentorship",
                href: "/jee-1-on-1-mentorship",
              },
            ]}
          />

          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-xs font-semibold mb-4">
              <Video className="w-3.5 h-3.5" />
              <span>Dedicated 1-on-1 Private Ranker Guidance</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              1-on-1 JEE Mentorship: <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-sky-300 to-indigo-400">Personal IITian Coaching</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Stop getting lost in 100-student batches. Connect directly via private Google Meet calls with an <strong>IIT Bombay or Delhi ranker</strong> who oversees your daily problem count, backlog recovery, and test temperament.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Browse 1-on-1 Mentors</span>
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
          <div className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-brand-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-400 mb-3">
              <Sparkles className="w-4 h-4 text-brand-400" />
              <span>Quick Answer: What Does 1-on-1 JEE Mentorship Include?</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-5">
              <strong>1-on-1 JEE Mentorship on Mentskool</strong> pairs you individually with a recent top IIT ranker. Unlike transactional hourly call networks or crowded batch coaching, it provides ongoing, structured guidance:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Private 1:1 Google Meet Calls:</strong> Weekly deep-dives into your individual progress, test mistakes, and syllabus pacing.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Customized Weekly Target Sheets:</strong> Personalized problem lists calibrated to your current speed and exam goals.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Daily 94% Efficiency Tracking:</strong> Daily problem submission verification with zero procrastination.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Atomic 30-Student Cap:</strong> Guaranteed low mentor-to-student ratio so your mentor truly knows your prep history.</span>
              </div>
            </div>
          </div>

          <section className="my-16">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                The 6 Pillars of 1-on-1 Personal Mentorship
              </h2>
              <p className="text-slate-400 text-sm mt-2">
                Built to bridge the gap between classroom teaching and individual rank achievement.
              </p>
            </div>
            <ProgramFeatures />
          </section>

          <section className="mt-16">
            <SeoFaqAccordion
              faqs={faqs}
              title="Frequently Asked Questions: 1-on-1 JEE Mentorship"
              subtitle="Clear answers on session format, mentor credentials, and daily accountability."
            />
          </section>

          <section className="mt-16">
            <SeoCtaBanner
              title="Experience Private 1-on-1 Mentorship with an IITian"
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
