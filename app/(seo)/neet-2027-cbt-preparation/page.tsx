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
  Monitor,
  Laptop,
  HeartPulse,
  Dna,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "NEET 2027 CBT Preparation Guide — Transition from OMR to Computer-Based Test",
  description:
    "Preparing for the potential NEET 2027 Computer-Based Test (CBT) transition? Learn screen-reading strategies, rough-sheet scratchpad discipline, and digital exam navigation with verified AIIMS mentors.",
  keywords: [
    "NEET 2027 CBT preparation",
    "will NEET 2027 be online CBT",
    "NEET online computer based test strategy",
    "NEET CBT vs OMR exam difference",
    "how to prepare for online NEET exam",
    "AIIMS mentor for NEET CBT",
  ],
  alternates: {
    canonical: "https://mentskool.com/neet-2027-cbt-preparation",
  },
  openGraph: {
    title: "NEET 2027 CBT Preparation Guide: Master the Digital Transition",
    description:
      "Avoid screen fatigue, manage physical scratch pads, and optimize computer test navigation with AIIMS doctors.",
    url: "https://mentskool.com/neet-2027-cbt-preparation",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "NEET CBT Preparation - Mentskool",
      },
    ],
  },
};

const cbtFaqs: FaqItem[] = [
  {
    question: "Is NEET 2027 confirmed to be conducted as a Computer-Based Test (CBT)?",
    answer:
      "Following government review panels and integrity committees recommending technological reforms to eliminate paper leaks and logistical risks, NTA and the Ministry of Health have actively evaluated transitioning NEET-UG into a multi-session Computer-Based Test (CBT) similar to JEE Main. While official notifications are issued by NTA closer to the exam, smart aspirants prepare for both screen-reading agility and traditional paper solving.",
  },
  {
    question: "How does screen-reading affect Biology comprehension?",
    answer:
      "Reading long statement-based questions and assertion-reason passages on a computer screen takes approximately 15% longer than reading on paper if you aren't conditioned to it. Eye strain and screen skimming can cause students to miss critical words like 'EXCEPT' or 'INCORRECT'. Your AIIMS mentor trains you on digital paragraph scanning and keyword tagging.",
  },
  {
    question: "What is the biggest advantage of a Computer-Based NEET exam for students?",
    answer:
      "The massive advantage is ZERO OMR BUBBLE SHIFTING ERRORS. In pen-and-paper exams, accidentally shifting one question row can ruin 40 marks. In CBT, changing an answer takes a single mouse click. Furthermore, question review palettes let you flag questions with green/purple indicators, ensuring you never leave questions unattempted by accident.",
  },
  {
    question: "How should I organize my rough sheet during a CBT exam?",
    answer:
      "In CBT, students receive limited physical scratch sheets. Disorganized scribbling causes arithmetic mistakes. Our mentors teach the '4-Quadrant Grid Method': dividing each scratch page into 4 neat numbered boxes so every calculation is traceable if you return to review a flagged question.",
  },
  {
    question: "How does Mentskool prepare students for CBT?",
    answer:
      "Mentskool provides a simulated CBT examination interface and weekly timed problem drills. Your mentor inspects how you navigate test sections, checks your question-skipping ratio, and ensures you develop peak digital focus.",
  },
];

