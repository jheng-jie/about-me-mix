const path = require('path')
const config = require('@about-me-mix/common/config.json')

/**
 * @see https://www.i18next.com/overview/configuration-options#logging
 */
module.exports = {
  defaultNS: 'common',
  i18n: {
    locales: config.SUPPORTS_LOCALES,
    defaultLocale: config.DEFAULT_LOCALE,
  },
  // locale file path
  localePath: locale => path.resolve(`../common/locales/${locale}.json`),
  serializeConfig: false,
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  ns: ['common'],
  interpolation: {
    prefix: '{',
    suffix: '}',
  },
}
