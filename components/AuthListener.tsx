"use client";

import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import posthog from "posthog-js";
import { auth } from "@/lib/firebase";
import { apiClient } from "@/lib/api-client";
import { useAuthStore } from "@/store/authStore";
import { ApiError, User } from "@/lib/types";

export function AuthListener() {
  const { setUser, setFirebaseState, setProfileNeedsCreation, setLoading, logout } =
    useAuthStore();

  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).__getDevToken = async () => {
        const user = auth.currentUser;
        if (!user) {
          console.warn("No user currently logged in to Firebase Auth.");
          return null;
        }
        const token = await user.getIdToken();
        console.log("Firebase ID Token:", token);
        return token;
      };
    }

    const unsubscribe = onAuthStateChanged(auth, async (fbUser) => {
      if (fbUser) {
        setFirebaseState({
          firebaseUid: fbUser.uid,
          emailVerified: fbUser.emailVerified,
        });

        try {
          const profile = await apiClient.get<User>("/auth/me");
          setUser(profile);

          if (typeof window !== "undefined") {
            posthog.identify(profile.id, {
              email: profile.email,
              name: profile.full_name,
              role: profile.role,
              target_exam: profile.target_exam,
              target_year: profile.target_year,
              prep_stage: profile.prep_stage,
            });
          }
        } catch (err) {
          const apiErr = err as ApiError;
          if (apiErr.code === "PROFILE_NOT_CREATED" || apiErr.status === 404) {
            setProfileNeedsCreation(true);
          } else if (apiErr.status === 401 || apiErr.status === 403) {
            // Token disabled or invalid
            await signOut(auth);
            if (typeof window !== "undefined") {
              posthog.reset();
            }
            logout();
          } else {
            console.error("Failed to fetch user profile:", err);
            setLoading(false);
          }
        }
      } else {
        if (typeof window !== "undefined") {
          posthog.reset();
        }
        logout();
      }
    });

    return () => unsubscribe();
  }, [setUser, setFirebaseState, setProfileNeedsCreation, setLoading, logout]);

  return null;
}
