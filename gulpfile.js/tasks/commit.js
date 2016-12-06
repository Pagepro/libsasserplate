var gulp            = require('gulp');
var gulpSequence    = require('gulp-sequence');
var getEnabledTasks = require('../lib/getEnabledTasks');

var commitTask = function(cb) {
  gulpSequence('webpack-compile', cb);
}
require('gulp-stats')(gulp);

gulp.task('commit', commitTask);
module.exports = commitTask;
