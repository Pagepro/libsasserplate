import config from '../config'
import compact from 'lodash/compact'

// Grouped by what can run in parallel
const assetTasks = config.groups.asset
const codeTasks = config.groups.code
let isProduction

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

function getTasks (env) {
  isProduction = env === 'production'
  return {
    assetTasks: compact(assetTasks.map(matchFilter).filter(exists)),
    codeTasks: compact(codeTasks.map(matchFilter).filter(exists))
  }
}

export default getTasks
