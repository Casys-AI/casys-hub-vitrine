# Casys Funnel Positioning Refactor Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Refactor the Casys home and e-invoice use case copy so the site stays MCP-first while making e-invoice a live product wedge, ERPNext a stronger technical proof wedge, and MCP Platform the shared horizontal layer.

**Architecture:** Keep the existing landing-v2 section order, but adjust copy hierarchy and CTA routing. Update the hero subtitle and CTA text, refactor the use case cards/featured content around e-invoice and ERPNext, then update the e-invoice use case page so it becomes the narrative bridge to `einvoice-platform.fr`.

**Tech Stack:** Astro 5, TypeScript, landing-v2 Astro components, i18n files (`src/i18n/*.ts`), existing use case pages/components.

---

### Task 1: Update hero messaging

**Files:**
- Modify: `src/i18n/en.ts`
- Modify: `src/i18n/fr.ts`
- Modify: `src/i18n/zh.ts`
- Modify: `src/i18n/zh-TW.ts`
- Verify: `src/features/landing-v2/Hero.astro`

**Step 1: Write the failing test**

Create or update a content assertion test that checks:
- hero title remains `MCP apps for AI agents` (or locale equivalent)
- subtitle changes to the new durable horizontal wording
- primary CTA remains work/use-case oriented

**Step 2: Run test to verify it fails**

Run the relevant landing/i18n test command.
Expected: current subtitle/content does not match the new copy.

**Step 3: Write minimal implementation**

Update hero i18n values with:
- subtitle aligned to `From local MCP servers to custom integrations for real business systems.`
- CTA wording only if needed to match final decision
- keep MCP-first headline intact

**Step 4: Run test to verify it passes**

Run the same test command.
Expected: PASS.

**Step 5: Commit**

```bash
git add src/i18n/en.ts src/i18n/fr.ts src/i18n/zh.ts src/i18n/zh-TW.ts
git commit -m "feat: refine hero positioning copy"
```

### Task 2: Refactor e-invoice featured copy on home

**Files:**
- Modify: `src/i18n/en.ts`
- Modify: `src/i18n/fr.ts`
- Modify: `src/i18n/zh.ts`
- Modify: `src/i18n/zh-TW.ts`
- Verify: `src/features/landing-v2/UseCasesPreview.astro`

**Step 1: Write the failing test**

Add a content assertion that checks featured e-invoice copy now mentions:
- live platform
- test/2 minutes angle
- IAM / real product experience
- MCP stack underneath

**Step 2: Run test to verify it fails**

Run the content test.
Expected: FAIL because current featured copy is still package-first.

**Step 3: Write minimal implementation**

Update `featuredDemo` copy in i18n files so e-invoice becomes:
- platform-first in wording
- still grounded in MCP stack credibility
- CTA remains `View use case` on home

**Step 4: Run test to verify it passes**

Run the same test command.
Expected: PASS.

**Step 5: Commit**

```bash
git add src/i18n/en.ts src/i18n/fr.ts src/i18n/zh.ts src/i18n/zh-TW.ts
git commit -m "feat: reposition einvoice as live product wedge"
```

### Task 3: Strengthen ERPNext card as technical proof wedge

**Files:**
- Modify: `src/content/use-cases/*` or the exact data source for use case card metadata
- Modify: any related locale/content file feeding `UseCasesPreview.astro`
- Verify: `src/features/landing-v2/UseCasesPreview.astro`

**Step 1: Write the failing test**

Add a content assertion that ERPNext card copy reflects:
- technical team audience
- observable workflows / interactive demos
- production integration angle

**Step 2: Run test to verify it fails**

Run the content test.
Expected: FAIL because ERPNext copy is not yet aligned.

**Step 3: Write minimal implementation**

Update ERPNext metadata/copy source so the card reads as a technical proof wedge, not a generic secondary use case.

**Step 4: Run test to verify it passes**

Run the same test command.
Expected: PASS.

**Step 5: Commit**

```bash
git add src/content/use-cases src/features/landing-v2/UseCasesPreview.astro
git commit -m "feat: sharpen erpnext technical proof copy"
```

### Task 4: Reframe MCP Platform block as shared horizontal layer

**Files:**
- Modify: `src/features/landing-v2/PlatformPreview.astro`
- Modify: `src/i18n/en.ts` if needed
- Modify: `src/i18n/fr.ts` if needed
- Modify: `src/i18n/zh.ts` if needed
- Modify: `src/i18n/zh-TW.ts` if needed

