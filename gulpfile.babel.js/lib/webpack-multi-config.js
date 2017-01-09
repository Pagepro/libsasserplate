import config from '../config'

import path from 'path'
import pathToUrl from './pathToUrl'
import webpack from 'webpack'
import WebpackManifest from './webpackManifest'

const configJs = config.tasks.js

function webpackMultiConfig (env) {
  if (!configJs) return

  const jsSrc = path.resolve(config.root.src, configJs.src)
  const jsDest = path.resolve(path.join(env === 'production' ? config.root.dist : '', configJs.dest))

  const publicPath = pathToUrl(configJs.dest, '/')
  const extensions = configJs.extensions.map((extension) => `.${extension}`)

  const rev = config.tasks.production.rev && env === 'production'
  const filenamePattern = rev ? '[name]-[hash].js' : '[name].js'
  const webpackConfig = {
    context: jsSrc,
    plugins: [],
    resolve: {
      root: jsSrc,
      extensions: [''].concat(extensions)
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: configJs.babel
        }
      ]
    }
  }

  if (env === 'development') {
    webpackConfig.devtool = 'inline-source-map'

    // Create new entries object with webpack-hot-middleware added
    for (var key in configJs.entries) {
      var entry = configJs.entries[key]
      configJs.entries[key] = ['webpack-hot-middleware/client?&reload=true'].concat(entry)
    }

    webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin())
  }

  if (env !== 'test') {
    // Karma doesn't need entry points or output settings
    webpackConfig.entry = configJs.entries

    webpackConfig.output = {
      path: path.normalize(jsDest),
      filename: filenamePattern,
      publicPath: publicPath
    }

    if (configJs.extractSharedJs) {
      // Factor out common dependencies into a shared.js
      webpackConfig.plugins.push(
        new webpack.optimize.CommonsChunkPlugin({
          name: 'shared',
          filename: filenamePattern
        })
      )
    }
  }
  if (env === 'production' || env === 'compile') {
    if (rev) {
      webpackConfig.plugins.push(new WebpackManifest(publicPath, path.join(config.root.dist, config.root.dest)))
    }

    webpackConfig.plugins.push(
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        },
        sourceMap: false,
        comments: false,
        minimize: true,
        mangle: true
      }),
      new webpack.NoErrorsPlugin()
    )
  }

  return webpackConfig
}

export default webpackMultiConfig
