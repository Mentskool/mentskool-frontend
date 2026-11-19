import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Eye,
  FileCheck,
  Scale,
  Users,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "Is Online JEE & NEET Mentorship Safe for Students? Parent Checklist",
  description:
    "A parent's guide to online mentorship safety. Learn how Mentskool verifies IIT & AIIMS credentials, protects student privacy, enables parent session attendance, and prevents coaching scams.",
  keywords: [
    "is online mentorship safe for students",
    "how to verify iitian mentor",
    "online mentorship safety for parents",
    "jee mentorship verification process",
    "safe online tutoring for minors india",
  ],
  alternates: {
    canonical: "https://mentskool.com/is-online-mentorship-safe-for-students-parents",
  },
  openGraph: {
    title: "Is Online JEE & NEET Mentorship Safe? A Parent's Verification Guide",
    description:
      "Transparency first: credential audits, private encrypted video, parent session rights, and refund safety protocols.",
    url: "https://mentskool.com/is-online-mentorship-safe-for-students-parents",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Mentorship Safety Guide - Mentskool",
      },
    ],
  },
};

const faqs: FaqItem[] = [
  {
    question: "Can parents attend or sit in on the 1:1 mentorship sessions?",
    answer:
      "Yes, 100%. We actively encourage parents to sit in on initial sessions, meet the mentor, and understand the study roadmap being assigned to their child.",
  },
  {
    question: "How does Mentskool verify that mentors are genuine IITians or AIIMS doctors?",
    answer:
      "We operate a mandatory 3-point credential check before any mentor profile goes live: (1) Government Photo ID (Aadhaar/Passport), (2) Official College ID Card from IITs, NITs, AIIMS, or State GMCs, and (3) Official NTA scorecard with All India Rank (AIR). Profiles lacking verified documents are rejected.",
  },
  {
    question: "Is personal contact information (phone number / personal address) shared?",
    answer:
      "No. All video sessions and academic check-ins take place through encrypted platform rooms. Neither the student nor the mentor is required to disclose private personal contact details or home addresses.",
  },
  {
    question: "What happens if a mentor misses a scheduled session or is not a good fit?",
    answer:
      "If a session cannot proceed or a mentor misses an appointment, students can easily reschedule or request an alternate mentor at zero penalty. All subscriptions are governed by our transparent refund and replacement terms.",
  },
];

export default function MentorshipSafetyPage() {
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
        headline: "Is Online JEE/NEET Mentorship Safe for Your Child? A Parent's Verification Checklist",
        description:
          "How Mentskool ensures credential authenticity, encrypted video sessions, parent attendance rights, and student privacy protection.",
        url: "https://mentskool.com/is-online-mentorship-safe-for-students-parents",
        datePublished: "2026-11-19T00:00:00+05:30",
        dateModified: "2026-11-19T00:00:00+05:30",
        author: {
          "@type": "Organization",
          name: "Mentskool Trust & Safety Team",
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
                label: "Student & Parent Safety",
                href: "/is-online-mentorship-safe-for-students-parents",
              },
            ]}
          />

          {/* Hero */}
          <div className="text-center max-w-3xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-semibold mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Trust, Safety &amp; Credential Verification Protocols</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Is Online Mentorship Safe for Your Child?{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400">
                A Parent&apos;s Verification Guide
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              As parents, trusting an online service with your child&apos;s education requires absolute transparency. Here is how Mentskool verifies every mentor, protects minor privacy, and ensures academic safety.
            </p>
          </div>

          {/* 4 Pillars of Safety */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-white">3-Point Credential Audit</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Before any mentor profile appears in our directory, we verify their official <strong>Aadhaar/Government ID</strong>, <strong>College Identity Card</strong> from IITs, NITs, or AIIMS, and their <strong>Official NTA Scorecard</strong>. We never allow unverified profiles.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center font-bold">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-white">Open Parent Attendance</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Parents are always welcome to join video sessions, review the study roadmap, and discuss their child&apos;s exam pressures directly with the mentor. We maintain a zero-gatekeeping policy with parents.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-white">Privacy &amp; Contact Protection</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                All interactions take place through private, encrypted browser-based video rooms. Neither the student nor the mentor needs to share personal phone numbers or social media handles.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-white">Transparent Refund &amp; Switch Policy</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Unlike traditional coaching institutions with non-refundable 1-year fees, Mentskool operates with clear refund guarantees, session rescheduling flexibility, and effortless mentor switches if the teaching style isn&apos;t a match.
              </p>
            </div>
          </div>

          {/* Red Flags Checklist for Parents */}
          <section className="my-14 p-6 sm:p-10 rounded-3xl bg-slate-900/60 border border-rose-500/30 space-y-5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400">
              <AlertTriangle className="w-4 h-4" />
              <span>Consumer Protection</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              5 Red Flags Parents Should Watch for in Online Mentorship
            </h2>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-3">
                <span className="text-rose-400 font-bold shrink-0">1.</span>
                <span><strong>Unverified Telegram/WhatsApp Groups:</strong> Never pay individuals on Telegram claiming to be IITians without institutional proof or a registered platform.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-3">
                <span className="text-rose-400 font-bold shrink-0">2.</span>
                <span><strong>Guaranteed Rank Claims:</strong> Anyone promising &ldquo;AIR &lt; 500 guaranteed&rdquo; is engaging in unethical marketing. A genuine mentor guarantees structured effort and accountability, not fixed ranks.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-3">
                <span className="text-rose-400 font-bold shrink-0">3.</span>
                <span><strong>Annual Lock-In Contracts:</strong> Be cautious of coaching services requiring ₹50,000–₹1,50,000 upfront with zero refund flexibility after 7 days.</span>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="mt-16">
            <SeoFaqAccordion
              faqs={faqs}
              title="Parent Trust &amp; Safety FAQs"
              subtitle="Everything parents ask before booking a 1:1 strategy consultation."
            />
          </section>

          {/* CTA Banner */}
          <section className="mt-16">
            <SeoCtaBanner
              title="Have Questions About Mentor Suitability?"
              description="Speak directly to our student success team or book an initial consultation with your child present."
              primaryButtonText="Explore Verified Mentors"
              primaryButtonHref="/mentors"
              secondaryButtonText="Read Terms of Service"
              secondaryButtonHref="/terms"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
