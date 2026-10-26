"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import { use1on1MentorDetail, useAvailableSlots, useBookSession } from "@/hooks/useSessions";
import { initiateRazorpayCheckout } from "@/lib/razorpay";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Mentor1on1Card, CATEGORY_LABELS, MentorCategory } from "@/lib/types";
import {
  Video,
  Star,
  ShieldCheck,
  GraduationCap,
  Sparkles,
  Clock,
  Calendar,
  Share2,
  Check,
  Copy,
  ChevronRight,
  ArrowLeft,
  Trophy,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  HelpCircle,
  ExternalLink,
  Target,
  BookOpen,
  TrendingUp,
} from "lucide-react";

interface BookCallDetailClientProps {
  mentorId: string;
  initialMentor?: Mentor1on1Card;
}

export default function BookCallDetailClient({
  mentorId,
  initialMentor,
}: BookCallDetailClientProps) {
  const router = useRouter();
  const { user, isAuthenticated } = useAuthStore();

  const { data: mentorData, isLoading: isMentorLoading } = use1on1MentorDetail(mentorId);
  const mentor = mentorData || initialMentor;

  // Generate the next 14 days starting from tomorrow
  const availableDates = useMemo(() => {
    const list: { dateStr: string; dayName: string; dayNum: number; monthName: string; isTomorrow: boolean }[] = [];
    const base = new Date();
    for (let i = 1; i <= 14; i++) {
      const d = new Date(base);
      d.setDate(base.getDate() + i);
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, "0");
      const day = String(d.getDate()).padStart(2, "0");
      const dateStr = `${year}-${month}-${day}`;

      list.push({
        dateStr,
        dayName: d.toLocaleDateString("en-US", { weekday: "short" }),
        dayNum: d.getDate(),
        monthName: d.toLocaleDateString("en-US", { month: "short" }),
        isTomorrow: i === 1,
      });
    }
    return list;
  }, []);

  const [selectedDate, setSelectedDate] = useState<string>(
    availableDates[0]?.dateStr || ""
  );
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [agenda, setAgenda] = useState<string>("");
  const [copiedLink, setCopiedLink] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Available slots query for selected date
  const mentorIdentifier = mentor?.slug || mentor?.mentor_id || mentorId;
  const { data: slotsData, isLoading: isSlotsLoading } = useAvailableSlots(
    mentorIdentifier,
    selectedDate
  );

  const bookMutation = useBookSession();

  const priceNum = Number(mentor?.one_on_one_price || 0);
  const durationMins = mentor?.one_on_one_duration_minutes || 30;

  // Canonical share URL
  const shareUrl = typeof window !== "undefined"
    ? `${window.location.origin}/book-call/${mentorIdentifier}`
    : `https://mentskool.com/book-call/${mentorIdentifier}`;

  const handleCopyLink = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handleShareWhatsApp = () => {
    const mentorName = mentor?.name || "Mentor";
    const college = mentor?.college ? ` (${mentor.college})` : "";
    const text = `Book a 1-on-1 strategy call with ${mentorName}${college} on Mentskool: ${shareUrl}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, "_blank");
  };

  const handleShareLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      "_blank"
    );
  };

  const formatSlotTime = (timeStr: string) => {
    try {
      const [h, m] = timeStr.split(":");
      const hour = parseInt(h, 10);
      const ampm = hour >= 12 ? "PM" : "AM";
      const hour12 = hour % 12 || 12;
      return `${hour12}:${m} ${ampm}`;
    } catch {
      return timeStr;
    }
  };

  const handleBookSession = async () => {
    if (!isAuthenticated) {
      router.push(`/login?redirect=/book-call/${mentorIdentifier}`);
      return;
    }

    if (!selectedDate || !selectedTime) {
      setErrorMsg("Please select a date and an available time slot.");
      return;
    }

    if (!agenda.trim() || agenda.trim().length < 5) {
      setErrorMsg("Please provide a brief topic or agenda (at least 5 characters).");
      return;
    }

    setErrorMsg(null);
    const scheduledAtIso = `${selectedDate}T${selectedTime}:00+05:30`;

    // Paid session flow via Razorpay
    if (priceNum > 0) {
      await initiateRazorpayCheckout({
        amountInPaise: Math.round(priceNum * 100),
        currency: "INR",
        name: "Mentskool",
        description: `1-on-1 Session with ${mentor?.name || "Mentor"}`,
        prefill: {
          name: user?.full_name || "",
          email: user?.email || "",
        },
        notes: {
          mentor_id: mentorIdentifier,
          scheduled_at: scheduledAtIso,
        },
        onSuccess: async (verification) => {
          try {
            await bookMutation.mutateAsync({
              mentor_id: mentorIdentifier,
              scheduled_at: scheduledAtIso,
              agenda_notes: agenda.trim(),
              payment_id: verification.payment_id,
            });
            setIsSuccess(true);
          } catch (bookErr: any) {
            setErrorMsg(
              bookErr?.detail || bookErr?.message || "Failed to finalize session booking."
            );
          }
        },
        onError: (err) => {
          setErrorMsg(err);
        },
        onDismiss: () => {
          setErrorMsg("Payment was cancelled. Your session has not been booked.");
        },
      });
      return;
    }

    // Free session flow
    try {
      await bookMutation.mutateAsync({
        mentor_id: mentorIdentifier,
        scheduled_at: scheduledAtIso,
        agenda_notes: agenda.trim(),
      });
      setIsSuccess(true);
    } catch (err: any) {
      setErrorMsg(
        err?.detail || err?.message || "Failed to book session. Please try another slot."
      );
    }
  };

  const categoryLabel =
    mentor?.category && (CATEGORY_LABELS as any)[mentor.category]
      ? (CATEGORY_LABELS as any)[mentor.category]
      : "IIT / JEE";

  if (!mentor && isMentorLoading) {
    return (
      <div className="max-w-6xl mx-auto py-16 px-4 text-center space-y-4">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-sm text-slate-500 font-medium">Loading mentor profile & calendar slots...</p>
      </div>
    );
  }

  if (!mentor) {
    return (
      <div className="max-w-md mx-auto py-20 px-4 text-center space-y-4">
        <div className="w-16 h-16 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mx-auto">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h2 className="text-xl font-bold text-slate-900">Mentor Profile Not Found</h2>
        <p className="text-xs text-slate-500">
          This 1-on-1 booking link might be invalid or the mentor may have disabled 1:1 sessions.
        </p>
        <Link href="/book-call">
          <Button variant="primary" size="sm" className="mt-2 text-xs">
            Explore All 1:1 Mentors →
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Top Breadcrumb Bar */}
      <div className="bg-slate-950 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-1.5 overflow-hidden">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
            <Link href="/book-call" className="hover:text-white transition-colors">
              1:1 Call Booking
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
            <span className="text-slate-200 font-semibold truncate">{mentor.name}</span>
          </div>

          <Link
            href="/book-call"
            className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Mentors</span>
          </Link>
        </div>
      </div>

      {/* Hero Section (Modeled after MentorKhoj with big portrait photo) */}
      <section className="bg-slate-950 text-white relative overflow-hidden border-b border-slate-800">
        {/* Glow ambient background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-950/20 to-transparent pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Mentor Metadata, Badges, Rating & Social Share */}
            <div className="lg:col-span-7 space-y-5">
              {/* Profile Verification & Slug Badges */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-semibold shadow-xs">
                  <Sparkles className="w-3 h-3 text-blue-400" />
                  Official Mentskool Profile
                </span>
                {mentor.slug && (
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-slate-900 text-slate-300 border border-slate-800">
                    @{mentor.slug}
                  </span>
                )}
              </div>

              {/* Mentor Name & Headline */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white">
                  {mentor.name}
                </h1>
                <p className="text-sm sm:text-base text-slate-300 font-medium">
                  IIT Mentor on Mentskool • Book 1-on-1 with {mentor.name}
                </p>
              </div>

              {/* Academic Credentials */}
              <div className="flex items-center gap-2.5 flex-wrap text-xs text-slate-200">
                {mentor.college && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-800 font-semibold text-slate-200">
                    <GraduationCap className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{mentor.college}</span>
                  </div>
                )}
                {mentor.exam_rank && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-400/30 font-semibold text-amber-300">
                    <Trophy className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{mentor.exam_rank}</span>
                  </div>
                )}
                <div className="inline-flex items-center px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800 font-semibold text-slate-300">
                  <span>{categoryLabel}</span>
                </div>
              </div>

              {/* Star Rating & Delivered Sessions Count */}
              <div className="flex items-center gap-3 pt-1">
                <div className="flex items-center gap-1 text-amber-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span className="text-sm font-bold text-white">
                  {mentor.rating ? mentor.rating.toFixed(1) : "5.0"}
                </span>
                <span className="text-slate-500">•</span>
                <span className="text-xs text-slate-300 font-medium">
                  {mentor.total_sessions_delivered || 0}+ sessions delivered
                </span>
              </div>

              {/* Primary Call to Action & Pricing Tag */}
              <div className="pt-2 flex items-center gap-4 flex-wrap">
                <a
                  href="#booking-section"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white text-slate-950 hover:bg-slate-100 font-extrabold text-sm shadow-xl hover:shadow-2xl transition-all active:scale-95"
                >
                  <Video className="w-4 h-4 text-blue-600" />
                  <span>Book with {mentor.name.split(" ")[0]}</span>
                </a>

                <div className="text-left">
                  <span className="text-[11px] text-slate-400 block uppercase tracking-wider font-semibold">
                    Session Fee
                  </span>
                  <span className="text-lg font-black text-white">
                    {priceNum > 0 ? (
                      <>₹{priceNum.toLocaleString("en-IN")}</>
                    ) : (
                      <span className="text-emerald-400">Free Call</span>
                    )}
                    <span className="text-xs text-slate-400 font-normal ml-1">
                      / {durationMins} mins
                    </span>
                  </span>
                </div>
              </div>

              {/* Social Share Buttons */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2.5 flex-wrap">
                <span className="text-xs text-slate-400 font-medium flex items-center gap-1 mr-1">
                  <Share2 className="w-3.5 h-3.5 text-slate-400" />
                  Share Profile:
                </span>

                <button
                  onClick={handleShareWhatsApp}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] border border-[#25D366]/30 text-xs font-bold transition-all active:scale-95"
                >
                  <span>WhatsApp</span>
                </button>

                <button
                  onClick={handleShareLinkedIn}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0A66C2]/15 hover:bg-[#0A66C2]/25 text-[#70b5f9] border border-[#0A66C2]/30 text-xs font-bold transition-all active:scale-95"
                >
                  <span>LinkedIn</span>
                </button>

                <button
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold transition-all active:scale-95"
                >
                  {copiedLink ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy link</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right Column: Large Mentor Portrait Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900 group">
                {mentor.avatar_url ? (
                  <img
                    src={mentor.avatar_url}
                    alt={mentor.name}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 text-slate-500 space-y-2">
                    <span className="text-6xl font-black text-slate-400">
                      {mentor.name.charAt(0).toUpperCase()}
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">{mentor.name}</span>
                  </div>
                )}

                {/* Subtle vignette gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Top-Right Floating Star Badge */}
                <div className="absolute top-4 right-4 backdrop-blur-md bg-slate-900/80 border border-white/10 text-white px-3 py-1.5 rounded-2xl flex items-center gap-1 text-xs font-bold shadow-lg">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{mentor.rating ? mentor.rating.toFixed(1) : "5.0"}</span>
                </div>

                {/* Bottom-Left Floating Verified Badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="backdrop-blur-md bg-slate-900/90 border border-emerald-500/30 text-white px-3.5 py-1.5 rounded-2xl flex items-center gap-2 text-xs font-semibold shadow-lg">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Mentskool Verified Expert</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Banner Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-5 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card className="p-4 bg-white border border-slate-200/80 rounded-2xl shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Student Rating</p>
              <h4 className="text-base font-extrabold text-slate-900">
                {mentor.rating ? mentor.rating.toFixed(1) : "5.0"} / 5.0
              </h4>
            </div>
          </Card>

          <Card className="p-4 bg-white border border-slate-200/80 rounded-2xl shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">1:1 Calls Delivered</p>
              <h4 className="text-base font-extrabold text-slate-900">
                {mentor.total_sessions_delivered || 0}+ Completed
              </h4>
            </div>
          </Card>

          <Card className="p-4 bg-white border border-slate-200/80 rounded-2xl shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Verified Identity</p>
              <h4 className="text-base font-extrabold text-slate-900">
                {mentor.college || "IITian Mentor"}
              </h4>
            </div>
          </Card>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-12">
        {/* Interactive Booking Calendar Section */}
        <div id="booking-section" className="scroll-mt-8">
          <Card className="bg-white rounded-3xl border border-slate-200 shadow-md p-6 sm:p-10 space-y-8">
            <div className="border-b border-slate-100 pb-5">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>Instant Scheduling</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Select Date & Time for Your 1-on-1 Session
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Conducted privately via Google Meet / Zoom with {mentor.name}. Duration: {durationMins} minutes.
              </p>
            </div>

            {isSuccess ? (
              <div className="p-8 text-center space-y-4 bg-emerald-50/60 border border-emerald-200 rounded-3xl animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-2xl font-black text-slate-900">1:1 Session Booked Successfully!</h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    Your request has been delivered to {mentor.name}. You will receive confirmation details and meeting links via email.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-4 max-w-md mx-auto border border-emerald-100 text-xs font-medium space-y-1 text-slate-700">
                  <p>
                    <strong className="text-slate-900">Date:</strong> {selectedDate}
                  </p>
                  <p>
                    <strong className="text-slate-900">Time:</strong> {selectedTime ? formatSlotTime(selectedTime) : ""} (IST)
                  </p>
                  <p>
                    <strong className="text-slate-900">Mentor:</strong> {mentor.name}
                  </p>
                </div>
                <div className="pt-2 flex items-center justify-center gap-3">
                  <Link href="/dashboard/sessions">
                    <Button variant="primary" size="sm" className="text-xs font-semibold">
                      Go to My 1:1 Bookings →
                    </Button>
                  </Link>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                      setIsSuccess(false);
                      setSelectedTime(null);
                      setAgenda("");
                    }}
                    className="text-xs font-semibold"
                  >
                    Book Another Slot
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-7">
                {/* Step 1: Date Strip */}
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                    <span>1. Pick a Date</span>
                    <span className="text-slate-400 font-normal">(Next 14 Days)</span>
                  </label>

                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2.5">
                    {availableDates.map((item) => {
                      const isSelected = selectedDate === item.dateStr;
                      return (
                        <button
                          key={item.dateStr}
                          type="button"
                          onClick={() => {
                            setSelectedDate(item.dateStr);
                            setSelectedTime(null);
                          }}
                          className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-0.5 ${
                            isSelected
                              ? "bg-blue-600 border-blue-600 text-white shadow-md scale-102"
                              : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                          }`}
                        >
                          <span
                            className={`text-[10px] uppercase font-bold tracking-wider ${
                              isSelected ? "text-blue-100" : "text-slate-400"
                            }`}
                          >
                            {item.isTomorrow ? "Tomorrow" : item.dayName}
                          </span>
                          <span className="text-lg font-black leading-tight">
                            {item.dayNum}
                          </span>
                          <span
                            className={`text-[11px] font-semibold ${
                              isSelected ? "text-blue-100" : "text-slate-500"
                            }`}
                          >
                            {item.monthName}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2: Time Slots */}
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center justify-between">
                    <span>2. Select Time Slot</span>
                    {selectedDate && (
                      <span className="text-slate-400 font-normal">
                        Date: {selectedDate}
                      </span>
                    )}
                  </label>

                  {isSlotsLoading ? (
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div
                          key={i}
                          className="h-11 rounded-xl bg-slate-100 animate-pulse"
                        />
                      ))}
                    </div>
                  ) : slotsData && slotsData.slots && slotsData.slots.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2.5">
                      {slotsData.slots.map((slot) => {
                        const isChosen = selectedTime === slot;
                        return (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedTime(slot)}
                            className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                              isChosen
                                ? "bg-blue-600 border-blue-600 text-white shadow-xs"
                                : "bg-white border-slate-200 text-slate-700 hover:border-blue-400 hover:bg-blue-50/40"
                            }`}
                          >
                            <Clock className={`w-3.5 h-3.5 ${isChosen ? "text-white" : "text-slate-400"}`} />
                            <span>{formatSlotTime(slot)}</span>
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl text-center space-y-1">
                      <p className="text-xs font-bold text-slate-700">
                        No Open Slots on {selectedDate}
                      </p>
                      <p className="text-[11px] text-slate-500">
                        The mentor is either fully booked or has not scheduled availability for this day. Please pick another date above.
                      </p>
                    </div>
                  )}
                </div>

                {/* Step 3: Agenda / Purpose */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                    3. What would you like to discuss?
                  </label>
                  <textarea
                    rows={3}
                    value={agenda}
                    onChange={(e) => setAgenda(e.target.value)}
                    placeholder="E.g. Preparing for JEE Advanced 2027, clearing physics backlogs, mock test score improvement, test series recommendations..."
                    className="w-full p-3 text-xs rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 font-medium placeholder:text-slate-400"
                  />
                  {/* Topic shortcut chips */}
                  <div className="flex items-center gap-1.5 flex-wrap pt-1">
                    <span className="text-[10px] text-slate-400 font-semibold uppercase">Suggestions:</span>
                    {[
                      "Exam Strategy & Timetable",
                      "Backlog Recovery Plan",
                      "Mock Test Score Analysis",
                      "Physics/Maths Doubts",
                      "Book & Test Series Selection",
                    ].map((topic) => (
                      <button
                        key={topic}
                        type="button"
                        onClick={() => {
                          setAgenda((prev) => (prev ? `${prev}, ${topic}` : topic));
                        }}
                        className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
                      >
                        + {topic}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Error Banner */}
                {errorMsg && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-600 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Step 4: Summary & Checkout Button */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold block">
                      Total Payable
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black text-slate-900">
                        {priceNum > 0 ? (
                          <>₹{priceNum.toLocaleString("en-IN")}</>
                        ) : (
                          <span className="text-emerald-600">Free Call</span>
                        )}
                      </span>
                      <span className="text-xs text-slate-500">
                        for {durationMins} minutes
                      </span>
                    </div>
                  </div>

                  <Button
                    type="button"
                    variant="primary"
                    size="lg"
                    disabled={bookMutation.isPending || !selectedDate || !selectedTime}
                    isLoading={bookMutation.isPending}
                    onClick={handleBookSession}
                    className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Video className="w-4 h-4" />
                    <span>
                      {priceNum > 0
                        ? `Pay ₹${priceNum} & Confirm 1:1 Session`
                        : "Confirm Free 1:1 Session"}
                    </span>
                  </Button>
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* Mentor Bio & Expectations Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6">
            <Card className="p-6 sm:p-8 bg-white border border-slate-200 rounded-3xl space-y-4">
              <h3 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                <span>About {mentor.name}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                {mentor.bio}
              </p>
            </Card>

            <Card className="p-6 sm:p-8 bg-white border border-slate-200 rounded-3xl space-y-4">
              <h3 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <Target className="w-5 h-5 text-emerald-600" />
                <span>What to Expect in this 30-Minute 1:1 Call</span>
              </h3>
              <div className="space-y-3 pt-1">
                {[
                  {
                    title: "Personalized Preparation Roadmap",
                    desc: "An audit of your current syllabus completion, backlogs, and customized weekly milestones.",
                  },
                  {
                    title: "Mock Test & Mistake Analysis",
                    desc: "Diagnose why your scores are plateauing and eliminate negative marking patterns.",
                  },
                  {
                    title: "Curated Resource & Book Recommendations",
                    desc: "Guidance on standard problem sets, coaching modules, and revision books.",
                  },
                  {
                    title: "Live Q&A & Mental Temperament",
                    desc: "Direct answers to your doubts on time management, exam anxiety, and daily motivation.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">{item.title}</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column: Verified 1:1 Reviews */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="p-6 sm:p-8 bg-white border border-slate-200 rounded-3xl space-y-5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span>Verified 1:1 Reviews</span>
                </h3>
                <span className="text-xs font-semibold text-slate-500">
                  {mentor.reviews ? mentor.reviews.length : 0} reviews
                </span>
              </div>

              {mentor.reviews && mentor.reviews.length > 0 ? (
                <div className="space-y-4">
                  {mentor.reviews.map((rev) => (
                    <div
                      key={rev.id}
                      className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">
                            {rev.student_avatar_url ? (
                              <img
                                src={rev.student_avatar_url}
                                alt={rev.student_name || "Student"}
                                className="w-full h-full rounded-full object-cover"
                              />
                            ) : (
                              (rev.student_name || "S").charAt(0).toUpperCase()
                            )}
                          </div>
                          <span className="text-xs font-bold text-slate-900">
                            {rev.student_name || "Student"}
                          </span>
                        </div>
                        <div className="flex items-center gap-0.5 text-amber-400">
                          {Array.from({ length: rev.rating }).map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-slate-600 italic">"{rev.comment}"</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 space-y-2 text-slate-500">
                  <MessageSquare className="w-8 h-8 text-slate-300 mx-auto" />
                  <p className="text-xs font-semibold text-slate-700">No 1:1 Reviews Yet</p>
                  <p className="text-[11px] text-slate-400 max-w-xs mx-auto">
                    Be the first student to book a call with {mentor.name} and share your experience!
                  </p>
                </div>
              )}
            </Card>
          </div>
        </div>

        {/* Cohort Cross-Sell Banner */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-10 border border-blue-800 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold border border-blue-400/30">
              <TrendingUp className="w-3.5 h-3.5" />
              Long-term Mentorship Cohort
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Looking for Continuous Monthly Mentorship?
            </h3>
            <p className="text-xs sm:text-sm text-blue-200/90 leading-relaxed">
              Join {mentor.name}'s exclusive 30-day cohort with personalized daily tasks, doubt solving, progress analytics, and peer discussions.
            </p>
          </div>

          <Link
            href={`/mentors/${mentor.slug || mentor.mentor_id}`}
            className="shrink-0"
          >
            <Button
              variant="secondary"
              className="bg-white hover:bg-slate-100 text-slate-900 font-extrabold text-xs px-6 py-3.5 rounded-xl shadow-lg transition-all"
            >
              Explore Monthly Cohort →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
