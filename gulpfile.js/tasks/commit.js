const gulp = require('gulp')
const gulpSequence = require('gulp-sequence')
const gulpStats = require('gulp-stats')

const commitTask = callback => gulpSequence('webpack-compile', callback)

gulpStats(gulp)

gulp.task('commit', commitTask)
module.exports = commitTask
