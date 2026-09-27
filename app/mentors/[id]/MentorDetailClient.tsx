"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import {
  useMentor,
  useSubscribeMentor,
  useMentorReviews,
  useMentorReviewEligibility,
  useSubmitMentorReview,
} from "@/hooks/useMentors";
import { useSubscriptions, useLeaveActiveCohort } from "@/hooks/useSubscriptions";
import { useAuthStore } from "@/store/authStore";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Skeleton } from "@/components/ui/Skeleton";
import { ApiError, CATEGORY_LABELS, MentorProfile } from "@/lib/types";
import { ActivityHeatmap } from "@/components/ActivityHeatmap";
import {
  GraduationCap,
  Trophy,
  ShieldCheck,
  Calendar,
  Clock,
  MessageSquare,
  Video,
  CheckCircle2,
  BookOpen,
  Award,
  Users,
  Target,
  LineChart,
  ArrowLeft,
  Sparkles,
  Layers,
  ChevronRight,
  AlertCircle,
  Star,
} from "lucide-react";

const getYouTubeEmbedUrl = (url?: string | null): string | null => {
  if (!url) return null;
  const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regExp);
  return match ? `https://www.youtube-nocookie.com/embed/${match[1]}` : null;
};

type SubTab = "overview" | "curriculum" | "schedule" | "reviews";

