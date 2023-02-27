import { DEFAULT_LOCALE } from '@about-me-mix/common/config.json'
import { base } from '$app/paths'

/**
 * @desc Svelte Kit Server Hook
 */
export async function handle({ event, resolve }: any) {
  const { pathname } = event.url
  const path = pathname.replace(base, '')
  const lang = path?.match?.(/^\/(\w{2})\/?/)?.[1] || DEFAULT_LOCALE
  return resolve(event, {
    transformPageChunk: ({ html }: { html: string }) => html.replace(/{lang}/, lang),
  })
}
