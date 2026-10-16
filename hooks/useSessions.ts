import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/lib/api";
import {
  AvailableSlotsResponse,
  Mentor1on1Card,
  MentorSessionSettings,
  SessionBooking,
  SessionBookingStatus,
  SessionReview,
} from "@/lib/types";
import { useAuthStore } from "@/store/authStore";

export const use1on1Mentors = (category?: string) => {
  return useQuery<Mentor1on1Card[]>({
    queryKey: ["sessions", "mentors", category],
    queryFn: async () => {
      const url = category ? `/sessions/mentors?category=${category}` : "/sessions/mentors";
      return apiClient.get<Mentor1on1Card[]>(url);
    },
  });
};

export const use1on1MentorDetail = (mentorIdOrSlug: string) => {
  return useQuery<Mentor1on1Card>({
    queryKey: ["sessions", "mentor", mentorIdOrSlug],
    queryFn: async () => {
      return apiClient.get<Mentor1on1Card>(`/sessions/mentors/${mentorIdOrSlug}`);
    },
    enabled: !!mentorIdOrSlug,
  });
};

export const useAvailableSlots = (mentorIdOrSlug: string, date: string) => {
  return useQuery<AvailableSlotsResponse>({
    queryKey: ["sessions", "slots", mentorIdOrSlug, date],
    queryFn: async () => {
      return apiClient.get<AvailableSlotsResponse>(
        `/sessions/mentors/${mentorIdOrSlug}/available-slots?date=${date}`
      );
    },
    enabled: !!mentorIdOrSlug && !!date,
  });
};

export const useMySessionBookings = (status?: SessionBookingStatus) => {
  const { isAuthenticated, isLoading } = useAuthStore();
  return useQuery<SessionBooking[]>({
    queryKey: ["sessions", "my-bookings", status],
    queryFn: async () => {
      const url = status ? `/sessions/my-bookings?status=${status}` : "/sessions/my-bookings";
      return apiClient.get<SessionBooking[]>(url);
    },
    enabled: !isLoading && isAuthenticated,
  });
};

export const useBookSession = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: {
      mentor_id: string;
      scheduled_at: string;
      agenda_notes: string;
      payment_id?: string | null;
    }) => {
      return apiClient.post<SessionBooking>("/sessions/book", payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sessions"] });
    },
  });
};

export const useApproveSession = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      bookingId,
      meeting_link,
    }: {
      bookingId: string;
      meeting_link: string;
    }) => {
      return apiClient.post<SessionBooking>(`/sessions/bookings/${bookingId}/approve`, {
        meeting_link,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sessions"] });
    },
  });
};

export const useRejectSession = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      bookingId,
      reason,
    }: {
      bookingId: string;
      reason?: string;
    }) => {
      return apiClient.post<SessionBooking>(`/sessions/bookings/${bookingId}/reject`, {
        reason,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sessions"] });
    },
  });
};

export const useCompleteSession = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (bookingId: string) => {
      return apiClient.post<SessionBooking>(`/sessions/bookings/${bookingId}/complete`, {});
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sessions"] });
    },
  });
};

export const useSubmitSessionReview = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      bookingId,
      rating,
      comment,
    }: {
      bookingId: string;
      rating: number;
      comment: string;
    }) => {
      return apiClient.post<SessionReview>(`/sessions/bookings/${bookingId}/review`, {
        rating,
        comment,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sessions"] });
    },
  });
};

export const useMentorSessionSettings = () => {
  const { isAuthenticated, isLoading } = useAuthStore();
  return useQuery<MentorSessionSettings>({
    queryKey: ["sessions", "mentor-settings"],
    queryFn: async () => {
      return apiClient.get<MentorSessionSettings>("/sessions/mentor/settings");
    },
    enabled: !isLoading && isAuthenticated,
  });
};

export const useUpdateMentorSessionSettings = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: Partial<MentorSessionSettings>) => {
      return apiClient.patch<MentorSessionSettings>("/sessions/mentor/settings", payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sessions"] });
    },
  });
};
