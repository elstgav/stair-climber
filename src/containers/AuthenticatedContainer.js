import React from 'react'
import { Logo } from 'src/components'
import { Logout } from './Logout'

export function AuthenticatedContainer({ children }) {
  return (
    <div>
      <header>
        <nav className="navbar navbar-light navbar-full">
          <div className="container">
            <Logo />
            <Logout />
          </div>
        </nav>
      </header>
      {children}
    </div>
  )
}

AuthenticatedContainer.propTypes = {
  children: React.PropTypes.object,
}
