const express = require('express')
const path = require('pathe')

const dotenv = require('dotenv')
dotenv.config({ path: path.resolve('../../.env') })
const { MIX_ASSETS_URL, MIX_BASE_URL } = process.env

const app = express()

app.use(MIX_ASSETS_URL, express.static(path.resolve('../communal/static/assets')))
app.use(`${MIX_BASE_URL}/react`, express.static(path.resolve('../../about-me-mix/react')))
app.use(`${MIX_BASE_URL}/vue`, express.static(path.resolve('../../about-me-mix/vue')))
app.use(`${MIX_BASE_URL}/svelte`, express.static(path.resolve('../../about-me-mix/svelte')))
app.listen(4199, () => console.log('Proxy server started on port 4199'))
