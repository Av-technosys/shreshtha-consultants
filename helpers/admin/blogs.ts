import { and, asc, count, desc, eq } from "drizzle-orm";
import type { SQL } from "drizzle-orm";
import { db } from "@/db";
import { blogCategories, blogFaqs, blogs } from "@/db/schema";

export type AdminBlogStatus = "Published" | "Draft";

export type AdminBlogFaq = {
  id?: string;
  question: string;
  answer: string;
};

export type AdminBlog = {
  id: string;
  slug: string;
  title: string;
  content: string;
  category: string;
  authorName: string;
  date: string;
  image: string;
  metaDescription: string;
  status: AdminBlogStatus;
  faqs?: AdminBlogFaq[];
};

export type AdminBlogInput = Omit<AdminBlog, "id">;

export type AdminBlogCategory = {
  id: string;
  name: string;
  slug: string;
  blogCount: number;
};

export type PublishedBlogSitemapEntry = {
  slug: string;
  date: string;
};

export async function getAdminBlogs(): Promise<AdminBlog[]> {
  const rows = await getBlogRows();
  return rows.map(toAdminBlog);
}

export async function getAdminCategories() {
  const rows = await db
    .select({ name: blogCategories.name })
    .from(blogCategories)
    .orderBy(blogCategories.name);

  return rows.map((row) => row.name);
}

export async function getAdminCategoryList(): Promise<AdminBlogCategory[]> {
  const rows = await db
    .select({
      id: blogCategories.id,
      name: blogCategories.name,
      slug: blogCategories.slug,
      blogCount: count(blogs.id),
    })
    .from(blogCategories)
    .leftJoin(blogs, eq(blogs.categoryId, blogCategories.id))
    .groupBy(blogCategories.id, blogCategories.name, blogCategories.slug)
    .orderBy(asc(blogCategories.name));

  return rows.map((row) => ({
    ...row,
    blogCount: Number(row.blogCount),
  }));
}

export async function getAdminBlog(id: string): Promise<AdminBlog | undefined> {
  const rows = await getBlogRows(eq(blogs.id, id));
  const row = rows[0];
  if (!row) return undefined;

  const faqs = await db
    .select({ id: blogFaqs.id, question: blogFaqs.question, answer: blogFaqs.answer })
    .from(blogFaqs)
    .where(eq(blogFaqs.blogId, id))
    .orderBy(asc(blogFaqs.orderIndex));

  return { ...toAdminBlog(row), faqs };
}

export async function getPublishedBlogs() {
  const rows = await getBlogRows(eq(blogs.isDraft, false));
  return rows.map(toAdminBlog);
}

export async function getPublishedBlogSitemapEntries(): Promise<PublishedBlogSitemapEntry[]> {
  return db
    .select({
      slug: blogs.slug,
      date: blogs.publishDate,
    })
    .from(blogs)
    .where(eq(blogs.isDraft, false))
    .orderBy(desc(blogs.publishDate), desc(blogs.createdAt));
}

export async function getPublishedBlogBySlug(slug: string) {
  const rows = await getBlogRows(and(eq(blogs.isDraft, false), eq(blogs.slug, slug)));
  const row = rows[0];
  if (!row) return undefined;

  const faqs = await db
    .select({ id: blogFaqs.id, question: blogFaqs.question, answer: blogFaqs.answer })
    .from(blogFaqs)
    .where(eq(blogFaqs.blogId, row.id))
    .orderBy(asc(blogFaqs.orderIndex));

  return { ...toAdminBlog(row), faqs };
}

export async function createAdminBlog(input: AdminBlogInput) {
  const category = await getOrCreateCategory(input.category);
  const now = new Date();
  const id = crypto.randomUUID();

  await db.transaction(async (tx) => {
    await tx.insert(blogs).values({
      id,
      title: input.title,
      slug: input.slug,
      categoryId: category.id,
      publishDate: input.date,
      mainBannerImage: input.image,
      authorName: input.authorName,
      metaDescription: input.metaDescription,
      content: input.content,
      isDraft: input.status === "Draft",
      createdAt: now,
      updatedAt: now,
    });

    if (input.faqs && input.faqs.length > 0) {
      await tx.insert(blogFaqs).values(
        input.faqs.map((faq, i) => ({
          id: crypto.randomUUID(),
          blogId: id,
          question: faq.question,
          answer: faq.answer,
          orderIndex: i,
          createdAt: now,
          updatedAt: now,
        }))
      );
    }
  });

  return id;
}

