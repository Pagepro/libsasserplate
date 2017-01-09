import browserSync from 'browser-sync'
import gulp from 'gulp'
import webpack from 'webpack'
import webpackMultiConfig from '../lib/webpack-multi-config'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import pathToUrl from '../lib/pathToUrl'
import config from '../config'

const configBrowserSync = config.tasks.browserSync

function browserSyncTask () {
  if (global.production) return

  const webpackConfig = webpackMultiConfig('development')
  const compiler = webpack(webpackConfig)
  const proxyConfig = configBrowserSync.proxy || null

  if (typeof proxyConfig === 'string') {
    configBrowserSync.proxy = {
      target: proxyConfig
    }
  }

  const server = configBrowserSync.proxy || configBrowserSync.server

  server.middleware = [
    webpackDevMiddleware(compiler, {
      stats: 'errors-only',
      publicPath: pathToUrl('/', webpackConfig.output.publicPath)
    }),
    webpackHotMiddleware(compiler)
  ]

  browserSync.init(configBrowserSync)
}

gulp.task('browserSync', browserSyncTask)
export default browserSyncTask
