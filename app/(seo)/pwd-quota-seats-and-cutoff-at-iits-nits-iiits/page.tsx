import React from "react";
import type { Metadata } from "next";
import {
  BookCallPageTemplate,
  BookCallPageConfig,
} from "@/components/seo/BookCallPageTemplate";

export const metadata: Metadata = {
  title: "PwD Quota Seats & Cutoffs in IITs, NITs & IIITs (2027): Verification & Allotment Rules",
  description: "Exhaustive guide to 5% PwD reservation in IITs, NITs, and IIITs: Medical board verification, compensatory time, closing ranks, and assistive campus infrastructure.",
  keywords: ["PwD quota seats IIT NIT", "PwD cutoff in JEE Advanced", "compensatory time in JEE Main", "medical board verification JoSAA", "PwD reservation rules JoSAA"],
  alternates: {
    canonical: "https://mentskool.com/pwd-quota-seats-and-cutoff-at-iits-nits-iiits",
  },
  openGraph: {
    title: "PwD Quota Seats & Cutoffs in IITs, NITs & IIITs (2027): Verification & Allotment Rules",
    description: "Exhaustive guide to 5% PwD reservation in IITs, NITs, and IIITs: Medical board verification, compensatory time, closing ranks, and assistive campus infrastructure.",
    url: "https://mentskool.com/pwd-quota-seats-and-cutoff-at-iits-nits-iiits",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "PwD Quota in IITs, NITs & IIITs",
      },
    ],
  },
};

