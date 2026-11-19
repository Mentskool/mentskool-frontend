import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  AlertTriangle,
  Building2,
  GraduationCap,
  Scale,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { SeoMentorFunnel } from "@/components/seo/SeoMentorFunnel";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "Do I Need a JEE/NEET Mentor? 10-Minute Honest Self-Check | Mentskool",
  description:
    "Already enrolled in coaching or self-studying? Take our honest 10-minute self-check to see if a 1:1 JEE or NEET mentor will genuinely help you, or if you can safely skip it.",
  keywords: [
    "do i need a mentor for jee",
    "can i crack jee without mentor",
    "is jee mentorship worth it",
    "mentor if already in allen or pw",
    "do i need neet mentorship",
    "is 1 on 1 mentorship worth the money",
  ],
  alternates: {
    canonical: "https://mentskool.com/do-i-need-a-jee-neet-mentor",
  },
  openGraph: {
    title: "Do You Actually Need a JEE/NEET Mentor? An Honest Self-Check",
    description:
      "Cut through coaching marketing hype. A candid breakdown of who genuinely benefits from a ranker mentor, and who should save their money.",
    url: "https://mentskool.com/do-i-need-a-jee-neet-mentor",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Do I Need a JEE NEET Mentor - Mentskool",
      },
    ],
  },
};

const faqs: FaqItem[] = [
  {
    question: "I am already enrolled in Allen / PW / Aakash. Why would I need a mentor?",
    answer:
      "Coaching centers are excellent at delivering mass classroom lectures and providing test series. However, in batches of 80 to 200 students, faculty cannot track your daily study hours, diagnose why your mock scores plateaued at 110 marks, or fix your personal silly mistakes. A mentor acts as your personal strategist and accountability partner alongside coaching.",
  },
  {
    question: "When should a student NOT hire a mentor?",
    answer:
      "You do not need a mentor if: (1) You already score 99+ percentile in your full mocks, (2) You have an elder sibling at an IIT or AIIMS guiding you weekly, or (3) Your primary issue is lack of study material (your money is better invested in a standard test series).",
  },
  {
    question: "Can a mentor teach me entire subject chapters from scratch?",
    answer:
      "No. A mentor is not a daily tuition teacher. Their role is high-leverage strategy: prioritizing chapters, auditing error copies, eliminating mock anxiety, optimizing time management, and providing weekly task accountability.",
  },
  {
    question: "How long should I stay enrolled with a mentor?",
    answer:
      "Unlike coaching centers that lock you into rigid 1-year or 2-year non-refundable fees, Mentskool operates on flexible monthly cohorts or per-session bookings. Most students use a mentor for 2 to 4 months to stabilize their routine, clear backlogs, and master test-taking temperament.",
  },
];

