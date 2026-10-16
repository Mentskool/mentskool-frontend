import React from "react";
import MentorsPageClient from "./MentorsPageClient";
import { MentorListResponse } from "@/lib/types";

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
