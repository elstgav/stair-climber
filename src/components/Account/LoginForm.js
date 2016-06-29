import React from 'react'
import Helmet from 'react-helmet'

export default ({toggle}) => {
  return (
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
      <button type="submit">Sign In</button>&nbsp;or&nbsp;<a onClick={toggle}>Register</a>
    </form>
  )
}
