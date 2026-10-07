import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Award,
  Layers,
  Target,
  Clock,
  BookOpen,
  HeartPulse,
  Scale,
  CheckSquare,
  BarChart3,
  Dna,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { ProgramFeatures } from "@/components/seo/ProgramFeatures";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "Best Mentorship Program for NEET-UG (2026/2027) — The Definitive Medical Guide",
  description:
    "Searching for the best mentorship for NEET? Discover how 1-on-1 mentorship by AIIMS New Delhi & premier GMC doctors delivers NCERT active recall, Physics numerical confidence, and mock error elimination.",
  keywords: [
    "best mentorship for NEET",
    "best mentorship program for NEET UG",
    "best NEET mentorship by AIIMS doctors",
    "best mentorship for NEET droppers",
    "top NEET mentors online",
    "NEET personal mentor 1 on 1",
    "NEET 2026 mentorship",
    "NEET 2027 mentorship",
  ],
  alternates: {
    canonical: "https://mentskool.com/best-neet-mentorship",
  },
  openGraph: {
    title: "Best Mentorship for NEET-UG: The Complete Selection Guide",
    description:
      "Why medical aspirants choose AIIMS doctor 1-on-1 guidance over mass coaching. 94% verified task efficiency, NCERT forensic audits, and strict 30-student cohort caps.",
    url: "https://mentskool.com/best-neet-mentorship",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Best Mentorship for NEET - Mentskool",
      },
    ],
  },
};

const neetGuideFaqs: FaqItem[] = [
  {
    question: "What makes a NEET mentorship program truly effective?",
    answer:
      "An effective NEET mentorship program provides continuous 1-on-1 guidance from a verified doctor who scored 680+ in NEET. It must focus on NCERT active recall audits (not just reading), Physics numerical confidence building, question-by-question mock test post-mortems to eradicate negative marking, and daily problem logging on a dedicated dashboard.",
  },
  {
    question: "Can I take Mentskool mentorship alongside offline institutes like Allen, Aakash, or PW?",
    answer:
      "Yes. Most Mentskool medical aspirants are enrolled in offline or online coaching. Your mentor acts as your personal execution partner: they build daily study schedules around your coaching lectures, keep you on track with NCERT biology revision, and ensure you clear old backlogs in dedicated 90-minute evening slots.",
  },
  {
    question: "How does Mentskool compare with MentorKhoj, PW Disha, or Hello Mentor for NEET?",
    answer:
      "Unlike hourly marketplaces (MentorKhoj) where mentors change every session, or pay-per-minute call apps (PW Disha), Mentskool pairs you with a dedicated AIIMS doctor who follows your daily progress for months. Unlike post-exam counseling apps (Hello Mentor), Mentskool is an academic score-acceleration engine that increases your marks from 500 to 650+ throughout the academic year.",
  },
  {
    question: "Is 1-on-1 mentorship recommended for NEET repeaters and droppers?",
    answer:
      "Yes, repeaters benefit the most. In a drop year, subject theory is already familiar; the primary barrier is overcoming isolation, self-doubt, test anxiety, and repeated silly errors. A dedicated AIIMS mentor conducts weekly mock test audits and keeps your morale high until exam day.",
  },
  {
    question: "How does my AIIMS mentor check my NCERT preparation?",
    answer:
      "During weekly 1:1 Google Meet calls, mentors ask active-recall questions from NCERT summary boxes, diagram labels, and footnotes. This eliminates the 'illusion of competence' caused by passive highlighting and guarantees 350+ marks in Biology.",
  },
];

