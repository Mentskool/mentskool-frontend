import React from "react";
import type { Metadata } from "next";
import {
  MentorProgramGuideTemplate,
  MentorGuidePageConfig,
} from "@/components/seo/MentorProgramGuideTemplate";

export const metadata: Metadata = {
  title: "Mentskool Mentor Program: Payouts, Cohort Seat Caps, UPI & Benefits | Mentskool",
  description:
    "Explore Mentskool's Mentor Program benefits: flexible monthly cohort pricing, atomic 30-student seat cap, direct UPI/bank payouts, verified IIT/AIIMS badges, and zero upfront cost.",
  keywords: [
    "Mentskool mentor program",
    "Mentskool mentor payouts",
    "Mentskool mentor salary and fees",
    "how much does Mentskool pay mentors",
    "Mentskool benefits for IIT and AIIMS mentors",
  ],
  alternates: {
    canonical: "https://mentskool.com/mentskool-mentor-program-benefits-and-payouts",
  },
  openGraph: {
    title: "Mentskool Mentor Program: Payout Structure, Seat Caps & Perks",
    description:
      "Transparent breakdown of how verified IIT, NIT, and MBBS mentors earn ₹12k–₹50k/month on Mentskool.",
    url: "https://mentskool.com/mentskool-mentor-program-benefits-and-payouts",
    siteName: "Mentskool",
    images: [{ url: "https://mentskool.com/logo.png", width: 1200, height: 630, alt: "Mentskool Mentor Program Payouts" }],
  },
};

