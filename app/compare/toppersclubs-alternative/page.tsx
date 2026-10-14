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
  title: "ToppersClubs Alternative & Review (2027/2028) — Structured Tasks vs WhatsApp Calls",
  description:
    "Comparing ToppersClubs vs Mentskool? Discover why JEE & NEET students choose Mentskool for automated task tracking, verified 94% efficiency scores, and capped 30-seat cohorts.",
  keywords: [
    "ToppersClubs alternative",
    "ToppersClubs review",
    "ToppersClubs mentorship",
    "ToppersClubs vs Mentskool",
    "AIR 1-100 mentorship platform",
    "best NEET mentorship",
  ],
  alternates: {
    canonical: "https://mentskool.com/compare/toppersclubs-alternative",
  },
  openGraph: {
    title: "ToppersClubs Alternative: Structured Platform Tasks vs Unorganized WhatsApp",
    description:
      "See why Mentskool's platform-driven accountability, verified efficiency scores, and flexible monthly plans outrank informal WhatsApp mentorship.",
    url: "https://mentskool.com/compare/toppersclubs-alternative",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "ToppersClubs Alternative - Mentskool",
      },
    ],
  },
};

const comparisonRows: ComparisonRow[] = [
  {
    feature: "Platform Infrastructure",
    description: "Where tasks and reviews take place.",
    mentskool: "Custom Web Platform with Verified Deadlines",
    competitor: "Informal WhatsApp groups / chat threads",
  },
  {
    feature: "Daily / Weekly Accountability Metric",
    description: "Measurable proof of student discipline.",
    mentskool: "Dynamic 94% Efficiency Score & Leaderboards",
    competitor: "Subjective check-in messages",
  },
  {
    feature: "Cohort Cap & Attention Guarantee",
    description: "Protection against mentor overcommitment.",
    mentskool: "Strict 30 Max (Atomic Redis Seat Locking)",
    competitor: "Uncapped chat bandwidth",
  },
  {
    feature: "1:1 Strategy Meeting Interface",
    description: "How face-to-face deep dives are conducted.",
    mentskool: "Structured Google Meet 1:1 + Small Cohort Calls",
    competitor: "Phone calls / voice notes",
  },
  {
    feature: "Contractual Freedom",
    description: "Cancellation terms and mentor transfer.",
    mentskool: "1-Click Switch & Cancel Monthly Anytime",
    competitor: "Rigid non-refundable package policies",
  },
];

const faqs: FaqItem[] = [
  {
    question: "Why is a dedicated platform better than WhatsApp-based mentorship?",
    answer:
      "Mentorship via WhatsApp easily leads to missed tasks, lost files, and casual chatting without accountability. Mentskool provides a dedicated student dashboard with chapter assignments, verified submission timestamps, and automatic efficiency score calculation so students stay laser-focused.",
  },
  {
    question: "Are Mentskool mentors also AIR rankers?",
    answer:
      "Yes. Our mentors are verified top rankers from IIT Bombay, Delhi, Madras, and AIIMS New Delhi who mastered the exact JEE & NEET entrance exams.",
  },
  {
    question: "Does Mentskool charge long-term non-refundable fees?",
    answer:
      "Never. Mentskool gives students complete peace of mind with monthly subscription plans and 1-click mentor switches.",
  },
];

export default function ToppersclubsAlternativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: "Mentskool Mentorship Platform — Alternative to ToppersClubs",
        description:
          "Structured preparation workspace with verified deadlines, 94% efficiency scoring, and 1:1 strategy calls with verified IIT and AIIMS rankers.",
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
                label: "ToppersClubs Alternative",
                href: "/compare/toppersclubs-alternative",
              },
            ]}
          />

          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-semibold mb-4">
              <Scale className="w-3.5 h-3.5 text-emerald-400" />
              <span>Structured Platform vs Informal Messaging (2027/2028)</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-5 leading-tight">
              The Structured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400">
                ToppersClubs Alternative
              </span>{" "}
              With Verified Accountability
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Replace messy WhatsApp chats with a purpose-built preparation workspace. Track chapter task completion, dynamic 94% efficiency scores, and 1:1 strategy calls with verified IIT &amp; AIIMS rankers.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Find Your Mentor</span>
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

          <div className="my-8 p-6 rounded-2xl border border-emerald-500/20 bg-emerald-950/20">
            <h2 className="text-xs uppercase font-black tracking-widest text-emerald-400 mb-2">
              Quick Answer: Why Choose Mentskool Over ToppersClubs?
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Unlike <strong>ToppersClubs</strong> where mentoring often happens casually inside WhatsApp groups, <strong>Mentskool</strong> provides an enterprise-grade learning workspace: scheduled face-to-face Google Meet strategy sessions, verified daily task uploads with 94% efficiency scoring, atomic 30-student cohort caps, and complete monthly payment freedom.
            </p>
          </div>

          <div id="comparison-matrix" className="mt-12">
            <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full">
                PLATFORM AUDIT
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Mentskool vs ToppersClubs
              </h2>
            </div>

            <ComparisonTable competitorName="ToppersClubs" rows={comparisonRows} />
          </div>

          <section className="mt-16 bg-gradient-to-br from-slate-900/90 to-slate-900/50 border border-slate-800 rounded-3xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
              Why Serious Aspirants Choose Platform Infrastructure
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800">
                <div className="text-emerald-400 text-2xl font-black mb-2">01</div>
                <h3 className="text-lg font-semibold text-white mb-2">No Distracting Social Chats</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  No notifications from random groups or lost attachments. Everything lives on your dedicated Mentskool student dashboard.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800">
                <div className="text-emerald-400 text-2xl font-black mb-2">02</div>
                <h3 className="text-lg font-semibold text-white mb-2">Verified Task Deadlines</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Upload daily problem count photos and chapter notes directly into weekly task checkpoints audited personally by your mentor.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800">
                <div className="text-emerald-400 text-2xl font-black mb-2">03</div>
                <h3 className="text-lg font-semibold text-white mb-2">100% Monthly Freedom</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Zero expensive lock-ins. Switch mentors with 1-click anytime or pause your subscription with zero penalty.
                </p>
              </div>
            </div>
          </section>

          <SeoMentorFunnel examFocus="BOTH" />

          <section className="mt-16">
            <SeoFaqAccordion
              title="ToppersClubs vs Mentskool FAQs"
              subtitle="Comparing workflow, daily accountability, and commitment flexibility."
              faqs={faqs}
            />
          </section>

          <section className="mt-16">
            <SeoCtaBanner
              title="Step Up from Informal Messaging to Engineered Mentorship"
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
