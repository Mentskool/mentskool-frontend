"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import { useMentor, useUpdateMentorProfile, useCreateMentorProfile } from "@/hooks/useMentors";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { CATEGORY_LABELS, MentorCategory } from "@/lib/types";
import {
  Image as ImageIcon,
  User as UserIcon,
  GraduationCap,
  Trophy,
} from "lucide-react";

const getYouTubeEmbedUrl = (url?: string | null): string | null => {
  if (!url) return null;
  const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regExp);
  return match ? `https://www.youtube-nocookie.com/embed/${match[1]}` : null;
};

export default function MentorProfilePage() {
  const router = useRouter();
  const { user, setUser, isAuthenticated, isLoading: authLoading } = useAuthStore();
  const { data: profile, isLoading: profileLoading, refetch } = useMentor(user?.id);
  const updateMutation = useUpdateMentorProfile();
  const createMutation = useCreateMentorProfile();

  const [category, setCategory] = useState<MentorCategory>("JEE_PREP");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [college, setCollege] = useState("");
  const [examRank, setExamRank] = useState("");
  const [bio, setBio] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [seatLimit, setSeatLimit] = useState(10);
  const [pricePerMonth, setPricePerMonth] = useState(0);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  useEffect(() => {
    if (user && user.avatar_url && !avatarUrl) {
      setAvatarUrl(user.avatar_url);
    }
    if (profile) {
      setCategory(profile.category || "JEE_PREP");
      if (profile.avatar_url) setAvatarUrl(profile.avatar_url);
      setCollege(profile.college || "");
      setExamRank(profile.exam_rank || "");
      setBio(profile.bio || "");
      setYoutubeUrl(profile.intro_youtube_url || "");
      setSeatLimit(profile.seat_limit || 10);
      setPricePerMonth(Number(profile.price_per_month) || 0);
    }
  }, [profile, user]);

  if (authLoading || (!user && isAuthenticated)) {
    return (
      <div className="max-w-3xl mx-auto py-12 text-center text-ink-muted">
        Loading...
      </div>
    );
  }

  if (!isAuthenticated || user?.role !== "MENTOR") {
    return (
      <div className="max-w-md mx-auto py-16 text-center space-y-4">
        <h2 className="text-xl font-bold font-display text-ink">
          Mentor Access Required
        </h2>
        <p className="text-sm text-ink-muted">
          Only mentors can access and configure mentor profile settings.
        </p>
        <Button variant="primary" onClick={() => router.push("/login")}>
          Sign In as Mentor
        </Button>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback(null);

    const payload = {
      category,
      avatar_url: avatarUrl.trim() || null,
      college: college.trim() || null,
      exam_rank: examRank.trim() || null,
      bio: bio.trim(),
      intro_youtube_url: youtubeUrl.trim() || null,
      seat_limit: Number(seatLimit),
      price_per_month: Number(pricePerMonth),
    };

    try {
      if (!profile) {
        await createMutation.mutateAsync(payload);
      } else {
        await updateMutation.mutateAsync(payload);
      }
      if (user) {
        setUser({ ...user, avatar_url: avatarUrl.trim() || null });
      }
      setFeedback({
        type: "success",
        message: "Profile settings saved successfully!",
      });
      refetch();
    } catch (err: any) {
      if (err?.status === 404) {
        try {
          await createMutation.mutateAsync(payload);
          if (user) {
            setUser({ ...user, avatar_url: avatarUrl.trim() || null });
          }
          setFeedback({
            type: "success",
            message: "Profile settings saved successfully!",
          });
          refetch();
          return;
        } catch (createErr: any) {
          setFeedback({
            type: "error",
            message: createErr.detail || "Failed to save profile.",
          });
          return;
        }
      }
      setFeedback({
        type: "error",
        message: err.detail || "Failed to update profile.",
      });
    }
  };

  const liveEmbedUrl = getYouTubeEmbedUrl(youtubeUrl);

  if (profileLoading) {
    return (
      <div className="max-w-3xl mx-auto py-12 text-center text-ink-muted">
        Loading mentor profile details...
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold font-display text-ink tracking-tight">
          Cohort & Profile Settings
        </h1>
        <p className="text-sm text-ink-muted mt-1">
          Customize your academic specialization, introductory video, pricing, and student capacity.
        </p>
      </div>

      {feedback && (
        <div
          className={`p-4 rounded-card text-sm border flex items-center justify-between ${
            feedback.type === "success"
              ? "bg-moss/10 text-moss border-moss/30"
              : "bg-amber/10 text-amber border-amber/30"
          }`}
        >
          <span>{feedback.message}</span>
        </div>
      )}

      <Card className="bg-white border-mist p-6 sm:p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Avatar Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-4 rounded-card bg-[#FAFAF9] border border-mist">
            <div className="relative group">
              {avatarUrl ? (
                <img
                  src={avatarUrl}
                  alt={user?.full_name || "Mentor Avatar"}
                  className="w-20 h-20 rounded-full object-cover border-2 border-brand shadow-sm bg-white"
                />
              ) : (
                <div className="w-20 h-20 rounded-full bg-brand/10 border-2 border-brand/20 flex items-center justify-center font-display font-bold text-2xl text-brand">
                  {user?.full_name ? user.full_name.charAt(0).toUpperCase() : <UserIcon className="w-8 h-8" />}
                </div>
              )}
            </div>

            <div className="flex-1 w-full space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-ink flex items-center gap-1.5">
                <ImageIcon className="w-3.5 h-3.5 text-brand" />
                Mentor Profile Photo URL
              </label>
              <Input
                type="url"
                value={avatarUrl}
                onChange={(e) => setAvatarUrl(e.target.value)}
                placeholder="https://images.unsplash.com/... or direct image link"
                helperText="Students see your photo on mentor exploration cards and cohort dashboards."
              />
            </div>
          </div>

          {/* College Name & Exam Rank */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <Input
                label="Dream College / University"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                placeholder="e.g. IIT Bombay, AIIMS New Delhi"
                helperText="Dropdown selection coming soon. Type your institution."
              />
            </div>
            <div className="space-y-1">
              <Input
                label="Exam Rank / Percentile"
                value={examRank}
                onChange={(e) => setExamRank(e.target.value)}
                placeholder="e.g. AIR 42 (JEE Adv), AIR 115 (NEET)"
                helperText="Shown as a verified credential badge on your card."
              />
            </div>
          </div>

          {/* Category Selector */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
              Specialization Domain
            </label>
            <div className="grid grid-cols-3 gap-3">
              {(Object.keys(CATEGORY_LABELS) as MentorCategory[]).map((cat) => {
                const isSelected = category === cat;
                return (
                  <button
                    type="button"
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`py-2.5 px-3 rounded-control text-xs font-medium border text-center transition-all ${
                      isSelected
                        ? "bg-brand text-white border-brand font-semibold"
                        : "bg-white text-ink-muted border-mist hover:text-ink"
                    }`}
                  >
                    {CATEGORY_LABELS[cat]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bio Textarea */}
          <Textarea
            label="Mentor Biography & Strategy"
            rows={5}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Introduce your academic background, exam AIR, problem-solving methods, and weekly mentorship cadence..."
            required
          />

          {/* YouTube Intro URL Input */}
          <div className="space-y-2">
            <Input
              label="Intro YouTube Video URL (watch, shorts, or youtu.be)"
              type="url"
              value={youtubeUrl}
              onChange={(e) => setYoutubeUrl(e.target.value)}
              placeholder="https://www.youtube.com/watch?v=..."
              helperText="Students watch this video to understand your teaching strategy before subscribing."
            />

            {/* Live Video Embed Preview */}
            {youtubeUrl.trim() && (
              <div className="mt-4 pt-4 border-t border-mist space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-moss flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-moss animate-pulse" />
                  Live Video Preview
                </span>
                {liveEmbedUrl ? (
                  <div className="relative w-full aspect-video rounded-card overflow-hidden border border-mist bg-black">
                    <iframe
                      src={liveEmbedUrl}
                      title="Live Preview"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full border-0"
                    />
                  </div>
                ) : (
                  <p className="text-xs text-amber font-medium">
                    ⚠️ Invalid YouTube URL. Use a format like https://www.youtube.com/watch?v=... or https://youtu.be/...
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Capacity and Pricing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <Input
              label="Concurrent Seat Limit"
              type="number"
              min={1}
              max={1000}
              value={seatLimit}
              onChange={(e) => setSeatLimit(Number(e.target.value))}
              helperText="Atomic Redis seat locking prevents exceeding this limit."
              required
            />
            <Input
              label="Monthly Fee (INR ₹)"
              type="number"
              min={0}
              step={1}
              value={pricePerMonth}
              onChange={(e) => setPricePerMonth(Number(e.target.value))}
              helperText="Monthly price shown on your public profile."
              required
            />
          </div>

          {/* Action Buttons */}
          <div className="pt-6 border-t border-mist flex items-center justify-end gap-3">
            <Button
              type="submit"
              variant="primary"
              isLoading={updateMutation.isPending}
            >
              Save Profile Changes
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
