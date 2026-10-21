import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  AlertCircle,
  CheckCircle2,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  Scale,
  Award,
  HeartPulse,
  TrendingUp,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { SeoMentorFunnel } from "@/components/seo/SeoMentorFunnel";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "NEET Qualifying Marks vs Government MBBS Cutoff: The 500-Mark Reality Check",
  description:
    "Demystify the critical difference between NEET qualifying percentile (140-164 marks) and actual Government Medical College (GMC) MBBS admission cutoffs (650+ marks). Explore state-wise cutoffs, private college fee realities, and score planning.",
  keywords: [
    "neet qualifying marks vs admission cutoff",
    "minimum marks for gmc in neet",
    "neet cutoff for government mbbs",
    "can i get gmc with qualifying marks",
    "difference between qualifying and admission neet",
    "neet pass marks vs mbbs cutoff",
    "neet state wise gmc cutoffs",
  ],
  alternates: {
    canonical: "https://mentskool.com/neet-qualifying-marks-vs-admission-cutoff",
  },
  openGraph: {
    title: "NEET Qualifying Marks vs Government MBBS Cutoff: The 500-Mark Gap",
    description:
      "Passing NEET does not guarantee a government MBBS seat. Understand why qualifying requires ~160 marks while securing a government medical college demands 655+ marks.",
    url: "https://mentskool.com/neet-qualifying-marks-vs-admission-cutoff",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "NEET Qualifying vs Admission Cutoff - Mentskool",
      },
    ],
  },
};

const faqs: FaqItem[] = [
  {
    question: "What is the difference between NEET qualifying marks and the MBBS admission cutoff?",
    answer:
      "NEET Qualifying Marks represent the absolute legal minimum score required to be deemed 'NEET Qualified' (defined by NTA as the 50th percentile for General category, typically between 140 and 164 marks). In contrast, the MBBS Admission Cutoff is the actual rank and score required to gain admission to a tuition-subsidized Government Medical College (GMC), which currently demands 650 to 660+ marks.",
  },
  {
    question: "Can I get a Government Medical College (MBBS) if I score 300 or 400 marks?",
    answer:
      "No. For unreserved (General/UR), OBC, and EWS candidates, a score of 300 to 400 marks is substantially below the government MBBS cutoff in every single Indian state. Scores in the 300–400 range only make you eligible for high-fee private medical colleges, deemed universities (costing ₹75 Lakh to ₹1.5 Crore), or foreign medical institutions.",
  },
  {
    question: "What opportunities are unlocked simply by qualifying NEET (e.g., scoring 160 marks)?",
    answer:
      "Qualifying NEET grants legal eligibility to: 1) Register for Central MCC and State counseling portals, 2) Apply for management and NRI quota seats in private/deemed medical universities, 3) Enroll in Bachelor of Ayurvedic Medicine and Surgery (BAMS) or BHMS programs in select private institutes, and 4) Pursue an MBBS degree abroad (which requires a valid NEET qualifying scorecard).",
  },
  {
    question: "Why is the gap between qualifying marks and admission cutoffs so large (almost 500 marks)?",
    answer:
      "Because over 13 lakh of the ~24 lakh test-takers qualify the 50th percentile threshold, but India offers only approximately 55,000 to 58,000 total government MBBS seats. This creates an intense competitive bottleneck, pushing the score required for a government seat up to the top 1% to 2% of test-takers.",
  },
  {
    question: "What are the safe government MBBS cutoff scores across major states?",
    answer:
      "In high-competition states like Rajasthan, Delhi, UP, and Bihar, state quota cutoffs typically range between 648 and 665 marks for General category. In states with high seat density such as Karnataka, Maharashtra, and Tamil Nadu, the state quota cutoff sits around 615 to 635 marks.",
  },
];

