"use client";

import { useFormStatus } from "react-dom";
import { LogOut } from "lucide-react";
import { TopLoader } from "@/components/common/top-loader";

export function LogoutButton() {
  return (
    <form action="/api/admin/logout" method="post" className="mt-4">
      <LogoutSubmitButton />
    </form>
  );
}

function LogoutSubmitButton() {
  const { pending } = useFormStatus();

  return (
    <>
      <TopLoader active={pending} />
      <button
        type="submit"
        disabled={pending}
        className="inline-flex h-11 w-full items-center gap-3 rounded-lg px-3 text-left text-sm text-white/65 transition hover:bg-white/10 hover:text-white disabled:pointer-events-none disabled:opacity-60"
      >
        <LogOut size={17} />
        {pending ? "Logging out" : "Logout"}
      </button>
    </>
  );
}
