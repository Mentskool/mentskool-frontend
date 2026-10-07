import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  CalendarCheck,
  CheckCircle,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { ProgramFeatures } from "@/components/seo/ProgramFeatures";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "Class 11 & 12 Foundation Mentorship — Balance Board Exams & JEE/NEET",
  description:
    "Master Class 11-12 school board exams while building an ironclad foundation for JEE & NEET. 1:1 mentorship from top IIT and AIIMS rankers with dual-track study schedules.",
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
      "Our mentors design synchronized dual-track timetables. Because NCERT is the foundation for both board exams and national competitive tests, we teach students how board subjective answers and competitive MCQs reinforce each other rather than conflict.",
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
];

export default function Class1112MentorshipPage() {
  return (
    <div className="w-full bg-[#EBF3FB] min-h-screen">
      {/* Hero */}
      <div className="relative overflow-hidden pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <HeroGridBackground />
        <div className="max-w-6xl mx-auto relative z-10">
          <SeoBreadcrumbs items={[{ label: "Programs", href: "/#how-it-works" }, { label: "Class 11 & 12 Foundation" }]} />

          <div className="text-center max-w-3xl mx-auto space-y-6 pt-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-indigo-200 text-indigo-900 text-xs font-bold uppercase tracking-wider shadow-soft">
              <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
              <span>Class 11 &amp; 12 Foundation &amp; Board Synchronization</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display text-ink tracking-tight leading-[1.1]">
              Score 95%+ in School Boards While Cracking{" "}
              <span className="bg-gradient-to-r from-indigo-700 via-blue-600 to-sky-500 bg-clip-text text-transparent">
                Top JEE &amp; NEET Ranks
              </span>
            </h1>

            <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-2xl mx-auto">
              No more panic about school attendance, practicals, or pre-boards. Get a tailored weekly roadmap from mentors who mastered school exams and entrance competition simultaneously.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 max-w-2xl mx-auto pt-2">
              <div className="p-3.5 rounded-2xl bg-white/90 border border-indigo-100 shadow-soft text-center">
                <div className="text-2xl font-black font-display text-indigo-700">Dual-Track</div>
                <div className="text-[11px] font-semibold text-ink-muted mt-0.5">Board + Entrance Sync</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/90 border border-blue-100 shadow-soft text-center">
                <div className="text-2xl font-black font-display text-blue-600">Zero Backlog</div>
                <div className="text-[11px] font-semibold text-ink-muted mt-0.5">Targeted Clearance</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/90 border border-emerald-100 shadow-soft text-center">
                <div className="text-2xl font-black font-display text-emerald-600">30 Max</div>
                <div className="text-[11px] font-semibold text-ink-muted mt-0.5">Students / Cohort</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/90 border border-amber-100 shadow-soft text-center">
                <div className="text-2xl font-black font-display text-amber-600">1:1 GMeet</div>
                <div className="text-[11px] font-semibold text-ink-muted mt-0.5">Weekly Calls</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 hover:from-indigo-700 hover:to-blue-700 text-white shadow-elevated hover:shadow-card hover:-translate-y-0.5 transition-all group"
              >
                <span>Find Your Foundation Mentor</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/#how-it-works"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-white/90 hover:bg-white border border-mist text-ink shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Details */}
      <div className="w-full bg-white rounded-t-[44px] border-t border-mist py-16 px-4 sm:px-6 lg:px-8 shadow-soft">
        <div className="max-w-6xl mx-auto space-y-16">
          <ProgramFeatures
            heading="Master Foundation Concepts Early — Avoid Drop Year Regrets"
            subheading="Over 70% of JEE & NEET syllabus stems directly from Class 11. Build unshakable concepts today."
          />

          <SeoFaqAccordion
            title="Class 11 & 12 Mentorship FAQs"
            subtitle="Guidance for school students and parents."
            faqs={schoolFaqs}
          />

          <SeoCtaBanner
            title="Start Building Your JEE & NEET Foundation with Top Rankers"
            description="Personal attention, weekly accountability scores, and complete freedom to switch mentors anytime."
            primaryButtonText="Explore Mentors"
            primaryButtonHref="/mentors"
          />
        </div>
      </div>
    </div>
  );
}