const config: MentorGuidePageConfig = {
  slug: "mentskool-mentor-program-benefits-and-payouts",
  breadcrumbLabel: "Program Benefits & Payouts",
  audience: "BOTH",
  badgeText: "Official Mentskool Mentor Program Guide",
  h1Prefix: "Mentskool Mentor Program:",
  h1Highlight: "Payouts, Cohort Caps & Ranker Perks",
  heroDescription:
    "Every detail of Mentskool's Mentor Partner ecosystem is built around college student freedom—set your own monthly cohort fee, protect your grades with an atomic 30-seat ceiling, automate task tracking, and withdraw clean payouts via UPI.",
  summaryHeading: "Executive Overview: Transparent Economics & Zero Mentor Exploitation",
  summaryIntro:
    "Traditional Indian edtech companies often delay tutor payouts by 45–60 days, impose arbitrary rating deductions, or lock mentors into rigid minimum-hour contracts. Mentskool flips the script: you retain pricing autonomy, student-cap safety, and transparent payout tracking inside your mentor dashboard.",
  summaryPoints: [
    {
      title: "Mentor-Controlled Monthly Pricing",
      detail: "Choose your monthly subscription fee per student during Step 3 of onboarding—no forced discount dumping.",
    },
    {
      title: "Atomic 30-Student Seat Cap",
      detail: "Hard-capped database capacity protects your college CGPA and guarantees genuine 1:1 quality for every aspirant.",
    },
    {
      title: "Seamless Direct UPI / Bank Settlement",
      detail: "Attach your active UPI ID inside Mentor Onboarding and eliminate messy student payment chasing forever.",
    },
    {
      title: "Zero Registration or Platform Fee Upfront",
      detail: "Applying, getting verified, and publishing your ranker profile costs ₹0. We only grow when your cohort fills.",
    },
  ],
  sections: [
    {
      heading: "How the Mentskool Cohort Financial Model Works Step by Step",
      subheading: "Understanding monthly subscriptions, seat management, and predictable campus cash flow.",
      paragraphs: [
        "When you complete onboarding on Mentskool, you configure two core numbers: your monthly mentorship fee per student and your maximum active cohort capacity (anywhere from 5 up to the platform cap of 30 seats). Most verified mentors start around ₹1,000–₹1,800 per student per month depending on their exam tier (IIT Bombay/Delhi/Madras or AIIMS New Delhi rankers vs strong NIT/State GMC profiles).",
        "When a JEE or NEET aspirant picks your profile on /mentors and checks out via Razorpay/UPI, Mentskool's atomic seat reservation decrements an open seat in real time—preventing accidental double-booking. Unlike single-hour consulting where you earn once and hunt a new buyer next week, cohort enrollments renew monthly, creating steady cash flow across the exam preparation cycle.",
        "Every active student inside your cohort appears cleanly in your Mentor Portal (/mentor/students) with their weekly task completion rate, quiz analytics, and scheduled Google Meet booking links. Zero spreadsheet bookkeeping, zero payment reminders on WhatsApp.",
      ],
      bullets: [
        {
          title: "Free Discovery Session Funnel",
          detail: "Mentskool invests heavily in SEO traffic and free consultation funnels to bring qualified 2027 & 2028 aspirants directly to verified mentors.",
        },
        {
          title: "Complete Fee Autonomy",
          detail: "Raise your cohort rate for incoming batches as your verified student reviews and Efficiency ratings climb.",
        },
      ],
    },
    {
      heading: "Built-In Software Perks That Save Mentors 10+ Hours Every Week",
      subheading: "Why Mentskool is an operating system for mentorship—not just a listing directory.",
      paragraphs: [
        "Trying to mentor 20 aspirants using plain WhatsApp and Google Sheets breaks down by Week 2: chats scroll away, homework photos vanish, and you spend 40% of each call just asking 'Did you finish Rotational Motion?' Mentskool replaces that mess with dedicated student accountability workflows.",
        "Your Mentor Task Manager (/mentor/tasks) lets you push daily or weekly targets directly into each student's dashboard. As students mark tasks done, Mentskool tracks completion percentages automatically into an Efficiency Score. Before jumping on your scheduled Google Meet review (/mentor/sessions), one glance tells you whether a student struggled with consistency or mock-test execution—allowing you to deliver sharper advice in half the time.",
      ],
      bullets: [
        {
          title: "Verified Academic Shield",
          detail: "Our manual ID + scorecard check displays a prominent Verified Badge next to your college and AIR—instantly separating real rankers from fake Telegram gurus.",
        },
        {
          title: "Schedule Sovereignty",
          detail: "Configure your exact available hours and days so students only request sessions during windows that never collide with lectures or wards.",
        },
      ],
    },
    {
      heading: "Non-Monetary Benefits: Career Capital, Networking & Community",
      subheading: "What top mentors gain beyond monthly bank deposits.",
      paragraphs: [
        "Mentoring on Mentskool connects you with ambitious rankers across IITs, NITs, AIIMS, and state medical colleges nationwide. Beyond funding your college independence, tracking 15–30 learners through measurable score growth sharpens diagnostic communication, empathy, and executive coaching—traits recruiters and residency interviewers actively reward.",
      ],
    },
  ],
  tableTitle: "Mentskool Mentor Ecosystem Feature Breakdown",
  tableSubtitle: "Everything included out of the box when your mentor profile goes live:",
  tableHeaders: ["Platform Feature", "How It Works on Mentskool", "Why It Matters for You"],
  tableRows: [
    {
      col1: "Atomic Cohort Capacity (Max 30)",
      col2: "Set cap between 5–30 seats; auto-locks when full",
      col3: "Protects your college CGPA and maintains high 1:1 quality",
      highlight: true,
    },
    {
      col1: "Task & Efficiency Engine",
      col2: "Assign weekly study goals; dashboard computes student % score",
      col3: "Cuts weekly admin time by 70%—spot weak compliance in seconds",
    },
    {
      col1: "Automated Checkout & UPI",
      col2: "Students pay securely via Mentskool; payouts settle to your UPI",
      col3: "Zero awkward money conversations with families or missed renewals",
      highlight: true,
    },
    {
      col1: "Verified Ranker Badge",
      col2: "24–48 hr human audit of college ID + official NTA scorecard",
      col3: "Boosts parent conversion trust immediately vs unverified tutors",
    },
    {
      col1: "Zero Lock-In / Zero Joining Fee",
      col2: "Free account creation, pause admissions anytime",
      col3: "Full control before midsems, endsems, internships, or MBBS proffs",
    },
  ],
  playbookTitle: "Activate Your Mentskool Mentor Benefits in 6 Steps",
  playbookSubtitle: "Everything required to verify your credentials and start receiving enrollments:",
  playbookSteps: [
    {
      step: "Step 1",
      title: "Sign Up Under Mentor Role",
      description: "Create your account at /signup?role=MENTOR with Google or email verification.",
    },
    {
      step: "Step 2",
      title: "Fill College & AIR Details",
      description: "Provide your IIT, NIT, IIIT, AIIMS, or Govt Medical College info and exam ranks.",
    },
    {
      step: "Step 3",
      title: "Upload Proofs Securely",
      description: "Submit clear images of your student ID card and JEE/NEET scorecard for human review.",
    },
    {
      step: "Step 4",
      title: "Set Pricing, Cap & UPI",
      description: "Configure monthly fee, seat limit, and your direct UPI handle inside Step 3.",
    },
    {
      step: "Step 5",
      title: "Add Bio & Strategy Video",
      description: "Optionally link a 60-second YouTube unlisted intro so families hear your clarity firsthand.",
    },
    {
      step: "Step 6",
      title: "Start Mentoring & Earning",
      description: "Accept bookings via /mentors, run structured weekly calls, and track payouts effortlessly.",
    },
  ],
  faqs: [
    {
      question: "How much does it cost to become a mentor on Mentskool?",
      answer:
        "It is 100% free. There are zero signup fees, zero listing charges, and zero monthly software charges for verified mentors.",
    },
    {
      question: "Do mentors choose their own monthly pricing?",
      answer:
        "Yes! Inside Step 3 of Mentor Onboarding you select your monthly cohort fee per student based on your rank tier and mentorship track.",
    },
    {
      question: "Why is there a maximum 30-student seat cap?",
      answer:
        "We enforce a strict 30-student ceiling so no mentor sacrifices student quality or burns out academically. True 1:1 accountability stops working if one person takes 150 students.",
    },
    {
      question: "How does Mentskool protect my privacy?",
      answer:
        "Your personal phone number never needs to be exposed on public pages. Session bookings, task assignments, and student communication run cleanly through Mentskool.",
    },
    {
      question: "When can I update my available seats or pricing?",
      answer:
        "You can adjust open capacity, pause admissions for semester exams, or refine your profile anytime from your Mentor Profile dashboard.",
    },
    {
      question: "Can both JEE and NEET rankers join?",
      answer:
        "Yes! Mentskool supports dedicated verified tracks for JEE Main/Advanced mentors and NEET-UG MBBS mentors.",
    },
  ],
  relatedLinks: [
    { label: "Mentor Eligibility & Rank Verification", href: "/mentskool-mentor-eligibility-and-verification" },
    { label: "Become a JEE Mentor & Earn Money", href: "/become-a-jee-mentor-earn-money" },
    { label: "Become a NEET Mentor & Earn Money", href: "/become-a-neet-mentor-earn-money" },
    { label: "Chegg vs 1:1 Cohort Mentoring", href: "/online-tutoring-vs-mentoring-for-college-students" },
    { label: "How IITians Make Recurring Income", href: "/how-iitians-make-passive-income-mentoring" },
    { label: "College Pocket Money Guide for Rankers", href: "/college-pocket-money-guide-for-jee-neet-rankers" },
  ],
  articleHeadline: "Mentskool Mentor Program: Payouts, Cohort Seat Caps & Benefits",
  articleDescription: "Full breakdown of Mentskool's mentor pricing autonomy, atomic 30-seat caps, UPI payouts, and software workspace.",
};

export default function MentskoolMentorBenefitsPayoutsPage() {
  return <MentorProgramGuideTemplate config={config} />;
}
