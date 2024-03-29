const path = require('path')
const fs = require('fs')
const _ = require('lodash')

const sourcePath = path.resolve(__dirname, '../../../../communal/i18n')
const zhSourcePath = path.resolve(sourcePath, 'zh.json')
const enSourcePath = path.resolve(sourcePath, 'en.json')

/**
 * @desc 扁平化
 */
function flattenJson(obj, parentKey = '') {
  return _.reduce(
    obj,
    (acc, value, key) => {
      const newKey = parentKey ? `${parentKey}.${key}` : key
      if (_.isPlainObject(value)) {
        _.assign(acc, flattenJson(value, newKey))
      } else if (_.isArray(value)) {
        _.forEach(value, (item, index) => {
          const arrayKey = `${newKey}[${index}]`
          acc[arrayKey] = item
        })
      } else {
        acc[newKey] = value.replace(/\{0}/, 'Angular')
      }
      return acc
    },
    {},
  )
}

/**
 * @desc 生成 Angular 本地化文件格式
 */
const writeAngularLocaleFormat = (locale, translations) => {
  const data = JSON.parse(translations)
  const result = {
    locale,
    translations: flattenJson(data),
  }
  const targetPath = path.resolve(__dirname, `messages.${locale}.json`)
  fs.writeFileSync(targetPath, JSON.stringify(result, null, 2))
}

writeAngularLocaleFormat('zh', fs.readFileSync(zhSourcePath, 'utf8'))
writeAngularLocaleFormat('en', fs.readFileSync(enSourcePath, 'utf8'))
