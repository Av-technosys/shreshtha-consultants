"use client";

import React, { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Container } from "@/components/common/container";

let isInitialLoad = true;

function ProjectsListingHeroContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category") || "All Projects";

  React.useEffect(() => {
    if (isInitialLoad && activeCategory !== "All Projects") {
      router.replace("/projects", { scroll: false });
    }
    isInitialLoad = false;
  }, [activeCategory, router]);

  const categories = [
    "All Projects",
    "Commercial",
    "Healthcare",
    "Hospitality",
    "Institutional",
    "Residential",
    "Industrial / Infrastructure",
  ];

  const handleCategoryClick = (category: string) => {
    router.push(`/projects?category=${encodeURIComponent(category)}`, {
      scroll: false,
    });
  };

  return (
    <section className="font-lora text-[16px] font-normal leading-[25.6px] text-[#FFFFFF] w-full bg-[#101418] pt-[64px] md:pt-[100px] lg:pt-[120px] pb-[28px] md:pb-[32px]">
      <Container className="flex flex-col items-start max-lg:px-[4%]">
        <div className="flex items-center gap-[12px] mb-[24px] md:mb-[16px]">
          <span className="block w-[24px] h-[1.5px] bg-[#ee2559] shrink-0" />
          <span className="uppercase font-archivo text-[12px] font-semibold tracking-[2.64px] text-white/55">
            OUR WORK
          </span>
        </div>

        <h1 className="mb-[32px] max-w-[900px] font-archivo text-[32px] md:text-[56px] lg:text-[74px] font-bold leading-[1.1] md:leading-[81.4px] tracking-[-1px] md:tracking-[-2.22px] text-[#FFFFFF]">
          projects across six
          <br className="block md:hidden" /> sectors, engineered end
          <br className="block md:hidden" /> to end.
        </h1>

        <p className="max-w-[600px] mb-[48px] md:mb-[56px] font-lora text-[14px] md:text-[17px] font-normal leading-[1.6] text-white/65">
          From hospitality landmarks to healthcare campuses, industrial
          facilities to institutional buildings — a look at the MEP and
          infrastructure work behind them.
        </p>

        <div className="grid grid-cols-2 md:flex md:items-center gap-y-[32px] gap-x-[40px] md:gap-[40px] lg:gap-[80px] mb-[64px] md:mb-[120px]">
          <div className="flex flex-col gap-[4px]">
            <span className="font-archivo text-[28px] md:text-[34px] font-bold leading-[1.2] md:leading-[54.4px] text-[#ED2967]">
              1050+
            </span>
            <span className="font-archivo text-[11px] md:text-[12.5px] font-medium leading-[1.6] md:leading-[20px] tracking-[1px] md:tracking-[1.75px] text-white/50 uppercase">
              Projects
            </span>
          </div>
          <div className="flex flex-col gap-[4px]">
            <span className="font-archivo text-[28px] md:text-[34px] font-bold leading-[1.2] md:leading-[54.4px] text-[#ED2967]">
              24+
            </span>
            <span className="font-archivo text-[11px] md:text-[12.5px] font-medium leading-[1.6] md:leading-[20px] tracking-[1px] md:tracking-[1.75px] text-white/50 uppercase">
              Cities in India
            </span>
          </div>
          <div className="flex flex-col gap-[4px]">
            <span className="font-archivo text-[28px] md:text-[34px] font-bold leading-[1.2] md:leading-[54.4px] text-[#ED2967]">
              17+
            </span>
            <span className="font-archivo text-[11px] md:text-[12.5px] font-medium leading-[1.6] md:leading-[20px] tracking-[1px] md:tracking-[1.75px] text-white/50 uppercase">
              Countries
            </span>
          </div>
          <div className="flex flex-col gap-[4px]">
            <span className="font-archivo text-[28px] md:text-[34px] font-bold leading-[1.2] md:leading-[54.4px] text-[#ED2967]">
              25+
            </span>
            <span className="font-archivo text-[11px] md:text-[12.5px] font-medium leading-[1.6] md:leading-[20px] tracking-[1px] md:tracking-[1.75px] text-white/50 uppercase">
              Years
            </span>
          </div>
        </div>

        <div className="w-full flex flex-wrap items-center gap-[8px] md:gap-[12px] border-t border-white/10 pt-[24px] md:pt-[32px]">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`font-archivo text-[12px] md:text-[13px] font-semibold leading-[19.5px] px-[16px] md:px-[24px] py-[8px] md:py-[12px] rounded-full transition-colors ${
                  isActive
                    ? "bg-[#ED2967] text-[#FFFFFF]"
                    : "bg-transparent text-white/50 hover:bg-[#ED2967] hover:text-[#FFFFFF]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export function ProjectsListingHero() {
  return (
    <Suspense fallback={null}>
      <ProjectsListingHeroContent />
    </Suspense>
  );
}
