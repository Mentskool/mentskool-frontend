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
  FlaskConical,
  Layers,
  GitBranch,
  Award,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { SeoMentorFunnel } from "@/components/seo/SeoMentorFunnel";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "Complete Organic Chemistry Reaction Roadmap for JEE & NEET: Inter-Conversions & Cheat Sheets",
  description:
    "Master the complete Organic Chemistry reaction roadmap for JEE and NEET. Conversions from alkanes to acids, benzene to diazonium salts, reagent selector cheat sheets (PCC, LiAlH4, DIBAL-H), and functional group distinguishing tests.",
  keywords: [
    "organic chemistry reaction roadmap",
    "organic conversions jee neet",
    "named reactions cheat sheet",
    "diazonium salt reactions roadmap",
    "reagent cheat sheet organic chemistry",
    "distinguishing tests organic chemistry iodoform tollens",
    "how to master organic chemistry conversions",
  ],
  alternates: {
    canonical: "https://mentskool.com/organic-chemistry-reactions-roadmap-jee-neet",
  },
  openGraph: {
    title: "Organic Chemistry Reaction Roadmap & Conversion Flowcharts for JEE & NEET",
    description:
      "Connect all functional group reactions into a single visual roadmap. Complete flowcharts for aliphatic and aromatic conversions, reagent selectors, and qualitative identification tests.",
    url: "https://mentskool.com/organic-chemistry-reactions-roadmap-jee-neet",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Organic Chemistry Roadmap - Mentskool",
      },
    ],
  },
};

const faqs: FaqItem[] = [
  {
    question: "Why do students struggle with multi-step Organic Chemistry conversions in JEE and NEET?",
    answer:
      "Most students memorize organic reactions as isolated, chapter-bound facts (e.g., studying Alcohols in October and Aldehydes in December). When JEE and NEET present synthesis questions (e.g., 'Convert Benzene into Benzaldehyde via intermediate A and B'), students lack the mental network linking different functional groups together. Organizing reactions into a single interconnected roadmap resolves this gap.",
  },
  {
    question: "What is the key difference in selectivity between $LiAlH_4$ and $NaBH_4$?",
    answer:
      "Lithium Aluminium Hydride ($LiAlH_4$) is a powerful reducing agent that reduces Aldehydes, Ketones, Carboxylic Acids, Esters, and Acid Chlorides down to primary or secondary alcohols. Sodium Borohydride ($NaBH_4$) is milder and more selective: it reduces ONLY Aldehydes, Ketones, and Acid Chlorides, leaving Carboxylic Acids, Esters, and Amides completely untouched.",
  },
  {
    question: "What functional structural unit is required to give a positive Iodoform Test?",
    answer:
      "A compound yields a bright yellow precipitate of Iodoform ($CHI_3$) upon heating with $I_2/NaOH$ if it contains either: 1) A methyl ketone group ($CH_3-C=O$), or 2) A methyl carbinol group ($CH_3-CH(OH)-$) that oxidizes in situ into a methyl ketone. Common positives include Ethanol, Acetaldehyde, Acetone, and 2-Propanol.",
  },
  {
    question: "Why is the Benzene Diazonium Chloride ($ArN_2^+ Cl^-$) salt called the 'Synthetic Highway'?",
    answer:
      "Because aromatic diazonium salts undergo versatile nucleophilic displacement via Sandmeyer and related reactions. In a single step, $-N_2^+$ can be replaced with $-Cl$ (Sandmeyer), $-Br$, $-CN$, $-I$ (warm $KI$), $-OH$ (warm $H_2O$), $-H$ ($H_3PO_2$), or $-F$ (Balz-Schiemann), enabling synthesis of nearly any substituted benzene.",
  },
  {
    question: "What is the primary role of Pyridinium Chlorochromate (PCC)?",
    answer:
      "PCC is a mild oxidizing agent that cleanly converts primary ($1^\circ$) alcohols into aldehydes without over-oxidizing them to carboxylic acids, and converts secondary ($2^\circ$) alcohols into ketones. Unlike aqueous chromic acid or alkaline $KMnO_4$, PCC halts oxidation at the carbonyl stage.",
  },
];

