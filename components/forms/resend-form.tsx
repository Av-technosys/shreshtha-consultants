"use client";

import { type FormEvent, type ReactNode, useState } from "react";
import { TopLoader } from "@/components/common/top-loader";

type ResendFormProps = {
  formType: string;
  className?: string;
  children: ReactNode;
  successMessage?: string;
};

export function ResendForm({
  formType,
  className,
  children,
  successMessage = "Thanks. Our team will get back to you shortly.",
}: ResendFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const formClassName = `${className ?? ""} ${message ? "flex-wrap" : ""}`.trim();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("_formType", formType);

    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/forms", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error();
      }

      form.reset();
      setStatus("success");
      setMessage(successMessage);
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <>
      <TopLoader active={status === "sending"} />
      <form className={formClassName} onSubmit={handleSubmit} aria-busy={status === "sending"}>
        <fieldset className="contents disabled:pointer-events-none disabled:opacity-70" disabled={status === "sending"}>
          {children}
        </fieldset>
        {message ? (
          <div
            className="basis-full pt-1 text-center"
            role={status === "error" ? "alert" : "status"}
          >
            <p
              className={`mx-auto max-w-[520px] rounded-full px-4 py-2 font-inter text-[13px] font-semibold leading-5 ${
                status === "success"
                  ? "bg-[#edf8f1] text-[#1d7a45]"
                  : "bg-[#fff1f0] text-[#b42318]"
              }`}
            >
              {message}
            </p>
          </div>
        ) : null}
      </form>
    </>
  );
}
