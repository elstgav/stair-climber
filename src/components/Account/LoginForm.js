import React from 'react'

const LoginForm = ({ handleFormSubmit, handleInputChange, toggle }) =>
  <form onSubmit={handleFormSubmit}>
    <div>
      <label>Email</label>
    </div>
    <div>
      <input onChange={handleInputChange} name="email" type="email" />
    </div>
    <div>
      <label>Password</label>
    </div>
    <div>
      <input onChange={handleInputChange} name="password" type="password" />
    </div>
    <button type="submit">Sign In</button>&nbsp;or&nbsp;<a onClick={toggle}>Register</a>
  </form>

LoginForm.propTypes = {
  handleFormSubmit: React.PropTypes.func.isRequired,
  handleInputChange: React.PropTypes.func.isRequired,
  toggle: React.PropTypes.func.isRequired,
}

export default LoginForm
