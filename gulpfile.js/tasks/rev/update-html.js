var gulp       = require('gulp')
var config     = require('../../config')
var revReplace = require('gulp-rev-replace')
var path       = require('path')

// 5) Update asset references in HTML
gulp.task('update-html', function(){
  var manifest = gulp.src(path.join(config.root.dest, "/rev-manifest.json"))
  console.log('html output' + path.join(config.root.dest, config.tasks.html.dest));
  return gulp.src(['./*.html'])
    .pipe(revReplace({manifest: manifest}))
    .pipe(gulp.dest('./'))
})
