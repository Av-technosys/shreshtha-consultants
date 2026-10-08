export const runtime = "nodejs";

type EmailField = {
  label: string;
  value: string;
};

type EmailAttachment = {
  filename: string;
  content: string;
};

const fieldLabels: Record<string, string> = {
  name: "Name",
  Name: "Name",
  email: "Email",
  Email: "Email",
  phone: "Phone",
  Phone: "Phone",
  Project_Size: "Project Size",
  Location: "Project Location",
  Project_Type: "Project Type",
  projectSize: "Project Size",
  projectLocation: "Project Location",
  projectType: "Project Type",
  companyName: "Company Name",
  contactPerson: "Contact Person",
  productService: "Product / Service",
  description: "Description",
  role: "Role",
  message: "Message",
};

const maxAttachmentSize = 4 * 1024 * 1024;

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return Response.json({ message: "Something went wrong. Please try again." }, { status: 500 });
  }

  const formData = await request.formData();
  const formType = cleanValue(formData.get("_formType")) || "Website Inquiry";
  const fields: EmailField[] = [];
  const attachments: EmailAttachment[] = [];
  const skippedFiles: string[] = [];
  let replyTo = "";

  for (const [key, value] of formData.entries()) {
    if (key.startsWith("_")) continue;

    if (value instanceof File) {
      if (!value.name || value.size === 0) continue;

      if (value.size > maxAttachmentSize) {
        skippedFiles.push(`${value.name} (${formatBytes(value.size)})`);
        continue;
      }

      attachments.push({
        filename: value.name,
        content: Buffer.from(await value.arrayBuffer()).toString("base64"),
      });
      continue;
    }

    const text = cleanValue(value);
    if (!text) continue;

    fields.push({
      label: fieldLabels[key] || titleCase(key),
      value: text,
    });

    if (!replyTo && key.toLowerCase().includes("email") && isEmail(text)) {
      replyTo = text;
    }
  }

  if (fields.length === 0 && attachments.length === 0) {
    return Response.json({ message: "Please fill the form before submitting." }, { status: 400 });
  }

  skippedFiles.forEach((file) => {
    fields.push({
      label: "File skipped",
      value: `${file} exceeded the 4 MB email attachment limit.`,
    });
  });

  const subject = `New ${formType} - Shreshtha Consultants`;
  const payload = {
    from: process.env.RESEND_FROM_EMAIL || "Shreshtha Website <onboarding@resend.dev>",
    to: [process.env.CONTACT_FORM_TO || "contact@shreshthaconsultants.com"],
    subject,
    html: renderHtml(formType, fields, attachments),
    text: renderText(formType, fields, attachments),
    ...(replyTo ? { reply_to: [replyTo] } : {}),
    ...(attachments.length ? { attachments } : {}),
  };

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    return Response.json({ message: "Something went wrong. Please try again." }, { status: 502 });
  }

  return Response.json({ ok: true });
}

function cleanValue(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function titleCase(value: string) {
  return value
    .replace(/[_-]+/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function formatBytes(bytes: number) {
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderHtml(formType: string, fields: EmailField[], attachments: EmailAttachment[]) {
  const rows = fields
    .map(
      (field) => `
        <tr>
          <td style="padding:12px 14px;border-bottom:1px solid #eee;color:#5c6570;font-weight:700;width:190px;">${escapeHtml(field.label)}</td>
          <td style="padding:12px 14px;border-bottom:1px solid #eee;color:#101418;">${escapeHtml(field.value).replace(/\n/g, "<br />")}</td>
        </tr>`
    )
    .join("");

  const attachmentText = attachments.length
    ? `<p style="margin:18px 0 0;color:#5c6570;">Attachments included: ${attachments.map((file) => escapeHtml(file.filename)).join(", ")}</p>`
    : "";

  return `
    <div style="font-family:Arial,sans-serif;max-width:720px;margin:0 auto;color:#101418;">
      <h1 style="font-size:24px;line-height:1.25;margin:0 0 18px;">New ${escapeHtml(formType)}</h1>
      <table style="width:100%;border-collapse:collapse;background:#fff;border:1px solid #eee;">
        <tbody>${rows}</tbody>
      </table>
      ${attachmentText}
    </div>`;
}

function renderText(formType: string, fields: EmailField[], attachments: EmailAttachment[]) {
  const lines = fields.map((field) => `${field.label}: ${field.value}`);
  const attachmentLines = attachments.length
    ? [`Attachments: ${attachments.map((file) => file.filename).join(", ")}`]
    : [];

  return [`New ${formType}`, "", ...lines, ...attachmentLines].join("\n");
}
