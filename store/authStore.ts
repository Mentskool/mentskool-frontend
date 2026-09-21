import { create } from "zustand";
import { User } from "@/lib/types";

interface AuthState {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  setAuth: (user: User, accessToken: string, refreshToken: string) => void;
  setAccessToken: (accessToken: string) => void;
  logout: () => void;
  initFromStorage: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,
  isLoading: true,

  setAuth: (user, accessToken, refreshToken) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("mentskool_access_token", accessToken);
      localStorage.setItem("mentskool_refresh_token", refreshToken);
      localStorage.setItem("mentskool_user", JSON.stringify(user));
    }
    set({
      user,
      accessToken,
      refreshToken,
      isAuthenticated: true,
      isLoading: false,
    });
  },

  setAccessToken: (accessToken) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("mentskool_access_token", accessToken);
    }
    set({ accessToken });
  },

  logout: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("mentskool_access_token");
      localStorage.removeItem("mentskool_refresh_token");
      localStorage.removeItem("mentskool_user");
    }
    set({
      user: null,
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,
      isLoading: false,
    });
  },

  initFromStorage: () => {
    if (typeof window === "undefined") {
      set({ isLoading: false });
      return;
    }

    try {
      const accessToken = localStorage.getItem("mentskool_access_token");
      const refreshToken = localStorage.getItem("mentskool_refresh_token");
      const userStr = localStorage.getItem("mentskool_user");

      if (accessToken && refreshToken && userStr) {
        const user = JSON.parse(userStr) as User;
        set({
          user,
          accessToken,
          refreshToken,
          isAuthenticated: true,
          isLoading: false,
        });
      } else {
        set({ isLoading: false });
      }
    } catch {
      set({ isLoading: false });
    }
  },
}));
