import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  AlertCircle,
  CheckCircle2,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  FileCheck,
  UserCheck,
  Camera,
  Layers,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { SeoMentorFunnel } from "@/components/seo/SeoMentorFunnel";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "NEET 2027 Application Form Guide: Eligibility Codes (01-07), Documents & Registration",
  description:
    "Complete step-by-step NEET UG 2027 application form guide. Decipher qualifying examination codes 01 to 07, document specifications, thumb impression rules, category validity, and avoidance of form rejection.",
  keywords: [
    "neet 2027 application form",
    "neet eligibility codes 01 to 07",
    "documents required for neet 2027 registration",
    "neet ug 2027 photo specifications",
    "neet 2027 qualification code explained",
    "nta neet form filling step by step",
    "neet 2027 correction window",
  ],
  alternates: {
    canonical: "https://mentskool.com/neet-2027-application-form-guide",
  },
  openGraph: {
    title: "NEET 2027 Application Form Guide & Eligibility Codes Decoded",
    description:
      "Avoid registration disqualification with our master guide on NEET 2027 qualifying codes 01-07, thumb impressions, postcard photo criteria, and category documentation.",
    url: "https://mentskool.com/neet-2027-application-form-guide",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "NEET 2027 Application Form Guide - Mentskool",
      },
    ],
  },
};

const faqs: FaqItem[] = [
  {
    question: "Which qualifying code should a Class 12 appearing student select for NEET 2027?",
    answer:
      "A candidate appearing for their Class 12 Senior Secondary Board Examination in 2027 must strictly select Code 01. Even if your board results are awaited when filling out the online application in February or March 2027, Code 01 is legally designated for appearing candidates. Proof of passing with mandatory PCB aggregate percentages will be verified during counseling.",
  },
  {
    question: "Which qualification code is applicable for NEET droppers and repeaters?",
    answer:
      "Droppers who completed Class 12 from CBSE, ICSE, or State Boards with Physics, Chemistry, Biology/Biotechnology, and English must choose Code 02. If you completed a pre-university examination (like 2-year PUC in Karnataka), Code 02 or Code 03 may apply depending on state regulations. Code 02 is the universal code for completed 10+2 secondary school certificate holders.",
  },
  {
    question: "What are the exact photo specifications for the NEET 2027 application form?",
    answer:
      "NTA mandates two photographs: 1) Passport-size photograph (10 KB to 200 KB in JPG/JPEG) taken with 80% face coverage, white background, visible ears, no caps or tinted spectacles. The name of the candidate and the date of taking the photograph must be printed at the bottom. 2) Postcard-size photograph (4”x6”, 10 KB to 200 KB) with identical background and label formatting.",
  },
  {
    question: "How should thumb and finger impressions be submitted on the NTA NEET portal?",
    answer:
      "Candidates must provide clear impressions of all ten fingers (left and right hands: thumbs, index, middle, ring, and little fingers) on plain white paper using blue ink. The scanned file must be in JPG format between 10 KB and 200 KB. Smudged or overlapping fingerprint impressions are a primary trigger for NTA rejection notices.",
  },
  {
    question: "Is Aadhaar card mandatory for NEET 2027 application registration?",
    answer:
      "While Aadhaar verification via DigiLocker or UIDAI direct authentication is the smoothest method, it is not mandatory. If you do not possess an Aadhaar card or prefer not to use it, you may authenticate your identity using a valid Passport, PAN Card, Voter ID, or other government-authorized photo identity document with prior manual scrutiny at the exam centre.",
  },
  {
    question: "What is the qualifying percentage requirement in Class 12 for NEET UG?",
    answer:
      "General/UR category candidates must achieve a minimum aggregate of 50% marks in Physics, Chemistry, and Biology/Biotechnology combined in Class 12, as well as pass English individually. For OBC-NCL, SC, and ST candidates, the minimum aggregate requirement is 40%. For PwD candidates in General category, the threshold is 45%.",
  },
  {
    question: "Can private candidates or candidates with Biology as an additional subject apply for NEET 2027?",
    answer:
      "Yes. Following Supreme Court and National Medical Commission (NMC) directives, students who pursued Biology/Biotechnology as an additional or optional subject after completing Class 12 or via open schooling (NIOS/State Open School) are legally eligible to sit for NEET UG, subject to ongoing final judicial ratifications.",
  },
];

