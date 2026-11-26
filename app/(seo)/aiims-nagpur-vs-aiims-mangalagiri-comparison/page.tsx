import React from "react";
import type { Metadata } from "next";
import {
  BookCallPageTemplate,
  BookCallPageConfig,
} from "@/components/seo/BookCallPageTemplate";

export const metadata: Metadata = {
  title: "AIIMS Nagpur vs AIIMS Mangalagiri Comparison & Cutoff | Mentskool",
  description: "Comparing AIIMS Nagpur (closing AIR ~1600) vs AIIMS Mangalagiri (closing AIR ~2400). Hospital bed count, metro connectivity, campus facilities, and internal PG quota.",
  keywords: ["aiims nagpur vs aiims mangalagiri", "aiims nagpur cutoff", "aiims mangalagiri cutoff", "is aiims nagpur better than mangalagiri", "aiims nagpur placement"],
  alternates: {
    canonical: "https://mentskool.com/aiims-nagpur-vs-aiims-mangalagiri-comparison",
  },
  openGraph: {
    title: "AIIMS Nagpur vs AIIMS Mangalagiri Comparison & Cutoff | Mentskool",
    description: "Comparing AIIMS Nagpur (closing AIR ~1600) vs AIIMS Mangalagiri (closing AIR ~2400). Hospital bed count, metro connectivity, campus facilities, and internal PG quota.",
    url: "https://mentskool.com/aiims-nagpur-vs-aiims-mangalagiri-comparison",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "AIIMS Nagpur vs Mangalagiri",
      },
    ],
  },
};

