/**
 * Centralized error sanitization and formatting utilities.
 * Ensures raw code, stack traces, JSON payloads, or internal service details
 * are never exposed in the UI while preserving clear, actionable messages.
 */

const KNOWN_CODE_MESSAGES: Record<string, string> = {
  PROFILE_NOT_CREATED:
    "Your account setup is incomplete. Please complete your profile to continue.",
  EMAIL_NOT_VERIFIED:
    "Please verify your email address first. Check your inbox for the verification link.",
  SEAT_FULL:
    "This cohort has reached maximum capacity. All seats are currently filled.",
  ALREADY_IN_COHORT:
    "You are already enrolled in an active cohort. Students can only join one cohort at a time.",
  ALREADY_SUBSCRIBED:
    "You already have an active subscription with this mentor.",
};

const FIREBASE_CODE_MESSAGES: Record<string, string> = {
  "auth/invalid-credential":
    "Invalid email or password. Please verify your credentials.",
  "auth/user-not-found":
    "Invalid email or password. Please verify your credentials.",
  "auth/wrong-password":
    "Invalid email or password. Please verify your credentials.",
  "auth/invalid-login-credentials":
    "Invalid email or password. Please verify your credentials.",
  "auth/email-already-in-use":
    "This email is already registered. Please sign in instead.",
  "auth/weak-password":
    "Password is too weak. Please choose at least 8 characters.",
  "auth/invalid-email": "Please enter a valid email address.",
  "auth/too-many-requests":
    "Too many attempts. Please wait a minute before trying again.",
  "auth/network-request-failed":
    "Network connection issue. Please check your internet and try again.",
  "auth/user-disabled":
    "This account has been disabled. Please contact support for assistance.",
  "auth/requires-recent-login":
    "For your security, please sign in again to complete this action.",
  "auth/popup-blocked":
    "Sign-in popup was blocked by your browser. Please allow popups and try again.",
  "auth/popup-closed-by-user": "Sign-in was cancelled before completion.",
  "auth/cancelled-popup-request": "Sign-in was interrupted. Please try again.",
};

const FIELD_LABELS: Record<string, string> = {
  intro_youtube_url: "YouTube video URL",
  exam_rank: "Exam rank or score",
  rank_type: "Credential type",
  seat_limit: "Cohort seat limit",
  price_per_month: "Monthly fee",
  one_on_one_price: "1-on-1 call fee",
  one_on_one_duration_minutes: "Call duration",
  default_meeting_link: "Meeting link",
  phone_number: "Phone number",
  college_email: "College email",
  payout_upi_id: "UPI ID",
  payout_account_number: "Bank account number",
  payout_ifsc: "IFSC code",
  payout_account_name: "Account holder name",
  full_name: "Full name",
  bio: "Bio",
  category: "Mentorship category",
  college: "College name",
  agenda_notes: "Session agenda",
  scheduled_at: "Session date and time",
  rating: "Rating",
  comment: "Review comment",
  title: "Title",
  description: "Description",
  week_start: "Start date",
  week_end: "End date",
  meeting_link: "Meeting link",
};

