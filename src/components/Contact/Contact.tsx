"use client";

import { useState, type FormEvent } from "react";
import type { ContactCopy, ContactErrorCode } from "@/content/types";
import styles from "./Contact.module.css";

type Status = "idle" | "sending" | "sent" | "error";
type FieldErrors = Partial<
  Record<"name" | "email" | "message" | "form", ContactErrorCode>
>;

interface ContactProps {
  copy: ContactCopy;
}

export default function Contact({ copy }: ContactProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrors({});

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setName("");
        setEmail("");
        setMessage("");
        setStatus("sent");
        return;
      }

      const data = (await res.json().catch(() => null)) as
        | { errors?: FieldErrors }
        | null;
      setErrors(data?.errors ?? { form: "sendFailed" });
      setStatus("error");
    } catch {
      setErrors({ form: "sendFailed" });
      setStatus("error");
    }
  }

  const sending = status === "sending";
  const sent = status === "sent";

  return (
    <section id="contact" aria-labelledby="contact-heading" className={styles.section}>
      <div className={styles.colophon}>
        <span className={styles.colophonRule} aria-hidden="true" />
        <span className={styles.colophonText}>
          {copy.colophon}
        </span>
        <span className={styles.colophonRule} aria-hidden="true" />
      </div>

      <div className={styles.grid}>
        <div>
          <h2 id="contact-heading" className={styles.heading}>{copy.heading}</h2>
          <p className={styles.intro}>{copy.intro}</p>
          <div className={styles.links}>
            {copy.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`${styles.link} ${link.tabularNums ? styles.linkTabular : ""}`}
                {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <label className={`field ${styles.field}`}>
            {copy.nameLabel}
            <input
              className={`input ${styles.input}`}
              type="text"
              name="name"
              placeholder={copy.namePlaceholder}
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "contact-name-error" : undefined}
            />
            {errors.name && (
              <span id="contact-name-error" className={styles.fieldError}>
                {copy.errors[errors.name]}
              </span>
            )}
          </label>

          <label className={`field ${styles.field}`}>
            {copy.emailLabel}
            <input
              className={`input ${styles.input}`}
              type="email"
              name="email"
              placeholder={copy.emailPlaceholder}
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "contact-email-error" : undefined}
            />
            {errors.email && (
              <span id="contact-email-error" className={styles.fieldError}>
                {copy.errors[errors.email]}
              </span>
            )}
          </label>

          <label className={`field ${styles.field}`}>
            {copy.messageLabel}
            <textarea
              className={`input ${styles.input}`}
              name="message"
              rows={4}
              placeholder={copy.messagePlaceholder}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "contact-message-error" : undefined}
              style={{ resize: "vertical" }}
            />
            {errors.message && (
              <span id="contact-message-error" className={styles.fieldError}>
                {copy.errors[errors.message]}
              </span>
            )}
          </label>

          {errors.form && <p className={styles.formError}>{copy.errors[errors.form]}</p>}

          <button
            type="submit"
            className={`btn btn-primary ${styles.submit}`}
            disabled={sending || sent}
          >
            {sent ? copy.sent : copy.submit}
          </button>
          <span role="status" aria-live="polite" className="visually-hidden">
            {sending && copy.statusSending}
            {sent && copy.statusSent}
            {status === "error" && copy.statusError}
          </span>
        </form>
      </div>
    </section>
  );
}
