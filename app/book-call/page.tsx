"use client";

import React, { useState } from "react";
import Link from "next/link";
import { use1on1Mentors } from "@/hooks/useSessions";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CardSkeleton } from "@/components/ui/Skeleton";
import { Book1on1Modal } from "@/components/sessions/Book1on1Modal";
import { Mentor1on1Card } from "@/lib/types";
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
} from "lucide-react";

const CATEGORIES = [
  { label: "All Specializations", value: "" },
  { label: "JEE Mentors", value: "JEE_PREP" },
  { label: "NEET Mentors", value: "NEET_PREP" },
  { label: "GATE / PSU", value: "GATE_PSU" },
];

export default function BookCallDirectoryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { data: mentors, isLoading } = use1on1Mentors(selectedCategory || undefined);

  const [bookingMentor, setBookingMentor] = useState<Mentor1on1Card | null>(null);

  const filteredMentors = mentors?.filter((m) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      m.name.toLowerCase().includes(q) ||
      (m.college && m.college.toLowerCase().includes(q)) ||
      (m.exam_rank && m.exam_rank.toLowerCase().includes(q)) ||
      (m.bio && m.bio.toLowerCase().includes(q))
    );
  });

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
      <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.value;
            return (
              <button
                key={cat.label}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all shrink-0 ${
                  isSelected
                    ? "bg-blue-600 text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200/80"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
          <input
            type="text"
            placeholder="Search by mentor, college, rank..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 font-medium placeholder:text-slate-400"
          />
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
        ) : filteredMentors && filteredMentors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMentors.map((m) => {
              const priceNum = Number(m.one_on_one_price || 0);
              const targetUrl = `/book-call/${m.slug || m.mentor_id}`;

              return (
                <Card
                  key={m.mentor_id}
                  className="bg-white border border-slate-200/90 hover:border-blue-500/60 transition-all duration-200 hover:shadow-xl p-5 sm:p-6 flex flex-col justify-between rounded-2xl group relative"
                >
                  <div className="space-y-4">
                    {/* Top Status & Slug Row */}
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        1:1 Available
                      </span>
                      {m.slug && (
                        <span className="font-mono text-slate-400 text-[10px]">
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
                            <span className="truncate">{m.exam_rank}</span>
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
                          <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold">
                            Free Call
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Two Clear, Highly Visible Buttons: Book Call + View Profile */}
                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        href={`${targetUrl}#booking-section`}
                        className="w-full py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1.5 active:scale-95"
                      >
                        <Video className="w-3.5 h-3.5" />
                        <span>Book 1:1 Call</span>
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
              No mentors match your selected filters. Try choosing a different specialization or clearing the search query.
            </p>
            <div className="pt-2">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  setSelectedCategory("");
                  setSearchQuery("");
                }}
                className="text-xs font-semibold"
              >
                Clear All Filters
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
            one_on_one_price: bookingMentor.one_on_one_price,
            one_on_one_duration_minutes: bookingMentor.one_on_one_duration_minutes,
          }}
        />
      )}
    </div>
  );
}
