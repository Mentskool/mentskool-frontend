import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cohort | Mentskool",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CohortLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
