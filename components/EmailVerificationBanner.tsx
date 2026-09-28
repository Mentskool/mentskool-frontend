"use client";

import React, { useState, useEffect } from "react";
import { AlertCircle, RefreshCw, CheckCircle2 } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

export const EmailVerificationBanner: React.FC = () => {
  const {
    isAuthenticated,
    emailVerified,
    resendVerificationEmail,
    isResendingEmail,
    reloadVerificationStatus,
    isCheckingVerification,
    user,
  } = useAuth();

  const [message, setMessage] = useState<string | null>(null);
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setInterval(() => {
      setCooldown((c) => Math.max(0, c - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [cooldown]);

  // Don't display banner if user is not authenticated or is already verified
  if (!isAuthenticated || emailVerified) {
    return null;
  }

  const handleResend = async () => {
    if (cooldown > 0) return;
    setMessage(null);
    try {
      await resendVerificationEmail();
      setMessage("Verification email sent!");
      setCooldown(60);
      setTimeout(() => setMessage(null), 5000);
    } catch (err: any) {
      if (err.code === "auth/too-many-requests") {
        setMessage("Too many requests. Please wait 1 minute.");
        setCooldown(60);
      } else {
        setMessage("Failed to send email. Try again later.");
      }
    }
  };

  const handleCheck = async () => {
    setMessage(null);
    try {
      const verified = await reloadVerificationStatus();
      if (verified) {
        setMessage("Email verified!");
        setTimeout(() => setMessage(null), 3000);
      } else {
        setMessage("Still unverified. Click the email link first.");
        setTimeout(() => setMessage(null), 4000);
      }
    } catch {
      setMessage("Could not check status.");
    }
  };

  return (
    <div className="w-full bg-amber-500/10 border-b border-amber-500/20 px-4 py-2 text-xs text-amber-900 flex flex-wrap items-center justify-between gap-2 z-50">
      <div className="flex items-center gap-2">
        <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
        <span>
          <strong className="font-semibold">Verify your email:</strong>{" "}
          {user?.role === "MENTOR"
            ? "Verify your email to publish your mentor profile and assign tasks."
            : "Verify your email to subscribe to mentors and attempt quizzes."}
        </span>
        {message && (
          <span className="ml-2 font-medium text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
            {message}
          </span>
        )}
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={handleCheck}
          disabled={isCheckingVerification}
          className="inline-flex items-center gap-1 font-semibold text-amber-900 bg-amber-200/60 hover:bg-amber-200 px-2.5 py-1 rounded transition disabled:opacity-50"
        >
          <CheckCircle2 className="w-3.5 h-3.5" />
          {isCheckingVerification ? "Checking..." : "I've verified"}
        </button>

        <button
          type="button"
          onClick={handleResend}
          disabled={isResendingEmail || cooldown > 0}
          className="inline-flex items-center gap-1 font-medium text-amber-800 hover:text-amber-950 underline px-1 py-1 disabled:opacity-50"
        >
          <RefreshCw className="w-3 h-3" />
          {cooldown > 0 ? `Resend (${cooldown}s)` : "Resend email"}
        </button>
      </div>
    </div>
  );
};
