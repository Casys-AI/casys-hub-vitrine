import { describe, expect, it } from 'vitest';

import { buildPublicUrl, resolvePublicUrl } from './public-url';

describe('resolvePublicUrl', () => {
  it('uses the root domain for regular hub pages', () => {
    expect(resolvePublicUrl('/')).toEqual({
      canonicalUrl: 'https://casys.ai/',
      origin: 'https://casys.ai',
      publicPath: '/',
    });

    expect(resolvePublicUrl('/fr/about')).toEqual({
      canonicalUrl: 'https://casys.ai/fr/about',
      origin: 'https://casys.ai',
      publicPath: '/fr/about',
    });
  });

  it('keeps mcp pages on the root domain (no longer subsites)', () => {
    expect(resolvePublicUrl('/mcp-server')).toEqual({
      canonicalUrl: 'https://casys.ai/mcp-server',
      origin: 'https://casys.ai',
      publicPath: '/mcp-server',
    });

    expect(resolvePublicUrl('/fr/mcp-server')).toEqual({
      canonicalUrl: 'https://casys.ai/fr/mcp-server',
      origin: 'https://casys.ai',
      publicPath: '/fr/mcp-server',
    });

    expect(resolvePublicUrl('/zh/mcp-std/catalog')).toEqual({
      canonicalUrl: 'https://casys.ai/zh/mcp-std/catalog',
      origin: 'https://casys.ai',
      publicPath: '/zh/mcp-std/catalog',
    });
  });

  it('rewrites engine subsite to its public subdomain', () => {
    expect(resolvePublicUrl('/engine')).toEqual({
      canonicalUrl: 'https://engine.casys.ai/',
      origin: 'https://engine.casys.ai',
      publicPath: '/',
    });
  });

  it('keeps root pages on the provided site url when one is configured', () => {
    expect(resolvePublicUrl('/use-cases', 'https://preview.example.com')).toEqual({
      canonicalUrl: 'https://preview.example.com/use-cases',
      origin: 'https://preview.example.com',
      publicPath: '/use-cases',
    });
  });
});

describe('buildPublicUrl', () => {
  it('builds hreflang alternates on the root domain for mcp pages', () => {
    expect(buildPublicUrl('/fr/mcp-bridge', 'en')).toBe('https://casys.ai/mcp-bridge');
    expect(buildPublicUrl('/fr/mcp-bridge', 'zh-TW')).toBe('https://casys.ai/zh-TW/mcp-bridge');
  });

  it('builds root alternates for regular pages', () => {
    expect(buildPublicUrl('/fr/blog/context-engineering-guide', 'en')).toBe(
      'https://casys.ai/blog/context-engineering-guide',
    );
    expect(buildPublicUrl('/fr/blog/context-engineering-guide', 'zh')).toBe(
      'https://casys.ai/zh/blog/context-engineering-guide',
    );
  });
});
