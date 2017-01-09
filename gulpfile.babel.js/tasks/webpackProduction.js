import config from '../config'

import webpackMultiConfig from '../lib/webpack-multi-config'
import gulp from 'gulp'
import logger from '../lib/compileLogger'
import webpack from 'webpack'

const webpackConfig = webpackMultiConfig('production')

function webpackProductionTask (cb) {
  if (!config.tasks.js) return

  webpack(webpackConfig, (err, stats) => {
    logger(err, stats)
    cb()
  })
}

gulp.task('webpack:production', webpackProductionTask)
export default webpackProductionTask
