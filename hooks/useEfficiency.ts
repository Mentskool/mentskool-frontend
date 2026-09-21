import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";
import { StudentEfficiencyResponse } from "@/lib/types";

export function useStudentEfficiency(studentId?: string) {
  return useQuery({
    queryKey: ["efficiency", studentId],
    queryFn: () =>
      apiClient<StudentEfficiencyResponse>(`/students/${studentId}/efficiency`),
    enabled: Boolean(studentId),
  });
}
