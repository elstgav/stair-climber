var base = require('./webpack.config.prod')
var webpack = require('webpack')
var _ = require('lodash')

module.exports = _.extend({}, base, {
  devtool: 'cheap-module-eval-source-map',

  entry: [
    // Setup hot module loading
    'webpack-hot-middleware/client',
    // "only" prevents reload on syntax errors
    'webpack/hot/only-dev-server',

    base.entry
  ],

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ],

  module: {
    loaders: base.module.loaders.concat({
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel?presets[]=react-hmre'
    })
  }
})
