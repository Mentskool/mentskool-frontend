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
  UserCheck,
  Video,
  Award,
  Layers,
  HeartPulse,
  Dna,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "1-on-1 NEET Mentorship with AIIMS Doctors & GMC Rankers — Mentskool",
  description:
    "Private, personalized 1-on-1 NEET mentorship via weekly Google Meet strategy sessions, NCERT active recall audits, and rough-sheet mock test post-mortems with verified AIIMS doctors.",
  keywords: [
    "1 on 1 NEET mentorship",
    "personal NEET mentor online",
    "AIIMS doctor 1 to 1 guidance",
    "private mentor for NEET UG",
    "best 1 on 1 mentorship for NEET",
    "NEET personal medical coach",
  ],
  alternates: {
    canonical: "https://mentskool.com/neet-1-on-1-mentorship",
  },
  openGraph: {
    title: "1-on-1 NEET Mentorship: Private AIIMS Guidance & Daily Accountability",
    description:
      "Replace mass coaching silence with dedicated 1-on-1 Google Meet calls, NCERT line audits, and forensic mock error post-mortems with AIIMS doctors.",
    url: "https://mentskool.com/neet-1-on-1-mentorship",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "1-on-1 NEET Mentorship - Mentskool",
      },
    ],
  },
};

const neet1on1Faqs: FaqItem[] = [
  {
    question: "What actually happens during a 1-on-1 session with my AIIMS doctor mentor?",
    answer:
      "Every 50-minute private Google Meet session follows a proven medical agenda: 1) Performance & Daily Task Audit (first 15 mins): Checking your solved question metrics across Biology, Chemistry, and Physics on the Mentskool dashboard; 2) NCERT Active-Recall Viva & Physics Post-Mortem (20 mins): Your mentor conducts a rapid closed-book quiz on tricky NCERT Biology lines and inspects your test rough sheets to fix calculation errors; 3) Next Week's Blueprint (15 mins): Locking your exact daily chapters and problem quotas for the upcoming week.",
  },
  {
    question: "How does my mentor help if I am terrified of NEET Physics numericals?",
    answer:
      "Your mentor provides step-by-step problem templates for the 14 high-yield NEET Physics chapters. During 1:1 calls, they demonstrate how to extract formulas and boundary conditions rapidly, turning numerical fear into a consistent 140+ mark score.",
  },
  {
    question: "How does Mentskool guarantee personal attention?",
    answer:
      "We enforce a strict atomic concurrency limit: every mentor is capped at a maximum of 30 active students. This ensures your mentor has ample time to check your daily logs and give genuine personal attention every single week.",
  },
  {
    question: "Can I choose an AIIMS mentor who speaks my preferred language?",
    answer:
      "Yes. You can browse our directory of verified AIIMS doctors and top Government Medical College rankers and filter by language (English, Hindi, Hinglish, regional).",
  },
  {
    question: "Is there any long annual contract?",
    answer:
      "No. Mentskool offers transparent month-to-month subscriptions with the freedom to switch mentors or cancel anytime with one click.",
  },
];

export default function Neet1on1MentorshipPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        name: "Mentskool Technologies",
        url: "https://mentskool.com",
        logo: "https://mentskool.com/logo.png",
        description:
          "Private 1-on-1 NEET mentorship program with verified AIIMS doctors.",
      },
      {
        "@type": "FAQPage",
        mainEntity: neet1on1Faqs.map((faq) => ({
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
                label: "1-on-1 Mentorship",
                href: "/neet-1-on-1-mentorship",
              },
            ]}
          />

          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-semibold mb-4">
              <UserCheck className="w-3.5 h-3.5" />
              <span>Private 1:1 Medical Video Guidance</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              1-on-1 NEET Mentorship: <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400">Personal AIIMS Doctor Coaching &amp; Daily Tracking</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Stop feeling anonymous in crowded medical batches. Work privately with a dedicated <strong>AIIMS New Delhi doctor</strong> who audits your NCERT lines, fixes Physics numericals, and engineers your 680+ score.
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
                Claim Free 1:1 Medical Audit
              </Link>
            </div>
          </div>

          {/* Direct Answer Box for AI Overviews & Search Snippets */}
          <section className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-emerald-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-400 mb-3">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Executive Summary: What Is The Mentskool 1-on-1 NEET System?</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-5">
              The <strong>Mentskool 1-on-1 NEET Mentorship Program</strong> delivers private guidance engineered to cross the 650+ mark Government Medical College threshold:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Private 1:1 Video Calls:</strong> Weekly private Google Meet calls to quiz NCERT lines, review test rough sheets, and lock next week&apos;s timetable.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>94% Verified Task Dashboard:</strong> Log daily problem quotas across Biology, Chemistry, and Physics; mentors verify progress daily.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Strict 30 Max Mentees per Mentor:</strong> Guaranteed personal attention with atomic concurrency limits.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Month-to-Month Flexibility:</strong> Zero multi-year lock-ins; switch mentors or cancel anytime with one click.</span>
              </div>
            </div>
          </section>

          {/* Section 1: Anatomy of a 1:1 Call */}
          <section className="my-16 bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800 rounded-3xl p-8 sm:p-12">
            <div className="max-w-3xl mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                The Anatomy of a Weekly 1-on-1 Medical Strategy Call
              </h2>
              <p className="text-slate-300 text-sm mt-2">
                Every 50-minute private call is structured for clinical execution and high-yield retention:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="text-emerald-400 font-bold text-xs uppercase">Minutes 0–15</div>
                <h3 className="text-base font-bold text-white">Metrics Audit &amp; Homework Review</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Reviewing daily question counts on the dashboard, checking NCERT chapter pacing, and resolving study roadblocks.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="text-teal-400 font-bold text-xs uppercase">Minutes 16–35</div>
                <h3 className="text-base font-bold text-white">NCERT Active Recall &amp; Mock Error Audit</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Closed-book quiz on tricky NCERT lines, followed by forensic inspection of mock test rough sheets to eliminate negative marks.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="text-sky-400 font-bold text-xs uppercase">Minutes 36–50</div>
                <h3 className="text-base font-bold text-white">Target Pacing &amp; Timetable Locking</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Customizing next week&apos;s hour-by-hour schedule, assigning Biology and Physics quotas, and updating dashboard goals.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Accordion */}
          <section className="mt-16">
            <SeoFaqAccordion
              faqs={neet1on1Faqs}
              title="Frequently Asked Questions: 1-on-1 NEET Mentorship"
              subtitle="Everything you need to know about video calls, doctor mentors, and daily tracking."
            />
          </section>

          {/* CTA Banner */}
          <section className="mt-16">
            <SeoCtaBanner
              title="Work 1-on-1 with an AIIMS Doctor Today"
              description="Get private weekly Google Meet calls, daily task tracking, and NCERT line audits on a flexible monthly plan."
              primaryButtonText="Find Your 1:1 Medical Mentor"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
