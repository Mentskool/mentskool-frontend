"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import { apiClient } from "@/lib/api-client";
import { User } from "@/lib/types";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import {
  User as UserIcon,
  GraduationCap,
  Calendar,
  Target,
  Image as ImageIcon,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from "lucide-react";

const TARGET_EXAMS = [
  "JEE Advanced",
  "JEE Main",
  "NEET-UG",
  "Class 11 & 12 Foundation",
  "GATE / PSU",
];

const TARGET_YEARS = [2025, 2026, 2027, 2028];

const PREP_STAGES = [
  "Dropper / Repeater",
  "Class 12 (Board + Entrance)",
  "Class 11 (Foundation)",
  "Early Starter (Class 9-10)",
];

export default function StudentProfilePage() {
  const router = useRouter();
  const { user, setUser, isAuthenticated, isLoading: authLoading } = useAuthStore();

  const [fullName, setFullName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [targetExam, setTargetExam] = useState("JEE Advanced");
  const [targetYear, setTargetYear] = useState<number>(2025);
  const [prepStage, setPrepStage] = useState("Dropper / Repeater");
  const [bio, setBio] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  useEffect(() => {
    if (user) {
      setFullName(user.full_name || "");
      setAvatarUrl(user.avatar_url || "");
      setTargetExam(user.target_exam || "JEE Advanced");
      setTargetYear(user.target_year || 2025);
      setPrepStage(user.prep_stage || "Dropper / Repeater");
      setBio(user.bio || "");
    }
  }, [user]);

  if (authLoading) {
    return (
      <div className="max-w-3xl mx-auto py-12 text-center text-ink-muted">
        Loading profile...
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return (
      <div className="max-w-md mx-auto py-16 text-center space-y-4">
        <h2 className="text-xl font-bold font-display text-ink">
          Sign In Required
        </h2>
        <p className="text-sm text-ink-muted">
          Please sign in to view and edit your student profile.
        </p>
        <Button variant="primary" onClick={() => router.push("/login")}>
          Sign In
        </Button>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setFeedback(null);

    const payload = {
      full_name: fullName.trim() || user.full_name,
      avatar_url: avatarUrl.trim() || null,
      target_exam: targetExam,
      target_year: Number(targetYear),
      prep_stage: prepStage,
      bio: bio.trim() || null,
    };

    try {
      const updatedUser = await apiClient.patch<User>("/auth/me", payload);
      setUser(updatedUser);
      setFeedback({
        type: "success",
        message: "Profile updated successfully! Your cohort mentor can now see your updated goals.",
      });
    } catch (err: any) {
      setFeedback({
        type: "error",
        message: err.detail || "Failed to update profile. Please try again.",
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 pb-12">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-brand/10 text-brand text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          Personalized Preparation
        </div>
        <h1 className="text-3xl font-extrabold font-display text-ink tracking-tight">
          Student Profile & Goals
        </h1>
        <p className="text-sm text-ink-muted mt-1">
          Keep your target exam, cohort batch, and preparation milestones up to date for your mentor.
        </p>
      </div>

      {feedback && (
        <div
          className={`p-4 rounded-card text-sm border flex items-center gap-3 transition-all ${
            feedback.type === "success"
              ? "bg-moss/10 text-moss border-moss/30"
              : "bg-amber/10 text-amber border-amber/30"
          }`}
        >
          {feedback.type === "success" ? (
            <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-moss" />
          ) : (
            <AlertCircle className="w-5 h-5 flex-shrink-0 text-amber" />
          )}
          <span className="font-medium">{feedback.message}</span>
        </div>
      )}

      <Card className="bg-white border-mist p-6 sm:p-8 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Avatar Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-4 rounded-card bg-[#FAFAF9] border border-mist">
            <div className="relative group">
              {avatarUrl ? (
                <img
                  src={avatarUrl}
                  alt={fullName || "Student Avatar"}
                  className="w-20 h-20 rounded-full object-cover border-2 border-brand shadow-sm bg-white"
                  onError={() => {
                    // Fallback visually if image link fails
                  }}
                />
              ) : (
                <div className="w-20 h-20 rounded-full bg-brand/10 border-2 border-brand/20 flex items-center justify-center font-display font-bold text-2xl text-brand">
                  {fullName ? fullName.charAt(0).toUpperCase() : <UserIcon className="w-8 h-8" />}
                </div>
              )}
            </div>

            <div className="flex-1 w-full space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-ink flex items-center gap-1.5">
                <ImageIcon className="w-3.5 h-3.5 text-brand" />
                Profile Photo URL
              </label>
              <Input
                type="url"
                value={avatarUrl}
                onChange={(e) => setAvatarUrl(e.target.value)}
                placeholder="https://images.unsplash.com/... or direct image link"
                helperText="Paste a direct image URL (PNG, JPG, WebP) to display your avatar photo."
              />
            </div>
          </div>

          {/* Full Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Rohan Sharma"
              required
            />
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                Email Address
              </label>
              <input
                type="email"
                value={user.email}
                disabled
                className="w-full px-3.5 py-2.5 rounded-control text-sm bg-paper-subtle border border-mist text-ink-muted cursor-not-allowed"
              />
              <p className="text-[11px] text-ink-faint">Account email cannot be changed.</p>
            </div>
          </div>

          {/* Target Exam Selection */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-ink-muted flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5 text-brand" />
              Target Exam
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {TARGET_EXAMS.map((exam) => {
                const isSelected = targetExam === exam;
                return (
                  <button
                    type="button"
                    key={exam}
                    onClick={() => setTargetExam(exam)}
                    className={`py-2 px-3 rounded-control text-xs font-medium border text-center transition-all ${
                      isSelected
                        ? "bg-brand text-white border-brand font-semibold shadow-sm"
                        : "bg-white text-ink-muted border-mist hover:text-ink hover:border-brand/40"
                    }`}
                  >
                    {exam}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Target Year and Preparation Stage */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Target Year */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-ink-muted flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-brand" />
                Target Exam Year
              </label>
              <div className="grid grid-cols-4 gap-2">
                {TARGET_YEARS.map((yr) => {
                  const isSelected = targetYear === yr;
                  return (
                    <button
                      type="button"
                      key={yr}
                      onClick={() => setTargetYear(yr)}
                      className={`py-2 px-2 rounded-control text-xs font-bold border text-center transition-all ${
                        isSelected
                          ? "bg-brand text-white border-brand"
                          : "bg-white text-ink border-mist hover:border-brand/40"
                      }`}
                    >
                      {yr}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Preparation Stage */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-ink-muted flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-brand" />
                Preparation Stage
              </label>
              <select
                value={prepStage}
                onChange={(e) => setPrepStage(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-control text-xs sm:text-sm bg-white border border-mist text-ink focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand font-medium"
              >
                {PREP_STAGES.map((stg) => (
                  <option key={stg} value={stg}>
                    {stg}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Personal Bio & Academic Goals */}
          <Textarea
            label="Personal Bio & Current Preparation Focus"
            rows={4}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Tell your mentor about your strengths, chapters you struggle with, test series you solve, or target score goals..."
            helperText="Your cohort mentor reads this to customize problem sets and 1:1 strategy calls."
          />

          {/* Submit Button */}
          <div className="pt-6 border-t border-mist flex items-center justify-end gap-3">
            <Button
              type="submit"
              variant="primary"
              isLoading={isSaving}
            >
              Save Profile Changes
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
