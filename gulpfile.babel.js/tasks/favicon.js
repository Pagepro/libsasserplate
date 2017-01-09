import fs from 'fs'
import config from '../config'
import gulp from 'gulp'
import path from 'path'

const configFavicon = config.tasks.favicon
const paths = {
  src: path.join(configFavicon.src, configFavicon.name),
  dest: path.join(config.root.dist, configFavicon.dest)
}

function faviconTask () {
  return gulp.src(paths.src)
        .pipe(gulp.dest(paths.dest))
}

if (!fs.existsSync(paths.src)) {
  gulp.task('favicon', () => {
    console.log('\x1b[47m\x1b[31m%s\x1b[0m', ' -------------------- ')
    console.log('\x1b[47m\x1b[31m%s\x1b[0m', ' favicon didn\'t found ')
    console.log('\x1b[47m\x1b[31m%s\x1b[0m', ' -------------------- ')
  })
} else {
  gulp.task('favicon', faviconTask)
}

module.exports = faviconTask
