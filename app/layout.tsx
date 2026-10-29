import type { Metadata } from "next";
import { Archivo, Inter, Poppins } from "next/font/google";
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
  title: "Shreshtha Consultants – AI-Driven MEP Design Consultants in India",
  description:
    "Shreshtha Consultants is a leading MEP consultancy in India offering AI-driven HVAC, electrical, plumbing & firefighting design with BIM coordination.",
  verification: {
    google: "S14O5fom4ecWx5qUmfBUmJBZBSo75vd_QVz_wUCmXJk",
  },
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${inter.variable} ${poppins.variable}`}
    >
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f
);})(window,document,'script','dataLayer','GTM-5S8PJWDD');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className="min-h-screen font-inter">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5S8PJWDD"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}
