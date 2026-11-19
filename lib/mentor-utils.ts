import { RankType, CATEGORY_LABELS } from "./types";

export const RANK_TYPE_OPTIONS: {
  value: RankType;
  label: string;
  placeholder: string;
  helper: string;
}[] = [
  {
    value: "AIR",
    label: "AIR (All India Rank)",
    placeholder: "e.g. 325 or JEE Adv 325",
    helper: "Displayed as AIR <value> on your public profile.",
  },
  {
    value: "PERCENTILE",
    label: "Percentile",
    placeholder: "e.g. 99 or 99.85",
    helper: "Displayed as <value> Percentile so students know it's a percentile.",
  },
  {
    value: "MARKS",
    label: "Marks",
    placeholder: "e.g. 680 or 265/300",
    helper: "Displayed as <value> Marks on your public profile.",
  },
  {
    value: "SCORE",
    label: "Score",
    placeholder: "e.g. 820",
    helper: "Displayed as Score <value> on your public profile.",
  },
];

export function inferRankType(
  examRank?: string | null,
  rankType?: RankType | string | null
): RankType {
  const upper = rankType?.toUpperCase();
  if (
    upper === "AIR" ||
    upper === "PERCENTILE" ||
    upper === "MARKS" ||
    upper === "SCORE"
  ) {
    return upper;
  }
  const val = (examRank || "").trim();
  if (/(percentile|%ile|%)/i.test(val)) return "PERCENTILE";
  if (/\bmarks?\b/i.test(val)) return "MARKS";
  if (/\bscore\b/i.test(val)) return "SCORE";
  return "AIR";
}

export function formatExamRank(
  examRank?: string | null,
  rankType?: RankType | string | null
): string {
  if (!examRank || !examRank.trim()) return "";
  const val = examRank.trim();
  const type = rankType?.toUpperCase();

  if (type === "AIR") {
    return /\bair\b/i.test(val) ? val : `AIR ${val}`;
  }
  if (type === "PERCENTILE") {
    return /(percentile|%ile|%)/i.test(val) ? val : `${val} Percentile`;
  }
  if (type === "MARKS") {
    return /\bmarks?\b/i.test(val) ? val : `${val} Marks`;
  }
  if (type === "SCORE") {
    return /\bscore\b/i.test(val) ? val : `Score ${val}`;
  }

  // Legacy fallback when rank_type was not stored
  return /^\d+$/.test(val) ? `AIR ${val}` : val;
}

export interface MentorTrackInfo {
  headline: string;
  isNeet: boolean;
  isJee: boolean;
  categoryLabel: string;
}

/**
 * Returns dynamic track headline and category badges for a mentor
 * so NEET/MBBS/GMC mentors do not get falsely labeled as IIT mentors.
 */
export function getMentorTrackLabel(mentor?: {
  category?: string | null;
  college?: string | null;
  exam_rank?: string | null;
} | null): MentorTrackInfo {
  if (!mentor) {
    return {
      headline: "Academic Mentor on Mentskool",
      isNeet: false,
      isJee: false,
      categoryLabel: "Academic Prep",
    };
  }

  const cat = (mentor.category || "").toUpperCase();
  const college = (mentor.college || "").toUpperCase();
  const rank = (mentor.exam_rank || "").toUpperCase();

  const isNeet =
    cat.includes("NEET") ||
    college.includes("GMC") ||
    college.includes("AIIMS") ||
    college.includes("MEDICAL") ||
    college.includes("MBBS") ||
    college.includes("MAMC") ||
    college.includes("VMMC") ||
    college.includes("KGMU") ||
    college.includes("JIPMER") ||
    college.includes("IMS") ||
    rank.includes("NEET");

  const isJee =
    cat.includes("JEE") ||
    college.includes("IIT") ||
    college.includes("NIT") ||
    college.includes("BITS") ||
    college.includes("IIIT") ||
    college.includes("DTU") ||
    college.includes("NSUT") ||
    rank.includes("JEE");

  let headline = "Top Ranker Mentor on Mentskool";
  if (isNeet) {
    if (college.includes("AIIMS")) {
      headline = "AIIMS / NEET Mentor on Mentskool";
    } else if (
      college.includes("GMC") ||
      college.includes("MBBS") ||
      college.includes("MEDICAL") ||
      college.includes("MAMC") ||
      college.includes("VMMC")
    ) {
      headline = "NEET / Medical Mentor on Mentskool";
    } else {
      headline = "NEET Mentor on Mentskool";
    }
  } else if (isJee) {
    if (college.includes("IIT") && !college.includes("IIIT")) {
      headline = "IIT Mentor on Mentskool";
    } else if (college.includes("NIT") || college.includes("IIIT") || college.includes("BITS")) {
      headline = "NIT / JEE Mentor on Mentskool";
    } else {
      headline = "IIT / JEE Mentor on Mentskool";
    }
  } else if (cat.includes("GATE")) {
    headline = "GATE / PSU Mentor on Mentskool";
  }

  const categoryLabel =
    mentor.category && (CATEGORY_LABELS as any)[mentor.category]
      ? (CATEGORY_LABELS as any)[mentor.category]
      : isNeet
      ? "NEET Prep"
      : isJee
      ? "JEE Prep"
      : "Academic Prep";

  return { headline, isNeet, isJee, categoryLabel };
}
