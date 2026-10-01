import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";
import {
  SubscriptionListResponse,
  Task,
  TaskListResponse,
  TaskStatus,
} from "@/lib/types";
import { useAuthStore } from "@/store/authStore";

export function useStudentTasks(
  status?: TaskStatus,
  weekStart?: string,
  limit = 50,
  offset = 0
) {
  const { isAuthenticated, isLoading } = useAuthStore();
  const params = new URLSearchParams();
  if (status) params.set("status", status);
  if (weekStart) params.set("week_start", weekStart);
  params.set("limit", limit.toString());
  params.set("offset", offset.toString());

  return useQuery({
    queryKey: ["studentTasks", { status, weekStart, limit, offset }],
    queryFn: () => apiClient<TaskListResponse>(`/tasks/me?${params.toString()}`),
    enabled: !isLoading && isAuthenticated,
  });
}

export function useMentorRoster(mentorId?: string) {
  return useQuery({
    queryKey: ["mentorRoster", mentorId],
    queryFn: () =>
      apiClient<SubscriptionListResponse>(
        `/subscriptions/mentor/${mentorId}/students?limit=100`
      ),
    enabled: Boolean(mentorId),
  });
}

export function useMentorAssignedTasks(
  mentorId?: string,
  studentId?: string,
  status?: TaskStatus,
  weekStart?: string,
  limit = 50,
  offset = 0
) {
  const params = new URLSearchParams();
  if (studentId) params.set("student_id", studentId);
  if (status) params.set("status", status);
  if (weekStart) params.set("week_start", weekStart);
  params.set("limit", limit.toString());
  params.set("offset", offset.toString());

  return useQuery({
    queryKey: [
      "mentorAssignedTasks",
      { mentorId, studentId, status, weekStart, limit, offset },
    ],
    queryFn: () =>
      apiClient<TaskListResponse>(
        `/tasks/mentor/${mentorId}/assigned?${params.toString()}`
      ),
    enabled: Boolean(mentorId),
  });
}

export interface CreateTaskPayload {
  student_id: string;
  title: string;
  description: string;
  week_start: string;
  week_end: string;
}

export function useCreateTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateTaskPayload) =>
      apiClient<Task>("/tasks", {
        method: "POST",
        body: JSON.stringify(payload),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["mentorAssignedTasks"] });
    },
  });
}

export function useCompleteTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (taskId: string) =>
      apiClient<Task>(`/tasks/${taskId}/complete`, {
        method: "PATCH",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["studentTasks"] });
      queryClient.invalidateQueries({ queryKey: ["efficiency"] });
    },
  });
}

export interface ReviewTaskPayload {
  taskId: string;
  decision: "APPROVED" | "REJECTED";
  mentor_note?: string;
}

export function useReviewTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ taskId, decision, mentor_note }: ReviewTaskPayload) =>
      apiClient<Task>(`/tasks/${taskId}/review`, {
        method: "PATCH",
        body: JSON.stringify({ decision, mentor_note }),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["mentorAssignedTasks"] });
      queryClient.invalidateQueries({ queryKey: ["efficiency"] });
    },
  });
}
