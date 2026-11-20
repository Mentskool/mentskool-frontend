import React from "react";
import type { Metadata } from "next";
import {
  BookCallPageTemplate,
  BookCallPageConfig,
} from "@/components/seo/BookCallPageTemplate";

export const metadata: Metadata = {
  title: "Online 1-on-1 Video Consultation for JEE Aspirants | Mentskool",
  description: "Get comprehensive 1-on-1 virtual guidance for JEE 2027/2028. Audit coaching institutes, study materials, and daily routines with verified IITian rankers.",
  keywords: ["online 1 on 1 consultation jee aspirants", "jee video consultation with rankers", "virtual 1 to 1 meeting jee mentors", "iit jee online counseling session", "private jee prep consultation"],
  alternates: {
    canonical: "https://mentskool.com/online-1-on-1-consultation-jee-aspirants",
  },
  openGraph: {
    title: "Online 1-on-1 Video Consultation for JEE Aspirants | Mentskool",
    description: "Get comprehensive 1-on-1 virtual guidance for JEE 2027/2028. Audit coaching institutes, study materials, and daily routines with verified IITian rankers.",
    url: "https://mentskool.com/online-1-on-1-consultation-jee-aspirants",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Online 1-on-1 Comprehensive JEE Preparation Consultation",
      },
    ],
  },
};

