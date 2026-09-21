"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import { useMentor, useUpdateMentorProfile } from "@/hooks/useMentors";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { CATEGORY_LABELS, MentorCategory } from "@/lib/types";

const getYouTubeEmbedUrl = (url?: string | null): string | null => {
  if (!url) return null;
  const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regExp);
  return match ? `https://www.youtube-nocookie.com/embed/${match[1]}` : null;
};

export default function MentorProfilePage() {
  const router = useRouter();
  const { user, isAuthenticated, isLoading: authLoading } = useAuthStore();
  const { data: profile, isLoading: profileLoading } = useMentor(user?.id);
  const updateMutation = useUpdateMentorProfile();

  const [category, setCategory] = useState<MentorCategory>("JEE_PREP");
  const [bio, setBio] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [seatLimit, setSeatLimit] = useState(10);
  const [pricePerMonth, setPricePerMonth] = useState(0);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  useEffect(() => {
    if (profile) {
      setCategory(profile.category || "JEE_PREP");
      setBio(profile.bio || "");
      setYoutubeUrl(profile.intro_youtube_url || "");
      setSeatLimit(profile.seat_limit || 10);
      setPricePerMonth(Number(profile.price_per_month) || 0);
    }
  }, [profile]);

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

    try {
      await updateMutation.mutateAsync({
        category,
        bio,
        intro_youtube_url: youtubeUrl.trim() || undefined,
        seat_limit: Number(seatLimit),
        price_per_month: Number(pricePerMonth),
      });
      setFeedback({
        type: "success",
        message: "Profile settings updated successfully!",
      });
    } catch (err: any) {
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
