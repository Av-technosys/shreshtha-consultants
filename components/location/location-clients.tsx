"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/common/container";

const LOGOS = Array.from({ length: 18 }).map((_, i) => ({
  id: i + 1,
  src: `/Home/clients/logo-${i + 1}.png`,
  alt: `Client Logo ${i + 1}`,
}));

export function LocationClients() {
  const [showAll, setShowAll] = useState(false);

  const visibleLogos = showAll ? LOGOS : LOGOS.slice(0, 12);

  return (
    <section className="w-full bg-[#FFFFFF] py-[60px] md:py-[80px] font-lora text-[16px] font-normal leading-[24px] text-[#333333]">
      <Container className="font-lora text-[16px] font-normal leading-[24px] text-[#333333]">
        <div className="flex flex-col items-center">
          <h2 className="font-poppins text-[24px] md:text-[32px] font-semibold leading-[30px] md:leading-[32px] text-[#000000] mb-[30px] md:mb-[60px] text-center">
            Industry Trusted
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[20px] md:gap-[40px] w-full font-lora text-[16px] font-normal leading-[24px] text-[#333333]">
            {visibleLogos.map((logo, index) => (
              <div
                key={logo.id}
                className={`items-center justify-center p-[10px] ${
                  !showAll && index >= 4 ? "hidden md:flex" : "flex"
                }`}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={180}
                  height={90}
                  className="object-contain w-full max-w-[160px] h-auto"
                />
              </div>
            ))}
          </div>

          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-[40px] md:mt-[60px] bg-[#ED2967] hover:bg-[#172554] transition-colors duration-300 px-[32px] py-[14px] rounded-full font-lora text-[16px] font-normal leading-[24px] text-[#333333]"
          >
            <span className="font-poppins text-[15px] font-semibold leading-[15px] text-[#FFFFFF] capitalize">
              {showAll ? "Show Less" : "Show More"}
            </span>
          </button>
        </div>
      </Container>
    </section>
  );
}
