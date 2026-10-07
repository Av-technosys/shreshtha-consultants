"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/common/container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";


const heroImages = [
  { src: "/Home/grid01.png", alt: "Hotel Rambagh Palace" },
  { src: "/Home/grid02.png", alt: "Rambagh Palace interior" },
  { src: "/Home/grid03.png", alt: "Shreshtha project" },
  { src: "/Home/grid04.png", alt: "Shreshtha project" },
  { src: "/Home/grid06.png", alt: "Shreshtha project" },
  { src: "/Home/grid07.png", alt: "Shreshtha project" },
];

export function HeroSection() {
  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) return;

    const timer = window.setInterval(() => {
      api.scrollNext();
    }, 3500);

    return () => window.clearInterval(timer);
  }, [api]);

  return (
    <section className="pb-[90px] pt-32 max-[760px]:pb-[60px] max-[760px]:pt-[82px]">
      <Container className="grid grid-cols-[1.15fr_0.85fr] items-center gap-[70px] max-[760px]:grid-cols-1 max-[760px]:gap-[38px]">
        <div>
          <h1 className="font-archivo mb-6 text-[clamp(40px,4.6vw,68px)] font-bold leading-[1.04] tracking-[-0.04em] max-[760px]:text-[clamp(38px,12vw,52px)]">
            AI-powered Engineering Design that enable{" "}
            <Emphasis>faster execution</Emphasis> and{" "}
            <Emphasis>lower project costs.</Emphasis>
          </h1>
          <p className="mb-[38px] max-w-[480px] text-lg text-[#5c6570]">
            Our MEP consultants use in-house AI software to create drawings
          </p>
          <Link
            href="#contact"
            className="font-archivo group inline-flex items-center justify-center gap-2.5 rounded-full border border-[#101418] bg-[#101418] px-5 py-3 text-[13px] font-bold text-white transition duration-300 hover:border-[#16163f] hover:bg-[#16163f] hover:text-[#e2e2e2]"
          >
            Request Proposal <span>→</span>
          </Link>
        </div>

        <Carousel
          className="relative aspect-[4/4.6] overflow-hidden rounded-[18px] [&_[data-slot=carousel-content]]:h-full max-[760px]:aspect-[1/1.12]"
          opts={{ align: "start", loop: true }}
          setApi={setApi}
        >
          <CarouselContent className="h-full -ml-0">
            {heroImages.map((image, index) => (
              <CarouselItem className="relative h-full pl-0" key={image.src}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={index === 0}
                  className="object-cover"
                  sizes="(max-width: 760px) 100vw, 42vw"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Container>
    </section>
  );
}

function Emphasis({ children }: { children: React.ReactNode }) {
  return (
    <em className="relative z-0 whitespace-nowrap not-italic text-[#ed2967] after:absolute after:bottom-1.5 after:left-0 after:right-0 after:z-[-1] after:h-2.5 after:bg-[#ed2967] after:opacity-35 max-[760px]:whitespace-normal">
      {children}
    </em>
  );
}
