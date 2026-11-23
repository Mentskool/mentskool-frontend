import React from "react";
import BookCallDirectoryClient from "./BookCallDirectoryClient";
import { Mentor1on1Card } from "@/lib/types";

const API_BASE_URL =
  process.env.INTERNAL_API_URL ||
  process.env.NEXT_PUBLIC_API_URL ||
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  "https://mentskool-backend.onrender.com/api/v1";

async function fetchInitial1on1Mentors(): Promise<Mentor1on1Card[] | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/sessions/mentors`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    console.error("Failed to prefetch 1-on-1 mentors for ISR:", err);
    return null;
  }
}

export default async function BookCallDirectoryPage() {
  const initialMentors = await fetchInitial1on1Mentors();
  return <BookCallDirectoryClient initialMentors={initialMentors || undefined} />;
}
