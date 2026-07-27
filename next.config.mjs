/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/strength-equipment",
        destination: "/",
        permanent: true,
      },
      {
        source: "/strength-equipment/:slug",
        destination: "/series/:slug",
        permanent: true,
      },
      {
        source: "/solutions/cardio",
        destination: "/series/cardio",
        permanent: true,
      },
      {
        source: "/solutions/scan",
        destination: "/series/scan",
        permanent: true,
      },
      {
        source: "/products/hg-s880-scanner-corporal-3d-pro",
        destination: "/products/modelo-880-scanner-corporal-ia-360",
        permanent: true,
      },
      {
        source: "/products/hg-s881-bioimpedancia-quantica-touch",
        destination: "/products/modelo-790-analisador-corporal-multifuncional",
        permanent: true,
      },
      {
        source: "/products/hg-s882-estacao-de-avaliacao-fisica-ia",
        destination: "/products/modelo-880-scanner-corporal-ia-360",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
