import React from "react";
import type { Metadata } from "next";
import BookCallDetailClient from "./BookCallDetailClient";
import { Mentor1on1Card, CATEGORY_LABELS, MentorCategory } from "@/lib/types";

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

async function fetchMentor1on1(identifier: string): Promise<Mentor1on1Card | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/sessions/mentors/${encodeURIComponent(identifier)}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    console.error("Failed to prefetch mentor 1-on-1 detail for SEO:", err);
    return null;
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const mentor = await fetchMentor1on1(params.id);

  if (!mentor) {
    return {
      title: "Book 1-on-1 Call | Mentskool",
      description:
        "Book a private 30-minute 1-on-1 video mentorship session with verified IIT and NEET rankers on Mentskool.",
    };
  }

  const collegePart = mentor.college ? `${mentor.college} | ` : "";
  const categoryLabel =
    mentor.category && (CATEGORY_LABELS as any)[mentor.category]
      ? (CATEGORY_LABELS as any)[mentor.category]
      : "IIT / JEE";
  const title = `Book 1-on-1 with ${mentor.name} (${collegePart}${categoryLabel}) | Mentskool`;
  const cleanBio = (mentor.bio || "").replace(/\s+/g, " ").trim();
  const description =
    cleanBio.length > 155 ? `${cleanBio.slice(0, 152)}...` : cleanBio;
  const canonicalUrl = `${SITE_URL}/book-call/${mentor.slug || mentor.mentor_id}`;

  const keywords = [
    mentor.name,
    mentor.college,
    mentor.exam_rank,
    categoryLabel,
    "1-on-1 mentorship session",
    "private mentorship call",
    "IIT JEE mentor call",
    "NEET strategy call",
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
              alt: `${mentor.name} 1-on-1 Mentorship Profile`,
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

export default async function BookCallMentorPage({ params }: PageProps) {
  const mentor = await fetchMentor1on1(params.id);

  const jsonLd = mentor
    ? {
        "@context": "https://schema.org",
        "@type": "Person",
        name: mentor.name,
        description: mentor.bio,
        image: mentor.avatar_url || undefined,
        jobTitle: "Academic Mentor",
        alumniOf: mentor.college
          ? {
              "@type": "CollegeOrUniversity",
              name: mentor.college,
            }
          : undefined,
        url: `${SITE_URL}/book-call/${mentor.slug || mentor.mentor_id}`,
        aggregateRating:
          mentor.rating && mentor.total_reviews && mentor.total_reviews > 0
            ? {
                "@type": "AggregateRating",
                ratingValue: Number(mentor.rating).toFixed(1),
                reviewCount: mentor.total_reviews,
                bestRating: "5",
                worstRating: "1",
              }
            : undefined,
        offers: {
          "@type": "Offer",
          price: Number(mentor.one_on_one_price) || 0,
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
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
      <BookCallDetailClient
        mentorId={params.id}
        initialMentor={mentor || undefined}
      />
    </>
  );
}