export default function MentorDetailClient({
  mentorId: propMentorId,
  initialMentor,
}: {
  mentorId?: string;
  initialMentor?: MentorProfile;
} = {}) {
  const params = useParams();
  const router = useRouter();
  const mentorId = propMentorId || (params?.id as string);

  const { data: mentor, isLoading, isError, refetch } = useMentor(mentorId, initialMentor);
  const { user, isAuthenticated } = useAuthStore();
  const { data: subsData, refetch: refetchSubs } = useSubscriptions();
  const subscribeMutation = useSubscribeMentor();
  const leaveCohortMutation = useLeaveActiveCohort();

  const activeSub = subsData?.items?.find((s) => s.status === "ACTIVE");
  const isEnrolledHere = Boolean(
    isAuthenticated && mentor && activeSub && activeSub.mentor_id === mentor.user_id
  );
  const isEnrolledElsewhere = Boolean(
    isAuthenticated && mentor && activeSub && activeSub.mentor_id !== mentor.user_id
  );

  const searchParams = useSearchParams();
  const queryTab = searchParams?.get("tab") as SubTab | null;
  const [activeTab, setActiveTab] = useState<SubTab>(
    queryTab === "reviews" || queryTab === "curriculum" || queryTab === "schedule"
      ? queryTab
      : "overview"
  );
  const [showLeaveConfirm, setShowLeaveConfirm] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const targetMentorId = mentor?.user_id || mentorId;
  const { data: reviewsData, refetch: refetchReviews } = useMentorReviews(targetMentorId);
  const { data: eligibility, refetch: refetchEligibility } = useMentorReviewEligibility(
    targetMentorId,
    Boolean(isAuthenticated)
  );
  const submitReviewMutation = useSubmitMentorReview(targetMentorId);

  const [reviewRating, setReviewRating] = useState<number>(5);
  const [reviewComment, setReviewComment] = useState<string>("");
  const [reviewError, setReviewError] = useState<string | null>(null);
  const [reviewSuccess, setReviewSuccess] = useState<string | null>(null);

  useEffect(() => {
    if (eligibility?.my_review) {
      setReviewRating(eligibility.my_review.rating);
      setReviewComment(eligibility.my_review.comment);
    }
  }, [eligibility?.my_review]);

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    setReviewError(null);
    setReviewSuccess(null);
    if (!reviewComment.trim() || reviewComment.trim().length < 5) {
      setReviewError("Please write at least 5 characters of feedback.");
      return;
    }
    try {
      await submitReviewMutation.mutateAsync({
        rating: reviewRating,
        comment: reviewComment.trim(),
      });
      setReviewSuccess("Your review has been saved! Thank you for supporting your mentor.");
      refetchReviews();
      refetchEligibility();
      refetch();
    } catch (err: any) {
      setReviewError(err?.detail || "Failed to submit review. Please try again.");
    }
  };

  const handleLeaveCohort = async () => {
    try {
      await leaveCohortMutation.mutateAsync();
      setShowLeaveConfirm(false);
      setFeedback({
        type: "success",
        message: "You have left this cohort. Your seat has been released.",
      });
      refetch();
      refetchSubs();
    } catch (err) {
      const apiErr = err as ApiError;
      setFeedback({
        type: "error",
        message: apiErr.detail || "Unable to leave cohort. Please try again.",
      });
    }
  };

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
      await subscribeMutation.mutateAsync(targetMentorId);
      setFeedback({
        type: "success",
        message: "Successfully subscribed to this cohort! You now have full access to assignments, chat, and meetings.",
      });
      refetch();
      refetchSubs();
    } catch (err) {
      const apiErr = err as ApiError;
      if (apiErr.status === 409) {
        if (
          apiErr.code === "ALREADY_IN_COHORT" ||
          apiErr.detail?.toLowerCase().includes("multiple cohorts") ||
          apiErr.detail?.toLowerCase().includes("already enrolled")
        ) {
          setFeedback({
            type: "error",
            message: "You are already enrolled in an active cohort. Students can only enroll in one cohort at a time.",
          });
        } else if (apiErr.code === "SEAT_FULL" || apiErr.detail?.toLowerCase().includes("full")) {
          setFeedback({
            type: "error",
            message: "This cohort has reached maximum capacity. All seats are currently filled.",
          });
        } else {
          setFeedback({
            type: "error",
            message: "You already hold an active subscription with this mentor.",
          });
        }
      } else if (apiErr.status === 404) {
        setFeedback({
          type: "error",
          message: "Mentor profile could not be found. Please refresh and try again.",
        });
      } else if (apiErr.status === 400 && apiErr.detail?.toLowerCase().includes("not accepting")) {
        setFeedback({
          type: "error",
          message: "This mentor is currently not accepting new students.",
        });
      } else {
        setFeedback({
          type: "error",
          message: apiErr.detail || "Unable to complete subscription. Please try again.",
        });
      }
    }
  };

  const handleMessageMentor = () => {
    if (!isAuthenticated) {
      router.push(`/login?redirect=/mentors/${mentorId}`);
      return;
    }
    if (user?.role === "ADMIN") {
      router.push("/admin/mentors");
      return;
    }
    router.push(`/messages?user=${mentor?.user_id}`);
  };

  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto space-y-8 py-6">
        <Skeleton className="h-6 w-36 rounded-md" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-6">
            <Skeleton className="h-44 w-full rounded-2xl" />
            <Skeleton className="h-72 w-full rounded-2xl" />
            <Skeleton className="h-48 w-full rounded-2xl" />
          </div>
          <div className="lg:col-span-4">
            <Skeleton className="h-[480px] w-full rounded-2xl" />
          </div>
        </div>
      </div>
    );
  }

  if (isError || !mentor) {
    return (
      <div className="py-20 text-center max-w-md mx-auto space-y-4">
        <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto text-slate-500">
          <AlertCircle className="w-7 h-7" />
        </div>
        <h2 className="text-xl font-bold font-display text-slate-900">
          Mentor Profile Unavailable
        </h2>
        <p className="text-sm text-slate-500 leading-relaxed">
          The requested mentor profile does not exist, is currently paused, or is awaiting verification.
        </p>
        <Link href="/mentors" className="inline-block pt-2">
          <Button variant="secondary" size="md">
            Explore All Mentors
          </Button>
        </Link>
      </div>
    );
  }

  const embedUrl = getYouTubeEmbedUrl(mentor.intro_youtube_url);
  const enrolledStudents = Math.max(0, mentor.seat_limit - mentor.available_seats);
  const progressPercent = Math.min(
    100,
    Math.round((enrolledStudents / Math.max(1, mentor.seat_limit)) * 100)
  );

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-20">
      {/* Refined Navigation Breadcrumb */}
      <div className="flex items-center justify-between">
        <Link
          href="/mentors"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5 text-slate-400 group-hover:text-slate-700" />
          <span>Mentors Directory</span>
          <ChevronRight className="w-3 h-3 text-slate-300" />
          <span className="text-slate-800 font-semibold">{mentor.full_name}</span>
        </Link>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-600 bg-slate-100/80 px-2.5 py-1 rounded-full border border-slate-200/80">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Verified Mentor
          </span>
        </div>
      </div>

      {/* Hero Header Card */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-white via-slate-50/50 to-white border border-slate-200/80 p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Avatar and Primary Details */}
          <div className="flex items-start sm:items-center gap-5">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 text-white font-bold text-2xl flex items-center justify-center shadow-sm ring-1 ring-slate-200/70 border-2 border-white flex-shrink-0 overflow-hidden">
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

            <div className="space-y-2">
              <div className="flex items-center gap-2.5 flex-wrap">
                <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 tracking-tight">
                  {mentor.full_name}
                </h1>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200/60">
                  {CATEGORY_LABELS[mentor.category] || mentor.category}
                </span>
                {mentor.exam_rank && (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200/60">
                    <Trophy className="w-3 h-3 text-amber-600" />
                    {mentor.exam_rank}
                  </span>
                )}
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200/80">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-500" />
                  <span>
                    {mentor.rating_avg ? `${mentor.rating_avg.toFixed(1)} ★` : "New Mentor"}
                  </span>
                  {Boolean(mentor.review_count) && (
                    <span className="text-slate-400 font-normal">({mentor.review_count})</span>
                  )}
                </span>
              </div>

              <div className="flex items-center gap-4 text-xs text-slate-600 flex-wrap">
                {mentor.college && (
                  <div className="flex items-center gap-1.5 font-medium">
                    <GraduationCap className="w-4 h-4 text-slate-400" />
                    <span>{mentor.college}</span>
                  </div>
                )}
                <div className="flex items-center gap-1.5 font-medium text-slate-500">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Avg response within 24h</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium text-slate-500">
                  <Users className="w-3.5 h-3.5 text-slate-400" />
                  <span>Max {mentor.seat_limit} students cohort</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Action in Header */}
          <div className="flex items-center gap-2.5 self-start md:self-center">
            {user?.role === "ADMIN" ? (
              <Link href="/admin/mentors">
                <Button
                  variant="secondary"
                  size="sm"
                  className="text-xs font-semibold flex items-center gap-1.5 border-slate-300 hover:border-slate-400 text-slate-700 bg-white shadow-xs"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                  <span>Admin Console</span>
                </Button>
              </Link>
            ) : user?.id !== mentor.user_id ? (
              <Button
                variant="secondary"
                size="sm"
                onClick={handleMessageMentor}
                className="text-xs font-semibold flex items-center gap-1.5 border-slate-300 hover:border-slate-400 text-slate-700"
              >
                <MessageSquare className="w-3.5 h-3.5 text-slate-500" />
                <span>Message Mentor</span>
              </Button>
            ) : null}
          </div>
        </div>
      </div>

      {/* Feedback Alerts */}
      {feedback && (
        <div
          className={`p-4 rounded-xl text-sm border flex items-center justify-between ${
            feedback.type === "success"
              ? "bg-emerald-50 text-emerald-800 border-emerald-200"
              : "bg-red-50 text-red-800 border-red-200"
          }`}
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
            <span>{feedback.message}</span>
          </div>
          {feedback.type === "success" && (
            <Link href="/dashboard/tasks">
              <Button size="sm" variant="secondary" className="text-xs bg-white">
                View Tasks
              </Button>
            </Link>
          )}
        </div>
      )}

      {/* Main 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Video & Deep Content Tabs */}
        <div className="lg:col-span-7 xl:col-span-8 space-y-6">
          {/* Introductory Video Player or Structured Welcome Banner */}
          {embedUrl ? (
            <div className="w-full aspect-video rounded-2xl overflow-hidden border border-slate-200 bg-slate-950 shadow-sm relative">
              <iframe
                src={embedUrl}
                title={`${mentor.full_name} Cohort Overview`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          ) : (
            <div className="rounded-2xl border border-slate-200/80 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/10">
                  <Video className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-display font-bold text-lg text-white">
                    Cohort Briefing & Strategy Orientation
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed max-w-xl">
                    This cohort follows a structured accountability curriculum with weekly milestones, single-blind task reviews, and 1:1 strategy corrections.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Clean Segmented Tab Navigation */}
          <div className="flex items-center gap-1.5 border-b border-slate-200 pb-2 overflow-x-auto">
            <button
              onClick={() => setActiveTab("overview")}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeTab === "overview"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Overview & Strategy</span>
            </button>

            <button
              onClick={() => setActiveTab("curriculum")}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeTab === "curriculum"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>What You Get</span>
            </button>

            <button
              onClick={() => setActiveTab("schedule")}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeTab === "schedule"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Weekly Cadence</span>
            </button>

            <button
              onClick={() => setActiveTab("reviews")}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeTab === "reviews"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
              <span>Reviews & Ratings</span>
              {Boolean(mentor.review_count) && (
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-amber-100 text-amber-900 font-bold">
                  {mentor.review_count}
                </span>
              )}
            </button>
          </div>

          {/* Tab Content Panel */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-sm space-y-6">
            {activeTab === "overview" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    About The Mentor
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                    {mentor.bio || "No detailed biography provided yet."}
                  </p>
                </div>

                <div className="pt-5 border-t border-slate-100">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Mentorship Highlights
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center flex-shrink-0">
                        <Target className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900">Customized Goal Milestones</h4>
                        <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                          Weekly tasks engineered to bridge weak topics with measurable progress.
                        </p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                        <LineChart className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900">Efficiency Tracking</h4>
                        <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                          Real-time scoring so you know exactly where your preparation stands.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "curriculum" && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Cohort Deliverables
                  </h3>
                  <p className="text-xs text-slate-500 mb-4">
                    Every enrolled student receives full access to the following structured accountability framework:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1.5">
                    <div className="flex items-center gap-2 text-slate-900 font-bold text-xs">
                      <Target className="w-4 h-4 text-indigo-600" />
                      <span>Weekly Structured Tasks</span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Assignments with clear rubrics and scheduled completion deadlines, preventing last-minute cramming.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1.5">
                    <div className="flex items-center gap-2 text-slate-900 font-bold text-xs">
                      <MessageSquare className="w-4 h-4 text-emerald-600" />
                      <span>Private Cohort Channel</span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Continuous async discussion with the mentor and high-performing peers in a focused environment.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1.5">
                    <div className="flex items-center gap-2 text-slate-900 font-bold text-xs">
                      <Clock className="w-4 h-4 text-amber-600" />
                      <span>Prompt Feedback & Review</span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Constructive feedback on all submitted work within 24 hours of submission.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1.5">
                    <div className="flex items-center gap-2 text-slate-900 font-bold text-xs">
                      <Users className="w-4 h-4 text-purple-600" />
                      <span>Scheduled 1:1 Check-ins</span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Direct video sessions for strategy refinement, doubt clearing, and revision planning.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "schedule" && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Weekly Rhythm & Cadence
                  </h3>
                  <p className="text-xs text-slate-500 mb-4">
                    Predictable weekly schedule to build disciplined study habits:
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                    <div className="px-2.5 py-1 rounded bg-slate-900 text-white font-mono text-[11px] font-bold">
                      MON
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Sprint Goal & Task Assignment</h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        New weekly objectives and problem sets released with benchmark guidelines.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                    <div className="px-2.5 py-1 rounded bg-slate-900 text-white font-mono text-[11px] font-bold">
                      WED
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Mid-Week Checkpoint & Doubt Support</h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Active cohort chat check-in to clear roadblocks and ensure pace.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                    <div className="px-2.5 py-1 rounded bg-slate-900 text-white font-mono text-[11px] font-bold">
                      SAT
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Submission & Efficiency Review</h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Mentor reviews student submissions, logs efficiency scores, and suggests improvements.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                    <div className="px-2.5 py-1 rounded bg-slate-900 text-white font-mono text-[11px] font-bold">
                      SUN
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">1:1 Strategy & Planning Check-in</h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Optional 1:1 video review session for personalized guidance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 flex-wrap gap-3">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Verified Student Outcomes
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Authentic ratings and feedback from verified students enrolled in this cohort.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                    <span className="text-xs font-bold text-amber-900">
                      {mentor.rating_avg ? `${mentor.rating_avg.toFixed(1)} ★` : "5.0 ★"}
                    </span>
                    <span className="text-[11px] text-amber-700 font-medium">
                      ({reviewsData?.total ?? mentor.review_count ?? 0} reviews)
                    </span>
                  </div>
                </div>

                {/* Student Review Input / 20-Day Gate Status */}
                {isAuthenticated && isEnrolledHere && (
                  <div className="p-5 rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-50/60 to-white space-y-3.5">
                    {eligibility?.can_review ? (
                      <form onSubmit={handleSubmitReview} className="space-y-4">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <h4 className="text-xs font-bold text-slate-900">
                            {eligibility.my_review ? "Update Your Review" : "Rate Your Cohort Mentorship"}
                          </h4>
                          <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                            Verified 20+ Days Enrolled
                          </span>
                        </div>

                        {/* Interactive Star Rating */}
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs text-slate-500 mr-2 font-medium">Your Rating:</span>
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              type="button"
                              key={star}
                              onClick={() => setReviewRating(star)}
                              className="p-1 hover:scale-110 transition-transform focus:outline-none"
                              aria-label={`Rate ${star} stars`}
                            >
                              <Star
                                className={`w-5 h-5 ${
                                  star <= reviewRating
                                    ? "fill-amber-400 text-amber-500"
                                    : "text-slate-300 hover:text-slate-400"
                                }`}
                              />
                            </button>
                          ))}
                          <span className="text-xs font-bold text-amber-900 ml-2">
                            {reviewRating} of 5 Stars
                          </span>
                        </div>

                        {/* Feedback Textarea */}
                        <div>
                          <textarea
                            value={reviewComment}
                            onChange={(e) => setReviewComment(e.target.value)}
                            rows={3}
                            placeholder="Share your experience: How were the task reviews, doubt clearing speed, and 1:1 strategy calls? (min 5 characters)"
                            className="w-full text-xs rounded-xl border border-slate-200 p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-slate-800 placeholder-slate-400 resize-none"
                          />
                        </div>

                        {reviewError && (
                          <div className="text-xs font-medium text-rose-600 bg-rose-50 px-3 py-2 rounded-lg border border-rose-200">
                            {reviewError}
                          </div>
                        )}

                        {reviewSuccess && (
                          <div className="text-xs font-medium text-emerald-700 bg-emerald-50 px-3 py-2 rounded-lg border border-emerald-200">
                            {reviewSuccess}
                          </div>
                        )}

                        <div className="flex items-center justify-between">
                          <p className="text-[11px] text-slate-400">
                            You can edit your review anytime during your mentorship.
                          </p>
                          <Button
                            type="submit"
                            size="sm"
                            disabled={submitReviewMutation.isPending}
                            className="text-xs font-semibold px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg shadow-xs"
                          >
                            {submitReviewMutation.isPending
                              ? "Saving..."
                              : eligibility.my_review
                              ? "Update Review"
                              : "Submit Review"}
                          </Button>
                        </div>
                      </form>
                    ) : (
                      <div className="flex items-start gap-3.5 p-1">
                        <div className="w-8 h-8 rounded-xl bg-amber-100/80 text-amber-800 flex items-center justify-center flex-shrink-0 font-bold">
                          <Clock className="w-4 h-4 text-amber-600" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-xs font-bold text-slate-900">
                            Review Unlocks in {eligibility?.days_remaining ?? 20} Days
                          </h4>
                          <p className="text-xs text-slate-500 leading-relaxed">
                            To ensure authentic, in-depth evaluation of this mentor's guidance and tasks, reviews become available after spending at least 20 days in the cohort.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* List of Verified Reviews */}
                <div className="space-y-3">
                  {reviewsData?.items && reviewsData.items.length > 0 ? (
                    reviewsData.items.map((rev) => (
                      <div
                        key={rev.id}
                        className="p-4 rounded-xl bg-slate-50/70 border border-slate-200/70 space-y-2 hover:border-slate-300 transition-colors"
                      >
                        <div className="flex items-center justify-between text-xs flex-wrap gap-2">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center overflow-hidden">
                              {rev.student_avatar_url ? (
                                <img
                                  src={rev.student_avatar_url}
                                  alt={rev.student_name}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                rev.student_name.slice(0, 1).toUpperCase()
                              )}
                            </div>
                            <span className="font-bold text-slate-900">{rev.student_name}</span>
                            <span className="text-[10px] font-medium text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">
                              Verified Cohort Student
                            </span>
                          </div>

                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-0.5">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  className={`w-3.5 h-3.5 ${
                                    star <= rev.rating
                                      ? "fill-amber-400 text-amber-500"
                                      : "text-slate-200"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-[11px] text-slate-400">
                              {new Date(rev.updated_at).toLocaleDateString("en-IN", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </span>
                          </div>
                        </div>

                        <p className="text-xs text-slate-600 leading-relaxed pl-8">
                          "{rev.comment}"
                        </p>
                      </div>
                    ))
                  ) : (
                    <div className="p-8 text-center rounded-xl bg-slate-50/50 border border-dashed border-slate-200 space-y-2">
                      <Star className="w-6 h-6 text-slate-300 mx-auto" />
                      <p className="text-xs font-semibold text-slate-700">
                        No reviews yet for this mentor
                      </p>
                      <p className="text-[11px] text-slate-400 max-w-sm mx-auto">
                        Enrolled students can submit verified feedback once they complete 20 days in this cohort.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Sticky Cohort Subscription & Verification Card */}
        <div className="lg:col-span-5 xl:col-span-4">
          <div className="sticky top-24 bg-white rounded-2xl border border-slate-200/80 p-6 space-y-6 shadow-sm">
            {/* Pricing Section */}
            <div className="space-y-1 border-b border-slate-100 pb-5">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Cohort Subscription
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold font-display text-slate-900">
                  {Number(mentor.price_per_month) > 0
                    ? `₹${Number(mentor.price_per_month).toLocaleString("en-IN")}`
                    : "Free"}
                </span>
                <span className="text-xs text-slate-500 font-medium">/ month</span>
              </div>
              <p className="text-[11px] text-slate-500">
                Cancel anytime. Enrolls you directly in this mentor's private cohort.
              </p>
            </div>

            {/* Seat Limit Meter */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                <span>Cohort Capacity</span>
                <span
                  className={
                    mentor.available_seats <= 5
                      ? "text-amber-600 font-bold"
                      : "text-slate-600 font-medium"
                  }
                >
                  {mentor.available_seats > 0
                    ? `${mentor.available_seats} of ${mentor.seat_limit} seats available`
                    : "Cohort is currently full"}
                </span>
              </div>

              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-500 rounded-full ${
                    mentor.available_seats <= 3
                      ? "bg-amber-500"
                      : "bg-emerald-500"
                  }`}
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span>{enrolledStudents} enrolled</span>
                <span>Max {mentor.seat_limit} students</span>
              </div>
            </div>

            {/* Enrollment Indicator */}
            {isEnrolledHere ? (
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-emerald-900 block">
                    You Are Currently Enrolled
                  </span>
                  <p className="text-xs text-emerald-700 mt-0.5 leading-snug">
                    You have active access to this cohort's tasks, meetings, and discussions.
                  </p>
                </div>
              </div>
            ) : isEnrolledElsewhere ? (
              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-amber-900 block">
                    Enrolled in Another Cohort
                  </span>
                  <p className="text-xs text-amber-700 mt-0.5 leading-snug">
                    Students can participate in 1 cohort at a time to maintain focus.
                  </p>
                </div>
              </div>
            ) : null}

            {/* Action Buttons */}
            <div className="space-y-2.5">
              {user?.role === "ADMIN" ? (
                <div className="p-4 rounded-2xl bg-slate-900 text-white text-center space-y-2 shadow-sm border border-slate-800">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Admin Inspection Mode
                  </span>
                  <p className="text-xs text-slate-300 leading-snug">
                    You are viewing this mentor profile with Administrator privileges.
                  </p>
                  <Link href="/admin/mentors" className="block w-full pt-1">
                    <Button
                      size="sm"
                      variant="primary"
                      className="w-full text-xs font-bold bg-blue-600 hover:bg-blue-700 py-2.5 shadow-sm"
                    >
                      Manage in Admin Console →
                    </Button>
                  </Link>
                </div>
              ) : user?.id === mentor.user_id ? (
                <Link href="/mentor/profile" className="block w-full">
                  <Button
                    size="md"
                    variant="secondary"
                    className="w-full text-center py-3 text-xs font-semibold"
                  >
                    Edit Mentor Profile & Settings
                  </Button>
                </Link>
              ) : isEnrolledHere ? (
                <div className="space-y-2">
                  <Link href="/cohort" className="block w-full">
                    <Button
                      size="md"
                      variant="primary"
                      className="w-full text-center py-3 text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm"
                    >
                      Open Cohort Workspace →
                    </Button>
                  </Link>

                  {!showLeaveConfirm ? (
                    <button
                      onClick={() => setShowLeaveConfirm(true)}
                      className="w-full text-center text-xs text-slate-400 hover:text-red-600 transition-colors py-1"
                    >
                      Leave Cohort
                    </button>
                  ) : (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-xl space-y-2 text-left">
                      <p className="text-xs text-red-800 font-medium leading-snug">
                        Leaving this cohort releases your seat immediately. You will lose access to assignments.
                      </p>
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="secondary"
                          isLoading={leaveCohortMutation.isPending}
                          onClick={handleLeaveCohort}
                          className="flex-1 text-xs text-red-600 font-bold border-red-300 hover:bg-red-100"
                        >
                          Confirm Leave
                        </Button>
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() => setShowLeaveConfirm(false)}
                          className="flex-1 text-xs font-medium"
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              ) : isEnrolledElsewhere ? (
                <div className="space-y-2">
                  <Button
                    size="md"
                    variant="secondary"
                    disabled
                    className="w-full text-center py-3 text-xs font-semibold opacity-60 cursor-not-allowed"
                  >
                    Enrolled in Another Cohort
                  </Button>
                  <p className="text-[11px] text-slate-500 text-center leading-snug">
                    <Link href="/cohort" className="text-indigo-600 underline font-medium">
                      Go to your active cohort
                    </Link>{" "}
                    to leave before joining a new one.
                  </p>
                </div>
              ) : (
                <>
                  <Button
                    size="md"
                    variant="primary"
                    disabled={mentor.available_seats <= 0 || subscribeMutation.isPending}
                    isLoading={subscribeMutation.isPending}
                    onClick={handleSubscribe}
                    className="w-full text-center py-3 text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white shadow-sm"
                  >
                    {mentor.available_seats > 0
                      ? Number(mentor.price_per_month) > 0
                        ? `Enroll Now — ₹${Number(mentor.price_per_month).toLocaleString("en-IN")}/mo`
                        : "Enroll Free"
                      : "Cohort is Full"}
                  </Button>

                  <Button
                    size="md"
                    variant="secondary"
                    onClick={handleMessageMentor}
                    className="w-full text-center py-2.5 text-xs font-medium text-slate-700 border-slate-200 hover:border-slate-300"
                  >
                    <MessageSquare className="w-3.5 h-3.5 mr-1.5 text-slate-500" />
                    Ask a Question
                  </Button>
                </>
              )}
            </div>

            {/* 30-Day Activity Transparency Section */}
            <div className="pt-4 border-t border-slate-100 space-y-2">
              <div className="flex items-center justify-between text-[11px] font-semibold text-slate-600">
                <span>Recent Platform Activity</span>
                <span className="text-slate-400 font-normal">Past 30 Days</span>
              </div>
              <ActivityHeatmap
                compact
                heatmap={mentor.activity_heatmap_30d}
                activityStatus={mentor.activity_status}
              />
            </div>

            {/* Trust Badges */}
            <div className="pt-4 border-t border-slate-100 space-y-2 text-[11px] text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>Verified academic credentials & ID</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>1-on-1 mentorship sessions included</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>Weekly structured task evaluations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
