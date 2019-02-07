const config = require('../config');
const path = require('path')
const pathToUrl = require('./pathToUrl')
const webpack = require('webpack')
const WebpackManifest = require('./webpackManifest')
const readBabelrcUp = require('read-babelrc-up')

module.exports = env => {
  const {
    tasks,
    root
  } = config

  const directories = {
    src: path.resolve(root.src, tasks.js.src),
    dest: path.resolve(path.join(env === 'production' ? root.dist : '', tasks.js.dest))
  }

  const publicPath = pathToUrl(tasks.js.dest, '/')
  const extensions = tasks.js.extensions.map(extension => '.'.concat(extension))

  const rev = tasks.production.rev && env === 'production'
  const filenamePattern = rev ? '[name]-[hash].js' : '[name].js'

  let webpackConfig = {
    context: directories.src,
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
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

  if (env === 'development') {
    webpackConfig = {
      ...webpackConfig,
      devtool: 'inline-source-map',
      mode: 'development'
    }

    // Create new entries object with webpack-hot-middleware added
    Object.keys(tasks.js.entries).forEach(task => {
      const entry = tasks.js.entries[task]
      tasks.js.entries[task] = ['webpack-hot-middleware/client?&reload=true'].concat(entry)
    })

    webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin())
  }

  if (env !== 'test') {
    webpackConfig.entry = tasks.js.entries
    webpackConfig.output = {
      path: path.normalize(directories.dest),
      filename: 'app.js',
      publicPath: publicPath
    }

    if (tasks.js.extractSharedJs) {
      // Factor out common dependencies into a shared.js
      webpackConfig.plugins.push(
        new webpack.optimize.CommonsChunkPlugin({
          name: 'shared',
          filename: filenamePattern
        }))
    }
  }
  if (env === 'production' || env === 'compile') {
    if (rev) {
      webpackConfig.plugins.push(new WebpackManifest(publicPath, path.join(root.dist, root.dest)))
    }

    webpackConfig = {
      ...webpackConfig,
      mode: 'production'
    }
  }
  return webpackConfig
}
