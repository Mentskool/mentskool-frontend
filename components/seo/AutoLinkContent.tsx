import React from "react";
import Link from "next/link";
import { Sparkles, Clock, ListChecks, ArrowRight, Bookmark } from "lucide-react";

interface KeywordMapping {
  pattern: RegExp;
  href: string;
  exactAnchor?: string;
}

const KEYWORD_MAP: KeywordMapping[] = [
  { pattern: /NTA (?:shift )?normalization formula/i, href: "/how-nta-normalizes-marks-across-different-shifts" },
  { pattern: /how nta calculates (?:jee main )?percentile|percentile calculation formula/i, href: "/how-nta-calculates-jee-main-percentile-formula" },
  { pattern: /tie-breaking criteria|tie-breaker rules/i, href: "/jee-main-tie-breaking-criteria-rule-changes" },
  { pattern: /last 5 years? pyq(?:s)?|pyq chapter-wise weightage/i, href: "/jee-main-last-5-years-pyq-chapter-wise-weightage" },
  { pattern: /most repeated pyq models in physics|physics pyq models/i, href: "/most-repeated-pyq-models-in-jee-main-physics" },
  { pattern: /most repeated pyq models in chemistry|chemistry pyq models/i, href: "/most-repeated-pyq-models-in-jee-main-chemistry" },
  { pattern: /most repeated pyq models in maths|maths pyq models/i, href: "/most-repeated-pyq-models-in-jee-main-maths" },
  { pattern: /last 10 years pyqs biology|neet biology pyqs/i, href: "/neet-last-10-years-pyqs-biology-chapter-wise" },
  { pattern: /nit with 80 to 85 percentile|can i get nit with 80/i, href: "/can-i-get-nit-with-80-to-85-percentile" },
  { pattern: /csab special round|csab counseling guide/i, href: "/csab-special-round-cutoff-and-counseling-guide" },
  { pattern: /josaa counseling mistakes|cost students their seat/i, href: "/josaa-counseling-mistakes-that-cost-students-their-seat" },
  { pattern: /mcc neet(?: ug)? counseling|aiq vs state quota/i, href: "/mcc-neet-ug-counseling-rounds-explained-aiq-vs-state" },
  { pattern: /cbse 75 percent criteria|75% criteria in jee/i, href: "/cbse-75-percent-criteria-in-jee-main-rules-and-waiver" },
  { pattern: /subject-wise time allocation|how toppers divide 180 minutes/i, href: "/jee-main-subject-wise-time-allocation-by-toppers" },
  { pattern: /physics graph-based questions|slopes and areas/i, href: "/neet-physics-graph-based-questions-and-slopes" },
  { pattern: /organic chemistry named reactions|reagent flowcharts/i, href: "/organic-chemistry-named-reactions-reagent-flowcharts" },
  { pattern: /inorganic chemistry p-block exceptions/i, href: "/inorganic-chemistry-p-block-exceptions-quick-revision" },
  { pattern: /neet botany morphology examples/i, href: "/neet-botany-morphology-examples-cheat-sheet" },
  { pattern: /hormone feedback loops|hypothalamus-pituitary axis/i, href: "/neet-zoology-human-physiology-hormone-feedback-loops" },
  { pattern: /coordinate geometry shortcuts|circle parabola shortcuts/i, href: "/jee-maths-coordinate-geometry-circle-parabola-shortcuts" },
  { pattern: /integer type questions in jee main/i, href: "/how-to-tackle-integer-type-questions-in-jee-main" },
  { pattern: /vernier calliper(?:s)?|screw gauge zero error/i, href: "/jee-main-physics-experiment-based-questions-vernier-screw-gauge" },
  { pattern: /physical chemistry rapid calculation/i, href: "/neet-physical-chemistry-rapid-calculation-approximations" },
  { pattern: /tier-1 engineering without jee advanced/i, href: "/can-i-get-tier-1-engineering-without-jee-advanced" },
  { pattern: /comedk top 3 colleges|rvce cutoff/i, href: "/comedk-top-3-colleges-cutoff-and-fee-structure" },
  { pattern: /jadavpur university cutoff|wbjee cutoff/i, href: "/wbjee-cutoff-for-jadavpur-university-engineering" },
  { pattern: /coep and vjti|outside maharashtra candidature/i, href: "/mht-cet-coep-vjti-cutoff-for-outside-maharashtra" },
  { pattern: /bitsat iteration cutoffs|waitlist movement/i, href: "/bitsat-iteration-cutoffs-and-waitlist-movement" },
  { pattern: /semi-government mbbs cutoff|rural service bond/i, href: "/semi-government-mbbs-cutoff-and-bonds-by-state" },
  { pattern: /deemed medical universities/i, href: "/deemed-medical-universities-low-cutoff-high-fees" },
  { pattern: /bds to mbbs seat upgradation/i, href: "/bds-to-mbbs-seat-upgradation-rules-during-counseling" },
  { pattern: /peer pressure in dropper batch/i, href: "/how-to-handle-peer-pressure-in-dropper-batch" },
  { pattern: /coaching schedule is exhausting/i, href: "/how-to-study-effectively-when-coaching-schedule-is-exhausting" },
  { pattern: /parents' guide to jee main scorecard/i, href: "/parents-guide-to-jee-main-scorecard-and-rank-meaning" },
  { pattern: /parents' guide to neet scorecard/i, href: "/parents-guide-to-neet-scorecard-and-seat-allotment" },
  { pattern: /7-day rapid revision timetable/i, href: "/how-to-create-a-7-day-rapid-revision-timetable" },
  { pattern: /between jee main january and board exams/i, href: "/what-to-do-between-jee-main-january-and-board-exams" },
  { pattern: /final 48 hours exam readiness checklist/i, href: "/final-48-hours-exam-readiness-checklist-jee-neet" },
  { pattern: /marks vs percentile calculator/i, href: "/tools/jee-main-marks-vs-percentile-calculator" },
  { pattern: /marks vs rank calculator/i, href: "/tools/neet-marks-vs-rank-calculator" },
  { pattern: /backlog clearance calculator/i, href: "/tools/jee-neet-backlog-clearance-calculator" },
  { pattern: /free 1:1 strategy session|free diagnostic session|claim free slot/i, href: "/free-mentorship-session" },
  { pattern: /1:1 video session|1-on-1 strategy call|book a 1:1 video call/i, href: "/book-call" },
  { pattern: /verified iitian mentors|verified aiims mentors|browse all verified mentors/i, href: "/mentors" },
  { pattern: /best jee mentorship/i, href: "/best-jee-mentorship" },
  { pattern: /best neet mentorship/i, href: "/best-neet-mentorship" },
];

/**
 * Automatically injects exactly 1 high-value, contextual internal link per paragraph.
 * Ensures no self-links to the current page.
 */
export function renderAutoLinkedParagraph(text: string, currentSlug: string): React.ReactNode {
  const currentPath = `/${currentSlug}`;

  for (const { pattern, href } of KEYWORD_MAP) {
    if (href === currentPath) continue;

    const match = text.match(pattern);
    if (match && match.index !== undefined) {
      const matchText = match[0];
      const matchIndex = match.index;
      const before = text.slice(0, matchIndex);
      const after = text.slice(matchIndex + matchText.length);

      return (
        <>
          {before}
          <Link
            href={href}
            className="text-sky-400 hover:text-sky-300 underline underline-offset-2 font-medium transition-colors"
          >
            {matchText}
          </Link>
          {after}
        </>
      );
    }
  }

  return text;
}

/**
 * Google Featured Snippet "Position 0" Quick Answer Box
 */
export function QuickAnswerBox({
  title,
  summary,
  keyBullets,
}: {
  title: string;
  summary: string;
  keyBullets: string[];
}) {
  return (
    <section id="quick-answer" className="my-8 p-5 sm:p-7 rounded-3xl bg-slate-900/90 border border-emerald-500/30 shadow-elevated">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-3 pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-emerald-400">
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>Quick Answer in 60 Seconds • Featured Summary</span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-400 bg-slate-950 px-3 py-1 rounded-full border border-slate-800">
          <Clock className="w-3.5 h-3.5 text-blue-400" />
          <span>~8 Min Read • Verified for 2027/2028 NTA Cycle</span>
        </div>
      </div>

      <h3 className="text-base sm:text-lg font-bold text-white mb-2">
        {title}
      </h3>
      <p className="text-sm text-slate-200 leading-relaxed font-medium mb-4">
        {summary}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
        {keyBullets.map((bullet, idx) => (
          <div
            key={idx}
            className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs text-slate-300 flex items-start gap-2"
          >
            <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center shrink-0 text-[10px] mt-0.5">
              ✓
            </span>
            <span>{bullet}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/**
 * Interactive Table of Contents for Long-Form SEO Pages (Generates Google Sitelinks)
 */
export function TableOfContents() {
  const items = [
    { label: "Executive Overview & Problem", href: "#overview" },
    { label: "60-Second Key Takeaways", href: "#quick-answer" },
    { label: "Detailed Execution Blueprint", href: "#blueprint-sections" },
    { label: "Interactive Score Estimator", href: "#interactive-estimator" },
    { label: "45-Minute 1:1 Strategy Protocol", href: "#call-protocol" },
    { label: "Personal Mentorship vs Coaching", href: "#comparison" },
    { label: "Top Ranker Mentor Roster", href: "#mentor-roster" },
    { label: "Frequently Asked Questions", href: "#faqs" },
    { label: "Next Steps & Diagnostic Tools", href: "#resources-and-tools" },
  ];

  return (
    <nav
      aria-label="Table of Contents"
      className="my-8 p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xs"
    >
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
        <Bookmark className="w-3.5 h-3.5 text-blue-400" />
        <span>Table of Contents (Jump to Section)</span>
      </div>
      <div className="flex flex-wrap gap-2 text-xs">
        {items.map((it, idx) => (
          <a
            key={idx}
            href={it.href}
            className="px-3 py-1.5 rounded-lg bg-slate-950/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-850 hover:border-blue-500/40 transition-colors flex items-center gap-1.5"
          >
            <span className="text-slate-500 text-[10px]">{idx + 1}.</span>
            <span>{it.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
