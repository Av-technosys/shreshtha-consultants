import type { Metadata } from "next";
import { Archivo, Inter, Lora } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Shreshtha Consultants",
  description: "Shreshtha Consultants",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${inter.variable} ${lora.variable}`}>
      <body className="min-h-screen font-lora">{children}</body>
    </html>
  );
}
