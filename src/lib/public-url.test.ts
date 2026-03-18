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

  it('rewrites public product pages to their subdomains', () => {
    expect(resolvePublicUrl('/mcp-server')).toEqual({
      canonicalUrl: 'https://mcp-server.casys.ai/',
      origin: 'https://mcp-server.casys.ai',
      publicPath: '/',
    });

    expect(resolvePublicUrl('/fr/mcp-server')).toEqual({
      canonicalUrl: 'https://mcp-server.casys.ai/fr/',
      origin: 'https://mcp-server.casys.ai',
      publicPath: '/fr/',
    });

    expect(resolvePublicUrl('/zh/mcp-std/catalog')).toEqual({
      canonicalUrl: 'https://mcp-std.casys.ai/zh/catalog',
      origin: 'https://mcp-std.casys.ai',
      publicPath: '/zh/catalog',
    });

    expect(resolvePublicUrl('/mcp-bridge')).toEqual({
      canonicalUrl: 'https://mcp-bridge.casys.ai/',
      origin: 'https://mcp-bridge.casys.ai',
      publicPath: '/',
    });

    expect(resolvePublicUrl('/fr/pml/catalog')).toEqual({
      canonicalUrl: 'https://pml.casys.ai/fr/catalog',
      origin: 'https://pml.casys.ai',
      publicPath: '/fr/catalog',
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
  it('builds hreflang alternates on the matching public subdomain for product pages', () => {
    expect(buildPublicUrl('/fr/mcp-bridge', 'en')).toBe('https://mcp-bridge.casys.ai/');
    expect(buildPublicUrl('/fr/mcp-bridge', 'zh-TW')).toBe('https://mcp-bridge.casys.ai/zh-TW/');
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
