import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Scale,
  AlertCircle,
  CheckCircle2,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  Building2,
  Award,
  Users,
  Video,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { SeoMentorFunnel } from "@/components/seo/SeoMentorFunnel";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "Allen vs Physics Wallah vs Mentskool: The Preparation Ecosystem Compared",
  description:
    "An objective comparison of Allen (offline/hybrid coaching), Physics Wallah (mass digital lectures), and Mentskool (1-on-1 personal mentorship). Discover why personal accountability is the missing layer in JEE and NEET prep.",
  keywords: [
    "allen vs pw vs mentskool",
    "physics wallah vs allen",
    "do i need a mentor with coaching",
    "allen fees vs physics wallah fees",
    "why students fail after pw or allen",
    "best mentorship for jee neet",
    "personal guidance for competitive exams",
  ],
  alternates: {
    canonical: "https://mentskool.com/allen-vs-pw-vs-mentskool",
  },
  openGraph: {
    title: "Allen vs Physics Wallah vs Mentskool: The Honest Comparison",
    description:
      "Why content is no longer your bottleneck. Compare Allen's traditional coaching, PW's affordable lectures, and Mentskool's 1-on-1 personal IITian accountability engine.",
    url: "https://mentskool.com/allen-vs-pw-vs-mentskool",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Allen vs PW vs Mentskool - Mentskool",
      },
    ],
  },
};

const faqs: FaqItem[] = [
  {
    question: "Is Mentskool an alternative to Allen or Physics Wallah (PW)?",
    answer:
      "Mentskool is not a coaching institute selling generic lecture recordings; it is a dedicated 1-on-1 personal mentorship platform. Most of our students are actively enrolled in Allen, Physics Wallah, or Aakash for their syllabus lectures, but partner with a Mentskool IITian or AIIMS mentor for individual accountability, mock test audits, personalized timetables, and strategic guidance.",
  },
  {
    question: "Why do so many students with Allen or PW subscriptions still fail to clear the cutoff?",
    answer:
      "Because lecture content is rarely the bottleneck in 2026. Students fail because of: 1) Procrastination and unmonitored backlogs, 2) Passive video consumption without timed problem-solving, 3) Repeating identical unforced errors across mock exams, and 4) Complete absence of personal oversight. In mass batches of 50,000+ online or 200 offline, no one checks why your mock score dropped from 540 to 480.",
  },
  {
    question: "What is the key difference in fee structure between Allen, PW, and Mentskool?",
    answer:
      "Allen offline tuition costs ₹1,40,000 to ₹1,90,000 per year (excluding hostel/living costs). Physics Wallah provides high-volume, highly affordable batch lectures starting at ₹4,000 to ₹10,000 per year. Mentskool provides high-touch personal 1-on-1 mentorship from top rankers for ₹2,500 to ₹4,500 per month, designed to complement your chosen lecture source.",
  },
  {
    question: "How does Mentskool ensure students actually follow their daily study plans?",
    answer:
      "Every student is paired with a dedicated IITian or AIIMS mentor who conducts weekly 1-on-1 strategy video calls, tracks daily question-solving velocity, audits rough sheets and OMR mistake books, and provides honest feedback whenever a student begins slipping off pace.",
  },
  {
    question: "Can I crack JEE or NEET using only Physics Wallah (PW) plus a Mentskool mentor?",
    answer:
      "Yes. This has become one of the most popular and cost-effective combinations for serious aspirants: high-quality, comprehensive syllabus coverage via PW lectures paired with the personalized accountability, error-book auditing, and test strategy of a top Mentskool IITian or AIIMS mentor.",
  },
];

