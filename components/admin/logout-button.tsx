"use client";

import { useState } from "react";
import { LogOut } from "lucide-react";
import { TopLoader } from "@/components/common/top-loader";

export function LogoutButton() {
  const [pending, setPending] = useState(false);

  async function handleLogout(e: React.FormEvent) {
    e.preventDefault();
    if (pending) return;
    setPending(true);

    try {
      await fetch("/api/admin/logout", {
        method: "POST",
      });
      window.location.href = "/admin/login";
    } catch {
      window.location.href = "/admin/login";
    } finally {
      setPending(false);
    }
  }

  return (
    <>
      <TopLoader active={pending} />
      <form onSubmit={handleLogout} action="/api/admin/logout" method="post" className="w-full">
        <button
          type="submit"
          disabled={pending}
          className="inline-flex h-11 w-full items-center gap-3 rounded-lg px-3 text-left text-sm text-white/65 transition hover:bg-white/10 hover:text-white disabled:pointer-events-none disabled:opacity-60"
        >
          <LogOut size={17} />
          {pending ? "Logging out..." : "Logout"}
        </button>
      </form>
    </>
  );
}
