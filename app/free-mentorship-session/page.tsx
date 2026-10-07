import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Gift,
  Calendar,
  Clock,
  UserCheck,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "Free 1-on-1 Mentorship Session & Strategy Audit — JEE & NEET",
  description:
    "Claim your free 1-on-1 strategy consultation with a verified IITian or AIIMS ranker. Get your personalized syllabus roadmap, backlog diagnosis, and mock test score audit with zero commitment.",
  keywords: [
    "free mentorship session for JEE",
    "free 60 minute NEET mentorship demo",
    "free JEE study roadmap",
    "free mentor consultation IITian",
    "free NEET doctor mentorship",
    "free mentor demo India",
    "free study timetable for JEE droppers",
  ],
  alternates: {
    canonical: "https://mentskool.com/free-mentorship-session",
  },
  openGraph: {
    title: "Claim Your Free 1:1 JEE & NEET Mentorship Session | Mentskool",
    description:
      "Get a 1-on-1 strategy audit from a top IIT or AIIMS ranker. Identify your preparation bottlenecks, fix backlogs, and plan your rank breakthrough.",
    url: "https://mentskool.com/free-mentorship-session",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Free 1:1 Mentorship Session - Mentskool",
      },
    ],
  },
};

const freeSessionFaqs: FaqItem[] = [
  {
    question: "Is the initial mentorship session really 100% free?",
    answer:
      "Yes! You can connect with an expert mentor for an initial strategy consultation with zero upfront payment or credit card requirement. It is designed to diagnose your current preparation level, pinpoint backlogs, and give you an actionable roadmap.",
  },
  {
    question: "Who conducts the free strategy session?",
    answer:
      "Your session is conducted directly by a verified recent top ranker from an IIT (e.g., IIT Bombay, IIT Delhi, IIT Madras) or a premier medical institute (e.g., AIIMS New Delhi, top GMCs).",
  },
  {
    question: "What will we cover during the consultation?",
    answer:
      "During the session, your mentor will audit your recent mock test performance, review your current syllabus coverage and backlog status, recommend subject prioritization, and build a customized weekly timetable tailored to your school or drop year.",
  },
  {
    question: "Do I have to purchase a plan after the free session?",
    answer:
      "No obligation at all. If you find the roadmap valuable and want ongoing daily tracking, weekly Google Meet strategy sessions, and 94% efficiency scoring, you can choose one of our flexible monthly plans.",
  },
];

export default function FreeMentorshipSessionPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white selection:bg-brand-500/30 selection:text-brand-300">
      <HeroGridBackground />

      <main className="relative z-10 pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SeoBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              {
                label: "Free Mentorship Session",
                href: "/free-mentorship-session",
              },
            ]}
          />

          <div className="text-center max-w-3xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-semibold mb-4">
              <Gift className="w-3.5 h-3.5" />
              <span>100% Free Strategy &amp; Backlog Diagnosis Session</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Get a <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-300 to-indigo-400">Free 1-on-1 Mentorship</span> Consultation
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Connect 1-on-1 with a verified <strong>IITian or AIIMS ranker</strong> to diagnose your weak chapters, analyze mock test blunders, and get a customized study roadmap with zero commitment.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/signup"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Claim Your Free Session</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/mentors"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all"
              >
                Browse Mentors First
              </Link>
            </div>
          </div>

          {/* 3 Pillars of Free Consultation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-16">
            <div className="p-7 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center font-bold">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-white">Backlog &amp; Syllabus Audit</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Map out all your incomplete chapters across Physics, Chemistry, Math/Bio and create a realistic recovery timeline.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-white">Mock Test Error Breakdown</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Analyze why your mock scores plateau and identify the exact silly errors and time management faults draining your marks.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-white">Customized Timetable</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Receive an actionable daily study schedule customized to your school, coaching hours, or drop year routine.
              </p>
            </div>
          </div>

          <section className="mt-16">
            <SeoFaqAccordion
              faqs={freeSessionFaqs}
              title="Frequently Asked Questions: Free Mentorship Consultation"
              subtitle="Everything you need to know about claiming your free strategy session."
            />
          </section>

          <section className="mt-16">
            <SeoCtaBanner
              title="Stop Struggling in Silence — Get Clear Direction Today"
              description="A 30-minute conversation with someone who mastered your exam can save you months of wasted effort."
              primaryButtonText="Claim Free Consultation"
              primaryButtonHref="/signup"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
