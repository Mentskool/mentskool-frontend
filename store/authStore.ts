import { create } from "zustand";
import { User } from "@/lib/types";

interface AuthState {
  user: User | null;
  firebaseUid: string | null;
  emailVerified: boolean;
  isAuthenticated: boolean;
  isLoading: boolean;
  profileNeedsCreation: boolean;
  setUser: (user: User | null) => void;
  setFirebaseState: (params: { firebaseUid: string | null; emailVerified: boolean }) => void;
  setProfileNeedsCreation: (needsCreation: boolean) => void;
  setLoading: (isLoading: boolean) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  firebaseUid: null,
  emailVerified: false,
  isAuthenticated: false,
  isLoading: true,
  profileNeedsCreation: false,

  setUser: (user) => {
    set({
      user,
      isAuthenticated: !!user,
      emailVerified: user?.email_verified ?? false,
      profileNeedsCreation: false,
      isLoading: false,
    });
  },

  setFirebaseState: ({ firebaseUid, emailVerified }) => {
    set((state) => ({
      firebaseUid,
      emailVerified,
      user: state.user ? { ...state.user, email_verified: emailVerified } : state.user,
    }));
  },

  setProfileNeedsCreation: (needsCreation) => {
    set({ profileNeedsCreation: needsCreation, isLoading: false });
  },

  setLoading: (isLoading) => {
    set({ isLoading });
  },

  logout: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("mentskool_access_token");
      localStorage.removeItem("mentskool_refresh_token");
      localStorage.removeItem("mentskool_user");
    }
    set({
      user: null,
      firebaseUid: null,
      emailVerified: false,
      isAuthenticated: false,
      isLoading: false,
      profileNeedsCreation: false,
    });
  },
}));