const config: BookCallPageConfig = {
  "slug": "aiims-nagpur-vs-aiims-mangalagiri-comparison",
  "breadcrumbLabel": "AIIMS Nagpur vs Mangalagiri",
  "examFocus": "NEET",
  "badgeText": "Phase-4 AIIMS Comparison • 2027",
  "h1Prefix": "AIIMS Nagpur vs AIIMS Mangalagiri Comparison:",
  "h1Highlight": "Cutoffs (AIR ~1500–2500), Campus Development & Clinical Load",
  "heroDescription": "Compare Phase-4 AIIMS institutes: AIIMS Nagpur (closing AIR ~1600, MIHAN SEZ metro location) vs AIIMS Mangalagiri (closing AIR ~2400, Guntur-Vijayawada highway): cutoffs, bed counts, and clinical training.",
  "metaTitle": "AIIMS Nagpur vs AIIMS Mangalagiri Comparison & Cutoff | Mentskool",
  "metaDescription": "Comparing AIIMS Nagpur (closing AIR ~1600) vs AIIMS Mangalagiri (closing AIR ~2400). Hospital bed count, metro connectivity, campus facilities, and internal PG quota.",
  "keywords": [
    "aiims nagpur vs aiims mangalagiri",
    "aiims nagpur cutoff",
    "aiims mangalagiri cutoff",
    "is aiims nagpur better than mangalagiri",
    "aiims nagpur placement"
  ],
  "serviceTitle": "1:1 AIIMS Nagpur vs Mangalagiri Target & Mock Diagnostic Call",
  "serviceDescription": "Evaluate your NEET mock scores, calculate exact cutoff gaps for this college, and build a 30-day comeback plan with a verified AIIMS doctor.",
  "quickStats": [
    {
      "label": "AIIMS Nagpur Cutoff",
      "value": "AIR 1500–1800",
      "hint": "Marks: 678–681/720"
    },
    {
      "label": "Mangalagiri Cutoff",
      "value": "AIR 2200–2600",
      "hint": "Marks: 672–675/720"
    },
    {
      "label": "Nagpur Hospital",
      "value": "960 Beds Ready",
      "hint": "Direct Metro Access"
    }
  ],
  "overviewHeading": "Key Takeaways: AIIMS Nagpur vs AIIMS Mangalagiri",
  "overviewIntro": "Both established under Phase-4 of PMSSY, AIIMS Nagpur and AIIMS Mangalagiri represent the fastest-developing new AIIMS, offering modern infrastructure and internal INI-CET PG quota benefits.",
  "overviewPoints": [
    {
      "title": "Cutoff Differential",
      "detail": "AIIMS Nagpur closes around AIR 1500–1800, while AIIMS Mangalagiri closes around AIR 2200–2600 in MCC AIQ counseling."
    },
    {
      "title": "Nagpur Metro & SEZ Advantage",
      "detail": "Located in MIHAN SEZ with direct Nagpur Metro station at the campus entrance, offering supreme urban connectivity."
    },
    {
      "title": "Mangalagiri Strategic Location",
      "detail": "Situated on the Guntur-Vijayawada highway, serving the populous capital region of Andhra Pradesh with growing clinical footfall."
    },
    {
      "title": "Equal PG Reservation",
      "detail": "Both institutes provide the coveted 50% institutional preference quota across all AIIMS hospitals in India."
    }
  ],
  "timelinePhases": [
    {
      "timeframe": "Minutes 0–10",
      "phaseTitle": "Mock Test Score Post-Mortem",
      "description": "Diagnose current mock scores, NCERT line-by-line accuracy, and negative marking in Physics and Bio.",
      "deliverables": [
        "Score breakdown",
        "Negative mark audit"
      ]
    },
    {
      "timeframe": "Minutes 10–25",
      "phaseTitle": "Subject Triage & NCERT Depth",
      "description": "Pinpoint high-weightage topics across Biology, Physical Chemistry, and Mechanics/Electrodynamics.",
      "deliverables": [
        "NCERT retention matrix",
        "Physics formula drill sheet"
      ]
    },
    {
      "timeframe": "Minutes 25–35",
      "phaseTitle": "OMR & Time-Boxing Strategy",
      "description": "Formulate a strict 3-hour exam hall timetable to avoid last-minute bubbling errors.",
      "deliverables": [
        "OMR time-split blueprint",
        "Speed-accuracy target plan"
      ]
    },
    {
      "timeframe": "Minutes 35–45",
      "phaseTitle": "30-Day Score Sheet Finalization",
      "description": "Finalize your daily problem targets with direct doctor mentorship on Mentskool.",
      "deliverables": [
        "Daily study roadmap",
        "Direct mentor messaging line"
      ]
    }
  ],
  "comparisonTitle": "Direct Comparison: AIIMS Nagpur vs AIIMS Mangalagiri",
  "comparisonSubtitle": "Evaluating cutoffs, infrastructure progress, and clinical exposure",
  "comparisonRows": [
    {
      "aspect": "Closing Rank",
      "genericCoaching": "Nagpur: AIR ~1650",
      "mentskool1on1": "Mangalagiri: AIR ~2400"
    },
    {
      "aspect": "Location Perks",
      "genericCoaching": "Nagpur MIHAN (Direct Metro station)",
      "mentskool1on1": "Mangalagiri NH-16 (Vijayawada-Guntur corridor)"
    },
    {
      "aspect": "Hospital Bed Capacity",
      "genericCoaching": "960 fully operational beds",
      "mentskool1on1": "750+ beds operational, expanding to 960"
    },
    {
      "aspect": "Internship Stipend",
      "genericCoaching": "₹30,070 per month",
      "mentskool1on1": "₹30,070 per month"
    }
  ],
  "sections": [
    {
      "heading": "Cutoff Trends Across MCC AIQ Rounds",
      "subheading": "Closing rank statistics for General, EWS, OBC, SC, and ST",
      "paragraphs": [
        "AIIMS Nagpur enjoys strong preference among students from Maharashtra, Gujarat, and central India due to its completed hospital blocks and metro access.",
        "AIIMS Mangalagiri is the top choice for meritorious students from Andhra Pradesh and Telangana who prefer central governance over local state colleges."
      ],
      "keyTakeaways": [
        {
          "title": "Nagpur Rank Target",
          "detail": "Requires roughly 680+ marks in NEET UG."
        },
        {
          "title": "Mangalagiri Rank Target",
          "detail": "Requires roughly 673+ marks in NEET UG."
        }
      ]
    },
    {
      "heading": "Hospital Infrastructure and Clinical Patient Load",
      "subheading": "Current OPD footfall, IPD occupancy, and surgical suites",
      "paragraphs": [
        "AIIMS Nagpur operates over 960 beds with high occupancy across trauma, oncology, and general surgery. Its outpatient department handles over 3,500 daily patients.",
        "AIIMS Mangalagiri operates modern modular operation theatres, dialysis centers, and pediatric intensive care units with rapidly expanding inpatient footfall."
      ],
      "keyTakeaways": [
        {
          "title": "Nagpur Connectivity",
          "detail": "Metro station enables smooth patient inflow from across Nagpur city."
        },
        {
          "title": "Mangalagiri Referral Base",
          "detail": "Directly accessible from Vijayawada and Guntur districts."
        }
      ]
    },
    {
      "heading": "Hostel Life, Sports and Modern Amenities",
      "subheading": "Residential quarters, dining messes, and student recreation",
      "paragraphs": [
        "Both campuses feature brand new multi-story residential towers with elevators, high-speed Wi-Fi, modern furniture, and attached washrooms in later years.",
        "Mess facilities cater to multi-regional cuisines, and sports complexes include synthetic basketball courts, cricket grounds, and indoor gymnasiums."
      ],
      "keyTakeaways": [
        {
          "title": "New Infrastructure",
          "detail": "Zero legacy infrastructure issues; everything built with modern hospital standards."
        },
        {
          "title": "Safety & Security",
          "detail": "24/7 security with full CCTV coverage."
        }
      ]
    },
    {
      "heading": "Counseling Decision Rule: How to Prioritize in MCC",
      "subheading": "Clear framework for ordering your choices",
      "paragraphs": [
        "If you are from Maharashtra, North India, or Central India, place AIIMS Nagpur first for its completed 960-bed hospital and metro connectivity.",
        "If you reside in Andhra Pradesh, Telangana, or Southern India, place AIIMS Mangalagiri first to stay closer to home while retaining the full AIIMS tag and PG quota."
      ],
      "keyTakeaways": [
        {
          "title": "Equal Academic Degree",
          "detail": "Both award the identical national AIIMS MBBS degree with 50% internal PG quota."
        },
        {
          "title": "Counseling Guidance",
          "detail": "Discuss your personal choice list with an AIIMS doctor on Mentskool."
        }
      ]
    }
  ],
  "bookingSteps": [
    {
      "step": "01",
      "title": "Submit NEET Mock Scores",
      "description": "Share your latest test results, subject scores, and negative marks."
    },
    {
      "step": "02",
      "title": "1:1 Doctor Diagnostic Call",
      "description": "Discuss admission benchmarks and cutoffs with a verified medical ranker."
    },
    {
      "step": "03",
      "title": "Execute 30-Day Comeback Plan",
      "description": "Follow weekly NCERT drills and full-length mock audits on Mentskool."
    }
  ],
  "faqs": [
    {
      "question": "Which is better: AIIMS Nagpur or AIIMS Mangalagiri?",
      "answer": "AIIMS Nagpur generally closes higher (AIR ~1600 vs AIR ~2400) due to its fully completed 960-bed hospital and direct metro station connectivity in MIHAN. AIIMS Mangalagiri is equally exceptional and preferred by students from Andhra Pradesh and Telangana."
    },
    {
      "question": "What rank is required for AIIMS Nagpur vs Mangalagiri?",
      "answer": "In MCC AIQ counseling, AIIMS Nagpur closes around AIR 1500 to 1800, while AIIMS Mangalagiri closes around AIR 2200 to 2600."
    },
    {
      "question": "Do AIIMS Nagpur and Mangalagiri have internal PG quota?",
      "answer": "Yes. Both institutes provide the 50% institutional preference quota across all AIIMS hospitals in India for INI-CET MD/MS admissions."
    },
    {
      "question": "What is the fee for MBBS at these Phase-4 AIIMS?",
      "answer": "The fee is identical across all AIIMS: approximately ₹5,856 for the entire 5.5-year course."
    },
    {
      "question": "How can 1:1 mentorship help me choose between AIIMS campuses?",
      "answer": "A verified AIIMS doctor on Mentskool evaluates your rank, home state preferences, and clinical training goals to help you finalize an optimal preference list."
    }
  ],
  "relatedLinks": [
    {
      "label": "AIIMS Raipur Cutoff Guide",
      "href": "/aiims-raipur-cutoff-and-clinical-exposure-review",
      "badge": "AIIMS Network"
    },
    {
      "label": "AIIMS Kalyani vs Deoghar Review",
      "href": "/aiims-kalyani-vs-aiims-deoghar-honest-review-2027",
      "badge": "New AIIMS"
    },
    {
      "label": "Best Mentorship for NEET",
      "href": "/neet-mentorship-program",
      "badge": "Doctor Guide"
    },
    {
      "label": "Score Stuck at 550 in NEET Mocks",
      "href": "/score-stuck-at-550-in-neet-mocks-gmc-breakthrough",
      "badge": "Score Booster"
    }
  ]
};

export default function Page() {
  return <BookCallPageTemplate config={config} />;
}
