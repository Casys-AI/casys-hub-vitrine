# Landing Page Design Overhaul

**Date**: 2026-03-10
**Status**: IN PROGRESS
**Branch**: `dev`
**Prerequisite commit**: `bb6891c6` (structural cleanup — 10→8 sections, Interlude added)

## Problem Statement

The landing page suffers from **visual monotony**: 5 out of 8 sections use the same card-in-grid pattern (border-radius 16px, surface-container-lowest background, outline-variant border, icon + title + description). On mobile everything collapses to a single column of identical-looking cards — a wall of cards.

The Interlude component (commit bb6891c6) breaks the rhythm once, but one pause in 8 sections isn't enough. Material Expressive offers typography-driven layouts, timelines, feature rows, and full-bleed visuals — none of which are currently used.

## Current Section Visual Patterns

| # | Section | Pattern | Cards? | Notes |
|---|---------|---------|--------|-------|
| 1 | Hero | Centered display type + CTA + proof bar | No | Good ✅ |
| 2 | FeaturedDemo | 2-col grid: video + copy card | Partial | Video is distinct, copy side has card container |
| 3 | WhatWeDo | **Bento 2-col: 3 pillar cards** | **YES** | Same card style as WhyCasys |
| 4 | Interlude | Pull quote + stats ribbon | No | Good ✅ (just added) |
| 5 | UseCasesPreview | **3 cards with thumbnail images** | **YES** | Card containers clip the diagrams |
| 6 | WhyCasys | **Bento 3-col: 5 diff cards** | **YES** | Heaviest card section |
| 7 | Blog | **3 article cards** | **YES** | Standard blog listing |
| 8 | FAQ | Accordion details/summary | No | Good ✅ |
| 9 | Contact | Form with trust badges | No | Good ✅ |

**5 card sections** (2, 3, 5, 6, 7) — this is the problem.

## Target: 2 card sections max

After redesign, only Blog and FeaturedDemo should use card containers. Everything else gets a distinct visual treatment.

## Redesign Plan

### Task 1: WhatWeDo → Feature Rows (typography-driven)
**Priority**: P0 — biggest visual win
**File**: `src/features/landing-v2/WhatWeDo.astro`
**i18n**: No change needed (same data structure)

**Current**: 3 pillar cards in bento grid (Research tall-left, Open Source top-right, Consulting bottom-right). Each card has icon + title + subtitle + description + list items + highlights.

**Target**: Alternating feature rows, NO card containers. Pure typography + whitespace.

```
┌─────────────────────────────────────────────────┐
│ Sous Le Capot                                    │
│ Le différenciateur n'est pas une seule démo...   │
│                                                   │
│ ⟐  Couche d'apprentissage PML                    │
│ │  Routage guidé par les traces...               │
│ │  • Capture des traces                          │
│ │  • Pertinence apprise                          │
│ │  • Mémoire de workflow                         │
│ │  • Inspection humaine                          │
│ │                                                │
│ │  ↳ Recherche liée à des systèmes qu'on         │
│ │    déploie vraiment                            │
│ ├──────────────────────────────────────────────  │
│ │                                                │
│ ⟐  Observabilité & garde-fous                    │
│ │  Avant et pendant l'exécution                  │
│ │  • Tracer chaque appel de bout en bout         │
│ │  • Valider les frontières des outils           │
│ │                                                │
│ ├──────────────────────────────────────────────  │
│ │                                                │
│ ⟐  Architecture de workflow appliquée             │
│    De la stack aux opérations                    │
│    • Intégrations ERP et systèmes métier         │
│    • Architecture serveurs et apps MCP           │
│                                                   │
└─────────────────────────────────────────────────┘
```

**Design tokens**:
- Section background: same as current (surface)
- No card borders, no card backgrounds
- Icon: 28px, color primary, inline with h3
- h3: Fraunces 1.5rem, same line as icon
- Subtitle: primary color, 0.9rem
- List items: no card containers, just indented with left border-accent (3px)
- Highlights (philosophy items): bottom of each row, muted text
- Separator between rows: 1px outline-variant, full container width
- Generous vertical spacing: 40px between rows

**Dark mode**: Same warm palette, accent on left borders and icons.

**Mobile**: Already column-based. Remove card padding → content breathes.

