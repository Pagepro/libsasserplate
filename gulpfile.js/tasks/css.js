const config = require('../config')
const gulpif = require('gulp-if')
const gulp = require('gulp')
const browserSync = require('browser-sync')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const handleErrors = require('../lib/handleErrors')
const autoprefixer = require('gulp-autoprefixer')
const path = require('path')
const cssnano = require('gulp-cssnano')
const encoder = require('../lib/encoder')
const wait = require('gulp-wait')
const gcmq = require('gulp-group-css-media-queries')
const sassGlob = require('gulp-sass-glob')
const importCss = require('gulp-import-css')

const {
  root: {
    src: rootSrc,
    dest: rootDest,
    dist
  },
  tasks: {
    css: {
      src,
      extensions,
      dest,
      sass: sassConfig,
      autoprefixer: autoprefixerConfig
    }
  }
} = config

const paths = {
  src: path.join(rootSrc, src, '/**/main.{' + extensions + '}'),
  dest: path.join(rootDest, dest)
}

const isPlatformWindows = process.platform === 'win32'

const cssTask = () => gulp
  .src(paths.src)
  .pipe(gulpif(!global.production, sourcemaps.init()))
  .pipe(gulpif(isPlatformWindows, wait(200))) // prevents SASS compilation errors on Windows
  .pipe(sassGlob())
  .pipe(sass(sassConfig))
  .on('error', handleErrors)
  .pipe(importCss())
  .pipe(autoprefixer(autoprefixerConfig))
  .pipe(gulpif(global.production, cssnano({ autoprefixer: false, reduceIdents: { encoder } })))
  .pipe(gulpif(!global.production, sourcemaps.write()))
  .pipe(gulpif(global.production, gcmq()))
  .pipe(gulp.dest(path.join(global.production ? dist : '', paths.dest)))
  .pipe(gulpif(!global.production, browserSync.stream()))

gulp.task('css', cssTask)
module.exports = cssTask
