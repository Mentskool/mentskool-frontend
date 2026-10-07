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
  FlaskConical,
  Beaker,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "JEE Chemistry Mentor — Score 85+ in Chemistry with IITians",
  description:
    "Chemistry is the fastest scoring subject in JEE. Master NCERT line recall in Inorganic, named mechanisms in Organic, and rapid numericals in Physical Chemistry with verified IIT Bombay & Delhi rankers.",
  keywords: [
    "JEE chemistry mentor",
    "IIT JEE chemistry tutor 1 on 1",
    "how to score 85 in JEE chemistry",
    "organic chemistry mechanisms JEE",
    "inorganic chemistry NCERT memorization",
    "best chemistry mentor for JEE Advanced",
  ],
  alternates: {
    canonical: "https://mentskool.com/jee-chemistry-mentor",
  },
  openGraph: {
    title: "JEE Chemistry Mentor: Score 85+ with IIT Bombay Rankers",
    description:
      "Finish Chemistry in 35 minutes and secure 80+ marks. Learn NCERT retention and Organic flowcharts from verified IITians.",
    url: "https://mentskool.com/jee-chemistry-mentor",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "JEE Chemistry Mentor - Mentskool",
      },
    ],
  },
};

const chemistryFaqs: FaqItem[] = [
  {
    question: "Why is Chemistry the single most important rank-maker in JEE Main?",
    answer:
      "Because of the Marks-to-Time Ratio. A well-prepared student finishes all 25 Chemistry questions in just 35 to 40 minutes, securing 80+ marks with near-zero arithmetic fatigue. This leaves 140 uninterrupted minutes for Physics and Mathematics. If your Chemistry is weak, you spend 65 minutes struggling and enter Math with severe time panic.",
  },
  {
    question: "How do mentors help with Inorganic Chemistry memorization?",
    answer:
      "Passive reading of NCERT Inorganic tables fails. Your mentor teaches 'Comparative Trend Mapping': grouping Coordination Compounds, Periodic Trends, and p/d-block exceptions into single-page visual contrast charts, quizzing you closed-book during weekly 1:1 calls.",
  },
  {
    question: "How should I study Organic Chemistry mechanisms?",
    answer:
      "Organic Chemistry is 90% logic and 10% memory. Once you master GOC (electrophiles, nucleophiles, stability of carbocations, and inductive/resonance effects), named reactions follow predictable electron-pushing patterns. Your mentor audits your mechanism rough sheets to eliminate silly minor-product traps.",
  },
  {
    question: "How many Chemistry questions should I solve daily?",
    answer:
      "We mandate 30 targeted problems daily across Physical calculations, Organic reaction conversions, and Inorganic NCERT PYQs.",
  },
];

export default function JeeChemistryMentorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        name: "Mentskool Technologies",
        url: "https://mentskool.com",
        logo: "https://mentskool.com/logo.png",
        description:
          "Specialized 1-on-1 JEE Chemistry mentorship with top IIT rankers.",
      },
      {
        "@type": "FAQPage",
        mainEntity: chemistryFaqs.map((faq) => ({
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
                label: "Chemistry Mentor",
                href: "/jee-chemistry-mentor",
              },
            ]}
          />

          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-semibold mb-4">
              <FlaskConical className="w-3.5 h-3.5" />
              <span>Specialized 1:1 IITian Chemistry Mentorship</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              JEE Chemistry Mentor: <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400">Score 85+ and Finish in 35 Minutes</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Chemistry is the highest-ROI subject in JEE. Master NCERT line recall in Inorganic, logical reaction mechanisms in Organic, and rapid numericals in Physical Chemistry with verified <strong>IIT Bombay &amp; Delhi rankers</strong>.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:to-teal-800 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Find Your Chemistry Mentor</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/free-mentorship-session"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all"
              >
                Claim Free Chemistry Strategy Call
              </Link>
            </div>
          </div>

          {/* Direct Answer Box for AI Overviews & Search Snippets */}
          <section className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-emerald-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-400 mb-3">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Executive Summary: What Does A Mentskool Chemistry Mentor Deliver?</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-5">
              The <strong>Mentskool JEE Chemistry Mentorship Track</strong> unlocks top percentiles across three coordinated disciplines:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Inorganic NCERT Line Audits:</strong> Comparative trend charts and closed-book quizzing to lock in guaranteed 30+ marks.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Organic Mechanism Flowcharts:</strong> Transitioning from rote memorization to electron-pushing logic based on GOC fundamentals.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Physical Chemistry Speed Templates:</strong> Direct formula substitutions and mental approximation tricks for thermodynamics and kinetics.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>35-Minute Section Conditioning:</strong> Training you to finish all 25 questions in 35 minutes, freeing 140 minutes for Math and Physics.</span>
              </div>
            </div>
          </section>

          {/* FAQ Accordion */}
          <section className="mt-16">
            <SeoFaqAccordion
              faqs={chemistryFaqs}
              title="Frequently Asked Questions: JEE Chemistry Mentorship"
              subtitle="Everything you need to know about NCERT Inorganic, Organic mechanisms, and 1:1 IITian guidance."
            />
          </section>

          {/* CTA Banner */}
          <section className="mt-16">
            <SeoCtaBanner
              title="Turn Chemistry into Your Highest JEE Score"
              description="Get paired 1-on-1 with an IITian who will audit your NCERT lines, train Organic mechanisms, and guide your daily drills on a flexible monthly plan."
              primaryButtonText="Find Your Chemistry Mentor"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
