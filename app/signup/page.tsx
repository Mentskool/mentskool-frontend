"use client";

import React, { useCallback, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card } from "@/components/ui/Card";
import { GoogleSignInButton } from "@/components/ui/GoogleSignInButton";
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
  const { signup, isSigningUp, googleAuth, isGoogleAuthPending } = useAuth();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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

  const onSubmit = async (values: SignupFormValues) => {
    setErrorMessage(null);
    try {
      const response = await signup(values);
      if (response.user.role === "MENTOR") {
        router.push("/mentor/onboarding");
      } else {
        router.push("/dashboard/tasks");
      }
    } catch (err) {
      const apiErr = err as ApiError;
      if (apiErr.status === 429) {
        setErrorMessage(
          apiErr.detail ||
            "Rate limit exceeded: Please wait 60 seconds before submitting again."
        );
      } else if (apiErr.status === 409) {
        setErrorMessage("This email is already registered. Please sign in instead.");
      } else {
        setErrorMessage(apiErr.detail || "Unable to create account. Please try again.");
      }
    }
  };

  const handleGoogleCode = useCallback(
    async (code: string) => {
      setErrorMessage(null);
      try {
        const response = await googleAuth({ code, role: selectedRole });
        if (response.user.role === "MENTOR") {
          router.push("/mentor/onboarding");
        } else {
          router.push("/dashboard/tasks");
        }
      } catch (err) {
        const apiErr = err as ApiError;
        setErrorMessage(
          apiErr.detail || "Google sign-up failed. Please try again."
        );
      }
    },
    [googleAuth, router, selectedRole]
  );

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-12 bg-paper">
      <div className="w-full max-w-md">
        {/* Brand Header */}
        <div className="text-center mb-6">
          <BrandLogo href="/" size="lg" showText={true} showTagline={false} className="mb-4" />
          <h1 className="text-2xl font-bold font-display text-ink tracking-tight">
            Create your account
          </h1>
          <p className="text-xs text-ink-muted mt-1">
            Join Mentskool to start tracking verified accountability
          </p>
        </div>

        {/* Auth Card */}
        <Card className="bg-white p-7 sm:p-8 border-mist">
          {errorMessage && (
            <div className="p-3 mb-4 bg-[#FDF5E8] border border-amber/40 rounded-control text-xs text-[#9A6210] font-medium leading-relaxed">
              {errorMessage}
            </div>
          )}

          {/* Role Toggle */}
          <div className="flex flex-col gap-1.5 text-left mb-4">
            <label className="text-xs font-semibold text-ink-muted select-none">
              I want to join as:
            </label>
            <div className="grid grid-cols-2 gap-2 p-1 bg-[#F3F4F6] rounded-control border border-mist">
              <button
                type="button"
                onClick={() => setValue("role", "STUDENT")}
                className={`py-1.5 text-xs font-semibold rounded-control transition-all ${
                  selectedRole === "STUDENT"
                    ? "bg-white text-brand border border-mist/80 font-bold"
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                Student
              </button>
              <button
                type="button"
                onClick={() => setValue("role", "MENTOR")}
                className={`py-1.5 text-xs font-semibold rounded-control transition-all ${
                  selectedRole === "MENTOR"
                    ? "bg-white text-brand border border-mist/80 font-bold"
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                Mentor
              </button>
            </div>
          </div>

          {/* Google OAuth */}
          <GoogleSignInButton
            onCode={handleGoogleCode}
            disabled={isSigningUp || isGoogleAuthPending}
            label="Sign up with Google"
          />

          {/* Divider */}
          <div className="relative my-5">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-mist" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-white px-3 text-ink-faint font-medium">
                or sign up with email
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

            <Input
              label="Full name"
              type="text"
              placeholder="e.g. Alex Morgan"
              error={errors.full_name?.message}
              {...register("full_name")}
            />

            <Input
              label="Email address"
              type="email"
              placeholder="alex@example.com"
              error={errors.email?.message}
              {...register("email")}
            />

            <Input
              label="Password (min 8 characters)"
              type="password"
              placeholder="••••••••"
              error={errors.password?.message}
              {...register("password")}
            />

            <div className="pt-2">
              <Button
                type="submit"
                variant="primary"
                className="w-full py-2.5 text-sm font-bold"
                isLoading={isSigningUp}
              >
                Create {selectedRole === "MENTOR" ? "Mentor" : "Student"} Account
              </Button>
            </div>
          </form>

          <div className="mt-6 pt-6 border-t border-mist text-center space-y-2">
            <p className="text-xs text-ink-muted">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-bold text-brand hover:underline"
              >
                Sign in
              </Link>
            </p>
            <div>
              <Link
                href="/"
                className="text-[11px] text-ink-faint hover:text-ink transition-colors"
              >
                ← Return to Home
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
