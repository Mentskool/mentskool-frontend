import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  GraduationCap,
  CheckCircle2,
  AlertTriangle,
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
  title: "Best Engineering Colleges for 80 to 90 Percentile in JEE Main: GFTIs, State Govt & Top Private",
  description:
    "Complete admission guide for 80 to 90 percentile in JEE Main. Discover top GFTIs, premier state government colleges (YMCA, IET, SGSITS), IPU top institutes (MAIT, MSIT), LNMIIT, and Thapar cutoff criteria.",
  keywords: [
    "colleges for 80 to 90 percentile in jee main",
    "best engineering colleges at 85 percentile",
    "gfti cutoff for 85 percentile",
    "mait msit cutoff 80 to 90 percentile",
    "can i get thapar or lnmiit at 85 percentile",
    "engineering colleges under 2 lakh rank",
    "state government engineering colleges jee main",
  ],
  alternates: {
    canonical: "https://mentskool.com/jee-main-colleges-for-80-to-90-percentile",
  },
  openGraph: {
    title: "Best Engineering Colleges for 80 to 90 Percentile in JEE Main",
    description:
      "Targeting GFTIs, state government colleges, and premier private universities between 80 and 90 percentile. Comprehensive branch choices, CSAB rounds, and placement realities.",
    url: "https://mentskool.com/jee-main-colleges-for-80-to-90-percentile",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "80 to 90 Percentile JEE Main Colleges - Mentskool",
      },
    ],
  },
};

const faqs: FaqItem[] = [
  {
    question: "What All India Rank (CRL) is 80 to 90 percentile in JEE Main?",
    answer:
      "An 80 to 90 percentile in JEE Main corresponds to an All India Rank (AIR / CRL) range of roughly 1,40,000 to 2,80,000. In terms of raw score, this represents approximately 70 to 115 marks out of 300 depending on shift difficulty.",
  },
  {
    question: "Can I get any Government Funded Technical Institute (GFTI) with an 85 percentile?",
    answer:
      "Yes! Through CSAB Special Rounds (Round 1 and Round 2), several reputed central government institutions admit candidates with 80-90 percentile. Notable examples include SLIET Longowal (Punjab), Gurukula Kangri Vishwavidyalaya (Haridwar), Tezpur University (Assam), Mizoram University (Aizawl), and Shri Mata Vaishno Devi University (SMVDU Katra) in branches like ECE, Mechanical, and Civil.",
  },
  {
    question: "Which are the best IPU Delhi colleges accessible in the 80-90 percentile range?",
    answer:
      "For Delhi region candidates (85% state quota), 80 to 90 percentile unlocks the top tier of GGSIPU: Maharaja Agrasen Institute of Technology (MAIT - IT, ECE, EEE), Maharaja Surajmal Institute of Technology (MSIT - ECE), University School of Automation and Robotics (USAR - Artificial Intelligence & Data Science), and Bharati Vidyapeeth (BVCOE - CSE/IT).",
  },
  {
    question: "Can I get Computer Science at Thapar or LNMIIT with an 85 percentile?",
    answer:
      "For general outside-quota candidates, CSE Core at Thapar or LNMIIT generally closes around 94-96 percentile. However, at 85 to 90 percentile, you can comfortably secure Electronics and Communication Engineering (ECE), Electrical and Computer Engineering (EEC), Mechanical, or specialized dual-degree programs, which still share campus placement access with top tech firms.",
  },
  {
    question: "How do CSAB Special Rounds help students in the 85-90 percentile range?",
    answer:
      "After the 5 or 6 rounds of JoSAA counseling conclude, hundreds of seats in NITs, IIITs, and GFTIs remain vacant due to IIT seat withdrawals and medical switchovers. CSAB Special Rounds conduct fresh allotment where closing ranks relax dramatically by 20,000 to 60,000 positions, making several GFTIs and newer IIIT branches accessible.",
  },
];

