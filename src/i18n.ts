import type { Locale } from './content'

const STORAGE_KEY = 'cv-locale'

export function getInitialLocale(): Locale {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'es' || stored === 'en') return stored
  return 'es'
}

export function persistLocale(locale: Locale): void {
  localStorage.setItem(STORAGE_KEY, locale)
}

export function t(
  value: Record<Locale, string>,
  locale: Locale,
): string {
  return value[locale]
}
