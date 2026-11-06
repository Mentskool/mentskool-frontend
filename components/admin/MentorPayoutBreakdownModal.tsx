"use client";

import React, { useState } from "react";
import {
  X,
  DollarSign,
  Users,
  Video,
  Copy,
  Check,
  Building,
  CreditCard,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AdminMentorItem } from "@/lib/types";

interface MentorPayoutBreakdownModalProps {
  mentor: AdminMentorItem | null;
  onClose: () => void;
}

export const MentorPayoutBreakdownModal: React.FC<MentorPayoutBreakdownModalProps> = ({
  mentor,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);
  const [copiedUpi, setCopiedUpi] = useState(false);

  if (!mentor) return null;

  const cohortGross = Number(mentor.total_monthly_revenue || 0);
  const cohortPayout = Number(mentor.cohort_payout_due || cohortGross * 0.85);
  const cohortFee = cohortGross - cohortPayout;

  const oneOnOneGross = Number(mentor.one_on_one_total_revenue || 0);
  const oneOnOnePayout = Number(mentor.one_on_one_payout_due || oneOnOneGross * 0.85);
  const oneOnOneFee = oneOnOneGross - oneOnOnePayout;

  const totalGross = cohortGross + oneOnOneGross;
  const finalPayout = Number(mentor.payout_due || cohortPayout + oneOnOnePayout);
  const totalPlatformProfit = totalGross - finalPayout;

  const handleCopySummary = () => {
    const text = `Mentskool Mentor Payout Summary:
Mentor: ${mentor.full_name} (${mentor.email})
UPI: ${mentor.payout_upi_id || "N/A"}
----------------------------------------
1. Cohort Subscriptions:
   - Active Students: ${mentor.active_students_count}
   - Cohort Rate: ₹${Number(mentor.price_per_month)}/mo
   - Cohort Gross: ₹${cohortGross.toLocaleString()}
   - Mentor Cohort Share (85%): ₹${cohortPayout.toLocaleString()}

2. 1-on-1 Call Sessions:
   - Bookings: ${mentor.one_on_one_bookings_count || 0} (${mentor.one_on_one_completed_count || 0} completed)
   - 1:1 Gross Revenue: ₹${oneOnOneGross.toLocaleString()}
   - Mentor 1:1 Share (85%): ₹${oneOnOnePayout.toLocaleString()}
----------------------------------------
FINAL AMOUNT TO PAY MENTOR: ₹${finalPayout.toLocaleString()}
Platform Commission (15%): ₹${totalPlatformProfit.toLocaleString()}
`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyUpiOnly = () => {
    if (!mentor.payout_upi_id) return;
    navigator.clipboard.writeText(mentor.payout_upi_id);
    setCopiedUpi(true);
    setTimeout(() => setCopiedUpi(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-xl w-full border border-slate-200 shadow-2xl overflow-hidden animate-scaleUp">
        {/* Header */}
        <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-sm">
              <DollarSign className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-display text-slate-900">
                Itemized Payout Settlement
              </h3>
              <p className="text-xs text-slate-500">
                {mentor.full_name} • {mentor.email}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Final Payout Highlight Card */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 text-white shadow-md relative overflow-hidden">
            <div className="absolute right-0 top-0 translate-x-4 -translate-y-4 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none" />
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-100 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Final Total Payable to Mentor
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold mt-1">
                  ₹{finalPayout.toLocaleString()}
                </div>
              </div>
              <div className="text-right">
                <span className="text-[11px] text-emerald-100 block">Platform Fee Retained (15%)</span>
                <span className="text-lg font-bold text-white">
                  ₹{totalPlatformProfit.toLocaleString()}
                </span>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-white/20 text-xs text-emerald-100 flex items-center justify-between">
              <span>Cohort Payout: ₹{cohortPayout.toLocaleString()}</span>
              <span>+</span>
              <span>1:1 Sessions Payout: ₹{oneOnOnePayout.toLocaleString()}</span>
            </div>
          </div>

          {/* Breakdown Section: 2 Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Stream 1: Cohort Subscriptions */}
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-3">
              <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                <Users className="w-4 h-4" />
                <span>1. Cohort Subscriptions</span>
              </div>
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Active Students:</span>
                  <span className="font-semibold text-slate-900">
                    {mentor.active_students_count} / {mentor.seat_limit}
                  </span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Monthly Rate:</span>
                  <span className="font-semibold text-slate-900">
                    ₹{Number(mentor.price_per_month).toLocaleString()}/mo
                  </span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Gross Cohort Revenue:</span>
                  <span className="font-semibold text-slate-900">
                    ₹{cohortGross.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-slate-500 text-[11px]">
                  <span>Platform Fee (15%):</span>
                  <span>- ₹{cohortFee.toLocaleString()}</span>
                </div>
                <div className="pt-2 border-t border-slate-200 flex justify-between font-bold text-slate-900">
                  <span className="text-indigo-700">Cohort Payout (85%):</span>
                  <span className="text-indigo-700">₹{cohortPayout.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Stream 2: 1-on-1 Call Sessions */}
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-3">
              <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                <Video className="w-4 h-4" />
                <span>2. Book 1:1 Calls</span>
              </div>
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Bookings Count:</span>
                  <span className="font-semibold text-slate-900">
                    {mentor.one_on_one_bookings_count || 0} calls ({mentor.one_on_one_completed_count || 0} completed)
                  </span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Rate per 30m:</span>
                  <span className="font-semibold text-slate-900">
                    ₹{Number(mentor.one_on_one_price || 0).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Gross 1:1 Revenue:</span>
                  <span className="font-semibold text-slate-900">
                    ₹{oneOnOneGross.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-slate-500 text-[11px]">
                  <span>Platform Fee (15%):</span>
                  <span>- ₹{oneOnOneFee.toLocaleString()}</span>
                </div>
                <div className="pt-2 border-t border-slate-200 flex justify-between font-bold text-slate-900">
                  <span className="text-blue-700">1:1 Payout (85%):</span>
                  <span className="text-blue-700">₹{oneOnOnePayout.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Payout Banking / UPI Details */}
          <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/40 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-1.5">
              <CreditCard className="w-4 h-4 text-emerald-700" />
              Mentor Payout Destination
            </h4>

            {mentor.payout_upi_id ? (
              <div className="flex items-center justify-between p-3 rounded-lg bg-white border border-emerald-200">
                <div>
                  <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider block">
                    Verified UPI ID
                  </span>
                  <span className="font-mono text-sm font-bold text-slate-900">
                    {mentor.payout_upi_id}
                  </span>
                </div>
                <Button
                  size="sm"
                  variant="secondary"
                  className="text-xs flex items-center gap-1 text-emerald-700 border-emerald-200 hover:bg-emerald-50"
                  onClick={handleCopyUpiOnly}
                >
                  {copiedUpi ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy UPI</span>
                    </>
                  )}
                </Button>
              </div>
            ) : mentor.payout_account_number ? (
              <div className="p-3 rounded-lg bg-white border border-emerald-200 text-xs space-y-1">
                <div className="flex items-center gap-1 font-semibold text-slate-700">
                  <Building className="w-3.5 h-3.5 text-slate-400" />
                  <span>Bank Account Transfer</span>
                </div>
                <div className="text-slate-600">
                  Account Name: <span className="font-medium text-slate-900">{mentor.payout_account_name || "N/A"}</span>
                </div>
                <div className="text-slate-600">
                  Account Number: <span className="font-mono font-medium text-slate-900">{mentor.payout_account_number}</span>
                </div>
                <div className="text-slate-600">
                  IFSC Code: <span className="font-mono font-medium text-slate-900">{mentor.payout_ifsc || "N/A"}</span>
                </div>
              </div>
            ) : (
              <div className="text-xs text-amber-700 italic bg-amber-50 p-2.5 rounded-lg border border-amber-200">
                ⚠️ No payout account or UPI has been submitted by this mentor yet.
              </div>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
          <Button
            variant="secondary"
            size="sm"
            onClick={handleCopySummary}
            className="text-xs flex items-center gap-1.5"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Copied Ledger!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Full Payout Ledger</span>
              </>
            )}
          </Button>

          <Button variant="primary" size="sm" onClick={onClose} className="text-xs">
            Done
          </Button>
        </div>
      </div>
    </div>
  );
};
