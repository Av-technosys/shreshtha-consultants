"use client";

import { motion, useScroll } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

export function TimelineProgress({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 62%", "end 62%"],
  });

  return (
    <div ref={ref} className="relative z-[1] py-5">
      <span className="absolute bottom-0 left-1/2 top-0 w-[3px] -translate-x-1/2 bg-[#eee] max-[900px]:left-[1.5em] max-[900px]:translate-x-0" />
      <motion.span
        className="absolute left-1/2 top-0 z-[1] h-full w-[3px] origin-top -translate-x-1/2 bg-[#ed2967] max-[900px]:left-[1.5em] max-[900px]:translate-x-0"
        style={{ scaleY: scrollYProgress }}
      />
      {children}
    </div>
  );
}
