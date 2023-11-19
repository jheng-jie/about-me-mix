import en from '@about-me-mix/communal/i18n/en.json'
import zh from '@about-me-mix/communal/i18n/zh.json'

export default {
  messages: { en, zh },
  legacy: false,
  locale: process.env.MIX_DEFAULT_LOCALE,
  fallbackLocale: process.env.MIX_DEFAULT_LOCALE,
}
