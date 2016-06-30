const base = require('./webpack.config.prod')
const webpack = require('webpack')
const _ = require('lodash')
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = _.extend({}, base, {
  devtool: 'cheap-module-eval-source-map',

  entry: [
    // Setup hot module loading
    'webpack-hot-middleware/client',
    // "only" prevents reload on syntax errors
    'webpack/hot/only-dev-server',

    base.entry,
  ],

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new ExtractTextPlugin('style.css', { allChunks: true }),
  ],

  module: {
    loaders: base.module.loaders.concat(
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel?presets[]=react-hmre',
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader'),

      },
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        loader: 'url-loader',
      }
    ),
  },
})
