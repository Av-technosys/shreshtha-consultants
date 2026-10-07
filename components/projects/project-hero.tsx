import React from "react";
import Image from "next/image";
import { Container } from "@/components/common/container";

interface ProjectHeroProps {
  title: string;
  image: string;
}

export function ProjectHero({ title, image }: ProjectHeroProps) {
  return (
    <section className="relative w-full h-[435px] md:h-[500px] flex flex-col justify-end">
      <Image src={image} alt={title} fill className="object-cover" priority />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="relative z-10 w-full pb-[40px] md:pb-[50px]">
        <Container className="max-lg:px-[4%]">
          <h1 className="font-sans font-medium text-[40px] md:text-[56px] lg:text-[70px] leading-[1.05] md:leading-[73.5px] tracking-[-1.5px] md:tracking-[-2.8px] text-[#FFFFFF]">
            {title}
          </h1>
        </Container>
      </div>
    </section>
  );
}
