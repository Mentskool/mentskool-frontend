"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import { useAuth } from "@/hooks/useAuth";
import { useStudentTasks, useMentorAssignedTasks } from "@/hooks/useTasks";
import { useMyMeetings } from "@/hooks/useMeetings";
import { useAnnouncements } from "@/hooks/useCohort";
import { useStudentQuizzes } from "@/hooks/useQuizzes";
import {
  Bell,
  ChevronDown,
  User,
  LogOut,
  CheckCircle2,
  AlertCircle,
  Clock,
  Hourglass,
  Calendar,
  BookOpen,
  Megaphone,
  Check,
} from "lucide-react";

interface NotificationItem {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  type: "task" | "meeting" | "quiz" | "announcement";
  icon: React.ReactNode;
  href: string;
}

export const WorkspaceHeader: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useAuthStore();
  const { logout } = useAuth();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [lastReadTimestamp, setLastReadTimestamp] = useState<number>(0);

  const notifRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const isStudent = user?.role === "STUDENT";
  const isMentor = user?.role === "MENTOR";

  // Load last read timestamp from localStorage
  useEffect(() => {
    if (user?.id) {
      const stored = localStorage.getItem(`mentskool_notif_last_read_${user.id}`);
      if (stored) {
        setLastReadTimestamp(parseInt(stored, 10));
      }
    }
  }, [user?.id]);

  // Click outside listener to dismiss popovers cleanly
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
        setShowNotifications(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
        setShowUserMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fetch real platform data
  const { data: studentTasks } = useStudentTasks(undefined);
  const { data: mentorTasks } = useMentorAssignedTasks(isMentor ? user?.id : undefined);
  const { data: meetings } = useMyMeetings();
  const { data: announcements } = useAnnouncements();
  const { data: studentQuizzes } = useStudentQuizzes();

  // Synthesize dynamic notifications feed
  const notifications = useMemo<NotificationItem[]>(() => {
    const list: NotificationItem[] = [];

    // 1. Task events for Student
    if (isStudent && studentTasks?.items) {
      studentTasks.items.forEach((task) => {
        if (task.status === "APPROVED") {
          list.push({
            id: `task-app-${task.id}`,
            title: `Task Approved: ${task.title}`,
            message: task.mentor_note || `Mentor ${task.mentor_name} approved your submission.`,
            timestamp: task.reviewed_at || task.created_at,
            type: "task",
            icon: <CheckCircle2 className="w-4 h-4 text-emerald-600" />,
            href: "/dashboard/tasks",
          });
        } else if (task.status === "REJECTED") {
          list.push({
            id: `task-rej-${task.id}`,
            title: `Rework Required: ${task.title}`,
            message: task.mentor_note || "Mentor requested updates on this task.",
            timestamp: task.reviewed_at || task.created_at,
            type: "task",
            icon: <AlertCircle className="w-4 h-4 text-rose-600" />,
            href: "/dashboard/tasks",
          });
        } else if (task.status === "ASSIGNED") {
          list.push({
            id: `task-asg-${task.id}`,
            title: `New Task Assigned: ${task.title}`,
            message: `Target week: ${task.week_start} to ${task.week_end}`,
            timestamp: task.created_at,
            type: "task",
            icon: <Clock className="w-4 h-4 text-blue-600" />,
            href: "/dashboard/tasks",
          });
        }
      });
    }

    // 2. Task events for Mentor
    if (isMentor && mentorTasks?.items) {
      mentorTasks.items.forEach((task) => {
        if (task.status === "MARKED_COMPLETE") {
          list.push({
            id: `task-sub-${task.id}`,
            title: `Task Submitted: ${task.title}`,
            message: `${task.student_name} submitted work awaiting your review.`,
            timestamp: task.marked_complete_at || task.created_at,
            type: "task",
            icon: <Hourglass className="w-4 h-4 text-amber-600" />,
            href: "/mentor/tasks",
          });
        }
      });
    }

    // 3. Mentorship Session / Meeting events
    if (meetings) {
      meetings.forEach((m) => {
        if (m.status === "SCHEDULED") {
          const dateStr = m.scheduled_at
            ? new Date(m.scheduled_at).toLocaleString("en-US", {
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
              })
            : "Time TBD";
          list.push({
            id: `meeting-${m.id}`,
            title: `Live Session: ${m.title}`,
            message: `Scheduled for ${dateStr}${m.student_name ? ` with ${m.student_name}` : ""}`,
            timestamp: m.scheduled_at || m.created_at,
            type: "meeting",
            icon: <Calendar className="w-4 h-4 text-blue-600" />,
            href: "/schedule",
          });
        }
      });
    }

    // 4. Quizzes / Tests scheduled
    if (isStudent && studentQuizzes) {
      studentQuizzes.forEach((q) => {
        if (!q.has_attempted && q.is_attemptable) {
          list.push({
            id: `quiz-${q.id}`,
            title: `Exam Drill Available: ${q.title}`,
            message: `${q.question_count} questions • ${q.total_marks} marks • Tap to start`,
            timestamp: q.live_at || q.deadline_at || new Date().toISOString(),
            type: "quiz",
            icon: <BookOpen className="w-4 h-4 text-indigo-600" />,
            href: `/quizzes/${q.id}`,
          });
        }
      });
    }

    // 5. Cohort Announcements
    if (announcements) {
      announcements.forEach((ann) => {
        list.push({
          id: `ann-${ann.id}`,
          title: `Cohort Notice: ${ann.title}`,
          message: ann.body.length > 75 ? `${ann.body.slice(0, 75)}...` : ann.body,
          timestamp: ann.created_at,
          type: "announcement",
          icon: <Megaphone className="w-4 h-4 text-purple-600" />,
          href: "/cohort",
        });
      });
    }

    // Sort descending by timestamp
    list.sort((a, b) => {
      const timeA = new Date(a.timestamp).getTime();
      const timeB = new Date(b.timestamp).getTime();
      return timeB - timeA;
    });

    return list.slice(0, 8);
  }, [isStudent, isMentor, studentTasks, mentorTasks, meetings, studentQuizzes, announcements]);

  // Check how many items are unread (newer than lastReadTimestamp)
  const unreadCount = useMemo(() => {
    if (notifications.length === 0) return 0;
    return notifications.filter((item) => {
      const itemTime = new Date(item.timestamp).getTime();
      return itemTime > lastReadTimestamp;
    }).length;
  }, [notifications, lastReadTimestamp]);

  // Mark all as read action
  const handleMarkAllAsRead = () => {
    const now = Date.now();
    setLastReadTimestamp(now);
    if (user?.id) {
      localStorage.setItem(`mentskool_notif_last_read_${user.id}`, now.toString());
    }
  };

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };

  const getPageTitle = () => {
    if (pathname.includes("/dashboard/tasks")) return "Workspace / My Tasks";
    if (pathname.includes("/dashboard/efficiency")) return "Workspace / Efficiency";
    if (pathname.includes("/dashboard/profile")) return "Workspace / My Profile";
    if (pathname.includes("/mentor/profile")) return "Workspace / Edit Profile";
    if (pathname.includes("/mentor/students")) return "Workspace / Student Roster";
    if (pathname.includes("/mentor/tasks")) return "Workspace / Task Reviews";
    if (pathname.includes("/cohort")) return "Workspace / Cohort Hub";
    if (pathname.includes("/schedule")) return "Workspace / Live Schedule";
    if (pathname.includes("/quizzes")) return "Workspace / Practice Quizzes";
    if (pathname.includes("/messages")) return "Workspace / Messages";
    return "Workspace";
  };

  const profileHref =
    user?.role === "MENTOR" ? "/mentor/profile" : "/dashboard/profile";

  return (
    <header className="sticky top-0 z-30 w-full bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-6 py-2.5 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Breadcrumb / Section Context */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-500 hidden sm:inline-block">
            {getPageTitle()}
          </span>
        </div>

        {/* Right Action Icons & Profile Chip */}
        <div className="flex items-center gap-3 sm:gap-4 ml-auto">
          {/* Notifications Bell */}
          <div className="relative" ref={notifRef}>
            <button
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowUserMenu(false);
              }}
              className="relative p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100/80 transition-colors"
              aria-label="Notifications"
            >
              <Bell className="w-4 h-4" />
              {/* Unread indicator dot (only shown if there are unread items) */}
              {unreadCount > 0 && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white animate-pulse" />
              )}
            </button>

            {/* Notifications Dropdown Popover */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-elevated border border-slate-200 p-4 z-50 animate-slide-up">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Notifications
                    </h4>
                    {unreadCount > 0 && (
                      <span className="px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                        {unreadCount} new
                      </span>
                    )}
                  </div>
                  {unreadCount > 0 && (
                    <button
                      onClick={handleMarkAllAsRead}
                      className="text-[10px] text-blue-600 hover:text-blue-700 font-semibold hover:underline flex items-center gap-1"
                    >
                      <Check className="w-3 h-3" />
                      Mark all as read
                    </button>
                  )}
                </div>

                <div className="py-2 space-y-2 max-h-[340px] overflow-y-auto no-scrollbar">
                  {notifications.length === 0 ? (
                    <div className="py-8 text-center text-xs text-slate-400">
                      <p className="font-semibold text-slate-600">All caught up!</p>
                      <p className="text-[11px] mt-0.5">No new notifications at this time.</p>
                    </div>
                  ) : (
                    notifications.map((item) => {
                      const itemTime = new Date(item.timestamp).getTime();
                      const isUnread = itemTime > lastReadTimestamp;

                      return (
                        <Link
                          key={item.id}
                          href={item.href}
                          onClick={() => {
                            setShowNotifications(false);
                            handleMarkAllAsRead();
                          }}
                          className={`p-2.5 rounded-xl border flex items-start gap-2.5 transition-all text-xs block ${
                            isUnread
                              ? "bg-blue-50/40 border-blue-100 hover:bg-blue-50/70"
                              : "bg-slate-50/70 border-slate-100 hover:bg-slate-100/70"
                          }`}
                        >
                          <div className="p-1 rounded-lg bg-white border border-slate-200/60 shadow-2xs mt-0.5 flex-shrink-0">
                            {item.icon}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-2">
                              <p className="font-bold text-slate-900 truncate">
                                {item.title}
                              </p>
                              {isUnread && (
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                              )}
                            </div>
                            <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-2">
                              {item.message}
                            </p>
                            <p className="text-[9px] text-slate-400 mt-1">
                              {new Date(item.timestamp).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </p>
                          </div>
                        </Link>
                      );
                    })
                  )}
                </div>
              </div>
            )}
          </div>

          {/* User Profile Chip */}
          {user && (
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => {
                  setShowUserMenu(!showUserMenu);
                  setShowNotifications(false);
                }}
                className="flex items-center gap-2.5 pl-1.5 pr-2.5 py-1 rounded-xl hover:bg-slate-100/80 transition-all border border-transparent hover:border-slate-200"
              >
                {user.avatar_url ? (
                  <img
                    src={user.avatar_url}
                    alt={user.full_name}
                    className="w-7 h-7 rounded-full object-cover border border-slate-200 shadow-xs"
                  />
                ) : (
                  <div className="w-7 h-7 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center font-bold text-xs text-blue-700">
                    {user.full_name?.charAt(0).toUpperCase() || "U"}
                  </div>
                )}
                <span className="text-xs font-bold text-slate-800 hidden md:inline-block max-w-[140px] truncate">
                  {user.full_name}
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 hidden md:inline-block" />
              </button>

              {/* Profile Dropdown Menu */}
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-elevated border border-slate-200 p-2 z-50 animate-slide-up">
                  <div className="px-3 py-2 border-b border-slate-100">
                    <p className="text-xs font-bold text-slate-900 truncate">
                      {user.full_name}
                    </p>
                    <p className="text-[10px] text-slate-500 truncate mt-0.5">
                      {user.email}
                    </p>
                    <span className="inline-block mt-1 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                      {user.role}
                    </span>
                  </div>

                  <div className="py-1">
                    <Link
                      href={profileHref}
                      onClick={() => setShowUserMenu(false)}
                      className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/60 rounded-xl transition-colors"
                    >
                      <User className="w-3.5 h-3.5" />
                      Account Profile
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-2 px-3 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50/60 rounded-xl transition-colors mt-1"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
