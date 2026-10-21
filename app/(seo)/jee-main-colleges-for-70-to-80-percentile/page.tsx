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
  MapPin,
  TrendingUp,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { SeoMentorFunnel } from "@/components/seo/SeoMentorFunnel";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "Top Engineering Colleges for 70 to 80 Percentile in JEE Main: Complete Cutoff & Admission Guide",
  description:
    "Explore the best engineering colleges accepting 70 to 80 percentile in JEE Main. Detailed cutoff list for State Government colleges, IPU Delhi, AKTU, REAP, top private universities, and branch-selection strategies.",
  keywords: [
    "colleges for 70 to 80 percentile in jee main",
    "jee main 75 percentile colleges",
    "best engineering colleges at 70 percentile",
    "ipu colleges cutoff for 70 percentile",
    "aktu colleges for 75 percentile",
    "can i get cse at 75 percentile",
    "engineering admission low percentile jee main",
  ],
  alternates: {
    canonical: "https://mentskool.com/jee-main-colleges-for-70-to-80-percentile",
  },
  openGraph: {
    title: "Best Engineering Colleges for 70 to 80 Percentile in JEE Main",
    description:
      "A complete roadmap for students scoring between 70 and 80 percentile in JEE Main. State counseling cutoffs, direct admission universities, placement realities, and improvement strategies.",
    url: "https://mentskool.com/jee-main-colleges-for-70-to-80-percentile",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "70 to 80 Percentile JEE Main Colleges - Mentskool",
      },
    ],
  },
};

const faqs: FaqItem[] = [
  {
    question: "What Common Rank List (CRL) corresponds to a 70 to 80 percentile in JEE Main?",
    answer:
      "With roughly 14 to 15 lakh unique candidates registering for JEE Main each year, a 70 to 80 percentile corresponds to an All India Rank (AIR / CRL) range of approximately 2,80,000 to 4,50,000. While this rank does not qualify for top NITs or IIITs in open category, it opens up dozens of respected state government colleges, university institutes, and premier private engineering colleges through state counseling.",
  },
  {
    question: "Can I get Computer Science Engineering (CSE) with a 75 percentile?",
    answer:
      "Yes, but primarily through state quota counseling and reputed private universities rather than central JoSAA counseling. Colleges like KIET Ghaziabad, Galgotias University, JECRC Jaipur, Chandigarh University, Bennett University, and several IPU Delhi affiliated colleges (like ADGITM or HMR) offer CSE or allied specializations (AI/ML, Data Science, Cyber Security) in this rank bracket.",
  },
  {
    question: "Can an SC, ST, or PwD candidate get an NIT or IIIT with a 75 percentile?",
    answer:
      "Yes! For reserved category candidates, category ranks are dramatically higher. An SC candidate at 75 percentile typically secures a category rank between 9,000 and 15,000, which can qualify for core branches (Civil, Mechanical, Metallurgy) in home-state NITs or newer IIITs (like IIIT Manipur, IIIT Bhagalpur) through CSAB special rounds.",
  },
  {
    question: "Should I accept a college at 75 percentile or take a drop year?",
    answer:
      "If you are currently in Class 12 and have not prepared systematically with structured mock analysis, taking a disciplined drop year or preparing intensively for JEE Main Session 2 under personal mentorship can boost your score by 40-70 marks (moving you from 75 percentile to 95+ percentile). However, if you are already a dropper or prefer not to spend an additional year, joining a solid tier-2 college for CSE/IT while sharpening your coding and problem-solving skills is an excellent pathway.",
  },
  {
    question: "Which state counseling processes should I apply for with a 70-80 percentile score?",
    answer:
      "You should actively apply for: 1) GGSIPU (IPU Delhi CET counseling), 2) UPTAC (Uttar Pradesh Technical Admission Counseling for AKTU colleges), 3) REAP (Rajasthan Engineering Admission Process), 4) MP DTE (Madhya Pradesh Technical Counseling), and 5) JAC Chandigarh for spot rounds.",
  },
];

