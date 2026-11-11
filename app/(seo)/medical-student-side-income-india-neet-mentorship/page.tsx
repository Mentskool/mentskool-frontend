import React from "react";
import type { Metadata } from "next";
import {
  MentorProgramGuideTemplate,
  MentorGuidePageConfig,
} from "@/components/seo/MentorProgramGuideTemplate";

export const metadata: Metadata = {
  title: "Medical Student Side Income India: Cover Hostel & Book Fees via NEET Mentorship | Mentskool",
  description:
    "How 1st, 2nd & 3rd year MBBS students cover hostel mess, textbooks, iPads, and PG subscriptions by mentoring NEET aspirants 1-on-1 flexibly on Mentskool.",
  keywords: [
    "medical student side income India",
    "how MBBS students pay hostel fees",
    "pocket money for MBBS students",
    "side hustle for medical college students",
    "NEET mentorship income for MBBS",
  ],
  alternates: {
    canonical: "https://mentskool.com/medical-student-side-income-india-neet-mentorship",
  },
  openGraph: {
    title: "Medical Student Side Income India: Cover Expenses With NEET Mentorship",
    description:
      "Turn 3–5 spare evening/Sunday hours into ₹15,000–₹35,000/month while keeping full focus on MBBS wards and proffs.",
    url: "https://mentskool.com/medical-student-side-income-india-neet-mentorship",
    siteName: "Mentskool",
    images: [{ url: "https://mentskool.com/logo.png", width: 1200, height: 630, alt: "Medical Student Side Income India" }],
  },
};

