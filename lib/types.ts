/**
 * TypeScript definitions strictly aligned with backend Pydantic models.
 */

export type UserRole = "STUDENT" | "MENTOR" | "ADMIN";

export interface User {
  id: string;
  firebase_uid?: string;
  email: string;
  email_verified?: boolean;
  full_name: string;
  role: UserRole;
  avatar_url?: string | null;
  target_exam?: string | null;
  target_year?: number | null;
  prep_stage?: string | null;
  bio?: string | null;
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

export type MentorVerificationStatus = "PENDING" | "APPROVED" | "REJECTED";

export interface DayActivityItem {
  date: string;
  count: number;
  level: number;
}

export interface MentorProfile {
  user_id: string;
  slug?: string | null;
  full_name: string;
  email: string;
  avatar_url?: string | null;
  college?: string | null;
  exam_rank?: string | null;
  phone_number?: string | null;
  bio: string;
  category: MentorCategory;
  intro_youtube_url?: string | null;
  seat_limit: number;
  available_seats: number;
  price_per_month: number | string;
  is_active: boolean;
  is_available?: boolean;
  verification_status: MentorVerificationStatus;
  rating_avg?: number | null;
  review_count?: number;
  last_active_at?: string | null;
  activity_status?: string;
  activity_heatmap_30d?: DayActivityItem[];
  college_id_proof_url?: string | null;
  scorecard_proof_url?: string | null;
  college_email?: string | null;
  payout_upi_id?: string | null;
  payout_account_number?: string | null;
  payout_ifsc?: string | null;
  payout_account_name?: string | null;
  rejection_reason?: string | null;
  auto_paused_at?: string | null;
  created_at: string;
}

export interface RecentActivityItem {
  id: string;
  activity_type: string;
  description?: string | null;
  created_at: string;
}

export interface MentorStatsResponse {
  user_id: string;
  full_name: string;
  email: string;
  college?: string | null;
  exam_rank?: string | null;
  category: MentorCategory;
  is_active: boolean;
  is_available: boolean;
  verification_status: MentorVerificationStatus;
  last_active_at: string;
  activity_status: string;
  active_students_count: number;
  total_seat_limit: number;
  tasks_assigned_month: number;
  tasks_reviewed_month: number;
  quizzes_created: number;
  announcements_created: number;
  meetings_scheduled: number;
  heatmap_30d: DayActivityItem[];
  recent_activities: RecentActivityItem[];
}

export interface MentorReview {
  id: string;
  mentor_id: string;
  student_id: string;
  student_name: string;
  student_avatar_url?: string | null;
  rating: number;
  comment: string;
  created_at: string;
  updated_at: string;
}

export interface MentorReviewsListResponse {
  items: MentorReview[];
  total: number;
  average_rating: number;
  review_count: number;
}

export interface ReviewEligibilityResponse {
  can_review: boolean;
  is_enrolled: boolean;
  days_enrolled: number;
  days_remaining: number;
  my_review?: MentorReview | null;
}

export interface AdminMentorItem extends MentorProfile {
  active_students_count: number;
  total_monthly_revenue: number;
  platform_commission_pct: number;
  payout_due: number;
}

export interface AdminMentorListResponse {
  items: AdminMentorItem[];
  total: number;
  pending_count: number;
  approved_count: number;
  rejected_count: number;
  total_active_students: number;
  total_monthly_revenue: number;
  total_payout_due: number;
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
  student_email?: string | null;
  student_avatar_url?: string | null;
  student_target_exam?: string | null;
  student_target_year?: number | null;
  student_prep_stage?: string | null;
  mentor_id: string;
  mentor_name: string;
  mentor_avatar_url?: string | null;
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
  sender_avatar_url?: string | null;
  content: string;
  created_at: string;
}

export interface DirectMessage {
  id: string;
  sender_id: string;
  sender_name?: string | null;
  sender_avatar_url?: string | null;
  recipient_id: string;
  recipient_name?: string | null;
  recipient_avatar_url?: string | null;
  content: string;
  created_at: string;
}

export interface ConversationSummary {
  user_id: string;
  full_name: string;
  role: string;
  avatar_url?: string | null;
  last_message?: string | null;
  last_message_at?: string | null;
}

export interface ApiError {
  detail: string;
  code?: string;
  status?: number;
  retryAfter?: number;
}

// --- Quiz System Types ---
export type QuestionType = "MCQ_SINGLE" | "MCQ_MULTIPLE" | "NAT";
export type QuizStatus = "DRAFT" | "SCHEDULED" | "PUBLISHED" | "ARCHIVED";
export type AttemptStatus = "IN_PROGRESS" | "SUBMITTED";

export interface QuizOption {
  id: string;
  question_id: string;
  option_text: string;
  option_image_url?: string | null;
  is_correct?: boolean | null;
  order_index: number;
}

export interface QuizQuestion {
  id: string;
  quiz_id: string;
  order_index: number;
  question_type: QuestionType;
  question_text: string;
  question_image_url?: string | null;
  source_image_url?: string | null;
  positive_marks: number | string;
  negative_marks: number | string;
  nat_answer?: number | string | null;
  nat_tolerance?: number | string | null;
  options: QuizOption[];
  created_at: string;
}

export interface Quiz {
  id: string;
  mentor_id: string;
  title: string;
  description: string;
  has_deadline: boolean;
  deadline_at?: string | null;
  live_at?: string | null;
  status: QuizStatus;
  default_positive_marks: number | string;
  default_negative_marks: number | string;
  duration_minutes?: number | null;
  question_count: number;
  total_marks: number | string;
  attempt_count: number;
  created_at: string;
  updated_at: string;
}

export interface QuizDetail extends Quiz {
  questions: QuizQuestion[];
  has_attempted: boolean;
  attempt_id?: string | null;
  attempt_status?: AttemptStatus | null;
  attempt_started_at?: string | null;
}

export interface StudentQuizItem {
  id: string;
  mentor_id: string;
  mentor_name: string;
  title: string;
  description: string;
  has_deadline: boolean;
  deadline_at?: string | null;
  live_at?: string | null;
  status: QuizStatus;
  default_positive_marks: number | string;
  default_negative_marks: number | string;
  duration_minutes?: number | null;
  question_count: number;
  total_marks: number | string;
  has_attempted: boolean;
  attempt_id?: string | null;
  attempt_status?: AttemptStatus | null;
  score?: number | string | null;
  is_deadline_passed: boolean;
  is_attemptable: boolean;
}

export interface AnswerBreakdownItem {
  question_id: string;
  question_type: QuestionType;
  question_text: string;
  question_image_url?: string | null;
  positive_marks: number | string;
  negative_marks: number | string;
  nat_answer?: number | string | null;
  nat_tolerance?: number | string | null;
  options: QuizOption[];
  selected_option_ids?: string[] | null;
  nat_answer_given?: number | null;
  is_correct: boolean;
  marks_awarded: number | string;
}

export interface QuizSubmitResponse {
  attempt_id: string;
  quiz_id: string;
  total_score: number | string;
  max_score: number | string;
  percentage: number | string;
  submitted_at: string;
  breakdown: AnswerBreakdownItem[];
}

export interface LeaderboardEntry {
  rank: number;
  student_id: string;
  student_name: string;
  avatar_url?: string | null;
  total_score: number | string;
  submitted_at: string;
}

export interface StudentQuizRanking {
  student_id: string;
  student_name: string;
  quizzes_attempted: number;
  average_percentage?: number | string | null;
  rank?: number | null;
  cohort_size?: number | null;
  message?: string | null;
}

export interface StudentQuizAttemptItem {
  attempt_id: string;
  quiz_id: string;
  quiz_title: string;
  total_score?: number | string | null;
  max_score: number | string;
  percentage?: number | string | null;
  status: AttemptStatus;
  started_at: string;
  submitted_at?: string | null;
}

export interface StudentCohortRankItem {
  student_id: string;
  student_name: string;
  avatar_url?: string | null;
  quizzes_attempted: number;
  average_percentage?: number | string | null;
  rank?: number | null;
}

export interface CohortQuizSummaryResponse {
  mentor_id: string;
  total_quizzes: number;
  total_published: number;
  total_cohort_students: number;
  total_attempts: number;
  cohort_average_percentage?: number | string | null;
  rankings: StudentCohortRankItem[];
}

