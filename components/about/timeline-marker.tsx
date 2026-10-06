"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type TimelineMarkerProps = {
  year: string;
  flip: boolean;
  children: ReactNode;
};

export function TimelineMarker({ year, flip, children }: TimelineMarkerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let frame = 0;

    function update() {
      frame = 0;

      if (!ref.current) {
        return;
      }

      const rect = ref.current.getBoundingClientRect();
      const markerCenter = rect.top + rect.height / 2;
      const lineEnd = window.innerHeight * 0.62;

      setIsActive(markerCenter <= lineEnd);
    }

    function requestUpdate() {
      if (!frame) {
        frame = window.requestAnimationFrame(update);
      }
    }

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={[
        "absolute left-1/2 top-1/2 z-[3] flex size-[3em] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full transition-colors duration-300 max-[900px]:left-[1.5em] max-[900px]:translate-x-[-50%]",
        isActive ? "bg-[#ed2967] text-white" : "bg-[#eee] text-[#5c6570]",
      ].join(" ")}
    >
      {children}
      <span
        className={[
          "absolute top-1/2 -translate-y-1/2 whitespace-nowrap text-base font-normal leading-[23px] text-[#5c6570] max-[900px]:left-[calc(100%+18px)] max-[900px]:right-auto max-[520px]:text-sm",
          flip ? "right-[calc(100%+18px)]" : "left-[calc(100%+18px)]",
        ].join(" ")}
      >
        {year}
      </span>
    </div>
  );
}
