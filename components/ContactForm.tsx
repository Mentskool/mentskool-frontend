"use client";

import React, { useState } from "react";
import {
  Send,
  CheckCircle2,
  Mail,
  MessageSquare,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Clock,
  Sparkles,
} from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "student",
    category: "general",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending inquiry / dispatching
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const faqs = [
    {
      q: "How does the 10-student cohort mentorship work?",
      a: "Every verified mentor at Mentskool has their cohort capacity strictly capped at 10 active students via atomic Redis seat locks. This ensures your mentor has enough time each week to review your individual homework problems, grade diagnostic quizzes, and conduct meaningful 1:1 strategy calls.",
    },
    {
      q: "Can I switch mentors if their teaching style doesn't match?",
      a: "Yes, 100%! Mentskool is built on complete student freedom with zero long-term lock-in. You can cancel your current cohort at the end of the month and join another verified IITian or AIIMS ranker. All your task history and progress metrics transfer with your student profile.",
    },
    {
      q: "How are mentors verified on Mentskool?",
      a: "Every mentor must submit their official college student ID card and verified entrance exam scorecard (JEE Advanced or NEET-UG). Our team audits every credential before granting access to mentor cohorts and tools.",
    },
    {
      q: "What happens if I miss a scheduled 1:1 strategy session?",
      a: "You can reschedule your 1:1 meeting with your mentor directly through the Mentskool schedule panel with at least 12 hours prior notice. Your mentor will allocate an alternate slot.",
    },
    {
      q: "What is your refund policy?",
      a: "Because seats are strictly capped at 10 and reserved exclusively when you enroll, cohort subscriptions are non-refundable once billed. However, upon cancellation, your mentorship access remains 100% active until the end of your 30-day billing cycle.",
    },
    {
      q: "How are student efficiency scores calculated?",
      a: "Efficiency scores measure your study consistency, on-time task submissions, and diagnostic test accuracy. Mentors review weekly outputs to help you eliminate negative marking habits and improve score consistency.",
    },
  ];

  return (
    <div className="space-y-16">
      {/* Contact Form & Support Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Reachout Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-7 rounded-2xl bg-[#0F172A] border border-slate-800 space-y-5">
            <h3 className="text-base font-bold font-display text-white flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-sky-400" />
              <span>Direct Channels</span>
            </h3>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="space-y-1">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Student &amp; General Support
                </span>
                <div>
                  <a
                    href="mailto:support@mentskool.com"
                    className="text-white hover:text-sky-400 transition-colors font-medium text-base inline-flex items-center gap-1.5"
                  >
                    <Mail className="w-4 h-4 text-sky-400" />
                    <span>support@mentskool.com</span>
                  </a>
                </div>
                <p className="text-[11px] text-slate-500">
                  Response within 12–24 hours for enrollment, cohort access, or platform queries.
                </p>
              </div>

              <div className="space-y-1 pt-2 border-t border-slate-800">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Mentor Verification Desk
                </span>
                <div>
                  <a
                    href="mailto:mentors@mentskool.com"
                    className="text-white hover:text-sky-400 transition-colors font-medium text-sm inline-flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5 text-indigo-400" />
                    <span>mentors@mentskool.com</span>
                  </a>
                </div>
                <p className="text-[11px] text-slate-500">
                  For IIT &amp; AIIMS rankers with onboarding, ID proof, or cohort setup questions.
                </p>
              </div>

              <div className="space-y-1 pt-2 border-t border-slate-800">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Operational Hours
                </span>
                <p className="text-slate-300 font-medium flex items-center gap-1.5 text-xs">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Monday – Saturday, 10:00 AM – 7:00 PM IST</span>
                </p>
              </div>
            </div>
          </div>

          {/* Quick Notice */}
          <div className="p-4 rounded-xl bg-sky-950/30 border border-sky-800/40 text-xs text-sky-200/90 leading-relaxed flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
            <div>
              <strong>Already enrolled in a cohort?</strong> You can also message your mentor directly anytime from the in-app chat panel for quick doubt clearance.
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0F172A] border border-slate-800">
            {submitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold font-display text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 max-w-sm mx-auto">
                    Thank you for reaching out, {formData.name || "there"}. A confirmation has been logged, and our team will reply to <strong>{formData.email}</strong> within 24 business hours.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      role: "student",
                      category: "general",
                      message: "",
                    });
                  }}
                  className="mt-4 px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold font-display text-white">
                    Send Us an Inquiry
                  </h3>
                  <p className="text-xs text-slate-400">
                    Fill out the form below and we will route your inquiry to the relevant desk.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      Your Full Name <span className="text-sky-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aryan Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-xs sm:text-sm placeholder:text-slate-600 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      Email Address <span className="text-sky-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="aryan@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-xs sm:text-sm placeholder:text-slate-600 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Role */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      I am a...
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-xs sm:text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                    >
                      <option value="student">JEE / NEET Student</option>
                      <option value="parent">Parent of Aspirant</option>
                      <option value="mentor">Current / Aspiring Mentor</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>

                  {/* Category */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      Topic
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-xs sm:text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                    >
                      <option value="general">General Platform Question</option>
                      <option value="subscription">Cohort Subscription &amp; Billing</option>
                      <option value="mentor-onboarding">Mentor Verification &amp; Onboarding</option>
                      <option value="technical">Technical Support</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">
                    Your Message <span className="text-sky-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us what you need help with..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-xs sm:text-sm placeholder:text-slate-600 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Embedded FAQ Section */}
      <div id="faq" className="pt-8 border-t border-slate-800 space-y-6 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-xs font-semibold uppercase">
            <HelpCircle className="w-3.5 h-3.5 text-sky-400" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-display text-white">
            Quick Answers to Common Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Everything you need to know about cohort enrollment, seat allocation, and mentor interactions.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#0F172A] border border-slate-800 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-semibold text-sm text-white hover:text-sky-400 transition-colors"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-500 flex-shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
