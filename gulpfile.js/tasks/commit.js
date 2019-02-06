const gulp = require('gulp')
const gulpSequence = require('gulp-sequence')

const commitTask = cb => {
  gulpSequence('webpack-compile', cb)
}
require('gulp-stats')(gulp)

gulp.task('commit', commitTask)
module.exports = commitTask
