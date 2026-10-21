import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Scale, Award, Sparkles, CheckCircle2 } from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { ComparisonTable, ComparisonRow } from "@/components/seo/ComparisonTable";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { SeoMentorFunnel } from "@/components/seo/SeoMentorFunnel";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "Mentor Prep Alternative & Review (2027/2028) — Why Students Switch to Mentskool",
  description:
    "Looking for a Mentor Prep alternative for JEE & NEET? Compare verified task accountability, dynamic 94% efficiency scoring, strict 30-student cohort caps, and flexible monthly pricing.",
  keywords: [
    "Mentor Prep alternative",
    "Mentor Prep review",
    "Mentor Prep pricing",
    "Mentor Prep vs Mentskool",
    "best JEE mentorship platform",
    "1 on 1 NEET mentorship",
  ],
  alternates: {
    canonical: "https://mentskool.com/compare/mentorprep-alternative",
  },
  openGraph: {
    title: "Mentor Prep Alternative: Why Mentskool Outranks Call-Only Mentorship",
    description:
      "See how Mentskool's verified task checkpoints, 94% efficiency scoring, and atomic 30-student limits compare with Mentor Prep.",
    url: "https://mentskool.com/compare/mentorprep-alternative",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Mentor Prep Alternative - Mentskool",
      },
    ],
  },
};

const comparisonRows: ComparisonRow[] = [
  {
    feature: "Accountability Mechanism",
    description: "How student progress is verified and enforced each week.",
    mentskool: "Dynamic 94% Score + Verified Task Reviews",
    competitor: "Call-based check-ins only (No task scoring)",
  },
  {
    feature: "Cohort Size Limit",
    description: "Maximum students handled by a single mentor.",
    mentskool: "Strict Max 30 (Atomic Redis Locking)",
    competitor: "Uncapped / Variable mentor bandwidth",
  },
  {
    feature: "Mentor Pedigree",
    description: "Who actually mentors the student.",
    mentskool: "Verified IIT Bombay/Delhi/AIIMS Rankers",
    competitor: "IIT/NIT/GMC mixture",
  },
  {
    feature: "Switch Mentor Policy",
    description: "Freedom to change mentors if teaching style doesn't match.",
    mentskool: "1-Click switch anytime with full credit rollover",
    competitor: "Limited / Support approval required",
  },
  {
    feature: "Contractual Lock-In",
    description: "Payment flexibility and refund freedom.",
    mentskool: "100% Monthly Freedom (Zero annual lock-in)",
    competitor: "Often upfront multi-month / annual bundles",
  },
  {
    feature: "Mock Test Mistake Audits",
    description: "Detailed error categorization and negative marking elimination.",
    mentskool: true,
    competitor: "Depends on mentor availability",
  },
];

const faqs: FaqItem[] = [
  {
    question: "Why are students searching for Mentor Prep alternatives?",
    answer:
      "While Mentor Prep offers phone call check-ins, students often find that verbal calls alone lack structured discipline. Without concrete task tracking, submission audits, and real-time efficiency metrics, students can easily slip back into procrastination. Mentskool solves this with automated task verification and dynamic efficiency scoring.",
  },
  {
    question: "How does Mentskool's 94% Efficiency Score work?",
    answer:
      "Mentskool's platform tracks on-time submission of chapter problem sets, diagnostic quiz accuracy, and mock test review completion. Students receive a transparent, verified percentage score that benchmarks their discipline against cohort peers.",
  },
  {
    question: "Can I transfer from Mentor Prep to Mentskool easily?",
    answer:
      "Yes. You can explore our mentor roster and enroll in any active cohort immediately. There are no long commitments — you pay on a flexible monthly basis with complete freedom to switch mentors anytime.",
  },
];

