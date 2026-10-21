import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  GraduationCap,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  Compass,
  Layers,
  Award,
  TrendingUp,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { SeoMentorFunnel } from "@/components/seo/SeoMentorFunnel";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "Can I Get an NIT With 85 to 90 Percentile? Category & Home State Quota Cutoff Analysis",
  description:
    "Discover whether you can secure an NIT with 85 to 90 percentile in JEE Main. Detailed cutoff breakdown for General, OBC, EWS, SC, ST, Female Supernumerary, and Home State quotas in CSAB rounds.",
  keywords: [
    "can i get nit with 85 percentile",
    "can i get nit with 90 percentile",
    "nit cutoffs for 85 percentile general obc sc st",
    "nit home state quota cutoffs",
    "which nit can i get at 88 percentile",
    "csab special rounds nit cutoffs",
    "lowest percentile to get an nit",
  ],
  alternates: {
    canonical: "https://mentskool.com/can-i-get-nit-with-85-to-90-percentile",
  },
  openGraph: {
    title: "Can I Get an NIT With 85 to 90 Percentile? Cutoff Analysis",
    description:
      "A realistic, data-backed analysis of NIT admission possibilities at 85 to 90 percentile in JEE Main across all reservation categories and home-state quotas.",
    url: "https://mentskool.com/can-i-get-nit-with-85-to-90-percentile",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "NIT Cutoffs 85 to 90 Percentile - Mentskool",
      },
    ],
  },
};

const faqs: FaqItem[] = [
  {
    question: "Can a General category student get an NIT with an 85 to 90 percentile?",
    answer:
      "For a General (Open) Other-State candidate seeking standard 4-year B.Tech programs (like CSE, ECE, or Mechanical), securing an NIT is extremely difficult because general other-state closing percentiles typically stop at 94.5 to 95.0 percentile. However, General candidates CAN enter premier NITs (such as NIT Rourkela, NIT Surat, NIT Agartala) at 88-91 percentile through 5-Year Integrated M.Sc programs (Physics, Chemistry, Applied Mathematics), or through North-Eastern NIT Home State quotas.",
  },
  {
    question: "Which NITs have the lowest cutoff percentiles for Home State students?",
    answer:
      "NIT Mizoram, NIT Nagaland, NIT Sikkim, NIT Arunachal Pradesh, NIT Meghalaya, and NIT Srinagar have significant Home State cutoff relaxations. In these institutes, Home State candidates with 80 to 88 percentile frequently secure seats in Civil, Mechanical, and Electrical Engineering during CSAB Special Rounds.",
  },
  {
    question: "Can an SC or ST student get an NIT with 85 percentile?",
    answer:
      "Yes, absolutely. An 85 to 90 percentile corresponds to an SC Category Rank between approximately 3,000 and 6,000, and an ST Category Rank between 800 and 1,800. In this range, SC and ST candidates comfortably qualify for Core branches (Mechanical, Civil, Chemical, Electrical) in top NITs (like NIT Warangal, VNIT Nagpur, NIT Calicut, and MNNIT Allahabad), and can secure CSE or ECE in newer NITs.",
  },
  {
    question: "How does the Female Supernumerary Quota affect NIT cutoffs at 85-90 percentile?",
    answer:
      "The Government of India mandates at least 20% female enrollment in NITs through supernumerary seats. This pushes female closing ranks significantly lower compared to gender-neutral ranks—often by 8,000 to 18,000 CRL positions, bringing several core branches in mid-tier NITs into reach for female candidates around the 89-91 percentile mark.",
  },
  {
    question: "What is the difference between JoSAA and CSAB Special Rounds for NIT admissions?",
    answer:
      "JoSAA conducts the primary 5-6 rounds of centralized counseling. CSAB (Central Seat Allocation Board) conducts 2 Special Rounds specifically to fill leftover vacancies after students withdraw to join IITs or state colleges. Because vacancies must be filled urgently, CSAB cutoffs often drop drastically, making CSAB the primary vehicle for 85-90 percentile admissions.",
  },
];

