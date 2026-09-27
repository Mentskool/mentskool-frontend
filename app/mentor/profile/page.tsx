"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuthStore } from "@/store/authStore";
import {
  useMyMentorProfile,
  useUpdateMentorProfile,
  useUploadMentorProof,
} from "@/hooks/useMentors";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { AvatarUpload } from "@/components/AvatarUpload";
import { ActivityHeatmap } from "@/components/ActivityHeatmap";
import { CATEGORY_LABELS, MentorCategory } from "@/lib/types";
import api from "@/lib/api";
import {
  ShieldCheck,
  Clock,
  AlertTriangle,
  AlertCircle,
  Upload,
  FileText,
  CheckCircle2,
  ExternalLink,
  Phone,
  CreditCard,
  Building,
  Sparkles,
  ArrowRight,
  Lock,
  User,
  Settings,
  Calendar,
  Video,
  Check,
  Layers,
  Save,
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
  const { data: profile, isLoading: profileLoading, refetch } = useMyMentorProfile();

  const updateMutation = useUpdateMentorProfile();
  const uploadProofMutation = useUploadMentorProof();

  // Editable Profile State
  const [avatarUrl, setAvatarUrl] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bio, setBio] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");

  // Cohort Parameters
  const [seatLimit, setSeatLimit] = useState(10);
  const [pricePerMonth, setPricePerMonth] = useState(1500);

  // Payout Details
  const [payoutUpiId, setPayoutUpiId] = useState("");
  const [payoutAccountNumber, setPayoutAccountNumber] = useState("");
  const [payoutIfsc, setPayoutIfsc] = useState("");
  const [payoutAccountName, setPayoutAccountName] = useState("");
  const [payoutMethod, setPayoutMethod] = useState<"UPI" | "BANK">("UPI");

  // Re-upload proofs (only shown if rejected or missing)
  const [collegeIdProofUrl, setCollegeIdProofUrl] = useState("");
  const [scorecardProofUrl, setScorecardProofUrl] = useState("");
  const [isUploadingCollegeId, setIsUploadingCollegeId] = useState(false);
  const [isUploadingScorecard, setIsUploadingScorecard] = useState(false);
  const [showDocUploadModal, setShowDocUploadModal] = useState(false);

  const [saveSuccess, setSaveSuccess] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const [isUpdatingAvailability, setIsUpdatingAvailability] = useState(false);
  const [isReactivating, setIsReactivating] = useState(false);

  useEffect(() => {
    if (profile) {
      setAvatarUrl(profile.avatar_url || "");
      setPhoneNumber(profile.phone_number || "");
      setBio(profile.bio || "");
      setYoutubeUrl(profile.intro_youtube_url || "");
      setSeatLimit(profile.seat_limit ? Math.min(profile.seat_limit, 30) : 10);
      setPricePerMonth(
        profile.price_per_month ? Math.min(Number(profile.price_per_month), 2000) : 1500
      );
      setCollegeIdProofUrl(profile.college_id_proof_url || "");
      setScorecardProofUrl(profile.scorecard_proof_url || "");
      setPayoutUpiId(profile.payout_upi_id || "");
      setPayoutAccountNumber(profile.payout_account_number || "");
      setPayoutIfsc(profile.payout_ifsc || "");
      setPayoutAccountName(profile.payout_account_name || "");
      if (profile.payout_account_number) {
        setPayoutMethod("BANK");
      }
    } else if (user?.avatar_url && !avatarUrl) {
      setAvatarUrl(user.avatar_url);
    }
  }, [profile]);

  if (authLoading || profileLoading) {
    return (
      <div className="max-w-3xl mx-auto py-16 text-center text-ink-muted text-sm animate-pulse">
        Loading profile configuration...
      </div>
    );
  }

  if (!isAuthenticated || user?.role !== "MENTOR") {
    return (
      <div className="max-w-md mx-auto py-16 text-center space-y-4">
        <h2 className="text-xl font-bold font-display text-ink">Mentor Access Required</h2>
        <p className="text-sm text-ink-muted">
          Only mentors can access and configure mentor profile settings.
        </p>
        <Button variant="primary" onClick={() => router.push("/login")}>
          Sign In as Mentor
        </Button>
      </div>
    );
  }

  // If mentor hasn't initialized/onboarded profile yet
  if (!profile) {
    return (
      <div className="max-w-2xl mx-auto py-12 space-y-6">
        <Card className="p-8 sm:p-10 bg-white border border-blue-100 shadow-soft rounded-2xl text-center space-y-5">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mx-auto">
            <Sparkles className="w-7 h-7" />
          </div>
          <div className="space-y-1.5">
            <h2 className="text-2xl font-bold font-display text-ink">
              Complete Your Mentor Onboarding
            </h2>
            <p className="text-xs text-ink-muted max-w-md mx-auto">
              You haven&apos;t completed your mentor registration yet. Fill out the 4-step onboarding form to upload your verification credentials and set up your student cohort.
            </p>
          </div>
          <div className="pt-2">
            <Button
              variant="primary"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2.5 font-bold text-sm"
              onClick={() => router.push("/mentor/onboarding")}
            >
              Start 4-Step Onboarding →
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  const liveEmbedUrl = getYouTubeEmbedUrl(youtubeUrl);
  const status = profile.verification_status || "PENDING";
  const isAvailable = profile.is_available !== false;
  const isAutoPaused = Boolean(profile.auto_paused_at);

  const handleUploadProof = async (
    e: React.ChangeEvent<HTMLInputElement>,
    proofType: "college_id" | "scorecard"
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (proofType === "college_id") setIsUploadingCollegeId(true);
    else setIsUploadingScorecard(true);

    try {
      const res = await uploadProofMutation.mutateAsync({ file, proofType });
      if (proofType === "college_id") {
        setCollegeIdProofUrl(res.url);
      } else {
        setScorecardProofUrl(res.url);
      }
      setFeedback({
        type: "success",
        message: `${proofType === "college_id" ? "College ID" : "Scorecard"} uploaded successfully!`,
      });
    } catch (err: any) {
      setFeedback({
        type: "error",
        message: err.detail || "Failed to upload document. Please upload a valid image or PDF under 10MB.",
      });
    } finally {
      if (proofType === "college_id") setIsUploadingCollegeId(false);
      else setIsUploadingScorecard(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback(null);

    if (bio.trim().length < 10) {
      setFeedback({
        type: "error",
        message: "Your mentor bio must be at least 10 characters long.",
      });
      return;
    }

    const validatedSeats = Math.min(Math.max(1, Number(seatLimit)), 30);
    const validatedPrice = Math.min(Math.max(0, Number(pricePerMonth)), 2000);

    const payload = {
      avatar_url: avatarUrl.trim() || null,
      phone_number: phoneNumber.trim() || null,
      bio: bio.trim(),
      intro_youtube_url: youtubeUrl.trim() || null,
      seat_limit: validatedSeats,
      price_per_month: validatedPrice,
      payout_upi_id: payoutMethod === "UPI" ? payoutUpiId.trim() || null : null,
      payout_account_number: payoutMethod === "BANK" ? payoutAccountNumber.trim() || null : null,
      payout_ifsc: payoutMethod === "BANK" ? payoutIfsc.trim().toUpperCase() || null : null,
      payout_account_name: payoutMethod === "BANK" ? payoutAccountName.trim() || null : null,
      college_id_proof_url: collegeIdProofUrl.trim() || null,
      scorecard_proof_url: scorecardProofUrl.trim() || null,
    };

    try {
      await updateMutation.mutateAsync(payload);
      if (user) {
        setUser({ ...user, avatar_url: avatarUrl.trim() || null });
      }
      setFeedback({
        type: "success",
        message: "Profile updates saved successfully!",
      });
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3500);
      refetch();
    } catch (err: any) {
      setFeedback({
        type: "error",
        message: err.detail || "Failed to save profile. Please check all fields.",
      });
    }
  };

  const handleToggleAvailability = async (newVal: boolean) => {
    setIsUpdatingAvailability(true);
    try {
      await api.patch("/mentors/me/availability", { is_available: newVal });
      refetch();
      setFeedback({
        type: "success",
        message: newVal
          ? "Cohort active! You are accepting new students."
          : "Cohort paused. Existing students remain active, but you are hidden from search.",
      });
    } catch (err: any) {
      setFeedback({ type: "error", message: "Failed to update availability status." });
    } finally {
      setIsUpdatingAvailability(false);
    }
  };

  const handleRequestReactivation = async () => {
    setIsReactivating(true);
    try {
      await api.post("/mentors/me/reactivate");
      refetch();
      setFeedback({
        type: "success",
        message: "Reactivation requested! The admin team will review and reactivate your listing shortly.",
      });
    } catch (err: any) {
      setFeedback({ type: "error", message: "Failed to submit reactivation request." });
    } finally {
      setIsReactivating(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20 animate-fade-in">
      {/* ========================================================================= */}
      {/* 1. VERIFICATION STATUS ALERT BANNER */}
      {/* ========================================================================= */}
      {isAutoPaused ? (
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm">
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5 animate-pulse" />
            <div className="text-xs space-y-1">
              <p className="font-bold text-sm text-amber-900">Profile Paused Due to Inactivity ⏸️</p>
              <p className="text-amber-800 leading-relaxed">
                Your listing was paused because no workspace activity was recorded in 14 days. Request reactivation below to restore your public profile.
              </p>
            </div>
          </div>
          <Button
            variant="secondary"
            className="border-amber-300 text-amber-900 bg-amber-100 hover:bg-amber-200 text-xs shrink-0 font-bold self-start sm:self-center"
            disabled={isReactivating}
            onClick={handleRequestReactivation}
          >
            {isReactivating ? "Requesting..." : "Request Reactivation 🚀"}
          </Button>
        </div>
      ) : status === "APPROVED" ? (
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3 shadow-sm">
          <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="text-xs space-y-0.5">
            <p className="font-bold text-sm text-emerald-800">Verified Mentor Status 🛡️</p>
            <p className="text-emerald-700">
              Your academic credentials and exam scorecard have been verified. Your cohort is active and visible in the student discovery directory.
            </p>
          </div>
        </div>
      ) : status === "PENDING" ? (
        <div className="p-4 rounded-2xl bg-blue-50/90 border border-blue-200 text-blue-900 flex items-start gap-3 shadow-sm">
          <Clock className="w-5 h-5 text-blue-600 shrink-0 mt-0.5 animate-pulse" />
          <div className="text-xs space-y-1">
            <div className="flex items-center gap-2">
              <p className="font-bold text-sm text-blue-900">Verification Under Review ⏳</p>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-200/80 text-blue-900">
                In Review
              </span>
            </div>
            <p className="text-blue-800 leading-relaxed">
              Your credentials (College ID & Scorecard) have been submitted and are currently under review by our admin team. Reviews typically complete within 2–4 hours. Once approved, your cohort will go live automatically!
            </p>
          </div>
        </div>
      ) : status === "REJECTED" ? (
        <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-900 flex items-start justify-between gap-3 shadow-sm">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div className="text-xs space-y-1">
              <p className="font-bold text-sm text-rose-800">Verification Review Feedback</p>
              <p className="text-rose-700">
                {profile.rejection_reason ||
                  "Your submitted documents require attention. Please re-upload legible proofs below."}
              </p>
            </div>
          </div>
          <Button
            variant="secondary"
            className="border-rose-300 text-rose-900 bg-rose-100 hover:bg-rose-200 text-xs shrink-0 font-bold"
            onClick={() => setShowDocUploadModal(!showDocUploadModal)}
          >
            {showDocUploadModal ? "Hide Re-upload" : "Re-upload Documents"}
          </Button>
        </div>
      ) : null}

      {/* ========================================================================= */}
      {/* 2. RE-DESIGNED MENTOR IDENTITY HEADER CARD */}
      {/* ========================================================================= */}
      <Card className="p-6 bg-white border border-mist rounded-2xl shadow-soft">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Avatar & Info */}
          <div className="flex items-center gap-5 min-w-0">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-bold text-xl sm:text-2xl flex items-center justify-center shadow-sm flex-shrink-0 overflow-hidden ring-1 ring-slate-200 border-2 border-white">
              <span>
                {(user?.full_name || profile.full_name || "M")
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")
                  .toUpperCase()}
              </span>
              {(avatarUrl || user?.avatar_url) && (
                <img
                  src={avatarUrl || user?.avatar_url || ""}
                  alt={user?.full_name || profile.full_name}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              )}
            </div>

            <div className="space-y-1.5 min-w-0">
              <div className="flex items-center gap-2.5 flex-wrap">
                <h1 className="text-xl sm:text-2xl font-bold font-display text-ink tracking-tight truncate">
                  {user?.full_name || profile.full_name}
                </h1>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                  {CATEGORY_LABELS[profile.category] || profile.category}
                </span>
                <span
                  className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${
                    status === "APPROVED"
                      ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                      : "bg-amber-50 text-amber-700 border-amber-200"
                  }`}
                >
                  {status === "APPROVED" ? "Verified Mentor 🛡️" : "Under Review ⏳"}
                </span>
              </div>

              <p className="text-xs text-ink-muted flex items-center gap-2 flex-wrap">
                <span>{profile.college || "Institute not specified"}</span>
                {profile.exam_rank && (
                  <>
                    <span>•</span>
                    <span className="font-semibold text-ink">{profile.exam_rank}</span>
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 border-t md:border-t-0 md:border-l border-mist pt-4 md:pt-0 md:pl-6 shrink-0">
            <div className="text-center px-3 py-1.5 bg-paper rounded-xl border border-mist">
              <span className="text-[10px] uppercase font-bold text-ink-faint block">Cohort Fee</span>
              <span className="text-sm font-bold text-ink">₹{pricePerMonth}/mo</span>
            </div>
            <div className="text-center px-3 py-1.5 bg-paper rounded-xl border border-mist">
              <span className="text-[10px] uppercase font-bold text-ink-faint block">Capacity</span>
              <span className="text-sm font-bold text-ink">{seatLimit} Seats</span>
            </div>
            <Link
              href={`/mentors/${profile.user_id}`}
              target="_blank"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-mist bg-white text-xs font-semibold text-ink-muted hover:text-ink shadow-sm transition-all hover:bg-slate-50"
              title="Preview public profile card"
            >
              <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
              <span>Preview</span>
            </Link>
          </div>
        </div>
      </Card>

      {/* Re-upload Modal/Section (only shown if rejected or toggled) */}
      {showDocUploadModal && (
        <Card className="p-5 bg-rose-50/40 border border-rose-200 rounded-2xl space-y-4 animate-fade-in">
          <h3 className="text-xs font-bold text-rose-900 uppercase tracking-wider flex items-center gap-2">
            <Upload className="w-4 h-4 text-rose-600" />
            Re-upload Verification Documents
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-3 bg-white rounded-xl border border-rose-200 space-y-2">
              <span className="text-xs font-semibold text-ink block">College ID Card</span>
              <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-paper border border-mist text-xs font-semibold text-ink hover:bg-slate-100">
                <Upload className="w-3.5 h-3.5 text-blue-600" />
                {isUploadingCollegeId ? "Uploading..." : "Select New File"}
                <input
                  type="file"
                  accept="image/*,application/pdf"
                  className="hidden"
                  onChange={(e) => handleUploadProof(e, "college_id")}
                  disabled={isUploadingCollegeId}
                />
              </label>
              {collegeIdProofUrl && (
                <span className="text-[11px] text-emerald-700 block font-medium">✓ Uploaded</span>
              )}
            </div>
            <div className="p-3 bg-white rounded-xl border border-rose-200 space-y-2">
              <span className="text-xs font-semibold text-ink block">Exam Scorecard</span>
              <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-paper border border-mist text-xs font-semibold text-ink hover:bg-slate-100">
                <Upload className="w-3.5 h-3.5 text-blue-600" />
                {isUploadingScorecard ? "Uploading..." : "Select New File"}
                <input
                  type="file"
                  accept="image/*,application/pdf"
                  className="hidden"
                  onChange={(e) => handleUploadProof(e, "scorecard")}
                  disabled={isUploadingScorecard}
                />
              </label>
              {scorecardProofUrl && (
                <span className="text-[11px] text-emerald-700 block font-medium">✓ Uploaded</span>
              )}
            </div>
          </div>
        </Card>
      )}

      {/* Feedback Toast */}
      {feedback && (
        <div
          className={`p-3.5 rounded-xl text-xs font-medium border flex items-center justify-between animate-fade-in ${
            feedback.type === "success"
              ? "bg-emerald-50 text-emerald-800 border-emerald-200"
              : "bg-rose-50 text-rose-800 border-rose-200"
          }`}
        >
          <span>{feedback.message}</span>
        </div>
      )}

      {/* Main Profile Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* ========================================================================= */}
        {/* SECTION 1: PUBLIC PROFILE DETAILS & BIO (VISIBLE TO STUDENTS) */}
        {/* ========================================================================= */}
        <Card className="p-6 bg-white border border-mist rounded-2xl shadow-soft space-y-6">
          <div className="border-b border-mist pb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-blue-600" />
              <h3 className="text-sm font-bold text-ink">Public Profile & Guidance Strategy</h3>
            </div>
            <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
              Visible on Explore Mentors
            </span>
          </div>

          {/* Profile Photo Upload */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-ink">Profile Photo</label>
            <AvatarUpload
              currentAvatarUrl={avatarUrl}
              userName={user?.full_name}
              onAvatarUpdated={(newUrl) => setAvatarUrl(newUrl || "")}
            />
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Full Name"
                value={user?.full_name || ""}
                disabled
                helperText="Account legal name. Contact support to request name changes."
              />
              <Input
                label="Target Mentorship Category"
                value={CATEGORY_LABELS[profile.category] || profile.category}
                disabled
                helperText="Exam stream verified during onboarding."
              />
            </div>

            <Textarea
              label="Mentor Bio & Guidance Philosophy *"
              rows={4}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Introduce your study strategy, how you conduct weekly reviews, problem sets, and your own prep journey..."
              helperText="Describe what students will achieve in your cohort."
              required
            />

            <div>
              <Input
                label="Introductory YouTube Video URL (Optional)"
                type="url"
                value={youtubeUrl}
                onChange={(e) => setYoutubeUrl(e.target.value)}
                placeholder="https://www.youtube.com/watch?v=..."
                helperText="A short 1–2 minute intro video significantly boosts enrollment conversions."
              />

              {youtubeUrl.trim() && liveEmbedUrl && (
                <div className="mt-3 aspect-video w-full max-w-md rounded-xl overflow-hidden border border-mist shadow-sm">
                  <iframe
                    src={liveEmbedUrl}
                    title="Live Video Preview"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>
              )}
            </div>
          </div>
        </Card>

        {/* ========================================================================= */}
        {/* SECTION 2: CONFIDENTIAL ADMIN CONTACT & SECURITY (NEVER SHARED) */}
        {/* ========================================================================= */}
        <Card className="p-6 bg-white border border-mist rounded-2xl shadow-soft space-y-5">
          <div className="border-b border-mist pb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-amber-600" />
              <h3 className="text-sm font-bold text-ink">Confidential Contact & Security</h3>
            </div>
            <span className="text-[11px] font-semibold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200 flex items-center gap-1">
              <Lock className="w-3 h-3 text-slate-500" />
              Admin Only • Never Shared with Students
            </span>
          </div>

          {/* Privacy Guarantee Notice */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
            <p className="font-bold text-slate-900 flex items-center gap-1.5">
              <span>🔒 Strict Data Privacy Policy</span>
            </p>
            <p className="text-slate-600 leading-relaxed">
              Mentskool never shares your phone number or email address with students. All student communication is handled strictly within the platform&apos;s workspace and messaging system. Your contact details are stored securely and used only by Mentskool administrators for account verification, urgent alerts, and payout notifications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Admin Verification Contact Number *"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="+91 9876543210"
              helperText="Strictly private. Stored for administrative communication only."
              required
            />
            <Input
              label="Registered Account Email"
              value={user?.email || profile.email || ""}
              disabled
              helperText="Account login credential. Never exposed to students."
            />
          </div>
        </Card>

        {/* ========================================================================= */}
        {/* 4. SECTION 2: COHORT AVAILABILITY & CAPACITY */}
        {/* ========================================================================= */}
        <Card className="p-6 bg-white border border-mist rounded-2xl shadow-soft space-y-5">
          <div className="border-b border-mist pb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Building className="w-4 h-4 text-emerald-600" />
              <h3 className="text-sm font-bold text-ink">Cohort Parameters & Vacation Mode</h3>
            </div>
            {status !== "APPROVED" && (
              <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                Activates upon admin verification
              </span>
            )}
          </div>

          {/* Availability Toggle */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-ink">Availability Status:</span>
                {status !== "APPROVED" ? (
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-200 text-slate-700">
                    Awaiting Verification
                  </span>
                ) : isAvailable ? (
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    🟢 Taking Students
                  </span>
                ) : (
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                    🟡 Paused / Away
                  </span>
                )}
              </div>
              <p className="text-[11px] text-ink-muted mt-1">
                Toggle &apos;Pause&apos; during college exams or holidays. Current students remain active, but you are hidden from new student search.
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <Button
                type="button"
                variant={isAvailable ? "primary" : "secondary"}
                className={`text-xs py-1.5 px-3.5 ${
                  isAvailable
                    ? "bg-emerald-600 hover:bg-emerald-700 text-white font-bold"
                    : "text-ink-muted border-mist hover:bg-slate-100"
                }`}
                disabled={isUpdatingAvailability || status !== "APPROVED"}
                onClick={() => handleToggleAvailability(true)}
              >
                Accepting Students
              </Button>
              <Button
                type="button"
                variant={!isAvailable ? "primary" : "secondary"}
                className={`text-xs py-1.5 px-3.5 ${
                  !isAvailable
                    ? "bg-amber-600 hover:bg-amber-700 text-white font-bold"
                    : "text-ink-muted border-mist hover:bg-slate-100"
                }`}
                disabled={isUpdatingAvailability || status !== "APPROVED"}
                onClick={() => handleToggleAvailability(false)}
              >
                Pause Cohort
              </Button>
            </div>
          </div>

          {/* Pricing & Seats Configuration */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Monthly Subscription Fee in INR (Max ₹2,000) *"
              type="number"
              min={0}
              max={2000}
              step={100}
              value={pricePerMonth}
              onChange={(e) => setPricePerMonth(Math.min(2000, Number(e.target.value)))}
              helperText="85% revenue share transferred to your account monthly."
              required
            />
            <Input
              label="Cohort Seat Capacity (Max 30) *"
              type="number"
              min={1}
              max={30}
              value={seatLimit}
              onChange={(e) => setSeatLimit(Math.min(30, Number(e.target.value)))}
              helperText="Platform cap: maximum 30 concurrent students allowed."
              required
            />
          </div>
        </Card>

        {/* ========================================================================= */}
        {/* 5. SECTION 3: EARNINGS PAYOUT ADDRESS */}
        {/* ========================================================================= */}
        <Card className="p-6 bg-white border border-mist rounded-2xl shadow-soft space-y-5">
          <div className="border-b border-mist pb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-purple-600" />
              <h3 className="text-sm font-bold text-ink">Earnings Payout Channel</h3>
            </div>
            <div className="flex gap-1.5">
              <button
                type="button"
                onClick={() => setPayoutMethod("UPI")}
                className={`px-3 py-1 text-xs rounded-lg font-semibold transition-all ${
                  payoutMethod === "UPI"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-paper text-ink-muted border border-mist"
                }`}
              >
                Instant UPI
              </button>
              <button
                type="button"
                onClick={() => setPayoutMethod("BANK")}
                className={`px-3 py-1 text-xs rounded-lg font-semibold transition-all ${
                  payoutMethod === "BANK"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-paper text-ink-muted border border-mist"
                }`}
              >
                Bank Transfer
              </button>
            </div>
          </div>

          {payoutMethod === "UPI" ? (
            <Input
              label="Payout UPI ID *"
              value={payoutUpiId}
              onChange={(e) => setPayoutUpiId(e.target.value)}
              placeholder="e.g. yourname@okhdfcbank or 9876543210@paytm"
              helperText="Instant settlement on the 1st of every calendar month."
              required
            />
          ) : (
            <div className="space-y-4">
              <Input
                label="Account Holder Legal Name *"
                value={payoutAccountName}
                onChange={(e) => setPayoutAccountName(e.target.value)}
                placeholder="Full Name as on bank account"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Bank Account Number"
                  value={payoutAccountNumber}
                  onChange={(e) => setPayoutAccountNumber(e.target.value)}
                  placeholder="e.g. 5010023456789"
                />
                <Input
                  label="Bank IFSC Code"
                  value={payoutIfsc}
                  onChange={(e) => setPayoutIfsc(e.target.value.toUpperCase())}
                  placeholder="e.g. HDFC0001234"
                />
              </div>
            </div>
          )}
        </Card>

        {/* ========================================================================= */}
        {/* 6. SECTION 4: VERIFIED ACADEMIC CREDENTIALS (READ-ONLY) */}
        {/* ========================================================================= */}
        <Card className="p-6 bg-white border border-mist rounded-2xl shadow-soft space-y-4">
          <div className="flex items-center justify-between border-b border-mist pb-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand" />
              <h3 className="text-sm font-bold text-ink">Verified Academic Credentials</h3>
            </div>
            <span
              className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                status === "APPROVED"
                  ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                  : "bg-amber-50 text-amber-700 border-amber-200"
              }`}
            >
              {status === "APPROVED" ? "Authenticated 🛡️" : "Pending Inspection ⏳"}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3 bg-paper rounded-xl border border-mist">
              <span className="text-[10px] uppercase font-bold text-ink-faint block">Category</span>
              <span className="font-semibold text-ink">{CATEGORY_LABELS[profile.category]}</span>
            </div>
            <div className="p-3 bg-paper rounded-xl border border-mist">
              <span className="text-[10px] uppercase font-bold text-ink-faint block">College</span>
              <span className="font-semibold text-ink truncate block" title={profile.college || ""}>
                {profile.college || "—"}
              </span>
            </div>
            <div className="p-3 bg-paper rounded-xl border border-mist">
              <span className="text-[10px] uppercase font-bold text-ink-faint block">Exam & Rank</span>
              <span className="font-semibold text-ink truncate block">{profile.exam_rank || "—"}</span>
            </div>
            <div className="p-3 bg-paper rounded-xl border border-mist">
              <span className="text-[10px] uppercase font-bold text-ink-faint block">Attached Proofs</span>
              <div className="flex items-center gap-2 pt-0.5">
                {profile.college_id_proof_url ? (
                  <a
                    href={profile.college_id_proof_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:underline font-semibold flex items-center gap-0.5 text-[11px]"
                  >
                    <FileText className="w-3 h-3" /> ID Proof
                  </a>
                ) : (
                  <span className="text-slate-400 text-[11px]">No ID</span>
                )}
                {profile.scorecard_proof_url ? (
                  <a
                    href={profile.scorecard_proof_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:underline font-semibold flex items-center gap-0.5 text-[11px]"
                  >
                    <FileText className="w-3 h-3" /> Scorecard
                  </a>
                ) : (
                  <span className="text-slate-400 text-[11px]">No Score</span>
                )}
              </div>
            </div>
          </div>

          <p className="text-[11px] text-ink-faint">
            🔒 Fundamental academic records and submitted certificates are verified by compliance administrators and cannot be altered directly.
          </p>
        </Card>

        {/* ========================================================================= */}
        {/* 7. SECTION 5: PUBLIC ACTIVITY STREAK */}
        {/* ========================================================================= */}
        <Card className="p-6 bg-white border border-mist rounded-2xl shadow-soft space-y-4">
          <div className="flex items-center justify-between border-b border-mist pb-3">
            <h3 className="text-sm font-bold text-ink flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-blue-600" />
              Public 30-Day Activity Streak
            </h3>
            <span className="text-[11px] text-ink-muted">
              Displayed on your Explore Mentors card
            </span>
          </div>
          <ActivityHeatmap
            heatmap={profile.activity_heatmap_30d || []}
            activityStatus={profile.activity_status}
          />
        </Card>

        {/* Save Bar with Immediate Inline Feedback */}
        <div className="pt-4 border-t border-mist space-y-3">
          {feedback && (
            <div
              className={`p-3.5 rounded-xl text-xs font-semibold border flex items-center justify-between animate-fade-in ${
                feedback.type === "success"
                  ? "bg-emerald-50 text-emerald-800 border-emerald-300 shadow-xs"
                  : "bg-rose-50 text-rose-800 border-rose-300 shadow-xs"
              }`}
            >
              <div className="flex items-center gap-2">
                {feedback.type === "success" ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                )}
                <span>{feedback.message}</span>
              </div>
              <button
                type="button"
                onClick={() => setFeedback(null)}
                className="text-xs opacity-60 hover:opacity-100 px-1"
              >
                ✕
              </button>
            </div>
          )}

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="text-xs text-ink-muted">
              Remember to save changes after editing your bio or payout details.
            </span>
            <Button
              type="submit"
              variant="primary"
              className={`px-6 py-2.5 rounded-xl shadow-soft flex items-center gap-1.5 font-bold transition-all duration-200 ${
                saveSuccess
                  ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-500/20"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
              isLoading={updateMutation.isPending}
            >
              {saveSuccess ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>Saved Successfully!</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>Save Profile Changes</span>
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Global Floating Toast for Instant Visibility from any scroll position */}
        {feedback && (
          <div className="fixed bottom-6 right-6 z-50 max-w-sm p-4 rounded-2xl shadow-elevated border flex items-start gap-3 bg-white/95 backdrop-blur-md border-slate-200 animate-slide-up">
            {feedback.type === "success" ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
            )}
            <div className="flex-1 text-xs space-y-0.5">
              <p className="font-bold text-slate-900">
                {feedback.type === "success" ? "Profile Updated" : "Notice"}
              </p>
              <p className="text-slate-600">{feedback.message}</p>
            </div>
            <button
              type="button"
              onClick={() => setFeedback(null)}
              className="text-xs text-slate-400 hover:text-slate-700"
            >
              ✕
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
