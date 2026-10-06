import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Archivo } from "next/font/google";
import { Container } from "@/components/common/container";

const displayFont = Archivo({ subsets: ["latin"] });

export interface ServiceHeroProps {
  kicker: string;
  title: React.ReactNode;
  description: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  ctaText?: string;
  ctaLink?: string;
}

export function ServiceHero({
  kicker,
  title,
  description,
  imageSrc,
  imageAlt,
  ctaText = "Request Proposal",
  ctaLink = "/contact-us",
}: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#111419] pb-[100px] pt-[120px] max-[760px]:pb-[80px] max-[760px]:pt-[100px]">
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-right"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#111419]/80 sm:bg-gradient-to-r sm:from-[#111419] sm:from-10% sm:via-[#111419]/80 sm:to-[#ffffff]/5" />
      </div>

      <Container className="relative z-10 w-full">
        <div className="max-w-[600px]">
          <div className={`${displayFont.className} mb-6 flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.25em] text-neutral-300 before:h-[1px] before:w-[26px] before:bg-[#ed2967]`}>
            {kicker}
          </div>
          <h1 className={`${displayFont.className} mb-8 text-[clamp(32px,4vw,46px)] font-bold leading-[1.15] tracking-[-0.02em] text-white max-[760px]:text-[clamp(30px,8vw,40px)]`}>
            {title}
          </h1>
          <div className="mb-10 flex flex-col gap-4 text-[16px] leading-[1.8] text-neutral-400">
            {description}
          </div>
          <Link
            href={ctaLink}
            className={`${displayFont.className} group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/10 bg-[#161a20]/80 px-6 py-3.5 text-[13px] font-bold text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-[#101418]`}
          >
            {ctaText} <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}

