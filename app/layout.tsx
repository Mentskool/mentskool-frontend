import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { AppShell } from "@/components/AppShell";

export const metadata: Metadata = {
  metadataBase: new URL("https://mentskool.com"),
  title: {
    default: "Mentskool — #1 Personal 1:1 JEE & NEET Mentorship by IIT & AIIMS Rankers",
    template: "%s | Mentskool",
  },
  description:
    "Guided by rankers from top IITs & AIIMS. 1:1 mentorship, weekly task accountability, and verified student efficiency scores for JEE & NEET aspirants.",
  keywords: [
    "JEE mentorship",
    "NEET mentorship",
    "1 on 1 JEE mentorship by IITians",
    "1 on 1 NEET mentorship AIIMS rankers",
    "best mentorship program for JEE Mains and Advanced",
    "best mentorship program for NEET UG",
    "best mentorship for JEE",
    "best mentorship for NEET",
    "personal mentor for IIT JEE preparation",
    "NEET personal mentor online",
    "JEE dropper mentorship",
    "NEET dropper mentorship program",
    "JEE 2026 mentorship",
    "JEE 2027 foundation mentorship",
    "NEET 2026 2027 mentorship",
    "how to clear JEE backlog with mentor",
    "JEE mock test analysis negative marks reduction",
    "daily study timetable maker for JEE droppers",
    "accountability partner for IIT JEE self study",
    "personal guidance alongside Allen PW Aakash",
    "free mentorship session for JEE",
    "free 60 minute NEET mentorship demo",
    "1:1 personal mentor",
    "Mentskool",
    "mentor student accountability platform",
    "Mentor Prep alternative",
    "MentorKhoj alternative",
    "PW Disha alternative",
    "eSaral mentorship alternative",
    "ToppersClubs alternative",
    "JeetNeeti alternative",
    "JEE Society alternative",
  ],
  alternates: {
    canonical: "https://mentskool.com",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://mentskool.com",
    siteName: "Mentskool",
    title: "Mentskool — #1 Personal 1:1 JEE & NEET Mentorship by IIT & AIIMS Rankers",
    description:
      "Guided by rankers from top IITs & AIIMS. 1:1 mentorship, weekly task accountability, and verified student efficiency scores.",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Mentskool Mentorship Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mentskool — #1 Personal 1:1 JEE & NEET Mentorship by IIT & AIIMS Rankers",
    description:
      "1:1 mentorship and weekly accountability by IIT & AIIMS rankers. Switch mentors anytime.",
    images: ["https://mentskool.com/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=3", sizes: "any" },
      { url: "/icon.png?v=3", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png?v=3",
    shortcut: "/favicon.ico?v=3",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": "https://mentskool.com/#organization",
        name: "Mentskool",
        url: "https://mentskool.com",
        logo: "https://mentskool.com/logo.png",
        description:
          "Structured mentor-student accountability platform connecting JEE and NEET aspirants with verified IIT and AIIMS rankers.",
        sameAs: [
          "https://twitter.com/mentskool",
          "https://linkedin.com/company/mentskool",
          "https://instagram.com/mentskool",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          email: "support@mentskool.com",
          contactType: "customer support",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://mentskool.com/#website",
        url: "https://mentskool.com",
        name: "Mentskool",
        publisher: {
          "@id": "https://mentskool.com/#organization",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://mentskool.com/mentors?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "ItemList",
        "@id": "https://mentskool.com/#sitenavigation",
        name: "Mentskool Main Navigation",
        itemListElement: [
          {
            "@type": "SiteNavigationElement",
            position: 1,
            name: "Find Mentors",
            description: "Browse verified mentors from IIT Bombay, IIT Delhi, and AIIMS",
            url: "https://mentskool.com/mentors",
          },
          {
            "@type": "SiteNavigationElement",
            position: 2,
            name: "Best JEE Mentorship",
            description: "1-on-1 personalized JEE Main and Advanced mentorship program",
            url: "https://mentskool.com/best-jee-mentorship",
          },
          {
            "@type": "SiteNavigationElement",
            position: 3,
            name: "Best NEET Mentorship",
            description: "680+ score roadmap and AIIMS doctor guidance for NEET-UG",
            url: "https://mentskool.com/best-neet-mentorship",
          },
          {
            "@type": "SiteNavigationElement",
            position: 4,
            name: "Free 1:1 Strategy Session",
            description: "Book a free diagnostic audit call with an IIT or AIIMS ranker",
            url: "https://mentskool.com/free-mentorship-session",
          },
          {
            "@type": "SiteNavigationElement",
            position: 5,
            name: "Become a Mentor",
            description: "Apply to mentor JEE and NEET aspirants with Mentskool",
            url: "https://mentskool.com/mentor/onboarding",
          },
          {
            "@type": "SiteNavigationElement",
            position: 6,
            name: "JEE 2027 Mentorship Sprint",
            description: "100-day countdown and tactical roadmap for JEE Main Session 1",
            url: "https://mentskool.com/jee-mentorship-2027",
          },
          {
            "@type": "SiteNavigationElement",
            position: 7,
            name: "NEET 2027 Mentorship Roadmap",
            description: "NCERT milestone plan and speed drills leading to May 2027",
            url: "https://mentskool.com/neet-mentorship-2027",
          },
        ],
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico?v=3" sizes="any" />
        <link rel="icon" href="/icon.png?v=3" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=3" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@700,600,500&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-paper text-ink font-sans flex flex-col selection:bg-brand/10 selection:text-brand">
        <Providers>
          <AppShell>{children}</AppShell>
        </Providers>
      </body>
    </html>
  );
}
