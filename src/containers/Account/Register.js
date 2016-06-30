import React from 'react'
import Helmet from 'react-helmet'
import { RegisterForm, ErrorMessageBanner } from 'src/components'
import { getFirebase } from 'src/lib/firebaseAdapter'
import { browserHistory } from 'react-router'

export default class extends React.Component {
  static propTypes = {
    toggle: React.PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      fields: {
        name: '',
        email: '',
        password: '',
        homefloor: '',
      },
      error: false,
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    const self = this
    getFirebase().auth()
      .createUserWithEmailAndPassword(this.state.fields.email, this.state.fields.password)
      .then(() => {
        browserHistory.push('/')
      })
      .catch(error => {
        self.setState({ error: error.message })
      })
  }

  handleInputChange = (e) => {
    const field = e.target.name
    const fields = this.state.fields
    fields[field] = e.target.value
    this.setState({ fields })
  };

  render() {
    return (
      <div>
        <Helmet title="Register" />
        <RegisterForm handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange} toggle={this.props.toggle} />
        {this.state.error && <ErrorMessageBanner errorMessage={this.state.error} />}
      </div>
    )
  }
}
