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
import { ApiError } from "@/lib/types";

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
          "Successfully subscribed to this cohort! You can now receive weekly accountability assignments.",
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
      <div className="max-w-3xl space-y-6">
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
      <div className="py-16 text-center">
        <h2 className="text-xl font-bold font-display text-ink mb-2">
          Mentor profile not found
        </h2>
        <p className="text-sm text-ink-muted mb-6">
          The mentor you are looking for does not exist or is inactive.
        </p>
        <Link href="/mentors">
          <Button variant="secondary" size="sm">
            Back to Directory
          </Button>
        </Link>
      </div>
    );
  }

  const isCohortFull = mentor.available_seats <= 0;

  return (
    <div className="max-w-3xl space-y-8">
      {/* Breadcrumb link */}
      <div>
        <Link
          href="/mentors"
          className="text-xs font-semibold text-brand hover:underline inline-flex items-center gap-1"
        >
          ← Back to Mentors
        </Link>
      </div>

      {/* Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-mist">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-extrabold font-display text-ink tracking-tight">
              {mentor.full_name}
            </h1>
            <SeatBadge
              availableSeats={mentor.available_seats}
              seatLimit={mentor.seat_limit}
            />
          </div>
          <p className="text-sm font-medium text-brand mt-1">
            {mentor.category} Domain Specialist
          </p>
        </div>

        <div className="text-left sm:text-right">
          <span className="text-xs text-ink-faint">Monthly Mentorship Fee</span>
          <p className="text-2xl font-bold font-display text-ink">
            ${Number(mentor.price_per_month).toFixed(0)}
            <span className="text-xs font-normal text-ink-faint">/mo</span>
          </p>
        </div>
      </div>

      {/* Feedback banner */}
      {feedback && (
        <div
          className={`p-4 rounded-card border text-xs font-medium leading-relaxed ${
            feedback.type === "success"
              ? "bg-moss-light text-moss border-[#A1D6B8]"
              : "bg-amber-light text-[#9A6210] border-[#EAC286]"
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            <span>{feedback.message}</span>
            {feedback.type === "success" && (
              <Link href="/dashboard/tasks">
                <Button size="sm" variant="moss">
                  View Tasks
                </Button>
              </Link>
            )}
          </div>
        </div>
      )}

      {/* Main Profile Card */}
      <Card className="bg-white space-y-6">
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-ink-faint mb-2">
            Mentorship Philosophy & Bio
          </h2>
          <p className="text-sm text-ink-muted leading-relaxed whitespace-pre-wrap">
            {mentor.bio}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-mist">
          <div>
            <span className="text-xs text-ink-faint">Cohort Capacity</span>
            <p className="text-sm font-bold font-display text-ink mt-0.5">
              {mentor.seat_limit} students
            </p>
          </div>
          <div>
            <span className="text-xs text-ink-faint">Open Spots</span>
            <p className="text-sm font-bold font-display text-ink mt-0.5">
              {mentor.available_seats} remaining
            </p>
          </div>
          <div>
            <span className="text-xs text-ink-faint">Status</span>
            <p className="text-sm font-bold font-display text-moss mt-0.5">
              Active Cohort
            </p>
          </div>
        </div>

        {/* Subscription Action */}
        <div className="pt-6 border-t border-mist flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-xs text-ink-muted">
              {isCohortFull
                ? "This cohort has reached maximum capacity."
                : "Reserve your seat to receive personalized weekly tasks and direct feedback."}
            </p>
          </div>

          <Button
            variant={isCohortFull ? "secondary" : "primary"}
            size="md"
            disabled={isCohortFull || subscribeMutation.isPending}
            isLoading={subscribeMutation.isPending}
            onClick={handleSubscribe}
            className="w-full sm:w-auto"
          >
            {isCohortFull ? "Cohort Full" : "Subscribe to Cohort"}
          </Button>
        </div>
      </Card>
    </div>
  );
}
