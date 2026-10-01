import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/lib/api";
import { Meeting, MeetingStatus } from "@/lib/types";
import { useAuthStore } from "@/store/authStore";

export const useMyMeetings = () => {
  const { isAuthenticated, isLoading } = useAuthStore();
  return useQuery<Meeting[]>({
    queryKey: ["meetings", "me"],
    queryFn: async () => {
      return apiClient.get<Meeting[]>("/meetings/me");
    },
    enabled: !isLoading && isAuthenticated,
  });
};

export const useCreateMeeting = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: {
      mentor_id: string;
      student_id?: string | null;
      title: string;
      scheduled_at?: string | null;
      meeting_link?: string | null;
    }) => {
      return apiClient.post<Meeting>("/meetings", payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["meetings"] });
    },
  });
};

export const useUpdateMeeting = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      meetingId,
      payload,
    }: {
      meetingId: string;
      payload: {
        title?: string;
        scheduled_at?: string;
        meeting_link?: string;
        status?: MeetingStatus;
        student_id?: string | null;
      };
    }) => {
      return apiClient.patch<Meeting>(`/meetings/${meetingId}`, payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["meetings"] });
    },
  });
};

export const useDeleteMeeting = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (meetingId: string) => {
      return apiClient.delete(`/meetings/${meetingId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["meetings"] });
    },
  });
};
