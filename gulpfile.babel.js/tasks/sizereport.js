import config from '../config'
import gulp from 'gulp'
import sizereport from 'gulp-sizereport'

function sizereportTask () {
  return gulp.src([(global.production ? config.root.dist : config.root.dest) + '/**/*', '*!rev-manifest.json'])
    .pipe(sizereport({
      gzip: true
    }))
}

gulp.task('sizeReport', sizereportTask)
export default sizereportTask
