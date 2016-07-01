import React from 'react'
import { Login } from './Login'
import { Register } from './Register'
import { Logo } from 'src/components'

export class LoginRegister extends React.Component {
  constructor(props) {
    super(props)
    this.state = { login: true }
  }

  toggle = (e) => {
    e.preventDefault()
    const isLoginPage = this.state.login
    this.setState({ login: !isLoginPage })
  }

  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-light navbar-full">
            <div className="container">
              <Logo />
            </div>
          </nav>
        </header>
        <div className="container">
          {(this.state.login) ? <Login toggle={this.toggle} /> : <Register toggle={this.toggle} />}
        </div>
      </div>
    )
  }
}
