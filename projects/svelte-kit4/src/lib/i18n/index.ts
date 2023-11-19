import type { Config } from 'sveltekit-i18n'
import i18n from 'sveltekit-i18n'
import en from '@about-me-mix/communal/i18n/en.json'
import zh from '@about-me-mix/communal/i18n/zh.json'
import { env } from '$env/dynamic/public'

// config
const config: Config = {
  fallbackLocale: String(env.MIX_DEFAULT_LOCALE),
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
