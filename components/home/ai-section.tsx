"use client";

import { useRef } from "react";
import { Maximize2 } from "lucide-react";
import { Container } from "@/components/common/container";


export function AiSection() {
  const videoWrapRef = useRef<HTMLDivElement>(null);

  function openFullscreen() {
    videoWrapRef.current?.requestFullscreen();
  }

  return (
    <section className="relative overflow-hidden bg-[#101418] py-[110px] text-white after:absolute after:right-[-180px] after:top-[-180px] after:size-[520px] after:rounded-full after:bg-[radial-gradient(circle,rgb(237_41_103_/_0.16),transparent_70%)] max-[760px]:py-20">
      <Container className="relative z-[1] grid grid-cols-[1.05fr_0.95fr] items-center gap-[70px] max-[760px]:grid-cols-1 max-[760px]:gap-[38px]">
        <div>
          <div className="font-archivo flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.22em] text-white/55 before:h-0.5 before:w-[26px] before:bg-[#ed2967]">
            In-house Technology
          </div>
          <h2 className="font-archivo my-[22px] mb-[34px] text-[30px] md:text-[46px] font-bold leading-[1.06] tracking-[-0.03em]">
            AI software built to{" "}
            <em className="not-italic text-[#ed2967]">reduce errors, cut costs,</em>{" "}
            and maximize design efficiency.
          </h2>
          <div>
            <button
              type="button"
              className="font-archivo group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#ed2967] px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-[#101418]"
            >
              Read More <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </button>
          </div>
        </div>

        <div
          ref={videoWrapRef}
          className="relative aspect-[16/10.5] overflow-hidden rounded-[18px] border border-white/15 bg-black"
        >
          <video className="size-full object-cover" src="/Home/AI-Video.mp4" muted loop playsInline autoPlay preload="metadata" />
          <button
            type="button"
            aria-label="Open video fullscreen"
            onClick={openFullscreen}
            className="absolute bottom-4 right-4 grid size-11 place-items-center rounded-full border border-white/20 bg-[#101418]/75 text-white backdrop-blur-md transition hover:border-white/40 hover:bg-[#ed2967]"
          >
            <Maximize2 className="size-[18px] stroke-2" />
          </button>
        </div>
      </Container>
    </section>
  );
}
