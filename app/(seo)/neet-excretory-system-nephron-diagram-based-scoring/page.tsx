import React from "react";
import type { Metadata } from "next";
import {
  EditorialGuideTemplate,
  EditorialGuideConfig,
} from "@/components/seo/EditorialGuideTemplate";

const config: EditorialGuideConfig = {
  "slug": "neet-excretory-system-nephron-diagram-based-scoring",
  "breadcrumbLabel": "Nephron Diagram & Excretion NEET",
  "examFocus": "NEET",
  "metaTitle": "NEET Excretory System: Nephron Diagram, Loop of Henle & RAAS/ANF (12 Marks)",
  "metaDescription": "Score 100% in NEET Excretory Products & Elimination. Master Cortical vs Juxtamedullary nephrons, PCT/Loop permeability, Counter-Current 300–1200 mOsmol/L, and RAAS vs ANF.",
  "keywords": [
    "NEET excretory system nephron diagram",
    "Loop of Henle permeability NEET",
    "counter current mechanism 300 1200 mOsmol",
    "RAAS vs ANF regulation NEET",
    "GFR 125 mL min NEET"
  ],
  "h1": "NEET Excretory System: Nephron Diagram & Counter-Current Scoring Guide",
  "readTime": "11 min read",
  "quickSummary": "Excretory Products and their Elimination yields 2 to 3 Zoology questions (8 to 12 marks) every year. Mastering the exact permeability of each nephron segment, the 300 → 1200 mOsmol/L Counter-Current gradient, and the tug-of-war between RAAS/ADH and ANF guarantees 100% accuracy.",
  "sections": [
    {
      "heading": "Nitrogenous Wastes: Ammonotelism vs Ureotelism vs Uricotelism",
      "paragraphs": [
        "Match-the-Following questions on excretory waste toxicity and water requirements appear frequently in NEET."
      ],
      "table": {
        "caption": "Excretory Products & NCERT Animal Examples",
        "headers": [
          "Mode",
          "Water Needed & Toxicity",
          "Exact NCERT Examples"
        ],
        "rows": [
          [
            "Ammonotelic (NH₃)",
            "Maximum water, Most toxic",
            "Many bony fishes, aquatic amphibians, aquatic insects"
          ],
          [
            "Ureotelic (Urea)",
            "Moderate water, Moderate",
            "Mammals, many terrestrial amphibians, marine fishes"
          ],
          [
            "Uricotelic (Uric Acid)",
            "Minimum water (pellet/paste), Least toxic",
            "Reptiles, birds, land snails, insects"
          ]
        ]
      },
      "mustRead": {
        "label": "NEET Human Physiology Most Important Topics (Mark-Wise)",
        "href": "/neet-human-physiology-most-important-topics-mark-wise"
      }
    },
    {
      "heading": "Glomerular Filtration Rate (GFR) & JGA Autoregulation",
      "paragraphs": [
        "On average, 1,100–1,200 mL of blood is filtered by the kidneys per minute (~1/5th of cardiac output). Podocytes in Bowman's capsule form filtration slits leaving virtually all plasma constituents EXCEPT proteins to pass into the lumen."
      ],
      "formulaBox": {
        "label": "Daily Filtration vs Urine Output",
        "formula": "GFR = 125 mL / min = 180 Liters / day   →   Actual Urine = ~1.5 Liters / day",
        "example": "Nearly 99% of the 180 L filtrate is reabsorbed by the renal tubules—meaning 70%–80% of electrolytes and water are reclaimed in PCT alone!"
      }
    },
    {
      "heading": "Nephron Segment Permeability & Counter-Current Mechanism",
      "paragraphs": [
        "The #1 diagram trap in NEET is swapping the permeability of the Descending Limb vs Ascending Limb of the Loop of Henle."
      ],
      "table": {
        "caption": "Nephron Segment Roles & Permeability Matrix",
        "headers": [
          "Segment",
          "Water Permeability",
          "Electrolyte Transport",
          "Key NCERT Function"
        ],
        "rows": [
          [
            "PCT (Brush border cuboidal)",
            "Permeable",
            "Active & Passive",
            "Reabsorbs 70–80% electrolytes/water; maintains pH via H⁺/NH₃ secretion"
          ],
          [
            "Descending Limb (Loop)",
            "PERMEABLE to H₂O",
            "Almost IMPERMEABLE",
            "Concentrates filtrate as it descends into 1200 mOsmol/L medulla"
          ],
          [
            "Ascending Limb (Loop)",
            "IMPERMEABLE to H₂O",
            "Permeable (NaCl out)",
            "Dilutes filtrate as NaCl moves out (passed to vasa recta)"
          ],
          [
            "DCT",
            "Conditional (ADH)",
            "Conditional (Aldosterone)",
            "Conditional Na⁺ & water reabsorption + K⁺/H⁺ secretion"
          ],
          [
            "Collecting Duct",
            "Permeable (ADH)",
            "Small Urea out",
            "Concentrates urine; returns small urea to medullary interstitium"
          ]
        ]
      }
    },
    {
      "heading": "RAAS, ADH (Vasopressin) vs ANF Regulation",
      "paragraphs": [
        "When blood volume or GFR drops, the Juxtaglomerular Apparatus (JGA) releases Renin: Angiotensinogen → Angiotensin I → Angiotensin II (powerful vasoconstrictor + stimulates Adrenal Cortex to release Aldosterone → Na⁺ & water reabsorption at DCT).",
        "In direct opposition, high blood flow to the heart atria triggers ANF (Atrial Natriuretic Factor), which causes vasodilation and LOWERS blood pressure—acting as a natural check on RAAS!"
      ],
      "mustRead": {
        "label": "Body Fluids & Circulation: Heart Diagram & ECG Waves",
        "href": "/neet-body-fluids-and-circulation-heart-diagram-questions"
      }
    },
    {
      "heading": "How NTA Frames Statement & Match Traps in Nephron Diagram & Excretion NEET",
      "paragraphs": [
        "In recent NEET UG exams, direct 1-line recall questions on Nephron Diagram & Excretion NEET have been replaced by Statement I / Statement II, Assertion-Reason, and 4-row Match-the-Following grids.",
        "Even if you know 95% of NCERT, missing one qualifier word like 'only', 'always', 'generally', or 'except' turns an easy +4 into -1."
      ],
      "table": {
        "caption": "NTA Question Formats & Fast Solving Rules for Nephron Diagram & Excretion NEET",
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
      "heading": "NCERT Diagram & Active-Recall Checklist for Nephron Diagram & Excretion NEET",
      "paragraphs": [
        "Passive re-reading gives a false sense of confidence. Instead, use the 1-3-7-21 active-recall rhythm for Nephron Diagram & Excretion NEET so every diagram label, number, and exception stays sharp until exam day.",
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
      "heading": "Exam-Hall Speed & OMR Protocol for Nephron Diagram & Excretion NEET",
      "paragraphs": [
        "With 180 compulsory questions in 180 minutes, finishing Biology in 40 to 45 minutes gives you a huge cushion for Physics and Chemistry.",
        "Spend no more than 25–30 seconds per question on Nephron Diagram & Excretion NEET, and bubble your OMR sheet in clean 15-question blocks so you never shift a row by mistake."
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
      "heading": "How 1:1 AIIMS/GMC Mentorship Boosts Your Nephron Diagram & Excretion NEET Score",
      "paragraphs": [
        "Most NEET aspirants hovering around 520–580 already work hard—they simply lack a structured weekly error-audit system and consistent daily NCERT targets for Nephron Diagram & Excretion NEET.",
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
      "heading": "Class 11 vs Class 12 vs Dropper Study Plan for Nephron Diagram & Excretion NEET",
      "paragraphs": [
        "Your exact weekly approach to Nephron Diagram & Excretion NEET depends on how many months remain before NEET UG. Fresh Class 11/12 students need slow, visual understanding first, while droppers need high-speed Statement I/II accuracy.",
        "Use the table below to set a realistic weekly target without burning out."
      ],
      "table": {
        "caption": "Stage-Wise Study Schedule for Nephron Diagram & Excretion NEET",
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
      "heading": "Top 5 Myths About Nephron Diagram & Excretion NEET That Cost NEET Aspirants Marks",
      "paragraphs": [
        "Misleading coaching advice often pushes students to memorize out-of-syllabus facts for Nephron Diagram & Excretion NEET while ignoring simple NCERT sentences.",
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
      "heading": "Quick Pre-Exam Checklist for Nephron Diagram & Excretion NEET (Final 48 Hours)",
      "paragraphs": [
        "In the final two days before NEET UG, never open unfamiliar study material on Nephron Diagram & Excretion NEET. Stick to calm, high-confidence consolidation.",
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
      "heading": "How Parents & Students Can Track Weekly Progress on Nephron Diagram & Excretion NEET",
      "paragraphs": [
        "Consistent small wins in Nephron Diagram & Excretion NEET add up quickly across 180+ NEET chapters. Tracking weekly accuracy percentage rather than just hours studied keeps stress low and confidence high.",
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
      "heading": "Final Takeaways & Quick Action Plan for Nephron Diagram & Excretion NEET",
      "paragraphs": [
        "Mastering Nephron Diagram & Excretion NEET comes down to consistent daily execution, clean error tracking, and verifying every concept against official NTA data and standard textbooks.",
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
      "heading": "Common Mistakes Students Make Regarding Nephron Diagram & Excretion NEET",
      "paragraphs": [
        "Even well-prepared students often lose valuable rank or seat opportunities on Nephron Diagram & Excretion NEET due to small avoidable mistakes during preparation or counseling.",
        "Review these four common pitfalls carefully before finalizing your study schedule or college preference order."
      ],
      "table": {
        "caption": "Pitfalls vs Smart Fixes for Nephron Diagram & Excretion NEET",
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
      "heading": "Step-by-Step Verification & Planning Checklist for Nephron Diagram & Excretion NEET",
      "paragraphs": [
        "Before locking your next monthly milestone around Nephron Diagram & Excretion NEET, walk through this short 4-step verification checklist with your parents or mentor.",
        "Having every number, document, and weekly target written down removes last-minute guesswork and keeps stress low."
      ],
      "bullets": [
        {
          "lead": "1. Benchmark Your Current Score",
          "text": "Check where your latest full-syllabus mock places you relative to Nephron Diagram & Excretion NEET targets."
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
      "heading": "Weekly Study Rhythm & Time Allocation Around Nephron Diagram & Excretion NEET",
      "paragraphs": [
        "Even the best notes on Nephron Diagram & Excretion NEET fail if you do not schedule regular active revision alongside your coaching classes or self-study.",
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
      "heading": "Parent & Student Decision Guide: Next Steps After Reading Nephron Diagram & Excretion NEET",
      "paragraphs": [
        "Whether you are planning your next 30 days of preparation or shortlisting colleges around Nephron Diagram & Excretion NEET, clarity comes from speaking to someone who has already walked this exact path.",
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
      "heading": "Self-Study vs Mass Coaching vs 1:1 Mentorship for Nephron Diagram & Excretion NEET",
      "paragraphs": [
        "Knowing how to study Nephron Diagram & Excretion NEET is important, but your daily study environment determines whether you actually stick to the plan for 6 to 12 months.",
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
    }
  ],
  "faqs": [
    {
      "question": "What is the normal Glomerular Filtration Rate (GFR) in a healthy adult?",
      "answer": "About 125 mL per minute, which equals 180 liters per day."
    },
    {
      "question": "Which limb of the Loop of Henle is impermeable to water?",
      "answer": "The Ascending Limb is impermeable to water but allows transport of electrolytes actively or passively."
    },
    {
      "question": "What maintains the 300 to 1200 mOsmol/L medullary osmolarity gradient?",
      "answer": "The Counter-Current mechanism between the Loop of Henle and Vasa Recta, driven primarily by NaCl and Urea."
    },
    {
      "question": "How does ANF oppose the RAAS mechanism?",
      "answer": "ANF (released by heart atria) causes vasodilation and decreases blood pressure, acting as a negative check on RAAS."
    },
    {
      "question": "What is the difference between Cortical and Juxtamedullary nephrons?",
      "answer": "Cortical nephrons (~85%) have short Loops of Henle and almost no Vasa Recta. Juxtamedullary nephrons (~15%) have very long Loops of Henle plunging deep into the medulla with well-developed Vasa Recta."
    },
    {
      "question": "What is Uremia vs Renal Calculi vs Glomerulonephritis?",
      "answer": "Uremia = accumulation of urea in blood; Renal calculi = insoluble crystal stones (oxalates) in kidney; Glomerulonephritis = inflammation of glomeruli."
    },
    {
      "question": "Which epithelium lines the PCT?",
      "answer": "Simple cuboidal brush-border epithelium, which increases surface area for reabsorption."
    },
    {
      "question": "What is the excretory structure in Platyhelminthes vs Crustaceans?",
      "answer": "Platyhelminthes (Planaria) use Flame cells (protonephridia); Crustaceans (prawns) use Antennal glands / Green glands."
    },
    {
      "question": "What triggers ADH release from the neurohypophysis?",
      "answer": "Excessive loss of fluid from the body activates osmoreceptors, stimulating the hypothalamus to release ADH (Vasopressin) from the neurohypophysis."
    },
    {
      "question": "How can Mentskool help me master NEET Zoology?",
      "answer": "Mentskool AIIMS/GMC mentors walk you through NCERT Physiology diagrams and weekly mock error audits 1-on-1."
    }
  ],
  "relatedGuides": [
    {
      "label": "Body Fluids & ECG Guide",
      "href": "/neet-body-fluids-and-circulation-heart-diagram-questions",
      "tag": "Physiology"
    },
    {
      "label": "Neural Control & Brain Diagram",
      "href": "/neet-neural-control-and-coordination-brain-diagram",
      "tag": "Physiology"
    },
    {
      "label": "Human Physiology Mark-Wise",
      "href": "/neet-human-physiology-most-important-topics-mark-wise",
      "tag": "Zoology"
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
