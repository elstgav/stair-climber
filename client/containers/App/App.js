import React from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import Config from '_/config'


export default connect()(
  React.createClass({
    propTypes: {
      children: React.PropTypes.object.isRequired
    },
    render() {
      return (
        <div id='AppContainer'>
          <Helmet {...Config.app.head}/>
          { this.props.children }
        </div>
      )
    }
  })
)
