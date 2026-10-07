"use client";

import { useEffect, useRef } from "react";

type Faq = {
  question: string;
  answer: string;
};

export function BlogFaq({ faqs }: { faqs: Faq[] }) {
  const detailsRefs = useRef<(HTMLDetailsElement | null)[]>([]);

  const handleToggle = (idx: number, isOpen: boolean) => {
    if (isOpen) {
      detailsRefs.current.forEach((details, i) => {
        if (details && i !== idx) {
          details.open = false;
        }
      });
    }
  };

  return (
    <div className="grid gap-4">
      {faqs.map((faq, idx) => (
        <details
          key={idx}
          ref={(el) => {
            detailsRefs.current[idx] = el;
          }}
          name="blog-faqs" // Native fallback for modern browsers
          onToggle={(e) => handleToggle(idx, e.currentTarget.open)}
          className="group rounded-[14px] border border-[#e1ddd5] bg-white transition-all duration-300 open:shadow-sm"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 max-[520px]:p-4 max-[520px]:gap-3 text-[17px] max-[520px]:text-[16px] font-semibold text-[#111] outline-none transition-colors hover:text-[#ed2967] group-open:text-[#ed2967] [&::-webkit-details-marker]:hidden">
            <span className="leading-snug">{faq.question}</span>
            <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#f7f6f2] text-[#111] transition-all duration-300 group-open:rotate-180 group-open:bg-[#111] group-open:text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          </summary>
          <div className="px-6 pb-6 max-[520px]:px-4 max-[520px]:pb-4 text-[16px] max-[520px]:text-[15px] leading-[1.8] text-[#555] whitespace-pre-wrap">
            {faq.answer}
          </div>
        </details>
      ))}
    </div>
  );
}

