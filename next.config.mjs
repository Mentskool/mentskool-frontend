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
      {
        source: "/become-a-jee-mentor-earn-mone",
        destination: "/become-a-jee-mentor-earn-money",
        permanent: true,
      },
      {
        source: "/become-a-neet-mentor-earn-mone",
        destination: "/become-a-neet-mentor-earn-money",
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
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
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
