import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  Compass,
  CheckCircle2,
  BookOpen,
  ArrowRight,
  Sparkles,
  Award,
  AlertCircle,
  TrendingUp,
  Target,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { SeoMentorFunnel } from "@/components/seo/SeoMentorFunnel";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "JEE 2028 2-Year Preparation Roadmap: Class 11 Foundation to IIT Bombay",
  description:
    "Comprehensive 24-month JEE Main & Advanced 2028 roadmap for Class 11 students. Master foundational Physics, Chemistry, Maths, avoid backlogs, and balance CBSE school with an IITian mentor.",
  keywords: [
    "jee 2028 roadmap",
    "jee 2028 preparation plan",
    "class 11 jee 2028 schedule",
    "2 year study plan for jee 2028",
    "how to start preparing for jee in class 11",
    "jee 2028 syllabus timeline",
    "jee 2028 exam dates",
  ],
  alternates: {
    canonical: "https://mentskool.com/jee-2028-exam-dates-roadmap",
  },
  openGraph: {
    title: "JEE 2028 2-Year Roadmap: From Class 11 Foundation to Top 1000 Rank in IIT",
    description:
      "The definitive month-by-month 24-month blueprint for JEE 2028 aspirants. How to prevent Class 11 backlogs, build deep conceptual clarity, and secure 99.5+ percentile.",
    url: "https://mentskool.com/jee-2028-exam-dates-roadmap",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "JEE 2028 2-Year Roadmap - Mentskool",
      },
    ],
  },
};

const faqs: FaqItem[] = [
  {
    question: "When should a student start preparing for JEE 2028?",
    answer:
      "The ideal time to begin JEE 2028 preparation is April or May of your Class 11 academic year. Starting early allows you to digest heavy conceptual chapters like Mechanics, Chemical Bonding, and Coordinate Geometry at a calm, deliberate pace without the crushing pressure experienced by droppers.",
  },
  {
    question: "Why do nearly 70% of Class 11 students accumulate heavy backlogs by November?",
    answer:
      "The jump in academic difficulty from Class 10 to Class 11 is immense. Many students continue using passive Class 10 rote-learning methods, relying on school lectures without solving 50+ challenging application problems daily. By Diwali, rotation, conic sections, and thermodynamics pile up into an unmanageable backlog. A personal IITian mentor prevents this by enforcing daily task audits.",
  },
  {
    question: "How should a Class 11 student balance regular school with JEE 2028 preparation?",
    answer:
      "Allocate 5 to 6 dedicated self-study hours on weekdays and 10 to 12 hours on weekends. Focus your school attendance on core NCERT theory, laboratory practicals, and English/optional subjects, while utilizing after-school hours exclusively for high-level JEE problem solving and weekly test practice.",
  },
  {
    question: "What is the weightage split between Class 11 and Class 12 in JEE Main and Advanced?",
    answer:
      "Class 11 syllabus constitutes approximately 42% to 48% of the total questions in JEE Main and over 50% in JEE Advanced. Furthermore, critical Class 12 chapters (Calculus, Electrodynamics, Organic Reactions) are mathematically and conceptually impossible to master without strong Class 11 foundations.",
  },
  {
    question: "Which books should a Class 11 beginner solve for JEE 2028?",
    answer:
      "For Physics: NCERT + HC Verma (Concepts of Physics Part 1) + DC Pandey or BM Sharma. For Chemistry: NCERT (vital for Inorganic and Organic) + OP Tandon / MS Chouhan for Organic + N Awasthi for Physical. For Maths: Cengage Series or Arihant + Hall & Knight / SL Loney for basics + previous 5 years' JEE Main PYQs.",
  },
  {
    question: "How does Mentskool's 2-year mentorship help Class 11 students?",
    answer:
      "Mentskool pairs you with a top ranker from IIT Bombay or Delhi who acts as your personal coach across the full 24 months. You get weekly 1:1 video meetings, custom daily study schedules, real-time tracking of your 94% efficiency score, and prompt resolution of academic bottlenecks before they become permanent backlogs.",
  },
];

