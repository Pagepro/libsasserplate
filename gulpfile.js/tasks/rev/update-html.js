var gulp       = require('gulp')
var config     = require('../../config')
var revReplace = require('gulp-rev-replace')
var path       = require('path')

// 5) Update asset references in HTML
gulp.task('update-html', function(){
  var finalPath = path.join(global.production ? config.root.dist : '', config.root.dest)
  var manifest = gulp.src(path.join(finalPath, "rev-manifest.json"))
  var srcPath = global.production ? path.join('.', config.root.dist, '*.html') : './*.html'
  var destPath = global.production ? path.join(config.root.dist) : './'

  return gulp.src(srcPath)
    .pipe(revReplace({manifest: manifest}))
    .pipe(gulp.dest(destPath))
})
