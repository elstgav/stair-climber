const path = require('path')
const webpack = require('webpack')

module.exports = {
  context: __dirname,
  devtool: 'source-map',

  entry: './app/index.jsx',

  output: {
    path: './public',
    publicPath: '/',
    filename: 'app-bundle.js'
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    })
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.css'],
    root: [
      path.join(__dirname, 'node_modules'),
      path.join(__dirname, 'app')
    ]
  }
}
