import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Layers,
  Scale,
  Award,
  AlertCircle,
  HelpCircle,
  BookOpen,
  UserCheck,
  GraduationCap,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "Mentor vs Coaching for JEE & NEET — Do You Really Need a Mentor?",
  description:
    "Should you rely solely on coaching or do you need a 1-on-1 mentor for JEE and NEET? The definitive 10-point decision guide explaining why coaching teaches theory, but mentors guarantee daily execution and rank outcomes.",
  keywords: [
    "mentor vs coaching for JEE NEET",
    "do I need a mentor for JEE",
    "why coaching is not enough for NEET",
    "self study with mentor vs coaching",
    "IIT JEE personal mentorship comparison",
    "benefits of 1 on 1 mentor for JEE NEET",
  ],
  alternates: {
    canonical: "https://mentskool.com/mentor-vs-coaching-for-jee-neet",
  },
  openGraph: {
    title: "Mentor vs Coaching for JEE & NEET: The Definitive Decision Guide",
    description:
      "Understand why 90% of students enrolled in top coaching institutes still fail to clear cutoffs without personal 1-on-1 human accountability.",
    url: "https://mentskool.com/mentor-vs-coaching-for-jee-neet",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Mentor vs Coaching - Mentskool",
      },
    ],
  },
};

const comparisonFaqs: FaqItem[] = [
  {
    question: "Does having a mentor replace the need for coaching classes?",
    answer:
      "Not necessarily, though it depends on your current stage. Coaching institutes excel at syllabus delivery—providing lectures, structured classroom theory, and printed study modules. However, coaching cannot monitor your daily study execution, your rough-sheet mistakes, your backlogs, or your emotional fatigue. A mentor is your execution partner. For droppers and repeaters who already know the theory, a mentor + self-study is often far more effective than re-attending 6 hours of daily lectures.",
  },
  {
    question: "Why do over 90% of students in prestigious coaching institutes still fail to qualify?",
    answer:
      "Because entrance exams are not tests of how much information you heard; they are tests of problem-solving speed, stamina, and accuracy. When a teacher lectures to 150 students, they move at the pace of the top 5 students. The remaining 145 students nod along passively, accumulate hidden backlogs, never get their rough sheets audited, and panic during mock tests. Mentorship bridges this exact gap.",
  },
  {
    question: "Can I use Mentskool mentorship alongside my existing offline coaching (Allen, Aakash, Resonance)?",
    answer:
      "Yes! Over 70% of Mentskool students are enrolled in offline or online coaching. Your mentor acts as your personal navigator: they structure your daily timetable around your coaching classes, prioritize your module homework, and ensure you clear old backlogs in dedicated 90-minute evening slots.",
  },
  {
    question: "What is the difference between a coaching doubt faculty and a personal mentor?",
    answer:
      "A coaching doubt counter is purely transactional: you stand in line, ask how to solve Question 14, the teacher solves it on paper, and you walk away. A personal mentor asks: 'Why did you miss Question 14? Is your concept of rotational equilibrium weak? Why did you spend 7 minutes on it during the test? Let's check your rough sheet and assign 10 drill questions.' Mentorship diagnoses the underlying illness rather than just giving a temporary aspirin.",
  },
  {
    question: "Who are the mentors on Mentskool?",
    answer:
      "Every mentor is a verified top ranker from premier institutions: IIT Bombay, IIT Delhi, IIT Madras, IIT Kanpur for JEE, or AIIMS New Delhi and top Government Medical Colleges for NEET. They cleared the exact same exam within the last 1–3 years and understand modern NTA question trends intimately.",
  },
];