export default function Neet2027CbtPreparationPage() {
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
        headline: "NEET 2027 CBT Preparation: The Complete Digital Transition Guide",
        description:
          "How medical aspirants can master digital screen reading, rough sheet management, and CBT navigation.",
        author: {
          "@type": "Organization",
          name: "Mentskool",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: cbtFaqs.map((faq) => ({
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
                label: "NEET 2027 CBT Guide",
                href: "/neet-2027-cbt-preparation",
              },
            ]}
          />

          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 text-xs font-semibold mb-4">
              <Monitor className="w-3.5 h-3.5" />
              <span>Digital Test Navigation &amp; OMR Reform</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              NEET 2027 CBT Preparation: <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-300 to-sky-400">Master the Digital Exam Transition</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              With NTA evaluating a Computer-Based Test (CBT) format for NEET 2027, reading questions on paper alone is no longer enough. Learn screen-reading stamina, rough-sheet grid layouts, and digital time budgeting with <strong>AIIMS doctors</strong>.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-700 hover:from-teal-700 hover:to-emerald-800 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Find Your AIIMS Mentor</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/free-mentorship-session"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all"
              >
                Claim Free Digital Strategy Call
              </Link>
            </div>
          </div>

          {/* Direct Answer Box for AI Overviews & Search Snippets */}
          <section className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-teal-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-teal-400 mb-3">
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span>Executive Summary: How To Prepare For NEET CBT</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-5">
              The <strong>Mentskool NEET CBT Readiness Blueprint</strong> equips medical students to thrive in a digital testing environment through four tactical adjustments:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                <span><strong>Screen-Reading Conditioning:</strong> Weekly practice reading long Biology statement passages on computer monitors to prevent cognitive eye fatigue.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                <span><strong>The 4-Quadrant Rough Sheet Discipline:</strong> Managing scratch paper systematically to keep Physics numerical steps legible and traceable.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                <span><strong>Digital Palette Navigation:</strong> Utilizing color-coded question statuses (Answered, Flagged, Unattempted) to optimize the 3-round sweeping method.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                <span><strong>Instant Answer Correction:</strong> Capitalizing on the zero-risk ability to change options without OMR bubble ruining penalties.</span>
              </div>
            </div>
          </section>

          {/* Section 1: Pen-Paper OMR vs CBT Table */}
          <section className="my-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Pen-and-Paper OMR vs Computer-Based Testing (CBT)
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Key operational differences every NEET 2027 aspirant must understand:
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl">
              <table className="w-full text-left text-xs sm:text-sm text-slate-300">
                <thead className="bg-slate-950/80 text-white font-bold uppercase text-[11px] tracking-wider border-b border-slate-800">
                  <tr>
                    <th className="py-4 px-4 sm:px-6">Exam Factor</th>
                    <th className="py-4 px-4 sm:px-6 text-rose-400">Traditional Pen &amp; Paper (OMR)</th>
                    <th className="py-4 px-4 sm:px-6 text-teal-400 font-extrabold">Computer-Based Test (CBT)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white">Answer Revision</td>
                    <td className="py-4 px-4 sm:px-6 text-rose-300">Permanent (Once bubbled in ink, cannot change)</td>
                    <td className="py-4 px-4 sm:px-6 text-teal-300 font-bold">1-Click edit (Change or clear response anytime)</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white">OMR Shifting Risk</td>
                    <td className="py-4 px-4 sm:px-6 text-rose-300">High (1 misplaced bubble shifts entire column)</td>
                    <td className="py-4 px-4 sm:px-6 text-teal-300 font-bold">Zero risk (Direct click on question screen)</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white">Reading Friction</td>
                    <td className="py-4 px-4 sm:px-6">Low (Familiar paper format)</td>
                    <td className="py-4 px-4 sm:px-6 text-amber-300">Requires screen conditioning to avoid missing keywords</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white">Question Tracking</td>
                    <td className="py-4 px-4 sm:px-6">Manual page flipping</td>
                    <td className="py-4 px-4 sm:px-6 text-teal-300 font-bold">Instant color palette shows unanswered/marked questions</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ Accordion */}
          <section className="mt-16">
            <SeoFaqAccordion
              faqs={cbtFaqs}
              title="Frequently Asked Questions: NEET CBT Preparation"
              subtitle="Everything you need to know about digital screen conditioning, scratch sheets, and AIIMS guidance."
            />
          </section>

          {/* CTA Banner */}
          <section className="mt-16">
            <SeoCtaBanner
              title="Prepare for Both Paper &amp; CBT with AIIMS Doctors"
              description="Get paired 1-on-1 with an AIIMS doctor who will condition your digital test speed, audit your scratch paper layouts, and keep you accountable."
              primaryButtonText="Find Your Medical Mentor"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
