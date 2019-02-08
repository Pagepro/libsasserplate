const config = require('../lib/webpack-multi-config')('production')
const gulp = require('gulp')
const logger = require('../lib/compileLogger')
const webpack = require('webpack')

const webpackProductionTask = callback => {
  webpack(config, (err, stats) => {
    logger(err, stats)
    callback()
  })
}

gulp.task('webpack:production', webpackProductionTask)
module.exports = webpackProductionTask
