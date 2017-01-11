var config = require('../config')
var compact = require('lodash/compact')

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
      if ((task === 'svgsprites' || task === 'favicon') && !isProduction) {
        task = false
      }
      return task
    }
  }

  function exists (value) {
    return !!value
  }

  return {
    assetTasks: compact(assetTasks.map(matchFilter).filter(exists)),
    codeTasks: compact(codeTasks.map(matchFilter).filter(exists))
  }
}
