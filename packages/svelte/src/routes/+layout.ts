import type { LayoutLoad } from './$types'
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
export const load: LayoutLoad = async ({ url }) => {
  const { pathname } = url
  const path = pathname.replace(base, '')
  const lang = path?.match?.(/^\/(\w{2})\/?/)?.[1] || env.MIX_DEFAULT_LOCALE
  locale.update(() => lang)
  await loadTranslations(lang, pathname)

  return {
    pathname: pathname.replace(/(.*)\/\w{2}\//, ''),
  }
}
