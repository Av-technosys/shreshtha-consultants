import React from "react";
import Image from "next/image";
import { Container } from "@/components/common/container";

interface WhyChooseUsCard {
  icon: string;
  title: string;
  description: string;
  titleColor?: string;
}

interface LocationWhyChooseUsProps {
  title: string;
  subtitle?: string;
  cards: WhyChooseUsCard[];
}

export function LocationWhyChooseUs({
  title,
  subtitle,
  cards,
}: LocationWhyChooseUsProps) {
  return (
    <section className="w-full bg-[#F9F9F9] py-[60px] md:py-[100px] font-lora text-[16px] font-normal leading-[24px] text-[#333333]">
      <Container className="flex flex-col items-center font-lora text-[16px] font-normal leading-[24px] text-[#333333]">
        <h2
          className={`font-poppins text-[24px] md:text-[32px] font-semibold leading-[30px] md:leading-[32px] text-[#000000] text-center ${subtitle ? "mb-[16px]" : "mb-[40px] md:mb-[60px]"}`}
        >
          {title}
        </h2>
        {subtitle && (
          <p className="font-lora text-[14px] md:text-[16px] font-normal leading-[22px] md:leading-[24px] text-[#ED2967] text-center mb-[40px] md:mb-[60px] max-w-[800px]">
            {subtitle}
          </p>
        )}

        <div className="flex flex-wrap justify-center gap-[30px] w-full font-lora text-[16px] font-normal leading-[24px] text-[#333333]">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="group bg-[#FFFFFF] rounded-[8px] p-[30px] flex flex-col items-center text-center shadow-[0_0_15px_rgba(0,0,0,0.08)] border border-[#EAEAEA] transition-transform duration-300 hover:-translate-y-2 font-lora text-[16px] font-normal leading-[24px] text-[#333333] w-full md:w-[calc(50%-15px)] lg:w-[calc(33.333%-20px)]"
            >
              <div className="w-[80px] h-[80px] relative mb-[24px] font-lora text-[16px] font-normal leading-[24px] text-[#333333]">
                <Image
                  src={card.icon}
                  alt={card.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col gap-[12px] font-lora text-[16px] font-normal leading-[24px] text-[#333333]">
                <h3
                  className={`font-lora text-[16px] md:text-[18px] font-bold leading-[22px] md:leading-[21.6px] ${card.titleColor || "text-[#000000]"} transition-colors duration-300 group-hover:text-[#ED2967]`}
                >
                  {card.title}
                </h3>
                <p className="font-lora text-[14px] md:text-[16px] font-normal leading-[22px] md:leading-[24px] text-[#333333]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
