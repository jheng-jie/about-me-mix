import { locales } from '$lib/i18n'

/** @type {import('./$types').EntryGenerator} */
export function entries() {
  return locales.get().map(locale => ({ locale }))
}

export const prerender = true
