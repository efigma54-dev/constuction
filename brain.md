# Aakar Developers Website · Project Memory

_Last verified: 31 August 2026_

## Current state

- Repository: `efigma54-dev/constuction`
- Branch: `main`
- Framework: Next.js 16.2.12, React 19.2.4, TypeScript 5
- Production deployment: Vercel project `construction`
- Production alias currently used in QA: `https://constuction-eosin.vercel.app`
- Latest verified production deployment is Ready.
- Local build previously completed successfully with `next build` after rebuilding `sharp` and `unrs-resolver`.
- npm lifecycle scripts are enabled with `ignore-scripts=false`; `sharp` and `unrs-resolver` are installed and rebuilt successfully.

## Content / provenance rules

- Never present an illustrative visual as a real project photograph or construction evidence.
- Third-party project imagery must not be hotlinked as Aakar-owned media.
- Story imagery is explicitly labelled as real photography used for illustration only.
- Stories are public-source editorial summaries, not fabricated customer testimonials.
- Named customer stories require consent, usable photography, and supporting project records.
- Company and project identifiers must remain source-backed. Unknown values use `Verification pending` rather than invented values.

## Current published content

- Projects page contains four published project records: Balaji Empire, Balaji Square, Dangat Corner, and Balaji Residency.
- Project-card visuals are local architectural reference assets and are labelled as such.
- Stories page contains seven editorial story entries, each available in English, Marathi, Hindi, Gujarati, Bengali, Tamil, and Kannada.
- Story cards use real Unsplash photography as illustrative visuals and disclose that status on-card.
- Balaji Empire has a public RERA record referenced in the site data as `P52100001661` and a declared completion date of 31 December 2018.
- CIN and unverified contact / office fields use `Verification pending` where primary evidence is not present.

## Hero / interaction requirements

- Keep the hero video. Do not replace or remove it during visual cleanup.
- Preserve responsive behavior on narrow viewports.
- Avoid scroll-linked animation implementations that can desynchronise video/background and text layers.
- Respect reduced-motion preferences without hydration mismatches.

## QA gates

1. `npm run lint` must pass.
2. `npm run build` must pass.
3. All primary routes must return HTTP 200 in production.
4. No production page may reference Housing.com CDN / housing-images / housingcdn media as an Aakar-owned image.
5. Metadata images must resolve to local site assets.
6. Story language selector must expose all seven languages and preserve accessible pressed state.
7. Mobile navigation and project grids must not create horizontal overflow.
8. No blank legal identifier fields may render.
9. No invented testimonials, customer names, quotations, or project evidence.
10. After deployment, re-fetch production pages and verify the deployed commit rather than relying only on a local report.

## Remaining work policy

When a new issue is found, fix the source implementation rather than layering a brittle selector-based CSS patch. Keep `brain.md` synchronized with verified architecture, content, media provenance, deployment status, and QA findings.
