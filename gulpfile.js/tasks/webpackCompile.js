const config = require('../lib/webpack-multi-config')('compile')
const gulp = require('gulp')
const logger = require('../lib/compileLogger')
const webpack = require('webpack')

const webpackCompile = callback => {
  webpack(config, (err, stats) => {
    logger(err, stats)
    callback()
  })
}

gulp.task('webpack-compile', webpackCompile)
module.exports = webpackCompile
