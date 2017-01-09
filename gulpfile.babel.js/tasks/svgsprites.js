import config from '../config'
import gulp from 'gulp'
import svgSprite from 'gulp-svg-sprite'
import path from 'path'
const configSvg = {
  mode: {
    symbol: true,
    sprite: 'sprite.<mode>.svg'
  }
}
const svgConfig = config.tasks.svgsprites
const paths = {
  src: path.join(config.root.src, svgConfig.src),
  dest: path.join(config.root.dest, svgConfig.dest)
}
gulp.task('svgsprites', function () {
  console.log('global.production: ' + global.production)
  return gulp.src('**/*.{' + svgConfig.extensions + '}', {cwd: paths.src})
        .pipe(svgSprite(configSvg))
        .pipe(gulp.dest(path.join(global.production ? config.root.dist : '', paths.dest)))
})
