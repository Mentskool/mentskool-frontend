import { MetadataRoute } from "next";
import { MentorListResponse } from "@/lib/types";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://mentskool.com";
const API_BASE_URL =
  process.env.INTERNAL_API_URL ||
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:8000/api/v1";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/mentors`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/mentor/onboarding`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/refund-policy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/login`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${SITE_URL}/signup`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  let mentorRoutes: MetadataRoute.Sitemap = [];
  try {
    const res = await fetch(`${API_BASE_URL}/mentors?limit=100`, {
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      const data: MentorListResponse = await res.json();
      mentorRoutes = (data.items || []).map((mentor) => ({
        url: `${SITE_URL}/mentors/${mentor.slug || mentor.user_id}`,
        lastModified: mentor.last_active_at ? new Date(mentor.last_active_at) : new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
      }));
    }
  } catch (err) {
    console.error("Failed to generate dynamic mentor sitemap:", err);
  }

  return [...staticRoutes, ...mentorRoutes];
}
