import React from "react";
import type { Metadata } from "next";
import {
  EditorialGuideTemplate,
  EditorialGuideConfig,
} from "@/components/seo/EditorialGuideTemplate";

const config: EditorialGuideConfig = {
  "slug": "jee-main-3d-geometry-direction-cosines-shortcuts",
  "breadcrumbLabel": "3D Geometry 90-Second Shortcuts",
  "examFocus": "JEE",
  "metaTitle": "JEE Main 3D Geometry: Direction Cosines, Shortest Distance & Foot of Perpendicular in 90s",
  "metaDescription": "Solve JEE Main 3D Geometry questions (8–12 marks) in under 90 seconds. Master shortest distance between skew lines, foot of perpendicular, and image of a point formulas.",
  "keywords": [
    "JEE Main 3D geometry shortcuts",
    "shortest distance skew lines formula JEE",
    "foot of perpendicular 3D line JEE",
    "direction cosines direction ratios JEE",
    "3D geometry 90 seconds"
  ],
  "h1": "JEE Main 3D Geometry: Direction Cosines & 90-Second Shortcuts",
  "readTime": "11 min read",
  "quickSummary": "Vectors and 3D Geometry together carry 12 to 16 marks in every single JEE Main shift—making them the #1 highest-scoring unit in JEE Maths! With planes trimmed in the rationalized JEE Main syllabus, NTA concentrates heavily on Skew Lines Shortest Distance, Foot of Perpendicular, Image of a Point, and Direction Cosines.",
  "sections": [
    {
      "heading": "Why 3D Geometry Is Guaranteed Easy Marks in JEE Main 2027",
      "paragraphs": [
        "Unlike Calculus or P&C where unseen twists can stall you, 3D Geometry questions in JEE Main follow 4 rigid numerical templates.",
        "Even better, after NTA trimmed Equation of a Plane from JEE Main, questions focus almost exclusively on Lines, Angles, Shortest Distance, and Projections—which take under 90 seconds with clean vector formulas."
      ],
      "table": {
        "caption": "Top 4 Most Repeated 3D Geometry Models in JEE Main",
        "headers": [
          "Question Model",
          "Frequency",
          "Avg Solve Time"
        ],
        "rows": [
          [
            "Shortest Distance Between Skew Lines",
            "Every Session (Multiple Shifts)",
            "60–75 Seconds"
          ],
          [
            "Foot of Perpendicular & Image of Point in Line",
            "Very High",
            "75–90 Seconds"
          ],
          [
            "Direction Cosines / Angle With Axes",
            "High",
            "30–45 Seconds"
          ],
          [
            "Intersection / Coplanarity of Two Lines",
            "Moderate",
            "45–60 Seconds"
          ]
        ]
      },
      "mustRead": {
        "label": "Vector Algebra Cross Product Applications in JEE Main",
        "href": "/jee-main-vector-algebra-cross-product-applications"
      }
    },
    {
      "heading": "Direction Cosines (l, m, n) vs Direction Ratios (a, b, c)",
      "paragraphs": [
        "Direction Cosines (l = cosα, m = cosβ, n = cosγ) are simply the components of the UNIT vector along a line. They always satisfy l² + m² + n² = 1.",
        "Never confuse Direction Ratios (any proportional numbers a, b, c) with Direction Cosines! To convert DRs to DCs, divide by √(a² + b² + c²)."
      ],
      "formulaBox": {
        "label": "Identity for sin²α + sin²β + sin²γ",
        "formula": "cos²α + cos²β + cos²γ = 1   ⇒   sin²α + sin²β + sin²γ = 2",
        "example": "If a line makes equal angles with all three coordinate axes, l = m = n = ±1/√3, and sin²α + sin²β + sin²γ = 2 immediately!"
      },
      "bullets": [
        {
          "lead": "Projection of Segment AB",
          "text": "Projection of AB on a line with DCs (l, m, n) is simply |l(x₂-x₁) + m(y₂-y₁) + n(z₂-z₁)|."
        },
        {
          "lead": "Check Unit Vector First",
          "text": "Always normalize DRs before computing projections."
        }
      ]
    },
    {
      "heading": "Shortest Distance Between Skew Lines vs Parallel Lines",
      "paragraphs": [
        "Roughly half of all 3D Geometry problems in recent JEE Main shifts ask for the shortest distance between two lines r = a₁ + λb₁ and r = a₂ + μb₂.",
        "CRITICAL TRAP: Always check whether b₁ and b₂ are parallel (b₁ = k·b₂) BEFORE applying the skew-line formula! If they are parallel, b₁ × b₂ = 0, giving 0/0!"
      ],
      "formulaBox": {
        "label": "Skew Lines vs Parallel Lines Distance",
        "formula": "Skew: d = | (a₂ - a₁) · (b₁ × b₂) | / |b₁ × b₂|   |   Parallel: d = | (a₂ - a₁) × b | / |b|",
        "example": "Notice that if the numerator (a₂ - a₁) · (b₁ × b₂) equals 0 (and lines aren't parallel), the two lines INTERSECT (distance = 0) and are Coplanar!"
      }
    },
    {
      "heading": "Foot of Perpendicular & Image of a Point in a Line (λ-Method)",
      "paragraphs": [
        "To find the foot of perpendicular M and mirror image P' of point P(x₁, y₁, z₁) in a line (x - x₀)/a = (y - y₀)/b = (z - z₀)/c = λ, follow this clean 3-step λ-method:"
      ],
      "bullets": [
        {
          "lead": "Step 1 — General Point M",
          "text": "Write M = (x₀ + aλ, y₀ + bλ, z₀ + cλ) in terms of a single parameter λ."
        },
        {
          "lead": "Step 2 — Dot Product = 0",
          "text": "Since PM is perpendicular to direction vector b⃗ = (a, b, c), set PM⃗ · b⃗ = 0 to solve for λ in one linear equation."
        },
        {
          "lead": "Step 3 — Midpoint for Image",
          "text": "Plug λ into M for the foot of perpendicular; for the mirror image P', use P' = 2M - P!"
        }
      ],
      "table": {
        "caption": "3D Geometry Mistake Prevention Table",
        "headers": [
          "Step",
          "Common Error",
          "Safe Verification"
        ],
        "rows": [
          [
            "Reading Line Equation",
            "Reads (2x - 4)/3 as DR = 3, point x₀ = 4",
            "Rewrite strictly as (x - 2)/(3/2) so coefficient of x, y, z is +1!"
          ],
          [
            "Parallel vs Skew Check",
            "Uses (a₂-a₁)·(b₁×b₂)/|b₁×b₂| on parallel lines",
            "Check ratio a₁/a₂ = b₁/b₂ = c₁/c₂ first"
          ],
          [
            "Image of Point",
            "Stops at Foot M instead of Image P'",
            "Always double M and subtract P: P' = 2M - P"
          ]
        ]
      }
    },
    {
      "heading": "Symmetric Line Normalization Trap (The 2x - 3 Trick)",
      "paragraphs": [
        "NTA loves hiding non-unit coefficients inside Cartesian line equations, such as (2x - 1)/3 = (3y + 2)/4 = (1 - z)/2.",
        "If you blindly read the direction ratios as (3, 4, 2), every single downstream calculation fails! Always rewrite every numerator so x, y, and z have coefficient +1: (x - ½)/(3/2) = (y + ⅔)/(4/3) = (z - 1)/(-2)."
      ],
      "mustRead": {
        "label": "JEE Main Conic Sections: Ellipse & Hyperbola Shortcuts",
        "href": "/jee-main-conic-sections-ellipse-hyperbola-shortcuts"
      }
    },
    {
      "heading": "3-Day Action Plan for 100% Accuracy in 3D Geometry",
      "paragraphs": [
        "3D Geometry is pure mechanical execution once your signs and line-normalization habits are clean. Practice 30 recent 2023–2026 JEE Main PYQs with a 90-second timer per question.",
        "Want an IITian mentor to audit your Maths mock speed and rough-sheet accuracy? Claim your free 1:1 strategy call on Mentskool today."
      ],
      "table": {
        "caption": "3-Day 3D Geometry Mastery Plan",
        "headers": [
          "Day",
          "Topic Focus",
          "Drill Goal"
        ],
        "rows": [
          [
            "Day 1",
            "DCs, DRs, Angle & Line Normalization",
            "15 problems with non-standard (2x-1) forms"
          ],
          [
            "Day 2",
            "Foot of Perpendicular, Image & Shortest Distance",
            "15 mixed skew + parallel distance PYQs"
          ],
          [
            "Day 3",
            "Mixed Vector-3D Timed Sprint",
            "20 PYQs in 28 minutes (95%+ accuracy)"
          ]
        ]
      }
    },
    {
      "heading": "How NTA Frames Traps in 3D Geometry 90-Second Shortcuts (And How to Spot Them Fast)",
      "paragraphs": [
        "Knowing the formulas for 3D Geometry 90-Second Shortcuts is only step one. In JEE Main and JEE Advanced, most lost marks happen because of small wording twists or hidden domain limits.",
        "Top rankers protect their score by running a 10-second sanity check before marking an option. Look closely at every sign, unit, and boundary condition."
      ],
      "table": {
        "caption": "Common Exam Traps vs Safe Checks for 3D Geometry 90-Second Shortcuts",
        "headers": [
          "Trap Type",
          "What Goes Wrong",
          "10-Second Safe Check"
        ],
        "rows": [
          [
            "Domain & Division by Zero",
            "Canceling a variable factor erases a valid root or solution",
            "Check if the canceled factor equals zero separately"
          ],
          [
            "Sign & Frame Convention",
            "Mixing up clockwise vs anti-clockwise or axis signs",
            "Draw a quick labeled sketch on your rough pad first"
          ],
          [
            "Unit & Constant Mismatch",
            "Using SI units in half the problem and CGS/eV in the rest",
            "Write units next to every given number before multiplying"
          ],
          [
            "Numerical Rounding",
            "Rounding intermediate steps shifts integer answers by ±1",
            "Keep fractions exact until the final calculation line"
          ]
        ]
      }
    },
    {
      "heading": "Step-by-Step 7-Day Revision Plan for 3D Geometry 90-Second Shortcuts",
      "paragraphs": [
        "You do not need to solve 400 random problems to master 3D Geometry 90-Second Shortcuts. Solving 60 to 80 high-quality official PYQs with proper review builds far stronger accuracy.",
        "Split your revision across short, focused daily blocks so your speed stays sharp alongside school or coaching homework."
      ],
      "table": {
        "caption": "7-Day Mastery Schedule for 3D Geometry 90-Second Shortcuts",
        "headers": [
          "Day",
          "Focus Task",
          "Target Output"
        ],
        "rows": [
          [
            "Day 1–2",
            "Review core formulas & solve 20 foundational problems untimed",
            "Zero concept gaps; clean derivation flow"
          ],
          [
            "Day 3–4",
            "Solve 25 JEE Main / Advanced PYQs (2020–2026) under a stopwatch",
            "Under 2 minutes per question"
          ],
          [
            "Day 5",
            "Audit every wrong or slow question in a Mistake Notebook",
            "Spot recurring sign or setup patterns"
          ],
          [
            "Day 6–7",
            "Take a 20-question mixed timed sprint & re-solve marked errors",
            "85%+ accuracy with zero silly slips"
          ]
        ]
      }
    },
    {
      "heading": "Rough-Sheet & Exam-Hall Time Strategy for 3D Geometry 90-Second Shortcuts",
      "paragraphs": [
        "During the 180-minute CBT exam, messy rough work is the silent killer of 3D Geometry 90-Second Shortcuts accuracy. Divide each scribble sheet into neat numbered boxes so you can re-check a step in 5 seconds.",
        "Respect the 2.5-minute cutoff rule: if a question stalls after 150 seconds, mark it for Review & Next and secure easier +4 marks elsewhere first."
      ],
      "bullets": [
        {
          "lead": "Number Your Rough Boxes",
          "text": "Write Q-numbers clearly in each box so Pass-2 verification never starts from scratch."
        },
        {
          "lead": "Test Extreme Cases",
          "text": "When choosing between symbolic options, plug in simple values like 0, 1, or 90° to eliminate wrong choices instantly."
        },
        {
          "lead": "Never Guess Blindly",
          "text": "Only mark an MCQ if you have narrowed it down cleanly; avoid -1 negative marks on wild guesses."
        }
      ],
      "mustRead": {
        "label": "JEE Main Integration Problems: Shortcut Methods & King's Rule",
        "href": "/jee-main-integration-problems-shortcut-methods"
      }
    },
    {
      "heading": "How 1:1 IITian Mentorship Fixes 3D Geometry 90-Second Shortcuts Mistakes Faster",
      "paragraphs": [
        "Most JEE aspirants already have good lecture notes for 3D Geometry 90-Second Shortcuts. What makes the difference between 95 percentile and 99.5+ percentile is having an IITian senior inspect your actual rough sheets.",
        "On Mentskool, your 1:1 mentor from IIT Bombay, IIT Delhi, or top IITs audits your weekly mock tests question by question, builds custom target sheets, and tracks your daily problem count on a live dashboard.",
        "If you want a personalized study roadmap without rigid annual lock-ins, book a Free 1:1 Strategy Call (₹0) on Mentskool today."
      ],
      "bullets": [
        {
          "lead": "94% Daily Accountability",
          "text": "Log solved problems every evening so backlogs never pile up."
        },
        {
          "lead": "Strict 30-Student Cap",
          "text": "Every mentor works with at most 30 students for real 1-on-1 attention."
        },
        {
          "lead": "Month-to-Month Freedom",
          "text": "Zero long-term contracts and instant mentor switching anytime."
        }
      ]
    },
    {
      "heading": "Worked Example Walkthroughs for 3D Geometry 90-Second Shortcuts",
      "paragraphs": [
        "Seeing a rule in action makes 3D Geometry 90-Second Shortcuts far easier to remember than reading abstract theory. Study how a top ranker breaks down a typical exam question step by step.",
        "Notice how each step isolates the exact formula first before plugging in any numbers."
      ],
      "formulaBox": {
        "label": "3-Step Exam Solving Framework",
        "formula": "1. Identify Pattern  →  2. Apply Shortcut / Symmetry  →  3. Run Boundary Check",
        "example": "When tackling 3D Geometry 90-Second Shortcuts, spend the first 15 seconds classifying the question type before writing algebra—this alone prevents 80% of wasted rough work."
      },
      "table": {
        "caption": "Class 11 vs Class 12 vs Dropper Strategy for 3D Geometry 90-Second Shortcuts",
        "headers": [
          "Student Stage",
          "Primary Priority",
          "Weekly Time Allocation"
        ],
        "rows": [
          [
            "Class 11 Student",
            "Build strong first-principles intuition without rushing shortcuts",
            "3–4 Hours/week alongside coaching"
          ],
          [
            "Class 12 Student",
            "Balance school boards with timed JEE Main & Advanced PYQ sprints",
            "2–3 Hours/week focused drills"
          ],
          [
            "JEE Dropper / Repeater",
            "Eliminate recurring mock errors & hit sub-90-second solve speed",
            "Daily 45-min error-log practice"
          ]
        ]
      }
    },
    {
      "heading": "Booklist & Resource Priority for 3D Geometry 90-Second Shortcuts (Don't Over-Collect)",
      "paragraphs": [
        "Many students buy five different books for 3D Geometry 90-Second Shortcuts and finish none of them. Stick strictly to one primary coaching sheet or standard textbook plus official 2019–2026 PYQs.",
        "Solving one trusted resource three times beats skimming five books once."
      ],
      "bullets": [
        {
          "lead": "Step 1 — NCERT / Coaching Notes",
          "text": "Lock every core definition, sign rule, and standard derivation cleanly."
        },
        {
          "lead": "Step 2 — Official JEE Main PYQs",
          "text": "Solve the last 6 years of shift papers to build rapid pattern recognition."
        },
        {
          "lead": "Step 3 — JEE Advanced Archive",
          "text": "Practice multi-concept problems to stress-test your conceptual depth."
        }
      ]
    },
    {
      "heading": "Mock Test Score Impact: What Mastering 3D Geometry 90-Second Shortcuts Adds to Your Rank",
      "paragraphs": [
        "In a competitive exam where 10 marks can shift your All India Rank by thousands, turning 3D Geometry 90-Second Shortcuts into a 100% accuracy zone creates an immediate percentile cushion.",
        "Track your accuracy percentage across 3 consecutive Sunday mocks before moving on."
      ],
      "table": {
        "caption": "Accuracy Target Progression",
        "headers": [
          "Mock Stage",
          "Target Accuracy",
          "Target Time Per Question"
        ],
        "rows": [
          [
            "Mock 1 (Baseline)",
            "60% – 70%",
            "2.5 – 3.0 Minutes"
          ],
          [
            "Mock 2 (Post-Error Audit)",
            "80% – 85%",
            "1.5 – 2.0 Minutes"
          ],
          [
            "Mock 3 (Exam Ready)",
            "90% – 100%",
            "60 – 90 Seconds"
          ]
        ]
      }
    },
    {
      "heading": "Final Takeaways & Quick Action Plan for 3D Geometry 90-Second Shortcuts",
      "paragraphs": [
        "Mastering 3D Geometry 90-Second Shortcuts comes down to consistent daily execution, clean error tracking, and verifying every concept against official NTA data and standard textbooks.",
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
      "heading": "Common Mistakes Students Make Regarding 3D Geometry 90-Second Shortcuts",
      "paragraphs": [
        "Even well-prepared students often lose valuable rank or seat opportunities on 3D Geometry 90-Second Shortcuts due to small avoidable mistakes during preparation or counseling.",
        "Review these four common pitfalls carefully before finalizing your study schedule or college preference order."
      ],
      "table": {
        "caption": "Pitfalls vs Smart Fixes for 3D Geometry 90-Second Shortcuts",
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
      "heading": "Step-by-Step Verification & Planning Checklist for 3D Geometry 90-Second Shortcuts",
      "paragraphs": [
        "Before locking your next monthly milestone around 3D Geometry 90-Second Shortcuts, walk through this short 4-step verification checklist with your parents or mentor.",
        "Having every number, document, and weekly target written down removes last-minute guesswork and keeps stress low."
      ],
      "bullets": [
        {
          "lead": "1. Benchmark Your Current Score",
          "text": "Check where your latest full-syllabus mock places you relative to 3D Geometry 90-Second Shortcuts targets."
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
          "text": "Chat free 1:1 with an IITian on Mentskool to validate your plan."
        }
      ]
    },
    {
      "heading": "Weekly Study Rhythm & Time Allocation Around 3D Geometry 90-Second Shortcuts",
      "paragraphs": [
        "Even the best notes on 3D Geometry 90-Second Shortcuts fail if you do not schedule regular active revision alongside your coaching classes or self-study.",
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
    }
  ],
  "faqs": [
    {
      "question": "How many questions come from 3D Geometry in JEE Main?",
      "answer": "Together with Vector Algebra, 3D Geometry contributes 3 to 4 questions (12 to 16 marks) in nearly every JEE Main shift."
    },
    {
      "question": "Is Equation of a Plane in the JEE Main 2027 syllabus?",
      "answer": "Plane equations were trimmed in NTA's rationalized JEE Main syllabus, shifting heavy emphasis onto 3D Lines, Shortest Distance, and Direction Cosines (though Planes remain in JEE Advanced)."
    },
    {
      "question": "What is the shortest distance between two skew lines?",
      "answer": "d = | (a₂ - a₁) · (b₁ × b₂) | / |b₁ × b₂|, where a₁, a₂ are points on the lines and b₁, b₂ are their direction vectors."
    },
    {
      "question": "What if two lines in 3D are parallel?",
      "answer": "Do not use the skew-line formula (which gives 0/0). Instead, use d = | (a₂ - a₁) × b | / |b|."
    },
    {
      "question": "How do you find the mirror image of a point in a 3D line?",
      "answer": "First find the foot of perpendicular M using the λ-parameter and PM⃗ · b⃗ = 0, then apply P' = 2M - P."
    },
    {
      "question": "What is the relation between direction cosines l, m, n?",
      "answer": "l² + m² + n² = 1, which also implies sin²α + sin²β + sin²γ = 2."
    },
    {
      "question": "What is the biggest trap when reading a Cartesian 3D line?",
      "answer": "Forgetting to normalize non-unit coefficients on x, y, or z (like 1 - z or 2x - 3) to +1 before reading the point and direction ratios."
    },
    {
      "question": "When are two 3D lines coplanar?",
      "answer": "Two lines are coplanar if they are either parallel OR they intersect (meaning (a₂ - a₁) · (b₁ × b₂) = 0)."
    },
    {
      "question": "Can I solve 3D Geometry problems using Vector Algebra?",
      "answer": "Yes! Writing points and lines in vector form (r = a + λb) makes dot and cross products much cleaner and less error-prone."
    },
    {
      "question": "How can Mentskool help improve my JEE Main Maths percentile?",
      "answer": "Mentskool IITian mentors conduct weekly 1:1 mock audits to fix arithmetic slips and help you lock high-yield chapters like Vectors & 3D."
    }
  ],
  "relatedGuides": [
    {
      "label": "Vector Cross Product Applications",
      "href": "/jee-main-vector-algebra-cross-product-applications",
      "tag": "Vectors"
    },
    {
      "label": "Conic Sections Shortcuts",
      "href": "/jee-main-conic-sections-ellipse-hyperbola-shortcuts",
      "tag": "Geometry"
    },
    {
      "label": "JEE Main Maths Weightage 2027",
      "href": "/jee-main-maths-chapter-wise-weightage-2025-2026-2027",
      "tag": "Weightage"
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