const config: BookCallPageConfig = {
  "slug": "online-1-on-1-consultation-jee-aspirants",
  "breadcrumbLabel": "Online 1:1 Consultation for JEE",
  "examFocus": "JEE",
  "metaTitle": "Online 1-on-1 Video Consultation for JEE Aspirants | Mentskool",
  "metaDescription": "Get comprehensive 1-on-1 virtual guidance for JEE 2027/2028. Audit coaching institutes, study materials, and daily routines with verified IITian rankers.",
  "keywords": [
    "online 1 on 1 consultation jee aspirants",
    "jee video consultation with rankers",
    "virtual 1 to 1 meeting jee mentors",
    "iit jee online counseling session",
    "private jee prep consultation"
  ],
  "badgeText": "Comprehensive Virtual Consultation",
  "h1Prefix": "Online 1-on-1 Video Consultation for",
  "h1Highlight": "JEE 2027 & 2028 Aspirants",
  "heroDescription": "Starting your JEE journey or evaluating whether your current preparation is on track? Book a private 45-minute virtual consultation with an IITian ranker to audit coaching choices, books, school balance, and milestones.",
  "serviceTitle": "Online 1-on-1 Comprehensive JEE Preparation Consultation",
  "serviceDescription": "45-minute virtual video consultation with verified IITians covering coaching institute evaluation, book selection, dummy school balance, and multi-year roadmaps.",
  "quickStats": [
    {
      "label": "Target Batches",
      "value": "2027 / 2028",
      "hint": "Class 11, 12 & Droppers"
    },
    {
      "label": "Format",
      "value": "1:1 Video",
      "hint": "Student & Parents"
    },
    {
      "label": "Mentor",
      "value": "Top IITian",
      "hint": "Verified AIR < 1000"
    },
    {
      "label": "Duration",
      "value": "45 Mins",
      "hint": "Holistic Strategy Audit"
    }
  ],
  "overviewHeading": "Building a Bulletproof Foundation for JEE Main & Advanced",
  "overviewIntro": "The first 6 months of JEE preparation often decide whether an aspirant cracks the top 1000 or ends up struggling to qualify. Misleading coaching marketing, hoarding unnecessary foreign author textbooks, and poor school attendance management ruin thousands of promising careers. An online 1:1 consultation provides transparent, battle-tested direction before costly mistakes occur.",
  "overviewPoints": [
    {
      "title": "Coaching Institute & Batch Audit",
      "detail": "Unbiased evaluation of whether your offline or online coaching (Allen, FIITJEE, PW, Unacademy) is serving your learning style."
    },
    {
      "title": "School vs. Dummy School Evaluation",
      "detail": "Assess the pros and cons of dummy schools versus regular schooling based on board exam rigor and mental maturity."
    },
    {
      "title": "Definitive Textbook Selection",
      "detail": "Receive an IITian-approved core reading list: exactly which books to buy and which 15 popular titles to avoid."
    },
    {
      "title": "2-Year Milestone Roadmap",
      "detail": "Map out precise monthly syllabus checkpoints from Class 11 foundations to Class 12 revision and test series."
    }
  ],
  "timelinePhases": [
    {
      "timeframe": "00 \u2013 10 Min",
      "phaseTitle": "Aspirant Diagnostic & Goals",
      "description": "Review current grade, school system, coaching setup, and target engineering colleges/branches.",
      "deliverables": [
        "Target rank feasibility audit",
        "Study environment assessment",
        "Weekly hours baseline"
      ]
    },
    {
      "timeframe": "10 \u2013 25 Min",
      "phaseTitle": "Resource & Coaching Optimization",
      "description": "Audit current coaching notes, test series, and reference books; eliminate clutter and redundant materials.",
      "deliverables": [
        "Curated textbook list",
        "Coaching lecture utilization guidelines",
        "Digital vs. physical material split"
      ]
    },
    {
      "timeframe": "25 \u2013 38 Min",
      "phaseTitle": "Daily Routine & Timetable Engineering",
      "description": "Construct an hour-by-hour weekly timetable balancing school attendance, coaching, and active self-study.",
      "deliverables": [
        "Personalized study calendar",
        "Daily numerical targets",
        "Revision cycle schedule"
      ]
    },
    {
      "timeframe": "38 \u2013 45 Min",
      "phaseTitle": "Long-Term Roadmap & Parent Q&A",
      "description": "Synthesize a 6-month milestone roadmap and address parental questions regarding competition and well-being.",
      "deliverables": [
        "6-month milestone blueprint",
        "Parent support checklist",
        "Direct mentor link for follow-up"
      ]
    }
  ],
  "comparisonTitle": "Coaching Center Orientation vs. Mentskool 1:1 Consultation",
  "comparisonSubtitle": "Why an objective 1:1 session with an IITian saves years of confusion compared to coaching seminars.",
  "comparisonRows": [
    {
      "aspect": "Commercial Bias",
      "genericCoaching": "Designed to upsell expensive coaching packages and study materials.",
      "mentskool1on1": "Zero commercial interest in coaching packages; 100% focused on student outcome."
    },
    {
      "aspect": "Personal Attention",
      "genericCoaching": "Mass auditorium orientation with 300 parents and students.",
      "mentskool1on1": "Private 1-on-1 video call customized to your exact academic profile."
    },
    {
      "aspect": "Resource Advice",
      "genericCoaching": "Mandates buying proprietary bulky modules with no external perspective.",
      "mentskool1on1": "Honest appraisal of what works: recommends the best books across publishers."
    },
    {
      "aspect": "School Balance",
      "genericCoaching": "Ignores school board requirements, leading to 12th board panic.",
      "mentskool1on1": "Integrates CBSE/State Board preparation directly into your weekly JEE routine."
    },
    {
      "aspect": "Follow-Up Support",
      "genericCoaching": "Counselors disappear once enrollment fees are processed.",
      "mentskool1on1": "Clear ongoing mentorship pathways and follow-up consultation options."
    }
  ],
  "sections": [
    {
      "heading": "The Dummy School vs. Regular School Dilemma",
      "subheading": "How to Make the Right Choice for Your Mental Maturity and Rank",
      "paragraphs": [
        "One of the biggest dilemmas facing Class 10 graduates is whether to opt for a dummy (non-attending) school or continue in a regular school while preparing for JEE. While dummy schools offer 6 additional hours of self-study every day, they can also lead to severe social isolation, lack of daily structure, and devastating procrastination if not managed with military discipline.",
        "Your IITian mentor helps you evaluate this decision objectively. Based on your personal self-discipline, local coaching options, and parental involvement, your mentor outlines whether a dummy school will accelerate your rank or create unmanageable emotional isolation, providing practical mitigation strategies for both paths."
      ],
      "keyTakeaways": [
        {
          "title": "Self-Discipline Assessment",
          "detail": "Dummy schools require exceptional internal motivation; without structure, students waste 40% of their extra hours."
        },
        {
          "title": "Regular School Pacing",
          "detail": "If in regular school, use free periods and commuting hours for micro-problem solving and formula revision."
        },
        {
          "title": "Board Exam Safety Buffer",
          "detail": "Ensure you maintain 75%+ eligibility in Class 12 boards to prevent disqualification from JoSAA counseling."
        }
      ]
    },
    {
      "heading": "Building the 2-Year Milestone Roadmap",
      "subheading": "How Top Rankers Pace Syllabus Coverage from Class 11 to Advanced",
      "paragraphs": [
        "A common mistake among early JEE aspirants is sprinting in May of Class 11\u2014studying 14 hours a day for 4 weeks\u2014only to completely burn out by September when Mechanics and Ionic Equilibrium arrive. JEE is an endurance ultramarathon, not a 100-meter sprint.",
        "Your mentor designs a sustainable 24-month roadmap: Class 11 syllabus completed by January; Class 11 revision completed by March; Class 12 syllabus completed by October; leaving 3 uninterrupted months for JEE Main Phase-1 test series and full-length syllabus consolidation. Having this long-term perspective prevents mid-year panic."
      ],
      "keyTakeaways": [
        {
          "title": "Sustainable Pacing Standard",
          "detail": "Maintain a steady 5-6 hours of daily self-study consistently rather than irregular 14-hour spikes."
        },
        {
          "title": "October Syllabus Cutoff",
          "detail": "Target completing the entire Class 12 syllabus by late October to allow 90 days for full mock testing."
        },
        {
          "title": "Quarterly Revision Windows",
          "detail": "Schedule 10-day revision breaks every 3 months to consolidate older chapters before they fade."
        }
      ]
    },
    {
      "heading": "The Golden Rule of Resource Pruning",
      "subheading": "Why Solving One Book 3 Times Beats Solving 3 Books Once",
      "paragraphs": [
        "Walk into any JEE aspirant's bedroom and you will find shelves stacked with dozens of prestigious books: Irodov, Krotov, Cengage, HC Verma, MS Chouhan, JD Lee, Morrison Boyd, and SL Loney. Yet, solving 5 problems from 10 different books creates superficial familiarity without mastery.",
        "Your IITian mentor helps you prune your resources down to a golden core: one comprehensive theory module, one trusted numerical problem collection per subject, and past 10 years of official JEE Advanced PYQs. By mastering this core completely, you build deep, bulletproof problem-solving speed."
      ],
      "keyTakeaways": [
        {
          "title": "The Golden Core Rule",
          "detail": "Limit your resources to 1 theory source, 1 standard numerical book, and official PYQs per subject."
        },
        {
          "title": "Three-Pass Problem Solving",
          "detail": "Solve all starred and difficult problems three times over your 2-year preparation cycle."
        },
        {
          "title": "Zero PDF Hoarding",
          "detail": "Delete distracting Telegram channels with hundreds of unread PDFs that create cognitive overwhelm."
        }
      ]
    }
  ],
  "bookingSteps": [
    {
      "step": "01",
      "title": "Select IITian Consultant",
      "description": "Filter verified rankers from IIT Bombay, Delhi, Madras, or Kanpur based on your dream stream."
    },
    {
      "step": "02",
      "title": "Provide Aspirant Profile",
      "description": "Share your current grade (11th, 12th, or Dropper), coaching institute, and primary questions."
    },
    {
      "step": "03",
      "title": "Attend 45-Min Video Call",
      "description": "Connect in an open, private virtual consultation with your IITian mentor (parents welcome)."
    },
    {
      "step": "04",
      "title": "Receive Master Blueprint",
      "description": "Get a customized multi-month roadmap and textbook curation guide delivered directly to your inbox."
    }
  ],
  "faqs": [
    {
      "question": "Is this consultation suitable for students entering Class 11?",
      "answer": "Yes! In fact, taking this consultation at the start of Class 11 provides the greatest ROI, preventing costly mistakes in book selection, coaching batches, and daily routines before bad habits form."
    },
    {
      "question": "Can parents join the online consultation?",
      "answer": "Yes, parents are strongly encouraged to participate throughout the entire call to ask questions about coaching credibility, board balance, and mental health support."
    },
    {
      "question": "Will the mentor advise me on offline vs. online coaching?",
      "answer": "Yes, our IITian mentors have experience with both offline hubs (Kota, Delhi, Hyderabad) and online platforms, offering objective advice tailored to your learning style."
    },
    {
      "question": "What if I am already in Class 12 and feeling lost?",
      "answer": "The consultation will focus on emergency triage: auditing your syllabus coverage, selecting high-yield chapters, and preparing for JEE Main January attempt."
    },
    {
      "question": "Can I book follow-up consultations as I progress?",
      "answer": "Yes, you can schedule milestone consultations every 3-6 months or enroll in ongoing monthly cohort guidance with your mentor."
    }
  ],
  "relatedLinks": [
    {
      "label": "Book 1:1 JEE Mentorship Session",
      "href": "/book-1-on-1-jee-mentorship-session"
    },
    {
      "label": "Book Call with an IITian",
      "href": "/book-call-with-iitian-for-jee"
    },
    {
      "label": "Parent Consultation Call",
      "href": "/parents-consultation-call-jee-neet"
    },
    {
      "label": "Class 11 to 12 Transition Call",
      "href": "/class-11-to-12-transition-call-jee-neet"
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
