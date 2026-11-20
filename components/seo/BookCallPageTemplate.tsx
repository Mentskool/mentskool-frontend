import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  Calculator,
  Calendar,
  CheckCircle2,
  Clock,
  Compass,
  GraduationCap,
  IndianRupee,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  UserCheck,
  Video,
  Zap,
} from "lucide-react";
import { HeroGridBackground } from "@/components/HeroGridBackground";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoMentorFunnel } from "@/components/seo/SeoMentorFunnel";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import {
  QuickAnswerBox,
  TableOfContents,
  renderAutoLinkedParagraph,
} from "@/components/seo/AutoLinkContent";
import { EmbeddedQuickEstimator } from "@/components/seo/EmbeddedQuickEstimator";

export interface SessionTimelinePhase {
  timeframe: string;
  phaseTitle: string;
  description: string;
  deliverables: string[];
}

export interface CallComparisonRow {
  aspect: string;
  genericCoaching: string;
  mentskool1on1: string;
}

export interface CallDeepDiveSection {
  heading: string;
  subheading?: string;
  paragraphs: string[];
  keyTakeaways?: { title: string; detail: string }[];
}

export interface BookCallPageConfig {
  slug: string;
  breadcrumbLabel: string;
  examFocus: "JEE" | "NEET" | "BOTH";
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  badgeText: string;
  h1Prefix: string;
  h1Highlight: string;
  heroDescription: string;
  serviceTitle: string;
  serviceDescription: string;
  quickStats: { label: string; value: string; hint: string }[];
  overviewHeading: string;
  overviewIntro: string;
  overviewPoints: { title: string; detail: string }[];
  timelinePhases: SessionTimelinePhase[];
  comparisonTitle: string;
  comparisonSubtitle: string;
  comparisonRows: CallComparisonRow[];
  sections: CallDeepDiveSection[];
  bookingSteps: { step: string; title: string; description: string }[];
  faqs: FaqItem[];
  relatedLinks: { label: string; href: string }[];
}

