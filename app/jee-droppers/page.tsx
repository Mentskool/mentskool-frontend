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
  Flame,
  RefreshCw,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { ProgramFeatures } from "@/components/seo/ProgramFeatures";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "Best Mentorship for JEE Droppers & Repeaters — 1:1 IITian Accountability",
  description:
    "Turn your JEE drop year into a top IIT rank. 1:1 personalized mentorship for JEE droppers with daily problem accountability, mock test error audits, and burnout prevention by IIT Bombay & Delhi rankers.",
  keywords: [
    "best mentorship program for JEE droppers",
    "JEE repeater mentorship",
    "JEE dropper accountability",
    "drop year strategy JEE Advanced",
    "IIT JEE repeater study plan",
    "JEE dropper timetable 11 hours",
  ],
  alternates: {
    canonical: "https://mentskool.com/jee-droppers",
  },
  openGraph: {
    title: "Best Mentorship for JEE Droppers & Repeaters | Mentskool",
    description:
      "Daily discipline, syllabus calibration, and test error audits from mentors who turned their own drop year into top IIT ranks.",
    url: "https://mentskool.com/jee-droppers",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Mentskool JEE Dropper Mentorship",
      },
    ],
  },
};

const dropperFaqs: FaqItem[] = [
  {
    question: "Why do droppers need 1:1 mentorship rather than more coaching lectures?",
    answer:
      "Droppers already know the core concepts from Class 11 and 12. Their primary barrier is consistency, social isolation, and unanalyzed mock test errors. Watching more lectures won't fix calculation blunders or low test speed. 1:1 accountability ensures you spend 80% of your time solving problems and fixing mistakes rather than passively watching teachers.",
  },
  {
    question: "Have Mentskool mentors also taken a drop year?",
    answer:
      "Yes! Many of our top IIT mentors took a drop year themselves and increased their percentile from 91% to 99.8%+, eventually securing top branches in IIT Bombay, Delhi, and Roorkee. They understand the exact psychological hurdles, parental pressure, and revision schedules required.",
  },
  {
    question: "How does Mentskool prevent drop-year burnout?",
    answer:
      "With weekly 1:1 strategy calls on Google Meet, mentors adjust your syllabus load to prevent fatigue. Our proprietary 94% efficiency score tracks your pace dynamically on our web dashboard, keeping motivation high without overwhelming you.",
  },
  {
    question: "Can I get help analyzing my coaching mock tests (Allen/FIITJEE/Resonance/PW)?",
    answer:
      "Absolutely. In your weekly 1:1 strategy calls, you and your mentor review your question rough sheets line-by-line to categorize mistakes into silly arithmetic errors, conceptual gaps, and time-panic slips.",
  },
  {
    question: "How many questions should a JEE dropper solve each day?",
    answer:
      "We mandate between 80 and 110 self-solved questions daily across Physics (30), Chemistry (30), and Mathematics (25–30). Consistent, timed problem solving beats passive lecture watching every single time.",
  },
];

export default function JeeDroppersPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        name: "Mentskool Technologies",
        url: "https://mentskool.com",
        logo: "https://mentskool.com/logo.png",
        description:
          "India's premier 1-on-1 mentorship platform for JEE droppers and repeaters.",
      },
      {
        "@type": "FAQPage",
        mainEntity: dropperFaqs.map((faq) => ({
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
              { label: "Programs", href: "/jee-mentorship" },
              {
                label: "JEE Droppers",
                href: "/jee-droppers",
              },
            ]}
          />

          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold mb-4">
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Tailored Drop-Year Consistency &amp; Rank Surge</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              JEE Droppers Mentorship: <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-rose-400">Make Your Drop Year Count</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Your drop year does not need more factory video lectures. It needs laser-focused question solving, rough-sheet mock test audits, and an <strong>IIT Bombay or Delhi ranker</strong> who keeps you accountable every single week.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 hover:from-amber-700 hover:to-rose-700 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Find Your Dropper Mentor</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/free-mentorship-session"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all"
              >
                Claim Free Drop-Year Strategy Call
              </Link>
            </div>
          </div>

          {/* Direct Answer Box for AI Overviews & Search Snippets */}
          <section className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-amber-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-amber-400 mb-3">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Executive Summary: The Mentskool JEE Dropper Turnaround Engine</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-5">
              The <strong>Mentskool JEE Dropper Program</strong> is engineered to eliminate the isolation and score plateau that derails 70% of repeaters:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <span><strong>The 80/20 Problem-Solving Rule:</strong> Shift from passive 6-hour video watching to 80% daily self-solved problem quotas.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <span><strong>Isolation &amp; Mental Fatigue Shield:</strong> Weekly 1:1 strategy calls with an IITian who personally conquered drop-year pressure.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <span><strong>Mock Test Rough Sheet Post-Mortems:</strong> Dissecting every test error to systematically eliminate 25+ negative marks.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <span><strong>94% Daily Task Efficiency Dashboard:</strong> Submit completed question counts daily for mentor tracking and pacing.</span>
              </div>
            </div>
          </section>

          {/* Program Features Component */}
          <section className="my-16">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                The 4 Pillars of the Mentskool Dropper Engine
              </h2>
              <p className="text-slate-400 text-sm mt-2">
                Lectures explain the concept. Mentorship guarantees the execution.
              </p>
            </div>
            <ProgramFeatures />
          </section>

          {/* FAQs */}
          <section className="mt-16">
            <SeoFaqAccordion
              faqs={dropperFaqs}
              title="Frequently Asked Questions: JEE Droppers Mentorship"
              subtitle="Everything you need to know about drop-year strategy, burnout prevention, and 1:1 IITian guidance."
            />
          </section>

          {/* CTA Banner */}
          <section className="mt-16">
            <SeoCtaBanner
              title="Transform Your Drop Year into an IIT Success Story"
              description="Get paired 1-on-1 with an IITian who will build your daily timetable, track your daily problem quotas, and guide your mock tests every single week."
              primaryButtonText="Find Your Dropper Mentor"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
