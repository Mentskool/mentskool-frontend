import React from "react";
import type { Metadata } from "next";
import MentorDetailClient from "./MentorDetailClient";
import { MentorProfile, CATEGORY_LABELS } from "@/lib/types";

interface PageProps {
  params: {
    id: string;
  };
}

const API_BASE_URL =
  process.env.INTERNAL_API_URL ||
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:8000/api/v1";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://mentskool.com";

async function fetchMentor(identifier: string): Promise<MentorProfile | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/mentors/${encodeURIComponent(identifier)}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    console.error("Failed to prefetch mentor profile for SEO:", err);
    return null;
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const mentor = await fetchMentor(params.id);

  if (!mentor) {
    return {
      title: "Mentor Profile | Mentskool",
      description:
        "Connect with verified mentors from IITs, AIIMS, and top institutions on Mentskool for 1-on-1 guidance, curated cohorts, and doubt solving.",
    };
  }

  const collegePart = mentor.college ? `${mentor.college} | ` : "";
  const categoryLabel = CATEGORY_LABELS[mentor.category] || "Mentor";
  const title = `${mentor.full_name} - ${collegePart}${categoryLabel} on Mentskool`;
  const cleanBio = mentor.bio.replace(/\s+/g, " ").trim();
  const description =
    cleanBio.length > 155 ? `${cleanBio.slice(0, 152)}...` : cleanBio;
  const canonicalUrl = `${SITE_URL}/mentors/${mentor.slug || mentor.user_id}`;

  const keywords = [
    mentor.full_name,
    mentor.college,
    mentor.exam_rank,
    categoryLabel,
    "1-on-1 mentorship",
    "cohort mentorship",
    "JEE Advanced mentor",
    "NEET mentor",
    "Mentskool",
  ].filter(Boolean) as string[];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Mentskool",
      type: "profile",
      images: mentor.avatar_url
        ? [
            {
              url: mentor.avatar_url,
              width: 800,
              height: 800,
              alt: `${mentor.full_name} profile photo`,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: mentor.avatar_url ? [mentor.avatar_url] : [],
    },
  };
}

export default async function MentorPage({ params }: PageProps) {
  const mentor = await fetchMentor(params.id);

  // Schema.org Person & Service Structured Data for Google Knowledge Graph
  const jsonLd = mentor
    ? {
        "@context": "https://schema.org",
        "@type": "Person",
        name: mentor.full_name,
        description: mentor.bio,
        image: mentor.avatar_url || undefined,
        jobTitle: `${CATEGORY_LABELS[mentor.category] || "Academic"} Mentor`,
        alumniOf: mentor.college
          ? {
              "@type": "CollegeOrUniversity",
              name: mentor.college,
            }
          : undefined,
        knowsAbout: [
          CATEGORY_LABELS[mentor.category],
          mentor.college,
          mentor.exam_rank,
          "Mentorship",
          "Competitive Exam Preparation",
        ].filter(Boolean),
        url: `${SITE_URL}/mentors/${mentor.slug || mentor.user_id}`,
        offers: {
          "@type": "Offer",
          price: Number(mentor.price_per_month) || 0,
          priceCurrency: "INR",
          availability:
            mentor.available_seats > 0
              ? "https://schema.org/InStock"
              : "https://schema.org/SoldOut",
        },
      }
    : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <MentorDetailClient
        mentorId={params.id}
        initialMentor={mentor || undefined}
      />
    </>
  );
}
