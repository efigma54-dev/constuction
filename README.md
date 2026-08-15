# Aakar Developers — Company Website

Official marketing and transparency website for **Aakar Developers**, a residential real-estate developer based in Pune, India.

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — Five Pillars, featured project, stories teaser |
| `/projects` | Active project listings |
| `/projects/[slug]` | Project detail with specs, floor plans, milestone timeline |
| `/construction-progress` | Live construction milestone tracker |
| `/transparency` | RERA registration, approvals, and document library |
| `/stories` | Buyer testimonials and handover stories |
| `/about` | Founder, team, and company credentials |
| `/contact` | Inquiry form, WhatsApp, phone, and registered office |

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) (App Router, TypeScript)
- **Styling**: Vanilla CSS with custom design tokens
- **Database / Forms**: [Supabase](https://supabase.com) (contact form submissions)
- **Deployment**: [Vercel](https://vercel.com)
- **Images**: Next.js `<Image>` with AI-generated reference visuals

## Running Locally

```bash
npm install
cp .env.local.example .env.local   # then fill in NEXT_PUBLIC_SITE_URL
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Yes | Canonical site URL (e.g. `https://aakar.in`) |
| `NEXT_PUBLIC_SUPABASE_URL` | If forms enabled | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | If forms enabled | Supabase public anon key |

Copy `.env.local.example` to `.env.local` and fill in values — **never commit `.env.local`**.

## Build & Lint

```bash
npm run lint    # ESLint
npm run build   # Production build check
```

## License

Private — all rights reserved. © Aakar Developers.
