import Image from "next/image";
import Link from "next/link";
import { ChevronRight, FileText, LayoutDashboard, Plus } from "lucide-react";


import { getAdminBlogs } from "@/helpers/admin/blogs";

export default async function AdminPage() {
  const blogs = await getAdminBlogs();
  const publishedCount = blogs.filter((b) => b.status === "Published").length;
  const draftCount = blogs.filter((b) => b.status === "Draft").length;
  const totalCount = blogs.length;

  return (
    <main className="font-inter grid min-h-screen grid-cols-[280px_1fr] bg-[#f7f6f2] text-[#121417] max-[1080px]:grid-cols-1">
      <aside className="sticky top-0 h-screen overflow-y-auto border-r border-[#e3e0d8] bg-[#111419] px-6 py-7 text-white max-[1080px]:static max-[1080px]:h-auto max-[1080px]:border-r-0">
        <div className="flex items-center gap-3">
          <span className="grid size-12 place-items-center rounded-lg bg-white">
            <Image src="/Common/logo.png" alt="" width={34} height={34} priority className="size-[34px]" />
          </span>
          <div>
            <p className="font-archivo text-lg font-semibold leading-none">Shreshtha</p>
            <p className="mt-1 text-xs text-white/50">Admin Panel</p>
          </div>
        </div>

        <nav className="mt-10 grid gap-2 text-sm">
          <Link href="/admin" className="inline-flex h-11 items-center gap-3 rounded-lg bg-white px-3 text-left text-[#111419] transition">
            <LayoutDashboard size={17} />
            Dashboard
          </Link>
          <Link href="/admin/blogs" className="inline-flex h-11 items-center gap-3 rounded-lg px-3 text-left text-white/65 transition hover:bg-white/10 hover:text-white">
            <FileText size={17} />
            Blogs
          </Link>
        </nav>
      </aside>

      <section className="min-w-0 px-8 py-7 max-[900px]:px-5">
        <header>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#777067]">Overview</p>
          <h1 className="font-archivo mt-3 text-[clamp(34px,3.6vw,52px)] font-semibold leading-[1.04] tracking-[-0.04em]">
            Welcome to the Dashboard
          </h1>
          <p className="mt-4 max-w-[640px] text-base leading-7 text-[#6f6860]">
            Here is your content overview. Monitor your published posts and manage your drafts to keep your website up to date.
          </p>
        </header>

        <div className="mt-8 grid grid-cols-[1.1fr_0.9fr] gap-5 max-[1080px]:grid-cols-1">
          <section className="rounded-lg border border-[#e5e1d8] bg-white p-6 shadow-[0_10px_28px_rgb(32_28_23_/_0.06)]">
            <div className="flex items-start justify-between gap-5 max-[640px]:block">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#817a72]">Active Module</p>
                <h2 className="font-archivo mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#111419]">
                  Blogs
                </h2>
                <p className="mt-3 max-w-[520px] text-sm leading-6 text-[#6a645d]">
                  Add new articles, edit existing entries, and keep content organized from the Blogs section.
                </p>
              </div>
              <span className="grid size-12 place-items-center rounded-lg bg-[#f7f6f2] text-[#ed2967] max-[640px]:mt-5">
                <FileText size={22} strokeWidth={2} />
              </span>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 max-[520px]:grid-cols-1">
              <Link href="/admin/blogs" className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#111419] px-5 text-sm font-semibold text-white transition hover:bg-[#ed2967]">
                Open Blogs
                <ChevronRight size={16} />
              </Link>
              <Link href="/admin/blogs/new" className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-[#111419] px-5 text-sm font-semibold text-[#111419] transition hover:bg-[#111419] hover:text-white">
                Add Blog
                <Plus size={16} />
              </Link>
            </div>
          </section>

          <section className="flex flex-col justify-between rounded-lg border border-[#e5e1d8] bg-[#111419] p-6 text-white shadow-[0_10px_28px_rgb(32_28_23_/_0.08)]">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/45">Blog Statistics</p>
            <div className="mt-6 grid flex-1 grid-cols-2 gap-4 max-[400px]:grid-cols-1">
              <div className="flex flex-col justify-center rounded-lg border border-white/10 bg-white/5 p-4">
                <span className="text-xs text-white/60 uppercase tracking-widest">Published</span>
                <strong className="font-archivo mt-1 text-4xl font-semibold text-white">{publishedCount}</strong>
              </div>
              <div className="flex flex-col justify-center rounded-lg border border-white/10 bg-white/5 p-4">
                <span className="text-xs text-white/60 uppercase tracking-widest">Drafts</span>
                <strong className="font-archivo mt-1 text-4xl font-semibold text-white">{draftCount}</strong>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
              <span className="text-sm text-white/60">Total Posts</span>
              <strong className="text-sm font-semibold text-white">{totalCount}</strong>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
