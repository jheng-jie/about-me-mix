import type { Handle } from '@sveltejs/kit'
import { env } from '$env/dynamic/public'
import { base } from '$app/paths'

/**
 * @desc Svelte Kit Server Hook
 */
export const handle: Handle = function ({ event, resolve }) {
  const { pathname } = event.url
  const path = pathname.replace(base, '')
  const lang = path?.match?.(/^\/(\w{2})\/?/)?.[1] || env.MIX_DEFAULT_LOCALE
  return resolve(event, {
    transformPageChunk: ({ html }: { html: string }) => html.replace(/{lang}/, lang),
  })
}
