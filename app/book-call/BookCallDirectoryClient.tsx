"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { use1on1Mentors } from "@/hooks/useSessions";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CardSkeleton } from "@/components/ui/Skeleton";
import { Book1on1Modal } from "@/components/sessions/Book1on1Modal";
import { Mentor1on1Card } from "@/lib/types";
import { formatExamRank } from "@/lib/mentor-utils";
import {
  Video,
  Star,
  ShieldCheck,
  GraduationCap,
  Sparkles,
  Clock,
  ArrowLeft,
  Search,
  ChevronRight,
  Trophy,
  SlidersHorizontal,
  RotateCcw,
} from "lucide-react";

const CATEGORIES = [
  { label: "All Specializations", value: "" },
  { label: "JEE Mentors", value: "JEE_PREP" },
  { label: "NEET Mentors", value: "NEET_PREP" },
  { label: "GATE / PSU", value: "GATE_PSU" },
];

interface BookCallDirectoryClientProps {
  initialMentors?: Mentor1on1Card[];
}

export default function BookCallDirectoryClient({
  initialMentors,
}: BookCallDirectoryClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [priceFilter, setPriceFilter] = useState<string>("ALL");
  const [sortBy, setSortBy] = useState<string>("featured");

  const { data: mentors, isLoading } = use1on1Mentors(
    selectedCategory || undefined,
    initialMentors
  );

  const [bookingMentor, setBookingMentor] = useState<Mentor1on1Card | null>(null);

  const freeCallsCount = useMemo(() => {
    if (!mentors) return 0;
    return mentors.filter((m) => Number(m.one_on_one_price || 0) === 0).length;
  }, [mentors]);

  const filteredAndSortedMentors = useMemo(() => {
    if (!mentors) return [];

    let list = mentors.filter((m) => {
      // 1. Search Query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = m.name?.toLowerCase().includes(q);
        const matchesCollege = m.college?.toLowerCase().includes(q);
        const matchesRank =
          m.exam_rank && formatExamRank(m.exam_rank, m.rank_type).toLowerCase().includes(q);
        const matchesBio = m.bio?.toLowerCase().includes(q);
        if (!matchesName && !matchesCollege && !matchesRank && !matchesBio) {
          return false;
        }
      }

      // 2. Price filter (Free vs All)
      const priceNum = Number(m.one_on_one_price || 0);
      if (priceFilter === "FREE" && priceNum > 0) {
        return false;
      }

      return true;
    });

    // 3. Sorting
    list = [...list].sort((a, b) => {
      const priceA = Number(a.one_on_one_price || 0);
      const priceB = Number(b.one_on_one_price || 0);

      if (sortBy === "price_asc") {
        return priceA - priceB;
      }
      if (sortBy === "rating_desc") {
        const ratingA = Number(a.rating) || 5.0;
        const ratingB = Number(b.rating) || 5.0;
        return ratingB - ratingA;
      }
      if (sortBy === "sessions_desc") {
        const sessA = a.total_sessions_delivered || 0;
        const sessB = b.total_sessions_delivered || 0;
        return sessB - sessA;
      }
      return 0; // "featured" maintains API order
    });

    return list;
  }, [mentors, searchQuery, priceFilter, sortBy]);

  const hasActiveFilters = Boolean(
    selectedCategory || searchQuery.trim() || priceFilter !== "ALL" || sortBy !== "featured"
  );

  const resetAllFilters = () => {
    setSelectedCategory("");
    setSearchQuery("");
    setPriceFilter("ALL");
    setSortBy("featured");
  };

  return (
    <div className="max-w-7xl mx-auto py-6 sm:py-8 px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Top Breadcrumb & Status */}
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5 text-slate-400 group-hover:text-slate-700" />
          <span>Home</span>
          <ChevronRight className="w-3 h-3 text-slate-300" />
          <span className="text-slate-800 font-semibold">1:1 Call Booking</span>
        </Link>
        <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/80">
          <Video className="w-3.5 h-3.5 text-blue-600" />
          Direct Mentorship Video Calls
        </span>
      </div>

      {/* Hero Banner with High-Contrast Button & Ample Padding to Avoid Any Clipping */}
      <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white rounded-3xl border border-slate-800/90 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/25 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10 pt-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-bold shadow-xs">
            <Video className="w-3.5 h-3.5 text-blue-400" />
            <span>Direct 1-on-1 Mentorship Video Calls</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white leading-tight">
            Book 1-on-1 with Top <span className="text-blue-400">IIT & NEET Rankers</span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Personalized exam strategy, backlog clearance, mock paper diagnosis, and syllabus roadmaps. Pick a mentor, inspect their profile & available slots, and book a private session in seconds.
          </p>

          {/* High-Contrast Action Button with 100% Guaranteed Text Visibility */}
          <div className="pt-2 flex items-center justify-center gap-3">
            <Link
              href="/mentors"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 hover:border-slate-500 shadow-md transition-all active:scale-95"
            >
              <span>Looking for Monthly Cohorts?</span>
              <span className="text-blue-400">→</span>
            </Link>
          </div>

          {/* Trust Highlights Bar */}
          <div className="pt-3 border-t border-slate-800/80 flex items-center justify-center gap-4 sm:gap-6 flex-wrap text-[11px] text-slate-300 font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              100% Verified Top Rankers
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              Private 30-Min Consultations
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Instant Calendar Booking
            </span>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
        {/* Top Row: Category Tabs + Search Input */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.value;
              return (
                <button
                  key={cat.label}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                    isSelected
                      ? "bg-slate-900 text-white shadow-xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search by mentor, college, rank..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 text-xs rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 font-medium placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600 text-xs font-bold px-1"
                title="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Bottom Row: Price Filter Chips + Sort Dropdown */}
        <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
          {/* Price Filters */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1 mr-1">
              Fee Filter:
            </span>
            {[
              { label: "All Fees", value: "ALL" },
              {
                label: `✨ Free 1:1 Calls${freeCallsCount > 0 ? ` (${freeCallsCount})` : ""}`,
                value: "FREE",
                isSpecial: true,
              },
            ].map((p) => {
              const isSelected = priceFilter === p.value;
              return (
                <button
                  key={p.value}
                  onClick={() => setPriceFilter(p.value)}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer flex items-center gap-1 text-xs ${
                    isSelected
                      ? p.isSpecial
                        ? "bg-emerald-600 text-white shadow-xs font-bold"
                        : "bg-blue-600 text-white shadow-xs font-bold"
                      : p.isSpecial
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200/90 hover:bg-emerald-100 font-bold"
                      : "bg-slate-50 text-slate-600 border border-slate-200/70 hover:bg-slate-100"
                  }`}
                >
                  <span>{p.label}</span>
                </button>
              );
            })}
          </div>

          {/* Sort Dropdown & Quick Result Count */}
          <div className="flex items-center gap-3 ml-auto">
            <span className="text-slate-500 text-[11px] font-medium hidden sm:inline">
              Showing <strong className="text-slate-900">{filteredAndSortedMentors.length}</strong>{" "}
              {filteredAndSortedMentors.length === 1 ? "mentor" : "mentors"}
            </span>

            <div className="flex items-center gap-1.5">
              <span className="text-slate-400 text-[11px] font-semibold">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 cursor-pointer"
              >
                <option value="featured">Featured Mentors</option>
                <option value="price_asc">Price: Free & Low to High</option>
                <option value="rating_desc">Highest Rated (★ 5.0)</option>
                <option value="sessions_desc">Most Calls Delivered</option>
              </select>
            </div>

            {hasActiveFilters && (
              <button
                onClick={resetAllFilters}
                className="text-[11px] font-bold text-blue-600 hover:text-blue-800 underline transition-colors inline-flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mentor Cards Grid */}
      <div>
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <CardSkeleton key={i} />
            ))}
          </div>
        ) : filteredAndSortedMentors && filteredAndSortedMentors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedMentors.map((m) => {
              const priceNum = Number(m.one_on_one_price || 0);
              const targetUrl = `/book-call/${m.slug || m.mentor_id}`;

              return (
                <Card
                  key={m.mentor_id}
                  className="bg-white border border-slate-200/90 hover:border-blue-500/60 transition-all duration-200 hover:shadow-xl p-5 sm:p-6 flex flex-col justify-between rounded-2xl group relative"
                >
                  <div className="space-y-4">
                    {/* Top Status & Slug Row with overflow protection */}
                    <div className="flex items-center justify-between gap-2 text-[11px] min-w-0">
                      {priceNum === 0 ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-bold bg-emerald-600 text-white shadow-xs shrink-0">
                          <Sparkles className="w-3 h-3 text-emerald-200" />
                          Free Session
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          1:1 Available
                        </span>
                      )}
                      {m.slug && (
                        <span
                          className="font-mono text-slate-400 text-[10px] truncate max-w-[130px] sm:max-w-[150px] text-right inline-block shrink"
                          title={`@${m.slug}`}
                        >
                          @{m.slug}
                        </span>
                      )}
                    </div>

                    {/* Header: Clickable Avatar, Name, College, Rank */}
                    <div className="flex items-start gap-3.5">
                      <Link
                        href={targetUrl}
                        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden border border-slate-200 shrink-0 shadow-xs flex items-center justify-center font-bold text-slate-700 text-xl group-hover:ring-2 group-hover:ring-blue-500/30 transition-all cursor-pointer"
                        title="Click to view 1:1 profile & schedule"
                      >
                        {m.avatar_url ? (
                          <img
                            src={m.avatar_url}
                            alt={m.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          m.name.charAt(0).toUpperCase()
                        )}
                      </Link>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <Link
                            href={targetUrl}
                            className="font-bold text-slate-900 text-base truncate hover:text-blue-600 transition-colors cursor-pointer"
                            title="Click to view 1:1 profile"
                          >
                            {m.name}
                          </Link>
                          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                        </div>

                        {m.college && (
                          <p className="text-xs text-slate-600 truncate flex items-center gap-1 mt-0.5">
                            <GraduationCap className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                            <span className="truncate">{m.college}</span>
                          </p>
                        )}

                        {m.exam_rank && (
                          <div className="mt-1 flex items-center gap-1 text-[11px] text-amber-700 font-semibold bg-amber-50 border border-amber-200/70 px-2 py-0.5 rounded-full w-fit">
                            <Trophy className="w-3 h-3 text-amber-600 shrink-0" />
                            <span className="truncate">
                              {formatExamRank(m.exam_rank, m.rank_type)}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Quick Stats: Rating & Calls Delivered */}
                    <div className="grid grid-cols-2 gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
                      <div>
                        <div className="flex items-center justify-center gap-1 text-xs font-bold text-slate-900">
                          <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                          <span>{m.rating ? m.rating.toFixed(1) : "5.0"}</span>
                        </div>
                        <p className="text-[10px] text-slate-500">
                          {m.total_reviews} {m.total_reviews === 1 ? "review" : "reviews"}
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center justify-center gap-1 text-xs font-bold text-slate-900">
                          <Video className="w-3.5 h-3.5 text-blue-600" />
                          <span>{m.total_sessions_delivered || 0}+</span>
                        </div>
                        <p className="text-[10px] text-slate-500">calls delivered</p>
                      </div>
                    </div>

                    {/* Bio snippet */}
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {m.bio}
                    </p>
                  </div>

                  {/* Pricing and Action Footer */}
                  <div className="pt-4 border-t border-slate-100 mt-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-slate-500 flex items-center gap-1 font-medium">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {m.one_on_one_duration_minutes || 30} mins session
                      </span>

                      <div>
                        {priceNum > 0 ? (
                          <span className="text-base font-black text-slate-900">
                            ₹{priceNum.toLocaleString("en-IN")}
                          </span>
                        ) : (
                          <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-black tracking-tight flex items-center gap-1">
                            <Sparkles className="w-3 h-3 text-emerald-600" />
                            Free Call (₹0)
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Two Clear, Highly Visible Buttons: Book Call + View Profile */}
                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        href={`${targetUrl}#booking-section`}
                        className={`w-full py-2.5 px-3 rounded-xl text-white text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1.5 active:scale-95 ${
                          priceNum === 0
                            ? "bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/20"
                            : "bg-blue-600 hover:bg-blue-700"
                        }`}
                      >
                        <Video className="w-3.5 h-3.5" />
                        <span>{priceNum === 0 ? "Book Free Call" : "Book 1:1 Call"}</span>
                      </Link>

                      <Link
                        href={targetUrl}
                        className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200/90 text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1 active:scale-95"
                      >
                        <span>View Profile</span>
                        <span className="text-slate-400">↗</span>
                      </Link>
                    </div>

                    <div className="text-center pt-1.5 border-t border-slate-50">
                      <Link
                        href={`/mentors/${m.slug || m.mentor_id}`}
                        className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors font-medium inline-flex items-center gap-1"
                      >
                        <span>Looking for monthly cohort?</span>
                        <span className="underline font-semibold">View Cohort →</span>
                      </Link>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        ) : (
          <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 space-y-3 max-w-md mx-auto">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
              <Video className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">No Mentors Found</h3>
            <p className="text-xs text-slate-500">
              No mentors match your selected filters. Try choosing a different specialization, fee range, or clearing the search query.
            </p>
            <div className="pt-2">
              <Button
                variant="secondary"
                size="sm"
                onClick={resetAllFilters}
                className="text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset All Filters</span>
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Booking Modal (if opened directly) */}
      {bookingMentor && (
        <Book1on1Modal
          isOpen={!!bookingMentor}
          onClose={() => setBookingMentor(null)}
          mentor={{
            user_id: bookingMentor.mentor_id,
            slug: bookingMentor.slug,
            full_name: bookingMentor.name,
            avatar_url: bookingMentor.avatar_url,
            college: bookingMentor.college,
            exam_rank: bookingMentor.exam_rank,
            rank_type: bookingMentor.rank_type,
            one_on_one_price: bookingMentor.one_on_one_price,
            one_on_one_duration_minutes: bookingMentor.one_on_one_duration_minutes,
          }}
        />
      )}
    </div>
  );
}
