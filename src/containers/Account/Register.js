import React from 'react'
import Helmet from 'react-helmet'
import {RegisterForm} from '_/src/components'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fields: {
        name: '',
        email: '',
        password: '',
        homefloor: ''
      }
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.fields)
  }

  handleInputChange = (e) => {
    const field = e.target.name
    let fields = this.state.fields
    fields[field] = e.target.value
    this.setState[{fields: fields}]
  };

  render() {
    return (
      <div>
        <Helmet title='Register'/>
        <RegisterForm handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange} toggle={this.props.toggle} />
      </div>
    )
  }
}
