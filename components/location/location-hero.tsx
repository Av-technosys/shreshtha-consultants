import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/common/container";

export interface LocationHeroProps {
  title: React.ReactNode;
  imageSrc: string;
  imageAlt?: string;
  ctaText?: string;
  ctaLink?: string;
}

export function LocationHero({
  title,
  imageSrc,
  imageAlt = "Location background",
  ctaText = "Request Proposal",
  ctaLink = "/contact",
}: LocationHeroProps) {
  return (
    <section className="relative overflow-hidden w-full h-[350px] md:h-[500px] pt-[120px] md:pt-[178px] font-lora text-[16px] font-normal leading-[24px] text-[#FFFFFF]">
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#000000]/50" />
      </div>

      <Container className="relative z-10 w-full">
        <div className="max-w-[800px] flex flex-col items-start gap-[16px] lg:gap-[20px]">
          <h1 className="font-poppins text-[24px] md:text-[35px] font-semibold leading-[32px] md:leading-[35px] text-[#FFFFFF]">
            {title}
          </h1>
          <Link
            href={ctaLink}
            className="font-poppins text-[14px] md:text-[15px] font-medium leading-[14px] md:leading-[15px] text-[#FFFFFF] bg-[#ED2967] hover:bg-[#172554] transition-colors duration-300 px-[20px] md:px-[28px] py-[10px] md:py-[14px] rounded-full inline-flex items-center justify-center mt-[4px]"
          >
            {ctaText}
          </Link>
        </div>
      </Container>
    </section>
  );
}