const TECHNICAL_PATTERNS: RegExp[] = [
  /traceback/i,
  /\bsqlalchemy\b/i,
  /\bpsycopg\b/i,
  /\basyncpg\b/i,
  /\bintegrityerror\b/i,
  /\boperationalerror\b/i,
  /\battributeerror\b/i,
  /\bkeyerror\b/i,
  /\btypeerror\b/i,
  /\bsyntaxerror\b/i,
  /\breferenceerror\b/i,
  /\bvalueerror\b/i,
  /internal server error:/i,
  /cannot read propert/i,
  /cannot set propert/i,
  /is not a function/i,
  /is not defined/i,
  /undefined is not/i,
  /unexpected token/i,
  /failed to fetch/i,
  /networkerror/i,
  /econnrefused/i,
  /load failed/i,
  /^\s*\[\s*\{.*"type"\s*:/i,
  /^\s*\{.*"loc"\s*:/i,
  /\.env(\.local)?/i,
  /next_public_/i,
  /firebase:\s*error\s*\(/i,
  /request failed with http\s+\d+/i,
  /ensure server is running/i,
];

export function statusFallbackMessage(
  status?: number,
  retryAfter?: number,
  fallback = "Something went wrong. Please try again."
): string {
  if (status === 0) {
    return "Unable to connect right now. Please check your internet connection and try again.";
  }
  if (status === 400 || status === 422) {
    return "Please check your entered details and try again.";
  }
  if (status === 401) {
    return "Your session has expired. Please sign in again.";
  }
  if (status === 403) {
    return "You do not have permission to perform this action.";
  }
  if (status === 404) {
    return "The requested information could not be found.";
  }
  if (status === 409) {
    return "This action conflicts with your current state. Please refresh and try again.";
  }
  if (status === 429) {
    const wait = retryAfter ? `${retryAfter} seconds` : "a minute";
    return `Too many requests. Please wait ${wait} before trying again.`;
  }
  if (status !== undefined && status >= 500) {
    return "Something went wrong on our end. Please try again in a moment.";
  }
  return fallback;
}

export function formatValidationIssues(issues: unknown[]): string {
  const formatted: string[] = [];

  for (const item of issues) {
    if (!item || typeof item !== "object") continue;
    const entry = item as Record<string, unknown>;
    let msg = typeof entry.msg === "string" ? entry.msg.trim() : "";
    if (!msg) continue;

    msg = msg.replace(/^(Value error|Assertion failed),\s*/i, "");

    let fieldLabel = "";
    if (Array.isArray(entry.loc)) {
      for (let i = entry.loc.length - 1; i >= 0; i--) {
        const part = entry.loc[i];
        if (typeof part === "string" && !["body", "query", "path"].includes(part)) {
          fieldLabel =
            FIELD_LABELS[part] ||
            part.replace(/_/g, " ").replace(/^\w/, (c) => c.toUpperCase());
          break;
        }
      }
    }

    if (entry.type === "missing" || msg === "Field required") {
      msg = `${fieldLabel || "This field"} is required.`;
    } else if (
      fieldLabel &&
      entry.type !== "value_error" &&
      entry.type !== "assertion_error" &&
      !msg.toLowerCase().startsWith(fieldLabel.toLowerCase())
    ) {
      msg = `${fieldLabel}: ${msg}`;
    }

    if (!formatted.includes(msg)) {
      formatted.push(msg);
    }
  }

  return formatted.length > 0
    ? formatted.join(" ")
    : "Please review the highlighted fields and try again.";
}

export function sanitizeErrorDetail(
  raw: string,
  status?: number,
  fallback = "Something went wrong. Please try again."
): string {
  const trimmed = raw.trim();
  if (!trimmed) {
    return statusFallbackMessage(status, undefined, fallback);
  }

  if (KNOWN_CODE_MESSAGES[trimmed]) {
    return KNOWN_CODE_MESSAGES[trimmed];
  }

  // Strip stray Pydantic prefixes if any made it through
  const cleaned = trimmed.replace(/^(Value error|Assertion failed),\s*/i, "");

  // Never leak raw stack traces, SQL, JSON error dumps, or JS internals to UI
  if (TECHNICAL_PATTERNS.some((pattern) => pattern.test(cleaned))) {
    return statusFallbackMessage(status, undefined, fallback);
  }

  return cleaned;
}

export function getUserFriendlyError(
  err: unknown,
  fallback = "Something went wrong. Please try again."
): string {
  if (!err) return fallback;

  if (typeof err === "string") {
    return sanitizeErrorDetail(err, undefined, fallback);
  }

  if (typeof err === "object") {
    const obj = err as Record<string, unknown>;

    // Firebase Auth errors
    if (typeof obj.code === "string" && obj.code.startsWith("auth/")) {
      return (
        FIREBASE_CODE_MESSAGES[obj.code] ||
        "Authentication could not be completed. Please try again."
      );
    }

    // Known API error code
    if (typeof obj.code === "string" && KNOWN_CODE_MESSAGES[obj.code]) {
      return KNOWN_CODE_MESSAGES[obj.code];
    }

    const status = typeof obj.status === "number" ? obj.status : undefined;

    // ApiError from apiClient
    if (typeof obj.detail === "string") {
      return sanitizeErrorDetail(obj.detail, status, fallback);
    }
    if (Array.isArray(obj.detail)) {
      return formatValidationIssues(obj.detail);
    }

    // Generic Error instance: only show message if it is clearly safe non-technical text
    if (typeof obj.message === "string" && obj.message.trim()) {
      return sanitizeErrorDetail(obj.message, status, fallback);
    }

    if (status !== undefined) {
      return statusFallbackMessage(status, undefined, fallback);
    }
  }

  return fallback;
}
