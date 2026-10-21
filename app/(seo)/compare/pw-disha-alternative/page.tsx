import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Scale, Award, ShieldCheck, Sparkles, Users } from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { ComparisonTable, ComparisonRow } from "@/components/seo/ComparisonTable";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { SeoMentorFunnel } from "@/components/seo/SeoMentorFunnel";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "PW Disha Alternative & Honest Review (2027/2028) — 1:1 Attention vs Mass Batches",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: "Mentskool Mentorship Platform — Alternative to PW Disha",
        description:
          "Intimate 30-student cohort 1-on-1 mentorship with verified IIT and AIIMS rankers, personal Google Meet strategy calls, and dynamic efficiency scoring.",
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
                label: "PW Disha Alternative",
                href: "/compare/pw-disha-alternative",
              },
            ]}
          />

          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-semibold mb-4">
              <Scale className="w-3.5 h-3.5 text-purple-400" />
              <span>Mass Scale vs True 1:1 Attention (2027/2028)</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-5 leading-tight">
              The Proven{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-sky-400">
                PW Disha Alternative
              </span>{" "}
              for Individual Focus
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
              You are not a roll number in a 50,000-student batch. Get dedicated 1:1 video strategy sessions with verified IIT &amp; AIIMS rankers in intimate 30-student cohorts.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Find Your Personal Mentor</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/free-mentorship-session"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all"
              >
                Claim Free Strategy Call
              </Link>
            </div>
          </div>

          <div className="my-8 p-6 rounded-2xl border border-purple-500/20 bg-purple-950/20">
            <h2 className="text-xs uppercase font-black tracking-widest text-purple-400 mb-2">
              Quick Answer: Why Choose Mentskool Over PW Disha?
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              <strong>PW Disha</strong> operates at mass coaching scale, where mentorship is often delivered by rotational telecallers. <strong>Mentskool</strong> is an unbundled, independent platform: you are paired directly with a verified IIT Bombay/Delhi or AIIMS New Delhi ranker who meets you 1-on-1 every week and audits your daily problem sets within a capped 30-student cohort.
            </p>
          </div>

          <div id="comparison-matrix" className="mt-12">
            <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-widest bg-purple-500/10 border border-purple-500/30 px-3 py-1 rounded-full">
                PLATFORM COMPARISON
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Mentskool vs PW Disha
              </h2>
            </div>

            <ComparisonTable competitorName="PW Disha" rows={comparisonRows} />
          </div>

          <section className="mt-16 bg-gradient-to-br from-slate-900/90 to-slate-900/50 border border-slate-800 rounded-3xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
              True 1:1 Attention vs Industrial Scale
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800">
                <div className="text-purple-400 text-2xl font-black mb-2">01</div>
                <h3 className="text-lg font-semibold text-white mb-2">Capped 30-Seat Cohorts</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Your mentor knows your name, your mock test error patterns, and your emotional state during stressful prep phases.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800">
                <div className="text-purple-400 text-2xl font-black mb-2">02</div>
                <h3 className="text-lg font-semibold text-white mb-2">Coaching Neutral</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Keep your existing PW, Allen, or Aakash video lectures. Mentskool acts as the strategy and accountability layer that makes sure you finish the syllabus.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800">
                <div className="text-purple-400 text-2xl font-black mb-2">03</div>
                <h3 className="text-lg font-semibold text-white mb-2">Top Ranker Mentors</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Learn problem tricks and time allocation straight from students who scored in the top 0.1% of JEE Advanced and NEET.
                </p>
              </div>
            </div>
          </section>

          <SeoMentorFunnel examFocus="BOTH" />

          <section className="mt-16">
            <SeoFaqAccordion
              title="PW Disha vs Mentskool FAQs"
              subtitle="Comparing batch sizes, personalized attention, and study flexibility."
              faqs={faqs}
            />
          </section>

          <section className="mt-16">
            <SeoCtaBanner
              title="Get the Individual Focus You Deserve for JEE &amp; NEET"
              description="Learn directly from verified IIT & AIIMS rankers with guaranteed small cohorts and zero lock-in."
              primaryButtonText="Find Your Mentor"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
