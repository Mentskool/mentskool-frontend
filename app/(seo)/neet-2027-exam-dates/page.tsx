import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  Clock,
  CheckCircle2,
  FileText,
  ArrowRight,
  Sparkles,
  HeartPulse,
  Award,
  AlertTriangle,
  Stethoscope,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { SeoMentorFunnel } from "@/components/seo/SeoMentorFunnel";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "NEET 2027 Exam Date: Tentative Schedule, Registration Timeline & NTA Calendar",
  description:
    "Official tentative NEET UG 2027 exam date (First Sunday of May 2027), registration opening (February), timing (2:00 PM to 5:20 PM), eligibility codes, and AIIMS 680+ study plan.",
  keywords: [
    "neet 2027 exam date",
    "neet ug 2027 registration date",
    "nta neet 2027 application form date",
    "neet 2027 syllabus update",
    "neet 2027 exam timing",
    "neet 2027 eligibility criteria",
    "neet 2027 preparation timetable",
  ],
  alternates: {
    canonical: "https://mentskool.com/neet-2027-exam-dates",
  },
  openGraph: {
    title: "NEET 2027 Exam Date & Registration Schedule — NTA Calendar & Timeline",
    description:
      "Everything you need to know about NEET 2027: Tentative May exam date, application window, 200-minute test format, and month-by-month NCERT blueprint by AIIMS mentors.",
    url: "https://mentskool.com/neet-2027-exam-dates",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "NEET 2027 Exam Date - Mentskool",
      },
    ],
  },
};

const faqs: FaqItem[] = [
  {
    question: "What is the expected date for NEET UG 2027?",
    answer:
      "NEET UG is traditionally conducted by the National Testing Agency (NTA) on the first Sunday of May. For the 2027 admissions cycle, NEET UG is tentatively scheduled for May 2, 2027 (or May 9, 2027 as a secondary window), conducted in a single afternoon shift from 2:00 PM to 5:20 PM IST.",
  },
  {
    question: "When will the NEET 2027 application form be released?",
    answer:
      "NTA is expected to release the official information bulletin and open online application forms on exams.nta.ac.in/NEET in the second week of February 2027. The application portal typically remains open for 30 to 40 days, closing in mid-March 2027.",
  },
  {
    question: "Will NEET 2027 be conducted online (CBT) or offline on OMR sheets?",
    answer:
      "While government advisory committees have recommended transitioning high-stakes exams to computer-based testing (CBT) in multiple shifts to eliminate paper tampering, NTA currently maintains the pen-and-paper OMR format. Any official transition to hybrid or full CBT mode will be formally notified by NTA at least 6 months prior to the exam.",
  },
  {
    question: "What is the total duration and question count for NEET 2027?",
    answer:
      "The exam duration is 3 hours and 20 minutes (200 minutes total), held from 2:00 PM to 5:20 PM. The question paper contains 200 questions across Physics (50), Chemistry (50), and Biology (Botany 50 + Zoology 50). Students must attempt 180 questions for a total of 720 marks.",
  },
  {
    question: "What is the minimum age eligibility for NEET 2027?",
    answer:
      "Aspirants must have completed 17 years of age on or before December 31, 2027. There is no upper age limit for appearing in NEET UG as per Supreme Court rulings.",
  },
  {
    question: "What is a safe score in NEET 2027 for a Government Medical College (MBBS)?",
    answer:
      "Due to intense score competition and over 2.4 million applicants, general category candidates should target a minimum of 650+ marks out of 720 to secure an MBBS seat in an established State Government Medical College, and 680+ marks for premier central institutions like AIIMS, JIPMER, or MAMC Delhi.",
  },
];

