const config = require('../config')
const checkEnv = require('../utils').checkEnv
const gulp = require('gulp')
const browserSync = require('browser-sync')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const handleErrors = require('../lib/handleErrors')
const autoprefixer = require('gulp-autoprefixer')
const path = require('path')
const cssnano = require('gulp-cssnano')
const combineMq = require('gulp-combine-mq')
const encoder = require('../lib/encoder')

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

const cssTask = () => gulp
  .src(paths.src)
  .pipe(checkEnv(sourcemaps.init(), false))
  .pipe(sass(sassConfig))
  .on('error', handleErrors)
  .pipe(autoprefixer(autoprefixerConfig))
  .pipe(checkEnv(cssnano({ autoprefixer: false, reduceIdents: { encoder } })))
  .pipe(checkEnv(sourcemaps.write(), false))
  .pipe(combineMq({ beautify: false }))
  .pipe(gulp.dest(path.join(global.production ? dist : '', paths.dest)))
  .pipe(checkEnv(browserSync.stream(), false))

gulp.task('css', cssTask)
module.exports = cssTask
