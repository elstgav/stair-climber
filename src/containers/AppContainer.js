import React from 'react'
import Helmet from 'react-helmet'
import Config from 'src/config'


export default class extends React.Component{
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id='AppContainer'>
        <Helmet {...Config.app.head}/>
        { this.props.children }
      </div>
    )
  }
}
