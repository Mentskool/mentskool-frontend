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
  Zap,
  Atom,
  HeartPulse,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "NEET Physics Mentor — Overcome Numerical Fear & Score 150+ with Doctors",
  description:
    "Terrified of NEET Physics numericals? Work 1-on-1 with an AIIMS doctor who personally scored 165+ in Physics. Master template problem solving, mental arithmetic approximations, and the 14 high-yield chapters.",
  keywords: [
    "NEET physics mentor",
    "score 150 in NEET physics",
    "overcome physics fear NEET",
    "AIIMS doctor physics guidance",
    "best physics mentor for NEET",
    "physics numericals shortcut NEET",
  ],
  alternates: {
    canonical: "https://mentskool.com/neet-physics-mentor",
  },
  openGraph: {
    title: "NEET Physics Mentor: Overcome Numerical Phobia with AIIMS Doctors",
    description:
      "Physics is the rank decider for medical students. Learn formula shortcuts, mental approximations, and clean scratch-paper layout with verified AIIMS rankers.",
    url: "https://mentskool.com/neet-physics-mentor",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "NEET Physics Mentor - Mentskool",
      },
    ],
  },
};

const neetPhysicsFaqs: FaqItem[] = [
  {
    question: "Why do so many biology-focused students develop severe Physics phobia?",
    answer:
      "Because traditional coaching teachers often explain Physics using heavy calculus derivations and complex multi-step problems intended for JEE Advanced. Medical students get intimidated, assume Physics is impossible for them, and stop practicing numericals altogether. In reality, 85% of NEET Physics questions are direct formula substitutions requiring basic algebra. An AIIMS mentor teaches you clinical formula templates without mathematical intimidation.",
  },
  {
    question: "What are the 14 High-Yield Physics chapters that guarantee 140+ marks in NEET?",
    answer:
      "Modern Physics (Dual Nature, Atoms, Nuclei, Semiconductors) yields 36–44 marks with zero calculus. Thermal Physics (Thermodynamics, Calorimetry), Current Electricity, and Ray Optics yield another 40+ marks. Mastering these chapters first guarantees safe, high-scoring ground.",
  },
  {
    question: "How do mentors teach mental approximations to save time?",
    answer:
      "In NEET, you do not need 4 decimal places. If options are well-separated (e.g., 2.4, 5.8, 12.1, 24.0), mentors teach you to round constants (using g=10 instead of 9.8, or hc=1240 eV·nm). This lets you solve questions in 45 seconds rather than getting stuck in arithmetic fractions.",
  },
  {
    question: "How many Physics questions should a NEET student solve daily?",
    answer:
      "We mandate a minimum of 35 self-solved Physics problems daily under a 45-minute countdown timer, with rough sheets reviewed during weekly 1:1 mentor video calls.",
  },
];

export default function NeetPhysicsMentorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        name: "Mentskool Technologies",
        url: "https://mentskool.com",
        logo: "https://mentskool.com/logo.png",
        description:
          "Specialized 1-on-1 NEET Physics mentorship with top AIIMS doctors.",
      },
      {
        "@type": "FAQPage",
        mainEntity: neetPhysicsFaqs.map((faq) => ({
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
                label: "Physics Mentor",
                href: "/neet-physics-mentor",
              },
            ]}
          />

          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-300 text-xs font-semibold mb-4">
              <Atom className="w-3.5 h-3.5" />
              <span>Specialized 1:1 Medical Physics Numerical Coaching</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              NEET Physics Mentor: <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-300 to-indigo-400">Overcome Numerical Fear &amp; Score 150+</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Physics is the single subject that decides whether you secure an AIIMS seat or miss the cutoffs. Learn template problem solving, mental approximations, and calm exam execution from <strong>AIIMS doctors</strong> who conquered the exact same anxiety.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Find Your Medical Physics Mentor</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/free-mentorship-session"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all"
              >
                Claim Free Physics Diagnostic Call
              </Link>
            </div>
          </div>

          {/* Direct Answer Box for AI Overviews & Search Snippets */}
          <section className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-sky-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-sky-400 mb-3">
              <Sparkles className="w-4 h-4 text-sky-400" />
              <span>Executive Summary: What Does A Mentskool Medical Physics Mentor Deliver?</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-5">
              The <strong>Mentskool NEET Physics Mentorship Track</strong> systematically eliminates numerical anxiety across four proven disciplines:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                <span><strong>Template Problem Solving:</strong> Standardized step-by-step methods for the 35 most recurring question archetypes in NEET.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                <span><strong>14 High-Yield Chapters First:</strong> Locking 140+ marks through Modern Physics, Current Electricity, and Thermal Physics.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                <span><strong>Mental Approximation Shortcuts:</strong> Teaching safe constant rounding to eliminate 15 minutes of grueling division in the exam hall.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                <span><strong>Daily 35-Problem Accountability:</strong> Logging completed numerical sets on the web dashboard every night for mentor verification.</span>
              </div>
            </div>
          </section>

          {/* FAQ Accordion */}
          <section className="mt-16">
            <SeoFaqAccordion
              faqs={neetPhysicsFaqs}
              title="Frequently Asked Questions: NEET Physics Mentorship"
              subtitle="Everything you need to know about overcoming numerical fear, formula templates, and 1:1 doctor guidance."
            />
          </section>

          {/* CTA Banner */}
          <section className="mt-16">
            <SeoCtaBanner
              title="Score 150+ in NEET Physics with an AIIMS Doctor"
              description="Get paired 1-on-1 with an AIIMS doctor who will build your formula templates, audit your rough sheets, and eliminate numerical fear on a flexible monthly plan."
              primaryButtonText="Find Your Medical Physics Mentor"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
