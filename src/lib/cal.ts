export const casysCalLinks: Record<string, string> = {
  en: 'casys.ai/consultation',
  fr: 'casys.ai/consultation',
  zh: 'casys.ai/consultation',
  'zh-TW': 'casys.ai/consultation',
};

export function getCasysCalLink(locale?: string) {
  return casysCalLinks[locale ?? 'en'] ?? casysCalLinks.en;
}

export function getCasysCalHref(locale?: string) {
  return `https://cal.com/${getCasysCalLink(locale)}`;
}
