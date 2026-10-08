import Image from "next/image";
import { Container } from "@/components/common/container";

type SimpleProjectPageProps = {
  title: string;
  category: string;
  location?: string;
  image?: string;
};

export function SimpleProjectPage({
  title,
  category,
  location = "India",
  image,
}: SimpleProjectPageProps) {
  return (
    <main className="min-h-screen bg-[#F7F6F2] text-[#101418]">
      <section className="relative flex min-h-[430px] items-end overflow-hidden bg-[#101418]">
        {image ? (
          <Image src={image} alt={title} fill priority className="object-cover" />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(237,41,103,0.22),transparent_34%),linear-gradient(135deg,#101418,#252a30)]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
        <Container className="relative z-10 pb-12 max-lg:px-[4%]">
          <p className="mb-4 font-archivo text-[12px] font-semibold uppercase tracking-[2.4px] text-white/60">
            {category}
          </p>
          <h1 className="max-w-[900px] font-archivo text-[42px] font-bold leading-[1.05] tracking-[-1.4px] text-white md:text-[68px]">
            {title}
          </h1>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container className="grid gap-10 max-lg:px-[4%] md:grid-cols-[280px_1fr] lg:gap-24">
          <aside className="space-y-8">
            <div className="border-t border-black/10 pt-5">
              <p className="mb-3 font-archivo text-[11px] font-bold uppercase tracking-[1.3px] text-[#5C6570]">
                Services Provided
              </p>
              <p className="font-archivo text-[18px] font-bold">MEP Consultancy</p>
            </div>
            <div className="border-t border-black/10 pt-5">
              <p className="mb-3 font-archivo text-[11px] font-bold uppercase tracking-[1.3px] text-[#5C6570]">
                Location
              </p>
              <p className="font-archivo text-[18px] font-bold">{location}</p>
            </div>
          </aside>

          <div className="max-w-[820px]">
            <p className="font-lora text-[17px] leading-[1.8] text-[#343a40]">
              {title} is part of Shreshtha Consultants&apos; project portfolio, with services focused on reliable,
              coordinated MEP systems for efficient site execution and long-term building performance.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
