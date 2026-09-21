import { useEffect, useRef } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/lib/api";
import { ConversationSummary, DirectMessage, GroupMessage } from "@/lib/types";
import { useAuthStore } from "@/store/authStore";

export const useCohortMessages = (mentorId?: string) => {
  return useQuery<GroupMessage[]>({
    queryKey: ["chat", "cohort", mentorId],
    queryFn: async () => {
      if (!mentorId) return [];
      return apiClient.get<GroupMessage[]>(`/chat/cohort/${mentorId}`);
    },
    enabled: !!mentorId,
    refetchInterval: 5000, // Background poll fallback
  });
};

export const useSendCohortMessage = (mentorId?: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (content: string) => {
      if (!mentorId) throw new Error("Mentor ID required");
      return apiClient.post<GroupMessage>(`/chat/cohort/${mentorId}`, { content });
    },
    onSuccess: (newMsg) => {
      queryClient.setQueryData<GroupMessage[]>(["chat", "cohort", mentorId], (prev = []) => {
        if (prev.some((m) => m.id === newMsg.id)) return prev;
        return [...prev, newMsg];
      });
    },
  });
};

export const useDirectMessages = (targetUserId?: string) => {
  return useQuery<DirectMessage[]>({
    queryKey: ["chat", "dm", targetUserId],
    queryFn: async () => {
      if (!targetUserId) return [];
      return apiClient.get<DirectMessage[]>(`/chat/dm/${targetUserId}`);
    },
    enabled: !!targetUserId,
    refetchInterval: 5000,
  });
};

export const useSendDirectMessage = (targetUserId?: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (content: string) => {
      if (!targetUserId) throw new Error("Target user ID required");
      return apiClient.post<DirectMessage>(`/chat/dm/${targetUserId}`, { content });
    },
    onSuccess: (newMsg) => {
      queryClient.setQueryData<DirectMessage[]>(["chat", "dm", targetUserId], (prev = []) => {
        if (prev.some((m) => m.id === newMsg.id)) return prev;
        return [...prev, newMsg];
      });
      queryClient.invalidateQueries({ queryKey: ["chat", "conversations"] });
    },
  });
};

export const useConversations = () => {
  return useQuery<ConversationSummary[]>({
    queryKey: ["chat", "conversations"],
    queryFn: async () => {
      return apiClient.get<ConversationSummary[]>("/chat/conversations");
    },
    refetchInterval: 10000,
  });
};

export const useCohortWebSocket = (mentorId?: string) => {
  const queryClient = useQueryClient();
  const token = useAuthStore((s) => s.accessToken);
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    if (!mentorId || !token) return;
    const wsBase = process.env.NEXT_PUBLIC_WS_URL || "ws://localhost:8000";
    const ws = new WebSocket(`${wsBase}/ws/chat/cohort/${mentorId}?token=${token}`);
    wsRef.current = ws;

    ws.onmessage = (event) => {
      try {
        const msg: GroupMessage = JSON.parse(event.data);
        queryClient.setQueryData<GroupMessage[]>(["chat", "cohort", mentorId], (prev = []) => {
          if (prev.some((m) => m.id === msg.id)) return prev;
          return [...prev, msg];
        });
      } catch (e) {
        console.error("Error handling cohort WS message:", e);
      }
    };

    return () => {
      ws.close();
      wsRef.current = null;
    };
  }, [mentorId, token, queryClient]);

  return wsRef;
};

export const useDirectWebSocket = (targetUserId?: string) => {
  const queryClient = useQueryClient();
  const token = useAuthStore((s) => s.accessToken);
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    if (!targetUserId || !token) return;
    const wsBase = process.env.NEXT_PUBLIC_WS_URL || "ws://localhost:8000";
    const ws = new WebSocket(`${wsBase}/ws/chat/dm/${targetUserId}?token=${token}`);
    wsRef.current = ws;

    ws.onmessage = (event) => {
      try {
        const msg: DirectMessage = JSON.parse(event.data);
        queryClient.setQueryData<DirectMessage[]>(["chat", "dm", targetUserId], (prev = []) => {
          if (prev.some((m) => m.id === msg.id)) return prev;
          return [...prev, msg];
        });
        queryClient.invalidateQueries({ queryKey: ["chat", "conversations"] });
      } catch (e) {
        console.error("Error handling DM WS message:", e);
      }
    };

    return () => {
      ws.close();
      wsRef.current = null;
    };
  }, [targetUserId, token, queryClient]);

  return wsRef;
};
