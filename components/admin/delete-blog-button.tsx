"use client";

import { useFormStatus } from "react-dom";
import { Trash2 } from "lucide-react";
import { TopLoader } from "@/components/common/top-loader";

export function DeleteBlogButton() {
  const { pending } = useFormStatus();

  return (
    <>
      <TopLoader active={pending} />
      <button
        type="submit"
        disabled={pending}
        className="inline-flex h-9 min-w-[86px] items-center justify-center gap-2 rounded-full border border-[#f0d6df] px-3 text-xs font-bold text-[#ed2967] transition hover:bg-[#fff2f6] disabled:pointer-events-none disabled:opacity-60"
      >
        <Trash2 size={14} />
        {pending ? "Deleting" : "Delete"}
      </button>
    </>
  );
}
