"use client";

import { useMemo, useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { Plus, Trash2 } from "lucide-react";
import type { AdminBlog, AdminBlogFaq } from "@/helpers/admin/blogs";
import { createCategoryAction, type CategoryActionState } from "@/helpers/admin/blog-actions";


const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
const initialCategoryState: CategoryActionState = { ok: false, message: "" };

type BlogFormProps = {
  blog?: AdminBlog;
  categories: string[];
  action: (formData: FormData) => void;
};

export function BlogForm({ blog, categories, action }: BlogFormProps) {
  const router = useRouter();
  const [content, setContent] = useState(blog?.content || "");
  const [faqs, setFaqs] = useState<AdminBlogFaq[]>(blog?.faqs || []);

  const [localCategories, setLocalCategories] = useState<string[]>(categories);
  const [isAddingCategory, startCategoryTransition] = useTransition();
  const [categoryMessage, setCategoryMessage] = useState<CategoryActionState>(initialCategoryState);

  const [selectedCategory, setSelectedCategory] = useState(() => {
    if (blog?.category && !categories.includes(blog.category)) return "ADD_NEW";
    return blog?.category || (categories.length > 0 ? categories[0] : "ADD_NEW");
  });
  const [newCategory, setNewCategory] = useState(() => {
    if (blog?.category && !categories.includes(blog.category)) return blog.category;
    return "";
  });

  const handleAddCategory = () => {
    const trimmed = newCategory.trim();
    if (!trimmed) return;

    startCategoryTransition(async () => {
      const formData = new FormData();
      formData.set("name", trimmed);
      const result = await createCategoryAction(initialCategoryState, formData);

      setCategoryMessage(result);

      if (!result.ok) return;

      setLocalCategories((current) => {
        if (current.includes(trimmed)) return current;
        return [...current, trimmed].sort((a, b) => a.localeCompare(b));
      });
      setSelectedCategory(trimmed);
      setNewCategory("");
      router.refresh();
    });
  };

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: "Write your blog content here...",
      height: 400,
      uploader: {
        insertImageAsBase64URI: true,
      },
      hidePoweredByJodit: true,
      colorPickerDefaultTab: "color" as const,
      style: {
        color: "#000",
      },
      buttons: [
        "paragraph", "fontsize", "brush", "|",
        "bold", "italic", "underline", "strikethrough", "|",
        "align", "|",
        "ul", "ol", "|",
        "table", "link", "image", "|",
        "source"
      ],
    }),
    []
  );

  const addFaq = () => {
    setFaqs([...faqs, { question: "", answer: "" }]);
  };

  const removeFaq = (index: number) => {
    setFaqs(faqs.filter((_, i) => i !== index));
  };

  const updateFaq = (index: number, field: "question" | "answer", value: string) => {
    const newFaqs = [...faqs];
    newFaqs[index] = { ...newFaqs[index], [field]: value };
    setFaqs(newFaqs);
  };

  return (
    <form action={action} className="grid gap-5 p-5">
      <style dangerouslySetInnerHTML={{ __html: `
        .jodit-container .jodit-wysiwyg { 
          font-family: var(--font-lora-family), serif; 
          font-size: 17px;
          color: #000;
          line-height: 1.75;
        }
        .jodit-container .jodit-wysiwyg p,
        .jodit-container .jodit-wysiwyg li,
        .jodit-container .jodit-wysiwyg div,
        .jodit-container .jodit-wysiwyg span,
        .jodit-container .jodit-wysiwyg td { color: inherit; }
        .jodit-container .jodit-wysiwyg h1, .jodit-container .jodit-wysiwyg h2, .jodit-container .jodit-wysiwyg h3, .jodit-container .jodit-wysiwyg h4, .jodit-container .jodit-wysiwyg h5, .jodit-container .jodit-wysiwyg h6 { 
          font-family: var(--font-archivo-family), sans-serif; 
          font-weight: 600;
          color: #000;
        }
        .jodit-wysiwyg h1 { font-size: 32px; margin-top: 1em; margin-bottom: 0.5em; }
        .jodit-wysiwyg h2 { font-size: 24px; margin-top: 1em; margin-bottom: 0.5em; }
        .jodit-wysiwyg h3 { font-size: 20px; margin-top: 1em; margin-bottom: 0.5em; }
        .jodit-wysiwyg h4 { font-size: 18px; margin-top: 1em; margin-bottom: 0.5em; }
        .jodit-wysiwyg h5 { font-size: 16px; margin-top: 1em; margin-bottom: 0.5em; }
        .jodit-wysiwyg h6 { font-size: 14px; margin-top: 1em; margin-bottom: 0.5em; }
        .jodit-wysiwyg p { margin-bottom: 1em; }
        .jodit-wysiwyg a { color: #ed2967; text-decoration: underline; cursor: pointer; }
        .jodit-wysiwyg ul { list-style-type: disc; padding-left: 40px; margin-bottom: 1em; }
        .jodit-wysiwyg ol { list-style-type: decimal; padding-left: 40px; margin-bottom: 1em; }
        .jodit-wysiwyg li { display: list-item; margin-bottom: 0.25em; }
        .jodit-wysiwyg strong, .jodit-wysiwyg b { font-weight: 700; }
        .jodit-wysiwyg i, .jodit-wysiwyg em { font-style: italic; }
        .jodit-wysiwyg u { text-decoration: underline; }
        .jodit-wysiwyg s, .jodit-wysiwyg strike { text-decoration: line-through; }
        .jodit-wysiwyg blockquote { display: block; margin-top: 1em; margin-bottom: 1em; margin-left: 40px; margin-right: 40px; border-left: 4px solid #e1ddd5; padding-left: 16px; color: #555; }
        .jodit-wysiwyg table { display: table; border-collapse: collapse; width: 100%; margin-bottom: 1em; }
        .jodit-wysiwyg th, .jodit-wysiwyg td { border: 1px solid #e1ddd5; padding: 8px; }
        .jodit-wysiwyg th { font-weight: 600; background-color: #f7f6f2; }
        .jodit-wysiwyg img { max-width: 100%; height: auto; border-radius: 8px; margin-bottom: 1em; }
      `}} />
      {blog && <input name="existingImage" type="hidden" value={blog.image} />}
      <input name="content" type="hidden" value={content} />
      <input name="faqs" type="hidden" value={JSON.stringify(faqs)} />

      <Field label="Blog Title">
        <input name="title" defaultValue={blog?.title} required className={inputClassName} />
      </Field>

      <div className="grid grid-cols-2 items-start gap-4 max-[680px]:grid-cols-1">
        <Field label="Category">
          <input type="hidden" name="category" value={selectedCategory === "ADD_NEW" ? newCategory : selectedCategory} />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className={`${inputClassName} cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20stroke%3D%22%2348423c%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%2F%3E%3C%2Fsvg%3E')] bg-[length:16px] bg-[position:right_12px_center] bg-no-repeat pr-10`}
          >
            <option value="ADD_NEW" className="font-semibold text-[#ed2967]">+ Add New Category</option>
            {localCategories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          {selectedCategory === "ADD_NEW" && (
            <div className="mt-2 flex items-center gap-2">
              <input
                type="text"
                placeholder="Type new category..."
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                disabled={isAddingCategory}
                required={selectedCategory === "ADD_NEW"}
                className={inputClassName}
              />
              <button
                type="button"
                onClick={handleAddCategory}
                disabled={!newCategory.trim() || isAddingCategory}
                className="inline-flex h-11 shrink-0 items-center justify-center rounded-md bg-[#111419] px-4 text-sm font-semibold text-white transition hover:bg-[#252a32] disabled:opacity-70 min-w-[70px]"
              >
                {isAddingCategory ? (
                  <svg className="size-4 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  "Add"
                )}
              </button>
            </div>
          )}
          {categoryMessage.message && (
            <span
              className={[
                "mt-2 block text-xs font-semibold",
                categoryMessage.ok ? "text-[#247044]" : "text-[#bc1f52]",
              ].join(" ")}
            >
              {categoryMessage.message}
            </span>
          )}
        </Field>
        <Field label="Publish Date">
          <input name="date" type="date" defaultValue={blog?.date || new Date().toISOString().split("T")[0]} required className={inputClassName} />
        </Field>
      </div>

      <div className="grid grid-cols-2 items-start gap-4 max-[680px]:grid-cols-1">
        <Field label="Main Blog Banner">
          <input
            name="image"
            type="file"
            accept="image/*"
            required={!blog}
            className={`${inputClassName} pt-2 file:mr-3 file:rounded-full file:border-0 file:bg-[#111419] file:px-3 file:py-1 file:text-xs file:font-semibold file:text-white`}
          />
          {blog && (
            <span className="text-xs font-medium text-[#817a72]">
              Current: {blog.image.startsWith("data:") ? "(Custom Image)" : blog.image}
            </span>
          )}
        </Field>
        <Field label="Author Name">
          <input name="authorName" defaultValue={blog?.authorName || "Shreshtha Mathur"} required className={inputClassName} />
        </Field>
      </div>

      <Field label="Short Meta Description">
        <textarea name="metaDescription" defaultValue={blog?.metaDescription} rows={3} required className={`${inputClassName} h-auto resize-none py-3 leading-6`} />
      </Field>

      <div className="grid gap-2">
        <label className="text-sm font-semibold text-[#48423c]">Main Blog Content</label>
        <div className="rounded-md border border-[#e1ddd5] bg-white text-[#151515] overflow-hidden">
          <JoditEditor
            value={content}
            config={config}
            onChange={(newContent) => setContent(newContent)}
          />
        </div>
      </div>

      <div className="grid gap-3 border-t border-[#ebe7df] pt-5">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-[#48423c]">FAQs (Optional)</h3>
          <button
            type="button"
            onClick={addFaq}
            className="flex items-center gap-1.5 rounded-full bg-[#111419] px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-[#252a32]"
          >
            <Plus size={14} /> Add FAQ
          </button>
        </div>

        {faqs.length === 0 && (
          <p className="text-sm text-[#817a72]">No FAQs added yet.</p>
        )}

        {faqs.map((faq, i) => (
          <div key={i} className="relative grid gap-3 rounded-md border border-[#e1ddd5] bg-[#fbfaf7] p-4 pt-8">
            <button
              type="button"
              onClick={() => removeFaq(i)}
              className="absolute right-2 top-2 p-1.5 text-red-500 hover:bg-red-50 rounded-md transition"
              title="Remove FAQ"
            >
              <Trash2 size={16} />
            </button>
            <Field label={`Question ${i + 1}`}>
              <input
                value={faq.question}
                onChange={(e) => updateFaq(i, "question", e.target.value)}
                required
                className={inputClassName}
              />
            </Field>
            <Field label="Answer">
              <textarea
                value={faq.answer}
                onChange={(e) => updateFaq(i, "answer", e.target.value)}
                required
                rows={3}
                className={`${inputClassName} h-auto resize-none py-3 leading-6`}
              />
            </Field>
          </div>
        ))}
      </div>

      <label className="mt-2 flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-[#e5e1d8] bg-[#fbfaf7] p-4 transition hover:border-[#d8d2c8]">
        <span>
          <span className="block text-sm font-semibold text-[#48423c]">Save as draft</span>
          <span className="mt-1 block text-sm leading-6 text-[#746e66]">
            Saving publishes by default. Turn this on to keep the blog drafted.
          </span>
        </span>
        <span className="relative inline-flex shrink-0 items-center">
          <input name="saveAsDraft" type="checkbox" defaultChecked={blog?.status === "Draft"} className="peer sr-only" />
          <span className="h-7 w-12 rounded-full border border-[#d7d1c8] bg-white transition peer-checked:border-[#ed2967] peer-checked:bg-[#ed2967]" />
          <span className="absolute left-1 size-5 rounded-full bg-[#817a72] transition peer-checked:left-6 peer-checked:bg-white" />
        </span>
      </label>

      <div className="flex flex-wrap items-center justify-end gap-3 border-t border-[#ebe7df] pt-5">
        <Link href="/admin/blogs" className="inline-flex h-11 items-center rounded-full border border-[#111419] px-5 text-sm font-semibold text-[#111419] transition hover:bg-[#111419] hover:text-white">
          Back
        </Link>
        <button type="submit" className="inline-flex h-11 items-center rounded-full bg-[#ed2967] px-6 text-sm font-semibold text-white transition hover:bg-[#111419]">
          Save Changes
        </button>
      </div>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-[#48423c]">
      {label}
      {children}
    </label>
  );
}

const inputClassName =
  "h-11 w-full rounded-md border border-[#e1ddd5] bg-[#f7f6f2] px-3 text-sm font-medium text-[#151515] outline-none transition focus:border-[#ed2967]";
