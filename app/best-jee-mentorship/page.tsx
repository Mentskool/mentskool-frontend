import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Award,
  Layers,
  Target,
  Clock,
  BookOpen,
  Scale,
  CheckSquare,
  BarChart3,
  Flame,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { ProgramFeatures } from "@/components/seo/ProgramFeatures";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "Best Mentorship Program for JEE (Mains & Advanced 2026/2027) — The Definitive Selection Guide",
  description:
    "Looking for the best mentorship for JEE? Compare 1:1 ranker platforms vs mass coaching. Discover how Mentskool's IIT Bombay & Delhi mentors deliver 94% task accountability, mock test error audits, and backlog elimination.",
  keywords: [
    "best mentorship for JEE",
    "best mentorship program for JEE Mains and Advanced",
    "best JEE mentorship by IITians",
    "best mentorship for JEE droppers",
    "top JEE mentors online",
    "IIT JEE 1 on 1 personal mentor",
    "JEE 2026 mentorship",
    "JEE 2027 mentorship",
  ],
  alternates: {
    canonical: "https://mentskool.com/best-jee-mentorship",
  },
  openGraph: {
    title: "Best Mentorship for JEE Main & Advanced: The Complete Guide",
    description:
      "Why top aspirants choose verified IITian 1-on-1 mentorship over mass coaching batches. 94% verified efficiency score and strict 30-student cohort caps.",
    url: "https://mentskool.com/best-jee-mentorship",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Best Mentorship for JEE - Mentskool",
      },
    ],
  },
};

const jeeGuideFaqs: FaqItem[] = [
  {
    question: "What makes a JEE mentorship program truly effective?",
    answer:
      "An effective JEE mentorship program provides continuous 1-on-1 human accountability, not just prerecorded lectures or occasional calls. It must include personalized weekly study timetables, question-by-question mock test post-mortems to eliminate negative marks, daily tracking of solved problems on a dedicated dashboard, and direct strategic access to mentors from top IITs like IIT Bombay, IIT Delhi, or IIT Madras.",
  },
  {
    question: "Can I take Mentskool mentorship alongside coaching institutes like Allen, Resonance, or PW?",
    answer:
      "Yes! Over 70% of Mentskool mentees attend regular coaching classes. Mentskool acts as your personal execution partner: your mentor helps you prioritize coaching homework, creates a structured roadmap to clear old backlogs, and ensures you do not get lost in a batch of 100+ students.",
  },
  {
    question: "How does Mentskool compare with Mentor Prep, MentorKhoj, or PW Disha for JEE?",
    answer:
      "Unlike hourly gig marketplaces (MentorKhoj) where mentors disappear after 60 minutes, or pay-per-minute call hotlines (PW Disha) with random seniors, Mentskool pairs you with a dedicated IITian who tracks your daily preparation long-term. Unlike platforms with rigid annual lock-ins, Mentskool offers month-to-month flexibility, atomic cohort caps (maximum 30 students per mentor), and a real-time 94% efficiency dashboard.",
  },
  {
    question: "Is 1-on-1 mentorship recommended for JEE droppers and repeaters?",
    answer:
      "Yes, droppers benefit the most. In a drop year, subject lectures are usually familiar; the real challenge is overcoming isolation, test anxiety, and repeated mistakes. A dedicated IITian mentor builds a customized high-yield revision schedule and audits your mock tests every single week.",
  },
  {
    question: "How does the mentor verify that I actually solved the daily questions?",
    answer:
      "Students log solved problem counts and chapter topics into the Mentskool dashboard every evening. During your weekly 1:1 Google Meet call, mentors inspect your rough calculation books and test your conceptual understanding on randomly selected questions from your daily log.",
  },
  {
    question: "What qualifications do Mentskool mentors have?",
    answer:
      "100% of our JEE mentors are verified top rankers currently studying at or recently graduated from India's premier IITs: IIT Bombay, IIT Delhi, IIT Kanpur, IIT Kharagpur, IIT Madras, and IIT Roorkee.",
  },
];

