"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { FolderCog, Plus, Save, Trash2, X } from "lucide-react";
import {
  createCategoryAction,
  deleteCategoryAction,
  updateCategoryAction,
  type CategoryActionState,
} from "@/helpers/admin/blog-actions";
import type { AdminBlogCategory } from "@/helpers/admin/blogs";

type CategoryManagerDialogProps = {
  categories: AdminBlogCategory[];
};

const initialState: CategoryActionState = {
  ok: false,
  message: "",
};

export function CategoryManagerDialog({ categories }: CategoryManagerDialogProps) {
  const router = useRouter();
  const createFormRef = useRef<HTMLFormElement>(null);
  const [open, setOpen] = useState(false);
  const [activeAction, setActiveAction] = useState<"create" | "update" | "delete" | null>(null);
  const [createState, createAction, createPending] = useActionState(createCategoryAction, initialState);
  const [updateState, updateAction, updatePending] = useActionState(updateCategoryAction, initialState);
  const [deleteState, deleteAction, deletePending] = useActionState(deleteCategoryAction, initialState);
  const latestState =
    activeAction === "delete" ? deleteState : activeAction === "update" ? updateState : createState;

  useEffect(() => {
    if (!latestState.ok) return;

    if (activeAction === "create") {
      createFormRef.current?.reset();
    }

    router.refresh();
  }, [activeAction, latestState, router]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex h-11 items-center gap-2 rounded-full border border-[#d8d2c8] bg-white px-5 text-sm font-semibold text-[#111419] transition hover:border-[#111419] max-[760px]:mt-3"
      >
        <FolderCog size={17} strokeWidth={2} />
        Manage Categories
      </button>

      {open && (
        <div className="fixed inset-0 z-[80] grid place-items-center bg-[#111419]/45 px-4 py-8 backdrop-blur-sm">
          <section className="w-full max-w-[680px] overflow-hidden rounded-xl border border-[#e5e1d8] bg-white shadow-[0_24px_70px_rgb(17_20_25_/_0.22)]">
            <header className="flex items-start justify-between gap-4 border-b border-[#ebe7df] px-5 py-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#777067]">Blog Categories</p>
                <h2 className="mt-2 font-archivo text-2xl font-semibold tracking-[-0.02em] text-[#111419]">
                  Manage categories.
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close category manager"
                className="grid size-10 shrink-0 place-items-center rounded-full border border-[#e1ddd5] text-[#625c55] transition hover:border-[#111419] hover:text-[#111419]"
              >
                <X size={18} />
              </button>
            </header>

            <div className="grid gap-5 p-5">
              <form
                ref={createFormRef}
                action={createAction}
                onSubmit={() => setActiveAction("create")}
                className="grid grid-cols-[1fr_auto] gap-3 max-[560px]:grid-cols-1"
              >
                <input
                  name="name"
                  type="text"
                  placeholder="Add new category"
                  required
                  className={inputClassName}
                />
                <button
                  type="submit"
                  disabled={createPending}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#111419] px-5 text-sm font-semibold text-white transition hover:bg-[#ed2967] disabled:opacity-60"
                >
                  <Plus size={16} />
                  Add
                </button>
              </form>

              {latestState.message && (
                <p
                  className={[
                    "rounded-lg px-3 py-2 text-sm font-semibold",
                    latestState.ok ? "bg-[#eaf8ef] text-[#247044]" : "bg-[#fff2f6] text-[#bc1f52]",
                  ].join(" ")}
                >
                  {latestState.message}
                </p>
              )}

              <div className="max-h-[420px] overflow-y-auto rounded-lg border border-[#ece8e0]">
                <div className="grid grid-cols-[1fr_110px_150px] bg-[#f7f6f2] px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#827b72] max-[640px]:hidden">
                  <span>Name</span>
                  <span>Blogs</span>
                  <span className="text-right">Actions</span>
                </div>

                <div className="divide-y divide-[#ece8e0]">
                  {categories.length === 0 && (
                    <p className="px-4 py-5 text-sm font-medium text-[#746e66]">
                      No categories yet. Add one above.
                    </p>
                  )}

                  {categories.map((category) => (
                    <div
                      key={category.id}
                      className="grid grid-cols-[1fr_110px_150px] items-center gap-3 px-4 py-3 max-[640px]:grid-cols-1"
                    >
                      <form
                        action={updateAction}
                        onSubmit={() => setActiveAction("update")}
                        className="flex items-center gap-2"
                      >
                        <input name="id" type="hidden" value={category.id} />
                        <input
                          name="name"
                          defaultValue={category.name}
                          required
                          className={inputClassName}
                        />
                        <button
                          type="submit"
                          disabled={updatePending}
                          aria-label={`Save ${category.name}`}
                          className="grid size-10 shrink-0 place-items-center rounded-full border border-[#e1ddd5] text-[#4f4942] transition hover:border-[#111419] hover:text-[#111419] disabled:opacity-60"
                        >
                          <Save size={15} />
                        </button>
                      </form>

                      <p className="text-sm font-semibold text-[#746e66] max-[640px]:px-1">
                        {category.blogCount} {category.blogCount === 1 ? "blog" : "blogs"}
                      </p>

                      <form
                        action={deleteAction}
                        onSubmit={() => setActiveAction("delete")}
                        className="flex justify-end max-[640px]:justify-start"
                      >
                        <input name="id" type="hidden" value={category.id} />
                        <button
                          type="submit"
                          disabled={deletePending || category.blogCount > 0}
                          className="inline-flex h-10 items-center gap-2 rounded-full border border-[#f0d6df] px-3 text-xs font-bold text-[#ed2967] transition hover:bg-[#fff2f6] disabled:cursor-not-allowed disabled:border-[#e8e2d9] disabled:text-[#aaa39a] disabled:hover:bg-transparent"
                        >
                          <Trash2 size={14} />
                          Delete
                        </button>
                      </form>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

const inputClassName =
  "h-11 w-full rounded-md border border-[#e1ddd5] bg-[#f7f6f2] px-3 text-sm font-medium text-[#151515] outline-none transition focus:border-[#ed2967]";
