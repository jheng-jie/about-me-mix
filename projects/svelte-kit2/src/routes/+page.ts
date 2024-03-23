import { redirect } from '@sveltejs/kit'
import { base } from '$app/paths'
import { MIX_DEFAULT_LOCALE } from '$env/static/public'

/**
 * @desc 重定向
 */
export function load() {
  // 首頁導向
  throw redirect(302, `${base}/${MIX_DEFAULT_LOCALE}/home/`)
}
