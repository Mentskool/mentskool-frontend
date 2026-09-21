"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useMentors } from "@/hooks/useMentors";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SeatBadge } from "@/components/SeatBadge";
import { CardSkeleton } from "@/components/ui/Skeleton";
import { EmptyState } from "@/components/ui/EmptyState";

const CATEGORIES = [
  "All",
  "Full Stack",
  "Backend",
  "Data Science",
  "DevOps",
  "Mobile",
];

export default function MentorsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [page, setPage] = useState<number>(0);
  const limit = 12;

  const categoryFilter =
    selectedCategory === "All" ? undefined : selectedCategory;
  const { data, isLoading, isError, refetch } = useMentors(
    categoryFilter,
    limit,
    page * limit
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold font-display text-ink tracking-tight">
          Explore Mentors
        </h1>
        <p className="text-sm text-ink-muted mt-1.5 max-w-xl">
          Subscribe to experienced industry practitioners for structured weekly
          accountability and verified efficiency metrics.
        </p>
      </div>

      {/* Category Filter Bar */}
      <div className="flex flex-wrap items-center gap-2 pb-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setPage(0);
            }}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-control border transition-all ${
              selectedCategory === cat
                ? "bg-brand text-white border-brand font-semibold"
                : "bg-white text-ink-muted border-mist hover:text-ink hover:border-[#D4D7DE]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Content Area */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      ) : isError ? (
        <div className="py-12 text-center rounded-card border border-mist bg-white p-8">
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
            selectedCategory === "All"
              ? "No mentors are currently available. Check back soon!"
              : `No mentors found under category '${selectedCategory}'. Try selecting 'All'.`
          }
          actionLabel={selectedCategory !== "All" ? "Reset Filter" : undefined}
          onAction={() => setSelectedCategory("All")}
        />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.items.map((mentor) => (
              <Card
                key={mentor.user_id}
                className="flex flex-col justify-between hover:border-[#D4D7DE] transition-all bg-white"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-base font-bold font-display text-ink leading-snug">
                        {mentor.full_name}
                      </h3>
                      <span className="inline-block mt-0.5 text-xs font-medium text-brand">
                        {mentor.category}
                      </span>
                    </div>
                    <SeatBadge
                      availableSeats={mentor.available_seats}
                      seatLimit={mentor.seat_limit}
                    />
                  </div>

                  <p className="text-xs text-ink-muted line-clamp-3 leading-relaxed">
                    {mentor.bio}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-mist flex items-center justify-between">
                  <div>
                    <span className="text-xs text-ink-faint">Monthly Cohort</span>
                    <p className="text-sm font-bold font-display text-ink">
                      ${Number(mentor.price_per_month).toFixed(0)}
                      <span className="text-xs font-normal text-ink-faint">
                        /mo
                      </span>
                    </p>
                  </div>
                  <Link href={`/mentors/${mentor.user_id}`}>
                    <Button size="sm" variant="secondary">
                      View Profile
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          {data.total > limit && (
            <div className="flex items-center justify-between pt-6 border-t border-mist">
              <span className="text-xs text-ink-faint">
                Showing {page * limit + 1} -{" "}
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
