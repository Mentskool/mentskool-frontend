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
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "NEET Study Plan with AIIMS Doctor Mentor — Living Medical Schedule",
  description:
    "Don't rely on generic downloadable timetables. Build an adaptive, living NEET study plan with an AIIMS doctor that synchronizes NCERT Biology, Organic Chemistry, and Physics numericals with your coaching classes.",
  keywords: [
    "NEET study plan with mentor",
    "personalized NEET timetable",
    "living study plan for NEET UG",
    "NEET daily schedule with doctor",
    "NEET repeater study plan",
    "AIIMS ranker daily schedule",
  ],
  alternates: {
    canonical: "https://mentskool.com/neet-study-plan-with-mentor",
  },
  openGraph: {
    title: "NEET Study Plan with Personal Doctor Mentor: The Living Timetable",
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
      "Because preparing for NEET requires managing 3 distinct cognitive demands: heavy memorization in Biology and Inorganic Chemistry, reaction mechanism logic in Organic Chemistry, and numerical problem solving in Physics. When students follow rigid timetables, they often spend entire days on easy Biology chapters, completely neglecting Physics, or burn out when coaching schedules shift. A living study plan with an AIIMS doctor adapts weekly.",
  },
  {
    question: "Why does Mentskool mandate the 3-Subject Daily Rotation Rule for NEET?",
    answer:
      "Studying only one subject for 4 consecutive days creates steep retention drop-offs for the other two. When you return to Physics after 4 days of pure Biology, your numerical speed drops. Our mentors structure your day into 3 distinct deep work blocks so your brain stays conditioned across Biology, Chemistry, and Physics every single day.",
  },
  {
    question: "How does my mentor help me balance CBSE boards and NEET prep?",
    answer:
      "Your mentor aligns your syllabus: since CBSE 12th Board Biology and Chemistry are based on the exact same NCERT textbooks as NEET, your mentor ensures you study line-by-line NCERT theory once, writing board derivations while solving NEET MCQs simultaneously.",
  },
  {
    question: "How does the mentor monitor daily task completion?",
    answer:
      "You log completed chapter topics and solved problem counts on the Mentskool student dashboard each evening. Your mentor monitors your 94% efficiency rating and provides feedback.",
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
          "Dynamic, mentored study planning for NEET-UG aspirants with verified AIIMS doctors.",
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
      <HeroGridBackground />

      <main className="relative z-10 pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SeoBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "NEET Mentorship", href: "/neet-mentorship" },
              {
                label: "Study Plan with Mentor",
                href: "/neet-study-plan-with-mentor",
              },
            ]}
          />

          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-semibold mb-4">
              <Calendar className="w-3.5 h-3.5" />
              <span>Living Dynamic Medical Timetables vs Static PDFs</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              NEET Study Plan with Personal Mentor: <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400">The Living 680+ Medical Schedule</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Stop cycling through abandoned timetables. Build a dynamic, living medical study roadmap with an <strong>AIIMS New Delhi doctor</strong> that synchronizes NCERT Biology, Chemistry, and Physics numericals around your coaching and life.
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
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all"
              >
                Claim Free Timetable Audit
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
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>The 3-Subject Daily Rotation Rule:</strong> Dedicated daily slots for Biology (40%), Chemistry (30%), and Physics (30%) to maintain balanced cognitive recall.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Coaching &amp; Board Synchronization:</strong> Custom pacing that accounts for CBSE school hours, practicals, and offline coaching modules.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Weekly Recalibration on Google Meet:</strong> Your mentor analyzes last week&apos;s bottlenecks and realigns targets every Sunday.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>94% Daily Task Accountability:</strong> Submit completed problem and chapter counts on the web dashboard for daily mentor check-ins.</span>
              </div>
            </div>
          </section>

          {/* FAQ Accordion */}
          <section className="mt-16">
            <SeoFaqAccordion
              faqs={neetStudyFaqs}
              title="Frequently Asked Questions: Mentored NEET Study Plans"
              subtitle="Everything you need to know about dynamic medical scheduling, daily quotas, and 1:1 doctor tracking."
            />
          </section>

          {/* CTA Banner */}
          <section className="mt-16">
            <SeoCtaBanner
              title="Build a NEET Timetable You Will Actually Stick To"
              description="Work 1-on-1 with an AIIMS doctor who will build your living schedule, track your daily problem quotas, and keep you accountable until exam day."
              primaryButtonText="Find Your Medical Study Plan Mentor"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