export default function CanIGetNitWith85To90PercentilePage() {
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
        headline: "Can I Get an NIT With 85 to 90 Percentile? Category & Home State Quota Cutoff Analysis",
        description:
          "Authoritative, data-backed guide on NIT admissions for 85-90 percentile candidates across all reservation categories.",
        url: "https://mentskool.com/can-i-get-nit-with-85-to-90-percentile",
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
                label: "NIT with 85-90 Percentile",
                href: "/can-i-get-nit-with-85-to-90-percentile",
              },
            ]}
          />

          {/* Hero Header */}
          <header className="mt-8 mb-12 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <Building2 className="w-4 h-4" />
              NIT Cutoff &amp; Allocation Reality Check
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight">
              Can I Get an NIT With{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-sky-300 to-indigo-400">
                85 to 90 Percentile in JEE Main?
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Millions of students wonder if the coveted 'NITian' tag is achievable with an 85 to 90 percentile. We break down the exact mathematical realities across General, OBC, EWS, SC, ST, Home State quotas, and CSAB Special Rounds.
            </p>
          </header>

          {/* Direct Answer Box */}
          <section className="mb-14 rounded-2xl border border-brand-500/30 bg-brand-950/20 backdrop-blur-md p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-brand-500/20 text-brand-400 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-brand-300 mb-2">
                  The Direct Answer: Yes, But It Depends Heavily on Three Variables
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Securing an NIT seat at 85 to 90 percentile (AIR <strong className="text-white">1,40,000 to 2,20,000</strong>) is <strong className="text-emerald-300">100% possible</strong> for: 1) Reserved category students (SC/ST/PwD), 2) Students with Home State quota in North-Eastern states, Goa, or J&amp;K, and 3) General candidates open to <strong className="text-white">5-Year Integrated M.Sc degrees</strong> or non-core branches in CSAB Special Round 2.
                </p>
              </div>
            </div>
          </section>

          {/* Section 1: Category Wise Feasibility Table */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Layers className="w-7 h-7 text-brand-400" />
              Category-Wise NIT Feasibility Matrix at 85 - 90 Percentile
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/60 my-6">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-800/80 text-slate-200 border-b border-slate-700 font-semibold">
                  <tr>
                    <th className="p-4">Candidate Category</th>
                    <th className="p-4">Expected Category Rank</th>
                    <th className="p-4">Admission Probability</th>
                    <th className="p-4">Realistic Branch Options</th>
                    <th className="p-4">Recommended Strategy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-bold text-white">General (Other State, Male)</td>
                    <td className="p-4 font-mono text-xs text-slate-400">1,40,000 - 2,10,000 CRL</td>
                    <td className="p-4 font-semibold text-amber-400">Low for 4-Yr B.Tech</td>
                    <td className="p-4 text-xs">Integrated M.Sc (NIT Rourkela/Surat), Mining/Production</td>
                    <td className="p-4 text-xs text-brand-300">Target CSAB Spot Round or Retake Session 2</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-bold text-white">General (Home State - NE/Goa/J&amp;K)</td>
                    <td className="p-4 font-mono text-xs text-slate-400">1,40,000 - 2,10,000 CRL</td>
                    <td className="p-4 font-semibold text-emerald-400">Very High</td>
                    <td className="p-4 text-xs">Civil, Mechanical, Electrical, ECE (Home State)</td>
                    <td className="p-4 text-xs text-emerald-300">Lock JoSAA Home State Round 1-5</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-bold text-white">General (Female Supernumerary)</td>
                    <td className="p-4 font-mono text-xs text-slate-400">1,40,000 - 2,10,000 CRL</td>
                    <td className="p-4 font-semibold text-sky-400">Moderate to High</td>
                    <td className="p-4 text-xs">Chemical, Metallurgy, Civil in newer NITs</td>
                    <td className="p-4 text-xs text-sky-300">Utilize 20% Supernumerary Seats in JoSAA</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-bold text-white">OBC-NCL / Gen-EWS</td>
                    <td className="p-4 font-mono text-xs text-slate-400">38,000 - 62,000 Cat Rank</td>
                    <td className="p-4 font-semibold text-sky-400">Moderate</td>
                    <td className="p-4 text-xs">Civil, Metallurgy, Production in NIT Raipur/Srinagar</td>
                    <td className="p-4 text-xs text-sky-300">Hold seat through CSAB Special Round 2</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-bold text-white">Scheduled Caste (SC)</td>
                    <td className="p-4 font-mono text-xs text-slate-400">3,200 - 6,500 SC Rank</td>
                    <td className="p-4 font-semibold text-emerald-400">Guaranteed</td>
                    <td className="p-4 text-xs">Mechanical, Electrical, Civil in Top 15 NITs</td>
                    <td className="p-4 text-xs text-emerald-300">Apply across All NITs in JoSAA</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-bold text-white">Scheduled Tribe (ST)</td>
                    <td className="p-4 font-mono text-xs text-slate-400">800 - 1,800 ST Rank</td>
                    <td className="p-4 font-semibold text-emerald-400">Guaranteed Top Branch</td>
                    <td className="p-4 text-xs">CSE, IT, ECE across Tier-2 and Tier-3 NITs</td>
                    <td className="p-4 text-xs text-emerald-300">Target Premier NIT Branches</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: Hidden Route: 5-Year Integrated M.Sc at Premier NITs */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Award className="w-7 h-7 text-indigo-400" />
              The Hidden Backdoor: 5-Year Integrated M.Sc at Top NITs
            </h2>
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-4 text-sm leading-relaxed text-slate-300">
              <p>
                Many general candidates at 88-91 percentile don&apos;t know that premier NITs like <strong className="text-white">NIT Rourkela, SVNIT Surat, and NIT Agartala</strong> offer 5-Year Integrated Master of Science degrees in Applied Physics, Chemistry, and Mathematics through regular JoSAA and CSAB counseling.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-800/70 border border-slate-700 space-y-2">
                  <h4 className="font-bold text-brand-300">Campus Placements Equality</h4>
                  <p className="text-xs text-slate-300">
                    At institutes like NIT Rourkela, Integrated M.Sc students in Mathematics &amp; Computing or Physics are permitted by most hiring tech companies (like Amazon, Oracle, and analytics consultancies) to sit for campus software placements alongside B.Tech students.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/70 border border-slate-700 space-y-2">
                  <h4 className="font-bold text-emerald-300">Internal Branch Sliding Options</h4>
                  <p className="text-xs text-slate-300">
                    Students maintaining a CGPA above 8.5 in their first year at several NITs can participate in branch change or minor degree programs in Computer Science and Data Science.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Jump to 98+ Percentile */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <TrendingUp className="w-7 h-7 text-brand-400" />
              The 35-Mark Difference: Jumping From 88 to 97+ Percentile
            </h2>
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-4">
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                If you are a General category candidate currently standing at 88 percentile and your heart is set on Computer Science or ECE at a Top-10 NIT (Trichy, Surathkal, Warangal, Calicut), you are <strong className="text-brand-300">only 35 to 45 marks away</strong> from reaching 97+ percentile.
              </p>
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 font-mono text-xs text-slate-200">
                Current: ~85 Marks (88th Percentile) &rarr; Target: ~125 Marks (97.5th Percentile) = Exactly +10 Questions Net Positive.
              </div>
              <p className="text-xs text-slate-400">
                You do not need to study 15 hours a day to add 10 correct questions. You only need to eliminate your recurring error patterns, master NCERT Inorganic Chemistry lines, and take timed mock tests with post-exam mentor audits.
              </p>
            </div>
          </section>

          {/* Mentorship Funnel Callout */}
          <SeoMentorFunnel
            examFocus="JEE"
            title="Want to Guarantee a Top NIT Rather Than Relying on Spot Rounds?"
            subtitle="Work 1-on-1 with IITian and NITian mentors who achieved 99+ percentiles. Get personal mock audits and custom error-reduction strategies to add 40+ marks."
          />

          {/* Section 4: FAQ Accordion */}
          <section className="my-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center justify-center gap-3">
                <HelpCircle className="w-7 h-7 text-brand-400" />
                Frequently Asked Questions: NITs at 85 to 90 Percentile
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Clear answers regarding category relaxations, CSAB rounds, and female supernumerary quota.
              </p>
            </div>
            <SeoFaqAccordion items={faqs} />
          </section>

          {/* Final Call to Action */}
          <SeoCtaBanner
            title="Analyze Your Exact NIT Admission Probability"
            subtitle="Connect with our counseling mentors for a personalized choice-filling strategy session. Discover your best Home State and CSAB possibilities."
            primaryBtnText="Claim Free Counseling Call"
            primaryBtnHref="/free-mentorship-session"
            secondaryBtnText="Explore All Mentors"
            secondaryBtnHref="/mentors"
          />
        </div>
      </main>
    </div>
  );
}
