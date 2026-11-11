/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.mentskool.com",
          },
        ],
        destination: "https://mentskool.com/:path*",
        permanent: true,
      },
      {
        source: "/shipping-and-exchange",
        destination: "/shipping-policy",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin-allow-popups",
          },
        ],
      },
      {
        source: "/llms.txt",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, follow",
          },
        ],
      },
      {
        source: "/llms-full.txt",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, follow",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
