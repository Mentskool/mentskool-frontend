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
  title: "JEE Advanced 2027 Exam Date, Eligibility Criteria & Organizing IIT Schedule",
  description:
    "Complete schedule and eligibility guide for JEE Advanced 2027. Expected exam date (May 2027), Paper 1 & 2 timings, 75% board rule, 2-attempt limit, and 2-year preparation roadmap for IIT aspirants.",
  keywords: [
    "jee advanced 2027 exam date",
    "jee advanced 2027 eligibility criteria",
    "who will conduct jee advanced 2027",
    "jee advanced 2027 age limit and attempts",
    "75 percent criteria jee advanced 2027",
    "jee advanced 2027 syllabus and pattern",
    "jee advanced 2027 preparation plan",
  ],
  alternates: {
    canonical: "https://mentskool.com/jee-advanced-2027-exam-date",
  },
  openGraph: {
    title: "JEE Advanced 2027 Exam Date, Eligibility & Schedule",
    description:
      "Authoritative guide for JEE Advanced 2027 aspirants. Exam date predictions, session shifts, qualifying cutoffs, and 1-on-1 IITian mentorship roadmap.",
    url: "https://mentskool.com/jee-advanced-2027-exam-date",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "JEE Advanced 2027 Exam Date - Mentskool",
      },
    ],
  },
};

const faqs: FaqItem[] = [
  {
    question: "When is JEE Advanced 2027 expected to be conducted?",
    answer:
      "JEE Advanced 2027 is projected to be held on the third or fourth Sunday of May 2027 (tentatively May 23 or May 30, 2027). The exam consists of two mandatory computer-based papers: Paper 1 (09:00 AM to 12:00 PM) and Paper 2 (02:30 PM to 05:30 PM).",
  },
  {
    question: "Which IIT will conduct JEE Advanced 2027?",
    answer:
      "By the standard rotational calendar of the Joint Admission Board (JAB), JEE Advanced rotates among the older zonal IITs (IIT Bombay, IIT Delhi, IIT Madras, IIT Kanpur, IIT Kharagpur, IIT Roorkee, and IIT Guwahati). IIT Kharagpur or IIT Roorkee is next in line to organize the 2027 cycle.",
  },
  {
    question: "What is the number of attempts permitted for JEE Advanced 2027?",
    answer:
      "A candidate can attempt JEE Advanced a maximum of two times in two consecutive years. For JEE Advanced 2027, eligible candidates are those appearing for their Class 12 board examination in 2027 (first attempt) or those who completed Class 12 in 2026 (second attempt). Those who completed Class 12 in 2025 or earlier are not eligible.",
  },
  {
    question: "Is the 75% board aggregate criteria mandatory for JEE Advanced 2027?",
    answer:
      "Yes. To take admission into any IIT, candidates must secure at least 75% aggregate marks in their Class 12 board examination (65% for SC, ST, and PwD candidates), OR fall within the category-wise top 20 percentile of their respective state or national educational board.",
  },
  {
    question: "How many students qualify from JEE Main for JEE Advanced 2027?",
    answer:
      "Only the top 2,50,000 successful candidates (including all reserved categories) in the JEE Main 2027 Paper 1 Common Rank List (CRL) are declared qualified to register and appear for JEE Advanced 2027.",
  },
];

