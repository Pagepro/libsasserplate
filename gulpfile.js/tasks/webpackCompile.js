const config = require('../lib/webpack-multi-config')('compile')
const gulp = require('gulp')
const logger = require('../lib/compileLogger')
const path = require('path')
const git = require('gulp-git')
const webpack = require('webpack')

const webpackCompile = callback => {
  webpack(config, (err, stats) => {
    const {
      output: {
        path: bundleOutputPath,
        filename
      }
    } = config

    logger(err, stats)

    gulp.src(path.join(bundleOutputPath, filename)).pipe(git.add())

    callback()
  })
}

gulp.task('webpack-compile', webpackCompile)
module.exports = webpackCompile
