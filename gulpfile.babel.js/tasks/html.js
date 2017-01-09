import config from '../config'

import browserSync from 'browser-sync'
import data from 'gulp-data'
import gulp from 'gulp'
import gulpif from 'gulp-if'
import handleErrors from '../lib/handleErrors'
import htmlmin from 'gulp-htmlmin'
import path from 'path'
import render from 'gulp-nunjucks-render'
import fs from 'fs'
import replace from 'gulp-replace'

const configHtml = config.tasks.html
const exclude = path.normalize('!**/{' + configHtml.excludeFolders.join(',') + '}/**')

const paths = {
  src: [path.join(config.root.src, configHtml.src, '/*.{' + configHtml.extensions + '}'), exclude],
  dest: path.join('./')
}

function getData (file) {
  var dataPath = path.resolve(config.root.src, configHtml.src, configHtml.dataFile)
  return JSON.parse(fs.readFileSync(dataPath, 'utf8'))
}

function htmlTask () {
  if (!configHtml) return

  return gulp.src(paths.src)
    .pipe(data(getData))
    .on('error', handleErrors)
    .pipe(render({
      path: [path.join(config.root.src, configHtml.src)],
      envOptions: {
        watch: false
      }
    }))
    .on('error', handleErrors)
    .pipe(gulpif(global.production, replace(' <br', '&nbsp;<br')))
    .pipe(gulpif(global.production, replace('<link rel="stylesheet" href="./static/css/custom-classes.css">', '')))
    .pipe(gulpif(global.production, htmlmin(configHtml.htmlmin)))
    .pipe(gulp.dest(path.join(global.production ? config.root.dist : '', paths.dest)))
    .pipe(gulpif(!global.production, browserSync.stream()))
}

gulp.task('html', htmlTask)

export default htmlTask
