import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/lib/api";
import { Subscription, SubscriptionListResponse, SubscriptionStatus } from "@/lib/types";

export function useSubscriptions(status?: SubscriptionStatus, limit = 20, offset = 0) {
  const queryParams = new URLSearchParams();
  if (status) queryParams.set("status", status);
  queryParams.set("limit", limit.toString());
  queryParams.set("offset", offset.toString());

  return useQuery({
    queryKey: ["mySubscriptions", { status, limit, offset }],
    queryFn: () => apiClient.get<SubscriptionListResponse>(`/subscriptions/me?${queryParams.toString()}`),
  });
}

export function useMySubscriptions() {
  return useSubscriptions();
}

export function useSubscribe() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (mentorId: string) =>
      apiClient.post<Subscription>("/subscriptions", { mentor_id: mentorId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["mySubscriptions"] });
      queryClient.invalidateQueries({ queryKey: ["mentors"] });
    },
  });
}

export function useCancelSubscription() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (subscriptionId: string) =>
      apiClient.patch<Subscription>(`/subscriptions/${subscriptionId}/cancel`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["mySubscriptions"] });
    },
  });
}
