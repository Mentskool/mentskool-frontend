"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, CheckCircle2, RefreshCw, ArrowRight, ShieldAlert } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { BrandLogo } from "@/components/BrandLogo";

export default function VerifyEmailPage() {
  const router = useRouter();
  const {
    user,
    emailVerified,
    resendVerificationEmail,
    isResendingEmail,
    reloadVerificationStatus,
    isCheckingVerification,
  } = useAuth();

  const [message, setMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    if (cooldown <= 0) return;
    const interval = setInterval(() => {
      setCooldown((c) => Math.max(0, c - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [cooldown]);

  const handleCheckVerified = async () => {
    setMessage(null);
    setErrorMessage(null);
    try {
      const verified = await reloadVerificationStatus();
      if (verified) {
        setMessage("Email verified successfully! Redirecting...");
        setTimeout(() => {
          if (user?.role === "MENTOR") {
            router.push("/mentor/students");
          } else {
            router.push("/dashboard/tasks");
          }
        }, 1200);
      } else {
        setErrorMessage("Email is still not verified. Please click the link in your email first.");
      }
    } catch {
      setErrorMessage("Could not check verification status. Please try again.");
    }
  };

  const handleResend = async () => {
    if (cooldown > 0) return;
    setMessage(null);
    setErrorMessage(null);
    try {
      await resendVerificationEmail();
      setMessage("Verification email has been resent. Check your inbox and spam folder.");
      setCooldown(60);
    } catch (err: any) {
      if (err.code === "auth/too-many-requests") {
        setErrorMessage("Too many requests. Please wait a minute before requesting another email.");
        setCooldown(60);
      } else {
        setErrorMessage("Could not resend verification email. Please try again later.");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-12 bg-paper">
      <div className="mb-8">
        <BrandLogo size="lg" />
      </div>

      <Card className="w-full max-w-md p-8 border border-slate-200/80 shadow-xs text-center">
        {emailVerified ? (
          <div>
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h2 className="text-2xl font-bold font-serif text-ink tracking-tight">
              Email Verified
            </h2>
            <p className="text-xs text-muted mt-2 leading-relaxed">
              Your email address is verified. You now have full access to subscriptions, quizzes, and tasks.
            </p>

            <div className="mt-8">
              <Button
                className="w-full justify-center"
                onClick={() => {
                  if (user?.role === "MENTOR") {
                    router.push("/mentor/students");
                  } else {
                    router.push("/dashboard/tasks");
                  }
                }}
              >
                Go to Workspace
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <div className="w-16 h-16 bg-blue-50 text-brand rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8" />
            </div>

            <h2 className="text-2xl font-bold font-serif text-ink tracking-tight">
              Verify your email
            </h2>
            <p className="text-xs text-muted mt-2 leading-relaxed">
              We need to verify your email address{" "}
              {user?.email && <span className="font-semibold text-ink">({user.email})</span>}{" "}
              to unlock subscriptions, quiz attempts, and assignments.
            </p>

            {message && (
              <div className="mt-4 p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2 text-left">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-emerald-600" />
                <span>{message}</span>
              </div>
            )}

            {errorMessage && (
              <div className="mt-4 p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2 text-left">
                <ShieldAlert className="w-4 h-4 flex-shrink-0 text-red-500" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="mt-8 space-y-3">
              <Button
                type="button"
                className="w-full justify-center"
                onClick={handleCheckVerified}
                isLoading={isCheckingVerification}
              >
                <CheckCircle2 className="w-4 h-4 mr-2" />
                I&apos;ve verified my email
              </Button>

              <Button
                type="button"
                variant="secondary"
                className="w-full justify-center text-xs"
                onClick={handleResend}
                isLoading={isResendingEmail}
                disabled={cooldown > 0}
              >
                <RefreshCw className="w-3.5 h-3.5 mr-2" />
                {cooldown > 0 ? `Resend in ${cooldown}s` : "Resend verification email"}
              </Button>

              <Link
                href="/dashboard/tasks"
                className="inline-block text-xs text-muted hover:text-ink pt-2 font-medium"
              >
                Return to dashboard
              </Link>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}
