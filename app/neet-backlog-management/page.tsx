import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Layers,
  AlertOctagon,
  BookOpen,
  TrendingUp,
  AlertTriangle,
  Flame,
  Dna,
  HeartPulse,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "NEET Backlog Management & Recovery Guide — AIIMS Doctor Framework",
  description:
    "Suffering from heavy backlogs in NEET Biology, Physics, or Chemistry? Learn how AIIMS New Delhi toppers clear Class 11 and 12 backlogs using the 3-Bucket Medical Recovery Protocol without dropping ongoing coaching classes.",
  keywords: [
    "NEET backlog management",
    "how to clear backlogs in NEET",
    "class 11 backlog in class 12 NEET",
    "NEET biology backlog recovery",
    "NEET physics backlog strategy",
    "clear NEET backlogs with mentor",
    "best way to cover backlog for NEET",
  ],
  alternates: {
    canonical: "https://mentskool.com/neet-backlog-management",
  },
  openGraph: {
    title: "NEET Backlog Management: The Medical Recovery Protocol",
    description:
      "Stop skipping coaching lectures to catch up on old topics. Master NCERT Biology, rescue Physics numericals, and eliminate NEET backlogs with 1:1 AIIMS guidance.",
    url: "https://mentskool.com/neet-backlog-management",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "NEET Backlog Management - Mentskool",
      },
    ],
  },
};

const neetBacklogFaqs: FaqItem[] = [
  {
    question: "Why do NEET aspirants accumulate massive backlogs?",
    answer:
      "NEET backlogs usually stem from two distinct behavioral patterns: 1) Passive Biology reading where students spend 15 hours rereading one chapter without testing active recall, leaving zero time for Physics; and 2) Physics avoidance anxiety, where students skip numerical practice because they find it difficult, creating a 10-chapter Physics backlog by mid-Class 12.",
  },
  {
    question: "How do I clear Class 11 NEET backlogs while attending Class 12 coaching?",
    answer:
      "We implement the 80/20 Time Rule. 80% of your daily study time is strictly reserved for Class 12 lectures and homework. The remaining 20% (a locked 90-minute slot every night) is used for Class 11 backlog clearance. Your mentor prioritizes the Class 11 chapters that carry heavy weightage in NEET: Human Physiology, Cell Biology, Chemical Bonding, and Modern Physics/Thermal Physics.",
  },
  {
    question: "Should I read NCERT line-by-line for backlog chapters or solve MCQs first?",
    answer:
      "For Biology and Inorganic Chemistry backlogs, an active 2-step approach works best: Spend 45 minutes reading the chapter with focus on diagrams, tables, and summary points, then immediately solve 60–80 chapter-wise MCQs. Solving MCQs exposes your exact knowledge gaps, saving you 10+ hours compared to passive rereading.",
  },
  {
    question: "What is the fastest way to clear a NEET Physics backlog?",
    answer:
      "Avoid multiconcept advanced problems. 85% of NEET Physics questions are direct formula substitutions. For every backlog Physics chapter: 1) Extract all formulas and boundary conditions onto a single A4 sheet; 2) Review 10 standard solved examples; 3) Solve 35 recent NEET PYQs (2018–2026). Once completed, that chapter is officially exam-ready.",
  },
  {
    question: "How does my AIIMS mentor keep me accountable for backlog clearance?",
    answer:
      "Your mentor breaks your backlog into a weekly micro-syllabus with daily question targets. Every evening, you submit your completed problems on the Mentskool dashboard. In your weekly 1:1 Google Meet session, your mentor conducts a rapid 10-minute viva on the backlog topic before approving your next study block.",
  },
  {
    question: "Can I still score 650+ in NEET if I currently have 20 chapters of backlog?",
    answer:
      "Yes. Thousands of successful medical students had substantial backlogs at the 6-month mark. What differentiates those who enter a Government Medical College is a structured recovery blueprint rather than random panic studying.",
  },
];