export default function MentorPrepAlternativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: "Mentskool Mentorship Platform — Alternative to Mentor Prep",
        description:
          "High-accountability 1-on-1 mentorship for JEE & NEET with verified IIT and AIIMS rankers, daily task audits, and 30-student cohort limits.",
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
                label: "Mentor Prep Alternative",
                href: "/compare/mentorprep-alternative",
              },
            ]}
          />

          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-xs font-semibold mb-4">
              <Scale className="w-3.5 h-3.5 text-brand-400" />
              <span>Independent Platform Comparison (2027/2028)</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-5 leading-tight">
              The Top-Rated{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-sky-300 to-emerald-400">
                Mentor Prep Alternative
              </span>{" "}
              for Serious JEE &amp; NEET Aspirants
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Looking for true accountability instead of casual phone calls? Discover why rankers choose Mentskool for verified weekly task audits, capped 30-student cohorts, and zero annual lock-in.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Explore Mentskool Mentors</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/free-mentorship-session"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all"
              >
                Book Free 1:1 Diagnostic Call
              </Link>
            </div>
          </div>

          <div className="my-8 p-6 rounded-2xl border border-sky-500/20 bg-sky-950/20">
            <h2 className="text-xs uppercase font-black tracking-widest text-sky-400 mb-2">
              Quick Answer: Why Switch from Mentor Prep to Mentskool?
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              While <strong>Mentor Prep</strong> relies primarily on phone call check-ins, <strong>Mentskool</strong> provides an engineered preparation operating system: face-to-face 1-on-1 strategy video calls with verified IIT/AIIMS rankers, automated daily problem-solving audits via a dynamic 94% efficiency score, atomic 30-student cohort caps, and 100% monthly flexibility with zero lock-in.
            </p>
          </div>

          <div id="comparison-matrix" className="mt-12">
            <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
              <span className="text-xs font-bold text-brand-400 uppercase tracking-widest bg-brand-500/10 border border-brand-500/30 px-3 py-1 rounded-full">
                SIDE-BY-SIDE FEATURE AUDIT
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Mentskool vs Mentor Prep: Key Differences
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                How our task-based accountability infrastructure delivers measurable score improvements:
              </p>
            </div>

            <ComparisonTable competitorName="Mentor Prep" rows={comparisonRows} />
          </div>

          <section className="mt-16 bg-gradient-to-br from-slate-900/90 to-slate-900/50 border border-slate-800 rounded-3xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
              Why Rankers Prefer Mentskool Over Call-Only Mentorship
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800">
                <div className="text-brand-400 text-2xl font-black mb-2">01</div>
                <h3 className="text-lg font-semibold text-white mb-2">Verified Task Audits</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  No vague "did you study today?" phone calls. Mentors audit your actual solved problem counts, notebook photos, and accuracy rates on our dashboard.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800">
                <div className="text-brand-400 text-2xl font-black mb-2">02</div>
                <h3 className="text-lg font-semibold text-white mb-2">Strict 30-Student Cap</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Mentors are hard-capped at 30 students via atomic locking. Your mentor is never overloaded and knows your strengths, weaknesses, and syllabus progress inside out.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800">
                <div className="text-brand-400 text-2xl font-black mb-2">03</div>
                <h3 className="text-lg font-semibold text-white mb-2">100% Monthly Freedom</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Pay month-to-month. Switch mentors with 1-click anytime or pause your subscription with full credit rollover. Zero annual lock-ins.
                </p>
              </div>
            </div>
          </section>

          <SeoMentorFunnel examFocus="BOTH" />

          <section className="mt-16">
            <SeoFaqAccordion
              title="Mentor Prep vs Mentskool FAQs"
              subtitle="Frequently asked comparison questions by JEE & NEET aspirants."
              faqs={faqs}
            />
          </section>

          <section className="mt-16">
            <SeoCtaBanner
              title="Experience True 1:1 Accountability with Top IIT & AIIMS Rankers"
              description="Strictly 30 seats per cohort. Try Mentskool with flexible monthly enrollment and zero lock-in."
              primaryButtonText="Find Your Mentor"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
