import gulp from 'gulp'
import del from 'del'
import config from '../config'

function cleanTask (cb) {
  const path = global.production ? config.root.dist : config.root.dest
  del([path]).then(() => {
    cb()
  })
}

gulp.task('clean', cleanTask)

export default cleanTask
