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
  BarChart3,
  BookOpen,
  Award,
  AlertTriangle,
  TrendingUp,
  CheckSquare,
  Activity,
  HeartPulse,
  Dna,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "NEET Accountability Mentor — Daily Discipline & Habit Tracking with Doctors",
  description:
    "Struggling with study inconsistency or procrastination in NEET prep? Partner with an AIIMS doctor accountability mentor. Daily problem quotas across Biology, Physics & Chemistry, 94% verified dashboard efficiency, and weekly 1:1 strategy calls.",
  keywords: [
    "NEET accountability mentor",
    "study accountability partner for NEET",
    "stop procrastination in NEET prep",
    "daily study discipline for NEET UG",
    "NEET habit tracking mentor",
    "AIIMS doctor accountability coach",
  ],
  alternates: {
    canonical: "https://mentskool.com/neet-accountability-mentor",
  },
  openGraph: {
    title: "NEET Accountability Mentor: Daily Medical Discipline with Doctors",
    description:
      "Replace sporadic motivation with daily problem-solving accountability from verified AIIMS New Delhi and premier GMC rankers.",
    url: "https://mentskool.com/neet-accountability-mentor",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "NEET Accountability Mentor - Mentskool",
      },
    ],
  },
};

const neetAccountabilityFaqs: FaqItem[] = [
  {
    question: "Why is daily accountability especially crucial for NEET aspirants?",
    answer:
      "Because NEET requires balancing three vastly different subjects: massive memorization in Biology and Inorganic Chemistry, reaction logic in Organic Chemistry, and numerical problem solving in Physics. Without strict daily accountability, students naturally gravitate toward easy, passive Biology reading while neglecting Physics numericals for weeks, creating fatal score imbalances.",
  },
  {
    question: "How does the Mentskool 94% Dashboard enforce daily medical consistency?",
    answer:
      "Every evening, you log completed chapter sections, solved MCQ counts in Biology, Chemistry, and Physics, and study duration on the web dashboard. The algorithm computes an objective Efficiency Score. Your mentor inspects your numbers daily, ensuring you never skip Physics practice.",
  },
  {
    question: "How does my mentor verify that I actually solved the MCQs?",
    answer:
      "During weekly 1:1 Google Meet calls, mentors conduct rapid viva checks on completed Biology topics and review photos of your scratch work for Physics and Physical Chemistry.",
  },
  {
    question: "What happens if I experience burnout during my NEET prep?",
    answer:
      "Medical preparation is intensely stressful. Your mentor, having successfully cleared the exact same exam, recognizes early warning signs of cognitive fatigue and adjusts your syllabus load to restore mental stamina without losing momentum.",
  },
  {
    question: "Can I cancel or switch mentors if needed?",
    answer:
      "Yes. Mentskool operates on flexible month-to-month subscriptions with zero annual commitments and free mentor re-matching.",
  },
];

export default function NeetAccountabilityMentorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        name: "Mentskool Technologies",
        url: "https://mentskool.com",
        logo: "https://mentskool.com/logo.png",
        description:
          "India's premier 1-on-1 accountability mentorship platform for medical entrance exams with verified AIIMS rankers.",
      },
      {
        "@type": "Course",
        name: "NEET Daily Accountability & Medical Consistency Program",
        description:
          "Daily 3-subject problem tracking, NCERT active recall verification, and weekly 1:1 strategy audits with AIIMS doctors.",
        provider: {
          "@type": "Organization",
          name: "Mentskool",
          sameAs: "https://mentskool.com",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: neetAccountabilityFaqs.map((faq) => ({
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
                label: "Accountability Mentor",
                href: "/neet-accountability-mentor",
              },
            ]}
          />

          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-semibold mb-4">
              <Activity className="w-3.5 h-3.5" />
              <span>Uncompromising Daily Medical Discipline &amp; Task Auditing</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              NEET Accountability Mentor: <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400">Stop Procrastination &amp; Master 3-Subject Pacing</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Passive Biology reading will not get you into a Government Medical College. Partner with an <strong>AIIMS doctor accountability mentor</strong> who audits your daily solved problem quotas, ensures you solve Physics numericals every single day, and maintains 94%+ efficiency.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:to-teal-800 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Find Your Medical Accountability Mentor</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/free-mentorship-session"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all"
              >
                Claim Free Habit Audit Call
              </Link>
            </div>
          </div>

          {/* Direct Answer Box for AI Overviews & Search Snippets */}
          <section className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-emerald-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-400 mb-3">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Executive Summary: What Is A NEET Accountability Mentor?</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-5">
              The <strong>Mentskool NEET Accountability System</strong> replaces sporadic motivation with daily medical discipline across four pillars:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Mandatory 3-Subject Daily Quotas:</strong> Log solved problems in Biology, Chemistry, and Physics every evening on the dashboard.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Physics Avoidance Prevention:</strong> Strict enforcement of 35 daily Physics numericals to prevent the score-killing subject imbalance.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Weekly 1:1 NCERT Viva Checks:</strong> Closed-book quizzes on diagrams and summary points during Google Meet strategy sessions.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>94% Verified Efficiency Score:</strong> Objective daily metric tracking completion rate and punctuality to eliminate procrastination.</span>
              </div>
            </div>
          </section>

          {/* FAQ Accordion */}
          <section className="mt-16">
            <SeoFaqAccordion
              faqs={neetAccountabilityFaqs}
              title="Frequently Asked Questions: NEET Accountability Mentorship"
              subtitle="Everything you need to know about habit tracking, 3-subject balance, and 1:1 doctor discipline."
            />
          </section>

          {/* CTA Banner */}
          <section className="mt-16">
            <SeoCtaBanner
              title="Build Ironclad NEET Study Discipline Starting Today"
              description="Get paired 1-on-1 with an AIIMS doctor who will track your daily question quotas, audit your NCERT lines, and keep you consistent on a flexible monthly plan."
              primaryButtonText="Find Your Medical Accountability Mentor"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