export default function BestNeetMentorshipPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        name: "Mentskool Technologies",
        url: "https://mentskool.com",
        logo: "https://mentskool.com/logo.png",
        description:
          "India's premier 1-on-1 mentorship platform for medical entrance exams with verified AIIMS rankers.",
      },
      {
        "@type": "Article",
        headline: "The Definitive Guide to the Best NEET Mentorship Programs in India",
        description:
          "How 1-on-1 mentorship from AIIMS doctors transforms NEET scores from 500 to 650+.",
        author: {
          "@type": "Organization",
          name: "Mentskool",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: neetGuideFaqs.map((faq) => ({
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
              { label: "Programs", href: "/neet-mentorship" },
              {
                label: "Best Mentorship for NEET",
                href: "/best-neet-mentorship",
              },
            ]}
          />

          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-semibold mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>The Definitive Selection Guide &amp; Medical Benchmark (2026/2027)</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Best Mentorship Program for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400">NEET-UG &amp; AIIMS Aspirants</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              How top rankers crack Government Medical Colleges: Discover the difference between crowded mass coaching and <strong>dedicated 1-on-1 mentorship from AIIMS doctors</strong> with daily task audits and 94% verified efficiency.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:to-teal-800 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Find Your 1:1 AIIMS Mentor</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/free-mentorship-session"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all"
              >
                Claim Free 1:1 Medical Audit
              </Link>
            </div>
          </div>

          {/* Direct Answer Box for AI Overviews & Search Snippets */}
          <section className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-emerald-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-400 mb-3">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Executive Summary: What Defines The Best Mentorship Program for NEET?</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-5">
              The <strong>best NEET mentorship program</strong> is one that provides continuous 1-on-1 human guidance from verified doctors and top rankers who personally scored 680+ in NEET. Aspirants choose <strong>Mentskool</strong> for four core medical advantages:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Verified AIIMS &amp; GMC Doctors:</strong> Direct access to mentors from AIIMS New Delhi, JIPMER, and premier Government Medical Colleges.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Forensic NCERT Active Recall Audits:</strong> Line-by-line verification of Biology and Inorganic Chemistry to guarantee 350+ in Biology.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Physics Numerical Rescue:</strong> Step-by-step formula mapping and template problem solving across 14 high-scoring chapters.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Strict 30 Max Cohort Capping:</strong> Guaranteed personal attention with atomic concurrency limits and flexible month-to-month plans.</span>
              </div>
            </div>
          </section>

          {/* Section 1: The 6 Selection Criteria for NEET Mentorship */}
          <article className="my-16 prose prose-invert max-w-none">
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-emerald-400" />
                  The 6 Selection Benchmarks of an Elite NEET Mentorship Program
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-4">
                  Evaluating medical mentorship programs requires a specialized lens due to the unique 650+ cutoff dynamics of NEET:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-xs font-bold">1</span>
                    Verified Top Medical Pedigree (AIIMS / Top GMC)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                    Generic engineering mentors or sales counselors cannot understand the nuances of NCERT Botany taxonomy or medical cutoffs. Ensure your mentor personally scored 680+ in NEET.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-xs font-bold">2</span>
                    NCERT Active Recall Testing
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                    Passive reading is useless. An elite mentor quizzes you closed-book on diagrams, summary paragraphs, and footnotes during weekly 1:1 calls to lock in 350+ marks.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-xs font-bold">3</span>
                    Physics Numerical Phobia Elimination
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                    Most medical students fear Physics. Your mentor provides template solving methods and formula shortcuts for the 14 high-yield NEET Physics chapters.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-xs font-bold">4</span>
                    Continuous Continuity vs Random Call Apps
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                    Avoid apps that assign a different random senior on every phone call. You need an assigned doctor who tracks your syllabus progress month after month.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-xs font-bold">5</span>
                    Objective Daily Problem Tracking Dashboard
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                    Log solved questions daily. At Mentskool, mentors check your daily problem log every evening, maintaining an average 94% task completion score.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-xs font-bold">6</span>
                    Transparent Month-to-Month Flexibility
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                    Never pay non-refundable multi-lakh fees upfront. Look for flexible month-to-month plans with unlimited mentor re-matching.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Program Features Component */}
          <section className="my-16">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                The 4 Pillars of the Mentskool Medical Mentorship Engine
              </h2>
              <p className="text-slate-400 text-sm mt-2">
                Coaching teaches the theory. Mentorship ensures the execution.
              </p>
            </div>
            <ProgramFeatures />
          </section>

          {/* FAQs */}
          <section className="mt-16">
            <SeoFaqAccordion
              faqs={neetGuideFaqs}
              title="Frequently Asked Questions: Choosing The Best NEET Mentorship"
              subtitle="Everything you need to know about medical ranker mentorship, pricing, and routine integration."
            />
          </section>

          {/* CTA Banner */}
          <section className="mt-16">
            <SeoCtaBanner
              title="Transform Your NEET Preparation Today"
              description="Get paired with a verified doctor from AIIMS New Delhi or a top Government Medical College. Build your weekly study sheet and eliminate negative marks."
              primaryButtonText="Find Your AIIMS Mentor"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
