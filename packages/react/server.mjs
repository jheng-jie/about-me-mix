import express from 'express'
import { parse } from 'url'
import next from 'next'
import path from 'path'
import config from '@about-me-mix/common/config.json' assert { type: 'json' }

const port = 4000

// next app
const nextApp = next({ dev: true })
const handle = nextApp.getRequestHandler()
const serverApp = express()

nextApp.prepare().then(() => {
  // static
  serverApp.use(`${config.BASE_URL}/assets`, express.static(path.resolve('../common/assets')))

  // vue svelte 直接使用打包結果
  serverApp.use(`${config.BASE_URL}/vue`, express.static(path.resolve('../../about-me-mix/vue')))
  serverApp.use(`${config.BASE_URL}/svelte`, express.static(path.resolve('../../about-me-mix/svelte')))

  // next
  serverApp.use((req, res) => handle(req, res, parse(req.url, true)))

  // run
  serverApp.listen(port)
  console.log(`Server listening at http://localhost:${port}${config.BASE_URL}/react/home`)
})
