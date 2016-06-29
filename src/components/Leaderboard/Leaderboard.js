import React from 'react'

const FEET_PER_FLIGHT = 13

var elevation = (flights) => {
  return `${(flights * FEET_PER_FLIGHT).toLocaleString()} ft`
}

const LeaderboardListElement = React.createClass({
  render() {
    return (
      <tr>
        <td>{this.props.rank}</td>
        <td>{this.props.leader.name}</td>
        <td>{elevation(this.props.leader.total_flights)}</td>
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
             <LeaderboardListElement rank={index + 1} leader={leader} />)}
        </tbody>
      </table>
    )
  }
})

export default React.createClass({
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <LeaderboardList leaders={this.props.leaders} />
      </div>
    )
  }
})
