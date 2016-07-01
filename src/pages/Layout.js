import React from 'react'
import Helmet from 'react-helmet'
import Config from 'src/config'

const Layout = ({ children }) =>
  <div id="AppContainer" className="container">
    <Helmet {...Config.app.head} />
    {children}
  </div>

Layout.propTypes = {
  children: React.PropTypes.object,
}

export { Layout }
