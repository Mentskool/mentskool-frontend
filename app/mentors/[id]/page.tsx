"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useMentor, useSubscribeMentor } from "@/hooks/useMentors";
import { useAuthStore } from "@/store/authStore";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SeatBadge } from "@/components/SeatBadge";
import { Skeleton } from "@/components/ui/Skeleton";
import { ApiError, CATEGORY_LABELS } from "@/lib/types";

const getYouTubeEmbedUrl = (url?: string | null): string | null => {
  if (!url) return null;
  const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regExp);
  return match ? `https://www.youtube-nocookie.com/embed/${match[1]}` : null;
};

export default function MentorDetailPage() {
  const params = useParams();
  const router = useRouter();
  const mentorId = params.id as string;

  const { data: mentor, isLoading, isError, refetch } = useMentor(mentorId);
  const { user, isAuthenticated } = useAuthStore();
  const subscribeMutation = useSubscribeMentor();

  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleSubscribe = async () => {
    setFeedback(null);

    if (!isAuthenticated) {
      router.push(`/login?redirect=/mentors/${mentorId}`);
      return;
    }

    if (user?.role !== "STUDENT") {
      setFeedback({
        type: "error",
        message: "Only students can subscribe to cohorts. Please sign in with a student account.",
      });
      return;
    }

    try {
      await subscribeMutation.mutateAsync(mentorId);
      setFeedback({
        type: "success",
        message:
          "Successfully subscribed to this cohort! You can now receive weekly accountability assignments and access cohort materials.",
      });
      refetch();
    } catch (err) {
      const apiErr = err as ApiError;
      if (apiErr.status === 409) {
        if (apiErr.code === "SEAT_FULL" || apiErr.detail.toLowerCase().includes("full")) {
          setFeedback({
            type: "error",
            message:
              "This cohort has reached its capacity limit. All seats are currently filled.",
          });
        } else {
          setFeedback({
            type: "error",
            message:
              "You already hold an active subscription with this mentor.",
          });
        }
      } else {
        setFeedback({
          type: "error",
          message: apiErr.detail || "Unable to complete subscription.",
        });
      }
    }
  };

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <Skeleton className="h-4 w-28" />
        <Skeleton className="h-10 w-2/3" />
        <Card className="space-y-4">
          <Skeleton className="h-6 w-1/4" />
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-10 w-32" />
        </Card>
      </div>
    );
  }

  if (isError || !mentor) {
    return (
      <div className="py-16 text-center max-w-lg mx-auto">
        <h2 className="text-xl font-bold font-display text-white mb-2">
          Mentor profile not found
        </h2>
        <p className="text-sm text-ink-muted mb-6">
          The mentor you are looking for does not exist or is inactive.
        </p>
        <Link href="/mentors">
          <Button variant="secondary">Back to Mentors</Button>
        </Link>
      </div>
    );
  }

  const embedUrl = getYouTubeEmbedUrl(mentor.intro_youtube_url);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Breadcrumb Navigation */}
      <div>
        <Link
          href="/mentors"
          className="text-xs font-medium text-ink-muted hover:text-white transition-colors"
        >
          ← All Mentors
        </Link>
      </div>

      {/* Main Profile Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-hairline">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold font-display text-white tracking-tight">
              {mentor.full_name}
            </h1>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-[#10C47C]/10 text-mint border border-[#10C47C]/20">
              {CATEGORY_LABELS[mentor.category] || mentor.category}
            </span>
          </div>
          <p className="text-sm text-ink-muted mt-1">{mentor.email}</p>
        </div>

        <SeatBadge
          availableSeats={mentor.available_seats}
          seatLimit={mentor.seat_limit}
          className="self-start sm:self-auto text-sm py-1 px-3"
        />
      </div>

      {/* Feedback Alerts */}
      {feedback && (
        <div
          className={`p-4 rounded-card text-sm border flex items-center justify-between ${
            feedback.type === "success"
              ? "bg-[#10C47C]/10 text-mint border-[#10C47C]/30"
              : "bg-[#E8A23D]/10 text-amber border-[#E8A23D]/30"
          }`}
        >
          <span>{feedback.message}</span>
          {feedback.type === "success" && (
            <Link href="/dashboard/tasks">
              <Button size="sm" variant="mint">
                Go to Tasks
              </Button>
            </Link>
          )}
        </div>
      )}

      {/* Profile Overview Card */}
      <Card className="space-y-6 bg-surface">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-faint mb-2">
            Cohort Biography & Strategy
          </h2>
          <p className="text-base text-neutral-200 whitespace-pre-line leading-relaxed">
            {mentor.bio}
          </p>
        </div>

        {/* Video Introduction Embed (Rendered BEFORE Subscribe) */}
        {embedUrl && (
          <div className="space-y-3 pt-4 border-t border-hairline">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-faint">
              Mentor Introduction Video
            </h3>
            <div className="relative w-full aspect-video rounded-card overflow-hidden border border-hairline bg-black">
              <iframe
                src={embedUrl}
                title={`${mentor.full_name} Intro Video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
          </div>
        )}

        {/* Subscription & Pricing Action */}
        <div className="pt-6 border-t border-hairline flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="font-display text-3xl font-bold text-white">
              ₹{Number(mentor.price_per_month).toLocaleString("en-IN")}
            </span>
            <span className="text-sm text-ink-faint ml-1">/ month</span>
            <p className="text-xs text-ink-faint mt-0.5">
              Includes weekly task assignments, reviews, chat, and scheduled 1:1 sessions.
            </p>
          </div>

          <Button
            size="lg"
            variant="primary"
            disabled={mentor.available_seats <= 0 || subscribeMutation.isPending}
            isLoading={subscribeMutation.isPending}
            onClick={handleSubscribe}
            className="w-full sm:w-auto"
          >
            {mentor.available_seats > 0 ? "Subscribe to Cohort" : "Cohort Full"}
          </Button>
        </div>
      </Card>
    </div>
  );
}
