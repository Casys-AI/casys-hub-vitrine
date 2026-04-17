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

  // Historical subsite subdomains (mcp-server.casys.ai, mcp-std.casys.ai, etc.)
  // are retired — product pages now canonicalize to casys.ai/<path>.
  it('canonicalizes retired product subsite paths to the root domain', () => {
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

    expect(resolvePublicUrl('/mcp-bridge')).toEqual({
      canonicalUrl: 'https://casys.ai/mcp-bridge',
      origin: 'https://casys.ai',
      publicPath: '/mcp-bridge',
    });

    expect(resolvePublicUrl('/fr/pml/catalog')).toEqual({
      canonicalUrl: 'https://casys.ai/fr/pml/catalog',
      origin: 'https://casys.ai',
      publicPath: '/fr/pml/catalog',
    });
  });

  it('canonicalizes the engine subsite on the root domain', () => {
    expect(resolvePublicUrl('/engine')).toEqual({
      canonicalUrl: 'https://casys.ai/engine',
      origin: 'https://casys.ai',
      publicPath: '/engine',
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
  it('builds hreflang alternates on the root domain for all pages', () => {
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
