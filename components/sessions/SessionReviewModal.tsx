"use client";

import React, { useState } from "react";
import { useSubmitSessionReview } from "@/hooks/useSessions";
import { Button } from "@/components/ui/Button";
import { Star, X, CheckCircle2, AlertCircle } from "lucide-react";
import { SessionBooking } from "@/lib/types";

interface SessionReviewModalProps {
  booking: SessionBooking | null;
  onClose: () => void;
  onSuccess: () => void;
}

export function SessionReviewModal({
  booking,
  onClose,
  onSuccess,
}: SessionReviewModalProps) {
  const [rating, setRating] = useState<number>(5);
  const [comment, setComment] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const reviewMutation = useSubmitSessionReview();

  if (!booking) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!comment.trim() || comment.trim().length < 3) {
      setErrorMsg("Please write a few words about your 1-on-1 session experience.");
      return;
    }

    try {
      await reviewMutation.mutateAsync({
        bookingId: booking.id,
        rating,
        comment: comment.trim(),
      });
      onSuccess();
      onClose();
    } catch (err: any) {
      setErrorMsg(err.detail || "Failed to submit review.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-100 p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-slate-900 text-base">Rate Your 1-on-1 Call</h3>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-slate-500">
          How was your session with <strong>{booking.mentor_name}</strong>? Your review helps other students find the right mentor.
        </p>

        {errorMsg && (
          <div className="p-3 text-xs text-rose-700 bg-rose-50 border border-rose-200 rounded-lg flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2">
              Overall Rating
            </label>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className="p-1 hover:scale-110 transition-transform"
                >
                  <Star
                    className={`w-7 h-7 ${
                      star <= rating
                        ? "text-amber-400 fill-amber-400"
                        : "text-slate-200"
                    }`}
                  />
                </button>
              ))}
              <span className="text-xs font-bold text-slate-700 ml-2">{rating} of 5</span>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Your Feedback & Experience
            </label>
            <textarea
              rows={3}
              required
              placeholder="e.g. Cleared my doubts on mechanics and gave me a crystal clear roadmap for NEET revision..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-none"
            />
          </div>

          <div className="flex items-center justify-end gap-2 pt-2">
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={onClose}
              className="text-xs"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
              size="sm"
              isLoading={reviewMutation.isPending}
              className="text-xs bg-blue-600 hover:bg-blue-700 text-white"
            >
              Submit Review
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
