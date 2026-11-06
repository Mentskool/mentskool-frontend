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

export function useAdminMentors(status?: string, search?: string) {
  const { user, isAuthenticated, isLoading } = useAuthStore();
  const queryParams = new URLSearchParams();
  if (status && status !== "ALL") queryParams.set("status", status);
  if (search && search.trim()) queryParams.set("search", search.trim());

  return useQuery({
    queryKey: ["adminMentors", { status, search }],
    queryFn: () =>
      apiClient<AdminMentorListResponse>(`/admin/mentors?${queryParams.toString()}`),
    enabled: !isLoading && isAuthenticated && user?.role === "ADMIN",
  });
}

export function useAdminSessions(status?: string, search?: string) {
  const { user, isAuthenticated, isLoading } = useAuthStore();
  const queryParams = new URLSearchParams();
  if (status && status !== "ALL") queryParams.set("status", status);
  if (search && search.trim()) queryParams.set("search", search.trim());

  return useQuery({
    queryKey: ["adminSessions", { status, search }],
    queryFn: () =>
      apiClient<AdminSessionListResponse>(`/admin/sessions?${queryParams.toString()}`),
    enabled: !isLoading && isAuthenticated && user?.role === "ADMIN",
  });
}

export function useAdminUsers(role?: string, search?: string) {
  const { user, isAuthenticated, isLoading } = useAuthStore();
  const queryParams = new URLSearchParams();
  if (role && role !== "ALL") queryParams.set("role", role);
  if (search && search.trim()) queryParams.set("search", search.trim());

  return useQuery({
    queryKey: ["adminUsers", { role, search }],
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
