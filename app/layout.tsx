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
