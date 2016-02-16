var _ = require('lodash')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var prodConfig = require('./webpack.config')

module.exports = _.extend({}, prodConfig, {
  devtool: 'eval',

  entry: [
    // Setup hot module loading
    'webpack-dev-server/client?http://localhost:8080',
    // "only" prevents reload on syntax errors
    'webpack/hot/only-dev-server',
    // our entry file
    './app/index.jsx'
  ],

  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html'
    })
  ],

  module: {
    loaders: prodConfig.module.loaders.concat({
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: [
        'react-hot',
        'babel?presets[]=react,presets[]=es2015'
      ]
    })
  }
})
