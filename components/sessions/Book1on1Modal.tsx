"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import { useAvailableSlots, useBookSession } from "@/hooks/useSessions";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Calendar,
  Clock,
  Video,
  X,
  CheckCircle2,
  Sparkles,
  AlertCircle,
  HelpCircle,
} from "lucide-react";

interface Book1on1ModalProps {
  isOpen: boolean;
  onClose: () => void;
  mentor: {
    user_id: string;
    slug?: string | null;
    full_name: string;
    avatar_url?: string | null;
    college?: string | null;
    exam_rank?: string | null;
    one_on_one_price?: number | string;
    one_on_one_duration_minutes?: number;
  };
}

export function Book1on1Modal({ isOpen, onClose, mentor }: Book1on1ModalProps) {
  const router = useRouter();
  const { user, isAuthenticated } = useAuthStore();
  const bookMutation = useBookSession();

  // Helper to format default date (tomorrow)
  const getTomorrowString = () => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split("T")[0];
  };

  const [selectedDate, setSelectedDate] = useState<string>(getTomorrowString());
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [agenda, setAgenda] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const mentorIdentifier = mentor.slug || mentor.user_id;
  const { data: slotsData, isLoading: slotsLoading } = useAvailableSlots(
    mentorIdentifier,
    selectedDate
  );

  const priceNum = Number(mentor.one_on_one_price || 0);
  const duration = mentor.one_on_one_duration_minutes || 30;

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!isAuthenticated) {
      router.push(`/login?redirect=/mentors/${mentorIdentifier}`);
      return;
    }

    if (!selectedTime) {
      setErrorMsg("Please select an available time slot.");
      return;
    }

    if (!agenda.trim() || agenda.trim().length < 5) {
      setErrorMsg("Please tell the mentor what you'd like help with.");
      return;
    }

    try {
      // Build ISO string in Indian Standard Time offset (+05:30)
      const scheduledAtIso = `${selectedDate}T${selectedTime}:00+05:30`;

      await bookMutation.mutateAsync({
        mentor_id: mentorIdentifier,
        scheduled_at: scheduledAtIso,
        agenda_notes: agenda.trim(),
        payment_id: priceNum > 0 ? "mock_pay_" + Date.now() : undefined,
      });

      setIsSuccess(true);
    } catch (err: any) {
      setErrorMsg(
        err.detail || err.message || "Failed to book session. Please try again."
      );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-200 border border-slate-300 shrink-0">
              {mentor.avatar_url ? (
                <img
                  src={mentor.avatar_url}
                  alt={mentor.full_name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center font-bold text-slate-600">
                  {mentor.full_name.charAt(0)}
                </div>
              )}
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                Book 1-on-1 with {mentor.full_name}
              </h3>
              <p className="text-xs text-slate-500">
                {mentor.college || mentor.exam_rank || "Verified IIT/NEET Mentor"}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSuccess ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                Session Booking Received!
              </h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                We've notified <strong>{mentor.full_name}</strong> about your request for{" "}
                <strong>
                  {selectedDate} at {selectedTime}
                </strong>
                . Once approved, the Google Meet link will be emailed to you!
              </p>
              <div className="pt-4 flex items-center justify-center gap-3">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => {
                    onClose();
                    router.push("/schedule");
                  }}
                  className="bg-slate-900 hover:bg-slate-800 text-white text-xs"
                >
                  View My Sessions
                </Button>
                <Button variant="secondary" size="md" onClick={onClose} className="text-xs">
                  Done
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Fee and Duration Banner */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-blue-50/60 border border-blue-100">
                <div className="flex items-center gap-2 text-xs font-semibold text-blue-900">
                  <Video className="w-4 h-4 text-blue-600" />
                  <span>{duration} Mins 1-on-1 Video Session</span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-blue-700 font-bold">
                    {priceNum > 0 ? `₹${priceNum.toLocaleString("en-IN")}` : "FREE Discovery"}
                  </span>
                </div>
              </div>

              {errorMsg && (
                <div className="p-3 text-xs text-rose-700 bg-rose-50 border border-rose-200 rounded-lg flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-500" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Step 1: Select Date */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  Select Date
                </label>
                <input
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  value={selectedDate}
                  onChange={(e) => {
                    setSelectedDate(e.target.value);
                    setSelectedTime("");
                  }}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  required
                />
              </div>

              {/* Step 2: Available Slots */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    Available Time Slots (IST)
                  </span>
                  {slotsLoading && <span className="text-[10px] text-slate-400">Loading slots...</span>}
                </label>

                {slotsLoading ? (
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-8 bg-slate-100 animate-pulse rounded-lg" />
                    ))}
                  </div>
                ) : slotsData?.slots && slotsData.slots.length > 0 ? (
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 max-h-32 overflow-y-auto p-1">
                    {slotsData.slots.map((slot) => {
                      const isSelected = selectedTime === slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedTime(slot)}
                          className={`py-1.5 px-2 text-xs font-medium rounded-lg border transition-all text-center ${
                            isSelected
                              ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                              : "bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:bg-blue-50/40"
                          }`}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <div className="p-3 text-center bg-slate-50 border border-dashed border-slate-200 rounded-lg text-xs text-slate-500">
                    No open slots on this day. Please pick another date.
                  </div>
                )}
              </div>

              {/* Step 3: Agenda Notes */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5 text-slate-500" />
                  What would you like help with?
                </label>
                <textarea
                  rows={3}
                  value={agenda}
                  onChange={(e) => setAgenda(e.target.value)}
                  placeholder="Share your goals, current preparation stage, physics/maths backlogs, or specific questions..."
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-none"
                  required
                />
              </div>

              {/* Step 4: Submit button */}
              <div className="pt-2">
                <Button
                  type="submit"
                  size="md"
                  variant="primary"
                  disabled={!selectedTime || !agenda.trim() || bookMutation.isPending}
                  isLoading={bookMutation.isPending}
                  className="w-full py-2.5 text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-sm flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  {priceNum > 0
                    ? `Confirm & Book — ₹${priceNum.toLocaleString("en-IN")}`
                    : "Confirm Free 1-on-1 Booking"}
                </Button>
                <p className="text-[10px] text-center text-slate-400 mt-2">
                  Instant slot confirmation • Mentor sends Google Meet link upon approval
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
