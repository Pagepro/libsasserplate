var config = require('../config')
var gulp = require('gulp')
var svgSprite = require('gulp-svg-sprite')
var configSvg = {
  mode: {
    symbol: true,
    sprite: 'sprite.<mode>.svg'
  }
}

gulp.task('svgsprites', function () {
  return gulp.src('**/*.svg', {cwd: config.root.src + '/svg'})
        .pipe(svgSprite(configSvg))
        .pipe(gulp.dest('static'))
})
