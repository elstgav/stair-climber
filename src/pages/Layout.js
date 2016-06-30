import React from 'react'
import Helmet from 'react-helmet'
import Config from 'src/config'
import { Logout } from './../containers/Logout'

const Layout = ({ children }) =>
  <div id="AppContainer">
    <Helmet {...Config.app.head} />
    <Logout />
    {children}
  </div>

Layout.propTypes = {
  children: React.PropTypes.object,
}

export { Layout }
