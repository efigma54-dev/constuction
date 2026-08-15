"use client";

import { useMemo, useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

type Errors = Partial<Record<"name" | "phone" | "email", string>>;

function isValidEmail(v: string) {
  const s = v.trim();
  if (!s) return true;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

function normalizePhone(v: string) {
  return v.replace(/[^\d]/g, "");
}

function validate(payload: { name: string; phone: string; email: string }): Errors {
  const errors: Errors = {};

  if (!payload.name.trim()) errors.name = "Full name is required.";

  const digits = normalizePhone(payload.phone);
  if (!digits || digits.length < 10 || digits.length > 15) {
    errors.phone = "Enter a valid phone number.";
  }

  if (!isValidEmail(payload.email)) {
    errors.email = "Enter a valid email address.";
  }

  return errors;
}

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState<string | null>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [formTs] = useState(() => String(Date.now()));

  const disabled = useMemo(() => state === "submitting", [state]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage(null);
    setErrors({});

    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") ?? ""),
      phone: String(form.get("phone") ?? ""),
      email: String(form.get("email") ?? ""),
      projectInterest: String(form.get("projectInterest") ?? ""),
      preferredVisitDate: String(form.get("preferredVisitDate") ?? ""),
      message: String(form.get("message") ?? ""),
      companySite: String(form.get("company_site") ?? ""),
      formTs: Number(form.get("form_ts") ?? 0),
    };

    const validationErrors = validate(payload);
    if (Object.keys(validationErrors).length > 0) {
      setState("error");
      setErrors(validationErrors);
      setMessage("Please fix the highlighted fields.");
      return;
    }

    setState("submitting");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = (await res.json().catch(() => null)) as
        | { ok: boolean; error?: string }
        | null;

      if (!res.ok || !json?.ok) {
        setState("error");
        setMessage(json?.error ?? "Unable to submit. Please try again.");
        return;
      }

      setState("success");
      setMessage("Request received. We’ll confirm your site visit shortly.");
      e.currentTarget.reset();
    } catch {
      setState("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4"
      aria-busy={state === "submitting"}
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
        <Field
          label="Full name"
          name="name"
          required
          disabled={disabled}
          maxLength={120}
          error={errors.name}
          autoComplete="name"
          onChange={() => setErrors((prev) => ({ ...prev, name: undefined }))}
        />
        <Field
          label="Phone"
          name="phone"
          required
          inputMode="tel"
          placeholder="Your phone number"
          disabled={disabled}
          maxLength={40}
          error={errors.phone}
          autoComplete="tel"
          onChange={() => setErrors((prev) => ({ ...prev, phone: undefined }))}
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Email"
          name="email"
          type="email"
          placeholder="you@example.com"
          disabled={disabled}
          maxLength={120}
          error={errors.email}
          autoComplete="email"
          onChange={() => setErrors((prev) => ({ ...prev, email: undefined }))}
        />
        <Field
          label="Project interest"
          name="projectInterest"
          placeholder="Project or area of interest"
          disabled={disabled}
          maxLength={160}
        />
      </div>
      <Field
        label="Preferred site visit date"
        name="preferredVisitDate"
        type="date"
        disabled={disabled}
      />
      <div>
        <label
          className="block text-sm font-medium text-foreground"
          htmlFor="message"
        >
          Message
        </label>
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
          {state === "submitting" ? (
            <>
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Submitting request…
            </>
          ) : (
            <>
              Book a site visit
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </>
          )}
        </button>
        <div className="text-xs text-muted">
          Submissions are received directly by our team.
        </div>
      </div>

      {message ? (
        <div
          className={[
            "p-4 text-sm flex items-start gap-3 rounded-sm transition-all",
            state === "success"
              ? "bg-terracotta/10 text-foreground border border-terracotta/30"
              : "bg-surface text-foreground border border-terracotta",
          ].join(" ")}
          role={state === "success" ? "status" : "alert"}
        >
          {state === "success" ? (
            <svg className="w-5 h-5 text-terracotta shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-terracotta shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
          )}
          <div>{message}</div>
        </div>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  inputMode,
  disabled,
  maxLength,
  error,
  autoComplete,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  disabled?: boolean;
  maxLength?: number;
  error?: string;
  autoComplete?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}) {
  const id = `contact-${name}`;
  const describedBy = error ? `${id}-error` : undefined;
  return (
    <div>
      <label className="block text-sm font-medium text-foreground" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        inputMode={inputMode}
        disabled={disabled}
        maxLength={maxLength}
        autoComplete={autoComplete}
        onChange={onChange}
        aria-invalid={!!error}
        aria-describedby={describedBy}
        className={[
          "mt-2 w-full border bg-background px-3 py-2 text-sm text-foreground outline-none ring-terracotta/40 focus-visible:ring-2",
          error ? "border-terracotta" : "border-border",
        ].join(" ")}
        placeholder={placeholder}
      />
      {error ? (
        <div id={describedBy} className="mt-2 text-sm text-terracotta">
          {error}
        </div>
      ) : null}
    </div>
  );
}
