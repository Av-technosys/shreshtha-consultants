import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CalendarDays, UserRound } from "lucide-react";
import { getPublishedBlogBySlug } from "@/helpers/admin/blogs";
import { BlogFaq } from "@/components/blog-faq";


type BlogSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function generateMetadata({ params }: BlogSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedBlogBySlug(slug);

  if (!post) {
    return {
      title: "Blog | Shreshtha Consultants",
    };
  }

  return {
    title: `${post.title} | Shreshtha Consultants`,
    description: post.metaDescription,
  };
}

export default async function BlogSlugPage({ params }: BlogSlugPageProps) {
  const { slug } = await params;
  const post = await getPublishedBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const { parsedContent, headings } = parseAndInjectHeadingIds(post.content);

  return (
    <main className="font-inter bg-white text-[#181818]">
      <article className="mx-auto w-full max-w-[1140px] px-6 pb-24 pt-12 max-[900px]:px-5 max-[520px]:pt-9">
        <header className="max-w-[1060px]">
          <p className="text-[22px] font-bold uppercase leading-none tracking-[0.12em] text-[#202020] max-[700px]:text-base">
            Industry Insights
          </p>
          <h1 className="font-archivo mt-4 max-w-[900px] text-[clamp(31px,3.15vw,44px)] font-semibold leading-[1.14] tracking-[-0.025em] text-[#111] max-[520px]:text-[28px]">
            {post.title}
          </h1>

          <div className="mt-9 flex flex-wrap items-center gap-x-10 gap-y-3 text-base max-[640px]:mt-7 max-[640px]:gap-x-6 max-[520px]:flex-nowrap max-[520px]:gap-x-3 max-[520px]:text-[13px]">
            <div className="inline-flex shrink-0 items-center gap-2.5 font-bold capitalize text-[#202020] max-[520px]:gap-1.5">
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#f7f6f2] text-[#ed2967] max-[520px]:size-[22px]">
                <UserRound className="h-[15px] w-[15px] max-[520px]:h-3 max-[520px]:w-3" strokeWidth={2} />
              </span>
              <span className="whitespace-nowrap">{post.authorName}</span>
            </div>
            <time dateTime={post.date} className="inline-flex shrink-0 items-center gap-2.5 font-bold text-[#777] max-[520px]:gap-1.5">
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#f7f6f2] text-[#ed2967] max-[520px]:size-[22px]">
                <CalendarDays className="h-[15px] w-[15px] max-[520px]:h-3 max-[520px]:w-3" strokeWidth={2} />
              </span>
              <span className="whitespace-nowrap">{formatDate(post.date)}</span>
            </time>
          </div>
        </header>

        <div className="relative mt-6 aspect-[1140/540] w-full overflow-hidden rounded-[14px] bg-[#e8e4dc] max-[700px]:aspect-[4/3]">
          <Image
            src={getImageSrc(post.image)}
            alt=""
            fill
            priority
            sizes="(max-width: 1188px) calc(100vw - 48px), 1140px"
            className="object-cover"
          />
        </div>

        <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between max-w-[1140px] mx-auto max-[700px]:mt-8">
          {/* Sidebar */}
          {headings.length > 0 && (
            <aside className="hidden w-full shrink-0 lg:block lg:w-[280px] lg:sticky lg:top-[120px]">
              <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.1em] text-[#777067] max-[700px]:mb-4">
                On this page
              </h3>
              <nav className="relative flex flex-col text-[15px]">
                <div className="absolute bottom-0 left-0 top-0 w-[2px] bg-[#e1ddd5]" />
                {headings.map((heading, idx) => (
                  <a
                    key={heading.id}
                    href={`#${heading.id}`}
                    className="group relative flex items-start py-3 pl-6 text-[#555] transition-colors hover:text-[#202020] max-[700px]:py-2.5"
                  >
                    <span className="mr-3 font-semibold text-[#b5b0a6] transition-colors group-hover:text-[#202020]">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="leading-[1.4]">{heading.text}</span>
                  </a>
                ))}
              </nav>
            </aside>
          )}

          {/* Main Content Area */}
          <div className="flex-1 w-full max-w-[760px] text-[17px] leading-[1.75] text-black max-[700px]:text-[16px]">
            <style dangerouslySetInnerHTML={{ __html: `
              .blog-content { 
                font-family: var(--font-lora-family), serif; 
                font-size: 17px;
                line-height: 1.75;
                color: #000 !important;
                word-wrap: break-word;
                overflow-wrap: break-word;
              }
              .blog-content :where(p, div, span, li, ul, ol, table, thead, tbody, tr, th, td, strong, b, i, em, u, s, strike, blockquote) {
                color: #000 !important;
              }
              @media (max-width: 700px) {
                .blog-content { font-size: 16px; }
              }
              .blog-content h1, .blog-content h2, .blog-content h3, .blog-content h4, .blog-content h5, .blog-content h6 {
                font-family: var(--font-archivo-family), sans-serif;
                font-weight: 600;
                color: #000 !important;
              }
              .blog-content h1 { font-size: 32px; margin-top: 1em; margin-bottom: 0.5em; }
              .blog-content h2 { font-size: 24px; margin-top: 1em; margin-bottom: 0.5em; }
              .blog-content h3 { font-size: 20px; margin-top: 1em; margin-bottom: 0.5em; }
              .blog-content h4 { font-size: 18px; margin-top: 1em; margin-bottom: 0.5em; }
              .blog-content h5 { font-size: 16px; margin-top: 1em; margin-bottom: 0.5em; }
              .blog-content h6 { font-size: 14px; margin-top: 1em; margin-bottom: 0.5em; }
              @media (max-width: 700px) {
                .blog-content h1 { font-size: 28px; }
                .blog-content h2 { font-size: 22px; }
              }
              .blog-content p { margin-bottom: 1em; color: #000 !important; }
              .blog-content ul { list-style-type: disc; padding-left: 40px; margin-bottom: 1em; }
              .blog-content ol { list-style-type: decimal; padding-left: 40px; margin-bottom: 1em; }
              @media (max-width: 700px) {
                .blog-content ul, .blog-content ol { padding-left: 20px; }
              }
              .blog-content li { display: list-item; margin-bottom: 0.25em; color: #000 !important; }
              .blog-content a, .blog-content a * { color: #ed2967 !important; text-decoration: underline; cursor: pointer; }
              .blog-content strong, .blog-content b { font-weight: 700; }
              .blog-content i, .blog-content em { font-style: italic; }
              .blog-content u { text-decoration: underline; }
              .blog-content s, .blog-content strike { text-decoration: line-through; }
              .blog-content blockquote { display: block; margin-top: 1em; margin-bottom: 1em; margin-left: 40px; margin-right: 40px; border-left: 4px solid #e1ddd5; padding-left: 16px; color: #000 !important; }
              @media (max-width: 700px) {
                .blog-content blockquote { margin-left: 10px; margin-right: 10px; padding-left: 12px; }
              }
              .blog-content table { display: block; overflow-x: auto; -webkit-overflow-scrolling: touch; width: 100%; border-collapse: collapse; margin-bottom: 1em; white-space: nowrap; }
              .blog-content th, .blog-content td { border: 1px solid #e1ddd5; padding: 8px; }
              .blog-content th { font-weight: 600; background-color: #f7f6f2; }
              .blog-content img, .blog-content video, .blog-content iframe { max-width: 100%; height: auto; border-radius: 8px; margin-bottom: 1em; }
            `}} />
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: parsedContent }}
            />

            {post.faqs && post.faqs.length > 0 && (
              <div className="mt-16">
                <h2 className="font-archivo mb-6 text-[28px] font-semibold text-[#111]">
                  Frequently Asked Questions
                </h2>
                <BlogFaq faqs={post.faqs} />
              </div>
            )}
          </div>
        </div>
      </article>
    </main>
  );
}

function parseAndInjectHeadingIds(content: string) {
  const headings: { id: string; text: string }[] = [];
  let index = 0;

  const newContent = content.replace(/<h2([^>]*)>(.*?)<\/h2>/gi, (match, attrs, innerText) => {
    const text = innerText.replace(/<[^>]+>/g, "").trim();
    let id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    if (!id) id = `heading-${index}`;
    index++;
    
    // Check if id already exists in attrs
    const idMatch = attrs.match(/id="([^"]+)"/i);
    if (idMatch) {
      headings.push({ id: idMatch[1], text });
      return match;
    }
    
    headings.push({ id, text });
    return `<h2 id="${id}"${attrs}>${innerText}</h2>`;
  });

  return { parsedContent: newContent, headings };
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

function getImageSrc(image: string) {
  if (image.startsWith("/") || image.startsWith("http") || image.startsWith("data:")) return image;
  return "/blogcover.png";
}
