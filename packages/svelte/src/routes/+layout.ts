import type { LayoutLoad } from './$types'
import { env } from '$env/dynamic/public'
import { loadTranslations, locale, locales } from '@/core/i18n'
import { base } from '$app/paths'

// uno css
import 'uno.css'
import '@unocss/reset/tailwind.css'
import '@/assets/style/core.scss'

// static
export const prerender = true
export const trailingSlash = 'always'

/**
 * @desc Layout Load
 */
export const load: LayoutLoad = async ({ url }) => {
  const { pathname } = url
  const pathLocale = pathname.replace(base, '')?.match?.(/^\/(\w{2})\/?/)?.[1] || ''
  const lang = locales.get().includes(pathLocale) ? pathLocale : env.MIX_DEFAULT_LOCALE
  locale.update(() => lang)
  await loadTranslations(lang, pathname)
}
