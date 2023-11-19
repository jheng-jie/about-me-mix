import { redirect } from '@sveltejs/kit'
import { base } from '$app/paths'
import { env } from '$env/dynamic/public'

/**
 * @desc 重定向
 */
export function load() {
  // 首頁導向
  throw redirect(302, `${base}/${env.MIX_DEFAULT_LOCALE}/home/`)
}
