const fs = require('fs')
const config = require('../config')
const gulp = require('gulp')
const path = require('path')

const faviconConfig = {
  name: 'favicon.png',
  src: './src/img'
}

const paths = {
  src: path.join(faviconConfig.src, faviconConfig.name),
  dest: path.join(config.root.dist, '.')
}

const faviconExists = () => gulp
  .src(paths.src)
  .pipe(gulp.dest(paths.dest))

const noFaviconFound = () => {
  console.log('\x1b[47m\x1b[31m%s\x1b[0m', ' -------------------- ')
  console.log('\x1b[47m\x1b[31m%s\x1b[0m', ' favicon not found ')
  console.log('\x1b[47m\x1b[31m%s\x1b[0m', ' -------------------- ')
}

const faviconTask = fs.existsSync(paths.src) ? faviconExists : noFaviconFound

gulp.task('favicon', faviconTask)
module.exports = faviconTask
