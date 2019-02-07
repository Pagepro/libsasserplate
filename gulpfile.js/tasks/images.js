const config = require('../config')
const checkEnv = require('../utils').checkEnv
const browserSync = require('browser-sync')
const changed = require('gulp-changed')
const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const path = require('path')

const paths = {
  src: path.join(config.root.src, config.tasks.images.src, '/**/*.{' + config.tasks.images.extensions + '}'),
  dest: path.join(config.root.dest, config.tasks.images.dest)
}

const imagesTask = () => gulp
  .src([paths.src, '*!README.md'])
  .pipe(checkEnv(changed(paths.dest), false)) // Ignore unchanged files
  .pipe(checkEnv(imagemin())) // minify if it's production task
  .pipe(gulp.dest(path.join(global.production ? config.root.dist : '', paths.dest)))
  .pipe(checkEnv(browserSync.stream(), false))

gulp.task('images', imagesTask)
module.exports = imagesTask
