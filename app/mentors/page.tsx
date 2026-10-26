import React from "react";
import type { Metadata } from "next";
import MentorsPageClient from "./MentorsPageClient";
import { MentorListResponse } from "@/lib/types";

export const metadata: Metadata = {
  title: "Find Your 1:1 JEE & NEET Mentor | Top IIT & AIIMS Rankers | Mentskool",
  description:
    "Connect 1-on-1 with verified rankers from IIT Bombay, IIT Delhi, AIIMS New Delhi and more. Personalized task tracking, weekly strategy calls, and mock exam analysis.",
  alternates: {
    canonical: "https://mentskool.com/mentors",
  },
  openGraph: {
    title: "Find Your 1:1 JEE & NEET Mentor | Mentskool",
    description:
      "Connect 1-on-1 with verified rankers from IIT Bombay, IIT Delhi, AIIMS New Delhi and more. Switch mentors anytime.",
    url: "https://mentskool.com/mentors",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Mentskool Mentors",
      },
    ],
  },
};

const API_BASE_URL =
  process.env.INTERNAL_API_URL ||
  process.env.NEXT_PUBLIC_API_URL ||
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  "https://mentskool-backend.onrender.com";

async function fetchInitialMentors(): Promise<MentorListResponse | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/mentors?limit=24&offset=0`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    console.error("Failed to prefetch mentors for ISR:", err);
    return null;
  }
}

export default async function MentorsPage() {
  const initialData = await fetchInitialMentors();
  return <MentorsPageClient initialData={initialData || undefined} />;
}
