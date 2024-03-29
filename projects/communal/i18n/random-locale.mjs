// need: node 18+
import fs from 'fs'
import path from 'path'

// load file
const zhFilePath = path.resolve('./zh.json')
const enFilePath = path.resolve('./en.json')
const zh = await fs.promises.readFile(zhFilePath).then(res => JSON.parse(res.toString()))
const en = await fs.promises.readFile(enFilePath).then(res => JSON.parse(res.toString()))

// random map
const charArray = Array.from(new Array(26))
  .map((_, index) => [String.fromCharCode(65 + index), String.fromCharCode(97 + index)])
  .flat()
const randomStr = (length = 1) =>
  Array.from({ length })
    .map(() => charArray[Math.floor(Math.random() * charArray.length)])
    .join('')

// deep random
const deepRandomValue = data => {
  if (typeof data !== 'object' || data === null) return data
  const result = Array.isArray(data) ? [...data] : { ...data }
  for (let key in result) {
    const deepData = result[key]
    const type = typeof deepData
    switch (type) {
      case 'boolean':
      case 'number':
      case 'bigint': {
        break
      }
      case 'object': {
        result[key] = deepRandomValue(deepData)
        break
      }
      case 'string': {
        result[key] = Array.from(deepData)
          .map(char => (/[\u4E00-\u9FA5]/.test(char) ? randomStr() : char))
          .join('')
        break
      }
      case 'symbol':
      case 'function':
      case 'undefined': {
        result[key] = randomStr(type.length)
        break
      }
    }
  }
  return result
}

const randomResult = deepRandomValue(zh)
randomResult.website = en.website
randomResult.header = en.header

// overwrite
await fs.promises.writeFile(enFilePath, JSON.stringify(randomResult, null, 2))
