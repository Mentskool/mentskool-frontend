"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { KeyRound, ArrowLeft, CheckCircle2 } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card } from "@/components/ui/Card";
import { BrandLogo } from "@/components/BrandLogo";

const forgotPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordPage() {
  const { forgotPassword, isResettingPassword } = useAuth();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = async (values: ForgotPasswordFormValues) => {
    try {
      await forgotPassword(values.email);
    } catch (e) {
      console.warn("Password reset request logged:", e);
    }
    // Always show same confirmation to prevent email enumeration
    setSubmittedEmail(values.email);
    setIsSubmitted(true);
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center px-4 py-4 sm:py-6 bg-slate-50 overflow-hidden">
      {/* Subtle faded grid background */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:28px_28px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35"
        aria-hidden="true"
      />

      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] bg-gradient-to-tr from-blue-100/50 via-indigo-100/30 to-transparent rounded-full blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-[420px] flex flex-col items-center">
        <div className="mb-3 sm:mb-4">
          <BrandLogo size="md" href="/" />
        </div>

        <Card className="w-full p-6 sm:p-7 border border-slate-200/90 shadow-sm bg-white/95 backdrop-blur-sm rounded-2xl">
          {isSubmitted ? (
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>

              <h2 className="text-xl sm:text-2xl font-bold font-serif text-ink tracking-tight">
                Instructions Sent
              </h2>
              <p className="text-xs text-muted mt-2 leading-relaxed">
                If an account with{" "}
                <span className="font-semibold text-ink">{submittedEmail}</span> exists,
                we have sent password reset instructions. Please check your inbox and spam folder.
              </p>

              <div className="mt-6">
                <Link href="/login">
                  <Button variant="secondary" className="w-full justify-center">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Sign In
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <div>
              <div className="text-center mb-5">
                <div className="w-10 h-10 bg-blue-50 text-brand rounded-full flex items-center justify-center mx-auto mb-2.5">
                  <KeyRound className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold font-serif text-ink tracking-tight">
                  Reset your password
                </h2>
                <p className="text-xs text-muted mt-1 leading-relaxed">
                  Enter your account email and we&apos;ll send you a secure link to reset your password.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    {...register("email")}
                    error={errors.email?.message}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full justify-center mt-1"
                  isLoading={isResettingPassword}
                >
                  Send Reset Link
                </Button>
              </form>

              <p className="text-center text-xs text-muted mt-4 sm:mt-5">
                Remember your credentials?{" "}
                <Link
                  href="/login"
                  className="text-brand font-semibold hover:underline"
                >
                  Sign in
                </Link>
              </p>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
