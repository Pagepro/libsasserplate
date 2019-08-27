var config = require('../config')

// Grouped by what can run in parallel
var assetTasks = ['images', 'fonts', 'svgsprites', 'favicon']
var codeTasks = ['html', 'css', 'js']

module.exports = function (env) {
  var isProduction = env === 'production'
  function matchFilter (task) {
    if (config.tasks[task]) {
      if (task === 'js') {
        task = isProduction ? 'webpack:production' : false
      }
      if ((task === 'favicon') && !isProduction) {
        task = false
      }
      return task
    }
  }

  function exists (value) {
    return !!value
  }

  return {
    assetTasks: assetTasks.map(matchFilter).filter(exists),
    codeTasks: codeTasks.map(matchFilter).filter(exists)
  }
}
