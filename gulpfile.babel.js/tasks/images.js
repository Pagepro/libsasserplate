import config from '../config'

import browserSync from 'browser-sync'
import changed from 'gulp-changed'
import gulp from 'gulp'
import gulpif from 'gulp-if'
import imagemin from 'gulp-imagemin'
import path from 'path'

const configImages = config.tasks.images
const paths = {
  src: path.join(config.root.src, configImages.src, '/**/*.{' + configImages.extensions + '}'),
  dest: path.join(config.root.dest, configImages.dest)
}


function imagesTask (env) {
  if (!configImages) return

  return gulp.src([paths.src, '*!README.md'])
    .pipe(gulpif(!global.production, changed(paths.dest))) // Ignore unchanged files
    .pipe(gulpif(global.production, imagemin())) // minify if it's production task
    .pipe(gulp.dest(path.join(global.production ? config.root.dist : '', paths.dest)))
    .pipe(gulpif(!global.production, browserSync.stream()))
}

gulp.task('images', imagesTask)
export default imagesTask
