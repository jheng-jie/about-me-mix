import { messages } from './src/core/i18n'

export default {
  messages,
  legacy: false,
  locale: process.env.MIX_DEFAULT_LOCALE,
  fallbackLocale: process.env.MIX_DEFAULT_LOCALE,
}
