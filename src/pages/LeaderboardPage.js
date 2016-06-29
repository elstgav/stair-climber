import React from 'react'
import Helmet from 'react-helmet'
import api from '_/src/lib/api'

import {
  Leaderboard
} from '_/src/components'


export default React.createClass({
  getInitialState: function() {
    return {leaders: []};
  },
  componentWillMount() {
    api
      .get('/leaderboard/2016/01/')
      .then(({ data }) => {this.setState({leaders: data})})
  },

  render() {
    return (
      <div>
        <Helmet title='Leaderboard'/>
        <h1>StepUp</h1>
        <Leaderboard leaders={this.state.leaders}/>
      </div>
    )
  }
})

