var config    = require('../../config')
var gulp      = require('gulp')
var path      = require('path')
var rev       = require('gulp-rev')
var revNapkin = require('gulp-rev-napkin');

// 1) Add md5 hashes to assets referenced by CSS and JS files
gulp.task('rev-assets', function() {
  var finalPath = path.join(global.production ? config.root.dist : '', config.root.dest);
  // Ignore files that may reference assets. We'll rev them next.
  var ignoreThese = '!' + path.join(finalPath, '/**/*+(css|js|json|html)')

  return gulp.src([path.join(finalPath, '/**/*'), ignoreThese])
    .pipe(rev())
    .pipe(gulp.dest(finalPath))
    .pipe(revNapkin({verbose: false}))
    .pipe(rev.manifest(path.join(finalPath, 'rev-manifest.json'), {merge: true}))
    .pipe(gulp.dest(''))
})
