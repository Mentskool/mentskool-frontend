"use client";

import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";
import { apiClient } from "@/lib/api-client";
import { ApiError, User, UserRole } from "@/lib/types";
import { useAuthStore } from "@/store/authStore";

export interface SignupPayload {
  email: string;
  password: string;
  full_name: string;
  role: "STUDENT" | "MENTOR";
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterProfilePayload {
  full_name: string;
  role: "STUDENT" | "MENTOR";
}

export function useAuth() {
  const {
    user,
    isAuthenticated,
    isLoading,
    emailVerified,
    profileNeedsCreation,
    setUser,
    setProfileNeedsCreation,
    setFirebaseState,
    logout: storeLogout,
  } = useAuthStore();

  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [isGoogleAuthPending, setIsGoogleAuthPending] = useState(false);
  const [isResettingPassword, setIsResettingPassword] = useState(false);
  const [isResendingEmail, setIsResendingEmail] = useState(false);
  const [isCheckingVerification, setIsCheckingVerification] = useState(false);

  /**
   * Register a new user:
   * 1. Create account in Firebase Auth
   * 2. Send verification email via Firebase
   * 3. Register user profile in Postgres backend
   */
  const signup = async (payload: SignupPayload): Promise<User> => {
    setIsSigningUp(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        payload.email.trim(),
        payload.password
      );

      // Trigger verification email
      try {
        await sendEmailVerification(userCredential.user);
      } catch (e) {
        console.warn("Could not dispatch initial email verification:", e);
      }

      // Register profile in backend
      const profile = await apiClient.post<User>("/auth/register", {
        full_name: payload.full_name.trim(),
        role: payload.role,
      });

      setUser(profile);
      setFirebaseState({
        firebaseUid: userCredential.user.uid,
        emailVerified: userCredential.user.emailVerified,
      });
      return profile;
    } finally {
      setIsSigningUp(false);
    }
  };

  /**
   * Log in existing user with email and password
   */
  const login = async (payload: LoginPayload): Promise<User> => {
    setIsLoggingIn(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        payload.email.trim(),
        payload.password
      );

      setFirebaseState({
        firebaseUid: userCredential.user.uid,
        emailVerified: userCredential.user.emailVerified,
      });

      const profile = await apiClient.get<User>("/auth/me");
      setUser(profile);
      return profile;
    } finally {
      setIsLoggingIn(false);
    }
  };

  /**
   * Google Popup Sign-in
   * If profile doesn't exist, flags profileNeedsCreation or completes registration if role was chosen
   */
  const googleAuth = async (defaultRole?: "STUDENT" | "MENTOR"): Promise<{ user?: User; needsRole: boolean }> => {
    setIsGoogleAuthPending(true);
    try {
      let fbUser;
      try {
        const result = await signInWithPopup(auth, googleProvider);
        fbUser = result.user;
      } catch (popupErr: any) {
        // If popup is blocked by COOP or closed unexpectedly, fall back to seamless redirect
        if (
          popupErr.code === "auth/popup-blocked" ||
          popupErr.code === "auth/popup-closed-by-user" ||
          popupErr.code === "auth/cancelled-popup-request"
        ) {
          await signInWithRedirect(auth, googleProvider);
          return { needsRole: false };
        }
        throw popupErr;
      }

      setFirebaseState({
        firebaseUid: fbUser.uid,
        emailVerified: fbUser.emailVerified,
      });

      try {
        const profile = await apiClient.get<User>("/auth/me");
        setUser(profile);
        return { user: profile, needsRole: false };
      } catch (err) {
        const apiErr = err as ApiError;
        if (apiErr.code === "PROFILE_NOT_CREATED" || apiErr.status === 404) {
          if (defaultRole) {
            const profile = await apiClient.post<User>("/auth/register", {
              full_name: fbUser.displayName || fbUser.email?.split("@")[0] || "User",
              role: defaultRole,
            });
            setUser(profile);
            return { user: profile, needsRole: false };
          }
          setProfileNeedsCreation(true);
          return { needsRole: true };
        }
        throw err;
      }
    } finally {
      setIsGoogleAuthPending(false);
    }
  };

  /**
   * Complete registration when Google sign-in returns PROFILE_NOT_CREATED
   */
  const registerProfile = async (payload: RegisterProfilePayload): Promise<User> => {
    const profile = await apiClient.post<User>("/auth/register", payload);
    setUser(profile);
    setProfileNeedsCreation(false);
    return profile;
  };

  /**
   * Dispatch password reset email
   */
  const forgotPassword = async (email: string): Promise<void> => {
    setIsResettingPassword(true);
    try {
      await sendPasswordResetEmail(auth, email.trim());
    } finally {
      setIsResettingPassword(false);
    }
  };

  /**
   * Resend verification email to currently signed in user
   */
  const resendVerificationEmail = async (): Promise<void> => {
    if (!auth.currentUser) throw new Error("No signed-in user found.");
    setIsResendingEmail(true);
    try {
      await sendEmailVerification(auth.currentUser);
    } finally {
      setIsResendingEmail(false);
    }
  };

  /**
   * Reload current user to inspect updated email_verified claim
   */
  const reloadVerificationStatus = async (): Promise<boolean> => {
    if (!auth.currentUser) return false;
    setIsCheckingVerification(true);
    try {
      await auth.currentUser.reload();
      await auth.currentUser.getIdToken(true);
      const isVerified = auth.currentUser.emailVerified;
      setFirebaseState({
        firebaseUid: auth.currentUser.uid,
        emailVerified: isVerified,
      });
      if (isVerified) {
        try {
          const profile = await apiClient.get<User>("/auth/me");
          setUser(profile);
        } catch (e) {
          console.warn("Could not refresh profile after verification:", e);
        }
      }
      return isVerified;
    } finally {
      setIsCheckingVerification(false);
    }
  };

  /**
   * Sign out
   */
  const logout = async (): Promise<void> => {
    try {
      await signOut(auth);
    } catch (e) {
      console.warn("SignOut warning:", e);
    }
    storeLogout();
  };

  return {
    user,
    isAuthenticated,
    isLoading,
    emailVerified: emailVerified || (user?.email_verified ?? false),
    profileNeedsCreation,
    login,
    isLoggingIn,
    signup,
    isSigningUp,
    googleAuth,
    isGoogleAuthPending,
    registerProfile,
    forgotPassword,
    isResettingPassword,
    resendVerificationEmail,
    isResendingEmail,
    reloadVerificationStatus,
    isCheckingVerification,
    logout,
  };
}