export default function Jee2028ExamDatesRoadmapPage() {
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
        name: "JEE 2028 2-Year Foundation & Rank Acceleration Mentorship",
        description:
          "24-month personalized mentorship program for Class 11 students targeting JEE Main & Advanced 2028 with verified IIT Bombay and Delhi rankers.",
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
              { label: "JEE Mentorship", href: "/jee-mentorship" },
              {
                label: "JEE 2028 Roadmap",
                href: "/jee-2028-exam-dates-roadmap",
              },
            ]}
          />

          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-xs font-semibold mb-4">
              <Compass className="w-3.5 h-3.5" />
              <span>24-Month Master Plan • Class 11 &amp; 12 Foundation to IIT</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              JEE 2028 2-Year Roadmap:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-sky-300 to-indigo-400">
                Class 11 Foundation to Top 1000 IIT Rank
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              The students who conquer JEE Advanced with top double-digit ranks don't study 16 hours a day in their dropper year — they build an unshakeable conceptual fortress during <strong>Class 11</strong>. Here is the exact 24-month roadmap to engineer a 99.5+ percentile for JEE 2028.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Find Your 2-Year IITian Mentor</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/free-mentorship-session"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all"
              >
                Book Free Class 11 Strategy Call
              </Link>
            </div>
          </div>

          {/* Direct Answer Box for AI Overviews & Search Snippets */}
          <section className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-brand-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-400 mb-3">
              <Sparkles className="w-4 h-4 text-brand-400" />
              <span>Executive Summary: What Is The Ideal 2-Year Timeline for JEE 2028?</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-4">
              The <strong>JEE 2028 Preparation Timeline</strong> spans 24 structured months: <strong>Year 1 (April 2026 – January 2027)</strong> covers the complete Class 11 core syllabus (Mechanics, Thermodynamics, Chemical Bonding, Coordinate Geometry). <strong>Year 1 Revision (Feb – March 2027)</strong> solidifies Class 11 through school finals. <strong>Year 2 (April 2027 – November 2027)</strong> finishes Class 12 syllabus, leaving <strong>December 2027 – January 2028</strong> exclusively for full-length mocks before Session 1 in <strong>January 2028</strong>.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs pt-2 border-t border-slate-800">
              <div>
                <span className="text-slate-400 block">Class 11 Syllabus</span>
                <strong className="text-white">Complete by Jan 2027</strong>
              </div>
              <div>
                <span className="text-slate-400 block">Class 12 Syllabus</span>
                <strong className="text-white">Complete by Nov 2027</strong>
              </div>
              <div>
                <span className="text-slate-400 block">Session 1 Exam</span>
                <strong className="text-white">January 2028</strong>
              </div>
              <div>
                <span className="text-slate-400 block">JEE Advanced</span>
                <strong className="text-white">May / June 2028</strong>
              </div>
            </div>
          </section>

          {/* Section 1: The 4 Distinct Preparation Phases of the 24-Month Roadmap */}
          <section className="my-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-400 bg-brand-500/10 px-3 py-1 rounded-full border border-brand-500/20">
                Strategic Phasing
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3">
                The 4 Phases of JEE 2028 Mastery
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Breaking down the 2-year journey into four distinct execution milestones guarantees consistent momentum without burnout:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Phase 1 */}
              <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-300 bg-brand-500/20 px-3 py-1 rounded-full border border-brand-500/30 mb-4">
                    <span>Phase 1 • Months 1 to 10 (Apr 2026 – Jan 2027)</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    Class 11 Mastery &amp; Backlog Immunity
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    Master the high-gravity building blocks of engineering entrance exams. You must build intuitive grasp of vectors, Newton's laws, work-energy, rotational dynamics, mole concept, chemical bonding, quadratic equations, sequence &amp; series, and coordinate geometry.
                  </p>
                  <ul className="space-y-2.5 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Solve a minimum of 50 self-attempted problems daily (15P + 15C + 20M).</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Maintain a dedicated "Mistake Book" from Day 1 to record tricky question types.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Take bi-weekly 3-hour chapter tests to verify retention under time constraints.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-300 bg-sky-500/20 px-3 py-1 rounded-full border border-sky-500/30 mb-4">
                    <span>Phase 2 • Months 11 to 12 (Feb 2027 – Mar 2027)</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    Class 11 Consolidation &amp; School Finals
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    Do not neglect school examinations. Score 85%+ in your Class 11 annual school exams while using this 8-week buffer to ruthlessly review and re-solve any chapters where you struggled in Phase 1.
                  </p>
                  <ul className="space-y-2.5 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                      <span>Complete NCERT back exercises to guarantee school board perfection.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                      <span>Clear 100% of pending backlogs in Mechanics or Organic Chemistry before Class 12 begins.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                      <span>Create 1-page formula summaries for all 32 Class 11 chapters.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-300 bg-indigo-500/20 px-3 py-1 rounded-full border border-indigo-500/30 mb-4">
                    <span>Phase 3 • Months 13 to 20 (Apr 2027 – Nov 2027)</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    Class 12 Accelerated Syllabus Finish
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    Class 12 syllabus carries massive mathematical abstraction: Calculus (Differential &amp; Integral), Electromagnetism, Modern Physics, and Organic Chemistry reaction mechanisms. Complete the entire Class 12 syllabus strictly by November 30, 2027.
                  </p>
                  <ul className="space-y-2.5 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                      <span>Integrate 2 hours of weekly Class 11 revision into your daily schedule to prevent forgetting.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                      <span>Solve official JEE Main PYQs from 2023 to 2027 after completing every chapter.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                      <span>Benchmark your performance on our dashboard with your weekly 94% efficiency score.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Phase 4 */}
              <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-500/30 mb-4">
                    <span>Phase 4 • Months 21 to 24 (Dec 2027 – Jun 2028)</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    Mock Test Blitz, Session 1 &amp; Advanced Ramp-Up
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    The endgame. Take 30+ full-length computer-based mocks. Peak for Session 1 in January 2028, ace your Class 12 Boards in March, and dedicate 10 full weeks exclusively to multi-step JEE Advanced problem solving.
                  </p>
                  <ul className="space-y-2.5 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Take 3 mocks per week from 09:00 AM to 12:00 PM with thorough 3-hour error autopsies.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Target 99.4+ percentile in Session 1 to eliminate exam anxiety permanently.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Transition smoothly into JEE Advanced subject depth with top IIT ranker guidance.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Month-by-Month Detailed Subject Milestone Table */}
          <section className="my-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Detailed Month-by-Month Milestone Calendar (2026 – 2028)
              </h2>
              <p className="text-slate-400 text-sm mt-2">
                Keep this chapter-level execution roadmap taped to your study desk to monitor your syllabus velocity:
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl">
              <table className="w-full text-left text-xs sm:text-sm text-slate-300">
                <thead className="bg-slate-950/80 text-white font-bold uppercase text-[11px] tracking-wider border-b border-slate-800">
                  <tr>
                    <th className="py-4 px-4 sm:px-6">Month / Timeline</th>
                    <th className="py-4 px-4 sm:px-6 text-brand-300">Physics Targets</th>
                    <th className="py-4 px-4 sm:px-6 text-sky-300">Chemistry Targets</th>
                    <th className="py-4 px-4 sm:px-6 text-indigo-300">Mathematics Targets</th>
                    <th className="py-4 px-4 sm:px-6">Testing Milestone</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-semibold text-white">Month 1–2 (Apr–May 2026)</td>
                    <td className="py-4 px-4 sm:px-6">Units, Dimensions, Kinematics 1D &amp; 2D</td>
                    <td className="py-4 px-4 sm:px-6">Some Basic Concepts (Mole), Atomic Structure</td>
                    <td className="py-4 px-4 sm:px-6">Basic Mathematics, Logarithms, Sets, Inequalities</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-400">Foundation Diagnostic Test</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-semibold text-white">Month 3–4 (Jun–Jul 2026)</td>
                    <td className="py-4 px-4 sm:px-6">Newton's Laws of Motion, Friction, Work-Energy-Power</td>
                    <td className="py-4 px-4 sm:px-6">Periodic Classification, Chemical Bonding &amp; Molecular Structure</td>
                    <td className="py-4 px-4 sm:px-6">Quadratic Equations, Sequence &amp; Series, Trigonometry 1</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-400">Quarterly Part Test 1</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-semibold text-white">Month 5–6 (Aug–Sep 2026)</td>
                    <td className="py-4 px-4 sm:px-6">Center of Mass, Linear Momentum, Rotational Dynamics</td>
                    <td className="py-4 px-4 sm:px-6">Thermodynamics, Chemical Equilibrium, Ionic Equilibrium</td>
                    <td className="py-4 px-4 sm:px-6">Straight Lines, Circles, Permutations &amp; Combinations</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-400">Quarterly Part Test 2</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-semibold text-white">Month 7–8 (Oct–Nov 2026)</td>
                    <td className="py-4 px-4 sm:px-6">Gravitation, Mechanical Properties of Solids &amp; Fluids</td>
                    <td className="py-4 px-4 sm:px-6">Redox Reactions, Organic Chemistry: Basic Principles (GOC)</td>
                    <td className="py-4 px-4 sm:px-6">Conic Sections (Parabola, Ellipse, Hyperbola), Binomial Theorem</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-400">Mid-Term Full Part Test</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-semibold text-white">Month 9–10 (Dec 2026–Jan 2027)</td>
                    <td className="py-4 px-4 sm:px-6">Thermal Physics, Kinetic Theory, Oscillations (SHM), Waves</td>
                    <td className="py-4 px-4 sm:px-6">Hydrocarbons, p-Block elements (selected topics)</td>
                    <td className="py-4 px-4 sm:px-6">Complex Numbers, Statistics, Mathematical Reasoning</td>
                    <td className="py-4 px-4 sm:px-6 text-emerald-400 font-semibold">100% Class 11 Complete Test</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30 bg-brand-500/10">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white">Month 11–12 (Feb–Mar 2027)</td>
                    <td className="py-4 px-4 sm:px-6" colSpan={3}>
                      <strong>Class 11 Annual School Exams + Backlog Clearance Sprint</strong> (Solve 200+ selected hard problems per subject)
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-brand-300 font-bold">Class 11 Major Mock Exam</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-semibold text-white">Month 13–15 (Apr–Jun 2027)</td>
                    <td className="py-4 px-4 sm:px-6">Electrostatics, Gauss Law, Capacitance, Current Electricity</td>
                    <td className="py-4 px-4 sm:px-6">Solutions, Electrochemistry, Chemical Kinetics</td>
                    <td className="py-4 px-4 sm:px-6">Relations &amp; Functions, Limits, Continuity &amp; Differentiability</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-400">Class 12 Part Test 1</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-semibold text-white">Month 16–18 (Jul–Sep 2027)</td>
                    <td className="py-4 px-4 sm:px-6">Moving Charges &amp; Magnetism, EMI, AC, Ray &amp; Wave Optics</td>
                    <td className="py-4 px-4 sm:px-6">d &amp; f Block, Coordination Compounds, Haloalkanes &amp; Alcohols</td>
                    <td className="py-4 px-4 sm:px-6">Application of Derivatives, Indefinite &amp; Definite Integration</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-400">Class 12 Part Test 2</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-semibold text-white">Month 19–20 (Oct–Nov 2027)</td>
                    <td className="py-4 px-4 sm:px-6">Modern Physics, Dual Nature, Atoms, Nuclei, Semiconductors</td>
                    <td className="py-4 px-4 sm:px-6">Aldehydes, Ketones, Carboxylic Acids, Amines, Biomolecules</td>
                    <td className="py-4 px-4 sm:px-6">Differential Equations, Vectors &amp; 3D Geometry, Probability</td>
                    <td className="py-4 px-4 sm:px-6 text-emerald-400 font-bold">100% Full Syllabus Finish</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30 bg-emerald-500/10">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white">Month 21–24 (Dec 2027–Jun 2028)</td>
                    <td className="py-4 px-4 sm:px-6" colSpan={3}>
                      <strong>Session 1 Jan 2028 Mock Drills $\to$ CBSE Board Exams (Mar) $\to$ Session 2 (Apr) $\to$ JEE Advanced 2028 (May/Jun)</strong>
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-emerald-300 font-bold">Top Rank Attainment</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3: The Ideal Daily Timetable for Class 11 Students */}
          <section className="my-16 p-8 rounded-3xl bg-slate-900/60 border border-slate-800">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              The Proven Daily Schedule: Regular School vs Self-Study Balance
            </h3>
            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              You do not need to abandon sleep or sacrifice physical health. Consistency of 6 focused hours on weekdays and 10 hours on weekends yields 2,500+ solved problems every year:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800">
                <div className="text-brand-400 font-bold text-xs uppercase tracking-wider mb-2">Weekday Routine (Mon to Fri)</div>
                <ul className="space-y-2 text-slate-300 text-xs leading-relaxed">
                  <li><strong>06:00 AM – 06:45 AM:</strong> Quick morning revision of formula cards &amp; Inorganic tables.</li>
                  <li><strong>07:30 AM – 02:30 PM:</strong> School hours. Pay 100% attention in physics/chemistry labs &amp; NCERT theory.</li>
                  <li><strong>03:00 PM – 04:00 PM:</strong> Lunch, light relaxation, and mental recharge.</li>
                  <li><strong>04:00 PM – 06:30 PM:</strong> Slot 1: Physics deep problem solving (20–25 numericals from HCV/Cengage).</li>
                  <li><strong>07:00 PM – 09:30 PM:</strong> Slot 2: Maths problem solving (focus on speed and multi-step thinking).</li>
                  <li><strong>10:00 PM – 11:30 PM:</strong> Slot 3: Chemistry NCERT theory + 20 numericals. Log errors in Mistake Book.</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800">
                <div className="text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">Weekend Routine (Sat &amp; Sun)</div>
                <ul className="space-y-2 text-slate-300 text-xs leading-relaxed">
                  <li><strong>07:00 AM – 08:30 AM:</strong> Complete weekly revision of all 3 subjects.</li>
                  <li><strong>09:00 AM – 12:00 PM:</strong> Strict 3-hour computer-based test or comprehensive problem set.</li>
                  <li><strong>01:30 PM – 03:30 PM:</strong> Test Autopsy: analyze every single incorrect question and silly slip.</li>
                  <li><strong>04:00 PM – 06:30 PM:</strong> Targeted backlog clearance or advanced multi-concept problems.</li>
                  <li><strong>07:00 PM – 08:00 PM:</strong> Weekly 1-on-1 Google Meet session with your Mentskool IITian mentor.</li>
                  <li><strong>08:30 PM – 10:30 PM:</strong> Finalize next week's daily task roadmap on the dashboard.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Interactive Mentor Conversion Funnel */}
          <SeoMentorFunnel examFocus="JEE" />

          {/* FAQ Section */}
          <section className="mt-16">
            <SeoFaqAccordion
              title="Frequently Asked Questions on JEE 2028 Strategy"
              subtitle="Practical guidance on balancing Class 11, selecting reference books, and preventing study backlogs."
              faqs={faqs}
            />
          </section>

          {/* CTA Banner */}
          <section className="mt-16">
            <SeoCtaBanner
              title="Begin Your 2-Year Journey to IIT with a Dedicated Top Ranker"
              description="Learn how IIT Bombay & Delhi rankers mastered Class 11 without stress. Strict max 30 students per cohort."
              primaryButtonText="Find Your 2-Year Mentor"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
