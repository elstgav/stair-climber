import webpack from 'webpack'
import webpackConfig from '_/webpack/config.dev'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

export default {
  init(app) {
    if (process.env.NODE_ENV == 'production') return

    const compiler = webpack(webpackConfig)
    app.use(webpackDevMiddleware(compiler, {
      noInfo: true,
      publicPath: webpackConfig.output.publicPath
    }))
    app.use(webpackHotMiddleware(compiler))
  }
}
