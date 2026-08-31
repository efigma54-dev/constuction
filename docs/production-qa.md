# Production QA Checklist

## Deployment
- [x] Vercel production deployment reports Ready.
- [x] `main` is connected to the production deployment.
- [ ] After every source change, verify the live deployment URL and deployed commit.

## Content integrity
- [x] Project visuals are labelled as architectural references.
- [x] Housing.com project photography is not used as a site-owned image.
- [x] Story visuals are explicitly labelled as real photography used for illustration only.
- [x] Stories are source syntheses rather than fabricated customer testimonials.
- [x] Unknown legal/contact values render as `Verification pending`.

## Accessibility and responsive QA
- [x] Mobile navigation has a visible keyboard/focus target.
- [x] Story language controls expose `aria-pressed` state.
- [x] Images have descriptive alternative text.
- [x] Project cards use stable responsive grid sizing.
- [ ] Repeat keyboard and narrow-viewport smoke tests after future UI changes.

## Performance / runtime
- [x] `sharp` and `unrs-resolver` install successfully.
- [x] `next build` completed successfully in the verified local pass.
- [x] Current Vercel runtime-error check shows no reported production runtime errors in the inspected window.
- [ ] Keep checking image payload sizes and avoid unnecessary remote media dependencies.

## Content publication rule
A real customer testimonial or project photograph is published only when its provenance and permission are documented. Public reviews may be summarized with source attribution, but must not be rewritten as first-party testimonials.
