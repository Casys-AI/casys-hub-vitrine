export const OG_LOCALE_MAP = { en: 'en_US', fr: 'fr_FR', zh: 'zh_CN', 'zh-TW': 'zh_TW' } as const;
export const HTML_LANG_MAP = { en: 'en', fr: 'fr', zh: 'zh-CN', 'zh-TW': 'zh-TW' } as const;

export function getOgLocale(locale: string): string {
  return OG_LOCALE_MAP[locale as keyof typeof OG_LOCALE_MAP] ?? 'en_US';
}

export function getHtmlLang(locale: string): string {
  return HTML_LANG_MAP[locale as keyof typeof HTML_LANG_MAP] ?? 'en';
}

export function getSchemaLanguage(locale: string): string {
  return getHtmlLang(locale);
}

export function getHrefLang(locale: string): string {
  return getHtmlLang(locale);
}
