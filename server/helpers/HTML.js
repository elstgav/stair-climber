import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom/server';
import serialize from 'serialize-javascript';
import Helmet from 'react-helmet';


export default class HTML extends Component {
  static propTypes = {
    content: PropTypes.node,
    store:   PropTypes.object
  };

  render() {
    const {content, store} = this.props;
    const renderedContent = content ? ReactDOM.renderToString(content) : '';
    const head = Helmet.rewind();

    return (
      <html lang="en-us">
        <head>
          {head.base.toComponent()}
          {head.title.toComponent()}
          {head.meta.toComponent()}
          {head.link.toComponent()}
          {head.script.toComponent()}

          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{__html: renderedContent}}/>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.__INITIAL_STATE__=${serialize(store.getState())};`
            }}
            charSet="UTF-8"
            />
          <script src="/dist/app.js" charSet="UTF-8"/>
        </body>
      </html>
    );
  }
}
