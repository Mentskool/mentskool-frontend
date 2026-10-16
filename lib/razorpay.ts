"use client";

import { apiClient } from "./api-client";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export interface RazorpayOrderResponse {
  order_id: string;
  amount: number;
  currency: string;
}

export interface RazorpayVerificationResponse {
  status: string;
  message: string;
  order_id: string;
  payment_id: string;
}

export interface CheckoutOptions {
  amountInPaise: number;
  currency?: string;
  name?: string;
  description?: string;
  receipt?: string;
  notes?: Record<string, string>;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  onSuccess: (verification: RazorpayVerificationResponse) => void;
  onError: (error: string) => void;
  onDismiss?: () => void;
}

/**
 * Dynamically loads the Razorpay checkout script if not already present.
 */
export function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") {
      resolve(false);
      return;
    }

    if (window.Razorpay) {
      resolve(true);
      return;
    }

    const existingScript = document.querySelector(
      'script[src="https://checkout.razorpay.com/v1/checkout.js"]'
    );
    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(true));
      existingScript.addEventListener("error", () => resolve(false));
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

/**
 * Initiates Razorpay Standard Web Checkout.
 * 1. Creates order on backend (/api/create-order)
 * 2. Opens Razorpay modal with order_id
 * 3. Verifies signature on backend (/api/verify-payment)
 */
export async function initiateRazorpayCheckout(options: CheckoutOptions): Promise<void> {
  const {
    amountInPaise,
    currency = "INR",
    name = "Mentskool",
    description = "Mentorship & Guidance Payment",
    receipt,
    notes,
    prefill,
    onSuccess,
    onError,
    onDismiss,
  } = options;

  if (amountInPaise < 100) {
    onError("Minimum payment amount is ₹1.00 (100 paise).");
    return;
  }

  const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
  if (!keyId) {
    onError("Razorpay Key ID is not configured. Please set NEXT_PUBLIC_RAZORPAY_KEY_ID in .env.local.");
    return;
  }

  // Ensure Razorpay SDK script is loaded
  const scriptLoaded = await loadRazorpayScript();
  if (!scriptLoaded || !window.Razorpay) {
    onError("Failed to load Razorpay payment gateway. Please check your internet connection.");
    return;
  }

  // 1. Create order on backend
  let orderData: RazorpayOrderResponse;
  try {
    orderData = await apiClient.post<RazorpayOrderResponse>("/api/create-order", {
      amount: amountInPaise,
      currency,
      receipt,
      notes,
    });
  } catch (err: any) {
    const errorDetail = err?.detail || err?.message || "Failed to create order on server.";
    onError(`Order creation failed: ${errorDetail}`);
    return;
  }

  // 2. Open Razorpay Modal
  const rzpOptions = {
    key: keyId,
    amount: orderData.amount,
    currency: orderData.currency,
    name,
    description,
    order_id: orderData.order_id,
    prefill: {
      name: prefill?.name || "",
      email: prefill?.email || "",
      contact: prefill?.contact || "",
    },
    theme: {
      color: "#2563EB", // Brand primary color
    },
    modal: {
      ondismiss: () => {
        if (onDismiss) {
          onDismiss();
        } else {
          onError("Payment cancelled by user.");
        }
      },
      confirm_close: true,
      escape: true,
    },
    handler: async (response: {
      razorpay_payment_id: string;
      razorpay_order_id: string;
      razorpay_signature: string;
    }) => {
      // 3. Verify payment signature on backend
      try {
        const verifyResult = await apiClient.post<RazorpayVerificationResponse>(
          "/api/verify-payment",
          {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          }
        );

        onSuccess(verifyResult);
      } catch (verifyErr: any) {
        const detail =
          verifyErr?.detail ||
          verifyErr?.message ||
          "Payment verification failed on the server.";
        onError(`Payment verification error: ${detail}`);
      }
    },
  };

  const rzp = new window.Razorpay(rzpOptions);

  // Listen to payment.failed event
  rzp.on("payment.failed", (failedRes: any) => {
    const reason =
      failedRes?.error?.description ||
      failedRes?.error?.reason ||
      "Payment processing failed.";
    onError(`Payment failed: ${reason}`);
  });

  rzp.open();
}
