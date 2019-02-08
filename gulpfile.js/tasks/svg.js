const path = require('path')
const gulp = require('gulp')
const svgmin = require('gulp-svgmin')
const config = require('../config')

const {
  root: rootConfig,
  tasks: {
    svg: svgConfig
  }
} = config

const svgMinOptions = global.production ? {} : { js2svg: { pretty: true } }

const paths = {
  src: path.join(rootConfig.src, svgConfig.src),
  dest: path.join(rootConfig.dest, svgConfig.dest)
}

const svgScript = () => gulp
  .src('**/*.' + svgConfig.extensions, { cwd: paths.src })
  .pipe(svgmin(svgMinOptions))
  .pipe(gulp.dest(paths.dest))

gulp.task('clean-svg', svgScript)
module.exports = svgScript
