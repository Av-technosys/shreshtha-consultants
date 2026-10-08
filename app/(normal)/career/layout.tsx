import type { ReactNode } from "react";
import { createSeoMetadata, seo } from "@/helpers/seo";

export const metadata = createSeoMetadata(seo.career);

export default function CareerLayout({ children }: { children: ReactNode }) {
  return children;
}
