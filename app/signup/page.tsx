"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, ArrowRight, RefreshCw, CheckCircle2, ShieldAlert } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card } from "@/components/ui/Card";
import { BrandLogo } from "@/components/BrandLogo";
import { ApiError } from "@/lib/types";

const signupSchema = z.object({
  full_name: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(255, "Full name cannot exceed 255 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(128, "Password cannot exceed 128 characters"),
  role: z.enum(["STUDENT", "MENTOR"]),
});

type SignupFormValues = z.infer<typeof signupSchema>;

export default function SignupPage() {
  const router = useRouter();
  const {
    signup,
    isSigningUp,
    googleAuth,
    isGoogleAuthPending,
    resendVerificationEmail,
    isResendingEmail,
    reloadVerificationStatus,
    isCheckingVerification,
    user,
  } = useAuth();

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successRegisteredEmail, setSuccessRegisteredEmail] = useState<string | null>(null);
  const [resendStatus, setResendStatus] = useState<string | null>(null);
  const [cooldownSeconds, setCooldownSeconds] = useState(0);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      full_name: "",
      email: "",
      password: "",
      role: "STUDENT",
    },
  });

  const selectedRole = watch("role");

  useEffect(() => {
    if (cooldownSeconds <= 0) return;
    const timer = setInterval(() => {
      setCooldownSeconds((prev) => Math.max(0, prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [cooldownSeconds]);

  const onSubmit = async (values: SignupFormValues) => {
    setErrorMessage(null);
    try {
      await signup(values);
      setSuccessRegisteredEmail(values.email);
    } catch (err: any) {
      console.error("Signup error:", err);
      const code = err.code || "";
      if (code === "auth/email-already-in-use") {
        setErrorMessage("This email is already registered. Please sign in instead.");
      } else if (code === "auth/weak-password") {
        setErrorMessage("Password is too weak. Please choose at least 8 characters.");
      } else if (code === "auth/too-many-requests") {
        setErrorMessage("Too many attempts. Please wait a moment before trying again.");
      } else {
        const apiErr = err as ApiError;
        setErrorMessage(
          apiErr.detail || err.message || "Unable to create account. Please try again."
        );
      }
    }
  };

  const handleGoogleSignIn = async () => {
    setErrorMessage(null);
    try {
      const res = await googleAuth(selectedRole);
      if (!res.needsRole) {
        if (selectedRole === "MENTOR") {
          router.push("/mentor/onboarding");
        } else {
          router.push("/dashboard/tasks");
        }
      }
    } catch (err: any) {
      console.error("Google sign-up error:", err);
      const code = err.code || "";
      if (code === "auth/popup-closed-by-user") {
        return;
      }
      setErrorMessage("Google sign-in was interrupted. Please try again.");
    }
  };

  const handleResend = async () => {
    if (cooldownSeconds > 0) return;
    setResendStatus(null);
    setErrorMessage(null);
    try {
      await resendVerificationEmail();
      setResendStatus("Verification email sent! Check your inbox.");
      setCooldownSeconds(60);
    } catch (err: any) {
      if (err.code === "auth/too-many-requests") {
        setErrorMessage("Too many requests. Please wait a minute before requesting another email.");
        setCooldownSeconds(60);
      } else {
        setErrorMessage("Could not resend email. Please try again later.");
      }
    }
  };

  const handleCheckVerified = async () => {
    setErrorMessage(null);
    try {
      const verified = await reloadVerificationStatus();
      if (verified) {
        if (selectedRole === "MENTOR") {
          router.push("/mentor/onboarding");
        } else {
          router.push("/dashboard/tasks");
        }
      } else {
        setErrorMessage("Email is not verified yet. Please click the link in your inbox first.");
      }
    } catch {
      setErrorMessage("Could not check verification status. Please try again.");
    }
  };

  // --- "Check your email" Confirmation Screen ---
  if (successRegisteredEmail) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center px-4 py-12 bg-[#F8FAFC]">
        <div className="mb-8">
          <BrandLogo size="lg" />
        </div>

        <Card className="w-full max-w-md p-8 border border-slate-200/80 shadow-sm text-center">
          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8" />
          </div>

          <h2 className="text-2xl font-bold font-serif text-ink tracking-tight">
            Check your email
          </h2>
          <p className="text-sm text-muted mt-2">
            We sent a verification link to{" "}
            <span className="font-semibold text-ink">{successRegisteredEmail}</span>.
            Please verify your email to access all features.
          </p>

          {errorMessage && (
            <div className="mt-4 p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2 text-left">
              <ShieldAlert className="w-4 h-4 flex-shrink-0 text-red-500" />
              <span>{errorMessage}</span>
            </div>
          )}

          {resendStatus && (
            <div className="mt-4 p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2 text-left">
              <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-emerald-600" />
              <span>{resendStatus}</span>
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
              disabled={cooldownSeconds > 0}
            >
              <RefreshCw className="w-3.5 h-3.5 mr-2" />
              {cooldownSeconds > 0
                ? `Resend in ${cooldownSeconds}s`
                : "Resend verification email"}
            </Button>

            <Button
              type="button"
              variant="ghost"
              className="w-full justify-center text-xs text-muted hover:text-ink"
              onClick={() => {
                if (user?.role === "MENTOR") {
                  router.push("/mentor/onboarding");
                } else {
                  router.push("/dashboard/tasks");
                }
              }}
            >
              Continue to dashboard for now
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  // --- Registration Form ---
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-12 bg-paper">
      <div className="mb-8">
        <BrandLogo size="lg" />
      </div>

      <Card className="w-full max-w-md p-8 border border-slate-200/80 shadow-xs">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold font-serif text-ink tracking-tight">
            Create your account
          </h2>
          <p className="text-sm text-muted mt-1">
            Join Mentskool to build discipline, track accountability, and achieve exam mastery.
          </p>
        </div>

        {errorMessage && (
          <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-sm text-red-700 flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 flex-shrink-0 text-red-500" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Google Sign-Up Button */}
        <div className="mb-5">
          <Button
            type="button"
            variant="secondary"
            className="w-full flex items-center justify-center gap-3 py-2.5 font-medium border-slate-300 hover:bg-slate-50 transition"
            onClick={handleGoogleSignIn}
            isLoading={isGoogleAuthPending}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            Continue with Google
          </Button>
        </div>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-3 text-slate-400 font-medium">Or continue with email</span>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
              I want to join as
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setValue("role", "STUDENT")}
                className={`flex flex-col items-center justify-center p-3 rounded-xl border text-sm font-medium transition ${
                  selectedRole === "STUDENT"
                    ? "border-brand bg-brand/5 text-brand font-semibold shadow-xs"
                    : "border-slate-200 bg-white text-muted hover:border-slate-300"
                }`}
              >
                <span>Student</span>
                <span className="text-[11px] text-muted font-normal mt-0.5">
                  Prepare & Track
                </span>
              </button>

              <button
                type="button"
                onClick={() => setValue("role", "MENTOR")}
                className={`flex flex-col items-center justify-center p-3 rounded-xl border text-sm font-medium transition ${
                  selectedRole === "MENTOR"
                    ? "border-brand bg-brand/5 text-brand font-semibold shadow-xs"
                    : "border-slate-200 bg-white text-muted hover:border-slate-300"
                }`}
              >
                <span>Mentor</span>
                <span className="text-[11px] text-muted font-normal mt-0.5">
                  Guide & Review
                </span>
              </button>
            </div>
            <input type="hidden" {...register("role")} />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
              Full Name
            </label>
            <Input
              type="text"
              placeholder="e.g. Aarav Patel"
              {...register("full_name")}
              error={errors.full_name?.message}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
              Email Address
            </label>
            <Input
              type="email"
              placeholder="you@example.com"
              {...register("email")}
              error={errors.email?.message}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
              Password
            </label>
            <Input
              type="password"
              placeholder="Min. 8 characters"
              {...register("password")}
              error={errors.password?.message}
            />
          </div>

          <Button
            type="submit"
            className="w-full justify-center mt-2"
            isLoading={isSigningUp}
          >
            Create Account
          </Button>
        </form>

        <p className="text-center text-xs text-muted mt-6">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-brand font-semibold hover:underline"
          >
            Sign in
          </Link>
        </p>
      </Card>
    </div>
  );
}
