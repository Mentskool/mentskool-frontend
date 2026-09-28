"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ShieldAlert, ArrowRight, UserCheck } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card } from "@/components/ui/Card";
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

  const {
    login,
    isLoggingIn,
    googleAuth,
    isGoogleAuthPending,
    registerProfile,
    profileNeedsCreation,
  } = useAuth();

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Role selection state if Google sign-in finds no Postgres profile
  const [selectedRole, setSelectedRole] = useState<"STUDENT" | "MENTOR">("STUDENT");
  const [fullNameForRole, setFullNameForRole] = useState("");
  const [isRegisteringRole, setIsRegisteringRole] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: queryEmail,
      password: "",
    },
  });

  const onSubmit = async (values: LoginFormValues) => {
    setErrorMessage(null);
    try {
      const user = await login(values);
      if (user.role === "ADMIN") {
        router.push("/admin/mentors");
      } else if (user.role === "MENTOR") {
        router.push("/mentor/students");
      } else {
        router.push("/dashboard/tasks");
      }
    } catch (err: any) {
      console.error("Login error:", err);
      const code = err.code || "";
      if (
        code === "auth/invalid-credential" ||
        code === "auth/user-not-found" ||
        code === "auth/wrong-password" ||
        code === "auth/invalid-login-credentials"
      ) {
        setErrorMessage("Invalid email or password. Please verify your credentials.");
      } else if (code === "auth/too-many-requests") {
        setErrorMessage(
          "Too many failed login attempts. Please wait a few minutes before trying again."
        );
      } else {
        const apiErr = err as ApiError;
        setErrorMessage(apiErr.detail || "Unable to sign in. Please try again.");
      }
    }
  };

  const handleGoogleSignIn = async () => {
    setErrorMessage(null);
    try {
      const res = await googleAuth();
      if (!res.needsRole && res.user) {
        if (res.user.role === "ADMIN") {
          router.push("/admin/mentors");
        } else if (res.user.role === "MENTOR") {
          router.push("/mentor/students");
        } else {
          router.push("/dashboard/tasks");
        }
      }
    } catch (err: any) {
      console.error("Google login error:", err);
      if (err.code === "auth/popup-closed-by-user") return;
      setErrorMessage("Google sign-in was interrupted. Please try again.");
    }
  };

  const handleCompleteGoogleRole = async () => {
    if (!fullNameForRole.trim()) {
      setErrorMessage("Please enter your display name.");
      return;
    }
    setIsRegisteringRole(true);
    setErrorMessage(null);
    try {
      const user = await registerProfile({
        full_name: fullNameForRole.trim(),
        role: selectedRole,
      });
      if (user.role === "MENTOR") {
        router.push("/mentor/onboarding");
      } else {
        router.push("/dashboard/tasks");
      }
    } catch (err: any) {
      setErrorMessage(err.detail || "Could not complete registration. Please try again.");
    } finally {
      setIsRegisteringRole(false);
    }
  };

  // --- Step: Choose role for new Google account ---
  if (profileNeedsCreation) {
    return (
      <Card className="w-full p-6 sm:p-7 border border-slate-200/90 shadow-sm bg-white/95 backdrop-blur-sm rounded-2xl">
        <div className="text-center mb-5">
          <div className="w-10 h-10 bg-brand/10 text-brand rounded-full flex items-center justify-center mx-auto mb-2.5">
            <UserCheck className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold font-serif text-ink tracking-tight">
            Complete your profile
          </h2>
          <p className="text-xs text-muted mt-1">
            Choose your account role to finish setting up your Mentskool workspace.
          </p>
        </div>

        {errorMessage && (
          <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 flex-shrink-0 text-red-500" />
            <span>{errorMessage}</span>
          </div>
        )}

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
              Full Name
            </label>
            <Input
              type="text"
              placeholder="e.g. Aarav Patel"
              value={fullNameForRole}
              onChange={(e) => setFullNameForRole(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
              Account Role
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setSelectedRole("STUDENT")}
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
                onClick={() => setSelectedRole("MENTOR")}
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
          </div>

          <Button
            type="button"
            className="w-full justify-center mt-2"
            onClick={handleCompleteGoogleRole}
            isLoading={isRegisteringRole}
          >
            Complete Setup
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </Card>
    );
  }

  // --- Normal Login Form ---
  return (
    <Card className="w-full p-6 sm:p-7 border border-slate-200/90 shadow-sm bg-white/95 backdrop-blur-sm rounded-2xl">
      <div className="text-center mb-4 sm:mb-5">
        <h2 className="text-xl sm:text-2xl font-bold font-serif text-ink tracking-tight">
          Welcome back
        </h2>
        <p className="text-xs text-muted mt-1">
          Enter your credentials to access your accountability workspace.
        </p>
      </div>

      {errorMessage && (
        <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 flex-shrink-0 text-red-500" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Google Sign-In Button */}
      <div className="mb-4">
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

      <div className="relative mb-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200"></div>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-3 text-slate-400 font-medium">Or continue with email</span>
        </div>
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

        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600">
              Password
            </label>
            <Link
              href="/forgot-password"
              className="text-xs text-brand hover:underline font-medium"
            >
              Forgot password?
            </Link>
          </div>
          <Input
            type="password"
            placeholder="••••••••"
            {...register("password")}
            error={errors.password?.message}
          />
        </div>

        <Button
          type="submit"
          className="w-full justify-center mt-1"
          isLoading={isLoggingIn}
        >
          Sign In
        </Button>
      </form>

      <p className="text-center text-xs text-muted mt-4 sm:mt-5">
        Don&apos;t have an account yet?{" "}
        <Link
          href="/signup"
          className="text-brand font-semibold hover:underline"
        >
          Create account
        </Link>
      </p>
    </Card>
  );
}

export default function LoginPage() {
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
        <Suspense fallback={<div className="text-sm text-muted">Loading login...</div>}>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}
