"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/*  Google Identity Services type declarations                        */
/* ------------------------------------------------------------------ */
declare global {
  interface Window {
    google?: {
      accounts: {
        oauth2: {
          initCodeClient: (config: {
            client_id: string;
            scope: string;
            ux_mode: string;
            callback: (response: { code?: string; error?: string }) => void;
            error_callback?: (error: { type: string }) => void;
          }) => { requestCode: () => void };
        };
      };
    };
  }
}

interface GoogleSignInButtonProps {
  onCode: (code: string) => void;
  disabled?: boolean;
  label?: string;
}

const GOOGLE_GIS_SRC = "https://accounts.google.com/gsi/client";

/**
 * Custom-styled "Continue with Google" button that triggers the
 * Google OAuth2 authorization code flow via a popup.
 */
export function GoogleSignInButton({
  onCode,
  disabled = false,
  label = "Continue with Google",
}: GoogleSignInButtonProps) {
  const [scriptReady, setScriptReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const clientRef = useRef<{ requestCode: () => void } | null>(null);

  /* ---- Load GIS script once ---- */
  useEffect(() => {
    if (window.google?.accounts?.oauth2) {
      setScriptReady(true);
      return;
    }

    // Check if script tag already exists
    const existing = document.querySelector(
      `script[src="${GOOGLE_GIS_SRC}"]`
    );
    if (existing) {
      existing.addEventListener("load", () => setScriptReady(true));
      return;
    }

    const script = document.createElement("script");
    script.src = GOOGLE_GIS_SRC;
    script.async = true;
    script.defer = true;
    script.onload = () => setScriptReady(true);
    document.head.appendChild(script);
  }, []);

  /* ---- Initialize code client when script is ready ---- */
  useEffect(() => {
    if (!scriptReady || !window.google) return;

    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    if (!clientId) {
      console.error("NEXT_PUBLIC_GOOGLE_CLIENT_ID is not configured");
      return;
    }

    clientRef.current = window.google.accounts.oauth2.initCodeClient({
      client_id: clientId,
      scope: "email profile openid",
      ux_mode: "popup",
      callback: (response) => {
        setIsLoading(false);
        if (response.code) {
          onCode(response.code);
        }
      },
      error_callback: () => {
        setIsLoading(false);
      },
    });
  }, [scriptReady, onCode]);

  const handleClick = useCallback(() => {
    if (!clientRef.current || disabled || isLoading) return;
    setIsLoading(true);
    clientRef.current.requestCode();
  }, [disabled, isLoading]);

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={disabled || isLoading || !scriptReady}
      className="w-full flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-control border border-mist bg-white text-sm font-semibold text-ink hover:bg-[#F9FAFB] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {/* Google "G" logo SVG */}
      <svg width="18" height="18" viewBox="0 0 48 48">
        <path
          fill="#EA4335"
          d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
        />
        <path
          fill="#4285F4"
          d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
        />
        <path
          fill="#FBBC05"
          d="M10.53 28.59a14.5 14.5 0 0 1 0-9.18l-7.98-6.19a24.1 24.1 0 0 0 0 21.56l7.98-6.19z"
        />
        <path
          fill="#34A853"
          d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
        />
        <path fill="none" d="M0 0h48v48H0z" />
      </svg>

      {isLoading ? "Connecting…" : label}
    </button>
  );
}
