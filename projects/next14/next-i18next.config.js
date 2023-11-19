const path = require('path')

/**
 * @see https://www.i18next.com/overview/configuration-options#logging
 */
module.exports = {
  defaultNS: 'common',
  i18n: {
    locales: String(process.env.MIX_SUPPORTS_LOCALES).split(','),
    defaultLocale: String(process.env.MIX_DEFAULT_LOCALE),
  },
  // locale file path
  localePath: locale => path.resolve(`../communal/i18n/${locale}.json`),
  serializeConfig: false,
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  ns: ['common'],
  interpolation: {
    prefix: '{',
    suffix: '}',
  },
}
