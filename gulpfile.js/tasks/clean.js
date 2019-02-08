const gulp = require('gulp')
const del = require('del')
const config = require('../config')

const {
  root: {
    dist,
    dest
  }
} = config

const cleanTask = callback => {
  const path = global.production ? dist : dest
  del([path]).then(() => {
    callback()
  })
}

gulp.task('clean', cleanTask)
module.exports = cleanTask
