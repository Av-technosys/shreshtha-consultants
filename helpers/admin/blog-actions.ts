"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import sharp from "sharp";
import { writeSitemapFile } from "@/helpers/sitemap";
import {
  createAdminCategory,
  createAdminBlog,
  deleteAdminBlog,
  deleteAdminCategory,
  slugify,
  updateAdminBlog,
  updateAdminCategory,
  type AdminBlogStatus,
} from "./blogs";

export type CategoryActionState = {
  ok: boolean;
  message: string;
};

export async function createBlogAction(formData: FormData) {
  const title = getValue(formData, "title");
  const slug = slugify(title);

  let faqs = [];
  try {
    const faqsStr = formData.get("faqs") as string;
    if (faqsStr) {
      faqs = JSON.parse(faqsStr);
    }
  } catch (e) {
    console.error("Failed to parse faqs:", e);
  }

  await createAdminBlog({
    title,
    slug,
    content: getValue(formData, "content"),
    category: getCategory(formData),
    authorName: getValue(formData, "authorName"),
    date: getValue(formData, "date"),
    image: (await processImage(formData)) || "/blogcover.png",
    metaDescription: getValue(formData, "metaDescription"),
    status: getStatus(formData),
    faqs,
  });

  revalidatePath("/admin/blogs");
  revalidatePath("/blog");
  await refreshSitemapFile();
  redirect("/admin/blogs");
}

export async function updateBlogAction(id: string, formData: FormData) {
  const title = getValue(formData, "title");
  const slug = slugify(title);

  let faqs = [];
  try {
    const faqsStr = formData.get("faqs") as string;
    if (faqsStr) {
      faqs = JSON.parse(faqsStr);
    }
  } catch (e) {
    console.error("Failed to parse faqs:", e);
  }

  await updateAdminBlog(id, {
    title,
    slug,
    content: getValue(formData, "content"),
    category: getCategory(formData),
    authorName: getValue(formData, "authorName"),
    date: getValue(formData, "date"),
    image: (await processImage(formData)) || getValue(formData, "existingImage") || "/blogcover.png",
    metaDescription: getValue(formData, "metaDescription"),
    status: getStatus(formData),
    faqs,
  });

  revalidatePath("/admin/blogs");
  revalidatePath("/blog");
  await refreshSitemapFile();
  redirect("/admin/blogs");
}

export async function deleteBlogAction(id: string) {
  await deleteAdminBlog(id);
  revalidatePath("/admin/blogs");
  revalidatePath("/blog");
  await refreshSitemapFile();
  redirect("/admin/blogs");
}

export async function createCategoryAction(
  _state: CategoryActionState,
  formData: FormData
): Promise<CategoryActionState> {
  try {
    await createAdminCategory(getValue(formData, "name"));
    revalidateCategoryPaths();
    return { ok: true, message: "Category added." };
  } catch (error) {
    return getCategoryError(error, "Could not add category.");
  }
}

export async function updateCategoryAction(
  _state: CategoryActionState,
  formData: FormData
): Promise<CategoryActionState> {
  try {
    await updateAdminCategory(getValue(formData, "id"), getValue(formData, "name"));
    revalidateCategoryPaths();
    return { ok: true, message: "Category updated." };
  } catch (error) {
    return getCategoryError(error, "Could not update category.");
  }
}

export async function deleteCategoryAction(
  _state: CategoryActionState,
  formData: FormData
): Promise<CategoryActionState> {
  try {
    await deleteAdminCategory(getValue(formData, "id"));
    revalidateCategoryPaths();
    return { ok: true, message: "Category deleted." };
  } catch (error) {
    return getCategoryError(error, "Could not delete category.");
  }
}

function getValue(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

function getCategory(formData: FormData) {
  return getValue(formData, "category");
}

function getStatus(formData: FormData): AdminBlogStatus {
  return formData.get("saveAsDraft") === "on" ? "Draft" : "Published";
}

function revalidateCategoryPaths() {
  revalidatePath("/admin/blogs");
  revalidatePath("/admin/blogs/new");
  revalidatePath("/admin/blogs/edit/[id]", "page");
  revalidatePath("/blog");
}

function getCategoryError(error: unknown, fallback: string): CategoryActionState {
  if (error instanceof Error) {
    if (error.message.includes("duplicate key")) {
      return { ok: false, message: "A category with this name already exists." };
    }

    if (error.message === "Category is used by blogs") {
      return { ok: false, message: "Move or delete blogs in this category first." };
    }

    if (error.message === "Category name is required") {
      return { ok: false, message: "Category name is required." };
    }
  }

  return { ok: false, message: fallback };
}

async function refreshSitemapFile() {
  await writeSitemapFile();
}

async function processImage(formData: FormData) {
  const image = formData.get("image");
  if (!(image instanceof File) || image.size === 0) return "";
  
  try {
    const arrayBuffer = await image.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    let quality = 80;
    let compressed = await sharp(buffer)
      .resize(1200, 1200, { fit: "inside", withoutEnlargement: true })
      .webp({ quality })
      .toBuffer();
      
    while (compressed.length > 250 * 1024 && quality > 10) {
      quality -= 10;
      compressed = await sharp(buffer)
        .resize(1200, 1200, { fit: "inside", withoutEnlargement: true })
        .webp({ quality })
        .toBuffer();
    }
    
    return `data:image/webp;base64,${compressed.toString("base64")}`;
  } catch (error) {
    console.error("Image compression failed:", error);
    return "";
  }
}
