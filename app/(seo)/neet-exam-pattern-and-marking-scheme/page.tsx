import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  AlertCircle,
  CheckCircle2,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  Clock,
  Award,
  Layers,
  HeartPulse,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { SeoMentorFunnel } from "@/components/seo/SeoMentorFunnel";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "NEET Exam Pattern & Marking Scheme: 200 Questions, 720 Marks & Section B Protocol",
  description:
    "Comprehensive guide to the NEET UG examination pattern and marking rules. 720 marks, 200 minutes duration, Physics/Chemistry/Botany/Zoology Section A & B rules, first-10 question evaluation, and time allocation tactics.",
  keywords: [
    "neet exam pattern",
    "neet marking scheme",
    "neet section b rules",
    "neet total questions 200",
    "neet total marks 720",
    "neet 200 minutes duration",
    "neet first 10 questions evaluation rule",
    "negative marking in neet",
  ],
  alternates: {
    canonical: "https://mentskool.com/neet-exam-pattern-and-marking-scheme",
  },
  openGraph: {
    title: "NEET Exam Pattern & Marking Scheme Explained (720 Marks)",
    description:
      "Master the NEET UG pattern: 180 questions to attempt from 200, Section B optional rules, +4 / -1 marking scheme, and time management strategies for 680+ scorers.",
    url: "https://mentskool.com/neet-exam-pattern-and-marking-scheme",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "NEET Exam Pattern - Mentskool",
      },
    ],
  },
};

const faqs: FaqItem[] = [
  {
    question: "What is the total number of questions and marks in the NEET UG exam?",
    answer:
      "NEET UG consists of 200 multiple-choice questions across four subjects: Physics, Chemistry, Botany, and Zoology. Candidates are required to attempt exactly 180 questions for a total of 720 marks. Each correctly answered question awards +4 marks, while an incorrect response deducts -1 mark.",
  },
  {
    question: "How does Section B work in each subject of NEET UG?",
    answer:
      "Each of the four subjects contains two sections: Section A comprises 35 compulsory MCQs (35 × 4 = 140 marks), and Section B comprises 15 MCQs out of which candidates must attempt any 10 (10 × 4 = 40 marks). This provides candidates with optional choice in Section B only.",
  },
  {
    question: "What happens if a candidate attempts more than 10 questions in Section B?",
    answer:
      "According to NTA's official examination instructions, if a candidate marks more than 10 questions in Section B of any subject on the OMR sheet, only the first 10 questions attempted in sequential order will be evaluated. Any subsequent questions will be completely disregarded, even if they are correct.",
  },
  {
    question: "What is the official duration of the NEET UG examination?",
    answer:
      "The duration of NEET UG is exactly 200 minutes (3 hours and 20 minutes), typically scheduled from 2:00 PM to 5:20 PM IST in a single pen-and-paper OMR shift. Candidates must report to the examination center by 1:30 PM.",
  },
  {
    question: "Is there any negative marking for unattempted questions in NEET?",
    answer:
      "No. Unattempted or unanswered questions carry zero marks (0 penalty). Leaving difficult or uncertain questions blank is a fundamental strategy used by high-scoring aspirants to preserve their score and avoid -1 mark deductions.",
  },
  {
    question: "What is the recommended time allocation across the four subjects?",
    answer:
      "Top rankers recommend: Biology (Botany + Zoology: 90 questions) completed in 40–45 minutes; Chemistry (45 questions) completed in 45–50 minutes; Physics (45 questions) completed in 65–70 minutes; leaving 30–35 minutes for OMR bubbling verification, Section B selection checks, and difficult problem re-attempts.",
  },
];

