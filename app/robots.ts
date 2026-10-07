import { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://mentskool.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/mentors",
          "/mentors/*",
          "/jee-mentorship",
          "/neet-mentorship",
          "/best-jee-mentorship",
          "/best-neet-mentorship",
          "/free-mentorship-session",
          "/jee-droppers",
          "/class-11-12-mentorship",
          "/compare/*",
          "/llms.txt",
          "/llms-full.txt",
          "/terms",
          "/privacy",
          "/refund-policy",
          "/contact",
          "/mentor/onboarding",
        ],
        disallow: [
          "/admin",
          "/admin/*",
          "/dashboard",
          "/dashboard/*",
          "/cohort",
          "/cohort/*",
          "/messages",
          "/messages/*",
          "/schedule",
          "/schedule/*",
          "/api/*",
        ],
      },
      {
        userAgent: [
          "GPTBot",
          "ClaudeBot",
          "PerplexityBot",
          "Google-Extended",
          "Applebot-Extended",
          "CCBot",
        ],
        allow: [
          "/",
          "/llms.txt",
          "/llms-full.txt",
          "/jee-mentorship",
          "/neet-mentorship",
          "/best-jee-mentorship",
          "/best-neet-mentorship",
          "/free-mentorship-session",
          "/jee-droppers",
          "/class-11-12-mentorship",
          "/compare/*",
          "/mentors",
          "/mentors/*",
        ],
        disallow: ["/api/*", "/dashboard/*", "/admin/*"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
