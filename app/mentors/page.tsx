"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useMentors } from "@/hooks/useMentors";
import { useSubscriptions } from "@/hooks/useSubscriptions";
import { useAuthStore } from "@/store/authStore";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SeatBadge } from "@/components/SeatBadge";
import { CardSkeleton } from "@/components/ui/Skeleton";
import { EmptyState } from "@/components/ui/EmptyState";
import { CATEGORY_LABELS, MentorCategory } from "@/lib/types";
import {
  Search,
  SlidersHorizontal,
  Star,
  ArrowLeft,
  Sparkles,
  Lock,
  ArrowRight,
  GraduationCap,
} from "lucide-react";

const CATEGORIES: { label: string; value?: MentorCategory }[] = [
  { label: "All Mentors" },
  { label: "JEE Preparation", value: "JEE_PREP" },
  { label: "NEET Preparation", value: "NEET_PREP" },
  { label: "GATE / PSU", value: "GATE_PSU" },
];

export default function MentorsPage() {
  const [selectedCategory, setSelectedCategory] = useState<MentorCategory | undefined>(undefined);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"POPULAR" | "SEATS" | "PRICE_ASC" | "PRICE_DESC">("POPULAR");
  const [page, setPage] = useState<number>(0);
  const limit = 24;

  const { isAuthenticated } = useAuthStore();
  const { data: subsData } = useSubscriptions();
  const activeSub = subsData?.items?.find((s) => s.status === "ACTIVE");

  const { data, isLoading, isError, refetch } = useMentors(
    selectedCategory,
    limit,
    page * limit
  );

  // Client-side search and sort filtering on loaded items
  const filteredAndSortedMentors = useMemo(() => {
    if (!data?.items) return [];

    let items = [...data.items];

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      items = items.filter(
        (m) =>
          m.full_name.toLowerCase().includes(q) ||
          m.bio.toLowerCase().includes(q) ||
          CATEGORY_LABELS[m.category]?.toLowerCase().includes(q) ||
          m.email.toLowerCase().includes(q)
      );
    }

    // Sort
    if (sortBy === "SEATS") {
      items.sort((a, b) => b.available_seats - a.available_seats);
    } else if (sortBy === "PRICE_ASC") {
      items.sort((a, b) => Number(a.price_per_month) - Number(b.price_per_month));
    } else if (sortBy === "PRICE_DESC") {
      items.sort((a, b) => Number(b.price_per_month) - Number(a.price_per_month));
    }

    return items;
  }, [data?.items, searchQuery, sortBy]);

  return (
    <div className="space-y-10 max-w-7xl mx-auto pb-16">
      {/* Top Breadcrumb / Return to Home */}
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-ink-muted hover:text-ink transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1 text-brand" />
          <span>Back to Home</span>
        </Link>
        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-moss bg-moss/10 px-2.5 py-0.5 rounded-full border border-moss/20">
          <Lock className="w-3 h-3" />
          Atomic Seat Locking Active
        </span>
      </div>

      {/* Hero Header matching user reference image */}
      <div className="text-center max-w-3xl mx-auto space-y-4 pt-2">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-display text-ink tracking-tight leading-[1.1]">
          Find Your{" "}
          <span className="bg-gradient-to-r from-brand via-[#3b5998] to-moss bg-clip-text text-transparent">
            Perfect Mentor
          </span>
        </h1>
        <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-2xl mx-auto">
          Connect with elite mentors from top institutions and accelerate your journey to success.
        </p>
      </div>

      {/* Search & Filter Container (Card style matching reference screenshot) */}
      <Card className="p-4 sm:p-6 bg-white/95 backdrop-blur-sm border border-mist shadow-card rounded-card space-y-4">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-faint pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search mentors by name, skills, or expertise..."
              className="w-full pl-11 pr-4 py-3 bg-[#FAFAF9] text-ink text-sm rounded-control border border-mist focus:outline-none focus:border-brand focus:bg-white transition-all placeholder:text-ink-faint"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-ink-muted hover:text-ink p-1"
              >
                ✕
              </button>
            )}
          </div>

          <button
            onClick={() => {
              setSelectedCategory(undefined);
              setSearchQuery("");
            }}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-3 rounded-control border border-mist bg-white text-xs font-semibold text-ink-muted hover:text-ink hover:border-brand/40 transition-all shadow-soft"
          >
            <SlidersHorizontal className="w-4 h-4 text-brand" />
            <span>Filters</span>
          </button>
        </div>

        {/* Category Pills below the Search Bar */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.value;
            return (
              <button
                key={cat.label}
                onClick={() => {
                  setSelectedCategory(cat.value);
                  setPage(0);
                }}
                className={`px-4 py-1.5 text-xs font-semibold rounded-full border transition-all ${
                  isSelected
                    ? "bg-brand text-white border-brand shadow-soft"
                    : "bg-white text-ink-muted border-mist hover:text-ink hover:border-brand/40"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </Card>

      {/* Available Mentors Section Header with Count & Sort */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
        <div>
          <h2 className="text-xl font-bold font-display text-ink tracking-tight">
            Available Mentors
          </h2>
          <p className="text-xs text-ink-muted mt-0.5">
            Showing {filteredAndSortedMentors.length} of {data?.total || filteredAndSortedMentors.length} verified mentors
          </p>
        </div>

        {/* Sort Controls */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-ink-muted">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="px-3 py-1.5 text-xs font-semibold text-ink bg-white rounded-control border border-mist shadow-soft focus:outline-none focus:border-brand"
          >
            <option value="POPULAR">Most Popular (Default)</option>
            <option value="SEATS">Most Available Seats</option>
            <option value="PRICE_ASC">Price: Low to High</option>
            <option value="PRICE_DESC">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Content Area */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      ) : isError ? (
        <div className="py-12 text-center rounded-card border border-mist bg-white p-8 shadow-soft">
          <p className="text-sm text-ink-muted mb-4">
            Unable to load mentors at this time.
          </p>
          <Button variant="secondary" size="sm" onClick={() => refetch()}>
            Retry
          </Button>
        </div>
      ) : filteredAndSortedMentors.length === 0 ? (
        <EmptyState
          title="No mentors match your search"
          description={
            searchQuery
              ? `No mentors found matching "${searchQuery}". Try a different search keyword or clear filters.`
              : selectedCategory
              ? `No active mentors currently available in ${CATEGORY_LABELS[selectedCategory]}. Check back soon!`
              : "No mentors are currently available. Check back soon!"
          }
          actionLabel="Clear Filters"
          onAction={() => {
            setSelectedCategory(undefined);
            setSearchQuery("");
          }}
        />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedMentors.map((mentor) => {
              const isSubscribed = Boolean(
                isAuthenticated && activeSub && activeSub.mentor_id === mentor.user_id
              );

              return (
                <Card
                  key={mentor.user_id}
                  className={`flex flex-col justify-between hover:border-brand/40 transition-all duration-300 bg-white shadow-card hover:shadow-elevated hover:-translate-y-1 relative overflow-hidden group ${
                    isSubscribed ? "border-moss/50 shadow-soft ring-1 ring-moss/30" : ""
                  }`}
                >
                  {/* Subtle top banner accent */}
                  <div className="h-12 bg-gradient-to-r from-brand/10 via-brand/5 to-moss/10 -m-6 mb-0 border-b border-mist/40" />

                  <div className="space-y-4 pt-3">
                    {/* Header: Avatar, Name, Rating */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-brand text-white font-bold text-base flex items-center justify-center shadow-soft ring-2 ring-white flex-shrink-0">
                          {mentor.full_name
                            .split(" ")
                            .map((n) => n[0])
                            .slice(0, 2)
                            .join("")
                            .toUpperCase()}
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-base text-ink group-hover:text-brand transition-colors leading-tight">
                            {mentor.full_name}
                          </h3>
                          <span className="text-[11px] font-semibold text-moss">
                            {CATEGORY_LABELS[mentor.category] || mentor.category}
                          </span>
                        </div>
                      </div>

                      {/* 5.0 Star Rating */}
                      <div className="flex items-center gap-1 text-amber text-xs font-bold bg-amber/10 px-2 py-0.5 rounded-full border border-amber/20 flex-shrink-0">
                        <Star className="w-3.5 h-3.5 fill-amber text-amber" />
                        <span>4.9</span>
                      </div>
                    </div>

                    {/* Bio Description */}
                    <p className="text-xs text-ink-muted line-clamp-3 leading-relaxed">
                      {mentor.bio}
                    </p>

                    {/* Seat Limit Badge */}
                    <div className="flex items-center justify-between pt-1">
                      <SeatBadge
                        availableSeats={mentor.available_seats}
                        seatLimit={mentor.seat_limit}
                      />
                      {isSubscribed && (
                        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-moss text-white">
                          ✓ Enrolled
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Footer: Price & Action CTA */}
                  <div className="pt-4 mt-5 border-t border-mist flex items-center justify-between">
                    <div>
                      <span className="font-display text-lg font-bold text-ink">
                        ₹{Number(mentor.price_per_month).toLocaleString("en-IN")}
                      </span>
                      <span className="text-[11px] text-ink-faint ml-1">/ mo</span>
                    </div>

                    <Link href={`/mentors/${mentor.user_id}`}>
                      <Button
                        size="sm"
                        variant="primary"
                        disabled={!isSubscribed && mentor.available_seats <= 0}
                        className={`text-xs font-bold flex items-center gap-1.5 ${
                          isSubscribed ? "bg-moss hover:bg-moss/90 text-white" : "bg-brand hover:bg-brand/90"
                        }`}
                      >
                        <span>
                          {isSubscribed
                            ? "View Cohort"
                            : mentor.available_seats > 0
                            ? "View Profile"
                            : "Cohort Full"}
                        </span>
                        <ArrowRight className="w-3 h-3" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Pagination Controls */}
          {data && data.total > limit && (
            <div className="flex items-center justify-between pt-6 border-t border-mist text-xs text-ink-muted">
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
