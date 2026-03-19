import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import test from 'node:test';
import assert from 'node:assert/strict';

function readSource(relativePath) {
  return readFileSync(resolve(process.cwd(), relativePath), 'utf8');
}

test('homepage keeps only the streamlined sections in the requested order', () => {
  const source = readSource('src/pages/index.astro');

  assert.equal(source.includes('import FeaturedDemo'), false);
  assert.equal(source.includes('import WhatWeDo'), false);
  assert.equal(source.includes('import Interlude'), false);
  assert.equal(source.includes('import Blog'), false);

  const heroIndex = source.indexOf('<Hero />');
  const whyIndex = source.indexOf('<WhyCasys />');
  const useCasesIndex = source.indexOf('<UseCasesPreview />');
  const faqIndex = source.indexOf('<FAQ />');
  const contactIndex = source.indexOf('<Contact />');

  assert.ok(heroIndex > -1);
  assert.ok(whyIndex > heroIndex);
  assert.ok(useCasesIndex > whyIndex);
  assert.ok(faqIndex > useCasesIndex);
  assert.ok(contactIndex > faqIndex);
});

test('use-cases preview embeds the ERPNext demo and switches to a card grid', () => {
  const source = readSource('src/features/landing-v2/UseCasesPreview.astro');

  assert.equal(source.includes('useTranslations(locale).featuredDemo'), true);
  assert.equal(source.includes('<video controls playsinline preload="metadata">'), true);
  assert.equal(source.includes('featuredDemo.video.src'), true);
  assert.equal(source.includes('featuredDemo.video.caption'), true);
  assert.equal(source.includes('featuredDemo.bullets.map'), true);
  assert.equal(source.includes('class="featured-case"'), true);
  assert.equal(source.includes('class="cases-grid"'), true);
  assert.equal(source.includes('showcase-row'), false);
  assert.equal(source.includes('reverse'), false);
});

test('hero proof links still resolve after the landing section merge', () => {
  const translationFiles = [
    'src/i18n/en.ts',
    'src/i18n/fr.ts',
    'src/i18n/zh.ts',
    'src/i18n/zh-TW.ts',
  ];

  const landingSources = [
    readSource('src/features/landing-v2/Hero.astro'),
    readSource('src/features/landing-v2/WhyCasys.astro'),
    readSource('src/features/landing-v2/UseCasesPreview.astro'),
    readSource('src/features/landing-v2/FAQ.astro'),
    readSource('src/features/landing-v2/Contact.astro'),
  ].join('\n');

  for (const file of translationFiles) {
    const source = readSource(file);
    const heroBlock = source.match(/hero:\s*\{[\s\S]*?proofs:\s*\[(?<proofs>[\s\S]*?)\n\s*\],\n\s*},\n\s*featuredDemo:/);

    assert.ok(heroBlock?.groups?.proofs, `expected landing hero proofs block in ${file}`);

    const anchorMatches = [...heroBlock.groups.proofs.matchAll(/url:\s*"(?<url>#[^"]+)"/g)];
    assert.ok(anchorMatches.length > 0, `expected in-page hero proof links in ${file}`);

    for (const match of anchorMatches) {
      const anchor = match.groups?.url;
      assert.ok(anchor, `expected hero proof URL in ${file}`);
      assert.equal(
        landingSources.includes(`id="${anchor.slice(1)}"`),
        true,
        `expected ${file} hero proof link ${anchor} to resolve on the landing page`,
      );
    }
  }
});
