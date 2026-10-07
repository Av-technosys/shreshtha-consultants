CREATE TABLE IF NOT EXISTS "blog_categories" (
  "id" text PRIMARY KEY NOT NULL,
  "name" text NOT NULL,
  "slug" text NOT NULL,
  "created_at" timestamp with time zone DEFAULT now() NOT NULL,
  "updated_at" timestamp with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "blogs" (
  "id" text PRIMARY KEY NOT NULL,
  "title" text NOT NULL,
  "slug" text NOT NULL,
  "category_id" text NOT NULL,
  "publish_date" date NOT NULL,
  "main_banner_image" text NOT NULL,
  "author_name" text NOT NULL,
  "meta_description" text NOT NULL,
  "content" text NOT NULL,
  "is_draft" boolean DEFAULT false NOT NULL,
  "created_at" timestamp with time zone DEFAULT now() NOT NULL,
  "updated_at" timestamp with time zone DEFAULT now() NOT NULL
);

DO $$ BEGIN
  ALTER TABLE "blogs"
    ADD CONSTRAINT "blogs_category_id_blog_categories_id_fk"
    FOREIGN KEY ("category_id")
    REFERENCES "blog_categories"("id")
    ON DELETE restrict;
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

CREATE UNIQUE INDEX IF NOT EXISTS "blog_categories_slug_unique" ON "blog_categories" ("slug");
CREATE UNIQUE INDEX IF NOT EXISTS "blog_categories_name_unique" ON "blog_categories" ("name");
CREATE UNIQUE INDEX IF NOT EXISTS "blogs_slug_unique" ON "blogs" ("slug");
CREATE INDEX IF NOT EXISTS "blogs_category_id_idx" ON "blogs" ("category_id");
CREATE INDEX IF NOT EXISTS "blogs_publish_date_idx" ON "blogs" ("publish_date");
CREATE INDEX IF NOT EXISTS "blogs_is_draft_idx" ON "blogs" ("is_draft");
