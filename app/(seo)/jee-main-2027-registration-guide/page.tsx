import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  CreditCard,
  UserCheck,
  Upload,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { SeoMentorFunnel } from "@/components/seo/SeoMentorFunnel";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "JEE Main 2027 Registration Guide: Application Process, Documents & Aadhaar Rules",
  description:
    "Complete step-by-step guide to JEE Main 2027 registration. Avoid application rejection with exact photo/signature specifications, Aadhaar UIDAI verification, category certificate dates, and fee details.",
  keywords: [
    "jee main 2027 registration process",
    "documents for jee main 2027",
    "aadhaar verification jee main",
    "how to fill jee main 2027 application form",
    "jee main photo signature size",
    "jee main 2027 registration fee",
    "jee main category certificate rules",
  ],
  alternates: {
    canonical: "https://mentskool.com/jee-main-2027-registration-guide",
  },
  openGraph: {
    title: "JEE Main 2027 Registration Step-by-Step Guide & Document Checklist",
    description:
      "Avoid registration mistakes that disqualify thousands of students. Comprehensive guide to NTA application form filling, Aadhaar matching, and category certification.",
    url: "https://mentskool.com/jee-main-2027-registration-guide",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "JEE Main 2027 Registration Guide - Mentskool",
      },
    ],
  },
};

const faqs: FaqItem[] = [
  {
    question: "What happens if my Aadhaar card name does not match my Class 10 marksheet?",
    answer:
      "NTA uses automated API authentication with UIDAI. If your name, father's name, or date of birth on your Aadhaar differs from your Class 10 certificate (even by a single letter or spacing), automated verification will fail. You must update your Aadhaar card at an official enrollment center immediately before applying, or use alternative government identity methods like a verified Passport or PAN card.",
  },
  {
    question: "What is the mandatory issue date for OBC-NCL and GEN-EWS category certificates?",
    answer:
      "To be legally valid for the 2027 admissions cycle, your OBC-NCL or GEN-EWS certificate must be issued on or after April 1, 2026. Certificates issued prior to April 1, 2026 are rejected by NTA and JoSAA counseling committees, and your category will automatically be converted to General (Unreserved).",
  },
  {
    question: "Can I apply for Session 1 and Session 2 in the same application form?",
    answer:
      "Yes. In the application form, you can choose to apply for Session 1 only, Session 2 only, or both Session 1 and Session 2 together. If you choose both sessions, you pay the combined examination fee in a single transaction. You can also register for Session 2 later when its portal opens in February 2027.",
  },
  {
    question: "What are the exact file size specifications for uploaded photograph and signature?",
    answer:
      "Photograph: Recent passport-size photograph (color or black-and-white with 80% face visibility, white background, showing ears clearly). File format: JPG/JPEG between 10 KB and 200 KB. Signature: Signed in blue or black ink on clean white paper. File format: JPG/JPEG between 4 KB and 30 KB. Do not use digital fonts or capital signatures.",
  },
  {
    question: "What is the registration fee for JEE Main 2027?",
    answer:
      "For male candidates in General/Gen-EWS/OBC-NCL categories: ₹1,000 per session. For female candidates in General/Gen-EWS/OBC-NCL: ₹800 per session. For SC/ST/PwD/Transgender candidates: ₹500 per session. For examination centers outside India, the fee is ₹5,000 per session. Fees are payable online via UPI, Debit Card, Credit Card, or Net Banking.",
  },
  {
    question: "Can I change my examination city choice after submitting the form?",
    answer:
      "NTA typically provides a 3 to 5-day correction window in early December. However, examination city allocation depends strictly on administrative feasibility and seat capacity in the chosen city. Candidates are strongly advised to select four convenient neighboring cities during initial submission.",
  },
];

