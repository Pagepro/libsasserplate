const config = require('../config')
const browserSync = require('browser-sync')
const changed = require('gulp-changed')
const gulp = require('gulp')
const path = require('path')
const checkEnv = require('../utils').checkEnv

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
  .pipe(checkEnv(changed(paths.dest), false)) // Ignore unchanged files
  .pipe(gulp.dest(path.join(global.production ? dist : '', paths.dest)))
  .pipe(checkEnv(browserSync.stream(), false))

gulp.task('fonts', fontsTask)
module.exports = fontsTask
