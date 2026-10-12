import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find Mentors — Browse Verified IIT & AIIMS Rankers",
  description:
    "Browse verified mentors from IIT Bombay, IIT Delhi, AIIMS New Delhi and top medical and engineering colleges. Filter by exam, branch, and rank.",
  alternates: {
    canonical: "https://mentskool.com/mentors",
  },
};

export default function MentorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
