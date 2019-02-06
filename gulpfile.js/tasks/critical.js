const gulp = require('gulp')
const config = require('../config')
const critical = require('critical').stream
const path = require('path')

const {
  root: {
    dist
  },
  tasks: {
    critical: forcedConfig
  }
} = config

const criticalConfig = {
  src: '*.html',
  width: 1920,
  height: 1080,
  inline: true,
  base: dist,
  minify: true,
  extract: false,
  ignore: ['font-face'],
  ...forcedConfig
}

const srcPath = path.join(dist, criticalConfig.src)

const criticalTask = () => gulp
  .src(srcPath)
  .pipe(critical(criticalConfig))
  .pipe(gulp.dest(dist))

gulp.task('critical', criticalTask)

module.exports = criticalTask
