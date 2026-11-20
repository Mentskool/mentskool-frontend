import React from "react";
import type { Metadata } from "next";
import {
  BookCallPageTemplate,
  BookCallPageConfig,
} from "@/components/seo/BookCallPageTemplate";

export const metadata: Metadata = {
  title: "Book a 1:1 Video Call with an AIIMS Doctor for NEET | Mentskool",
  description: "Talk directly to verified AIIMS New Delhi and top GMC MBBS students. Book a 1:1 video strategy call to master NCERT Biology, fix Physics, and score 680+ in NEET.",
  keywords: ["book call with aiims doctor", "talk to aiims student for neet", "neet video call consultation mbbs", "aiims ranker advice for neet", "neet medical mentor call", "mbbs topper guidance online"],
  alternates: {
    canonical: "https://mentskool.com/book-call-with-aiims-doctor-for-neet",
  },
  openGraph: {
    title: "Book a 1:1 Video Call with an AIIMS Doctor for NEET | Mentskool",
    description: "Talk directly to verified AIIMS New Delhi and top GMC MBBS students. Book a 1:1 video strategy call to master NCERT Biology, fix Physics, and score 680+ in NEET.",
    url: "https://mentskool.com/book-call-with-aiims-doctor-for-neet",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "1:1 Strategy Consultation with AIIMS MBBS Doctor",
      },
    ],
  },
};