export default function NeetQualifyingMarksVsAdmissionCutoffPage() {
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
        headline: "NEET Qualifying Marks vs Government MBBS Cutoff: The 500-Mark Reality Check",
        description:
          "Authoritative guide distinguishing NEET qualifying percentile from actual government medical college admission cutoffs, state-wise benchmarks, and counseling facts.",
        url: "https://mentskool.com/neet-qualifying-marks-vs-admission-cutoff",
        author: {
          "@type": "Organization",
          name: "Mentskool Medical Advisory Council",
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
    <div className="relative min-h-screen bg-slate-950 text-white selection:bg-emerald-500/30 selection:text-emerald-300">
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
              { label: "NEET Mentorship", href: "/neet-mentorship" },
              {
                label: "Qualifying vs Admission Cutoff",
                href: "/neet-qualifying-marks-vs-admission-cutoff",
              },
            ]}
          />

          {/* Hero Section */}
          <header className="mt-8 mb-12 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <Scale className="w-4 h-4" />
              Medical Counseling Reality Check & Analysis
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight">
              NEET Qualifying Marks vs Admission Cutoff:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                The 500-Mark Reality Check for Aspirants
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
              One of the most persistent misconceptions among new NEET aspirants and parents is equating &quot;qualifying NEET&quot; with &quot;getting a medical seat.&quot; Understand why passing the exam with ~160 marks is separated by an immense 500-mark gulf from securing a government MBBS seat.
            </p>
          </header>

          {/* Direct Answer Box */}
          <section className="mb-14 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 backdrop-blur-md p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400 shrink-0">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-emerald-300 mb-2">
                  The Fundamental Distinction Summarized
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  <strong className="text-white">Qualifying NEET (~155-164 Marks)</strong> merely verifies that you achieved the 50th percentile among all test-takers; it serves as a baseline legal eligibility license. <strong className="text-emerald-300">Admission Cutoff for Government MBBS (650–660+ Marks)</strong> represents the actual rank necessary to win one of India&apos;s ~56,000 highly subsidized government medical college seats.
                </p>
              </div>
            </div>
          </section>

          {/* Section 1: Side-by-Side Comparison Matrix */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Scale className="w-7 h-7 text-emerald-400" />
              Qualifying Marks vs Admission Cutoff: Comparative Matrix
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/60 my-6">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-800/80 text-slate-200 border-b border-slate-700 font-semibold">
                  <tr>
                    <th className="p-4">Criteria</th>
                    <th className="p-4">NEET Qualifying Status (50th %ile)</th>
                    <th className="p-4">Government MBBS Admission Status (Top 1.5%)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">Score Required (General)</td>
                    <td className="p-4 font-mono text-amber-400 font-bold">140 - 164 Marks</td>
                    <td className="p-4 font-mono text-emerald-400 font-bold">650 - 665+ Marks</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">All India Rank Bracket</td>
                    <td className="p-4">AIR 1,100,000 to 1,250,000</td>
                    <td className="p-4 font-bold text-white">Top 22,000 AIR (AIQ)</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">Total Eligible Candidates</td>
                    <td className="p-4">~13,00,000+ candidates</td>
                    <td className="p-4 font-bold text-emerald-400">~56,000 candidates nationwide</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">College Types Available</td>
                    <td className="p-4 text-xs text-slate-400">Private colleges, deemed universities, MBBS abroad, private BAMS/BHMS.</td>
                    <td className="p-4 text-xs text-emerald-300 font-semibold">Central AIIMS, JIPMER, state government medical colleges.</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">5-Year Tuition Cost</td>
                    <td className="p-4 text-red-400 font-mono font-bold">₹75 Lakhs to ₹1.5 Crores</td>
                    <td className="p-4 text-emerald-400 font-mono font-bold">₹50,000 to ₹3.5 Lakhs (Total)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: State-Wise Cutoff Breakdown */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Award className="w-7 h-7 text-emerald-400" />
              State Quota (85%) Safe Score Landscape for General Category
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                <div className="text-red-400 font-bold text-lg">High-Competition States (Cutoff 645 - 665+)</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  <strong>Delhi, Rajasthan, Uttar Pradesh, Bihar, Haryana:</strong> Due to immense candidate density and high top-bracket scores, state cutoffs often mirror or exceed the All India Quota. Scoring 655+ is essential for a general category seat.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                <div className="text-emerald-400 font-bold text-lg">High-Seat States (Cutoff 615 - 635)</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  <strong>Karnataka, Maharashtra, Tamil Nadu, Telangana, Gujarat:</strong> States with dozens of government medical colleges offer slightly more breathing room. State quota cutoffs generally sit 20 to 35 marks lower than the All India Quota.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: The Dangerous Private Medical College Reality */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <AlertCircle className="w-7 h-7 text-amber-400" />
              The Financial Reality of &quot;Just Qualifying&quot;
            </h2>
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-4">
              <p className="text-slate-300 text-sm leading-relaxed">
                When a candidate scores 280 or 350 marks, coaching centers often congratulate them for &quot;qualifying NEET.&quot; What they don&apos;t mention is that enrolling in an Indian private medical college with those marks requires paying annual tuition fees of ₹18 to ₹28 Lakhs per year, totaling upwards of ₹1.2 Crore for an MBBS degree.
              </p>
              <p className="text-xs text-slate-400">
                For 98% of middle-class Indian families, a Government Medical College is the only financially viable pathway to an MBBS degree. That means your goal isn&apos;t qualifying with 160 marks—it is achieving 655+ marks.
              </p>
            </div>
          </section>

          {/* Dedicated High-Converting Mentorship Funnel */}
          <SeoMentorFunnel
            examFocus="NEET"
            title="Bridge the 500-Mark Gap With Dedicated AIIMS Mentors"
            subtitle="Don't settle for 'just qualifying.' Learn the exact daily habits, revision cycles, and mock analysis methods top medical students used to score 670+ and earn their government MBBS seats."
          />

          {/* Section 4: FAQ Accordion */}
          <section className="my-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center justify-center gap-3">
                <HelpCircle className="w-7 h-7 text-emerald-400" />
                Frequently Asked Questions: Qualifying vs Cutoffs
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Realistic counsel on admission probabilities, fees, and state quota benchmarks.
              </p>
            </div>
            <SeoFaqAccordion items={faqs} />
          </section>

          {/* Final Call to Action */}
          <SeoCtaBanner
            title="Target a Government Medical College Seat"
            subtitle="Connect with medical mentors from AIIMS and top GMCs who will design a high-efficiency roadmap to get you past 660+."
            primaryBtnText="Claim Free Mentorship Call"
            primaryBtnHref="/free-mentorship-session"
            secondaryBtnText="Explore Top Medical Mentors"
            secondaryBtnHref="/mentors"
          />
        </div>
      </main>
    </div>
  );
}
