import { AdminSkeletonShell } from "@/components/admin/admin-skeleton-shell";
import { Skeleton } from "@/components/common/skeleton";

export default function AdminBlogsLoading() {
  return (
    <AdminSkeletonShell>
      <header className="flex items-start justify-between gap-5 max-[760px]:block">
        <div>
          <Skeleton className="h-3 w-20 rounded" />
          <Skeleton className="mt-4 h-11 w-[360px] max-w-full rounded-md" />
        </div>
        <div className="flex flex-wrap justify-end gap-3 max-[760px]:mt-5 max-[760px]:justify-start">
          <Skeleton className="h-11 w-44 rounded-full" />
          <Skeleton className="h-11 w-40 rounded-full bg-[#d8d2c8]" />
        </div>
      </header>

      <section className="mt-7 rounded-lg border border-[#e5e1d8] bg-white p-5 shadow-[0_10px_28px_rgb(32_28_23_/_0.06)]">
        <div className="flex items-center justify-between gap-3 max-[640px]:block">
          <Skeleton className="h-6 w-24 rounded" />
          <Skeleton className="h-5 w-16 rounded max-[640px]:mt-3" />
        </div>

        <div className="mt-5 overflow-hidden rounded-lg border border-[#ece8e0]">
          <div className="grid grid-cols-[1.35fr_0.6fr_0.55fr_0.45fr] bg-[#f7f6f2] px-4 py-3 max-[900px]:hidden">
            <Skeleton className="h-3 w-12 rounded" />
            <Skeleton className="h-3 w-20 rounded" />
            <Skeleton className="h-3 w-12 rounded" />
            <Skeleton className="ml-auto h-3 w-16 rounded" />
          </div>

          <div className="divide-y divide-[#ece8e0]">
            {Array.from({ length: 5 }).map((_, index) => (
              <article
                key={index}
                className="grid grid-cols-[1.35fr_0.6fr_0.55fr_0.45fr] items-center gap-4 bg-white px-4 py-4 max-[900px]:grid-cols-1"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <Skeleton className="h-5 w-[min(320px,70vw)] rounded" />
                    <Skeleton className="h-7 w-20 rounded-full" />
                  </div>
                  <Skeleton className="mt-3 h-4 w-full rounded" />
                  <Skeleton className="mt-2 h-4 w-3/4 rounded" />
                </div>
                <Skeleton className="h-5 w-28 rounded" />
                <Skeleton className="h-5 w-24 rounded" />
                <div className="flex justify-end gap-2 max-[900px]:justify-start">
                  <Skeleton className="h-9 w-20 rounded-full" />
                  <Skeleton className="h-9 w-24 rounded-full" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </AdminSkeletonShell>
  );
}
