# UseCasesPreview Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Redesign `UseCasesPreview` into a more premium editorial section while preserving SEO-friendly HTML structure and separating homepage visuals from OG-social image assumptions.

**Architecture:** Keep the existing data sources (`featuredDemo`, `useCases`, locale-driven labels) but rebuild the visual composition of `src/features/landing-v2/UseCasesPreview.astro`. Use Stitch as visual reference only, then integrate the chosen layout with real content, HTML-visible titles/microcopy, and non-redundant card visuals.

**Tech Stack:** Astro, TypeScript-in-Astro frontmatter, existing i18n files in `src/i18n/*.ts`, browser verification, `pnpm build`.

---

### Task 1: Capture current section structure and exact content inputs

**Files:**
- Read: `src/features/landing-v2/UseCasesPreview.astro`
- Read: `src/content/use-cases.ts`
- Read: `src/i18n/en.ts`
- Read: `src/i18n/fr.ts`
- Read: `src/i18n/zh.ts`
- Read: `src/i18n/zh-TW.ts`

**Step 1: Record current content contract**

Write down:
- featured block fields used
- card fields currently available
- locale labels currently derived inline
- routes generated per locale

**Step 2: Verify there is no hidden dependency on OG thumbnails**

Search for:
- `/og/use-case/`
- `ogSuffix`
- `useCasesPreview`

**Step 3: Save a short implementation note inside the plan repo notes if needed**

Expected output:
- A clear list of what content can be reused as-is
- A clear list of what card text must be surfaced in HTML

**Step 4: Commit**

```bash
git add docs/plans/2026-03-21-usecasespreview-redesign.md docs/plans/2026-03-21-usecasespreview-redesign-design.md
git commit -m "docs: add UseCasesPreview redesign design and plan"
```

---

### Task 2: Generate a Stitch concept for the section

**Files:**
- Reference: `/home/ubuntu/.openclaw/media/stitch-hero.html`
- Reference: `/home/ubuntu/.openclaw/media/stitch-whycasys.html`
- Output target (reference only, optional local export): `/home/ubuntu/.openclaw/media/stitch-usecasespreview.html`
- Output target (reference only, optional local export): `/home/ubuntu/.openclaw/media/stitch-usecasespreview.png`

**Step 1: Write the exact Stitch brief**

The prompt should explicitly ask for:
- premium/editorial landing section
- dominant featured proof block
- quieter secondary cards
- dark-mode-first composition
- black / amber / pearly white / subtle mauve palette
- support for HTML title + short description per card
- no invented business copy
- no generic blue/green SaaS look

**Step 2: Generate the concept**

Run the existing Stitch workflow/tooling already used for hero and WhyCasys.

**Step 3: Export reference artifacts**

Save HTML/screenshot references locally for comparison.

**Step 4: Review the concept against constraints**

Reject any concept that:
- hides content behind decorative image-only cards
- rebrands Casys visually
- removes the featured proof hierarchy

**Step 5: Commit notes only if codebase files changed**

---

### Task 3: Decide final composition before coding

**Files:**
- Modify later: `src/features/landing-v2/UseCasesPreview.astro`

**Step 1: Choose one layout direction from Stitch**

Required checklist:
- featured block still strongest visual weight
- secondary cards have room for real HTML text
- cards do not depend on text-heavy OG thumbnails
- mobile collapse path is obvious

**Step 2: Freeze the content strategy**

Use this rule:
- featured block = video + eyebrow + title + tagline + description + bullets + note
- secondary cards = HTML title + short supporting line + visual support
- “All case studies” remains crawlable and visible

**Step 3: Write a short final layout note**

Document:
- chosen hierarchy
- card content density
- whether homepage visuals are image, abstract background, or simplified thumbnail treatment

---

### Task 4: Rebuild `UseCasesPreview.astro`

**Files:**
- Modify: `src/features/landing-v2/UseCasesPreview.astro`

**Step 1: Preserve frontmatter data sources**

Do not break:
- `useTranslations(locale).useCases`
- `useTranslations(locale).featuredDemo`
- `useCases`
- `localePath`
- `ogSuffix` unless intentionally removed