export default function DoINeedMentorPage() {
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
        headline: "Do You Actually Need a JEE or NEET Mentor? A 10-Minute Honest Self-Check",
        description:
          "An objective, candid evaluation framework for engineering and medical aspirants deciding between coaching, self-study, and 1:1 mentorship.",
        url: "https://mentskool.com/do-i-need-a-jee-neet-mentor",
        datePublished: "2026-11-19T00:00:00+05:30",
        dateModified: "2026-11-19T00:00:00+05:30",
        author: {
          "@type": "Organization",
          name: "Mentskool Academic Operations Team",
          url: "https://mentskool.com",
        },
        publisher: {
          "@type": "EducationalOrganization",
          name: "Mentskool",
          logo: {
            "@type": "ImageObject",
            url: "https://mentskool.com/logo.png",
          },
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
    <div className="relative min-h-screen bg-slate-950 text-white selection:bg-sky-500/30 selection:text-sky-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroGridBackground />

      <main className="relative z-10 pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SeoBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              {
                label: "Do I Need a Mentor?",
                href: "/do-i-need-a-jee-neet-mentor",
              },
            ]}
          />

          {/* Hero */}
          <div className="text-center max-w-3xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-300 text-xs font-semibold mb-4">
              <Scale className="w-3.5 h-3.5" />
              <span>Honest Student &amp; Parent Decision Guide</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Do You Actually Need a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-300 to-indigo-400">
                JEE or NEET Mentor?
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Before spending your family&apos;s hard-earned money, take this 10-minute self-check. Here is an honest breakdown of who genuinely benefits from a ranker mentor, and who should save their money.
            </p>
          </div>

          {/* Quick Decision Framework (Green vs Red Box) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
            {/* When You DON'T Need a Mentor */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-rose-500/30 space-y-4">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-sm uppercase tracking-wider">
                <XCircle className="w-5 h-5 shrink-0" />
                <span>Save Your Money: You DON&apos;T Need a Mentor If</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">•</span>
                  <span>You are already scoring 99+ percentile or 650+ in full-syllabus mocks with steady upward progress.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">•</span>
                  <span>You have an elder sibling or close cousin at IIT or AIIMS who reviews your timetable weekly.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">•</span>
                  <span>You expect a mentor to teach you whole physics/math chapters like a daily private tutor.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">•</span>
                  <span>You lack high-quality mock test series (invest in good tests before investing in mentorship).</span>
                </li>
              </ul>
            </div>

            {/* When a Mentor Changes Everything */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-emerald-500/30 space-y-4">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm uppercase tracking-wider">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>High ROI: A Mentor Changes Everything If</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span><strong>Mock Plateau:</strong> You study 10 hours a day, yet your marks are stuck at 100–140 in JEE or 400–500 in NEET.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span><strong>Lost in 150-Student Batch:</strong> You attend coaching, but no one checks your error notebook or daily consistency.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span><strong>Crippling Backlogs:</strong> You wasted part of Class 11 and don&apos;t know what to finish first without failing Class 12.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span><strong>Dropper Isolation:</strong> You are studying from home and fight chronic self-doubt, panic, and lack of routine.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* The Coaching vs Mentor Distinction */}
          <section className="my-16 p-6 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400">
              <Building2 className="w-4 h-4" />
              <span>Coaching vs Mentorship Explained</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Why 80% of Mentored Students Are Already Enrolled in Kota or PW
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Coaching centers provide <em>content delivery</em> (lectures, modules, and national test series). Mentorship provides <em>execution accountability</em>. Think of coaching as a gym, and your mentor as a personal trainer who prevents you from dropping out or using bad form.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <span className="text-sky-400 font-bold block mb-1">Weekly Task Accountability</span>
                <p className="text-slate-400">Every Sunday, your mentor checks your completed chapters and flags non-negotiable targets.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <span className="text-teal-400 font-bold block mb-1">Mock Error Autopsy</span>
                <p className="text-slate-400">Categorize lost marks into silly mistakes, conceptual gaps, and question-selection faults.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <span className="text-indigo-400 font-bold block mb-1">Ranker Perspective</span>
                <p className="text-slate-400">Learn the exact shortcut tricks, memory mnemonics, and mental models that top rankers used.</p>
              </div>
            </div>
          </section>

          {/* Interactive Mentor Cards */}
          <SeoMentorFunnel
            examFocus="BOTH"
            title="Browse Verified IIT & AIIMS Mentors"
            subtitle="Connect for a single strategy consultation or join a capped 30-student accountability cohort."
          />

          {/* FAQs */}
          <section className="mt-16">
            <SeoFaqAccordion
              faqs={faqs}
              title="Frequently Asked Questions: Deciding on JEE &amp; NEET Mentorship"
              subtitle="Clear, honest answers about costs, expectations, and whether mentorship makes sense for your family."
            />
          </section>

          {/* CTA Banner */}
          <section className="mt-16">
            <SeoCtaBanner
              title="Still Unsure? Start with a Free Strategy Session."
              description="Talk to a verified ranker for 15 minutes. If it helps, continue. If not, take your customized study roadmap with zero obligation."
              primaryButtonText="Book Free 1:1 Consultation"
              primaryButtonHref="/book-call"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
