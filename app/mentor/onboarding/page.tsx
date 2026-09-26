"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuthStore } from "@/store/authStore";
import { useMyMentorProfile, useUploadMentorProof } from "@/hooks/useMentors";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { BrandLogo } from "@/components/BrandLogo";
import { CATEGORY_LABELS, MentorCategory } from "@/lib/types";
import api from "@/lib/api";
import {
  Trophy,
  ShieldCheck,
  FileText,
  Upload,
  CreditCard,
  Building,
  CheckCircle2,
  Clock,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  ExternalLink,
  AlertCircle,
  HelpCircle,
  Video,
  Lock,
} from "lucide-react";

const getYouTubeEmbedUrl = (url?: string | null): string | null => {
  if (!url) return null;
  const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regExp);
  return match ? `https://www.youtube-nocookie.com/embed/${match[1]}` : null;
};

const STEPS = [
  { id: 1, name: "Academic Details", desc: "College & Exam Rank" },
  { id: 2, name: "Credentials & Proofs", desc: "ID & Scorecard Upload" },
  { id: 3, name: "Cohort & Payout", desc: "Pricing, Seats & UPI" },
  { id: 4, name: "Declaration & Submit", desc: "Review & Confirmation" },
];

export default function MentorOnboardingPage() {
  const router = useRouter();
  const { user, isAuthenticated, isLoading: authLoading } = useAuthStore();
  const { data: profile, isLoading: profileLoading, refetch } = useMyMentorProfile();
  const uploadProofMutation = useUploadMentorProof();

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form State
  // Step 1: Academic & Contact
  const [category, setCategory] = useState<MentorCategory>("JEE_PREP");
  const [college, setCollege] = useState("");
  const [collegeEmail, setCollegeEmail] = useState("");
  const [examRank, setExamRank] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // Step 2: Verification Proofs
  const [collegeIdProofUrl, setCollegeIdProofUrl] = useState("");
  const [scorecardProofUrl, setScorecardProofUrl] = useState("");
  const [isUploadingCollegeId, setIsUploadingCollegeId] = useState(false);
  const [isUploadingScorecard, setIsUploadingScorecard] = useState(false);

  // Step 3: Cohort & Payout
  const [bio, setBio] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [seatLimit, setSeatLimit] = useState(10);
  const [pricePerMonth, setPricePerMonth] = useState(1500);
  const [payoutUpiId, setPayoutUpiId] = useState("");
  const [payoutAccountNumber, setPayoutAccountNumber] = useState("");
  const [payoutIfsc, setPayoutIfsc] = useState("");
  const [payoutAccountName, setPayoutAccountName] = useState("");
  const [payoutMode, setPayoutMode] = useState<"UPI" | "BANK">("UPI");

  // Step 4: Declaration
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  // Prepopulate if profile already exists
  useEffect(() => {
    if (profile) {
      setCategory(profile.category || "JEE_PREP");
      setCollege(profile.college || "");
      setCollegeEmail(profile.college_email || "");
      setExamRank(profile.exam_rank || "");
      setPhoneNumber(profile.phone_number || "");
      setCollegeIdProofUrl(profile.college_id_proof_url || "");
      setScorecardProofUrl(profile.scorecard_proof_url || "");
      setBio(profile.bio || "");
      setYoutubeUrl(profile.intro_youtube_url || "");
      setSeatLimit(profile.seat_limit || 10);
      setPricePerMonth(Number(profile.price_per_month) || 1500);
      setPayoutUpiId(profile.payout_upi_id || "");
      setPayoutAccountNumber(profile.payout_account_number || "");
      setPayoutIfsc(profile.payout_ifsc || "");
      setPayoutAccountName(profile.payout_account_name || "");
      if (profile.payout_account_number) {
        setPayoutMode("BANK");
      }

      // If already submitted and pending or approved, show the submitted confirmation state
      if (profile.verification_status === "APPROVED" || profile.verification_status === "PENDING") {
        setIsSubmitted(true);
      }
    }
  }, [profile]);

  if (authLoading || profileLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-paper text-ink-muted text-sm">
        Loading your onboarding workspace...
      </div>
    );
  }

  if (!isAuthenticated || user?.role !== "MENTOR") {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center px-4 bg-paper">
        <Card className="max-w-md w-full p-8 text-center space-y-4 bg-white border-mist">
          <h2 className="text-xl font-bold font-display text-ink">Mentor Access Required</h2>
          <p className="text-xs text-ink-muted">
            This onboarding portal is exclusively for verified mentors on Mentskool.
          </p>
          <Button variant="primary" onClick={() => router.push("/login")}>
            Sign In as Mentor
          </Button>
        </Card>
      </div>
    );
  }

  // Handle Document Uploads
  const handleUploadFile = async (
    e: React.ChangeEvent<HTMLInputElement>,
    proofType: "college_id" | "scorecard"
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setErrorMessage(null);
    if (proofType === "college_id") setIsUploadingCollegeId(true);
    else setIsUploadingScorecard(true);

    try {
      const res = await uploadProofMutation.mutateAsync({ file, proofType });
      if (proofType === "college_id") {
        setCollegeIdProofUrl(res.url);
      } else {
        setScorecardProofUrl(res.url);
      }
    } catch (err: any) {
      setErrorMessage(
        err.detail || "Failed to upload document. Please upload a valid image or PDF under 10MB."
      );
    } finally {
      if (proofType === "college_id") setIsUploadingCollegeId(false);
      else setIsUploadingScorecard(false);
    }
  };

  // Step Validation
  const validateStep = (step: number): boolean => {
    setErrorMessage(null);
    if (step === 1) {
      if (!college.trim()) {
        setErrorMessage("Please enter your College or Institute name (e.g. IIT Bombay).");
        return false;
      }
      if (!examRank.trim()) {
        setErrorMessage("Please specify your Exam & Rank/Score (e.g. JEE Adv AIR 325).");
        return false;
      }
      if (!phoneNumber.trim()) {
        setErrorMessage("Please provide a WhatsApp or contact phone number for cohort coordination.");
        return false;
      }
      return true;
    }

    if (step === 2) {
      if (!collegeIdProofUrl) {
        setErrorMessage("Please upload your College ID card or student verification proof.");
        return false;
      }
      if (!scorecardProofUrl) {
        setErrorMessage("Please upload your Exam Scorecard or Rank confirmation letter.");
        return false;
      }
      return true;
    }

    if (step === 3) {
      if (!bio.trim() || bio.trim().length < 20) {
        setErrorMessage("Please write a short bio (at least 20 characters) explaining your guidance approach.");
        return false;
      }
      if (payoutMode === "UPI" && !payoutUpiId.trim()) {
        setErrorMessage("Please enter your Payout UPI ID (e.g. yourname@okhdfcbank).");
        return false;
      }
      if (payoutMode === "BANK" && (!payoutAccountNumber.trim() || !payoutIfsc.trim())) {
        setErrorMessage("Please provide complete Bank Account Number and IFSC code.");
        return false;
      }
      return true;
    }

    if (step === 4) {
      if (!agreedToTerms) {
        setErrorMessage("You must accept the truthfulness declaration before submitting.");
        return false;
      }
      return true;
    }

    return true;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    setErrorMessage(null);
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmitApplication = async () => {
    if (!validateStep(4)) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    const payload = {
      category,
      college: college.trim(),
      college_email: collegeEmail.trim() || null,
      exam_rank: examRank.trim(),
      phone_number: phoneNumber.trim(),
      bio: bio.trim(),
      intro_youtube_url: youtubeUrl.trim() || null,
      seat_limit: Math.min(Math.max(1, Number(seatLimit)), 30),
      price_per_month: Math.min(Math.max(0, Number(pricePerMonth)), 2000),
      college_id_proof_url: collegeIdProofUrl.trim(),
      scorecard_proof_url: scorecardProofUrl.trim(),
      payout_upi_id: payoutMode === "UPI" ? payoutUpiId.trim() : null,
      payout_account_number: payoutMode === "BANK" ? payoutAccountNumber.trim() : null,
      payout_ifsc: payoutMode === "BANK" ? payoutIfsc.trim().toUpperCase() : null,
      payout_account_name: payoutMode === "BANK" ? payoutAccountName.trim() : null,
    };

    try {
      if (!profile) {
        await api.post("/mentors/profile", payload);
      } else {
        await api.patch("/mentors/profile", payload);
      }
      await refetch();
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err: any) {
      setErrorMessage(
        err.detail || "Unable to submit your application. Please check your network and fields."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // If already submitted / pending verification screen
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#EBF3FB] via-[#F4F8FC] to-white py-12 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="text-center">
            <BrandLogo href="/" size="md" showTagline={false} className="mb-4 inline-block" />
          </div>

          <Card className="bg-white p-8 sm:p-10 border border-blue-100 shadow-xl rounded-2xl text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
                <Clock className="w-3.5 h-3.5 animate-pulse text-amber-600" />
                Status: Verification Under Review
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-ink tracking-tight">
                Application Successfully Submitted!
              </h1>
              <p className="text-sm text-ink-muted max-w-lg mx-auto leading-relaxed">
                Thank you, <strong className="text-ink">{user?.full_name}</strong>. Your mentor credentials and verification proofs have been received by the Mentskool Administration Team.
              </p>
            </div>

            {/* Verification Timeline Steps */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 text-left space-y-3.5 text-xs text-ink-muted">
              <h4 className="font-bold text-ink text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand" />
                What happens next?
              </h4>
              <div className="space-y-2.5">
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold flex items-center justify-center shrink-0 text-[11px]">
                    1
                  </span>
                  <p>
                    <strong className="text-ink">Credential Inspection:</strong> Our compliance team verifies your College ID ({college || "Uploaded"}) and Exam Scorecard.
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold flex items-center justify-center shrink-0 text-[11px]">
                    2
                  </span>
                  <p>
                    <strong className="text-ink">Turnaround Time:</strong> Profile reviews typically take <strong className="text-emerald-700">2 to 4 hours</strong> during working hours.
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold flex items-center justify-center shrink-0 text-[11px]">
                    3
                  </span>
                  <p>
                    <strong className="text-ink">Automated Activation:</strong> Once verified, your cohort listing automatically goes live on the student discovery directory, and you receive an email confirmation.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Summary Pill Box */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-left text-xs">
              <div className="p-3 bg-paper rounded-xl border border-mist">
                <span className="text-ink-faint text-[10px] uppercase font-bold block">Category</span>
                <span className="font-semibold text-ink">{CATEGORY_LABELS[category]}</span>
              </div>
              <div className="p-3 bg-paper rounded-xl border border-mist">
                <span className="text-ink-faint text-[10px] uppercase font-bold block">College</span>
                <span className="font-semibold text-ink truncate block">{college}</span>
              </div>
              <div className="p-3 bg-paper rounded-xl border border-mist">
                <span className="text-ink-faint text-[10px] uppercase font-bold block">Cohort Seats</span>
                <span className="font-semibold text-ink">{seatLimit} students</span>
              </div>
              <div className="p-3 bg-paper rounded-xl border border-mist">
                <span className="text-ink-faint text-[10px] uppercase font-bold block">Monthly Fee</span>
                <span className="font-semibold text-ink">₹{pricePerMonth}/mo</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                variant="primary"
                className="w-full sm:w-auto px-6 py-2.5 font-bold text-sm bg-blue-600 hover:bg-blue-700"
                onClick={() => router.push("/mentor/students")}
              >
                Go to Mentor Workspace →
              </Button>
              <Button
                variant="secondary"
                className="w-full sm:w-auto px-5 py-2.5 text-xs text-ink-muted border-mist hover:text-ink"
                onClick={() => router.push("/mentor/profile")}
              >
                View / Edit Profile
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EBF3FB] via-[#F4F8FC] to-white py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Top Header */}
        <div className="flex items-center justify-between">
          <BrandLogo href="/" size="md" showTagline={false} />
          <Link
            href="/mentor/students"
            className="text-xs font-semibold text-ink-muted hover:text-ink transition-colors flex items-center gap-1"
          >
            Skip for now →
          </Link>
        </div>

        {/* Stepper Progress Header */}
        <div className="bg-white border border-mist p-4 sm:p-5 rounded-2xl shadow-soft">
          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider">
                Step {currentStep} of 4
              </span>
              <h2 className="text-base sm:text-lg font-bold font-display text-ink">
                {STEPS[currentStep - 1].name}
              </h2>
            </div>
            <span className="text-xs text-ink-muted font-medium hidden sm:inline">
              {STEPS[currentStep - 1].desc}
            </span>
          </div>

          {/* Stepper Bar */}
          <div className="grid grid-cols-4 gap-2">
            {STEPS.map((s) => {
              const isPast = currentStep > s.id;
              const isCurrent = currentStep === s.id;
              return (
                <div key={s.id} className="space-y-1">
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${
                      isPast
                        ? "bg-emerald-500"
                        : isCurrent
                        ? "bg-blue-600"
                        : "bg-slate-200"
                    }`}
                  />
                  <div className="text-[10px] font-medium text-ink-faint truncate hidden sm:block">
                    {s.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Error Alert */}
        {errorMessage && (
          <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-800 font-medium flex items-start gap-2.5 animate-shake">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Form Body Card */}
        <Card className="bg-white p-6 sm:p-8 border-mist shadow-soft rounded-2xl space-y-6">
          {/* ========================================================================= */}
          {/* STEP 1: Academic & Contact Information */}
          {/* ========================================================================= */}
          {currentStep === 1 && (
            <div className="space-y-5 animate-fade-in">
              <div className="border-b border-mist pb-3">
                <h3 className="text-base font-bold text-ink flex items-center gap-2">
                  <Building className="w-4 h-4 text-blue-600" />
                  Academic Profile & Credentials
                </h3>
                <p className="text-xs text-ink-muted mt-0.5">
                  Select your mentorship category and enter your verified institute details.
                </p>
              </div>

              {/* Category Pill Selector */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-ink uppercase tracking-wider block">
                  Exam Mentorship Category <span className="text-rose-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {(["JEE_PREP", "NEET_PREP", "GATE_PSU"] as MentorCategory[]).map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setCategory(cat)}
                      className={`p-3 rounded-xl border text-left text-xs transition-all ${
                        category === cat
                          ? "bg-blue-50/80 border-blue-600 text-blue-900 font-bold shadow-sm ring-1 ring-blue-600/30"
                          : "bg-paper border-mist text-ink-muted hover:border-slate-300"
                      }`}
                    >
                      <div className="font-semibold text-ink">{CATEGORY_LABELS[cat]}</div>
                      <div className="text-[11px] text-ink-faint mt-0.5">
                        {cat === "JEE_PREP" && "IIT JEE Main & Adv"}
                        {cat === "NEET_PREP" && "NEET-UG Medical"}
                        {cat === "GATE_PSU" && "GATE Engineering & PSUs"}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="College / Institute Name"
                  placeholder="e.g. IIT Bombay, AIIMS Delhi, BITS Pilani"
                  value={college}
                  onChange={(e) => setCollege(e.target.value)}
                  required
                />
                <Input
                  label="Exam & AIR / Percentile"
                  placeholder="e.g. JEE Adv AIR 325, 99.8%ile"
                  value={examRank}
                  onChange={(e) => setExamRank(e.target.value)}
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="College Official Email (Optional)"
                  type="email"
                  placeholder="e.g. rollno@iitb.ac.in"
                  value={collegeEmail}
                  onChange={(e) => setCollegeEmail(e.target.value)}
                  helperText="Instantly boosts student trust if provided."
                />
                <Input
                  label="WhatsApp / Contact Phone"
                  type="tel"
                  placeholder="e.g. 9876543210"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                  helperText="Kept private. Used for onboarding alerts & cohort sync."
                />
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* STEP 2: Credential Verification Proofs */}
          {/* ========================================================================= */}
          {currentStep === 2 && (
            <div className="space-y-5 animate-fade-in">
              <div className="border-b border-mist pb-3">
                <h3 className="text-base font-bold text-ink flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Document Verification Uploads
                </h3>
                <p className="text-xs text-ink-muted mt-0.5">
                  To ensure quality and student security, all mentors must submit verification proofs.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* College ID Upload Box */}
                <div className="border border-mist rounded-xl p-4 bg-paper space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-ink uppercase tracking-wider">
                      College ID Card <span className="text-rose-500">*</span>
                    </label>
                    {collegeIdProofUrl && (
                      <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Uploaded
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-ink-muted">
                    Upload a clear photo or PDF of your institute ID card or enrollment letter.
                  </p>

                  <div className="pt-2">
                    <label className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-slate-300 hover:border-blue-500 rounded-xl cursor-pointer bg-white transition-all group">
                      <Upload className="w-6 h-6 text-slate-400 group-hover:text-blue-600 transition-colors mb-1.5" />
                      <span className="text-xs font-semibold text-ink group-hover:text-blue-700">
                        {isUploadingCollegeId ? "Uploading document..." : "Choose ID File"}
                      </span>
                      <span className="text-[10px] text-ink-faint mt-0.5">
                        PDF, PNG, JPG, or WEBP (max 10MB)
                      </span>
                      <input
                        type="file"
                        className="hidden"
                        accept=".pdf,image/png,image/jpeg,image/webp"
                        disabled={isUploadingCollegeId}
                        onChange={(e) => handleUploadFile(e, "college_id")}
                      />
                    </label>
                  </div>

                  {collegeIdProofUrl && (
                    <div className="text-[11px] text-blue-700 flex items-center gap-1 pt-1">
                      <FileText className="w-3.5 h-3.5" />
                      <a
                        href={collegeIdProofUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="underline hover:text-blue-900 truncate"
                      >
                        View uploaded College ID proof
                      </a>
                    </div>
                  )}
                </div>

                {/* Scorecard Upload Box */}
                <div className="border border-mist rounded-xl p-4 bg-paper space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-ink uppercase tracking-wider">
                      Exam Scorecard / Rank Letter <span className="text-rose-500">*</span>
                    </label>
                    {scorecardProofUrl && (
                      <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Uploaded
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-ink-muted">
                    Upload official scorecard or rank result verifying your rank of {examRank || "your exam"}.
                  </p>

                  <div className="pt-2">
                    <label className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-slate-300 hover:border-blue-500 rounded-xl cursor-pointer bg-white transition-all group">
                      <Upload className="w-6 h-6 text-slate-400 group-hover:text-blue-600 transition-colors mb-1.5" />
                      <span className="text-xs font-semibold text-ink group-hover:text-blue-700">
                        {isUploadingScorecard ? "Uploading document..." : "Choose Scorecard File"}
                      </span>
                      <span className="text-[10px] text-ink-faint mt-0.5">
                        PDF, PNG, JPG, or WEBP (max 10MB)
                      </span>
                      <input
                        type="file"
                        className="hidden"
                        accept=".pdf,image/png,image/jpeg,image/webp"
                        disabled={isUploadingScorecard}
                        onChange={(e) => handleUploadFile(e, "scorecard")}
                      />
                    </label>
                  </div>

                  {scorecardProofUrl && (
                    <div className="text-[11px] text-blue-700 flex items-center gap-1 pt-1">
                      <FileText className="w-3.5 h-3.5" />
                      <a
                        href={scorecardProofUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="underline hover:text-blue-900 truncate"
                      >
                        View uploaded Scorecard proof
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Privacy Guarantee Note */}
              <div className="p-3 bg-blue-50/60 border border-blue-200/80 rounded-xl flex items-start gap-2.5 text-xs text-blue-900">
                <Lock className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <p>
                  <strong>Strict Privacy Guarantee:</strong> These documents are stored securely and reviewed exclusively by the Mentskool Admin Verification Team. They are never published or accessible to students.
                </p>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* STEP 3: Cohort & Payout Parameters */}
          {/* ========================================================================= */}
          {currentStep === 3 && (
            <div className="space-y-5 animate-fade-in">
              <div className="border-b border-mist pb-3">
                <h3 className="text-base font-bold text-ink flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-purple-600" />
                  Cohort Configuration & Payout Method
                </h3>
                <p className="text-xs text-ink-muted mt-0.5">
                  Set your monthly subscription fee, student cohort capacity, and payout address.
                </p>
              </div>

              <Textarea
                label="Mentor Bio & Guidance Approach"
                rows={3}
                placeholder="Explain your mentorship style, what students will receive weekly (strategy, mock audits, accountability), and your personal prep journey."
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                required
                helperText="Minimum 20 characters. This will be publicly shown on your mentor profile."
              />

              <Input
                label="Introductory YouTube Video URL (Optional)"
                placeholder="e.g. https://www.youtube.com/watch?v=..."
                value={youtubeUrl}
                onChange={(e) => setYoutubeUrl(e.target.value)}
                helperText="A 1-2 min intro video builds 4x higher trust with parents and students."
              />

              {youtubeUrl && getYouTubeEmbedUrl(youtubeUrl) && (
                <div className="aspect-video w-full max-w-sm rounded-xl overflow-hidden border border-mist shadow-sm">
                  <iframe
                    src={getYouTubeEmbedUrl(youtubeUrl)!}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}

              {/* Pricing & Seats Configuration */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div>
                  <label className="text-xs font-bold text-ink uppercase tracking-wider block mb-1">
                    Monthly Fee (₹) <span className="text-rose-500">*</span>
                  </label>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-ink">₹</span>
                    <Input
                      type="number"
                      min={0}
                      max={2000}
                      step={100}
                      value={pricePerMonth}
                      onChange={(e) => setPricePerMonth(Number(e.target.value))}
                    />
                  </div>
                  <span className="text-[10px] text-ink-faint block mt-1">
                    Platform maximum: ₹2,000 / month. 85% goes directly to you.
                  </span>
                </div>

                <div>
                  <label className="text-xs font-bold text-ink uppercase tracking-wider block mb-1">
                    Cohort Capacity (Seats) <span className="text-rose-500">*</span>
                  </label>
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      min={1}
                      max={30}
                      value={seatLimit}
                      onChange={(e) => setSeatLimit(Number(e.target.value))}
                    />
                    <span className="text-xs font-semibold text-ink-muted">students</span>
                  </div>
                  <span className="text-[10px] text-ink-faint block mt-1">
                    Maximum 30 seats per cohort to ensure deep personalized accountability.
                  </span>
                </div>
              </div>

              {/* Payout Options */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-ink uppercase tracking-wider">
                    Earnings Payout Channel <span className="text-rose-500">*</span>
                  </label>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setPayoutMode("UPI")}
                      className={`px-2.5 py-1 text-xs rounded-lg font-semibold transition-all ${
                        payoutMode === "UPI"
                          ? "bg-blue-600 text-white shadow-sm"
                          : "bg-paper text-ink-muted border border-mist"
                      }`}
                    >
                      Instant UPI ID
                    </button>
                    <button
                      type="button"
                      onClick={() => setPayoutMode("BANK")}
                      className={`px-2.5 py-1 text-xs rounded-lg font-semibold transition-all ${
                        payoutMode === "BANK"
                          ? "bg-blue-600 text-white shadow-sm"
                          : "bg-paper text-ink-muted border border-mist"
                      }`}
                    >
                      Bank Transfer
                    </button>
                  </div>
                </div>

                {payoutMode === "UPI" ? (
                  <Input
                    label="Payout UPI ID"
                    placeholder="e.g. mobile@okhdfcbank, name@upi"
                    value={payoutUpiId}
                    onChange={(e) => setPayoutUpiId(e.target.value)}
                    required
                    helperText="Monthly earnings are settled directly to this UPI address on the 1st of every month."
                  />
                ) : (
                  <div className="space-y-3">
                    <Input
                      label="Account Holder Name"
                      placeholder="Full Name as on Bank Account"
                      value={payoutAccountName}
                      onChange={(e) => setPayoutAccountName(e.target.value)}
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <Input
                        label="Bank Account Number"
                        placeholder="e.g. 5010023456789"
                        value={payoutAccountNumber}
                        onChange={(e) => setPayoutAccountNumber(e.target.value)}
                      />
                      <Input
                        label="IFSC Code"
                        placeholder="e.g. HDFC0001234"
                        value={payoutIfsc}
                        onChange={(e) => setPayoutIfsc(e.target.value.toUpperCase())}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* STEP 4: Review, Declaration & Submission */}
          {/* ========================================================================= */}
          {currentStep === 4 && (
            <div className="space-y-5 animate-fade-in">
              <div className="border-b border-mist pb-3">
                <h3 className="text-base font-bold text-ink flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Review & Final Submission
                </h3>
                <p className="text-xs text-ink-muted mt-0.5">
                  Please verify your credentials before sending them to the administration queue.
                </p>
              </div>

              {/* Review Summary Cards */}
              <div className="space-y-3">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-200/80">
                    <span className="font-bold text-ink">1. Academic & Contact Details</span>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="text-blue-600 hover:underline font-semibold"
                    >
                      Edit
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-ink">
                    <div>
                      <span className="text-ink-faint block">Category:</span>
                      <strong className="font-semibold">{CATEGORY_LABELS[category]}</strong>
                    </div>
                    <div>
                      <span className="text-ink-faint block">College:</span>
                      <strong className="font-semibold">{college}</strong>
                    </div>
                    <div>
                      <span className="text-ink-faint block">Rank / Score:</span>
                      <strong className="font-semibold">{examRank}</strong>
                    </div>
                    <div>
                      <span className="text-ink-faint block">Contact WhatsApp:</span>
                      <strong className="font-semibold">{phoneNumber}</strong>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-200/80">
                    <span className="font-bold text-ink">2. Verification Proof Documents</span>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="text-blue-600 hover:underline font-semibold"
                    >
                      Edit
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> College ID Attached
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Scorecard Attached
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-200/80">
                    <span className="font-bold text-ink">3. Cohort & Payout Parameters</span>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(3)}
                      className="text-blue-600 hover:underline font-semibold"
                    >
                      Edit
                    </button>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-ink">
                    <div>
                      <span className="text-ink-faint block">Price:</span>
                      <strong className="font-semibold">₹{pricePerMonth}/mo</strong>
                    </div>
                    <div>
                      <span className="text-ink-faint block">Max Seats:</span>
                      <strong className="font-semibold">{seatLimit} students</strong>
                    </div>
                    <div>
                      <span className="text-ink-faint block">Payout:</span>
                      <strong className="font-semibold truncate block">
                        {payoutMode === "UPI" ? payoutUpiId : payoutAccountNumber}
                      </strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Truthfulness Declaration Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-3 p-3.5 bg-blue-50/60 border border-blue-200 rounded-xl cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className="mt-0.5 rounded text-blue-600 focus:ring-blue-500 w-4 h-4 cursor-pointer"
                  />
                  <div className="text-xs text-blue-900 leading-relaxed">
                    <strong className="font-bold block">Declaration of Authenticity:</strong>
                    I certify that all the information, college enrollment details, and examination rank scorecards submitted are completely accurate, genuine, and belong to me. I understand that misrepresentation will lead to immediate profile termination.
                  </div>
                </label>
              </div>
            </div>
          )}

          {/* Stepper Navigation Buttons */}
          <div className="pt-4 border-t border-mist flex items-center justify-between gap-3">
            {currentStep > 1 ? (
              <Button
                type="button"
                variant="secondary"
                onClick={handleBack}
                className="text-xs px-4 py-2 text-ink-muted border-mist"
              >
                <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
                Previous Step
              </Button>
            ) : (
              <div />
            )}

            {currentStep < 4 ? (
              <Button
                type="button"
                variant="primary"
                onClick={handleNext}
                className="text-xs px-5 py-2 font-bold bg-blue-600 hover:bg-blue-700"
              >
                Next: {STEPS[currentStep].name}
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Button>
            ) : (
              <Button
                type="button"
                variant="primary"
                onClick={handleSubmitApplication}
                isLoading={isSubmitting}
                className="text-xs px-6 py-2.5 font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm"
              >
                Submit Application for Verification 🚀
              </Button>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
