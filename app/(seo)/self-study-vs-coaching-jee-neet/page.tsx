import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  AlertCircle,
  CheckCircle2,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  Scale,
  Award,
  Layers,
  Heart,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { SeoMentorFunnel } from "@/components/seo/SeoMentorFunnel";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "Self-Study vs Coaching for JEE & NEET: Can You Crack It Without Coaching?",
  description:
    "An objective blueprint on cracking JEE and NEET through self-study alone. Compare expenses (₹25k vs ₹3.5L), explore curated free/affordable resources, test series strategies, and the critical role of personal mentorship.",
  keywords: [
    "self study vs coaching jee neet",
    "can i crack jee without coaching",
    "neet self study strategy",
    "self study books for jee main",
    "how to clear neet by self study at home",
    "cost of jee preparation self study vs coaching",
    "self study routine for iit jee",
  ],
  alternates: {
    canonical: "https://mentskool.com/self-study-vs-coaching-jee-neet",
  },
  openGraph: {
    title: "Self-Study vs Coaching for JEE & NEET: The Definitive Guide",
    description:
      "Is ₹3 Lakh coaching necessary? Discover how thousands of rankers crack JEE & NEET from home using curated textbooks, free lectures, and 1-on-1 personal mentors.",
    url: "https://mentskool.com/self-study-vs-coaching-jee-neet",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Self Study vs Coaching - Mentskool",
      },
    ],
  },
};

const faqs: FaqItem[] = [
  {
    question: "Can an aspirant realistically crack JEE Advanced or NEET without joining a coaching institute?",
    answer:
      "Yes. Every year, students from diverse socioeconomic backgrounds secure top 1,000 ranks in JEE and NEET through disciplined self-study. Core textbooks (NCERT, HC Verma, standard reference books), open online lecture repositories, and comprehensive PYQ compilations contain the entire syllabus. Success depends on execution discipline and mock test analysis rather than expensive brand names.",
  },
  {
    question: "What is the biggest pitfall of pure self-study without guidance?",
    answer:
      "The primary failure point of solo self-study is 'Resource Paralysis' and lack of external calibration. Without structured milestones, students often spend 3 weeks reading 5 different books for a single chapter, fall behind schedule, or lack experienced insight to diagnose why their mock test scores are plateauing.",
  },
  {
    question: "What essential tools are needed to build a complete self-study ecosystem?",
    answer:
      "A complete self-study setup requires four components: 1) Standard core textbooks and NCERTs, 2) A curated chapter-wise 10-year PYQ bank, 3) A rigorous all-India mock test series, and 4) A personal ranker mentor to provide weekly accountability, error audits, and pacing guidance.",
  },
  {
    question: "How much money can a family save by choosing self-study plus mentorship over offline coaching?",
    answer:
      "Offline coaching with hostel living costs ₹3,50,000 to ₹5,50,000 annually. A complete self-study setup (books + quality test series + online lecture subscriptions) costs under ₹20,000 to ₹35,000 per year. Adding dedicated 1-on-1 ranker mentorship costs around ₹30,000 annually, saving families over 85% of total expenses while offering individual attention.",
  },
  {
    question: "How should a self-study student handle difficult doubts?",
    answer:
      "Self-study students should maintain an 'Unsolved Problem Queue'. Attempt each challenging problem twice with a 24-hour gap. If still unresolved, consult video solutions or discuss the underlying concept directly with a personal mentor during weekly strategy and doubt sessions.",
  },
];

