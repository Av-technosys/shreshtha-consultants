import { AdminSkeletonShell } from "@/components/admin/admin-skeleton-shell";
import { Skeleton } from "@/components/common/skeleton";

export default function AdminLoading() {
  return (
    <AdminSkeletonShell>
      <header>
        <Skeleton className="h-3 w-24 rounded" />
        <Skeleton className="mt-4 h-12 w-full max-w-[560px] rounded-md" />
        <Skeleton className="mt-4 h-6 w-full max-w-[640px] rounded-md" />
        <Skeleton className="mt-2 h-6 w-full max-w-[520px] rounded-md" />
      </header>

      <div className="mt-8 grid grid-cols-[1.1fr_0.9fr] gap-5 max-[1080px]:grid-cols-1">
        <section className="rounded-lg border border-[#e5e1d8] bg-white p-6 shadow-[0_10px_28px_rgb(32_28_23_/_0.06)]">
          <div className="flex items-start justify-between gap-5 max-[640px]:block">
            <div className="w-full max-w-[520px]">
              <Skeleton className="h-3 w-28 rounded" />
              <Skeleton className="mt-4 h-9 w-32 rounded-md" />
              <Skeleton className="mt-4 h-5 w-full rounded-md" />
              <Skeleton className="mt-2 h-5 w-4/5 rounded-md" />
            </div>
            <Skeleton className="size-12 rounded-lg max-[640px]:mt-5" />
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3 max-[520px]:grid-cols-1">
            <Skeleton className="h-11 rounded-full bg-[#d8d2c8]" />
            <Skeleton className="h-11 rounded-full" />
          </div>
        </section>

        <section className="flex flex-col justify-between rounded-lg border border-[#e5e1d8] bg-[#111419] p-6 text-white shadow-[0_10px_28px_rgb(32_28_23_/_0.08)]">
          <Skeleton className="h-3 w-32 rounded" dark />
          <div className="mt-6 grid flex-1 grid-cols-2 gap-4 max-[400px]:grid-cols-1">
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <Skeleton className="h-3 w-20 rounded" dark />
              <Skeleton className="mt-3 h-10 w-16 rounded-md" dark />
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <Skeleton className="h-3 w-16 rounded" dark />
              <Skeleton className="mt-3 h-10 w-16 rounded-md" dark />
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
            <Skeleton className="h-4 w-20 rounded" dark />
            <Skeleton className="h-4 w-8 rounded" dark />
          </div>
        </section>
      </div>
    </AdminSkeletonShell>
  );
}
