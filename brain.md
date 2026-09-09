# Aakar Developers Website · Project Memory

_Last verified: 9 September 2026_

## Current state

- Repository: `efigma54-dev/constuction`
- Branch: `main`
- Framework: Next.js 16.2.12, React 19.2.4, TypeScript 5
- Production deployment: Vercel project `construction`
- Production alias currently used in QA: `https://constuction-eosin.vercel.app`
- GitHub `main` is connected to Vercel production.
- A new production deployment is triggered by the latest hero-media fix; final live verification remains pending until that deployment is Ready.
- Local build previously completed successfully with `next build` after rebuilding `sharp` and `unrs-resolver`.
- npm lifecycle scripts are enabled with `ignore-scripts=false`; `sharp` and `unrs-resolver` are installed and rebuilt successfully.
- `package.json` uses the npm install-script allowlist for `sharp` and `unrs-resolver`.

## Content / provenance rules

- Never present an illustrative visual as a real project photograph or construction evidence.
- Third-party project imagery must not be hotlinked as Aakar-owned media.
- Story imagery is explicitly labelled as real photography used for illustration only.
- Stories are public-source editorial summaries, not fabricated customer testimonials.
- Named customer stories require consent, usable photography, and supporting project records.
- Company and project identifiers must remain source-backed. Unknown values use `Verification pending` rather than invented values.
- A RERA proposed completion date must not be rendered as an independently verified actual completion date.

## Current published content

- Projects page contains four published project records: Balaji Empire, Balaji Square, Dangat Corner, and Balaji Residency.
- Project-card visuals are local architectural reference assets and are labelled as such.
- Stories page contains seven editorial story entries, each available in English, Marathi, Hindi, Gujarati, Bengali, Tamil, and Kannada.
- Story cards use real photography as illustrative visuals and disclose that status on-card.
- Balaji Empire has a public RERA record referenced in the site data as `P52100001661`.
- Balaji Empire's RERA record lists 31 December 2018 as the proposed completion date; the site now distinguishes that from later public records describing the project as completed / ready to move.
- CIN and unverified contact / office fields use `Verification pending` where primary evidence is not present.

## Hero / interaction requirements

- Keep the hero video. Do not replace or remove it during visual cleanup.
- The hero previously rendered a poster/background layer underneath the video at the same time. This has been removed: motion mode now uses one video layer with its poster, while reduced-motion mode uses one local `next/image` layer. This removes the duplicate media compositing that could produce visible ghosting/desynchronization.
- The hero no longer uses scroll-linked media animation. Background/video and content layers remain independently stable while the hero section uses normal sticky positioning.
- Reduced-motion detection uses `useSyncExternalStore` with a server snapshot to avoid hydration mismatches.
- Preserve responsive behavior on narrow viewports.

## Metadata hardening

- The previous homepage OG/Twitter path was visibly truncated and returned 404 in production.
- File-based `opengraph-image.tsx` and `twitter-image.tsx` generate local 1200×630 PNG previews.
- Root, homepage, and About-page social metadata now points to `/opengraph-image` instead of the broken long generated-image filename.
- The old selector-based `production-overrides.css` patch layer was removed; homepage behavior now comes from the source component itself.

## QA gates

1. `npm run lint` must pass.
2. `npm run build` must pass.
3. All primary routes must return HTTP 200 in production.
4. No production page may reference Housing.com CDN / housing-images / housingcdn media as an Aakar-owned image.
5. Metadata images must resolve without external CDN dependencies.
6. Story language selector must expose all seven languages and preserve accessible pressed state.
7. Mobile navigation and project grids must not create horizontal overflow.
8. No blank legal identifier fields may render.
9. No invented testimonials, customer names, quotations, or project evidence.
10. RERA proposed dates must not be presented as actual verified completion dates.
11. Hero media must not render duplicate poster/background and video layers simultaneously.
12. After deployment, re-fetch production pages and verify the deployed commit rather than relying only on a local report.

## Remaining work policy

When a new issue is found, fix the source implementation rather than layering a brittle selector-based CSS patch. Keep `brain.md` synchronized with verified architecture, content, media provenance, performance findings, and deployment status.
