const config = require('../config')
const gulpif = require('gulp-if')
const browserSync = require('browser-sync')
const data = require('gulp-data')
const gulp = require('gulp')
const handleErrors = require('../lib/handleErrors')
const htmlmin = require('gulp-htmlmin')
const path = require('path')
const render = require('gulp-nunjucks-render')
const fs = require('fs')
const replace = require('gulp-replace')

const {
  tasks: {
    html: htmlConfig
  }
} = config

const exclude = path.normalize('!**/{' + htmlConfig.excludeFolders.join(',') + '}/**')

const paths = {
  src: [path.join(config.root.src, htmlConfig.src, '/*.{' + htmlConfig.extensions + '}'), exclude],
  dest: path.join('./')
}

const getData = () => {
  const dataPath = path.resolve(config.root.src, htmlConfig.src, htmlConfig.dataFileDirectory, htmlConfig.dataFile)
  return JSON.parse(fs.readFileSync(dataPath, 'utf8'))
}

const htmlTask = () => gulp
  .src(paths.src)
  .pipe(data(getData))
  .on('error', handleErrors)
  .pipe(render({
    path: [path.join(config.root.src, htmlConfig.src)],
    envOptions: { watch: false }
  }))
  .on('error', handleErrors)
  .pipe(gulpif(global.production, replace(' <br', '&nbsp;<br')))
  .pipe(gulpif(global.production, replace('src="src/', 'src="static/')))
  .pipe(gulpif(global.production, htmlmin(htmlConfig.htmlmin)))
  .pipe(gulp.dest(path.join(global.production ? config.root.dist : '', paths.dest)))
  .pipe(gulpif(!global.production, browserSync.stream()))

gulp.task('html', htmlTask)
module.exports = htmlTask
