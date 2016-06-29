import React, { Component, PropTypes } from 'react'
import { renderToString } from 'react-dom/server'
import Helmet from 'react-helmet'


export default class Html extends Component {
  static propTypes = {
    content: PropTypes.node,
  }

  render() {
    const { content } = this.props
    const renderedContent = content ? renderToString(content) : ''
    const head = Helmet.rewind()

    return (
      <html lang="en-us">
        <head>
          {head.base.toComponent()}
          {head.title.toComponent()}
          {head.meta.toComponent()}
          {head.link.toComponent()}

          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{ __html: renderedContent }} />
          {head.script.toComponent()}
        </body>
      </html>
    )
  }
}
