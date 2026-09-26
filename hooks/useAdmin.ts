import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";
import { AdminMentorItem, AdminMentorListResponse } from "@/lib/types";

export function useAdminMentors(status?: string, search?: string) {
  const queryParams = new URLSearchParams();
  if (status && status !== "ALL") queryParams.set("status", status);
  if (search && search.trim()) queryParams.set("search", search.trim());

  return useQuery({
    queryKey: ["adminMentors", { status, search }],
    queryFn: () =>
      apiClient<AdminMentorListResponse>(`/admin/mentors?${queryParams.toString()}`),
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
      queryClient.invalidateQueries({ queryKey: ["mentors"] });
    },
  });
}
