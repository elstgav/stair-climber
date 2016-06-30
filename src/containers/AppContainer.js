import React from 'react'
import Helmet from 'react-helmet'
import Config from 'src/config'


const AppContainer = ({ children }) =>
  <div id="AppContainer">
    <Helmet {...Config.app.head} />
    {children}
  </div>

AppContainer.propTypes = {
  children: React.PropTypes.object,
}

export default AppContainer
