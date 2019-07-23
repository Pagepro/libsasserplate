const config = require('../config')
const gulpif = require('gulp-if')
const gulp = require('gulp')
const browserSync = require('browser-sync')
const sass = require('gulp-sass')
const handleErrors = require('../lib/handleErrors')
const autoprefixer = require('gulp-autoprefixer')
const path = require('path')
const cssnano = require('gulp-cssnano')
const gcmq = require('gulp-group-css-media-queries')
const sassGlob = require('gulp-sass-glob')

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

const cssProdTask = () => gulp
  .src(paths.src)
  .pipe(sassGlob())
  .pipe(sass(sassConfig))
  .on('error', handleErrors)
  .pipe(autoprefixer(autoprefixerConfig))
  .pipe(cssnano({ autoprefixer: false }))
  .pipe(gulpif(global.production, gcmq()))
  .pipe(gulp.dest(path.join(global.production ? dist : '', paths.dest)))
  .pipe(gulpif(!global.production, browserSync.stream()))

gulp.task('css-prod', cssProdTask)
module.exports = cssProdTask
