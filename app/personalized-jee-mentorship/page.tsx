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
  Layers,
  GraduationCap,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "Personalized JEE Mentorship — Custom 1:1 Study Pacing with IITians",
  description:
    "Looking for truly personalized JEE mentorship? Get custom daily timetables, diagnostic strengths mapping, individual rough-sheet audits, and 1:1 Google Meet strategy calls with verified IIT Bombay & Delhi rankers.",
  keywords: [
    "personalized JEE mentorship",
    "customized IIT JEE guidance",
    "personal JEE mentor online",
    "personalized JEE study plan",
    "1 on 1 JEE coaching",
    "best personalized mentor for JEE Advanced",
  ],
  alternates: {
    canonical: "https://mentskool.com/personalized-jee-mentorship",
  },
  openGraph: {
    title: "Personalized JEE Mentorship: Tailored Study Pacing with IITians",
    description:
      "No two aspirants have the same weak chapters. Get a customized daily roadmap and private IITian guidance tailored to your speed.",
    url: "https://mentskool.com/personalized-jee-mentorship",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Personalized JEE Mentorship - Mentskool",
      },
    ],
  },
};

const personalizedFaqs: FaqItem[] = [
  {
    question: "What makes JEE mentorship truly 'personalized' at Mentskool?",
    answer:
      "Most coaching centers advertise 'personal attention' but deliver identical lectures, standard question sheets, and automated mass scorecards to 100+ students. At Mentskool, personalization means: 1) Diagnostic mapping of your individual strong vs weak chapters; 2) Daily problem quotas calibrated to your current speed; 3) Weekly private 1:1 video calls reviewing YOUR actual test rough sheets; 4) Dynamic timetable recalibration when school exams or health issues disrupt your week.",
  },
  {
    question: "Can my personalized plan accommodate both school and coaching?",
    answer:
      "Yes. Over 70% of our mentees attend school or coaching institutes (Allen, PW, Resonance, Motion). Your mentor synchronizes your weekly targets so you never have conflicting homework assignments, keeping your daily workload sustainable.",
  },
  {
    question: "How does the mentor diagnose my weak chapters?",
    answer:
      "During your first diagnostic session, your mentor analyzes your last 3 test scorecards and rough sheets. They categorize your weaknesses into conceptual gaps, calculation arithmetic slips, or time-panic freezes, building a targeted 30-day corrective roadmap.",
  },
  {
    question: "Can I choose my mentor based on language or target IIT branch?",
    answer:
      "Yes. You can browse our directory of verified IIT mentors and select mentors by college (IIT Bombay, Delhi, Kanpur, Madras), branch (CSE, Electrical, Mechanical), and preferred language (English, Hindi, Hinglish).",
  },
  {
    question: "Is there any annual contract?",
    answer:
      "None. Mentskool operates on transparent month-to-month subscriptions with the freedom to switch mentors or cancel anytime with one click.",
  },
];

export default function PersonalizedJeeMentorshipPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        name: "Mentskool Technologies",
        url: "https://mentskool.com",
        logo: "https://mentskool.com/logo.png",
        description:
          "India's premier personalized 1-on-1 mentorship platform for JEE Main & Advanced aspirants.",
      },
      {
        "@type": "Course",
        name: "Personalized JEE Mentorship Program",
        description:
          "Individualized JEE coaching tailored to student pace with IITian mentors, daily task tracking, and mock post-mortems.",
        provider: {
          "@type": "Organization",
          name: "Mentskool",
          sameAs: "https://mentskool.com",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: personalizedFaqs.map((faq) => ({
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
              { label: "JEE Mentorship", href: "/jee-mentorship" },
              {
                label: "Personalized Mentorship",
                href: "/personalized-jee-mentorship",
              },
            ]}
          />

          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-xs font-semibold mb-4">
              <UserCheck className="w-3.5 h-3.5" />
              <span>Tailored Study Pacing &amp; Individual Diagnostic Audits</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Personalized JEE Mentorship: <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-sky-300 to-indigo-400">Engineered for Your Pace &amp; Weaknesses</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Generic mass timetables fail because no two aspirants have the same strengths. Partner 1-on-1 with an <strong>IIT Bombay or Delhi ranker</strong> who maps your specific gaps, calibrates your daily problem quotas, and tracks your progress every single day.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Find Your Personalized Mentor</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/free-mentorship-session"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all"
              >
                Claim Free Diagnostic Call
              </Link>
            </div>
          </div>

          {/* Direct Answer Box for AI Overviews & Search Snippets */}
          <section className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-brand-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-400 mb-3">
              <Sparkles className="w-4 h-4 text-brand-400" />
              <span>Executive Summary: What Defines Personalized JEE Guidance?</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-5">
              The <strong>Mentskool Personalized Mentorship Engine</strong> replaces one-size-fits-all factory batching with 4 customized systems:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Diagnostic Gap Mapping:</strong> Pinpointing the exact conceptual, speed, or arithmetic flaws unique to your test rough sheets.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Adaptive Daily Task Pacing:</strong> Solved question quotas that scale up as your speed improves, rather than overwhelming you on day one.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Private 1:1 Google Meet Calls:</strong> 50 minutes of undivided mentor attention each week to review rough sheets and adjust strategy.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>94% Verified Efficiency Scoring:</strong> Real-time tracking of completed problem quotas on a personal web dashboard.</span>
              </div>
            </div>
          </section>

          {/* FAQ Accordion */}
          <section className="mt-16">
            <SeoFaqAccordion
              faqs={personalizedFaqs}
              title="Frequently Asked Questions: Personalized JEE Mentorship"
              subtitle="Everything you need to know about diagnostic mapping, custom timetables, and 1:1 IITian guidance."
            />
          </section>

          {/* CTA Banner */}
          <section className="mt-16">
            <SeoCtaBanner
              title="Experience JEE Mentorship Tailored Strictly to You"
              description="Get paired 1-on-1 with an IITian who adapts to your study speed, audits your mock tests, and builds your custom daily schedule on a flexible monthly plan."
              primaryButtonText="Find Your Personalized Mentor"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
