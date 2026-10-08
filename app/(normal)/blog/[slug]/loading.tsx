import { CalendarDays, UserRound } from "lucide-react";
import { Skeleton } from "@/components/common/skeleton";
import { TopLoader } from "@/components/common/top-loader";

export default function BlogSlugLoading() {
  return (
    <main className="font-inter bg-white text-[#181818]">
      <TopLoader />
      <article className="mx-auto w-full max-w-[1140px] px-6 pb-24 pt-12 max-[900px]:px-5 max-[520px]:pt-9">
        <header className="max-w-[1060px]">
          <Skeleton className="h-[22px] w-56 rounded-md max-[700px]:h-4" />
          <Skeleton className="mt-4 h-[50px] w-full max-w-[900px] rounded-md max-[520px]:h-9" />
          <Skeleton className="mt-3 h-[50px] w-4/5 max-w-[760px] rounded-md max-[520px]:h-9" />

          <div className="mt-9 flex flex-wrap items-center gap-x-10 gap-y-3 max-[640px]:mt-7 max-[640px]:gap-x-6 max-[520px]:flex-nowrap max-[520px]:gap-x-3">
            <div className="inline-flex shrink-0 items-center gap-2.5 max-[520px]:gap-1.5">
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#f7f6f2] text-[#ed2967] max-[520px]:size-[22px]">
                <UserRound className="h-[15px] w-[15px] max-[520px]:h-3 max-[520px]:w-3" strokeWidth={2} />
              </span>
              <Skeleton className="h-5 w-36 rounded max-[520px]:w-24" />
            </div>
            <div className="inline-flex shrink-0 items-center gap-2.5 max-[520px]:gap-1.5">
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#f7f6f2] text-[#ed2967] max-[520px]:size-[22px]">
                <CalendarDays className="h-[15px] w-[15px] max-[520px]:h-3 max-[520px]:w-3" strokeWidth={2} />
              </span>
              <Skeleton className="h-5 w-32 rounded max-[520px]:w-24" />
            </div>
          </div>
        </header>

        <Skeleton className="relative mt-6 block aspect-[1140/540] w-full rounded-[14px] max-[700px]:aspect-[4/3]" />

        <div className="mx-auto mt-12 flex max-w-[1140px] flex-col gap-10 lg:flex-row lg:items-start lg:justify-between max-[700px]:mt-8">
          <aside className="hidden w-full shrink-0 lg:block lg:w-[280px] lg:sticky lg:top-[120px]">
            <Skeleton className="mb-6 h-4 w-28 rounded" />
            <div className="relative flex flex-col gap-5 border-l-2 border-[#e1ddd5] pl-6">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Skeleton className="h-5 w-6 rounded" />
                  <Skeleton className="h-5 flex-1 rounded" />
                </div>
              ))}
            </div>
          </aside>

          <div className="w-full max-w-[760px] flex-1">
            {Array.from({ length: 8 }).map((_, index) => (
              <Skeleton
                key={index}
                className={[
                  "mb-4 block rounded-md",
                  index === 0 ? "h-8 w-2/3" : "h-5",
                  index === 2 ? "w-11/12" : "",
                  index === 4 ? "w-4/5" : "",
                  index === 6 ? "h-8 w-1/2" : "",
                ].join(" ")}
              />
            ))}
            <Skeleton className="mt-8 block h-[180px] rounded-lg" />
            {Array.from({ length: 5 }).map((_, index) => (
              <Skeleton
                key={`tail-${index}`}
                className={`mt-4 block h-5 rounded-md ${index === 4 ? "w-2/3" : "w-full"}`}
              />
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
