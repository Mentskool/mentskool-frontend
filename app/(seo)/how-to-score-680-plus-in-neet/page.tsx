import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  AlertCircle,
  CheckCircle2,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  HeartPulse,
  Layers,
  Clock,
  Dna,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { SeoMentorFunnel } from "@/components/seo/SeoMentorFunnel";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "How to Score 680+ in NEET: The Flawless 3-Round Protocol & Subject Blueprint",
  description:
    "Master the definitive 680+ score roadmap for NEET UG. Subject-wise target distribution (355 Bio + 165 Chem + 162 Phys), 200-minute time management framework, and OMR bubbling discipline from AIIMS rankers.",
  keywords: [
    "how to score 680 in neet",
    "neet 680 marks strategy",
    "how to get aiims delhi in neet",
    "subject wise marks for 680 in neet",
    "neet 200 minute time allocation strategy",
    "how to get government medical college neet",
    "neet ranker study routine",
  ],
  alternates: {
    canonical: "https://mentskool.com/how-to-score-680-plus-in-neet",
  },
  openGraph: {
    title: "How to Score 680+ in NEET: The Flawless 3-Round Protocol",
    description:
      "Secure a guaranteed Government Medical College seat. Step-by-step 680+ score blueprint: 355+ in Biology, 165+ in Chemistry, and 160+ in Physics.",
    url: "https://mentskool.com/how-to-score-680-plus-in-neet",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Score 680 Plus NEET - Mentskool",
      },
    ],
  },
};

const faqs: FaqItem[] = [
  {
    question: "Why is 680+ considered the ideal target score for NEET UG?",
    answer:
      "In the current competitive landscape, achieving 680+ marks places an aspirant in the top 1,500 to 2,500 All India Rank (AIR), securing admission to established AIIMS campuses (Bhopal, Jodhpur, Bhubaneswar, Rishikesh) or premier state colleges (like MAMC, VMMC, Seth GS Mumbai) through both All India Quota and State Quota.",
  },
  {
    question: "What is the subject-wise marks distribution required to reach 680+?",
    answer:
      "The recommended distribution is: Biology: 355 to 360 marks (allowing at most 1 error); Chemistry: 165 to 170 marks (allowing 2–3 errors); and Physics: 160 to 165 marks (allowing 2 errors and 2 unattempted questions). Total: 680 to 695 marks.",
  },
  {
    question: "How should an aspirant allocate the 200 minutes of exam time across subjects?",
    answer:
      "A tested allocation strategy is: 1) Biology (90 questions): 40 to 45 minutes; 2) Chemistry (45 questions): 45 to 50 minutes; 3) Physics (45 questions): 65 to 70 minutes; 4) OMR bubbling & verification: 20 minutes; and 5) Final review buffer: 15 minutes.",
  },
  {
    question: "How can I prevent bubbling errors on the OMR sheet during the exam?",
    answer:
      "Use the 'Page-Spread Bubbling Protocol': solve all questions on a two-page spread in your question booklet (typically 6 to 8 questions), verify each question number once, bubble those answers on the OMR, and then turn the page. Never leave all 180 bubbles for the final 15 minutes of the exam.",
  },
  {
    question: "How many mock tests should a serious NEET aspirant complete before exam day?",
    answer:
      "Aspirants targeting 680+ typically complete 25 to 35 full-length, 200-minute mock tests using authentic printed OMR sheets and black ballpoint pens between January and April. Maintaining an Error Book to diagnose every lost mark is critical.",
  },
];

