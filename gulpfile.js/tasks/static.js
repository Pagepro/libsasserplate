const config = require('../config')
const changed = require('gulp-changed')
const gulp = require('gulp')
const path = require('path')

const paths = {
  src: [
    path.join(config.root.src, config.tasks.static.src, '/**'),
    path.join('!' + config.root.src, config.tasks.static.src, '/README.md')
  ],
  dest: path.join(global.production ? config.root.dist : '', config.root.dest, config.tasks.static.dest)
}

const staticTask = () => gulp
  .src(paths.src)
  .pipe(changed(paths.dest)) // Ignore unchanged files
  .pipe(gulp.dest(paths.dest))

gulp.task('static', staticTask)
module.exports = staticTask
