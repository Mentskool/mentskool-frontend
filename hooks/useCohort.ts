import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/lib/api";
import { Announcement, Resource } from "@/lib/types";

export const useAnnouncements = (mentorId?: string) => {
  return useQuery<Announcement[]>({
    queryKey: ["cohort", "announcements", mentorId],
    queryFn: async () => {
      const url = mentorId ? `/cohort/announcements?mentor_id=${mentorId}` : "/cohort/announcements";
      return apiClient.get<Announcement[]>(url);
    },
  });
};

export const useCreateAnnouncement = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: { title: string; body: string }) => {
      return apiClient.post<Announcement>("/cohort/announcements", payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cohort", "announcements"] });
    },
  });
};

export const useDeleteAnnouncement = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      return apiClient.delete(`/cohort/announcements/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cohort", "announcements"] });
    },
  });
};

export const useResources = (mentorId?: string) => {
  return useQuery<Resource[]>({
    queryKey: ["cohort", "resources", mentorId],
    queryFn: async () => {
      const url = mentorId ? `/cohort/resources?mentor_id=${mentorId}` : "/cohort/resources";
      return apiClient.get<Resource[]>(url);
    },
  });
};

export const useCreateResource = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: { title: string; url: string }) => {
      return apiClient.post<Resource>("/cohort/resources", payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cohort", "resources"] });
    },
  });
};

export const useDeleteResource = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      return apiClient.delete(`/cohort/resources/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cohort", "resources"] });
    },
  });
};
