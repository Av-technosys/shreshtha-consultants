import Link from "next/link";
import { FileText, LayoutDashboard } from "lucide-react";

export function AdminShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="grid min-h-screen grid-cols-[280px_1fr] bg-[#f7f6f2] font-inter text-[#121417] max-[1080px]:grid-cols-1">
      <aside className="sticky top-0 h-screen overflow-y-auto border-r border-[#e3e0d8] bg-[#111419] px-6 py-7 text-white max-[1080px]:static max-[1080px]:h-auto max-[1080px]:border-r-0">
        <div className="flex items-center gap-3">
          <span className="grid size-12 place-items-center rounded-lg bg-white">
            <img src="/Common/logo.png" alt="" className="size-[34px]" />
          </span>
          <div>
            <p className="font-archivo text-lg font-semibold leading-none">Shreshtha</p>
            <p className="mt-1 text-xs text-white/50">Admin Panel</p>
          </div>
        </div>

        <nav className="mt-10 grid gap-2 text-sm">
          <Link href="/admin" className="inline-flex h-11 items-center gap-3 rounded-lg px-3 text-left text-white/65 transition hover:bg-white/10 hover:text-white">
            <LayoutDashboard size={17} />
            Dashboard
          </Link>
          <Link href="/admin/blogs" className="inline-flex h-11 items-center gap-3 rounded-lg bg-white px-3 text-left text-[#111419] transition">
            <FileText size={17} />
            Blogs
          </Link>
        </nav>
      </aside>

      <section className="min-w-0 px-8 py-7 max-[900px]:px-5">{children}</section>
    </main>
  );
}
