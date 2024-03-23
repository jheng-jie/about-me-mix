import type { LayoutLoad } from '../../.svelte-kit/types/src/routes/$types'
import { MIX_DEFAULT_LOCALE } from '$env/static/public'
import { loadTranslations, locale, locales } from '$lib/i18n'
import { base } from '$app/paths'

// static
export const prerender = true
export const trailingSlash = 'always'

/**
 * @desc Layout Load
 */
export const load: LayoutLoad = async ({ url }) => {
  const { pathname } = url
  const pathLocale = pathname.replace(base, '')?.match?.(/^\/(\w{2})\/?/)?.[1] || ''
  const lang = locales.get().includes(pathLocale) ? pathLocale : MIX_DEFAULT_LOCALE
  locale.update(() => lang)
  await loadTranslations(lang, pathname)
}