const config: BookCallPageConfig = {
  "slug": "book-call-with-aiims-doctor-for-neet",
  "breadcrumbLabel": "Book Call with AIIMS Doctor",
  "examFocus": "NEET",
  "metaTitle": "Book a 1:1 Video Call with an AIIMS Doctor for NEET | Mentskool",
  "metaDescription": "Talk directly to verified AIIMS New Delhi and top GMC MBBS students. Book a 1:1 video strategy call to master NCERT Biology, fix Physics, and score 680+ in NEET.",
  "keywords": [
    "book call with aiims doctor",
    "talk to aiims student for neet",
    "neet video call consultation mbbs",
    "aiims ranker advice for neet",
    "neet medical mentor call",
    "mbbs topper guidance online"
  ],
  "badgeText": "Verified AIIMS MBBS Rankers",
  "h1Prefix": "Book a 1:1 Video Consultation with an",
  "h1Highlight": "AIIMS Doctor for NEET UG",
  "heroDescription": "Get direct, unfiltered guidance from verified MBBS students at AIIMS New Delhi and premier government medical colleges. Learn how they memorized 38 Biology chapters, conquered Physics numericals, and handled the high-stakes pressure of NEET exam day.",
  "serviceTitle": "1:1 Strategy Consultation with AIIMS MBBS Doctor",
  "serviceDescription": "45-minute live screen-share strategy call with top AIIMS and premier GMC MBBS rankers focusing on NCERT line-by-line mastery, negative mark eradication, and high-yield Physics.",
  "quickStats": [
    {
      "label": "Mentors",
      "value": "AIIMS & Top GMCs",
      "hint": "Verified MBBS Students"
    },
    {
      "label": "NEET Scores",
      "value": "680 \u2013 715/720",
      "hint": "Top 0.1 Percentile"
    },
    {
      "label": "Focus",
      "value": "Clinical Strategy",
      "hint": "Zero Fluff, 100% NCERT"
    },
    {
      "label": "Confidential",
      "value": "100%",
      "hint": "Private 1-on-1 Session"
    }
  ],
  "overviewHeading": "Why Speaking to a Recent AIIMS Ranker Unlocks Your Medical Career",
  "overviewIntro": "Cracking NEET UG requires an entirely different mindset from JEE. In JEE, solving 60% of the paper gets you into an IIT. In NEET, missing just 8 questions can disqualify you from an AIIMS or top government college. An AIIMS mentor understands the ruthless precision needed for 180 questions in 200 minutes and shows you how to eliminate careless blunders.",
  "overviewPoints": [
    {
      "title": "NCERT Margin Annotations",
      "detail": "Discover how AIIMS rankers annotate their NCERT biology books with PYQ year markers and cross-chapter synthesis notes."
    },
    {
      "title": "Physical Chemistry Shortcuts",
      "detail": "Learn mental math hacks and unit analysis to solve Equilibrium, Thermodynamics, and Electrochemistry questions in under 45 seconds."
    },
    {
      "title": "Physics Formula Consolidation",
      "detail": "See the exact 20-page formula ledger used by the mentor to score 160+ in NEET Physics."
    },
    {
      "title": "Mental Resilience on Exam Day",
      "detail": "Get firsthand coaching on how to avoid freezing when encountering an unexpected assertion-reasoning question."
    }
  ],
  "timelinePhases": [
    {
      "timeframe": "00 \u2013 10 Min",
      "phaseTitle": "NEET Score & Sub-Section Triage",
      "description": "The doctor reviews your current mock scores (Botany, Zoology, Physical, Organic, Inorganic, Physics) and test series error patterns.",
      "deliverables": [
        "Score leakage identification",
        "NCERT coverage percentage",
        "Negative mark penalty calculation"
      ]
    },
    {
      "timeframe": "10 \u2013 25 Min",
      "phaseTitle": "Biology Retention & Chemistry Audit",
      "description": "Audit how you review NCERT diagrams, scientist bios, and reaction mechanisms to guarantee 340+ in Bio and 160+ in Chem.",
      "deliverables": [
        "High-yield NCERT chapters checklist",
        "Organic reaction roadmap framework",
        "Daily active recall protocol"
      ]
    },
    {
      "timeframe": "25 \u2013 38 Min",
      "phaseTitle": "Physics Numerical De-Risking Strategy",
      "description": "Pinpoint which 12-15 physics chapters you must master to guarantee 140+ marks without getting bogged down in complex calculus.",
      "deliverables": [
        "NEET-specific formula shortcut sheet",
        "Option elimination techniques",
        "High-frequency question patterns"
      ]
    },
    {
      "timeframe": "38 \u2013 45 Min",
      "phaseTitle": "Score Surge Action Plan & Q&A",
      "description": "Draft a personalized 30-day revision and mock attempt schedule, followed by dedicated time for parent questions.",
      "deliverables": [
        "Documented 30-day study roadmap",
        "Weekly mock test frequency guidelines",
        "Session takeaways summary"
      ]
    }
  ],
  "comparisonTitle": "Commercial Medical Coaching vs. AIIMS Doctor Mentorship",
  "comparisonSubtitle": "See why 1:1 guidance from an active medical student gives you the decisive edge in NEET UG.",
  "comparisonRows": [
    {
      "aspect": "Mentor Experience",
      "genericCoaching": "Faculty who teach theory but haven't written modern NTA exams.",
      "mentskool1on1": "Current AIIMS MBBS student who conquered the exact modern NEET format."
    },
    {
      "aspect": "NCERT Focus",
      "genericCoaching": "Pushes heavy 400-page modules with out-of-syllabus botany details.",
      "mentskool1on1": "Ruthlessly focuses on 100% NCERT alignment, preventing wasted effort."
    },
    {
      "aspect": "Negative Marking",
      "genericCoaching": "Tells you to 'be careful' without a concrete elimination framework.",
      "mentskool1on1": "Teaches a mathematical risk-reward system to eliminate wild guesses completely."
    },
    {
      "aspect": "Physics Strategy",
      "genericCoaching": "Treats NEET physics like engineering physics, overwhelming medical minds.",
      "mentskool1on1": "Simplifies physics into high-yield formula patterns and direct numerical shortcuts."
    },
    {
      "aspect": "Personal Support",
      "genericCoaching": "Lost in a batch of 150 students with zero individual feedback.",
      "mentskool1on1": "Undivided 45-minute private consultation customized to your exact weaknesses."
    }
  ],
  "sections": [
    {
      "heading": "The 350/360 Biology Protocol: How AIIMS Toppers Avoid Silly Mistakes",
      "subheading": "Transitioning from Surface Reading to Microscopic NCERT Comprehension",
      "paragraphs": [
        "Most students read NCERT Biology like a novel\u2014highlighting yellow lines and re-reading the same pages 10 times. In the exam hall, however, when faced with options differing by a single word (e.g. 'partially' vs. 'completely', or 'proximal' vs. 'distal'), their memory blurs, resulting in a negative mark.",
        "During your 1:1 call, an AIIMS doctor demonstrates the 'Micro-Annotation Method.' You will learn how to turn every diagram label, table footnote, and chapter summary into an active flashcard. By cross-referencing Ecology, Genetics, and Biotechnology across multiple units, you build bulletproof recall that stays crisp even under intense exam adrenaline."
      ],
      "keyTakeaways": [
        {
          "title": "Diagram Label Audits",
          "detail": "Nearly 4 to 6 questions in NEET Biology directly test small captions and labels beneath NCERT diagrams."
        },
        {
          "title": "Summary Box Mining",
          "detail": "NCERT chapter summaries contain crucial physiological facts and definitions absent from the main body text."
        },
        {
          "title": "Flashcard Conversion",
          "detail": "Convert high-confusion pairs (e.g. homologous vs. analogous organs, spermatogenesis vs. oogenesis timelines) into rapid flashcards."
        }
      ]
    },
    {
      "heading": "Mastering Chemistry: Balancing Physical Numericals with Inorganic Retention",
      "subheading": "How to Lock in 165+ Marks Across the 3 Chemistry Sub-Disciplines",
      "paragraphs": [
        "NEET Chemistry requires three entirely different cognitive modes: Physical Chemistry demands fast arithmetic and formula mastery; Inorganic Chemistry demands pure memorization of trends and exceptions; Organic Chemistry demands deep conceptual reaction mechanisms and named reaction reagents.",
        "Your AIIMS mentor teaches you how to compartmentalize your revision. You will learn how to create a 1-page named reaction sheet for Organic Chemistry, a color and precipitate chart for Inorganic Chemistry, and formula shortcuts for Physical Chemistry that eliminate lengthy log calculations."
      ],
      "keyTakeaways": [
        {
          "title": "Log and Antilog Approximations",
          "detail": "Learn quick mental approximation rules to solve pH, buffer, and radioactive decay equations without scientific calculators."
        },
        {
          "title": "Inorganic Trend Roadmaps",
          "detail": "Group periodic trends (ionization energy, atomic radii, electron gain enthalpy) with their exact exceptions on a single consolidated chart."
        },
        {
          "title": "Reagent Specificity Mastery",
          "detail": "Master the exact differentiating actions of reducing and oxidizing agents (e.g., DIBAL-H, PCC, KMnO4, NaBH4)."
        }
      ]
    },
    {
      "heading": "Conquering the 200-Minute Pacing Clock: Time Allocation Strategy",
      "subheading": "How to Never Run Out of Time on NEET Exam Day",
      "paragraphs": [
        "Since NTA expanded the exam duration to 200 minutes for 200 questions (180 to be attempted), time management has become the primary separator between government seat winners and losers. Students who spend 80 minutes on Biology find themselves with only 40 minutes for Physics, causing rushed calculations and panic.",
        "Your mentor walks you through the proven AIIMS time-budgeting blueprint: 45 minutes for Biology (90 questions), 45 minutes for Chemistry (45 questions), 70 minutes for Physics (45 questions), and 40 minutes for OMR bubbling, cross-checking, and tackling flagged problems. Adopting this rhythm during your mock tests ensures you remain composed and methodical from start to finish."
      ],
      "keyTakeaways": [
        {
          "title": "The 45-45-70 Rule",
          "detail": "Strictly adhere to the 45m Bio, 45m Chem, 70m Phy split to ensure adequate numerical calculation bandwidth."
        },
        {
          "title": "Section B Triage",
          "detail": "Spend 2 minutes quickly reading all 15 questions in Section B to pick the 10 easiest, highest-confidence problems."
        },
        {
          "title": "Immediate OMR Inking",
          "detail": "Bubble OMR answers at the end of each subject rather than waiting until the final 10 minutes of the examination."
        }
      ]
    }
  ],
  "bookingSteps": [
    {
      "step": "01",
      "title": "Select AIIMS Mentor",
      "description": "Filter rankers from AIIMS New Delhi, AIIMS Rishikesh, MAMC, and top government medical colleges."
    },
    {
      "step": "02",
      "title": "Submit Test Scores",
      "description": "Share your latest mock percentiles, test series name, and primary hurdle during checkout."
    },
    {
      "step": "03",
      "title": "Join Video Session",
      "description": "Engage in an intensive 45-minute live screen-share strategy call with your doctor mentor."
    },
    {
      "step": "04",
      "title": "Follow 30-Day Plan",
      "description": "Execute your custom daily revision and mock test plan with clear performance benchmarks."
    }
  ],
  "faqs": [
    {
      "question": "Are all mentors on this page verified medical students?",
      "answer": "Yes, 100% of mentors for this service are currently enrolled in MBBS programs at AIIMS New Delhi, other premier AIIMS campuses, or top-tier government medical colleges across India. Each mentor's score and rank are rigorously verified."
    },
    {
      "question": "What if I am scoring below 450 marks right now?",
      "answer": "A score below 450 indicates major structural issues in either Biology retention or Physics numerical phobia. An AIIMS mentor will pinpoint your exact mark leaks and build a realistic step-by-step ladder to take you from 450 to 580, and then to 650+."
    },
    {
      "question": "Can parents join the 1:1 video call?",
      "answer": "Yes, parents are strongly encouraged to participate, especially during the last 15 minutes, to discuss stress management, realistic admission targets, and state vs. All India quota cutoffs."
    },
    {
      "question": "Will the mentor give me specific notes or formula sheets?",
      "answer": "During the call, the mentor will review your existing materials and share frameworks, sample error diaries, and formula organization methods that helped them score 680+."
    },
    {
      "question": "Can I book a follow-up call after my next major test?",
      "answer": "Yes, you can schedule follow-up 1:1 consultations whenever you need a mock review, or transition into the mentor's monthly cohort for ongoing daily accountability."
    }
  ],
  "relatedLinks": [
    {
      "label": "Book 1:1 NEET Mentorship Session",
      "href": "/book-1-on-1-neet-mentorship-session"
    },
    {
      "label": "NEET Mock Test Analysis Call",
      "href": "/book-neet-mock-test-analysis-call"
    },
    {
      "label": "NEET Physics Doubt & Strategy Call",
      "href": "/neet-physics-1-on-1-doubt-call"
    },
    {
      "label": "NEET Backlog Recovery Session",
      "href": "/book-neet-backlog-recovery-session"
    },
    {
      "label": "Find All AIIMS Mentors",
      "href": "/mentors"
    },
    {
      "label": "Free 15-Minute Strategy Call",
      "href": "/free-mentorship-session"
    }
  ]
};

export default function Page() {
  return <BookCallPageTemplate config={config} />;
}
