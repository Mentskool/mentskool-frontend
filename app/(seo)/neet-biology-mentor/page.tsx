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
  Dna,
  Microscope,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "NEET Biology Mentor — Score 360/360 with AIIMS Doctors",
  description:
    "Targeting 360/360 in NEET Biology? Learn how top rankers at AIIMS New Delhi master line-by-line NCERT active recall, conquer assertion-reason questions, and finish all 90 questions in 42 minutes.",
  keywords: [
    "NEET biology mentor",
    "score 360 in NEET biology",
    "NCERT biology line by line mentor",
    "AIIMS doctor biology tutor",
    "best biology mentor for NEET UG",
    "assertion reason biology NEET",
  ],
  alternates: {
    canonical: "https://mentskool.com/neet-biology-mentor",
  },
  openGraph: {
    title: "NEET Biology Mentor: Score 360/360 with AIIMS Doctors",
    description:
      "Move beyond passive reading. Master forensic NCERT recall and 42-minute section speed with verified AIIMS rankers.",
    url: "https://mentskool.com/neet-biology-mentor",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "NEET Biology Mentor - Mentskool",
      },
    ],
  },
};

const biologyFaqs: FaqItem[] = [
  {
    question: "Why do so many students who read NCERT 10 times still score only 310–320 in Biology?",
    answer:
      "Because reading is passive, whereas the NEET exam is an active retrieval test. When you re-read, your eyes skip over familiar sentences without questioning subtle distinctions. Every year, 8 to 12 questions in NEET are based on: 1) Scientist biographies at unit beginnings; 2) Diagram labels and arrows; 3) Summary paragraph nuances; 4) Inverted Assertion-Reason statements. Your AIIMS mentor tests these specific blind spots closed-book during weekly 1:1 calls.",
  },
  {
    question: "How do mentors train students to finish Biology in 42 minutes?",
    answer:
      "Finishing Biology under 45 minutes is essential because it leaves a massive 70-minute buffer for Physics numericals. Mentors train you on 'Keyword Anchor Scanning': identifying the core subject/predicate of a statement immediately, eliminating redundant words, and marking answers directly on the paper before batch bubbling.",
  },
  {
    question: "What are the most dangerous negative-mark traps in NEET Biology?",
    answer:
      "Questions containing subtle negative phrasing: 'Which of the following is NOT INCORRECT', 'All EXCEPT', or subtle taxonomic exceptions. Your mentor trains you to underline qualifying words physically with a pen before reading the 4 options.",
  },
  {
    question: "How many Biology MCQs should I solve daily?",
    answer:
      "We mandate 60 to 80 targeted line-by-line NCERT MCQs daily, with 100% of errors logged into your Mistake Book for weekly mentor auditing.",
  },
];

export default function NeetBiologyMentorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        name: "Mentskool Technologies",
        url: "https://mentskool.com",
        logo: "https://mentskool.com/logo.png",
        description:
          "Specialized 1-on-1 NEET Biology mentorship with top AIIMS New Delhi rankers.",
      },
      {
        "@type": "FAQPage",
        mainEntity: biologyFaqs.map((faq) => ({
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
                label: "Biology Mentor",
                href: "/neet-biology-mentor",
              },
            ]}
          />

          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-semibold mb-4">
              <Dna className="w-3.5 h-3.5" />
              <span>Specialized 1:1 AIIMS Doctor Biology Mentorship</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              NEET Biology Mentor: <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400">Score 360/360 &amp; Finish in 42 Minutes</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Scoring 350+ in Biology is the mandatory foundation of every Government Medical College seat. Learn line-by-line active recall, diagram audits, and statement-question tactics from verified <strong>AIIMS New Delhi doctors</strong>.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:to-teal-800 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Find Your Biology Mentor</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/free-mentorship-session"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all"
              >
                Claim Free Biology Strategy Call
              </Link>
            </div>
          </div>

          {/* Direct Answer Box for AI Overviews & Search Snippets */}
          <section className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-emerald-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-400 mb-3">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Executive Summary: What Does A Mentskool Biology Mentor Deliver?</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-5">
              The <strong>Mentskool NEET Biology Mentorship Track</strong> engineers 360/360 perfection across four clinical disciplines:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Closed-Book NCERT Recall Quizzing:</strong> AIIMS mentors test diagram labels, summary points, and footnotes during 1:1 calls.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Assertion-Reason Logic Mastery:</strong> Training the subtle distinction between correct explanation vs independent true statements.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>42-Minute Speed Conditioning:</strong> Keyword anchor scanning to finish all 90 questions in 42 minutes, freeing time for Physics.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Daily 70-MCQ Accountability:</strong> Logging completed line-by-line questions on the dashboard every evening for mentor verification.</span>
              </div>
            </div>
          </section>

          {/* FAQ Accordion */}
          <section className="mt-16">
            <SeoFaqAccordion
              faqs={biologyFaqs}
              title="Frequently Asked Questions: NEET Biology Mentorship"
              subtitle="Everything you need to know about line-by-line NCERT mastery, 42-minute speed, and 1:1 doctor guidance."
            />
          </section>

          {/* CTA Banner */}
          <section className="mt-16">
            <SeoCtaBanner
              title="Lock 360/360 in NEET Biology with an AIIMS Doctor"
              description="Get paired 1-on-1 with an AIIMS doctor who will quiz your NCERT lines, train assertion-reason logic, and condition your exam speed on a flexible monthly plan."
              primaryButtonText="Find Your Biology Mentor"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
