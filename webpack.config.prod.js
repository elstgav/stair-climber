var webpack = require('webpack')
var CleanPlugin = require('clean-webpack-plugin')
module.exports = {
  cache: true,

  context: __dirname,

  devtool: 'source-map',

  entry: './client/app.jsx',

  output: {
    path: './public',
    publicPath: '/',
    filename: 'app.js'
  },

  plugins: [
    // Clean
    new CleanPlugin(['public']),

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
        loader: 'babel',
        query: {
          presets:  ['react', 'es2015']
        }
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  }
}
