import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  GraduationCap,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  Clock,
  Layers,
  Award,
  TrendingUp,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { SeoMentorFunnel } from "@/components/seo/SeoMentorFunnel";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "NTA Exam Calendar 2027: JEE Main, NEET UG & CUET Official Dates & Annual Schedule",
  description:
    "Official predicted schedule for NTA 2027 examinations. Complete calendar for JEE Main 2027 (Session 1 & 2), NEET UG 2027, and CUET UG. Registration windows, admit cards, and policy changes.",
  keywords: [
    "nta exam calendar 2027",
    "jee main 2027 exam calendar",
    "neet 2027 exam schedule",
    "nta annual exam schedule 2027",
    "cuet 2027 exam dates",
    "nta jee neet 2027 dates notification",
    "upcoming exam dates 2027 aspirants",
  ],
  alternates: {
    canonical: "https://mentskool.com/nta-2027-exam-calendar-jee-neet",
  },
  openGraph: {
    title: "NTA 2027 Exam Calendar: JEE Main, NEET & CUET Official Dates",
    description:
      "A single master calendar covering all NTA 2027 entrance exams. Expected registration deadlines, exam shifts, syllabus updates, and preparation schedules for 2027 aspirants.",
    url: "https://mentskool.com/nta-2027-exam-calendar-jee-neet",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "NTA 2027 Exam Calendar - Mentskool",
      },
    ],
  },
};

const faqs: FaqItem[] = [
  {
    question: "When does NTA release its annual examination calendar for 2027?",
    answer:
      "The National Testing Agency (NTA) traditionally releases its consolidated annual examination calendar in September or October of the preceding year (September/October 2026 for the 2027 academic session). This notification outlines the exact date brackets for JEE Main Session 1 & 2, NEET UG, and CUET UG.",
  },
  {
    question: "What are the predicted dates for JEE Main 2027 Session 1 and Session 2?",
    answer:
      "JEE Main 2027 Session 1 is scheduled for late January 2027 (tentatively January 22 to January 31, 2027), with online registrations running from late October through late November 2026. Session 2 is scheduled for early April 2027 (tentatively April 1 to April 10, 2027), with applications opening in early February 2027.",
  },
  {
    question: "What is the expected date for NEET UG 2027?",
    answer:
      "NEET UG is by convention held on the first Sunday of May every year. For the 2027 cycle, NEET UG is expected to take place on Sunday, May 2, 2027, from 02:00 PM to 05:20 PM as a single-shift nationwide test.",
  },
  {
    question: "Will NTA offer optional questions in Section B for 2027 exams?",
    answer:
      "No. The COVID-era concession of offering 10 numerical questions with the choice to attempt any 5 has been permanently phased out by NTA. Both JEE Main and NEET will feature standard non-optional question patterns, requiring comprehensive syllabus coverage across all subjects.",
  },
  {
    question: "How should Class 11 students targeting 2027 plan their syllabus completion?",
    answer:
      "Aspirants targeting 2027 should aim to finish their Class 11 syllabus with thorough problem practice by January 2026. Class 12 syllabus should be started in March 2026 and completed by October 2026. This allows two full months (November and December 2026) for intensive full-length mock testing before Session 1.",
  },
];

