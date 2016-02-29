var webpack = require('webpack')
var CleanPlugin = require('clean-webpack-plugin')
var path = require('path')

module.exports = {
  cache: true,
  progress: true,

  context: path.resolve(__dirname, '..'),

  devtool: 'source-map',

  entry: './client/index.js',

  output: {
    path: './static/dist/',
    publicPath: '/dist/',
    filename: 'app.js'
  },

  plugins: [
    // Clean
    new CleanPlugin(['static/dist/']),

    // Optimize
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false
      }
    }),

    // Meta, debug info.
    new webpack.DefinePlugin({
      'process.env': {
        // Signal production mode for React JS libs.
        NODE_ENV: JSON.stringify('production')
      }
    })
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
