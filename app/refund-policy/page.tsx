import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  RotateCcw,
  CheckCircle2,
  Lock,
  Calendar,
  AlertTriangle,
  HelpCircle,
  ShieldCheck,
  CreditCard,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | Mentskool",
  description:
    "Review Mentskool's Refund and Cancellation Policy. Cohort subscriptions are non-refundable once paid; access continues until the end of the billing cycle upon cancellation.",
  alternates: {
    canonical: "https://mentskool.com/refund-policy",
  },
};

export default function RefundPolicyPage() {
  return (
    <div className="w-full bg-[#0B0F19] text-slate-300 min-h-screen py-12 sm:py-16 px-4 sm:px-6 lg:px-8 font-sans selection:bg-sky-500/20 selection:text-sky-300">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="space-y-4 border-b border-slate-800 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-800/80 text-sky-400 text-xs font-semibold tracking-wide uppercase">
            <RotateCcw className="w-3.5 h-3.5 text-sky-400" />
            <span>Billing &amp; Cancellations</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white">
            Refund &amp; Cancellation Policy
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
            <span>Effective Date: September 2026</span>
            <span>•</span>
            <span>Version: 1.0 (Operational Draft)</span>
            <span>•</span>
            <span className="text-sky-400">30-Seat Atomic Allocation Architecture</span>
          </div>

          {/* Preliminary Legal Draft Notice */}
          <div className="mt-4 p-4 rounded-xl bg-amber-950/30 border border-amber-800/50 text-amber-200/90 text-xs leading-relaxed flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-amber-300 font-semibold block mb-0.5">
                Preliminary Legal Draft Notice
              </strong>
              This Refund &amp; Cancellation Policy reflects Mentskool&apos;s operational seat locking and billing mechanics. It is a first draft provided for platform transparency and should be reviewed and ratified by qualified legal counsel or a corporate legal service (e.g., Vakilsearch) before real commercial payments go live.
            </div>
          </div>
        </div>

        {/* Core Policy Highlight Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] border-2 border-sky-500/30 shadow-xl space-y-4">
          <div className="flex items-center gap-2.5 text-sky-400 font-bold text-sm uppercase tracking-wider">
            <ShieldCheck className="w-5 h-5 text-sky-400" />
            <span>Core Principle</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold font-display text-white">
            Cohort Subscriptions Are Non-Refundable Once Billed.
          </h2>

          <p className="text-sm text-slate-300 leading-relaxed">
            When you cancel your cohort subscription, <strong className="text-white">your mentorship access remains 100% active until the end of your current 30-day billing cycle</strong>. Your subscription will simply not renew for the subsequent month, and your seat will be automatically released at the conclusion of your paid period.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-300">
            <div className="flex items-start gap-2 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
              <span className="text-sky-400 font-bold">•</span>
              <span><strong>No Immediate Lockout:</strong> You retain full access to meetings, quizzes, tasks, and mentor chat until day 30.</span>
            </div>
            <div className="flex items-start gap-2 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
              <span className="text-sky-400 font-bold">•</span>
              <span><strong>Zero Cancellation Fee:</strong> Cancel anytime with a single click from your cohort dashboard.</span>
            </div>
          </div>
        </div>

        {/* Section 1: The Why */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2.5">
            <span className="text-sky-400 font-mono text-base">01.</span>
            <span>Why Cohorts Are Non-Refundable</span>
          </h2>
          <div className="text-sm text-slate-300 leading-relaxed space-y-3">
            <p>
              Unlike mass online coaching platforms with thousands of anonymous students watching pre-recorded videos, Mentskool is built on <strong>strictly capped cohorts of at most 30 students per mentor</strong>:
            </p>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <Lock className="w-4 h-4 text-sky-400 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-white block">Atomic Seat Reservation:</strong>
                  The moment you complete enrollment, our system executes an atomic Redis lock that physically reserves 1 of the 30 available seats exclusively in your name.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-white block">Dedicated Mentor Time Allocation:</strong>
                  Your mentor commits specific weekly calendar slots to review your homework, grade your tests, and conduct private 1:1 strategy meetings based on this guaranteed roster.
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400">
              Because other eager aspirants are turned away once a cohort reaches capacity, midway refunds are not sustainable for mentors who have budgeted their academic time.
            </p>
          </div>
        </section>

        {/* Section 2: How to Cancel */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2.5">
            <span className="text-sky-400 font-mono text-base">02.</span>
            <span>How to Cancel Your Subscription</span>
          </h2>
          <div className="text-sm text-slate-300 leading-relaxed space-y-3">
            <p>
              Cancelling your subscription is completely friction-free and can be performed at any time without calling customer care:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm">
              <li>Log into your Mentskool student account.</li>
              <li>Navigate to your active cohort page or visit the mentor&apos;s public profile.</li>
              <li>Click <strong>&ldquo;Leave Cohort / Cancel Subscription&rdquo;</strong> in the membership action panel.</li>
              <li>Confirm your cancellation in the prompt.</li>
            </ol>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
              <strong className="text-white block mb-1">What Happens Next:</strong>
              Your recurring renewal is immediately turned off. You will not be charged again. Your cohort dashboard and chat access remain fully functional until the final day of your paid 30-day term.
            </div>
          </div>
        </section>

        {/* Section 3: Switching Mentors */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2.5">
            <span className="text-sky-400 font-mono text-base">03.</span>
            <span>Switching Mentors (Zero Lock-in)</span>
          </h2>
          <div className="text-sm text-slate-300 leading-relaxed space-y-3">
            <p>
              We believe every student deserves a mentor whose teaching style perfectly resonates with them. If your current mentor&apos;s guidance does not match your learning pace:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
              <li>
                You can cancel your current cohort at the end of the month and enroll with any other verified IITian or AIIMS ranker who has an available seat.
              </li>
              <li>
                All your past task submissions, quiz scores, and efficiency metrics transfer seamlessly with your student profile.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 4: Exceptional Circumstances & Payment Disputes */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2.5">
            <span className="text-sky-400 font-mono text-base">04.</span>
            <span>Exceptions, Double-Charges &amp; Billing Disputes</span>
          </h2>
          <div className="text-sm text-slate-300 leading-relaxed space-y-3">
            <p>
              We recognize that technical issues can occasionally occur during online payments. We honor 100% full refunds under the following specific circumstances:
            </p>

            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <CreditCard className="w-3.5 h-3.5 text-sky-400" />
                  <span>A. Duplicate Payment / Gateway Glitch</span>
                </h4>
                <p className="text-xs text-slate-400">
                  If your bank account or card is charged more than once due to a network timeout or Razorpay gateway glitch, the duplicate transaction will be refunded in full. Refunds are routed directly to the original payment source within <strong>5–7 business days</strong>.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                  <span>B. Mentor Non-Performance / Prolonged Inactivity</span>
                </h4>
                <p className="text-xs text-slate-400">
                  If a mentor becomes unresponsive for more than 7 consecutive days, misses scheduled meetings without prior notice, or is paused for non-compliance, students may raise an audit request. Upon verification, Mentskool will issue a prorated refund or immediate free transfer credit to an equivalent mentor cohort.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Contact */}
        <section className="space-y-4 border-t border-slate-800 pt-8">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2.5">
            <span className="text-sky-400 font-mono text-base">05.</span>
            <span>Billing Assistance &amp; Support</span>
          </h2>
          <div className="text-sm text-slate-300 leading-relaxed space-y-3">
            <p>
              Have questions about an active charge or need help with a transaction receipt? Our billing support team is here to assist:
            </p>
            <div className="p-4 rounded-xl bg-[#0F172A] border border-slate-800 text-xs text-slate-300 space-y-1.5">
              <p><strong>Billing Support:</strong> support@mentskool.com</p>
              <p><strong>Subject Line Format:</strong> [Billing Inquiry] Transaction ID / Student Email</p>
              <p><strong>Resolution SLA:</strong> Inquiries addressed within 24 business hours</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
