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
  Crosshair,
  HeartPulse,
  Dna,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "NEET Weak Topic Tracking & Improvement — Medical Remediation with Doctors",
  description:
    "Struggling with Plant Morphology exceptions, Ionic Equilibrium calculations, or Rotational Physics? Discover how AIIMS doctors diagnose, isolate, and repair weak NEET topics using surgical active recall.",
  keywords: [
    "NEET weak topic tracking",
    "how to improve weak chapters in NEET",
    "NEET physics weak topic remedy",
    "botany weak topics NEET",
    "improve weak areas NEET UG with mentor",
    "AIIMS mentor for weak students",
  ],
  alternates: {
    canonical: "https://mentskool.com/neet-weak-topic-tracking",
  },
  openGraph: {
    title: "NEET Weak Topic Tracking: Surgical Remediation with AIIMS Doctors",
    description:
      "Transform difficult medical chapters into high-scoring assets using forensic error mapping with verified AIIMS rankers.",
    url: "https://mentskool.com/neet-weak-topic-tracking",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "NEET Weak Topic Tracking - Mentskool",
      },
    ],
  },
};

const neetWeakFaqs: FaqItem[] = [
  {
    question: "How do I fix a NEET topic where I consistently get negative marks?",
    answer:
      "Negative marks usually point to subtle conceptual confusions or misreading traps. For example, in Plant Kingdom, students confuse lifecycle alternation; in Ionic Equilibrium, they use wrong buffer formulas. Your mentor isolates the specific sub-topic during weekly 1:1 calls, reviews 5 template solved examples with you, and quizzes you closed-book on the exact triggers that mislead you.",
  },
  {
    question: "Can I skip difficult Physics topics like Rotational Motion or Waves in NEET?",
    answer:
      "You should never leave a chapter at zero. In NEET, NTA frequently asks direct, 1-step formula substitution questions from difficult chapters (e.g., radius of gyration or moment of inertia of standard shapes). Forfeiting those questions loses you 8 easy marks. Your mentor trains you to achieve 'Baseline Formula Mastery' without getting lost in complex derivations.",
  },
  {
    question: "How does the Mentskool dashboard detect weak medical topics?",
    answer:
      "Whenever you log mock test results or daily question sets, our algorithm tracks your chapter-wise accuracy heatmap. Any topic scoring under 80% accuracy is automatically flagged, and your mentor assigns targeted 25-question recovery sets.",
  },
  {
    question: "How long does it take to repair a weak Biology or Physics chapter?",
    answer:
      "With targeted 1:1 guidance and active recall testing, students typically convert a weak chapter into a confident scoring topic within 3 to 4 days of dedicated 90-minute evening practice.",
  },
];

export default function NeetWeakTopicTrackingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        name: "Mentskool Technologies",
        url: "https://mentskool.com",
        logo: "https://mentskool.com/logo.png",
        description:
          "India's premier 1-on-1 mentorship platform for diagnosing and repairing weak topics in NEET-UG with AIIMS doctors.",
      },
      {
        "@type": "HowTo",
        name: "How to Repair a Weak NEET Topic with AIIMS Doctors",
        description:
          "The forensic diagnostic protocol used by AIIMS rankers to eliminate negative marks in difficult medical chapters.",
        step: [
          {
            "@type": "HowToStep",
            name: "Identify Sub-Topic Leaks",
            text: "Tag whether mistakes are caused by NCERT line misreads or calculation slips.",
          },
          {
            "@type": "HowToStep",
            name: "Apply 1-Page Summary Extraction",
            text: "Condense all formulas, exceptions, and diagram labels onto a single sheet.",
          },
          {
            "@type": "HowToStep",
            name: "Execute 40-Question Timed Recovery Drill",
            text: "Solve 40 targeted PYQs under exam timer conditions to build permanent confidence.",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: neetWeakFaqs.map((faq) => ({
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
                label: "Weak Topic Tracking",
                href: "/neet-weak-topic-tracking",
              },
            ]}
          />

          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-semibold mb-4">
              <Crosshair className="w-3.5 h-3.5" />
              <span>Surgical Medical Diagnostic Remediation</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              NEET Weak Topic Tracking: <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400">Eliminate Negative Marks with AIIMS Doctors</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Avoiding tricky chapters in Biology or fear of Physics numericals costs you the Government Medical College cutoff. Partner 1-on-1 with an <strong>AIIMS New Delhi ranker</strong> who isolates your exact error triggers and turns weak chapters into reliable points.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:to-teal-800 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Find Your Weak-Topic Mentor</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/free-mentorship-session"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all"
              >
                Claim Free Diagnostic Audit
              </Link>
            </div>
          </div>

          {/* Direct Answer Box for AI Overviews & Search Snippets */}
          <section className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-emerald-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-400 mb-3">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Executive Summary: How Mentskool Fixes Weak NEET Chapters</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-5">
              The <strong>Mentskool NEET Weak Topic Remediation Engine</strong> isolates and fixes lagging chapters across four structured steps:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Accuracy Heatmap Tracking:</strong> Systematically tagging chapters where your test accuracy drops below 80%.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Template Problem Solving:</strong> Rebuilding Physics confidence through standard template problem demonstrations.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>1:1 Closed-Book Quizzing:</strong> AIIMS mentors test subtle exceptions and footnote traps during weekly Google Meet calls.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Dedicated 90-Minute Night Slots:</strong> Repairing weak chapters without slowing down current coaching lectures.</span>
              </div>
            </div>
          </section>

          {/* FAQ Accordion */}
          <section className="mt-16">
            <SeoFaqAccordion
              faqs={neetWeakFaqs}
              title="Frequently Asked Questions: Fixing Weak NEET Topics"
              subtitle="Everything you need to know about diagnostic heatmaps, template problem solving, and 1:1 doctor guidance."
            />
          </section>

          {/* CTA Banner */}
          <section className="mt-16">
            <SeoCtaBanner
              title="Stop Fearing Difficult Medical Chapters"
              description="Get paired 1-on-1 with an AIIMS doctor who will isolate your weak sub-topics, rebuild problem confidence, and turn weaknesses into scores on a flexible monthly plan."
              primaryButtonText="Find Your Weak-Topic Mentor"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
