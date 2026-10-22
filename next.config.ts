import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
  async redirects() {
    return [
      { source: "/services/electrical", destination: "/electrical", permanent: true },
      { source: "/services/plumbing", destination: "/plumbing", permanent: true },
      { source: "/services/fire-fighting", destination: "/fire-fighting", permanent: true },
      { source: "/fire-fighting-2", destination: "/fire-fighting", permanent: true },
      { source: "/fire-fighting-2/:path*", destination: "/fire-fighting", permanent: true },
      { source: "/services/hvac", destination: "/hvac", permanent: true },
      { source: "/hvacr", destination: "/hvac", permanent: true },
      { source: "/hvacr/:path*", destination: "/hvac", permanent: true },
      { source: "/services/safety-and-security", destination: "/safety-and-security", permanent: true },
      { source: "/services/boq", destination: "/boq", permanent: true },
      { source: "/career", destination: "/careers", permanent: true },
      { source: "/contact", destination: "/contact-us", permanent: true },
      { source: "/blogs", destination: "/blog", permanent: true },
      { source: "/bog", destination: "/blog", permanent: true },
      { source: "/projects/jims", destination: "/projects/jims-hospital", permanent: true },
      { source: "/projects/bst", destination: "/projects/bst-hospital", permanent: true },
      { source: "/projects/suryagarh", destination: "/projects/hotel-suryagarh-palace", permanent: true },
      { source: "/projects/rambagh", destination: "/projects/hotel-rambagh-palace", permanent: true },
      { source: "/projects/umaid-bhawan", destination: "/projects/umaid-bhawan-palace", permanent: true },
      { source: "/projects/anantara", destination: "/projects/jewel-bagh", permanent: true },
      { source: "/projects/savio", destination: "/projects/savio-factory", permanent: true },
      { source: "/projects/gurukripa", destination: "/projects/gurukripa-factory", permanent: true },
      { source: "/projects/salasar", destination: "/projects/salasar-balaji-creation", permanent: true },
      { source: "/projects/jaswant", destination: "/projects/jaswant-gargh-school", permanent: true },
      { source: "/projects/gsis", destination: "/projects/gsis-school", permanent: true },
      { source: "/projects/dwps", destination: "/projects/delhi-world-public-school", permanent: true },
      { source: "/projects/nokha", destination: "/projects/nokha-library", permanent: true },
      { source: "/projects/acl-green", destination: "/projects/acl-greens", permanent: true },
    ];
  },
};

export default nextConfig;
