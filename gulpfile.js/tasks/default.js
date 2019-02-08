const gulp = require('gulp')
const gulpSequence = require('gulp-sequence')
const getEnabledTasks = require('../lib/getEnabledTasks')
const gulpStats = require('gulp-stats')

const defaultTask = cb => {
  const {
    assetTasks,
    codeTasks
  } = getEnabledTasks('watch')
  gulpSequence(assetTasks, codeTasks, 'static', 'watch', cb)
}

gulpStats(gulp)

gulp.task('default', defaultTask)
module.exports = defaultTask
