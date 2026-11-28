"use client";

import React, { useEffect, useState } from "react";
import { Mail } from "lucide-react";

export function SupportEmailLink() {
  const [href, setHref] = useState("/contact");

  useEffect(() => {
    // Assemble mailto client-side so Cloudflare Email Obfuscation does not
    // rewrite it into a /cdn-cgi/l/email-protection link in SSR HTML.
    setHref(`mailto:${["support", "mentskool.com"].join("@")}`);
  }, []);

  return (
    <a
      href={href}
      className="hover:text-sky-400 transition-colors inline-flex items-center gap-1.5"
    >
      <Mail className="w-3.5 h-3.5 text-sky-400" />
      <span>
        support<span>&#64;</span>mentskool.com
      </span>
    </a>
  );
}
