import React from "react";
import type { Metadata } from "next";
import {
  MentorProgramGuideTemplate,
  MentorGuidePageConfig,
} from "@/components/seo/MentorProgramGuideTemplate";

export const metadata: Metadata = {
  title: "Mentskool Mentor Eligibility & Verification: Ranks, IDs & Approval Guide",
  description:
    "Exact eligibility criteria to become a verified JEE or NEET mentor on Mentskool: required JEE Main/Adv ranks, NEET scores, acceptable college IDs, and 24–48 hr approval process.",
  keywords: [
    "Mentskool mentor eligibility",
    "how to get verified as mentor on Mentskool",
    "required JEE rank for Mentskool mentor",
    "required NEET score for Mentskool mentor",
    "Mentskool mentor onboarding documents",
  ],
  alternates: {
    canonical: "https://mentskool.com/mentskool-mentor-eligibility-and-verification",
  },
  openGraph: {
    title: "Mentskool Mentor Eligibility, Required Ranks & Verification Checklist",
    description:
      "Check exact JEE/NEET score requirements and documents needed to pass Mentskool verification in 24–48 hours.",
    url: "https://mentskool.com/mentskool-mentor-eligibility-and-verification",
    siteName: "Mentskool",
    images: [{ url: "https://mentskool.com/logo.png", width: 1200, height: 630, alt: "Mentskool Mentor Eligibility & Verification" }],
  },
};