export default function BestJeeMentorshipPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        name: "Mentskool Technologies",
        url: "https://mentskool.com",
        logo: "https://mentskool.com/logo.png",
        description:
          "India's premier 1-on-1 mentorship platform for JEE Main & Advanced aspirants with verified IIT rankers.",
      },
      {
        "@type": "Article",
        headline: "The Definitive Guide to the Best JEE Mentorship Programs in India",
        description:
          "A comprehensive breakdown of how 1-on-1 ranker mentorship outperforms mass coaching and hourly marketplaces.",
        author: {
          "@type": "Organization",
          name: "Mentskool",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: jeeGuideFaqs.map((faq) => ({
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
              { label: "Programs", href: "/jee-mentorship" },
              {
                label: "Best Mentorship for JEE",
                href: "/best-jee-mentorship",
              },
            ]}
          />

          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-xs font-semibold mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>The Definitive Selection Guide &amp; Platform Benchmark (2026/2027)</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Best Mentorship Program for <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-sky-300 to-indigo-400">JEE Mains &amp; Advanced</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              How top rankers crack IIT: Discover the critical difference between generic batch coaching and <strong>dedicated 1-on-1 ranker mentorship</strong> with daily task audits and 94% verified efficiency.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Find Your 1:1 IITian Mentor</span>
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
              <span>Executive Summary: What Defines The Best Mentorship Program for JEE?</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-5">
              The <strong>best JEE mentorship program</strong> is one that provides continuous 1-on-1 human accountability, daily problem-solving audits, and forensic mock test post-mortems conducted by verified recent IIT rankers. High-performing aspirants choose <strong>Mentskool</strong> for four unmatched advantages:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Verified IIT Bombay &amp; Delhi Mentors:</strong> Learn problem-solving shortcuts from seniors who personally mastered recent JEE Advanced exams.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>94% Daily Task Efficiency Dashboard:</strong> Live dashboard tracking completed question quotas every single day to eliminate procrastination.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Question-by-Question Mock Audits:</strong> Root-cause breakdown of calculation errors and negative marks after every full mock test.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Strict 30-Student Cohort Capping:</strong> Guaranteed personal attention with atomic concurrency limits and flexible month-to-month plans.</span>
              </div>
            </div>
          </section>

          {/* Section 1: The 6 Criteria for Choosing a JEE Mentorship Program */}
          <article className="my-16 prose prose-invert max-w-none">
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-brand-400" />
                  The 6 Non-Negotiable Criteria of an Elite JEE Mentorship Program
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-4">
                  With hundreds of coaching institutes and influencer courses advertising mentorship, use this 6-point checklist to evaluate whether a program will actually improve your rank:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-brand-500/20 text-brand-300 flex items-center justify-center text-xs font-bold">1</span>
                    Continuous Continuity vs Hourly Gigs
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                    Avoid platforms that sell 1-hour transactional slots with random seniors. You need a dedicated mentor who stays with you from month to month, knowing your exact psychological strengths, weak topics, and previous mock test mistakes.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-brand-500/20 text-brand-300 flex items-center justify-center text-xs font-bold">2</span>
                    Forensic Rough-Sheet Mock Test Audits
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                    Anyone can send you an answer key. An elite mentor inspects your actual scratch paper to see why your calculus integration broke down, why you misread unit terms, and how to stop bleeding 25+ negative marks.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-brand-500/20 text-brand-300 flex items-center justify-center text-xs font-bold">3</span>
                    Objective Daily Problem Verification
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                    Casual WhatsApp messages do not build discipline. You need a structured web dashboard where daily problem quotas are verified every evening, generating an objective efficiency metric (94% at Mentskool).
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-brand-500/20 text-brand-300 flex items-center justify-center text-xs font-bold">4</span>
                    Strict Capacity Capping per Mentor
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                    When mentors take 80–100 students, mentorship dissolves into mass coaching. Mentskool enforces strict atomic concurrency locks capping mentors at maximum 30 active mentees.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-brand-500/20 text-brand-300 flex items-center justify-center text-xs font-bold">5</span>
                    Direct Top IIT Pedigree (IIT Bombay/Delhi)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                    Ensure your mentor personally conquered the exam within the last 1–3 years. They understand the nuances of modern computer-based NTA question formats and multi-concept Advanced problems.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-brand-500/20 text-brand-300 flex items-center justify-center text-xs font-bold">6</span>
                    Zero Multi-Year Financial Trap
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                    Never sign non-refundable ₹1,00,000+ contracts before seeing results. Legitimate mentorship programs operate on flexible month-to-month plans with instant mentor switching.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Section 2: Platform Comparison Matrix */}
          <section className="my-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Comparing JEE Mentorship Platforms in India
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                How Mentskool stacks up against popular market alternatives:
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl">
              <table className="w-full text-left text-xs sm:text-sm text-slate-300">
                <thead className="bg-slate-950/80 text-white font-bold uppercase text-[11px] tracking-wider border-b border-slate-800">
                  <tr>
                    <th className="py-4 px-4 sm:px-6">Platform</th>
                    <th className="py-4 px-4 sm:px-6">Model</th>
                    <th className="py-4 px-4 sm:px-6">Accountability Tracking</th>
                    <th className="py-4 px-4 sm:px-6">Test Rough-Sheet Audits</th>
                    <th className="py-4 px-4 sm:px-6">Subscription Terms</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  <tr className="hover:bg-slate-800/30 bg-brand-500/10 border-l-4 border-brand-500">
                    <td className="py-4 px-4 sm:px-6 font-extrabold text-white">Mentskool</td>
                    <td className="py-4 px-4 sm:px-6 text-emerald-300 font-bold">Dedicated 1:1 IITian + Micro Cohorts</td>
                    <td className="py-4 px-4 sm:px-6 text-emerald-300 font-bold">Daily Web Dashboard (94% Score)</td>
                    <td className="py-4 px-4 sm:px-6 text-emerald-300 font-bold">Weekly 1:1 Question-by-Question</td>
                    <td className="py-4 px-4 sm:px-6 text-emerald-300 font-bold">Month-to-Month (Cancel Anytime)</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white">MentorKhoj</td>
                    <td className="py-4 px-4 sm:px-6">Hourly Marketplace (All Exams)</td>
                    <td className="py-4 px-4 sm:px-6 text-rose-400">Zero continuous tracking</td>
                    <td className="py-4 px-4 sm:px-6 text-rose-400">Paid per hour</td>
                    <td className="py-4 px-4 sm:px-6">Pay-per-session</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white">Mentor Prep</td>
                    <td className="py-4 px-4 sm:px-6">Daily Wakeup Call Schedule</td>
                    <td className="py-4 px-4 sm:px-6">Phone calls &amp; WhatsApp</td>
                    <td className="py-4 px-4 sm:px-6 text-amber-400">Basic score check</td>
                    <td className="py-4 px-4 sm:px-6">Bundled multi-month</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white">PW Disha</td>
                    <td className="py-4 px-4 sm:px-6">Pay-per-minute Call App</td>
                    <td className="py-4 px-4 sm:px-6 text-rose-400">Zero assigned continuity</td>
                    <td className="py-4 px-4 sm:px-6 text-rose-400">Random advisor per call</td>
                    <td className="py-4 px-4 sm:px-6">Wallet recharge per minute</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white">eSaral</td>
                    <td className="py-4 px-4 sm:px-6">Bundled Video Course</td>
                    <td className="py-4 px-4 sm:px-6">Multi-tiered counselor structure</td>
                    <td className="py-4 px-4 sm:px-6">Automated app analytics</td>
                    <td className="py-4 px-4 sm:px-6 text-rose-400">Full annual course lock-in</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Program Features Component */}
          <section className="my-16">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                The 4 Pillars of the Mentskool Mentorship Engine
              </h2>
              <p className="text-slate-400 text-sm mt-2">
                Lectures explain the concept. Mentorship guarantees the execution.
              </p>
            </div>
            <ProgramFeatures />
          </section>

          {/* FAQs */}
          <section className="mt-16">
            <SeoFaqAccordion
              faqs={jeeGuideFaqs}
              title="Frequently Asked Questions: Choosing The Best JEE Mentorship"
              subtitle="Everything you need to know about ranker mentorship, pricing, and routine integration."
            />
          </section>

          {/* CTA Banner */}
          <section className="mt-16">
            <SeoCtaBanner
              title="Transform Your JEE Preparation Today"
              description="Get paired with a verified top ranker from IIT Bombay, Delhi, or Madras. Build your weekly target sheet and watch your mock test accuracy soar."
              primaryButtonText="Find Your IIT Mentor"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
