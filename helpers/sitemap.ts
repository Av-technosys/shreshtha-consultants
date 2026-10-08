import { writeFile } from "node:fs/promises";
import { join } from "node:path";
import { getPublishedBlogSitemapEntries } from "@/helpers/admin/blogs";
import { getSiteUrl } from "@/helpers/site-url";

const staticRoutes = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/about/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/electrical/", changeFrequency: "monthly", priority: 0.7 },
  { path: "/plumbing/", changeFrequency: "monthly", priority: 0.7 },
  { path: "/fire-fighting-2/", changeFrequency: "monthly", priority: 0.7 },
  { path: "/hvacr/", changeFrequency: "monthly", priority: 0.7 },
  { path: "/safety-and-security/", changeFrequency: "monthly", priority: 0.7 },
  { path: "/projects/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/bim/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/careers/", changeFrequency: "monthly", priority: 0.6 },
  { path: "/contact-us/", changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog/", changeFrequency: "weekly", priority: 0.8 },
  { path: "/privacy-policy/", changeFrequency: "yearly", priority: 0.4 },
] as const;

const projectRoutes = [
  "/projects/one8-commune/",
  "/projects/gt-central/",
  "/projects/dot-square/",
  "/projects/urban-square/",
  "/projects/gt-landmark/",
  "/projects/rajasthan-hospital/",
  "/projects/sum-hospital/",
  "/projects/jims-hospital/",
  "/projects/bst-hospital/",
  "/projects/hotel-suryagarh-palace/",
  "/projects/hotel-rambagh-palace/",
  "/projects/umaid-bhawan-palace/",
  "/projects/jewel-bagh/",
  "/projects/savio-factory/",
  "/projects/gurukripa-factory/",
  "/projects/salasar-balaji-creation/",
  "/projects/jaswant-gargh-school/",
  "/projects/gsis-school/",
  "/projects/delhi-world-public-school/",
  "/projects/nokha-library/",
  "/projects/narsi-villa/",
  "/projects/kgk-amulya/",
  "/projects/acl-greens/",
  "/projects/goyal-house/",
  "/projects/the-sky-bunglows/",
  "/projects/itc-jawai/",
  "/projects/city-park/",
  "/projects/nims/",
  "/projects/world-trade-park/",
] as const;

const referenceBlogSlugs = [
  "renewable-energy-with-the-best-mep-consultants-in-india",
  "top-hvac-mep-consultants-in-delhi",
  "mep-and-hvac-consultants-hyderabad",
  "best-electrical-consultants-and-mep-consultants-in-mumbai",
  "top-mep-consultants-chennai-mep-design-companies-smart-building",
  "mep-services-and-consultants-in-bangalore",
  "top-mep-consultants-in-india",
] as const;

export async function writeSitemapFile() {
  const xml = await buildSitemapXml();
  await writeFile(join(process.cwd(), "app", "sitemap.xml"), xml, "utf8");
}

async function buildSitemapXml() {
  const siteUrl = getSiteUrl();
  const today = formatDate(new Date());
  const publishedBlogs = await getPublishedBlogSitemapEntries();
  const blogEntries = mergeBlogEntries(publishedBlogs, today);

  const urls = [
    ...staticRoutes.map((route) => ({
      loc: `${siteUrl}${route.path}`,
      lastmod: today,
      changefreq: route.changeFrequency,
      priority: route.priority.toFixed(1),
    })),
    ...projectRoutes.map((path) => ({
      loc: `${siteUrl}${path}`,
      lastmod: today,
      changefreq: "monthly",
      priority: "0.7",
    })),
    ...blogEntries.map((blog) => ({
      loc: `${siteUrl}/blog/${blog.slug}/`,
      lastmod: blog.lastmod,
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

function mergeBlogEntries(
  publishedBlogs: Awaited<ReturnType<typeof getPublishedBlogSitemapEntries>>,
  fallbackDate: string
) {
  const entries = new Map<string, { slug: string; lastmod: string }>();

  referenceBlogSlugs.forEach((slug) => {
    entries.set(slug, { slug, lastmod: fallbackDate });
  });

  publishedBlogs.forEach((blog) => {
    entries.set(blog.slug, {
      slug: blog.slug,
      lastmod: formatDate(new Date(blog.date)),
    });
  });

  return [...entries.values()];
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
