var base = require('./webpack.config.prod')
var webpack = require('webpack')

module.exports = {
  cache: true,

  context: base.context,

  devtool: 'cheap-module-eval-source-map',

  entry: [
    // Setup hot module loading
    'webpack-dev-server/client?http://localhost:8080',
    // "only" prevents reload on syntax errors
    'webpack/hot/only-dev-server',

    base.entry
  ],

  output: base.output,

  plugins: [
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
      loaders: [
        'react-hot',
        'babel?presets[]=react,presets[]=es2015'
      ]
    })
  },

  resolve: base.resolve
}
