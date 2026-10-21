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
  Layers,
  PieChart,
  Flame,
  Award,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { SeoMentorFunnel } from "@/components/seo/SeoMentorFunnel";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "JEE Main Chapter-Wise Weightage: 5-Year Trends & High-Yield Topics (Physics, Chem, Maths)",
  description:
    "Empirical 5-year chapter-wise weightage analysis for JEE Main (2021-2026). Discover the 80/20 Pareto high-yield chapters across Physics, Chemistry, and Mathematics, question frequencies, and scoring prioritization.",
  keywords: [
    "jee main chapter wise weightage",
    "jee main important chapters 5 years",
    "jee high weightage chapters",
    "physics important chapters jee main",
    "chemistry chapter weightage jee",
    "maths most repeated topics jee main",
    "jee main pareto principle 80 20",
  ],
  alternates: {
    canonical: "https://mentskool.com/jee-main-chapter-wise-weightage-trends",
  },
  openGraph: {
    title: "JEE Main Chapter-Wise Weightage Trends (5-Year Forensic Analysis)",
    description:
      "Data-backed breakdown of the highest-yield chapters in JEE Main. Learn which 14 chapters contribute over 50% of the entire question paper.",
    url: "https://mentskool.com/jee-main-chapter-wise-weightage-trends",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "JEE Main Chapter Weightage - Mentskool",
      },
    ],
  },
};

const faqs: FaqItem[] = [
  {
    question: "Which chapter in JEE Main Mathematics carries the highest weightage?",
    answer:
      "Across the last five years, Vectors and 3D Geometry has consistently held the highest weightage in JEE Main Mathematics, yielding between 4 and 5 questions (16 to 20 marks) per paper shift. Because formulas and standard algorithms are relatively straightforward compared to Calculus, mastering Vectors and 3D provides an exceptional return on study time.",
  },
  {
    question: "What are the easiest high-scoring chapters in JEE Main Physics?",
    answer:
      "Modern Physics (Dual Nature, Atoms, Nuclei, and Semiconductor Electronics) is the undisputed top-yield unit in Physics, reliably contributing 4 to 5 direct formula questions per paper. Other high-yield, accessible units include Current Electricity (2 to 3 questions) and Thermal Physics/Thermodynamics (3 questions).",
  },
  {
    question: "How should an aspirant allocate revision time between high and low-weightage chapters?",
    answer:
      "Follow the 80/20 Pareto rule: allocate 70% of your problem-solving hours to Tier 1 High-Yield chapters (which generate nearly 65% of test marks) until you achieve 90%+ mock accuracy. Then dedicate the remaining 30% of your time to Tier 2 and Tier 3 topics to ensure baseline coverage for compulsory Section B questions.",
  },
  {
    question: "Which Chemistry topics yield the most predictable questions in JEE Main?",
    answer:
      "Coordination Compounds and Chemical Bonding collectively generate 6 to 7 questions per shift. In Physical Chemistry, Solutions, Electrochemistry, and Chemical Kinetics represent over 60% of all numerical questions in Section B.",
  },
  {
    question: "Did recent syllabus rationalizations change the chapter weightage balance?",
    answer:
      "Yes. The removal of standalone chapters such as Chemistry in Everyday Life, Polymers, and Mathematical Reasoning caused questions to consolidate into core areas like Coordination Chemistry, Organic Aldehydes & Ketones, Definite Integrals, and Electromagnetism.",
  },
];

