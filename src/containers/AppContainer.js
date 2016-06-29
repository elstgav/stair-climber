import React from 'react'
import Helmet from 'react-helmet'
import Config from '_/src/config'


export default ({children}) => {
  return (
    <div id='AppContainer'>
      <Helmet {...Config.app.head}/>
      { children }
    </div>
  )
}