const config: MentorGuidePageConfig = {
  slug: "mentskool-mentor-eligibility-and-verification",
  breadcrumbLabel: "Eligibility & Verification",
  audience: "BOTH",
  badgeText: "Official Verification Criteria",
  h1Prefix: "Mentskool Mentor Eligibility &",
  h1Highlight: "Verification Checklist (2027)",
  heroDescription:
    "Mentskool protects student trust with strict 100% document verification—zero fake rank claims or anonymous college dropouts. Review the exact academic benchmarks, accepted documents, and approval timeline to fast-track your onboarding.",
  summaryHeading: "Executive Overview: Why Strict Verification Helps Real Rankers Earn More",
  summaryIntro:
    "Other online portals get flooded with unverified tutors claiming fake IIT ranks, destroying parent trust and forcing fees down for everyone. Because Mentskool verifies every single mentor's official college ID and NTA scorecard manually, genuine IITians, NITians, and MBBS rankers convert parents effortlessly.",
  summaryPoints: [
    {
      title: "JEE Track Eligibility",
      detail: "Current students or alumni of IITs, NITs, IIITs, BITS, DTU, NSUT, and premier GFTIs holding strong verifiable JEE Main / JEE Advanced rank cards.",
    },
    {
      title: "NEET Track Eligibility",
      detail: "Current MBBS students, interns, or graduates from AIIMS, JIPMER, and Government/reputed Medical Colleges with verified NEET-UG scorecards.",
    },
    {
      title: "Two Mandatory Documents",
      detail: "A clear, unedited Institute Student ID (or official seat allotment letter for freshers) plus your official NTA/JEE/NEET scorecard.",
    },
    {
      title: "24 to 48 Hour Human Review",
      detail: "Once all 4 onboarding steps are submitted, our academic team verifies credentials and activates your profile rapidly.",
    },
  ],
  sections: [
    {
      heading: "Academic Benchmarks & Accepted Institutions for JEE & NEET Mentors",
      subheading: "Transparent clarity on which colleges and exam percentiles pass verification cleanly.",
      paragraphs: [
        "For the JEE Mentorship Track, Mentskool primarily verifies undergraduates, dual-degree students, and recent graduates enrolled at any of the 23 IITs, 31 NITs, IIITs, BITS Pilani/Goa/Hyderabad, DTU, NSUT, IIEST Shibpur, and top state engineering universities via JEE Main/Advanced. Ideally, applicants present a JEE Main percentile of 96.5+ (or equivalent category-qualified JEE Advanced rank / top institute admission proof).",
        "For the NEET Mentorship Track, Mentskool prioritizes MBBS undergraduates, clinical interns, and doctors from AIIMS campuses, JIPMER, BHU, AMU, AFMC, and State Government Medical Colleges across India, along with strong NEET-UG scorers at recognized medical universities holding verifiable NTA scorecards.",
        "Note that raw AIR isn't the only filter evaluated during review: clarity of communication in your bio, sincerity toward helping aspirants, and transparent personal comeback details (e.g., drop-year score improvement or subject breakthroughs) strengthen approval immediately.",
      ],
      bullets: [
        {
          title: "Freshers Are Fully Eligible",
          detail: "First-year students waiting for permanent smart IDs can upload JoSAA/MCC seat allotment letters or institute admission fee receipts showing their full name and branch.",
        },
        {
          title: "Dropper-to-Topper Stories Welcomed",
          detail: "Multiple-attempt rankers who finally cracked IIT/NIT/GMC bring priceless psychological empathy for repeater cohorts.",
        },
      ],
    },
    {
      heading: "Exact Documents to Prepare Before Opening Step 2 of Mentor Onboarding",
      subheading: "Avoid verification delays by ensuring crisp, readable uploads matching your profile name.",
      paragraphs: [
        "Over 90% of verification delays happen simply because an uploaded photo is blurry, cropped off at the registration number, or uses a nickname instead of the legal name printed on the scorecard. Before opening /mentor/onboarding, keep two clean files ready on your laptop or phone: (1) Front/back image or PDF of your valid College ID Card showing your full name, roll number, and institute seal; (2) Your official NTA JEE Main, JEE Advanced, or NEET-UG Scorecard displaying your Application Number, Name, and Rank/Score.",
        "You can optionally include a brief 60-second unlisted YouTube introduction link during Step 2—not mandatory for approval, yet verified profiles with a short intro video get up to 2x higher discovery bookings once live.",
      ],
    },
  ],
  tableTitle: "Mentskool Verification Requirements at a Glance",
  tableSubtitle: "Quick checklist before submitting your mentor application:",
  tableHeaders: ["Requirement Category", "JEE Track Standard", "NEET Track Standard"],
  tableRows: [
    {
      col1: "Target Colleges",
      col2: "IITs, NITs, IIITs, BITS, DTU, NSUT & top GFTIs",
      col3: "AIIMS, JIPMER, Govt Medical Colleges & top MBBS institutes",
      highlight: true,
    },
    {
      col1: "Primary Proof 1",
      col2: "Active College ID Card (or JoSAA Allotment + Fee Receipt)",
      col3: "Active Medical College ID (or MCC/State Allotment + Receipt)",
    },
    {
      col1: "Primary Proof 2",
      col2: "Official JEE Main / JEE Advanced Rank Card",
      col3: "Official NTA NEET-UG Scorecard",
    },
    {
      col1: "Payout & Tax Readiness",
      col2: "Active Personal UPI ID / Bank Account",
      col3: "Active Personal UPI ID / Bank Account",
      highlight: true,
    },
    {
      col1: "Review Turnaround Time",
      col2: "24 – 48 Hours",
      col3: "24 – 48 Hours",
    },
  ],
  playbookTitle: "Complete Verification Smoothly in 6 Steps",
  playbookSubtitle: "Pass verification on the first try:",
  playbookSteps: [
    {
      step: "Step 1",
      title: "Match Legal Name on Signup",
      description: "Register at /signup?role=MENTOR using the exact full name printed on your college ID and NTA scorecard.",
    },
    {
      step: "Step 2",
      title: "Enter Accurate Exam Metrics",
      description: "Input truthful college, branch, batch year, and rank numbers inside Onboarding Step 1.",
    },
    {
      step: "Step 3",
      title: "Upload Uncropped Proofs",
      description: "Ensure roll number, photograph, college seal, and NTA application number are legible in Step 2.",
    },
    {
      step: "Step 4",
      title: "Set Pricing, Seat Cap & UPI",
      description: "Configure monthly student fee, active seat cap (up to 30 max), and personal UPI ID in Step 3.",
    },
    {
      step: "Step 5",
      title: "Accept Mentor Code of Conduct",
      description: "Confirm declaration in Step 4 committing to genuine weekly accountability and honest student guidance.",
    },
    {
      step: "Step 6",
      title: "Get Verified & Go Live",
      description: "Receive confirmation once our team verifies proofs and immediately appear on /mentors.",
    },
  ],
  faqs: [
    {
      question: "Are my ID card and scorecard shown publicly to students?",
      answer:
        "No! Your raw private documents are securely stored for internal human verification only. Publicly, students see your Verified Ranker shield, institute, branch, and verified rank tier.",
    },
    {
      question: "What if I lost my original NTA scorecard PDF?",
      answer:
        "DigiLocker often preserves NTA JEE/NEET scorecards, or your official college admission/rank verification document alongside your valid institute ID can be reviewed upon submission.",
    },
    {
      question: "Can alumni who already graduated still apply?",
      answer:
        "Yes, if you hold your degree/convocation proof plus verifiable JEE/NEET rank documentation and have active weekly time to guide cohorts.",
    },
    {
      question: "How long does manual review take?",
      answer:
        "Most complete applications are reviewed within 24 to 48 hours.",
    },
    {
      question: "What happens if an uploaded image was too blurry?",
      answer:
        "Our review team flags re-upload feedback so you can quickly upload a clearer scan and complete verification without restarting.",
    },
  ],
  relatedLinks: [
    { label: "Mentskool Mentor Program Payouts", href: "/mentskool-mentor-program-benefits-and-payouts" },
    { label: "Become a JEE Mentor & Earn Money", href: "/become-a-jee-mentor-earn-money" },
    { label: "Become a NEET Mentor & Earn Money", href: "/become-a-neet-mentor-earn-money" },
    { label: "1st Year Freshers Pocket Money Guide", href: "/freshers-1st-year-iit-mbbs-earn-pocket-money" },
    { label: "Best Platform to Become Online JEE Mentor", href: "/best-platform-to-become-online-jee-mentor" },
    { label: "Best Platform for MBBS Students", href: "/best-platform-for-mbbs-students-to-teach-neet" },
  ],
  articleHeadline: "Mentskool Mentor Eligibility & Verification Guide",
  articleDescription: "Exact rank criteria, accepted college ID documents, and 24–48 hour verification steps to become a mentor on Mentskool.",
};

export default function MentskoolMentorEligibilityPage() {
  return <MentorProgramGuideTemplate config={config} />;
}
