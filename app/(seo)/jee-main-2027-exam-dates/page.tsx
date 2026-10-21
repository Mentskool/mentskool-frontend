import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  Clock,
  AlertCircle,
  CheckCircle2,
  FileText,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  TrendingUp,
  Award,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { SeoMentorFunnel } from "@/components/seo/SeoMentorFunnel";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "JEE Main 2027 Exam Dates: Session 1 & 2 Schedule, NTA Calendar & Registration",
  description:
    "Official tentative JEE Main 2027 exam dates, Session 1 (Jan 22–30) and Session 2 (April) schedule, registration deadlines, buffer days, shift timings, and 100-day ranker timetable.",
  keywords: [
    "jee main 2027 exam dates",
    "jee 2027 session 1 dates",
    "jee main 2027 registration date",
    "nta jee main 2027 calendar",
    "jee 2027 session 2 dates",
    "jee main 2027 shift timings",
    "jee main 2027 application form date",
  ],
  alternates: {
    canonical: "https://mentskool.com/jee-main-2027-exam-dates",
  },
  openGraph: {
    title: "JEE Main 2027 Exam Dates (Session 1 & 2) — NTA Schedule & Timeline",
    description:
      "Complete timeline for JEE Main 2027: Session 1 January dates, buffer shifts, registration window, admit card releases, and strategic 100-day countdown with IITian mentors.",
    url: "https://mentskool.com/jee-main-2027-exam-dates",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "JEE Main 2027 Exam Dates - Mentskool",
      },
    ],
  },
};

const faqs: FaqItem[] = [
  {
    question: "What are the tentative dates for JEE Main 2027 Session 1?",
    answer:
      "According to NTA's established annual schedule, JEE Main 2027 Session 1 is scheduled between January 22, 23, 24, 28, 29, and 30, 2027, with January 31 reserved as an official buffer day for technical discrepancies or weather delays.",
  },
  {
    question: "When will the JEE Main 2027 registration window open?",
    answer:
      "NTA is expected to release the official information bulletin and open online application forms in the fourth week of October 2026. The registration window typically remains open for 30 to 35 days, closing in late November or early December 2026.",
  },
  {
    question: "Can I appear for both Session 1 and Session 2?",
    answer:
      "Yes. Aspirants can register for either Session 1, Session 2, or both sessions. If you appear for both sessions, your best normalized NTA percentile score across the two attempts is considered for All India Rank (AIR) computation and JEE Advanced eligibility.",
  },
  {
    question: "What are the daily shift timings for JEE Main 2027?",
    answer:
      "JEE Main is conducted in two computer-based shifts per day: Morning Shift 1 runs from 9:00 AM to 12:00 PM (reporting time 7:30 AM), and Afternoon Shift 2 runs from 3:00 PM to 6:00 PM (reporting time 1:30 PM). PwD candidates receive an extra hour per paper.",
  },
  {
    question: "Has NTA changed the numerical question format in Section B?",
    answer:
      "Yes. NTA has permanently discontinued the pandemic-era optional choices in Section B. You must attempt all 5 numerical-value questions per subject. Negative marking of -1 is strictly applicable for incorrect answers in both Section A (MCQs) and Section B (Numericals).",
  },
  {
    question: "Why is Session 1 in January considered easier to score 99 percentile?",
    answer:
      "Historical data shows Session 1 features lower overall competition density because many Class 12 aspirants are preoccupied with school pre-boards and incomplete syllabi. Achieving 99 percentile in Session 1 typically requires 15 to 25 fewer raw marks than in Session 2, making Session 1 the highest-ROI opportunity for serious aspirants.",
  },
];

