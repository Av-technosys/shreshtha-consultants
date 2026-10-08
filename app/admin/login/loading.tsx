import { Skeleton } from "@/components/common/skeleton";
import { TopLoader } from "@/components/common/top-loader";

export default function AdminLoginLoading() {
  return (
    <main className="font-inter min-h-screen bg-[#f7f6f2] text-[#111419]">
      <TopLoader />
      <section className="grid min-h-screen grid-cols-[0.95fr_1.05fr] max-[980px]:grid-cols-1">
        <div className="relative flex flex-col justify-between overflow-hidden bg-[#111419] px-10 py-9 text-white max-[980px]:min-h-[360px] max-[640px]:px-6">
          <div className="relative z-10 flex items-center gap-3">
            <Skeleton className="size-12 rounded-lg bg-white/12" dark />
            <div>
              <Skeleton className="h-6 w-28 rounded" dark />
              <Skeleton className="mt-2 h-3 w-32 rounded" dark />
            </div>
          </div>

          <div className="relative z-10 max-w-[560px]">
            <Skeleton className="h-3 w-40 rounded" dark />
            <Skeleton className="mt-5 h-[70px] w-full rounded-md" dark />
            <Skeleton className="mt-3 h-[70px] w-4/5 rounded-md" dark />
            <Skeleton className="mt-5 h-6 w-full max-w-[460px] rounded-md" dark />
            <Skeleton className="mt-2 h-6 w-4/5 rounded-md" dark />
          </div>

          <div className="relative z-10 flex flex-wrap gap-3">
            <Skeleton className="h-4 w-36 rounded" dark />
            <Skeleton className="h-4 w-3 rounded" dark />
            <Skeleton className="h-4 w-40 rounded" dark />
          </div>
        </div>

        <div className="flex items-center justify-center px-10 py-12 max-[640px]:px-5">
          <div className="w-full max-w-[480px] rounded-lg border border-[#e5e1d8] bg-white p-8 shadow-[0_18px_45px_rgb(32_28_23_/_0.08)] max-[520px]:p-5">
            <div className="mb-8">
              <Skeleton className="h-3 w-16 rounded" />
              <Skeleton className="mt-3 h-9 w-56 rounded-md" />
              <Skeleton className="mt-3 h-5 w-full rounded-md" />
            </div>

            <div className="grid gap-5">
              <FieldSkeleton />
              <FieldSkeleton />
              <div className="flex items-center justify-between gap-4">
                <Skeleton className="h-5 w-32 rounded" />
                <Skeleton className="h-5 w-28 rounded" />
              </div>
              <Skeleton className="h-12 rounded-full bg-[#d8d2c8]" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function FieldSkeleton() {
  return (
    <div className="grid gap-2">
      <Skeleton className="h-4 w-28 rounded" />
      <Skeleton className="h-12 rounded-md" />
    </div>
  );
}
