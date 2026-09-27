import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";
import {
  MentorListResponse,
  MentorProfile,
  MentorReview,
  MentorReviewsListResponse,
  ReviewEligibilityResponse,
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

export function useMentor(id?: string, initialData?: MentorProfile) {
  return useQuery({
    queryKey: ["mentor", id],
    queryFn: () => apiClient<MentorProfile>(`/mentors/${id}`),
    enabled: Boolean(id),
    initialData,
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
      queryClient.invalidateQueries({ queryKey: ["mentor"] });
      queryClient.invalidateQueries({ queryKey: ["mySubscriptions"] });
    },
  });
}

export function useMyMentorProfile() {
  return useQuery({
    queryKey: ["myMentorProfile"],
    queryFn: () => apiClient<MentorProfile>("/mentors/me"),
  });
}

export function useUploadMentorProof() {
  return useMutation({
    mutationFn: async ({ file, proofType }: { file: File; proofType: string }) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("proof_type", proofType);

      return apiClient<{ url: string; proof_type: string }>("/mentors/upload-proof", {
        method: "POST",
        body: formData,
      });
    },
  });
}

export function useCreateMentorProfile() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: {
      bio: string;
      category: string;
      college?: string | null;
      exam_rank?: string | null;
      phone_number?: string | null;
      college_id_proof_url?: string | null;
      scorecard_proof_url?: string | null;
      college_email?: string | null;
      payout_upi_id?: string | null;
      payout_account_number?: string | null;
      payout_ifsc?: string | null;
      payout_account_name?: string | null;
      avatar_url?: string | null;
      intro_youtube_url?: string | null;
      seat_limit: number;
      price_per_month: number;
    }) => apiClient.post<MentorProfile>("/mentors/profile", payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["mentors"] });
      queryClient.invalidateQueries({ queryKey: ["mentor"] });
      queryClient.invalidateQueries({ queryKey: ["myMentorProfile"] });
    },
  });
}

export function useUpdateMentorProfile() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: {
      bio?: string;
      category?: string;
      college?: string | null;
      exam_rank?: string | null;
      phone_number?: string | null;
      college_id_proof_url?: string | null;
      scorecard_proof_url?: string | null;
      college_email?: string | null;
      payout_upi_id?: string | null;
      payout_account_number?: string | null;
      payout_ifsc?: string | null;
      payout_account_name?: string | null;
      avatar_url?: string | null;
      intro_youtube_url?: string | null;
      seat_limit?: number;
      price_per_month?: number;
      is_active?: boolean;
    }) => apiClient.patch<MentorProfile>("/mentors/profile", payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["mentors"] });
      queryClient.invalidateQueries({ queryKey: ["mentor"] });
      queryClient.invalidateQueries({ queryKey: ["myMentorProfile"] });
    },
  });
}

export function useMentorReviews(identifier?: string) {
  return useQuery({
    queryKey: ["mentorReviews", identifier],
    queryFn: () => apiClient<MentorReviewsListResponse>(`/mentors/${identifier}/reviews`),
    enabled: Boolean(identifier),
  });
}

export function useMentorReviewEligibility(identifier?: string, enabled = true) {
  return useQuery({
    queryKey: ["mentorReviewEligibility", identifier],
    queryFn: () => apiClient<ReviewEligibilityResponse>(`/mentors/${identifier}/reviews/eligibility`),
    enabled: Boolean(identifier) && enabled,
    retry: false,
  });
}

export function useSubmitMentorReview(identifier?: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: { rating: number; comment: string }) =>
      apiClient.post<MentorReview>(`/mentors/${identifier}/reviews`, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["mentorReviews", identifier] });
      queryClient.invalidateQueries({ queryKey: ["mentorReviewEligibility", identifier] });
      queryClient.invalidateQueries({ queryKey: ["mentor", identifier] });
      queryClient.invalidateQueries({ queryKey: ["mentors"] });
    },
  });
}


