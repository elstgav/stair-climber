import React from 'react'
import { getFirebase } from 'src/lib/firebaseAdapter'

export class Logout extends React.Component {
  compnentDidMount() {
    getFirebase()
  }

  signOut = (e) => {
    e.preventDefault()
    getFirebase()
      .auth()
      .signOut()
      .then(() => {
        location.pathname = '/account' // force server refresh so they cannot navigate "back"
      }, (error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <a onClick={this.signOut}>Sign Out</a>
    )
  }
}
