const config = require('../config')
const browserSync = require('browser-sync')
const changed = require('gulp-changed')
const gulp = require('gulp')
const path = require('path')
const gulpif = require('gulp-if')

const {
  root: {
    src,
    dest,
    dist
  }
} = config

const fontsConfig = {
  src: 'fonts',
  dest: 'fonts',
  extensions: ['woff2', 'woff', 'eot', 'ttf', 'svg']
}

const paths = {
  src: path.join(src, fontsConfig.src, '/**/*.{' + fontsConfig.extensions + '}'),
  dest: path.join(dest, fontsConfig.dest)
}

const fontsTask = () => gulp
  .src([paths.src, '*!README.md'])
  .pipe(gulpif(!global.production, changed(paths.dest))) // Ignore unchanged files
  .pipe(gulp.dest(path.join(global.production ? dist : '', paths.dest)))
  .pipe(gulpif(!global.production, browserSync.stream()))

gulp.task('fonts', fontsTask)
module.exports = fontsTask
