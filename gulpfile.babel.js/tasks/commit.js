import gulp from 'gulp'
import gulpSequence from 'gulp-sequence'
import gulpStats from 'gulp-stats'

function commitTask (cb) {
  gulpSequence('webpack-compile', cb)
}

gulpStats(gulp)


gulp.task('commit', commitTask)
export default commitTask
