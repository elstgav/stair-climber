import React from 'react'
import { Login } from './Login'
import { Register } from './Register'
import { getFirebase } from 'src/lib/firebaseAdapter'
import { browserHistory } from 'react-router'

export class LoginRegister extends React.Component {
  constructor(props) {
    super(props)
    this.state = { login: true }
  }

  componentDidMount() {
    getFirebase().auth().onAuthStateChanged((user) => {
      if (user) {
        browserHistory.push('/')
      }
    })
  }

  toggle = (e) => {
    e.preventDefault()
    const isLoginPage = this.state.login
    this.setState({ login: !isLoginPage })
  }

  render() {
    return (
      <div>
        {(this.state.login) ? <Login toggle={this.toggle} /> : <Register toggle={this.toggle} />}
      </div>
    )
  }
}
