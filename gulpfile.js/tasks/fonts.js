var config      = require('../config')
if(!config.tasks.fonts) return

var browserSync = require('browser-sync')
var changed     = require('gulp-changed')
var gulp        = require('gulp')
var path        = require('path')
var gulpif      = require('gulp-if');

var paths = {
  src: path.join(config.root.src, config.tasks.fonts.src, '/**/*.{' + config.tasks.fonts.extensions + '}'),
  dest: path.join(config.root.dest, config.tasks.fonts.dest)
}

var fontsTask = function() {
  return gulp.src([paths.src, '*!README.md'])
    .pipe(gulpif(!global.production, changed(paths.dest))) // Ignore unchanged files
    .pipe(gulp.dest(path.join(global.production ? config.root.dist : '', paths.dest)))
    .pipe(gulpif(!global.production, browserSync.stream()))
}

gulp.task('fonts', fontsTask)
module.exports = fontsTask
