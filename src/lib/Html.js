import React, { PropTypes } from 'react'
import { renderToString } from 'react-dom/server'
import Helmet from 'react-helmet'


export default function Html({ content, data}) {
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
        <link rel="stylesheet" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
      </head>
      <body>
        <div className="hidden-xs-up" id="data" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
        <div id="app" dangerouslySetInnerHTML={{ __html: renderedContent }} />
        <script src="/app.js" charSet="UTF-8" />
      </body>
    </html>
  )
}

Html.propTypes = {
  content: PropTypes.node,
}
