import React from "react";
import type { Metadata } from "next";
import {
  BookCallPageTemplate,
  BookCallPageConfig,
} from "@/components/seo/BookCallPageTemplate";

export const metadata: Metadata = {
  title: "Book 1:1 Parent Consultation Call for JEE & NEET | Mentskool",
  description: "Unbiased guidance for parents of JEE & NEET aspirants. Talk directly to IITian and AIIMS mentors to evaluate preparation reality, coaching ROI, and college cutoffs.",
  keywords: ["parents consultation call jee neet", "talk to iitian mentor parent guidance", "jee neet parent counseling session", "medical engineering parent guidance online", "unbiased coaching evaluation for parents"],
  alternates: {
    canonical: "https://mentskool.com/parents-consultation-call-jee-neet",
  },
  openGraph: {
    title: "Book 1:1 Parent Consultation Call for JEE & NEET | Mentskool",
    description: "Unbiased guidance for parents of JEE & NEET aspirants. Talk directly to IITian and AIIMS mentors to evaluate preparation reality, coaching ROI, and college cutoffs.",
    url: "https://mentskool.com/parents-consultation-call-jee-neet",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "1:1 Parent Strategic Consultation for JEE & NEET Preparation",
      },
    ],
  },
};

const config: BookCallPageConfig = {
  "slug": "parents-consultation-call-jee-neet",
  "breadcrumbLabel": "Parents Consultation Call",
  "examFocus": "BOTH",
  "metaTitle": "Book 1:1 Parent Consultation Call for JEE & NEET | Mentskool",
  "metaDescription": "Unbiased guidance for parents of JEE & NEET aspirants. Talk directly to IITian and AIIMS mentors to evaluate preparation reality, coaching ROI, and college cutoffs.",
  "keywords": [
    "parents consultation call jee neet",
    "talk to iitian mentor parent guidance",
    "jee neet parent counseling session",
    "medical engineering parent guidance online",
    "unbiased coaching evaluation for parents"
  ],
  "badgeText": "Dedicated Parent Consultation",
  "h1Prefix": "Book a 1:1 Consultation Call for",
  "h1Highlight": "Parents of JEE & NEET Aspirants",
  "heroDescription": "Cut through coaching marketing hype and get an honest, objective evaluation of your child's preparation. Speak 1-on-1 with verified IITians and AIIMS doctors about realistic rank projections, coaching efficacy, and emotional well-being.",
  "serviceTitle": "1:1 Parent Strategic Consultation for JEE & NEET Preparation",
  "serviceDescription": "45-minute private consultation for parents with verified IITians and AIIMS doctors covering unbiased score evaluation, coaching institute ROI, mental health support, and realistic college cutoffs.",
  "quickStats": [
    {
      "label": "Audience",
      "value": "Parents Only",
      "hint": "Or Parents + Aspirant"
    },
    {
      "label": "Advisors",
      "value": "IIT / AIIMS",
      "hint": "Verified Top Rankers"
    },
    {
      "label": "Format",
      "value": "100% Private",
      "hint": "Confidential Video Meeting"
    },
    {
      "label": "Duration",
      "value": "45 Mins",
      "hint": "Objective Diagnostic"
    }
  ],
  "overviewHeading": "Why Parents Need Independent, Non-Commercial Mentorship Guidance",
  "overviewIntro": "Parents invest lakhs of rupees in coaching institutes and hostel fees, yet receive zero honest feedback on their child's true progress. Coaching centers often use batch reshuffling tests to create artificial panic, pushing parents to buy expensive crash courses or additional test series. Speaking to an IITian or AIIMS doctor gives parents a clear, unbiased evaluation of their child's academic standing.",
  "overviewPoints": [
    {
      "title": "Unbiased Scorecard Interpretation",
      "detail": "Understand what mock test percentiles actually mean for final JoSAA or MCC medical counseling cutoffs."
    },
    {
      "title": "Coaching Institute ROI Audit",
      "detail": "Evaluate whether your child's current coaching institute is providing value or causing unnecessary cognitive exhaustion."
    },
    {
      "title": "Home Environment & Stress Mitigation",
      "detail": "Learn how to provide supportive encouragement at home without accidentally increasing test anxiety."
    },
    {
      "title": "Realistic Backup Planning",
      "detail": "Explore high-quality government and private alternatives (BITS, NITs, State GMCs, IIITs) to safeguard your child's future."
    }
  ],
  "timelinePhases": [
    {
      "timeframe": "00 \u2013 10 Min",
      "phaseTitle": "Parent Concerns & Background",
      "description": "Discuss your primary worries: dropping scores, student withdrawal, excessive screen time, or coaching communication gaps.",
      "deliverables": [
        "Identification of core family stressors",
        "Current investment & setup audit",
        "Aspirant emotional profile"
      ]
    },
    {
      "timeframe": "10 \u2013 25 Min",
      "phaseTitle": "Academic Reality & Score Analysis",
      "description": "The IIT/AIIMS mentor reviews recent mock test reports and explains realistic rank and college admission percentiles.",
      "deliverables": [
        "Raw marks vs percentile explanation",
        "Realistic college bracket projection",
        "Subject-wise vulnerability map"
      ]
    },
    {
      "timeframe": "25 \u2013 38 Min",
      "phaseTitle": "Coaching & Daily Routine Review",
      "description": "Audit the student's daily timetable, sleep duration, coaching commute burden, and self-study hours.",
      "deliverables": [
        "Commute vs energy optimization",
        "Sleep hygiene recommendations",
        "Distraction management framework"
      ]
    },
    {
      "timeframe": "38 \u2013 45 Min",
      "phaseTitle": "Family Action Plan & Q&A",
      "description": "Deliver actionable steps for parents to support their child over the next 90 days, followed by open Q&A.",
      "deliverables": [
        "Parent support action checklist",
        "Emergency check-in protocol",
        "Written consultation summary"
      ]
    }
  ],
  "comparisonTitle": "Coaching Center Parent-Teacher Meeting vs. Mentskool 1:1 Consultation",
  "comparisonSubtitle": "Why a private session with an IITian or AIIMS doctor provides the honest answers coaching centers hide.",
  "comparisonRows": [
    {
      "aspect": "Primary Motivation",
      "genericCoaching": "Retain admissions, upsell crash courses, and defend faculty performance.",
      "mentskool1on1": "100% objective, student-centric guidance with zero financial ties to coaching centers."
    },
    {
      "aspect": "Time Dedicated",
      "genericCoaching": "Rushed 3-minute conversation in a crowded coaching hallway.",
      "mentskool1on1": "45 minutes of private, undivided attention to answer all your family's questions."
    },
    {
      "aspect": "Score Assessment",
      "genericCoaching": "Uses low scores to intimidate parents into paying for extra batches.",
      "mentskool1on1": "Clinically breaks down errors into solvable tactical issues, restoring family calm."
    },
    {
      "aspect": "Mental Health",
      "genericCoaching": "Blames the child for 'lack of concentration' or 'using mobile phones.'",
      "mentskool1on1": "Understands the immense psychological burden of modern competitive exams."
    },
    {
      "aspect": "College Realities",
      "genericCoaching": "Overpromises top IIT/AIIMS ranks to everyone, creating false hopes.",
      "mentskool1on1": "Provides realistic, data-backed cutoff projections and sensible backup pathways."
    }
  ],
  "sections": [
    {
      "heading": "Understanding What Mock Test Scores Actually Mean",
      "subheading": "Understanding Raw Marks, Percentiles, and Shift Normalization",
      "paragraphs": [
        "Many parents see their child score 130 out of 300 in a JEE Main mock test and assume the child is failing because school exams require 90%+. In JEE Main, however, a score of 130 in a tough shift can easily translate to 96+ percentile, securing an NIT seat. Similarly, in NEET UG, a score of 560 might be near-miss territory in Rajasthan or Delhi, but comfortably secure a government medical seat in other states.",
        "Your mentor walks you through the mathematics of competitive scoring. You will learn how to evaluate your child's performance relative to the difficulty of the test paper, understand state quota cutoffs, and celebrate meaningful progress rather than judging raw percentages."
      ],
      "keyTakeaways": [
        {
          "title": "Percentile Over Percentage",
          "detail": "Never evaluate competitive exam marks using school percentage standards; percentile is the only metric that matters."
        },
        {
          "title": "Shift Difficulty Variation",
          "detail": "A score of 140 in a tough JEE paper often beats a score of 180 in an easy shift."
        },
        {
          "title": "State Quota Advantages",
          "detail": "Understand how home state quota rules significantly lower the cutoffs for premier NITs and GMCs."
        }
      ]
    },
    {
      "heading": "Creating a Stress-Free Home Environment",
      "subheading": "How Parents Can Reduce Test Anxiety and Prevent Teen Burnout",
      "paragraphs": [
        "Aspirants frequently tell our mentors: 'My parents want me to succeed so much that every time they ask about my test marks, I feel sick with anxiety.' Well-meaning questions like 'How much did Sharma ji's son score?' or 'Did you study for 12 hours today?' can inadvertently create crushing emotional pressure.",
        "Our IIT and AIIMS mentors share what truly helped them from their own parents during preparation. You will learn the 'Zero-Marks Discussion Rule' after test days, how to provide silent logistical support (healthy nutrition, quiet study space), and how to become a safe haven where your child feels valued regardless of their exam results."
      ],
      "keyTakeaways": [
        {
          "title": "The Post-Exam Decompression Rule",
          "detail": "Never ask about test marks on Sunday evening; allow your child 24 hours to decompress before reviewing results."
        },
        {
          "title": "Zero Peer Comparison",
          "detail": "Strictly eliminate comparisons with classmates, cousins, or topper interviews on YouTube."
        },
        {
          "title": "Unconditional Emotional Safety",
          "detail": "Remind your child regularly that your love and respect are completely independent of their exam rank."
        }
      ]
    },
    {
      "heading": "Navigating the Backup Plan: Beyond IIT & AIIMS",
      "subheading": "Ensuring a Successful Professional Career Regardless of Exam Day Luck",
      "paragraphs": [
        "With over 14 lakh candidates writing JEE and 24 lakh candidates writing NEET, luck on exam day (exam shift difficulty, unexpected fever, tough server glitches) plays a real role. Wise parents always maintain a portfolio of dignified, high-ROI backup pathways.",
        "Your mentor provides a comprehensive overview of alternative institutions: BITS Pilani, top NITs, IIITs, state government engineering colleges, state government medical colleges, and allied health fields (BDS, BVSc, Pharmacy). Having these backups mapped out removes the existential dread that paralyzes students during final exams."
      ],
      "keyTakeaways": [
        {
          "title": "The BITS & IIIT Alternative",
          "detail": "BITS Pilani and top IIITs offer campus placements and peer networks that rival top IITs."
        },
        {
          "title": "State Medical Quotas",
          "detail": "Research 85% State Quota cutoffs in your home state, which are typically 30-50 marks lower than AIQ."
        },
        {
          "title": "Dignified Career Perspectives",
          "detail": "Success in medicine and engineering depends on lifelong competence, not just a single Sunday exam rank."
        }
      ]
    }
  ],
  "bookingSteps": [
    {
      "step": "01",
      "title": "Select IIT / AIIMS Mentor",
      "description": "Choose a mentor specialized in parent counseling and admissions cutoff realities."
    },
    {
      "step": "02",
      "title": "Share Family Concerns",
      "description": "Tell us your child's current class, coaching center, and primary parental concerns."
    },
    {
      "step": "03",
      "title": "45-Min Private Video Call",
      "description": "Engage in an open, highly informative consultation (child can join or remain optional)."
    },
    {
      "step": "04",
      "title": "Receive Family Blueprint",
      "description": "Get a written roadmap covering realistic score targets, routine changes, and backup options."
    }
  ],
  "faqs": [
    {
      "question": "Can parents attend this call without the student present?",
      "answer": "Yes, many parents prefer to take the first call privately to discuss sensitive concerns about student motivation, mental health, and family finances before involving the student."
    },
    {
      "question": "Can both mother and father join the video session?",
      "answer": "Yes! Both parents are warmly welcomed to join from the same computer or separate devices."
    },
    {
      "question": "Will the mentor evaluate our child's coaching institute honestly?",
      "answer": "Yes. Our mentors have no commercial relationships with coaching centers and will provide an honest assessment of whether the coaching is helping or exhausting your child."
    },
    {
      "question": "Does this call cover engineering or medical admissions?",
      "answer": "We have dedicated parent consultants for both JEE (IIT/NIT/BITS) and NEET (AIIMS/State GMCs/Private). You can select your preferred exam focus during booking."
    },
    {
      "question": "Can we book a follow-up call after major exam results are released?",
      "answer": "Yes! Many parents return for counseling guidance during JoSAA (engineering) or MCC/State (medical) seat allocation rounds."
    }
  ],
  "relatedLinks": [
    {
      "label": "Book 1:1 JEE Mentorship Session",
      "href": "/book-1-on-1-jee-mentorship-session"
    },
    {
      "label": "Book 1:1 NEET Mentorship Session",
      "href": "/book-1-on-1-neet-mentorship-session"
    },
    {
      "label": "Drop Year Strategy Call",
      "href": "/drop-year-strategy-call-jee-neet"
    },
    {
      "label": "Online JEE Consultation",
      "href": "/online-1-on-1-consultation-jee-aspirants"
    },
    {
      "label": "Online NEET Consultation",
      "href": "/online-1-on-1-consultation-neet-aspirants"
    },
    {
      "label": "Free Mentorship Strategy Session",
      "href": "/free-mentorship-session"
    }
  ]
};

export default function Page() {
  return <BookCallPageTemplate config={config} />;
}
