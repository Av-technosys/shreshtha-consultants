import Link from "next/link";
import { CalendarDays, Edit3, Plus, Trash2 } from "lucide-react";
import { AdminShell } from "@/components/admin/admin-shell";
import { CategoryManagerDialog } from "@/components/admin/category-manager-dialog";
import { deleteBlogAction } from "@/helpers/admin/blog-actions";
import { getAdminBlogs, getAdminCategoryList, type AdminBlogStatus } from "@/helpers/admin/blogs";


export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export default async function AdminBlogsPage() {
  const blogs = await getAdminBlogs();
  const categories = await getAdminCategoryList();

  return (
    <AdminShell>
      <header className="flex items-start justify-between gap-5 max-[760px]:block">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#777067]">Blogs</p>
          <h1 className="font-archivo mt-3 text-[clamp(32px,3.2vw,46px)] font-semibold leading-[1.05] tracking-[-0.035em]">
            Manage website blogs.
          </h1>
        </div>
        <div className="flex flex-wrap justify-end gap-3 max-[760px]:mt-5 max-[760px]:justify-start">
          <CategoryManagerDialog categories={categories} />
          <Link
            href="/admin/blogs/new"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-[#111419] px-5 text-sm font-semibold text-white transition hover:bg-[#ed2967]"
          >
            <Plus size={17} strokeWidth={2} />
            Add New Blog
          </Link>
        </div>
      </header>

      <section className="mt-7 rounded-lg border border-[#e5e1d8] bg-white p-5 shadow-[0_10px_28px_rgb(32_28_23_/_0.06)]">
        <div className="flex items-center justify-between gap-3 max-[640px]:block">
          <h2 className="font-archivo text-xl font-semibold tracking-[-0.02em]">All Blogs</h2>
          <div className="text-sm font-semibold text-[#817a72]">{blogs.length} total</div>
        </div>

        <div className="mt-5 overflow-hidden rounded-lg border border-[#ece8e0]">
          <div className="grid grid-cols-[1.35fr_0.6fr_0.55fr_0.45fr] bg-[#f7f6f2] px-4 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[#827b72] max-[900px]:hidden">
            <span>Blog</span>
            <span>Category</span>
            <span>Date</span>
            <span className="text-right">Actions</span>
          </div>

          <div className="divide-y divide-[#ece8e0]">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="grid grid-cols-[1.35fr_0.6fr_0.55fr_0.45fr] items-center gap-4 bg-white px-4 py-4 max-[900px]:grid-cols-1"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-[15px] font-semibold leading-snug text-[#141414]">{blog.title}</h3>
                    <StatusBadge status={blog.status} />
                  </div>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#6a645d]">{blog.metaDescription}</p>
                </div>
                <p className="text-sm font-semibold text-[#625c55]">{blog.category}</p>
                <p className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#7b746b]">
                  <CalendarDays size={14} />
                  {blog.date}
                </p>
                <div className="flex justify-end gap-2 max-[900px]:justify-start">
                  <Link
                    href={`/admin/blogs/edit/${blog.id}`}
                    className="inline-flex h-9 items-center gap-2 rounded-full border border-[#e1ddd5] px-3 text-xs font-bold text-[#4f4942] transition hover:border-[#111419] hover:text-[#111419]"
                  >
                    <Edit3 size={14} />
                    Edit
                  </Link>
                  <form action={deleteBlogAction.bind(null, blog.id)}>
                    <button type="submit" className="inline-flex h-9 items-center gap-2 rounded-full border border-[#f0d6df] px-3 text-xs font-bold text-[#ed2967] transition hover:bg-[#fff2f6]">
                      <Trash2 size={14} />
                      Delete
                    </button>
                  </form>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </AdminShell>
  );
}

function StatusBadge({ status }: { status: AdminBlogStatus }) {
  return (
    <span
      className={[
        "inline-flex h-7 shrink-0 items-center rounded-full px-3 text-xs font-bold",
        status === "Published" ? "bg-[#eaf8ef] text-[#247044]" : "bg-[#f7f1df] text-[#80611d]",
      ].join(" ")}
    >
      {status}
    </span>
  );
}
