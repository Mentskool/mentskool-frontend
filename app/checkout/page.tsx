"use client";

import React, { useState } from "react";
import Link from "next/link";
import { RazorpayCheckoutButton } from "@/components/payments/RazorpayCheckoutButton";
import { RazorpayVerificationResponse } from "@/lib/razorpay";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { useAuthStore } from "@/store/authStore";
import {
  ShieldCheck,
  CreditCard,
  CheckCircle2,
  AlertCircle,
  ArrowLeft,
  Sparkles,
} from "lucide-react";

export default function CheckoutPage() {
  const { user } = useAuthStore();

  const [amountRupees, setAmountRupees] = useState<number>(100);
  const [customerName, setCustomerName] = useState<string>(
    user?.full_name || "Mentskool Student"
  );
  const [customerEmail, setCustomerEmail] = useState<string>(
    user?.email || "student@mentskool.com"
  );
  const [customerPhone, setCustomerPhone] = useState<string>("9876543210");
  const [paymentResult, setPaymentResult] = useState<RazorpayVerificationResponse | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const amountInPaise = Math.round(Number(amountRupees || 0) * 100);

  const handleSuccess = (res: RazorpayVerificationResponse) => {
    setPaymentResult(res);
    setErrorMessage(null);
  };

  const handleError = (err: string) => {
    setErrorMessage(err);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto space-y-6">
        {/* Navigation back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200">
            <Sparkles className="w-3.5 h-3.5" />
            Razorpay Standard Web Checkout
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Checkout & Payment
          </h1>
          <p className="text-sm text-slate-500">
            Secure order creation and cryptographic HMAC-SHA256 signature verification.
          </p>
        </div>

        {/* Payment Card */}
        <Card className="p-6 bg-white shadow-xl rounded-2xl border border-slate-100 space-y-6">
          {paymentResult ? (
            <div className="text-center space-y-4 py-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600 shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-1">
                <h2 className="text-2xl font-bold text-slate-900">Payment Successful!</h2>
                <p className="text-sm text-slate-500">
                  Your payment signature has been verified by the backend server.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-4 text-left text-xs font-mono space-y-2 border border-slate-200">
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Status:</span>
                  <span className="text-emerald-600 font-semibold uppercase">{paymentResult.status}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Order ID:</span>
                  <span className="text-slate-900">{paymentResult.order_id}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Payment ID:</span>
                  <span className="text-slate-900">{paymentResult.payment_id}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setPaymentResult(null)}
                className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm rounded-xl transition-all"
              >
                Make Another Payment
              </button>
            </div>
          ) : (
            <div className="space-y-5">
              {/* Amount Selection */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Payment Amount (₹ INR)
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-semibold">
                    ₹
                  </span>
                  <Input
                    type="number"
                    min={1}
                    value={amountRupees}
                    onChange={(e) => setAmountRupees(Number(e.target.value))}
                    className="pl-8 text-lg font-bold text-slate-900"
                    placeholder="Enter amount"
                  />
                </div>
                {/* Presets */}
                <div className="flex gap-2 mt-2">
                  {[1, 50, 100, 499, 999].map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => setAmountRupees(amt)}
                      className={`px-3 py-1 text-xs rounded-lg font-medium transition-colors border ${
                        amountRupees === amt
                          ? "bg-blue-50 border-blue-600 text-blue-700"
                          : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      ₹{amt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Prefill Customer Details */}
              <div className="space-y-3 pt-2 border-t border-slate-100">
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Customer Details (Optional Prefill)
                </h3>
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">
                    Full Name
                  </label>
                  <Input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Student Name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    placeholder="student@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="9876543210"
                  />
                </div>
              </div>

              {/* Error Alert */}
              {errorMessage && (
                <div className="flex items-center gap-2 p-3 text-xs text-red-600 bg-red-50 border border-red-200 rounded-xl">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Razorpay Checkout Button */}
              <div className="pt-2">
                <RazorpayCheckoutButton
                  amountInPaise={amountInPaise}
                  currency="INR"
                  name="Mentskool"
                  description={`Mentorship Payment - ₹${amountRupees}`}
                  prefill={{
                    name: customerName,
                    email: customerEmail,
                    contact: customerPhone,
                  }}
                  buttonText={`Pay ₹${amountRupees} via Razorpay`}
                  onSuccess={handleSuccess}
                  onError={handleError}
                  disabled={amountInPaise < 100}
                />
              </div>

              {/* Trust Badge */}
              <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Protected by Razorpay 256-bit SSL encryption</span>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