export default function Neet2027ExamDatesPage() {
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
        headline: "NEET 2027 Exam Date, Schedule, Application Timeline & NTA Calendar",
        description:
          "Comprehensive guide to NEET UG 2027 examination dates, February application process, 200-minute exam format, and AIIMS ranker preparation timeline.",
        url: "https://mentskool.com/neet-2027-exam-dates",
        author: {
          "@type": "Organization",
          name: "Mentskool Medical Academic Board",
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
                label: "NEET 2027 Exam Date",
                href: "/neet-2027-exam-dates",
              },
            ]}
          />

          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-semibold mb-4">
              <Stethoscope className="w-3.5 h-3.5 text-emerald-400" />
              <span>NTA Medical Entrance Calendar • Target 2027 &amp; 2028 Aspirants</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              NEET 2027 Exam Date:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400">
                Tentative Schedule, Registration &amp; NTA Timeline
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              NEET UG 2027 is tentatively scheduled for <strong>Sunday, May 2, 2027</strong> by the National Testing Agency. With over 24 lakh medical aspirants competing for fewer than 60,000 government MBBS seats, every single week between now and May dictates your All India Rank.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Find Your AIIMS Medico Mentor</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/free-mentorship-session"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all"
              >
                Book Free 1:1 Medical Diagnostic Call
              </Link>
            </div>
          </div>

          {/* Direct Answer Box for AI Overviews & Search Snippets */}
          <section className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-emerald-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-400 mb-3">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Executive Summary: When Is NEET UG 2027 Being Conducted?</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-4">
              <strong>NEET UG 2027</strong> will be conducted on <strong>Sunday, May 2, 2027</strong> (tentative NTA calendar), from <strong>02:00 PM to 05:20 PM IST</strong> in a single pen-and-paper shift across 550+ cities. Online registration will open in <strong>February 2027</strong> on exams.nta.ac.in. The exam features 200 questions across Physics, Chemistry, and Biology (180 to attempt) for 720 total marks, requiring a target score of <strong>650+</strong> for a Government Medical College (GMC) seat.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs pt-2 border-t border-slate-800">
              <div>
                <span className="text-slate-400 block">Exam Date</span>
                <strong className="text-white">May 2, 2027 (Tentative)</strong>
              </div>
              <div>
                <span className="text-slate-400 block">Application Window</span>
                <strong className="text-white">February – March 2027</strong>
              </div>
              <div>
                <span className="text-slate-400 block">Exam Timing</span>
                <strong className="text-white">2:00 PM – 5:20 PM (200 Mins)</strong>
              </div>
              <div>
                <span className="text-slate-400 block">Total Marks</span>
                <strong className="text-white">720 Marks (180 Qs)</strong>
              </div>
            </div>
          </section>

          {/* Section 1: Detailed Master Activity Calendar */}
          <section className="my-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                Official Event Milestones
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3">
                NEET UG 2027 Complete Activity Timeline
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Keep track of every administrative deadline. Medical admissions require meticulous verification of qualifying codes, domicile records, and category documentation.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl">
              <table className="w-full text-left text-xs sm:text-sm text-slate-300">
                <thead className="bg-slate-950/80 text-white font-bold uppercase text-[11px] tracking-wider border-b border-slate-800">
                  <tr>
                    <th className="py-4 px-4 sm:px-6">Milestone Event</th>
                    <th className="py-4 px-4 sm:px-6 text-emerald-300">Tentative Expected Date</th>
                    <th className="py-4 px-4 sm:px-6 text-sky-300">Conducting Authority</th>
                    <th className="py-4 px-4 sm:px-6">Critical Candidate Instructions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-semibold text-white">Official Information Bulletin Release</td>
                    <td className="py-4 px-4 sm:px-6 text-emerald-400 font-semibold">Early February 2027</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-300">NTA (exams.nta.ac.in)</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-400">Verify rationalized NMC syllabus and qualifying examination codes</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-semibold text-white">Online Application Window</td>
                    <td className="py-4 px-4 sm:px-6 text-emerald-400 font-semibold">Mid February to Mid March 2027</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-300">NTA Online Portal</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-400">Fill academic details, upload post-card photo, signature, and thumb impressions</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-semibold text-white">Application Correction Window</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-200">Late March 2027 (3–4 Days)</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-300">NTA Portal</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-400">One-time window to correct gender, category, examination city, or uploaded media</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-semibold text-white">Advance City Intimation Slip</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-200">Third Week April 2027</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-300">NTA Portal</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-400">Check allotted examination city and finalize local travel / lodging arrangements</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-semibold text-white">Admit Card Release</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-200">Last Week April 2027 (3-4 Days before Exam)</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-300">NTA Portal</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-400">Download color printout with proforma, paste postcard size photo, sign undertaking</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30 bg-emerald-500/10 border-l-4 border-emerald-500">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white">NEET UG 2027 Examination Day</td>
                    <td className="py-4 px-4 sm:px-6 text-emerald-300 font-bold">Sunday, May 2, 2027 (02:00 PM to 05:20 PM)</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-300 font-medium">Pan-India Exam Centers</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-200 font-medium">Strict reporting by 12:30 PM. No entry allowed past 01:30 PM</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-semibold text-white">Provisional OMR Display &amp; Answer Key</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-200">Last Week May 2027</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-300">NTA Portal</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-400">Cross-verify recorded responses with provisional keys; challenge if discrepancy exists</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-semibold text-white">Final Result &amp; All India Ranks</td>
                    <td className="py-4 px-4 sm:px-6 text-emerald-400 font-bold">Second Week June 2027</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-300">NTA Scorecards</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-400">Scorecard valid for MCC All India Quota (15%) and State Quota (85%) counseling</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: Exam Day Timing and Strict Entry Protocol */}
          <section className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 mb-4">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Exam Slot: 02:00 PM to 05:20 PM (200 Mins)</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                  Strict Center Entry &amp; Frisking Protocol
                </h3>
                <ul className="space-y-3 text-slate-300 text-sm">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>11:30 AM to 01:30 PM:</strong> Mandatory center reporting window. Extensive metal detector frisking and biometric thumb scanning.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>01:30 PM Hard Gate Closure:</strong> Centers strictly lock doors at 01:30 PM. No candidate is allowed entry under any circumstance even 1 minute late.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>01:45 PM to 01:59 PM:</strong> Distribution of test booklets and OMR answer sheets. Checking code parity.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>02:00 PM:</strong> Test begins. Candidates must carefully budget 200 minutes across 180 questions.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-slate-400">
                Candidates must wear simple light half-sleeve clothing with no large buttons, brooches, or metallic zippers as per NTA dress code.
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20 mb-4">
                  <HeartPulse className="w-3.5 h-3.5" />
                  <span>Optimal 200-Minute Paper Allocation</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                  The AIIMS Topper 3-Round Speed Formula
                </h3>
                <ul className="space-y-3 text-slate-300 text-sm">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span><strong>Round 1 (Biology in 45 Mins):</strong> Attempt all 90 Bio questions directly with instant OMR bubbling. Target 340+ marks immediately to anchor confidence.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span><strong>Round 2 (Chemistry in 50 Mins):</strong> Solve Inorganic and Organic memory-based questions first, followed by direct Physical Chemistry numericals.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span><strong>Round 3 (Physics in 75 Mins):</strong> Tackle conceptual mechanics, electrodynamics, and modern physics. Leave lengthy multi-step calculations for the final sweep.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span><strong>Buffer (30 Mins):</strong> Reserved for tricky calculation re-checks, verifying Section B 10/15 counts, and checking OMR serial alignment.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-slate-400">
                Mentskool students practice this exact 3-round protocol in 25+ simulated full-length mock tests before May.
              </div>
            </div>
          </section>

          {/* Section 3: Month-by-Month Countdown Roadmap to May 2027 */}
          <section className="my-16 bg-gradient-to-br from-slate-900/90 to-slate-900/50 border border-slate-800 rounded-3xl p-8 sm:p-12">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
                Medical Ranker Milestone Protocol
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3">
                Month-by-Month Countdown to NEET UG 2027
              </h2>
              <p className="text-slate-400 text-sm mt-2">
                How our AIIMS New Delhi and premier government medical college mentors structure your study calendar:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800">
                <div className="text-emerald-400 text-2xl font-black mb-2">Phase 1</div>
                <h3 className="text-lg font-semibold text-white mb-2">October to December 2026: NCERT Master Line-by-Line Sweep</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Finish 100% of the Class 11 and 12 NCERT Biology and Chemistry textbook content. Complete high-yield Physics mechanics and electrodynamics numerical problem banks (100 problems/day).
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800">
                <div className="text-emerald-400 text-2xl font-black mb-2">Phase 2</div>
                <h3 className="text-lg font-semibold text-white mb-2">January to March 2027: Part Tests &amp; Error Book Surgery</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Take bi-weekly 720-mark part tests. Build your personal "Mistake Book" categorizing every negative mark into calculation error, misread question, or forgotten formula. Your mentor audits your mistake book weekly.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800">
                <div className="text-emerald-400 text-2xl font-black mb-2">Phase 3</div>
                <h3 className="text-lg font-semibold text-white mb-2">April 2027: Daily Simulated OMR Mocks (2:00 PM to 5:20 PM)</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Attempt full-syllabus mocks strictly between 2:00 PM and 5:20 PM to align your circadian rhythm. Solve only official NTA past-year papers and review 100% of NCERT diagram captions and summary tables.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Eligibility & Qualification Codes Breakdown */}
          <section className="my-16 p-8 rounded-3xl bg-slate-900/60 border border-slate-800">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              NEET Qualifying Codes (Code 01 to Code 07) Explained Simply
            </h3>
            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              Selecting the wrong qualification code during online registration can invalidate your counseling application. Here is the official breakdown:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <strong className="text-emerald-400 block mb-1">Code 01: Class 12 Appearing</strong>
                <p className="text-slate-400">Students appearing for their Class 12 Board examination in 2027 whose result is awaited.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <strong className="text-emerald-400 block mb-1">Code 02: Class 12 Passed (Droppers)</strong>
                <p className="text-slate-400">Droppers/repeaters who have completed higher secondary (CBSE/ICSE/State Board) with PCB and English.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <strong className="text-emerald-400 block mb-1">Code 03: Intermediate / Pre-Degree</strong>
                <p className="text-slate-400">Students passing the intermediate/pre-degree examination in science of an Indian University/Board.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <strong className="text-emerald-400 block mb-1">Code 04 to 07: Professional / B.Sc</strong>
                <p className="text-slate-400">Candidates pursuing pre-professional courses, B.Sc degree (with PCB), or foreign school examination equivalents.</p>
              </div>
            </div>
          </section>

          {/* Interactive Mentor Conversion Funnel */}
          <SeoMentorFunnel examFocus="NEET" />

          {/* FAQ Section */}
          <section className="mt-16">
            <SeoFaqAccordion
              title="Frequently Asked Questions on NEET 2027 Schedule"
              subtitle="Clear facts on NTA notification, OMR strategy, safe scores, and medical counseling eligibility."
              faqs={faqs}
            />
          </section>

          {/* CTA Banner */}
          <section className="mt-16">
            <SeoCtaBanner
              title="Crack NEET 2027 with Guidance from AIIMS &amp; Top GMC Rankers"
              description="Hard-capped 30-student cohorts. Get weekly 1-on-1 strategy sessions, daily NCERT task verification, and mock error audits."
              primaryButtonText="Find Your Medico Mentor"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
