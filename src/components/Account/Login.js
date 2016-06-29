import React from 'react'
import Helmet from 'react-helmet'

export default class extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Helmet title='Login'/>
        <form>
          <div>
            <label>Email</label>
          </div>
          <div>
            <input type="email"/>
          </div>
          <div>
            <label>Password</label>
          </div>
          <div>
            <input type="password"/>
          </div>
          <button type="submit">Sign In</button>&nbsp;or&nbsp;<a onClick={this.props.toggle}>Register</a>
        </form>
      </div>
    )
  }
}