export default function SelfStudyVsCoachingJeeNeetPage() {
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
        headline: "Self-Study vs Coaching for JEE & NEET: Can You Crack It Without Coaching?",
        description:
          "Strategic guide comparing self-study methods with formal coaching for JEE and NEET, resource curation, cost analyses, and mentorship frameworks.",
        url: "https://mentskool.com/self-study-vs-coaching-jee-neet",
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
                label: "Self-Study vs Coaching",
                href: "/self-study-vs-coaching-jee-neet",
              },
            ]}
          />

          {/* Hero Section */}
          <header className="mt-8 mb-12 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <BookOpen className="w-4 h-4" />
              Strategic Self-Preparation Blueprint
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight">
              Self-Study vs Coaching for JEE &amp; NEET:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                Can You Crack It Without Expensive Coaching?
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
              The multi-crore coaching industry often suggests that without enrolling in an expensive offline batch, cracking JEE or NEET is impossible. Explore how top rankers systematically dismantle this myth by combining curated self-study with 1-on-1 personal mentorship.
            </p>
          </header>

          {/* Direct Answer Box */}
          <section className="mb-14 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 backdrop-blur-md p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400 shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-emerald-300 mb-2">
                  The Honest Reality: Self-Study Is What Actually Earns the Rank
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  No teacher or coaching institute can take the exam for you. Even in premier coaching centers, the students who secure top ranks are those who spend <strong className="text-white">6 to 8 hours daily solving problems in private self-study</strong>. Today, with high-quality content freely available, self-study paired with an experienced <strong className="text-emerald-300">IITian or AIIMS personal mentor</strong> provides greater focus and accountability than sitting in a crowded lecture hall.
                </p>
              </div>
            </div>
          </section>

          {/* Section 1: Financial & Academic Comparison */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Scale className="w-7 h-7 text-emerald-400" />
              Financial &amp; Operational Comparison Matrix
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/60 my-6">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-800/80 text-slate-200 border-b border-slate-700 font-semibold">
                  <tr>
                    <th className="p-4">Key Dimension</th>
                    <th className="p-4">Traditional Offline Coaching</th>
                    <th className="p-4">Self-Study + Mentskool Mentorship</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">Annual Financial Expense</td>
                    <td className="p-4 text-red-400 font-bold">₹1,50,000 to ₹4,50,000+</td>
                    <td className="p-4 text-emerald-400 font-bold">₹30,000 to ₹45,000 total</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">Daily Learning Pace</td>
                    <td className="p-4 text-slate-400">Fixed institutional speed (cannot pause or replay)</td>
                    <td className="p-4 text-emerald-400 font-medium">Personalized; move faster on strengths, deeper on weaknesses</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">Commute &amp; Fatigue Loss</td>
                    <td className="p-4 text-amber-300">1.5 to 3 hours lost daily in travel and preparation</td>
                    <td className="p-4 text-emerald-400 font-medium">Zero commute; 100% of energy preserved for problem-solving</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">Personal Attention</td>
                    <td className="p-4 text-slate-400">1 teacher for 150 to 200 students</td>
                    <td className="p-4 text-emerald-400 font-bold">Dedicated 1-on-1 IITian or AIIMS mentor</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: The 4 Pillars of a High-Scoring Self-Study System */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Layers className="w-7 h-7 text-emerald-400" />
              The 4 Pillars of an Effective Self-Study Ecosystem
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                <div className="text-emerald-400 font-bold text-lg">Pillar 1: Curated, Minimalist Resources</div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Avoid hoarding dozens of PDF study materials. Stick to proven core resources: NCERT for Chemistry and Biology; Concepts of Physics (HC Verma) for Physics; standard problem sets for Mathematics. Master one book completely rather than grazing across five.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                <div className="text-teal-400 font-bold text-lg">Pillar 2: 10-Year Chapter-Wise PYQ Analysis</div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Past 10 years of NTA papers represent the most accurate indicator of real exam difficulty and topic weightage. Treat PYQs as primary practice problems, not just final revision material.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                <div className="text-cyan-400 font-bold text-lg">Pillar 3: High-Quality All-India Mock Tests</div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Enroll in a standardized all-India test series to benchmark your percentile against thousands of peers nationwide. Take every test under authentic timed conditions with strict exam simulation.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                <div className="text-brand-400 font-bold text-lg">Pillar 4: Weekly 1-on-1 Ranker Accountability</div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  The missing link in solo study is external accountability. Working with a dedicated IITian or AIIMS mentor ensures you follow your schedule, maintain your Error Book, and stay motivated through challenging preparation phases.
                </p>
              </div>
            </div>
          </section>

          {/* Dedicated High-Converting Mentorship Funnel */}
          <SeoMentorFunnel
            examFocus="BOTH"
            title="Crack JEE &amp; NEET From Home With Top 1% Mentors"
            subtitle="Build a complete self-study system. Work 1-on-1 with mentors from IIT Bombay and AIIMS who will guide your daily problem counts, audit your mock tests, and keep you on track."
          />

          {/* Section 3: FAQ Accordion */}
          <section className="my-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center justify-center gap-3">
                <HelpCircle className="w-7 h-7 text-emerald-400" />
                Frequently Asked Questions: Self-Study vs Coaching
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Honest counsel on study materials, time management, and home preparation strategies.
              </p>
            </div>
            <SeoFaqAccordion items={faqs} />
          </section>

          {/* Final Call to Action */}
          <SeoCtaBanner
            title="Build Your Personalized Self-Study Roadmap"
            subtitle="Connect with experienced IIT and AIIMS mentors who will help you design a structured, cost-effective self-study plan tailored to your goals."
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
