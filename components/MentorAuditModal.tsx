"use client";

import React, { useEffect, useState } from "react";
import api from "@/lib/api";
import { MentorStatsResponse } from "@/lib/types";
import { ActivityHeatmap } from "@/components/ActivityHeatmap";
import { Button } from "@/components/ui/Button";
import {
  X,
  Activity,
  CheckCircle2,
  Calendar,
  ClipboardList,
  FileQuestion,
  Megaphone,
  Video,
  Users,
  Clock,
  GraduationCap,
  Award,
  Phone,
  Mail,
  Loader2,
  CheckCircle,
} from "lucide-react";

interface MentorAuditModalProps {
  mentorId: string | null;
  onClose: () => void;
  onVerify?: (action: "APPROVE" | "REJECT") => void;
  currentStatus?: string;
}

export const MentorAuditModal: React.FC<MentorAuditModalProps> = ({
  mentorId,
  onClose,
  onVerify,
  currentStatus,
}) => {
  const [stats, setStats] = useState<MentorStatsResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!mentorId) return;

    let isMounted = true;
    setLoading(true);
    setError(null);

    api
      .get<MentorStatsResponse>(`/mentors/${mentorId}/stats`)
      .then((data) => {
        if (isMounted) setStats(data);
      })
      .catch((err) => {
        if (isMounted) setError("Failed to load mentor activity metrics.");
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [mentorId]);

  if (!mentorId) return null;

  const formatActivityType = (type: string) => {
    switch (type) {
      case "LOGIN":
        return { label: "Workspace Login", icon: <Clock className="w-3.5 h-3.5 text-blue-500" /> };
      case "TASK_CREATED":
        return { label: "Task Assigned", icon: <ClipboardList className="w-3.5 h-3.5 text-emerald-500" /> };
      case "TASK_REVIEWED":
        return { label: "Task Reviewed", icon: <CheckCircle2 className="w-3.5 h-3.5 text-teal-500" /> };
      case "QUIZ_CREATED":
        return { label: "Quiz Created", icon: <FileQuestion className="w-3.5 h-3.5 text-purple-500" /> };
      case "ANNOUNCEMENT_CREATED":
        return { label: "Announcement", icon: <Megaphone className="w-3.5 h-3.5 text-amber-500" /> };
      case "MEETING_SCHEDULED":
        return { label: "Meeting Scheduled", icon: <Video className="w-3.5 h-3.5 text-indigo-500" /> };
      case "AVAILABILITY_CHANGED":
        return { label: "Availability Updated", icon: <Activity className="w-3.5 h-3.5 text-rose-500" /> };
      default:
        return { label: type, icon: <Activity className="w-3.5 h-3.5 text-slate-500" /> };
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-surface border border-border rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-border pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold font-display text-ink">
                Mentor Activity & Productivity Audit
              </h2>
              {stats?.is_available ? (
                <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  🟢 Accepting Students
                </span>
              ) : (
                <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                  🟡 Cohort Paused / Away
                </span>
              )}
            </div>
            <p className="text-xs text-ink-muted">
              Live audit of mentor platform engagement, task assignments, and student support.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-ink-muted hover:text-ink hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {loading ? (
          <div className="py-20 flex flex-col items-center justify-center text-ink-muted space-y-3">
            <Loader2 className="w-8 h-8 animate-spin text-brand-600" />
            <p className="text-sm">Fetching mentor audit metrics...</p>
          </div>
        ) : error ? (
          <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-sm">
            {error}
          </div>
        ) : stats ? (
          <div className="space-y-6">
            {/* Mentor Overview Card */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-slate-50 border border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-brand-100 text-brand-700 font-bold flex items-center justify-center text-lg">
                  {stats.full_name?.charAt(0) || "M"}
                </div>
                <div>
                  <h3 className="font-bold text-ink text-base">{stats.full_name}</h3>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-ink-muted mt-0.5">
                    <span className="flex items-center gap-1">
                      <Mail className="w-3 h-3" /> {stats.email}
                    </span>
                    {stats.college && (
                      <span className="flex items-center gap-1 font-medium text-ink">
                        <GraduationCap className="w-3 h-3 text-brand-600" /> {stats.college}
                      </span>
                    )}
                    {stats.exam_rank && (
                      <span className="flex items-center gap-1 text-amber-600 font-semibold">
                        <Award className="w-3 h-3" /> {stats.exam_rank}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="text-right">
                <p className="text-xs text-ink-muted">Last Platform Activity</p>
                <p className="text-sm font-bold text-ink">
                  {stats.last_active_at
                    ? new Date(stats.last_active_at).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                    : "Never"}
                </p>
              </div>
            </div>

            {/* Metric KPI Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-surface border border-border">
                <div className="flex items-center justify-between text-ink-muted mb-1">
                  <span className="text-xs font-medium">Tasks Assigned (30d)</span>
                  <ClipboardList className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="text-xl font-bold text-ink">{stats.tasks_assigned_month}</div>
              </div>

              <div className="p-3.5 rounded-xl bg-surface border border-border">
                <div className="flex items-center justify-between text-ink-muted mb-1">
                  <span className="text-xs font-medium">Tasks Reviewed (30d)</span>
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                </div>
                <div className="text-xl font-bold text-ink">{stats.tasks_reviewed_month}</div>
              </div>

              <div className="p-3.5 rounded-xl bg-surface border border-border">
                <div className="flex items-center justify-between text-ink-muted mb-1">
                  <span className="text-xs font-medium">Quizzes Created</span>
                  <FileQuestion className="w-4 h-4 text-purple-600" />
                </div>
                <div className="text-xl font-bold text-ink">{stats.quizzes_created}</div>
              </div>

              <div className="p-3.5 rounded-xl bg-surface border border-border">
                <div className="flex items-center justify-between text-ink-muted mb-1">
                  <span className="text-xs font-medium">Announcements</span>
                  <Megaphone className="w-4 h-4 text-amber-600" />
                </div>
                <div className="text-xl font-bold text-ink">{stats.announcements_created}</div>
              </div>

              <div className="p-3.5 rounded-xl bg-surface border border-border">
                <div className="flex items-center justify-between text-ink-muted mb-1">
                  <span className="text-xs font-medium">Meetings Scheduled</span>
                  <Video className="w-4 h-4 text-indigo-600" />
                </div>
                <div className="text-xl font-bold text-ink">{stats.meetings_scheduled}</div>
              </div>

              <div className="p-3.5 rounded-xl bg-surface border border-border">
                <div className="flex items-center justify-between text-ink-muted mb-1">
                  <span className="text-xs font-medium">Active Students</span>
                  <Users className="w-4 h-4 text-brand-600" />
                </div>
                <div className="text-xl font-bold text-ink">
                  {stats.active_students_count} / {stats.total_seat_limit}
                </div>
              </div>
            </div>

            {/* 30-Day Activity Heatmap */}
            <div className="p-4 rounded-xl border border-border bg-surface space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-ink-muted">
                Student Transparency Heatmap (Last 30 Days)
              </h4>
              <ActivityHeatmap
                heatmap={stats.heatmap_30d}
                activityStatus={stats.activity_status}
              />
            </div>

            {/* Recent Activity Log */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-ink-muted">
                Recent Action Log
              </h4>
              {stats.recent_activities && stats.recent_activities.length > 0 ? (
                <div className="max-h-48 overflow-y-auto space-y-2 pr-1 border border-border rounded-xl p-3 bg-slate-50/50">
                  {stats.recent_activities.map((act) => {
                    const info = formatActivityType(act.activity_type);
                    return (
                      <div
                        key={act.id}
                        className="flex items-center justify-between text-xs p-2 rounded-lg bg-surface border border-border/60"
                      >
                        <div className="flex items-center gap-2">
                          {info.icon}
                          <span className="font-semibold text-ink">{info.label}:</span>
                          <span className="text-ink-muted truncate max-w-sm">
                            {act.description || "Action logged"}
                          </span>
                        </div>
                        <span className="text-[11px] text-ink-muted shrink-0 ml-2">
                          {new Date(act.created_at).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-xs text-ink-muted p-4 border border-dashed border-border rounded-xl text-center">
                  No activity actions recorded yet. New mentors log activity as soon as they sign in or post tasks.
                </div>
              )}
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <Button variant="ghost" onClick={onClose}>
                Close
              </Button>

              {onVerify && currentStatus === "PENDING" && (
                <div className="flex items-center gap-2">
                  <Button
                    variant="secondary"
                    className="text-rose-600 hover:bg-rose-50 border-rose-200"
                    onClick={() => onVerify("REJECT")}
                  >
                    Reject
                  </Button>
                  <Button
                    variant="primary"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white"
                    onClick={() => onVerify("APPROVE")}
                  >
                    Approve Mentor
                  </Button>
                </div>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
