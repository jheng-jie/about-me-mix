import express from 'express'
import { parse } from 'url'
import next from 'next'
import path from 'path'

const port = 4000

// next app
const nextApp = next({ dev: true })
const handle = nextApp.getRequestHandler()
const serverApp = express()

nextApp.prepare().then(() => {
  // static
  serverApp.use('/assets', express.static(path.resolve('../common/assets')))

  // vue svelte 直接使用打包結果
  serverApp.use('/vue', express.static(path.resolve('../../release/vue')))
  serverApp.use('/svelte', express.static(path.resolve('../../release/svelte')))

  // next
  serverApp.use((req, res) => handle(req, res, parse(req.url, true)))

  // run
  serverApp.listen(port)
  console.log(`Server listening at http://localhost:${port}/react/home`)
})
