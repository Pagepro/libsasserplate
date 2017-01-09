import config from '../../config'
import gulp from 'gulp'
import path from 'path'
import rev from 'gulp-rev'
import revNapkin from 'gulp-rev-napkin'

function revAssetsTask () {
  const finalPath = path.join(global.production ? config.root.dist : '', config.root.dest)
  // Ignore files that may reference assets. We'll rev them next.
  const ignoreThese = '!' + path.join(finalPath, '/**/*+(css|js|json|html)')

  return gulp.src([path.join(finalPath, '/**/*'), ignoreThese])
    .pipe(rev())
    .pipe(gulp.dest(finalPath))
    .pipe(revNapkin({verbose: false}))
    .pipe(rev.manifest(path.join(finalPath, 'rev-manifest.json'), {merge: true}))
    .pipe(gulp.dest(''))
}
// 1) Add md5 hashes to assets referenced by CSS and JS files
gulp.task('rev-assets', revAssetsTask)

export default revAssetsTask
