"use client";

import React, { useEffect, useState } from "react";
import { SessionBooking } from "@/lib/types";
import { useAvailableSlots, useRescheduleSession } from "@/hooks/useSessions";
import { getUserFriendlyError } from "@/lib/error-utils";
import { Button } from "@/components/ui/Button";
import { Calendar, Clock, X, Loader2 } from "lucide-react";

interface Reschedule1on1ModalProps {
  booking: SessionBooking;
  role: "mentor" | "student";
  onClose: () => void;
  onSuccess?: () => void;
}

export function Reschedule1on1Modal({
  booking,
  role,
  onClose,
  onSuccess,
}: Reschedule1on1ModalProps) {
  const todayStr = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState<string>(todayStr);
  const [selectedSlot, setSelectedSlot] = useState<string>("");
  const [reason, setReason] = useState<string>("");
  const [meetingLink, setMeetingLink] = useState<string>(booking.meeting_link || "");
  const [error, setError] = useState<string>("");

  const { data: slotsData, isLoading: slotsLoading } = useAvailableSlots(
    booking.mentor_id,
    selectedDate
  );
  const rescheduleMutation = useRescheduleSession();

  useEffect(() => {
    setSelectedSlot("");
  }, [selectedDate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!selectedDate || !selectedSlot) {
      setError("Please select a new date and time slot.");
      return;
    }

    // Build IST ISO timestamp matching booking flow (+05:30)
    const isoTimestamp = `${selectedDate}T${selectedSlot}:00+05:30`;

    try {
      await rescheduleMutation.mutateAsync({
        bookingId: booking.id,
        scheduled_at: isoTimestamp,
        reason: reason.trim() || undefined,
        meeting_link: role === "mentor" && meetingLink.trim() ? meetingLink.trim() : undefined,
      });
      onSuccess?.();
      onClose();
    } catch (err) {
      setError(getUserFriendlyError(err));
    }
  };

  const otherName =
    role === "mentor"
      ? booking.student_name || "the student"
      : booking.mentor_name || "your mentor";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4">
      <div className="bg-white w-full max-w-md rounded-2xl border border-slate-200 shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-900">Reschedule 1:1 Session</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Pick a new slot for your call with {otherName}.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          {role === "student" && booking.status === "CONFIRMED" && (
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800">
              Rescheduling a confirmed call will send the new time to your mentor for confirmation.
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-600" />
              Select New Date
            </label>
            <input
              type="date"
              min={todayStr}
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-blue-600" />
              Available Time Slots (IST)
            </label>
            {slotsLoading ? (
              <div className="py-4 flex items-center justify-center text-xs text-slate-500 gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                Loading slots...
              </div>
            ) : !slotsData?.slots || slotsData.slots.length === 0 ? (
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-500 text-center">
                No available slots on this date. Try another date.
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-2 max-h-40 overflow-y-auto pr-1">
                {slotsData.slots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedSlot(slot)}
                    className={`py-2 px-2.5 text-xs font-semibold rounded-xl border transition-all ${
                      selectedSlot === slot
                        ? "bg-blue-600 text-white border-blue-600 shadow-xs"
                        : "bg-white text-slate-700 border-slate-200 hover:border-blue-400 hover:bg-blue-50/50"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            )}
          </div>

          {role === "mentor" && (
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Meeting Link (Optional)
              </label>
              <input
                type="url"
                value={meetingLink}
                onChange={(e) => setMeetingLink(e.target.value)}
                placeholder="https://meet.google.com/..."
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Reason (Optional)
            </label>
            <textarea
              rows={2}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="e.g., Something urgent came up, moving to a better time"
              className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          {error && (
            <div className="p-2.5 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700">
              {error}
            </div>
          )}

          <div className="flex items-center justify-end gap-2 pt-2">
            <Button type="button" variant="secondary" size="sm" onClick={onClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
              size="sm"
              disabled={rescheduleMutation.isPending || !selectedSlot}
            >
              {rescheduleMutation.isPending ? "Rescheduling..." : "Confirm New Time"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
