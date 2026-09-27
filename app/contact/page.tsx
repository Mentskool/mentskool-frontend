import React from "react";
import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Headphones } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us & Help Center | Mentskool",
  description:
    "Get in touch with the Mentskool support team. Email support@mentskool.com for help with cohort mentorship, mentor onboarding, billing, or platform questions.",
  alternates: {
    canonical: "https://mentskool.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="w-full bg-[#0B0F19] text-slate-300 min-h-screen py-12 sm:py-16 px-4 sm:px-6 lg:px-8 font-sans selection:bg-sky-500/20 selection:text-sky-300">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Page Hero Header */}
        <div className="space-y-4 border-b border-slate-800 pb-8 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-800/80 text-sky-400 text-xs font-semibold tracking-wide uppercase">
            <Headphones className="w-3.5 h-3.5 text-sky-400" />
            <span>Support &amp; Community Help</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white">
            We&apos;re Here to Help
          </h1>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Have a question about cohort mentorship, mentor verification, or subscriptions? Reach out directly and our team will get back to you within 24 business hours.
          </p>
        </div>

        {/* Interactive Form & FAQ Component */}
        <ContactForm />
      </div>
    </div>
  );
}
