import { useEffect, useRef } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/lib/api";
import { ConversationSummary, DirectMessage, GroupMessage } from "@/lib/types";
import { auth } from "@/lib/firebase";

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
    onSuccess: (newMessage) => {
      queryClient.setQueryData<GroupMessage[]>(["chat", "cohort", mentorId], (prev = []) => {
        if (prev.some((m) => m.id === newMessage.id)) return prev;
        return [...prev, newMessage];
      });
    },
  });
};

export const useConversations = () => {
  return useQuery<ConversationSummary[]>({
    queryKey: ["chat", "conversations"],
    queryFn: async () => apiClient.get<ConversationSummary[]>("/chat/conversations"),
    refetchInterval: 10000,
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
    onSuccess: (newMessage) => {
      queryClient.setQueryData<DirectMessage[]>(["chat", "dm", targetUserId], (prev = []) => {
        if (prev.some((m) => m.id === newMessage.id)) return prev;
        return [...prev, newMessage];
      });
      queryClient.invalidateQueries({ queryKey: ["chat", "conversations"] });
    },
  });
};

export const useCohortWebSocket = (mentorId?: string) => {
  const queryClient = useQueryClient();
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    if (!mentorId) return;
    let isCancelled = false;

    const connectWs = async () => {
      const user = auth.currentUser;
      if (!user) return;
      try {
        const token = await user.getIdToken();
        if (isCancelled) return;

        const wsBase = process.env.NEXT_PUBLIC_WS_URL || "ws://localhost:8000";
        const ws = new WebSocket(`${wsBase}/ws/chat/cohort/${mentorId}?token=${encodeURIComponent(token)}`);
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
      } catch (err) {
        console.warn("Could not get ID token for cohort WS:", err);
      }
    };

    connectWs();

    return () => {
      isCancelled = true;
      if (wsRef.current) {
        wsRef.current.close();
        wsRef.current = null;
      }
    };
  }, [mentorId, queryClient]);

  return wsRef;
};

export const useDirectWebSocket = (targetUserId?: string) => {
  const queryClient = useQueryClient();
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    if (!targetUserId) return;
    let isCancelled = false;

    const connectWs = async () => {
      const user = auth.currentUser;
      if (!user) return;
      try {
        const token = await user.getIdToken();
        if (isCancelled) return;

        const wsBase = process.env.NEXT_PUBLIC_WS_URL || "ws://localhost:8000";
        const ws = new WebSocket(`${wsBase}/ws/chat/dm/${targetUserId}?token=${encodeURIComponent(token)}`);
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
      } catch (err) {
        console.warn("Could not get ID token for DM WS:", err);
      }
    };

    connectWs();

    return () => {
      isCancelled = true;
      if (wsRef.current) {
        wsRef.current.close();
        wsRef.current = null;
      }
    };
  }, [targetUserId, queryClient]);

  return wsRef;
};
