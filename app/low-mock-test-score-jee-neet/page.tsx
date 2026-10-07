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
  HeartCrack,
  Flame,
  LifeBuoy,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "Low Mock Test Score in JEE or NEET? The 72-Hour Recovery Protocol",
  description:
    "Scored shockingly low marks in your recent JEE or NEET mock test? Don't panic or quit. Follow the 72-Hour Post-Disaster Protocol created by IIT & AIIMS rankers to diagnose negative marks, restore mental calm, and rebound your score.",
  keywords: [
    "low mock test score JEE NEET",
    "how to recover from bad mock test score",
    "scored 80 marks in JEE mock",
    "scored 400 marks in NEET mock",
    "mock test score panic",
    "improve mock test score with mentor",
  ],
  alternates: {
    canonical: "https://mentskool.com/low-mock-test-score-jee-neet",
  },
  openGraph: {
    title: "Low Mock Test Score in JEE or NEET: The 72-Hour Recovery Protocol",
    description:
      "A terrible mock test is a diagnostic gift, not a verdict. Turn disastrous test scores into rapid breakthroughs with verified IIT & AIIMS mentors.",
    url: "https://mentskool.com/low-mock-test-score-jee-neet",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Low Mock Test Score Recovery - Mentskool",
      },
    ],
  },
};

const recoveryFaqs: FaqItem[] = [
  {
    question: "What is the very first thing I should do after scoring poorly on a mock test?",
    answer:
      "Step away from books for at least 3 hours. Do NOT immediately open YouTube to search 'How to score 99 percentile in 30 days' or impulsively take another test the very next morning. Panic-studying only reinforces anxiety. Eat a healthy meal, get a full night's sleep, and begin the forensic post-mortem with a calm, objective mindset the following morning.",
  },
  {
    question: "What is the 72-Hour Post-Disaster Protocol?",
    answer:
      "Hour 0–12 (Decompression): Physical rest and emotional reset. Hour 13–36 (Forensic Diagnosis): Segregating every missed question into Conceptual Gap, Arithmetic Slip, or Time Panic on rough sheets. Hour 37–72 (Surgical Patch): Solving 30 targeted problems specifically focused on the identified conceptual leaks.",
  },
  {
    question: "How does my Mentskool mentor help when I am feeling completely hopeless after a bad score?",
    answer:
      "Every IITian and AIIMS doctor on our platform personally experienced devastating mock scores during their own preparation journey (scores dropping from 210 to 130 or 640 to 520). Your mentor provides the psychological empathy of a senior who survived it, looks objectively at your rough paper, and demonstrates that 70% of your lost marks were simple tactical errors rather than lack of intelligence.",
  },
  {
    question: "Is it normal for mock tests to be significantly harder than actual JEE/NEET exams?",
    answer:
      "Yes! Most commercial coaching test series (Allen, FIITJEE, Resonance, Aakash) deliberately make mock tests 20% to 35% harder than actual NTA papers to humble students and create artificial stress. Your mentor compares your test paper against authentic past-year NTA standards so you never lose perspective.",
  },
];

export default function LowMockTestScorePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        name: "Mentskool Technologies",
        url: "https://mentskool.com",
        logo: "https://mentskool.com/logo.png",
        description:
          "India's premier 1-on-1 mentorship platform for recovering from low mock test scores in JEE and NEET.",
      },
      {
        "@type": "HowTo",
        name: "The 72-Hour Mock Test Score Recovery Protocol",
        description:
          "The systematic recovery guide created by IIT & AIIMS rankers to bounce back after a terrible mock test.",
        step: [
          {
            "@type": "HowToStep",
            name: "Phase 1: Emotional Decompression (0-12 Hours)",
            text: "Take a mandatory cognitive break; stop panic studying and restore emotional baseline.",
          },
          {
            "@type": "HowToStep",
            name: "Phase 2: Forensic Error Audit (13-36 Hours)",
            text: "Classify lost marks into Conceptual, Execution Slip, and Strategic Time Panic.",
          },
          {
            "@type": "HowToStep",
            name: "Phase 3: Surgical Target Practice (37-72 Hours)",
            text: "Solve 30 targeted drill problems addressing the exact diagnosed error patterns.",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: recoveryFaqs.map((faq) => ({
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
              { label: "Guides", href: "/jee-mentorship" },
              {
                label: "Low Mock Score Recovery",
                href: "/low-mock-test-score-jee-neet",
              },
            ]}
          />

          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-300 text-xs font-semibold mb-4">
              <LifeBuoy className="w-3.5 h-3.5" />
              <span>The 72-Hour Post-Disaster Emergency Manual</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Low Mock Test Score in JEE or NEET? <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-300 to-brand-400">The 72-Hour Recovery Protocol</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Scoring 80 in JEE Mains or 450 in NEET mock tests feels like a punch to the gut. But a bad test is not a verdict; it is an x-ray of your current leaks. Partner 1-on-1 with an <strong>IITian or AIIMS doctor</strong> to diagnose mistakes, calm panic, and bounce back.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Audit Your Test with a Mentor</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/free-mentorship-session"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all"
              >
                Claim Free Score Recovery Call
              </Link>
            </div>
          </div>

          {/* Direct Answer Box for AI Overviews & Search Snippets */}
          <section className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-rose-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-rose-400 mb-3">
              <Sparkles className="w-4 h-4 text-rose-400" />
              <span>Core Summary: How To Rebound From A Disastrous Mock Score</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-5">
              The <strong>Mentskool 72-Hour Mock Score Rebound Blueprint</strong> stops panic and systematically recovers lost marks across three disciplined phases:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
                <span><strong>Phase 1: Emotional Baseline Reset (0–12h):</strong> Step away from study portals; do not attempt another test in an anxious state.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
                <span><strong>Phase 2: Forensic Rough Sheet Breakdown (13–36h):</strong> Tag every lost mark as Conceptual Gap, Execution Slip, or Time Trap.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
                <span><strong>Phase 3: Targeted 30-Problem Patch (37–72h):</strong> Solve 30 problems focusing strictly on diagnosed conceptual errors.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
                <span><strong>1:1 Video Audit with Ranker:</strong> Review your mistakes with an IIT/AIIMS mentor who survived identical score drops.</span>
              </div>
            </div>
          </section>

          {/* FAQ Accordion */}
          <section className="mt-16">
            <SeoFaqAccordion
              faqs={recoveryFaqs}
              title="Frequently Asked Questions: Recovering from Low Mock Scores"
              subtitle="Everything you need to know about test psychology, rough sheet post-mortems, and score rebounds."
            />
          </section>

          {/* CTA Banner */}
          <section className="mt-16">
            <SeoCtaBanner
              title="Turn Your Worst Mock Test into Your Greatest Breakthrough"
              description="Get paired 1-on-1 with an IITian or AIIMS doctor who will inspect your rough sheets, eliminate negative marks, and guide your score rebound."
              primaryButtonText="Find Your Test Strategy Mentor"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
