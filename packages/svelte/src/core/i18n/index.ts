import type { Config } from 'sveltekit-i18n'
import i18n from 'sveltekit-i18n'
import { DEFAULT_LOCALE } from '@about-me-mix/common/config.json'
import en from '@about-me-mix/common/locales/en.json' assert { type: 'json' }
import zh from '@about-me-mix/common/locales/zh.json' assert { type: 'json' }

// config
const config: Config = {
  fallbackLocale: DEFAULT_LOCALE,
  loaders: [
    {
      key: '',
      locale: 'en',
      loader: async () => Promise.resolve(en),
    },
    {
      key: '',
      locale: 'zh',
      loader: async () => Promise.resolve(zh),
    },
  ],
}

// export
export const { t, locale, locales, loading, loadTranslations } = new i18n(config)
export { DEFAULT_LOCALE }
