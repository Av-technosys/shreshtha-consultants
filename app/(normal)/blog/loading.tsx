import { TopLoader } from "@/components/common/top-loader";
import { Skeleton } from "@/components/common/skeleton";
import { Container } from "@/components/common/container";

export default function BlogLoading() {
  return (
    <main className="font-inter overflow-hidden bg-[#f7f6f2] text-[#1a1a1a]">
      <TopLoader />
      <section className="bg-[#f7f7f4] py-[44px] max-[900px]:py-10 max-[520px]:py-8">
        <Container>
          <div className="max-w-[1020px]">
            <Skeleton className="h-[62px] w-full max-w-[780px] rounded-md max-[520px]:h-11" />
            <Skeleton className="mt-[18px] h-8 w-full max-w-[660px] rounded-md max-[520px]:mt-4 max-[520px]:h-6" />
          </div>
        </Container>
      </section>

      <section className="bg-[#F7F6F2] py-[38px] max-[900px]:py-7 max-[520px]:py-6">
        <Container>
          <div className="grid grid-cols-3 gap-[30px] max-[1280px]:grid-cols-2 max-[900px]:gap-5 max-[720px]:grid-cols-1">
            {Array.from({ length: 6 }).map((_, index) => (
              <article
                key={index}
                className="flex h-full flex-col overflow-hidden rounded-[14px] bg-white p-[10px] shadow-[0_8px_22px_rgb(32_28_23_/_0.08)] max-[520px]:p-2"
              >
                <Skeleton className="block aspect-[506/333] rounded-[10px] max-[520px]:rounded-[9px]" />
                <div className="flex flex-1 flex-col px-3 pb-3 pt-5 max-[520px]:px-2.5 max-[520px]:pt-4">
                  <Skeleton className="h-6 w-full rounded-md" />
                  <Skeleton className="mt-2 h-6 w-4/5 rounded-md" />
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <Skeleton className="h-4 w-28 rounded" />
                    <Skeleton className="size-1 rounded-full" />
                    <Skeleton className="h-4 w-24 rounded" />
                  </div>
                  <div className="mt-auto pt-6 max-[520px]:pt-5">
                    <Skeleton className="h-4 w-24 rounded" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
