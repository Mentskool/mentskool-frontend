import posthog from "posthog-js";

/**
 * Type-safe analytics events for Mentskool product analytics
 */
export type AnalyticsEvent =
  | "demo_session_booked"
  | "lead_form_submitted"
  | "mock_test_uploaded"
  | "task_completed"
  | "task_created"
  | "chat_message_sent"
  | "mentor_profile_viewed"
  | "study_session_started"
  | "pricing_plan_selected";

/**
 * Capture a custom product analytics event
 */
export function trackEvent(event: AnalyticsEvent | string, properties?: Record<string, any>) {
  if (typeof window !== "undefined") {
    try {
      posthog.capture(event, properties);
    } catch (err) {
      console.warn("PostHog capture failed:", err);
    }
  }
}
