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

export interface MentorProfile {
  user_id: string;
  full_name: string;
  email: string;
  bio: string;
  category: string;
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

export interface ApiError {
  detail: string;
  code?: string;
  status?: number;
  retryAfter?: number;
}
