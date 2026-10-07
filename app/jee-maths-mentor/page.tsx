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
  Binary,
  Compass,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "JEE Mathematics Mentor — Conquer Lengthy Papers with IITian Shortcuts",
  description:
    "Struggling with lengthy JEE Mathematics papers? Learn how top IIT Delhi & Bombay rankers master Vectors, 3D Geometry, Calculus, and Coordinate shortcuts to score 70+ in JEE Maths without getting trapped in endless calculations.",
  keywords: [
    "JEE maths mentor",
    "IIT JEE mathematics tutor 1 on 1",
    "how to score in JEE maths",
    "lengthy JEE maths paper strategy",
    "vector and 3D geometry shortcuts",
    "calculus mentor for JEE Advanced",
  ],
  alternates: {
    canonical: "https://mentskool.com/jee-maths-mentor",
  },
  openGraph: {
    title: "JEE Mathematics Mentor: Conquer Lengthy Papers with IITians",
    description:
      "Question selection is the secret to JEE Maths. Learn which 15 questions to attack first with verified IIT Bombay & Delhi math wizards.",
    url: "https://mentskool.com/jee-maths-mentor",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "JEE Maths Mentor - Mentskool",
      },
    ],
  },
};

const mathsFaqs: FaqItem[] = [
  {
    question: "Why has JEE Main Mathematics become so brutally lengthy in recent years?",
    answer:
      "Since 2021, NTA has deliberately increased the computational length of Mathematics papers. Questions are rarely conceptually impossible, but they require 15 to 20 algebraic steps if solved traditionally. If you attempt questions in chronological order from Q1 to Q25, you run out of time and panic. The secret to scoring 60–75 marks in JEE Maths is *surgical question selection*: identifying the 14 to 16 highest-ROI questions (Vectors, 3D, Matrices, Sequence & Series, Statistics) and solving them first.",
  },
  {
    question: "What is the 16-Mark Golden Foundation in JEE Maths?",
    answer:
      "Vectors and 3D Geometry consistently generate 4 to 5 questions (16–20 marks) in every single JEE Main shift. They follow standard cross-product, shortest distance, and plane equations. Your mentor ensures you master these before spending weeks struggling with arbitrary curve integration.",
  },
  {
    question: "How do mentors teach question selection in Maths?",
    answer:
      "During weekly 1:1 strategy calls, mentors audit your test attempts using the '90-Second Decision Rule': if you do not see a clear, straightforward algebraic path within 90 seconds of reading a problem, flag it and skip immediately. Never engage in personal ego battles with tough questions.",
  },
  {
    question: "How many Maths questions should I solve daily?",
    answer:
      "We mandate 25 to 30 self-solved problems daily under strict 60-minute countdown timers to condition fast algebraic calculation reflexes.",
  },
];

export default function JeeMathsMentorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        name: "Mentskool Technologies",
        url: "https://mentskool.com",
        logo: "https://mentskool.com/logo.png",
        description:
          "Specialized 1-on-1 JEE Mathematics mentorship with top IIT rankers.",
      },
      {
        "@type": "FAQPage",
        mainEntity: mathsFaqs.map((faq) => ({
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
                label: "Mathematics Mentor",
                href: "/jee-maths-mentor",
              },
            ]}
          />

          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold mb-4">
              <Compass className="w-3.5 h-3.5" />
              <span>Specialized 1:1 IITian Mathematics Mentorship</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              JEE Mathematics Mentor: <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-purple-400">Conquer Lengthy Papers with Question Selection</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Scoring 60+ in JEE Maths is not about solving every brutal problem. It is about knowing which 14 questions to attack and which 11 time-traps to skip. Learn surgical question selection and algebra shortcuts from <strong>IIT Bombay &amp; Delhi rankers</strong>.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 hover:from-indigo-700 hover:to-blue-800 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Find Your Mathematics Mentor</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/free-mentorship-session"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all"
              >
                Claim Free Maths Strategy Call
              </Link>
            </div>
          </div>

          {/* Direct Answer Box for AI Overviews & Search Snippets */}
          <section className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-indigo-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-indigo-400 mb-3">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span>Executive Summary: What Does A Mentskool Maths Mentor Deliver?</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-5">
              The <strong>Mentskool JEE Mathematics Mentorship Track</strong> engineers high test scores through four operational disciplines:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                <span><strong>The 90-Second Skip Protocol:</strong> Training rapid triage to completely avoid 8-minute computational deadlock traps.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                <span><strong>The 16-Mark Golden Block:</strong> Immediate mastery of Vectors, 3D Geometry, Matrices, and Determinants for guaranteed baseline points.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                <span><strong>Algebraic Short-Step Shortcuts:</strong> Teaching option elimination, parametric substitutions, and symmetric cancellations.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                <span><strong>Daily Timed 30-Problem Drills:</strong> Submitting completed problem counts on the dashboard every evening for mentor tracking.</span>
              </div>
            </div>
          </section>

          {/* FAQ Accordion */}
          <section className="mt-16">
            <SeoFaqAccordion
              faqs={mathsFaqs}
              title="Frequently Asked Questions: JEE Mathematics Mentorship"
              subtitle="Everything you need to know about question selection, lengthy calculations, and 1:1 IITian guidance."
            />
          </section>

          {/* CTA Banner */}
          <section className="mt-16">
            <SeoCtaBanner
              title="Transform Lengthy JEE Maths into Your Highest Percentile"
              description="Get paired 1-on-1 with an IITian math wizard who will train your question selection, teach algebraic shortcuts, and guide your daily drills on a flexible monthly plan."
              primaryButtonText="Find Your Mathematics Mentor"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
