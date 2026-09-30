"use client";

import { useState, type FormEvent } from "react";
import { contact } from "@/content/portfolio";
import styles from "./Contact.module.css";

type Status = "idle" | "sending" | "sent" | "error";
type FieldErrors = Partial<Record<"name" | "email" | "message" | "form", string>>;

export default function Contact() {
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
      setErrors(data?.errors ?? { form: "Could not send your message." });
      setStatus("error");
    } catch {
      setErrors({ form: "Could not send your message. Please try again." });
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
          Colophon
        </span>
        <span className={styles.colophonRule} aria-hidden="true" />
      </div>

      <div className={styles.grid}>
        <div>
          <h2 id="contact-heading" className={styles.heading}>{contact.heading}</h2>
          <p className={styles.intro}>{contact.intro}</p>
          <div className={styles.links}>
            {contact.links.map((link) => (
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
            Name
            <input
              className={`input ${styles.input}`}
              type="text"
              name="name"
              placeholder="Your name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "contact-name-error" : undefined}
            />
            {errors.name && (
              <span id="contact-name-error" className={styles.fieldError}>
                {errors.name}
              </span>
            )}
          </label>

          <label className={`field ${styles.field}`}>
            Email
            <input
              className={`input ${styles.input}`}
              type="email"
              name="email"
              placeholder="you@company.nl"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "contact-email-error" : undefined}
            />
            {errors.email && (
              <span id="contact-email-error" className={styles.fieldError}>
                {errors.email}
              </span>
            )}
          </label>

          <label className={`field ${styles.field}`}>
            Message
            <textarea
              className={`input ${styles.input}`}
              name="message"
              rows={4}
              placeholder="What would you like to build?"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "contact-message-error" : undefined}
              style={{ resize: "vertical" }}
            />
            {errors.message && (
              <span id="contact-message-error" className={styles.fieldError}>
                {errors.message}
              </span>
            )}
          </label>

          {errors.form && <p className={styles.formError}>{errors.form}</p>}

          <button
            type="submit"
            className={`btn btn-primary ${styles.submit}`}
            disabled={sending || sent}
          >
            {sent ? "Thanks — I'll be in touch" : "Send message"}
          </button>
          <span role="status" aria-live="polite" className="visually-hidden">
            {sending && "Sending your message…"}
            {sent && "Thanks — I'll be in touch."}
            {status === "error" && "Something went wrong. Please check the form."}
          </span>
        </form>
      </div>
    </section>
  );
}
