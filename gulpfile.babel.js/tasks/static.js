import config from '../config'
import changed from 'gulp-changed'
import gulp from 'gulp'
import path from 'path'

const configStatic = config.tasks.static
const paths = {
  src: [
    path.join(config.root.src, configStatic.src, '/**'),
    path.join('!' + config.root.src, configStatic.src, '/README.md')
  ],
  dest: path.join(config.root.dest, configStatic.dest)
}

function staticTask () {
  return gulp.src(paths.src)
    .pipe(changed(paths.dest)) // Ignore unchanged files
    .pipe(gulp.dest(path.join(global.production ? config.root.dist : '', paths.dest)))
}

gulp.task('static', staticTask)
export default staticTask
