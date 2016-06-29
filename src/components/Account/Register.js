import React from 'react'
import Helmet from 'react-helmet'

export default class extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <form>
          <div>
            <label>Name</label>
          </div>
          <div>
            <input type="text"/>
          </div>
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
          <div>
            <label>Home Floor</label>
          </div>
          <div>
            <input type="text"/>
          </div>
          <button type="submit">Sign Up</button><span>&nbsp;or Sign in</span>
        </form>
      </div>
    )
  }
}
