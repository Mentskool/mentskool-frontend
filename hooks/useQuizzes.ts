import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";
import { useAuthStore } from "@/store/authStore";
import {
  LeaderboardEntry,
  QuestionType,
  Quiz,
  QuizDetail,
  QuizOption,
  QuizQuestion,
  QuizStatus,
  QuizSubmitResponse,
  StudentCohortRankItem,
  CohortQuizSummaryResponse,
  StudentQuizAttemptItem,
  StudentQuizItem,
  StudentQuizRanking,
} from "@/lib/types";

// ==============================================================================
// QUERIES
// ==============================================================================

export function useStudentQuizzes() {
  return useQuery<StudentQuizItem[]>({
    queryKey: ["quizzes", "me"],
    queryFn: () => apiClient.get<StudentQuizItem[]>("/quizzes/me"),
  });
}

export function useQuiz(quizId: string | undefined) {
  const { isAuthenticated, isLoading: authLoading } = useAuthStore();
  return useQuery<QuizDetail>({
    queryKey: ["quiz", quizId],
    queryFn: () => apiClient.get<QuizDetail>(`/quizzes/${quizId}`),
    enabled: !!quizId && !authLoading && isAuthenticated,
    retry: (failureCount, error: any) => {
      if (error?.status === 401 || error?.status === 403 || error?.status === 404) return false;
      return failureCount < 2;
    },
  });
}

export function useMentorQuizzes(mentorId: string | undefined) {
  return useQuery<{ items: Quiz[]; total: number }>({
    queryKey: ["quizzes", "mentor", mentorId],
    queryFn: () => apiClient.get<{ items: Quiz[]; total: number }>(`/quizzes/mentor/${mentorId}`),
    enabled: !!mentorId,
  });
}

export function useQuizLeaderboard(quizId: string | undefined) {
  return useQuery<LeaderboardEntry[]>({
    queryKey: ["quizzes", quizId, "leaderboard"],
    queryFn: () => apiClient.get<LeaderboardEntry[]>(`/quizzes/${quizId}/leaderboard`),
    enabled: !!quizId,
  });
}

export function useStudentQuizRanking(studentId: string | undefined) {
  return useQuery<StudentQuizRanking>({
    queryKey: ["student", studentId, "quiz-ranking"],
    queryFn: () => apiClient.get<StudentQuizRanking>(`/students/${studentId}/quiz-ranking`),
    enabled: !!studentId,
  });
}

export function useStudentQuizAttempts(studentId: string | undefined) {
  return useQuery<StudentQuizAttemptItem[]>({
    queryKey: ["student", studentId, "quiz-attempts"],
    queryFn: () => apiClient.get<StudentQuizAttemptItem[]>(`/students/${studentId}/quiz-attempts`),
    enabled: !!studentId,
  });
}

export function useCohortQuizSummary(mentorId: string | undefined) {
  return useQuery<CohortQuizSummaryResponse>({
    queryKey: ["mentor", mentorId, "cohort-quiz-summary"],
    queryFn: () => apiClient.get<CohortQuizSummaryResponse>(`/mentors/${mentorId}/cohort-quiz-summary`),
    enabled: !!mentorId,
  });
}

// ==============================================================================
// MUTATIONS
// ==============================================================================

export function useCreateQuiz() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: {
      title: string;
      description?: string;
      has_deadline?: boolean;
      deadline_at?: string | null;
      live_at?: string | null;
      default_positive_marks?: number;
      default_negative_marks?: number;
      duration_minutes?: number | null;
    }) => apiClient.post<Quiz>("/quizzes", payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["quizzes"] });
    },
  });
}

export function useUpdateQuiz() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ quizId, payload }: { quizId: string; payload: Partial<Quiz> }) =>
      apiClient.patch<Quiz>(`/quizzes/${quizId}`, payload),
    onSuccess: (_, vars) => {
      queryClient.invalidateQueries({ queryKey: ["quiz", vars.quizId] });
      queryClient.invalidateQueries({ queryKey: ["quizzes"] });
    },
  });
}

