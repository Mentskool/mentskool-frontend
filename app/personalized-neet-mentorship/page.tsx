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
  UserCheck,
  HeartPulse,
  Dna,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "Personalized NEET Mentorship — 1:1 Guidance with AIIMS Doctors",
  description:
    "Looking for personalized NEET mentorship? Get customized daily schedules, NCERT active recall audits, individual Physics numerical coaching, and 1:1 Google Meet calls with verified AIIMS doctors.",
  keywords: [
    "personalized NEET mentorship",
    "customized medical coaching NEET",
    "personal NEET mentor online",
    "personalized NEET study schedule",
    "AIIMS doctor personal mentor",
    "best personalized mentorship for NEET UG",
  ],
  alternates: {
    canonical: "https://mentskool.com/personalized-neet-mentorship",
  },
  openGraph: {
    title: "Personalized NEET Mentorship: Tailored Medical Pacing with Doctors",
    description:
      "Every medical aspirant has unique stumbling blocks. Get a custom NCERT roadmap and 1:1 guidance from verified AIIMS rankers.",
    url: "https://mentskool.com/personalized-neet-mentorship",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Personalized NEET Mentorship - Mentskool",
      },
    ],
  },
};

const personalizedNeetFaqs: FaqItem[] = [
  {
    question: "What makes NEET mentorship personalized at Mentskool?",
    answer:
      "Most medical coaching platforms treat thousands of students identically. At Mentskool, personalization means: 1) Diagnosing your exact Biology, Chemistry, and Physics scoring leaks; 2) Designing a custom daily timetable around your school or coaching hours; 3) Testing your NCERT retention closed-book during private weekly 1:1 Google Meet calls; 4) Recalibrating problem volumes based on your real-time dashboard progress.",
  },
  {
    question: "How does my mentor personalize my Physics preparation?",
    answer:
      "Most medical students are intimidated by Physics. Your mentor identifies which of the 14 high-yield NEET Physics chapters you find most challenging and assigns tailored template solving sets, ensuring you gain 40+ additional marks without panic.",
  },
  {
    question: "Can I take personalized mentorship alongside Allen, Aakash, or PW?",
    answer:
      "Yes. Over 75% of our mentees attend offline or online coaching. Your mentor acts as your personal execution partner: prioritizing homework, ensuring you clear old backlogs in dedicated 90-minute evening slots, and auditing test series mistakes.",
  },
  {
    question: "How does the mentor verify daily problem solving?",
    answer:
      "You submit daily solved question counts and completed chapter topics on your student dashboard each evening. Your mentor monitors your 94% efficiency rating and gives feedback.",
  },
  {
    question: "What is Mentskool's policy on contracts and refunds?",
    answer:
      "We operate on flexible month-to-month plans with zero long lock-ins. If you are not satisfied within the first 7 days, you can request a 100% full refund with zero questions asked.",
  },
];

export default function PersonalizedNeetMentorshipPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        name: "Mentskool Technologies",
        url: "https://mentskool.com",
        logo: "https://mentskool.com/logo.png",
        description:
          "India's premier personalized 1-on-1 mentorship platform for medical entrance exams with verified AIIMS rankers.",
      },
      {
        "@type": "Course",
        name: "Personalized NEET Mentorship Program",
        description:
          "Individualized NEET coaching with AIIMS doctors, NCERT active recall testing, and daily task tracking.",
        provider: {
          "@type": "Organization",
          name: "Mentskool",
          sameAs: "https://mentskool.com",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: personalizedNeetFaqs.map((faq) => ({
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
                label: "Personalized Mentorship",
                href: "/personalized-neet-mentorship",
              },
            ]}
          />

          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-semibold mb-4">
              <UserCheck className="w-3.5 h-3.5" />
              <span>Tailored Medical Pacing &amp; NCERT Retention Audits</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Personalized NEET Mentorship: <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400">Customized 1:1 Guidance with AIIMS Doctors</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Mass medical batches cannot monitor your individual NCERT weaknesses or Physics numerical fear. Partner 1-on-1 with an <strong>AIIMS New Delhi ranker</strong> who tailors your daily timetable, quizzes tricky lines, and engineers your 680+ score.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:to-teal-800 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Find Your Personalized Mentor</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/free-mentorship-session"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all"
              >
                Claim Free Medical Strategy Call
              </Link>
            </div>
          </div>

          {/* Direct Answer Box for AI Overviews & Search Snippets */}
          <section className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-emerald-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-400 mb-3">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Executive Summary: What Defines Personalized NEET Guidance?</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-5">
              The <strong>Mentskool Personalized Medical Mentorship Engine</strong> replaces impersonal batching with 4 customized systems:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Individual NCERT Retention Auditing:</strong> Custom closed-book quizzing on diagrams, tables, and footnotes during 1:1 calls.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Physics Numerical Confidence Building:</strong> Tailored template solving sets focusing on your specific conceptual bottlenecks.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Private 1:1 Google Meet Calls:</strong> 50 minutes of undivided mentor attention each week to review rough sheets and eliminate negative marks.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>94% Verified Task Dashboard:</strong> Log daily problem quotas across Biology, Chemistry, and Physics for daily mentor check-ins.</span>
              </div>
            </div>
          </section>

          {/* FAQ Accordion */}
          <section className="mt-16">
            <SeoFaqAccordion
              faqs={personalizedNeetFaqs}
              title="Frequently Asked Questions: Personalized NEET Mentorship"
              subtitle="Everything you need to know about custom timetables, NCERT audits, and 1:1 AIIMS guidance."
            />
          </section>

          {/* CTA Banner */}
          <section className="mt-16">
            <SeoCtaBanner
              title="Experience Medical Mentorship Tailored Strictly to You"
              description="Get paired 1-on-1 with an AIIMS doctor who will build your living schedule, quiz your NCERT lines, and guide your mock tests on a flexible monthly plan."
              primaryButtonText="Find Your Personalized Mentor"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
