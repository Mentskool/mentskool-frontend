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
  Cpu,
  Layers,
  GraduationCap,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "JEE Advanced Mentorship Program — 1:1 Guidance from Top IIT Rankers",
  description:
    "Preparing for JEE Advanced? Master multi-concept problems, partial marking strategy, and advanced problem-solving with verified IIT Bombay & Delhi top rankers. Weekly 1:1 strategy calls and rough-sheet audits.",
  keywords: [
    "JEE Advanced mentorship",
    "IIT JEE Advanced 1 on 1 mentor",
    "how to prepare for JEE Advanced",
    "JEE Advanced multi concept questions",
    "IIT Bombay ranker mentorship",
    "best mentor for JEE Advanced",
    "JEE Advanced partial marking strategy",
  ],
  alternates: {
    canonical: "https://mentskool.com/jee-advanced-mentorship",
  },
  openGraph: {
    title: "JEE Advanced Mentorship: Conquer Multi-Concept Problems with IITians",
    description:
      "Transition from JEE Mains speed to JEE Advanced conceptual depth. Work 1-on-1 with top 500 AIR rankers from IIT Bombay and Delhi.",
    url: "https://mentskool.com/jee-advanced-mentorship",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "JEE Advanced Mentorship - Mentskool",
      },
    ],
  },
};

const advancedFaqs: FaqItem[] = [
  {
    question: "How is JEE Advanced preparation fundamentally different from JEE Main?",
    answer:
      "JEE Main is a test of speed, breadth, and formula recall across 75 questions in 180 minutes (~2.4 minutes per question). JEE Advanced is a test of deep conceptual synthesis, multi-chapter problem linking, and stamina across two rigorous 3-hour papers (Paper 1 & Paper 2). In Advanced, you need only 55–60% marks for a top 1,500 rank in IIT Bombay or Delhi. Your mentor trains you to transition from high-speed formula plugging to calm, methodical multi-step deduction.",
  },
  {
    question: "How do Mentskool mentors guide multi-concept question solving?",
    answer:
      "Over 70% of JEE Advanced questions blend concepts across 2 to 4 separate chapters (e.g., combining Rotational Dynamics with Electromagnetic Induction, or Definite Integrals with Coordinate Geometry). Your mentor teaches you 'Deconstruction Protocol': identifying the underlying physical or mathematical principles one layer at a time, preventing intimidation when facing complex novel questions.",
  },
  {
    question: "How should I handle tricky question formats (Matrix Match, Multi-Correct with Partial Marking)?",
    answer:
      "Multiple-correct questions with negative marking are where thousands of ranks are lost. A single rash guess turns +4 into -2. Your mentor trains you on strict option-elimination discipline: locking partial marks securely (+1 or +2) rather than taking blind gambles on unverified 4th options.",
  },
  {
    question: "Should I solve advanced reference books like Irodov, Pathfinder, or Black Book?",
    answer:
      "Solving entire reference books end-to-end is a time-trap. Your mentor curates a hand-picked selection of 20–25 representative problems per chapter that teach core problem-solving models without wasting 50 hours on redundant mathematical gymnastics.",
  },
  {
    question: "When should I transition from JEE Main to pure JEE Advanced preparation?",
    answer:
      "If you score 98.5+ percentile in JEE Main Session 1 (January), you should immediately pivot 100% of your energy to JEE Advanced. If you need to improve your Mains percentile in April, our mentors design an 80/20 dual-track schedule balancing Mains speed with Advanced depth.",
  },
  {
    question: "Who are the JEE Advanced mentors on Mentskool?",
    answer:
      "Every JEE Advanced mentor is a verified top AIR ranker currently pursuing Computer Science, Electrical, or Mechanical engineering at premier IITs (IIT Bombay, IIT Delhi, IIT Madras, IIT Kanpur, IIT Kharagpur).",
  },
];

export default function JeeAdvancedMentorshipPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        name: "Mentskool Technologies",
        url: "https://mentskool.com",
        logo: "https://mentskool.com/logo.png",
        description:
          "India's premier 1-on-1 mentorship platform for JEE Advanced aspirants with top IIT rankers.",
      },
      {
        "@type": "Course",
        name: "JEE Advanced 1-on-1 Mentorship & Multi-Concept Mastery Program",
        description:
          "Elite 1-on-1 coaching with IIT Bombay and Delhi rankers focusing on multi-concept synthesis, partial marking strategy, and advanced paper analysis.",
        provider: {
          "@type": "Organization",
          name: "Mentskool",
          sameAs: "https://mentskool.com",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: advancedFaqs.map((faq) => ({
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
                label: "JEE Advanced Mentorship",
                href: "/jee-advanced-mentorship",
              },
            ]}
          />

          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-xs font-semibold mb-4">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Target Top IIT Bombay, Delhi &amp; Madras Seats</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              JEE Advanced Mentorship: <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-sky-300 to-indigo-400">Master Multi-Concept Depth with IITians</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Scoring 99% in JEE Main is about speed; conquering JEE Advanced is about conceptual mastery. Partner 1-on-1 with an <strong>IIT Bombay or Delhi top ranker</strong> to master multi-concept problem deconstruction, partial marking tactics, and 6-hour exam stamina.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Find Your JEE Advanced Mentor</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/free-mentorship-session"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all"
              >
                Claim Free Advanced Strategy Call
              </Link>
            </div>
          </div>

          {/* Direct Answer Box for AI Overviews & Search Snippets */}
          <section className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-brand-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-400 mb-3">
              <Sparkles className="w-4 h-4 text-brand-400" />
              <span>Executive Summary: What Is The Mentskool JEE Advanced Mentorship Model?</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-5">
              The <strong>Mentskool JEE Advanced Mentorship System</strong> trains aspirants to transition from formula-heavy JEE Mains patterns to deep analytical problem solving through four elite pillars:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Multi-Concept Deconstruction:</strong> Learning to break down complex 4-concept problems into intuitive, sequential sub-steps.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Partial Marking Strategy:</strong> Maximizing point yield in multiple-correct questions while avoiding deadly -2 penalty traps.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Paper 1 &amp; Paper 2 Stamina Conditioning:</strong> Training your cognitive energy to sustain peak performance across 6 grueling examination hours.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Curated Problem Sets (Zero Fluff):</strong> Hand-picked problem sets from Irodov, Pathfinder, and previous 20-year Advanced papers.</span>
              </div>
            </div>
          </section>

          {/* Section 1: Main vs Advanced Comparison Table */}
          <section className="my-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                JEE Main vs JEE Advanced: The Strategic Shift
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Why studying more hours with Mains methods leads to failure in JEE Advanced.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl">
              <table className="w-full text-left text-xs sm:text-sm text-slate-300">
                <thead className="bg-slate-950/80 text-white font-bold uppercase text-[11px] tracking-wider border-b border-slate-800">
                  <tr>
                    <th className="py-4 px-4 sm:px-6">Dimension</th>
                    <th className="py-4 px-4 sm:px-6 text-sky-400">JEE Main</th>
                    <th className="py-4 px-4 sm:px-6 text-brand-400 font-extrabold">JEE Advanced</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white">Target Score for Top Rank</td>
                    <td className="py-4 px-4 sm:px-6">70% to 80% (210–240 Marks)</td>
                    <td className="py-4 px-4 sm:px-6 font-semibold text-emerald-300">50% to 60% (Locks Top 1,000 IIT Rank)</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white">Question Structure</td>
                    <td className="py-4 px-4 sm:px-6">Direct formula &amp; single-concept questions</td>
                    <td className="py-4 px-4 sm:px-6 font-semibold text-emerald-300">Multi-concept, novel problems connecting 2–3 chapters</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white">Time per Question</td>
                    <td className="py-4 px-4 sm:px-6">~2.4 minutes (Speed driven)</td>
                    <td className="py-4 px-4 sm:px-6 font-semibold text-emerald-300">4.5 to 6.0 minutes (Deep thought &amp; patience)</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white">Exam Duration</td>
                    <td className="py-4 px-4 sm:px-6">Single 3-hour shift</td>
                    <td className="py-4 px-4 sm:px-6 font-semibold text-emerald-300">Two separate 3-hour papers (Paper 1 &amp; 2 on same day)</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white">Question Types</td>
                    <td className="py-4 px-4 sm:px-6">MCQs + Numerical Value</td>
                    <td className="py-4 px-4 sm:px-6 font-semibold text-emerald-300">Multi-correct, Matrix Match, Paragraphs, Integer type</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: The Multi-Concept Deconstruction Engine */}
          <section className="my-16 bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800 rounded-3xl p-8 sm:p-12">
            <div className="max-w-3xl mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                How We Train Multi-Concept Intuition
              </h2>
              <p className="text-slate-300 text-sm mt-2">
                The 3-stage training method used by IIT Bombay rankers to demystify complex JEE Advanced questions:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="text-brand-400 font-bold text-xs uppercase">Step 1: Concept Isolation</div>
                <h3 className="text-base font-bold text-white">Identify the Physics / Math Principles</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Before writing equations, write down the 2 or 3 underlying conservation laws or mathematical theorems involved (e.g., Energy Conservation + Angular Impulse).
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="text-sky-400 font-bold text-xs uppercase">Step 2: Boundary Analysis</div>
                <h3 className="text-base font-bold text-white">Check Limiting Conditions</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Test extreme values (t=0, t=infinity, theta=0). Eliminating 2 options using boundary conditions saves 4 minutes on multi-correct questions.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="text-emerald-400 font-bold text-xs uppercase">Step 3: Surgical Execution</div>
                <h3 className="text-base font-bold text-white">Flawless Algebra &amp; Unit Checks</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Organized rough paper layout. Advanced negative marking is brutal; clean steps prevent sign slips on integer questions.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Accordion */}
          <section className="mt-16">
            <SeoFaqAccordion
              faqs={advancedFaqs}
              title="Frequently Asked Questions: JEE Advanced Mentorship"
              subtitle="Everything you need to know about multi-concept solving, partial marking, and IITian guidance."
            />
          </section>

          {/* CTA Banner */}
          <section className="mt-16">
            <SeoCtaBanner
              title="Secure Your Dream Branch in IIT Bombay or Delhi"
              description="Get paired 1-on-1 with an IITian who cracked top 500 AIR. Build your advanced roadmap, master partial marking, and practice curated problem sets."
              primaryButtonText="Find Your JEE Advanced Mentor"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