### Task 2: WhyCasys → Vertical Timeline
**Priority**: P0 — second biggest card offender
**File**: `src/features/landing-v2/WhyCasys.astro`
**i18n**: No change needed

**Current**: 5 asymmetric bento cards (multi-domain 2-col, continuity, opensource, practical, accessible 2-col). Each has icon + title + description + highlight items.

**Target**: Vertical timeline/frise with numbered nodes.

```
┌─────────────────────────────────────────────────┐
│ Pourquoi Casys?                                  │
│ Ce qui nous rend différents                      │
│                                                   │
│  ①──── Expertise Multi-Domaine                   │
│  │     On connecte plusieurs domaines...         │
│  │     ✓ Knowledge Management → Graph DB → AI    │
│  │     ✓ La fertilisation croisée génère...      │
│  │     ✓ Une expertise qui se renforce...        │
│  │                                               │
│  ②──── 15+ Ans de Continuité                     │
│  │     Pas des nouveaux venus...                 │
│  │     ✓ 15+ ans de réalisations vérifiables     │
│  │     ✓ Expertise de fond                       │
│  │                                               │
│  ③──── Stack Open Source                          │
│  │     Pas de boîte noire...                     │
│  │     ✓ Chaque brique publiée                   │
│  │     ✓ Auditez le code                         │
│  │                                               │
│  ④──── Recherche Appliquée                        │
│  │     On livre des systèmes en production...    │
│  │     ✓ Prêt pour la production                 │
│  │     ✓ Éprouvé en conditions réelles           │
│  │                                               │
│  ⑤──── Accessible par Design                      │
│        Pas de corporate overhead...              │
│        ✓ Tarification transparente               │
│        ✓ Accès direct aux builders               │
│                                                   │
└─────────────────────────────────────────────────┘
```

**Design tokens**:
- Timeline rail: 2px solid, primary color (dark: warm-accent), left-aligned
- Node circles: 32px diameter, filled primary, white number inside (Fraunces 1rem)
- Content: offset 48px from left edge (past the rail + node)
- Title: Fraunces 1.35rem, inline with node
- Description: body-large, on-surface-variant
- Highlights: check icons + text, no container
- Spacing between nodes: 48px
- NO card containers, NO borders, NO backgrounds per item

**Dark mode**: Rail = warm-accent (rgba 0.3), nodes = warm-accent filled, text = warm palette.

**Mobile**: Timeline hugs left edge, content indented 40px. Compact but readable. Much lighter than 5 stacked cards.

**Desktop alternative**: Could do alternating left/right (odd items left, even items right of the rail) for visual interest on wide screens. Simpler option: keep everything right of the rail.

### Task 3: UseCasesPreview → Full-width Showcase
**Priority**: P1 — less severe but still card-like
**File**: `src/features/landing-v2/UseCasesPreview.astro`
**i18n**: No change needed

**Current**: 3 cards with thumbnail images + title + excerpt + "Lire le cas" link. Cards have borders, backgrounds, and clip the diagram images.

**Target**: Full-width stacked rows or horizontal scroll.

**Option A — Stacked feature rows** (preferred):
```
┌─────────────────────────────────────────────────┐
│ Cas d'Usage en Production                        │
│                                                   │
│ ┌───────────────────┬──────────────────────────┐ │
│ │   [diagram.svg]   │  WORKFLOW PLANIFIABLE     │ │
│ │   full-height     │  Orchestration MCP avec   │ │
│ │   no border       │  validation humaine       │ │
│ │                   │  Lire le cas →            │ │
│ └───────────────────┴──────────────────────────┘ │
│                                                   │
│ ┌──────────────────────────┬───────────────────┐ │
│ │  GRAPHES NAVIGABLES      │  [diagram.svg]    │ │
│ │  Connaissance structurée │  full-height      │ │
│ │  Lire le cas →           │  no border        │ │
│ └──────────────────────────┴───────────────────┘ │
│                                                   │
│ ┌───────────────────┬──────────────────────────┐ │
│ │   [diagram.svg]   │  CHAT-FIRST WORKFLOWS    │ │
│ │                   │  Messagerie comme surface │ │
│ │                   │  Lire le cas →            │ │
│ └───────────────────┴──────────────────────────┘ │
└─────────────────────────────────────────────────┘
```