export default function AllenVsPwVsMentskoolPage() {
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
        headline: "Allen vs Physics Wallah vs Mentskool: The Preparation Ecosystem Compared",
        description:
          "Strategic breakdown of offline coaching, online video batches, and 1-on-1 personal mentorship in Indian competitive exam preparation.",
        url: "https://mentskool.com/allen-vs-pw-vs-mentskool",
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
                label: "Allen vs PW vs Mentskool",
                href: "/allen-vs-pw-vs-mentskool",
              },
            ]}
          />

          {/* Hero Section */}
          <header className="mt-8 mb-12 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <Scale className="w-4 h-4" />
              EdTech &amp; Coaching Ecosystem Architecture
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight">
              Allen vs Physics Wallah vs Mentskool:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-amber-300 to-cyan-400">
                The Missing Layer in Exam Preparation
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Aspirants today have access to more lectures, question banks, and video solutions than any previous generation. Yet cutoffs continue rising, and millions of enrolled students fail to reach their goals. Discover why the difference between clearing the cutoff and dropping another year isn&apos;t more content, but personal accountability.
            </p>
          </header>

          {/* Direct Answer Box */}
          <section className="mb-14 rounded-2xl border border-brand-500/30 bg-brand-950/20 backdrop-blur-md p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-brand-500/20 text-brand-400 shrink-0">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-brand-300 mb-2">
                  The Paradigm Shift: From Content Abundance to Execution Accountability
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  <strong className="text-white">Allen</strong> built the classic offline coaching empire. <strong className="text-cyan-300">Physics Wallah (PW)</strong> democratized video lectures for millions at accessible prices. But neither model solves the human execution challenge: <em className="text-white">Who notices when you procrastinate? Who audits your mock exam rough work? Who tells you which chapters to skip when you fall 3 weeks behind?</em> That is the individual accountability layer <strong className="text-brand-300">Mentskool</strong> provides.
                </p>
              </div>
            </div>
          </section>

          {/* Section 1: The 3-Way Comparative Matrix */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Scale className="w-7 h-7 text-brand-400" />
              Comprehensive 3-Way Preparation Comparison Matrix
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/60 my-6">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-800/80 text-slate-200 border-b border-slate-700 font-semibold">
                  <tr>
                    <th className="p-4">Preparation Dimension</th>
                    <th className="p-4">Allen Career Institute</th>
                    <th className="p-4">Physics Wallah (PW)</th>
                    <th className="p-4">Mentskool Mentorship</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">Core Value Proposition</td>
                    <td className="p-4">Physical classroom rigor &amp; established study modules</td>
                    <td className="p-4">Affordable, high-energy digital video lectures</td>
                    <td className="p-4 text-emerald-400 font-bold">1-on-1 Ranker Accountability &amp; Strategy</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">Typical Student-to-Teacher Ratio</td>
                    <td className="p-4 text-amber-300">150 to 220 students per classroom</td>
                    <td className="p-4 text-amber-300">20,000 to 50,000+ students per live stream</td>
                    <td className="p-4 text-emerald-400 font-bold">1-on-1 (Dedicated Mentor)</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">Annual Tuition / Service Fee</td>
                    <td className="p-4 text-red-400 font-bold">₹1,40,000 to ₹1,90,000</td>
                    <td className="p-4 text-emerald-400 font-bold">₹4,000 to ₹12,000</td>
                    <td className="p-4 text-cyan-300 font-bold">₹2,500 to ₹4,500 / month</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">Personal Timetable Customization</td>
                    <td className="p-4 text-slate-400">Fixed institutional batch calendar</td>
                    <td className="p-4 text-slate-400">Standard batch streaming schedule</td>
                    <td className="p-4 text-emerald-400 font-bold">Customized weekly to your specific pace &amp; school</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">Mock Test Error Auditing</td>
                    <td className="p-4 text-slate-400">Automated marks sheet with rank percentiles</td>
                    <td className="p-4 text-slate-400">App-based analytics &amp; written answer keys</td>
                    <td className="p-4 text-emerald-400 font-bold">Forensic 1-on-1 review of rough sheets &amp; Error Book</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: Why Good Students Struggle with Pure Video Platforms */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <AlertCircle className="w-7 h-7 text-amber-400" />
              The &quot;Lecture Illusion&quot;: Why Content Alone Doesn&apos;t Guarantee Ranks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                <div className="text-amber-400 font-bold text-lg">The Illusion of Competence</div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Watching an experienced teacher solve a challenging Rotation or Integration problem on a digital screen makes the brain feel like it has mastered the concept. But when faced with an unfamiliar problem on exam day without teacher guidance, the cognitive pathway fails to activate unassisted.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                <div className="text-red-400 font-bold text-lg">The Rolling Backlog Avalanche</div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  When a student misses two days of lectures due to school exams, they fall 12 hours of video content behind. In a mass course with thousands of students, no one checks on them. The backlog snowballs, leading to skipped tests, panic, and eventual abandonment of the preparation plan.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: The Winning Hybrid Framework */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <CheckCircle2 className="w-7 h-7 text-emerald-400" />
              The Modern Winning Formula: Content + Personal Mentorship
            </h2>
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-4">
              <p className="text-slate-300 text-sm leading-relaxed">
                You do not need to choose between good lectures and personal guidance. The most successful modern aspirants combine both:
              </p>
              <div className="space-y-3 pt-2 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>Layer 1 (The Knowledge Base):</strong> Learn concepts via your chosen coaching lectures—whether Allen classroom modules, Physics Wallah online batches, or self-study textbooks.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>Layer 2 (The Personal Accountability Engine):</strong> Work with a Mentskool IITian or AIIMS mentor who audits your daily question solve counts, ensures you complete your Error Book, and adjusts your strategy weekly.</span>
                </div>
              </div>
            </div>
          </section>

          {/* Dedicated High-Converting Mentorship Funnel */}
          <SeoMentorFunnel
            examFocus="BOTH"
            title="Add the Missing 1-on-1 Accountability Layer to Your Prep"
            subtitle="Keep your existing coaching lectures or online courses. Partner with a dedicated IITian or AIIMS mentor who will make sure you execute consistently and avoid costly preparation blindspots."
          />

          {/* Section 4: FAQ Accordion */}
          <section className="my-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center justify-center gap-3">
                <HelpCircle className="w-7 h-7 text-brand-400" />
                Frequently Asked Questions: Coaching vs Mentorship
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Honest answers on how personal mentorship complements existing coaching subscriptions.
              </p>
            </div>
            <SeoFaqAccordion items={faqs} />
          </section>

          {/* Final Call to Action */}
          <SeoCtaBanner
            title="Accelerate Your Results With Personal Mentorship"
            subtitle="Connect with mentors who will help you build disciplined problem-solving habits, review your mock exams, and maximize the value of your existing study materials."
            primaryBtnText="Claim Free Mentorship Call"
            primaryBtnHref="/free-mentorship-session"
            secondaryBtnText="Explore Top Mentors"
            secondaryBtnHref="/mentors"
          />
        </div>
      </main>
    </div>
  );
}
