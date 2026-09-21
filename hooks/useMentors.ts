import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";
import {
  MentorListResponse,
  MentorProfile,
  Subscription,
} from "@/lib/types";

export function useMentors(category?: string, limit = 20, offset = 0) {
  const queryParams = new URLSearchParams();
  if (category) queryParams.set("category", category);
  queryParams.set("limit", limit.toString());
  queryParams.set("offset", offset.toString());

  return useQuery({
    queryKey: ["mentors", { category, limit, offset }],
    queryFn: () =>
      apiClient<MentorListResponse>(`/mentors?${queryParams.toString()}`),
    staleTime: 30000,
  });
}

export function useMentor(id: string) {
  return useQuery({
    queryKey: ["mentor", id],
    queryFn: () => apiClient<MentorProfile>(`/mentors/${id}`),
    enabled: Boolean(id),
  });
}

export function useSubscribeMentor() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (mentorId: string) =>
      apiClient<Subscription>("/subscriptions", {
        method: "POST",
        body: JSON.stringify({ mentor_id: mentorId }),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["mentors"] });
      queryClient.invalidateQueries({ queryKey: ["mySubscriptions"] });
    },
  });
}

export function useCreateMentorProfile() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: {
      bio: string;
      category: string;
      intro_youtube_url?: string | null;
      seat_limit: number;
      price_per_month: number;
    }) => apiClient.post<MentorProfile>("/mentors/profile", payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["mentors"] });
      queryClient.invalidateQueries({ queryKey: ["mentor"] });
    },
  });
}

export function useUpdateMentorProfile() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: {
      bio?: string;
      category?: string;
      intro_youtube_url?: string | null;
      seat_limit?: number;
      price_per_month?: number;
      is_active?: boolean;
    }) => apiClient.patch<MentorProfile>("/mentors/profile", payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["mentors"] });
      queryClient.invalidateQueries({ queryKey: ["mentor"] });
    },
  });
}

