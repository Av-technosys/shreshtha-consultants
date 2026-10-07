import Image from "next/image";
import Link from "next/link";
import { getPublishedBlogs, type AdminBlog } from "@/helpers/admin/blogs";
import { Container } from "@/components/common/container";


export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export default async function BlogPage() {
  const blogPosts = await getPublishedBlogs();

  return (
    <main className="font-inter overflow-hidden bg-[#f7f6f2] text-[#1a1a1a]">
      <section className="bg-[#f7f7f4] py-[44px] max-[900px]:py-10 max-[520px]:py-8">
        <Container>
          <div className="max-w-[1020px]">
            <h1 className="font-archivo text-[clamp(38px,4.8vw,58px)] font-normal leading-[1.08] tracking-[-0.025em] max-[520px]:max-w-full">
              Insights. Inspiration. Innovation.
            </h1>
            <p className="mt-[18px] max-w-[720px] text-[clamp(17px,2vw,24px)] leading-[1.35] text-[#1a1a1a] max-[520px]:mt-4">
              Explore stories, trends, and ideas shaping the future.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[#F7F6F2] py-[38px] max-[900px]:py-7 max-[520px]:py-6">
        <Container>
          <div className="grid grid-cols-3 gap-[30px] max-[1280px]:grid-cols-2 max-[900px]:gap-5 max-[720px]:grid-cols-1">
            {blogPosts.map((post, index) => (
              <BlogCard key={`${post.title}-${index}`} post={post} priority={index < 3} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}

function BlogCard({ post, priority }: { post: AdminBlog; priority: boolean }) {
  const href = `/blog/${post.slug}`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[14px] bg-white p-[10px] shadow-[0_8px_22px_rgb(32_28_23_/_0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgb(32_28_23_/_0.11)] max-[520px]:p-2">
      <Link href={href} aria-label={post.title} className="relative block shrink-0 aspect-[506/333] overflow-hidden rounded-[10px] bg-[#e8e4dc] max-[520px]:rounded-[9px]">
        <Image
          src={getImageSrc(post.image)}
          alt=""
          fill
          priority={priority}
          sizes="(max-width: 720px) calc(100vw - 56px), (max-width: 1280px) calc(50vw - 58px), 31vw"
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
        />
      </Link>

      <div className="flex flex-1 flex-col px-3 pb-3 pt-5 max-[520px]:px-2.5 max-[520px]:pt-4">
        <h2 className="text-[clamp(18px,1.45vw,20px)] font-bold leading-[1.3] text-[#111]">
          <Link href={href} className="line-clamp-2 transition-colors hover:text-[#ed2967]">
            {post.title}
          </Link>
        </h2>

        <div className="mt-3 flex flex-wrap items-center gap-2 text-[13px] font-medium text-[#777]">
          <span className="capitalize text-[#202020]">{post.authorName}</span>
          <span className="size-1 rounded-full bg-[#d8d2c8]"></span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>

        <div className="mt-auto pt-6 max-[520px]:pt-5">
          <Link
            href={href}
            className="inline-flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-wider text-[#ed2967] transition-colors hover:text-[#111]"
            aria-label={`Read more: ${post.title}`}
          >
            Read More
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </Link>
        </div>
      </div>
    </article>
  );
}

function getImageSrc(image: string) {
  if (image.startsWith("/") || image.startsWith("http") || image.startsWith("data:")) return image;
  return "/blogcover.png";
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}
