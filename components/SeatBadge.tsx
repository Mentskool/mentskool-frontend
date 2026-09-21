import React from "react";
import { Badge } from "./ui/Badge";

export interface SeatBadgeProps {
  availableSeats: number;
  seatLimit: number;
  className?: string;
}

export const SeatBadge: React.FC<SeatBadgeProps> = ({
  availableSeats,
  seatLimit,
  className = "",
}) => {
  if (availableSeats <= 0) {
    return (
      <Badge variant="REJECTED" className={className}>
        Cohort Full
      </Badge>
    );
  }

  // Low capacity threshold: <= 2 seats or <= 15% of capacity
  const isLowCapacity =
    availableSeats <= 2 || availableSeats / Math.max(1, seatLimit) <= 0.15;

  return (
    <Badge
      variant={isLowCapacity ? "AMBER" : "MOSS"}
      className={`font-medium ${className}`}
    >
      {availableSeats} of {seatLimit} seats left
    </Badge>
  );
};