export async function updateAdminBlog(id: string, input: AdminBlogInput) {
  const category = await getOrCreateCategory(input.category);
  const now = new Date();

  await db.transaction(async (tx) => {
    await tx
      .update(blogs)
      .set({
        title: input.title,
        slug: input.slug,
        categoryId: category.id,
        publishDate: input.date,
        mainBannerImage: input.image,
        authorName: input.authorName,
        metaDescription: input.metaDescription,
        content: input.content,
        isDraft: input.status === "Draft",
        updatedAt: now,
      })
      .where(eq(blogs.id, id));

    await tx.delete(blogFaqs).where(eq(blogFaqs.blogId, id));

    if (input.faqs && input.faqs.length > 0) {
      await tx.insert(blogFaqs).values(
        input.faqs.map((faq, i) => ({
          id: crypto.randomUUID(),
          blogId: id,
          question: faq.question,
          answer: faq.answer,
          orderIndex: i,
          createdAt: now,
          updatedAt: now,
        }))
      );
    }
  });
}

export async function deleteAdminBlog(id: string) {
  await db.delete(blogs).where(eq(blogs.id, id));
}

export async function createAdminCategory(name: string) {
  const category = await getOrCreateCategory(name);
  return category.id;
}

export async function updateAdminCategory(id: string, name: string) {
  const cleanName = normalizeCategoryName(name);
  const now = new Date();

  await db
    .update(blogCategories)
    .set({
      name: cleanName,
      slug: slugify(cleanName),
      updatedAt: now,
    })
    .where(eq(blogCategories.id, id));
}

export async function deleteAdminCategory(id: string) {
  const usage = await db
    .select({ value: count(blogs.id) })
    .from(blogs)
    .where(eq(blogs.categoryId, id));

  if (Number(usage[0]?.value ?? 0) > 0) {
    throw new Error("Category is used by blogs");
  }

  await db.delete(blogCategories).where(eq(blogCategories.id, id));
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function getOrCreateCategory(name: string) {
  const cleanName = normalizeCategoryName(name);
  const slug = slugify(cleanName);
  const existing = await db
    .select()
    .from(blogCategories)
    .where(eq(blogCategories.slug, slug))
    .limit(1);

  if (existing[0]) return existing[0];

  const id = crypto.randomUUID();
  const now = new Date();

  await db
    .insert(blogCategories)
    .values({
      id,
      name: cleanName,
      slug,
      createdAt: now,
      updatedAt: now,
    })
    .onConflictDoNothing({ target: blogCategories.slug });

  const rows = await db
    .select()
    .from(blogCategories)
    .where(eq(blogCategories.slug, slug))
    .limit(1);

  return rows[0] ?? { id, name: cleanName, slug, createdAt: now, updatedAt: now };
}

function normalizeCategoryName(name: string) {
  const cleanName = name.trim().replace(/\s+/g, " ");

  if (!cleanName) {
    throw new Error("Category name is required");
  }

  return cleanName;
}

function getBlogRows(where?: SQL) {
  const query = db
    .select({
      id: blogs.id,
      slug: blogs.slug,
      title: blogs.title,
      content: blogs.content,
      category: blogCategories.name,
      authorName: blogs.authorName,
      date: blogs.publishDate,
      image: blogs.mainBannerImage,
      metaDescription: blogs.metaDescription,
      isDraft: blogs.isDraft,
    })
    .from(blogs)
    .innerJoin(blogCategories, eq(blogs.categoryId, blogCategories.id))
    .$dynamic();

  if (where) {
    query.where(where);
  }

  return query.orderBy(desc(blogs.publishDate), desc(blogs.createdAt));
}

function toAdminBlog(row: Awaited<ReturnType<typeof getBlogRows>>[number]): AdminBlog {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    content: row.content,
    category: row.category,
    authorName: row.authorName,
    date: row.date,
    image: row.image,
    metaDescription: row.metaDescription,
    status: row.isDraft ? "Draft" : "Published",
  };
}
