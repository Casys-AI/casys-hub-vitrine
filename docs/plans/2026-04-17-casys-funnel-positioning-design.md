# Casys Funnel Positioning Refactor — Design

**Date:** 2026-04-17  
**Scope:** `casys.ai` home + e-invoice use case positioning

## Problem

La home Casys est déjà plus claire qu'avant, mais elle mélange encore plusieurs rôles : crédibilité technique MCP, preuves verticales, et conversion. Le risque n'est plus l'absence de positionnement, mais une hiérarchie insuffisamment nette entre :

1. le message horizontal MCP,
2. les wedges commerciaux réels,
3. la sortie funnel la plus simple pour un visiteur froid.

Le point décisif est l'asymétrie entre les deux preuves principales :

- **MCP ERPNext** a plus de traction technique, plus de signaux open source, et attire les profils intégrateurs ;
- **MCP E-Invoice** a la meilleure démonstrabilité business grâce à `einvoice-platform.fr`, IAM inclus, avec un test rapide accessible.

## Decision

On retient une structure **MCP-first en hero, wedges asymétriques juste en dessous, plateforme horizontale ensuite**.

Concrètement :

- le hero garde le wording validé **"MCP apps for AI agents"** ;
- le sous-titre devient plus durable et horizontal, sans enfermer Casys dans ERPNext ou e-invoice ;
- la section de preuves sous le hero met en avant **deux wedges first-class** :
  - **e-invoice** comme wedge plus accessible, orienté test / plateforme,
  - **ERPNext** comme wedge plus technique, orienté preuve / package / use case ;
- **MCP Platform** reste présent mais descend d'un cran, comme couche commune derrière les deux cas ;
- la home continue d'envoyer vers les **use cases**, pas directement vers la plateforme, afin de garder une narration claire ;
- la page use case e-invoice devient la vraie page de transition vers `einvoice-platform.fr`.

## Recommended Direction

### 1. Hero

Conserver :

- **Title:** `MCP apps for AI agents`
- **Subtitle:** `From local MCP servers to custom integrations for real business systems.`
- **Primary CTA:** `See our work`
- **Secondary CTA:** `Talk to us`

### 2. Section de preuves sous le hero

Supprimer la logique implicite "une wedge dominante + satellites décoratifs" au profit de :

- **MCP E-Invoice** : preuve produit + accessibilité + plateforme live ;
- **MCP ERPNext** : preuve technique + traction open source + vidéo ;
- **MCP Platform** : couche horizontale unificatrice, placée après les wedges.

### 3. Asymétrie assumée

Les deux wedges n'ont pas le même rôle, et il faut le refléter dans le copy :

- **e-invoice vend l'expérience** ;
- **ERPNext vend la solidité technique**.

## Copy Decisions

### Hero

- **Title:** `MCP apps for AI agents`
- **Subtitle:** `From local MCP servers to custom integrations for real business systems.`
- **Primary CTA:** `See our work`
- **Secondary CTA:** `Talk to us`
- **Proof label:** `Standard connectors`

### Card: MCP E-Invoice

- **Label:** `Live platform`
- **Tagline:** `Test French e-invoicing in 2 minutes`
- **Body:** `A live MCP-powered platform for French e-invoicing. Explore invoice flows, IAM, and agent-ready actions through a real product experience, then dive into the underlying MCP stack.`
- **CTA:** `View use case`

### Card: MCP ERPNext

- **Label:** `Open-source package`
- **Tagline:** `Production-ready ERPNext integration for AI agents`
- **Body:** `A real MCP package for ERPNext, built for technical teams who need observable workflows, interactive demos, and a serious starting point for production integrations.`
- **CTA:** `View use case`

### Block: MCP Platform

- **Label:** `Infrastructure`
- **Tagline:** `The shared stack behind our integrations`
- **Body:** `Server, Bridge, and Compose, one production-oriented MCP stack for building, connecting, and shipping agent workflows across real business systems.`
- **CTA:** `Explore the platform`

## E-Invoice Refactor

E-invoice ne doit plus apparaître seulement comme un package MCP. Sur le site, c'est désormais un **wedge produit démontrable**.

### Home

La home doit présenter e-invoice comme :

- un use case réel,
- un package MCP open source,
- une **platform live** testable.

### E-Invoice Use Case Page

Le haut de page devient une page de transition vers la platform :

- **Eyebrow:** `Live MCP product`
- **Title:** `MCP E-Invoice for AI agents`
- **Subtitle:** `Test a live French e-invoicing workflow in 2 minutes, then explore the MCP stack behind it.`
- **Primary CTA:** `Test the platform`
- **Secondary CTA:** `View on GitHub`

Le message doit expliciter que la platform n'est pas un produit séparé tombé du ciel, mais l'expression la plus accessible d'une brique MCP sérieuse.

## Funnel Logic

### E-Invoice

`Home → e-invoice use case → einvoice-platform.fr → book a call`

Chemin secondaire : `request a pilot`

### ERPNext

`Home → ERPNext use case → vidéo / package / repo → contact`

### MCP Platform

`Home → MCP Platform`

Rôle : consolidation de la vision produit pour les profils techniques, pas conversion primaire.

## Why this direction

Cette direction permet de résoudre les tensions principales sans casser le travail déjà fait :

- on garde la force SEO / lexical MCP validée ;
- on n'enferme pas Casys dans deux verticales au niveau du hero ;
- on exploite e-invoice comme wedge de conversion accessible ;
- on respecte la vraie traction ERPNext côté intégrateurs ;
- on préserve MCP Platform comme couche horizontale crédible.

## Constraints

- Ne pas casser le wording validé `MCP apps for AI agents`.
- Ne pas transformer le hero en liste de verticales.
- Ne pas introduire un faux troisième wedge comme `internal tools` si le terrain n'est pas réellement assumé.
- Conserver les use cases comme pages de preuve principales.
- Intégrer `einvoice-platform.fr` sans créer de rupture narrative entre Casys et la platform.

## Success Criteria

Le repositionnement est réussi si :

- la home reste clairement MCP-first ;
- la hiérarchie entre e-invoice, ERPNext et MCP Platform devient lisible ;
- e-invoice n'est plus perçu seulement comme un repo ;
- ERPNext est renforcé comme wedge technique de référence ;
- les CTA orientent mieux les visiteurs froids vers une preuve adaptée à leur niveau de maturité ;
- la platform e-invoice s'intègre au funnel sans brouiller la lecture produit de Casys.
