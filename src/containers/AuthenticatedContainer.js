import React from 'react'
import { Logout } from './Logout'

const AuthenticatedContainer = ({ children }) =>
  <div>
    <Logout />
    {children}
  </div>

AuthenticatedContainer.propTypes = {
  children: React.PropTypes.object,
}

export { AuthenticatedContainer }
