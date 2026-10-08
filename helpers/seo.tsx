import type { Metadata } from "next";

const siteUrl = "https://shreshthaconsultants.com";
const siteName = "Shreshtha Consultants";
const locale = "en_IN";

type SeoConfig = {
  title: string;
  description: string;
  path: string;
  image: string;
};

export function createSeoMetadata({ title, description, path, image }: SeoConfig): Metadata {
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      locale,
      type: "website",
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export const seo = {
  home: {
    title: "Shreshtha Consultants – AI-Driven MEP Design Consultants in India",
    description:
      "We are trusted MEP consultants in India offering HVAC, electrical, plumbing & firefighting design with AI-powered drawings and BIM coordination. Request a proposal.",
    path: "/",
    image: "https://shreshthaconsultants.com/wp-content/uploads/2024/08/Untitled-2-1-e1725975406628-300x300.png.webp",
  },
  about: {
    title: "About Shreshtha Consultants – MEP Experts in India Since 1997",
    description:
      "Shreshtha Consultants has delivered 1,050+ MEP projects since 1997. Meet our founders and 50+ engineers behind India's first AI tool for MEP design.",
    path: "/about",
    image: "https://shreshthaconsultants.com/wp-content/uploads/2025/08/About-us-intro-e1761118375301.jpeg.webp",
  },
  contact: {
    title: "Contact Shreshtha Consultants – MEP Consultants in Jaipur",
    description:
      "Get in touch with Shreshtha Consultants for MEP, HVAC, BIM & building services design. Call +91-9799858301, email us, or visit our Jaipur office.",
    path: "/contact-us",
    image: "https://shreshthaconsultants.com/wp-content/uploads/2026/02/Frame-28.png",
  },
  career: {
    title: "Careers at Shreshtha Consultants – MEP Jobs in India",
    description:
      "Join Shreshtha Consultants in India. Work on iconic MEP projects with AI-driven design tools alongside experienced engineers. See open roles and apply.",
    path: "/careers",
    image: "https://shreshthaconsultants.com/wp-content/uploads/2026/02/Frame-28.png",
  },
  electrical: {
    title: "Shreshtha Consultants – Electrical Design Consultant in India",
    description:
      "Electrical design consultants in India: wiring & conduit layouts, SLDs, automation and BOQ, compliant with NBC 2016. Request an electrical design proposal.",
    path: "/electrical",
    image: "https://shreshthaconsultants.com/wp-content/uploads/2024/09/Electrical-jpg-scaled-1-e1756298375235.jpg",
  },
} satisfies Record<string, SeoConfig>;

export const homeSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteName,
  url: `${siteUrl}/`,
  logo: seo.home.image,
  image: "https://shreshthaconsultants.com/wp-content/uploads/2026/09/group4.jpg",
  description:
    "AI-driven MEP design consultants offering HVAC, electrical, plumbing, firefighting, BIM and security design.",
  telephone: "+91-9799858301",
  email: "contact@shreshthaconsultants.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "D-27, Near Pillar No. 107, New Sanganer Rd., Shyam Nagar",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    addressCountry: "IN",
  },
  areaServed: "IN",
  sameAs: [
    "https://www.facebook.com/shreshthaconsultants",
    "https://www.instagram.com/shreshtha_consultants/",
    "https://www.linkedin.com/company/shreshtha-consultants/",
  ],
};

export const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  url: `${siteUrl}/about`,
  name: "About Shreshtha Consultants",
  mainEntity: {
    "@type": "Organization",
    name: siteName,
    url: `${siteUrl}/`,
    foundingDate: "1997",
    founder: { "@type": "Person", name: "Sudhir Mathur" },
    numberOfEmployees: { "@type": "QuantitativeValue", value: 50 },
  },
};

export const electricalSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/electrical#webpage`,
      url: `${siteUrl}/electrical`,
      name: seo.electrical.title,
      description: seo.electrical.description,
      inLanguage: "en-IN",
      isPartOf: { "@id": `${siteUrl}/#website` },
      breadcrumb: { "@id": `${siteUrl}/electrical#breadcrumb` },
      about: { "@id": `${siteUrl}/electrical#service` },
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/electrical#service`,
      name: "Electrical Design Services",
      serviceType: "Electrical MEP design consulting",
      url: `${siteUrl}/electrical`,
      description:
        "Comprehensive electrical system design for buildings, including wiring and control plans, conduit layouts, electrical automation, wall elevations and BOQ, compliant with NBC 2016.",
      areaServed: { "@type": "Country", name: "India" },
      provider: { "@id": `${siteUrl}/#organization` },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Electrical design deliverables",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Wiring and Controlling Plans",
              description:
                "Wiring plans showing positions and interconnections of electrical devices and terminals.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Electrical Conduiting Layouts",
              description:
                "Conduiting layouts with specified material and sizes, ensuring protection from fire and other hazards.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Electrical BOQ",
              description:
                "Detailed electrical system BOQ stating the quality and quantity of equipment required at optimum cost.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Electrical Automation and Wall Elevations",
            },
          },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/electrical#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
        { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/#services` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Electrical",
          item: `${siteUrl}/electrical`,
        },
      ],
    },
  ],
};
