import type { LayoutLoadEvent } from './$types'
import { env } from '$env/dynamic/public'
import { loadTranslations, locale } from '@/core/i18n'
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
export const load = async ({ url }: LayoutLoadEvent) => {
  const { pathname } = url
  const path = pathname.replace(base, '')
  const lang = path?.match?.(/^\/(\w{2})\/?/)?.[1] || env.MIX_DEFAULT_LOCALE
  locale.forceSet(lang)
  await loadTranslations(lang, pathname)
}
