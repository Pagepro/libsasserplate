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

var paths = {
  src: path.join(config.root.src, config.tasks.css.src, '/**/grid.scss'),
  dest: path.join(config.root.dest, config.tasks.css.dest)
}

var gridTaskProd = function () {
  return gulp.src(paths.src)
    .pipe(sass(config.tasks.css.sass))
    .on('error', handleErrors)
    .pipe(autoprefixer(config.tasks.css.autoprefixer))
    .pipe(gulpif(true, cssnano({autoprefixer: false})))
    .pipe(combineMq({
        beautify: false
    }))
    .pipe(gulp.dest(paths.dest))
}

gulp.task('grid-prod', gridTaskProd);
module.exports = gridTaskProd;
