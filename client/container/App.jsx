import React from 'react'
import { connect } from 'react-redux'

const App = React.createClass({
  propTypes: {
    children: React.PropTypes.object.isRequired
  },

  render() {
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
})

export default connect()(App)
