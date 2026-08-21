"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";
type Errors = Partial<Record<"name" | "phone" | "email", string>>;

function normalizePhone(value: string) {
  return value.replace(/[^\d]/g, "");
}

function validate(name: string, phone: string, email: string): Errors {
  const errors: Errors = {};
  if (!name.trim()) errors.name = "Full name is required.";

  const digits = normalizePhone(phone);
  if (!digits || digits.length < 10 || digits.length > 15) {
    errors.phone = "Enter a valid phone number.";
  }

  if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  return errors;
}

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState<string | null>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [formTs] = useState(() => String(Date.now()));

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(null);
    setErrors({});

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const phone = String(form.get("phone") ?? "");
    const email = String(form.get("email") ?? "");
    const validationErrors = validate(name, phone, email);

    if (Object.keys(validationErrors).length) {
      setState("error");
      setErrors(validationErrors);
      setMessage("Please fix the highlighted fields.");
      return;
    }

    setState("submitting");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          projectInterest: String(form.get("projectInterest") ?? ""),
          preferredVisitDate: String(form.get("preferredVisitDate") ?? ""),
          message: String(form.get("message") ?? ""),
          companySite: String(form.get("company_site") ?? ""),
          formTs: Number(form.get("form_ts") ?? 0),
        }),
      });

      const json = (await response.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
      if (!response.ok || !json?.ok) {
        setState("error");
        setMessage(json?.error ?? "Unable to submit. Please try again.");
        return;
      }

      setState("success");
      setMessage("Request received. We’ll confirm your site visit shortly.");
      event.currentTarget.reset();
    } catch {
      setState("error");
      setMessage("Network error. Please try again.");
    }
  }

  const disabled = state === "submitting";

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4"
      aria-busy={disabled}
      onInputCapture={() => {
        if (state === "success" || state === "error") {
          setState("idle");
          setMessage(null);
        }
      }}
    >
      <input type="hidden" name="form_ts" value={formTs} readOnly />
      <div className="sr-only" aria-hidden="true">
        <label>
          Company site
          <input name="company_site" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" name="name" required disabled={disabled} maxLength={120} error={errors.name} autoComplete="name" />
        <Field label="Phone" name="phone" required inputMode="tel" placeholder="Your phone number" disabled={disabled} maxLength={40} error={errors.phone} autoComplete="tel" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Email" name="email" type="email" placeholder="you@example.com" disabled={disabled} maxLength={120} error={errors.email} autoComplete="email" />
        <Field label="Project interest" name="projectInterest" placeholder="Project or area of interest" disabled={disabled} maxLength={160} />
      </div>

      <Field label="Preferred site visit date" name="preferredVisitDate" type="date" disabled={disabled} />

      <div>
        <label className="block text-sm font-medium text-foreground" htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-2 w-full border border-border bg-background px-3 py-2 text-sm text-foreground outline-none ring-terracotta/40 focus-visible:ring-2"
          placeholder="Tell us what you are looking for"
          maxLength={2000}
          disabled={disabled}
        />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pt-2">
        <button
          type="submit"
          disabled={disabled}
          className="inline-flex h-12 items-center justify-center gap-2 bg-terracotta px-6 text-sm font-medium text-white transition-all hover:bg-terracotta-strong disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 cursor-pointer"
        >
          {disabled ? "Submitting request…" : "Book a site visit"}
          {!disabled ? (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          ) : null}
        </button>
        <div className="text-xs text-muted">Your inquiry is submitted through the website form for follow-up.</div>
      </div>

      {message ? (
        <div
          className={[
            "p-4 text-sm flex items-start gap-3 rounded-sm",
            state === "success"
              ? "bg-terracotta/10 text-foreground border border-terracotta/30"
              : "bg-surface text-foreground border border-terracotta",
          ].join(" ")}
          role={state === "success" ? "status" : "alert"}
        >
          {message}
        </div>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  disabled,
  maxLength,
  error,
  autoComplete,
  inputMode,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  maxLength?: number;
  error?: string;
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground" htmlFor={name}>
        {label}{required ? <span className="text-terracotta"> *</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        disabled={disabled}
        maxLength={maxLength}
        autoComplete={autoComplete}
        inputMode={inputMode}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className="mt-2 h-11 w-full border border-border bg-background px-3 text-sm text-foreground outline-none ring-terracotta/40 focus-visible:ring-2 disabled:opacity-60"
      />
      {error ? <p id={`${name}-error`} className="mt-1 text-xs text-terracotta">{error}</p> : null}
    </div>
  );
}
