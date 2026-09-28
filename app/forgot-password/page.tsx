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
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-12 bg-paper">
      <div className="mb-8">
        <BrandLogo size="lg" />
      </div>

      <Card className="w-full max-w-md p-8 border border-slate-200/80 shadow-xs">
        {isSubmitted ? (
          <div className="text-center">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <h2 className="text-xl font-bold font-serif text-ink tracking-tight">
              Instructions Sent
            </h2>
            <p className="text-xs text-muted mt-2 leading-relaxed">
              If an account with{" "}
              <span className="font-semibold text-ink">{submittedEmail}</span> exists,
              we have sent password reset instructions. Please check your inbox and spam folder.
            </p>

            <div className="mt-8">
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
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-blue-50 text-brand rounded-full flex items-center justify-center mx-auto mb-3">
                <KeyRound className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold font-serif text-ink tracking-tight">
                Reset your password
              </h2>
              <p className="text-xs text-muted mt-1 leading-relaxed">
                Enter your account email and we&apos;ll send you a secure link to reset your password.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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

              <Button
                type="submit"
                className="w-full justify-center mt-2"
                isLoading={isResettingPassword}
              >
                Send Reset Link
              </Button>
            </form>

            <p className="text-center text-xs text-muted mt-6">
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
  );
}
