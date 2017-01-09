import config from '../config'

import gulp from 'gulp'
import gulpif from 'gulp-if'
import browserSync from 'browser-sync'
import sass from 'gulp-sass'
import sourcemaps from 'gulp-sourcemaps'
import handleErrors from '../lib/handleErrors'
import autoprefixer from 'gulp-autoprefixer'
import path from 'path'
import cssnano from 'gulp-cssnano'
import combineMq from 'gulp-combine-mq'

const paths = {
  src: path.join(config.root.src, config.tasks.css.src, '/**/custom-classes.scss'),
  dest: path.join(config.root.dest, config.tasks.css.dest)
}

function customClassesTask () {
  if (!config.tasks.css) return

  return gulp.src(paths.src)
    .pipe(gulpif(!global.production, sourcemaps.init()))
    .pipe(sass(config.tasks.css.sass))
    .on('error', handleErrors)
    .pipe(autoprefixer(config.tasks.css.autoprefixer))
    .pipe(gulpif(global.production, cssnano({autoprefixer: false})))
    .pipe(gulpif(!global.production, sourcemaps.write()))
    .pipe(combineMq({
      beautify: false
    }))
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream())
}

gulp.task('customClasses', customClassesTask)
export default customClassesTask
