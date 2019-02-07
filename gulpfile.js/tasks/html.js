const config = require('../config')
const checkEnv = require('../utils').checkEnv
const browserSync = require('browser-sync')
const data = require('gulp-data')
const gulp = require('gulp')
const handleErrors = require('../lib/handleErrors')
const htmlmin = require('gulp-htmlmin')
const path = require('path')
const render = require('gulp-nunjucks-render')
const fs = require('fs')
const replace = require('gulp-replace')

const htmlConfig = {
  src: 'templates',
  dest: './',
  dataFile: 'data/global.json',
  htmlmin: {
    collapseWhitespace: true
  },
  extensions: ['html', 'json', 'tpl'],
  excludeFolders: ['layouts', 'partials', 'macros', 'data', 'components']
}

const exclude = path.normalize('!**/{' + htmlConfig.excludeFolders.join(',') + '}/**')

const paths = {
  src: [path.join(config.root.src, htmlConfig.src, '/*.{' + htmlConfig.extensions + '}'), exclude],
  dest: path.join('./')
}

const getData = () => {
  const dataPath = path.resolve(config.root.src, htmlConfig.src, htmlConfig.dataFile)
  return JSON.parse(fs.readFileSync(dataPath, 'utf8'))
}

const htmlTask = () => {
  return gulp.src(paths.src)
    .pipe(data(getData))
    .on('error', handleErrors)
    .pipe(render({
      path: [path.join(config.root.src, htmlConfig.src)],
      envOptions: {
        watch: false
      }
    }))
    .on('error', handleErrors)
    .pipe(checkEnv(replace(' <br', '&nbsp;<br')))
    .pipe(checkEnv(htmlmin(htmlConfig.htmlmin)))
    .pipe(gulp.dest(path.join(global.production ? config.root.dist : '', paths.dest)))
    .pipe(checkEnv(browserSync.stream(), false))
}

gulp.task('html', htmlTask)
module.exports = htmlTask
