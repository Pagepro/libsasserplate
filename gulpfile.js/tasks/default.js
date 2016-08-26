var gulp            = require('gulp');
var gulpSequence    = require('gulp-sequence');
var getEnabledTasks = require('../lib/getEnabledTasks');

var defaultTask = function(cb) {
  var tasks = getEnabledTasks('watch');
  gulpSequence('clean', tasks.assetTasks, tasks.codeTasks, 'custom-classes', 'static', 'watch', cb);
}
require('gulp-stats')(gulp);
gulp.task('default', defaultTask);
module.exports = defaultTask;
