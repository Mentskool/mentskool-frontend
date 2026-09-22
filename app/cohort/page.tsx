"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useAuthStore } from "@/store/authStore";
import {
  useAnnouncements,
  useCreateAnnouncement,
  useDeleteAnnouncement,
  useResources,
  useCreateResource,
  useDeleteResource,
} from "@/hooks/useCohort";
import { useSubscriptions, useLeaveActiveCohort } from "@/hooks/useSubscriptions";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { EmptyState } from "@/components/ui/EmptyState";
import { CardSkeleton } from "@/components/ui/Skeleton";

export default function CohortPage() {
  const { user, isAuthenticated } = useAuthStore();
  const isMentor = user?.role === "MENTOR";

  const { data: subsData, refetch: refetchSubs } = useSubscriptions();
  const leaveCohortMutation = useLeaveActiveCohort();
  const [showLeaveConfirm, setShowLeaveConfirm] = useState(false);
  const [leaveFeedback, setLeaveFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const activeSub = subsData?.items?.find((s) => s.status === "ACTIVE");

  const handleLeaveCohort = async () => {
    try {
      await leaveCohortMutation.mutateAsync();
      setShowLeaveConfirm(false);
      setLeaveFeedback({
        type: "success",
        message: "You have left this cohort. Your seat has been released and you may now join another cohort.",
      });
      refetchSubs();
    } catch (err: any) {
      setLeaveFeedback({
        type: "error",
        message: err?.detail || "Failed to leave cohort. Please try again.",
      });
    }
  };

  const [activeTab, setActiveTab] = useState<"announcements" | "resources">("announcements");

  // Announcements hooks
  const {
    data: announcements,
    isLoading: annLoading,
  } = useAnnouncements();
  const createAnnMutation = useCreateAnnouncement();
  const deleteAnnMutation = useDeleteAnnouncement();

  // Resources hooks
  const {
    data: resources,
    isLoading: resLoading,
  } = useResources();
  const createResMutation = useCreateResource();
  const deleteResMutation = useDeleteResource();

  // Form states
  const [annTitle, setAnnTitle] = useState("");
  const [annBody, setAnnBody] = useState("");
  const [showAnnForm, setShowAnnForm] = useState(false);

  const [resTitle, setResTitle] = useState("");
  const [resUrl, setResUrl] = useState("");
  const [showResForm, setShowResForm] = useState(false);

  const handleCreateAnnouncement = async (e: React.FormEvent) => {
    e.preventDefault();
    await createAnnMutation.mutateAsync({ title: annTitle, body: annBody });
    setAnnTitle("");
    setAnnBody("");
    setShowAnnForm(false);
  };

  const handleCreateResource = async (e: React.FormEvent) => {
    e.preventDefault();
    await createResMutation.mutateAsync({ title: resTitle, url: resUrl });
    setResTitle("");
    setResUrl("");
    setShowResForm(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="py-16 text-center max-w-md mx-auto">
        <h2 className="text-xl font-bold font-display text-ink mb-2">
          Authentication Required
        </h2>
        <p className="text-sm text-ink-muted mb-6">
          Sign in to view your cohort announcements and study resources.
        </p>
        <Link href="/login?redirect=/cohort">
          <Button variant="primary" size="md">
            Sign In
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold font-display text-ink tracking-tight">
            Cohort Hub
          </h1>
          <p className="text-sm text-ink-muted mt-1.5">
            Important announcements, exam strategy briefs, and shared reference material.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1 bg-white p-1 rounded-control border border-mist">
          <button
            onClick={() => setActiveTab("announcements")}
            className={`px-4 py-1.5 text-xs font-semibold rounded-control transition-all ${
              activeTab === "announcements"
                ? "bg-brand text-white"
                : "text-ink-muted hover:text-ink"
            }`}
          >
            Announcements ({announcements?.length ?? 0})
          </button>
          <button
            onClick={() => setActiveTab("resources")}
            className={`px-4 py-1.5 text-xs font-semibold rounded-control transition-all ${
              activeTab === "resources"
                ? "bg-brand text-white"
                : "text-ink-muted hover:text-ink"
            }`}
          >
            Study Resources ({resources?.length ?? 0})
          </button>
        </div>
      </div>

      {/* Student Active Cohort Status & Leave Action */}
      {!isMentor && (
        <div className="space-y-4">
          {leaveFeedback && (
            <div
              className={`p-3 rounded-control text-xs font-semibold ${
                leaveFeedback.type === "success"
                  ? "bg-moss/10 text-moss border border-moss/20"
                  : "bg-red-50 text-red-700 border border-red-200"
              }`}
            >
              {leaveFeedback.message}
            </div>
          )}

          {activeSub ? (
            <div className="p-4 rounded-card bg-white border border-mist flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-moss/10 text-moss border border-moss/20">
                    Active Enrollment
                  </span>
                  <span className="font-display font-bold text-base text-ink">
                    Mentor: {activeSub.mentor_name}
                  </span>
                </div>
                <p className="text-xs text-ink-muted mt-1">
                  You are actively enrolled in this cohort. Leaving releases your seat and allows you to join another mentor.
                </p>
              </div>

              {!showLeaveConfirm ? (
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => setShowLeaveConfirm(true)}
                  className="text-xs text-ink-muted hover:text-red-600 hover:border-red-300 self-start sm:self-center"
                >
                  Leave Cohort
                </Button>
              ) : (
                <div className="flex items-center gap-2 bg-red-50 p-2.5 rounded-control border border-red-200">
                  <span className="text-xs text-red-800 font-medium">Release your seat?</span>
                  <Button
                    size="sm"
                    variant="secondary"
                    isLoading={leaveCohortMutation.isPending}
                    onClick={handleLeaveCohort}
                    className="text-xs text-red-600 font-bold border-red-300 hover:bg-red-100"
                  >
                    Confirm Leave
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => setShowLeaveConfirm(false)}
                    className="text-xs font-semibold"
                  >
                    Cancel
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <div className="p-6 rounded-card bg-white border border-mist text-center space-y-3">
              <h3 className="font-display font-bold text-lg text-ink">
                No Active Cohort
              </h3>
              <p className="text-xs text-ink-muted max-w-md mx-auto">
                You are not currently enrolled in any cohort. Join an active mentor cohort to receive weekly tasks and access cohort discussions.
              </p>
              <Link href="/mentors">
                <Button size="sm" variant="primary">
                  Find a Mentor
                </Button>
              </Link>
            </div>
          )}
        </div>
      )}

      {/* Announcements Tab View */}
      {activeTab === "announcements" && (
        <div className="space-y-6">
          {/* Mentor Post Button & Inline Form */}
          {isMentor && (
            <div>
              {!showAnnForm ? (
                <Button
                  size="sm"
                  variant="primary"
                  onClick={() => setShowAnnForm(true)}
                >
                  + Post New Announcement
                </Button>
              ) : (
                <Card className="bg-white border-mist p-6 space-y-4">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-ink">
                    Post Cohort Announcement
                  </h3>
                  <form onSubmit={handleCreateAnnouncement} className="space-y-4">
                    <Input
                      label="Announcement Title"
                      value={annTitle}
                      onChange={(e) => setAnnTitle(e.target.value)}
                      placeholder="e.g. Schedule for JEE Mechanics Doubt Clearing Session"
                      required
                    />
                    <Textarea
                      label="Message / Notice"
                      value={annBody}
                      onChange={(e) => setAnnBody(e.target.value)}
                      placeholder="Type details, timings, instructions, or agenda..."
                      rows={4}
                      required
                    />
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        type="button"
                        size="sm"
                        variant="ghost"
                        onClick={() => setShowAnnForm(false)}
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        size="sm"
                        variant="primary"
                        isLoading={createAnnMutation.isPending}
                      >
                        Publish Announcement
                      </Button>
                    </div>
                  </form>
                </Card>
              )}
            </div>
          )}

          {/* Announcements Feed */}
          {annLoading ? (
            <div className="space-y-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <CardSkeleton key={i} />
              ))}
            </div>
          ) : !announcements || announcements.length === 0 ? (
            <EmptyState
              title="No announcements yet"
              description="Your mentor hasn't published any cohort announcements. Check back soon for session updates."
            />
          ) : (
            <div className="space-y-4">
              {announcements.map((ann) => (
                <Card key={ann.id} className="bg-white border-mist p-6 space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-moss block">
                        {ann.mentor_name || "Mentor Broadcast"}
                      </span>
                      <h3 className="font-display font-bold text-lg text-ink mt-0.5">
                        {ann.title}
                      </h3>
                      <p className="text-xs text-ink-faint">
                        {new Date(ann.created_at).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>

                    {isMentor && (
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => deleteAnnMutation.mutate(ann.id)}
                        disabled={deleteAnnMutation.isPending}
                        className="text-ink-faint hover:text-amber"
                      >
                        Delete
                      </Button>
                    )}
                  </div>

                  <p className="text-sm text-ink-muted whitespace-pre-line leading-relaxed">
                    {ann.body}
                  </p>
                </Card>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Resources Tab View */}
      {activeTab === "resources" && (
        <div className="space-y-6">
          {/* Mentor Add Resource Button & Form */}
          {isMentor && (
            <div>
              {!showResForm ? (
                <Button
                  size="sm"
                  variant="primary"
                  onClick={() => setShowResForm(true)}
                >
                  + Add Resource Link
                </Button>
              ) : (
                <Card className="bg-white border-mist p-6 space-y-4">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-ink">
                    Share Study Resource
                  </h3>
                  <form onSubmit={handleCreateResource} className="space-y-4">
                    <Input
                      label="Resource Title"
                      value={resTitle}
                      onChange={(e) => setResTitle(e.target.value)}
                      placeholder="e.g. Formula Sheet / NCERT Biology High-Yield Checklist"
                      required
                    />
                    <Input
                      label="Resource URL (Google Drive, Notion, GitHub, PDF link)"
                      type="url"
                      value={resUrl}
                      onChange={(e) => setResUrl(e.target.value)}
                      placeholder="https://drive.google.com/..."
                      required
                    />
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        type="button"
                        size="sm"
                        variant="ghost"
                        onClick={() => setShowResForm(false)}
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        size="sm"
                        variant="primary"
                        isLoading={createResMutation.isPending}
                      >
                        Share Resource
                      </Button>
                    </div>
                  </form>
                </Card>
              )}
            </div>
          )}

          {/* Resources Feed */}
          {resLoading ? (
            <div className="space-y-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <CardSkeleton key={i} />
              ))}
            </div>
          ) : !resources || resources.length === 0 ? (
            <EmptyState
              title="No resources shared yet"
              description="No reference sheets or study materials have been uploaded for this cohort yet."
            />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {resources.map((res) => (
                <Card key={res.id} className="bg-white border-mist p-5 flex flex-col justify-between space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-moss">
                      {res.mentor_name || "Mentor Resource"}
                    </span>
                    <h3 className="font-display font-bold text-base text-ink line-clamp-2">
                      {res.title}
                    </h3>
                    <p className="text-[11px] text-ink-faint break-all line-clamp-1">
                      {res.url}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-mist">
                    <a
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-moss hover:underline"
                    >
                      Open Document ↗
                    </a>

                    {isMentor && (
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => deleteResMutation.mutate(res.id)}
                        disabled={deleteResMutation.isPending}
                        className="text-ink-faint hover:text-amber text-xs px-2 py-1"
                      >
                        Delete
                      </Button>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
