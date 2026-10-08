import React from "react";
import Image from "next/image";
import { Container } from "@/components/common/container";
import { ResendForm } from "@/components/forms/resend-form";

interface ProjectInfoItem {
  label: string;
  value: string;
}

interface ProjectDetailsProps {
  info: ProjectInfoItem[];
  description: string;
  images: string[];
}

export function ProjectDetails({
  info,
  description,
  images,
}: ProjectDetailsProps) {
  return (
    <>
      <section className="w-full bg-[#F7F6F2] pb-[60px] lg:pb-[100px] pt-[56px] lg:pt-[96px]">
        <Container className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-[40px] lg:gap-[120px] max-lg:px-[4%]">
          <div className="flex flex-col">
            {info.map((item, index) => (
              <div
                key={index}
                className="border-t border-black/10 pt-[16px] pb-[32px]"
              >
                <h4 className="mb-[12px] uppercase font-sans text-[11px] font-bold leading-[1.6] tracking-[1.32px] text-[#5C6570]">
                  {item.label}
                </h4>
                <p className="font-sans text-[16px] md:text-[18px] font-bold leading-[1.6] text-[#101418]">
                  {item.value}
                </p>
              </div>
            ))}

            <div className="border-t border-black/10 pt-[32px] mt-[8px]">
              <button className="w-full rounded-full py-[16px] transition-colors bg-[#101418] hover:bg-[#ED2967] text-[#FFFFFF] font-sans text-[14px] font-semibold leading-[1.6]">
                Discuss a Project &rarr;
              </button>
            </div>
          </div>

          <div className="flex flex-col pt-[16px]">
            <p className="mb-[48px] max-w-[800px] font-sans text-[15px] md:text-[17px] font-normal leading-[1.8] text-[#101418] -mt-[2px]">
              {description}
            </p>

            <div className="flex flex-col gap-[24px]">
              {images.length > 0 && (
                <div
                  className={`grid grid-cols-1 ${images.length === 1 ? "" : "sm:grid-cols-2"} gap-[24px]`}
                >
                  {images.slice(0, 2).map((img, index) => (
                    <div
                      key={index}
                      className={`relative w-full ${images.length === 1 ? "aspect-[16/9] lg:aspect-[2/1]" : "aspect-[1.3] lg:h-[320px] lg:aspect-auto"} rounded-[16px] overflow-hidden`}
                    >
                      <Image
                        src={img}
                        alt={`Project image ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              )}
              {images.length > 2 && (
                <div className="relative w-full aspect-[16/9] lg:aspect-[2/1] rounded-[16px] overflow-hidden">
                  <Image
                    src={images[2]}
                    alt={`Project image 3`}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      <section className="w-full bg-[#101418] pt-[60px] md:pt-[80px] pb-[40px] md:pb-[60px]">
        <Container className="flex flex-col items-center text-center max-lg:px-[4%]">
          <span className="uppercase font-sans text-[11px] font-semibold leading-[1.6] tracking-[2.2px] text-white/50 mb-[24px]">
            GET STARTED
          </span>

          <h2 className="font-sans text-[32px] md:text-[44px] font-normal leading-[1.1] md:leading-[48.4px] text-white max-w-[650px] mb-[48px]">
            We are the MEP consultants for
            <br className="hidden md:block" /> speedy site execution & lower
            <br className="hidden md:block" /> project costs.
          </h2>

          <ResendForm formType="Project Inquiry" className="flex flex-col md:flex-row items-center gap-[16px] w-full max-w-[850px]">
            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              className="w-full md:flex-1 bg-[#1C1F26] border border-[#505050] rounded-[8px] px-[20px] py-[14px] font-sans text-[16px] font-normal leading-[1.5] text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-colors"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="w-full md:flex-1 bg-[#1C1F26] border border-[#505050] rounded-[8px] px-[20px] py-[14px] font-sans text-[16px] font-normal leading-[1.5] text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-colors"
            />
            <input
              type="tel"
              name="phone"
              required
              placeholder="Phone"
              className="w-full md:flex-1 bg-[#1C1F26] border border-[#505050] rounded-[8px] px-[20px] py-[14px] font-sans text-[16px] font-normal leading-[1.5] text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-colors"
            />
            <button
              type="submit"
              className="w-full md:w-auto bg-[#ED2967] rounded-full px-[32px] py-[14px] whitespace-nowrap group transition-colors"
            >
              <span className="font-sans text-[16px] font-bold leading-[1.5] text-[#000000] group-hover:text-white transition-colors">
                Get Profile &rarr;
              </span>
            </button>
          </ResendForm>
        </Container>
      </section>
    </>
  );
}
