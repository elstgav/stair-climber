var base = require('./webpack.config.prod')

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

  plugins: [],

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
