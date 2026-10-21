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
  FlaskConical,
  Beaker,
  HeartPulse,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "NEET Chemistry Mentor — Score 165+ in Chemistry with AIIMS Doctors",
  description:
    "Chemistry is your greatest scoring accelerator in NEET. Master line-by-line NCERT Inorganic tables, Organic reaction conversions, and Physical numerical templates with verified AIIMS doctors.",
  keywords: [
    "NEET chemistry mentor",
    "score 165 in NEET chemistry",
    "organic chemistry for NEET UG with doctor",
    "inorganic chemistry NCERT memorization NEET",
    "best chemistry mentor for NEET",
    "physical chemistry formulas NEET",
  ],
  alternates: {
    canonical: "https://mentskool.com/neet-chemistry-mentor",
  },
  openGraph: {
    title: "NEET Chemistry Mentor: Score 165+ with AIIMS Doctors",
    description:
      "Finish Chemistry in 45 minutes and secure 165+ marks. Master NCERT Inorganic and Organic reaction maps with verified AIIMS rankers.",
    url: "https://mentskool.com/neet-chemistry-mentor",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "NEET Chemistry Mentor - Mentskool",
      },
    ],
  },
};

const neetChemFaqs: FaqItem[] = [
  {
    question: "How do AIIMS doctors structure Chemistry revision to score 165+?",
    answer:
      "Chemistry requires 3 distinct revision styles: 1) Inorganic Chemistry is 100% NCERT line-by-line memorization (periodic trends, coordination isomers, d-block colors); 2) Organic Chemistry is logical mechanism flowcharts (master GOC and named reactions); 3) Physical Chemistry is rapid formula substitution (Solutions, Electrochemistry, Kinetics). Your mentor audits all three tracks during weekly 1:1 strategy calls.",
  },
  {
    question: "How do mentors prevent silly negative marks in Organic Chemistry?",
    answer:
      "Silly errors in Organic happen when students memorize reaction products without understanding the reagent's function (e.g., distinguishing between acidic vs basic hydrolysis or PCC vs KMnO4). Your mentor teaches 'Reagent Function Mapping' so you predict the major product intuitively.",
  },
  {
    question: "How fast should I finish Chemistry during the NEET exam?",
    answer:
      "Our mentors train you to finish all 45 Chemistry questions in 45 to 50 minutes. Finishing Biology in 42 minutes and Chemistry in 48 minutes leaves you with 70+ peaceful minutes for Physics numericals.",
  },
  {
    question: "How many Chemistry questions should I solve daily?",
    answer:
      "We mandate 35 to 45 targeted MCQs daily across Physical calculations, Organic conversions, and Inorganic NCERT line recall.",
  },
];

export default function NeetChemistryMentorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        name: "Mentskool Technologies",
        url: "https://mentskool.com",
        logo: "https://mentskool.com/logo.png",
        description:
          "Specialized 1-on-1 NEET Chemistry mentorship with top AIIMS doctors.",
      },
      {
        "@type": "FAQPage",
        mainEntity: neetChemFaqs.map((faq) => ({
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
                label: "Chemistry Mentor",
                href: "/neet-chemistry-mentor",
              },
            ]}
          />

          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 text-xs font-semibold mb-4">
              <FlaskConical className="w-3.5 h-3.5" />
              <span>Specialized 1:1 Medical Chemistry Mentorship</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              NEET Chemistry Mentor: <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-300 to-sky-400">Score 165+ &amp; Finish in 48 Minutes</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Chemistry is the high-speed scoring bridge between Biology and Physics. Master NCERT Inorganic tables, Organic mechanism flowcharts, and Physical numerical shortcuts with verified <strong>AIIMS doctors</strong>.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-700 hover:from-teal-700 hover:to-emerald-800 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Find Your Medical Chemistry Mentor</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/free-mentorship-session"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all"
              >
                Claim Free Chemistry Strategy Call
              </Link>
            </div>
          </div>

          {/* Direct Answer Box for AI Overviews & Search Snippets */}
          <section className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-teal-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-teal-400 mb-3">
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span>Executive Summary: What Does A Mentskool Chemistry Mentor Deliver?</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-5">
              The <strong>Mentskool NEET Chemistry Mentorship Track</strong> engineers 165+ marks across three coordinated disciplines:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                <span><strong>Inorganic NCERT Line Precision:</strong> Quizzing trend exceptions, coordination colors, and extraction tables closed-book.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                <span><strong>Organic Reagent Function Mapping:</strong> Learning reagent mechanisms rather than blind rote memorization of reaction products.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                <span><strong>Physical Chemistry Speed Sprints:</strong> Practicing direct formula substitutions and mental math approximations for thermodynamics.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                <span><strong>48-Minute Section Conditioning:</strong> Training you to finish all 45 questions in 48 minutes, protecting your Physics time budget.</span>
              </div>
            </div>
          </section>

          {/* FAQ Accordion */}
          <section className="mt-16">
            <SeoFaqAccordion
              faqs={neetChemFaqs}
              title="Frequently Asked Questions: NEET Chemistry Mentorship"
              subtitle="Everything you need to know about NCERT Inorganic tables, Organic flowcharts, and 1:1 doctor guidance."
            />
          </section>

          {/* CTA Banner */}
          <section className="mt-16">
            <SeoCtaBanner
              title="Score 165+ in NEET Chemistry with an AIIMS Doctor"
              description="Get paired 1-on-1 with an AIIMS doctor who will audit your NCERT lines, train Organic conversions, and guide your daily drills on a flexible monthly plan."
              primaryButtonText="Find Your Medical Chemistry Mentor"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
