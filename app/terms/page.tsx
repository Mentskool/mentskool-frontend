import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldAlert,
  CheckCircle2,
  Lock,
  Scale,
  Users,
  AlertTriangle,
  Clock,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Mentskool",
  description:
    "Review Mentskool's Terms of Service governing student cohort subscriptions, mentor verification, academic integrity, and platform usage.",
  alternates: {
    canonical: "https://mentskool.com/terms",
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="w-full bg-[#0B0F19] text-slate-300 min-h-screen py-12 sm:py-16 px-4 sm:px-6 lg:px-8 font-sans selection:bg-sky-500/20 selection:text-sky-300">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="space-y-4 border-b border-slate-800 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-800/80 text-sky-400 text-xs font-semibold tracking-wide uppercase">
            <Scale className="w-3.5 h-3.5 text-sky-400" />
            <span>Platform Agreement</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white">
            Terms of Service
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
            <span>Effective Date: September 2026</span>
            <span>•</span>
            <span>Version: 1.0 (Operational Draft)</span>
            <span>•</span>
            <span className="text-sky-400">Applies to all Students &amp; Mentors</span>
          </div>

          {/* Preliminary Legal Draft Notice */}
          <div className="mt-4 p-4 rounded-xl bg-amber-950/30 border border-amber-800/50 text-amber-200/90 text-xs leading-relaxed flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-amber-300 font-semibold block mb-0.5">
                Preliminary Legal Draft Notice
              </strong>
              This Terms of Service document outlines Mentskool&apos;s current operating policies, student-mentor commitments, and platform protocols. It is a first draft provided for platform transparency and must be reviewed and ratified by qualified legal counsel or a corporate legal service (e.g., Vakilsearch) before real commercial payments go live.
            </div>
          </div>
        </div>

        {/* Quick Summary Box */}
        <div className="p-6 rounded-2xl bg-[#0F172A] border border-slate-800 space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-sky-400" />
            <span>Key Terms at a Glance</span>
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300 leading-normal">
            <li className="flex items-start gap-2">
              <span className="text-sky-400 font-bold">•</span>
              <span><strong>30-Seat Limit:</strong> Every mentor cohort is strictly capped at 30 students with atomic seat reservations.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-400 font-bold">•</span>
              <span><strong>Verified Rankers:</strong> All mentors undergo college ID &amp; exam scorecard verification before onboarding.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-400 font-bold">•</span>
              <span><strong>Zero Long-term Lock-in:</strong> Monthly subscription cycle with complete freedom to switch or cancel anytime.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-400 font-bold">•</span>
              <span><strong>Academic Integrity:</strong> Zero tolerance for plagiarism, harassment, or unauthorized commercial sharing of mentor materials.</span>
            </li>
          </ul>
        </div>

        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2.5">
            <span className="text-sky-400 font-mono text-base">01.</span>
            <span>Acceptance of Terms</span>
          </h2>
          <div className="text-sm text-slate-300 leading-relaxed space-y-3">
            <p>
              By accessing, browsing, registering an account, or subscribing to any cohort on Mentskool (&ldquo;the Platform&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), you (&ldquo;User&rdquo;, &ldquo;Student&rdquo;, or &ldquo;Mentor&rdquo;) agree to be legally bound by these Terms of Service. If you do not accept these terms in full, you must discontinue using Mentskool immediately.
            </p>
            <p>
              If you are under 18 years of age (as is typical for high school JEE and NEET aspirants), you represent that you have obtained verifiable consent from a parent or legal guardian to create an account, purchase cohort subscriptions, and participate in platform activities.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2.5">
            <span className="text-sky-400 font-mono text-base">02.</span>
            <span>Platform Purpose &amp; Educational Role</span>
          </h2>
          <div className="text-sm text-slate-300 leading-relaxed space-y-3">
            <p>
              Mentskool is a peer accountability, diagnostic practice, and strategy mentorship platform designed specifically for national competitive entrance examinations (including JEE Main, JEE Advanced, and NEET-UG).
            </p>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 space-y-2">
              <p className="font-semibold text-white">Important Clarification on Guarantees:</p>
              <p>
                Mentskool provides guidance, structured weekly milestones, diagnostic quizzes, mock error analysis, and 1:1 strategy sessions. <strong>Mentskool does not guarantee specific exam ranks, percentile scores, college admissions, or examination outcomes.</strong> Competitive exam success depends fundamentally on the student&apos;s personal diligence, study consistency, and academic execution.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2.5">
            <span className="text-sky-400 font-mono text-base">03.</span>
            <span>Mentor Verification &amp; Standards</span>
          </h2>
          <div className="text-sm text-slate-300 leading-relaxed space-y-3">
            <p>
              Every mentor on Mentskool must be an active student or graduate of a premier institution (such as Indian Institutes of Technology, AIIMS, NITs, BITS Pilani, or recognized medical/engineering colleges).
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
              <li>
                <strong>Document Verification:</strong> Mentors must upload a valid college student ID card and official entrance exam scorecard during onboarding. Submitting fabricated, altered, or fraudulent credentials results in immediate permanent ban, revocation of all platform fees, and potential civil reporting.
              </li>
              <li>
                <strong>Capacity Constraints:</strong> Mentors agree to maintain cohorts with a strict ceiling of no more than 30 active students simultaneously to ensure meaningful personal attention.
              </li>
              <li>
                <strong>Turnaround Commitment:</strong> Mentors commit to reviewing assigned tasks, providing actionable feedback within 24–48 hours, and scheduling agreed 1:1 strategy meetings.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2.5">
            <span className="text-sky-400 font-mono text-base">04.</span>
            <span>Student Conduct &amp; Cohort Integrity</span>
          </h2>
          <div className="text-sm text-slate-300 leading-relaxed space-y-3">
            <p>
              As an enrolled student in a Mentskool cohort, you commit to maintaining a respectful, collaborative, and academically honest environment:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
              <li>
                <strong>Original Work:</strong> Task problem submissions, mock test answers, and diagnostic quiz completions must be your own authentic work.
              </li>
              <li>
                <strong>Proprietary Materials:</strong> Curated problem sets, revision checklists, formulas, and notes provided by mentors are strictly for your personal preparation. You may not republish, distribute, broadcast, or commercially resell mentor content.
              </li>
              <li>
                <strong>Zero Tolerance for Abuse:</strong> Harassment, abusive language, bullying, or inappropriate communications in direct messages, cohort chats, or video meetings will lead to immediate expulsion from the cohort without refund.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 5 */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2.5">
            <span className="text-sky-400 font-mono text-base">05.</span>
            <span>Subscriptions, Billing &amp; Seat Locking</span>
          </h2>
          <div className="text-sm text-slate-300 leading-relaxed space-y-3">
            <p>
              Cohort mentorship operates on a 30-day recurring subscription cycle billed in Indian Rupees (INR).
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                <span className="text-xs font-bold text-sky-400 flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5" /> Atomic Reservation
                </span>
                <p className="text-xs text-slate-400 leading-relaxed">
                  When you enroll, an atomic Redis lock reserves your seat. Because capacity is strictly capped at 30, that seat cannot be offered to other aspirants for your paid month.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                <span className="text-xs font-bold text-sky-400 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> 1-Cohort Policy
                </span>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Students may participate in one active cohort at any given time to ensure deep focus and prevent over-enrollment.
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-400 pt-1">
              For complete details on payment processing, non-refundability, and end-of-cycle cancellation access, please review our dedicated{" "}
              <Link href="/refund-policy" className="text-sky-400 underline hover:text-sky-300 font-medium">
                Refund &amp; Cancellation Policy
              </Link>.
            </p>
          </div>
        </section>

        {/* Section 6 */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2.5">
            <span className="text-sky-400 font-mono text-base">06.</span>
            <span>Student Reviews &amp; 20-Day Eligibility Gate</span>
          </h2>
          <div className="text-sm text-slate-300 leading-relaxed space-y-3">
            <p>
              To safeguard against fraudulent reviews, spam, or biased rankings, Mentskool enforces a verified review policy:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
              <li>
                Only active students who have completed at least <strong>20 days</strong> in a mentor&apos;s cohort are eligible to submit a public star rating and written testimonial.
              </li>
              <li>
                Students are permitted one review per mentor cohort, which they may update at any point during active mentorship to reflect ongoing experience.
              </li>
              <li>
                Reviews containing defamatory remarks, false accusations, hate speech, or competitor solicitation will be removed upon platform audit.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 7 */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2.5">
            <span className="text-sky-400 font-mono text-base">07.</span>
            <span>Third-Party Payment Processors</span>
          </h2>
          <div className="text-sm text-slate-300 leading-relaxed space-y-3">
            <p>
              All online payments, UPI transfers, credit/debit card transactions, and net banking on Mentskool are processed through Razorpay (Razorpay Software Private Limited) or accredited RBI-regulated payment aggregators.
            </p>
            <p className="text-xs text-slate-400">
              Mentskool does not store complete banking credentials, card numbers, or CVV codes on its servers. By initiating a payment, you agree to comply with the third-party processor&apos;s applicable terms and security standards.
            </p>
          </div>
        </section>

        {/* Section 8 */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2.5">
            <span className="text-sky-400 font-mono text-base">08.</span>
            <span>Limitation of Liability &amp; Disclaimers</span>
          </h2>
          <div className="text-sm text-slate-300 leading-relaxed space-y-3">
            <p>
              To the fullest extent permitted by applicable Indian law, Mentskool, its founders, and affiliates disclaim all warranties, express or implied. Under no circumstances shall Mentskool&apos;s aggregate liability arising out of or related to your cohort participation exceed the total fee paid by you to Mentskool during the one (1) month immediately preceding the event giving rise to the claim.
            </p>
          </div>
        </section>

        {/* Section 9 */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2.5">
            <span className="text-sky-400 font-mono text-base">09.</span>
            <span>Governing Law &amp; Jurisdiction</span>
          </h2>
          <div className="text-sm text-slate-300 leading-relaxed space-y-3">
            <p>
              These Terms of Service and any contractual or non-contractual disputes arising from them shall be governed by and construed in accordance with the laws of the Republic of India. The courts located in New Delhi, India shall have exclusive jurisdiction over all legal proceedings.
            </p>
          </div>
        </section>

        {/* Section 10 */}
        <section className="space-y-4 border-t border-slate-800 pt-8">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2.5">
            <span className="text-sky-400 font-mono text-base">10.</span>
            <span>Contact &amp; Grievance Redressal</span>
          </h2>
          <div className="text-sm text-slate-300 leading-relaxed space-y-2">
            <p>
              If you have any questions regarding these Terms or wish to report a platform grievance or mentor conduct violation:
            </p>
            <div className="p-4 rounded-xl bg-[#0F172A] border border-slate-800 text-xs text-slate-300 space-y-1">
              <p><strong>Platform Support:</strong> support@mentskool.com</p>
              <p><strong>Grievance Officer:</strong> grievance@mentskool.com</p>
              <p><strong>Response Turnaround:</strong> 24–48 working hours</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
