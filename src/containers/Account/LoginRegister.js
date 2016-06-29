import React from 'react'
import Helmet from 'react-helmet'
import {Login, Register} from '_/src/components'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {login: true}
  }

  render() {
    return (
      <div>
        {(this.state.login) ? <Login /> : <Register /> }
      </div>
    )
  }
}
