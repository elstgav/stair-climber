import React from 'react'
import Helmet from 'react-helmet'

export default ({handleFormSubmit, handleInputChange, toggle}) => {
  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label>Email</label>
      </div>
      <div>
        <input onChange={handleInputChange} name="email" type="email"/>
      </div>
      <div>
        <label>Password</label>
      </div>
      <div>
        <input onChange={handleInputChange} name="password" type="password"/>
      </div>
      <button type="submit">Sign In</button>&nbsp;or&nbsp;<a onClick={toggle}>Register</a>
    </form>
  )
}
