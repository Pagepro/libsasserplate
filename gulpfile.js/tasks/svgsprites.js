var config = require('../config')
var gulp = require('gulp')
var svgSprite = require('gulp-svg-sprite')
var path = require('path')
var configSvg = {
  mode: {
    symbol: true,
    sprite: 'sprite.<mode>.svg'
  }
}
var paths = {
  src: path.join(config.root.src, config.tasks.svgsprites.src),
  dest: path.join(config.root.dest, config.tasks.svgsprites.dest)
}
gulp.task('svgsprites', function () {
  console.log('global.production: ' + global.production)
  return gulp.src('**/*.{' + config.tasks.svgsprites.extensions + '}', {cwd: paths.src})
        .pipe(svgSprite(configSvg))
        .pipe(gulp.dest(path.join(global.production ? config.root.dist : '', paths.dest)))
})
