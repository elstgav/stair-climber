import React from 'react'

class DataWrapper extends React.Component {

  getChildContext() {
    return {
      data: this.props.data
    }
  }

  render () {
    return this.props.children
  }
}

DataWrapper.childContextTypes = {
  data: React.PropTypes.object,
}

DataWrapper.propTypes = {
  children: React.PropTypes.object,
  data: React.PropTypes.object,
}

export { DataWrapper }
