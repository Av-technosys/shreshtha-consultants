import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact Shreshtha Consultants – MEP Consultants in India",
  description:
    "Get in touch with Shreshtha Consultants for MEP, HVAC, BIM & building services design. Call +91-9799858301, email us, or visit our office.",
  alternates: {
    canonical: "https://www.shreshthaconsultants.com/contact-us",
  },
};

export default function ContactUsLayout({ children }: { children: ReactNode }) {
  return children;
}
