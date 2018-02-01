var config     = require('../../config')
var gulp       = require('gulp')
var path       = require('path')
var revReplace = require('gulp-rev-replace')

// 2) Update asset references with reved filenames in compiled css + js
gulp.task('rev-update-references', function(){
  var finalPath = path.join(global.production ? config.root.dist : '', config.root.dest);
  var manifest = gulp.src(path.join(finalPath, "rev-manifest.json"))

  return gulp.src(path.join(finalPath, '/**/**.{css,js}'))
    .pipe(revReplace({manifest: manifest}))
    .pipe(gulp.dest(finalPath))
})
