import { FileText, LayoutDashboard } from "lucide-react";
import { Skeleton } from "@/components/common/skeleton";
import { TopLoader } from "@/components/common/top-loader";

export function AdminSkeletonShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="grid min-h-screen grid-cols-[280px_1fr] bg-[#f7f6f2] font-inter text-[#121417] max-[1080px]:grid-cols-1">
      <TopLoader />
      <aside className="sticky top-0 h-screen overflow-y-auto border-r border-[#e3e0d8] bg-[#111419] px-6 py-7 text-white max-[1080px]:static max-[1080px]:h-auto max-[1080px]:border-r-0">
        <div className="flex items-center gap-3">
          <Skeleton className="size-12 rounded-lg bg-white/12" dark />
          <div>
            <Skeleton className="h-5 w-24 rounded" dark />
            <Skeleton className="mt-2 h-3 w-20 rounded" dark />
          </div>
        </div>

        <nav className="mt-10 grid gap-2 text-sm">
          <div className="inline-flex h-11 items-center gap-3 rounded-lg bg-white px-3 text-[#111419]">
            <LayoutDashboard size={17} />
            <Skeleton className="h-4 w-24 rounded bg-[#d8d2c8]" />
          </div>
          <div className="inline-flex h-11 items-center gap-3 rounded-lg px-3 text-white/65">
            <FileText size={17} />
            <Skeleton className="h-4 w-16 rounded" dark />
          </div>
          <Skeleton className="mt-4 h-11 w-full rounded-lg" dark />
        </nav>
      </aside>

      <section className="min-w-0 px-8 py-7 max-[900px]:px-5">{children}</section>
    </main>
  );
}
