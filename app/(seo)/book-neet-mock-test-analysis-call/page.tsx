import React from "react";
import type { Metadata } from "next";
import {
  BookCallPageTemplate,
  BookCallPageConfig,
} from "@/components/seo/BookCallPageTemplate";

export const metadata: Metadata = {
  title: "Book 1:1 NEET Mock Test Analysis & Negative-Marking Audit | Mentskool",
  description: "Losing 60+ marks to negative marking in NEET mock tests? Book a 1-on-1 video test analysis with an AIIMS doctor to audit error patterns and master exam pacing.",
  keywords: ["book neet mock test analysis call", "neet negative marking audit 1 on 1", "neet test post mortem session", "reduce negative marks neet", "neet mock paper analysis topper"],
  alternates: {
    canonical: "https://mentskool.com/book-neet-mock-test-analysis-call",
  },
  openGraph: {
    title: "Book 1:1 NEET Mock Test Analysis & Negative-Marking Audit | Mentskool",
    description: "Losing 60+ marks to negative marking in NEET mock tests? Book a 1-on-1 video test analysis with an AIIMS doctor to audit error patterns and master exam pacing.",
    url: "https://mentskool.com/book-neet-mock-test-analysis-call",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "1:1 NEET Mock Test Post-Mortem & Error Audit Session",
      },
    ],
  },
};

