"use client";

import { useRef } from "react";
import { Maximize2, Sparkles } from "lucide-react";
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
          <h2 className="font-archivo my-[22px] mb-[34px] text-[clamp(30px,3.2vw,46px)] font-bold leading-[1.06] tracking-[-0.03em]">
            AI software built to{" "}
            <em className="not-italic text-[#ed2967]">reduce errors, cut costs,</em>{" "}
            and maximize design efficiency.
          </h2>
          <div className="grid grid-cols-2 gap-[18px] max-[760px]:grid-cols-1">
            <div className="rounded-2xl border border-white/15 p-[26px] transition hover:border-[#ed2967] hover:bg-white/[0.04]">
              <div className="mb-[18px] grid size-[34px] place-items-center rounded-full bg-[#ed2967]">
                <Sparkles className="size-4 stroke-2" />
              </div>
              <b className="font-archivo mb-2 block text-lg">AI Design</b>
              <span className="text-[13.5px] leading-6 text-white/60">
                Optimised MEP drawings generated with our in-house AI engine.
              </span>
            </div>
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