export default function JeeMain2027ExamDatesPage() {
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
        headline: "JEE Main 2027 Exam Dates, Schedule, Registration & NTA Timeline",
        description:
          "Comprehensive guide to JEE Main 2027 exam dates, Session 1 and Session 2 timelines, shift hours, buffer days, and tactical preparation roadmaps.",
        url: "https://mentskool.com/jee-main-2027-exam-dates",
        author: {
          "@type": "Organization",
          name: "Mentskool Academic Research Cell",
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
                label: "JEE Main 2027 Exam Dates",
                href: "/jee-main-2027-exam-dates",
              },
            ]}
          />

          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-xs font-semibold mb-4">
              <Calendar className="w-3.5 h-3.5" />
              <span>NTA Tentative Examination Schedule • Target 2027 &amp; 2028 Cohorts</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              JEE Main 2027 Exam Dates:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-sky-300 to-indigo-400">
                Session 1 &amp; 2 Schedule &amp; NTA Timeline
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              The National Testing Agency (NTA) conducts JEE Main in two nationwide sessions. With Session 1 scheduled for <strong>January 22–30, 2027</strong> and Session 2 in <strong>April 2027</strong>, understanding the exact registration windows, shift timings, and buffer days is critical to engineering your 99+ percentile study sprint.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Find Your IITian Strategy Mentor</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/free-mentorship-session"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all"
              >
                Claim Free 1:1 Roadmap Call
              </Link>
            </div>
          </div>

          {/* Direct Answer Box for AI Overviews & Search Snippets */}
          <section className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-brand-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-400 mb-3">
              <Sparkles className="w-4 h-4 text-brand-400" />
              <span>Executive Summary: What Are The Official JEE Main 2027 Dates?</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-4">
              <strong>JEE Main 2027 Session 1</strong> will be held from <strong>January 22 to January 30, 2027</strong> (tentative shift dates: Jan 22, 23, 24, 28, 29, 30 with Jan 31 as buffer), with application forms opening in late October 2026. <strong>Session 2</strong> will take place in <strong>April 2027</strong> with registrations starting in February 2027. Both sessions follow the revised NTA pattern: 75 compulsory questions, zero Section B choices, and $-1$ negative marking across all questions.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs pt-2 border-t border-slate-800">
              <div>
                <span className="text-slate-400 block">Session 1 Exam</span>
                <strong className="text-white">Jan 22 – 30, 2027</strong>
              </div>
              <div>
                <span className="text-slate-400 block">Session 1 Reg.</span>
                <strong className="text-white">Oct – Nov 2026</strong>
              </div>
              <div>
                <span className="text-slate-400 block">Session 2 Exam</span>
                <strong className="text-white">April 2027</strong>
              </div>
              <div>
                <span className="text-slate-400 block">Daily Shifts</span>
                <strong className="text-white">9am–12pm &amp; 3pm–6pm</strong>
              </div>
            </div>
          </section>

          {/* Section 1: Detailed Examination Timeline Matrix */}
          <section className="my-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-400 bg-brand-500/10 px-3 py-1 rounded-full border border-brand-500/20">
                Official Event Milestones
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3">
                JEE Main 2027 Complete Schedule &amp; Activity Calendar
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Keep these critical dates pinned to your study desk. Missing a registration deadline or city intimation slip can jeopardize months of rigorous preparation.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl">
              <table className="w-full text-left text-xs sm:text-sm text-slate-300">
                <thead className="bg-slate-950/80 text-white font-bold uppercase text-[11px] tracking-wider border-b border-slate-800">
                  <tr>
                    <th className="py-4 px-4 sm:px-6">Activity / Milestone</th>
                    <th className="py-4 px-4 sm:px-6 text-brand-300">Session 1 (January 2027)</th>
                    <th className="py-4 px-4 sm:px-6 text-indigo-300">Session 2 (April 2027)</th>
                    <th className="py-4 px-4 sm:px-6">Action Required by Aspirant</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-semibold text-white">Information Bulletin &amp; Circular</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-200">Late October 2026</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-200">First Week February 2027</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-400">Download syllabus PDF and verify eligibility</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-semibold text-white">Online Application Window</td>
                    <td className="py-4 px-4 sm:px-6 text-emerald-400 font-semibold">Late October to Late November 2026</td>
                    <td className="py-4 px-4 sm:px-6 text-emerald-400 font-semibold">February to Early March 2027</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-400">Complete Aadhaar authentication and upload photo</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-semibold text-white">Application Correction Window</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-200">First Week December 2026</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-200">Mid March 2027</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-400">Rectify photograph, category, or city preferences</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-semibold text-white">Advance City Intimation Slip</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-200">Second Week January 2027</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-200">Late March 2027</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-400">Check exam city allocation and book travel/hotel</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-semibold text-white">Admit Card Release</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-200">3 Days Prior to Shift Date</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-200">3 Days Prior to Shift Date</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-400">Print admit card in color with undertaking</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30 bg-brand-500/10 border-l-4 border-brand-500">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white">Official Examination Dates</td>
                    <td className="py-4 px-4 sm:px-6 text-emerald-400 font-bold">January 22, 23, 24, 28, 29, 30, 2027</td>
                    <td className="py-4 px-4 sm:px-6 text-emerald-400 font-bold">April 1 to April 15, 2027 (Tentative)</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-200 font-medium">Paper 1 (B.E./B.Tech) &amp; Paper 2</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-semibold text-white">Official Buffer Day</td>
                    <td className="py-4 px-4 sm:px-6 text-amber-400 font-semibold">January 31, 2027</td>
                    <td className="py-4 px-4 sm:px-6 text-amber-400 font-semibold">Reserved by NTA</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-400">Used only if technical or weather re-exam needed</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-semibold text-white">Provisional Answer Key &amp; Response Sheet</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-200">First Week February 2027</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-200">Mid April 2027</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-400">Audit your answers and file challenges within 48h</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-semibold text-white">NTA Score / Result Declaration</td>
                    <td className="py-4 px-4 sm:px-6 text-brand-300 font-bold">Mid February 2027</td>
                    <td className="py-4 px-4 sm:px-6 text-indigo-300 font-bold">Late April 2027 (With All India Ranks)</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-400">Final AIR computation based on best of two attempts</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: Shift Timings and Reporting Protocol */}
          <section className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20 mb-4">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Morning Shift (Shift 1)</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                  Shift 1 Timing: 09:00 AM to 12:00 PM
                </h3>
                <ul className="space-y-3 text-slate-300 text-sm">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Reporting Time:</strong> 07:30 AM to 08:30 AM (Gates strictly close at 08:30 AM).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Biometric &amp; Frisking:</strong> 08:30 AM to 08:45 AM.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Instruction Reading on Screen:</strong> 08:45 AM to 08:59 AM.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Circadian Peak Alert:</strong> Students must adjust their sleep cycles at least 3 weeks prior to be 100% alert at 9:00 AM.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-slate-400">
                PwD candidates receive extended time until 01:00 PM (4 hours total).
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20 mb-4">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Afternoon Shift (Shift 2)</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                  Shift 2 Timing: 03:00 PM to 06:00 PM
                </h3>
                <ul className="space-y-3 text-slate-300 text-sm">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span><strong>Reporting Time:</strong> 01:30 PM to 02:30 PM (Gates close at 02:30 PM sharp).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span><strong>Biometric &amp; Seat Allocation:</strong> 02:30 PM to 02:45 PM.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span><strong>Post-Lunch Slump Hazard:</strong> Afternoons require practice with light lunches to avoid mental sluggishness between 3:00 and 4:30 PM.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span><strong>Simulated Mock Tests:</strong> Take alternate mocks at 3:00 PM to build stamina.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-slate-400">
                PwD candidates receive extended time until 07:00 PM (4 hours total).
              </div>
            </div>
          </section>

          {/* Section 3: Why Session 1 (January) is Your Greatest Strategic Advantage */}
          <section className="my-16 bg-gradient-to-br from-slate-900/90 to-slate-900/50 border border-slate-800 rounded-3xl p-8 sm:p-12">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
                Tactical Insights by IITian Rankers
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3">
                Why Top Rankers Focus 80% of Their Energy on Session 1
              </h2>
              <p className="text-slate-400 text-sm mt-2">
                Many coaching centers casually suggest "Session 1 is for experience, do your best in Session 2." This is mathematically catastrophic. Here is the unvarnished data:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800">
                <div className="text-brand-400 text-2xl font-black mb-2">01</div>
                <h3 className="text-lg font-semibold text-white mb-2">Lower Competition Density</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  In January, over 40% of Class 12 aspirants are terrified by incomplete syllabus or board practicals and sit half-prepared. The score required to hit 99 percentile is significantly lower (historically 15 to 25 raw marks less) than in April.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800">
                <div className="text-brand-400 text-2xl font-black mb-2">02</div>
                <h3 className="text-lg font-semibold text-white mb-2">Stress-Free JEE Advanced Buffer</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  If you secure a 99.4+ percentile in January, you lock your NIT Trichy or Surathkal CSE seat early. You can completely dedicate February, March, April, and May to multi-concept JEE Advanced problem solving without stress.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800">
                <div className="text-brand-400 text-2xl font-black mb-2">03</div>
                <h3 className="text-lg font-semibold text-white mb-2">Immunity to April Score Inflation</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  In April (Session 2), dropper batches have completed 3 full revision cycles, resulting in extreme score clustering. A score of 185 that fetched 99 percentile in January frequently plummets to 97.6 percentile in April.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: 100-Day Micro-Milestone Countdown to January 22 */}
          <section className="my-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                The 100-Day Countdown Blueprint to JEE Main Session 1
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                How our verified IIT Bombay and Delhi mentors structure your weekly problem-solving volume to guarantee peak exam readiness:
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col md:flex-row gap-6 items-start">
                <div className="px-4 py-2 rounded-xl bg-brand-500/20 text-brand-300 font-black text-sm whitespace-nowrap border border-brand-500/30">
                  Days 100 to 60
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Phase 1: High-Yield Syllabus Consolidation &amp; Backlog Surgery</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Target completion of high-weightage chapters (Modern Physics, Current Electricity, Coordination Compounds, Vectors/3D, Matrices). Cease watching passive 8-hour marathon videos. Solve a mandatory minimum of 75 self-attempted problems daily under 1-minute to 2.5-minute timers.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-400">
                    <span className="bg-slate-800 px-2.5 py-1 rounded-md">75 Questions/Day</span>
                    <span className="bg-slate-800 px-2.5 py-1 rounded-md">Mistake Notebook Setup</span>
                    <span className="bg-slate-800 px-2.5 py-1 rounded-md">Weekly 1:1 Mentor Calibration</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col md:flex-row gap-6 items-start">
                <div className="px-4 py-2 rounded-xl bg-sky-500/20 text-sky-300 font-black text-sm whitespace-nowrap border border-sky-500/30">
                  Days 60 to 30
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Phase 2: Full-Length Timed Mocks &amp; Negative Marking Elimination</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Shift to taking 2 full-syllabus mock tests every week strictly between 09:00 AM and 12:00 PM. Follow every 3-hour test with a mandatory 3-hour autopsy: categorize every lost mark into calculation slips, formula blanks, or conceptual gaps. Your mentor reviews your mistake book weekly to enforce discipline.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-400">
                    <span className="bg-slate-800 px-2.5 py-1 rounded-md">2 Mocks/Week</span>
                    <span className="bg-slate-800 px-2.5 py-1 rounded-md">Strict 3h Post-Test Autopsy</span>
                    <span className="bg-slate-800 px-2.5 py-1 rounded-md">Negative Mark Cap &lt; 15</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col md:flex-row gap-6 items-start">
                <div className="px-4 py-2 rounded-xl bg-emerald-500/20 text-emerald-300 font-black text-sm whitespace-nowrap border border-emerald-500/30">
                  Days 30 to 1
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Phase 3: Formula Precision, PYQ Re-Attempts &amp; Circadian Priming</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Stop attempting new question banks or unfamiliar reference materials. Re-solve the last 5 years' official NTA PYQs (2022 to 2026 shifts). Review short notes, inorganic reaction tables, and physical chemistry formula flashcards twice daily. Align your biological clock so your peak mental focus hits at 9:00 AM.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-400">
                    <span className="bg-slate-800 px-2.5 py-1 rounded-md">Official PYQs Only</span>
                    <span className="bg-slate-800 px-2.5 py-1 rounded-md">Circadian Sleep Priming</span>
                    <span className="bg-slate-800 px-2.5 py-1 rounded-md">Daily 94% Efficiency Verification</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Documents Checklist for JEE Main 2027 Registration */}
          <section className="my-16 p-8 rounded-3xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6 text-brand-400" />
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Documents to Prepare Before Registration Opens (October 2026)
              </h3>
            </div>
            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              Every year, thousands of candidates face rejection or panic because their Aadhaar name does not match their Class 10 marksheet letter-by-letter. Have these certified digital files ready:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <strong className="text-white block mb-1">1. Aadhaar Card (UIDAI)</strong>
                <p className="text-slate-400 text-xs">Must have your active mobile number linked for OTP authentication. Name, DOB, and parent's name must match your Class 10 certificate.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <strong className="text-white block mb-1">2. Passport Size Photograph</strong>
                <p className="text-slate-400 text-xs">Clear white background, 80% face coverage showing ears clearly. JPEG format, file size strictly between 10 KB to 200 KB.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <strong className="text-white block mb-1">3. Candidate Signature</strong>
                <p className="text-slate-400 text-xs">Signed with black or blue ink pen on clean white paper. No digital fonts. File size strictly between 4 KB to 30 KB.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <strong className="text-white block mb-1">4. Category Certificate (If Applicable)</strong>
                <p className="text-slate-400 text-xs">GEN-EWS or OBC-NCL certificates must be issued on or after April 1, 2026 to be legally valid for the 2027 admissions cycle.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <strong className="text-white block mb-1">5. Class 10 Marksheet / Passing Certificate</strong>
                <p className="text-slate-400 text-xs">Used as legal verification of date of birth and candidate identity. Scan in crisp PDF format (50 KB to 300 KB).</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <strong className="text-white block mb-1">6. PwD / Scribe Certificate</strong>
                <p className="text-slate-400 text-xs">Medical authority certified disability document if claiming compensatory extra time or requiring an official scribe.</p>
              </div>
            </div>
          </section>

          {/* Interactive Mentor Conversion Funnel */}
          <SeoMentorFunnel examFocus="JEE" />

          {/* FAQ Section */}
          <section className="mt-16">
            <SeoFaqAccordion
              title="Frequently Asked Questions About JEE Main 2027 Dates"
              subtitle="Verified answers on registration, shift allocations, eligibility, and dual-session strategy."
              faqs={faqs}
            />
          </section>

          {/* CTA Banner */}
          <section className="mt-16">
            <SeoCtaBanner
              title="Do Not Face JEE Main 2027 Alone — Partner with an IITian Ranker"
              description="Strictly 30 students per mentor cohort. Get your personalized 100-day timetable, daily task audits, and mock test breakdown starting this week."
              primaryButtonText="Find Your Mentor"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