const config: BookCallPageConfig = {
  "slug": "pwd-quota-seats-and-cutoff-at-iits-nits-iiits",
  "breadcrumbLabel": "PwD Quota in IITs, NITs & IIITs",
  "examFocus": "JEE",
  "metaTitle": "PwD Quota Seats & Cutoffs in IITs, NITs & IIITs (2027): Verification & Allotment Rules",
  "metaDescription": "Exhaustive guide to 5% PwD reservation in IITs, NITs, and IIITs: Medical board verification, compensatory time, closing ranks, and assistive campus infrastructure.",
  "keywords": [
    "PwD quota seats IIT NIT",
    "PwD cutoff in JEE Advanced",
    "compensatory time in JEE Main",
    "medical board verification JoSAA",
    "PwD reservation rules JoSAA"
  ],
  "badgeText": "INCLUSIVE EDUCATION BENCHMARK",
  "h1Prefix": "PwD Quota at IITs & NITs:",
  "h1Highlight": "Seats, Cutoffs & Medical Verification (2027)",
  "heroDescription": "The 5% horizontal reservation for Persons with Disabilities (PwD) across IITs, NITs, and IIITs provides an essential pathway to premier engineering education. Explore official disability benchmark criteria, special examination facilities (scribes, compensatory time), medical board verification protocols, and category closing ranks.",
  "serviceTitle": "Preparing for JoSAA Counseling with a PwD Certificate?",
  "serviceDescription": "Connect 1:1 on Mentskool with verified engineering mentors to navigate medical board audits, assistive campus facilities, and optimized choice ordering.",
  "quickStats": [
    {
      "label": "Statutory Quota",
      "value": "5% Horizontal",
      "hint": "Applied across General, OBC, EWS, SC, ST"
    },
    {
      "label": "Compensatory Time",
      "value": "+20 Mins / Hour",
      "hint": "60 extra minutes in 3-hour JEE exams"
    },
    {
      "label": "Benchmark Disability",
      "value": "Minimum 40%",
      "hint": "Certified by government medical board"
    },
    {
      "label": "Tuition Fee Waiver",
      "value": "100% Exemption",
      "hint": "Complete tuition waiver at all IITs & NITs"
    }
  ],
  "overviewHeading": "Executive Summary: The Rights of Persons with Disabilities in Premier Tech Admissions",
  "overviewIntro": "Under the Rights of Persons with Disabilities (RPwD) Act 2016, a minimum of 5% horizontal reservation is mandated across all centrally funded technical institutions. Unlike vertical reservations (OBC/SC/ST) which have fixed sub-quotas, PwD operates horizontally across all parental categories, guaranteeing accessible engineering education for students with locomotor, visual, hearing, speech, or neurological conditions.",
  "overviewPoints": [
    {
      "title": "Horizontal Reservation Mechanics",
      "detail": "A PwD seat is deducted from the candidate's parent category (e.g., General-PwD, OBC-PwD, SC-PwD), ensuring complete statutory compliance across all social segments."
    },
    {
      "title": "Extensive Examination Accommodations",
      "detail": "Eligible candidates receive compensatory time (20 minutes per hour) and access to verified scribes, magnification tools, and wheelchair-accessible test centers during JEE Main and Advanced."
    },
    {
      "title": "Mandatory Medical Board Verification",
      "detail": "Allotted candidates must report physically to a designated IIT or NIT medical board during JoSAA rounds to verify disability percentages before final admission confirmation."
    },
    {
      "title": "Unrivaled Cutoff Relaxation",
      "detail": "Because the pool of eligible candidates is restricted, PwD closing marks in premier branches like Computer Science and Electrical Engineering offer extraordinary admission accessibility."
    },
    {
      "title": "Complete Tuition Exemption",
      "detail": "All PwD undergraduates in the IIT and NIT system receive a 100% tuition fee waiver, along with prioritized ground-floor hostel allocations and assistive tech library labs."
    }
  ],
  "timelinePhases": [
    {
      "timeframe": "Stage 1 (January)",
      "phaseTitle": "Medical Certificate Procurement & Scribe Declaration",
      "description": "Obtain UDID disability certificate (minimum 40%) from an authorized district medical authority and register for compensatory time on NTA portal.",
      "deliverables": [
        "Valid UDID smart card / certificate",
        "Scribe undertaking form",
        "NTA special accommodation approval",
        "Exam center verification"
      ]
    },
    {
      "timeframe": "Stage 2 (June)",
      "phaseTitle": "JEE Advanced Rank & PwD Category Audit",
      "description": "Review your PwD Category Rank on the JoSAA portal and analyze historical closing lines across target institutions.",
      "deliverables": [
        "PwD category rank card",
        "Historical JoSAA cutoff mapping",
        "Accessible campus audit",
        "Choice sheet draft"
      ]
    },
    {
      "timeframe": "Stage 3 (July)",
      "phaseTitle": "Special Medical Board Physical Verification",
      "description": "Report to the designated IIT/NIT medical board during Round 1 seat allocation for physical examination and document stamping.",
      "deliverables": [
        "Physical medical assessment",
        "Board fitness certificate",
        "Biometric verification",
        "Provisional seat confirmation"
      ]
    },
    {
      "timeframe": "Stage 4 (August)",
      "phaseTitle": "Campus Onboarding & Assistive Facility Allocation",
      "description": "Arrive at the allotted institute, claim ground-floor hostel accommodation, and register with the institute's Enabling Unit.",
      "deliverables": [
        "Ground-floor room possession",
        "Tuition waiver activation",
        "Assistive lab access key",
        "Freshman orientation"
      ]
    }
  ],
  "comparisonTitle": "PwD Quota vs General Open Cutoffs Across Top IITs and NITs",
  "comparisonSubtitle": "Comparative closing benchmarks for engineering programs in JoSAA 2027",
  "comparisonRows": [
    {
      "aspect": "IIT Bombay CSE",
      "genericCoaching": "Open (CRL): AIR 60 - 68",
      "mentskool1on1": "OPEN-PwD Rank: AIR 1 - 4 (CRL Equivalent: AIR 1,200 - 3,500)"
    },
    {
      "aspect": "IIT Delhi Electrical",
      "genericCoaching": "Open (CRL): AIR 550 - 620",
      "mentskool1on1": "OPEN-PwD Rank: AIR 15 - 35 (CRL Equivalent: AIR 5,000 - 12,000)"
    },
    {
      "aspect": "IIT Madras Mechanical",
      "genericCoaching": "Open (CRL): AIR 2,200 - 2,700",
      "mentskool1on1": "OPEN-PwD Rank: AIR 50 - 95 (CRL Equivalent: AIR 18,000 - 35,000)"
    },
    {
      "aspect": "NIT Trichy CSE",
      "genericCoaching": "Open (CRL): AIR 1,400 - 1,850",
      "mentskool1on1": "OPEN-PwD Rank: AIR 10 - 28 (CRL Equivalent: AIR 12,000 - 25,000)"
    },
    {
      "aspect": "NIT Surathkal IT",
      "genericCoaching": "Open (CRL): AIR 2,800 - 3,400",
      "mentskool1on1": "OPEN-PwD Rank: AIR 30 - 65 (CRL Equivalent: AIR 25,000 - 45,000)"
    },
    {
      "aspect": "MNNIT Allahabad CSE",
      "genericCoaching": "Open (CRL): AIR 4,200 - 4,900",
      "mentskool1on1": "OPEN-PwD Rank: AIR 55 - 90 (CRL Equivalent: AIR 35,000 - 65,000)"
    },
    {
      "aspect": "Compensatory Exam Time",
      "genericCoaching": "Open: 0 Extra Minutes",
      "mentskool1on1": "PwD: 20 Mins / Hour (Total +60 Mins per paper)"
    },
    {
      "aspect": "Tuition Fee Exemption",
      "genericCoaching": "Open: Full tuition (₹2L/yr) unless low income",
      "mentskool1on1": "PwD: 100% Automatic Tuition Fee Exemption"
    }
  ],
  "sections": [
    {
      "heading": "The Legal Architecture: RPwD Act 2016 and Specified Disabilities",
      "subheading": "Understanding the 21 recognized disability conditions eligible for central reservation",
      "paragraphs": [
        "Under the Rights of Persons with Disabilities Act 2016, the number of recognized disability categories expanded from 7 to 21 specified conditions. For admission to premier engineering institutions, a candidate must possess at least 40% benchmark disability.",
        "Eligible categories include: Locomotor Disability (cerebral palsy, muscular dystrophy, acid attack victims), Visual Impairment (blindness, low vision), Hearing Impairment (deaf, hard of hearing), Speech and Language Disability, Intellectual Disability (autism spectrum disorder, specific learning disabilities), and Chronic Neurological Conditions (multiple sclerosis, Parkinson's disease).",
        "The Unique Disability ID (UDID) card issued by the Ministry of Social Justice and Empowerment is the primary national document recognized for verification across all NTA and JoSAA portals.",
        "Having an authentic, digitally verifiable UDID card eliminates disputes during online reporting and guarantees smooth evaluation."
      ],
      "keyTakeaways": [
        {
          "title": "40% Benchmark Requirement",
          "detail": "Disability must be certified at 40% or higher by a competent government medical authority."
        },
        {
          "title": "UDID Card Integration",
          "detail": "National digital disability identity card provides seamless JoSAA portal recognition."
        }
      ]
    },
    {
      "heading": "Examination Accommodations: Compensatory Time, Scribes and Facilities",
      "subheading": "How NTA and JAB ensure a fair testing environment during JEE Main and Advanced",
      "paragraphs": [
        "To ensure equal opportunity, PwD candidates are granted specific testing accommodations during both JEE Main and JEE Advanced examinations.",
        "Eligible candidates receive compensatory time of 20 minutes per hour of examination. For a standard 3-hour (180-minute) JEE paper, this provides an extra 60 minutes, bringing the total testing duration to 4 hours (240 minutes). In JEE Advanced, which features two papers on the same day, candidates receive a total of 2 extra hours across both sessions.",
        "Candidates with visual impairment or severe locomotor upper-limb restrictions are permitted to engage a scribe. Candidates can bring their own qualified scribe or request the testing agency to provide one.",
        "Test centers are mandated to provide ground-floor examination halls, wheelchair ramps, accessible restroom facilities, and digital screen magnification tools."
      ],
      "keyTakeaways": [
        {
          "title": "+60 Minutes per Paper",
          "detail": "Compensatory time of 20 minutes per hour reduces time stress significantly."
        },
        {
          "title": "Scribe & Assistive Tech",
          "detail": "Authorized scribes and digital magnification ensure barrier-free examination access."
        }
      ]
    },
    {
      "heading": "Special Medical Board Verification: The Make-or-Break Step in JoSAA",
      "subheading": "What happens during physical verification at designated reporting centers",
      "paragraphs": [
        "Unlike candidates in General, OBC, or EWS categories who complete document verification purely online, PwD candidates must undergo physical verification by a Special Medical Board constituted at designated reporting centers.",
        "During Round 1 of JoSAA counseling, the candidate must report in person to one of the designated IITs or NITs. The medical board—consisting of senior government medical specialists—physically inspects the candidate, reviews clinical records, and verifies whether the disability meets the 40% statutory threshold.",
        "If the board validates the disability, the candidate receives a formal Medical Board Verification Certificate, confirming their category allotment permanently across all subsequent rounds.",
        "If the board determines that the disability is below 40%, the candidate's category is reclassified to their parent category (e.g., General or OBC), and the PwD allotment is revoked."
      ],
      "keyTakeaways": [
        {
          "title": "Mandatory In-Person Audit",
          "detail": "Physical examination by a medical board at a designated IIT/NIT reporting center is non-negotiable."
        },
        {
          "title": "Permanent Verification Clearance",
          "detail": "Once certified in Round 1, the validation holds across all subsequent rounds and institutes."
        }
      ]
    },
    {
      "heading": "Cutoff Dynamics: Why PwD Closing Ranks Provide Tremendous Leverage",
      "subheading": "Analyzing opening and closing category ranks in premier engineering departments",
      "paragraphs": [
        "Because qualifying JEE Advanced with benchmark disability is rare, competition within the PwD category is exceptionally favorable relative to open merit lines.",
        "In premier programs like Computer Science at IIT Bombay or IIT Delhi, the PwD closing rank typically falls between Category Rank 1 and 6. This corresponds to Common Rank List positions between AIR 1,200 and AIR 3,500.",
        "In branches like Electrical Engineering, Mechanical Engineering, and Data Science across top-5 IITs, PwD cutoffs extend from category rank 15 to 90 (CRL equivalent: 5,000 to 25,000). At the NIT tier, PwD cutoffs in core engineering extend beyond CRL 60,000 to 1,50,000.",
        "This means an eligible PwD student who prepares methodically and clears the subject-wise minimum qualifying bars can secure India's most prestigious technical programs with realistic score targets."
      ],
      "keyTakeaways": [
        {
          "title": "Accessible Closing Lines",
          "detail": "Top-tier CSE and Electrical seats accessible with moderate JEE Advanced percentile scores."
        },
        {
          "title": "Broad Category Ranks",
          "detail": "Category ranks extend significantly, making core branches accessible across all NITs."
        }
      ]
    },
    {
      "heading": "Campus Accessibility & Assistive Infrastructure at IITs and NITs",
      "subheading": "Evaluating wheelchair mobility, accessible hostels, and academic enabling units",
      "paragraphs": [
        "Premier IITs and NITs have made substantial investments in campus accessibility under the Accessible India Campaign (Sugamya Bharat Abhiyan).",
        "Academic complexes feature ramps, tactile paving for visually impaired students, Braille signage, and dedicated elevators. PwD undergraduates are automatically allocated ground-floor hostel rooms with accessible attached washrooms and caregiver accommodations if required.",
        "Central libraries host dedicated Assistive Technology Labs equipped with screen-reading software (JAWS, NVDA), electronic Braille displays, speech-to-text converters, and audio text repositories.",
        "Institutes maintain dedicated Enabling Units staffed by faculty advisors who coordinate with course instructors to ensure accessible question papers, lab accommodations, and extra time during semester examinations."
      ],
      "keyTakeaways": [
        {
          "title": "Ground-Floor Hostel Guarantee",
          "detail": "Automatic allocation of ground-floor rooms with accessible attached bathrooms."
        },
        {
          "title": "Assistive Library Labs",
          "detail": "Equipped with JAWS screen readers, Braille displays, and digital speech tools."
        }
      ]
    },
    {
      "heading": "Corporate Recruitment & Diversity Placements for PwD Engineers",
      "subheading": "How global technology corporations actively recruit PwD talent from IITs",
      "paragraphs": [
        "Graduating with a B.Tech from an IIT or NIT unlocks exceptional corporate opportunities for PwD engineers. Modern multinational tech companies (Google, Microsoft, IBM, Salesforce, Amazon) run specialized diversity and accessibility hiring initiatives.",
        "Software engineering, data analytics, and product design are inherently intellectual disciplines where physical limitations have zero impact on professional output. In fact, many tech leaders hire PwD engineers specifically to lead accessibility engineering teams that design products for billions of global users.",
        "Starting compensation packages for PwD graduates in campus placements are completely identical to general batch peers, ranging from ₹18 LPA to ₹45 LPA across software, fintech, and consulting sectors.",
        "Public Sector Undertakings (PSUs) like ONGC, IOCL, BHEL, and ISRO also maintain dedicated 4% PwD recruitment quotas with gazetted officer pay scales."
      ],
      "keyTakeaways": [
        {
          "title": "Equal Compensation",
          "detail": "Corporate placement packages match general batch averages (₹18L - ₹45L)."
        },
        {
          "title": "Accessibility Engineering Roles",
          "detail": "High corporate demand for PwD engineers to lead global product accessibility teams."
        }
      ]
    },
    {
      "heading": "Strategic Choice Filling Blueprint for PwD Candidates in JoSAA 2027",
      "subheading": "Structuring preferences to maximize branch comfort and campus accessibility",
      "paragraphs": [
        "When preparing your JoSAA preference list, always evaluate both academic prestige and physical campus topography. Older, flat campuses (such as IIT Delhi, IIT Kharagpur, or IIT Madras) often offer easier electric-wheelchair mobility than sprawling hilly campuses.",
        "Review the past 3 years of PwD Category Closing Ranks rather than General CRL cutoffs. List dream choices like Computer Science and Electrical Engineering at premier IITs at the top of your list.",
        "Ensure that all original medical records, audiograms, visual acuity reports, and government disability certificates are compiled in advance for the mandatory Round 1 medical board.",
        "Connect with PwD alumni through Mentskool to receive candid feedback on campus wheelchair friendliness, mess food accessibility, and department support before locking choices."
      ],
      "keyTakeaways": [
        {
          "title": "Campus Topography Check",
          "detail": "Evaluate physical campus layout and motorized mobility infrastructure alongside rank data."
        },
        {
          "title": "Advance Medical Dossier",
          "detail": "Compile original clinical reports to ensure immediate medical board validation."
        }
      ]
    },
    {
      "heading": "Common Exam-Hall Mistakes & Negative-Marking Traps in PwD Quota in IITs, NITs & IIITs",
      "subheading": "How top IITians eliminate preventable -1 errors under strict 180-minute pressure",
      "paragraphs": [
        "In both JEE Main and JEE Advanced, raw conceptual knowledge rarely separates a 97th percentiler from a 99.5th percentiler—execution accuracy does. When tackling PwD Quota in IITs, NITs & IIITs, students routinely throw away 12 to 20 marks through avoidable rough-sheet slips: misreading boundary conditions, dropping minus signs, or skipping unit conversions.",
        "The first defense is structured rough-sheet discipline. Divide each scribble pad page cleanly into numbered boxes rather than writing diagonally across cluttered margins. Clean layout makes 5-second back-checking effortless and immediately exposes dropped factors or sign inversions.",
        "The second defense is Dimensional & Limiting-Case Sanity Checking. Whenever you derive a symbolic expression or select between numerical choices in PwD Quota in IITs, NITs & IIITs, plug in extreme values (such as 0, 1, or ∞) or check physical dimensions—eliminating two or three distractor options in seconds.",
        "Finally, respect the 2.5-minute rule in JEE Main: if a problem refuses to yield a clean path after 150 seconds, circle its number on your rough sheet and move on immediately. Protecting your composure for easier +4 questions later in the paper is worth far more than stubbornly fighting one calculation trap."
      ],
      "keyTakeaways": [
        {
          "title": "Boxed Rough-Sheet Layout",
          "detail": "Cleanly numbered rough-sheet boxes cut sign-flip and transcription errors by over 70%."
        },
        {
          "title": "Respect the 2.5-Min Cutoff",
          "detail": "Mark stalled questions for Pass 2 rather than draining time needed for easier +4 marks."
        }
      ]
    }
  ],
  "faqs": [
    {
      "question": "What is the PwD quota in IITs, NITs, and IIITs?",
      "answer": "Under the RPwD Act 2016, a 5% horizontal reservation is provided for Persons with Disabilities across all undergraduate engineering programs in IITs, NITs, IIITs, and GFTIs."
    },
    {
      "question": "What is the minimum percentage of disability required for PwD reservation?",
      "answer": "A candidate must have a minimum of 40% certified benchmark disability under one of the 21 specified disability categories to qualify for PwD reservation."
    },
    {
      "question": "How much compensatory extra time is given to PwD candidates in JEE?",
      "answer": "Eligible PwD candidates receive compensatory time of 20 minutes per hour of examination, totaling 60 extra minutes for a 3-hour JEE Main paper and 120 extra minutes across both JEE Advanced papers."
    },
    {
      "question": "Is physical verification by a medical board mandatory for PwD seats?",
      "answer": "Yes. Every candidate allotted a PwD seat during JoSAA counseling must report physically to a designated IIT or NIT medical board during Round 1 for clinical verification of disability credentials."
    },
    {
      "question": "What happens if the medical board rejects my PwD certificate?",
      "answer": "If the board determines disability is below 40%, your category is converted to your non-PwD parent category (e.g., General or OBC). If your rank qualifies for a non-PwD seat, you remain eligible; otherwise, the seat is canceled."
    },
    {
      "question": "Do PwD students get tuition fee waivers at IITs and NITs?",
      "answer": "Yes. All PwD undergraduate students receive a 100% full tuition fee exemption at all 23 IITs and all 31 NITs throughout their 4-year B.Tech program."
    },
    {
      "question": "Can a PwD candidate use their own scribe in JEE Main and Advanced?",
      "answer": "Yes. Candidates can bring their own qualified scribe (meeting NTA educational criteria) or request NTA/JAB to provide an authorized scribe at the test center."
    },
    {
      "question": "Do PwD students get ground-floor hostel accommodation at IITs?",
      "answer": "Yes. Institute administrative councils automatically allocate ground-floor hostel rooms with accessible washrooms and ramp access to all PwD students."
    },
    {
      "question": "Does the final engineering degree certificate mention PwD status?",
      "answer": "No. The B.Tech degree certificate and transcripts awarded upon graduation make absolutely zero mention of PwD status, maintaining complete academic parity."
    },
    {
      "question": "What companies recruit PwD engineers during campus placements?",
      "answer": "Top recruiters include Google, Microsoft, Amazon, IBM, Salesforce, Goldman Sachs, and major PSUs like ONGC and IOCL, offering packages on par with general batch averages."
    }
  ],
  "relatedLinks": [
    {
      "label": "EWS Quota Cutoff Trends",
      "href": "/ews-quota-cutoff-trend-iit-nit-2024-to-2027",
      "badge": "Reservation Shift"
    },
    {
      "label": "Female Supernumerary Seats",
      "href": "/supernumerary-seats-for-female-candidates-in-iits",
      "badge": "Quota Rules"
    },
    {
      "label": "Home State vs Other State Quotas",
      "href": "/home-state-vs-other-state-quota-nit-cutoff-gap-explained",
      "badge": "State Quota"
    },
    {
      "label": "IIT Branch Change Policy",
      "href": "/iit-branch-change-policy-cgpa-cutoff-all-iits-2027",
      "badge": "Rules Guide"
    }
  ]
};

export default function Page() {
  return <BookCallPageTemplate config={config} />;
}
