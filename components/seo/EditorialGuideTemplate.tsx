"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ChevronUp,
  Clock,
  Share2,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Sparkles,
  Users,
  Calculator,
  List,
} from "lucide-react";

export interface EditorialTable {
  caption?: string;
  headers: string[];
  rows: string[][];
}

export interface EditorialFormulaBox {
  label: string;
  formula: string;
  example: string;
}

export interface EditorialBullet {
  lead: string;
  text: string;
}

export interface EditorialSection {
  id?: string;
  heading: string;
  paragraphs: string[];
  formulaBox?: EditorialFormulaBox;
  bullets?: EditorialBullet[];
  table?: EditorialTable;
  mustRead?: {
    label: string;
    href: string;
  };
}

export interface EditorialFaq {
  question: string;
  answer: string;
}

export interface EditorialGuideConfig {
  slug: string;
  breadcrumbLabel: string;
  examFocus: "JEE" | "NEET";
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  h1: string;
  authorName?: string;
  updatedDate?: string;
  readTime?: string;
  quickSummary: string;
  sections: EditorialSection[];
  faqs: EditorialFaq[];
  relatedGuides: {
    label: string;
    href: string;
    tag?: string;
  }[];
}

export function EditorialGuideTemplate({
  config,
}: {
  config: EditorialGuideConfig;
}) {
  const [tocExpanded, setTocExpanded] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [copied, setCopied] = useState(false);

  const isJee = config.examFocus === "JEE";
  const author =
    config.authorName ||
    (isJee
      ? "Mentskool IIT-JEE Academic Team"
      : "Mentskool AIIMS & NEET Academic Team");
  const updated = config.updatedDate || "Nov 28, 2026";
  const readTime = config.readTime || "11 min read";

  const tocItems = [
    ...config.sections.map((s, idx) => ({
      id: s.id || `section-${idx + 1}`,
      label: s.heading,
    })),
    { id: "faqs", label: "Frequently Asked Questions (FAQs)" },
  ];

  const visibleToc = tocExpanded ? tocItems : tocItems.slice(0, 4);

  const handleCopyLink = () => {
    if (typeof window !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://mentskool.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Resources",
            item: "https://mentskool.com/resources",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: config.breadcrumbLabel,
            item: `https://mentskool.com/${config.slug}`,
          },
        ],
      },
      {
        "@type": "Article",
        headline: config.h1,
        description: config.metaDescription,
        author: {
          "@type": "Organization",
          name: author,
        },
        publisher: {
          "@type": "Organization",
          name: "Mentskool",
          url: "https://mentskool.com",
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

  const toolHref = isJee
    ? "/tools/jee-main-marks-vs-percentile-calculator"
    : "/tools/neet-marks-vs-rank-calculator";
  const toolLabel = isJee
    ? "JEE Marks vs Percentile Calculator"
    : "NEET Marks vs Rank Calculator";

  const demoMentors = isJee
    ? [
        {
          initials: "AR",
          name: "Aarav R.",
          college: "IIT Bombay • CSE",
          rank: "AIR 184 (JEE Adv)",
          focus: "Mock Error Audits & Calculus Speed",
          color: "bg-[#2563EB]",
        },
        {
          initials: "PK",
          name: "Pranav K.",
          college: "IIT Delhi • Electrical",
          rank: "99.91%ile (JEE Main)",
          focus: "Backlog Clearance & Physics Strategy",
          color: "bg-[#2B3A67]",
        },
      ]
    : [
        {
          initials: "SD",
          name: "Sneha D.",
          college: "AIIMS New Delhi",
          rank: "695 / 720 (NEET UG)",
          focus: "NCERT Line-by-Line & Bio 350+",
          color: "bg-[#2563EB]",
        },
        {
          initials: "RM",
          name: "Rohan M.",
          college: "MAMC Delhi • MBBS",
          rank: "680 / 720 (NEET UG)",
          focus: "Physics 160+ & Negative Mark Control",
          color: "bg-[#2B3A67]",
        },
      ];

  return (
    <div className="min-h-screen bg-white text-[#14181F] pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-1.5 text-xs sm:text-[13px] text-slate-500 mb-5"
        >
          <Link href="/" className="hover:text-[#2563EB] transition-colors">
            Home
          </Link>
          <span>&gt;</span>
          <Link
            href="/resources"
            className="hover:text-[#2563EB] transition-colors"
          >
            Resources
          </Link>
          <span>&gt;</span>
          <Link
            href={isJee ? "/jee-mentorship" : "/neet-mentorship"}
            className="hover:text-[#2563EB] transition-colors"
          >
            {config.examFocus} Guides
          </Link>
          <span>&gt;</span>
          <span className="text-slate-800 font-medium truncate max-w-[260px] sm:max-w-none">
            {config.breadcrumbLabel}
          </span>
        </nav>

        {/* Main 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT COLUMN: Clean Editorial Reading Flow */}
          <article className="lg:col-span-8 min-w-0">
            {/* Title */}
            <h1 className="text-3xl sm:text-[38px] font-extrabold tracking-tight text-[#14181F] leading-[1.2] mb-4">
              {config.h1}
            </h1>

            {/* Author & Meta Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-6 border-b border-slate-200">
              <div className="space-y-1">
                <p className="text-sm font-semibold text-[#2B3A67]">{author}</p>
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                  <span>Updated on {updated}</span>
                  <span>|</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#2563EB]" />
                    {readTime}
                  </span>
                  <span>|</span>
                  <span className="inline-flex items-center gap-1 text-emerald-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    2027 NTA Aligned
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 mr-1">Share:</span>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 bg-slate-50 hover:bg-slate-100 text-xs font-medium text-slate-700 transition-colors"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{copied ? "Copied!" : "Copy link"}</span>
                </button>
              </div>
            </div>

            {/* Table of Contents Card (upGrad-style clean card) */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5 mb-7">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 font-bold text-[#14181F] text-base">
                  <List className="w-4 h-4 text-[#2563EB]" />
                  <span>Table of Contents</span>
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  {tocItems.length} Sections
                </span>
              </div>

              <ul className="space-y-2 text-sm text-slate-700">
                {visibleToc.map((item) => (
                  <li key={item.id} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 shrink-0" />
                    <a
                      href={`#${item.id}`}
                      className="hover:text-[#2563EB] hover:underline transition-colors leading-snug"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              {tocItems.length > 4 && (
                <div className="mt-3 pt-2.5 border-t border-slate-100 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setTocExpanded(!tocExpanded)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#2563EB] hover:text-[#2B3A67] transition-colors"
                  >
                    <span>
                      {tocExpanded ? "Show less" : `View all (${tocItems.length})`}
                    </span>
                    {tocExpanded ? (
                      <ChevronUp className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* Left-Bordered Quick Summary Callout */}
            <div className="border-l-4 border-[#2563EB] bg-[#F8FAFC] px-5 py-4 rounded-r-xl mb-8">
              <p className="text-[15.5px] sm:text-[16px] text-slate-700 leading-[1.7] italic">
                {config.quickSummary}
              </p>
            </div>

            {/* Body Sections */}
            <div className="space-y-10">
              {config.sections.map((sec, idx) => {
                const secId = sec.id || `section-${idx + 1}`;
                return (
                  <section key={secId} id={secId} className="scroll-mt-24">
                    <h2 className="text-[22px] sm:text-[26px] font-bold text-[#14181F] leading-snug mb-4">
                      {sec.heading}
                    </h2>

                    <div className="space-y-4">
                      {sec.paragraphs.map((para, pIdx) => (
                        <p
                          key={pIdx}
                          className="text-[15.5px] sm:text-[16px] leading-[1.78] text-slate-700"
                        >
                          {para}
                        </p>
                      ))}
                    </div>

                    {/* Formula & Worked Example Box */}
                    {sec.formulaBox && (
                      <div className="my-5 rounded-xl border border-blue-100 bg-[#F8FAFC] p-4 sm:p-5 space-y-2">
                        <p className="text-sm sm:text-[15px] font-bold text-[#2B3A67]">
                          {sec.formulaBox.label}:{" "}
                          <span className="font-semibold text-[#2563EB]">
                            {sec.formulaBox.formula}
                          </span>
                        </p>
                        <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                          <strong className="text-[#14181F]">Example:</strong>{" "}
                          {sec.formulaBox.example}
                        </p>
                      </div>
                    )}

                    {/* Clean Bullet List with Bold Lead-Ins */}
                    {sec.bullets && sec.bullets.length > 0 && (
                      <ul className="my-5 space-y-2.5 pl-1">
                        {sec.bullets.map((b, bIdx) => (
                          <li
                            key={bIdx}
                            className="flex items-start gap-2.5 text-[15px] sm:text-[15.5px] leading-[1.7] text-slate-700"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2.5 shrink-0" />
                            <span>
                              <strong className="text-[#14181F] font-semibold">
                                {b.lead}:
                              </strong>{" "}
                              {b.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Clean White Data Table */}
                    {sec.table && (
                      <div className="my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
                        {sec.table.caption && (
                          <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-600 uppercase tracking-wider">
                            {sec.table.caption}
                          </div>
                        )}
                        <table className="w-full text-left border-collapse text-sm">
                          <thead>
                            <tr className="bg-slate-50 border-b border-slate-200">
                              {sec.table.headers.map((h, hIdx) => (
                                <th
                                  key={hIdx}
                                  className="py-3.5 px-4 font-bold text-[#14181F] text-[13.5px]"
                                >
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-200">
                            {sec.table.rows.map((row, rIdx) => (
                              <tr
                                key={rIdx}
                                className="hover:bg-slate-50/70 transition-colors"
                              >
                                {row.map((cell, cIdx) => (
                                  <td
                                    key={cIdx}
                                    className={`py-3.5 px-4 leading-relaxed ${
                                      cIdx === 0
                                        ? "font-medium text-[#14181F]"
                                        : "text-slate-700"
                                    }`}
                                  >
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {/* Inline Must Read Link */}
                    {sec.mustRead && (
                      <p className="mt-4 text-sm sm:text-[15px] text-slate-700">
                        <strong className="text-[#14181F]">Must read:</strong>{" "}
                        <Link
                          href={sec.mustRead.href}
                          className="text-[#2563EB] hover:text-[#2B3A67] underline underline-offset-2 font-medium"
                        >
                          {sec.mustRead.label}
                        </Link>
                      </p>
                    )}

                    {/* Light-Theme Mentskool Blue Mentor Demo Strip after Section 3 */}
                    {idx === 2 && (
                      <div className="my-8 rounded-2xl border border-blue-200 bg-gradient-to-br from-[#F8FAFC] via-blue-50/50 to-white p-5 sm:p-6 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                          <div>
                            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#2563EB] bg-blue-100/80 px-2.5 py-0.5 rounded-full">
                              <Users className="w-3 h-3" />
                              <span>Real Seniors • 1:1 Mentorship</span>
                            </span>
                            <h3 className="text-lg sm:text-xl font-bold text-[#14181F] mt-1.5">
                              {isJee
                                ? "Meet IITians Who Already Cracked What You're Preparing For"
                                : "Meet AIIMS & GMC Toppers Who Cracked NEET"}
                            </h3>
                          </div>
                          <Link
                            href="/mentors"
                            className="text-xs font-bold text-[#2563EB] hover:text-[#2B3A67] flex items-center gap-1"
                          >
                            <span>View All Mentors</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {demoMentors.map((m, mIdx) => (
                            <div
                              key={mIdx}
                              className="rounded-xl border border-slate-200 bg-white p-4 flex flex-col justify-between gap-3 hover:border-[#2563EB]/50 transition-colors"
                            >
                              <div className="flex items-start gap-3">
                                <div
                                  className={`w-11 h-11 rounded-full ${m.color} text-white font-bold text-sm flex items-center justify-center shrink-0`}
                                >
                                  {m.initials}
                                </div>
                                <div className="min-w-0">
                                  <div className="flex items-center gap-1.5">
                                    <p className="font-bold text-sm text-[#14181F] truncate">
                                      {m.name}
                                    </p>
                                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                                  </div>
                                  <p className="text-xs font-semibold text-[#2B3A67]">
                                    {m.college}
                                  </p>
                                  <span className="inline-block mt-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">
                                    {m.rank}
                                  </span>
                                </div>
                              </div>

                              <div className="flex items-center justify-between pt-2.5 border-t border-slate-100">
                                <span className="text-[11px] text-slate-600 truncate pr-2">
                                  {m.focus}
                                </span>
                                <Link
                                  href="/free-mentorship-session"
                                  className="text-xs font-bold text-[#2563EB] hover:underline shrink-0"
                                >
                                  Talk Free →
                                </Link>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </section>
                );
              })}
            </div>

            {/* FAQs Section */}
            <section id="faqs" className="mt-14 pt-10 border-t border-slate-200 scroll-mt-24">
              <h2 className="text-2xl sm:text-[26px] font-bold text-[#14181F] mb-6">
                Frequently Asked Questions (FAQs)
              </h2>

              <div className="space-y-3">
                {config.faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-xl border border-slate-200 bg-white overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-[#14181F] hover:bg-slate-50 transition-colors text-[15px] sm:text-base"
                      >
                        <span>
                          {idx + 1}. {faq.question}
                        </span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-[#2563EB] shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-4 pt-1 text-sm sm:text-[15px] text-slate-700 leading-[1.75] border-t border-slate-100">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Suggested Guides Grid */}
            <section className="mt-14 pt-10 border-t border-slate-200">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-xl sm:text-2xl font-bold text-[#14181F]">
                  Suggested {config.examFocus} Study Guides
                </h2>
                <Link
                  href="/resources"
                  className="text-xs sm:text-sm font-semibold text-[#2563EB] hover:underline flex items-center gap-1"
                >
                  <span>All 630+ Guides</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {config.relatedGuides.map((guide, idx) => (
                  <Link
                    key={idx}
                    href={guide.href}
                    className="group p-4 rounded-xl border border-slate-200 bg-[#F8FAFC] hover:bg-white hover:border-[#2563EB]/40 hover:shadow-sm transition-all flex items-center justify-between gap-3"
                  >
                    <div>
                      {guide.tag && (
                        <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#2563EB] bg-blue-50 px-2 py-0.5 rounded mb-1.5">
                          {guide.tag}
                        </span>
                      )}
                      <p className="text-sm font-semibold text-[#14181F] group-hover:text-[#2563EB] transition-colors">
                        {guide.label}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#2563EB] group-hover:translate-x-0.5 transition-all shrink-0" />
                  </Link>
                ))}
              </div>
            </section>
          </article>

          {/* RIGHT COLUMN: Sticky Mentskool Consultation & Mentor Cards */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            {/* Primary Card: Tempting Student-Friendly Free Senior Chat */}
            <div className="rounded-2xl border border-blue-200 bg-gradient-to-b from-blue-50/40 to-white shadow-sm p-6">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#2563EB] bg-blue-100/80 px-2.5 py-1 rounded-full mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>
                  {isJee
                    ? "Free 15-Min Senior Chat (₹0)"
                    : "Free 15-Min Ranker Chat (₹0)"}
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#14181F] leading-snug mb-2">
                {isJee
                  ? "Talk to an IITian Who Already Cracked JEE"
                  : "Talk to an AIIMS / GMC Topper Who Cracked NEET"}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-5">
                {isJee
                  ? "Confused about backlogs, low mock scores, or which chapter to fix first? Ask an IIT Bombay / Delhi senior directly and get a clear 7-day plan."
                  : "Stuck on NCERT traps, Physics fear, or plateaued mock marks? Ask an AIIMS / top GMC senior directly and get a clear score-jump plan."}
              </p>

              <Link
                href="/free-mentorship-session"
                className="w-full py-3.5 px-4 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <span>
                  {isJee
                    ? "Talk to an IITian for Free"
                    : "Talk to an AIIMS Ranker for Free"}
                </span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/book-call"
                className="mt-2.5 w-full py-2.5 px-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-[#2B3A67] font-semibold text-xs flex items-center justify-center transition-colors"
              >
                Pick Your Senior &amp; Book 1:1 Slot
              </Link>

              <p className="mt-3 text-[11px] text-center text-slate-500">
                No sales pressure • Friendly 1:1 senior advice
              </p>
            </div>

            {/* Secondary Card: Find Your 1:1 Mentor */}
            <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#2B3A67] text-white flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#14181F]">
                    Browse Verified {isJee ? "IITian" : "AIIMS"} Mentors
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Filter by exam, rank, language &amp; weekly availability.
                  </p>
                </div>
              </div>

              <Link
                href="/mentors"
                className="w-full py-2.5 px-4 rounded-xl bg-[#2B3A67] hover:bg-[#1E294B] text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Explore Mentor Roster</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Tertiary Card: Free Score & Rank Tool */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="flex items-center gap-2.5 mb-2">
                <Calculator className="w-4 h-4 text-[#0284C7]" />
                <h4 className="font-bold text-sm text-[#14181F]">
                  Free {config.examFocus} Planning Tool
                </h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Estimate your realistic rank bracket and target college cutoffs
                in seconds.
              </p>
              <Link
                href={toolHref}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0284C7] hover:underline"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Open {toolLabel}</span>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
