var config = require('../config');
if(!config.tasks.js) return;

var path            = require('path');
var pathToUrl       = require('./pathToUrl');
var webpack         = require('webpack');
var webpackManifest = require('./webpackManifest');
const readBabelrcUp = require('read-babelrc-up')

module.exports = function(env) {
  var jsSrc = path.resolve(config.root.src, config.tasks.js.src)
  var jsDest = path.resolve(path.join(env === 'production' ? config.root.dist : '', config.tasks.js.dest))

  var publicPath = pathToUrl(config.tasks.js.dest, '/')
  var extensions = config.tasks.js.extensions.map(function(extension) {
    return '.' + extension
  })

  var rev = config.tasks.production.rev && env === 'production'
  var filenamePattern = rev ? '[name]-[hash].js' : '[name].js'
  
  var webpackConfig = {
    context: jsSrc,
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
      })
    ],
    resolve: {
      extensions
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: readBabelrcUp().then(result => result.babel)
        }
      ]
    }
  }

  if(env === 'development') {
    webpackConfig = {
      ...webpackConfig,
      devtool: 'inline-source-map',
      mode: 'development'
    }

    // Create new entries object with webpack-hot-middleware added
    for (var key in config.tasks.js.entries) {
      var entry = config.tasks.js.entries[key]
      config.tasks.js.entries[key] = ['webpack-hot-middleware/client?&reload=true'].concat(entry)
    }

    webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin())
  }

  if(env !== 'test') {
    // Karma doesn't need entry points or output settings
    webpackConfig.entry = config.tasks.js.entries

    webpackConfig.output= {
      path: path.normalize(jsDest),
      filename: filenamePattern,
      publicPath: publicPath
    }

    if(config.tasks.js.extractSharedJs) {
      // Factor out common dependencies into a shared.js
      webpackConfig.plugins.push(
        new webpack.optimize.CommonsChunkPlugin({
          name: 'shared',
          filename: filenamePattern,
        })
      )
    }
  }
  if(env === 'production' || env === 'compile') {
    if(rev) {
      webpackConfig.plugins.push(new webpackManifest(publicPath, path.join(config.root.dist, config.root.dest)))
    }

    webpackConfig = {
      ...webpackConfig,
      mode: 'production'
    }
  }

  return webpackConfig
}
