import { boolean, date, index, pgTable, text, timestamp, uniqueIndex, integer } from "drizzle-orm/pg-core";

export const blogCategories = pgTable(
  "blog_categories",
  {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    slug: text("slug").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [
    uniqueIndex("blog_categories_slug_unique").on(table.slug),
    uniqueIndex("blog_categories_name_unique").on(table.name),
  ]
);

export const blogs = pgTable(
  "blogs",
  {
    id: text("id").primaryKey(),
    title: text("title").notNull(),
    slug: text("slug").notNull(),
    categoryId: text("category_id")
      .notNull()
      .references(() => blogCategories.id, { onDelete: "restrict" }),
    publishDate: date("publish_date", { mode: "string" }).notNull(),
    mainBannerImage: text("main_banner_image").notNull(),
    authorName: text("author_name").notNull(),
    metaDescription: text("meta_description").notNull(),
    content: text("content").notNull(),
    isDraft: boolean("is_draft").default(false).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [
    uniqueIndex("blogs_slug_unique").on(table.slug),
    index("blogs_category_id_idx").on(table.categoryId),
    index("blogs_publish_date_idx").on(table.publishDate),
    index("blogs_is_draft_idx").on(table.isDraft),
  ]
);

export type BlogCategory = typeof blogCategories.$inferSelect;
export type Blog = typeof blogs.$inferSelect;

export const blogFaqs = pgTable(
  "blog_faqs",
  {
    id: text("id").primaryKey(),
    blogId: text("blog_id")
      .notNull()
      .references(() => blogs.id, { onDelete: "cascade" }),
    question: text("question").notNull(),
    answer: text("answer").notNull(),
    orderIndex: integer("order_index").notNull().default(0),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [
    index("blog_faqs_blog_id_idx").on(table.blogId),
  ]
);

export type BlogFaq = typeof blogFaqs.$inferSelect;
