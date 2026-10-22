import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Careers at Shreshtha Consultants | MEP, HVAC & BIM Design Jobs",
  description:
    "Explore career opportunities at Shreshtha Consultants, a leading AI-driven MEP design firm in India. Join our team of engineers working on projects.",
  alternates: {
    canonical: "https://www.shreshthaconsultants.com/careers",
  },
};

export default function CareersLayout({ children }: { children: ReactNode }) {
  return children;
}
