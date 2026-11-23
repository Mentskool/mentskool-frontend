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

function parseMentorSlug(slug: string): { name: string; college?: string; category: "JEE_PREP" | "NEET_PREP" } {
  if (/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(slug)) {
    return { name: "Mentor Profile", category: "JEE_PREP" };
  }

  const parts = slug.split("-");
  const words = parts.map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());

  const collegeKeywords = [
    "iit", "aiims", "nit", "bits", "iiit", "king", "medical", "government",
    "kgmu", "gmc", "delhi", "bombay", "madras", "hyderabad", "kanpur", "roorkee", "kharagpur"
  ];
  const splitIdx = parts.findIndex((p) => collegeKeywords.includes(p.toLowerCase()));

  const isNeet = parts.some((p) => ["aiims", "neet", "medical", "mbbs", "kgmu", "gmc"].includes(p.toLowerCase()));
  const category: "JEE_PREP" | "NEET_PREP" = isNeet ? "NEET_PREP" : "JEE_PREP";

  if (splitIdx > 0) {
    const name = words.slice(0, splitIdx).join(" ");
    let college = words.slice(splitIdx).join(" ");
    college = college
      .replace(/\bIit\b/gi, "IIT")
      .replace(/\bAiims\b/gi, "AIIMS")
      .replace(/\bNit\b/gi, "NIT")
      .replace(/\bBits\b/gi, "BITS")
      .replace(/\bIiit\b/gi, "IIIT")
      .replace(/\bKgmu\b/gi, "KGMU")
      .replace(/\bGmc\b/gi, "GMC");
    return { name, college, category };
  }

  return { name: words.join(" "), category };
}

function createFallbackMentor(slugOrId: string): MentorProfile {
  const parsed = parseMentorSlug(slugOrId);
  return {
    user_id: slugOrId,
    full_name: parsed.name,
    bio: `Verified mentor from ${parsed.college || "top institution"} guiding ${parsed.category === "NEET_PREP" ? "NEET" : "JEE"} aspirants on Mentskool with personalized weekly strategy, mock test error analysis, and 1:1 accountability.`,
    category: parsed.category,
    seat_limit: 30,
    price_per_month: "0",
    is_active: true,
    college: parsed.college,
    slug: slugOrId,
    one_on_one_enabled: true,
  } as MentorProfile;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const fetchedMentor = await fetchMentor(params.id);
  const mentor = fetchedMentor || createFallbackMentor(params.id);

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
  const fetchedMentor = await fetchMentor(params.id);
  const mentor = fetchedMentor || createFallbackMentor(params.id);

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
        aggregateRating:
          mentor.rating_avg && mentor.review_count && mentor.review_count > 0
            ? {
                "@type": "AggregateRating",
                ratingValue: Number(mentor.rating_avg).toFixed(1),
                reviewCount: mentor.review_count,
                bestRating: "5",
                worstRating: "1",
              }
            : undefined,
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
