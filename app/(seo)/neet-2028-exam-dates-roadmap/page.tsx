import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  Compass,
  CheckCircle2,
  HeartPulse,
  ArrowRight,
  Sparkles,
  Award,
  Stethoscope,
  Microscope,
  BookOpen,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { SeoMentorFunnel } from "@/components/seo/SeoMentorFunnel";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "NEET 2028 2-Year Preparation Roadmap: Class 11 Foundation to AIIMS MBBS",
  description:
    "Comprehensive 24-month NEET UG 2028 study plan for Class 11 medical aspirants. Master NCERT Biology line-by-line, eliminate Physics fear, and secure 680+ marks with an AIIMS doctor mentor.",
  keywords: [
    "neet 2028 roadmap",
    "neet 2028 study plan",
    "class 11 neet 2028 preparation",
    "2 year study plan for neet 2028",
    "how to start preparing for neet in class 11",
    "neet 2028 syllabus schedule",
    "neet 2028 exam date",
  ],
  alternates: {
    canonical: "https://mentskool.com/neet-2028-exam-dates-roadmap",
  },
  openGraph: {
    title: "NEET 2028 2-Year Roadmap: From Class 11 Foundation to AIIMS New Delhi",
    description:
      "The definitive month-by-month guide for NEET 2028 medical aspirants. How to build an unshakeable 360/360 in Biology and conquer Physics numericals early.",
    url: "https://mentskool.com/neet-2028-exam-dates-roadmap",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "NEET 2028 2-Year Roadmap - Mentskool",
      },
    ],
  },
};

const faqs: FaqItem[] = [
  {
    question: "When should a medical aspirant start preparing for NEET 2028?",
    answer:
      "The best time to start is the beginning of Class 11 (April or May 2026). NEET UG tests 97 chapters across Physics, Chemistry, Botany, and Zoology. Starting early gives you ample time to understand difficult Physics concepts (like Rotational Motion and Waves) and memorize voluminous NCERT biological classifications without stress.",
  },
  {
    question: "Is Class 11 syllabus more important than Class 12 in NEET UG?",
    answer:
      "Both classes carry roughly equal weightage (approximately 48% Class 11 and 52% Class 12). However, Class 11 contains foundational subjects like Cell Biology, Biomolecules, Plant & Human Physiology, General Organic Chemistry (GOC), and Mechanics, which form the bedrock for all Class 12 comprehension.",
  },
  {
    question: "Why do so many NEET aspirants fear Class 11 Physics, and how can it be fixed?",
    answer:
      "Most medical students chose biology because they loved natural sciences, but struggle with calculus and vector mathematics. Physics becomes intimidating when students try to memorize formulas rather than understanding physical laws. A personal AIIMS mentor bridges this gap by teaching visual intuition, dimensional shortcuts, and daily 30-problem practice.",
  },
  {
    question: "How many hours should a Class 11 student study daily for NEET 2028?",
    answer:
      "On school days, 5 to 6 dedicated hours of focused self-study (2 hours Bio, 2 hours Physics, 1.5 hours Chemistry) is ideal. On weekends, aim for 9 to 10 hours, focusing on test practice, OMR bubbling simulations, and revision of previous weeks' notes.",
  },
  {
    question: "How many times should NCERT Biology be revised across 2 years?",
    answer:
      "To score 350+ out of 360 in NEET Biology, NCERT Class 11 and 12 must be read at least 6 to 8 times cover-to-cover. Every diagram label, summary paragraph, scientist biographical note, and table caption contains direct potential NEET questions.",
  },
  {
    question: "What makes Mentskool's 2-year NEET mentorship unique?",
    answer:
      "At Mentskool, you are mentored directly by recent top rankers from AIIMS New Delhi and premier government medical colleges. You get weekly 1:1 strategy video sessions, daily task tracking on the dashboard, customized NCERT question assignments, and psychological support to prevent burnout.",
  },
];