export default function Nta2027ExamCalendarPage() {
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
        headline: "NTA Exam Calendar 2027: JEE Main, NEET UG & CUET Official Dates & Annual Schedule",
        description:
          "Authoritative annual schedule and date predictions for NTA 2027 entrance examinations: JEE Main, NEET UG, and CUET.",
        url: "https://mentskool.com/nta-2027-exam-calendar-jee-neet",
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
                label: "NTA 2027 Exam Calendar",
                href: "/nta-2027-exam-calendar-jee-neet",
              },
            ]}
          />

          {/* Hero Header */}
          <header className="mt-8 mb-12 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <Calendar className="w-4 h-4" />
              Official NTA Schedule Intelligence
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight">
              NTA Exam Calendar 2027:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-sky-300 to-indigo-400">
                JEE Main, NEET UG &amp; CUET Timelines
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Your consolidated guide to every national entrance examination in 2027. Review registration dates, examination windows, admit card dispatches, and policy reforms to build an airtight 2-year preparation strategy.
            </p>
          </header>

          {/* Direct Answer Box */}
          <section className="mb-14 rounded-2xl border border-brand-500/30 bg-brand-950/20 backdrop-blur-md p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-brand-500/20 text-brand-400 shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-brand-300 mb-2">
                  At-A-Glance: Master 2027 Examination Sequence
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  The 2027 entrance exam cycle kicks off with <strong className="text-white">JEE Main Session 1 (Jan 22-31, 2027)</strong>, followed by <strong className="text-brand-300">Class 12 Boards (Feb-March 2027)</strong>, <strong className="text-white">JEE Main Session 2 (April 1-10, 2027)</strong>, <strong className="text-emerald-300">NEET UG 2027 (Sunday, May 2, 2027)</strong>, and <strong className="text-white">JEE Advanced (late May 2027)</strong>. Planning around this sequence ensures zero clash between board practicals and competitive testing.
                </p>
              </div>
            </div>
          </section>

          {/* Section 1: Consolidated Calendar Table */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Layers className="w-7 h-7 text-brand-400" />
              Consolidated NTA 2027 Entrance Exam Calendar
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/60 my-6">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-800/80 text-slate-200 border-b border-slate-700 font-semibold">
                  <tr>
                    <th className="p-4">Examination</th>
                    <th className="p-4">Application Window</th>
                    <th className="p-4">Expected Exam Date</th>
                    <th className="p-4">Format / Mode</th>
                    <th className="p-4">Result Declaration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-bold text-white">JEE Main 2027 (Session 1)</td>
                    <td className="p-4 text-xs font-mono text-brand-300">Late Oct - Late Nov 2026</td>
                    <td className="p-4 text-xs text-white font-bold">Jan 22 - Jan 31, 2027</td>
                    <td className="p-4 text-xs">Computer-Based (CBT)</td>
                    <td className="p-4 text-xs text-emerald-400 font-mono">Mid-February 2027</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-bold text-white">JEE Main 2027 (Session 2)</td>
                    <td className="p-4 text-xs font-mono text-brand-300">Early Feb - Early March 2027</td>
                    <td className="p-4 text-xs text-white font-bold">April 1 - April 10, 2027</td>
                    <td className="p-4 text-xs">Computer-Based (CBT)</td>
                    <td className="p-4 text-xs text-emerald-400 font-mono">Late April 2027 (AIR List)</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-bold text-emerald-400">NEET UG 2027</td>
                    <td className="p-4 text-xs font-mono text-emerald-300">Early Feb - Mid-March 2027</td>
                    <td className="p-4 text-xs text-white font-bold">May 2, 2027 (First Sunday)</td>
                    <td className="p-4 text-xs">Pen &amp; Paper (OMR)</td>
                    <td className="p-4 text-xs text-emerald-400 font-mono">Early June 2027</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-bold text-white">JEE Advanced 2027</td>
                    <td className="p-4 text-xs font-mono text-brand-300">Late April - Early May 2027</td>
                    <td className="p-4 text-xs text-white font-bold">May 23 or May 30, 2027</td>
                    <td className="p-4 text-xs">Computer-Based (Two 3-Hr Papers)</td>
                    <td className="p-4 text-xs text-emerald-400 font-mono">Mid-June 2027</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-bold text-white">CUET UG 2027</td>
                    <td className="p-4 text-xs font-mono text-brand-300">Late Feb - Late March 2027</td>
                    <td className="p-4 text-xs text-white font-bold">Mid-May to Early June 2027</td>
                    <td className="p-4 text-xs">Hybrid (CBT / Pen-Paper)</td>
                    <td className="p-4 text-xs text-emerald-400 font-mono">Late June 2027</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: Critical NTA Policy Changes */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <ShieldCheck className="w-7 h-7 text-indigo-400" />
              Major NTA Policy Rules Every 2027 Aspirant Must Know
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-300">
              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-2">
                <strong className="text-brand-300 block text-base">Permanent Abolition of Optional Questions</strong>
                <p className="text-xs leading-relaxed text-slate-300">
                  Section B in JEE Main will feature strictly 5 numerical questions per subject with zero optional choices. In NEET, all 180 questions must be attempted without internal section choices. You cannot skip difficult chapters like Rotational Dynamics or Genetics.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-2">
                <strong className="text-sky-300 block text-base">Aadhaar Biometric Verification &amp; APAAR ID</strong>
                <p className="text-xs leading-relaxed text-slate-300">
                  NTA mandates direct DigiLocker or Aadhaar-based authentication during form submission to prevent impersonation. Ensure your name and date of birth on your Class 10 marksheet match your Aadhaar record identically.
                </p>
              </div>
            </div>
          </section>

          {/* Mentorship Funnel Callout */}
          <SeoMentorFunnel
            examFocus="BOTH"
            title="Build Your 2027 Preparation Timeline with IIT &amp; AIIMS Mentors"
            subtitle="Don't leave your exam dates to chance. Get 1-on-1 cohort guidance, weekly timetable reviews, and mock error auditing from mentors who conquered these exams."
          />

          {/* Section 3: FAQ Accordion */}
          <section className="my-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center justify-center gap-3">
                <HelpCircle className="w-7 h-7 text-brand-400" />
                Frequently Asked Questions: NTA 2027 Calendar
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Answers to key scheduling, shift allocation, and policy inquiries.
              </p>
            </div>
            <SeoFaqAccordion items={faqs} />
          </section>

          {/* Final Call to Action */}
          <SeoCtaBanner
            title="Start Your 2027 Preparation on the Right Foot"
            subtitle="Connect with our top IIT and AIIMS mentors for a customized 2-year preparation plan tailored to the 2027 examination cycle."
            primaryBtnText="Claim Free Mentorship Call"
            primaryBtnHref="/free-mentorship-session"
            secondaryBtnText="Explore All Mentors"
            secondaryBtnHref="/mentors"
          />
        </div>
      </main>
    </div>
  );
}
