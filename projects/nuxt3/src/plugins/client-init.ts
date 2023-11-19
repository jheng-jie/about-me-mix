import { useClientStore } from '~/store/initialize'

/**
 * @desc 網頁初始化用
 */
export default defineNuxtPlugin(async nuxtApp => useClientStore().initialize())
