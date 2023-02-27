import type { Config } from 'sveltekit-i18n'
import i18n from 'sveltekit-i18n'
import { DEFAULT_LOCALE } from '@about-me-mix/common/config.json'

// config
const config: Config = {
  fallbackLocale: DEFAULT_LOCALE,
  loaders: [
    {
      key: '',
      locale: 'en',
      loader: async () => (await import('@about-me-mix/common/locales/en.json')).default,
    },
    {
      key: '',
      locale: 'zh',
      loader: async () => (await import('@about-me-mix/common/locales/zh.json')).default,
    },
  ],
}

// export
export const { t, locale, locales, loading, loadTranslations } = new i18n(config)
export { DEFAULT_LOCALE }
