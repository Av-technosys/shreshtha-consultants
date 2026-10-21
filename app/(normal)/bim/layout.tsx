import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Shreshtha Consultants – Expert BIM Services India",
  description:
    "Accurate BIM modeling & coordination by Shreshtha Consultants — enhancing design efficiency, clash detection & project delivery across India.",
  alternates: {
    canonical: "https://www.shreshthaconsultants.com/bim",
  },
};

export default function BimLayout({ children }: { children: ReactNode }) {
  return children;
}
