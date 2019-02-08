const config = require('../config')
const gulp = require('gulp')
const sizereport = require('gulp-sizereport')

const source = [(global.production ? config.root.dist : config.root.dest) + '/**/*', '*!rev-manifest.json']
const sizeReport = () => gulp
  .src(source)
  .pipe(sizereport({ gzip: true }))

gulp.task('size-report', sizeReport)

module.exports = sizeReport
