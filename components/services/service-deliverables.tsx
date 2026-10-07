import * as React from "react";
import Image from "next/image";
import { Container } from "@/components/common/container";


export interface Deliverable {
  title: string;
  description?: string;
  imageSrc: string;
}

export interface ServiceDeliverablesProps {
  kicker: string;
  title: string;
  introText: React.ReactNode;
  deliverables: Deliverable[];
}

export function ServiceDeliverables({
  kicker,
  title,
  introText,
  deliverables,
}: ServiceDeliverablesProps) {
  return (
    <section className="bg-[#f7f6f2] py-[70px] max-[760px]:py-[40px]">
      <Container>
        <div className="mb-[60px] flex max-w-[900px] flex-col">
          <div className="font-archivo mb-4 flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.25em] text-[#5c6570] before:h-[1px] before:w-[26px] before:bg-[#ed2967]">
            {kicker}
          </div>
          <h2 className="font-archivo mb-6 text-[clamp(30px,3vw,46px)] font-bold leading-[1.1] tracking-[-0.03em] text-[#101418]">
            {title}
          </h2>
          <div className="flex flex-col gap-4 text-[16px] leading-[1.8] text-[#5c6570]">
            {introText}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((item, idx) => (
            <div key={idx} className="group flex flex-col overflow-hidden rounded-[24px] bg-white p-3.5 shadow-[0_8px_30px_rgb(0_0_0_/_0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(0_0_0_/_0.08)]">
              <div className="relative w-full overflow-hidden rounded-[16px] border border-[#e3e0d8] bg-white aspect-[4/2.6]">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col items-center justify-start p-6 text-center">
                <h3 className="font-archivo text-[15px] font-bold leading-tight tracking-[0.01em] text-[#101418]">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="mt-3 text-[13px] leading-[1.6] text-[#5c6570]">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

