import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Target,
  BarChart3,
  BookOpen,
  Award,
  AlertTriangle,
  TrendingUp,
  GraduationCap,
  Layers,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { ProgramFeatures } from "@/components/seo/ProgramFeatures";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "Class 11 & 12 Foundation Mentorship — Balance Board Exams & JEE/NEET",
  description:
    "Master Class 11-12 school board exams while building an ironclad foundation for JEE & NEET. 1:1 mentorship from top IIT and AIIMS rankers with synchronized dual-track study schedules.",
  keywords: [
    "Class 11 JEE foundation mentorship",
    "Class 12 board and entrance management",
    "balance board exam and JEE NEET",
    "foundation mentorship IIT AIIMS",
    "Class 11 backlog clearance",
  ],
  alternates: {
    canonical: "https://mentskool.com/class-11-12-mentorship",
  },
  openGraph: {
    title: "Class 11 & 12 Foundation Mentorship | Mentskool",
    description:
      "Dual-track roadmaps for school exams and entrance ranks from mentors who scored 95%+ in boards and cracked top AIR ranks.",
    url: "https://mentskool.com/class-11-12-mentorship",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Mentskool Class 11 12 Mentorship",
      },
    ],
  },
};

const schoolFaqs: FaqItem[] = [
  {
    question: "How do mentors help balance School Boards and JEE/NEET?",
    answer:
      "Our mentors design synchronized dual-track timetables. Because NCERT is the core foundation for both board exams and national competitive tests, we teach students how board subjective answers and competitive MCQs reinforce each other rather than conflict.",
  },
  {
    question: "What if I have heavy Class 11 backlogs starting Class 12?",
    answer:
      "Backlogs are completely normal! Your mentor creates a prioritized backlog-clearing schedule (dedicating 5-7 hours per week to high-yield Class 11 topics like Mechanics, Organic Basics, and Chemical Bonding) without interrupting your ongoing Class 12 curriculum.",
  },
  {
    question: "Can parents communicate with the mentor?",
    answer:
      "Yes. Parents receive milestone progress summaries and can join scheduled roadmap check-ins to stay updated on efficiency scores and test performance.",
  },
  {
    question: "Are Mentskool mentors familiar with CBSE and State Board syllabi?",
    answer:
      "Yes. All mentors scored 95%+ in their Class 10 and 12 boards alongside cracking JEE Advanced / NEET. They provide exact guidance on derivation writing, presentation tips, and school lab requirements.",
  },
  {
    question: "How many hours of daily self-study are expected for Class 11 and 12?",
    answer:
      "For school-going students, 5.5 to 6.5 disciplined hours daily (including coaching homework and revision) is the ideal range that guarantees top ranks without burnout.",
  },
];

export default function Class1112MentorshipPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        name: "Mentskool Technologies",
        url: "https://mentskool.com",
        logo: "https://mentskool.com/logo.png",
        description:
          "India's premier 1-on-1 foundation mentorship platform for Class 11 & 12 students.",
      },
      {
        "@type": "FAQPage",
        mainEntity: schoolFaqs.map((faq) => ({
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
                label: "Class 11 & 12 Foundation",
                href: "/class-11-12-mentorship",
              },
            ]}
          />

          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Class 11 &amp; 12 Foundation &amp; Board Synchronization</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Class 11 &amp; 12 Mentorship: <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-blue-400">Score 95%+ in Boards &amp; Crack JEE/NEET</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              You do not have to sacrifice board examination marks to prepare for competitive entrance tests. Learn how verified <strong>IIT &amp; AIIMS rankers</strong> balance school practicals, derivations, and high-speed MCQ solving.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-600 hover:from-indigo-700 hover:to-blue-700 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Find Your Foundation Mentor</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/free-mentorship-session"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all"
              >
                Claim Free Foundation Strategy Call
              </Link>
            </div>
          </div>

          {/* Direct Answer Box for AI Overviews & Search Snippets */}
          <section className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-indigo-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-indigo-400 mb-3">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span>Executive Summary: The Dual-Track Synchronization System</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-5">
              The <strong>Mentskool Foundation Mentorship Framework</strong> synchronizes school academics with competitive rigor through four core pillars:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                <span><strong>Dual-Track Synchronization:</strong> Study NCERT theory once; practice both board subjective answers and competitive MCQs simultaneously.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                <span><strong>Zero-Backlog Quarantine:</strong> Isolate Class 11 backlogs into dedicated weekend sprints without interrupting Class 12 school curriculum.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                <span><strong>Pre-Board &amp; Practical Protection:</strong> Mentors recalibrate weekly task quotas during school exam cycles to prevent academic stress.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                <span><strong>94% Daily Task Efficiency Dashboard:</strong> Submit completed problem and chapter counts daily for mentor tracking.</span>
              </div>
            </div>
          </section>

          {/* Program Features Component */}
          <section className="my-16">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                The 4 Pillars of Foundation Mentorship
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
              faqs={schoolFaqs}
              title="Frequently Asked Questions: Foundation Mentorship"
              subtitle="Everything you need to know about balancing school boards, JEE/NEET prep, and 1:1 guidance."
            />
          </section>

          {/* CTA Banner */}
          <section className="mt-16">
            <SeoCtaBanner
              title="Build a World-Class Foundation for JEE &amp; NEET"
              description="Work 1-on-1 with an IITian or AIIMS doctor who will synchronize your school boards and competitive exam prep on a flexible monthly plan."
              primaryButtonText="Find Your Foundation Mentor"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
