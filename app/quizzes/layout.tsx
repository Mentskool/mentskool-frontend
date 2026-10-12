import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diagnostic Quizzes & Practice Tests",
  description:
    "Test your conceptual strengths and identify weak areas for JEE and NEET with Mentskool diagnostic quizzes.",
  alternates: {
    canonical: "https://mentskool.com/quizzes",
  },
};

export default function QuizzesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
