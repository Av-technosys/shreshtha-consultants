"use client";

import { useTransition } from "react";
import { LogOut } from "lucide-react";
import { TopLoader } from "@/components/common/top-loader";
import { logoutAdminAction } from "@/helpers/admin/blog-actions";

export function LogoutButton() {
  const [isPending, startTransition] = useTransition();

  return (
    <>
      <TopLoader active={isPending} />
      <button
        type="button"
        disabled={isPending}
        onClick={() => {
          startTransition(async () => {
            await logoutAdminAction();
          });
        }}
        className="inline-flex h-11 w-full items-center gap-3 rounded-lg px-3 text-left text-sm text-white/65 transition hover:bg-white/10 hover:text-white disabled:pointer-events-none disabled:opacity-60"
      >
        <LogOut size={17} />
        {isPending ? "Logging out..." : "Logout"}
      </button>
    </>
  );
}
