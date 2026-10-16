"use client";

import React, { useState } from "react";
import Link from "next/link";
import { use1on1Mentors } from "@/hooks/useSessions";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Skeleton } from "@/components/ui/Skeleton";
import { Book1on1Modal } from "@/components/sessions/Book1on1Modal";
import { Mentor1on1Card } from "@/lib/types";
import {
  Video,
  Star,
  ShieldCheck,
  GraduationCap,
  Sparkles,
  Calendar,
  Clock,
  ArrowRight,
  Search,
} from "lucide-react";

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
      (m.exam_rank && m.exam_rank.toLowerCase().includes(q))
    );
  });

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-900/0 to-slate-900/0 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-semibold mb-2">
            <Video className="w-3.5 h-3.5 text-blue-400" />
            <span>Instant 1-on-1 Mentorship Sessions</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Book 1-on-1 with Top <span className="text-blue-400">IIT & NEET Rankers</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Personalized exam strategy, backlog clearance, mock paper review, and college guidance. Secure your 30-minute private video call in seconds.
          </p>

          <div className="pt-2 flex items-center justify-center gap-3">
            <Link href="/mentors">
              <Button variant="secondary" size="sm" className="text-xs bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700">
                Looking for Monthly Cohorts? →
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white p-4 rounded-2xl shadow-lg border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            <button
              onClick={() => setSelectedCategory("")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all shrink-0 ${
                !selectedCategory
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              All Mentors
            </button>
            <button
              onClick={() => setSelectedCategory("JEE_PREP")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all shrink-0 ${
                selectedCategory === "JEE_PREP"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              IIT-JEE Mentors
            </button>
            <button
              onClick={() => setSelectedCategory("NEET_PREP")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all shrink-0 ${
                selectedCategory === "NEET_PREP"
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              NEET-UG Mentors
            </button>
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search by mentor or college..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Directory Grid */}
      <div className="max-w-6xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="p-6 bg-white border border-slate-200 space-y-4">
                <Skeleton className="w-16 h-16 rounded-full mx-auto" />
                <Skeleton className="h-5 w-3/4 mx-auto" />
                <Skeleton className="h-4 w-1/2 mx-auto" />
                <Skeleton className="h-10 w-full" />
              </Card>
            ))}
          </div>
        ) : filteredMentors && filteredMentors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMentors.map((m) => {
              const priceNum = Number(m.one_on_one_price || 0);
              return (
                <Card
                  key={m.mentor_id}
                  className="bg-white border border-slate-200 hover:border-blue-300 transition-all hover:shadow-md p-5 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-14 h-14 rounded-2xl bg-slate-100 overflow-hidden border border-slate-200 shrink-0">
                        {m.avatar_url ? (
                          <img
                            src={m.avatar_url}
                            alt={m.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center font-bold text-slate-600 text-lg">
                            {m.name.charAt(0)}
                          </div>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <h3 className="font-bold text-slate-900 text-sm truncate">
                            {m.name}
                          </h3>
                          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                        </div>
                        <p className="text-xs text-slate-500 truncate">
                          {m.college || m.exam_rank || "Expert Mentor"}
                        </p>
                        {m.exam_rank && (
                          <span className="inline-block mt-1 text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full font-medium">
                            {m.exam_rank}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
                      <div>
                        <div className="flex items-center justify-center gap-1 text-xs font-bold text-slate-900">
                          <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                          <span>{m.rating.toFixed(1)}</span>
                        </div>
                        <p className="text-[10px] text-slate-500">
                          {m.total_reviews} {m.total_reviews === 1 ? "review" : "reviews"}
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center justify-center gap-1 text-xs font-bold text-slate-900">
                          <Video className="w-3.5 h-3.5 text-blue-600" />
                          <span>{m.total_sessions_delivered}+</span>
                        </div>
                        <p className="text-[10px] text-slate-500">calls delivered</p>
                      </div>
                    </div>

                    {/* Bio snippet */}
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {m.bio}
                    </p>
                  </div>

                  {/* Pricing and Action */}
                  <div className="pt-4 border-t border-slate-100 mt-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-slate-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {m.one_on_one_duration_minutes || 30} mins session
                      </span>
                      <span className="text-sm font-bold text-slate-900">
                        {priceNum > 0 ? `₹${priceNum.toLocaleString("en-IN")}` : "Free Call"}
                      </span>
                    </div>

                    <Button
                      size="sm"
                      variant="primary"
                      onClick={() => setBookingMentor(m)}
                      className="w-full text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-sm flex items-center justify-center gap-1.5"
                    >
                      <Video className="w-3.5 h-3.5" />
                      Book 1-on-1 Session
                    </Button>

                    <div className="text-center">
                      <Link
                        href={`/mentors/${m.slug || m.mentor_id}`}
                        className="text-[11px] text-slate-500 hover:text-slate-800 underline"
                      >
                        View Full Cohort Profile →
                      </Link>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        ) : (
          <div className="p-12 text-center bg-white rounded-2xl border border-slate-200">
            <Video className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="font-bold text-slate-800 text-sm">No Mentors Found</h3>
            <p className="text-xs text-slate-500 mt-1">
              Try adjusting your category filter or search keywords.
            </p>
          </div>
        )}
      </div>

      {/* Booking Modal */}
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