export default function Neet2028ExamDatesRoadmapPage() {
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
        "@type": "Course",
        name: "NEET 2028 2-Year Foundation & Medical Ranker Mentorship",
        description:
          "24-month personalized mentorship program for Class 11 medical aspirants targeting NEET UG 2028 with verified AIIMS New Delhi and premier GMC rankers.",
        provider: {
          "@type": "Organization",
          name: "Mentskool",
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
                label: "NEET 2028 Roadmap",
                href: "/neet-2028-exam-dates-roadmap",
              },
            ]}
          />

          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-semibold mb-4">
              <Stethoscope className="w-3.5 h-3.5 text-emerald-400" />
              <span>24-Month Medical Blueprint • Class 11 Foundation to Top AIIMS GMC</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              NEET 2028 2-Year Roadmap:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400">
                Class 11 Foundation to 680+ Score &amp; AIIMS MBBS
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Scoring 680+ in NEET UG isn't about cramming 15 hours a day in your final month. It is the natural result of building flawless NCERT retention and fearless Physics problem-solving from the very first week of <strong>Class 11</strong>.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Find Your 2-Year AIIMS Mentor</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/free-mentorship-session"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all"
              >
                Claim Free Class 11 Diagnostic Call
              </Link>
            </div>
          </div>

          {/* Direct Answer Box for AI Overviews & Search Snippets */}
          <section className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-emerald-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-400 mb-3">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Executive Summary: What Is The 2-Year Strategy for NEET 2028?</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-4">
              The <strong>NEET 2028 2-Year Roadmap</strong> is divided into 4 sequential cycles: <strong>Cycle 1 (Apr 2026 – Jan 2027)</strong> covers the complete Class 11 NCERT syllabus with daily 75-question problem sets. <strong>Cycle 2 (Feb – Mar 2027)</strong> clears backlogs and masters Class 11 annual school exams. <strong>Cycle 3 (Apr – Nov 2027)</strong> finishes Class 12 syllabus, and <strong>Cycle 4 (Dec 2027 – May 2028)</strong> is dedicated to 30+ full 720-mark OMR mocks, culminating in the <strong>May 2028</strong> exam.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs pt-2 border-t border-slate-800">
              <div>
                <span className="text-slate-400 block">Class 11 Finish</span>
                <strong className="text-white">January 2027</strong>
              </div>
              <div>
                <span className="text-slate-400 block">Class 12 Finish</span>
                <strong className="text-white">November 2027</strong>
              </div>
              <div>
                <span className="text-slate-400 block">Mock Testing Phase</span>
                <strong className="text-white">Dec 2027 – Apr 2028</strong>
              </div>
              <div>
                <span className="text-slate-400 block">NEET Exam Day</span>
                <strong className="text-white">May 2028 (First Sunday)</strong>
              </div>
            </div>
          </section>

          {/* Section 1: The 3 Core Pillars of 2-Year NEET Success */}
          <section className="my-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                Foundation Pillars
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3">
                The 3 Subject Blueprints for NEET 2028
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Scoring 680+ requires a balanced strategy across Biology, Chemistry, and Physics:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Biology */}
              <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 mb-4">
                    <Microscope className="w-3.5 h-3.5" />
                    <span>Target: 350 to 360 / 360</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Biology: Flawless NCERT Line Mastery</h3>
                  <p className="text-slate-300 text-xs leading-relaxed mb-4">
                    Treat NCERT as your holy scripture. Every single statement, exception in Animalia, morphological diagram label, and cell division phase is tested verbatim.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Read every chapter 6 to 8 times across 2 years.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Annotate sticky notes directly inside your textbook margins.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Solve 100 chapter-wise MCQs within 45 minutes to build rapid instinct.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Chemistry */}
              <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20 mb-4">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Target: 165 to 175 / 180</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Chemistry: The 3-Domain Formula</h3>
                  <p className="text-slate-300 text-xs leading-relaxed mb-4">
                    Balance Physical calculations, Organic reaction mechanisms, and Inorganic periodic table facts with distinct learning methodologies.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span><strong>Physical:</strong> Master formula cards and solve 40 numericals per chapter.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span><strong>Organic:</strong> Understand electron displacement (GOC) before reaction charts.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span><strong>Inorganic:</strong> Re-read NCERT tables weekly; create color-coded flashcards.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Physics */}
              <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20 mb-4">
                    <Compass className="w-3.5 h-3.5" />
                    <span>Target: 155 to 165 / 180</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Physics: Fear Elimination &amp; Calculation Speed</h3>
                  <p className="text-slate-300 text-xs leading-relaxed mb-4">
                    Physics is the rank-decider in NEET. The difference between an AIR 500 and AIR 25,000 is almost always 40 marks in Physics.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span>Master Basic Maths (Differentiation, Integration, Vectors) in Month 1.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span>Solve HC Verma Objective 1 &amp; 2 + DC Pandey for conceptual depth.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span>Practice dimensional analysis &amp; order-of-magnitude approximation tricks.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Month-by-Month Milestone Calendar */}
          <section className="my-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Month-by-Month Medical Milestone Calendar (2026 – 2028)
              </h2>
              <p className="text-slate-400 text-sm mt-2">
                Track your syllabus milestones across all four subjects with precision:
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl">
              <table className="w-full text-left text-xs sm:text-sm text-slate-300">
                <thead className="bg-slate-950/80 text-white font-bold uppercase text-[11px] tracking-wider border-b border-slate-800">
                  <tr>
                    <th className="py-4 px-4 sm:px-6">Timeline</th>
                    <th className="py-4 px-4 sm:px-6 text-emerald-300">Biology (Botany &amp; Zoology)</th>
                    <th className="py-4 px-4 sm:px-6 text-sky-300">Chemistry</th>
                    <th className="py-4 px-4 sm:px-6 text-indigo-300">Physics</th>
                    <th className="py-4 px-4 sm:px-6">Testing Milestone</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-semibold text-white">Month 1–2 (Apr–May 2026)</td>
                    <td className="py-4 px-4 sm:px-6">The Living World, Biological Classification, Plant Kingdom</td>
                    <td className="py-4 px-4 sm:px-6">Mole Concept, Atomic Structure</td>
                    <td className="py-4 px-4 sm:px-6">Basic Maths, Vectors, Units &amp; Measurements, Kinematics</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-400">Class 11 Diagnostic Test</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-semibold text-white">Month 3–4 (Jun–Jul 2026)</td>
                    <td className="py-4 px-4 sm:px-6">Animal Kingdom, Morphology &amp; Anatomy of Flowering Plants</td>
                    <td className="py-4 px-4 sm:px-6">Periodic Table, Chemical Bonding &amp; Molecular Structure</td>
                    <td className="py-4 px-4 sm:px-6">Laws of Motion, Friction, Work-Power-Energy</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-400">Quarterly Mock 1</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-semibold text-white">Month 5–6 (Aug–Sep 2026)</td>
                    <td className="py-4 px-4 sm:px-6">Cell: The Unit of Life, Biomolecules, Cell Cycle &amp; Division</td>
                    <td className="py-4 px-4 sm:px-6">Thermodynamics, Chemical &amp; Ionic Equilibrium</td>
                    <td className="py-4 px-4 sm:px-6">System of Particles &amp; Rotational Motion, Gravitation</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-400">Quarterly Mock 2</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-semibold text-white">Month 7–8 (Oct–Nov 2026)</td>
                    <td className="py-4 px-4 sm:px-6">Plant Physiology: Photosynthesis, Respiration, Plant Growth</td>
                    <td className="py-4 px-4 sm:px-6">Redox Reactions, Organic Chemistry (GOC Principles)</td>
                    <td className="py-4 px-4 sm:px-6">Mechanical Properties of Solids &amp; Fluids, Thermal Physics</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-400">Mid-Term Part Test</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-semibold text-white">Month 9–10 (Dec 2026–Jan 2027)</td>
                    <td className="py-4 px-4 sm:px-6">Human Physiology: Breathing, Circulation, Excretion, Locomotion</td>
                    <td className="py-4 px-4 sm:px-6">Hydrocarbons, p-Block elements</td>
                    <td className="py-4 px-4 sm:px-6">Kinetic Theory, Thermodynamics, Oscillations &amp; Waves</td>
                    <td className="py-4 px-4 sm:px-6 text-emerald-400 font-semibold">Class 11 Full Syllabus Test</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30 bg-emerald-500/10">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white">Month 11–12 (Feb–Mar 2027)</td>
                    <td className="py-4 px-4 sm:px-6" colSpan={3}>
                      <strong>Class 11 School Finals + Medical Backlog Remediation Sprint</strong> (Re-solve 500 NCERT Biology MCQs &amp; 300 Physics Numericals)
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-emerald-300 font-bold">Class 11 Final 720-Mark Mock</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-semibold text-white">Month 13–16 (Apr–Jul 2027)</td>
                    <td className="py-4 px-4 sm:px-6">Reproduction in Organisms, Human Reproduction, Genetics</td>
                    <td className="py-4 px-4 sm:px-6">Solutions, Electrochemistry, Kinetics, d/f Block</td>
                    <td className="py-4 px-4 sm:px-6">Electrostatics, Current Electricity, Magnetism</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-400">Class 12 Part Test 1</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-semibold text-white">Month 17–20 (Aug–Nov 2027)</td>
                    <td className="py-4 px-4 sm:px-6">Molecular Basis of Inheritance, Biotech, Ecology</td>
                    <td className="py-4 px-4 sm:px-6">Coordination Compounds, Haloalkanes, Alcohols, Carbonyls</td>
                    <td className="py-4 px-4 sm:px-6">Optics, Modern Physics, Semiconductors</td>
                    <td className="py-4 px-4 sm:px-6 text-emerald-400 font-bold">100% Full Syllabus Finish</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30 bg-brand-500/10">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white">Month 21–24 (Dec 2027–May 2028)</td>
                    <td className="py-4 px-4 sm:px-6" colSpan={3}>
                      <strong>Grand Full-Syllabus OMR Mock Sprint (35+ Mocks at 02:00 PM – 05:20 PM) + CBSE Boards + Final AIIMS Score Push</strong>
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-emerald-400 font-bold">AIR &lt; 500 Attainment</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3: The Daily Routine of a 680+ Medical Ranker */}
          <section className="my-16 p-8 rounded-3xl bg-slate-900/60 border border-slate-800">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              The Daily Routine: Balancing School with 720-Mark Preparation
            </h3>
            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              Medical entrance demands high retention over long periods. Here is how top rankers organize their daily waking hours:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800">
                <div className="text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">School Day (5.5 Hours Self-Study)</div>
                <ul className="space-y-2 text-slate-300 text-xs leading-relaxed">
                  <li><strong>06:00 AM – 07:00 AM:</strong> Fresh morning NCERT Biology reading (memorize 5 pages deeply).</li>
                  <li><strong>07:30 AM – 02:30 PM:</strong> School hours. Stay attentive during practical demonstrations and lectures.</li>
                  <li><strong>03:30 PM – 05:30 PM:</strong> Slot 1: Physics numerical solving (30 problems with stopwatch).</li>
                  <li><strong>06:00 PM – 07:45 PM:</strong> Slot 2: Chemistry theory + 25 numericals/reactions.</li>
                  <li><strong>08:15 PM – 09:45 PM:</strong> Slot 3: Biology MCQ practice (70 questions with timer).</li>
                  <li><strong>10:15 PM – 11:00 PM:</strong> Daily error notebook logging and flashcard review.</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800">
                <div className="text-sky-400 font-bold text-xs uppercase tracking-wider mb-2">Sunday Routine (10 Hours Intensive)</div>
                <ul className="space-y-2 text-slate-300 text-xs leading-relaxed">
                  <li><strong>08:00 AM – 10:30 AM:</strong> Complete revision of the past week's topics across all 3 subjects.</li>
                  <li><strong>11:00 AM – 01:00 PM:</strong> Dedicated high-level Physics numerical problem set.</li>
                  <li><strong>02:00 PM – 05:20 PM:</strong> Timed 720-mark part test on physical OMR sheet.</li>
                  <li><strong>05:45 PM – 07:15 PM:</strong> Test Autopsy: analyze every single incorrect bubbling and negative mark.</li>
                  <li><strong>07:30 PM – 08:30 PM:</strong> Weekly 1:1 strategy call with your Mentskool AIIMS mentor.</li>
                  <li><strong>09:00 PM – 10:30 PM:</strong> Finalize next week's micro-timetable on the dashboard.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Interactive Mentor Conversion Funnel */}
          <SeoMentorFunnel examFocus="NEET" />

          {/* FAQ Section */}
          <section className="mt-16">
            <SeoFaqAccordion
              title="Frequently Asked Questions on NEET 2028 Preparation"
              subtitle="Expert answers on Class 11 balancing, overcoming physics anxiety, and NCERT revision cycles."
              faqs={faqs}
            />
          </section>

          {/* CTA Banner */}
          <section className="mt-16">
            <SeoCtaBanner
              title="Start Your 2-Year Journey to AIIMS with Top Medico Mentors"
              description="Learn how AIIMS New Delhi rankers built 360/360 in Biology and conquered Physics. Strictly 30 students per cohort."
              primaryButtonText="Find Your Medico Mentor"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
