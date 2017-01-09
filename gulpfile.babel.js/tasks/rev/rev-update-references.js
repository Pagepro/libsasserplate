import config from '../../config'
import gulp from 'gulp'
import path from 'path'
import revReplace from 'gulp-rev-replace'

function revUpdateReferencesTask () {
  const finalPath = path.join(global.production ? config.root.dist : '', config.root.dest)
  const manifest = gulp.src(path.join(finalPath, 'rev-manifest.json'))

  return gulp.src(path.join(finalPath, '/**/**.{css,js}'))
    .pipe(revReplace({manifest: manifest}))
    .pipe(gulp.dest(finalPath))
}
// 2) Update asset references with reved filenames in compiled css + js
gulp.task('rev-update-references', revUpdateReferencesTask)
export default revUpdateReferencesTask
