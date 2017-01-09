import config from '../config'
import gulp from 'gulp'
import path from 'path'
import watch from 'gulp-watch'

function watchTask () {
  const watchableTasks = config.groups.watch

  watchableTasks.forEach((taskName) => {
    const task = config.tasks[taskName]
    if (task) {
      const srcPath = path.join(config.root.src, task.src, '**/*.{' + task.extensions.join(',') + '}')
      watch(srcPath, taskName)
    }
  })
}

gulp.task('watch', ['browserSync'], watchTask)
export default watchTask

