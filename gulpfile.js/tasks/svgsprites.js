const config = require('../config')
const gulp = require('gulp')
const svgSprite = require('gulp-svg-sprite')
const path = require('path')
const configSvg = {
  mode: {
    symbol: true,
    sprite: 'sprite.<mode>.svg'
  }
}
const paths = {
  src: path.join(config.root.src, config.tasks.svgsprites.src),
  dest: path.join(config.root.dest, config.tasks.svgsprites.dest)
}
const svgSpritesTask = () => gulp
  .src('**/*.' + config.tasks.svgsprites.extensions, { cwd: paths.src })
  .pipe(svgSprite(configSvg))
  .pipe(gulp.dest(path.join(global.production ? config.root.dist : '', paths.dest)))

gulp.task('svgsprites', svgSpritesTask)
