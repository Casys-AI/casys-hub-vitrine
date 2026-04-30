import { describe, expect, it } from 'vitest';

import { getHrefLang, getHtmlLang, getOgLocale, getSchemaLanguage } from './locale-utils';

describe('locale SEO mappings', () => {
  it('uses region-specific Chinese language tags for HTML, hreflang, and schema.org', () => {
    expect(getHtmlLang('zh')).toBe('zh-CN');
    expect(getHrefLang('zh')).toBe('zh-CN');
    expect(getSchemaLanguage('zh')).toBe('zh-CN');

    expect(getHtmlLang('zh-TW')).toBe('zh-TW');
    expect(getHrefLang('zh-TW')).toBe('zh-TW');
    expect(getSchemaLanguage('zh-TW')).toBe('zh-TW');
  });

  it('keeps Open Graph locale values in underscore format', () => {
    expect(getOgLocale('zh')).toBe('zh_CN');
    expect(getOgLocale('zh-TW')).toBe('zh_TW');
  });
});
