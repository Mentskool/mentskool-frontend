import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import { useAuthStore } from "@/store/authStore";
import { ApiError } from "./types";
import {
  formatValidationIssues,
  sanitizeErrorDetail,
  statusFallbackMessage,
} from "./error-utils";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";

export async function apiClient<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint.startsWith("/") ? endpoint : `/${endpoint}`}`;

  const headers = new Headers(options.headers || {});
  if (!headers.has("Content-Type") && !(options.body instanceof FormData)) {
    headers.set("Content-Type", "application/json");
  }

  // Attach fresh Firebase ID token if user is signed in
  if (!headers.has("Authorization")) {
    try {
      if (typeof window !== "undefined" && typeof auth.authStateReady === "function") {
        await auth.authStateReady();
      }
      const currentUser = auth.currentUser;
      if (currentUser) {
        const idToken = await currentUser.getIdToken();
        if (idToken) {
          headers.set("Authorization", `Bearer ${idToken}`);
        }
      }
    } catch (tokenErr) {
      console.warn("Could not retrieve Firebase ID token:", tokenErr);
    }
  }

  let response: Response;
  try {
    response = await fetch(url, {
      ...options,
      headers,
    });
  } catch {
    const error: ApiError = {
      detail:
        "Unable to connect right now. Please check your internet connection and try again.",
      status: 0,
    };
    throw error;
  }

  // Handle 401: Refresh ID token once and retry
  if (response.status === 401) {
    if (!auth.currentUser && typeof window !== "undefined" && typeof auth.authStateReady === "function") {
      try {
        await auth.authStateReady();
      } catch {
        // ignore
      }
    }
    if (auth.currentUser) {
      try {
        // Force refresh the token
        const freshToken = await auth.currentUser.getIdToken(true);
        headers.set("Authorization", `Bearer ${freshToken}`);
        const retryRes = await fetch(url, { ...options, headers });

        if (retryRes.ok) {
          if (retryRes.status === 204) return {} as T;
          return (await retryRes.json()) as T;
        }

      if (retryRes.status === 401) {
        // Still unauthorized after force refresh: sign out cleanly
        await signOut(auth);
        useAuthStore.getState().logout();
        throw await parseErrorResponse(retryRes);
      }
      throw await parseErrorResponse(retryRes);
    } catch (refreshErr) {
      if ((refreshErr as ApiError)?.status !== undefined) {
        throw refreshErr;
      }
      await signOut(auth);
      useAuthStore.getState().logout();
      throw await parseErrorResponse(response);
    }
  }
}

  if (!response.ok) {
    throw await parseErrorResponse(response);
  }

  // 204 No Content
  if (response.status === 204) {
    return {} as T;
  }

  return (await response.json()) as T;
}

apiClient.get = <T>(endpoint: string, options: RequestInit = {}) =>
  apiClient<T>(endpoint, { ...options, method: "GET" });

apiClient.post = <T>(endpoint: string, body?: any, options: RequestInit = {}) =>
  apiClient<T>(endpoint, {
    ...options,
    method: "POST",
    body: body instanceof FormData ? body : body !== undefined ? JSON.stringify(body) : undefined,
  });

apiClient.patch = <T>(endpoint: string, body?: any, options: RequestInit = {}) =>
  apiClient<T>(endpoint, {
    ...options,
    method: "PATCH",
    body: body instanceof FormData ? body : body !== undefined ? JSON.stringify(body) : undefined,
  });

apiClient.delete = <T>(endpoint: string, options: RequestInit = {}) =>
  apiClient<T>(endpoint, { ...options, method: "DELETE" });

async function parseErrorResponse(response: Response): Promise<ApiError> {
  const status = response.status;
  const retryAfterHeader = response.headers.get("Retry-After");
  const retryAfter = retryAfterHeader ? parseInt(retryAfterHeader, 10) : undefined;
  const headerCode = response.headers.get("X-Error-Code") || response.headers.get("x-error-code");

  try {
    const errorData = await response.json();
    let detail = statusFallbackMessage(status, retryAfter);
    let code = headerCode || errorData.code || undefined;

    if (typeof errorData.detail === "string") {
      if (
        errorData.detail === "PROFILE_NOT_CREATED" ||
        errorData.detail === "EMAIL_NOT_VERIFIED"
      ) {
        code = errorData.detail;
      }
      detail = sanitizeErrorDetail(errorData.detail, status);
    } else if (Array.isArray(errorData.detail)) {
      detail = formatValidationIssues(errorData.detail);
    } else if (errorData.detail && typeof errorData.detail === "object") {
      if (errorData.detail.code) code = errorData.detail.code;
      const objMsg = errorData.detail.message || errorData.detail.detail;
      detail =
        typeof objMsg === "string"
          ? sanitizeErrorDetail(objMsg, status)
          : statusFallbackMessage(status, retryAfter);
    } else if (typeof errorData.message === "string") {
      detail = sanitizeErrorDetail(errorData.message, status);
    } else if (status === 429) {
      detail = statusFallbackMessage(429, retryAfter);
    }

    return {
      detail,
      status,
      retryAfter,
      code,
    };
  } catch {
    return {
      detail: statusFallbackMessage(status, retryAfter),
      status,
      retryAfter,
      code: headerCode || undefined,
    };
  }
}