export default function HowToScore680PlusInNeetPage() {
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
        "@type": "Article",
        headline: "How to Score 680+ in NEET: The Flawless 3-Round Protocol & Subject Blueprint",
        description:
          "Authoritative strategic blueprint for scoring 680+ in NEET UG, subject allocation targets, 200-minute time management, and OMR accuracy protocols.",
        url: "https://mentskool.com/how-to-score-680-plus-in-neet",
        author: {
          "@type": "Organization",
          name: "Mentskool Medical Advisory Council",
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
    <div className="relative min-h-screen bg-slate-950 text-white selection:bg-emerald-500/30 selection:text-emerald-300">
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
                label: "How to Score 680+ in NEET",
                href: "/how-to-score-680-plus-in-neet",
              },
            ]}
          />

          {/* Hero Section */}
          <header className="mt-8 mb-12 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <Award className="w-4 h-4" />
              The AIIMS Admit Blueprint
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight">
              How to Score 680+ in NEET:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                The Flawless 3-Round Protocol &amp; Score Blueprint
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
              With over 24 lakh candidates competing for government medical seats, achieving a 680+ score provides an essential safety buffer. Master the subject-wise score distribution, pacing framework, and test-taking discipline used by top AIIMS rankers.
            </p>
          </header>

          {/* Direct Answer Box */}
          <section className="mb-14 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 backdrop-blur-md p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400 shrink-0">
                <HeartPulse className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-emerald-300 mb-2">
                  The Winning Score Formula: 355 Bio + 165 Chem + 162 Phys = 682 Marks
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  A score of 680+ does not require answering all 180 questions with absolute perfection. It requires: <strong className="text-emerald-300">Biology: 355/360</strong> (89 correct, 1 error max), <strong className="text-teal-300">Chemistry: 165/180</strong> (42 correct, 3 errors max), and <strong className="text-cyan-300">Physics: 162/180</strong> (41 correct, 2 errors, 2 left blank). This produces a net score of <strong className="text-white">682 marks</strong> (~Top 2,200 AIR), securing top medical college options.
                </p>
              </div>
            </div>
          </section>

          {/* Section 1: Subject-Wise Execution Architecture */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Layers className="w-7 h-7 text-emerald-400" />
              Subject-Wise Breakdown: Questions, Timing &amp; Accuracy Targets
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-emerald-400">1. Biology (Botany + Zoology)</h3>
                  <span className="text-xs font-mono text-emerald-300">45 Minutes</span>
                </div>
                <div className="text-2xl font-black text-white font-mono">355 / 360 Marks</div>
                <ul className="text-xs text-slate-300 space-y-1.5 pt-1">
                  <li><strong>Target Attempts:</strong> 90 questions.</li>
                  <li><strong>Strategy:</strong> Rely on NCERT verbatim line recall. Underline negative prompts like &apos;except&apos; and &apos;incorrect&apos;.</li>
                  <li><strong>Permissible Errors:</strong> Max 1 error.</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-teal-400">2. Chemistry</h3>
                  <span className="text-xs font-mono text-teal-300">45 Minutes</span>
                </div>
                <div className="text-2xl font-black text-white font-mono">165 / 180 Marks</div>
                <ul className="text-xs text-slate-300 space-y-1.5 pt-1">
                  <li><strong>Target Attempts:</strong> 44 to 45 questions.</li>
                  <li><strong>Strategy:</strong> Solve Inorganic first in 15 mins, Organic reaction roadmaps in 15 mins, and Physical calculations in 15 mins.</li>
                  <li><strong>Permissible Errors:</strong> Max 2 to 3 errors.</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-cyan-400">3. Physics</h3>
                  <span className="text-xs font-mono text-cyan-300">65 Minutes</span>
                </div>
                <div className="text-2xl font-black text-white font-mono">162 / 180 Marks</div>
                <ul className="text-xs text-slate-300 space-y-1.5 pt-1">
                  <li><strong>Target Attempts:</strong> 42 to 43 questions.</li>
                  <li><strong>Strategy:</strong> Complete Modern Physics, Heat, and Circuits first. Leave 2 overly complex Mechanics problems unattempted to avoid penalties.</li>
                  <li><strong>Permissible Errors:</strong> Max 2 errors.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2: The 200-Minute Pacing Architecture */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Clock className="w-7 h-7 text-emerald-400" />
              The 200-Minute Test-Taking Protocol (2:00 PM – 5:20 PM)
            </h2>
            <div className="space-y-4">
              <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/60">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  Phase 1 (2:00 PM – 2:45 PM): Biology Speed Sweep (90 Questions)
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  Start with Biology Section A and Section B. Mark answers directly in the question booklet. Bubble the OMR after completing each 10-question block. Target: secure 340+ marks within the first 45 minutes to build momentum.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/60">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  Phase 2 (2:45 PM – 3:35 PM): Chemistry Precision (45 Questions)
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  Tackle Inorganic and Organic Chemistry first. Solve Physical Chemistry numericals using order-of-magnitude and shortcut formulas. Bubble each completed section promptly on the OMR.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/60">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  Phase 3 (3:35 PM – 4:45 PM): Physics Methodical Solving (45 Questions)
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  Dedicate 70 uninterrupted minutes to Physics. Solve formula-direct questions first, followed by multi-step calculations. Choose the 10 most accessible questions in Section B.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/60">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  Phase 4 (4:45 PM – 5:20 PM): Review, OMR Verification &amp; Safe Skipping
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  Verify that exactly 10 questions are bubbled in Section B per subject. Recheck difficult questions with fresh perspective. Avoid impulsive guessing in the final 10 minutes.
                </p>
              </div>
            </div>
          </section>

          {/* Dedicated High-Converting Mentorship Funnel */}
          <SeoMentorFunnel
            examFocus="NEET"
            title="Secure Your 680+ Medical Score With AIIMS Mentors"
            subtitle="Work 1-on-1 with mentors from AIIMS New Delhi and top medical colleges. Get weekly mock analysis, NCERT line-by-line audits, and personalized pacing guidance."
          />

          {/* Section 3: FAQ Accordion */}
          <section className="my-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center justify-center gap-3">
                <HelpCircle className="w-7 h-7 text-emerald-400" />
                Frequently Asked Questions: Scoring 680+ in NEET
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Strategic advice on pacing, OMR bubbling discipline, and test-day preparation.
              </p>
            </div>
            <SeoFaqAccordion items={faqs} />
          </section>

          {/* Final Call to Action */}
          <SeoCtaBanner
            title="Start Your 680+ Preparation Strategy"
            subtitle="Connect with medical mentors who have walked this exact path and will help you build a personalized roadmap to your dream medical college."
            primaryBtnText="Claim Free Mentorship Call"
            primaryBtnHref="/free-mentorship-session"
            secondaryBtnText="Explore Top Medical Mentors"
            secondaryBtnHref="/mentors"
          />
        </div>
      </main>
    </div>
  );
}