export default function MentorVsCoachingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        name: "Mentskool Technologies",
        url: "https://mentskool.com",
        logo: "https://mentskool.com/logo.png",
        description:
          "India's premier 1-on-1 mentorship platform for competitive exams.",
      },
      {
        "@type": "Article",
        headline: "Mentor vs Coaching for JEE & NEET: The Definitive Guide",
        description:
          "Why coaching teaches theory but 1-on-1 mentors ensure daily study execution and high exam ranks.",
        author: {
          "@type": "Organization",
          name: "Mentskool",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: comparisonFaqs.map((faq) => ({
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
              { label: "Guides", href: "/jee-mentorship" },
              {
                label: "Mentor vs Coaching",
                href: "/mentor-vs-coaching-for-jee-neet",
              },
            ]}
          />

          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-xs font-semibold mb-4">
              <Scale className="w-3.5 h-3.5" />
              <span>Strategic Preparation Comparison Guide</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Mentor vs Coaching for JEE &amp; NEET: <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-sky-300 to-indigo-400">Do You Really Need a Mentor?</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              You are already attending 6 hours of coaching classes and have piles of study modules. Why are your mock scores still stagnant? Discover why <strong>coaching teaches theory, but 1-on-1 mentors engineer daily rank execution</strong>.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Find Your 1:1 Ranker Mentor</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/free-mentorship-session"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all"
              >
                Claim Free Strategy Session
              </Link>
            </div>
          </div>

          {/* Direct Answer Box for AI Overviews & Search Snippets */}
          <section className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-brand-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-400 mb-3">
              <Sparkles className="w-4 h-4 text-brand-400" />
              <span>Core Distinction: Coaching vs 1-on-1 Mentorship</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-5">
              The fundamental difference comes down to <strong>Content Delivery vs Personal Execution</strong>:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" />
                <span><strong>Coaching (The Engine):</strong> Delivers comprehensive lectures, syllabus pacing, and test questions to a batch of 80 to 150 students simultaneously.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" />
                <span><strong>Mentorship (The Steering Wheel):</strong> Monitors YOUR individual daily problem quota, audits YOUR rough sheets, fixes YOUR specific backlogs, and eliminates YOUR negative marks.</span>
              </div>
            </div>
          </section>

          {/* Section 1: The 10-Point Comparison Table */}
          <section className="my-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                The 10-Point Operational Comparison
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                How classroom coaching and 1-on-1 mentorship compare across everyday preparation dimensions.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl">
              <table className="w-full text-left text-xs sm:text-sm text-slate-300">
                <thead className="bg-slate-950/80 text-white font-bold uppercase text-[11px] tracking-wider border-b border-slate-800">
                  <tr>
                    <th className="py-4 px-4 sm:px-6">Preparation Dimension</th>
                    <th className="py-4 px-4 sm:px-6 text-rose-400">Classroom Coaching (Mass Batch)</th>
                    <th className="py-4 px-4 sm:px-6 text-emerald-400">1-on-1 Ranker Mentorship (Mentskool)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white">Student to Teacher Ratio</td>
                    <td className="py-4 px-4 sm:px-6">80 to 180 students per classroom</td>
                    <td className="py-4 px-4 sm:px-6 text-emerald-300 font-bold">1-on-1 Private Video Sessions</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white">Daily Homework Verification</td>
                    <td className="py-4 px-4 sm:px-6">Zero (Self-reported or spot check only)</td>
                    <td className="py-4 px-4 sm:px-6 text-emerald-300 font-bold">Daily problem count audited on dashboard (94% score)</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white">Mock Test Error Analysis</td>
                    <td className="py-4 px-4 sm:px-6">Automated percentile &amp; answer key only</td>
                    <td className="py-4 px-4 sm:px-6 text-emerald-300 font-bold">Forensic rough-sheet inspection &amp; negative mark audit</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white">Backlog Elimination Strategy</td>
                    <td className="py-4 px-4 sm:px-6">Ignored (Teachers continue moving forward)</td>
                    <td className="py-4 px-4 sm:px-6 text-emerald-300 font-bold">Custom 3-Box Triage &amp; 90-min nightly recovery slots</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white">Timetable Pacing</td>
                    <td className="py-4 px-4 sm:px-6">One rigid schedule for the entire batch</td>
                    <td className="py-4 px-4 sm:px-6 text-emerald-300 font-bold">Living weekly timetable tailored to your school/sleep rhythm</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white">Mental Health &amp; Exam Anxiety</td>
                    <td className="py-4 px-4 sm:px-6">Generic group motivation speeches</td>
                    <td className="py-4 px-4 sm:px-6 text-emerald-300 font-bold">Continuous 1:1 empathy from a mentor who survived it</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white">Financial Flexibility</td>
                    <td className="py-4 px-4 sm:px-6">₹1,50,000+ non-refundable annual payment</td>
                    <td className="py-4 px-4 sm:px-6 text-emerald-300 font-bold">Flexible month-to-month plans; cancel anytime</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: Which Approach Fits You? */}
          <section className="my-16 bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800 rounded-3xl p-8 sm:p-12">
            <div className="max-w-3xl mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Which Preparation Setup Is Right for You?
              </h2>
              <p className="text-slate-300 text-sm mt-2">
                Evaluate your current preparation scenario to pick the highest-ROI model:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="text-sky-400 font-bold text-xs uppercase tracking-wider">Scenario A: Dropper / Repeater</div>
                <h3 className="text-lg font-bold text-white">Self-Study + 1:1 Mentor</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  You already know 80% of the theory from last year. Re-watching 6 hours of coaching lectures every day is a waste of time. Focus on 10 hours of daily self-study, mocks, and an IITian mentor to audit mistakes.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="text-brand-400 font-bold text-xs uppercase tracking-wider">Scenario B: Class 11 &amp; 12 in Coaching</div>
                <h3 className="text-lg font-bold text-white">Coaching + 1:1 Mentor</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Attend coaching lectures to learn concepts, but have a personal mentor to ensure you finish module questions, clear backlogs, and prevent negative marking in coaching test series.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="text-emerald-400 font-bold text-xs uppercase tracking-wider">Scenario C: Self-Directed Online Learner</div>
                <h3 className="text-lg font-bold text-white">PW/YouTube + 1:1 Mentor</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Learn from affordable online video lectures, but pair with an IIT/AIIMS mentor to provide the strict human accountability and test post-mortems that recorded videos can never provide.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Accordion */}
          <section className="mt-16">
            <SeoFaqAccordion
              faqs={comparisonFaqs}
              title="Frequently Asked Questions: Mentor vs Coaching"
              subtitle="Everything you need to know about deciding between coaching and 1:1 mentorship."
            />
          </section>

          {/* CTA Banner */}
          <section className="mt-16">
            <SeoCtaBanner
              title="Add a 1:1 IITian Steering Wheel to Your Preparation"
              description="Get a personalized study timetable, daily task accountability, and weekly mock error post-mortems. Start with a flexible monthly plan."
              primaryButtonText="Find Your 1:1 Mentor"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
