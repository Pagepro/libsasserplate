import config from '../config'

import webpackMultiConfig from '../lib/webpack-multi-config'
import gulp from 'gulp'
import logger from '../lib/compileLogger'
import webpack from 'webpack'

const webpackConfig = webpackMultiConfig('compile')

function webpackCompile (cb) {
  if (!config.tasks.js) return

  webpack(webpackConfig, (err, stats) => {
    logger(err, stats)
    cb()
  })
}

gulp.task('webpack-compile', webpackCompile)
export default webpackCompile