export default function JeeAdvanced2027ExamDatePage() {
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
        headline: "JEE Advanced 2027 Exam Date, Eligibility Criteria & Organizing IIT Schedule",
        description:
          "Authoritative guide for JEE Advanced 2027: exam dates, paper shifts, 75% board rule, attempt limits, and preparation milestones.",
        url: "https://mentskool.com/jee-advanced-2027-exam-date",
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
                label: "JEE Advanced 2027 Exam Date",
                href: "/jee-advanced-2027-exam-date",
              },
            ]}
          />

          {/* Hero Header */}
          <header className="mt-8 mb-12 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <Calendar className="w-4 h-4" />
              Targeting JEE 2027 Aspirants
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight">
              JEE Advanced 2027:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-sky-300 to-indigo-400">
                Exam Dates, Eligibility &amp; IIT Admission Roadmap
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Planning to crack the world&apos;s toughest undergraduate engineering examination in 2027? Get the complete breakdown of expected dates, rotational organizing institutes, 75% board eligibility rules, and high-yield preparation benchmarks.
            </p>
          </header>

          {/* Direct Answer Box */}
          <section className="mb-14 rounded-2xl border border-brand-500/30 bg-brand-950/20 backdrop-blur-md p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-brand-500/20 text-brand-400 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-brand-300 mb-2">
                  Key Timeline Snapshot: JEE Advanced 2027
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  JEE Advanced 2027 will be administered in the <strong className="text-white">third or fourth week of May 2027</strong>. Online registrations will open within 48 hours of the JEE Main 2027 Session 2 result declaration (tentatively late April 2027). The exam will feature two compulsory 3-hour sessions on the same Sunday: <strong className="text-brand-300">Paper 1 (9:00 AM - 12:00 PM)</strong> and <strong className="text-brand-300">Paper 2 (2:30 PM - 5:30 PM)</strong>.
                </p>
              </div>
            </div>
          </section>

          {/* Section 1: Official Expected Schedule */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Clock className="w-7 h-7 text-brand-400" />
              Projected JEE Advanced 2027 Event Timeline
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/60 my-6">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-800/80 text-slate-200 border-b border-slate-700 font-semibold">
                  <tr>
                    <th className="p-4">Event Milestone</th>
                    <th className="p-4">Expected Date / Window</th>
                    <th className="p-4">Authority Responsible</th>
                    <th className="p-4">Critical Action for Aspirants</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-bold text-white">JEE Main Session 2 Results Declared</td>
                    <td className="p-4 text-xs text-brand-300 font-mono">Last Week of April 2027</td>
                    <td className="p-4 text-xs">National Testing Agency (NTA)</td>
                    <td className="p-4 text-xs text-slate-400">Check if CRL is within top 2,50,000 qualifying cutoffs</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-bold text-white">JEE Advanced Registration Window</td>
                    <td className="p-4 text-xs text-brand-300 font-mono">Late April - Early May 2027</td>
                    <td className="p-4 text-xs">Organizing IIT / JAB</td>
                    <td className="p-4 text-xs text-slate-400">Submit choice of exam cities and pay registration fee</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-bold text-white">Admit Card Release</td>
                    <td className="p-4 text-xs text-brand-300 font-mono">Second Week of May 2027</td>
                    <td className="p-4 text-xs">Organizing IIT Portal</td>
                    <td className="p-4 text-xs text-slate-400">Verify test center, reporting time, and ID rules</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-bold text-emerald-400">JEE Advanced 2027 Exam Day</td>
                    <td className="p-4 text-xs font-mono text-emerald-300 font-bold">Mid/Late May 2027 (Sunday)</td>
                    <td className="p-4 text-xs">All Zonal IITs</td>
                    <td className="p-4 text-xs text-slate-300">Attempt Paper 1 (9 AM - 12 PM) &amp; Paper 2 (2:30 - 5:30 PM)</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-bold text-white">Provisional Answer Keys &amp; Candidate Responses</td>
                    <td className="p-4 text-xs text-brand-300 font-mono">First Week of June 2027</td>
                    <td className="p-4 text-xs">Organizing IIT</td>
                    <td className="p-4 text-xs text-slate-400">Match responses and submit objections if any</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-bold text-white">Final Result &amp; All India Ranks</td>
                    <td className="p-4 text-xs text-brand-300 font-mono">Mid-June 2027</td>
                    <td className="p-4 text-xs">Organizing IIT / JoSAA</td>
                    <td className="p-4 text-xs text-slate-400">JoSAA counseling choice filling begins</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: Eligibility Rules */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Award className="w-7 h-7 text-indigo-400" />
              The 5 Non-Negotiable Eligibility Criteria for JEE Advanced 2027
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-300">
              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-2">
                <h3 className="font-bold text-brand-300 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-400" />
                  1. JEE Main Performance Threshold
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Candidate must rank among the top 2,50,000 successful candidates in JEE Main 2027 Paper 1. Reservation splits roughly: General (40.5%), Gen-EWS (10%), OBC-NCL (27%), SC (15%), ST (7.5%), with 5% horizontal reservation for PwD.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-2">
                <h3 className="font-bold text-sky-300 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-sky-400" />
                  2. Strict 2-Attempt Consecutive Limit
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Candidates are permitted at most two attempts in consecutive years. You can appear in 2027 if 2027 is your first attempt (Class 12 in 2027) or second attempt (Class 12 in 2026). Third attempts are not permitted under any circumstances.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-2">
                <h3 className="font-bold text-teal-300 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-teal-400" />
                  3. 75% Board Aggregate Rule
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  For final seat allotment in IITs, candidates must secure at least 75% aggregate marks in Class 12 board examination (65% for SC/ST/PwD), OR be in the top 20 percentile of successful candidates in their respective board.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-2">
                <h3 className="font-bold text-emerald-300 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  4. Earlier IIT Admission Status
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  A candidate who was previously admitted to an IIT through JoSAA (whether they continued the program or later withdrew after joining) is ineligible to appear in JEE Advanced again.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: 2-Year Strategic Milestone Plan */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <TrendingUp className="w-7 h-7 text-emerald-400" />
              The 2027 Aspirant Master Roadmap (Class 11 &amp; 12 Milestones)
            </h2>
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-4 text-sm leading-relaxed text-slate-300">
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-slate-800/70 border border-slate-700">
                  <strong className="text-brand-300 block mb-1">Phase 1 (Class 11 Foundation):</strong>
                  Master Mechanics in Physics, Calculus fundamentals &amp; Algebra in Maths, and Chemical Bonding &amp; GOC in Chemistry. Ensure zero pending backlogs before entering Class 12.
                </div>
                <div className="p-4 rounded-xl bg-slate-800/70 border border-slate-700">
                  <strong className="text-sky-300 block mb-1">Phase 2 (Class 12 Syllabus Completion by Oct 2026):</strong>
                  Complete Electrodynamics, Modern Physics, Integral Calculus, and Organic Reaction Highways. Transition from single-concept Main problems to multi-concept Advanced questions.
                </div>
                <div className="p-4 rounded-xl bg-slate-800/70 border border-slate-700">
                  <strong className="text-emerald-300 block mb-1">Phase 3 (Nov 2026 - May 2027: Dual-Sprint Execution):</strong>
                  Sprint for JEE Main Session 1 in January 2027 to lock a 99+ percentile early. Once safe, pivot 100% of preparation time to full-length 6-hour Advanced mock testing on alternate Sundays.
                </div>
              </div>
            </div>
          </section>

          {/* Mentorship Funnel Callout */}
          <SeoMentorFunnel
            examFocus="JEE"
            title="Prepare for JEE Advanced 2027 Under Rankers from IIT Bombay &amp; Delhi"
            subtitle="Connect with mentors who cracked JEE Advanced with top AIRs. Build multi-concept problem-solving mastery and receive weekly 1-on-1 strategy calls."
          />

          {/* Section 4: FAQ Accordion */}
          <section className="my-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center justify-center gap-3">
                <HelpCircle className="w-7 h-7 text-brand-400" />
                Frequently Asked Questions: JEE Advanced 2027
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Key insights on attempt limits, organizing institute patterns, and board eligibility.
              </p>
            </div>
            <SeoFaqAccordion items={faqs} />
          </section>

          {/* Final Call to Action */}
          <SeoCtaBanner
            title="Start Your 2027 IIT Journey with Expert Guidance"
            subtitle="Book a free 1-on-1 strategy call with our top IITian mentors to audit your Class 11 progress, prevent backlogs, and construct an elite 2-year preparation plan."
            primaryBtnText="Claim Free Strategy Call"
            primaryBtnHref="/free-mentorship-session"
            secondaryBtnText="Explore Top IIT Mentors"
            secondaryBtnHref="/mentors"
          />
        </div>
      </main>
    </div>
  );
}
