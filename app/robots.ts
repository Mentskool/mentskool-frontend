import { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://mentskool.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
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
          "/checkout",
          "/checkout/*",
          "/login",
          "/signup",
          "/forgot-password",
          "/verify-email",
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
        allow: "/",
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
          "/checkout",
          "/checkout/*",
          "/login",
          "/signup",
          "/forgot-password",
          "/verify-email",
          "/api/*",
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
