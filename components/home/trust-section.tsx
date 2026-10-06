"use client";

import Image from "next/image";
import { Archivo } from "next/font/google";
import { Container } from "@/components/common/container";

const displayFont = Archivo({ subsets: ["latin"] });

const clients = [
  { name: "Client 20", src: "/Home/clients/logo-20.png" },
  { name: "Client 19", src: "/Home/clients/logo-19.png" },
  { name: "Client 18", src: "/Home/clients/logo-18.png" },
  { name: "Client 17", src: "/Home/clients/logo-17.png" },
  { name: "Client 16", src: "/Home/clients/logo-16.png" },
  { name: "Client 15", src: "/Home/clients/logo-15.png" },
  { name: "Client 14", src: "/Home/clients/logo-14.png" },
  { name: "Client 13", src: "/Home/clients/logo-13.png" },
  { name: "Client 12", src: "/Home/clients/logo-12.png" },
  { name: "Client 11", src: "/Home/clients/logo-11.png" },
  { name: "Client 10", src: "/Home/clients/logo-10.png" },
  { name: "Client 9", src: "/Home/clients/logo-9.png" },
  { name: "Client 8", src: "/Home/clients/logo-8.png" },
  { name: "Client 7", src: "/Home/clients/logo-7.png" },
  { name: "Client 6", src: "/Home/clients/logo-6.png" },
  { name: "Client 5", src: "/Home/clients/logo-5.png" },
  { name: "Client 4", src: "/Home/clients/logo-4.png" },
  { name: "Client 3", src: "/Home/clients/logo-3.png" },
  { name: "Client 2", src: "/Home/clients/logo-2.png" },
  { name: "Client 1", src: "/Home/clients/logo-1.png" },
  { name: "Client logo", src: "/Home/clients/untitled-design-12.png" },
];

type ClientLogo = (typeof clients)[number];

export function TrustSection() {
  const first = clients.filter((_, index) => index % 2 === 0);
  const second = clients.filter((_, index) => index % 2 === 1);

  return (
    <section className="border-t border-[#e3e0d8] py-[70px]">
      <style>{`
        @keyframes client-logo-marquee {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-33.333%, 0, 0); }
        }
      `}</style>
      <Container className="mb-11 flex items-end justify-between gap-10 max-[760px]:block">
        <div>
          <Kicker>Industry Trusted</Kicker>
          <h2 className={`${displayFont.className} mt-[18px] text-[clamp(26px,2.6vw,38px)] font-bold leading-[1.05] tracking-[-0.03em]`}>
            Industry Trusted
          </h2>
        </div>
        <p className="max-w-[420px] text-[15px] leading-7 text-[#5c6570] max-[760px]:mt-[18px]">
          Trusted by industry leaders who demand excellence because when
          precision matters, they choose Shreshtha.
        </p>
      </Container>
      <LogoMarquee items={first} />
      <div className="h-5" />
      <LogoMarquee items={second} reverse />
    </section>
  );
}

function LogoMarquee({ items, reverse = false }: { items: ClientLogo[]; reverse?: boolean }) {
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
      <div
        className={[
          "flex w-max transform-gpu gap-[18px] py-1 will-change-transform [animation:client-logo-marquee_58s_linear_infinite]",
          reverse ? "[animation-direction:reverse]" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {[...items, ...items, ...items].map((item, index) => (
          <div
            className="group grid h-[90px] w-[190px] flex-none place-items-center rounded-xl border border-[#e3e0d8] bg-white px-4 py-3"
            key={`${item.src}-${index}`}
          >
            <Image
              src={item.src}
              alt={item.name}
              width={160}
              height={80}
              className="h-[58px] w-[158px] object-contain grayscale saturate-0 transition duration-300 group-hover:grayscale-0 group-hover:saturate-100"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${displayFont.className} flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.22em] text-[#5c6570] before:h-0.5 before:w-[26px] before:bg-[#ed2967]`}>
      {children}
    </div>
  );
}