export default function NeetBacklogManagementPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        name: "Mentskool Technologies",
        url: "https://mentskool.com",
        logo: "https://mentskool.com/logo.png",
        description:
          "India's leading 1-on-1 mentorship platform for medical entrance exams with verified AIIMS rankers.",
      },
      {
        "@type": "HowTo",
        name: "How to Clear NEET Backlogs with AIIMS Doctor Mentorship",
        description:
          "Scientific methodology to eliminate Biology, Chemistry, and Physics backlogs without falling behind in regular coaching.",
        step: [
          {
            "@type": "HowToStep",
            name: "Lock 80% for Ongoing Class 12 Syllabus",
            text: "Never skip current coaching lectures to recover past topics. Prevent creating new backlogs.",
          },
          {
            "@type": "HowToStep",
            name: "Prioritize High-Yield Independent Chapters",
            text: "Target Human Physiology, Cell Biology, Chemical Bonding, and Modern Physics first.",
          },
          {
            "@type": "HowToStep",
            name: "Execute 90-Minute Nightly Backlog Sprints",
            text: "Combine rapid formula review with 35-50 chapter PYQs under timed constraints.",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: neetBacklogFaqs.map((faq) => ({
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
                label: "NEET Backlog Management",
                href: "/neet-backlog-management",
              },
            ]}
          />

          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-semibold mb-4">
              <Dna className="w-3.5 h-3.5" />
              <span>The Definitive NEET Backlog Recovery Playbook</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              NEET Backlog Management: <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400">The 3-Bucket Medical Recovery Protocol</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Panicking over 15 pending chapters in Biology or fear of Physics numericals? Work 1-on-1 with an <strong>AIIMS New Delhi ranker</strong> who maps your pending syllabus into daily 90-minute high-yield sprints without derailing your ongoing coaching.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:to-teal-800 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Find Your Medical Backlog Mentor</span>
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
              <span>Executive Summary: How To Clear NEET Backlogs Scientifically</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-5">
              The <strong>Mentskool NEET 3-Bucket Recovery Protocol</strong> ensures medical aspirants systematically eliminate accumulated chapters without sacrificing current test performance:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>The 80/20 Shield:</strong> Dedicate 80% of daily study to current coaching topics. Never skip today&apos;s lectures to study yesterday&apos;s topics.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Bucket 1 (Prerequisites First):</strong> Clear the exact chapters required for ongoing classes (e.g., Cell Biology, Chemical Bonding, Basic Kinematics).</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Bucket 2 (Independent NCERT High-Yield):</strong> Master standalone goldmines carrying 100+ marks (Genetics, Human Physiology, Modern Physics).</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Bucket 3 (Low-ROI Quarantined):</strong> Defer heavy memorization topics with low question density until 45 days before the final exam.</span>
              </div>
            </div>
          </section>

          {/* Deep Guide Section 1: Subject-Wise Backlog Prioritization */}
          <section className="my-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                The NEET Backlog Recovery Matrix
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Use this blueprint to recover chapters systematically by yield and difficulty.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl">
              <table className="w-full text-left text-xs sm:text-sm text-slate-300">
                <thead className="bg-slate-950/80 text-white font-bold uppercase text-[11px] tracking-wider border-b border-slate-800">
                  <tr>
                    <th className="py-4 px-4 sm:px-6">Subject</th>
                    <th className="py-4 px-4 sm:px-6 text-emerald-400">Bucket 1: Immediate Prerequisites</th>
                    <th className="py-4 px-4 sm:px-6 text-teal-400">Bucket 2: High Yield Standalone</th>
                    <th className="py-4 px-4 sm:px-6 text-slate-400">Bucket 3: Low-Yield Quarantined</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white">Biology</td>
                    <td className="py-4 px-4 sm:px-6">
                      <p className="font-semibold text-white mb-1">Cell Cycle &amp; Division, Biomolecules</p>
                      <span className="text-xs text-slate-400">Prerequisite for Genetics, Biotechnology, and Physiology.</span>
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <p className="font-semibold text-white mb-1">Human Physiology, Genetics, Ecology</p>
                      <span className="text-xs text-slate-400">Carries 120+ marks. Solve 80 NCERT MCQs per chapter immediately.</span>
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <p className="font-semibold text-white mb-1">Morphology of Flowering Plants examples</p>
                      <span className="text-xs text-slate-400">Heavy memorization; memorize family tables in last 60 days.</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white">Chemistry</td>
                    <td className="py-4 px-4 sm:px-6">
                      <p className="font-semibold text-white mb-1">Mole Concept, Chemical Bonding, GOC</p>
                      <span className="text-xs text-slate-400">Vital for physical calculations and all of 12th Organic.</span>
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <p className="font-semibold text-white mb-1">Coordination Chemistry, Solutions, Kinetics</p>
                      <span className="text-xs text-slate-400">Direct formula substitution and predictable NCERT questions.</span>
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <p className="font-semibold text-white mb-1">Complex Ionic Equilibrium buffers</p>
                      <span className="text-xs text-slate-400">Rare in NEET; master simple pH &amp; solubility products first.</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white">Physics</td>
                    <td className="py-4 px-4 sm:px-6">
                      <p className="font-semibold text-white mb-1">Basic Math, Vectors, 1D Kinematics</p>
                      <span className="text-xs text-slate-400">Without basic vector resolution, electrostatics is impossible.</span>
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <p className="font-semibold text-white mb-1">Modern Physics, Current Electricity, Thermal Physics</p>
                      <span className="text-xs text-slate-400">Generates 40–50 marks with direct standard formula questions.</span>
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <p className="font-semibold text-white mb-1">Rotational Motion advanced rolling, Fluids</p>
                      <span className="text-xs text-slate-400">High effort, low question frequency in NEET.</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: The 90-Minute Nightly Backlog Sprint */}
          <section className="my-16 bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800 rounded-3xl p-8 sm:p-12">
            <div className="max-w-3xl mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                The 90-Minute Nightly Medical Backlog Routine
              </h2>
              <p className="text-slate-300 text-sm mt-2">
                How our students clear 1 full chapter every 3 days without getting overwhelmed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Minutes 1–25</div>
                <h3 className="text-base font-bold text-white">Rapid Concept &amp; Formula Extraction</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Review short notes or mentor summary sheets. Write down all formulas, constants, and NCERT exception notes on a single page.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="text-xs font-bold text-teal-400 uppercase tracking-wider">Minutes 26–75</div>
                <h3 className="text-base font-bold text-white">40-Question Timed MCQ Drill</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Attempt 40 PYQs (2018–2026) under a strict 50-minute countdown. No looking at solutions mid-test; mark answers with exam pressure.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="text-xs font-bold text-sky-400 uppercase tracking-wider">Minutes 76–90</div>
                <h3 className="text-base font-bold text-white">Error Post-Mortem &amp; Dashboard Log</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Log incorrect answers into your Mistake Book. Submit your problem count on the Mentskool dashboard for mentor verification.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Accordion */}
          <section className="mt-16">
            <SeoFaqAccordion
              faqs={neetBacklogFaqs}
              title="Frequently Asked Questions: NEET Backlog Elimination"
              subtitle="Everything you need to know about prioritizing medical chapters, managing study hours, and getting 1:1 doctor guidance."
            />
          </section>

          {/* CTA Banner */}
          <section className="mt-16">
            <SeoCtaBanner
              title="Clear Your NEET Backlogs with an AIIMS Doctor"
              description="Get a personalized backlog triage sheet, daily 90-minute task accountability, and weekly 1:1 strategy calls. Start today with a flexible monthly plan."
              primaryButtonText="Find Your Medical Backlog Mentor"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
