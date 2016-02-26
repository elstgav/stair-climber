var webpack = require('webpack')
var CleanPlugin = require('clean-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  cache: true,

  context: __dirname,

  devtool: 'source-map',

  entry: './client/app.jsx',

  output: {
    path: './public',
    publicPath: '/',
    filename: 'app.[hash].js'
  },

  plugins: [
    // Clean
    new CleanPlugin(['public']),

    // Optimize
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false
      }
    }),

    // Extract CSS
    new ExtractTextPlugin('style.[hash].css'),

    // Meta, debug info.
    new webpack.DefinePlugin({
      'process.env': {
        // Signal production mode for React JS libs.
        NODE_ENV: JSON.stringify('production')
      }
    }),

    // Generate HTML
    new HtmlWebpackPlugin({
      template: './client/index.html'
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
      },
      {
        test: /\.scss$/,
        loaders: ExtractTextPlugin.extract('style', 'css', 'sass')
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  }
}
