import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Target,
  Zap,
  BookOpen,
  Award,
  AlertTriangle,
  Flame,
  CheckSquare,
  BarChart3,
  TrendingUp,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "JEE 2027 Mentorship Program — 100-Day Sprint to Session 1 & Complete Preparation Guide",
  description:
    "Preparing for JEE Main & Advanced 2027? Get dedicated 1-on-1 mentorship from verified IIT Bombay & Delhi rankers. Detailed 100-day countdown, chapter-wise weightage tables, daily time-blocking schedules, and mock test post-mortem guides.",
  keywords: [
    "JEE 2027 mentorship",
    "JEE 2027 study plan with mentor",
    "JEE Main 2027 100 day roadmap",
    "JEE 2027 high weightage chapters",
    "JEE 2027 dropper mentorship",
    "1 on 1 JEE 2027 preparation",
    "best mentor for JEE 2027",
    "JEE 2027 timetable for droppers",
    "JEE 2027 syllabus completion strategy",
  ],
  alternates: {
    canonical: "https://mentskool.com/jee-mentorship-2027",
  },
  openGraph: {
    title: "JEE 2027 Mentorship Program: 100-Day Sprint & 1:1 IITian Guidance",
    description:
      "Master the countdown to JEE 2027 Session 1 with high-yield chapter blueprints, daily problem quotas, mistake book protocols, and personalized IITian tracking.",
    url: "https://mentskool.com/jee-mentorship-2027",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "JEE 2027 Mentorship - Mentskool",
      },
    ],
  },
};

const jee2027Faqs: FaqItem[] = [
  {
    question: "When is JEE Main 2027 Session 1 expected by NTA?",
    answer:
      "Based on NTA historical scheduling patterns, JEE Main 2027 Session 1 is tentatively scheduled for late January (typically between January 22 and January 30, with reserve buffer days). Session 2 typically follows in early April. Securing your target 99+ percentile in Session 1 is critical because it gives you over 3 full months to focus purely on JEE Advanced without the anxiety of repeating Mains.",
  },
  {
    question: "How does the 100-day JEE 2027 sprint plan work in Mentskool?",
    answer:
      "Your assigned IITian mentor audits your current syllabus completion on Day 1. The 100-day sprint is split into three deliberate blocks: Phase 1 (Days 1–45) seals high-weightage chapters and eliminates dangerous prerequisite backlogs; Phase 2 (Days 46–75) enforces timed chapter-wise PYQ sprints (2020–2026) and part-syllabus tests; Phase 3 (Days 76–100) shifts to full 3-hour CBT mock tests, mistake book root-cause reviews, and formula active recall drills.",
  },
  {
    question: "Can Class 12 students balance school pre-boards with JEE 2027 Session 1?",
    answer:
      "Yes. In fact, over 65% of JEE aspirants are regular school-going students. Your Mentskool mentor synchronizes your board NCERT syllabus (especially English, Board Practical preparations, and standard derivations in Physics/Chemistry) with your JEE Mains requirements so you study once for both examinations rather than treating them as conflicting goals.",
  },
  {
    question: "Why should droppers prioritize Session 1 over Session 2?",
    answer:
      "Marks vs percentile data proves that the marks required to score 99 percentile in Session 1 is consistently 15 to 25 marks lower than Session 2. By April, lakhs of Class 12 students have finished boards and revised thoroughly, making Session 2 significantly more competitive. Our 100-day sprint ensures droppers peak in January.",
  },
  {
    question: "How is 1-on-1 mentorship different from buying an online test series?",
    answer:
      "A test series only delivers a score and an automated answer key. It cannot tell you why you mismanaged 45 minutes on coordinate geometry, whether your organic reaction mechanisms have conceptual flaws, or why calculation blunders cost you 24 negative marks. Your Mentskool mentor analyzes your actual rough sheets, isolates your error patterns, and adjusts your daily problem schedule accordingly.",
  },
  {
    question: "How many questions should a JEE 2027 aspirant solve each day?",
    answer:
      "Under our mentorship protocol, students solve between 70 and 90 targeted problems daily across Physics (25–30), Chemistry (25–30), and Maths (20–25). Quality, self-attempted problems with timed constraints matter vastly more than passively watching video solutions for 300 problems without touching pen to paper.",
  },
  {
    question: "How frequently do I connect with my IITian mentor?",
    answer:
      "You have weekly 1-on-1 video strategy sessions on Google Meet to audit your weekly metrics, review mock test errors, and design next week's micro-timetable. Throughout the week, you submit your daily solved problem counts and study hours on the Mentskool dashboard, where your mentor monitors your 94% efficiency score and provides daily feedback.",
  },
  {
    question: "What happens if I feel my assigned mentor is not the right fit?",
    answer:
      "Mentskool guarantees complete flexibility. You are never locked into annual contracts. If you want to change your mentor or switch exam focus, you can request an instant mentor re-match with one click at zero additional charge.",
  },
];

