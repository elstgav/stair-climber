import React from 'react'
import { connect } from 'react-redux'
import DevTools from '../components/DevTools'


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
        <div>
          { this.props.children }
          { this.reduxDevTools() }
        </div>
      )
    }
  })
)
