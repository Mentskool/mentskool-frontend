import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book 1:1 Video Mentorship Call | IIT & AIIMS Rankers | Mentskool",
  description:
    "Schedule a direct 1-on-1 video call on Google Meet with top rankers from IIT Bombay, Delhi, AIIMS New Delhi. Get personalized exam strategy and mock test reviews.",
  alternates: {
    canonical: "https://mentskool.com/book-call",
  },
};

export default function BookCallLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
