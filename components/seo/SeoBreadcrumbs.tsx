import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface SeoBreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function SeoBreadcrumbs({ items }: SeoBreadcrumbsProps) {
  // Deduplicate and filter out any accidental "Home" items
  const cleanItems = items.filter(
    (item) => item.label.trim().toLowerCase() !== "home" && item.href !== "/"
  );

  const breadcrumbListJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://mentskool.com",
      },
      ...cleanItems.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.label,
        ...(item.href ? { item: `https://mentskool.com${item.href}` } : {}),
      })),
    ],
  };

  return (
    <nav aria-label="Breadcrumb" className="mb-6 inline-flex max-w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListJsonLd) }}
      />
      <ol className="flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800/80 text-xs text-slate-400 backdrop-blur-md shadow-soft">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 hover:text-sky-400 transition-colors text-slate-400 font-medium"
          >
            <Home className="w-3.5 h-3.5 text-sky-400" />
            <span>Home</span>
          </Link>
        </li>
        {cleanItems.map((item, idx) => {
          const isLast = idx === cleanItems.length - 1;
          return (
            <li key={idx} className="inline-flex items-center gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-sky-400 transition-colors font-medium text-slate-300"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="font-semibold text-white truncate max-w-[220px] sm:max-w-none">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
