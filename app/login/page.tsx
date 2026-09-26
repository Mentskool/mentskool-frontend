"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card } from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/Skeleton";
import { GoogleSignInButton } from "@/components/ui/GoogleSignInButton";
import { BrandLogo } from "@/components/BrandLogo";
import { ApiError } from "@/lib/types";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryEmail = searchParams.get("email") || "";
  const queryPassword = searchParams.get("password") || "";

  const { login, isLoggingIn, googleAuth, isGoogleAuthPending } = useAuth();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: queryEmail,
      password: queryPassword,
    },
  });

  useEffect(() => {
    if (queryEmail) setValue("email", queryEmail);
    if (queryPassword) setValue("password", queryPassword);
  }, [queryEmail, queryPassword, setValue]);

  const onSubmit = async (values: LoginFormValues) => {
    setErrorMessage(null);
    try {
      const response = await login(values);
      if (response.user.role === "ADMIN") {
        router.push("/admin/mentors");
      } else if (response.user.role === "MENTOR") {
        router.push("/mentor/students");
      } else {
        router.push("/dashboard/tasks");
      }
    } catch (err) {

      const apiErr = err as ApiError;
      if (apiErr.status === 429) {
        setErrorMessage(
          apiErr.detail ||
            "Rate limit exceeded: You have attempted too many logins. Please wait 60 seconds."
        );
      } else if (apiErr.status === 401) {
        setErrorMessage("Invalid email or password. Please verify your credentials.");
      } else {
        setErrorMessage(apiErr.detail || "Unable to sign in. Please try again.");
      }
    }
  };

  const handleGoogleCode = useCallback(
    async (code: string) => {
      setErrorMessage(null);
      try {
        const response = await googleAuth({ code });
        if (response.user.role === "ADMIN") {
          router.push("/admin/mentors");
        } else if (response.user.role === "MENTOR") {
          router.push("/mentor/students");
        } else {
          router.push("/dashboard/tasks");
        }
      } catch (err) {

        const apiErr = err as ApiError;
        setErrorMessage(
          apiErr.detail || "Google sign-in failed. Please try again."
        );
      }
    },
    [googleAuth, router]
  );

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-12 bg-paper">
      <div className="w-full max-w-md">
        {/* Brand Header */}
        <div className="text-center mb-6">
          <BrandLogo href="/" size="lg" showText={true} showTagline={false} className="mb-4" />
          <h1 className="text-2xl font-bold font-display text-ink tracking-tight">
            Sign in to your account
          </h1>
          <p className="text-xs text-ink-muted mt-1">
            Enter your credentials to access your mentorship workspace
          </p>
        </div>

        {/* Auth Card */}
        <Card className="bg-white p-7 sm:p-8 border-mist">
          {errorMessage && (
            <div className="p-3 mb-4 bg-[#FDF5E8] border border-amber/40 rounded-control text-xs text-[#9A6210] font-medium leading-relaxed">
              {errorMessage}
            </div>
          )}

          {/* Google OAuth */}
          <GoogleSignInButton
            onCode={handleGoogleCode}
            disabled={isLoggingIn || isGoogleAuthPending}
            label="Sign in with Google"
          />

          {/* Divider */}
          <div className="relative my-5">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-mist" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-white px-3 text-ink-faint font-medium">
                or sign in with email
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

            <Input
              label="Email address"
              type="email"
              placeholder="you@example.com"
              error={errors.email?.message}
              {...register("email")}
            />

            <Input
              label="Password"
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
                isLoading={isLoggingIn}
              >
                Sign In
              </Button>
            </div>
          </form>

          <div className="mt-6 pt-6 border-t border-mist text-center space-y-2">
            <p className="text-xs text-ink-muted">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                className="font-bold text-brand hover:underline"
              >
                Create an account
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

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="py-12 flex justify-center items-center">
          <div className="w-full max-w-md space-y-4">
            <Skeleton className="h-10 w-48 mx-auto" />
            <Skeleton className="h-64 w-full rounded-card" />
          </div>
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  );
}
