var config      = require('../config')
if(!config.tasks.images) return

var browserSync = require('browser-sync');
var changed     = require('gulp-changed');
var gulp        = require('gulp');
var gulpif      = require('gulp-if');
var imagemin    = require('gulp-imagemin');
var path        = require('path');


var paths = {
  src: path.join(config.root.src, config.tasks.images.src, '/**/*.{' + config.tasks.images.extensions + '}'),
  dest: path.join(config.root.dest, config.tasks.images.dest )
}


var imagesTask = function(env) {
  return gulp.src([paths.src, , '*!README.md'])
    .pipe(gulpif(!global.production, changed(paths.dest))) // Ignore unchanged files
    .pipe(gulpif(global.production, imagemin())) // minify if it's production task
    .pipe(gulp.dest(path.join(global.production ? config.root.dist : '', paths.dest)))
    .pipe(gulpif(!global.production, browserSync.stream()))
}

gulp.task('images', imagesTask);
module.exports = imagesTask;
