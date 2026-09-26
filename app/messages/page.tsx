"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import {
  useCohortMessages,
  useSendCohortMessage,
  useDirectMessages,
  useSendDirectMessage,
  useConversations,
} from "@/hooks/useChat";
import { useSubscriptions } from "@/hooks/useSubscriptions";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";

function MessagesContent() {
  const searchParams = useSearchParams();
  const initialUser = searchParams.get("user");

  const { user, isAuthenticated } = useAuthStore();
  const isMentor = user?.role === "MENTOR";

  const [activeTab, setActiveTab] = useState<"cohort" | "dm">(initialUser ? "dm" : "cohort");
  const [selectedContactId, setSelectedContactId] = useState<string | null>(initialUser);

  // Subscriptions to get mentor id if user is a student
  const { data: subsData } = useSubscriptions();
  const activeSub = subsData?.items?.find((s) => s.status === "ACTIVE");
  const cohortMentorId = isMentor ? user?.id : activeSub?.mentor_id;

  // Cohort Chat hooks
  const { data: cohortMsgs, isLoading: cohortLoading } = useCohortMessages(cohortMentorId);
  const sendCohortMutation = useSendCohortMessage(cohortMentorId);
  const [cohortInput, setCohortInput] = useState("");
  const cohortScrollRef = useRef<HTMLDivElement>(null);

  // Direct Chat hooks
  const { data: conversations } = useConversations();
  const { data: directMsgs, isLoading: directLoading } = useDirectMessages(selectedContactId || undefined);
  const sendDirectMutation = useSendDirectMessage(selectedContactId || "");
  const [directInput, setDirectInput] = useState("");
  const directScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialUser) {
      setActiveTab("dm");
      setSelectedContactId(initialUser);
    }
  }, [initialUser]);

  useEffect(() => {
    if (activeTab === "cohort" && cohortScrollRef.current) {
      cohortScrollRef.current.scrollTop = cohortScrollRef.current.scrollHeight;
    }
  }, [cohortMsgs, activeTab]);

  useEffect(() => {
    if (activeTab === "dm" && directScrollRef.current) {
      directScrollRef.current.scrollTop = directScrollRef.current.scrollHeight;
    }
  }, [directMsgs, activeTab]);

  const handleSendCohort = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!cohortInput.trim() || sendCohortMutation.isPending) return;
    const text = cohortInput;
    setCohortInput("");
    await sendCohortMutation.mutateAsync(text);
  };

  const handleSendDirect = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!directInput.trim() || sendDirectMutation.isPending) return;
    const text = directInput;
    setDirectInput("");
    await sendDirectMutation.mutateAsync(text);
  };

  if (!isAuthenticated) {
    return (
      <div className="py-16 text-center max-w-md mx-auto">
        <h2 className="text-xl font-bold font-display text-ink mb-2">
          Authentication Required
        </h2>
        <p className="text-sm text-ink-muted mb-6">
          Sign in to participate in cohort discussions and 1:1 direct messaging.
        </p>
        <Link href="/login?redirect=/messages">
          <Button variant="primary" size="md">
            Sign In
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header Banner & Tabs */}
      <div className="rounded-2xl bg-gradient-to-r from-sky-50 via-blue-50/40 to-white border border-sky-100/80 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-soft">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-sky-100/80 border border-sky-200 text-[11px] font-bold text-sky-900 uppercase tracking-wider mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse"></span>
            Real-Time Communications
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-ink tracking-tight">
            Messages & Cohort Chat
          </h1>
          <p className="text-sm text-ink-muted mt-1">
            Real-time peer questions, strategy check-ins, and direct 1:1 mentor communications.
          </p>
        </div>

        <div className="flex items-center gap-1 bg-white p-1 rounded-control border border-sky-200/80 shadow-soft">
          <button
            onClick={() => setActiveTab("cohort")}
            className={`px-4 py-1.5 text-xs font-semibold rounded-control transition-all ${
              activeTab === "cohort"
                ? "bg-blue-600 text-white shadow-soft"
                : "text-ink-muted hover:text-ink hover:bg-sky-50/50"
            }`}
          >
            Cohort Channel
          </button>
          <button
            onClick={() => setActiveTab("dm")}
            className={`px-4 py-1.5 text-xs font-semibold rounded-control transition-all ${
              activeTab === "dm"
                ? "bg-blue-600 text-white shadow-soft"
                : "text-ink-muted hover:text-ink hover:bg-sky-50/50"
            }`}
          >
            Direct Messages ({conversations?.length ?? 0})
          </button>
        </div>
      </div>

      {/* Cohort Chat Tab */}
      {activeTab === "cohort" && (
        <div>
          {!cohortMentorId ? (
            <EmptyState
              title="No Active Cohort Found"
              description="Subscribe to a mentor to gain access to their cohort discussion channel."
              actionLabel="Explore Mentors"
              onAction={() => window.location.assign("/mentors")}
            />
          ) : (
            <Card className="bg-white border-mist p-0 overflow-hidden flex flex-col h-[600px]">
              {/* Channel Header */}
              <div className="px-6 py-3.5 border-b border-mist bg-[#FAFAF9] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-moss animate-pulse" />
                  <span className="font-display font-bold text-sm text-ink">
                    # cohort-discussion
                  </span>
                </div>
                <span className="text-xs text-ink-faint">
                  Live WebSocket Connected
                </span>
              </div>

              {/* Message Feed */}
              <div
                ref={cohortScrollRef}
                className="flex-1 p-6 overflow-y-auto space-y-4"
              >
                {cohortLoading ? (
                  <p className="text-center text-xs text-ink-faint py-8">
                    Connecting to cohort channel...
                  </p>
                ) : !cohortMsgs || cohortMsgs.length === 0 ? (
                  <div className="text-center py-16 text-xs text-ink-faint">
                    👋 No messages yet in this cohort channel. Be the first to say hello!
                  </div>
                ) : (
                  cohortMsgs.map((msg) => {
                    const isSelf = msg.sender_id === user?.id;
                    const isSenderMentor = msg.sender_role === "MENTOR";

                    return (
                      <div
                        key={msg.id}
                        className={`flex flex-col ${
                          isSelf ? "items-end" : "items-start"
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-semibold text-ink">
                            {msg.sender_name || (isSelf ? "You" : "Student")}
                          </span>
                          <span
                            className={`text-[10px] px-1.5 py-0.2 rounded font-bold uppercase tracking-wider ${
                              isSenderMentor
                                ? "bg-moss/10 text-moss border border-moss/20"
                                : "bg-neutral-100 text-ink-faint border border-mist"
                            }`}
                          >
                            {msg.sender_role}
                          </span>
                          <span className="text-[10px] text-ink-faint">
                            {new Date(msg.created_at).toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                        </div>
                        <div
                          className={`max-w-xl p-3.5 rounded-card text-sm leading-relaxed ${
                            isSelf
                              ? "bg-blue-600 text-white font-medium shadow-soft"
                              : "bg-[#FAFAF9] border border-mist text-ink"
                          }`}
                        >
                          {msg.content}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Input Bar */}
              <form
                onSubmit={handleSendCohort}
                className="p-4 border-t border-mist bg-[#FAFAF9] flex items-center gap-3"
              >
                <input
                  type="text"
                  value={cohortInput}
                  onChange={(e) => setCohortInput(e.target.value)}
                  placeholder="Share doubt, update, or question with cohort..."
                  className="flex-1 px-4 py-2 bg-white text-ink text-sm rounded-control border border-mist placeholder:text-ink-faint focus:outline-none focus:border-blue-500"
                />
                <Button
                  type="submit"
                  size="md"
                  variant="primary"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg"
                  disabled={!cohortInput.trim() || sendCohortMutation.isPending}
                >
                  Send
                </Button>
              </form>
            </Card>
          )}
        </div>
      )}

      {/* Direct Messages Tab */}
      {activeTab === "dm" && (
        <div>
          {!conversations || conversations.length === 0 ? (
            <EmptyState
              title="No Direct Conversations"
              description={
                isMentor
                  ? "As students subscribe to your cohort, they will appear in your 1:1 messages list."
                  : "Subscribe to a mentor to start private 1:1 discussions."
              }
            />
          ) : (
            <Card className="bg-white border-mist p-0 overflow-hidden grid grid-cols-1 md:grid-cols-3 h-[600px]">
              {/* Left Contacts Sidebar */}
              <div className="border-r border-mist flex flex-col h-full bg-[#FAFAF9]">
                <div className="p-4 border-b border-mist">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-faint">
                    Conversations
                  </h3>
                </div>
                <div className="flex-1 overflow-y-auto divide-y divide-mist">
                  {conversations.map((c) => {
                    const isSelected = selectedContactId === c.user_id;
                    return (
                      <button
                        key={c.user_id}
                        onClick={() => setSelectedContactId(c.user_id)}
                        className={`w-full text-left p-4 transition-colors flex flex-col gap-1 ${
                          isSelected
                            ? "bg-white border-l-2 border-blue-600"
                            : "hover:bg-white/60"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-display font-bold text-sm text-ink">
                            {c.full_name}
                          </span>
                          <span className="text-[10px] uppercase font-semibold text-moss px-1.5 py-0.5 rounded bg-moss/10">
                            {c.role}
                          </span>
                        </div>
                        {c.last_message && (
                          <p className="text-xs text-ink-muted truncate">
                            {c.last_message}
                          </p>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Message Chat Area */}
              <div className="col-span-2 flex flex-col h-full bg-white">
                {selectedContactId ? (
                  <>
                    {/* Header */}
                    <div className="px-6 py-3.5 border-b border-mist bg-[#FAFAF9] flex items-center justify-between">
                      <span className="font-display font-bold text-sm text-ink">
                        {conversations.find((c) => c.user_id === selectedContactId)?.full_name || "Direct Message"}
                      </span>
                      <span className="text-xs text-ink-faint">
                        1:1 Private Channel
                      </span>
                    </div>

                    {/* Messages Feed */}
                    <div
                      ref={directScrollRef}
                      className="flex-1 p-6 overflow-y-auto space-y-4"
                    >
                      {directLoading ? (
                        <p className="text-center text-xs text-ink-faint py-8">
                          Loading conversation...
                        </p>
                      ) : !directMsgs || directMsgs.length === 0 ? (
                        <div className="text-center py-16 text-xs text-ink-faint">
                          No messages yet. Send a private message to get started.
                        </div>
                      ) : (
                        directMsgs.map((msg) => {
                          const isSelf = msg.sender_id === user?.id;

                          return (
                            <div
                              key={msg.id}
                              className={`flex flex-col ${
                                isSelf ? "items-end" : "items-start"
                              }`}
                            >
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-xs font-semibold text-ink">
                                  {isSelf ? "You" : msg.sender_name}
                                </span>
                                <span className="text-[10px] text-ink-faint">
                                  {new Date(msg.created_at).toLocaleTimeString([], {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  })}
                                </span>
                              </div>
                              <div
                                className={`max-w-md p-3.5 rounded-card text-sm leading-relaxed ${
                                  isSelf
                                    ? "bg-brand text-white font-medium"
                                    : "bg-[#FAFAF9] border border-mist text-ink"
                                }`}
                              >
                                {msg.content}
                              </div>
                            </div>
                          );
                        })
                      )}
                    </div>

                    {/* Input Bar */}
                    <form
                      onSubmit={handleSendDirect}
                      className="p-4 border-t border-mist bg-[#FAFAF9] flex items-center gap-3"
                    >
                      <input
                        type="text"
                        value={directInput}
                        onChange={(e) => setDirectInput(e.target.value)}
                        placeholder="Write a private message..."
                        className="flex-1 px-4 py-2 bg-white text-ink text-sm rounded-control border border-mist placeholder:text-ink-faint focus:outline-none focus:border-brand"
                      />
                      <Button
                        type="submit"
                        size="md"
                        variant="primary"
                        disabled={!directInput.trim() || sendDirectMutation.isPending}
                      >
                        Send
                      </Button>
                    </form>
                  </>
                ) : (
                  <div className="flex-1 flex items-center justify-center text-xs text-ink-faint">
                    Select a conversation from the sidebar.
                  </div>
                )}
              </div>
            </Card>
          )}
        </div>
      )}
    </div>
  );
}

export default function MessagesPage() {
  return (
    <React.Suspense
      fallback={
        <div className="py-16 text-center text-ink-faint text-sm">
          Loading messages & channels...
        </div>
      }
    >
      <MessagesContent />
    </React.Suspense>
  );
}