export default function CollegesFor80To90PercentilePage() {
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
        headline: "Best Engineering Colleges for 80 to 90 Percentile in JEE Main: GFTIs, State Govt & Top Private",
        description:
          "Authoritative guide to engineering institutions, cutoffs, and counseling portals accepting 80-90 percentile in JEE Main.",
        url: "https://mentskool.com/jee-main-colleges-for-80-to-90-percentile",
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
                label: "80 to 90 Percentile Colleges",
                href: "/jee-main-colleges-for-80-to-90-percentile",
              },
            ]}
          />

          {/* Hero Header */}
          <header className="mt-8 mb-12 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <Building2 className="w-4 h-4" />
              Strategic College Admissions Matrix
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight">
              Best Engineering Colleges for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-sky-300 to-indigo-400">
                80 to 90 Percentile in JEE Main
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
              An 80 to 90 percentile places you in the top 20% of engineering aspirants nationwide. Learn how to leverage GFTIs via CSAB special rounds, top-tier state government universities, and premier private colleges to secure high-growth career launches.
            </p>
          </header>

          {/* Direct Answer Box */}
          <section className="mb-14 rounded-2xl border border-brand-500/30 bg-brand-950/20 backdrop-blur-md p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-brand-500/20 text-brand-400 shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-brand-300 mb-2">
                  The Competitive Edge of the 80-90 Percentile Cohort
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Students in the 80 to 90 percentile band (AIR <strong className="text-white">1,40,000 to 2,80,000</strong>) possess solid fundamental clarity. With smart counseling strategy across <strong className="text-brand-300">CSAB Special Rounds, JAC Delhi spot rounds, and state counseling</strong>, you can enter elite institutes like YMCA Faridabad, MAIT Delhi, SLIET, Jaypee Noida, and Thapar with median placement statistics between ₹7.5 LPA and ₹12 LPA.
                </p>
              </div>
            </div>
          </section>

          {/* Section 1: Detailed College Breakdown Table */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Layers className="w-7 h-7 text-brand-400" />
              Premier Institutes Matrix for 80 - 90 Percentile
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm">
              Below is the verified list of government-funded institutes, premier state technical universities, and top-tier private colleges accepting students in the 80th to 90th percentile:
            </p>

            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/60 my-6">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-800/80 text-slate-200 border-b border-slate-700 font-semibold">
                  <tr>
                    <th className="p-4">Institute Name</th>
                    <th className="p-4">Category / Type</th>
                    <th className="p-4">Counseling Channel</th>
                    <th className="p-4">Accessible Branches</th>
                    <th className="p-4">Median CTC</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-bold text-white">Maharaja Agrasen Institute of Tech (MAIT)</td>
                    <td className="p-4 text-xs text-slate-400">IPU Top Tier</td>
                    <td className="p-4 text-xs text-brand-300 font-mono">GGSIPU Counseling</td>
                    <td className="p-4 text-xs">IT, ECE, EEE (Delhi &amp; Outside Quota)</td>
                    <td className="p-4 font-semibold text-emerald-400">₹8.5 - ₹10.2 LPA</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-bold text-white">JC Bose UST (YMCA Faridabad)</td>
                    <td className="p-4 text-xs text-slate-400">State Govt University</td>
                    <td className="p-4 text-xs text-brand-300 font-mono">HSTES Haryana</td>
                    <td className="p-4 text-xs">ECE, Electrical, Mechanical</td>
                    <td className="p-4 font-semibold text-emerald-400">₹7.2 - ₹9.0 LPA</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-bold text-white">SLIET Longowal</td>
                    <td className="p-4 text-xs text-slate-400">Central Govt GFTI</td>
                    <td className="p-4 text-xs text-brand-300 font-mono">JoSAA / CSAB Special</td>
                    <td className="p-4 text-xs">CSE (Home State), ECE, Mechanical</td>
                    <td className="p-4 font-semibold text-emerald-400">₹6.5 - ₹8.0 LPA</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-bold text-white">Tezpur University &amp; GKV Haridwar</td>
                    <td className="p-4 text-xs text-slate-400">Central Universities (GFTI)</td>
                    <td className="p-4 text-xs text-brand-300 font-mono">CSAB Special Round 1 &amp; 2</td>
                    <td className="p-4 text-xs">CSE, ECE, Mechanical</td>
                    <td className="p-4 font-semibold text-emerald-400">₹6.0 - ₹7.5 LPA</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-bold text-white">JIIT Noida (Sector 62 &amp; Sector 128)</td>
                    <td className="p-4 text-xs text-slate-400">Deemed University</td>
                    <td className="p-4 text-xs text-brand-300 font-mono">Jaypee JEE Merit</td>
                    <td className="p-4 text-xs">ECE, IT (Sector 128), Biotech</td>
                    <td className="p-4 font-semibold text-emerald-400">₹8.0 - ₹11.5 LPA</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-bold text-white">Thapar Institute of Engg &amp; Tech (TIET)</td>
                    <td className="p-4 text-xs text-slate-400">Deemed Tier-1</td>
                    <td className="p-4 text-xs text-brand-300 font-mono">Thapar Counseling</td>
                    <td className="p-4 text-xs">Electrical &amp; Computer, Mechanical, Mechatronics</td>
                    <td className="p-4 font-semibold text-emerald-400">₹9.0 - ₹13.0 LPA</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-bold text-white">IET Lucknow &amp; KNIT Sultanpur</td>
                    <td className="p-4 text-xs text-slate-400">Top State Govt Colleges</td>
                    <td className="p-4 text-xs text-brand-300 font-mono">UPTAC Counseling</td>
                    <td className="p-4 text-xs">Chemical, Civil, Mechanical</td>
                    <td className="p-4 font-semibold text-emerald-400">₹6.8 - ₹8.5 LPA</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-bold text-white">University School of Automation (USAR)</td>
                    <td className="p-4 text-xs text-slate-400">GGSIPU East Campus</td>
                    <td className="p-4 text-xs text-brand-300 font-mono">GGSIPU Counseling</td>
                    <td className="p-4 text-xs">AI &amp; Data Science, Automation &amp; Robotics</td>
                    <td className="p-4 font-semibold text-emerald-400">₹7.5 - ₹9.2 LPA</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: Secret Weapon: CSAB Special Rounds */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <TrendingUp className="w-7 h-7 text-sky-400" />
              The Secret Weapon: Why CSAB Special Rounds are Crucial at 85 Percentile
            </h2>
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-4 text-sm leading-relaxed text-slate-300">
              <p>
                Many students mistakenly stop tracking counseling after JoSAA Round 5 or 6, assuming all central seats are exhausted. In reality, <strong className="text-white">CSAB Special Rounds</strong> conduct separate two-round allocations for remaining vacancies.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-800/70 border border-slate-700 space-y-2">
                  <h4 className="font-bold text-brand-300">GFTIs with Extreme Cutoff Relaxation</h4>
                  <p className="text-xs text-slate-300">
                    Institutes like Assam University, Mizoram University, Central University of Rajasthan, and SMVDU Katra routinely see their closing ranks stretch past 2,00,000 for core engineering branches.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/70 border border-slate-700 space-y-2">
                  <h4 className="font-bold text-emerald-300">Home-State Quotas in North-East NITs</h4>
                  <p className="text-xs text-slate-300">
                    If you hold a domicile in states like Meghalaya, Mizoram, Nagaland, Sikkim, or Arunachal Pradesh, home-state quota closing ranks in NITs for branches like Civil or Electrical stretch all the way to 80-88 percentile.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Jump to 98+ Percentile */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Sparkles className="w-7 h-7 text-amber-400" />
              Why 85 Percentile Aspirants Have the Highest Drop-Year Success Rate
            </h2>
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-4">
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Academic tracking shows that students who score between 82 and 89 percentile in their first attempt experience the greatest rank multiplier when taking a focused drop year or retaking Session 2. Why?
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Zero Conceptual Starting Deficit:</strong> You already comprehend the core theory of 80% of the syllabus, eliminating the need to re-watch 600 hours of basic theory lectures.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Speed &amp; Accuracy Deficit Only:</strong> Your marks were held back by time mismanagement, silly arithmetic slips, or weak exam temperament—issues that 1:1 mentor accountability fixes directly.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>The 35-Mark Bridge to Top NITs:</strong> Increasing your raw score by merely 35 to 45 marks elevates you from 85 percentile into the 98+ percentile territory, guaranteeing Top-10 NITs.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Mentorship Funnel Callout */}
          <SeoMentorFunnel
            examFocus="JEE"
            title="Turn an 85 Percentile Foundation Into a 99+ Percentile Reality"
            subtitle="You already know the theory. Work with IITians from Bombay and Delhi who will audit your mock tests, eradicate recurring errors, and push you into the top 1%."
          />

          {/* Section 4: FAQ Accordion */}
          <section className="my-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center justify-center gap-3">
                <HelpCircle className="w-7 h-7 text-brand-400" />
                Frequently Asked Questions: 80 to 90 Percentile Colleges
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Detailed insights on GFTI seats, state quota cutoffs, and counseling strategy.
              </p>
            </div>
            <SeoFaqAccordion items={faqs} />
          </section>

          {/* Final Call to Action */}
          <SeoCtaBanner
            title="Confused Between Accepting a College or Retaking?"
            subtitle="Get an unbiased, data-backed 1-on-1 counseling consultation with top IITians who evaluate your branch prospects, fee ROI, and score-growth probability."
            primaryBtnText="Schedule 1:1 Mentorship Session"
            primaryBtnHref="/free-mentorship-session"
            secondaryBtnText="Explore All Mentors"
            secondaryBtnHref="/mentors"
          />
        </div>
      </main>
    </div>
  );
}