**Step 1: Write the failing test**

Add a content assertion that MCP Platform block explicitly presents itself as the shared stack behind integrations, not the primary conversion surface.

**Step 2: Run test to verify it fails**

Run the content test.
Expected: FAIL because wording is still more generic product infra copy.

**Step 3: Write minimal implementation**

Adjust the card title/tagline/body so it reads as:
- infrastructure layer
- shared stack behind ERPNext and e-invoice
- horizontal abstraction after proof, not before proof

**Step 4: Run test to verify it passes**

Run the same test command.
Expected: PASS.

**Step 5: Commit**

```bash
git add src/features/landing-v2/PlatformPreview.astro src/i18n/en.ts src/i18n/fr.ts src/i18n/zh.ts src/i18n/zh-TW.ts
git commit -m "feat: reframe platform preview as shared stack"
```

### Task 5: Refactor the e-invoice use case hero and CTA routing

**Files:**
- Modify: `src/pages/use-cases/mcp-einvoice.astro`
- Modify: `src/pages/fr/use-cases/mcp-einvoice.astro`
- Modify: `src/pages/zh/use-cases/mcp-einvoice.astro`
- Modify: `src/pages/zh-TW/use-cases/mcp-einvoice.astro`
- Modify: supporting feature component if the page is composed from shared blocks

**Step 1: Write the failing test**

Add a page-level content assertion that the e-invoice use case page includes:
- platform/live-product framing near the top
- primary CTA to `einvoice-platform.fr`
- secondary CTA to GitHub or code/proof path

**Step 2: Run test to verify it fails**

Run the use case page test.
Expected: FAIL because page still leads with package-first language.

**Step 3: Write minimal implementation**

Update the page hero copy and CTAs so it becomes the narrative bridge:
- `Test the platform` as primary CTA
- GitHub/code as secondary CTA
- short intro that ties live platform to open-source MCP backend

**Step 4: Run test to verify it passes**

Run the same page test.
Expected: PASS.

**Step 5: Commit**

```bash
git add src/pages/use-cases/mcp-einvoice.astro src/pages/fr/use-cases/mcp-einvoice.astro src/pages/zh/use-cases/mcp-einvoice.astro src/pages/zh-TW/use-cases/mcp-einvoice.astro
git commit -m "feat: connect einvoice use case to live platform funnel"
```

### Task 6: Verify final section hierarchy and interactions

**Files:**
- Verify: `src/pages/index.astro`
- Verify: `src/features/landing-v2/Hero.astro`
- Verify: `src/features/landing-v2/UseCasesPreview.astro`
- Verify: `src/features/landing-v2/PlatformPreview.astro`
- Verify: use case page(s)

**Step 1: Write a smoke test checklist**

Cover:
- hero remains MCP-first
- e-invoice is more accessible/product-facing than ERPNext
- ERPNext remains stronger technical proof than generic secondary content
- MCP Platform appears as shared stack after wedges
- CTA destinations are coherent

**Step 2: Run local checks**

Run the project test/lint/build commands, then manually verify the home and e-invoice page in browser if available.
Expected: all checks pass, copy hierarchy feels coherent.

**Step 3: Fix any copy/spacing regressions**

Apply minimal adjustments only if required by build or visual review.

**Step 4: Re-run checks**

Run full validation again.
Expected: PASS.

**Step 5: Commit**

```bash
git add src/pages/index.astro src/features/landing-v2/Hero.astro src/features/landing-v2/UseCasesPreview.astro src/features/landing-v2/PlatformPreview.astro
git commit -m "chore: validate casys funnel copy hierarchy"
```

### Task 7: Document and hand off

**Files:**
- Modify: `docs/plans/2026-04-17-casys-funnel-positioning-design.md`
- Modify: `docs/plans/2026-04-17-casys-funnel-positioning-plan.md`

**Step 1: Update docs if implementation diverged**

Record any deviations from the original design.

**Step 2: Run final git status check**

```bash
git status --short
```

Expected: clean working tree.

**Step 3: Commit docs updates if needed**

```bash
git add docs/plans/2026-04-17-casys-funnel-positioning-design.md docs/plans/2026-04-17-casys-funnel-positioning-plan.md
git commit -m "docs: finalize casys funnel positioning plan"
```
