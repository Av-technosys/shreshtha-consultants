import Image from "next/image";
import Link from "next/link";
import { ArrowRight, LockKeyhole, Mail } from "lucide-react";


export default function AdminLoginPage() {
  return (
    <main className="font-inter min-h-screen bg-[#f7f6f2] text-[#111419]">
      <section className="grid min-h-screen grid-cols-[0.95fr_1.05fr] max-[980px]:grid-cols-1">
        <div className="relative flex flex-col justify-between overflow-hidden bg-[#111419] px-10 py-9 text-white max-[980px]:min-h-[360px] max-[640px]:px-6">
          <div className="relative z-10 flex items-center gap-3">
            <span className="grid size-12 place-items-center rounded-lg bg-white">
              <Image src="/Common/logo.png" alt="" width={34} height={34} priority className="size-[34px]" />
            </span>
            <div>
              <p className="font-archivo text-xl font-semibold leading-none">Shreshtha</p>
              <p className="mt-1 text-xs uppercase tracking-[0.24em] text-white/45">Admin Access</p>
            </div>
          </div>

          <div className="relative z-10 max-w-[560px]">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/45">Content Operations</p>
            <h1 className="font-archivo mt-5 text-[clamp(40px,5vw,68px)] font-semibold leading-[1.02] tracking-[-0.045em]">
              Manage insights with calm control.
            </h1>
            <p className="mt-5 max-w-[460px] text-base leading-7 text-white/62">
              A focused workspace for publishing engineering stories, maintaining blog content, and keeping the site journal sharp.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap gap-3 text-xs font-semibold text-white/50">
            <span>Secure blog workspace</span>
            <span className="text-[#ed2967]">/</span>
            <span>Shreshtha Consultants</span>
          </div>
        </div>

        <div className="flex items-center justify-center px-10 py-12 max-[640px]:px-5">
          <div className="w-full max-w-[480px] rounded-lg border border-[#e5e1d8] bg-white p-8 shadow-[0_18px_45px_rgb(32_28_23_/_0.08)] max-[520px]:p-5">
            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#777067]">Login</p>
              <h2 className="font-archivo mt-3 text-[34px] font-semibold leading-[1.05] tracking-[-0.035em]">
                Welcome back.
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#716b63]">
                Sign in to access the admin panel. This screen is UI only for now.
              </p>
            </div>

            <form className="grid gap-5">
              <label className="grid gap-2 text-sm font-semibold text-[#48423c]">
                Email Address
                <span className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#928b82]" size={17} />
                  <input
                    type="email"
                    placeholder="admin@shreshtha.com"
                    className="h-12 w-full rounded-md border border-[#e1ddd5] bg-[#f7f6f2] pl-10 pr-3 text-sm font-medium outline-none transition focus:border-[#ed2967]"
                  />
                </span>
              </label>

              <label className="grid gap-2 text-sm font-semibold text-[#48423c]">
                Password
                <span className="relative">
                  <LockKeyhole className="absolute left-3 top-1/2 -translate-y-1/2 text-[#928b82]" size={17} />
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="h-12 w-full rounded-md border border-[#e1ddd5] bg-[#f7f6f2] pl-10 pr-3 text-sm font-medium outline-none transition focus:border-[#ed2967]"
                  />
                </span>
              </label>

              <div className="flex items-center justify-between gap-4 text-sm max-[420px]:block">
                <label className="inline-flex items-center gap-2 font-medium text-[#625c55]">
                  <input type="checkbox" className="size-4 accent-[#ed2967]" />
                  Remember me
                </label>
                <Link href="#" className="font-semibold text-[#ed2967] max-[420px]:mt-3 max-[420px]:inline-block">
                  Forgot password?
                </Link>
              </div>

              <Link
                href="/admin"
                className="mt-1 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#111419] px-6 text-sm font-semibold text-white transition hover:bg-[#ed2967]"
              >
                Login to Admin
                <ArrowRight size={16} strokeWidth={2} />
              </Link>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
