var log = require('fancy-log')
var PluginError = require('plugin-error')
var chalk = require('chalk')
var prettifyTime = require('./prettifyTime')
var handleErrors = require('./handleErrors')

module.exports = function (err, stats) {
  if (err) throw new PluginError('webpack', err)

  if (stats.compilation.errors.length > 0) {
    stats.compilation.errors.forEach(function (error) {
      handleErrors(error)
    })
  } else {
    var compileTime = prettifyTime(stats.endTime - stats.startTime)
    log(chalk.green(stats))
    log('Compiled with', chalk.cyan('webpack'), 'in', chalk.magenta(compileTime))
  }
}