export default function OrganicChemistryReactionsRoadmapJeeNeetPage() {
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
        headline: "Complete Organic Chemistry Reaction Roadmap for JEE & NEET: Inter-Conversions & Cheat Sheets",
        description:
          "Authoritative synthesis guide and reaction roadmap connecting aliphatic, aromatic, and reagent mechanisms for JEE and NEET aspirants.",
        url: "https://mentskool.com/organic-chemistry-reactions-roadmap-jee-neet",
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
                label: "Organic Chemistry Roadmap",
                href: "/organic-chemistry-reactions-roadmap-jee-neet",
              },
            ]}
          />

          {/* Hero Section */}
          <header className="mt-8 mb-12 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <GitBranch className="w-4 h-4" />
              Unified Synthesis &amp; Reagent Architecture
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight">
              Organic Chemistry Reaction Roadmap:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
                Inter-Conversions &amp; Reagent Cheat Sheets
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Organic Chemistry questions in JEE and NEET evaluate your ability to link functional groups together. Master the aliphatic and aromatic conversion flowcharts, reagent selectivity rules, and qualitative identification tests top rankers use to solve synthesis problems.
            </p>
          </header>

          {/* Direct Answer Box */}
          <section className="mb-14 rounded-2xl border border-cyan-500/30 bg-cyan-950/20 backdrop-blur-md p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-400 shrink-0">
                <FlaskConical className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-cyan-300 mb-2">
                  The Core Principle: The 2 Master Reaction Highways
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {"Every organic conversion in JEE & NEET flows along two master pathways: 1) "}
                  <strong className="text-white">The Aliphatic Oxidation/Reduction Ladder</strong>
                  {" ($R-H \\to R-X \\to R-OH \\to R-CHO \\to R-COOH \\to \\text{Derivatives}$), and 2) "}
                  <strong className="text-white">The Aromatic Diazonium Highway</strong>
                  {" ($\\text{Benzene} \\to \\text{Nitrobenzene} \\to \\text{Aniline} \\to ArN_2^+ \\to \\text{Any Functionalized Arene}$). Connect these two networks, and multi-step synthesis questions become straightforward."}
                </p>
              </div>
            </div>
          </section>

          {/* Section 1: The Aliphatic Conversion Ladder */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Layers className="w-7 h-7 text-cyan-400" />
              1. The Aliphatic Oxidation &amp; Functionalization Ladder
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/60 my-6">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-800/80 text-slate-200 border-b border-slate-700 font-semibold">
                  <tr>
                    <th className="p-4">Transformation Step</th>
                    <th className="p-4">Standard Reagent</th>
                    <th className="p-4">Reaction Class / Mechanism</th>
                    <th className="p-4">Key Caveat</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-white">Alkane $\to$ Haloalkane</td>
                    <td className="p-4 text-emerald-400">$Cl_2 / h\nu$ or $Br_2 / h\nu$</td>
                    <td className="p-4 text-xs">Free radical substitution</td>
                    <td className="p-4 text-xs text-slate-400">{"$Br_2$ is highly selective for $3^\\circ > 2^\\circ > 1^\\circ$ carbons."}</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-white">{"Haloalkane $\\to$ Alcohol"}</td>
                    <td className="p-4 text-emerald-400">Aqueous $KOH$ or $NaOH$</td>
                    <td className="p-4 text-xs">{"Nucleophilic Substitution ($S_N1$ or $S_N2$)"}</td>
                    <td className="p-4 text-xs text-slate-400">{"Alcoholic $KOH$ causes elimination ($\\beta$-elimination to alkene!)."}</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-white">{"$1^\\circ$ Alcohol $\\to$ Aldehyde"}</td>
                    <td className="p-4 text-emerald-400">{"PCC in $CH_2Cl_2$ or Collins reagent"}</td>
                    <td className="p-4 text-xs">Controlled mild oxidation</td>
                    <td className="p-4 text-xs text-slate-400">{"Avoid $KMnO_4$; it over-oxidizes directly to carboxylic acid."}</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-white">{"Aldehyde $\\to$ Carboxylic Acid"}</td>
                    <td className="p-4 text-emerald-400">{"Acidified $K_2Cr_2O_7$ or Tollen's reagent"}</td>
                    <td className="p-4 text-xs">Oxidation</td>
                    <td className="p-4 text-xs text-slate-400">Forms carboxylate ion under alkaline conditions.</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-white">{"Carboxylic Acid $\\to$ Acid Chloride"}</td>
                    <td className="p-4 text-emerald-400">{"$SOCl_2$ (Thionyl Chloride) / Pyridine"}</td>
                    <td className="p-4 text-xs">Nucleophilic acyl substitution</td>
                    <td className="p-4 text-xs text-slate-400">{"Preferred over $PCl_5$ because byproducts ($SO_2, HCl$) are gases."}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: The Aromatic Diazonium Highway */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <GitBranch className="w-7 h-7 text-teal-400" />
              {"2. The Aromatic Diazonium Highway ($ArN_2^+ Cl^-$)"}
            </h2>
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-4">
              <p className="text-slate-300 text-sm leading-relaxed">
                {"Benzene Diazonium Chloride, synthesized via diazotization of Aniline with $NaNO_2 + \\text{conc. } HCl$ at $0\\text{--}5^\\circ\\text{C}$, serves as the central hub for aromatic conversions:"}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono text-slate-300 pt-1">
                <div className="p-3 rounded-lg bg-slate-800/70 border border-slate-700">
                  <strong className="text-emerald-400 block mb-1">Sandmeyer Reactions:</strong>
                  {"+ Cu_2Cl_2/HCl → Chlorobenzene"}<br />
                  {"+ Cu_2Br_2/HBr → Bromobenzene"}<br />
                  {"+ CuCN/KCN → Benzonitrile"}
                </div>
                <div className="p-3 rounded-lg bg-slate-800/70 border border-slate-700">
                  <strong className="text-teal-400 block mb-1">Direct Displacements:</strong>
                  {"+ Warm KI → Iodobenzene"}<br />
                  {"+ HBF_4 → Fluorobenzene (Schiemann)"}<br />
                  {"+ Warm H_2O → Phenol"}
                </div>
                <div className="p-3 rounded-lg bg-slate-800/70 border border-slate-700">
                  <strong className="text-cyan-400 block mb-1">{"Deamination & Coupling:"}</strong>
                  {"+ H_3PO_2 / H_2O → Benzene (Removal of -NH_2)"}<br />
                  {"+ Phenol (pH 9-10) → Orange Azo Dye"}<br />
                  {"+ Aniline (pH 4-5) → Yellow Azo Dye"}
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Reagent Selectivity Cheat Sheet */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <FlaskConical className="w-7 h-7 text-amber-400" />
              3. The Selective Reagents Cheat Sheet
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                <strong className="text-emerald-400 block text-sm">DIBAL-H (Diisobutylaluminium Hydride)</strong>
                <p>{"At $-78^\\circ\\text{C}$, selectively reduces Esters ($RCOOR'$) and Nitriles ($RCN$) directly to Aldehydes without over-reducing to alcohols."}</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                <strong className="text-teal-400 block text-sm">{"Lindlar's Catalyst ($H_2 / Pd / CaCO_3 + \\text{quinoline}$)"}</strong>
                <p>{"Selectively hydrogenates Alkynes ($R-C\\equiv C-R$) into "}<em>cis</em>{"-Alkenes (syn-addition). For "}<em>trans</em>{"-alkenes, use Birch Reduction ($Na / \\text{liq. } NH_3$)."}</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                <strong className="text-cyan-400 block text-sm">{"Ozonolysis ($O_3 / Zn-H_2O$)"}</strong>
                <p>{"Reductive ozonolysis cleaves $C=C$ double bonds cleanly into aldehydes and ketones. If oxidative ($O_3 / H_2O_2$), aldehydes oxidize to carboxylic acids."}</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                <strong className="text-amber-400 block text-sm">{"Lucas Reagent ($\\text{conc. } HCl + \\text{anh. } ZnCl_2$)"}</strong>
                <p>{"Distinguishes alcohols: $3^\\circ$ alcohols give immediate turbidity; $2^\\circ$ give turbidity in 5 minutes; $1^\\circ$ remain clear at room temperature."}</p>
              </div>
            </div>
          </section>

          {/* Dedicated High-Converting Mentorship Funnel */}
          <SeoMentorFunnel
            examFocus="BOTH"
            title="Master Organic Reaction Mechanisms With Top IITian Mentors"
            subtitle="Connect organic reactions into an intuitive, interconnected network. Get weekly 1-on-1 strategy sessions, synthesis roadmaps, and mock tests with top IIT and AIIMS rankers."
          />

          {/* Section 4: FAQ Accordion */}
          <section className="my-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center justify-center gap-3">
                <HelpCircle className="w-7 h-7 text-brand-400" />
                Frequently Asked Questions: Organic Chemistry
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Expert guidance on mastering conversions, named reactions, and distinguishing tests.
              </p>
            </div>
            <SeoFaqAccordion items={faqs} />
          </section>

          {/* Final Call to Action */}
          <SeoCtaBanner
            title="Master Organic Chemistry Conversions"
            subtitle="Connect with experienced mentors who will help you connect reactions into an intuitive roadmap and boost your score."
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