export default function CollegesFor70To80PercentilePage() {
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
        headline: "Top Engineering Colleges for 70 to 80 Percentile in JEE Main: Complete Cutoff & Admission Guide",
        description:
          "Authoritative analysis of engineering colleges, cutoffs, and counseling portals accepting 70-80 percentile in JEE Main.",
        url: "https://mentskool.com/jee-main-colleges-for-70-to-80-percentile",
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
                label: "70 to 80 Percentile Colleges",
                href: "/jee-main-colleges-for-70-to-80-percentile",
              },
            ]}
          />

          {/* Hero Header */}
          <header className="mt-8 mb-12 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <Building2 className="w-4 h-4" />
              Realistic Admission &amp; Cutoff Intelligence
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight">
              Top Engineering Colleges for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-indigo-300 to-sky-400">
                70 to 80 Percentile in JEE Main
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Scoring between 70 and 80 percentile in JEE Main does not mean the end of your engineering dreams. Discover the highest-ROI state government institutes, IPU Delhi colleges, and premier private universities where you can secure lucrative CSE, IT, and core engineering seats.
            </p>
          </header>

          {/* Direct Answer Box */}
          <section className="mb-14 rounded-2xl border border-brand-500/30 bg-brand-950/20 backdrop-blur-md p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-brand-500/20 text-brand-400 shrink-0">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-brand-300 mb-2">
                  The Ground Reality: What 70 to 80 Percentile Truly Delivers
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  A 70 to 80 percentile translates to roughly <strong className="text-white">45 to 70 raw marks</strong> and a Common Rank List (CRL) of <strong className="text-white">2,80,000 to 4,50,000</strong>. While Tier-1 NITs and IIITs are out of reach for General category students at this score, over <strong className="text-brand-300">120+ accredited state universities and private technical institutes</strong> offer direct counseling admissions with active placement cells and median packages between ₹5.5 LPA and ₹8.5 LPA.
                </p>
              </div>
            </div>
          </section>

          {/* Section 1: Detailed College Breakdown Table */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Layers className="w-7 h-7 text-brand-400" />
              Comprehensive College Matrix for 70 - 80 Percentile
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm">
              The following institutes have historically admitted students in the 70th to 80th percentile band through state quota counseling rounds, decentralized spot rounds, and institutional entrance allocations:
            </p>

            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/60 my-6">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-800/80 text-slate-200 border-b border-slate-700 font-semibold">
                  <tr>
                    <th className="p-4">College Name</th>
                    <th className="p-4">Location</th>
                    <th className="p-4">Admission Channel</th>
                    <th className="p-4">Accessible Branches</th>
                    <th className="p-4">Median CTC</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-bold text-white">Guru Tegh Bahadur Institute (GTBIT - IPU)</td>
                    <td className="p-4 text-xs text-slate-400">New Delhi</td>
                    <td className="p-4 text-xs text-brand-300 font-mono">GGSIPU Counseling (Delhi Quota)</td>
                    <td className="p-4 text-xs">ECE, EEE, Mechanical</td>
                    <td className="p-4 font-semibold text-emerald-400">₹6.2 - ₹7.5 LPA</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-bold text-white">Dr. Akhilesh Das Gupta Institute (ADGITM)</td>
                    <td className="p-4 text-xs text-slate-400">New Delhi</td>
                    <td className="p-4 text-xs text-brand-300 font-mono">GGSIPU Counseling</td>
                    <td className="p-4 text-xs">CSE (Spec), IT, ECE</td>
                    <td className="p-4 font-semibold text-emerald-400">₹5.8 - ₹7.0 LPA</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-bold text-white">KIET Group of Institutions</td>
                    <td className="p-4 text-xs text-slate-400">Ghaziabad, UP</td>
                    <td className="p-4 text-xs text-brand-300 font-mono">UPTAC / AKTU Counseling</td>
                    <td className="p-4 text-xs">CSE (AI/ML), IT, ECE</td>
                    <td className="p-4 font-semibold text-emerald-400">₹6.5 - ₹7.8 LPA</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-bold text-white">JSS Academy of Technical Education</td>
                    <td className="p-4 text-xs text-slate-400">Noida, UP</td>
                    <td className="p-4 text-xs text-brand-300 font-mono">UPTAC Counseling</td>
                    <td className="p-4 text-xs">ECE, Electrical, Mechanical</td>
                    <td className="p-4 font-semibold text-emerald-400">₹5.5 - ₹6.8 LPA</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-bold text-white">SKIT &amp; JECRC University</td>
                    <td className="p-4 text-xs text-slate-400">Jaipur, Rajasthan</td>
                    <td className="p-4 text-xs text-brand-300 font-mono">REAP / Direct Merit</td>
                    <td className="p-4 text-xs">CSE, Data Science, IT</td>
                    <td className="p-4 font-semibold text-emerald-400">₹5.2 - ₹6.5 LPA</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-bold text-white">Chandigarh University (CU)</td>
                    <td className="p-4 text-xs text-slate-400">Mohali, Punjab</td>
                    <td className="p-4 text-xs text-brand-300 font-mono">CUCET / JEE Score Merit</td>
                    <td className="p-4 text-xs">CSE Core &amp; All Specializations</td>
                    <td className="p-4 font-semibold text-emerald-400">₹6.0 - ₹8.5 LPA</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-bold text-white">LNCT Group of Colleges</td>
                    <td className="p-4 text-xs text-slate-400">Bhopal, MP</td>
                    <td className="p-4 text-xs text-brand-300 font-mono">MP DTE Counseling</td>
                    <td className="p-4 text-xs">CSE, IT, Cyber Security</td>
                    <td className="p-4 font-semibold text-emerald-400">₹5.5 - ₹7.2 LPA</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-bold text-white">Assam University &amp; Mizoram University</td>
                    <td className="p-4 text-xs text-slate-400">Silchar / Aizawl</td>
                    <td className="p-4 text-xs text-brand-300 font-mono">CSAB Special Round 2</td>
                    <td className="p-4 text-xs">Agricultural, Civil, ECE (Home State)</td>
                    <td className="p-4 font-semibold text-emerald-400">₹4.8 - ₹6.0 LPA</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: Branch vs College Dilemma */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <TrendingUp className="w-7 h-7 text-indigo-400" />
              Strategic Blueprint: CSE in Tier-3 Private vs Core in Govt College
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-3">
                <h3 className="text-lg font-bold text-brand-400 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-400" />
                  Option A: CSE in a Reputed Tier-2/3 Private College
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Choosing Computer Science or Information Technology at colleges like KIET, Galgotias, or Chandigarh University provides direct exposure to campus software placement drives. IT hiring managers care significantly more about GitHub portfolios, LeetCode ratings, and full-stack development competency than JEE percentiles.
                </p>
                <div className="text-xs text-slate-400 pt-2 border-t border-slate-800">
                  <strong className="text-emerald-300">Best for:</strong> Aspirants dead-set on software engineering who want 4 years focused purely on coding without preparing for government engineering examinations.
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-3">
                <h3 className="text-lg font-bold text-sky-400 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-sky-400" />
                  Option B: Core Branch in a State Government College
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Choosing Mechanical, Civil, or Electrical Engineering in a state government college provides drastically lower annual tuition fees (often under ₹60,000/year), government degree credibility, and ideal eligibility for PSU recruitment through GATE (like ONGC, IOCL, BHEL, and NTPC).
                </p>
                <div className="text-xs text-slate-400 pt-2 border-t border-slate-800">
                  <strong className="text-emerald-300">Best for:</strong> Students aiming for PSU careers, higher studies (M.Tech at IITs via GATE), or families seeking affordable higher education without education loans.
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: The 70 to 95 Percentile Leap */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Sparkles className="w-7 h-7 text-amber-400" />
              Can You Jump from 75 to 95+ Percentile in Session 2 or Next Year?
            </h2>
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-4">
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                The score difference between the 75th percentile and 95th percentile in JEE Main is remarkably compact: <strong className="text-brand-300">only 45 to 55 additional raw marks</strong>. That translates to solving just <strong className="text-white">12 to 14 additional questions correctly</strong> over a 3-hour paper.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono text-slate-300 pt-2">
                <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700">
                  <span className="text-brand-400 font-bold block mb-1">Chemistry Target: +24 Marks</span>
                  Master NCERT Inorganic line-by-line and high-yield physical formulas. Turn 30 marks into 54 marks.
                </div>
                <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700">
                  <span className="text-sky-400 font-bold block mb-1">Physics Target: +20 Marks</span>
                  Focus on Modern Physics, Current Electricity, and Semiconductor devices for rapid guaranteed hits.
                </div>
                <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700">
                  <span className="text-emerald-400 font-bold block mb-1">Negative Control: +12 Marks</span>
                  Eliminate random guessing. Saving 3 wild guesses saves 15 total marks from the negative marking penalty.
                </div>
              </div>
            </div>
          </section>

          {/* Mentorship Funnel Callout */}
          <SeoMentorFunnel
            examFocus="JEE"
            title="Want to Jump From 75 to 95+ Percentile Instead of Settling?"
            subtitle="Connect with IIT Bombay and IIT Delhi mentors who transformed their own mock scores from 60 marks to 200+ marks. Get a customized 90-day score-doubling roadmap."
          />

          {/* Section 4: FAQ Accordion */}
          <section className="my-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center justify-center gap-3">
                <HelpCircle className="w-7 h-7 text-brand-400" />
                Frequently Asked Questions: 70 to 80 Percentile Colleges
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Everything you need to know about rank conversion, state counseling portals, and branch allocation.
              </p>
            </div>
            <SeoFaqAccordion items={faqs} />
          </section>

          {/* Final Call to Action */}
          <SeoCtaBanner
            title="Don't Settle Without Exploring Your True Potential"
            subtitle="Book a free 1-on-1 counseling call with verified IIT mentors to evaluate your college choices, state quota advantages, and improvement roadmap."
            primaryBtnText="Claim Free Strategy Call"
            primaryBtnHref="/free-mentorship-session"
            secondaryBtnText="Explore All Mentors"
            secondaryBtnHref="/mentors"
          />
        </div>
      </main>
    </div>
  );
}
