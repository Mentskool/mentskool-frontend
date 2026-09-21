import { useAuthStore } from "@/store/authStore";
import { ApiError } from "./types";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";

let isRefreshing = false;
let failedQueue: Array<{
  resolve: (token: string) => void;
  reject: (error: unknown) => void;
}> = [];

const processQueue = (error: unknown, token: string | null = null) => {
  failedQueue.forEach((promise) => {
    if (token) {
      promise.resolve(token);
    } else {
      promise.reject(error);
    }
  });
  failedQueue = [];
};

export async function apiClient<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint.startsWith("/") ? endpoint : `/${endpoint}`}`;

  const { accessToken, refreshToken, setAccessToken, logout } =
    useAuthStore.getState();

  const headers = new Headers(options.headers || {});
  if (!headers.has("Content-Type") && !(options.body instanceof FormData)) {
    headers.set("Content-Type", "application/json");
  }

  if (accessToken && !headers.has("Authorization")) {
    headers.set("Authorization", `Bearer ${accessToken}`);
  }

  let response: Response;
  try {
    response = await fetch(url, {
      ...options,
      headers,
    });
  } catch (netErr) {
    const error: ApiError = {
      detail: "Unable to connect to Mentskool backend service. Ensure Docker is running.",
      status: 0,
    };
    throw error;
  }

  // Handle 401 Unauthorized with automatic refresh token rotation
  if (
    response.status === 401 &&
    !endpoint.includes("/auth/login") &&
    !endpoint.includes("/auth/signup") &&
    !endpoint.includes("/auth/refresh") &&
    refreshToken
  ) {
    if (isRefreshing) {
      // Queue requests until refresh resolves
      try {
        const newToken = await new Promise<string>((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        });
        headers.set("Authorization", `Bearer ${newToken}`);
        const retryRes = await fetch(url, { ...options, headers });
        if (!retryRes.ok) {
          throw await parseErrorResponse(retryRes);
        }
        return (await retryRes.json()) as T;
      } catch (err) {
        throw err;
      }
    }

    isRefreshing = true;

    try {
      const refreshRes = await fetch(`${API_BASE_URL}/auth/refresh`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refresh_token: refreshToken }),
      });

      if (!refreshRes.ok) {
        logout();
        processQueue(new Error("Refresh session expired"), null);
        throw await parseErrorResponse(refreshRes);
      }

      const refreshData = await refreshRes.json();
      const newAccessToken = refreshData.access_token;
      const newRefreshToken = refreshData.refresh_token;

      // Update Zustand and LocalStorage
      useAuthStore.getState().setAuth(
        refreshData.user,
        newAccessToken,
        newRefreshToken
      );
      processQueue(null, newAccessToken);

      // Retry the initial request with new access token
      headers.set("Authorization", `Bearer ${newAccessToken}`);
      const retryRes = await fetch(url, { ...options, headers });
      if (!retryRes.ok) {
        throw await parseErrorResponse(retryRes);
      }
      return (await retryRes.json()) as T;
    } catch (err) {
      logout();
      throw err;
    } finally {
      isRefreshing = false;
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
    body: body ? JSON.stringify(body) : undefined,
  });

apiClient.patch = <T>(endpoint: string, body?: any, options: RequestInit = {}) =>
  apiClient<T>(endpoint, {
    ...options,
    method: "PATCH",
    body: body ? JSON.stringify(body) : undefined,
  });

apiClient.delete = <T>(endpoint: string, options: RequestInit = {}) =>
  apiClient<T>(endpoint, { ...options, method: "DELETE" });

async function parseErrorResponse(response: Response): Promise<ApiError> {
  const status = response.status;
  const retryAfterHeader = response.headers.get("Retry-After");
  const retryAfter = retryAfterHeader ? parseInt(retryAfterHeader, 10) : undefined;

  try {
    const errorData = await response.json();
    let detail = "An unexpected error occurred.";

    if (typeof errorData.detail === "string") {
      detail = errorData.detail;
    } else if (Array.isArray(errorData.detail)) {
      // Pydantic validation errors array
      detail = errorData.detail.map((d: any) => d.msg || JSON.stringify(d)).join(", ");
    } else if (status === 429) {
      detail = `Rate limit exceeded. Please wait ${retryAfter || 60} seconds before retrying.`;
    }

    return {
      detail,
      status,
      retryAfter,
      code: errorData.code || response.headers.get("X-Error-Code") || undefined,
    };
  } catch {
    return {
      detail: status === 429 ? "Rate limit reached. Please try again in 1 minute." : `Request failed with HTTP ${status}`,
      status,
      retryAfter,
    };
  }
}
