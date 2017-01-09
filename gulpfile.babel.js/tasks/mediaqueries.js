import config from '../config'
import gulp from 'gulp'
import combineMq from 'gulp-combine-mq'
import path from 'path'

const paths = {
  src: path.join(config.root.dest, config.tasks.css.src, 'main.css'),
  dest: path.join(config.root.dest, config.tasks.css.dest)
}

function mediaqueriesTask () {
  return gulp.src(paths.src)
    .pipe(combineMq({
      beautify: false
    }))
    .pipe(gulp.dest(paths.dest))
}

gulp.task('mediaqueries', mediaqueriesTask)
export default mediaqueriesTask
