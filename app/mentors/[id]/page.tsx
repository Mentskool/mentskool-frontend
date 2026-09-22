"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useMentor, useSubscribeMentor } from "@/hooks/useMentors";
import { useSubscriptions } from "@/hooks/useSubscriptions";
import { useAuthStore } from "@/store/authStore";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Skeleton } from "@/components/ui/Skeleton";
import { ApiError, CATEGORY_LABELS } from "@/lib/types";

const getYouTubeEmbedUrl = (url?: string | null): string | null => {
  if (!url) return null;
  const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regExp);
  return match ? `https://www.youtube-nocookie.com/embed/${match[1]}` : null;
};

type SubTab = "about" | "experience" | "reviews" | "availability";

export default function MentorDetailPage() {
  const params = useParams();
  const router = useRouter();
  const mentorId = params.id as string;

  const { data: mentor, isLoading, isError, refetch } = useMentor(mentorId);
  const { user, isAuthenticated } = useAuthStore();
  const { data: subsData, refetch: refetchSubs } = useSubscriptions();
  const subscribeMutation = useSubscribeMentor();

  const activeSub = subsData?.items?.find((s) => s.status === "ACTIVE");
  const isEnrolledHere = Boolean(
    isAuthenticated && mentor && activeSub && activeSub.mentor_id === mentor.user_id
  );
  const isEnrolledElsewhere = Boolean(
    isAuthenticated && mentor && activeSub && activeSub.mentor_id !== mentor.user_id
  );

  const [activeTab, setActiveTab] = useState<SubTab>("about");
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

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
      await subscribeMutation.mutateAsync(mentorId);
      setFeedback({
        type: "success",
        message:
          "Successfully subscribed to this cohort! You can now receive weekly accountability assignments and access cohort materials.",
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
            message:
              "You are already enrolled in an active cohort. Students cannot join multiple cohorts simultaneously.",
          });
        } else if (apiErr.code === "SEAT_FULL" || apiErr.detail?.toLowerCase().includes("full")) {
          setFeedback({
            type: "error",
            message:
              "This cohort has reached its capacity limit. All seats are currently filled.",
          });
        } else {
          setFeedback({
            type: "error",
            message:
              "You already hold an active subscription with this mentor.",
          });
        }
      } else {
        setFeedback({
          type: "error",
          message: apiErr.detail || "Unable to complete subscription.",
        });
      }
    }
  };

  const handleMessageMentor = () => {
    if (!isAuthenticated) {
      router.push(`/login?redirect=/mentors/${mentorId}`);
      return;
    }
    router.push(`/messages?user=${mentor?.user_id}`);
  };

  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto space-y-6">
        <Skeleton className="h-4 w-28" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-4">
            <Skeleton className="h-72 w-full rounded-card" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-48 w-full" />
          </div>
          <div className="lg:col-span-4">
            <Skeleton className="h-96 w-full rounded-card" />
          </div>
        </div>
      </div>
    );
  }

  if (isError || !mentor) {
    return (
      <div className="py-16 text-center max-w-lg mx-auto">
        <h2 className="text-xl font-bold font-display text-ink mb-2">
          Mentor profile not found
        </h2>
        <p className="text-sm text-ink-muted mb-6">
          The mentor you are looking for does not exist or is inactive.
        </p>
        <Link href="/mentors">
          <Button variant="secondary">Back to Mentors</Button>
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
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Top Breadcrumb & Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-mist">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-ink-faint uppercase tracking-wider mb-1">
            <Link
              href="/mentors"
              className="hover:text-ink transition-colors flex items-center gap-1"
            >
              <span>Mentors</span>
              <span>/</span>
            </Link>
            <span className="text-moss flex items-center gap-1">
              <span>▷</span>
              <span>About This Mentor</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-ink tracking-tight">
              {mentor.full_name}
            </h1>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-moss/10 text-moss border border-moss/20">
              {CATEGORY_LABELS[mentor.category] || mentor.category}
            </span>
          </div>
        </div>

        <div className="text-right sm:self-center">
          <span className="text-xs text-ink-faint">Direct inquiries</span>
          <p className="text-sm font-medium text-ink-muted">{mentor.email}</p>
        </div>
      </div>

      {/* Feedback Alerts */}
      {feedback && (
        <div
          className={`p-4 rounded-card text-sm border flex items-center justify-between ${
            feedback.type === "success"
              ? "bg-moss/10 text-moss border-moss/30"
              : "bg-amber/10 text-amber border-amber/30"
          }`}
        >
          <span>{feedback.message}</span>
          {feedback.type === "success" && (
            <Link href="/dashboard/tasks">
              <Button size="sm" variant="moss">
                Go to Tasks
              </Button>
            </Link>
          )}
        </div>
      )}

      {/* 2-Column Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN: Video Embed & Sub-Navigation Tabs */}
        <div className="lg:col-span-7 xl:col-span-8 space-y-6">
          {/* Intro Video Player */}
          <div className="w-full aspect-video rounded-card overflow-hidden border border-mist bg-black shadow-sm relative flex items-center justify-center">
            {embedUrl ? (
              <iframe
                src={embedUrl}
                title={`${mentor.full_name} Intro Video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-center p-8 bg-[#14181F] text-white w-full h-full">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-3">
                  <svg
                    className="w-6 h-6 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <h4 className="font-display font-bold text-lg">
                  Introductory Video
                </h4>
                <p className="text-xs text-neutral-400 max-w-sm mt-1">
                  Mentor introduction and syllabus orientation session.
                </p>
              </div>
            )}
          </div>

          {/* Sub-Navigation Tabs */}
          <div className="flex items-center gap-2 border-b border-mist overflow-x-auto pb-1">
            <button
              onClick={() => setActiveTab("about")}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-control transition-colors ${
                activeTab === "about"
                  ? "bg-moss/10 text-moss border border-moss/30"
                  : "text-ink-muted hover:text-ink hover:bg-white"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-moss" />
              About
            </button>

            <button
              onClick={() => setActiveTab("experience")}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-control transition-colors ${
                activeTab === "experience"
                  ? "bg-moss/10 text-moss border border-moss/30"
                  : "text-ink-muted hover:text-ink hover:bg-white"
              }`}
            >
              <span>💼</span>
              Experience
            </button>

            <button
              onClick={() => setActiveTab("reviews")}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-control transition-colors ${
                activeTab === "reviews"
                  ? "bg-moss/10 text-moss border border-moss/30"
                  : "text-ink-muted hover:text-ink hover:bg-white"
              }`}
            >
              <span>⭐</span>
              Reviews
            </button>

            <button
              onClick={() => setActiveTab("availability")}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-control transition-colors ${
                activeTab === "availability"
                  ? "bg-moss/10 text-moss border border-moss/30"
                  : "text-ink-muted hover:text-ink hover:bg-white"
              }`}
            >
              <span>📅</span>
              Availability
            </button>
          </div>

          {/* Tab Content Panel */}
          <Card className="p-6 bg-white space-y-6">
            {activeTab === "about" && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-ink-faint mb-2">
                    Cohort Biography & Strategy
                  </h3>
                  <p className="text-sm text-ink leading-relaxed whitespace-pre-line">
                    {mentor.bio || "No biography provided yet."}
                  </p>
                </div>

                <div className="pt-4 border-t border-mist">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-ink-faint mb-3">
                    What You Get In This Cohort
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3 rounded-control bg-[#FAFAF9] border border-mist">
                      <div className="font-semibold text-xs text-ink">
                        🎯 Weekly Goal Assignments
                      </div>
                      <p className="text-[11px] text-ink-muted mt-0.5">
                        Clear weekly deliverables with automated deadline monitoring.
                      </p>
                    </div>
                    <div className="p-3 rounded-control bg-[#FAFAF9] border border-mist">
                      <div className="font-semibold text-xs text-ink">
                        📊 Real-Time Efficiency Scores
                      </div>
                      <p className="text-[11px] text-ink-muted mt-0.5">
                        Single-click verification calculating on-time progress metrics.
                      </p>
                    </div>
                    <div className="p-3 rounded-control bg-[#FAFAF9] border border-mist">
                      <div className="font-semibold text-xs text-ink">
                        💬 Private Cohort Discussions
                      </div>
                      <p className="text-[11px] text-ink-muted mt-0.5">
                        Real-time group chat, announcements, and study resource sharing.
                      </p>
                    </div>
                    <div className="p-3 rounded-control bg-[#FAFAF9] border border-mist">
                      <div className="font-semibold text-xs text-ink">
                        ⏱️ Scheduled 1:1 Check-ins
                      </div>
                      <p className="text-[11px] text-ink-muted mt-0.5">
                        Calendar bookable sessions for strategy correction and doubt clearing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "experience" && (
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-ink-faint">
                  Industry & Exam Track Record
                </h3>
                <div className="space-y-3">
                  <div className="border-l-2 border-moss pl-4 py-1">
                    <h4 className="text-sm font-bold text-ink">
                      Senior Mentorship Specialist — {CATEGORY_LABELS[mentor.category]}
                    </h4>
                    <p className="text-xs text-ink-muted mt-1">
                      Guided over 50+ students with structured accountability roadmaps,
                      ensuring disciplined preparation and consistent revision cycles.
                    </p>
                  </div>
                  <div className="border-l-2 border-brand pl-4 py-1">
                    <h4 className="text-sm font-bold text-ink">
                      Curriculum & Task Architecture
                    </h4>
                    <p className="text-xs text-ink-muted mt-1">
                      Designed problem-solving frameworks and scheduled benchmarks that keep
                      students accountable without overwhelming them.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-mist">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-ink-faint">
                      Student Feedback
                    </h3>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className="text-lg font-extrabold text-ink font-display">
                        5.0
                      </span>
                      <div className="text-amber text-xs">★★★★★</div>
                      <span className="text-xs text-ink-faint">(Verified Students)</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="p-3 rounded-control bg-[#FAFAF9] border border-mist">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-bold text-ink">Ananya S.</span>
                      <span className="text-ink-faint text-[10px]">2 weeks ago</span>
                    </div>
                    <p className="text-xs text-ink-muted leading-relaxed">
                      "The weekly task breakdown and quick reviews completely transformed
                      my preparation. I stopped procrastinating because the efficiency
                      score held me accountable every single week."
                    </p>
                  </div>

                  <div className="p-3 rounded-control bg-[#FAFAF9] border border-mist">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-bold text-ink">Rohan M.</span>
                      <span className="text-ink-faint text-[10px]">1 month ago</span>
                    </div>
                    <p className="text-xs text-ink-muted leading-relaxed">
                      "Clear, targeted assignments and rapid doubt clearing through direct
                      chat. Highly recommended for any serious aspirant."
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "availability" && (
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-ink-faint">
                  Weekly Schedule & Cadence
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-control bg-[#FAFAF9] border border-mist">
                    <span className="text-xs font-bold text-ink uppercase">
                      📅 Weekly Task Assignment
                    </span>
                    <p className="text-xs text-ink-muted mt-1">
                      New tasks are assigned every Monday morning with clear deliverables
                      and scheduled submission targets.
                    </p>
                  </div>
                  <div className="p-4 rounded-control bg-[#FAFAF9] border border-mist">
                    <span className="text-xs font-bold text-ink uppercase">
                      ⏱️ Review & Response Window
                    </span>
                    <p className="text-xs text-ink-muted mt-1">
                      Submissions are reviewed within 24 hours. Cohort chat inquiries are
                      answered on a daily basis.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* RIGHT COLUMN: Sticky Availability & Subscription Card */}
        <div className="lg:col-span-5 xl:col-span-4">
          <div className="sticky top-24 bg-white rounded-card border border-mist p-6 space-y-6 shadow-sm">
            {/* Availability Header */}
            <div className="text-center space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-widest text-ink-faint">
                Availability
              </span>
              <h2 className="text-3xl font-extrabold font-display text-ink tracking-tight">
                {mentor.available_seats > 0
                  ? `${mentor.available_seats}/${mentor.seat_limit} SEATS LEFT`
                  : "COHORT FULL"}
              </h2>
            </div>

            {/* Progress Bar & Seat Counts */}
            <div className="space-y-2">
              <div className="w-full h-2.5 bg-[#E7E9ED] rounded-full overflow-hidden">
                <div
                  className="h-full bg-moss transition-all duration-500 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-[11px] font-bold text-ink-muted uppercase tracking-wider">
                <span>{enrolledStudents} Students</span>
                <span>{mentor.available_seats} Remaining</span>
              </div>
            </div>

            {/* Enrollment Status Indicator */}
            {isEnrolledHere ? (
              <div className="p-3.5 rounded-control bg-moss/10 border border-moss/30 flex items-start gap-3">
                <div className="w-7 h-7 rounded-[5px] bg-moss/20 text-moss flex items-center justify-center font-bold text-sm flex-shrink-0">
                  ✓
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-moss block">
                    You Are Subscribed
                  </span>
                  <p className="text-xs text-ink-muted mt-0.5 leading-snug">
                    You are an active student member in this mentor's cohort.
                  </p>
                </div>
              </div>
            ) : isEnrolledElsewhere ? (
              <div className="p-3.5 rounded-control bg-amber/10 border border-amber/30 flex items-start gap-3">
                <div className="w-7 h-7 rounded-[5px] bg-amber/20 text-amber flex items-center justify-center font-bold text-sm flex-shrink-0">
                  ℹ
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber block">
                    Active in Another Cohort
                  </span>
                  <p className="text-xs text-ink-muted mt-0.5 leading-snug">
                    Students can only be in 1 active cohort at a time.
                  </p>
                </div>
              </div>
            ) : (
              /* High Momentum Callout Box */
              <div className="p-3.5 rounded-control bg-[#FAFAF9] border border-mist flex items-start gap-3">
                <div className="w-7 h-7 rounded-[5px] bg-amber/15 text-amber flex items-center justify-center font-bold text-sm flex-shrink-0">
                  ↗
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber block">
                    High Momentum
                  </span>
                  <p className="text-xs text-ink-muted mt-0.5 leading-snug">
                    Elevated interest detected in your cohort region.
                  </p>
                </div>
              </div>
            )}

            {/* Primary Action Button */}
            <div className="space-y-3">
              {user?.id === mentor.user_id ? (
                <Link href="/mentor/profile" className="block w-full">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="w-full text-center py-3.5 text-xs font-bold uppercase tracking-wider"
                  >
                    Edit Your Profile
                  </Button>
                </Link>
              ) : isEnrolledHere ? (
                <Link href="/cohort" className="block w-full">
                  <Button
                    size="lg"
                    variant="primary"
                    className="w-full text-center py-3.5 text-sm font-bold uppercase tracking-wider bg-moss hover:bg-moss/90 text-white shadow-none"
                  >
                    ✓ Subscribed — View Cohort
                  </Button>
                </Link>
              ) : isEnrolledElsewhere ? (
                <div className="space-y-1.5">
                  <Button
                    size="lg"
                    variant="secondary"
                    disabled
                    className="w-full text-center py-3.5 text-xs font-bold uppercase tracking-wider opacity-60 cursor-not-allowed"
                  >
                    Enrolled in Another Cohort
                  </Button>
                  <p className="text-[11px] text-amber text-center font-medium">
                    You can only be in 1 cohort at a time.
                  </p>
                </div>
              ) : (
                <Button
                  size="lg"
                  variant="primary"
                  disabled={mentor.available_seats <= 0 || subscribeMutation.isPending}
                  isLoading={subscribeMutation.isPending}
                  onClick={handleSubscribe}
                  className="w-full text-center py-3.5 text-sm font-bold uppercase tracking-wider"
                >
                  {mentor.available_seats > 0
                    ? Number(mentor.price_per_month) > 0
                      ? `Subscribe - ₹${Number(mentor.price_per_month).toLocaleString("en-IN")}/mo`
                      : "Subscribe - Free"
                    : "Cohort Full"}
                </Button>
              )}

              {/* Secondary Action Button: Message Mentor */}
              {user?.id !== mentor.user_id && (
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={handleMessageMentor}
                  className="w-full text-center py-3 text-xs font-bold uppercase tracking-wider"
                >
                  Message Mentor
                </Button>
              )}
            </div>

            {/* Value Props Checklist */}
            <div className="pt-4 border-t border-mist space-y-2.5 text-[11px] font-bold text-ink-muted uppercase tracking-wider">
              <div className="flex items-center gap-2.5">
                <span className="text-moss text-sm">📹</span>
                <span>1-On-1 Mentorship Sessions</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-moss text-sm">💬</span>
                <span>Direct Messaging Access</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-moss text-sm">🏆</span>
                <span>Student Success Results</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
