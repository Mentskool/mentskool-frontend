/**
 * TypeScript definitions strictly aligned with backend Pydantic models.
 */

export type UserRole = "STUDENT" | "MENTOR" | "ADMIN";

export interface User {
  id: string;
  email: string;
  full_name: string;
  role: UserRole;
  created_at: string;
}

export interface TokenResponse {
  access_token: string;
  refresh_token: string;
  token_type: string;
  expires_in: number;
  user: User;
}

export type MentorCategory = "JEE_PREP" | "NEET_PREP" | "GATE_PSU";

export const CATEGORY_LABELS: Record<MentorCategory, string> = {
  JEE_PREP: "JEE Prep",
  NEET_PREP: "NEET Prep",
  GATE_PSU: "GATE / PSU",
};

export interface MentorProfile {
  user_id: string;
  full_name: string;
  email: string;
  bio: string;
  category: MentorCategory;
  intro_youtube_url?: string | null;
  seat_limit: number;
  available_seats: number;
  price_per_month: number | string;
  is_active: boolean;
  created_at: string;
}

export interface MentorListResponse {
  items: MentorProfile[];
  total: number;
  limit: number;
  offset: number;
}

export type SubscriptionStatus = "ACTIVE" | "EXPIRED" | "CANCELLED";

export interface Subscription {
  id: string;
  student_id: string;
  student_name: string;
  student_email: string;
  mentor_id: string;
  mentor_name: string;
  status: SubscriptionStatus;
  started_at: string;
  expires_at: string;
  created_at: string;
}

export interface SubscriptionListResponse {
  items: Subscription[];
  total: number;
  limit: number;
  offset: number;
}

export type TaskStatus = "ASSIGNED" | "MARKED_COMPLETE" | "APPROVED" | "REJECTED";

export interface Task {
  id: string;
  mentor_id: string;
  mentor_name: string;
  student_id: string;
  student_name: string;
  title: string;
  description: string;
  week_start: string;
  week_end: string;
  status: TaskStatus;
  marked_complete_at: string | null;
  reviewed_at: string | null;
  reviewed_by: string | null;
  mentor_note: string | null;
  is_late: boolean;
  created_at: string;
}

export interface TaskListResponse {
  items: Task[];
  total: number;
  limit: number;
  offset: number;
}

export interface StudentEfficiencyResponse {
  student_id: string;
  student_name: string;
  tasks_assigned: number;
  tasks_approved: number;
  tasks_rejected: number;
  tasks_pending: number;
  effective_denominator: number;
  efficiency_score: number | null;
  message: string | null;
}

export interface Announcement {
  id: string;
  mentor_id: string;
  mentor_name?: string | null;
  title: string;
  body: string;
  created_at: string;
}

export interface Resource {
  id: string;
  mentor_id: string;
  mentor_name?: string | null;
  title: string;
  url: string;
  created_at: string;
}

export type MeetingStatus = "REQUESTED" | "SCHEDULED";

export interface Meeting {
  id: string;
  mentor_id: string;
  mentor_name?: string | null;
  student_id?: string | null;
  student_name?: string | null;
  title: string;
  meeting_link?: string | null;
  scheduled_at?: string | null;
  status: MeetingStatus;
  requested_by?: string | null;
  created_at: string;
}

export interface GroupMessage {
  id: string;
  mentor_id: string;
  sender_id: string;
  sender_name?: string | null;
  sender_role?: string | null;
  content: string;
  created_at: string;
}

export interface DirectMessage {
  id: string;
  sender_id: string;
  sender_name?: string | null;
  recipient_id: string;
  recipient_name?: string | null;
  content: string;
  created_at: string;
}

export interface ConversationSummary {
  user_id: string;
  full_name: string;
  role: string;
  last_message?: string | null;
  last_message_at?: string | null;
}

export interface ApiError {
  detail: string;
  code?: string;
  status?: number;
  retryAfter?: number;
}
