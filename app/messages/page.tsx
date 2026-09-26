"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import {
  useCohortMessages,
  useSendCohortMessage,
  useDirectMessages,
  useSendDirectMessage,
  useConversations,
  useCohortWebSocket,
  useDirectWebSocket,
} from "@/hooks/useChat";
import { useSubscriptions } from "@/hooks/useSubscriptions";
import { Button } from "@/components/ui/Button";
import {
  Search,
  Users,
  MessageSquare,
  Send,
  ArrowLeft,
  CheckCheck,
  ShieldCheck,
  Sparkles,
  Lock,
  Compass,
  User,
} from "lucide-react";

type ActiveChat =
  | { type: "cohort"; mentorId: string; title: string }
  | { type: "dm"; contactId: string; contactName: string; role: string };

function formatMessageTime(dateStr: string) {
  try {
    const d = new Date(dateStr);
    return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  } catch {
    return "";
  }
}

function formatConversationTime(dateStr?: string | null) {
  if (!dateStr) return "";
  try {
    const d = new Date(dateStr);
    const now = new Date();
    const isToday = d.toDateString() === now.toDateString();
    if (isToday) {
      return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    }
    return d.toLocaleDateString([], { month: "short", day: "numeric" });
  } catch {
    return "";
  }
}

function MessagesContent() {
  const searchParams = useSearchParams();
  const initialUser = searchParams.get("user");

  const { user, isAuthenticated } = useAuthStore();
  const isMentor = user?.role === "MENTOR";

  // Subscriptions to determine active cohort mentor id
  const { data: subsData } = useSubscriptions();
  const activeSub = subsData?.items?.find((s) => s.status === "ACTIVE");
  const cohortMentorId = isMentor ? user?.id : activeSub?.mentor_id;
  const cohortMentorName = isMentor ? user?.full_name : activeSub?.mentor_name;

  // Direct conversations list
  const { data: conversations, isLoading: convsLoading } = useConversations();

  // Active chat state
  const [activeChat, setActiveChat] = useState<ActiveChat | null>(null);

  // Filter & Search states (WhatsApp style)
  const [filterType, setFilterType] = useState<"all" | "direct" | "cohort">("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Mobile responsive view: 'list' shows chat list, 'chat' shows message thread
  const [mobileView, setMobileView] = useState<"list" | "chat">("list");

  // Cohort Chat hooks
  const { data: cohortMsgs, isLoading: cohortLoading } = useCohortMessages(cohortMentorId);
  const sendCohortMutation = useSendCohortMessage(cohortMentorId);
  const [cohortInput, setCohortInput] = useState("");

  // Direct Chat hooks
  const activeContactId = activeChat?.type === "dm" ? activeChat.contactId : undefined;
  const { data: directMsgs, isLoading: directLoading } = useDirectMessages(activeContactId);
  const sendDirectMutation = useSendDirectMessage(activeContactId || "");
  const [directInput, setDirectInput] = useState("");

  // Live real-time WebSockets
  useCohortWebSocket(cohortMentorId);
  useDirectWebSocket(activeContactId);

  // Auto-scroll ref
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = (smooth = true) => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: smooth ? "smooth" : "auto",
        block: "end",
      });
    }
  };

  // Initial active chat resolution
  useEffect(() => {
    if (initialUser && conversations) {
      const contact = conversations.find((c) => c.user_id === initialUser);
      if (contact) {
        setActiveChat({
          type: "dm",
          contactId: contact.user_id,
          contactName: contact.full_name,
          role: contact.role,
        });
        setMobileView("chat");
        return;
      }
    }

    if (!activeChat) {
      if (initialUser) {
        setActiveChat({
          type: "dm",
          contactId: initialUser,
          contactName: "Direct Message",
          role: isMentor ? "STUDENT" : "MENTOR",
        });
        setMobileView("chat");
      } else if (cohortMentorId) {
        // Default directly to Cohort Discussion channel (seamless inbox)
        setActiveChat({
          type: "cohort",
          mentorId: cohortMentorId,
          title: isMentor ? "Cohort Discussion Channel" : `${cohortMentorName || "Mentor"}'s Cohort Channel`,
        });
      } else if (conversations && conversations.length > 0) {
        const first = conversations[0];
        setActiveChat({
          type: "dm",
          contactId: first.user_id,
          contactName: first.full_name,
          role: first.role,
        });
      }
    }
  }, [initialUser, conversations, cohortMentorId, cohortMentorName, isMentor, activeChat]);

  // Scroll to bottom whenever chat or messages update
  useEffect(() => {
    scrollToBottom(false);
  }, [activeChat?.type, activeContactId]);

  useEffect(() => {
    scrollToBottom(true);
  }, [cohortMsgs?.length, directMsgs?.length]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeChat) return;

    if (activeChat.type === "cohort") {
      const text = cohortInput.trim();
      if (!text || sendCohortMutation.isPending) return;
      setCohortInput("");
      try {
        await sendCohortMutation.mutateAsync(text);
        scrollToBottom(true);
      } catch (err) {
        console.error("Failed to send cohort message", err);
      }
    } else {
      const text = directInput.trim();
      if (!text || sendDirectMutation.isPending) return;
      setDirectInput("");
      try {
        await sendDirectMutation.mutateAsync(text);
        scrollToBottom(true);
      } catch (err) {
        console.error("Failed to send direct message", err);
      }
    }
  };

  // Filtered direct conversations
  const filteredConversations = useMemo(() => {
    if (!conversations) return [];
    let list = [...conversations];
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (c) =>
          c.full_name.toLowerCase().includes(q) ||
          (c.last_message && c.last_message.toLowerCase().includes(q))
      );
    }
    return list;
  }, [conversations, searchQuery]);

  // Check if cohort matches search and category filter
  const isCohortVisible = useMemo(() => {
    if (!cohortMentorId) return false;
    if (filterType === "direct") return false;
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();
    return (
      "cohort discussion".includes(q) ||
      (cohortMentorName && cohortMentorName.toLowerCase().includes(q)) ||
      (cohortMsgs && cohortMsgs.some((m) => m.content.toLowerCase().includes(q)))
    );
  }, [cohortMentorId, filterType, searchQuery, cohortMentorName, cohortMsgs]);

  const lastCohortMessage =
    cohortMsgs && cohortMsgs.length > 0 ? cohortMsgs[cohortMsgs.length - 1] : null;

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

  // If user has no cohort and no DMs at all
  const hasNoChats = !cohortMentorId && (!conversations || conversations.length === 0);

  if (hasNoChats && !convsLoading) {
    return (
      <div className="max-w-2xl mx-auto py-12 px-4">
        <div className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-12 text-center shadow-soft space-y-5">
          <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto text-blue-600">
            <MessageSquare className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold font-display text-slate-900">
              No Active Chats Yet
            </h2>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Join an accountability mentorship cohort to access real-time peer cohort channels and private 1:1 direct messaging with top mentors.
            </p>
          </div>
          <Link href="/mentors">
            <Button
              size="md"
              variant="primary"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-soft inline-flex items-center gap-2"
            >
              <Compass className="w-4 h-4" />
              <span>Explore Verified Mentors</span>
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col min-h-0">
      {/* Unified WhatsApp-Style Shell Container */}
      <div className="flex-1 bg-white rounded-2xl border border-slate-200/90 shadow-soft overflow-hidden flex flex-col md:flex-row min-h-0">
        
        {/* ======================================================== */}
        {/* LEFT PANEL: UNIFIED CHAT LIST (WhatsApp-style Inbox)     */}
        {/* ======================================================== */}
        <div
          className={`w-full md:w-80 lg:w-96 border-r border-slate-200/80 bg-slate-50/60 flex flex-col h-full flex-shrink-0 min-h-0 ${
            mobileView === "chat" ? "hidden md:flex" : "flex"
          }`}
        >
          {/* Header & Title */}
          <div className="p-3.5 sm:p-4 border-b border-slate-200/80 bg-white">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-bold font-display text-slate-900 tracking-tight">
                  Messages & Cohort
                </h1>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="Live Sync Active" />
              </div>
              <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                {(cohortMentorId ? 1 : 0) + (conversations?.length || 0)} Chats
              </span>
            </div>

            {/* Search Bar */}
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search chats or messages..."
                className="w-full pl-9 pr-7 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all text-slate-800"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 p-0.5"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Quick Filter Pills (WhatsApp Style: All, Direct, Cohort) */}
            <div className="flex items-center gap-1.5 mt-3">
              <button
                onClick={() => setFilterType("all")}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                  filterType === "all"
                    ? "bg-slate-900 text-white shadow-xs"
                    : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                All
              </button>
              {cohortMentorId && (
                <button
                  onClick={() => setFilterType("cohort")}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
                    filterType === "cohort"
                      ? "bg-blue-600 text-white shadow-xs"
                      : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  <Users className="w-3 h-3" />
                  <span>Cohort</span>
                </button>
              )}
              <button
                onClick={() => setFilterType("direct")}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
                  filterType === "direct"
                    ? "bg-indigo-600 text-white shadow-xs"
                    : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                <MessageSquare className="w-3 h-3" />
                <span>Direct ({conversations?.length || 0})</span>
              </button>
            </div>
          </div>

          {/* Unified Conversations Feed */}
          <div className="flex-1 overflow-y-auto divide-y divide-slate-100 min-h-0">
            {/* 1. Cohort Community Discussion Chat Item */}
            {isCohortVisible && (
              <button
                onClick={() => {
                  setActiveChat({
                    type: "cohort",
                    mentorId: cohortMentorId!,
                    title: isMentor
                      ? "Cohort Discussion Channel"
                      : `${cohortMentorName || "Mentor"}'s Cohort Channel`,
                  });
                  setMobileView("chat");
                }}
                className={`w-full text-left p-3.5 transition-all flex items-start gap-3 relative group ${
                  activeChat?.type === "cohort"
                    ? "bg-blue-50/90 border-l-4 border-blue-600"
                    : "hover:bg-slate-100/70"
                }`}
              >
                {/* Cohort Avatar */}
                <div className="relative flex-shrink-0">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-sky-500 text-white flex items-center justify-center shadow-xs">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white ring-1 ring-emerald-400" />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <div className="flex items-center gap-1.5 truncate">
                      <span className="font-bold text-sm text-slate-900 truncate">
                        # cohort-discussion
                      </span>
                    </div>
                    {lastCohortMessage && (
                      <span className="text-[10px] font-medium text-slate-400 whitespace-nowrap">
                        {formatConversationTime(lastCohortMessage.created_at)}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.2 rounded bg-blue-100/80 text-blue-700 border border-blue-200">
                      Cohort Community
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium truncate">
                      {isMentor ? "All enrolled students" : `Led by ${cohortMentorName || "Mentor"}`}
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 truncate mt-1">
                    {lastCohortMessage ? (
                      <span>
                        <strong className="text-slate-700 font-semibold">
                          {lastCohortMessage.sender_name || (lastCohortMessage.sender_id === user?.id ? "You" : "Member")}:
                        </strong>{" "}
                        {lastCohortMessage.content}
                      </span>
                    ) : (
                      "Live peer & mentor cohort discussions..."
                    )}
                  </p>
                </div>
              </button>
            )}

            {/* 2. Direct 1:1 Conversations */}
            {filterType !== "cohort" && (
              <>
                {filteredConversations.length === 0 && !isCohortVisible ? (
                  <div className="py-12 px-4 text-center">
                    <p className="text-xs text-slate-400">
                      {searchQuery
                        ? `No conversations matching "${searchQuery}"`
                        : "No direct conversations yet."}
                    </p>
                  </div>
                ) : (
                  filteredConversations.map((c) => {
                    const isSelected =
                      activeChat?.type === "dm" && activeChat.contactId === c.user_id;

                    const isContactMentor = c.role === "MENTOR";

                    return (
                      <button
                        key={c.user_id}
                        onClick={() => {
                          setActiveChat({
                            type: "dm",
                            contactId: c.user_id,
                            contactName: c.full_name,
                            role: c.role,
                          });
                          setMobileView("chat");
                        }}
                        className={`w-full text-left p-3.5 transition-all flex items-start gap-3 relative group ${
                          isSelected
                            ? "bg-blue-50/90 border-l-4 border-blue-600"
                            : "hover:bg-slate-100/70"
                        }`}
                      >
                        {/* Avatar */}
                        <div className="relative flex-shrink-0">
                          <div
                            className={`w-11 h-11 rounded-2xl flex items-center justify-center font-display font-bold text-sm shadow-xs ${
                              isContactMentor
                                ? "bg-emerald-700 text-white"
                                : "bg-slate-800 text-white"
                            }`}
                          >
                            {c.full_name
                              .split(" ")
                              .map((n) => n[0])
                              .slice(0, 2)
                              .join("")
                              .toUpperCase()}
                          </div>
                          {isContactMentor && (
                            <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white ring-1 ring-emerald-400" />
                          )}
                        </div>

                        {/* Details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1">
                            <span className="font-bold text-sm text-slate-900 truncate">
                              {c.full_name}
                            </span>
                            {c.last_message_at && (
                              <span className="text-[10px] font-medium text-slate-400 whitespace-nowrap">
                                {formatConversationTime(c.last_message_at)}
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-1.5 mt-0.5">
                            <span
                              className={`text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.2 rounded border ${
                                isContactMentor
                                  ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                                  : "bg-slate-100 text-slate-600 border-slate-200"
                              }`}
                            >
                              {c.role}
                            </span>
                            <span className="text-[10px] text-slate-400">1:1 Direct</span>
                          </div>

                          <p className="text-xs text-slate-500 truncate mt-1">
                            {c.last_message ? c.last_message : "Start private discussion..."}
                          </p>
                        </div>
                      </button>
                    );
                  })
                )}
              </>
            )}
          </div>
        </div>

        {/* ======================================================== */}
        {/* RIGHT PANEL: ACTIVE CHAT SCREEN (Full WhatsApp Window)   */}
        {/* ======================================================== */}
        <div
          className={`flex-1 flex flex-col h-full bg-slate-50/30 overflow-hidden min-h-0 ${
            mobileView === "list" ? "hidden md:flex" : "flex"
          }`}
        >
          {activeChat ? (
            <>
              {/* WhatsApp-Style Chat Header */}
              <div className="px-3.5 sm:px-6 py-3 border-b border-slate-200/80 bg-white flex items-center justify-between flex-shrink-0 z-10 shadow-xs">
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  {/* Mobile Back Button (Returns to list) */}
                  <button
                    onClick={() => setMobileView("list")}
                    className="md:hidden p-1.5 -ml-1 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
                    aria-label="Back to chat list"
                  >
                    <ArrowLeft className="w-5 h-5 text-slate-700" />
                  </button>

                  {/* Header Avatar */}
                  <div className="relative flex-shrink-0">
                    {activeChat.type === "cohort" ? (
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-xs">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                    ) : (
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-slate-800 text-white flex items-center justify-center font-bold text-xs sm:text-sm shadow-xs">
                        {activeChat.contactName
                          .split(" ")
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join("")
                          .toUpperCase()}
                      </div>
                    )}
                    <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white ring-1 ring-emerald-400" />
                  </div>

                  {/* Header Titles */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h2 className="font-bold text-sm sm:text-base text-slate-900 truncate leading-tight">
                        {activeChat.type === "cohort" ? "# cohort-discussion" : activeChat.contactName}
                      </h2>
                      {activeChat.type === "dm" && (
                        <span
                          className={`text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.2 rounded border ${
                            activeChat.role === "MENTOR"
                              ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                              : "bg-slate-100 text-slate-600 border-slate-200"
                          }`}
                        >
                          {activeChat.role}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-400 truncate leading-tight mt-0.5">
                      {activeChat.type === "cohort"
                        ? isMentor
                          ? "Cohort Members Discussion Channel • Real-time"
                          : `Led by Mentor ${cohortMentorName || ""} • Live Peer & Mentor Chat`
                        : "Private 1:1 Direct Channel"}
                    </p>
                  </div>
                </div>

                {/* Right Header Status Tag */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="hidden sm:inline">Live Sync</span>
                  </span>
                </div>
              </div>

              {/* Message Feed Container (Scrolls smoothly, auto-scrolls to bottom) */}
              <div
                className="flex-1 p-3.5 sm:p-5 overflow-y-auto space-y-3 min-h-0 bg-[#F9FBFC]"
              >
                {/* 1. Cohort Channel Messages */}
                {activeChat.type === "cohort" && (
                  <>
                    {cohortLoading ? (
                      <div className="py-16 text-center text-xs text-slate-400">
                        Connecting to cohort channel...
                      </div>
                    ) : !cohortMsgs || cohortMsgs.length === 0 ? (
                      <div className="py-16 text-center max-w-sm mx-auto space-y-3">
                        <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto text-blue-600">
                          <Users className="w-6 h-6" />
                        </div>
                        <p className="text-sm font-semibold text-slate-700">
                          👋 Welcome to the Cohort Channel!
                        </p>
                        <p className="text-xs text-slate-400">
                          Be the first to say hello, ask exam preparation questions, or discuss weekly accountability tasks with your peers and mentor.
                        </p>
                      </div>
                    ) : (
                      cohortMsgs.map((msg) => {
                        const isSelf = msg.sender_id === user?.id;
                        const isSenderMentor = msg.sender_role === "MENTOR";

                        return (
                          <div
                            key={msg.id}
                            className={`flex flex-col ${isSelf ? "items-end ml-auto" : "items-start mr-auto"} max-w-[85%] sm:max-w-md`}
                          >
                            {!isSelf && (
                              <div className="flex items-center gap-1.5 mb-1 pl-1">
                                <span className="text-xs font-semibold text-slate-800">
                                  {msg.sender_name || "Member"}
                                </span>
                                <span
                                  className={`text-[9px] px-1.5 py-0.2 rounded font-bold uppercase tracking-wider ${
                                    isSenderMentor
                                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                      : "bg-slate-100 text-slate-600 border border-slate-200"
                                  }`}
                                >
                                  {msg.sender_role}
                                </span>
                              </div>
                            )}

                            {/* Chat Bubble */}
                            <div
                              className={`p-3 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-wrap break-words shadow-xs ${
                                isSelf
                                  ? "bg-blue-600 text-white rounded-tr-xs"
                                  : "bg-white border border-slate-200/90 text-slate-800 rounded-tl-xs"
                              }`}
                            >
                              {msg.content}
                            </div>

                            {/* Timestamp + Read Receipt indicator */}
                            <div
                              className={`flex items-center gap-1 mt-1 px-1 text-[10px] ${
                                isSelf ? "text-slate-400" : "text-slate-400"
                              }`}
                            >
                              <span>{formatMessageTime(msg.created_at)}</span>
                              {isSelf && <CheckCheck className="w-3.5 h-3.5 text-blue-500" />}
                            </div>
                          </div>
                        );
                      })
                    )}
                  </>
                )}

                {/* 2. Direct Messages */}
                {activeChat.type === "dm" && (
                  <>
                    {directLoading ? (
                      <div className="py-16 text-center text-xs text-slate-400">
                        Loading messages...
                      </div>
                    ) : !directMsgs || directMsgs.length === 0 ? (
                      <div className="py-16 text-center max-w-sm mx-auto space-y-3">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mx-auto text-indigo-600">
                          <MessageSquare className="w-6 h-6" />
                        </div>
                        <p className="text-sm font-semibold text-slate-700">
                          Private 1:1 Discussion
                        </p>
                        <p className="text-xs text-slate-400">
                          Start your private conversation with {activeChat.contactName}. Ask doubts, share weekly progress, or request targeted feedback.
                        </p>
                      </div>
                    ) : (
                      directMsgs.map((msg) => {
                        const isSelf = msg.sender_id === user?.id;

                        return (
                          <div
                            key={msg.id}
                            className={`flex flex-col ${isSelf ? "items-end ml-auto" : "items-start mr-auto"} max-w-[85%] sm:max-w-md`}
                          >
                            {/* Chat Bubble */}
                            <div
                              className={`p-3 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-wrap break-words shadow-xs ${
                                isSelf
                                  ? "bg-blue-600 text-white rounded-tr-xs"
                                  : "bg-white border border-slate-200/90 text-slate-800 rounded-tl-xs"
                              }`}
                            >
                              {msg.content}
                            </div>

                            {/* Timestamp */}
                            <div className="flex items-center gap-1 mt-1 px-1 text-[10px] text-slate-400">
                              <span>{formatMessageTime(msg.created_at)}</span>
                              {isSelf && <CheckCheck className="w-3.5 h-3.5 text-blue-500" />}
                            </div>
                          </div>
                        );
                      })
                    )}
                  </>
                )}

                {/* Bottom Anchor for Auto-scroll */}
                <div ref={messagesEndRef} />
              </div>

              {/* Sticky Message Input Bar (Locked at the bottom of the chat container!) */}
              <form
                onSubmit={handleSend}
                className="p-2.5 sm:p-3.5 bg-white border-t border-slate-200 flex items-center gap-2 flex-shrink-0 z-10"
              >
                <input
                  type="text"
                  value={activeChat.type === "cohort" ? cohortInput : directInput}
                  onChange={(e) => {
                    if (activeChat.type === "cohort") {
                      setCohortInput(e.target.value);
                    } else {
                      setDirectInput(e.target.value);
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSend(e);
                    }
                  }}
                  placeholder={
                    activeChat.type === "cohort"
                      ? "Share question or update with cohort... (Enter to send)"
                      : `Message ${activeChat.contactName} directly... (Enter to send)`
                  }
                  className="flex-1 px-4 py-2.5 bg-slate-50 text-slate-900 text-xs sm:text-sm rounded-xl border border-slate-200 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                />
                <Button
                  type="submit"
                  size="md"
                  variant="primary"
                  disabled={
                    activeChat.type === "cohort"
                      ? !cohortInput.trim() || sendCohortMutation.isPending
                      : !directInput.trim() || sendDirectMutation.isPending
                  }
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl px-3 sm:px-4 py-2.5 flex items-center gap-1.5 shadow-soft flex-shrink-0"
                >
                  <Send className="w-4 h-4" />
                  <span className="hidden sm:inline">Send</span>
                </Button>
              </form>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-3">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                <MessageSquare className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-base text-slate-900">
                Select a conversation
              </h3>
              <p className="text-xs text-slate-400 max-w-sm">
                Choose the cohort channel or a 1:1 direct chat from the inbox on the left to start messaging.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function MessagesPage() {
  return (
    <React.Suspense
      fallback={
        <div className="py-16 text-center text-slate-400 text-sm">
          Loading messages & channels...
        </div>
      }
    >
      <MessagesContent />
    </React.Suspense>
  );
}
