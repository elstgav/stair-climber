import React from 'react'
import Helmet from 'react-helmet'
import {LoginForm} from 'src/components'

export default class extends React.Component {
  constructor(props) {
    super(props)
  }

  handleFormSubmit = () => {

  }

  render() {
    return (
      <div>
        <Helmet title='Login'/>
        <LoginForm handleFormSubmit={this.handleFormSubmit} toggle={this.props.toggle} />
      </div>
    )
  }
}
