# Evidence: Build and lint

Date: 2026-08-03 (Asia/Calcutta)

## next build

- Command: `npm run build`
- Exit code: `0`
- Output:

```text
> aakar-web@0.1.0 build
> next build

▲ Next.js 16.2.12 (Turbopack)

  Creating an optimized production build ...
✓ Compiled successfully
```

## eslint

- Command: `npm run lint`
- Exit code: `0`
- Output:

```text
warning: src/components/InteractiveFloorPlan.tsx uses <img> (next/no-img-element)
```

## next dev

- Attempt 1: `npm run dev -- --port 3000` → `EADDRINUSE`
- Attempt 2: `npm run dev -- --port 3001` → `EADDRINUSE`
- Attempt 3: `npm run dev -- --port 3100` → started successfully

```text
> aakar-web@0.1.0 dev
> next dev --port 3100

▲ Next.js 16.2.12 (Turbopack)
- Local:         http://localhost:3100
- Network:       http://192.168.1.10:3100
✓ Ready in 939ms
```