export default function JeeMain2027RegistrationGuidePage() {
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
        "@type": "HowTo",
        name: "How to Fill the JEE Main 2027 Application Form Online",
        description:
          "Step-by-step instructions to register for JEE Main 2027 on jeemain.nta.nic.in without errors or documentation discrepancies.",
        step: [
          {
            "@type": "HowToStep",
            name: "Online Registration & Authentication",
            text: "Create login credentials using Aadhaar UIDAI, DigiLocker, or ABC ID verification.",
          },
          {
            "@type": "HowToStep",
            name: "Personal & Academic Details",
            text: "Enter candidate personal information, school roll numbers, and parent details matching Class 10 records.",
          },
          {
            "@type": "HowToStep",
            name: "Document Uploading",
            text: "Upload certified passport photo, signature, and category certificates conforming to file specifications.",
          },
          {
            "@type": "HowToStep",
            name: "Fee Payment & Confirmation Page",
            text: "Complete online payment via gateway and print the 4-page confirmation slip for future counseling.",
          },
        ],
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
                label: "JEE Main 2027 Registration Guide",
                href: "/jee-main-2027-registration-guide",
              },
            ]}
          />

          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-xs font-semibold mb-4">
              <FileText className="w-3.5 h-3.5" />
              <span>Official NTA Portal Procedure • Step-by-Step Instructions</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              JEE Main 2027 Registration Guide:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-sky-300 to-indigo-400">
                Application Form, Documents &amp; Aadhaar Verification
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Every year, over 25,000 JEE application forms are flagged or rejected due to minor name discrepancies, outdated category certificates, or blurry photo uploads. Follow this definitive ranker checklist to complete your registration flawlessly in under 30 minutes.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Find Your IITian Strategy Mentor</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/free-mentorship-session"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all"
              >
                Claim Free 1:1 Application Advice
              </Link>
            </div>
          </div>

          {/* Direct Answer Box for AI Overviews & Search Snippets */}
          <section className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-brand-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-400 mb-3">
              <Sparkles className="w-4 h-4 text-brand-400" />
              <span>Executive Summary: How Do You Register for JEE Main 2027?</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-4">
              To register for <strong>JEE Main 2027</strong>, visit <strong>jeemain.nta.nic.in</strong> when forms open in late October 2026. Complete authentication using <strong>Aadhaar OTP (UIDAI)</strong> or DigiLocker, fill academic details matching your Class 10 certificate, upload a white-background passport photo (10–200 KB) and blue/black ink signature (4–30 KB), select 4 examination cities, and pay the ₹1,000 fee (₹800 for female candidates). Save the 4-page confirmation PDF.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs pt-2 border-t border-slate-800">
              <div>
                <span className="text-slate-400 block">Official Portal</span>
                <strong className="text-white">jeemain.nta.nic.in</strong>
              </div>
              <div>
                <span className="text-slate-400 block">Identity Mode</span>
                <strong className="text-white">Aadhaar / DigiLocker</strong>
              </div>
              <div>
                <span className="text-slate-400 block">General Male Fee</span>
                <strong className="text-white">₹1,000 Per Session</strong>
              </div>
              <div>
                <span className="text-slate-400 block">Photo Specs</span>
                <strong className="text-white">80% Face, White BG</strong>
              </div>
            </div>
          </section>

          {/* Section 1: Step-by-Step 4-Stage Application Walkthrough */}
          <section className="my-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-400 bg-brand-500/10 px-3 py-1 rounded-full border border-brand-500/20">
                Step-by-Step Walkthrough
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3">
                The 4 Stages of JEE Main 2027 Registration
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Follow these exact sequential steps to complete your registration on the NTA server:
              </p>
            </div>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col md:flex-row gap-6 items-start">
                <div className="w-12 h-12 rounded-2xl bg-brand-500/20 text-brand-300 font-black text-xl flex items-center justify-center shrink-0 border border-brand-500/30">
                  01
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Stage 1: Identity Authentication &amp; System Login Creation</h4>
                  <p className="text-slate-300 text-sm leading-relaxed mb-3">
                    Navigate to the registration portal on jeemain.nta.nic.in and click "New Candidate Registration". Select your authentication method:
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    <li>• <strong>Aadhaar Authentication (Fastest):</strong> Enter your 12-digit UIDAI number. An OTP will be sent to your linked mobile number. Your name, date of birth, and gender will be auto-populated from UIDAI servers.</li>
                    <li>• <strong>DigiLocker / ABC ID:</strong> Alternatively, authenticate via your government DigiLocker account to fetch certified school records.</li>
                    <li>• <strong>Create Strong Password:</strong> Formulate an 8 to 13 character password containing at least 1 uppercase letter, 1 lowercase letter, 1 numeric digit, and 1 special symbol (e.g., <code>IITBombay@2027</code>).</li>
                  </ul>
                </div>
              </div>

              {/* Step 2 */}
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col md:flex-row gap-6 items-start">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/20 text-sky-300 font-black text-xl flex items-center justify-center shrink-0 border border-sky-500/30">
                  02
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Stage 2: Personal, Academic &amp; Examination Choices</h4>
                  <p className="text-slate-300 text-sm leading-relaxed mb-3">
                    Log in using your generated Application Number and Password. Enter your detailed application fields:
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    <li>• <strong>Paper Selection:</strong> Select Paper 1 (B.E./B.Tech), Paper 2A (B.Arch), or Paper 2B (B.Planning). You can select multiple papers if eligible.</li>
                    <li>• <strong>Session Choice:</strong> Choose Session 1 only, or Session 1 + Session 2 together. Applying for both sessions in one go saves administrative hassle in February.</li>
                    <li>• <strong>Exam Medium:</strong> Select English, Hindi, or one of the 11 regional languages (Assamese, Bengali, Gujarati, Kannada, Malayalam, Marathi, Odia, Punjabi, Tamil, Telugu, Urdu).</li>
                    <li>• <strong>Exam Cities:</strong> Select 4 preferred cities in order of priority based on your permanent or current address state.</li>
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col md:flex-row gap-6 items-start">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 text-indigo-300 font-black text-xl flex items-center justify-center shrink-0 border border-indigo-500/30">
                  03
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Stage 3: High-Precision Document &amp; Media Upload</h4>
                  <p className="text-slate-300 text-sm leading-relaxed mb-3">
                    Upload your digital files following strict NTA software compression rules:
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    <li>• <strong>Recent Photograph (10 KB to 200 KB):</strong> White background, non-selfie studio portrait. Spectacles are allowed only if worn regularly; tinted glasses or hats are disqualified.</li>
                    <li>• <strong>Signature (4 KB to 30 KB):</strong> High-resolution scan of your signature on clean white paper using black or blue pen.</li>
                    <li>• <strong>Category Document (50 KB to 300 KB PDF):</strong> If claiming OBC-NCL, GEN-EWS, SC, ST, or PwD status, upload your certified certificate issued on/after April 1, 2026.</li>
                  </ul>
                </div>
              </div>

              {/* Step 4 */}
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col md:flex-row gap-6 items-start">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-300 font-black text-xl flex items-center justify-center shrink-0 border border-emerald-500/30">
                  04
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Stage 4: Fee Payment &amp; Confirmation Slip Generation</h4>
                  <p className="text-slate-300 text-sm leading-relaxed mb-3">
                    Review your application preview line-by-line using the "Review" button. Confirm that every spelling matches your Class 10 certificate:
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    <li>• <strong>Payment Gateways:</strong> Pay using SBI, Canara, HDFC, or ICICI integrated gateways via UPI (Google Pay, PhonePe, Paytm), Net Banking, or Cards.</li>
                    <li>• <strong>Generate Confirmation Page:</strong> Upon successful transaction, the portal generates a 4-page "Confirmation Page". Print at least 4 physical copies and save the PDF on cloud storage.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Critical Blunders That Lead to Rejection */}
          <section className="my-16 bg-gradient-to-br from-slate-900/90 to-slate-900/50 border border-slate-800 rounded-3xl p-8 sm:p-12">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-rose-400 bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/30">
                Cautionary Checklist
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3">
                Top 5 Registration Blunders to Avoid
              </h2>
              <p className="text-slate-400 text-sm mt-2">
                Learn from the mistakes of previous batches to ensure your candidature remains completely valid:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800">
                <h4 className="text-base font-bold text-rose-400 mb-2">1. Name Mismatch with Aadhaar</h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  If your Class 10 certificate reads "Aryan Kumar Sharma" but your Aadhaar reads "Aryan Sharma", NTA's automated match will fail. Always match your Class 10 legal record. Update your Aadhaar before registration begins.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800">
                <h4 className="text-base font-bold text-rose-400 mb-2">2. Outdated Category Certificates</h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Submitting an OBC-NCL or EWS certificate issued before April 1, 2026 results in immediate cancellation of reservation benefits during JoSAA counseling. The certificate must be issued in the current financial year.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800">
                <h4 className="text-base font-bold text-rose-400 mb-2">3. Blurred or Filtered Photographs</h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Uploading mobile phone selfies with social media filters or shadowy backgrounds leads to admit card withholding. Visit a professional photo studio, sit against a pure white background, and request a clean digital file.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800">
                <h4 className="text-base font-bold text-rose-400 mb-2">4. Inactive Email &amp; Phone Number</h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Never use a cyber-café owner's email address or mobile number. All OTPs, city slips, admit cards, and response sheets are delivered to your registered credentials. Use your own active SIM and parent's email.
                </p>
              </div>
            </div>
          </section>

          {/* Interactive Mentor Conversion Funnel */}
          <SeoMentorFunnel examFocus="JEE" />

          {/* FAQ Section */}
          <section className="mt-16">
            <SeoFaqAccordion
              title="Frequently Asked Questions on JEE Main 2027 Registration"
              subtitle="Clear guidance on Aadhaar authentication, category certificates, fee payment, and correction windows."
              faqs={faqs}
            />
          </section>

          {/* CTA Banner */}
          <section className="mt-16">
            <SeoCtaBanner
              title="Once Registered, Back Your Preparation with an IITian Mentor"
              description="A registration form only gets you into the examination hall. Our verified IIT mentors ensure you walk out with a 99+ percentile."
              primaryButtonText="Find Your Mentor"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
