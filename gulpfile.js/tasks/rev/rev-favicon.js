var config = require('../../config')
var gulp = require('gulp')
var path = require('path')
var rev = require('gulp-rev')
var revNapkin = require('gulp-rev-napkin')

// 2) Update asset references with reved filenames in compiled css + js
gulp.task('rev-favicon', function () {
  var finalPath = path.join(global.production ? config.root.dist : '', config.root.dest)

  return gulp.src(path.join(config.root.dist, '/**.ico'))
    .pipe(rev())
    .pipe(gulp.dest(config.root.dist))
    .pipe(revNapkin({verbose: false}))
    .pipe(rev.manifest(path.join(finalPath, 'rev-manifest.json'), {merge: true}))
    .pipe(gulp.dest(''))
})
