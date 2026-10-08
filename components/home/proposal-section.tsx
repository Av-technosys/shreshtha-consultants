import { Container } from "@/components/common/container";
import { ResendForm } from "@/components/forms/resend-form";

export function ProposalSection() {
  return (
    <>
      <section className="pb-[90px] pt-[120px] text-center max-[760px]:pb-[60px] max-[760px]:pt-20">
        <Container>
          <div className="font-archivo flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.22em] text-[#5c6570] before:h-0.5 before:w-[26px] before:bg-[#ed2967]">
            Why Shreshtha
          </div>
          <h2 className="font-archivo mx-auto mb-4 mt-[22px] max-w-[900px] text-[clamp(34px,4.4vw,64px)] font-bold leading-[1.04] tracking-[-0.04em]">
            Engineering you can <em className="not-italic text-[#ed2967]">Trust,</em>
            <br />
            Efficiency you can <em className="not-italic text-[#ed2967]">Measure.</em>
          </h2>
          <p className="leading-7 text-[#5c6570]">Elevate Your Next Project With Our MEP Expertise.</p>
        </Container>
      </section>

      <section className="pb-[120px]" id="contact">
        <Container>
          <div className="mx-auto max-w-[880px] rounded-3xl border border-[#e3e0d8] bg-white p-14 shadow-[0_40px_80px_rgb(16_20_24_/_0.06)] max-[760px]:px-[22px] max-[760px]:py-[34px]">
            <ResendForm formType="Proposal Request">
              <div className="grid grid-cols-2 gap-[22px] max-[760px]:grid-cols-1">
                <Field label="Name*" name="Name" required placeholder="Your full name" />
                <Field label="Email*" name="Email" type="email" required placeholder="you@company.com" />
                <Field label="Phone number*" name="Phone" required placeholder="+91" />
                <Field label="Project Size (in sq. ft.)" name="Project_Size" placeholder="e.g. 50,000" />
                <Field label="Project Location" name="Location" placeholder="City, State" />
                <div className="flex flex-col gap-2">
                  <label className="font-archivo text-[13px] font-bold">Type of Project</label>
                  <select
                    name="Project_Type"
                    defaultValue="Commercial"
                    className="rounded-[10px] border border-[#e3e0d8] bg-[#f7f6f2] px-4 py-3.5 text-[15px] text-[#101418] outline-none transition focus:border-[#101418] focus:bg-white focus:shadow-[0_0_0_4px_rgb(237_41_103_/_0.22)]"
                  >
                    <option>Commercial</option>
                    <option>Healthcare</option>
                    <option>Hospital</option>
                    <option>Infrastructure/Industrial</option>
                    <option>Institutional</option>
                    <option>Landscape</option>
                    <option>Residential</option>
                  </select>
                </div>
              </div>
              <button
                className="font-archivo mt-[30px] inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-[#101418] bg-[#101418] p-[18px] text-sm font-bold text-white transition duration-300 hover:border-[#16163f] hover:bg-[#16163f] hover:text-[#e2e2e2]"
                type="submit"
              >
                Request a Proposal <span>→</span>
              </button>
            </ResendForm>
          </div>
        </Container>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-archivo text-[13px] font-bold">{label}</label>
      <input
        className="rounded-[10px] border border-[#e3e0d8] bg-[#f7f6f2] px-4 py-3.5 text-[15px] text-[#101418] outline-none transition focus:border-[#101418] focus:bg-white focus:shadow-[0_0_0_4px_rgb(237_41_103_/_0.22)]"
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
}
