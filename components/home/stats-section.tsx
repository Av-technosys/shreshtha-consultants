import { Container } from "@/components/common/container";


const stats = [
  ["1050+", "Projects completed"],
  ["25M+", "sq.ft Areas worked"],
  ["25+", "Years of Experience"],
  ["500+", "Clients served"],
  ["50+", "Team size"],
];

export function StatsSection() {
  return (
    <section className="border-y border-[#e3e0d8] bg-white">
      <Container className="grid grid-cols-5 max-[1080px]:grid-cols-3 max-[760px]:grid-cols-2">
        {stats.map(([value, label]) => (
          <div
            className="border-l border-[#e3e0d8] px-[26px] py-12 first:border-l-0 max-[1080px]:border-t max-[760px]:odd:border-l-0 max-[760px]:last:col-span-2 max-[760px]:last:text-center"
            key={label}
          >
            <strong className="font-archivo block text-[clamp(34px,3.4vw,52px)] font-bold leading-none tracking-[-0.03em]">
              {value}
            </strong>
            <span className="mt-2.5 block text-[13px] uppercase tracking-[0.04em] text-[#5c6570]">
              {label}
            </span>
          </div>
        ))}
      </Container>
    </section>
  );
}
