"use client";

import { Archivo } from "next/font/google";
import { Container } from "@/components/common/container";

const displayFont = Archivo({ subsets: ["latin"] });

const testimonials = [
  {
    initials: "HP",
    name: "Harshad Patil",
    role: "Strategy Head, Kolte Patil Developers",
    quote:
      "Shreshtha offers a unique AI-enabled consultancy for MEP. With AI, optimised MEP designs to save materials, clash-coordinated drawings & multiple routing options are now possible.",
  },
  {
    initials: "SK",
    name: "Satish Kamble",
    role: "MEP Head, HOSMAC",
    quote:
      "We have nurtured a strong partnership with Shreshtha for our hospital projects. Their consultancy support for MEP helps us with quick & highly-detailed drawings for efficient project execution.",
  },
  {
    initials: "AJ",
    name: "Ar. Atishay Jain",
    role: "Managing Director, AJ Studios",
    quote:
      "As architects, we are often pushed to deliver on tight deadlines. Shreshtha team has helped us identify key coordination items to meet critical deadlines with coordinated designs.",
  },
  {
    initials: "RK",
    name: "Rishad Khergamwala",
    role: "Director of Developments, MAIA Estate",
    quote:
      "It is a pleasure working with Shreshtha. They are our go-to MEP consultants. We're always confident about the excellent services from these innovative MEP engineers.",
  },
  {
    initials: "AB",
    name: "Anoop Bartaria",
    role: "Principle Architect, Sincere Architects",
    quote:
      "We partnered with Shreshtha for our commercial kitchen project & retail stores. They are the best in their work and always focus on optimising the designs to reduce project costs.",
  },
];

export function TestimonialsSection() {
  const loop = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="pb-[130px] max-[760px]:pb-[90px]">
      <style>{`
        @keyframes testimonial-marquee {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-33.333%, 0, 0); }
        }
      `}</style>
      <Container>
        <div className="mb-10 flex items-end justify-between gap-10 max-[760px]:block">
          <div>
            <Kicker>Testimonials</Kicker>
            <h2 className={`${displayFont.className} mt-5 text-[clamp(30px,3vw,44px)] font-bold leading-[1.04] tracking-[-0.03em]`}>
              Real stories, real results
            </h2>
            <p className="mt-2.5 text-[#5c6570]">
              — see how we&apos;ve made a difference in our clients&apos; lives.
            </p>
          </div>
        </div>
      </Container>

      <div className="overflow-hidden px-1 pb-[26px] pt-2 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div className="flex w-max transform-gpu gap-[22px] will-change-transform [animation:testimonial-marquee_64s_linear_infinite]">
          {loop.map((testimonial, index) => (
            <article
              className="flex w-[420px] flex-none flex-col rounded-[18px] border border-[#e3e0d8] bg-white px-[34px] py-[38px] max-[760px]:w-[min(82vw,360px)] max-[760px]:px-6 max-[760px]:py-[30px]"
              key={`${testimonial.name}-${index}`}
            >
              <div className={`${displayFont.className} mb-[22px] text-[46px] font-bold leading-[0.6] text-[#ed2967]`}>
                “
              </div>
              <p className="mb-[26px] flex-1 text-[15.5px] leading-7 text-[#333a41]">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-3.5">
                <div className={`${displayFont.className} grid size-[46px] flex-none place-items-center rounded-full bg-[#101418] font-bold text-[#ed2967]`}>
                  {testimonial.initials}
                </div>
                <div>
                  <b className={`${displayFont.className} block text-[15px]`}>{testimonial.name}</b>
                  <span className="text-[12.5px] text-[#5c6570]">{testimonial.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${displayFont.className} flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.22em] text-[#5c6570] before:h-0.5 before:w-[26px] before:bg-[#ed2967]`}>
      {children}
    </div>
  );
}
