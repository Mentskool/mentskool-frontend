import { SessionBooking } from "@/lib/types";

export const REMINDER_COOLDOWN_MINUTES = 15;
export const MAX_MANUAL_REMINDERS_PER_SIDE = 3;
export const MAX_RESCHEDULES_PER_BOOKING = 3;

export interface ReminderButtonState {
  visible: boolean;
  disabled: boolean;
  label: string;
  helperText?: string;
}

export function getReminderButtonState(
  booking: SessionBooking,
  role: "mentor" | "student",
  nowMs: number = Date.now()
): ReminderButtonState {
  const count =
    role === "student"
      ? booking.student_reminder_count ?? 0
      : booking.mentor_reminder_count ?? 0;
  const lastRemindedAt =
    role === "student"
      ? booking.last_student_reminded_at
      : booking.last_mentor_reminded_at;

  if (booking.status !== "CONFIRMED" && booking.status !== "PENDING_APPROVAL") {
    return { visible: false, disabled: true, label: "Send Reminder" };
  }

  if (booking.status === "PENDING_APPROVAL" && role !== "student") {
    return { visible: false, disabled: true, label: "Send Reminder" };
  }

  if (count >= MAX_MANUAL_REMINDERS_PER_SIDE) {
    return {
      visible: true,
      disabled: true,
      label: `Limit Reached (${count}/${MAX_MANUAL_REMINDERS_PER_SIDE})`,
    };
  }

  if (lastRemindedAt) {
    const elapsedMs = nowMs - new Date(lastRemindedAt).getTime();
    const cooldownMs = REMINDER_COOLDOWN_MINUTES * 60 * 1000;
    if (elapsedMs < cooldownMs) {
      const minsLeft = Math.max(1, Math.ceil((cooldownMs - elapsedMs) / 60000));
      return {
        visible: true,
        disabled: true,
        label: `Sent • Wait ${minsLeft}m`,
      };
    }
  }

  if (booking.status === "CONFIRMED") {
    const startMs = new Date(booking.scheduled_at).getTime();
    const twoHoursBefore = startMs - 2 * 60 * 60 * 1000;
    const thirtyMinsAfter = startMs + 30 * 60 * 1000;
    if (nowMs < twoHoursBefore) {
      return {
        visible: true,
        disabled: true,
        label: "Send Reminder",
        helperText: "Available 2h before session",
      };
    }
    if (nowMs > thirtyMinsAfter) {
      return { visible: false, disabled: true, label: "Send Reminder" };
    }
  } else if (booking.status === "PENDING_APPROVAL") {
    const createdMs = new Date(booking.created_at).getTime();
    if (nowMs < createdMs + 30 * 60 * 1000) {
      return {
        visible: true,
        disabled: true,
        label: "Nudge Mentor",
        helperText: "Available 30m after booking",
      };
    }
    return {
      visible: true,
      disabled: false,
      label: count > 0 ? `Nudge Mentor (${count}/${MAX_MANUAL_REMINDERS_PER_SIDE})` : "Nudge Mentor",
    };
  }

  return {
    visible: true,
    disabled: false,
    label: count > 0 ? `Send Reminder (${count}/${MAX_MANUAL_REMINDERS_PER_SIDE})` : "Send Reminder",
  };
}
