import { redirect } from '@sveltejs/kit'
import { base } from '$app/paths'
import { DEFAULT_LOCALE } from '@/core/i18n'

/**
 * @desc 重定向
 */
export function load() {
  // 首頁導向
  throw redirect(302, `${base}/${DEFAULT_LOCALE}/home/`)
}
