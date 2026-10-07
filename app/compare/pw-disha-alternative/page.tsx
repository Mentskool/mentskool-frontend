import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Scale } from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { ComparisonTable, ComparisonRow } from "@/components/seo/ComparisonTable";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "PW Disha Alternative & Honest Review (2026) — 1:1 Attention vs Mass Batches",
  description:
    "Looking for a PW Disha mentorship alternative? Compare true 1:1 face-to-face attention from IIT & AIIMS rankers, capped 30-student cohorts, and weekly verified accountability scoring.",
  keywords: [
    "PW Disha mentorship review",
    "PW Disha alternative",
    "Physics Wallah Disha mentorship",
    "PW Disha vs private mentor",
    "best 1 on 1 JEE NEET mentorship",
  ],
  alternates: {
    canonical: "https://mentskool.com/compare/pw-disha-alternative",
  },
  openGraph: {
    title: "PW Disha Alternative: True 1:1 Mentorship vs Coaching Factory Scale",
    description:
      "Why serious JEE & NEET aspirants choose Mentskool's strict 30-student cohorts over mass-scale coaching mentorship programs.",
    url: "https://mentskool.com/compare/pw-disha-alternative",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "PW Disha Alternative - Mentskool",
      },
    ],
  },
};

const comparisonRows: ComparisonRow[] = [
  {
    feature: "Batch Size & Attention",
    description: "Number of students per cohort.",
    mentskool: "Strict Max 30 (Personal Attention)",
    competitor: "Mass scale (Tens of thousands enrolled)",
  },
  {
    feature: "1:1 Strategy Meeting Mode",
    description: "Face-to-face personal video reviews.",
    mentskool: "Private Google Meet 1:1 Sessions",
    competitor: "Chat/Audio bots or brief generalized calls",
  },
  {
    feature: "Accountability Verification",
    description: "How task completion is audited.",
    mentskool: "Dynamic 94% Efficiency Score + Human Reviews",
    competitor: "Automated app notifications without individual audit",
  },
  {
    feature: "Mentor Identity & Connection",
    description: "Knowing who is actually guiding you.",
    mentskool: "Direct IIT Bombay/Delhi/AIIMS Ranker face-to-face",
    competitor: "Rotational counselors or assigned agents",
  },
  {
    feature: "Coaching Platform Independence",
    description: "Can you prepare with ANY books or test series?",
    mentskool: "100% Independent (Allen, Resonance, PW, books)",
    competitor: "Tied strictly to one coaching ecosystem",
  },
];

const faqs: FaqItem[] = [
  {
    question: "Why do students seek an alternative to PW Disha?",
    answer:
      "While Physics Wallah offers excellent mass video lectures, massive scale makes it nearly impossible to provide personalized 1:1 guidance. Students often experience generic advice from rotational telecallers. Mentskool limits mentors to just 30 students, ensuring your mentor knows your test history and personal weaknesses by heart.",
  },
  {
    question: "Can I use Mentskool while studying from PW or other coaching?",
    answer:
      "Yes! In fact, most Mentskool students study from PW, Allen, or offline institutes. Mentskool acts as your personal accountability and strategy partner, making sure you stay on track with your existing syllabus without getting overwhelmed.",
  },
  {
    question: "How does Mentskool ensure mentors have enough time for me?",
    answer:
      "We enforce a hard, server-side atomic limit of 30 students per mentor. A mentor literally cannot take a 31st student until a seat opens up.",
  },
];

export default function PwDishaAlternativePage() {
  return (
    <div className="w-full bg-[#EBF3FB] min-h-screen">
      <div className="relative overflow-hidden pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <HeroGridBackground />
        <div className="max-w-6xl mx-auto relative z-10">
          <SeoBreadcrumbs
            items={[
              { label: "Comparisons", href: "/#how-it-works" },
              { label: "PW Disha Alternative" },
            ]}
          />

          <div className="text-center max-w-3xl mx-auto space-y-6 pt-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-purple-200 text-purple-900 text-xs font-bold uppercase tracking-wider shadow-soft">
              <Scale className="w-3.5 h-3.5 text-purple-600" />
              <span>MASS SCALE VS TRUE 1:1 ATTENTION</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display text-ink tracking-tight leading-[1.1]">
              The Proven{" "}
              <span className="bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                PW Disha Alternative
              </span>{" "}
              for Individual Focus
            </h1>

            <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-2xl mx-auto">
              You are not a roll number in a 50,000-student batch. Get dedicated 1:1 video strategy sessions with verified IIT &amp; AIIMS rankers in intimate 30-student cohorts.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-elevated hover:shadow-card hover:-translate-y-0.5 transition-all group"
              >
                <span>Find Your Personal Mentor</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#comparison-matrix"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-white/90 hover:bg-white border border-mist text-ink shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all"
              >
                Compare Features
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white rounded-t-[44px] border-t border-mist py-16 px-4 sm:px-6 lg:px-8 shadow-soft">
        <div className="max-w-6xl mx-auto space-y-16">
          <div id="comparison-matrix">
            <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
              <span className="text-xs font-bold text-purple-700 uppercase tracking-widest bg-purple-50 border border-purple-200/60 px-3 py-1 rounded-full">
                PLATFORM COMPARISON
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-ink tracking-tight">
                Mentskool vs PW Disha
              </h2>
            </div>

            <ComparisonTable competitorName="PW Disha" rows={comparisonRows} />
          </div>

          <SeoFaqAccordion
            title="PW Disha vs Mentskool FAQs"
            subtitle="Comparing batch sizes, personalized attention, and study flexibility."
            faqs={faqs}
          />

          <SeoCtaBanner
            title="Get the Individual Focus You Deserve for JEE &amp; NEET"
            description="Join a focused 30-student cohort guided directly by an IIT or AIIMS ranker. Pause or switch anytime."
            primaryButtonText="Explore Mentors"
            primaryButtonHref="/mentors"
          />
        </div>
      </div>
    </div>
  );
}
