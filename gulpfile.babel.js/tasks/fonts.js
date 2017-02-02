import config from '../config'

import browserSync from 'browser-sync'
import changed from 'gulp-changed'
import gulp from 'gulp'
import path from 'path'
import gulpif from 'gulp-if'

const configFonts = config.tasks.fonts
const paths = {
  src: path.join(config.root.src, configFonts.src, '/**/*.{' + configFonts.extensions + '}'),
  dest: path.join(config.root.dest, configFonts.dest)
}

function fontsTask () {
  if (!configFonts) return

  return gulp.src([paths.src, '*!README.md'])
    .pipe(gulpif(!global.production, changed(paths.dest))) // Ignore unchanged files
    .pipe(gulp.dest(path.join(global.production ? config.root.dist : '', paths.dest)))
    .pipe(gulpif(!global.production, browserSync.stream()))
}

gulp.task('fonts', fontsTask)
export default fontsTask
