import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";
import { TokenResponse, User } from "@/lib/types";
import { useAuthStore } from "@/store/authStore";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface SignupPayload {
  email: string;
  password: string;
  full_name: string;
  role: "STUDENT" | "MENTOR";
}

export function useAuth() {
  const queryClient = useQueryClient();
  const { setAuth, logout, user, isAuthenticated, isLoading } = useAuthStore();

  const loginMutation = useMutation({
    mutationFn: (payload: LoginPayload) =>
      apiClient<TokenResponse>("/auth/login", {
        method: "POST",
        body: JSON.stringify(payload),
      }),
    onSuccess: (data) => {
      setAuth(data.user, data.access_token, data.refresh_token);
      queryClient.setQueryData(["currentUser"], data.user);
    },
  });

  const signupMutation = useMutation({
    mutationFn: (payload: SignupPayload) =>
      apiClient<TokenResponse>("/auth/signup", {
        method: "POST",
        body: JSON.stringify(payload),
      }),
    onSuccess: (data) => {
      setAuth(data.user, data.access_token, data.refresh_token);
      queryClient.setQueryData(["currentUser"], data.user);
    },
  });

  const currentUserQuery = useQuery({
    queryKey: ["currentUser"],
    queryFn: () => apiClient<User>("/auth/me"),
    enabled: isAuthenticated,
    retry: false,
  });

  return {
    user,
    isAuthenticated,
    isLoading,
    login: loginMutation.mutateAsync,
    isLoggingIn: loginMutation.isPending,
    loginError: loginMutation.error,
    signup: signupMutation.mutateAsync,
    isSigningUp: signupMutation.isPending,
    signupError: signupMutation.error,
    currentUser: currentUserQuery.data,
    logout,
  };
}
