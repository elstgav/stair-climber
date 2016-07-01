import React from 'react'

const RegisterForm = ({ handleFormSubmit, handleInputChange, toggle }) =>
  <form onSubmit={handleFormSubmit}>
    <fieldset className="form-group">
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        className="form-control"
        onChange={handleInputChange}
      />
    </fieldset>
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
    <fieldset className="form-group">
      <label htmlFor="homefloor">Home Floor</label>
      <input
        id="homefloor"
        name="homefloor"
        type="text"
        className="form-control"
        onChange={handleInputChange}
      />
    </fieldset>
    <button type="submit" className="btn btn-primary">Register</button>
    {" or "}
    <a onClick={toggle}>Sign in</a>
  </form>

RegisterForm.propTypes = {
  handleFormSubmit: React.PropTypes.func.isRequired,
  handleInputChange: React.PropTypes.func.isRequired,
  toggle: React.PropTypes.func.isRequired,
}

export { RegisterForm }
