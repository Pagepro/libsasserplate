const gulp = require('gulp')
const del = require('del')
const config = require('../config')

const {
  root: {
    dist,
    dest
  }
} = config

const cleanTask = cb => {
  const path = global.production ? dist : dest
  del([path]).then(() => {
    cb()
  })
}

gulp.task('clean', cleanTask)
module.exports = cleanTask
