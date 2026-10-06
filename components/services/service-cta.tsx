import * as React from "react";
import { Archivo } from "next/font/google";
import { Container } from "@/components/common/container";

const displayFont = Archivo({ subsets: ["latin"] });

export interface ServiceCTAProps {
  kicker: string;
  title: string;
  buttonText?: string;
}

export function ServiceCTA({ kicker, title, buttonText = "Request Proposal" }: ServiceCTAProps) {
  return (
    <section className="bg-[#f7f6f2] pb-[80px] pt-[70px] max-[760px]:pb-[60px] max-[760px]:pt-[40px]">
      <Container>
        <div className="mb-[60px] flex flex-col items-center text-center">
          <div className={`${displayFont.className} mb-4 flex items-center justify-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.25em] text-[#5c6570] before:h-[1px] before:w-[26px] before:bg-[#ed2967]`}>
            {kicker}
          </div>
          <h2 className={`${displayFont.className} mx-auto max-w-[800px] text-[clamp(28px,3.5vw,46px)] font-bold leading-[1.15] tracking-[-0.03em] text-[#101418]`}>
            {title}
          </h2>
        </div>

        <div className="relative mx-auto max-w-[940px] px-4 py-8 sm:p-12 lg:p-[72px]">
          <div className="absolute inset-0 rounded-[40px] sm:rounded-[80px] bg-[#F5F4F0]"></div>
          <div className="absolute inset-[8px] sm:inset-[16px] lg:inset-[24px] rounded-[36px] sm:rounded-[70px] bg-[#F1F1ED]"></div>
          <div className="absolute inset-[16px] sm:inset-[32px] lg:inset-[48px] rounded-[32px] sm:rounded-[60px] bg-[#ECEDE9]"></div>
          
          <div className="relative rounded-[24px] sm:rounded-[40px] bg-white p-6 sm:p-10 lg:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.04)] text-left">
            <form action="https://formspree.io/f/mvkggkev" method="POST">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
                <Field label="Name*" name="name" required placeholder="Your full name" />
                <Field label="Email*" name="email" type="email" required placeholder="you@company.com" />
                <Field label="Phone*" name="phone" required placeholder="+91" />
              </div>
              <div className="mt-8">
                <button
                  className={`${displayFont.className} group flex w-full items-center justify-center gap-2.5 rounded-full bg-[#111519] px-8 py-[14px] sm:py-[18px] text-[15px] font-bold text-white transition duration-300 hover:bg-[#16163f]`}
                  type="submit"
                >
                  {buttonText} <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className={`${displayFont.className} text-[13px] font-bold text-[#101418]`}>{label}</label>
      <input
        className="w-full rounded-xl border border-[#e3e0d8] bg-[#f7f6f2] px-5 py-[14px] text-[15px] text-[#101418] outline-none transition focus:border-[#101418] focus:bg-white focus:shadow-[0_0_0_4px_rgb(237_41_103_/_0.15)]"
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
}

