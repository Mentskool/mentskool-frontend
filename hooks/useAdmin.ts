import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";
import {
  AdminMentorItem,
  AdminMentorListResponse,
  AdminOverviewResponse,
  AdminSessionItem,
  AdminSessionListResponse,
  AdminUserListResponse,
} from "@/lib/types";
import { useAuthStore } from "@/store/authStore";

export function useAdminOverview() {
  const { user, isAuthenticated, isLoading } = useAuthStore();

  return useQuery({
    queryKey: ["adminOverview"],
    queryFn: () => apiClient<AdminOverviewResponse>("/admin/overview"),
    enabled: !isLoading && isAuthenticated && user?.role === "ADMIN",
    refetchInterval: 30000, // Refresh every 30s for live insights
  });
}

export interface AdminMentorsParams {
  status?: string;
  search?: string;
  category?: string;
  availability?: string;
  activity?: string;
  sort_by?: string;
}

export function useAdminMentors(params?: AdminMentorsParams | string, legacySearch?: string) {
  const { user, isAuthenticated, isLoading } = useAuthStore();
  
  // Normalize params (handle both object and legacy positional args)
  const filterParams: AdminMentorsParams = typeof params === "string" || !params
    ? { status: params as string | undefined, search: legacySearch }
    : params;

  const { status, search, category, availability, activity, sort_by } = filterParams;

  const queryParams = new URLSearchParams();
  if (status && status !== "ALL") queryParams.set("status", status);
  if (search && search.trim()) queryParams.set("search", search.trim());
  if (category && category !== "ALL") queryParams.set("category", category);
  if (availability && availability !== "ALL") queryParams.set("availability", availability);
  if (activity && activity !== "ALL") queryParams.set("activity", activity);
  if (sort_by && sort_by !== "DEFAULT") queryParams.set("sort_by", sort_by);

  return useQuery({
    queryKey: ["adminMentors", { status, search, category, availability, activity, sort_by }],
    queryFn: () =>
      apiClient<AdminMentorListResponse>(`/admin/mentors?${queryParams.toString()}`),
    enabled: !isLoading && isAuthenticated && user?.role === "ADMIN",
  });
}

export interface AdminSessionsParams {
  status?: string;
  search?: string;
  timeframe?: string;
  issue?: string;
  sort_by?: string;
}

export function useAdminSessions(params?: AdminSessionsParams | string, legacySearch?: string) {
  const { user, isAuthenticated, isLoading } = useAuthStore();

  const filterParams: AdminSessionsParams = typeof params === "string" || !params
    ? { status: params as string | undefined, search: legacySearch }
    : params;

  const { status, search, timeframe, issue, sort_by } = filterParams;

  const queryParams = new URLSearchParams();
  if (status && status !== "ALL") queryParams.set("status", status);
  if (search && search.trim()) queryParams.set("search", search.trim());
  if (timeframe && timeframe !== "ALL") queryParams.set("timeframe", timeframe);
  if (issue && issue !== "ALL") queryParams.set("issue", issue);
  if (sort_by && sort_by !== "DEFAULT") queryParams.set("sort_by", sort_by);

  return useQuery({
    queryKey: ["adminSessions", { status, search, timeframe, issue, sort_by }],
    queryFn: () =>
      apiClient<AdminSessionListResponse>(`/admin/sessions?${queryParams.toString()}`),
    enabled: !isLoading && isAuthenticated && user?.role === "ADMIN",
  });
}

export interface AdminUsersParams {
  role?: string;
  search?: string;
  target_exam?: string;
  target_year?: number;
  prep_stage?: string;
  has_spent?: boolean;
  sort_by?: string;
}

export function useAdminUsers(params?: AdminUsersParams | string, legacySearch?: string) {
  const { user, isAuthenticated, isLoading } = useAuthStore();

  const filterParams: AdminUsersParams = typeof params === "string" || !params
    ? { role: params as string | undefined, search: legacySearch }
    : params;

  const { role, search, target_exam, target_year, prep_stage, has_spent, sort_by } = filterParams;

  const queryParams = new URLSearchParams();
  if (role && role !== "ALL") queryParams.set("role", role);
  if (search && search.trim()) queryParams.set("search", search.trim());
  if (target_exam && target_exam !== "ALL") queryParams.set("target_exam", target_exam);
  if (target_year) queryParams.set("target_year", String(target_year));
  if (prep_stage && prep_stage !== "ALL") queryParams.set("prep_stage", prep_stage);
  if (typeof has_spent === "boolean") queryParams.set("has_spent", String(has_spent));
  if (sort_by && sort_by !== "DEFAULT") queryParams.set("sort_by", sort_by);

  return useQuery({
    queryKey: ["adminUsers", { role, search, target_exam, target_year, prep_stage, has_spent, sort_by }],
    queryFn: () =>
      apiClient<AdminUserListResponse>(`/admin/users?${queryParams.toString()}`),
    enabled: !isLoading && isAuthenticated && user?.role === "ADMIN",
  });
}

export function useAdminVerifyMentor() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      mentorId,
      action,
      rejectionReason,
    }: {
      mentorId: string;
      action: "APPROVE" | "REJECT";
      rejectionReason?: string;
    }) =>
      apiClient<AdminMentorItem>(`/admin/mentors/${mentorId}/verify`, {
        method: "POST",
        body: JSON.stringify({
          action,
          rejection_reason: rejectionReason || null,
        }),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["adminMentors"] });
      queryClient.invalidateQueries({ queryKey: ["adminOverview"] });
      queryClient.invalidateQueries({ queryKey: ["mentors"] });
    },
  });
}

export function useAdminUpdateMeetingLink() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      sessionId,
      meetingLink,
    }: {
      sessionId: string;
      meetingLink: string;
    }) =>
      apiClient<AdminSessionItem>(`/admin/sessions/${sessionId}/meeting-link`, {
        method: "PATCH",
        body: JSON.stringify({ meeting_link: meetingLink }),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["adminSessions"] });
      queryClient.invalidateQueries({ queryKey: ["adminOverview"] });
    },
  });
}