**Step 2: Replace the current section markup with the new structure**

Required structure:
- section intro
- editorial featured proof block
- redesigned secondary cards block
- final CTA row / all cases link

**Step 3: Ensure each secondary card exposes meaningful HTML text**

Minimum per card:
- visible title in HTML
- short supporting line or excerpt in HTML
- crawlable anchor link

**Step 4: Prevent text duplication ugliness**

If using image assets in cards:
- avoid text-heavy OG assets as the primary visual treatment
- prefer quieter crop, abstract surface, or reduced-importance image placement

**Step 5: Rebuild styles in the same file unless extraction is clearly needed**

Match existing landing-v2 approach:
- premium editorial composition
- asymmetry where useful
- calm but rich dark mode
- consistent hover states and radii

**Step 6: Commit**

```bash
git add src/features/landing-v2/UseCasesPreview.astro
git commit -m "redesign: rebuild UseCasesPreview with editorial featured layout"
```

---

### Task 5: Validate all locales and text behavior

**Files:**
- Verify: `src/features/landing-v2/UseCasesPreview.astro`
- Verify if needed: `src/i18n/en.ts`
- Verify if needed: `src/i18n/fr.ts`
- Verify if needed: `src/i18n/zh.ts`
- Verify if needed: `src/i18n/zh-TW.ts`

**Step 1: Confirm locale labels still render correctly**

Check:
- `Read case study`
- `Lire le cas`
- `阅读案例`
- `閱讀案例`
- all cases label per locale

**Step 2: If inline labels are now too limited, move them into i18n**

Only if necessary. Do not over-refactor.

**Step 3: Verify links for all locale paths**

Expected patterns:
- `/use-cases/...`
- `/fr/use-cases/...`
- `/zh/use-cases/...`
- `/zh-TW/use-cases/...`

**Step 4: Commit if i18n files changed**

```bash
git add src/features/landing-v2/UseCasesPreview.astro src/i18n/en.ts src/i18n/fr.ts src/i18n/zh.ts src/i18n/zh-TW.ts
git commit -m "refine: align UseCasesPreview redesign across locales"
```

---

### Task 6: Build and verify visually

**Files:**
- Verify build output only

**Step 1: Run full build**

Run:
```bash
pnpm build
```

Expected:
- build completes successfully
- no Astro syntax regressions
- no stray CSS/text leaked into DOM

**Step 2: Verify git state after build**

Run:
```bash
git status --short
```

Expected:
- no unintended file changes

**Step 3: Open the homepage and inspect the section**

Check manually with browser tooling:
- section order remains `Hero -> WhyCasys -> UseCasesPreview -> FAQ -> Contact`
- featured proof dominates visually
- cards remain readable and non-redundant
- dark mode palette still coherent
- mobile/tablet behavior not obviously broken

**Step 4: Verify SEO sanity**

Confirm in rendered DOM:
- card titles are actual HTML text
- links are actual anchors
- section still contains meaningful copy above the cards

**Step 5: Commit verification-safe fixups if needed**

---

### Task 7: Push and confirm branch cleanliness

**Files:**
- No code changes required if already clean

**Step 1: Push latest commits**

Run:
```bash
git push origin main
```

**Step 2: Confirm local == remote**

Run:
```bash
git fetch origin main --quiet
echo "LOCAL  $(git rev-parse HEAD)"
echo "REMOTE $(git rev-parse origin/main)"
```

Expected:
- hashes identical

**Step 3: Confirm working tree clean**

Run:
```bash
git status --short
```

Expected:
- no output

**Step 4: Final commit message policy**

Prefer one of:
- `redesign: rebuild UseCasesPreview section with premium editorial layout`
- `refine: improve UseCasesPreview hierarchy and card readability`

---

Plan complete and saved to `docs/plans/2026-03-21-usecasespreview-redesign.md`. Two execution options:

**1. Subagent-Driven (this session)** - I dispatch fresh subagent per task, review between tasks, fast iteration

**2. Parallel Session (separate)** - Open new session with executing-plans, batch execution with checkpoints

**Which approach?**
