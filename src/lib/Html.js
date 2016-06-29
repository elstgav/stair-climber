import React, { PropTypes } from 'react'
import { renderToString } from 'react-dom/server'
import Helmet from 'react-helmet'


export default function Html({ content }) {
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
        <div id="app" dangerouslySetInnerHTML={{ __html: renderedContent }}/>
        <script src="/app.js" charSet="UTF-8" />
      </body>
    </html>
  )
}

Html.propTypes = {
  content: PropTypes.node,
}
