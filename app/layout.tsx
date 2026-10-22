import type { Metadata } from "next";
import { Archivo, Inter, Lora, Poppins } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo-family",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter-family",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora-family",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins-family",
  display: "swap",
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Shreshtha Consultants",
  url: "https://www.shreshthaconsultants.com/",
  logo: "https://www.shreshthaconsultants.com/Common/logo.png",
  image: "https://www.shreshthaconsultants.com/Common/logo.png",
  description:
    "AI-driven MEP design consultants offering HVAC, electrical, plumbing, firefighting, and BIM coordination.",
  telephone: "+91-9799858301",
  email: "contact@shreshthaconsultants.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "D-27, Near Pillar No. 107, New Sanganer Rd., Shyam Nagar",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    postalCode: "302019",
    addressCountry: "IN",
  },
  areaServed: "IN",
  sameAs: [
    "https://www.facebook.com/shreshthaconsultants",
    "https://www.instagram.com/shreshtha_consultants/",
    "https://www.linkedin.com/company/shreshtha-consultants/",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shreshthaconsultants.com"),
  title: {
    default: "Shreshtha Consultants – AI-Driven MEP Design Consultants in India",
    template: "%s | Shreshtha Consultants",
  },
  description:
    "Shreshtha Consultants is a leading MEP consultancy in India offering AI-driven HVAC, electrical, plumbing & firefighting design with BIM coordination.",
  icons: {
    icon: "/Common/logo.png",
    shortcut: "/Common/logo.png",
    apple: "/Common/logo.png",
  },
  openGraph: {
    siteName: "Shreshtha Consultants",
    locale: "en_IN",
    type: "website",
    url: "https://www.shreshthaconsultants.com",
    images: [
      {
        url: "/Common/logo.png",
        width: 800,
        height: 600,
        alt: "Shreshtha Consultants Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/Common/logo.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${inter.variable} ${lora.variable} ${poppins.variable}`}>
      <body className="min-h-screen font-lora">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
