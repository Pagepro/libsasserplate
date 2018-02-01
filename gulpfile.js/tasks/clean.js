var gulp   = require('gulp')
var del    = require('del')
var config = require('../config')

var cleanTask = function (cb) {
  var path = global.production ? config.root.dist : config.root.dest;
  del([path]).then(function (paths) {
    cb()
  })
}

gulp.task('clean', cleanTask)
module.exports = cleanTask
