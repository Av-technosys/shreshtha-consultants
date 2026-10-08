export const metadata = {
  title: "Privacy Policy | Shreshtha Consultants",
  description: "Privacy policy for Shreshtha Consultants.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#f7f6f2] px-[4%] py-24 text-[#101418]">
      <section className="mx-auto max-w-[920px] rounded-lg border border-[#e3e0d8] bg-white p-8 shadow-[0_20px_60px_rgb(16_20_24_/_0.06)]">
        <p className="font-archivo text-xs font-bold uppercase tracking-[0.22em] text-[#777067]">
          Shreshtha Consultants
        </p>
        <h1 className="font-archivo mt-4 text-[clamp(34px,4vw,54px)] font-semibold leading-[1.05] tracking-[-0.04em]">
          Privacy Policy
        </h1>
        <div className="mt-8 space-y-5 font-lora text-[16px] leading-8 text-[#5c6570]">
          <p>
            We collect only the information needed to respond to enquiries, applications, and project requests submitted through this website.
          </p>
          <p>
            Contact details, form messages, and uploaded documents are used by Shreshtha Consultants for communication and service evaluation. We do not sell personal information.
          </p>
          <p>
            To request correction or deletion of submitted information, contact us at contact@shreshthaconsultants.com.
          </p>
        </div>
      </section>
    </main>
  );
}
