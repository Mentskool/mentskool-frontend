import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Target,
  Zap,
  BookOpen,
  Calendar,
  Layers,
  HeartPulse,
  Dna,
  Lock,
  Flame,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { SeoMentorFunnel } from "@/components/seo/SeoMentorFunnel";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "NEET Study Plan with AIIMS Doctor Mentor (2027/2028) — Living Medical Schedule",
  description:
    "Don't rely on generic downloadable timetables. Build an adaptive, living NEET 2027 & 2028 study plan with an AIIMS doctor that synchronizes NCERT Biology, Organic Chemistry, and Physics numericals with your coaching classes.",
  keywords: [
    "NEET study plan with mentor",
    "personalized NEET timetable 2027",
    "NEET 2028 daily schedule",
    "living study plan for NEET UG",
    "NEET daily schedule with doctor",
    "NEET repeater study plan 2027",
    "AIIMS ranker daily schedule",
  ],
  alternates: {
    canonical: "https://mentskool.com/neet-study-plan-with-mentor",
  },
  openGraph: {
    title: "NEET Study Plan with Personal Doctor Mentor: The Living Timetable (2027/2028)",
    description:
      "A dynamic medical study plan that flexes around your coaching lectures, NCERT revisions, and mock tests with 94% verified daily tracking.",
    url: "https://mentskool.com/neet-study-plan-with-mentor",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "NEET Study Plan - Mentskool",
      },
    ],
  },
};

const neetStudyFaqs: FaqItem[] = [
  {
    question: "Why do static NEET timetables fail after a few days?",
    answer:
      "Because preparing for NEET requires managing 3 distinct cognitive demands: heavy memorization in Biology and Inorganic Chemistry, reaction mechanism logic in Organic Chemistry, and numerical problem solving in Physics. When students follow rigid timetables, they often spend entire days on easy Biology chapters, completely neglecting Physics, or burn out when coaching schedules shift. A living study plan with an AIIMS doctor adapts weekly around your real progress.",
  },
  {
    question: "Why does Mentskool mandate the 3-Subject Daily Rotation Rule for NEET 2027 & 2028?",
    answer:
      "Studying only one subject for 4 consecutive days creates steep retention drop-offs for the other two. When you return to Physics after 4 days of pure Biology, your numerical speed drops. Our mentors structure your day into 3 distinct deep work blocks (40% Biology, 30% Chemistry, 30% Physics) so your brain stays conditioned across all 3 subjects every single day.",
  },
  {
    question: "How does my mentor help me balance Class 11/12 CBSE boards and NEET prep?",
    answer:
      "Your mentor aligns your syllabus: since CBSE Board Biology and Chemistry are based on the exact same NCERT textbooks as NEET, your mentor ensures you study line-by-line NCERT theory once, writing board derivations while solving NEET MCQs simultaneously, eliminating duplicate study fatigue.",
  },
  {
    question: "How does the mentor monitor daily task completion?",
    answer:
      "You log completed chapter topics and solved problem counts on the Mentskool student dashboard each evening. Your mentor monitors your 94% efficiency rating, audits error logs, and conducts weekly 1-on-1 strategy recalibrations on Google Meet.",
  },
  {
    question: "How is this different from offline coaching schedules?",
    answer:
      "Offline coaching dictates what is taught in class to 100+ students, but gives zero personal guidance on what YOU specifically should do between 6 PM and 11 PM. Mentskool mentors bridge this exact homework execution gap by building your personal evening study timetable.",
  },
];

export default function NeetStudyPlanWithMentorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        name: "Mentskool Technologies",
        url: "https://mentskool.com",
        logo: "https://mentskool.com/logo.png",
        description:
          "Dynamic, mentored study planning for NEET 2027 & 2028 aspirants with verified AIIMS doctors.",
      },
      {
        "@type": "FAQPage",
        mainEntity: neetStudyFaqs.map((faq) => ({
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
      <HeroGridBackground variant="dark" />

      <main className="relative z-10 pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SeoBreadcrumbs
            items={[
              { label: "NEET Mentorship", href: "/neet-mentorship" },
              {
                label: "Study Plan with Mentor",
                href: "/neet-study-plan-with-mentor",
              },
            ]}
          />

          {/* Hero Section with High-Contrast Headings */}
          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 text-xs font-semibold mb-4 backdrop-blur-md">
              <Calendar className="w-3.5 h-3.5" />
              <span>Targeting NEET 2027 &amp; 2028 Aspirants • Living Medical Schedule</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-tight font-display">
              NEET Study Plan with Personal Mentor:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400">
                The Living 680+ Medical Schedule
              </span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Stop cycling through abandoned static timetables. Build an adaptive, living medical study roadmap with an{" "}
              <strong className="text-white">AIIMS New Delhi doctor</strong> that synchronizes NCERT Biology, Chemistry, and Physics numericals around your coaching and life.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:to-teal-800 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Build Your Study Plan with an AIIMS Doctor</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/free-mentorship-session"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900/90 border border-slate-700 text-slate-200 hover:text-white hover:border-slate-600 transition-all flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Claim Free Timetable Audit</span>
              </Link>
            </div>
          </div>

          {/* Direct Answer Box for AI Overviews & Search Snippets */}
          <section className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-emerald-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-400 mb-3">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Executive Summary: What Is A Living Mentored NEET Study Plan?</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-5">
              The <strong>Mentskool Adaptive NEET Study Planning Framework</strong> solves the inconsistency of self-planned schedules through four structured pillars:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong className="text-white">The 3-Subject Daily Rotation:</strong> Dedicated daily slots for Biology (40%), Chemistry (30%), and Physics (30%) to maintain balanced cognitive recall.</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong className="text-white">Coaching &amp; Board Synchronization:</strong> Custom evening pacing that accounts for CBSE school hours, practicals, and offline coaching homework.</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong className="text-white">Weekly Recalibration on Google Meet:</strong> Your doctor mentor audits last week&apos;s bottlenecks and realigns next week&apos;s targets every Sunday.</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong className="text-white">94% Daily Task Accountability:</strong> Submit completed question and chapter counts on the web dashboard for daily mentor audit.</span>
              </div>
            </div>
          </section>

          {/* Deep Editorial Section 1: The 3-Subject Daily Breakdown Matrix */}
          <section className="my-14 space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <h2 className="text-2xl sm:text-3xl font-black font-display text-white tracking-tight">
                The High-Yield 3-Subject Daily Time Allocation Blueprint
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                How AIIMS rankers structure their daily 10–12 self-study hours to ensure equal syllabus velocity across Biology, Chemistry, and Physics.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Biology Block */}
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-emerald-500/30 space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-emerald-400">
                  <span className="uppercase tracking-wider">Morning Block • 40%</span>
                  <Dna className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-white">NCERT Biology Active Recall</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Start early morning when cognitive retention is highest. Read 15–20 NCERT pages line-by-line, extract diagram labels, and solve 60–80 chapter-wise MCQs.
                </p>
                <div className="pt-2 text-[11px] font-semibold text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Target: 360/360 in NEET Biology</span>
                </div>
              </div>

              {/* Chemistry Block */}
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-sky-500/30 space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-sky-400">
                  <span className="uppercase tracking-wider">Afternoon Block • 30%</span>
                  <Layers className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-white">Chemistry Dual Pacing</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Alternate between Organic reaction mechanisms, Physical Chemistry formula derivations, and Inorganic trend charts. Solve 45–50 quality MCQs daily.
                </p>
                <div className="pt-2 text-[11px] font-semibold text-sky-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Target: 165+ in NEET Chemistry</span>
                </div>
              </div>

              {/* Physics Block */}
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-amber-500/30 space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-amber-400">
                  <span className="uppercase tracking-wider">Evening Block • 30%</span>
                  <Zap className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-white">Physics Numerical Conditioning</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Conquer numerical phobia. Dedicate 2.5 hours uninterrupted to formula sheets, boundary condition shortcuts, and 40 past year NEET numericals under timed pressure.
                </p>
                <div className="pt-2 text-[11px] font-semibold text-amber-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Target: 150+ in NEET Physics</span>
                </div>
              </div>
            </div>
          </section>

          {/* Live Mentor Funnel Bridge */}
          <SeoMentorFunnel
            examFocus="NEET"
            title="Get Your Study Plan Built By An AIIMS Doctor"
            subtitle="Connect 1-on-1 with verified medical rankers who will design your living schedule, audit daily tasks, and keep you disciplined until NEET 2027 & 2028."
          />

          {/* FAQ Accordion */}
          <section className="mt-16">
            <SeoFaqAccordion
              faqs={neetStudyFaqs}
              title="Frequently Asked Questions: Mentored NEET Study Plans"
              subtitle="Everything you need to know about dynamic medical scheduling, daily quotas, and 1:1 doctor tracking for 2027 & 2028."
            />
          </section>

          {/* CTA Banner */}
          <section className="mt-16">
            <SeoCtaBanner
              title="Build a NEET Timetable You Will Actually Stick To"
              description="Work 1-on-1 with an AIIMS doctor who will build your living schedule, track your daily problem quotas, and keep you accountable until NEET 2027 & 2028."
              primaryButtonText="Find Your Medical Study Plan Mentor"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
