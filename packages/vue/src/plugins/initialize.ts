import { useWebsite } from '~/stores'

/**
 * @desc 網頁初始化用
 */
export default defineNuxtPlugin(async nuxtApp => useWebsite().initialize())
