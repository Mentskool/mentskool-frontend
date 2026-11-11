import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  Clock,
  GraduationCap,
  IndianRupee,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";
import { HeroGridBackground } from "@/components/HeroGridBackground";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoBecomeMentorFunnel } from "@/components/seo/SeoBecomeMentorFunnel";

export interface GuideTableRow {
  col1: string;
  col2: string;
  col3: string;
  highlight?: boolean;
}

export interface GuideSection {
  heading: string;
  subheading?: string;
  paragraphs: string[];
  bullets?: { title: string; detail: string }[];
}

export interface MentorGuidePageConfig {
  slug: string;
  breadcrumbLabel: string;
  audience: "IIT" | "NEET" | "BOTH";
  badgeText: string;
  h1Prefix: string;
  h1Highlight: string;
  heroDescription: string;
  summaryHeading: string;
  summaryIntro: string;
  summaryPoints: { title: string; detail: string }[];
  sections: GuideSection[];
  tableTitle: string;
  tableSubtitle: string;
  tableHeaders: [string, string, string];
  tableRows: GuideTableRow[];
  playbookTitle: string;
  playbookSubtitle: string;
  playbookSteps: { step: string; title: string; description: string }[];
  faqs: FaqItem[];
  relatedLinks: { label: string; href: string }[];
  articleHeadline: string;
  articleDescription: string;
}

export function MentorProgramGuideTemplate({
  config,
}: {
  config: MentorGuidePageConfig;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        name: "Mentskool Technologies",
        url: "https://mentskool.com",
        logo: "https://mentskool.com/logo.png",
        description:
          "India's premier paid 1-on-1 JEE & NEET mentorship platform connecting IITians, NITians, and AIIMS/Govt MBBS doctors with serious aspirants.",
      },
      {
        "@type": "Article",
        headline: config.articleHeadline,
        description: config.articleDescription,
        url: `https://mentskool.com/${config.slug}`,
        author: {
          "@type": "Organization",
          name: "Mentskool Mentor Success Team",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: config.faqs.map((faq) => ({
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
    <div className="relative min-h-screen bg-slate-950 text-white selection:bg-emerald-500/30 selection:text-emerald-200">
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
              {
                label: "Earn as a Mentor",
                href: "/become-a-jee-mentor-earn-money",
              },
              {
                label: config.breadcrumbLabel,
                href: `/${config.slug}`,
              },
            ]}
          />

          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-semibold mb-4">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>{config.badgeText}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              {config.h1Prefix}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400">
                {config.h1Highlight}
              </span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              {config.heroDescription}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/signup?role=MENTOR"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 hover:from-emerald-500 hover:to-sky-500 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Apply as a Verified Mentor</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/mentskool-mentor-program-benefits-and-payouts"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all"
              >
                See Payouts &amp; Eligibility
              </Link>
            </div>
          </div>

          {/* Executive Summary */}
          <section className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-emerald-500/35 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-400 mb-3">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>{config.summaryHeading}</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-6">
              {config.summaryIntro}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              {config.summaryPoints.map((pt, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800/80"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-white">{pt.title}:</strong>{" "}
                    {pt.detail}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Deep-Dive Narrative Sections */}
          <div className="space-y-12 my-14">
            {config.sections.map((section, idx) => (
              <section
                key={idx}
                className="p-6 sm:p-9 rounded-3xl bg-slate-900/60 border border-slate-800/90 shadow-lg"
              >
                <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-sky-400 mb-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Section 0{idx + 1}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                  {section.heading}
                </h2>
                {section.subheading && (
                  <p className="text-sm sm:text-base text-slate-400 mb-5">
                    {section.subheading}
                  </p>
                )}

                <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed mt-4">
                  {section.paragraphs.map((para, pIdx) => (
                    <p key={pIdx}>{para}</p>
                  ))}
                </div>

                {section.bullets && section.bullets.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    {section.bullets.map((b, bIdx) => (
                      <div
                        key={bIdx}
                        className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-start gap-3"
                      >
                        <Target className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                        <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          <span className="font-bold text-white block mb-0.5">
                            {b.title}
                          </span>
                          {b.detail}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Comparison / Earnings / Benchmark Table */}
          <section className="my-16">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-bold uppercase tracking-wider mb-3">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Verified Breakdown</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {config.tableTitle}
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                {config.tableSubtitle}
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
              <table className="w-full text-left text-xs sm:text-sm text-slate-300">
                <thead className="bg-slate-950/90 text-white font-bold uppercase text-[11px] tracking-wider border-b border-slate-800">
                  <tr>
                    <th className="py-4 px-4 sm:px-6">{config.tableHeaders[0]}</th>
                    <th className="py-4 px-4 sm:px-6">{config.tableHeaders[1]}</th>
                    <th className="py-4 px-4 sm:px-6 text-emerald-400">
                      {config.tableHeaders[2]}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/70">
                  {config.tableRows.map((row, rIdx) => (
                    <tr
                      key={rIdx}
                      className={
                        row.highlight
                          ? "bg-emerald-950/20 hover:bg-emerald-950/30"
                          : "hover:bg-slate-800/30"
                      }
                    >
                      <td className="py-4 px-4 sm:px-6 font-bold text-white">
                        {row.col1}
                      </td>
                      <td className="py-4 px-4 sm:px-6 text-slate-300">
                        {row.col2}
                      </td>
                      <td className="py-4 px-4 sm:px-6 text-emerald-300 font-semibold">
                        {row.col3}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Step-by-Step Playbook */}
          <section className="my-16 p-6 sm:p-10 rounded-3xl bg-slate-900/70 border border-slate-800">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-black uppercase tracking-widest text-amber-400 flex items-center gap-1.5 mb-2">
                <Clock className="w-4 h-4" />
                <span>Actionable Onboarding Roadmap</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {config.playbookTitle}
              </h2>
              <p className="text-sm sm:text-base text-slate-400 mt-1.5">
                {config.playbookSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {config.playbookSteps.map((st, sIdx) => (
                <div
                  key={sIdx}
                  className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-block px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-black mb-3">
                      {st.step}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                      {st.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {st.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Mentor Recruitment Funnel */}
          <SeoBecomeMentorFunnel audience={config.audience} />

          {/* FAQ Section */}
          <section className="mt-16">
            <SeoFaqAccordion
              faqs={config.faqs}
              title="Frequently Asked Questions for Prospective Mentors"
              subtitle="Everything IITians, NITians, and MBBS students ask before starting their cohort on Mentskool."
            />
          </section>

          {/* Related Mentor Guides (Internal Linking Mesh) */}
          <section className="mt-16 p-6 sm:p-8 rounded-3xl bg-slate-900/50 border border-slate-800/80">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400 mb-4">
              <Award className="w-4 h-4" />
              <span>Explore More Mentor Earning Guides</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {config.relatedLinks.map((lnk, lIdx) => (
                <Link
                  key={lIdx}
                  href={lnk.href}
                  className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-emerald-500/40 text-xs sm:text-sm font-medium text-slate-200 hover:text-emerald-300 transition-all flex items-center justify-between gap-2 group"
                >
                  <span>{lnk.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                </Link>
              ))}
            </div>
            <div className="mt-5 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verified rankers earn recurring monthly income with zero coaching-center commute.</span>
              </span>
              <span className="flex items-center gap-1 text-emerald-300 font-semibold">
                <IndianRupee className="w-3.5 h-3.5" />
                <span>Direct UPI Payouts</span>
              </span>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
