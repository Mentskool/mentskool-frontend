import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Truck,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Mail,
  Zap,
  RotateCcw,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Shipping & Delivery Policy | Mentskool",
  description:
    "Review Mentskool's Shipping & Service Delivery Policy. Educational mentorship, cohort features, and 1:1 strategy calls are delivered electronically and instantly upon payment confirmation.",
  alternates: {
    canonical: "https://mentskool.com/shipping-policy",
  },
};

export default function ShippingPolicyPage() {
  return (
    <div className="w-full bg-[#0B0F19] text-slate-300 min-h-screen py-12 sm:py-16 px-4 sm:px-6 lg:px-8 font-sans selection:bg-sky-500/20 selection:text-sky-300">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="space-y-4 border-b border-slate-800 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-800/80 text-sky-400 text-xs font-semibold tracking-wide uppercase">
            <Truck className="w-3.5 h-3.5 text-sky-400" />
            <span>Fulfillment &amp; Service Delivery</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white">
            Shipping &amp; Delivery Policy
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
            <span>Last Updated: October 2026</span>
            <span>•</span>
            <span className="text-sky-400">100% Digital Service Delivery</span>
          </div>
        </div>

        {/* Highlight Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] border border-sky-500/30 shadow-xl space-y-4">
          <div className="flex items-center gap-3 text-sky-400">
            <Zap className="w-6 h-6" />
            <h2 className="text-xl font-bold font-display text-white">
              Instant Online Digital Delivery
            </h2>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            Mentskool is an online edtech platform delivering live cohort mentorship, 1-on-1 strategy sessions, diagnostic quizzes, and accountability tracking for JEE and NEET aspirants. Because all services are electronic and digital, <strong>no physical goods are dispatched or delivered</strong>.
          </p>
        </div>

        {/* Section Breakdown */}
        <div className="space-y-8 text-sm leading-relaxed">
          {/* 1. Mode of Delivery */}
          <div className="space-y-3 p-6 rounded-2xl bg-[#0F172A] border border-slate-800">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>1. Mode of Service Delivery</span>
            </h3>
            <p className="text-slate-400">
              Upon successful payment authorization via our secure Razorpay gateway, all mentorship deliverables are provisioned immediately through your authenticated Mentskool student account:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-300 text-xs sm:text-sm">
              <li>
                <strong>Cohort Workspace Access:</strong> Instant unlocking of mentor assignments, cohort discussions, and announcements on your dashboard.
              </li>
              <li>
                <strong>1:1 Mentorship Sessions:</strong> Confirmation and calendar meeting links (Google Meet) are immediately populated in your schedule view.
              </li>
              <li>
                <strong>Confirmation Email:</strong> A transaction invoice and enrollment summary are dispatched to your registered email address within 5 to 15 minutes.
              </li>
            </ul>
          </div>

          {/* 2. Delivery Timeline */}
          <div className="space-y-3 p-6 rounded-2xl bg-[#0F172A] border border-slate-800">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Clock className="w-4 h-4 text-sky-400" />
              <span>2. Delivery Timelines &amp; SLA</span>
            </h3>
            <p className="text-slate-400">
              Access to the platform is typically activated instantaneously (within seconds) of payment verification. In rare instances of banking network delay, please allow up to <strong>2 hours</strong> for server synchronization.
            </p>
            <p className="text-slate-400 text-xs">
              If your cohort dashboard does not automatically reflect active enrollment within 2 hours of payment completion, please notify our helpdesk at{" "}
              <a href="mailto:support@mentskool.com" className="text-sky-400 underline">
                support@mentskool.com
              </a>{" "}
              with your Razorpay Payment ID for immediate priority resolution.
            </p>
          </div>

          {/* 3. Shipping Charges */}
          <div className="space-y-3 p-6 rounded-2xl bg-[#0F172A] border border-slate-800">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-indigo-400" />
              <span>3. Shipping Charges &amp; Hidden Costs</span>
            </h3>
            <p className="text-slate-400">
              There are <strong>zero shipping charges, courier fees, or packaging costs</strong> associated with any Mentskool program. The fee visible on the mentor detail checkout screen is all-inclusive.
            </p>
          </div>

          {/* 4. Exchange & Service Modification */}
          <div className="space-y-3 p-6 rounded-2xl bg-[#0F172A] border border-slate-800">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <RotateCcw className="w-4 h-4 text-amber-400" />
              <span>4. Exchange &amp; Cohort Transfer Policy</span>
            </h3>
            <p className="text-slate-400">
              While physical item exchanges do not apply to digital educational services, Mentskool offers complete student flexibility:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-300 text-xs sm:text-sm">
              <li>
                <strong>Switching Mentors:</strong> Students can change cohorts upon conclusion of their 30-day cycle, or request an immediate switch through student support if seat capacity is available.
              </li>
              <li>
                <strong>Exam Category Transfer:</strong> If you shift preparation focus (e.g. from JEE to NEET), contact support to reassign your profile to an AIIMS medical ranker without extra platform penalties.
              </li>
            </ul>
          </div>

          {/* 5. Support Reachout */}
          <div className="p-6 rounded-2xl bg-[#0F172A] border border-slate-800 space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Mail className="w-4 h-4 text-sky-400" />
              <span>5. Delivery Questions &amp; Support Contact</span>
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm">
              For any questions concerning service delivery, access credentials, or transaction confirmations:
            </p>
            <div className="pt-2 text-xs text-slate-300 space-y-1 font-mono">
              <p>Email: support@mentskool.com / dipeshmaindolia@gmail.com</p>
              <p>Operating Hours: Monday – Saturday, 10:00 AM – 7:00 PM IST</p>
              <p>Platform: Mentskool Technologies (India)</p>
            </div>
            <div className="pt-2">
              <Link href="/contact" className="text-sky-400 hover:underline text-xs font-semibold">
                Visit Help Center &amp; Support Form →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
