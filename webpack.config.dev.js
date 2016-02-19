var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var base = require('./webpack.config')

module.exports = {
  cache: true,

  context: base.context,

  devtool: 'eval',

  entry: [
    // Setup hot module loading
    'webpack-dev-server/client?http://localhost:8080',
    // "only" prevents reload on syntax errors
    'webpack/hot/only-dev-server',

    base.entry
  ],

  output: {
    path:       base.output.path,
    publicPath: base.output.publicPath,
    filename:   'app.js'
  },

  plugins: [
    // Extract CSS
    new ExtractTextPlugin('style.[hash].css'),

    // Generate HTML
    new HtmlWebpackPlugin({
      template: './client/index.html'
    })
  ],

  module: {
    loaders: base.module.loaders.concat({
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: [
        'react-hot',
        'babel?presets[]=react,presets[]=es2015'
      ]
    })
  },

  resolve: base.resolve
}
