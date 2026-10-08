"use client";

import { useRouter } from "next/navigation";
import { ArrowRight, LockKeyhole, Mail } from "lucide-react";
import { type FormEvent, useState } from "react";
import { TopLoader } from "@/components/common/top-loader";

export function AdminLoginForm() {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;

    const formData = new FormData(event.currentTarget);
    setPending(true);
    setError("");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: String(formData.get("email") ?? ""),
          password: String(formData.get("password") ?? ""),
        }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { message?: string } | null;
        setError(data?.message || "Invalid email or password.");
        return;
      }

      router.replace("/admin");
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <>
      <TopLoader active={pending} />
      <form className="grid gap-5" onSubmit={handleSubmit}>
        <label className="grid gap-2 text-sm font-semibold text-[#48423c]">
          Email Address
          <span className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#928b82]" size={17} />
            <input
              type="email"
              name="email"
              autoComplete="username"
              required
              placeholder="admin@shreshtha.com"
              className="h-12 w-full rounded-md border border-[#e1ddd5] bg-[#f7f6f2] pl-10 pr-3 text-sm font-medium outline-none transition focus:border-[#ed2967]"
            />
          </span>
        </label>

      <label className="grid gap-2 text-sm font-semibold text-[#48423c]">
        Password
        <span className="relative">
          <LockKeyhole className="absolute left-3 top-1/2 -translate-y-1/2 text-[#928b82]" size={17} />
          <input
            type="password"
            name="password"
            autoComplete="current-password"
            required
            placeholder="Enter password"
            className="h-12 w-full rounded-md border border-[#e1ddd5] bg-[#f7f6f2] pl-10 pr-3 text-sm font-medium outline-none transition focus:border-[#ed2967]"
          />
        </span>
      </label>

      <div className="flex items-center justify-between gap-4 text-sm max-[420px]:block">
        <label className="inline-flex items-center gap-2 font-medium text-[#625c55]">
          <input type="checkbox" className="size-4 accent-[#ed2967]" disabled />
          Remember me
        </label>
        <span className="font-semibold text-[#ed2967] max-[420px]:mt-3 max-[420px]:inline-block">
          Secure access only
        </span>
      </div>

      {error ? (
        <p className="rounded-md bg-[#fff1f0] px-4 py-3 text-sm font-semibold text-[#b42318]" role="alert">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="mt-1 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#111419] px-6 text-sm font-semibold text-white transition hover:bg-[#ed2967] disabled:pointer-events-none disabled:opacity-70"
      >
        {pending ? "Signing in..." : "Login to Admin"}
        <ArrowRight size={16} strokeWidth={2} />
      </button>
      </form>
    </>
  );
}
