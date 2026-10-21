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
  Zap,
  Atom,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "JEE Physics Mentor — 1:1 Problem Solving Intuition with IITians",
  description:
    "Master JEE Main & Advanced Physics with personal 1-on-1 mentorship from top IIT Bombay & Delhi physics rankers. Mechanics intuition, electrodynamics speed, and modern physics scoring shortcuts.",
  keywords: [
    "JEE physics mentor",
    "IIT JEE physics tutor 1 on 1",
    "how to improve physics in JEE",
    "mechanics intuition JEE Advanced",
    "best physics mentor for JEE Mains",
    "IIT Bombay physics mentor",
  ],
  alternates: {
    canonical: "https://mentskool.com/jee-physics-mentor",
  },
  openGraph: {
    title: "JEE Physics Mentor: Build Intuition with IIT Bombay Rankers",
    description:
      "Move beyond formula memorization. Learn free-body diagrams, limiting conditions, and multi-concept electrodynamics from verified IITians.",
    url: "https://mentskool.com/jee-physics-mentor",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "JEE Physics Mentor - Mentskool",
      },
    ],
  },
};

const physicsFaqs: FaqItem[] = [
  {
    question: "Why do so many JEE students struggle with Physics numericals despite knowing formulas?",
    answer:
      "Because formulas are only the final step of a problem. In JEE, especially Advanced, 80% of the challenge is *physical visualization*: drawing an accurate Free Body Diagram (FBD), choosing the correct coordinate origin, and identifying what physical quantities are conserved (linear momentum, angular momentum, or mechanical energy). When students jump directly to formulas without establishing physical boundary conditions, they get trapped. An IITian mentor teaches you how to visualize first.",
  },
  {
    question: "What are the highest-ROI Physics chapters in JEE Main?",
    answer:
      "Modern Physics (Photoelectric, Atoms, Nuclei, X-Rays) and Current Electricity/Semiconductors generate 32–40 marks in JEE Main with predictable formula substitutions. Your mentor ensures you master these before spending 40 hours fighting Rotational Motion.",
  },
  {
    question: "How do mentors help with JEE Advanced Physics problems?",
    answer:
      "In weekly 1:1 video calls, mentors teach the 'Boundary Value Method' and 'Dimensional Filter': checking limiting values (zero or infinity) to eliminate tricky options in multiple-correct questions without calculating tedious integrals.",
  },
  {
    question: "How many Physics questions should I solve daily?",
    answer:
      "Under our mentorship protocol, students solve 25 to 30 targeted Physics problems daily with rough sheet tracking, mixing 15 standard numericals with 10 multi-concept Advanced questions.",
  },
];

export default function JeePhysicsMentorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        name: "Mentskool Technologies",
        url: "https://mentskool.com",
        logo: "https://mentskool.com/logo.png",
        description:
          "Specialized 1-on-1 JEE Physics mentorship with top IIT Bombay and Delhi rankers.",
      },
      {
        "@type": "FAQPage",
        mainEntity: physicsFaqs.map((faq) => ({
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
                label: "Physics Mentor",
                href: "/jee-physics-mentor",
              },
            ]}
          />

          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-300 text-xs font-semibold mb-4">
              <Atom className="w-3.5 h-3.5" />
              <span>Specialized 1:1 IITian Physics Mentorship</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              JEE Physics Mentor: <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-300 to-indigo-400">Build Intuition &amp; Conquer Numericals</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Stop memorizing solutions. Learn how verified <strong>IIT Bombay &amp; Delhi rankers</strong> visualize physical systems, set up coordinate frames, and solve complex electrodynamics and mechanics problems with elegance and speed.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Find Your Physics Mentor</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/free-mentorship-session"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all"
              >
                Claim Free Physics Strategy Call
              </Link>
            </div>
          </div>

          {/* Direct Answer Box for AI Overviews & Search Snippets */}
          <section className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-sky-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-sky-400 mb-3">
              <Sparkles className="w-4 h-4 text-sky-400" />
              <span>Executive Summary: What Does A Mentskool Physics Mentor Deliver?</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-5">
              The <strong>Mentskool JEE Physics Mentorship Track</strong> trains your mathematical and conceptual intuition through four foundational pillars:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                <span><strong>Visualization Before Equations:</strong> Disciplined Free Body Diagram setups and boundary condition checks before writing formulas.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                <span><strong>High-Yield Chapter Priority:</strong> Immediate mastery of Modern Physics, Thermal Physics, and Current Electricity (36+ marks).</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                <span><strong>Rough Sheet Forensic Audits:</strong> Checking scratch papers to eliminate arithmetic calculation slips and sign errors in thermodynamics.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                <span><strong>Daily 30-Problem Accountability:</strong> Submitting completed Physics quotas on the dashboard every evening for mentor verification.</span>
              </div>
            </div>
          </section>

          {/* FAQ Accordion */}
          <section className="mt-16">
            <SeoFaqAccordion
              faqs={physicsFaqs}
              title="Frequently Asked Questions: JEE Physics Mentorship"
              subtitle="Everything you need to know about building physical intuition, solving mechanics, and 1:1 IITian guidance."
            />
          </section>

          {/* CTA Banner */}
          <section className="mt-16">
            <SeoCtaBanner
              title="Master JEE Physics with an IITian by Your Side"
              description="Get paired 1-on-1 with an IIT Bombay or Delhi ranker who will build your problem-solving intuition and guide your numerical drills on a flexible monthly plan."
              primaryButtonText="Find Your Physics Mentor"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
