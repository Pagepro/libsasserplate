const gulpif = require('gulp-if')

const checkEnv = (task, production = true)  => gulpif(production * global.production, task)

module.exports = {
  checkEnv
}
