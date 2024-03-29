import express from 'express'
import { parse } from 'url'
import next from 'next'
import path from 'path'
import dotenv from 'dotenv'

// load env
dotenv.config({ path: path.resolve('../../.env') })
const { MIX_BASE_URL, MIX_ASSETS_URL } = process.env

// port
const port = 4000

// next app
const nextApp = next({ dev: true })
const handle = nextApp.getRequestHandler()
const serverApp = express()

nextApp.prepare().then(() => {
  // static
  serverApp.use(`${MIX_ASSETS_URL}`, express.static(path.resolve('../communal/static/assets')))

  // vue svelte 直接使用打包結果
  serverApp.use(`${MIX_BASE_URL}/vue`, express.static(path.resolve('../../about-me-mix/vue')))
  serverApp.use(`${MIX_BASE_URL}/svelte`, express.static(path.resolve('../../about-me-mix/svelte')))
  serverApp.use(`${MIX_BASE_URL}/angular`, express.static(path.resolve('../../about-me-mix/angular')))

  // next
  serverApp.use((req, res) => handle(req, res, parse(req.url, true)))

  // run
  serverApp.listen(port)
  console.log(`Server listening at http://localhost:${port}${MIX_BASE_URL}/react/home`)
})
