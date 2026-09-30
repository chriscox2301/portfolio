import { NextResponse } from "next/server";
import { Resend } from "resend";
import type { ContactErrorCode } from "@/content/types";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  message?: unknown;
}

function validate(payload: ContactPayload) {
  const errors: Partial<Record<"name" | "email" | "message", ContactErrorCode>> =
    {};

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const message =
    typeof payload.message === "string" ? payload.message.trim() : "";

  if (!name) errors.name = "nameRequired";
  if (!email) {
    errors.email = "emailRequired";
  } else if (!EMAIL_RE.test(email)) {
    errors.email = "emailInvalid";
  }
  if (!message) errors.message = "messageRequired";

  return { name, email, message, errors };
}

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { errors: { form: "invalidBody" } },
      { status: 400 },
    );
  }

  const { name, email, message, errors } = validate(payload);

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;

  if (!apiKey || !to) {
    console.error("Contact form is missing RESEND_API_KEY or CONTACT_TO.");
    return NextResponse.json(
      { errors: { form: "notConfigured" } },
      { status: 500 },
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "Portfolio contact form <onboarding@resend.dev>",
      to,
      replyTo: email,
      subject: `New message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { errors: { form: "sendFailed" } },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form send failed:", error);
    return NextResponse.json(
      { errors: { form: "sendFailed" } },
      { status: 500 },
    );
  }
}
