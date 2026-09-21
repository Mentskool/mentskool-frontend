import React, { useState } from "react";
import { Task } from "@/lib/types";
import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";

export interface TaskCardProps {
  task: Task;
  onMarkComplete?: (taskId: string) => Promise<void> | void;
  onReview?: (
    taskId: string,
    decision: "APPROVED" | "REJECTED",
    mentorNote?: string
  ) => Promise<void> | void;
  isStudentView?: boolean;
  isActionLoading?: boolean;
}

export const TaskCard: React.FC<TaskCardProps> = ({
  task,
  onMarkComplete,
  onReview,
  isStudentView = false,
  isActionLoading = false,
}) => {
  const [showNoteInput, setShowNoteInput] = useState(false);
  const [note, setNote] = useState("");
  const [selectedDecision, setSelectedDecision] = useState<
    "APPROVED" | "REJECTED" | null
  >(null);

  const handleReviewSubmit = (decision: "APPROVED" | "REJECTED") => {
    if (onReview) {
      onReview(task.id, decision, note.trim() || undefined);
    }
  };

  return (
    <Card className="flex flex-col justify-between gap-4 bg-white hover:border-[#D4D7DE] transition-all">
      <div className="flex flex-col gap-2">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-base font-semibold font-display text-ink leading-snug">
            {task.title}
          </h3>
          <div className="flex items-center gap-2 shrink-0">
            {task.is_late && <Badge variant="LATE">Late Submission</Badge>}
            <Badge variant={task.status}>{task.status.replace("_", " ")}</Badge>
          </div>
        </div>

        <p className="text-sm text-ink-muted whitespace-pre-wrap leading-relaxed">
          {task.description}
        </p>

        <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-ink-faint pt-1">
          <span>
            Assigned week:{" "}
            <span className="text-ink-muted font-medium">
              {task.week_start} to {task.week_end}
            </span>
          </span>
          {isStudentView ? (
            <span>
              Mentor:{" "}
              <span className="text-ink-muted font-medium">
                {task.mentor_name}
              </span>
            </span>
          ) : (
            <span>
              Student:{" "}
              <span className="text-ink-muted font-medium">
                {task.student_name}
              </span>
            </span>
          )}
        </div>

        {task.mentor_note && (
          <div className="mt-2 p-3 bg-[#F7F8FA] rounded-control border border-mist text-xs text-ink-muted">
            <span className="font-semibold text-ink">Mentor Feedback: </span>
            {task.mentor_note}
          </div>
        )}
      </div>

      {/* Student Actions */}
      {isStudentView && task.status === "ASSIGNED" && onMarkComplete && (
        <div className="pt-3 border-t border-mist flex justify-end">
          <Button
            size="sm"
            variant="primary"
            isLoading={isActionLoading}
            onClick={() => onMarkComplete(task.id)}
          >
            Mark Complete
          </Button>
        </div>
      )}

      {/* Mentor Review Actions */}
      {!isStudentView &&
        task.status === "MARKED_COMPLETE" &&
        onReview && (
          <div className="pt-3 border-t border-mist flex flex-col gap-2.5">
            {showNoteInput ? (
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  placeholder="Optional mentor feedback note..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full text-xs px-3 py-1.5 rounded-control border border-mist focus:outline-none focus:border-brand"
                />
                <div className="flex justify-end gap-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setShowNoteInput(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    size="sm"
                    variant="subtle"
                    isLoading={isActionLoading}
                    onClick={() => handleReviewSubmit("REJECTED")}
                  >
                    Reject Task
                  </Button>
                  <Button
                    size="sm"
                    variant="moss"
                    isLoading={isActionLoading}
                    onClick={() => handleReviewSubmit("APPROVED")}
                  >
                    Approve Task
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setShowNoteInput(true)}
                  className="text-xs text-ink-faint hover:text-ink transition-colors"
                >
                  + Add note
                </button>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="subtle"
                    isLoading={isActionLoading}
                    onClick={() => handleReviewSubmit("REJECTED")}
                  >
                    Reject
                  </Button>
                  <Button
                    size="sm"
                    variant="moss"
                    isLoading={isActionLoading}
                    onClick={() => handleReviewSubmit("APPROVED")}
                  >
                    Approve
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}
    </Card>
  );
};
