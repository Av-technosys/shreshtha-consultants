import { AdminSkeletonShell } from "@/components/admin/admin-skeleton-shell";
import { Skeleton } from "@/components/common/skeleton";

export function AdminBlogFormSkeleton({ titleWidth }: { titleWidth: string }) {
  return (
    <AdminSkeletonShell>
      <section className="mx-auto max-w-[980px] rounded-lg border border-[#e5e1d8] bg-white shadow-[0_10px_28px_rgb(32_28_23_/_0.06)]">
        <div className="flex items-start justify-between border-b border-[#ebe7df] p-5 max-[640px]:block">
          <div>
            <Skeleton className="h-3 w-16 rounded" />
            <Skeleton className={`mt-4 h-10 ${titleWidth} max-w-full rounded-md`} />
          </div>
          <Skeleton className="h-9 w-32 rounded-full max-[640px]:mt-4" />
        </div>

        <div className="grid gap-5 p-5">
          <FieldSkeleton />
          <div className="grid grid-cols-2 items-start gap-4 max-[680px]:grid-cols-1">
            <FieldSkeleton />
            <FieldSkeleton />
          </div>
          <div className="grid grid-cols-2 items-start gap-4 max-[680px]:grid-cols-1">
            <FieldSkeleton />
            <FieldSkeleton />
          </div>
          <div className="grid gap-2">
            <Skeleton className="h-4 w-40 rounded" />
            <Skeleton className="h-[86px] rounded-md" />
          </div>
          <div className="grid gap-2">
            <Skeleton className="h-4 w-40 rounded" />
            <Skeleton className="h-[430px] rounded-md" />
          </div>
          <div className="grid gap-3 border-t border-[#ebe7df] pt-5">
            <div className="flex items-center justify-between">
              <Skeleton className="h-4 w-32 rounded" />
              <Skeleton className="h-8 w-24 rounded-full bg-[#d8d2c8]" />
            </div>
            <Skeleton className="h-5 w-36 rounded" />
          </div>
          <div className="mt-2 flex items-center justify-between gap-4 rounded-lg border border-[#e5e1d8] bg-[#fbfaf7] p-4">
            <div className="w-full max-w-[460px]">
              <Skeleton className="h-4 w-28 rounded" />
              <Skeleton className="mt-2 h-5 w-full rounded" />
            </div>
            <Skeleton className="h-7 w-12 rounded-full" />
          </div>
          <div className="flex flex-wrap items-center justify-end gap-3 border-t border-[#ebe7df] pt-5">
            <Skeleton className="h-11 w-20 rounded-full" />
            <Skeleton className="h-11 w-32 rounded-full bg-[#d8d2c8]" />
          </div>
        </div>
      </section>
    </AdminSkeletonShell>
  );
}

function FieldSkeleton() {
  return (
    <div className="grid gap-2">
      <Skeleton className="h-4 w-28 rounded" />
      <Skeleton className="h-11 rounded-md" />
    </div>
  );
}
