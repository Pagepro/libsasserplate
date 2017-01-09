import config from '../config'
import gulp from 'gulp'
import gulpSequence from 'gulp-sequence'
import getEnabledTasks from '../lib/getEnabledTasks'

function productionTask (cb) {
  global.production = true
  const tasks = getEnabledTasks('production')
  gulpSequence('clean', tasks.assetTasks, tasks.codeTasks, 'critical', config.tasks.production.rev ? 'rev' : false, 'sizeReport', cb)
}

gulp.task('production', productionTask)
export default productionTask