export function useDeleteQuiz() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (quizId: string) => apiClient.delete(`/quizzes/${quizId}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["quizzes"] });
    },
  });
}

export function usePublishQuiz() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (quizId: string) => apiClient.post<Quiz>(`/quizzes/${quizId}/publish`),
    onSuccess: (_, quizId) => {
      queryClient.invalidateQueries({ queryKey: ["quiz", quizId] });
      queryClient.invalidateQueries({ queryKey: ["quizzes"] });
    },
  });
}

export function useAddQuestion() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      quizId,
      payload,
    }: {
      quizId: string;
      payload: {
        question_type: QuestionType;
        question_text: string;
        positive_marks?: number;
        negative_marks?: number;
        nat_answer?: number | null;
        nat_tolerance?: number | null;
        order_index?: number;
        options?: Array<{
          option_text: string;
          is_correct: boolean;
          order_index?: number;
        }>;
      };
    }) => apiClient.post<QuizQuestion>(`/quizzes/${quizId}/questions`, payload),
    onSuccess: (_, vars) => {
      queryClient.invalidateQueries({ queryKey: ["quiz", vars.quizId] });
      queryClient.invalidateQueries({ queryKey: ["quizzes"] });
    },
  });
}

export function useUpdateQuestion() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      quizId,
      questionId,
      payload,
    }: {
      quizId: string;
      questionId: string;
      payload: Partial<QuizQuestion>;
    }) => apiClient.patch<QuizQuestion>(`/quizzes/${quizId}/questions/${questionId}`, payload),
    onSuccess: (_, vars) => {
      queryClient.invalidateQueries({ queryKey: ["quiz", vars.quizId] });
    },
  });
}

export function useDeleteQuestion() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ quizId, questionId }: { quizId: string; questionId: string }) =>
      apiClient.delete(`/quizzes/${quizId}/questions/${questionId}`),
    onSuccess: (_, vars) => {
      queryClient.invalidateQueries({ queryKey: ["quiz", vars.quizId] });
      queryClient.invalidateQueries({ queryKey: ["quizzes"] });
    },
  });
}

export function useBulkImportQuestions() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      quizId,
      csvText,
      file,
    }: {
      quizId: string;
      csvText?: string;
      file?: File;
    }) => {
      const formData = new FormData();
      if (file) {
        formData.append("file", file);
      } else if (csvText) {
        formData.append("csv_text", csvText);
      }
      return apiClient<any>(`/quizzes/${quizId}/questions/bulk-import`, {
        method: "POST",
        body: formData,
      });
    },
    onSuccess: (_, vars) => {
      queryClient.invalidateQueries({ queryKey: ["quiz", vars.quizId] });
      queryClient.invalidateQueries({ queryKey: ["quizzes"] });
    },
  });
}

export function useOcrCaptureQuestion() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      quizId,
      file,
      questionType,
      overrideText,
    }: {
      quizId: string;
      file: File;
      questionType: QuestionType;
      overrideText?: string;
    }) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("question_type", questionType);
      if (overrideText) {
        formData.append("override_text", overrideText);
      }
      return apiClient<any>(`/quizzes/${quizId}/questions/ocr-capture`, {
        method: "POST",
        body: formData,
      });
    },
    onSuccess: (_, vars) => {
      queryClient.invalidateQueries({ queryKey: ["quiz", vars.quizId] });
      queryClient.invalidateQueries({ queryKey: ["quizzes"] });
    },
  });
}

export function useStartQuizAttempt() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (quizId: string) =>
      apiClient.post<{ id: string; quiz_id: string; started_at: string; status: string }>(
        `/quizzes/${quizId}/attempts`
      ),
    onSuccess: (_, quizId) => {
      queryClient.invalidateQueries({ queryKey: ["quiz", quizId] });
      queryClient.invalidateQueries({ queryKey: ["quizzes", "me"] });
    },
  });
}

export function useSubmitQuizAttempt() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      quizId,
      attemptId,
      answers,
    }: {
      quizId: string;
      attemptId: string;
      answers: Array<{
        question_id: string;
        selected_option_ids?: string[] | null;
        nat_answer_given?: number | null;
      }>;
    }) =>
      apiClient.post<QuizSubmitResponse>(`/quizzes/${quizId}/attempts/${attemptId}/submit`, {
        answers,
      }),
    onSuccess: (_, vars) => {
      queryClient.invalidateQueries({ queryKey: ["quiz", vars.quizId] });
      queryClient.invalidateQueries({ queryKey: ["quizzes"] });
      queryClient.invalidateQueries({ queryKey: ["student"] });
    },
  });
}
