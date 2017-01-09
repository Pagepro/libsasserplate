import gulp from 'gulp'
import config from '../config'
import { stream as critical } from 'critical'
import path from 'path'

const configCritical = config.tasks.critical
const paths = {
  src: path.join(config.root.dist, configCritical.src),
  dest: config.root.dist
}

function criticalTask (cb) {
  return gulp.src(paths.src)
    .pipe(critical({
      inline: true,
      base: paths.dest,
      height: configCritical.height,
      width: configCritical.width,
      minify: true,
      extract: false,
      ignore: ['font-face']
    }))
    .pipe(gulp.dest(paths.dest))
}


gulp.task('critical', criticalTask)
