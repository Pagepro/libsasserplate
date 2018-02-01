var config = require('../config')
if(!config.tasks.js) return

var config  = require('../lib/webpack-multi-config')('compile')
var gulp    = require('gulp')
var logger  = require('../lib/compileLogger')
var webpack = require('webpack')

var webpackCompile = function(callback) {
  webpack(config, function(err, stats) {
    logger(err, stats)
    callback()
  })
}

gulp.task('webpack-compile', webpackCompile)
module.exports = webpackCompile
