"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card } from "@/components/ui/Card";
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
  const { signup, isSigningUp } = useAuth();
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
        router.push("/mentor/students");
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

  return (
    <div className="py-12 flex justify-center items-center">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold font-display text-ink">
            Create your account
          </h1>
          <p className="text-sm text-ink-muted mt-1.5">
            Join Mentskool to start tracking verified accountability
          </p>
        </div>

        <Card className="bg-white">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {errorMessage && (
              <div className="p-3 bg-[#FDF5E8] border border-amber/40 rounded-control text-xs text-[#9A6210] font-medium leading-relaxed">
                {errorMessage}
              </div>
            )}

            {/* Role Toggle */}
            <div className="flex flex-col gap-1.5 text-left">
              <label className="text-xs font-medium text-ink-muted select-none">
                I want to join as:
              </label>
              <div className="grid grid-cols-2 gap-2 p-1 bg-[#F3F4F6] rounded-control border border-mist">
                <button
                  type="button"
                  onClick={() => setValue("role", "STUDENT")}
                  className={`py-1.5 text-xs font-semibold rounded-control transition-all ${
                    selectedRole === "STUDENT"
                      ? "bg-white text-brand border border-mist/80"
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
                      ? "bg-white text-brand border border-mist/80"
                      : "text-ink-muted hover:text-ink"
                  }`}
                >
                  Mentor
                </button>
              </div>
            </div>

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
                className="w-full"
                isLoading={isSigningUp}
              >
                Create {selectedRole === "MENTOR" ? "Mentor" : "Student"} Account
              </Button>
            </div>
          </form>

          <div className="mt-6 pt-6 border-t border-mist text-center">
            <p className="text-xs text-ink-muted">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-brand hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
