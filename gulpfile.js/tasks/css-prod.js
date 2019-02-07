const config = require('../config')
const checkEnv = require('../utils').checkEnv
const gulp = require('gulp')
const browserSync = require('browser-sync')
const sass = require('gulp-sass')
const handleErrors = require('../lib/handleErrors')
const autoprefixer = require('gulp-autoprefixer')
const path = require('path')
const cssnano = require('gulp-cssnano')
const combineMq = require('gulp-combine-mq')

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
  .pipe(sass(sassConfig))
  .on('error', handleErrors)
  .pipe(autoprefixer(autoprefixerConfig))
  .pipe(cssnano({ autoprefixer: false }))
  .pipe(combineMq({ beautify: false }))
  .pipe(gulp.dest(path.join(global.production ? dist : '', paths.dest)))
  .pipe(checkEnv(browserSync.stream(), false))

gulp.task('css-prod', cssProdTask)
module.exports = cssProdTask
