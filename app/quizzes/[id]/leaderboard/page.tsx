"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useQuiz, useQuizLeaderboard } from "@/hooks/useQuizzes";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ArrowLeft, Award, Medal, Trophy, User } from "lucide-react";

export default function QuizLeaderboardPage() {
  const params = useParams();
  const quizId = params.id as string;

  const { data: quiz } = useQuiz(quizId);
  const { data: leaderboard, isLoading, isError } = useQuizLeaderboard(quizId);

  return (
    <div className="max-w-4xl mx-auto py-8 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-mist">
        <div className="flex items-center gap-3">
          <Link href={`/quizzes/${quizId}`}>
            <Button variant="secondary" size="sm" className="rounded-xl">
              <ArrowLeft className="w-4 h-4 mr-1.5" />
              Back to Quiz
            </Button>
          </Link>
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-700 uppercase tracking-wider">
              <Trophy className="w-3.5 h-3.5 text-amber-500" />
              Cohort Standings
            </div>
            <h1 className="text-xl sm:text-2xl font-bold font-display text-ink">
              {quiz?.title || "Quiz"} — Leaderboard
            </h1>
          </div>
        </div>

        <Link href="/quizzes">
          <Button variant="secondary" size="sm" className="rounded-xl">
            All Quizzes
          </Button>
        </Link>
      </div>

      {/* Explanatory Banner */}
      <div className="p-4 bg-gradient-to-r from-amber-50/60 via-sky-50/40 to-white border border-amber-200/70 rounded-2xl flex items-center justify-between gap-4">
        <div className="space-y-0.5">
          <div className="text-xs font-bold text-amber-950 flex items-center gap-1.5">
            <Award className="w-4 h-4 text-amber-600" />
            Ranking Standard: Total Score with Early Submission Tiebreak
          </div>
          <p className="text-xs text-ink-muted">
            Ranked by score in descending order. Ties are broken strictly by earliest submission time.
          </p>
        </div>
      </div>

      {isLoading ? (
        <div className="py-16 text-center text-ink-faint animate-pulse">
          Loading leaderboard rankings...
        </div>
      ) : isError || !leaderboard ? (
        <div className="p-8 text-center bg-white border border-mist rounded-2xl text-ink-muted text-sm">
          Unable to load leaderboard data.
        </div>
      ) : leaderboard.length === 0 ? (
        <div className="p-12 text-center bg-white border border-mist rounded-2xl space-y-2">
          <Trophy className="w-8 h-8 text-ink-faint mx-auto" />
          <h3 className="text-sm font-bold text-ink">No Submitted Attempts Yet</h3>
          <p className="text-xs text-ink-muted">
            Be the first student in your cohort to attempt this quiz and claim the top rank!
          </p>
        </div>
      ) : (
        <Card variant="default" className="p-0 bg-white border-mist shadow-soft overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50/80 border-b border-mist text-ink-muted font-bold uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="py-3.5 px-4 w-16 text-center">Rank</th>
                  <th className="py-3.5 px-4">Student</th>
                  <th className="py-3.5 px-4 text-right">Score</th>
                  <th className="py-3.5 px-4 text-right">Submitted At</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-mist text-ink">
                {leaderboard.map((entry) => {
                  const isTop1 = entry.rank === 1;
                  const isTop2 = entry.rank === 2;
                  const isTop3 = entry.rank === 3;

                  return (
                    <tr
                      key={entry.student_id}
                      className={`hover:bg-slate-50/70 transition-colors ${
                        isTop1 ? "bg-amber-50/20" : ""
                      }`}
                    >
                      <td className="py-3.5 px-4 text-center font-bold">
                        {isTop1 ? (
                          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-100 text-amber-800 text-xs shadow-sm font-black">
                            🥇 1
                          </span>
                        ) : isTop2 ? (
                          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-slate-200 text-slate-800 text-xs font-bold">
                            🥈 2
                          </span>
                        ) : isTop3 ? (
                          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-700/10 text-amber-900 text-xs font-bold">
                            🥉 3
                          </span>
                        ) : (
                          <span className="text-ink-muted">#{entry.rank}</span>
                        )}
                      </td>

                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-2.5">
                          {entry.avatar_url ? (
                            <img
                              src={entry.avatar_url}
                              alt={entry.student_name}
                              className="w-7 h-7 rounded-full object-cover border border-mist"
                            />
                          ) : (
                            <div className="w-7 h-7 rounded-full bg-sky-100 text-sky-800 font-bold flex items-center justify-center text-xs">
                              {entry.student_name[0]?.toUpperCase() || "S"}
                            </div>
                          )}
                          <span className="font-semibold text-ink">{entry.student_name}</span>
                        </div>
                      </td>

                      <td className="py-3.5 px-4 text-right font-black text-sm font-display text-sky-950">
                        {entry.total_score}
                      </td>

                      <td className="py-3.5 px-4 text-right text-[11px] text-ink-muted">
                        {new Date(entry.submitted_at).toLocaleString([], {
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card>
      )}
    </div>
  );
}
