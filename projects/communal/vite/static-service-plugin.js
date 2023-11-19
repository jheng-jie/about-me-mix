const path = require('path')
const express = require('express')

const DefaultOptions = {
  paths: {
    '/assets': path.resolve(__dirname, './'),
  },
}

/**
 * @desc 處理開發模式下靜態資源
 */
module.exports.StaticServicePlugin = ({ paths } = DefaultOptions) => {
  return {
    name: 'static-service',
    configureServer(server) {
      for (const route in paths) server.middlewares.use(route, express.static(paths[route]))
    },
  }
}
