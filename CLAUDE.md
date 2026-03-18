# CLAUDE.md

## Build & Dev
- `bun run build` — full build (Astro + Vercel adapter)
- `bun run dev` — dev server on :4321
- Vercel deploy uses pnpm (not bun) — node_modules paths differ (.pnpm vs .bun)
- Build generates static OG images via Satori — changes to OG templates require full build, not visible in dev server

## Architecture
- Astro 5 + Vercel adapter, no Tailwind — pure CSS with MD3 tokens + Astro scoped styles
- i18n: 4 locales (en, fr, zh, zh-TW) — `en.ts` is the type source (`Translations = typeof en`)
- Dark mode: warm orange palette (#FFB86F, #D4A574) via `data-theme="dark"` attribute
- Subsite pages (engine/*) use SubsiteLayout/SubsiteHeader + Footer with `variant="subsite"`
- Shared utilities: `src/lib/url-utils.ts` (isExternalUrl), `src/lib/locale-utils.ts` (getOgLocale)

## OG Image Generation
- Satori + resvg-wasm in `src/pages/og/_shared.ts`
- Font: Inter TTF from `public/fonts/Inter-{Regular,Bold}.ttf` — supports Latin Extended accents
- KaTeX fonts do NOT support accented characters — never use them for localized text
- Use case OG images are locale-aware: `[id].png` (en) + `[id]-fr.png`, `[id]-zh.png`, `[id]-zh-TW.png`
- Logo embedded as SVG data URI (read from `public/icons/logo.svg` at build time)

## Content Rules
- No BS: every claim must be verifiable in 30 seconds (GitHub repo, npm package, live demo)
- No vague terms: "production-ready", "gaining traction", "cross-pollination" are banned
- Hero proof bar items must link to real anchors/URLs and reflect actual company positioning

## Conventions
- Footer: `variant="subsite"` for engine pages (absolute URLs + target="_blank" + #5e5962 colors)
- Scroll reveal: `.reveal` class added by LandingLayout IntersectionObserver — don't add to hero (above fold)
- All `<nav>` elements should have `aria-label`
- Mobile menus: use `hidden`/`inert`/`aria-hidden` pattern with focus management (see Header.astro)