- Alternating image left/right (zigzag)
- No card borders — use subtle background alternation or none
- Images at ~40% width, content at ~60%
- Tag chip (small, accent color) above the title
- Mobile: stack vertically, image full-width above text

**Option B — Horizontal scroll** (simpler):
- Keep current cards but make them scroll horizontally on mobile instead of stacking
- Less impactful but much less work

**Recommendation**: Option A for maximum visual variety. Option B as fallback if time is short.

### Task 4: FeaturedDemo — Minor polish
**Priority**: P2 — already distinct enough (video)
**File**: `src/features/landing-v2/FeaturedDemo.astro`

**Change**: Remove card borders from the 3 stat boxes at the bottom. Replace with inline chips or simple text with accent separators. This removes 3 mini-cards.

### Task 5: Blog — Horizontal list (optional)
**Priority**: P3 — standard blog pattern, low ROI
**File**: `src/features/landing-v2/Blog.astro`

**Option**: Convert from 3 vertical cards to horizontal list items (image-left, text-right, no card container). Or keep as-is — blog cards are expected and less jarring than repeated bento grids.

**Recommendation**: Skip for now. Blog cards are a universal pattern that visitors expect.

## Execution Order

```
Phase 1 (biggest visual impact):
  Task 1: WhatWeDo → Feature rows        ~1h
  Task 2: WhyCasys → Vertical timeline    ~1h
  → Commit + verify

Phase 2 (complete the vision):
  Task 3: UseCasesPreview → Showcase rows ~1h
  Task 4: FeaturedDemo stat polish        ~20min
  → Commit + verify

Phase 3 (optional):
  Task 5: Blog horizontal list            ~30min
  → Commit + deploy
```

## Visual Rhythm After Redesign

| # | Section | Visual Pattern |
|---|---------|---------------|
| 1 | Hero | Display type + gradient orb |
| 2 | FeaturedDemo | Video + copy (2-col, ONE card-like) |
| 3 | WhatWeDo | **Feature rows** (typography, no cards) |
| 4 | Interlude | Pull quote + stats |
| 5 | UseCasesPreview | **Zigzag showcase** (image + text rows) |
| 6 | WhyCasys | **Vertical timeline** (no cards) |
| 7 | Blog | Cards (standard blog pattern — acceptable) |
| 8 | FAQ | Accordion |
| 9 | Contact | Form + trust badges |

**Card sections: 2** (FeaturedDemo partial, Blog) — down from 5.
**Distinct patterns: 7** — up from 3 (cards, accordion, form).

## Files to Modify

```
Phase 1:
  src/features/landing-v2/WhatWeDo.astro     (full rewrite of HTML + CSS)
  src/features/landing-v2/WhyCasys.astro      (full rewrite of HTML + CSS)

Phase 2:
  src/features/landing-v2/UseCasesPreview.astro  (rewrite HTML + CSS)
  src/features/landing-v2/FeaturedDemo.astro     (minor CSS change)

No i18n changes needed — same data structures, different rendering.
```

## Dark Mode Checklist

All new patterns must use the warm palette variables:
- `--casys-warm-background` (#0a0908)
- `--casys-warm-surface` (#1a1815)
- `--casys-warm-accent` (#FFB86F)
- `--casys-warm-accent-hover` (#D4A574)
- `--casys-warm-text-primary` (#f5f0ea)
- `--casys-warm-text-secondary` (#d5c3b5)
- `--casys-warm-text-muted` (#a89a8c)
- `--casys-warm-border-accent` (rgba(255, 184, 111, 0.1))

## Mobile Priorities

- Timeline (WhyCasys): rail left, content indented, no cards = much lighter
- Feature rows (WhatWeDo): no card containers = less padding = more content per screen
- Showcase zigzag (UseCases): images full-width, stacked, no clipping
- Touch targets: all interactive elements ≥44px height

## Definition of Done

- [ ] Phase 1: WhatWeDo + WhyCasys redesigned, build passes, dark mode works
- [ ] Phase 2: UseCasesPreview redesigned, FeaturedDemo polished
- [ ] All 4 locales render correctly (fr, en, zh, zh-TW)
- [ ] Mobile scroll test: no two adjacent sections look the same
- [ ] Deploy to Vercel
