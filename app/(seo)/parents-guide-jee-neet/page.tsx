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
  Heart,
  Users,
  ShieldAlert,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "Parent's Guide to JEE & NEET Preparation & Mentorship — Support Without Pressure",
  description:
    "A guide for parents: How to support your child preparing for JEE or NEET without creating toxic exam stress. Understand percentiles vs marks, identify burnout early, and partner with IIT/AIIMS mentors who provide transparent monthly progress reports.",
  keywords: [
    "parents guide to JEE preparation",
    "parents guide to NEET UG",
    "how parents can support JEE NEET aspirants",
    "reduce exam stress for children JEE",
    "JEE mentorship for parents",
    "understanding percentile vs marks for parents",
  ],
  alternates: {
    canonical: "https://mentskool.com/parents-guide-jee-neet",
  },
  openGraph: {
    title: "Parent's Guide to JEE & NEET: Constructive Support & 1:1 Mentorship",
    description:
      "Help your child achieve their dream rank with empathy, objective progress metrics, and verified IIT & AIIMS mentors.",
    url: "https://mentskool.com/parents-guide-jee-neet",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Parents Guide - Mentskool",
      },
    ],
  },
};

const parentFaqs: FaqItem[] = [
  {
    question: "What is the difference between Board exam percentage and NTA percentile?",
    answer:
      "In school board exams, 95% means answering 95 out of 100 marks correctly. In JEE Main, '99 Percentile' does NOT mean scoring 99% marks; it means scoring higher than 99% of all test takers in that shift. Often, scoring just 180 out of 300 marks (60% marks) secures a 99 percentile. Many parents panic when their child scores 170 marks, mistakenly believing they failed, when in reality their child is on track for a top NIT or IIT.",
  },
  {
    question: "How can parents communicate with their child's Mentskool mentor?",
    answer:
      "Parents receive monthly objective progress summaries detailing completed problem quotas, attendance, and mock test score trends. Parents can also join scheduled 1:1 check-in calls with the mentor to discuss study discipline and emotional health.",
  },
  {
    question: "How do I know if my child is experiencing severe exam burnout?",
    answer:
      "Warning signs include sudden withdrawal, irregular sleep patterns, declining mock scores despite long desk hours, extreme irritability around test results, and loss of appetite. An assigned mentor acts as a trusted bridge between parent and student, identifying cognitive fatigue and adjusting study pacing early.",
  },
  {
    question: "Why is 1-on-1 mentorship better than enrolling in another expensive coaching batch?",
    answer:
      "Coaching institutes put your child in a room with 100+ other students. Teachers do not know your child's specific calculation errors, backlogs, or test anxiety. Investing in a 1-on-1 mentor from an IIT or AIIMS ensures your child has an older sibling-like guide who audits their daily study execution and keeps them calm.",
  },
];

export default function ParentsGuidePage() {
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
        headline: "Parent's Guide to JEE & NEET Mentorship: Support Without Stress",
        description:
          "How parents can objectively understand test percentiles, support daily consistency, and prevent exam burnout.",
        author: {
          "@type": "Organization",
          name: "Mentskool",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: parentFaqs.map((faq) => ({
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
                label: "Parent's Guide",
                href: "/parents-guide-jee-neet",
              },
            ]}
          />

          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-300 text-xs font-semibold mb-4">
              <Users className="w-3.5 h-3.5" />
              <span>A Supportive Blueprint for Indian Families</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Parent&apos;s Guide to JEE &amp; NEET: <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400">Support Your Child Without Creating Stress</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Preparing for JEE or NEET is as emotionally demanding for parents as it is for students. Learn how to interpret mock scores objectively, detect burnout early, and partner with verified <strong>IIT &amp; AIIMS mentors</strong> who track your child&apos;s daily discipline.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Browse Verified Mentors</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/free-mentorship-session"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all"
              >
                Schedule Free Parent Consultation
              </Link>
            </div>
          </div>

          {/* Direct Answer Box for AI Overviews & Search Snippets */}
          <section className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-sky-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-sky-400 mb-3">
              <Sparkles className="w-4 h-4 text-sky-400" />
              <span>Summary: How 1:1 Mentorship Gives Parents Peace of Mind</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-5">
              The <strong>Mentskool Parent Partnership Model</strong> provides objective visibility into your child&apos;s preparation without micromanagement:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                <span><strong>Objective 94% Efficiency Reports:</strong> Receive monthly summaries of verified solved problem counts and chapter completion.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                <span><strong>Understanding Percentiles vs Board Marks:</strong> Clear guidance that 60% marks in JEE can equal a top 99 percentile rank.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                <span><strong>Older Sibling Role Model:</strong> An IITian or AIIMS doctor who can listen to doubts and fears your child might hesitate to share at home.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                <span><strong>Transparent Month-to-Month Fees:</strong> Zero multi-lakh annual entrapment; pay only as long as your child benefits.</span>
              </div>
            </div>
          </section>

          {/* FAQ Accordion */}
          <section className="mt-16">
            <SeoFaqAccordion
              faqs={parentFaqs}
              title="Frequently Asked Questions: A Parent's Guide to Mentorship"
              subtitle="Everything parents need to know about tracking progress, percentile mechanics, and 1:1 mentor communications."
            />
          </section>

          {/* CTA Banner */}
          <section className="mt-16">
            <SeoCtaBanner
              title="Give Your Child the Guidance of an IIT / AIIMS Ranker"
              description="Help your child study with clarity, structure, and emotional calm. Schedule a free 1-on-1 consultation session with a verified mentor today."
              primaryButtonText="Schedule Free Consultation"
              primaryButtonHref="/free-mentorship-session"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
