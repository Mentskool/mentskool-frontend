"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: string;
}

interface SeoFaqAccordionProps {
  title?: string;
  subtitle?: string;
  faqs: FaqItem[];
}

export function SeoFaqAccordion({
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about Mentskool 1:1 mentorship & daily accountability.",
  faqs,
}: SeoFaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="w-full my-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Targeting 2027 &amp; 2028 Aspirants</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-white tracking-tight">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur-md shadow-card transition-all duration-200 overflow-hidden hover:border-slate-700"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-4.5 px-6 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-white hover:text-sky-300 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display pr-2">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 flex-shrink-0 text-slate-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-sky-400" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 bg-slate-950/40">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
