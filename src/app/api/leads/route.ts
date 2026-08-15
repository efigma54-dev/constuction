import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

type LeadPayload = {
  name: string;
  phone: string;
  email?: string;
  projectInterest?: string;
  preferredVisitDate?: string;
  message?: string;
  website?: string;
  companySite?: string;
  formTs?: number;
};

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

function clampText(v: string, max: number) {
  const s = v.trim();
  return s.length > max ? s.slice(0, max) : s;
}

function isValidEmail(v: string) {
  const s = v.trim();
  if (!s) return true;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

function normalizePhone(v: string) {
  return v.replace(/[^\d]/g, "");
}

type RateEntry = { count: number; resetAt: number };
const rate = new Map<string, RateEntry>();
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 10;

function getClientIp(req: Request) {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0]?.trim() || "unknown";
  const real = req.headers.get("x-real-ip");
  if (real) return real.trim();
  return "unknown";
}

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as LeadPayload | null;
  if (!body) {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body." },
      { status: 400 },
    );
  }

  if (isNonEmptyString(body.companySite) || isNonEmptyString(body.website)) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const formTs =
    typeof body.formTs === "number" ? body.formTs : Number(body.formTs ?? 0);
  if (Number.isFinite(formTs) && formTs > 0) {
    const age = Date.now() - formTs;
    if (age < 2500) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }
  }

  if (!isNonEmptyString(body.name) || !isNonEmptyString(body.phone)) {
    return NextResponse.json(
      { ok: false, error: "Name and phone are required." },
      { status: 400 },
    );
  }

  const phoneDigits = normalizePhone(body.phone);
  if (phoneDigits.length < 10 || phoneDigits.length > 15) {
    return NextResponse.json(
      { ok: false, error: "Phone format is invalid." },
      { status: 400 },
    );
  }

  if (!isValidEmail(body.email ?? "")) {
    return NextResponse.json(
      { ok: false, error: "Email format is invalid." },
      { status: 400 },
    );
  }

  const ip = getClientIp(req);
  const now = Date.now();
  const existing = rate.get(ip);
  if (!existing || now >= existing.resetAt) {
    rate.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
  } else if (existing.count >= RATE_MAX) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again later." },
      { status: 429 },
    );
  } else {
    existing.count += 1;
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceKey) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Server not configured. Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.",
      },
      { status: 500 },
    );
  }

  const supabase = createClient(supabaseUrl, serviceKey, {
    auth: { persistSession: false },
  });

  const { error } = await supabase.from("leads").insert({
    name: clampText(body.name, 120),
    phone: clampText(body.phone, 40),
    email: body.email ? clampText(body.email, 120) : null,
    project_interest: body.projectInterest ? clampText(body.projectInterest, 160) : null,
    preferred_visit_date: body.preferredVisitDate || null,
    message: body.message ? clampText(body.message, 2000) : null,
    source: "website",
  });

  if (error) {
    return NextResponse.json(
      { ok: false, error: "Unable to submit right now. Please try again later." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
