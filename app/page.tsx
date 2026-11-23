import type { Metadata } from "next";
import HomePageClient from "@/components/home/HomePageClient";

export const metadata: Metadata = {
  title: "Mentskool — #1 Personal 1:1 JEE & NEET Mentorship by IIT & AIIMS Rankers",
  description:
    "Guided by rankers from top IITs & AIIMS. 1:1 mentorship, weekly task accountability, and verified student efficiency scores for JEE & NEET aspirants.",
  alternates: {
    canonical: "https://mentskool.com",
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
