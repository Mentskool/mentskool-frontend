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

export const useConversations = (enabled: boolean = true) => {
  return useQuery<ConversationSummary[]>({
    queryKey: ["chat", "conversations"],
    queryFn: async () => apiClient.get<ConversationSummary[]>("/chat/conversations"),
    enabled,
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
            const payload = JSON.parse(event.data);
            if (payload?.type === "messages_read") {
              queryClient.setQueryData<DirectMessage[]>(["chat", "dm", targetUserId], (prev = []) =>
                prev.map((m) =>
                  m.recipient_id === payload.reader_id && !m.read_at
                    ? { ...m, read_at: payload.read_at }
                    : m
                )
              );
              return;
            }
            const msg: DirectMessage = payload;
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

export const useMarkDirectMessagesRead = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (targetUserId: string) => {
      return apiClient.post<{ updated_count: number; read_at: string }>(
        `/chat/dm/${targetUserId}/read`,
        {}
      );
    },
    onSuccess: (data, targetUserId) => {
      if (data.updated_count > 0) {
        queryClient.setQueryData<DirectMessage[]>(["chat", "dm", targetUserId], (prev = []) =>
          prev.map((m) =>
            m.sender_id === targetUserId && !m.read_at ? { ...m, read_at: data.read_at } : m
          )
        );
        queryClient.setQueryData<ConversationSummary[]>(["chat", "conversations"], (prev = []) =>
          prev.map((c) => (c.user_id === targetUserId ? { ...c, unread_count: 0 } : c))
        );
      }
    },
  });
};