export function BookCallPageTemplate({ config }: { config: BookCallPageConfig }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        name: "Mentskool Technologies",
        url: "https://mentskool.com",
        logo: "https://mentskool.com/logo.png",
        description:
          "India's premier 1-on-1 JEE & NEET mentorship platform connecting IITians, NITians, and AIIMS doctors with serious aspirants for private video strategy sessions.",
      },
      {
        "@type": "Service",
        name: config.serviceTitle,
        description: config.serviceDescription,
        provider: {
          "@type": "EducationalOrganization",
          name: "Mentskool Technologies",
          url: "https://mentskool.com",
        },
        serviceType: "1-on-1 Academic Mentorship Video Consultation",
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "1:1 Mentorship Sessions",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "45-Minute 1:1 Video Strategy & Doubt Session",
              },
            },
          ],
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
    <div className="relative min-h-screen bg-slate-950 text-white selection:bg-blue-500/30 selection:text-blue-200">
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
              { label: "1:1 Mentorship Directory", href: "/book-call" },
              { label: config.breadcrumbLabel, href: `/${config.slug}` },
            ]}
          />

          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-semibold mb-4 shadow-xs">
              <Video className="w-3.5 h-3.5" />
              <span>{config.badgeText}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              {config.h1Prefix}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-teal-300">
                {config.h1Highlight}
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              {config.heroDescription}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/book-call"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-blue-600 via-sky-600 to-teal-600 hover:from-blue-500 hover:to-teal-500 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <Video className="w-4 h-4" />
                <span>Browse Mentors &amp; Book Slot</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/free-mentorship-session"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Claim Free 1-on-1 Strategy Session</span>
              </Link>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
            {config.quickStats.map((stat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-xs text-center"
              >
                <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">{stat.hint}</div>
              </div>
            ))}
          </section>

          {/* Quick Answer Box (Google Featured Snippet Position 0 Target) */}
          <QuickAnswerBox
            title={config.h1Highlight}
            summary={config.heroDescription}
            keyBullets={config.overviewPoints.slice(0, 3).map((pt) => `${pt.title}: ${pt.detail}`)}
          />

          {/* Table of Contents for Google Sitelinks */}
          <TableOfContents />

          {/* Executive Overview & Diagnostic Purpose */}
          <section id="overview" className="my-12 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-blue-500/30 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-blue-400 mb-3">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>{config.overviewHeading}</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-6">
              {renderAutoLinkedParagraph(config.overviewIntro, config.slug)}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              {config.overviewPoints.map((pt, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800/80"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-white">{pt.title}:</strong> {pt.detail}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Early Conversion Touchpoint: Instant Diagnostic Booking */}
          <section className="my-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-950/70 via-slate-900 to-emerald-950/60 border border-blue-500/30 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center shrink-0">
                <Video className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white">
                  Need Help With Your {config.examFocus === "JEE" ? "JEE" : config.examFocus === "NEET" ? "NEET" : "JEE & NEET"} Strategy?
                </h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  Discuss your mock test mistakes, backlogs, and study routine 1-on-1 with an {config.examFocus === "JEE" ? "IITian" : config.examFocus === "NEET" ? "AIIMS Doctor" : "IITian / AIIMS Doctor"}.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2 shrink-0 w-full md:w-auto">
              <Link
                href="/free-mentorship-session"
                className="flex-1 md:flex-initial px-3.5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold text-center transition-all shadow-sm active:scale-95 flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Claim Free Slot (₹0)</span>
              </Link>
              <Link
                href="/book-call"
                className="flex-1 md:flex-initial px-3.5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold text-center transition-all shadow-sm active:scale-95 flex items-center justify-center gap-1.5"
              >
                <Video className="w-3.5 h-3.5" />
                <span>Book 1:1 Call</span>
              </Link>
              <Link
                href="/mentors"
                className="flex-1 md:flex-initial px-3 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 border border-slate-700 text-slate-200 text-xs font-semibold text-center transition-all flex items-center justify-center gap-1.5"
              >
                <UserCheck className="w-3.5 h-3.5 text-sky-400" />
                <span>Browse Mentors</span>
              </Link>
            </div>
          </section>

          {/* Session Architecture: What Happens in 45 Minutes */}
          <section id="call-protocol" className="my-14">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">
                Structured Call Blueprint
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                What Happens in Your 45-Minute 1:1 Video Session
              </h2>
              <p className="text-sm text-slate-400 mt-2">
                Every call follows a high-efficiency clinical protocol designed by top percentile IIT &amp; AIIMS toppers to diagnose mistakes, eliminate backlogs, and produce an immediate execution plan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {config.timelinePhases.map((phase, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-blue-500/40 transition-all space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs font-bold">
                      {phase.timeframe}
                    </span>
                    <span className="text-[11px] text-slate-400 uppercase font-semibold">
                      Phase {idx + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white">{phase.phaseTitle}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {phase.description}
                  </p>
                  <ul className="space-y-1.5 pt-2 border-t border-slate-800/60">
                    {phase.deliverables.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="flex items-center gap-2 text-xs text-slate-300"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Comparison Matrix: Coaching Doubt Desk vs Mentskool 1:1 Video Call */}
          <section id="comparison" className="my-14">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">
                Proven Efficacy
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                {config.comparisonTitle}
              </h2>
              <p className="text-sm text-slate-400 mt-2">{config.comparisonSubtitle}</p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-900/90 text-slate-300">
                    <th className="p-4 font-bold text-white">Strategy Dimension</th>
                    <th className="p-4 font-semibold text-slate-400">
                      Typical Coaching Doubt Counter
                    </th>
                    <th className="p-4 font-bold text-blue-400 bg-blue-950/30 border-l border-blue-900/40">
                      Mentskool 1:1 Live Video Call
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/70">
                  {config.comparisonRows.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-slate-850/50 transition-colors"
                    >
                      <td className="p-4 font-semibold text-white whitespace-nowrap">
                        {row.aspect}
                      </td>
                      <td className="p-4 text-slate-300 leading-relaxed">
                        {row.genericCoaching}
                      </td>
                      <td className="p-4 font-medium text-blue-200 bg-blue-950/20 border-l border-blue-900/30 leading-relaxed">
                        {row.mentskool1on1}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Deep Dive Editorial Chapters (Ensuring >1200+ words per page) */}
          <section id="blueprint-sections" className="my-14 space-y-10">
            {config.sections.map((sec, i) => (
              <React.Fragment key={i}>
                <article
                  className="p-6 sm:p-10 rounded-3xl bg-slate-900/40 border border-slate-800/80 space-y-4"
                >
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {sec.heading}
                  </h2>
                  {sec.subheading && (
                    <p className="text-xs sm:text-sm font-semibold text-sky-400">
                      {sec.subheading}
                    </p>
                  )}
                  <div className="space-y-3.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {sec.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{renderAutoLinkedParagraph(p, config.slug)}</p>
                    ))}
                  </div>

                  {sec.keyTakeaways && sec.keyTakeaways.length > 0 && (
                    <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-slate-950/70 border border-slate-800/90 space-y-2.5">
                      <div className="text-xs font-bold text-teal-300 uppercase tracking-wider">
                        Strategic Takeaways:
                      </div>
                      <ul className="space-y-2">
                        {sec.keyTakeaways.map((takeaway, tIdx) => (
                          <li
                            key={tIdx}
                            className="flex items-start gap-2 text-xs sm:text-sm text-slate-300"
                          >
                            <Target className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                            <span>
                              <strong className="text-white">{takeaway.title}:</strong>{" "}
                              {takeaway.detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </article>

                {/* Embed live interactive score estimator mid-article */}
                {i === 1 && (
                  <div id="interactive-estimator">
                    <EmbeddedQuickEstimator examFocus={config.examFocus} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </section>

          {/* 4-Step Booking Roadmap */}
          <section className="my-14 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/80 to-blue-950/40 border border-blue-500/25">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                Zero Friction
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                How to Book Your 1:1 Video Session
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-2">
                No complex forms or annual contracts. Select your mentor, choose an open slot, and get connected over secure video.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {config.bookingSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/90 relative"
                >
                  <span className="font-mono text-2xl font-black text-blue-500/40">
                    {step.step}
                  </span>
                  <h3 className="text-sm font-bold text-white mt-2 mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/book-call"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-elevated transition-all active:scale-95"
              >
                <Video className="w-4 h-4" />
                <span>Open 1:1 Mentor Booking Directory</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

          {/* Real Ranker Mentors Showcase */}
          <div className="my-14">
            <SeoMentorFunnel
              examFocus={config.examFocus}
              title={`Talk 1-on-1 With Top ${
                config.examFocus === "JEE"
                  ? "IIT"
                  : config.examFocus === "NEET"
                  ? "AIIMS"
                  : "IIT & AIIMS"
              } Rankers`}
              subtitle="Inspect verified profiles, current colleges, past ranks, and pick the mentor whose journey matches your exact dream."
            />
          </div>

          {/* FAQ Accordion */}
          <section className="my-14">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                Got Questions?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Frequently Asked Questions About 1:1 Calls
              </h2>
            </div>
            <SeoFaqAccordion items={config.faqs} />
          </section>

          {/* Bottom CTA Banner */}
          <SeoCtaBanner
            title={`Ready to Fix Your ${
              config.examFocus === "JEE"
                ? "JEE"
                : config.examFocus === "NEET"
                ? "NEET"
                : "JEE / NEET"
            } Prep in 45 Minutes?`}
            subtitle="Book a private 1-on-1 video strategy session with an IITian or AIIMS ranker. Get real answers, audit your mock tests, and walk away with a crystal-clear execution plan."
            primaryBtnText="Book Your 1:1 Call Now"
            primaryBtnHref="/book-call"
            secondaryBtnText="Claim Free Strategy Call"
            secondaryBtnHref="/free-mentorship-session"
          />

          {/* Direct Funnel & Internal Authority Navigation Hub */}
          <nav className="mt-16 pt-10 border-t border-slate-800" aria-label="Explore Related Guides & Direct 1:1 Booking">
            {/* Super-Visible Direct Funnel Gateway */}
            <div className="mb-10 p-5 sm:p-7 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 border border-blue-500/30 shadow-elevated">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800/80">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-blue-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    Direct 1:1 Mentorship Gateway
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-white mt-1">
                    Ready to Talk 1-on-1 with an {config.examFocus === "JEE" ? "IITian" : config.examFocus === "NEET" ? "AIIMS Doctor" : "IIT / Medical Senior Ranker"}?
                  </h3>
                </div>
                <div className="text-xs text-slate-400 flex items-center gap-1.5 shrink-0">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>100% Verified Credentials • Zero Lock-Ins</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                <Link
                  href="/free-mentorship-session"
                  className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 hover:border-emerald-400 hover:bg-emerald-900/40 transition-all flex flex-col justify-between group shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-amber-300" />
                        100% Free
                      </span>
                      <span className="text-[11px] font-semibold text-slate-400 line-through">₹499</span>
                    </div>
                    <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                      Claim Free Diagnostic Call (₹0)
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      30-minute private video diagnostic to audit your mistake patterns, test papers, and routine.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-emerald-800/40 flex items-center justify-between text-xs font-bold text-emerald-300">
                    <span>Reserve ₹0 Slot</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>

                <Link
                  href="/book-call"
                  className="p-4 rounded-2xl bg-blue-950/40 border border-blue-500/40 hover:border-blue-400 hover:bg-blue-900/40 transition-all flex flex-col justify-between group shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                        Personal Consultation
                      </span>
                      <span className="text-[11px] font-semibold text-blue-300">From ₹499</span>
                    </div>
                    <h4 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                      Book 1:1 Video Strategy Session
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Pick your date, time, and mentor for intensive doubt solving, backlog surgery, and a 30-day comeback plan.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-blue-800/40 flex items-center justify-between text-xs font-bold text-blue-300">
                    <span>Choose Time Slot</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>

                <Link
                  href="/mentors"
                  className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-sky-500/40 hover:bg-slate-900/80 transition-all flex flex-col justify-between group shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                        Full Directory
                      </span>
                      <span className="text-[11px] font-semibold text-slate-400">50+ Rankers</span>
                    </div>
                    <h4 className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                      Browse All Verified Mentors
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Filter by AIR rank, target college (IIT Bombay, Delhi, AIIMS New Delhi), subject specialty, and fees.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-sky-300">
                    <span>View All Profiles</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            </div>

            {/* Next Steps: Thematic Study Blueprints & Related Guides */}
            {config.relatedLinks && config.relatedLinks.length > 0 && (
              <div className="mb-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                    Recommended Next Steps in This Strategy Series
                  </h3>
                  <span className="text-[11px] text-slate-400">Step-by-step prep guides</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                  {config.relatedLinks.map((link, idx) => (
                    <Link
                      key={idx}
                      href={link.href}
                      className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80 text-xs font-medium text-slate-300 hover:text-blue-300 hover:border-blue-500/40 transition-all flex items-center justify-between group"
                    >
                      <span className="line-clamp-1">{link.label}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 group-hover:text-blue-400 transition-all shrink-0 ml-2" />
                    </Link>
                  ))}
                  {/* Category Pillar Hub */}
                  <Link
                    href={config.examFocus === "JEE" ? "/best-jee-mentorship" : "/best-neet-mentorship"}
                    className="p-3.5 rounded-xl bg-blue-950/30 border border-blue-500/20 text-xs font-bold text-blue-300 hover:text-white hover:border-blue-500/50 transition-all flex items-center justify-between group"
                  >
                    <span>{config.examFocus === "JEE" ? "Complete JEE Mentorship Pillar Hub" : "Complete NEET Mentorship Pillar Hub"}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                  </Link>
                </div>
              </div>
            )}

            {/* Diagnostic Calculators & Self-Audit Tools */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Calculator className="w-3.5 h-3.5 text-emerald-400" />
                  Free Interactive Score & Rank Diagnostic Tools
                </h3>
                <span className="text-[11px] text-slate-400">Instant calculations</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                <Link
                  href="/tools/jee-main-marks-vs-percentile-calculator"
                  className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/70 hover:border-emerald-500/30 text-[11px] font-medium text-slate-300 hover:text-emerald-300 transition-colors flex items-center justify-between group"
                >
                  <span>JEE Marks vs Percentile</span>
                  <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-emerald-400 transition-colors shrink-0 ml-1.5" />
                </Link>
                <Link
                  href="/tools/neet-marks-vs-rank-calculator"
                  className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/70 hover:border-emerald-500/30 text-[11px] font-medium text-slate-300 hover:text-emerald-300 transition-colors flex items-center justify-between group"
                >
                  <span>NEET Marks vs Rank</span>
                  <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-emerald-400 transition-colors shrink-0 ml-1.5" />
                </Link>
                <Link
                  href="/tools/jee-neet-backlog-clearance-calculator"
                  className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/70 hover:border-emerald-500/30 text-[11px] font-medium text-slate-300 hover:text-emerald-300 transition-colors flex items-center justify-between group"
                >
                  <span>Backlog Clearance Plan</span>
                  <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-emerald-400 transition-colors shrink-0 ml-1.5" />
                </Link>
                <Link
                  href="/tools/jee-neet-daily-study-hour-calculator"
                  className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/70 hover:border-emerald-500/30 text-[11px] font-medium text-slate-300 hover:text-emerald-300 transition-colors flex items-center justify-between group"
                >
                  <span>Daily Study Hour Planner</span>
                  <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-emerald-400 transition-colors shrink-0 ml-1.5" />
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </main>
    </div>
  );
}
