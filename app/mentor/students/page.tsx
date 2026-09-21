"use client";

import React from "react";
import Link from "next/link";
import { useAuthStore } from "@/store/authStore";
import { useMentorRoster } from "@/hooks/useTasks";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CardSkeleton } from "@/components/ui/Skeleton";
import { EmptyState } from "@/components/ui/EmptyState";

export default function MentorStudentsPage() {
  const { user, isAuthenticated, isLoading: authLoading } = useAuthStore();
  const {
    data: rosterData,
    isLoading: rosterLoading,
    isError,
    refetch,
  } = useMentorRoster(user?.id);

  if (authLoading) {
    return (
      <div className="animate-pulse py-12 text-center text-ink-faint">
        Loading cohort roster...
      </div>
    );
  }

  if (!isAuthenticated || user?.role !== "MENTOR") {
    return (
      <div className="py-16 text-center">
        <h2 className="text-xl font-bold font-display text-ink mb-2">
          Mentor Access Required
        </h2>
        <p className="text-sm text-ink-muted mb-6">
          You must be logged in as a mentor to view cohort subscriber rosters.
        </p>
        <Link href="/login">
          <Button variant="primary" size="md">
            Sign In as Mentor
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-display text-ink tracking-tight">
            Cohort Student Roster
          </h1>
          <p className="text-sm text-ink-muted mt-1.5">
            Manage your subscribed students, monitor accountability, and assign weekly objectives.
          </p>
        </div>

        <Link href="/mentor/tasks">
          <Button size="sm" variant="primary">
            + Assign Weekly Task
          </Button>
        </Link>
      </div>

      {/* Roster View */}
      {rosterLoading ? (
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      ) : isError ? (
        <div className="py-12 text-center rounded-card border border-mist bg-white p-8">
          <p className="text-sm text-ink-muted mb-4">
            Unable to load student roster.
          </p>
          <Button variant="secondary" size="sm" onClick={() => refetch()}>
            Retry
          </Button>
        </div>
      ) : !rosterData || rosterData.items.length === 0 ? (
        <EmptyState
          title="No students subscribed yet"
          description="Your cohort currently has zero active subscriptions. As students subscribe to your cohort, they will appear here."
          actionLabel="View Public Profile"
          onAction={() => window.location.assign(`/mentors/${user.id}`)}
        />
      ) : (
        <div className="space-y-4">
          <div className="text-xs font-semibold text-ink-faint">
            {rosterData.total} Subscribed Student{rosterData.total === 1 ? "" : "s"}
          </div>

          <div className="grid grid-cols-1 gap-4">
            {rosterData.items.map((sub) => (
              <Card
                key={sub.id}
                className="bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-base font-bold font-display text-ink">
                      {sub.student_name}
                    </h3>
                    <Badge variant={sub.status}>{sub.status}</Badge>
                  </div>
                  <p className="text-xs text-ink-muted">{sub.student_email}</p>
                  <p className="text-[11px] text-ink-faint pt-1">
                    Subscribed since: {new Date(sub.started_at).toLocaleDateString()}
                  </p>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center">
                  <Link href={`/mentor/tasks?student_id=${sub.student_id}`}>
                    <Button size="sm" variant="secondary">
                      Assign Task
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