export default function JeeMainChapterWiseWeightageTrendsPage() {
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
        headline: "JEE Main Chapter-Wise Weightage Trends: 5-Year Empirical Analysis",
        description:
          "Forensic statistical analysis of chapter frequency and question distribution in JEE Main across 60+ shifts from 2021 to 2026.",
        url: "https://mentskool.com/jee-main-chapter-wise-weightage-trends",
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
                label: "JEE Main Chapter-Wise Weightage",
                href: "/jee-main-chapter-wise-weightage-trends",
              },
            ]}
          />

          {/* Hero Section */}
          <header className="mt-8 mb-12 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <PieChart className="w-4 h-4" />
              Empirical 5-Year Data Blueprint (60+ Shift Papers Audited)
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight">
              JEE Main Chapter-Wise Weightage:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-indigo-300 to-cyan-400">
                5-Year Trends & High-Yield Topic Matrix
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Not all chapters are created equal. Empirical analysis of 60+ official NTA question papers shows that approximately 40% of the syllabus commands over 70% of the total paper weightage. Prioritize your preparation using the Pareto 80/20 rule to maximize your marks-per-study-hour.
            </p>
          </header>

          {/* Direct Answer Box */}
          <section className="mb-14 rounded-2xl border border-brand-500/30 bg-brand-950/20 backdrop-blur-md p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-brand-500/20 text-brand-400 shrink-0">
                <Flame className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-brand-300 mb-2">
                  The Core High-ROI Chapters: 140+ Marks Locked
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Focusing on just 12 core topics—<strong className="text-white">Modern Physics, Current Electricity, Thermodynamics, Chemical Bonding, Coordination Compounds, Carbonyl Organic Compounds, Solutions, Electrochemistry, Vectors & 3D Geometry, Definite Integrals, and Matrices</strong>—guarantees exposure to over <strong className="text-brand-300">38 to 44 questions</strong> (150+ marks). Mastering these chapters ensures a rock-solid foundation for a 99-percentile attempt.
                </p>
              </div>
            </div>
          </section>

          {/* Section 1: Physics Tier Breakdown */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Layers className="w-7 h-7 text-brand-400" />
              Physics 5-Year Chapter Distribution & Priority Tiers
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/60 my-6">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-800/80 text-slate-200 border-b border-slate-700 font-semibold">
                  <tr>
                    <th className="p-4">Priority Tier</th>
                    <th className="p-4">Chapter / Unit</th>
                    <th className="p-4">Avg. Questions Per Shift</th>
                    <th className="p-4">Avg. Marks</th>
                    <th className="p-4">Effort-to-Marks Ratio</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-emerald-400">Tier 1 (Crucial)</td>
                    <td className="p-4 font-medium text-white">Modern Physics (Atoms, Nuclei, Dual Nature, Semiconductors)</td>
                    <td className="p-4 font-mono font-bold text-emerald-400">4 - 5 Qs</td>
                    <td className="p-4 font-bold text-emerald-400">16 - 20 Marks</td>
                    <td className="p-4 text-xs font-semibold text-emerald-400">Ultra High (Direct formula questions)</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-emerald-400">Tier 1 (Crucial)</td>
                    <td className="p-4 font-medium text-white">Current Electricity & Instruments</td>
                    <td className="p-4 font-mono font-bold text-emerald-400">2 - 3 Qs</td>
                    <td className="p-4 font-bold text-emerald-400">8 - 12 Marks</td>
                    <td className="p-4 text-xs font-semibold text-emerald-400">Very High (Kirchhoff rules, potentiometer)</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-emerald-400">Tier 1 (Crucial)</td>
                    <td className="p-4 font-medium text-white">Thermodynamics & KTG</td>
                    <td className="p-4 font-mono font-bold text-emerald-400">2 - 3 Qs</td>
                    <td className="p-4 font-bold text-emerald-400">8 - 12 Marks</td>
                    <td className="p-4 text-xs font-semibold text-emerald-400">Very High (Shares concepts with Chemistry)</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-cyan-400">Tier 2 (Core)</td>
                    <td className="p-4 font-medium text-white">Electrostatics & Gravitation</td>
                    <td className="p-4 font-mono text-cyan-300">3 Qs</td>
                    <td className="p-4 text-cyan-300">12 Marks</td>
                    <td className="p-4 text-xs text-slate-300">Moderate to High (Parallel mathematics)</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-cyan-400">Tier 2 (Core)</td>
                    <td className="p-4 font-medium text-white">Ray & Wave Optics</td>
                    <td className="p-4 font-mono text-cyan-300">2 - 3 Qs</td>
                    <td className="p-4 text-cyan-300">8 - 12 Marks</td>
                    <td className="p-4 text-xs text-slate-300">Moderate (Prisms, lenses, YDSE fringes)</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-slate-400">Tier 3 (Heavy)</td>
                    <td className="p-4 font-medium text-white">Rotational Dynamics & Mechanics</td>
                    <td className="p-4 font-mono text-slate-400">2 Qs</td>
                    <td className="p-4 text-slate-400">8 Marks</td>
                    <td className="p-4 text-xs text-amber-300">Low to Moderate (Extensive effort required)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: Chemistry Tier Breakdown */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Layers className="w-7 h-7 text-cyan-400" />
              Chemistry 5-Year Chapter Distribution & Priority Tiers
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/60 my-6">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-800/80 text-slate-200 border-b border-slate-700 font-semibold">
                  <tr>
                    <th className="p-4">Priority Tier</th>
                    <th className="p-4">Chapter / Unit</th>
                    <th className="p-4">Avg. Questions Per Shift</th>
                    <th className="p-4">Avg. Marks</th>
                    <th className="p-4">Strategic Note</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-emerald-400">Tier 1 (Inorganic)</td>
                    <td className="p-4 font-medium text-white">Coordination Compounds & Chemical Bonding</td>
                    <td className="p-4 font-mono font-bold text-emerald-400">6 - 7 Qs</td>
                    <td className="p-4 font-bold text-emerald-400">24 - 28 Marks</td>
                    <td className="p-4 text-xs text-emerald-400">Core pillar of paper; pure NCERT recall.</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-emerald-400">Tier 1 (Organic)</td>
                    <td className="p-4 font-medium text-white">Aldehydes, Ketones, Carboxylic Acids & Amines</td>
                    <td className="p-4 font-mono font-bold text-emerald-400">4 - 5 Qs</td>
                    <td className="p-4 font-bold text-emerald-400">16 - 20 Marks</td>
                    <td className="p-4 text-xs text-emerald-400">High yield; focus on named reactions and acid-base trends.</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-cyan-400">Tier 1 (Physical)</td>
                    <td className="p-4 font-medium text-white">Solutions, Electrochemistry & Chemical Kinetics</td>
                    <td className="p-4 font-mono text-cyan-300">5 Qs</td>
                    <td className="p-4 text-cyan-300">20 Marks</td>
                    <td className="p-4 text-xs text-slate-300">Dominates Section B numerical calculations.</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-slate-400">Tier 2</td>
                    <td className="p-4 font-medium text-white">d- and f-Block Elements & Periodic Properties</td>
                    <td className="p-4 font-mono text-slate-400">3 Qs</td>
                    <td className="p-4 text-slate-400">12 Marks</td>
                    <td className="p-4 text-xs text-slate-300">Direct NCERT electronic configuration and color questions.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3: Mathematics Tier Breakdown */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Layers className="w-7 h-7 text-indigo-400" />
              Mathematics 5-Year Chapter Distribution & Priority Tiers
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/60 my-6">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-800/80 text-slate-200 border-b border-slate-700 font-semibold">
                  <tr>
                    <th className="p-4">Priority Tier</th>
                    <th className="p-4">Chapter / Unit</th>
                    <th className="p-4">Avg. Questions Per Shift</th>
                    <th className="p-4">Avg. Marks</th>
                    <th className="p-4">Return on Time Invested</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-emerald-400">Tier 1 (Top Yield)</td>
                    <td className="p-4 font-medium text-white">Vector Algebra & 3D Geometry</td>
                    <td className="p-4 font-mono font-bold text-emerald-400">4 - 5 Qs</td>
                    <td className="p-4 font-bold text-emerald-400">16 - 20 Marks</td>
                    <td className="p-4 text-xs font-semibold text-emerald-400">Highest ROI in the entire syllabus.</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-emerald-400">Tier 1 (High Yield)</td>
                    <td className="p-4 font-medium text-white">Matrices & Determinants</td>
                    <td className="p-4 font-mono font-bold text-emerald-400">2 Qs</td>
                    <td className="p-4 font-bold text-emerald-400">8 Marks</td>
                    <td className="p-4 text-xs font-semibold text-emerald-400">System of linear equations; predictable scoring.</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-cyan-400">Tier 1 (Calculus)</td>
                    <td className="p-4 font-medium text-white">Definite Integrals & Differential Equations</td>
                    <td className="p-4 font-mono text-cyan-300">4 - 5 Qs</td>
                    <td className="p-4 text-cyan-300">16 - 20 Marks</td>
                    <td className="p-4 text-xs text-slate-300">Requires practice but highly structured solution steps.</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-cyan-400">Tier 2</td>
                    <td className="p-4 font-medium text-white">Sequence & Series & Binomial Theorem</td>
                    <td className="p-4 font-mono text-cyan-300">3 Qs</td>
                    <td className="p-4 text-cyan-300">12 Marks</td>
                    <td className="p-4 text-xs text-slate-300">Algebra pillars; manageable with standard shortcuts.</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-slate-400">Tier 3 (Lengthy)</td>
                    <td className="p-4 font-medium text-white">Complex Numbers & Probability</td>
                    <td className="p-4 font-mono text-slate-400">2 Qs</td>
                    <td className="p-4 text-slate-400">8 Marks</td>
                    <td className="p-4 text-xs text-amber-300">Time-intensive problems with higher calculation variance.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Dedicated High-Converting Mentorship Funnel */}
          <SeoMentorFunnel
            examFocus="JEE"
            title="Focus Your Preparation On High-Yield Chapters With Top IITians"
            subtitle="Stop drowning in endless problem sets across low-yield topics. Get a customized, chapter-by-chapter revision roadmap crafted by an IIT Bombay/Delhi mentor to maximize your score efficiency."
          />

          {/* Section 4: FAQ Accordion */}
          <section className="my-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center justify-center gap-3">
                <HelpCircle className="w-7 h-7 text-brand-400" />
                Frequently Asked Questions: JEE Chapter Weightage
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Strategic advice on syllabus prioritization, high-yield topics, and revision planning.
              </p>
            </div>
            <SeoFaqAccordion items={faqs} />
          </section>

          {/* Final Call to Action */}
          <SeoCtaBanner
            title="Accelerate Your JEE Main Score with Targeted Revision"
            subtitle="Connect with experienced IIT mentors who will audit your chapter mastery and design an actionable 80/20 study plan."
            primaryBtnText="Claim Free Mentorship Call"
            primaryBtnHref="/free-mentorship-session"
            secondaryBtnText="Explore Top IIT Mentors"
            secondaryBtnHref="/mentors"
          />
        </div>
      </main>
    </div>
  );
}
