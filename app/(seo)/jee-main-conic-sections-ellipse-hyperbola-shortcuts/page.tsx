import React from "react";
import type { Metadata } from "next";
import {
  EditorialGuideTemplate,
  EditorialGuideConfig,
} from "@/components/seo/EditorialGuideTemplate";

const config: EditorialGuideConfig = {
  "slug": "jee-main-conic-sections-ellipse-hyperbola-shortcuts",
  "breadcrumbLabel": "Conic Sections Ellipse & Hyperbola Shortcuts",
  "examFocus": "JEE",
  "metaTitle": "JEE Main Conic Sections: Ellipse & Hyperbola Formula Shortcuts & Tangent Tricks",
  "metaDescription": "Master JEE Main Ellipse and Hyperbola in half the time. Memorize symmetry tricks, T = 0 / S₁ = T² tangent formulas, director circles, and focal chord shortcuts.",
  "keywords": [
    "JEE Main conic sections shortcuts",
    "ellipse and hyperbola formulas JEE",
    "tangent normal director circle tricks",
    "rectangular hyperbola xy = c² JEE",
    "coordinate geometry JEE Main"
  ],
  "h1": "JEE Main Conic Sections: Ellipse & Hyperbola Shortcuts",
  "readTime": "12 min read",
  "quickSummary": "Ellipse and Hyperbola look intimidating because students try memorizing 40 separate formulas. In reality, EVERY Hyperbola formula is obtained from the Ellipse formula simply by replacing b² with -b²! Master that single symmetry rule plus T = 0 and S₁ = T² to lock 8 to 12 marks in Coordinate Geometry.",
  "sections": [
    {
      "heading": "The b² → -b² Symmetry Rule Between Ellipse and Hyperbola",
      "paragraphs": [
        "The #1 reason students mix up Ellipse and Hyperbola formulas under exam pressure is treating them as two unrelated chapters.",
        "Because x²/a² + y²/b² = 1 turns into x²/a² - y²/b² = 1 when you replace b² with -b², almost every tangent, normal, eccentricity, and director circle formula transforms automatically!"
      ],
      "table": {
        "caption": "Ellipse vs Hyperbola Unified Formula Map (Replace b² → -b²)",
        "headers": [
          "Property (a > b for Ellipse)",
          "Ellipse (x²/a² + y²/b² = 1)",
          "Hyperbola (x²/a² - y²/b² = 1)"
        ],
        "rows": [
          [
            "Eccentricity (e)",
            "e² = 1 - b²/a²  (e < 1)",
            "e² = 1 + b²/a²  (e > 1)"
          ],
          [
            "Latus Rectum Length",
            "2b² / a",
            "2b² / a (magnitude)"
          ],
          [
            "Foci & Directrices",
            "(±ae, 0) & x = ±a/e",
            "(±ae, 0) & x = ±a/e"
          ],
          [
            "Slope-Form Tangent",
            "y = mx ± √(a²m² + b²)",
            "y = mx ± √(a²m² - b²)"
          ],
          [
            "Director Circle (⊥ Tangents)",
            "x² + y² = a² + b²",
            "x² + y² = a² - b² (valid if a > b)"
          ],
          [
            "Parametric Point",
            "(a cosθ, b sinθ)",
            "(a secθ, b tanθ)"
          ]
        ]
      },
      "mustRead": {
        "label": "JEE Main Maths Chapter-Wise Weightage (2025–2027)",
        "href": "/jee-main-maths-chapter-wise-weightage-2025-2026-2027"
      }
    },
    {
      "heading": "The Universal T = 0, S₁ = 0, and S₁ = T² Toolkit",
      "paragraphs": [
        "You never need to memorize separate point-tangent, chord-of-contact, or chord-with-given-midpoint formulas for Circle, Parabola, Ellipse, and Hyperbola. The exact same three symbolic operators work on EVERY degree-2 conic S = 0."
      ],
      "formulaBox": {
        "label": "T = 0 Replacement Rule",
        "formula": "x² → xx₁  |  y² → yy₁  |  2x → (x + x₁)  |  2y → (y + y₁)  |  2xy → (xy₁ + yx₁)",
        "example": "Tangent to x²/9 + y²/4 = 1 at (x₁, y₁) is immediately xx₁/9 + yy₁/4 = 1. Chord with midpoint (x₁, y₁) is T = S₁!"
      },
      "bullets": [
        {
          "lead": "T = 0",
          "text": "Gives Tangent at (x₁, y₁) on curve, OR Chord of Contact from external point (x₁, y₁)."
        },
        {
          "lead": "T = S₁",
          "text": "Gives the unique Chord whose midpoint is (x₁, y₁)."
        },
        {
          "lead": "S·S₁ = T²",
          "text": "Gives the Pair of Tangents drawn from an external point (x₁, y₁) to the conic."
        }
      ]
    },
    {
      "heading": "Slope-Form Tangent & Common Tangent Shortcuts",
      "paragraphs": [
        "Roughly 50% of JEE Main Conic Section questions ask for a common tangent between two curves (e.g., a circle and a parabola, or a parabola and an ellipse).",
        "Always write the tangent to one curve in slope form y = mx + c(m), then plug that c(m) into the second curve's tangency condition! Never solve messy two-variable point-of-contact systems."
      ],
      "table": {
        "caption": "Slope-Form Tangent Condition (y = mx + c)",
        "headers": [
          "Conic Equation",
          "Exact Tangency Condition for c"
        ],
        "rows": [
          [
            "Circle: x² + y² = r²",
            "c = ±r √(1 + m²)"
          ],
          [
            "Parabola: y² = 4ax",
            "c = a / m  (m ≠ 0)"
          ],
          [
            "Parabola: x² = 4ay",
            "c = -am²"
          ],
          [
            "Ellipse: x²/a² + y²/b² = 1",
            "c = ±√(a²m² + b²)"
          ],
          [
            "Hyperbola: x²/a² - y²/b² = 1",
            "c = ±√(a²m² - b²)"
          ]
        ]
      }
    },
    {
      "heading": "Reflection Property & Focal Distance Shortcuts",
      "paragraphs": [
        "Whenever a JEE Main problem mentions an incoming ray from one focus reflecting off an ellipse or hyperbola, remember the optical reflection law: any ray from Focus S₁ reflects off the ellipse and passes straight through Focus S₂!",
        "Furthermore, focal distances save huge algebra: for any point P(x₁, y₁) on ellipse x²/a² + y²/b² = 1 (a > b), PS₁ = a - e x₁ and PS₂ = a + e x₁, so PS₁ + PS₂ = 2a."
      ],
      "formulaBox": {
        "label": "Conjugate Hyperbola Eccentricity Link",
        "formula": "1 / e₁² + 1 / e₂² = 1",
        "example": "If a hyperbola has eccentricity e₁ = 2, its conjugate hyperbola immediately has 1/4 + 1/e₂² = 1 → e₂ = 2/√3 in 5 seconds."
      }
    },
    {
      "heading": "Rectangular Hyperbola (xy = c²) Special Shortcuts",
      "paragraphs": [
        "A Rectangular Hyperbola has equal semi-axes (a = b), giving fixed eccentricity e = √2. When rotated by 45°, its equation becomes xy = c² (where c² = a²/2).",
        "Use parametric point (ct, c/t) to keep calculations fraction-free."
      ],
      "bullets": [
        {
          "lead": "Orthocenter Property",
          "text": "If a triangle inscribed in xy = c² has all three vertices on the hyperbola, its Orthocenter ALSO lies on xy = c²!"
        },
        {
          "lead": "Tangent Area Property",
          "text": "Any tangent to xy = c² forms a triangle with the coordinate axes of constant area = 2c²."
        }
      ],
      "mustRead": {
        "label": "JEE Main 3D Geometry: Solved in 90 Seconds",
        "href": "/jee-main-3d-geometry-direction-cosines-shortcuts"
      }
    },
    {
      "heading": "Common Conic Section Traps in JEE Main",
      "paragraphs": [
        "Always check whether the major axis of an ellipse is horizontal (a > b) or vertical (b > a) before computing eccentricity or latus rectum! Swapping a and b is the single most common -1 error in Coordinate Geometry.",
        "Need a structured Coordinate Geometry formula sheet and weekly mock audits? Book a free 1:1 strategy call on Mentskool."
      ],
      "table": {
        "caption": "Top 4 Conic Traps & Quick Fixes",
        "headers": [
          "Trap",
          "What Goes Wrong",
          "Quick Guard"
        ],
        "rows": [
          [
            "Vertical Ellipse (b > a)",
            "Uses e² = 1 - b²/a² giving negative e²",
            "Always put (smaller² / larger²) inside 1 - (...)"
          ],
          [
            "Auxiliary Circle Radius",
            "Uses semi-minor axis b",
            "Auxiliary circle ALWAYS uses semi-major axis a: x²+y² = a²"
          ],
          [
            "Director Circle of Hyperbola",
            "Assumes it always exists",
            "Real director circle exists ONLY when a > b"
          ],
          [
            "Chord of Contact vs Midpoint",
            "Swaps T = 0 and T = S₁",
            "Contact = T = 0; Midpoint = T = S₁"
          ]
        ]
      }
    },
    {
      "heading": "How NTA Frames Traps in Conic Sections Ellipse & Hyperbola Shortcuts (And How to Spot Them Fast)",
      "paragraphs": [
        "Knowing the formulas for Conic Sections Ellipse & Hyperbola Shortcuts is only step one. In JEE Main and JEE Advanced, most lost marks happen because of small wording twists or hidden domain limits.",
        "Top rankers protect their score by running a 10-second sanity check before marking an option. Look closely at every sign, unit, and boundary condition."
      ],
      "table": {
        "caption": "Common Exam Traps vs Safe Checks for Conic Sections Ellipse & Hyperbola Shortcuts",
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
      "heading": "Step-by-Step 7-Day Revision Plan for Conic Sections Ellipse & Hyperbola Shortcuts",
      "paragraphs": [
        "You do not need to solve 400 random problems to master Conic Sections Ellipse & Hyperbola Shortcuts. Solving 60 to 80 high-quality official PYQs with proper review builds far stronger accuracy.",
        "Split your revision across short, focused daily blocks so your speed stays sharp alongside school or coaching homework."
      ],
      "table": {
        "caption": "7-Day Mastery Schedule for Conic Sections Ellipse & Hyperbola Shortcuts",
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
      "heading": "Rough-Sheet & Exam-Hall Time Strategy for Conic Sections Ellipse & Hyperbola Shortcuts",
      "paragraphs": [
        "During the 180-minute CBT exam, messy rough work is the silent killer of Conic Sections Ellipse & Hyperbola Shortcuts accuracy. Divide each scribble sheet into neat numbered boxes so you can re-check a step in 5 seconds.",
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
      "heading": "How 1:1 IITian Mentorship Fixes Conic Sections Ellipse & Hyperbola Shortcuts Mistakes Faster",
      "paragraphs": [
        "Most JEE aspirants already have good lecture notes for Conic Sections Ellipse & Hyperbola Shortcuts. What makes the difference between 95 percentile and 99.5+ percentile is having an IITian senior inspect your actual rough sheets.",
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
      "heading": "Worked Example Walkthroughs for Conic Sections Ellipse & Hyperbola Shortcuts",
      "paragraphs": [
        "Seeing a rule in action makes Conic Sections Ellipse & Hyperbola Shortcuts far easier to remember than reading abstract theory. Study how a top ranker breaks down a typical exam question step by step.",
        "Notice how each step isolates the exact formula first before plugging in any numbers."
      ],
      "formulaBox": {
        "label": "3-Step Exam Solving Framework",
        "formula": "1. Identify Pattern  →  2. Apply Shortcut / Symmetry  →  3. Run Boundary Check",
        "example": "When tackling Conic Sections Ellipse & Hyperbola Shortcuts, spend the first 15 seconds classifying the question type before writing algebra—this alone prevents 80% of wasted rough work."
      },
      "table": {
        "caption": "Class 11 vs Class 12 vs Dropper Strategy for Conic Sections Ellipse & Hyperbola Shortcuts",
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
      "heading": "Booklist & Resource Priority for Conic Sections Ellipse & Hyperbola Shortcuts (Don't Over-Collect)",
      "paragraphs": [
        "Many students buy five different books for Conic Sections Ellipse & Hyperbola Shortcuts and finish none of them. Stick strictly to one primary coaching sheet or standard textbook plus official 2019–2026 PYQs.",
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
      "heading": "Mock Test Score Impact: What Mastering Conic Sections Ellipse & Hyperbola Shortcuts Adds to Your Rank",
      "paragraphs": [
        "In a competitive exam where 10 marks can shift your All India Rank by thousands, turning Conic Sections Ellipse & Hyperbola Shortcuts into a 100% accuracy zone creates an immediate percentile cushion.",
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
      "heading": "Final Takeaways & Quick Action Plan for Conic Sections Ellipse & Hyperbola Shortcuts",
      "paragraphs": [
        "Mastering Conic Sections Ellipse & Hyperbola Shortcuts comes down to consistent daily execution, clean error tracking, and verifying every concept against official NTA data and standard textbooks.",
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
      "heading": "Common Mistakes Students Make Regarding Conic Sections Ellipse & Hyperbola Shortcuts",
      "paragraphs": [
        "Even well-prepared students often lose valuable rank or seat opportunities on Conic Sections Ellipse & Hyperbola Shortcuts due to small avoidable mistakes during preparation or counseling.",
        "Review these four common pitfalls carefully before finalizing your study schedule or college preference order."
      ],
      "table": {
        "caption": "Pitfalls vs Smart Fixes for Conic Sections Ellipse & Hyperbola Shortcuts",
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
      "heading": "Step-by-Step Verification & Planning Checklist for Conic Sections Ellipse & Hyperbola Shortcuts",
      "paragraphs": [
        "Before locking your next monthly milestone around Conic Sections Ellipse & Hyperbola Shortcuts, walk through this short 4-step verification checklist with your parents or mentor.",
        "Having every number, document, and weekly target written down removes last-minute guesswork and keeps stress low."
      ],
      "bullets": [
        {
          "lead": "1. Benchmark Your Current Score",
          "text": "Check where your latest full-syllabus mock places you relative to Conic Sections Ellipse & Hyperbola Shortcuts targets."
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
      "heading": "Weekly Study Rhythm & Time Allocation Around Conic Sections Ellipse & Hyperbola Shortcuts",
      "paragraphs": [
        "Even the best notes on Conic Sections Ellipse & Hyperbola Shortcuts fail if you do not schedule regular active revision alongside your coaching classes or self-study.",
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
      "heading": "Parent & Student Decision Guide: Next Steps After Reading Conic Sections Ellipse & Hyperbola Shortcuts",
      "paragraphs": [
        "Whether you are planning your next 30 days of preparation or shortlisting colleges around Conic Sections Ellipse & Hyperbola Shortcuts, clarity comes from speaking to someone who has already walked this exact path.",
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
    }
  ],
  "faqs": [
    {
      "question": "How many questions come from Conic Sections in JEE Main?",
      "answer": "Parabola, Ellipse, and Hyperbola together typically contribute 2 to 3 questions (8–12 marks) in every JEE Main shift."
    },
    {
      "question": "How do I convert Ellipse formulas to Hyperbola formulas?",
      "answer": "Replace b² with -b² in standard Ellipse equations, eccentricity, slope tangents, and director circle formulas."
    },
    {
      "question": "What is the eccentricity of a Rectangular Hyperbola?",
      "answer": "A Rectangular Hyperbola (a = b) always has eccentricity e = √2."
    },
    {
      "question": "What is the Director Circle of an Ellipse?",
      "answer": "It is the locus of points from which two perpendicular tangents can be drawn to the ellipse: x² + y² = a² + b²."
    },
    {
      "question": "What is the T = S₁ formula used for?",
      "answer": "T = S₁ gives the equation of the chord of any degree-2 conic whose midpoint is (x₁, y₁)."
    },
    {
      "question": "What is the relation between eccentricities of a hyperbola and its conjugate?",
      "answer": "1/e₁² + 1/e₂² = 1."
    },
    {
      "question": "What is the area of the triangle formed by a tangent to xy = c² and the coordinate axes?",
      "answer": "The area is always constant and equal to 2c²."
    },
    {
      "question": "What is the sum of focal distances for any point on an ellipse?",
      "answer": "For any point P on an ellipse, PS₁ + PS₂ = 2a (length of the major axis)."
    },
    {
      "question": "Does a Hyperbola always have a real Director Circle?",
      "answer": "No! For x²/a² - y²/b² = 1, the director circle x² + y² = a² - b² is real only when a > b."
    },
    {
      "question": "How can Mentskool help me master JEE Coordinate Geometry?",
      "answer": "Mentskool IITian mentors review your rough calculations 1-on-1 every week and help you eliminate formula mix-ups."
    }
  ],
  "relatedGuides": [
    {
      "label": "3D Geometry 90-Second Shortcuts",
      "href": "/jee-main-3d-geometry-direction-cosines-shortcuts",
      "tag": "Geometry"
    },
    {
      "label": "Vector Cross Product Applications",
      "href": "/jee-main-vector-algebra-cross-product-applications",
      "tag": "Vectors"
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
