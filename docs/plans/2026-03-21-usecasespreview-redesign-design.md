# UseCasesPreview Redesign — Design

**Date:** 2026-03-21
**Section:** `src/features/landing-v2/UseCasesPreview.astro`

## Problem

La section actuelle est correcte visuellement, mais elle mélange deux logiques qui se contrarient :

1. les cartes de home réutilisent des visuels OG déjà très textuels ;
2. le SEO préférerait davantage de contenu HTML réellement lisible et crawlable.

Si on ajoute du texte HTML sur des images déjà chargées en texte, on obtient vite une redondance visuelle médiocre. Il faut donc dissocier les usages.

## Decision

On retient un **redesign éditorial premium** de `UseCasesPreview`, avec cette règle structurante :

- **les visuels home ne sont plus contraints d’être identiques aux OG socials** ;
- la section garde une structure **SEO-friendly** avec du vrai texte HTML ;
- Stitch est utilisé comme **référence de composition visuelle**, pas comme générateur de contenu final.

## Recommended Direction

Direction retenue : **featured proof fort + cartes secondaires premium**.

Concrètement :

- conserver un **bloc principal** très mis en avant pour la preuve phare (`featuredDemo`) ;
- conserver des **cartes secondaires** pour les autres use cases ;
- rendre les visuels des cartes plus silencieux pour éviter le doublon texte-image ;
- afficher les informations critiques en HTML : titre, angle, éventuellement une courte ligne de contexte ;
- garder une lecture rapide, premium, mais plus sémantique.

## Why this direction

Cette approche est le meilleur compromis entre :

- la continuité visuelle avec le hero et `WhyCasys` ;
- la clarté SEO ;
- la lisibilité produit ;
- la capacité à réinjecter nos vrais contenus sans reprendre le bullshit éventuel de Stitch.

Elle évite les deux écueils :

- **trop conservateur** : on garde juste une grille d’images jolies mais pauvres sémantiquement ;
- **trop décoratif** : on laisse Stitch casser la hiérarchie produit au profit d’une simple vitrine.

## Constraints

- Conserver la palette Casys : **noir / amber-jaune / blanc perlé / mauve léger**, sans basculer vers bleu/vert.
- Travailler **section par section** seulement.
- Ne pas dégrader la lisibilité mobile.
- Préserver les contenus métier réels (`featuredDemo`, `useCases`, i18n existante).
- Les liens doivent rester crawlables et propres.
- Les cartes home peuvent diverger des OG socials ; les OG restent dédiées au partage.

## What to ask Stitch

Le brief Stitch doit demander :

- un **redesign de section landing premium/editorial** ;
- un **featured case dominant** ;
- des **secondary cards plus silencieuses visuellement** ;
- une structure qui supporte **titres HTML + microcopy** ;
- aucun rebranding large ;
- aucune réécriture du contenu métier.

## Success Criteria

Le redesign est réussi si :

- la section paraît plus premium que l’actuelle ;
- le featured case reste l’élément central ;
- les secondary cards ne doublonnent plus texte dans l’image + texte HTML ;
- la section supporte mieux le SEO grâce à du contenu HTML réel ;
- l’ensemble reste cohérent avec le hero et `WhyCasys` déjà redesignés.
