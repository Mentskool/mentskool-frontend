import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Become a Mentor — Join Mentskool",
  description:
    "Apply to become a mentor on Mentskool. Guide the next generation of JEE and NEET aspirants with 1-on-1 cohort mentorship.",
  alternates: {
    canonical: "https://mentskool.com/mentor/onboarding",
  },
};

export default function MentorOnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
