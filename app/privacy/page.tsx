import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  Lock,
  Eye,
  Database,
  UserCheck,
  Server,
  AlertTriangle,
  Mail,
  KeyRound,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Mentskool",
  description:
    "Learn how Mentskool collects, processes, and protects your personal data, mentor verification documents, and payment details via Razorpay.",
  alternates: {
    canonical: "https://mentskool.com/privacy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full bg-[#0B0F19] text-slate-300 min-h-screen py-12 sm:py-16 px-4 sm:px-6 lg:px-8 font-sans selection:bg-sky-500/20 selection:text-sky-300">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="space-y-4 border-b border-slate-800 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-800/80 text-sky-400 text-xs font-semibold tracking-wide uppercase">
            <Shield className="w-3.5 h-3.5 text-sky-400" />
            <span>Data Protection &amp; Privacy</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white">
            Privacy Policy
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
            <span>Effective Date: September 2026</span>
            <span>•</span>
            <span>Version: 1.0 (Operational Draft)</span>
            <span>•</span>
            <span className="text-sky-400">Compliant with Information Technology Act, 2000 &amp; SPDI Rules</span>
          </div>

          {/* Preliminary Legal Draft Notice */}
          <div className="mt-4 p-4 rounded-xl bg-amber-950/30 border border-amber-800/50 text-amber-200/90 text-xs leading-relaxed flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-amber-300 font-semibold block mb-0.5">
                Preliminary Legal Draft Notice
              </strong>
              This Privacy Policy reflects Mentskool&apos;s current data handling, storage, and payment processing procedures. It is a first draft provided for platform transparency and should be reviewed and ratified by legal counsel or a specialized service (such as Vakilsearch) before taking live commercial payments.
            </div>
          </div>
        </div>

        {/* Core Principles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-[#0F172A] border border-slate-800 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-sky-950 text-sky-400 flex items-center justify-center">
              <Lock className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-white text-sm font-display">Zero Data Selling</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We never sell, rent, or trade your personal details, phone numbers, or academic records to third-party coaching institutes or ad brokers.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0F172A] border border-slate-800 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-sky-950 text-sky-400 flex items-center justify-center">
              <KeyRound className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-white text-sm font-display">Razorpay Encrypted</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              All payment transactions are handled through PCI-DSS compliant Razorpay gateways. We never store credit cards, CVVs, or UPI PINs.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0F172A] border border-slate-800 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-sky-950 text-sky-400 flex items-center justify-center">
              <UserCheck className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-white text-sm font-display">Verification Security</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Mentor college ID cards and scorecards are securely stored and inspected solely to verify authentic ranker credentials.
            </p>
          </div>
        </div>

        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2.5">
            <span className="text-sky-400 font-mono text-base">01.</span>
            <span>Information We Collect</span>
          </h2>
          <div className="text-sm text-slate-300 leading-relaxed space-y-4">
            <p>
              We collect information that you directly provide when registering an account, subscribing to a mentor cohort, applying as a mentor, or utilizing interactive learning tools:
            </p>

            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">A. Student Account Data</h4>
                <p className="text-xs text-slate-300">
                  Full name, email address, secure bcrypt password hash, preparation target (JEE Main/Advanced, NEET-UG), graduation/exam year, and optional profile avatar.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">B. Mentor Onboarding &amp; Verification Proofs</h4>
                <p className="text-xs text-slate-300">
                  College name, degree program, competitive entrance exam rank (e.g., AIR 124 in JEE Advanced), college ID document photo (PDF/JPG/PNG), scorecard document, monthly fee settings, and bio.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">C. Learning &amp; Accountability Activity</h4>
                <p className="text-xs text-slate-300">
                  Weekly task submissions, question responses in diagnostic quizzes, efficiency score calculations, scheduled 1:1 meeting records, and cohort chat communication.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">D. Payment &amp; Billing Records</h4>
                <p className="text-xs text-slate-300">
                  Transaction identifiers issued by Razorpay, subscription activation timestamps, expiration dates, and payment status. <em>Complete card details or bank login credentials are handled directly by Razorpay and are never stored on Mentskool servers.</em>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2.5">
            <span className="text-sky-400 font-mono text-base">02.</span>
            <span>How We Use Your Information</span>
          </h2>
          <div className="text-sm text-slate-300 leading-relaxed space-y-3">
            <p>
              We process your personal information strictly for legitimate educational, operational, and communication purposes:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
              <li>
                <strong>Mentorship Delivery:</strong> Managing cohort seat allocation (capped at 10 students), enabling 1:1 video meetings, and synchronizing mentor feedback on homework tasks.
              </li>
              <li>
                <strong>Authenticity Audits:</strong> Reviewing uploaded college credentials and scorecards to verify that every active mentor is a genuine ranker.
              </li>
              <li>
                <strong>Transactional Notifications:</strong> Sending automated email updates for scheduled 1:1 strategy calls, new task assignments, monthly review reminders, and payment receipts.
              </li>
              <li>
                <strong>Student Efficiency Scoring:</strong> Calculating consistency metrics (on-time submissions, accuracy in diagnostic quizzes) to help students identify weak areas and track growth.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2.5">
            <span className="text-sky-400 font-mono text-base">03.</span>
            <span>Third-Party Service Providers</span>
          </h2>
          <div className="text-sm text-slate-300 leading-relaxed space-y-3">
            <p>
              Mentskool partners with trusted technology providers who process data strictly under our contractual instructions:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span> Razorpay
                </span>
                <p className="text-xs text-slate-400">
                  Payment gateway aggregator processing credit cards, debit cards, UPI, and net banking with RBI-compliant encryption.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-sky-500"></span> Brevo / Cloud SMTP
                </span>
                <p className="text-xs text-slate-400">
                  Secure transactional email infrastructure for meeting invitations, subscription receipts, and password resets.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Cloud Database &amp; Redis
                </span>
                <p className="text-xs text-slate-400">
                  Encrypted PostgreSQL databases and in-memory Redis clusters ensuring atomic cohort seat counts without overbooking.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span> Web Infrastructure &amp; CDN
                </span>
                <p className="text-xs text-slate-400">
                  Global edge servers providing HTTPS 256-bit TLS encryption, DDoS protection, and fast asset delivery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2.5">
            <span className="text-sky-400 font-mono text-base">04.</span>
            <span>Your Rights &amp; Data Control</span>
          </h2>
          <div className="text-sm text-slate-300 leading-relaxed space-y-3">
            <p>
              You maintain full ownership and control over your personal data on Mentskool:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
              <li>
                <strong>Access &amp; Rectification:</strong> You can review and update your name, email, bio, and target exam at any time in your Dashboard Settings.
              </li>
              <li>
                <strong>Data Portability &amp; Deletion:</strong> You may request an export of your task history or full deletion of your account by emailing support@mentskool.com. Upon account closure, all personal files are purged within 30 days, except records required for tax or statutory audits.
              </li>
              <li>
                <strong>Opt-out of Marketing:</strong> You may unsubscribe from promotional announcements with 1-click while retaining critical operational emails (such as scheduled meeting invites).
              </li>
            </ul>
          </div>
        </section>

        {/* Section 5 */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2.5">
            <span className="text-sky-400 font-mono text-base">05.</span>
            <span>Protection of Minors</span>
          </h2>
          <div className="text-sm text-slate-300 leading-relaxed space-y-2">
            <p>
              A substantial portion of JEE and NEET aspirants are secondary school students under 18 years of age. Mentskool takes special care to safeguard minors:
            </p>
            <p className="text-xs text-slate-400">
              We do not publish minors&apos; personal phone numbers, physical addresses, or school names publicly. All student-mentor communications are logged on platform servers to ensure a safe, monitored, and purely academic environment. Parents or legal guardians may contact us at any time to inspect or delete their child&apos;s records.
            </p>
          </div>
        </section>

        {/* Section 6 */}
        <section className="space-y-4 border-t border-slate-800 pt-8">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2.5">
            <span className="text-sky-400 font-mono text-base">06.</span>
            <span>Grievance Officer &amp; Inquiries</span>
          </h2>
          <div className="text-sm text-slate-300 leading-relaxed space-y-3">
            <p>
              In accordance with the Indian Information Technology Act, 2000 and rules made thereunder, the contact details of the Grievance Officer for Mentskool are:
            </p>
            <div className="p-4 rounded-xl bg-[#0F172A] border border-slate-800 text-xs text-slate-300 space-y-1">
              <p><strong>Grievance Officer:</strong> Mentskool Grievance Cell</p>
              <p><strong>Email:</strong> grievance@mentskool.com</p>
              <p><strong>Support Email:</strong> support@mentskool.com</p>
              <p><strong>Headquarters:</strong> New Delhi, India</p>
              <p><strong>Response Time:</strong> Within 48 hours pursuant to statutory requirements</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
