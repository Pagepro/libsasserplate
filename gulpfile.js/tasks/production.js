const config = require('../config')
const gulp = require('gulp')
const gulpSequence = require('gulp-sequence')
const getEnabledTasks = require('../lib/getEnabledTasks')

const productionTask = callback => {
  global.production = true
  const tasks = getEnabledTasks('production')
  gulpSequence('clean',
    tasks.assetTasks,
    tasks.codeTasks,
    'critical',
    config.tasks.production.rev ? 'rev' : false,
    'size-report',
    callback)
}

gulp.task('production', productionTask)
module.exports = productionTask