const config: BookCallPageConfig = {
  "slug": "book-neet-mock-test-analysis-call",
  "breadcrumbLabel": "NEET Mock Test Analysis Call",
  "examFocus": "NEET",
  "metaTitle": "Book 1:1 NEET Mock Test Analysis & Negative-Marking Audit | Mentskool",
  "metaDescription": "Losing 60+ marks to negative marking in NEET mock tests? Book a 1-on-1 video test analysis with an AIIMS doctor to audit error patterns and master exam pacing.",
  "keywords": [
    "book neet mock test analysis call",
    "neet negative marking audit 1 on 1",
    "neet test post mortem session",
    "reduce negative marks neet",
    "neet mock paper analysis topper"
  ],
  "badgeText": "1-on-1 Test Post-Mortem",
  "h1Prefix": "Book a 1:1 NEET Mock Test Analysis &",
  "h1Highlight": "Negative-Marking Audit with AIIMS Doctors",
  "heroDescription": "Screen-share your latest Allen, Aakash, or Neetprep test paper with a verified AIIMS MBBS doctor. Audit every negative mark, eliminate careless misreadings, and calibrate your 200-minute time allocation.",
  "serviceTitle": "1:1 NEET Mock Test Post-Mortem & Error Audit Session",
  "serviceDescription": "45-minute live screen-share test paper review with AIIMS and GMC medical students focusing on negative mark elimination, NCERT line verification, and pacing calibration.",
  "quickStats": [
    {
      "label": "Target Reduction",
      "value": "-15 Negatives",
      "hint": "+75 Marks Protected"
    },
    {
      "label": "Duration",
      "value": "45 Mins",
      "hint": "Question-by-Question Audit"
    },
    {
      "label": "Mentor",
      "value": "AIIMS Doctor",
      "hint": "680+ NEET Ranker"
    },
    {
      "label": "Format",
      "value": "Screen-Share",
      "hint": "Paper & OMR Review"
    }
  ],
  "overviewHeading": "Why Negative Marking is the #1 Destroyer of NEET Dreams",
  "overviewIntro": "In NEET UG, candidates do not lose government medical seats because the paper was too hard; they lose seats because they scored -18 in Biology and -14 in Chemistry through careless guesses and misread statements. In a 1:1 mock analysis call, an AIIMS doctor audits your question-answering psychology to eliminate wild guesses permanently.",
  "overviewPoints": [
    {
      "title": "The Negative Mark Mathematical Reality",
      "detail": "Discover how converting 15 incorrect answers into unattempted questions saves 15 penalty marks, while converting 10 into correct answers yields +50 marks."
    },
    {
      "title": "Assertion-Reasoning Trap Audit",
      "detail": "Examine why statement questions trip you up and how to verify both statements independently before linking them."
    },
    {
      "title": "OMR Inking Sequence Review",
      "detail": "Ensure your bubbling method eliminates catastrophic bubble shift errors (marking question 42 into bubble 43)."
    },
    {
      "title": "The 45-45-70 Pacing Check",
      "detail": "Audit your stopwatch benchmarks to ensure you never leave Physics numericals unattempted due to time exhaustion."
    }
  ],
  "timelinePhases": [
    {
      "timeframe": "00 \u2013 10 Min",
      "phaseTitle": "Macro Score & Time Distribution Audit",
      "description": "Review your score breakdown across Botany, Zoology, Chemistry, and Physics, along with negative mark tallies.",
      "deliverables": [
        "Total negative mark penalty calculation",
        "Time spent per section",
        "Accuracy percentage baseline"
      ]
    },
    {
      "timeframe": "10 \u2013 25 Min",
      "phaseTitle": "Biology & Organic Negative Mark Autopsy",
      "description": "Review the specific NCERT lines behind every missed Biology and Organic Chemistry question.",
      "deliverables": [
        "NCERT misconception list",
        "High-frequency trap vocabulary notes",
        "Active recall corrections"
      ]
    },
    {
      "timeframe": "25 \u2013 38 Min",
      "phaseTitle": "Physics Numerical Selection Review",
      "description": "Analyze which Physics problems you should have attempted versus which lengthy traps you should have skipped.",
      "deliverables": [
        "Question classification rubric",
        "Formula substitution check",
        "Calculation simplification shortcuts"
      ]
    },
    {
      "timeframe": "38 \u2013 45 Min",
      "phaseTitle": "Customized Next-Test Protocol",
      "description": "Co-author strict rules for your next test series paper and answer student and parent questions.",
      "deliverables": [
        "Attempt ceiling target",
        "Pre-test revision checklist",
        "Written post-mortem summary"
      ]
    }
  ],
  "comparisonTitle": "Coaching Test Answer Key vs. AIIMS Doctor 1:1 Post-Mortem",
  "comparisonSubtitle": "Why personalized 1:1 test analysis prevents mistakes that classroom answer key distributions ignore.",
  "comparisonRows": [
    {
      "aspect": "Analysis Focus",
      "genericCoaching": "Shows how to solve the problem theoretically.",
      "mentskool1on1": "Investigates why YOU selected option B instead of C under time pressure."
    },
    {
      "aspect": "Negative Marks",
      "genericCoaching": "Tells you 'stop guessing' without providing an elimination rule.",
      "mentskool1on1": "Teaches a mathematical boundary framework to eliminate intuitive wild guesses."
    },
    {
      "aspect": "NCERT Alignment",
      "genericCoaching": "Often validates controversial out-of-syllabus questions.",
      "mentskool1on1": "Pins every error directly to exact NCERT page and paragraph coordinates."
    },
    {
      "aspect": "OMR Strategy",
      "genericCoaching": "Never looks at your physical bubbling habits.",
      "mentskool1on1": "Audits your bubbling batch frequency and time spent per bubble."
    },
    {
      "aspect": "Outcome",
      "genericCoaching": "You check your score and feel frustrated.",
      "mentskool1on1": "You walk away with an actionable, documented plan to add 40+ marks on your next test."
    }
  ],
  "sections": [
    {
      "heading": "The Psychology of Intuitive Guessing in NEET Biology",
      "subheading": "How False Familiarity Costs You 30 Marks on Every Test",
      "paragraphs": [
        "Because medical students read NCERT multiple times, every option in a Biology question feels vaguely familiar. Under the pressure of a ticking clock, students frequently succumb to 'recognition bias'\u2014selecting an option simply because the words sound like something they saw in the textbook, even though the context is completely wrong.",
        "In your 1:1 analysis session, an AIIMS doctor demonstrates how to neutralize recognition bias. You will learn to force your brain to identify the precise biological mechanism or anatomical rule before looking at options. By eliminating 'gut feeling' answers, your Biology accuracy jumps from 80% to 96%."
      ],
      "keyTakeaways": [
        {
          "title": "The Cover-the-Options Rule",
          "detail": "Formulate the answer mentally before looking at the 4 options to avoid getting lured by cleverly engineered traps."
        },
        {
          "title": "Qualifier Detection",
          "detail": "Pay extreme attention to absolute words like 'all', 'never', 'only', which are false in 90% of biological contexts."
        },
        {
          "title": "The Certainty Threshold",
          "detail": "Never mark a Biology option unless you can cite the exact NCERT concept supporting it."
        }
      ]
    },
    {
      "heading": "Managing the 200-Minute Pacing Clock: Section Timers",
      "subheading": "How to Allocate Your Time to Avoid Physics Numerical Panic",
      "paragraphs": [
        "A common tragedy in NEET mock tests is the student who takes 85 minutes on Biology, 55 minutes on Chemistry, and reaches Physics with only 35 minutes remaining. Faced with 45 numerical problems and barely 45 seconds per question, panic takes over, resulting in skipped questions and rushed calculation errors.",
        "Your mentor audits your section transition timestamps. You will learn to enforce hard time barriers: Biology must be completed and bubbled within 45 minutes; Chemistry within 45 minutes; leaving a full 75 minutes for Physics numericals and 35 minutes for Section B choice selection and final verification."
      ],
      "keyTakeaways": [
        {
          "title": "Hard Section Barriers",
          "detail": "If you hit 45 minutes in Biology, transition to Chemistry immediately regardless of unfinished questions."
        },
        {
          "title": "Section B 2-Minute Scan",
          "detail": "Spend 2 minutes quickly reading all 15 questions in Section B to pick the 10 easiest, highest-confidence problems."
        },
        {
          "title": "Immediate Bubbling Protocol",
          "detail": "Bubble your answers page by page rather than waiting until the end of the 3-hour examination."
        }
      ]
    },
    {
      "heading": "Setting Up an NCERT Error Register",
      "subheading": "How AIIMS Toppers Turn Mock Mistakes into Permanent Memory",
      "paragraphs": [
        "When an AIIMS topper gets an NCERT question wrong in a mock test, they do not just read the answer key. They open their physical NCERT textbook, locate the exact line, highlight it in red pen, and write the test series name and question number in the margin.",
        "During your session, your doctor mentor teaches you this annotation method. Over 6 months, your NCERT becomes a heat map of high-frequency examination traps. When you revise your textbook in the final weeks before NEET UG, these highlighted traps immediately catch your attention, preventing repeat errors on exam day."
      ],
      "keyTakeaways": [
        {
          "title": "Red-Pen NCERT Anchoring",
          "detail": "Physically mark every missed concept in your NCERT margins with the test code and error type."
        },
        {
          "title": "Weekly Error Re-testing",
          "detail": "Re-attempt all incorrect questions from the past month every Sunday afternoon."
        },
        {
          "title": "Peer Verification",
          "detail": "Review tricky assertion-reasoning traps with your mentor to ensure complete conceptual clarity."
        }
      ]
    }
  ],
  "bookingSteps": [
    {
      "step": "01",
      "title": "Select Doctor Mentor",
      "description": "Choose an AIIMS or Top GMC MBBS ranker specialized in NEET test series analysis."
    },
    {
      "step": "02",
      "title": "Submit Test PDF",
      "description": "Upload your test question paper, answer key, and OMR score breakdown before the call."
    },
    {
      "step": "03",
      "title": "45-Min Screen-Share",
      "description": "Review your test paper question by question in a private, supportive video consultation."
    },
    {
      "step": "04",
      "title": "Implement Score Surge Plan",
      "description": "Apply your new pacing and negative-marking elimination rules on your very next mock test."
    }
  ],
  "faqs": [
    {
      "question": "Which test series can we analyze during the session?",
      "answer": "Mentors can analyze any major NEET test series: Allen (Leader/Achiever), Aakash (AIATS/RM), Neetprep, Physics Wallah (AITS), or Sri Chaitanya/Narayana tests."
    },
    {
      "question": "How many negative marks can realistically be eliminated after one call?",
      "answer": "Most students lose 10 to 15 marks to poor pacing, wild guessing, and misreading question stems. Correcting these systemic habits typically protects 40 to 60 marks on the very next exam."
    },
    {
      "question": "Can I bring my rough sheets or test booklet to the call?",
      "answer": "Yes! Mentors encourage students to have their marked test booklet and rough sheets available to inspect calculation habits and skipping decisions."
    },
    {
      "question": "What if my mock score is stuck around 450-500?",
      "answer": "This call is ideal for students stuck in the 450-550 range. We will identify the exact 20-25 questions lost to negative marks and time pressure to bridge you to 600+."
    },
    {
      "question": "Can I book a follow-up session after my next test?",
      "answer": "Yes, you can schedule regular test review calls after every major cumulative exam or join the mentor's monthly cohort for continuous weekly audits."
    }
  ],
  "relatedLinks": [
    {
      "label": "Book 1:1 NEET Mentorship Session",
      "href": "/book-1-on-1-neet-mentorship-session"
    },
    {
      "label": "NEET Physics 1:1 Doubt Call",
      "href": "/neet-physics-1-on-1-doubt-call"
    },
    {
      "label": "NEET Backlog Recovery Session",
      "href": "/book-neet-backlog-recovery-session"
    },
    {
      "label": "JEE Mock Test Analysis Call",
      "href": "/book-jee-mock-test-analysis-call"
    },
    {
      "label": "Browse All Medical Mentors",
      "href": "/mentors"
    },
    {
      "label": "Claim Free Mentorship Trial",
      "href": "/free-mentorship-session"
    }
  ]
};

export default function Page() {
  return <BookCallPageTemplate config={config} />;
}
