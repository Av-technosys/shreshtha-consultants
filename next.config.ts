import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
  async redirects() {
    return [
      { source: "/services/electrical", destination: "/electrical", permanent: true },
      { source: "/services/plumbing", destination: "/plumbing", permanent: true },
      { source: "/services/fire-fighting", destination: "/fire-fighting-2", permanent: true },
      { source: "/fire-fighting", destination: "/fire-fighting-2", permanent: true },
      { source: "/services/hvac", destination: "/hvacr", permanent: true },
      { source: "/hvac", destination: "/hvacr", permanent: true },
      { source: "/services/safety-and-security", destination: "/safety-and-security", permanent: true },
      { source: "/career", destination: "/careers", permanent: true },
      { source: "/contact", destination: "/contact-us", permanent: true },
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
