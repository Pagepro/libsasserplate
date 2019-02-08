if (global.production) return
const browserSync = require('browser-sync')
const gulp = require('gulp')
const webpack = require('webpack')
const webpackMultiConfig = require('../lib/webpack-multi-config')
const pathToUrl = require('../lib/pathToUrl')
const config = require('../config').tasks.browserSync

const browserSyncTask = () => {
  const webpackConfig = webpackMultiConfig('development')
  const compiler = webpack(webpackConfig)
  const proxyConfig = config.proxy

  if (typeof (proxyConfig) === 'string') {
    config.proxy = {
      target: proxyConfig
    }
  }

  const server = config.proxy || config.server

  server.middleware = [
    require('webpack-dev-middleware')(compiler, {
      stats: 'errors-only',
      publicPath: pathToUrl('/', webpackConfig.output.publicPath)
    }),
    require('webpack-hot-middleware')(compiler)
  ]

  browserSync.init(config)
}

gulp.task('browserSync', browserSyncTask)
module.exports = browserSyncTask
