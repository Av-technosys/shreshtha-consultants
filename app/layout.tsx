import type { Metadata } from "next";
import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shreshtha Consultants",
  description: "Shreshtha Consultants",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
