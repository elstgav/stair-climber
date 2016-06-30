import React from 'react'

const RegisterForm = ({ handleFormSubmit, handleInputChange, toggle }) =>
  <form onSubmit={handleFormSubmit}>
    <div>
      <label>Name</label>
    </div>
    <div>
      <input onChange={handleInputChange} name="name" type="text" />
    </div>
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
    <div>
      <label>Home Floor</label>
    </div>
    <div>
      <input onChange={handleInputChange} name="homefloor" type="text" />
    </div>
    <button type="submit">Register</button>&nbsp;or&nbsp;<a onClick={toggle}>Sign in</a>
  </form>

RegisterForm.propTypes = {
  handleFormSubmit: React.PropTypes.func.isRequired,
  handleInputChange: React.PropTypes.func.isRequired,
  toggle: React.PropTypes.func.isRequired,
}

export { RegisterForm }
