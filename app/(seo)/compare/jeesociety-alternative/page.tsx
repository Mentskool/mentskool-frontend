import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Scale, Award, ShieldCheck, Sparkles } from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { ComparisonTable, ComparisonRow } from "@/components/seo/ComparisonTable";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { SeoMentorFunnel } from "@/components/seo/SeoMentorFunnel";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "JEE Society Alternative & Review (2027/2028) — 1:1 + Small Cohort Mentorship",
  description:
    "Comparing JEE Society vs Mentskool? Discover Mentskool's dual-mode 1:1 strategy calls plus small cohort drills, verified 94% efficiency scoring, and atomic 30-student cohort caps.",
  keywords: [
    "JEE Society alternative",
    "JEE Society review",
    "JEE Society mentorship",
    "JEE Society vs Mentskool",
    "IIT JEE mentorship platform",
    "best JEE mentorship by IITians",
  ],
  alternates: {
    canonical: "https://mentskool.com/compare/jeesociety-alternative",
  },
  openGraph: {
    title: "JEE Society Alternative: Dual-Mode 1:1 & Verified Student Accountability",
    description:
      "Why students choose Mentskool's dynamic efficiency score, verified task reviews, and complete monthly freedom over JEE Society.",
    url: "https://mentskool.com/compare/jeesociety-alternative",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "JEE Society Alternative - Mentskool",
      },
    ],
  },
};

const comparisonRows: ComparisonRow[] = [
  {
    feature: "Mentorship Interaction Format",
    description: "Combination of private and peer sessions.",
    mentskool: "Dual Mode: 1:1 Personal Strategy + 1:15 Cohort Drills",
    competitor: "Roadmap check-ins & quiz sheets",
  },
  {
    feature: "Dynamic Accountability Scoring",
    description: "Real-time verification of on-time problem submission.",
    mentskool: "Dynamic 94% Verified Efficiency Score",
    competitor: "Manual checking without platform scores",
  },
  {
    feature: "Cohort Seat Guarantee",
    description: "Protection against oversized mentor batches.",
    mentskool: "Strict 30 Max (Atomic Redis Concurrency)",
    competitor: "Variable batch allocations",
  },
  {
    feature: "Exam Coverage",
    description: "Entrance examinations supported by rankers.",
    mentskool: "Both JEE Main/Advanced & NEET-UG (AIIMS)",
    competitor: "Primarily JEE focused",
  },
  {
    feature: "Switching & Cancellation Policy",
    description: "Flexibility to change mentor anytime.",
    mentskool: "1-Click switch anytime with zero lock-in",
    competitor: "Fixed package commitments",
  },
];

const faqs: FaqItem[] = [
  {
    question: "How does Mentskool's Dual-Mode format work?",
    answer:
      "Mentskool combines private 1:1 Google Meet strategy sessions (for personal mock test error audits and roadmap calibration) with intimate 1:15 small cohort drills (for live problem-solving and doubt-busting). This gives students individual attention without feeling isolated.",
  },
  {
    question: "Can NEET students also use Mentskool?",
    answer:
      "Yes! While some platforms focus solely on engineering, Mentskool has dedicated medical cohorts guided directly by top rankers from AIIMS New Delhi and premier government medical colleges.",
  },
  {
    question: "What makes Mentskool's efficiency scoring unique?",
    answer:
      "Instead of just checking whether a task was submitted, Mentskool's algorithm evaluates submission timeliness, chapter accuracy, and test review depth, outputting a clear percentage score to benchmark your momentum against cohort peers.",
  },
];

export default function JeeSocietyAlternativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: "Mentskool Mentorship Platform — Alternative to JEE Society",
        description:
          "Dual-mode 1:1 mentorship and small-cohort live problem-solving with verified IIT and AIIMS rankers, 94% efficiency scoring, and atomic 30-student cohort caps.",
        brand: {
          "@type": "Brand",
          name: "Mentskool",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
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
              { label: "Comparisons", href: "/#comparisons" },
              {
                label: "JEE Society Alternative",
                href: "/compare/jeesociety-alternative",
              },
            ]}
          />

          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-semibold mb-4">
              <Scale className="w-3.5 h-3.5 text-cyan-400" />
              <span>Comprehensive Platform Comparison (2027/2028)</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-5 leading-tight">
              The High-Accountability{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
                JEE Society Alternative
              </span>{" "}
              With Dual-Mode Coaching
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Combine private 1:1 strategy calls with small-cohort live problem solving, verified 94% efficiency scoring, and dedicated IIT &amp; AIIMS ranker mentorship.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-700 hover:from-blue-700 hover:to-cyan-700 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Find Your Mentor</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/free-mentorship-session"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all"
              >
                Book Free Strategy Call
              </Link>
            </div>
          </div>

          <div className="my-8 p-6 rounded-2xl border border-cyan-500/20 bg-cyan-950/20">
            <h2 className="text-xs uppercase font-black tracking-widest text-cyan-400 mb-2">
              Quick Answer: Why Choose Mentskool Over JEE Society?
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              <strong>JEE Society</strong> emphasizes study roadmaps and quiz schedules. <strong>Mentskool</strong> pairs students directly with verified top rankers for dual-mode mentorship (1:1 deep strategy + 1:15 small cohort live problem-solving), strict 30-student cohort caps, and a real-time 94% efficiency score tracking your daily question volume.
            </p>
          </div>

          <div id="comparison-matrix" className="mt-12">
            <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full">
                HEAD-TO-HEAD COMPARISON
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Mentskool vs JEE Society
              </h2>
            </div>

            <ComparisonTable competitorName="JEE Society" rows={comparisonRows} />
          </div>

          <section className="mt-16 bg-gradient-to-br from-slate-900/90 to-slate-900/50 border border-slate-800 rounded-3xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
              The Mentskool Dual-Mode Edge
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800">
                <div className="text-cyan-400 text-2xl font-black mb-2">01</div>
                <h3 className="text-lg font-semibold text-white mb-2">1:1 Deep Strategy Audits</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Private weekly video strategy reviews to analyze mock tests, eliminate negative marking, and calibrate your custom daily task roadmap.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800">
                <div className="text-cyan-400 text-2xl font-black mb-2">02</div>
                <h3 className="text-lg font-semibold text-white mb-2">Intimate Cohort Drills</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Join 1:15 peer problem-solving drills with your IITian mentor to master speed techniques and high-yield questions under timed pressure.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800">
                <div className="text-cyan-400 text-2xl font-black mb-2">03</div>
                <h3 className="text-lg font-semibold text-white mb-2">Full Engineering & Medical</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Whether you are targeting JEE Advanced or NEET-UG (AIIMS), receive guidance calibrated exactly to your syllabus and examination format.
                </p>
              </div>
            </div>
          </section>

          <SeoMentorFunnel examFocus="JEE" />

          <section className="mt-16">
            <SeoFaqAccordion
              title="JEE Society vs Mentskool FAQs"
              subtitle="Comparing format, dual-mode calls, and exam coverage."
              faqs={faqs}
            />
          </section>

          <section className="mt-16">
            <SeoCtaBanner
              title="Experience Dual-Mode Mentorship with Top IIT &amp; AIIMS Rankers"
              description="Strict 30-student cohort caps. Join with complete monthly freedom and zero annual lock-in."
              primaryButtonText="Explore Mentors"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
