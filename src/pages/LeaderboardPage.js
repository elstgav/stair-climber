import React from 'react'
import Helmet from 'react-helmet'
import api from '_/src/lib/api'

/* import {
 *   Leaderboard
 * } from '_/src/components'*/

const LeaderboardListElement = React.createClass({
  render() {
    return (
      <tr>
        <td>{this.props.leader.rank}</td>
        <td>{this.props.leader.name}</td>
        <td>{this.props.leader.elevation}</td>
      </tr>
    )
  }
})

const LeaderboardList = React.createClass({
  render() {
    return (
      <table>
        <tbody>
        {this.props.leaders.map((leader, index) =>
          <LeaderboardListElement rank={index} leader={leader} />)
        }
        </tbody>
      </table>
    )
  }
})

const Leaderboard = React.createClass({
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <LeaderboardList leaders={this.props.leaders} />
      </div>
    )
  }
})


export default React.createClass({

  getInitialState() {
    /* return {leaders: []}*/
    return {
      monthlyLeaders: [
        {
          name: "Pavel Sorokin",
          elevation: 4800
        }
      ],
      weeklyLeaders: []
    }
  },

  componentWillMount() {
    /* api
     *   .get('/leaderboard/2016/01/')
     *   .then(({ data }) => {this.setState({leaders: data})})*/
  },

  render() {
    return (
      <div>
        <Helmet title='Leaderboard'/>
        <Leaderboard title="March leaderboard" leaders={this.state.monthlyLeaders}/>
        <Leaderboard title="Weekly leaders" leaders={this.state.weeklyLeaders}/>
      </div>
    )
  }

})