export default function NeetExamPatternAndMarkingSchemePage() {
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
        headline: "NEET Exam Pattern & Marking Scheme Breakdown: 720 Marks Blueprint",
        description:
          "Authoritative analysis of the NEET UG exam structure, Section A and Section B rules, negative marking calculations, and time management tactics for medical aspirants.",
        url: "https://mentskool.com/neet-exam-pattern-and-marking-scheme",
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
                label: "NEET Exam Pattern & Marking Scheme",
                href: "/neet-exam-pattern-and-marking-scheme",
              },
            ]}
          />

          {/* Hero Section */}
          <header className="mt-8 mb-12 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <ShieldCheck className="w-4 h-4" />
              NTA NEET UG Official Examination Framework
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight">
              NEET Exam Pattern & Marking Scheme:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                The 720 Marks & Section B Blueprint
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
              With over 24 lakh medical aspirants competing for limited government MBBS seats, understanding the fine print of NEET UG examination mechanics — from Section B evaluation rules to negative marking penalties — is what separates an AIIMS admit from an unexpected drop year.
            </p>
          </header>

          {/* Direct Answer Box */}
          <section className="mb-14 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 backdrop-blur-md p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400 shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-emerald-300 mb-2">
                  NEET Pattern at a Glance: 200 Questions, 180 to Attempt, 720 Marks
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  NEET UG is a single pen-and-paper OMR exam lasting <strong className="text-white">200 minutes</strong> (2:00 PM – 5:20 PM). The paper contains <strong className="text-white">200 questions</strong> across Physics, Chemistry, Botany, and Zoology. Candidates must attempt exactly <strong className="text-emerald-300">180 questions</strong> (35 compulsory in Section A + 10 out of 15 in Section B per subject). Correct answers yield <strong className="text-emerald-400">+4</strong>, incorrect answers incur <strong className="text-red-400">-1</strong>, and unattempted questions receive <strong className="text-white">0</strong>.
                </p>
              </div>
            </div>
          </section>

          {/* Section 1: Detailed Subject-Wise Structure */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Layers className="w-7 h-7 text-emerald-400" />
              Complete Subject-Wise Breakdown & Section Matrix
            </h2>
            <p className="text-slate-300 leading-relaxed">
              NEET divides its 720 marks equally across three primary domains: Biology (360 marks), Chemistry (180 marks), and Physics (180 marks). Below is the comprehensive structural matrix:
            </p>

            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/60 my-6">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-800/80 text-slate-200 border-b border-slate-700 font-semibold">
                  <tr>
                    <th className="p-4">Subject</th>
                    <th className="p-4">Section A (Compulsory)</th>
                    <th className="p-4">Section B (Choice)</th>
                    <th className="p-4">Questions to Attempt</th>
                    <th className="p-4">Total Subject Marks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">Physics</td>
                    <td className="p-4">35 Questions (140 marks)</td>
                    <td className="p-4">15 Questions (Attempt 10)</td>
                    <td className="p-4 font-mono font-bold text-emerald-400">45 Questions</td>
                    <td className="p-4 font-bold text-white">180 Marks</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">Chemistry</td>
                    <td className="p-4">35 Questions (140 marks)</td>
                    <td className="p-4">15 Questions (Attempt 10)</td>
                    <td className="p-4 font-mono font-bold text-emerald-400">45 Questions</td>
                    <td className="p-4 font-bold text-white">180 Marks</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">Botany (Biology I)</td>
                    <td className="p-4">35 Questions (140 marks)</td>
                    <td className="p-4">15 Questions (Attempt 10)</td>
                    <td className="p-4 font-mono font-bold text-emerald-400">45 Questions</td>
                    <td className="p-4 font-bold text-white">180 Marks</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">Zoology (Biology II)</td>
                    <td className="p-4">35 Questions (140 marks)</td>
                    <td className="p-4">15 Questions (Attempt 10)</td>
                    <td className="p-4 font-mono font-bold text-emerald-400">45 Questions</td>
                    <td className="p-4 font-bold text-white">180 Marks</td>
                  </tr>
                  <tr className="bg-slate-800/60 font-bold text-white">
                    <td className="p-4 text-emerald-400">Total Paper</td>
                    <td className="p-4">140 Questions (Compulsory)</td>
                    <td className="p-4">60 Questions (Attempt 40)</td>
                    <td className="p-4 font-mono text-emerald-300">180 Questions</td>
                    <td className="p-4 text-emerald-400">720 Marks</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: The Critical Section B Evaluation Trap */}
          <section className="mb-16 rounded-2xl border border-amber-500/30 bg-amber-950/20 p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3 text-amber-400 font-bold text-lg">
              <AlertCircle className="w-6 h-6 shrink-0" />
              The &quot;First 10 Questions Evaluated&quot; Section B Trap
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              In Section B of each subject, there are 15 questions numbered from 36 to 50 (or equivalent per subject block). You are allowed to attempt only 10 questions. If a candidate bubbles 12 or 13 questions on the OMR sheet:
            </p>
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-slate-300 space-y-2">
              <p>
                <strong className="text-white">Official NTA Directive:</strong> The optical scanning software evaluates only the <strong className="text-amber-300">first 10 bubbled responses</strong> in order of question number. Questions 11 and 12 will be ignored, even if question 11 was correct and question 2 was wrong.
              </p>
              <p className="text-xs text-slate-400">
                Rule of Thumb: Never mark more than 10 bubbles in Section B. Count your marked bubbles on the question paper before touching the OMR sheet.
              </p>
            </div>
          </section>

          {/* Section 3: Time Management Blueprint (200 Minutes for 180 Questions) */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Clock className="w-7 h-7 text-emerald-400" />
              The Ranker 3-Round Strategy: 200 Minutes Breakdown
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                <div className="text-emerald-400 font-mono text-xs font-bold uppercase">Phase 1: Minutes 0 to 50</div>
                <h3 className="text-lg font-bold text-white">Biology Blitz (Botany + Zoology)</h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Solve 90 questions of Biology directly from NCERT memory. Mark answers on the question paper and bubble the OMR concurrently or in blocks of 20. Target: 340+ marks locked within the first 50 minutes.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                <div className="text-teal-400 font-mono text-xs font-bold uppercase">Phase 2: Minutes 50 to 105</div>
                <h3 className="text-lg font-bold text-white">Chemistry Precision (Inorganic $\to$ Organic $\to$ Physical)</h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Tackle 45 Chemistry questions. Complete Inorganic and Organic in 25 minutes, then invest 30 minutes in Physical Chemistry calculations. Bubble OMR immediately upon solving each page. Target: 160+ marks.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                <div className="text-cyan-400 font-mono text-xs font-bold uppercase">Phase 3: Minutes 105 to 175</div>
                <h3 className="text-lg font-bold text-white">Physics Methodical Solving</h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Dedicate 70 continuous minutes to 45 Physics questions. Solve formula-direct Modern Physics and Heat first, followed by Mechanics and Electrodynamics. Reserve the final 25 minutes for tough questions and OMR verification. Target: 160+ marks.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Negative Marking Mathematics */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <HeartPulse className="w-7 h-7 text-emerald-400" />
              The Brutal Math of Negative Marking in NEET
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Every incorrect question in NEET costs you <strong className="text-white">5 marks</strong> in reality: 4 marks you failed to earn, plus 1 penalty mark deducted from your accumulated total. At current NEET competition levels where 1 single mark can drop your All India Rank by 1,200 to 2,000 positions, random guessing is academic suicide.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-300">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <strong className="text-emerald-400 block mb-1">Scenario A: High Accuracy (165 Attempts)</strong>
                160 Correct, 5 Incorrect = (160 × 4) - 5 = <strong className="text-white">635 Marks</strong>. Safe for top government medical colleges in most states.
              </div>
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <strong className="text-red-400 block mb-1">Scenario B: Over-Attempt with Guessing (180 Attempts)</strong>
                150 Correct, 30 Incorrect = (150 × 4) - 30 = <strong className="text-white">570 Marks</strong>. Misses government MBBS cutoff entirely.
              </div>
            </div>
          </section>

          {/* Dedicated High-Converting Mentorship Funnel */}
          <SeoMentorFunnel
            examFocus="NEET"
            title="Calibrate Your Test-Taking Strategy With AIIMS Top Rankers"
            subtitle="Eliminate negative marks, master OMR timing, and optimize your Section B question selection with weekly 1-on-1 guidance from top medical mentors who scored 680+."
          />

          {/* Section 5: FAQ Accordion */}
          <section className="my-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center justify-center gap-3">
                <HelpCircle className="w-7 h-7 text-emerald-400" />
                Frequently Asked Questions: NEET Exam Pattern
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Detailed answers to common questions about timing, Section B choices, and OMR mechanics.
              </p>
            </div>
            <SeoFaqAccordion items={faqs} />
          </section>

          {/* Final Call to Action */}
          <SeoCtaBanner
            title="Target 680+ in NEET With Strategic Mentorship"
            subtitle="Connect with experienced medical mentors who guide you through paper analysis, weak chapter remediation, and personalized mock test strategies."
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
