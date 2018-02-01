var fs = require('fs')
var config = require('../config')
var gulp = require('gulp')
var path = require('path')

var paths = {
  src: path.join(config.tasks.favicon.src, config.tasks.favicon.name),
  dest: path.join(config.root.dist, config.tasks.favicon.dest)
}
if (!fs.existsSync(paths.src)) {
    gulp.task('favicon', function () {
        console.log('\x1b[47m\x1b[31m%s\x1b[0m', ' -------------------- ')
        console.log('\x1b[47m\x1b[31m%s\x1b[0m', ' favicon didn\'t found ')
        console.log('\x1b[47m\x1b[31m%s\x1b[0m', ' -------------------- ')
    })
    return
}

var faviconTask = function () {
  return gulp.src(paths.src)
        .pipe(gulp.dest(paths.dest))
}

gulp.task('favicon', faviconTask)
module.exports = faviconTask
