import React from 'react'
import Helmet from 'react-helmet'
import { LoginForm, ErrorMessageBanner } from 'src/components'
import { getFirebase } from 'src/lib/firebaseAdapter'
import { browserHistory } from 'react-router'
import axios from 'axios'


export class Login extends React.Component {
  static propTypes = {
    toggle: React.PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      fields: {
        email: '',
        password: '',
      },
      error: false,
    }
  }

  handleFormSubmit = (event) => {
    event.preventDefault()

    getFirebase()
      .auth()
      .signInWithEmailAndPassword(this.state.fields.email, this.state.fields.password)
      .then(user => {
        user.getToken(true)
        .then((idToken) => {
          axios.post('/account/login', {
            idToken,
          })
          .then(_response => {
            browserHistory.push('/')
          })
        })
      })
      .catch(error => {
        this.setState({ error: error.message })
      })
  }

  handleInputChange = (event) => {
    const field   = event.target.name
    const fields  = this.state.fields
    fields[field] = event.target.value

    this.setState({ fields })
  }


  render() {
    return (
      <div>
        <Helmet title="Login" />
        <LoginForm
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          toggle={this.props.toggle}
        />
        {this.state.error && <ErrorMessageBanner errorMessage={this.state.error} />}
      </div>
    )
  }
}
