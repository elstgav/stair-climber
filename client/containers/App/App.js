import React from 'react'
import { connect } from 'react-redux'


export default connect()(
  React.createClass({
    propTypes: {
      children: React.PropTypes.object.isRequired
    },
    render() {
      return (
        <div id='AppContainer'>
          { this.props.children }
        </div>
      )
    }
  })
)
