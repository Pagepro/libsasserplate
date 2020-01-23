const config = require('../config')
const browserSync = require('browser-sync')
const changed = require('gulp-changed')
const gulp = require('gulp')
const gulpif = require('gulp-if')
const imagemin = require('gulp-imagemin')
const path = require('path')

const paths = {
  src: path.join(config.root.src, config.tasks.images.src, '/**/*.{' + config.tasks.images.extensions + '}'),
  dest: path.join(config.root.dest, config.tasks.images.dest)
}

const imagesTask = () => gulp
  .src([paths.src, '*!README.md'])
  .pipe(gulpif(!global.production, changed(paths.dest))) // Ignore unchanged files
  .pipe(gulpif(global.production, imagemin())) // minify if it's production task
  .pipe(gulp.dest(path.join(global.production ? config.root.dist : '', paths.dest)))
  .pipe(gulpif(global.production, browserSync.stream()))

gulp.task('images', imagesTask)
module.exports = imagesTask
