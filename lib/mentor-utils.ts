import { RankType } from "./types";

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
