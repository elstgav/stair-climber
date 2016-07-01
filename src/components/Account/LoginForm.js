import React from 'react'

const LoginForm = ({ handleFormSubmit, handleInputChange, toggle }) =>
  <form onSubmit={handleFormSubmit}>
    <fieldset className="form-group">
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        className="form-control"
        onChange={handleInputChange}
      />
    </fieldset>
    <fieldset className="form-group">
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        className="form-control"
        onChange={handleInputChange}
      />
    </fieldset>
    <button type="submit" className="btn btn-primary">Sign In</button>
    {" or "}
    <a onClick={toggle}>Register</a>
  </form>

LoginForm.propTypes = {
  handleFormSubmit: React.PropTypes.func.isRequired,
  handleInputChange: React.PropTypes.func.isRequired,
  toggle: React.PropTypes.func.isRequired,
}

export { LoginForm }
