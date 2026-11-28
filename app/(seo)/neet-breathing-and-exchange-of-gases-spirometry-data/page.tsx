import React from "react";
import type { Metadata } from "next";
import {
  EditorialGuideTemplate,
  EditorialGuideConfig,
} from "@/components/seo/EditorialGuideTemplate";

const config: EditorialGuideConfig = {
  "slug": "neet-breathing-and-exchange-of-gases-spirometry-data",
  "breadcrumbLabel": "Spirometry & Breathing Data NEET",
  "examFocus": "NEET",
  "metaTitle": "NEET Breathing & Exchange of Gases: Spirometry Volumes, pO₂/pCO₂ & Bohr Shift (12 Marks)",
  "metaDescription": "Master NEET Breathing & Exchange of Gases (8–12 marks). Memorize TV/IRV/ERV/RV values, Capacity formulas (VC, FRC, TLC), Partial Pressures, and Hb-O₂ dissociation curve shifts.",
  "keywords": [
    "NEET breathing and exchange of gases spirometry",
    "respiratory volumes capacities formulas NEET",
    "oxygen hemoglobin dissociation curve Bohr shift",
    "partial pressure pO2 pCO2 table NCERT",
    "NEET zoology breathing"
  ],
  "h1": "NEET Breathing & Exchange of Gases: Spirometry Data & Gas Exchange",
  "readTime": "10 min read",
  "quickSummary": "Breathing and Exchange of Gases consistently yields 2 to 3 Zoology questions (8 to 12 marks) in NEET. Every year, NTA tests three exact anchors: Spirometry Lung Volumes & Capacities, the pO₂/pCO₂ mmHg Partial Pressure table, and right/left shifts of the Oxygen-Hemoglobin dissociation curve.",
  "sections": [
    {
      "heading": "Respiratory Volumes & Capacities (Complete Spirometry Table)",
      "paragraphs": [
        "Remember that Residual Volume (RV) CANNOT be measured directly by a simple spirometer—meaning Functional Residual Capacity (FRC) and Total Lung Capacity (TLC) also cannot be measured by simple spirometry!"
      ],
      "table": {
        "caption": "NCERT Respiratory Volumes & Capacities (Must-Know Numbers)",
        "headers": [
          "Volume / Capacity",
          "Exact NCERT Value",
          "Formula / Definition"
        ],
        "rows": [
          [
            "Tidal Volume (TV)",
            "500 mL",
            "Normal quiet breath (~6,000–8,000 mL/min)"
          ],
          [
            "Inspiratory Reserve Volume (IRV)",
            "2,500 – 3,000 mL",
            "Additional forcible inspiration beyond TV"
          ],
          [
            "Expiratory Reserve Volume (ERV)",
            "1,000 – 1,100 mL",
            "Additional forcible expiration beyond TV"
          ],
          [
            "Residual Volume (RV)",
            "1,100 – 1,200 mL",
            "Air remaining even after forcible expiration"
          ],
          [
            "Inspiratory Capacity (IC)",
            "~3,000 – 3,500 mL",
            "TV + IRV"
          ],
          [
            "Expiratory Capacity (EC)",
            "~1,500 – 1,600 mL",
            "TV + ERV"
          ],
          [
            "Functional Residual Capacity (FRC)",
            "~2,100 – 2,300 mL",
            "ERV + RV"
          ],
          [
            "Vital Capacity (VC)",
            "~4,000 – 4,600 mL",
            "ERV + TV + IRV"
          ],
          [
            "Total Lung Capacity (TLC)",
            "~5,100 – 5,800 mL",
            "RV + ERV + TV + IRV (or VC + RV)"
          ]
        ]
      },
      "mustRead": {
        "label": "NEET Human Physiology Most Important Topics (Mark-Wise)",
        "href": "/neet-human-physiology-most-important-topics-mark-wise"
      }
    },
    {
      "heading": "Partial Pressures (mm Hg) & Diffusion Membrane",
      "paragraphs": [
        "Gases diffuse strictly from high partial pressure to low partial pressure. Notice CO₂ solubility is 20–25 times higher than O₂, making CO₂ diffuse vastly faster per mm Hg difference."
      ],
      "table": {
        "caption": "Partial Pressure Table (in mm Hg) — NCERT Exact",
        "headers": [
          "Gas",
          "Atmospheric Air",
          "Alveoli",
          "Deoxygenated Blood",
          "Oxygenated Blood",
          "Tissues"
        ],
        "rows": [
          [
            "pO₂",
            "159",
            "104",
            "40",
            "95",
            "40"
          ],
          [
            "pCO₂",
            "0.3",
            "40",
            "45",
            "40",
            "45"
          ]
        ]
      }
    },
    {
      "heading": "Oxygen-Hemoglobin Dissociation Curve & CO₂ Transport",
      "paragraphs": [
        "O₂ transport: 97% via RBC Oxyhemoglobin (each Hb carries max 4 O₂ molecules), 3% dissolved in plasma. CO₂ transport: ~70% as Bicarbonate (HCO₃⁻ via Carbonic Anhydrase inside RBCs!), 20–25% as Carbamino-hemoglobin, and 7% dissolved in plasma."
      ],
      "bullets": [
        {
          "lead": "Right Shift (Unloading at Tissues)",
          "text": "Triggered by LOW pO₂, HIGH pCO₂, HIGH H⁺ (low pH), HIGH Temperature."
        },
        {
          "lead": "Left Shift (Loading at Alveoli)",
          "text": "Triggered by HIGH pO₂, LOW pCO₂, LOW H⁺ (high pH), LOW Temperature."
        },
        {
          "lead": "Pneumotaxic Center (Pons)",
          "text": "Moderates Respiratory Rhythm Center in Medulla by reducing duration of inspiration."
        }
      ]
    },
    {
      "heading": "How NTA Frames Statement & Match Traps in Spirometry & Breathing Data NEET",
      "paragraphs": [
        "In recent NEET UG exams, direct 1-line recall questions on Spirometry & Breathing Data NEET have been replaced by Statement I / Statement II, Assertion-Reason, and 4-row Match-the-Following grids.",
        "Even if you know 95% of NCERT, missing one qualifier word like 'only', 'always', 'generally', or 'except' turns an easy +4 into -1."
      ],
      "table": {
        "caption": "NTA Question Formats & Fast Solving Rules for Spirometry & Breathing Data NEET",
        "headers": [
          "Question Format",
          "Common Student Mistake",
          "Topper Solving Habit"
        ],
        "rows": [
          [
            "Statement I & Statement II",
            "Assumes Statement II is true because it sounds familiar",
            "Verify each statement independently against exact NCERT lines"
          ],
          [
            "How Many Are Correct?",
            "Skims fast and misses one subtle exception",
            "Mark ✔ or ✘ next to each numbered statement before counting"
          ],
          [
            "Match-the-Following",
            "Matches all 4 rows blindly under time pressure",
            "Lock 2 certain pairs first and eliminate wrong option rows"
          ],
          [
            "INCORRECT / NOT TRUE",
            "Picks the first true statement by habit",
            "Underline 'INCORRECT' / 'EXCEPT' before reading Option A"
          ]
        ]
      }
    },
    {
      "heading": "NCERT Diagram & Active-Recall Checklist for Spirometry & Breathing Data NEET",
      "paragraphs": [
        "Passive re-reading gives a false sense of confidence. Instead, use the 1-3-7-21 active-recall rhythm for Spirometry & Breathing Data NEET so every diagram label, number, and exception stays sharp until exam day.",
        "Cover textbook labels with a sheet of paper and practice writing every term from memory."
      ],
      "bullets": [
        {
          "lead": "Day 1 — Blank-Page Recall",
          "text": "Close NCERT and write down all key tables, numbers, and examples from memory, then check what you missed."
        },
        {
          "lead": "Day 3 — Diagram Labeling",
          "text": "Test yourself on every NCERT figure arrow and caption without peeking."
        },
        {
          "lead": "Day 7 — 30-PYQ Timed Sprint",
          "text": "Solve 30 past NEET questions (2016–2026) in 15 minutes to build speed."
        },
        {
          "lead": "Day 21 — Sunday Mock Audit",
          "text": "Record any missed line in a compact Mistake Notebook for Saturday revision."
        }
      ]
    },
    {
      "heading": "Exam-Hall Speed & OMR Protocol for Spirometry & Breathing Data NEET",
      "paragraphs": [
        "With 180 compulsory questions in 180 minutes, finishing Biology in 40 to 45 minutes gives you a huge cushion for Physics and Chemistry.",
        "Spend no more than 25–30 seconds per question on Spirometry & Breathing Data NEET, and bubble your OMR sheet in clean 15-question blocks so you never shift a row by mistake."
      ],
      "table": {
        "caption": "NEET Exam-Hall Pacing Targets",
        "headers": [
          "Subject",
          "Questions",
          "Ideal Time Budget",
          "Target Accuracy"
        ],
        "rows": [
          [
            "Biology (Botany + Zoology)",
            "90 Questions",
            "40 – 45 Minutes",
            "95%+ (345–360 / 360)"
          ],
          [
            "Chemistry",
            "45 Questions",
            "45 – 50 Minutes",
            "90%+ (160–175 / 180)"
          ],
          [
            "Physics",
            "45 Questions",
            "65 – 75 Minutes",
            "85%+ (150–170 / 180)"
          ],
          [
            "Pass-2 & OMR Buffer",
            "Review Marked Qs",
            "10 – 15 Minutes",
            "Zero careless row-shifts"
          ]
        ]
      },
      "mustRead": {
        "label": "NEET Biology Chapter-Wise Weightage (2024–2026): 360/360 Blueprint",
        "href": "/neet-biology-chapter-wise-weightage-2024-2025-2026"
      }
    },
    {
      "heading": "How 1:1 AIIMS/GMC Mentorship Boosts Your Spirometry & Breathing Data NEET Score",
      "paragraphs": [
        "Most NEET aspirants hovering around 520–580 already work hard—they simply lack a structured weekly error-audit system and consistent daily NCERT targets for Spirometry & Breathing Data NEET.",
        "On Mentskool, a verified ranker from AIIMS or a top Government Medical College guides you 1-on-1 every week, checks your Sunday mock mistakes line by line, and helps you push calmly toward 650+.",
        "Claim your Free 1:1 Strategy Session (₹0) on Mentskool to get a customized 2027 NEET plan."
      ],
      "bullets": [
        {
          "lead": "Daily NCERT Tracking",
          "text": "Stay consistent with daily solved MCQ & revision logs."
        },
        {
          "lead": "AIIMS & GMC Rankers",
          "text": "Learn directly from seniors who scored 660–705 in NEET UG."
        },
        {
          "lead": "Zero Long Lock-Ins",
          "text": "Flexible month-to-month mentorship with strict 30-student mentor caps."
        }
      ]
    },
    {
      "heading": "Class 11 vs Class 12 vs Dropper Study Plan for Spirometry & Breathing Data NEET",
      "paragraphs": [
        "Your exact weekly approach to Spirometry & Breathing Data NEET depends on how many months remain before NEET UG. Fresh Class 11/12 students need slow, visual understanding first, while droppers need high-speed Statement I/II accuracy.",
        "Use the table below to set a realistic weekly target without burning out."
      ],
      "table": {
        "caption": "Stage-Wise Study Schedule for Spirometry & Breathing Data NEET",
        "headers": [
          "Aspirant Stage",
          "Primary Goal",
          "Weekly Practice Target"
        ],
        "rows": [
          [
            "Class 11 Student",
            "Read NCERT line by line & label every diagram from memory",
            "40 NCERT-based MCQs + 1 blank-page recall"
          ],
          [
            "Class 12 Student",
            "Pair with board prep & revise Class 11 tables every weekend",
            "50 mixed PYQs + Saturday mistake-log scan"
          ],
          [
            "NEET Dropper",
            "Eliminate silly -1 slips on Statement & Match-the-Following Qs",
            "75 timed MCQs under 30 mins + full error audit"
          ]
        ]
      }
    },
    {
      "heading": "Top 5 Myths About Spirometry & Breathing Data NEET That Cost NEET Aspirants Marks",
      "paragraphs": [
        "Misleading coaching advice often pushes students to memorize out-of-syllabus facts for Spirometry & Breathing Data NEET while ignoring simple NCERT sentences.",
        "Keep these five ground realities in mind while revising."
      ],
      "bullets": [
        {
          "lead": "Myth 1 — Coaching Modules Are Better Than NCERT",
          "text": "Nearly 99% of NEET Biology questions come directly from NCERT lines, tables, and diagrams."
        },
        {
          "lead": "Myth 2 — Reading 10 Times Guarantees 360/360",
          "text": "Active recall and timed PYQ testing beat passive highlighting every single time."
        },
        {
          "lead": "Myth 3 — Deleted Chapters Still Need Full Study",
          "text": "Always check the latest NMC rationalized syllabus before investing hours into removed topics."
        },
        {
          "lead": "Myth 4 — Diagrams Are Only for Board Exams",
          "text": "NTA routinely lifts unlabeled figures and arrows straight from NCERT into 4-mark MCQs."
        },
        {
          "lead": "Myth 5 — Negative Marks Are Unavoidable",
          "text": "Underlining 'INCORRECT' and using a Mistake Notebook cuts silly -1 errors by over 75%."
        }
      ]
    },
    {
      "heading": "Quick Pre-Exam Checklist for Spirometry & Breathing Data NEET (Final 48 Hours)",
      "paragraphs": [
        "In the final two days before NEET UG, never open unfamiliar study material on Spirometry & Breathing Data NEET. Stick to calm, high-confidence consolidation.",
        "Scan your highlighted NCERT tables, verify commonly swapped pairs, and trust your preparation."
      ],
      "table": {
        "caption": "48-Hour Final Revision Checklist",
        "headers": [
          "Time Window",
          "Action Item",
          "Purpose"
        ],
        "rows": [
          [
            "T-48 Hours",
            "Scan NCERT tables, summary boxes & bold terms",
            "Refresh high-frequency numbers & names"
          ],
          [
            "T-24 Hours",
            "Review your 1-page Mistake Notebook for this topic",
            "Prevent repeating past -1 errors"
          ],
          [
            "Exam Morning",
            "Light 10-minute glance at tricky pairs only; stay calm",
            "Keep mind fresh for 180-minute focus"
          ]
        ]
      }
    },
    {
      "heading": "How Parents & Students Can Track Weekly Progress on Spirometry & Breathing Data NEET",
      "paragraphs": [
        "Consistent small wins in Spirometry & Breathing Data NEET add up quickly across 180+ NEET chapters. Tracking weekly accuracy percentage rather than just hours studied keeps stress low and confidence high.",
        "Aim for 90%+ accuracy on timed 30-question PYQ drills before marking the chapter complete."
      ],
      "bullets": [
        {
          "lead": "Track Accuracy, Not Just Hours",
          "text": "85%+ accuracy on 50 MCQs is far better than passively reading 4 hours."
        },
        {
          "lead": "Weekly Mock Review",
          "text": "Every Sunday evening, log every missed question from your mock test into your error sheet."
        },
        {
          "lead": "Stay Consistent",
          "text": "Daily 45-minute revision blocks prevent last-month panic."
        }
      ]
    },
    {
      "heading": "Final Takeaways & Quick Action Plan for Spirometry & Breathing Data NEET",
      "paragraphs": [
        "Mastering Spirometry & Breathing Data NEET comes down to consistent daily execution, clean error tracking, and verifying every concept against official NTA data and standard textbooks.",
        "Avoid jumping between too many resources; lock the core tables and formulas above first, test yourself under timed conditions, and review every mistake weekly.",
        "If you want a senior who has already cracked IIT JEE or AIIMS/NEET to review your mock test strategy and build your weekly study plan, book a free 15-minute senior chat on Mentskool."
      ],
      "bullets": [
        {
          "lead": "1. Verify Official Data",
          "text": "Always cross-check cutoffs, syllabus updates, and exam rules directly against NTA / JoSAA / MCC releases."
        },
        {
          "lead": "2. Practice Under a Timer",
          "text": "Timed PYQ sprints build far stronger exam-hall confidence than passive reading."
        },
        {
          "lead": "3. Talk to a Senior (₹0)",
          "text": "Use Mentskool's free 1:1 mentor session whenever you feel stuck on backlogs or rank targets."
        }
      ]
    },
    {
      "heading": "Common Mistakes Students Make Regarding Spirometry & Breathing Data NEET",
      "paragraphs": [
        "Even well-prepared students often lose valuable rank or seat opportunities on Spirometry & Breathing Data NEET due to small avoidable mistakes during preparation or counseling.",
        "Review these four common pitfalls carefully before finalizing your study schedule or college preference order."
      ],
      "table": {
        "caption": "Pitfalls vs Smart Fixes for Spirometry & Breathing Data NEET",
        "headers": [
          "Common Mistake",
          "Impact on Score / Seat",
          "Smart Topper Fix"
        ],
        "rows": [
          [
            "Relying on outdated 2022–2023 data",
            "Wrong target score or missed cutoff shift",
            "Verify 2024–2026 official NTA / JoSAA / MCC trends"
          ],
          [
            "Skipping weekly mock error audits",
            "Repeating the exact same -1 slips",
            "Maintain a compact Saturday Mistake Notebook"
          ],
          [
            "Ignoring category / quota rules",
            "Overlooking Home State, EWS, or AIQ edge",
            "Check both Round 1 and Final/CSAB closing ranks"
          ],
          [
            "Studying without daily accountability",
            "Backlogs pile up before exam month",
            "Log daily solved questions & talk 1:1 with a senior"
          ]
        ]
      }
    },
    {
      "heading": "Step-by-Step Verification & Planning Checklist for Spirometry & Breathing Data NEET",
      "paragraphs": [
        "Before locking your next monthly milestone around Spirometry & Breathing Data NEET, walk through this short 4-step verification checklist with your parents or mentor.",
        "Having every number, document, and weekly target written down removes last-minute guesswork and keeps stress low."
      ],
      "bullets": [
        {
          "lead": "1. Benchmark Your Current Score",
          "text": "Check where your latest full-syllabus mock places you relative to Spirometry & Breathing Data NEET targets."
        },
        {
          "lead": "2. Protect Core High-Yield Hours",
          "text": "Reserve 45 minutes daily strictly for active recall, PYQs, and error-log revision."
        },
        {
          "lead": "3. Cross-Check Official Notices",
          "text": "Always confirm dates, seat matrices, and syllabus updates directly on official portals."
        },
        {
          "lead": "4. Get a 15-Min Senior Reality Check",
          "text": "Chat free 1:1 with an AIIMS/GMC topper on Mentskool to validate your plan."
        }
      ]
    },
    {
      "heading": "Weekly Study Rhythm & Time Allocation Around Spirometry & Breathing Data NEET",
      "paragraphs": [
        "Even the best notes on Spirometry & Breathing Data NEET fail if you do not schedule regular active revision alongside your coaching classes or self-study.",
        "Top rankers protect small daily review slots instead of cramming everything in the last month before the exam."
      ],
      "table": {
        "caption": "Recommended Weekly Revision Cadence",
        "headers": [
          "Day",
          "Activity",
          "Time Needed"
        ],
        "rows": [
          [
            "Monday / Wednesday",
            "Fresh concept + 25 untimed PYQs",
            "45–60 Mins"
          ],
          [
            "Friday",
            "Timed 20-question sprint + formula/table recall",
            "30 Mins"
          ],
          [
            "Sunday",
            "Full-syllabus mock + Mistake Notebook update",
            "45 Mins review"
          ]
        ]
      }
    },
    {
      "heading": "Parent & Student Decision Guide: Next Steps After Reading Spirometry & Breathing Data NEET",
      "paragraphs": [
        "Whether you are planning your next 30 days of preparation or shortlisting colleges around Spirometry & Breathing Data NEET, clarity comes from speaking to someone who has already walked this exact path.",
        "Avoid relying on random social media rumors or unverified coaching claims when making high-stakes exam or counseling decisions.",
        "Use Mentskool's free 15-minute 1:1 chat to get direct, honest feedback from an IIT or AIIMS senior before locking your next study block or preference sheet."
      ],
      "bullets": [
        {
          "lead": "Zero Guesswork",
          "text": "Compare your current mock score directly against verified 2024–2026 benchmarks."
        },
        {
          "lead": "Friendly Senior Support",
          "text": "Ask anything freely — from backlog stress to branch vs college trade-offs."
        },
        {
          "lead": "Direct Access",
          "text": "Book your free 15-minute chat or browse verified mentors anytime."
        }
      ]
    },
    {
      "heading": "Self-Study vs Mass Coaching vs 1:1 Mentorship for Spirometry & Breathing Data NEET",
      "paragraphs": [
        "Knowing how to study Spirometry & Breathing Data NEET is important, but your daily study environment determines whether you actually stick to the plan for 6 to 12 months.",
        "Compare the three common preparation setups before committing your time."
      ],
      "table": {
        "caption": "Preparation Environment Comparison",
        "headers": [
          "Factor",
          "Pure Self-Study / Mass Batch",
          "1:1 Senior Mentorship (Mentskool)"
        ],
        "rows": [
          [
            "Weekly Target Clarity",
            "Generic batch schedule; easy to fall behind",
            "Tailored weekly task sheet built around your weak topics"
          ],
          [
            "Mock Error Analysis",
            "Automated percentile graph only",
            "1:1 question-by-question rough-sheet review with an IIT/AIIMS senior"
          ],
          [
            "Backlog Recovery",
            "Overwhelming piled-up lectures",
            "Structured weekend clearance blocks without missing current classes"
          ],
          [
            "Accountability",
            "Zero daily verification",
            "Daily dashboard tracking + friendly senior check-ins (30-student cap)"
          ]
        ]
      }
    },
    {
      "heading": "Quick Summary: Everything You Need to Remember About Spirometry & Breathing Data NEET",
      "paragraphs": [
        "Keep your preparation simple and consistent. Focus on understanding the core rules in Spirometry & Breathing Data NEET, testing yourself under timed conditions, and fixing small calculation or reading slips early.",
        "Whenever you feel stuck or unsure about your next step, talk directly to a verified senior on Mentskool for free — 15 minutes of honest clarity can save months of wasted effort."
      ],
      "bullets": [
        {
          "lead": "Focus on Active Recall",
          "text": "Testing beats re-reading every time."
        },
        {
          "lead": "Protect Accuracy",
          "text": "Eliminating -1 negative marks is the fastest way to jump 20–40 marks."
        },
        {
          "lead": "Stay Consistent",
          "text": "Small daily progress compounds into top-1% ranks."
        }
      ]
    }
  ],
  "faqs": [
    {
      "question": "Which respiratory volume cannot be measured using a simple spirometer?",
      "answer": "Residual Volume (RV = 1100–1200 mL), and consequently FRC and TLC, cannot be measured by simple spirometry."
    },
    {
      "question": "What is the formula for Vital Capacity (VC)?",
      "answer": "VC = ERV + TV + IRV (or TLC - RV)."
    },
    {
      "question": "How much CO₂ is transported as Bicarbonate?",
      "answer": "Approximately 70% of CO₂ is transported in the form of bicarbonate (HCO₃⁻) ions."
    },
    {
      "question": "What are the pO₂ and pCO₂ values in Alveoli vs Deoxygenated blood?",
      "answer": "In Alveoli: pO₂ = 104 mm Hg, pCO₂ = 40 mm Hg. In Deoxygenated blood: pO₂ = 40 mm Hg, pCO₂ = 45 mm Hg."
    },
    {
      "question": "What shifts the Oxygen-Hemoglobin dissociation curve to the right?",
      "answer": "High pCO₂, high H⁺ (low pH), and high temperature (promoting oxygen release at tissues)."
    },
    {
      "question": "Where is the Respiratory Rhythm Center located?",
      "answer": "In the Medulla region of the brain (moderated by the Pneumotaxic center in the Pons)."
    },
    {
      "question": "What are the three layers of the diffusion membrane?",
      "answer": "Thin squamous epithelium of alveoli, endothelium of alveolar capillaries, and the basement substance between them (total thickness < 1 mm)."
    },
    {
      "question": "What is Emphysema and its primary cause?",
      "answer": "A chronic disorder where alveolar walls are damaged, decreasing respiratory surface; cigarette smoking is a major cause."
    },
    {
      "question": "How much O₂ does 100 mL of oxygenated blood deliver to tissues under normal conditions?",
      "answer": "Every 100 mL of oxygenated blood delivers around 5 mL of O₂ to tissues under normal physiological conditions."
    },
    {
      "question": "How can Mentskool help me master NEET Zoology?",
      "answer": "Mentskool AIIMS/GMC mentors walk you through NCERT Physiology tables and weekly mock audits 1-on-1."
    }
  ],
  "relatedGuides": [
    {
      "label": "Body Fluids & ECG Guide",
      "href": "/neet-body-fluids-and-circulation-heart-diagram-questions",
      "tag": "Physiology"
    },
    {
      "label": "Human Physiology Mark-Wise",
      "href": "/neet-human-physiology-most-important-topics-mark-wise",
      "tag": "Zoology"
    },
    {
      "label": "Excretory System & Nephron",
      "href": "/neet-excretory-system-nephron-diagram-based-scoring",
      "tag": "Physiology"
    },
    {
      "label": "Book Free 1:1 Strategy Call (₹0)",
      "href": "/free-mentorship-session",
      "tag": "Free"
    }
  ]
};

export const metadata: Metadata = {
  title: config.metaTitle,
  description: config.metaDescription,
  keywords: config.keywords,
  alternates: {
    canonical: `https://mentskool.com/${config.slug}`,
  },
  openGraph: {
    title: config.metaTitle,
    description: config.metaDescription,
    url: `https://mentskool.com/${config.slug}`,
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: config.h1,
      },
    ],
  },
};

export default function Page() {
  return <EditorialGuideTemplate config={config} />;
}
