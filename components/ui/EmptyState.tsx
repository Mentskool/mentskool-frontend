import React from "react";
import { Button } from "./Button";

export interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  icon?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  actionLabel,
  onAction,
  icon,
}) => {
  return (
    <div className="w-full py-16 px-6 flex flex-col items-center justify-center text-center rounded-card border border-dashed border-hairline bg-surface/60">
      {icon && <div className="mb-4 text-mint">{icon}</div>}
      <h3 className="text-base font-semibold text-white font-display mb-1.5">
        {title}
      </h3>
      <p className="text-sm text-ink-muted max-w-sm mb-6 leading-relaxed">
        {description}
      </p>
      {actionLabel && onAction && (
        <Button variant="primary" size="sm" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
};