export default function Neet2027ApplicationFormGuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        name: "Mentskool",
        url: "https://mentskool.com",
        logo: "https://mentskool.com/logo.png",
      },
      {
        "@type": "Article",
        headline: "NEET 2027 Application Form Guide: Eligibility Codes (01 to 07) & Step-by-Step Registration",
        description:
          "Authoritative, in-depth blueprint on NEET 2027 application form filling, eligibility codes 01-07, document compression guidelines, finger impression protocols, and category certificate timelines.",
        url: "https://mentskool.com/neet-2027-application-form-guide",
        author: {
          "@type": "Organization",
          name: "Mentskool Medical Advisory Council",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-white selection:bg-emerald-500/30 selection:text-emerald-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroGridBackground />

      <main className="relative z-10 pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SeoBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "NEET Mentorship", href: "/neet-mentorship" },
              {
                label: "NEET 2027 Application Form Guide",
                href: "/neet-2027-application-form-guide",
              },
            ]}
          />

          {/* Hero Section */}
          <header className="mt-8 mb-12 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <ShieldCheck className="w-4 h-4" />
              NTA NEET UG 2027 Official Application Directive
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight">
              NEET 2027 Application Form Guide:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                Eligibility Codes 01 to 07 & Registration Protocol
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Over 45,000 medical aspirants face application rejections, delayed admit cards, or catastrophic counseling disqualifications every single year due to minor documentation blunders, wrong qualifying examination codes, and unverified reservation certificates. Master every nuance of the NEET UG 2027 registration lifecycle.
            </p>
          </header>

          {/* Direct Answer Box */}
          <section className="mb-14 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 backdrop-blur-md p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400 shrink-0">
                <FileCheck className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-emerald-300 mb-2">
                  Executive Summary: Critical NEET 2027 Form Rules at a Glance
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  The National Testing Agency (NTA) will host registration on <strong className="text-white">exams.nta.ac.in/NEET</strong> between <strong className="text-emerald-300">early February and mid-March 2027</strong>. Class 12 appearing students must choose <strong className="text-white">Code 01</strong>; droppers from regular boards must choose <strong className="text-white">Code 02</strong>. Both passport and 4&quot;x6&quot; postcard photographs require a clean white background with printed name and date. Central OBC-NCL and Gen-EWS certificates must be issued on or after <strong className="text-emerald-300">April 1, 2026</strong> for counseling validity.
                </p>
              </div>
            </div>
          </section>

          {/* Section 1: Decoding Eligibility Codes 01 to 07 */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Layers className="w-7 h-7 text-emerald-400" />
              NEET Qualifying Examination Codes (01 to 07) Decoded
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Choosing the incorrect qualifying code is the most frequent blunder committed by NEET aspirants. While an erroneous code does not permanently cancel your test seat, it triggers discrepancy notices during MCC (Medical Counselling Committee) state and central allotment verifications. Below is the definitive legal decoding of all seven NTA codes:
            </p>

            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/60 my-6">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-800/80 text-slate-200 border-b border-slate-700 font-semibold">
                  <tr>
                    <th className="p-4">Code</th>
                    <th className="p-4">Candidate Academic Profile</th>
                    <th className="p-4">Mandatory Board / Course Details</th>
                    <th className="p-4">Crucial Verification Condition</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-emerald-400">Code 01</td>
                    <td className="p-4 font-medium text-white">Class 12 Appearing (2027)</td>
                    <td className="p-4">Students appearing for Class 12 Board exams in 2027 whose results are awaited.</td>
                    <td className="p-4 text-xs text-slate-400">Must produce qualifying mark sheets (50% PCB aggregate) during counseling.</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-emerald-400">Code 02</td>
                    <td className="p-4 font-medium text-white">Class 12 Passed (Droppers/Repeaters)</td>
                    <td className="p-4">Completed 10+2 from CBSE, CISCE, or State Higher Secondary Boards with PCB & English.</td>
                    <td className="p-4 text-xs text-slate-400">Universal dropper code for regular schooling boards in India.</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-emerald-400">Code 03</td>
                    <td className="p-4 font-medium text-white">Intermediate / Pre-Degree Exam</td>
                    <td className="p-4">Passed Intermediate / Pre-Degree Examination in Science from an Indian University / Board.</td>
                    <td className="p-4 text-xs text-slate-400">Commonly used for State Intermediate boards (e.g., AP/Telangana Inter, Pre-degree).</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-emerald-400">Code 04</td>
                    <td className="p-4 font-medium text-white">Pre-Professional / Pre-Medical Exam</td>
                    <td className="p-4">Passed Pre-professional/Pre-medical examination after passing Higher Secondary.</td>
                    <td className="p-4 text-xs text-slate-400">Course must include practical tests in Physics, Chemistry, and Biology.</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-emerald-400">Code 05</td>
                    <td className="p-4 font-medium text-white">First Year of B.Sc. (3-Year Degree)</td>
                    <td className="p-4">Currently studying in Year 1 of B.Sc. with Physics, Chemistry, Biology/Biotech.</td>
                    <td className="p-4 text-xs text-slate-400">Must have also passed Class 12 earlier with required subjects and percentages.</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-emerald-400">Code 06</td>
                    <td className="p-4 font-medium text-white">Completed B.Sc. Degree Examination</td>
                    <td className="p-4">Passed B.Sc. examination from an Indian University with at least two required subjects.</td>
                    <td className="p-4 text-xs text-slate-400">Prior 10+2 examination must have satisfied PCB criteria unconditionally.</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-emerald-400">Code 07</td>
                    <td className="p-4 font-medium text-white">Foreign / International Equivalent</td>
                    <td className="p-4">Passed any other examination equivalent to the intermediate science examination of an Indian University.</td>
                    <td className="p-4 text-xs text-slate-400">AIU (Association of Indian Universities) equivalence certificate required for NRI/OCI.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: Complete Document Checklist & Formatting Specs */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Camera className="w-7 h-7 text-emerald-400" />
              Scanned Documents Checklist & Precision Compression Specs
            </h2>
            <p className="text-slate-300 leading-relaxed">
              The NTA document upload system rejects image uploads that do not conform strictly to specified dimensions, file extensions, and byte sizes. Keep these exact scanned digital assets ready on a secure desktop drive prior to initiating your submission:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-4">
                <div className="flex items-center gap-3 text-emerald-400 font-semibold text-lg">
                  <UserCheck className="w-5 h-5" />
                  Passport & Postcard Photo Directives
                </div>
                <ul className="text-sm text-slate-300 space-y-2.5">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                    <span><strong>Passport Photo:</strong> 10 KB to 200 KB in JPG format. 80% face coverage, no mask, clear white backdrop.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                    <span><strong>Postcard Photo (4x6 inch):</strong> 10 KB to 200 KB JPG. Name of candidate and capture date printed at base.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                    <span><strong>No Spectacles Rule:</strong> If you routinely wear power glasses, clear transparent non-reflective lenses are permitted. Tinted/sunglass frames cause outright rejection.</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-4">
                <div className="flex items-center gap-3 text-teal-400 font-semibold text-lg">
                  <FileText className="w-5 h-5" />
                  Signatures, Fingerprints & Certificates
                </div>
                <ul className="text-sm text-slate-300 space-y-2.5">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 mt-1 shrink-0" />
                    <span><strong>Candidate Signature:</strong> 4 KB to 30 KB JPG on plain white sheet in black or dark blue ink. Running handwriting only; capital letter signatures are invalid.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 mt-1 shrink-0" />
                    <span><strong>All 10 Fingers & Thumbs:</strong> 10 KB to 200 KB JPG. Left and right thumb and 8 fingers stamped cleanly in horizontal sequence with blue ink.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 mt-1 shrink-0" />
                    <span><strong>Category / PwD Certificate:</strong> 50 KB to 300 KB PDF. SC/ST certificates have lifetime validity; Central OBC-NCL & Gen-EWS certificates must be current.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3: Step-by-Step Registration Lifecycle */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Calendar className="w-7 h-7 text-emerald-400" />
              The 5-Step Application Submission Lifecycle
            </h2>
            <div className="space-y-4">
              <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/60">
                <div className="text-emerald-400 font-mono text-sm font-bold">Step 1: Identity Generation & DigiLocker Pairing</div>
                <h3 className="text-lg font-bold text-white mt-1">Portal Account Creation</h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  Navigate to <code>exams.nta.ac.in/NEET</code>. Choose your identity authentication medium (DigiLocker, ABC ID, Aadhaar OTP, or Passport). Enter your full name, father’s name, mother’s name, date of birth, gender, and nationality exactly matching your Class 10 Passing Certificate. Note down your generated 12-digit Application Number immediately.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/60">
                <div className="text-emerald-400 font-mono text-sm font-bold">Step 2: Demographic & Exam Medium Selection</div>
                <h3 className="text-lg font-bold text-white mt-1">Question Paper Medium & Exam City Preferences</h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  Carefully select your examination medium. English question papers are provided in English only; regional language selections (Hindi, Assamese, Bengali, Gujarati, Kannada, Malayalam, Marathi, Odia, Punjabi, Tamil, Telugu, Urdu) are provided as bilingual booklets (English + chosen language). Choose two preferred test cities strictly within your present or permanent address state.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/60">
                <div className="text-emerald-400 font-mono text-sm font-bold">Step 3: Academic Qualifications & Code Entry</div>
                <h3 className="text-lg font-bold text-white mt-1">Entering Class 10, 11, and 12 Marks</h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  Enter school name, board roll number, passing year, and marks obtained in Class 10 and Class 11. In the Class 12 section, select your qualifying code (Code 01 for 2027 appearing, Code 02 for droppers) and enter marks obtained or expected board registration roll number.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/60">
                <div className="text-emerald-400 font-mono text-sm font-bold">Step 4: Image & Document Repository Upload</div>
                <h3 className="text-lg font-bold text-white mt-1">Asset Verification</h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  Upload your cropped passport photo, 4x6 postcard photo, signature, left-right 10-finger impressions, and address proof documents. Check the preview window to ensure no file was corrupted, skewed, or blurred during compression.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/60">
                <div className="text-emerald-400 font-mono text-sm font-bold">Step 5: Fee Payment & Confirmation Page Archival</div>
                <h3 className="text-lg font-bold text-white mt-1">Payment Gateway & Confirmation Slip</h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  Submit the online examination fee via UPI, Net Banking, or Credit/Debit Card (approx. ₹1,700 for General, ₹1,600 for Gen-EWS/OBC-NCL, ₹1,000 for SC/ST/PwD). Immediately download at least 4 physical printouts of the <strong>Confirmation Page</strong>. Medical college admission committees require the original printed confirmation slip during final document scrutiny.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Critical Warnings to Prevent Cancellation */}
          <section className="mb-16 rounded-2xl border border-red-500/20 bg-red-950/10 p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3 text-red-400 font-bold text-lg">
              <AlertCircle className="w-6 h-6 shrink-0" />
              Four Disqualifying Pitfalls That Cost Candidates Their NEET Seat
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-300 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <strong className="text-white block mb-1">State OBC vs Central OBC-NCL Discrepancy</strong>
                Submitting a state-level OBC certificate when your caste is not included in the National Commission for Backward Classes (NCBC) central list results in instant conversion to Open/General category during All India 15% quota counseling.
              </div>
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <strong className="text-white block mb-1">Mismatching Name Spelling with Class 10 Marksheet</strong>
                A single letter discrepancy between your DigiLocker identity and your Class 10 certificate name halts the physical verification desk at AIIMS and GMC admission counters until formal gazette affidavits are processed.
              </div>
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <strong className="text-white block mb-1">Multiple Application Form Submissions</strong>
                Submitting more than one application form under differing emails or mobile numbers is classified as unfair means (UFM) by NTA, triggering algorithmic cancellation of both test attempts and a 3-year debarment.
              </div>
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <strong className="text-white block mb-1">Non-Retention of Postcard Photo Copies</strong>
                You must bring an exact physical print of your 4x6 postcard photo to paste onto the attendance sheet inside the examination hall. Losing this exact copy causes extreme panic on exam day.
              </div>
            </div>
          </section>

          {/* Dedicated High-Converting Mentorship Funnel */}
          <SeoMentorFunnel
            examFocus="NEET"
            title="Ace NEET 2027 With Personal 1-on-1 Guidance From Top AIIMS Mentors"
            subtitle="Don't let administrative stress or preparation blindspots derail your medical dream. Partner with top rankers who solved 200+ mocks and scored 680+ to streamline your preparation from day one."
          />

          {/* Section 5: FAQ Accordion */}
          <section className="my-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center justify-center gap-3">
                <HelpCircle className="w-7 h-7 text-emerald-400" />
                Frequently Asked Questions: NEET 2027 Registration
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Clear, fact-checked resolutions for nuanced registration scenarios, code selection disputes, and document validation questions.
              </p>
            </div>
            <SeoFaqAccordion items={faqs} />
          </section>

          {/* Final Call to Action */}
          <SeoCtaBanner
            title="Secure Your 680+ Trajectory in NEET 2027"
            subtitle="Get paired with a dedicated AIIMS or Maulana Azad medical mentor for personalized daily timetables, NCERT line-by-line audits, and weekly mock analysis."
            primaryBtnText="Claim Free Mentorship Call"
            primaryBtnHref="/free-mentorship-session"
            secondaryBtnText="Explore Top Medical Mentors"
            secondaryBtnHref="/mentors"
          />
        </div>
      </main>
    </div>
  );
}
