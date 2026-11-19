import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Calculator,
  AlertCircle,
  CheckCircle2,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  TrendingUp,
  Layers,
  BookOpen,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { SeoMentorFunnel } from "@/components/seo/SeoMentorFunnel";
import { HeroGridBackground } from "@/components/HeroGridBackground";
import { BacklogClearanceCalculatorWidget } from "@/components/seo/tools/BacklogClearanceCalculatorWidget";

export const metadata: Metadata = {
  title: "JEE & NEET Backlog Clearance Calculator: Study Hours & Feasibility",
  description:
    "Free interactive JEE & NEET Backlog Clearance Calculator. Calculate total hours needed per chapter, detect schedule deficits, and generate a realistic chapter triage roadmap with verified rankers.",
  keywords: [
    "backlog clearance calculator",
    "jee backlog calculator",
    "neet backlog calculator",
    "how to clear jee backlog in 2 months",
    "how to clear class 11 wasted backlog",
    "neet backlog recovery plan",
    "jee backlog hours required",
  ],
  alternates: {
    canonical: "https://mentskool.com/tools/jee-neet-backlog-clearance-calculator",
  },
  openGraph: {
    title: "JEE & NEET Backlog Clearance Calculator | Mentskool",
    description:
      "Find out if your backlog is realistically clearable before exams. Enter your pending chapters across Physics, Chemistry, and Math/Bio to get an instant feasibility verdict.",
    url: "https://mentskool.com/tools/jee-neet-backlog-clearance-calculator",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "JEE & NEET Backlog Clearance Calculator - Mentskool",
      },
    ],
  },
};

const faqs: FaqItem[] = [
  {
    question: "How does this calculator estimate backlog hours per chapter?",
    answer:
      "Our calibration is based on the verified study logs of recent top 1,000 IITian and AIIMS rankers: ~13 hours for Physics (rapid concept synthesis + 40 curated PYQs), ~11 hours for Chemistry (NCERT line mapping and named reactions), ~15 hours for JEE Mathematics (high question-type variety), and ~8 hours for NEET Biology (high-density NCERT active recall).",
  },
  {
    question: "Should I stop attending live coaching classes to clear my backlog?",
    answer:
      "Never pause or skip your current coaching classes. Doing so creates a 'rolling backlog' where today's class becomes tomorrow's backlog. The golden rule is: protect 70% of your daily study time for current running topics, and use a dedicated 2.5-hour evening slot strictly for backlog triage.",
  },
  {
    question: "What should I do if the calculator shows a 'Severe Overload' status?",
    answer:
      "If you have an hour deficit, you must apply the 'A/B/C Chapter Triage System'. Complete Tier A chapters (high-weightage prerequisite topics like Mechanics, GOC, and Chemical Bonding) immediately. Defer Tier C chapters (isolated, low-yield memory chapters) to post-syllabus revision sprints.",
  },
  {
    question: "How is backlog clearance different for JEE vs NEET?",
    answer:
      "For JEE, backlog recovery requires deep problem-solving in Mechanics and Calculus because subsequent chapters heavily depend on them. For NEET, Biology backlogs can be cleared quickly via high-speed NCERT line-by-line reading and active recall flashcards without requiring dozens of hours of video lectures.",
  },
  {
    question: "Can an IITian or AIIMS mentor help me build a week-by-week backlog schedule?",
    answer:
      "Yes. In a 1-on-1 Backlog Recovery Session, a verified ranker audits your incomplete chapters, removes low-priority busywork, and builds an hour-by-hour calendar tailored to your school and coaching timetable.",
  },
];

export default function BacklogClearanceCalculatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        name: "Mentskool",
        url: "https://mentskool.com",
        logo: "https://mentskool.com/logo.png",
      },
      {
        "@type": "WebApplication",
        name: "JEE & NEET Backlog Clearance Calculator",
        applicationCategory: "EducationalApplication",
        operatingSystem: "All",
        url: "https://mentskool.com/tools/jee-neet-backlog-clearance-calculator",
        description:
          "Calculate total hours needed to clear JEE or NEET backlogs, identify daily schedule deficits, and create an actionable chapter triage plan.",
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
    <div className="relative min-h-screen bg-slate-950 text-white selection:bg-emerald-500/30 selection:text-emerald-200">
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
              { label: "Free Tools", href: "/resources" },
              {
                label: "Backlog Clearance Calculator",
                href: "/tools/jee-neet-backlog-clearance-calculator",
              },
            ]}
          />

          {/* Hero Header */}
          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-semibold mb-4">
              <Calculator className="w-3.5 h-3.5" />
              <span>Free Engineering &amp; Medical Preparation Tool</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              JEE &amp; NEET{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400">
                Backlog Clearance Calculator
              </span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Panicking about wasted Class 11 chapters or coaching backlogs? Enter your pending topics to see if your timeline is realistically achievable and identify what to prioritize first.
            </p>
          </div>

          {/* Interactive Calculator Widget */}
          <div className="my-10">
            <BacklogClearanceCalculatorWidget />
          </div>

          {/* The 3-Tier Backlog Triage Strategy */}
          <section className="my-16 p-6 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3">
              <Sparkles className="w-4 h-4" />
              <span>Ranker Triage Framework</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              The A/B/C Framework: How To Recover Without Failing Current Topics
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
              Most students fail to clear backlogs because they attempt to watch 40 hours of theory lectures for every chapter from scratch. IITians and AIIMS rankers use an <strong>aggressive chapter classification model</strong>:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-slate-950/70 border border-emerald-500/30 space-y-2.5">
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-bold">
                  Tier A • Prerequisite Core
                </span>
                <h3 className="text-base font-bold text-white">Non-Negotiable Foundations</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Chapters like Newton&apos;s Laws, Basic Chemical Bonding, and General Organic Chemistry. If these are in backlog, you cannot understand current syllabus. Must clear these first with 40 PYQs.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950/70 border border-amber-500/30 space-y-2.5">
                <span className="px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400 text-xs font-bold">
                  Tier B • High-Yield Isolated
                </span>
                <h3 className="text-base font-bold text-white">Independent Scoring Units</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Topics like Modern Physics, Thermodynamics, and Biotechnology. They carry massive exam weightage but don&apos;t block other chapters. Allocate targeted weekend sprints to knock these out.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2.5">
                <span className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-400 text-xs font-bold">
                  Tier C • Low-Yield / Isolated
                </span>
                <h3 className="text-base font-bold text-white">Safe to Defer</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Memory-heavy or niche chapters like Salt Analysis or Environmental Chemistry. Never let these stall your current momentum; revise them from short notes in the final 45 days.
                </p>
              </div>
            </div>
          </section>

          {/* Mentor Support Funnel */}
          <SeoMentorFunnel
            examFocus="BOTH"
            title="Need an IITian or AIIMS Doctor to Audit Your Backlogs?"
            subtitle="Connect 1-on-1 with verified rankers who conquered massive backlogs during their own Class 11 and 12 journeys."
          />

          {/* FAQs */}
          <section className="mt-16">
            <SeoFaqAccordion
              faqs={faqs}
              title="Frequently Asked Questions About JEE &amp; NEET Backlog Recovery"
              subtitle="Everything you need to know about calculating study hours and structuring your recovery timeline."
            />
          </section>

          {/* Bottom CTA */}
          <section className="mt-16">
            <SeoCtaBanner
              title="Stop Guessing. Build a Backlog Recovery Plan Today."
              description="A 45-minute roadmap call with a top 1,000 ranker can turn your backlog panic into clear, stress-free execution."
              primaryButtonText="Book 1:1 Backlog Session"
              primaryButtonHref="/book-call"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
