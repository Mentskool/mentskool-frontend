"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useMentors } from "@/hooks/useMentors";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SeatBadge } from "@/components/SeatBadge";
import { CardSkeleton } from "@/components/ui/Skeleton";
import { EmptyState } from "@/components/ui/EmptyState";
import { CATEGORY_LABELS, MentorCategory } from "@/lib/types";

const CATEGORIES: { label: string; value?: MentorCategory }[] = [
  { label: "All" },
  { label: "JEE Prep", value: "JEE_PREP" },
  { label: "NEET Prep", value: "NEET_PREP" },
  { label: "GATE / PSU", value: "GATE_PSU" },
];

export default function MentorsPage() {
  const [selectedCategory, setSelectedCategory] = useState<MentorCategory | undefined>(undefined);
  const [page, setPage] = useState<number>(0);
  const limit = 12;

  const { data, isLoading, isError, refetch } = useMentors(
    selectedCategory,
    limit,
    page * limit
  );

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold font-display text-white tracking-tight">
          Explore Mentors
        </h1>
        <p className="text-sm text-ink-muted mt-1.5 max-w-xl">
          Subscribe to top rankers and exam specialists for structured weekly
          accountability, task verification, and efficiency metrics.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 pb-2">
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.value;
          return (
            <button
              key={cat.label}
              onClick={() => {
                setSelectedCategory(cat.value);
                setPage(0);
              }}
              className={`px-4 py-1.5 text-xs font-medium rounded-control border transition-all ${
                isSelected
                  ? "bg-mint text-black border-mint font-semibold"
                  : "bg-surface text-ink-muted border-hairline hover:text-white hover:border-neutral-600"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Content Area */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      ) : isError ? (
        <div className="py-12 text-center rounded-card border border-hairline bg-surface p-8">
          <p className="text-sm text-ink-muted mb-4">
            Unable to load mentors at this time.
          </p>
          <Button variant="secondary" size="sm" onClick={() => refetch()}>
            Retry
          </Button>
        </div>
      ) : !data || data.items.length === 0 ? (
        <EmptyState
          title="No mentors found"
          description={
            selectedCategory
              ? `No active mentors currently available in ${CATEGORY_LABELS[selectedCategory]}. Check back soon!`
              : "No mentors are currently available. Check back soon!"
          }
          actionLabel={selectedCategory ? "Reset Filter" : undefined}
          onAction={() => setSelectedCategory(undefined)}
        />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.items.map((mentor) => (
              <Card
                key={mentor.user_id}
                className="flex flex-col justify-between hover:border-neutral-600 transition-all bg-surface"
              >
                <div className="space-y-4">
                  {/* Top Bar: Category & Seat Status */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#10C47C]/10 text-mint border border-[#10C47C]/20">
                      {CATEGORY_LABELS[mentor.category] || mentor.category}
                    </span>
                    <SeatBadge
                      availableSeats={mentor.available_seats}
                      seatLimit={mentor.seat_limit}
                    />
                  </div>

                  {/* Mentor Info */}
                  <div>
                    <h3 className="font-display font-bold text-lg text-white group-hover:text-mint transition-colors">
                      {mentor.full_name}
                    </h3>
                    <p className="text-xs text-ink-faint mt-0.5">
                      {mentor.email}
                    </p>
                  </div>

                  {/* Bio Preview */}
                  <p className="text-sm text-ink-muted line-clamp-3 leading-relaxed">
                    {mentor.bio}
                  </p>
                </div>

                {/* Footer: Pricing & Action */}
                <div className="pt-6 mt-6 border-t border-hairline flex items-center justify-between">
                  <div>
                    <span className="font-display text-xl font-bold text-white">
                      ₹{Number(mentor.price_per_month).toLocaleString("en-IN")}
                    </span>
                    <span className="text-xs text-ink-faint ml-1">/ month</span>
                  </div>

                  <Link href={`/mentors/${mentor.user_id}`}>
                    <Button
                      size="sm"
                      variant="primary"
                      disabled={mentor.available_seats <= 0}
                    >
                      {mentor.available_seats > 0 ? "View Cohort" : "Waitlist"}
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          {/* Pagination Controls */}
          {data.total > limit && (
            <div className="flex items-center justify-between pt-4 border-t border-hairline text-xs text-ink-muted">
              <span>
                Showing {page * limit + 1}–
                {Math.min((page + 1) * limit, data.total)} of {data.total} mentors
              </span>
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="secondary"
                  disabled={page === 0}
                  onClick={() => setPage((p) => Math.max(0, p - 1))}
                >
                  Previous
                </Button>
                <Button
                  size="sm"
                  variant="secondary"
                  disabled={(page + 1) * limit >= data.total}
                  onClick={() => setPage((p) => p + 1)}
                >
                  Next
                </Button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
