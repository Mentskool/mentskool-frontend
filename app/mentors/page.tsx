"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useMentors } from "@/hooks/useMentors";
import { useSubscriptions } from "@/hooks/useSubscriptions";
import { useAuthStore } from "@/store/authStore";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CardSkeleton } from "@/components/ui/Skeleton";
import { EmptyState } from "@/components/ui/EmptyState";
import { CATEGORY_LABELS, MentorCategory } from "@/lib/types";
import { ActivityHeatmap } from "@/components/ActivityHeatmap";
import {
  Search,
  SlidersHorizontal,
  ArrowLeft,
  GraduationCap,
  Trophy,
  ShieldCheck,
  Users,
  ChevronRight,
  Clock,
} from "lucide-react";

const CATEGORIES: { label: string; value?: MentorCategory }[] = [
  { label: "All Specializations" },
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

  // Client-side search and sort filtering
  const filteredAndSortedMentors = useMemo(() => {
    if (!data?.items) return [];

    let items = [...data.items];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      items = items.filter(
        (m) =>
          m.full_name.toLowerCase().includes(q) ||
          m.bio.toLowerCase().includes(q) ||
          (m.college && m.college.toLowerCase().includes(q)) ||
          (m.exam_rank && m.exam_rank.toLowerCase().includes(q)) ||
          (CATEGORY_LABELS[m.category] && CATEGORY_LABELS[m.category].toLowerCase().includes(q)) ||
          Boolean(m.email && m.email.toLowerCase().includes(q))
      );
    }

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
    <div className="space-y-8 max-w-7xl mx-auto pb-20">
      {/* Top Breadcrumb & Status */}
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5 text-slate-400 group-hover:text-slate-700" />
          <span>Home</span>
          <ChevronRight className="w-3 h-3 text-slate-300" />
          <span className="text-slate-800 font-semibold">Mentors</span>
        </Link>
        <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/80">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          Strict 30-Seat Cap Enforced
        </span>
      </div>

      {/* Modern Executive Hero */}
      <div className="rounded-2xl bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-4 shadow-sm">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-slate-200 text-xs font-medium border border-white/10">
          <span>Curated Mentorship Cohorts</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-white">
          Find Your Accountability Mentor
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Learn with top exam rankers and alumni from premier institutions. Micro-cohorts capped at 30 seats for focused, personalized guidance.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by mentor name, college, exam rank, or subject..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 text-slate-900 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-slate-400 focus:bg-white transition-all placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700 p-1"
              >
                ✕
              </button>
            )}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <span className="text-xs text-slate-400 font-medium whitespace-nowrap">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full sm:w-auto px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:border-slate-400"
            >
              <option value="POPULAR">Recommended</option>
              <option value="SEATS">Most Available Seats</option>
              <option value="PRICE_ASC">Price: Low to High</option>
              <option value="PRICE_DESC">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-slate-100">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.value;
            return (
              <button
                key={cat.label}
                onClick={() => {
                  setSelectedCategory(cat.value);
                  setPage(0);
                }}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  isSelected
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-slate-50 text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/70"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-base font-bold font-display text-slate-900">
          Available Mentors ({filteredAndSortedMentors.length})
        </h2>
        <span className="text-xs text-slate-500">
          Showing verified & active mentors
        </span>
      </div>

      {/* Grid of Mentors */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      ) : isError ? (
        <div className="py-16 text-center rounded-2xl border border-slate-200 bg-white p-8">
          <p className="text-sm text-slate-600 mb-4">
            Unable to load mentors at this time.
          </p>
          <Button variant="secondary" size="sm" onClick={() => refetch()}>
            Retry
          </Button>
        </div>
      ) : filteredAndSortedMentors.length === 0 ? (
        <EmptyState
          title="No mentors found"
          description={
            searchQuery
              ? `No mentors matching "${searchQuery}". Try a different keyword or reset filters.`
              : selectedCategory
              ? `No mentors currently open for enrollment in ${CATEGORY_LABELS[selectedCategory]}.`
              : "No mentors are currently available. Check back soon."
          }
          actionLabel="Clear Filters"
          onAction={() => {
            setSelectedCategory(undefined);
            setSearchQuery("");
          }}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAndSortedMentors.map((mentor) => {
            const isSubscribed = Boolean(
              isAuthenticated && activeSub && activeSub.mentor_id === mentor.user_id
            );
            const enrolledCount = Math.max(0, mentor.seat_limit - mentor.available_seats);

            return (
              <div
                key={mentor.user_id}
                className="flex flex-col justify-between bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200 group"
              >
                <div className="space-y-4">
                  {/* Top: Avatar, Name, Specialization */}
                  <div className="flex items-start gap-3.5">
                    <div className="relative w-12 h-12 rounded-xl bg-slate-900 text-white font-bold text-sm flex items-center justify-center flex-shrink-0 overflow-hidden ring-1 ring-slate-200/80">
                      <span>
                        {mentor.full_name
                          .split(" ")
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join("")
                          .toUpperCase()}
                      </span>
                      {mentor.avatar_url && (
                        <img
                          src={mentor.avatar_url}
                          alt={mentor.full_name}
                          className="absolute inset-0 w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <Link href={`/mentors/${mentor.slug || mentor.user_id}`}>
                          <h3 className="font-display font-bold text-base text-slate-900 group-hover:text-indigo-600 transition-colors truncate hover:underline">
                            {mentor.full_name}
                          </h3>
                        </Link>
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      </div>

                      <div className="flex items-center gap-1.5 flex-wrap mt-1">
                        <span className="text-[11px] font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
                          {CATEGORY_LABELS[mentor.category] || mentor.category}
                        </span>
                        {mentor.exam_rank && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200/80">
                            <Trophy className="w-2.5 h-2.5 text-amber-600" />
                            {mentor.exam_rank}
                          </span>
                        )}
                      </div>

                      {mentor.college && (
                        <div className="flex items-center gap-1 text-xs text-slate-500 mt-1 truncate">
                          <GraduationCap className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                          <span className="truncate">{mentor.college}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Bio Preview */}
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {mentor.bio || "Accountability mentorship focused on structured weekly goals and revision consistency."}
                  </p>

                  {/* 30-Day Activity Heatmap Strip */}
                  <div className="pt-2 pb-1 border-t border-slate-100">
                    <ActivityHeatmap
                      compact
                      heatmap={mentor.activity_heatmap_30d}
                      activityStatus={mentor.activity_status}
                    />
                  </div>

                  {/* Seat Meter */}
                  <div className="pt-1 space-y-1.5">
                    <div className="flex items-center justify-between text-[11px] font-medium text-slate-500">
                      <span>Seat Capacity</span>
                      <span
                        className={
                          mentor.available_seats <= 5
                            ? "text-amber-600 font-bold"
                            : "text-slate-700 font-semibold"
                        }
                      >
                        {mentor.available_seats > 0
                          ? `${mentor.available_seats} of ${mentor.seat_limit} open`
                          : "Cohort Full"}
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-300 ${
                          mentor.available_seats <= 3 ? "bg-amber-500" : "bg-emerald-500"
                        }`}
                        style={{
                          width: `${Math.min(
                            100,
                            Math.round((enrolledCount / Math.max(1, mentor.seat_limit)) * 100)
                          )}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Footer: Price and CTA */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-base font-extrabold font-display text-slate-900">
                      {Number(mentor.price_per_month) > 0
                        ? `₹${Number(mentor.price_per_month).toLocaleString("en-IN")}`
                        : "Free"}
                    </span>
                    <span className="text-[11px] text-slate-400 ml-1">/ mo</span>
                  </div>

                  <Link href={`/mentors/${mentor.slug || mentor.user_id}`}>
                    <Button
                      size="sm"
                      variant="primary"
                      className={`text-xs font-semibold px-3 py-1.5 rounded-lg ${
                        isSubscribed
                          ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                          : "bg-slate-900 hover:bg-slate-800 text-white"
                      }`}
                    >
                      {isSubscribed
                        ? "Active Cohort"
                        : mentor.available_seats > 0
                        ? "View Cohort"
                        : "View Profile"}
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
