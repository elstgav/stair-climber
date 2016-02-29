import React from 'react'
import { connect } from 'react-redux'
import { DevTools } from '_/client/components'


export default connect()(
  React.createClass({
    propTypes: {
      children: React.PropTypes.object.isRequired
    },

    reduxDevTools() {
      if (process.env.NODE_ENV != 'development') return
      if (window.devToolsExtension) return
      return (<DevTools />)
    },

    render() {
      return (
        <div id='AppContainer'>
          { this.props.children }
          { this.reduxDevTools() }
        </div>
      )
    }
  })
)
