var gulp = require('gulp')
var config = require('../config')
var critical = require('critical').stream
var path = require('path')

var paths = {
  src: path.join(config.root.dist, config.tasks.critical.src),
  dest: config.root.dist
}

var criticalTask = function (cb) {
  return gulp.src(paths.src)
    .pipe(critical({
      inline: true,
      base: paths.dest,
      height: config.tasks.critical.height,
      width: config.tasks.critical.width,
      minify: true,
      extract: false,
      ignore: ['font-face']
    }))
    .pipe(gulp.dest(paths.dest))
}


gulp.task('critical', criticalTask)
