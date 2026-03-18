import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

function readSource(relativePath) {
  return readFileSync(resolve(process.cwd(), relativePath), 'utf8');
}

describe('landing restructure', () => {
  it('homepage keeps only the streamlined sections in the requested order', () => {
    const source = readSource('src/pages/index.astro');

    expect(source.includes('import FeaturedDemo')).toBe(false);
    expect(source.includes('import WhatWeDo')).toBe(false);
    expect(source.includes('import Interlude')).toBe(false);
    expect(source.includes('import Blog')).toBe(false);

    const heroIndex = source.indexOf('<Hero />');
    const whyIndex = source.indexOf('<WhyCasys />');
    const useCasesIndex = source.indexOf('<UseCasesPreview />');
    const faqIndex = source.indexOf('<FAQ />');
    const contactIndex = source.indexOf('<Contact />');

    expect(heroIndex).toBeGreaterThan(-1);
    expect(whyIndex).toBeGreaterThan(heroIndex);
    expect(useCasesIndex).toBeGreaterThan(whyIndex);
    expect(faqIndex).toBeGreaterThan(useCasesIndex);
    expect(contactIndex).toBeGreaterThan(faqIndex);
  });

  it('use-cases preview embeds the ERPNext demo and switches to a card grid', () => {
    const source = readSource('src/features/landing-v2/UseCasesPreview.astro');

    expect(source.includes('useTranslations(locale).featuredDemo')).toBe(true);
    expect(source.includes('<video controls playsinline preload="metadata">')).toBe(true);
    expect(source.includes('featuredDemo.video.src')).toBe(true);
    expect(source.includes('featuredDemo.video.caption')).toBe(true);
    expect(source.includes('featuredDemo.bullets.map')).toBe(true);
    expect(source.includes('class="featured-case"')).toBe(true);
    expect(source.includes('class="cases-grid"')).toBe(true);
    expect(source.includes('showcase-row')).toBe(false);
    expect(source.includes('reverse')).toBe(false);
  });
});
