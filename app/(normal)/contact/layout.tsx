import type { ReactNode } from "react";
import { createSeoMetadata, seo } from "@/helpers/seo";

export const metadata = createSeoMetadata(seo.contact);

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
