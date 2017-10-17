var config       = require('../config')
if(!config.tasks.css) return

var gulp         = require('gulp');
var gulpif       = require('gulp-if');
var browserSync  = require('browser-sync');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var handleErrors = require('../lib/handleErrors');
var autoprefixer = require('gulp-autoprefixer');
var path         = require('path');
var cssnano      = require('gulp-cssnano');
var combineMq    = require('gulp-combine-mq');
var replace      = require('gulp-replace')
var encoder      = require('../lib/encoder')

var paths = {
  src: path.join(config.root.src, config.tasks.css.src, '/**/main.{' + config.tasks.css.extensions + '}'),
  dest: path.join(config.root.dest, config.tasks.css.dest)
}

var cssTask = function () {
  return gulp.src(paths.src)
    .pipe(gulpif(!global.production, sourcemaps.init()))
    .pipe(sass(config.tasks.css.sass))
    .on('error', handleErrors)
    .pipe(autoprefixer(config.tasks.css.autoprefixer))
    .pipe(gulpif(global.production, cssnano({autoprefixer: false, reduceIdents: {encoder}})))
    .pipe(gulpif(!global.production, sourcemaps.write()))
    .pipe(combineMq({
        beautify: false
    }))
    .pipe(gulp.dest(path.join(global.production ? config.root.dist : '', paths.dest)))
    .pipe(gulpif(!global.production, browserSync.stream()))
}

gulp.task('css', cssTask);
module.exports = cssTask;
