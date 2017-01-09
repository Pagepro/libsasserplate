import gulp from 'gulp'
import config from '../../config'
import revReplace from 'gulp-rev-replace'
import path from 'path'

function updateHtmlTask () {
  const finalPath = path.join(global.production ? config.root.dist : '', config.root.dest)
  const manifest = gulp.src(path.join(finalPath, 'rev-manifest.json'))
  const srcPath = global.production ? path.join('.', config.root.dist, '*.html') : './*.html'
  const destPath = global.production ? path.join(config.root.dist) : './'

  return gulp.src(srcPath)
    .pipe(revReplace({manifest: manifest}))
    .pipe(gulp.dest(destPath))
}
// 5) Update asset references in HTML
gulp.task('update-html', updateHtmlTask)
export default updateHtmlTask