export default function JeeMentorship2027Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        name: "Mentskool Technologies",
        url: "https://mentskool.com",
        logo: "https://mentskool.com/logo.png",
        description:
          "India's premier 1-on-1 mentorship platform for JEE Main, JEE Advanced, and NEET-UG aspirants with verified IIT and AIIMS rankers.",
      },
      {
        "@type": "Course",
        name: "JEE 2027 100-Day Mentorship Sprint & Mastery Program",
        description:
          "Comprehensive 1-on-1 JEE 2027 preparation sprint with IITian mentors, chapter weightage planning, daily task accountability, and mock test analysis.",
        provider: {
          "@type": "Organization",
          name: "Mentskool",
          sameAs: "https://mentskool.com",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: jee2027Faqs.map((faq) => ({
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
                label: "JEE 2027 Mentorship",
                href: "/jee-mentorship-2027",
              },
            ]}
          />

          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-xs font-semibold mb-4">
              <Calendar className="w-3.5 h-3.5" />
              <span>Target JEE Main &amp; Advanced 2027 Cohort — The Definitive 100-Day Guide</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              JEE 2027 Mentorship: <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-sky-300 to-indigo-400">The 100-Day Sprint to Session 1</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              With JEE Main Session 1 approximately 100 days away, passive lecture watching will not get you to an IIT. Partner 1-on-1 with a verified <strong>IIT Bombay or Delhi ranker</strong> who turns your scattered efforts into an engineered 99+ percentile strategy.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Find Your IITian Mentor</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/free-mentorship-session"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all"
              >
                Claim Free 1:1 Strategy Call
              </Link>
            </div>
          </div>

          {/* Direct Answer Box for AI Overviews & Search Snippets */}
          <section className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-brand-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-400 mb-3">
              <Sparkles className="w-4 h-4 text-brand-400" />
              <span>Executive Summary: What Is The Mentskool JEE 2027 Blueprint?</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-5">
              The <strong>Mentskool JEE 2027 Mentorship Program</strong> is a comprehensive execution system engineered to conquer the high-pressure 100-day window before Session 1. Built around verified IIT rankers from premier campuses (IIT Bombay, IIT Delhi, IIT Madras, IIT Kanpur), the program replaces generic mass batching with 4 disciplined pillars:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>High-Yield Chapter Triage:</strong> Immediate focus on the 40 chapters that drive 72% of JEE Main marks, preventing wasted hours on low-ROI topics.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>The 3-Box Backlog Isolation:</strong> Segregating pending chapters into critical prerequisites vs standalone chapters without stalling ongoing class syllabus.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Question-Level Mock Post-Mortems:</strong> Dissecting every mock test error into conceptual gap, calculation slip, or time panic to systematically eliminate negative marks.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>94% Verified Task Accountability:</strong> Daily dashboard tracking of solved problem quotas with strict 30-student cohort caps per mentor and zero annual lock-ins.</span>
              </div>
            </div>
          </section>

          {/* Deep Guide Section 1: The Timeline & Reality Check */}
          <article className="my-16 prose prose-invert max-w-none">
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-3">
                  <Flame className="w-6 h-6 text-orange-400" />
                  1. The JEE 2027 Reality: Why January Session 1 Dictates Your Future
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-4">
                  Every year, over 14 lakh students register for the Joint Entrance Examination (Main). Yet, more than 85% of aspirants make a fatal tactical blunder: they treat January Session 1 as a trial attempt and believe they will peak in April Session 2.
                </p>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-3">
                  Historical percentile analysis reveals why this mindset ruins rank outcomes:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose">
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800/80">
                  <div className="text-2xl font-black text-brand-400 mb-1">~180 Marks</div>
                  <div className="text-sm font-semibold text-white">Score needed for 99% in Session 1</div>
                  <p className="text-xs text-slate-400 mt-2">
                    In January, the majority of Class 12 students are unprepared or anxious about pre-boards. Competition is relatively softer.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800/80">
                  <div className="text-2xl font-black text-rose-400 mb-1">~205+ Marks</div>
                  <div className="text-sm font-semibold text-white">Score needed for 99% in Session 2</div>
                  <p className="text-xs text-slate-400 mt-2">
                    By April, millions of hours of revision and dropper prep elevate the cutoff dramatically. You need 25+ more marks for the exact same rank.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800/80">
                  <div className="text-2xl font-black text-emerald-400 mb-1">110 Days Free</div>
                  <div className="text-sm font-semibold text-white">For Pure JEE Advanced Prep</div>
                  <p className="text-xs text-slate-400 mt-2">
                    Cracking 99+ in Session 1 frees you from April stress, letting you dedicate 3.5 uninterrupted months solely to multi-concept Advanced questions.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Deep Guide Section 2: Chapter Weightage & High-Yield Blueprint */}
          <section className="my-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                JEE Main 2027 High-Yield Chapter Matrix
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Do not treat all 90 chapters equally. Your IITian mentor optimizes your study hours by categorizing chapters into three high-ROI tiers.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl">
              <table className="w-full text-left text-xs sm:text-sm text-slate-300">
                <thead className="bg-slate-950/80 text-white font-bold uppercase text-[11px] tracking-wider border-b border-slate-800">
                  <tr>
                    <th className="py-4 px-4 sm:px-6">Subject</th>
                    <th className="py-4 px-4 sm:px-6 text-emerald-400">Tier 1: High Yield, High ROI (Master First)</th>
                    <th className="py-4 px-4 sm:px-6 text-sky-400">Tier 2: Medium Effort, Consistent (4-8 Marks each)</th>
                    <th className="py-4 px-4 sm:px-6 text-rose-400">Tier 3: Time-Traps (Formula-Heavy / Lengthy)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white">Physics</td>
                    <td className="py-4 px-4 sm:px-6">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Modern Physics (Photoelectric, Atoms, Nuclei)</li>
                        <li>Current Electricity &amp; Semiconductors</li>
                        <li>Thermal Physics &amp; Thermodynamics</li>
                        <li>Gravitation &amp; Units/Dimensions</li>
                      </ul>
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Electrostatics &amp; Capacitance</li>
                        <li>Ray Optics &amp; Wave Optics</li>
                        <li>Work, Power &amp; Energy</li>
                        <li>Kinematics (Straight line &amp; Projectile)</li>
                      </ul>
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Rigid Body Dynamics (Rotational Motion)</li>
                        <li>Fluids &amp; Elasticity</li>
                        <li>Electromagnetic Induction (Complex AC)</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white">Chemistry</td>
                    <td className="py-4 px-4 sm:px-6">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Coordination Compounds &amp; Chemical Bonding</li>
                        <li>Periodic Table Trends &amp; p-Block basics</li>
                        <li>Solutions &amp; Chemical Kinetics</li>
                        <li>GOC &amp; Hydrocarbons mechanisms</li>
                      </ul>
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Aldehydes, Ketones &amp; Carboxylic Acids</li>
                        <li>Amines &amp; Biomolecules</li>
                        <li>Thermodynamics &amp; Electrochemistry</li>
                        <li>Atomic Structure &amp; Mole Concept</li>
                      </ul>
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Ionic Equilibrium (Lengthy calculations)</li>
                        <li>Complex Inorganics without NCERT mapping</li>
                        <li>Solid State &amp; States of Matter (Removed/Trimmed)</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white">Mathematics</td>
                    <td className="py-4 px-4 sm:px-6">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Matrices &amp; Determinants</li>
                        <li>Vectors &amp; 3D Geometry (Guaranteed 12–16 marks)</li>
                        <li>Sequence &amp; Series, Binomial Theorem</li>
                        <li>Statistics &amp; Limits</li>
                      </ul>
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Differential Calculus (AOD, Tangents)</li>
                        <li>Definite Integration &amp; Differential Equations</li>
                        <li>Straight Lines &amp; Circles</li>
                        <li>Probability &amp; Quadratic Equations</li>
                      </ul>
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Complex Numbers (Advanced Geometry)</li>
                        <li>Hyperbola &amp; Ellipse (Low question density vs time)</li>
                        <li>Lengthy Indefinite Integration substitutions</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Deep Guide Section 3: The 3-Phase Execution Model */}
          <section className="my-16 bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800 rounded-3xl p-8 sm:p-12">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                The 100-Day JEE Main 2027 Execution Model
              </h2>
              <p className="text-slate-400 text-sm mt-2">
                A scientific roadmap engineered by IITians who cracked the exam under identical timelines.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  Days 1–45 (Foundation Lockdown)
                </div>
                <h3 className="text-lg font-bold text-white">Syllabus Lockdown &amp; Backlog Purge</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Your mentor maps every single pending chapter into our 3-Box Backlog matrix. You cover Tier 1 high-yield chapters with a strict daily quota of 70 solved problems, logging every session onto your student dashboard.
                </p>
                <div className="pt-2 border-t border-slate-800/80 text-xs text-slate-300">
                  <strong>Key Milestone:</strong> 100% completion of 3D Geometry, Modern Physics, Coordination Compounds, and Electrochemistry.
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                  Days 46–75 (Speed &amp; Accuracy)
                </div>
                <h3 className="text-lg font-bold text-white">PYQ Drills &amp; Part-Syllabus Tests</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Solve 2020–2026 PYQs under strict 55-minute section timers. Your mentor reviews your rough calculation sheets on Google Meet calls to detect where you waste valuable minutes on deadlock steps.
                </p>
                <div className="pt-2 border-t border-slate-800/80 text-xs text-slate-300">
                  <strong>Key Milestone:</strong> 2 part-syllabus mock tests every week with detailed root-cause error logging in your Mistake Book.
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Days 76–100 (Peak Conditioning)
                </div>
                <h3 className="text-lg font-bold text-white">Full CBT Mocks &amp; Negative Eradication</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Take full 3-hour computer-based mock tests matched exactly to NTA shift timings (9:00 AM–12:00 PM or 3:00 PM–6:00 PM). Eliminate the last 20–30 negative marks through strict question-skipping criteria.
                </p>
                <div className="pt-2 border-t border-slate-800/80 text-xs text-slate-300">
                  <strong>Key Milestone:</strong> Stable score plateau broken; average mock accuracy pushed above 85%.
                </div>
              </div>
            </div>
          </section>

          {/* Deep Guide Section 4: Daily Timetable for School & Droppers */}
          <section className="my-16">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Battle-Tested Daily Timetables for JEE 2027
              </h2>
              <p className="text-slate-400 text-sm mt-2">
                Choose the schedule matching your current academic status. Your mentor personalizes this based on your coaching timings.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Dropper Timetable */}
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-300 border border-amber-500/20">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Dropper / Full-Time JEE 2027 Schedule (11.5 Study Hours)</span>
                </div>
                <h3 className="text-xl font-extrabold text-white">The High-Efficiency Dropper Regimen</h3>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-brand-400 font-bold w-24 shrink-0">06:00 - 06:30</span>
                    <span>Wake up, hydration, 15-minute quick formula sheet review.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-brand-400 font-bold w-24 shrink-0">06:30 - 09:30</span>
                    <span><strong>Slot 1 (Physics Deep Work):</strong> Heavy problem solving on mechanics/electrodynamics without distraction.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-brand-400 font-bold w-24 shrink-0">09:30 - 10:30</span>
                    <span>Nutritious breakfast + brief rest.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-brand-400 font-bold w-24 shrink-0">10:30 - 01:30</span>
                    <span><strong>Slot 2 (Mathematics Timed PYQs):</strong> 35-40 algebra and calculus problems under countdown timer.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-brand-400 font-bold w-24 shrink-0">01:30 - 03:00</span>
                    <span>Lunch, power nap (critical for afternoon cognitive reset).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-brand-400 font-bold w-24 shrink-0">03:00 - 06:00</span>
                    <span><strong>Slot 3 (Chemistry Mastery):</strong> Physical chemistry numerics + NCERT Organic reaction drills.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-brand-400 font-bold w-24 shrink-0">06:00 - 07:00</span>
                    <span>Physical exercise, fresh air, evening snack.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-brand-400 font-bold w-24 shrink-0">07:00 - 09:30</span>
                    <span><strong>Slot 4 (Backlog Clearance / Test Analysis):</strong> Dedicated to clearing weak chapters identified by mentor.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-brand-400 font-bold w-24 shrink-0">09:30 - 10:45</span>
                    <span>Dinner + log daily metrics on Mentskool dashboard + check mentor feedback.</span>
                  </li>
                </ul>
              </div>

              {/* Class 12 Regular School Timetable */}
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-sky-500/10 text-sky-300 border border-sky-500/20">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Class 12 School + Coaching Schedule (6.5 Self-Study Hours)</span>
                </div>
                <h3 className="text-xl font-extrabold text-white">The School-Balanced Accelerator</h3>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-sky-400 font-bold w-24 shrink-0">06:00 - 07:30</span>
                    <span><strong>Morning Focus Slot:</strong> High-retention memorization (Inorganic Chemistry or Physics formulas).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-sky-400 font-bold w-24 shrink-0">08:00 - 02:00</span>
                    <span>School hours (utilize free periods for board NCERT derivations).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-sky-400 font-bold w-24 shrink-0">02:30 - 04:00</span>
                    <span>Lunch, rest, and travel to coaching or setup for online classes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-sky-400 font-bold w-24 shrink-0">04:00 - 07:30</span>
                    <span>Coaching lectures (Allen, PW, Resonance, or Unacademy).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-sky-400 font-bold w-24 shrink-0">07:30 - 08:15</span>
                    <span>Recharge, light dinner, review day notes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-sky-400 font-bold w-24 shrink-0">08:15 - 10:45</span>
                    <span><strong>Night Self-Study Slot 1:</strong> Solve 40 daily problems on current coaching chapters.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-sky-400 font-bold w-24 shrink-0">10:45 - 11:45</span>
                    <span><strong>Class 11 Backlog Slot:</strong> Solve 15 Class 11 questions assigned by your Mentskool mentor.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-sky-400 font-bold w-24 shrink-0">11:45 - 12:00</span>
                    <span>Log daily task completion on Mentskool dashboard; lights out.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Deep Guide Section 5: The Mistake Book Blueprint */}
          <section className="my-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 to-indigo-950/40 border border-slate-800">
            <div className="max-w-3xl mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 mb-3">
                <Target className="w-3.5 h-3.5" />
                <span>The Proprietary Mentskool Error-Correction Framework</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                How We Eliminate 30+ Negative Marks: The 3-Column Mistake Book
              </h2>
              <p className="text-slate-300 text-sm mt-2">
                Most students review mock tests by reading solutions and nodding in agreement. Two weeks later, they repeat the exact same blunder. At Mentskool, every mentee maintains a structured 3-Column Error Log audited weekly by their IIT mentor:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
                <div className="text-rose-400 font-bold text-sm uppercase tracking-wider">Column 1: Conceptual Gaps</div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  You misunderstood the fundamental law (e.g., applied conservation of angular momentum about an axis with net external torque).
                </p>
                <div className="text-xs text-brand-300 font-medium">
                  <strong>Fix:</strong> Mentor re-explains core concept on 1:1 call; assigns 10 targeted sub-problems.
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
                <div className="text-amber-400 font-bold text-sm uppercase tracking-wider">Column 2: Calculation &amp; Sign Errors</div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  You knew the formula but bungled the arithmetic, wrote + instead of -, or missed unit conversions (e.g., cm to m or eV to Joules).
                </p>
                <div className="text-xs text-brand-300 font-medium">
                  <strong>Fix:</strong> Structured rough sheet discipline; write final unit checks before marking OMR/CBT answer.
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
                <div className="text-sky-400 font-bold text-sm uppercase tracking-wider">Column 3: Psychological &amp; Time Panic</div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  You spent 8 minutes fighting a complex integration problem, panicked, and made careless mistakes on 3 easy chemistry questions immediately after.
                </p>
                <div className="text-xs text-brand-300 font-medium">
                  <strong>Fix:</strong> Strict &quot;3-Minute Rule&quot; enforcement. If no clear path emerges in 90 seconds, skip and flag for round 2.
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Accordion */}
          <section className="mt-16">
            <SeoFaqAccordion
              faqs={jee2027Faqs}
              title="Frequently Asked Questions: JEE 2027 Mentorship"
              subtitle="Everything you need to know about exam dates, sprint planning, and 1:1 IITian guidance."
            />
          </section>

          {/* CTA Banner */}
          <section className="mt-16">
            <SeoCtaBanner
              title="Conquer JEE 2027 with an IITian by Your Side"
              description="Get a personalized 100-day roadmap, daily problem accountability, and mock test audits. Start with a flexible monthly plan and switch mentors anytime."
              primaryButtonText="Browse Verified IIT Mentors"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
