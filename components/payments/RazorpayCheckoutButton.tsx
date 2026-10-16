"use client";

import React, { useState } from "react";
import { initiateRazorpayCheckout, RazorpayVerificationResponse } from "@/lib/razorpay";
import { Button } from "@/components/ui/Button";
import { CreditCard, Loader2 } from "lucide-react";

export interface RazorpayCheckoutButtonProps {
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
  buttonText?: string;
  className?: string;
  disabled?: boolean;
  onSuccess?: (response: RazorpayVerificationResponse) => void;
  onError?: (error: string) => void;
  onDismiss?: () => void;
}

export function RazorpayCheckoutButton({
  amountInPaise,
  currency = "INR",
  name = "Mentskool",
  description = "Mentorship Session Checkout",
  receipt,
  notes,
  prefill,
  buttonText,
  className = "",
  disabled = false,
  onSuccess,
  onError,
  onDismiss,
}: RazorpayCheckoutButtonProps) {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const displayAmount = (amountInPaise / 100).toLocaleString("en-IN", {
    maximumFractionDigits: 2,
  });

  const handleCheckout = async () => {
    setLoading(true);
    setErrorMessage(null);

    await initiateRazorpayCheckout({
      amountInPaise,
      currency,
      name,
      description,
      receipt,
      notes,
      prefill,
      onSuccess: (res) => {
        setLoading(false);
        if (onSuccess) {
          onSuccess(res);
        }
      },
      onError: (err) => {
        setLoading(false);
        setErrorMessage(err);
        if (onError) {
          onError(err);
        }
      },
      onDismiss: () => {
        setLoading(false);
        if (onDismiss) {
          onDismiss();
        }
      },
    });
  };

  return (
    <div className="w-full space-y-2">
      <Button
        type="button"
        onClick={handleCheckout}
        disabled={disabled || loading}
        className={`w-full flex items-center justify-center gap-2 py-3 px-4 font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-md transition-all ${className}`}
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin text-white" />
            <span>Processing Checkout...</span>
          </>
        ) : (
          <>
            <CreditCard className="w-4 h-4 text-white" />
            <span>{buttonText || `Pay ₹${displayAmount} via Razorpay`}</span>
          </>
        )}
      </Button>

      {errorMessage && (
        <div className="p-3 text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg animate-in fade-in">
          {errorMessage}
        </div>
      )}
    </div>
  );
}
