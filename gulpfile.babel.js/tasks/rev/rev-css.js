import config from '../../config'
import gulp from 'gulp'
import path from 'path'
import rev from 'gulp-rev'
import revNapkin from 'gulp-rev-napkin'

function revCssTask () {
  const finalPath = path.join(global.production ? config.root.dist : '', config.root.dest)

  return gulp.src(path.join(finalPath, '/**/*.css'))
    .pipe(rev())
    .pipe(gulp.dest(finalPath))
    .pipe(revNapkin({verbose: false}))
    .pipe(rev.manifest(path.join(finalPath, 'rev-manifest.json'), {merge: true}))
    .pipe(gulp.dest(''))
}
// 4) Rev and compress CSS and JS files (this is done after assets, so that if a
//    referenced asset hash changes, the parent hash will change as well
gulp.task('rev-css', revCssTask)
export default revCssTask