const config: MentorGuidePageConfig = {
  slug: "medical-student-side-income-india-neet-mentorship",
  breadcrumbLabel: "Medical Student Side Income",
  audience: "NEET",
  badgeText: "MBBS Hostel & Textbook Funding Guide",
  h1Prefix: "How Medical Students Cover Hostel Fees via",
  h1Highlight: "Flexible NEET Mentorship Income",
  heroDescription:
    "Between pricey Anatomy atlases, hostel mess charges, stethoscopes, and ₹40,000 PG prep apps, medical school gets expensive fast—while clinical stipends do not start until Internship Year. See how MBBS undergrads build dignified, proff-safe side income on Mentskool.",
  summaryHeading: "Executive Overview: Financial Breathing Room During 5.5 Years of MBBS",
  summaryIntro:
    "For most Indian medical students, asking parents for another ₹15,000 every few months for textbooks, conference registrations, or Marrow plans weighs heavily. Mentoring a small cohort of 10–18 NEET aspirants on Mentskool generates ₹12,000–₹28,000 every single month without conflicting with hospital attendance.",
  summaryPoints: [
    {
      title: "Fund PG Subscriptions & Gadgets Yourself",
      detail: "Four months of a 12-student Mentskool cohort completely pays for a medical study iPad or a full NEET-PG prep subscription.",
    },
    {
      title: "Respectful Academic Alignment",
      detail: "Unlike random odd jobs, mentoring future doctors reinforces your discipline and looks natural on any CV.",
    },
    {
      title: "Built-In Asynchronous Workflow",
      detail: "Students log daily PCB targets in Mentskool so you never waste posting breaks replying to messy WhatsApp spam.",
    },
    {
      title: "Complete Schedule Control",
      detail: "Run weekly 1:1 sessions solely during quiet evening slots or Sundays, and cap seats tightly before Proff months.",
    },
  ],
  sections: [
    {
      heading: "The Real Cost of Studying MBBS—And Why Traditional Part-Time Jobs Fail Medicos",
      subheading: "Why hospital hours and NMC attendance rules rule out standard college jobs.",
      paragraphs: [
        "Even at subsidized Government Medical Colleges where tuition is affordable, out-of-pocket expenses add up steadily across 4.5 years: Vishram Singh / BD Chaurasia / Robbins / Harrison editions, Littmann stethoscopes, monthly mess bills, dissection kits, fest fees, and heavy final-year NEET-PG test-series subscriptions. Meanwhile, NMC enforces strict 75% theory and 80% clinical posting attendance rules, making standard part-time office jobs or 20-hour remote internships impossible.",
        "Offline home tutoring in unfamiliar medical college towns requires risky evening travel outside campus, eating 90 minutes per trip just in commute. Online MCQ typing gigs pay pennies and hurt your eyes after staring at histology slides all afternoon.",
        "Verified 1:1 NEET strategy mentorship on Mentskool respects every constraint of a medico's calendar. You sit inside your hostel room after dinner or on Sunday afternoon, connect with 10 to 20 motivated NEET aspirants across India via structured dashboard audits + short Google Meet calls, and earn ₹12,000 to ₹35,000/month reliably.",
      ],
      bullets: [
        {
          title: "Zero Clinical Attendance Risk",
          detail: "Schedule all 1:1 calls exclusively after 6 PM or on Sundays so morning OPDs and afternoon dissections stay 100% protected.",
        },
        {
          title: "Zero Textbook Prep Burden",
          detail: "You guide strategy, NCERT line recall, physics calculation shortcuts, and error-log reviews—using your lived NEET journey directly.",
        },
      ],
    },
    {
      heading: "How 1st, 2nd & Final-Year MBBS Students Tailor Their Cohort Size",
      subheading: "Scale your seats up or down seamlessly across different years of medical college.",
      paragraphs: [
        "Your ideal cohort capacity naturally evolves across MBBS. During 1st year (when NEET-UG Biology & Chemistry are razor-fresh in your head), mentors easily manage 15–20 students in 4–5 hours per week while adjusting to Anatomy and Physiology. During heavy 2nd-year or Final-year clinical rotations, dialing your active cap to 8–12 seats cuts weekly mentoring time down to roughly 2.5 hours—still delivering ₹12,000–₹18,000 every single month without stress.",
        "Because Mentskool uses atomic seat locking, the dashboard automatically prevents extra enrollments whenever you hit your chosen limit—ensuring you never get overwhelmed before University Proffs.",
      ],
      bullets: [
        {
          title: "Transparent Monthly UPI Payouts",
          detail: "Settle monthly payouts cleanly to your UPI handle entered in Mentor Onboarding.",
        },
        {
          title: "Verified GMC/AIIMS Trust Badge",
          detail: "Parents feel zero hesitation paying monthly fees once Mentskool displays your verified medical college ID & NEET rank shield.",
        },
      ],
    },
    {
      heading: "Real Stories: What Aspirants Ask MBBS Mentors Every Week",
      subheading: "You already know the exact answers to every fear haunting NEET 2027 students.",
      paragraphs: [
        "NEET aspirants do not expect you to recite Krebs cycle intermediates better than their coaching teacher. They desperately ask: 'Didi/Bhaiya, my coaching mock score has been stuck at 510 for two months—what am I doing wrong?', 'How do I revise 38 Biology chapters in 5 days without forgetting Plant Physiology?', and 'Should I skip tough Rotational Physics numericals or attempt them?' Answering those exact tactical questions for 15 minutes a week changes lives—and pays well doing it.",
      ],
    },
  ],
  tableTitle: "What Monthly Mentskool Earnings Cover for an MBBS Student",
  tableSubtitle: "Practical financial milestones unlocked by mentoring just 10–20 NEET aspirants:",
  tableHeaders: ["Cohort Size (Active Mentees)", "Monthly Earnings (Approx.)", "What It Covers Independently"],
  tableRows: [
    {
      col1: "6–8 Students (~2 hrs/wk)",
      col2: "₹7,500 – ₹12,000 / month",
      col3: "100% of hostel mess bills, Wi-Fi & everyday pocket money",
    },
    {
      col1: "12–15 Students (~3.5 hrs/wk)",
      col2: "₹15,000 – ₹24,000 / month",
      col3: "Mess + standard MBBS textbooks + Littmann + PG prep savings",
      highlight: true,
    },
    {
      col1: "20–25 Students (~5.5 hrs/wk)",
      col2: "₹25,000 – ₹40,000 / month",
      col3: "Full college financial independence + iPad/laptop + travel + savings",
      highlight: true,
    },
  ],
  playbookTitle: "Start Your Medical-College-Safe Side Income in 6 Steps",
  playbookSubtitle: "Complete free onboarding in 15 minutes between classes or on Sunday:",
  playbookSteps: [
    {
      step: "Step 1",
      title: "Register Under Mentor Role",
      description: "Sign up at /signup?role=MENTOR with email or Google.",
    },
    {
      step: "Step 2",
      title: "Submit Medical College & Rank",
      description: "Fill in your AIIMS/GMC name, MBBS year, and verified NEET-UG score & AIR.",
    },
    {
      step: "Step 3",
      title: "Upload Verification Proofs",
      description: "Attach clear photos of your college ID and NEET scorecard for fast verification.",
    },
    {
      step: "Step 4",
      title: "Configure Fee, Cap & UPI",
      description: "Choose monthly pricing, cap seats conservatively at first, and enter your UPI ID.",
    },
    {
      step: "Step 5",
      title: "Block Post-Ward Call Hours",
      description: "Limit 1:1 availability strictly to evening or Sunday hours that suit your hostel.",
    },
    {
      step: "Step 6",
      title: "Mentor & Grow Independently",
      description: "Assign crisp weekly PCB checklists, host brief strategy calls, and earn monthly.",
    },
  ],
  faqs: [
    {
      question: "Can 1st-year MBBS students apply before receiving their permanent college ID?",
      answer:
        "Yes! Provisional college allotment letters, fee receipts with your name, or temporary medical college IDs alongside your official NTA NEET scorecard can be uploaded for verification.",
    },
    {
      question: "How much time per week is needed to earn ₹15,000/month?",
      answer:
        "Managing 10 to 12 aspirants at ₹1,300–₹1,500/month requires roughly 3 to 3.5 hours per week total using Mentskool's task dashboard + 15-minute 1:1 reviews.",
    },
    {
      question: "What happens if hospital ward duties run late one evening?",
      answer:
        "You manage your own Google Meet scheduling windows inside /mentor/sessions and can smoothly adjust a slot without any automated salary penalty.",
    },
    {
      question: "Do I need to teach full Chemistry or Physics concepts from scratch?",
      answer:
        "No—Mentskool mentors guide planning, NCERT memorization strategies, error-notebook structuring, and exam temperament.",
    },
    {
      question: "Is there any fee to join Mentskool as an MBBS mentor?",
      answer:
        "Zero registration fee and zero subscription fee.",
    },
    {
      question: "Can interns or post-intern doctors preparing for NEET-PG also mentor?",
      answer:
        "Yes! Interns and recent MBBS graduates preparing for NEET-PG frequently run focused 10–15 student cohorts on Mentskool to fund living expenses cleanly while studying.",
    },
  ],
  relatedLinks: [
    { label: "Become a NEET Mentor & Earn Money", href: "/become-a-neet-mentor-earn-money" },
    { label: "Online Earning for MBBS Students India", href: "/online-earning-for-mbbs-students-india" },
    { label: "Best Platform for MBBS Students to Teach NEET", href: "/best-platform-for-mbbs-students-to-teach-neet" },
    { label: "NEET Topper Earning Guide", href: "/neet-topper-earn-money-guiding-students" },
    { label: "1st Year IIT/MBBS Pocket Money Guide", href: "/freshers-1st-year-iit-mbbs-earn-pocket-money" },
    { label: "Mentskool Mentor Program Benefits", href: "/mentskool-mentor-program-benefits-and-payouts" },
  ],
  articleHeadline: "Medical Student Side Income India: Cover Expenses via NEET Mentorship",
  articleDescription: "Practical guide for Indian MBBS students on building ₹15,000–₹35,000/month proff-safe side income via Mentskool NEET mentorship.",
};

export default function MedicalStudentSideIncomePage() {
  return <MentorProgramGuideTemplate config={config} />;
}
