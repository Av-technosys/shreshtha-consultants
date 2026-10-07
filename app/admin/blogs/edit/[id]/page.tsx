import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { AdminShell } from "@/components/admin/admin-shell";
import { updateBlogAction } from "@/helpers/admin/blog-actions";
import { getAdminBlog, getAdminCategories } from "@/helpers/admin/blogs";
import { BlogForm } from "@/components/admin/blog-form";


export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export default async function EditAdminBlogPage({ params }: PageProps<"/admin/blogs/edit/[id]">) {
  const { id } = await params;
  const blog = await getAdminBlog(id);
  const categories = await getAdminCategories();

  if (!blog) {
    notFound();
  }

  return (
    <AdminShell>
      <section className="mx-auto max-w-[980px] rounded-lg border border-[#e5e1d8] bg-white shadow-[0_10px_28px_rgb(32_28_23_/_0.06)]">
        <div className="flex items-start justify-between border-b border-[#ebe7df] p-5 max-[640px]:block">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#777067]">Blogs</p>
            <h1 className="font-archivo mt-3 text-[clamp(30px,3vw,42px)] font-semibold leading-[1.05] tracking-[-0.035em]">
              Edit blog.
            </h1>
          </div>
          <Link
            href="/admin/blogs"
            className="inline-flex h-9 items-center gap-2 rounded-full border border-[#e1ddd5] px-4 text-xs font-bold text-[#4f4942] transition hover:border-[#111419] hover:text-[#111419] max-[640px]:mt-4"
          >
            <ArrowLeft size={14} />
            Back to Blogs
          </Link>
        </div>

        <BlogForm blog={blog} categories={categories} action={updateBlogAction.bind(null, blog.id)} />
      </section>
    </AdminShell>
  );
}
