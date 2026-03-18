export const OG_LOCALE_MAP = { en: 'en_US', fr: 'fr_FR', zh: 'zh_CN', 'zh-TW': 'zh_TW' } as const;

export function getOgLocale(locale: string): string {
  return OG_LOCALE_MAP[locale as keyof typeof OG_LOCALE_MAP] ?? 'en_US';
}
