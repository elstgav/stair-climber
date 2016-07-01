import React from 'react'
import { getFirebase } from 'src/lib/firebaseAdapter'
import axios from 'axios'

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
        axios.get('/account/logout')
          .then(_response => {
            location.pathname = '/account' // force server refresh so they cannot navigate "back"
          })
      }, (error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <a className="btn btn-link pull-xs-right" onClick={this.signOut}>Sign Out</a>
    )
  }
}
