import gulp from 'gulp'
import gulpSequence from 'gulp-sequence'
import getEnabledTasks from '../lib/getEnabledTasks'

function defaultTask (cb) {
  const tasks = getEnabledTasks('watch')
  gulpSequence(tasks.assetTasks, tasks.codeTasks, 'static', 'watch', cb)
}

gulp.task('default', defaultTask)

export default defaultTask
