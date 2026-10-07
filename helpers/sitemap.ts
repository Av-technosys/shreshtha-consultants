import { writeFile } from "node:fs/promises";
import { join } from "node:path";
import { getPublishedBlogSitemapEntries } from "@/helpers/admin/blogs";
import { getSiteUrl } from "@/helpers/site-url";

const staticRoutes = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/bim", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
  { path: "/career", changeFrequency: "monthly", priority: 0.6 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
  { path: "/projects", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/electrical", changeFrequency: "monthly", priority: 0.7 },
  { path: "/services/fire-fighting", changeFrequency: "monthly", priority: 0.7 },
  { path: "/services/hvac", changeFrequency: "monthly", priority: 0.7 },
  { path: "/services/plumbing", changeFrequency: "monthly", priority: 0.7 },
  { path: "/services/safety-and-security", changeFrequency: "monthly", priority: 0.7 },
] as const;

export async function writeSitemapFile() {
  const xml = await buildSitemapXml();
  await writeFile(join(process.cwd(), "app", "sitemap.xml"), xml, "utf8");
}

async function buildSitemapXml() {
  const siteUrl = getSiteUrl();
  const today = formatDate(new Date());
  const publishedBlogs = await getPublishedBlogSitemapEntries();

  const urls = [
    ...staticRoutes.map((route) => ({
      loc: `${siteUrl}${route.path}`,
      lastmod: today,
      changefreq: route.changeFrequency,
      priority: route.priority.toFixed(1),
    })),
    ...publishedBlogs.map((blog) => ({
      loc: `${siteUrl}/blog/${blog.slug}`,
      lastmod: formatDate(new Date(blog.date)),
      changefreq: "monthly",
      priority: "0.7",
    })),
  ];

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map(
      (url) => `  <url>
    <loc>${escapeXml(url.loc)}</loc>
    <lastmod>${escapeXml(url.lastmod)}</lastmod>
    <changefreq>${escapeXml(url.changefreq)}</changefreq>
    <priority>${escapeXml(url.priority)}</priority>
  </url>`
    ),
    "</urlset>",
    "",
  ].join("\n");
}

function formatDate(date: Date) {
  if (Number.isNaN(date.getTime())) {
    return new Date().toISOString().slice(0, 10);
  }

  return date.toISOString().slice(0, 10);
}

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}
