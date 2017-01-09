import config from '../../config'
import gulp from 'gulp'
import path from 'path'
import rev from 'gulp-rev'
import revNapkin from 'gulp-rev-napkin'

function revFaviconTask () {
  var finalPath = path.join(global.production ? config.root.dist : '', config.root.dest)

  return gulp.src(path.join(config.root.dist, '/**.ico'))
    .pipe(rev())
    .pipe(gulp.dest(config.root.dist))
    .pipe(revNapkin({verbose: false}))
    .pipe(rev.manifest(path.join(finalPath, 'rev-manifest.json'), {merge: true}))
    .pipe(gulp.dest(''))
}
// 2) Update asset references with reved filenames in compiled css + js
gulp.task('rev-favicon', revFaviconTask)
export default revFaviconTask
