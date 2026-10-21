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
  title: "JeetNeeti Alternative & Review (2027/2028) — Pricing & Features Compared",
  description:
    "Comparing JeetNeeti vs Mentskool for JEE & NEET mentorship? See why students prefer Mentskool's verified task checkpoints, 94% efficiency scoring, and transparent monthly pricing.",
  keywords: [
    "JeetNeeti alternative",
    "JeetNeeti review",
    "JeetNeeti pricing",
    "JeetNeeti vs Mentskool",
    "IIT JEE mentorship by IITians",
    "best JEE mentorship platform",
  ],
  alternates: {
    canonical: "https://mentskool.com/compare/jeetneeti-alternative",
  },
  openGraph: {
    title: "JeetNeeti Alternative: Transparent Pricing & Verified 1:1 Accountability",
    description:
      "See how Mentskool stacks up against JeetNeeti with capped 30-student cohorts, verified efficiency scores, and monthly freedom.",
    url: "https://mentskool.com/compare/jeetneeti-alternative",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "JeetNeeti Alternative - Mentskool",
      },
    ],
  },
};

const comparisonRows: ComparisonRow[] = [
  {
    feature: "Pricing Transparency & Model",
    description: "Upfront pricing clarity and commitment duration.",
    mentskool: "Transparent Monthly Plans (Cancel Anytime)",
    competitor: "Expensive upfront multi-month/annual packages",
  },
  {
    feature: "Student Accountability Engine",
    description: "Daily and weekly tracking of homework, milestones, and tests.",
    mentskool: "Verified Task Checkpoints & 94% Efficiency Score",
    competitor: "Periodic video calls without automated task scoring",
  },
  {
    feature: "Cohort Exclusivity",
    description: "Maximum students per mentor.",
    mentskool: "Strict Max 30 (Hard Redis Atomic Lock)",
    competitor: "Varies depending on mentor allocation",
  },
  {
    feature: "Freedom to Switch Mentors",
    description: "Ability to change mentor if your frequency does not match.",
    mentskool: "1-Click instant transfer with zero penalty",
    competitor: "Rigid allocation with admin friction",
  },
  {
    feature: "Mock Test Mistake Deep Dives",
    description: "Line-by-line post-exam negative marking analysis.",
    mentskool: true,
    competitor: "Limited to scheduled call time",
  },
];

const faqs: FaqItem[] = [
  {
    question: "How does Mentskool pricing compare with JeetNeeti?",
    answer:
      "JeetNeeti often bundles long-term commitments requiring thousands of rupees upfront. Mentskool believes students should only pay as long as they see real weekly improvement. We operate on transparent, affordable monthly plans with zero cancellation penalty.",
  },
  {
    question: "Are Mentskool mentors also from IIT Bombay and top colleges?",
    answer:
      "Yes. Our mentors include top rankers from IIT Bombay, IIT Delhi, IIT Madras, and AIIMS New Delhi who have personally conquered JEE Advanced and NEET-UG with top All India Ranks.",
  },
  {
    question: "What happens if a mentor's teaching style doesn't fit me?",
    answer:
      "At Mentskool, student choice is 100% guaranteed. You can switch to any other mentor's cohort with one click in your student dashboard, retaining all your task history and progress credits.",
  },
];

export default function JeetneetiAlternativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: "Mentskool Mentorship Platform — Alternative to JeetNeeti",
        description:
          "High-accountability 1-on-1 mentorship with verified IIT and AIIMS rankers, flexible monthly pricing, and automated task efficiency scoring.",
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
                label: "JeetNeeti Alternative",
                href: "/compare/jeetneeti-alternative",
              },
            ]}
          />

          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold mb-4">
              <Scale className="w-3.5 h-3.5 text-indigo-400" />
              <span>Comprehensive Mentorship Audit (2027/2028)</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-5 leading-tight">
              The Smarter{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-300 to-sky-400">
                JeetNeeti Alternative
              </span>{" "}
              With Complete Pricing Freedom
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Get genuine 1:1 strategy calls with top IIT rankers, verified task checkpoints, and an objective 94% efficiency score — without high upfront packages or long annual lock-ins.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 hover:from-indigo-700 hover:to-blue-700 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Browse Mentskool Mentors</span>
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

          <div className="my-8 p-6 rounded-2xl border border-indigo-500/20 bg-indigo-950/20">
            <h2 className="text-xs uppercase font-black tracking-widest text-indigo-400 mb-2">
              Quick Answer: Why Choose Mentskool Over JeetNeeti?
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Unlike <strong>JeetNeeti</strong> which often requires rigid annual commitments, <strong>Mentskool</strong> gives you transparent monthly pricing, 1-click mentor re-matching, automated daily homework audits, and strict 30-student cohort caps with top rankers from IIT Bombay and AIIMS New Delhi.
            </p>
          </div>

          <div id="comparison-matrix" className="mt-12">
            <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest bg-indigo-500/10 border border-indigo-500/30 px-3 py-1 rounded-full">
                HEAD-TO-HEAD COMPARISON
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Mentskool vs JeetNeeti
              </h2>
            </div>

            <ComparisonTable competitorName="JeetNeeti" rows={comparisonRows} />
          </div>

          <section className="mt-16 bg-gradient-to-br from-slate-900/90 to-slate-900/50 border border-slate-800 rounded-3xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
              Student-First Architecture Built on Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800">
                <div className="text-indigo-400 text-2xl font-black mb-2">01</div>
                <h3 className="text-lg font-semibold text-white mb-2">Zero Annual Lock-in</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Subscribe on a flexible month-to-month basis. Stay because your scores are demonstrably improving, not because of a non-refundable contract.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800">
                <div className="text-indigo-400 text-2xl font-black mb-2">02</div>
                <h3 className="text-lg font-semibold text-white mb-2">94% Efficiency Engine</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Track every study hour, question solved, and revision cycle on an algorithmic dashboard reviewed live by your mentor each week.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800">
                <div className="text-indigo-400 text-2xl font-black mb-2">03</div>
                <h3 className="text-lg font-semibold text-white mb-2">Instant Mentor Switch</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  If your frequency doesn't match your mentor, switch to another IITian or AIIMS ranker with 1-click in your portal at zero extra fee.
                </p>
              </div>
            </div>
          </section>

          <SeoMentorFunnel examFocus="JEE" />

          <section className="mt-16">
            <SeoFaqAccordion
              title="JeetNeeti vs Mentskool FAQs"
              subtitle="Comparing mentors, accountability tools, and pricing models."
              faqs={faqs}
            />
          </section>

          <section className="mt-16">
            <SeoCtaBanner
              title="Choose Personal Mentorship Built on Freedom &amp; Verified Results"
              description="Start your 1:1 journey with top IIT & AIIMS rankers. Switch mentors anytime with 1-click."
              primaryButtonText="Find Your Mentor"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
